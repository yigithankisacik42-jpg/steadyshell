/**
 * SteadyShell Phrases - English B1 (Units 161-190)
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

// Unit 161: Gelecek Zaman
export const u161: EnglishPhraseUnit = {
    unitId: 161, title: "Gelecek Zaman", phrases: [
        { phrase: "I will call you later", meaning: "Seni sonra arayacağım", context: "Gelecek Zaman", example: "Don't worry, I will call you later.", pronunciation: "ay vil kol yu ley-tır" },
        { phrase: "I'm going to travel", meaning: "Seyahat edeceğim", context: "Plan", example: "I'm going to travel to Europe next summer.", pronunciation: "aym go-ying tu t-re-vıl" },
        { phrase: "It's going to rain", meaning: "Yağmur yağacak", context: "Tahmin", example: "Look at those clouds! It's going to rain.", pronunciation: "its go-ying tu reyn" },
        { phrase: "I'll be there", meaning: "Orada olacağım", context: "Söz", example: "Wait for me, I'll be there in five minutes.", pronunciation: "ayl bi der" },
        { phrase: "What are you doing tonight?", meaning: "Bu gece ne yapıyorsun?", context: "Plan", example: "What are you doing tonight? Want to see a movie?", pronunciation: "vat ar yu du-ing tu-nayt" },
        { phrase: "I'm meeting a friend", meaning: "Bir arkadaşla buluşuyorum", context: "Randevu", example: "I'm meeting a friend at 7 PM.", pronunciation: "aym mi-ting e f-rend" },
        { phrase: "The train leaves at 8", meaning: "Tren 8'de kalkıyor", context: "Tarife", example: "Hurry up! The train leaves at 8.", pronunciation: "dı t-reyn li-ivz et eyt" },
        { phrase: "I think he will win", meaning: "Bence o kazanacak", context: "Fikir", example: "He is very fast. I think he will win.", pronunciation: "ay tink hi vil vin" },
        { phrase: "I'll have a coffee", meaning: "Bir kahve alacağım", context: "Karar (Anlık)", example: "I'll have a coffee, please.", pronunciation: "ayl hev e ko-fi" },
        { phrase: "Are you going to stay?", meaning: "Kalacak mısın?", context: "Soru", example: "Are you going to stay here for long?", pronunciation: "ar yu go-ying tu s-tey" },
        { phrase: "I'll help you", meaning: "Sana yardım edeceğim", context: "Teklif", example: "That looks heavy. I'll help you.", pronunciation: "ayl help yu" },
        { phrase: "We will see", meaning: "Göreceğiz", context: "Belirsizlik", example: "Maybe it's true. We will see.", pronunciation: "vi vil si" },
        { phrase: "It won't be easy", meaning: "Kolay olmayacak", context: "Tahmin", example: "The test is hard. It won't be easy.", pronunciation: "it vount bi i-zi" },
        { phrase: "I'm flying tomorrow", meaning: "Yarın uçuyorum", context: "Plan (Kesin)", example: "I'm flying tomorrow to London.", pronunciation: "aym f-la-ying tu-mo-rou" },
        { phrase: "Will you open the door?", meaning: "Kapıyı açar mısın?", context: "Rica", example: "Will you open the door, please?", pronunciation: "vil yu o-pın dı dor" }
    ]
};

// Unit 162: Koşul Cümleleri 1
export const u162: EnglishPhraseUnit = {
    unitId: 162, title: "Koşul Cümleleri 1", phrases: [
        { phrase: "If it rains, I stay home", meaning: "Yağmur yağarsa evde kalırım", context: "Koşul", example: "If it rains, I usually stay home.", pronunciation: "if it reynz ay s-tey hom" },
        { phrase: "If I study, I pass", meaning: "Çalışırsam geçerim", context: "Koşul", example: "If I study hard, I pass the exam.", pronunciation: "if ay s-ta-di ay pas" },
        { phrase: "If you are late, call me", meaning: "Geç kalırsan beni ara", context: "Talimat", example: "If you are late, please call me.", pronunciation: "if yu ar ley-t kol mi" },
        { phrase: "Unless you hurry", meaning: "Acele etmezsen", context: "Koşul", example: "Unless you hurry, we will miss the bus.", pronunciation: "an-les yu ha-ri" },
        { phrase: "As long as it's free", meaning: "Bedava olduğu sürece", context: "Koşul", example: "I'll go as long as it's free.", pronunciation: "ez long ez its f-ri" },
        { phrase: "In case of emergency", meaning: "Acil durumda", context: "Hazırlık", example: "In case of emergency, use this door.", pronunciation: "in keys ov i-mör-cın-si" },
        { phrase: "If you help me", meaning: "Bana yardım edersen", context: "Pazarlık", example: "If you help me, I'll pay you.", pronunciation: "if yu help mi" },
        { phrase: "If she comes", meaning: "Eğer gelirse", context: "Olasılık", example: "If she comes, we can start.", pronunciation: "if şi kamz" },
        { phrase: "Provided that you agree", meaning: "Kabul etmen şartıyla", context: "Şart", example: "I'll do it provided that you agree.", pronunciation: "p-ro-vay-did det yu e-g-ri" },
        { phrase: "Suppose it happens", meaning: "Diyelim ki oldu", context: "Varsayım", example: "Suppose it happens, what then?", pronunciation: "sı-pouz it he-pınz" },
        { phrase: "What if he knows?", meaning: "Ya biliyorsa?", context: "Endişe", example: "What if he knows the truth?", pronunciation: "vat if hi nouz" },
        { phrase: "If I have enough money", meaning: "Eğer yeterli param olursa", context: "Plan", example: "If I have enough money, I'll buy a car.", pronunciation: "if ay hev i-naf ma-ni" },
        { phrase: "If you see him", meaning: "Onu görürsen", context: "Mesaj", example: "If you see him, say hi.", pronunciation: "if yu si him" },
        { phrase: "Unless I'm mistaken", meaning: "Yanılmıyorsam", context: "Düzeltme", example: "Unless I'm mistaken, we met before.", pronunciation: "an-les aym mis-tey-kın" },
        { phrase: "On condition that", meaning: "Şartıyla", context: "Anlaşma", example: "I'll lend it on condition that you take care.", pronunciation: "on kon-di-şın det" }
    ]
};

// Unit 163: Koşul Cümleleri 2
export const u163: EnglishPhraseUnit = {
    unitId: 163, title: "Koşul Cümleleri 2", phrases: [
        { phrase: "If I were you", meaning: "Senin yerinde olsaydım", context: "Tavsiye", example: "If I were you, I would go to the doctor.", pronunciation: "if ay vör yu" },
        { phrase: "I would travel more", meaning: "Daha çok seyahat ederdim", context: "Hayal", example: "If I were rich, I would travel more.", pronunciation: "ay vud t-re-vıl mor" },
        { phrase: "If it were easy", meaning: "Eğer kolay olsaydı", context: "Gerçek dışı", example: "If it were easy, everyone would do it.", pronunciation: "if it vör i-zi" },
        { phrase: "What would you do?", meaning: "Ne yapardın?", context: "Soru", example: "If you won the lottery, what would you do?", pronunciation: "vat vud yu du" },
        { phrase: "I wish I knew", meaning: "Keşke bilseydim", context: "Pişmanlık", example: "I wish I knew how to help you.", pronunciation: "ay viş ay nu" },
        { phrase: "If I had a car", meaning: "Eğer arabam olsaydı", context: "Durum", example: "If I had a car, I'd drive you home.", pronunciation: "if ay hed e kar" },
        { phrase: "It would be better", meaning: "Daha iyi olurdu", context: "Fikir", example: "It would be better if you stayed.", pronunciation: "it vud bi be-tır" },
        { phrase: "If only I were there", meaning: "Keşke orada olsaydım", context: "Arzu", example: "If only I were there with you.", pronunciation: "if on-li ay vör der" },
        { phrase: "Imagine being famous", meaning: "Ünlü olduğunu hayal et", context: "Hayal", example: "Imagine being famous for a day.", pronunciation: "i-me-cin bi-ing fey-mıs" },
        { phrase: "I would help if I could", meaning: "Elimden gelse yardım ederdim", context: "Niyet", example: "I would help if I could, but I'm busy.", pronunciation: "ay vud help if ay kud" },
        { phrase: "What if we failed?", meaning: "Ya başarısız olsaydık?", context: "Korku", example: "What if we failed? What then?", pronunciation: "vat if vi fey-ıld" },
        { phrase: "If she were here", meaning: "O burada olsaydı", context: "Eksiklik", example: "If she were here, she would know what to do.", pronunciation: "if şi vör hi-ır" },
        { phrase: "Supposing you were wrong", meaning: "Diyelim ki yanıldın", context: "Tartışma", example: "Supposing you were wrong, would you admit it?", pronunciation: "sı-pou-zing yu vör rong" },
        { phrase: "I'd rather stay", meaning: "Kalmayı tercih ederim", context: "Tercih", example: "I'd rather stay home tonight.", pronunciation: "ayd ra-dır s-tey" },
        { phrase: "It's time we left", meaning: "Gitme vaktimiz geldi", context: "Gereklilik", example: "It's late. It's time we left.", pronunciation: "its taym vi left" }
    ]
};

// Unit 164: Passive Voice
export const u164: EnglishPhraseUnit = {
    unitId: 164, title: "Passive Voice", phrases: [
        { phrase: "The door is locked", meaning: "Kapı kilitli", context: "Durum", example: "The door is locked every night.", pronunciation: "dı dor iz lok-t" },
        { phrase: "It was made in China", meaning: "Çin'de yapıldı", context: "Üretim", example: "My phone was made in China.", pronunciation: "it vaz meyd in çay-na" },
        { phrase: "English is spoken here", meaning: "Burada İngilizce konuşulur", context: "Genel", example: "English is spoken in almost every country.", pronunciation: "İNg-liş iz s-po-kın hi-ır" },
        { phrase: "The house was built in 1990", meaning: "Ev 1990'da inşa edildi", context: "Tarih", example: "The house was built in 1990 by my grandfather.", pronunciation: "dı haus vaz bilt in nayn-tin nayn-ti" },
        { phrase: "They were arrested", meaning: "Tutuklandılar", context: "Olay", example: "The suspects were arrested yesterday.", pronunciation: "dey vör e-res-tid" },
        { phrase: "It is being repaired", meaning: "Tamir ediliyor", context: "Süreç", example: "My car is being repaired right now.", pronunciation: "it iz bi-ing ri-pe-ırd" },
        { phrase: "The book was written by", meaning: "Kitap ... tarafından yazıldı", context: "Eser", example: "The book was written by a famous author.", pronunciation: "dı buk vaz ri-tın bay" },
        { phrase: "You will be notified", meaning: "Bilgilendirileceksiniz", context: "Gelecek", example: "You will be notified once it's ready.", pronunciation: "yu vil bi no-ti-fayd" },
        { phrase: "Mistakes were made", meaning: "Hatalar yapıldı", context: "Sorumluluk", example: "Mistakes were made during the process.", pronunciation: "mis-teyks vör meyd" },
        { phrase: "The song was composed", meaning: "Şarkı bestelendi", context: "Sanat", example: "The song was composed in 1980.", pronunciation: "dı song vaz kom-pou-zd" },
        { phrase: "It has been found", meaning: "Bulundu", context: "Sonuç", example: "The lost key has been found.", pronunciation: "it hez bi-in fa-und" },
        { phrase: "He was born in", meaning: "...'da doğdu", context: "Biyografi", example: "He was born in Istanbul.", pronunciation: "hi vaz born in" },
        { phrase: "The problem is solved", meaning: "Problem çözüldü", context: "Durum", example: "Don't worry, the problem is solved.", pronunciation: "dı p-rob-lım iz sol-vd" },
        { phrase: "Rules must be followed", meaning: "Kurallara uyulmalıdır", context: "Kural", example: "Rules must be followed by everyone.", pronunciation: "ru-ulz mast bi fo-loud" },
        { phrase: "To be honest", meaning: "Dürüst olmak gerekirse", context: "Deyim", example: "To be honest, it was hidden better.", pronunciation: "tu bi o-nist" }
    ]
};

// Unit 165: Reported Speech
export const u165: EnglishPhraseUnit = {
    unitId: 165, title: "Reported Speech", phrases: [
        { phrase: "He said that he was tired", meaning: "Yorgun olduğunu söyledi", context: "Aktarma", example: "He said that he was tired and wanted to sleep.", pronunciation: "hi sed det hi vaz ta-yırd" },
        { phrase: "She told me she liked it", meaning: "Onu sevdiğini söyledi", context: "Aktarma", example: "She told me she liked the gift.", pronunciation: "şi told mi şi layk-t it" },
        { phrase: "They asked where it was", meaning: "Nerede olduğunu sordular", context: "Soru Aktarma", example: "They asked where the station was.", pronunciation: "dey ask-t ver it vaz" },
        { phrase: "I wondered if she knew", meaning: "Bilip bilmediğini merak ettim", context: "Düşünce", example: "I wondered if she knew the truth.", pronunciation: "ay van-dırd if şi nu" },
        { phrase: "He encouraged me to go", meaning: "Beni gitmeye teşvik etti", context: "Tavsiye", example: "He encouraged me to go to college.", pronunciation: "hi en-ka-rıc-d mi tu gou" },
        { phrase: "She refused to help", meaning: "Yardım etmeyi reddetti", context: "Olay", example: "She refused to help with the cleaning.", pronunciation: "şi ri-fyu-zd tu help" },
        { phrase: "They promised to come", meaning: "Gelmeye söz verdiler", context: "Söz", example: "They promised to come to the party.", pronunciation: "dey p-ro-mis-d tu kam" },
        { phrase: "He denied the stolen car", meaning: "Çalınan arabayı reddetti (inkar etti)", context: "İnkar", example: "He denied stealing the car.", pronunciation: "hi di-nayd dı s-to-lın kar" },
        { phrase: "I suggest staying here", meaning: "Burada kalmayı öneririm", context: "Öneri", example: "I suggest staying here tonight.", pronunciation: "ay sa-ce-st s-te-ying hi-ır" },
        { phrase: "He reminded me to call", meaning: "Aramamı hatırlattı", context: "Hatırlatma", example: "He reminded me to call my mom.", pronunciation: "hi ri-mayn-did mi tu kol" },
        { phrase: "She explained how it works", meaning: "Nasıl çalıştığını açıkladı", context: "Açıklama", example: "She explained how the machine works.", pronunciation: "şi eks-p-leynd hau it vör-ks" },
        { phrase: "They invited us", meaning: "Bizi davet ettiler", context: "Davet", example: "They invited us to their wedding.", pronunciation: "dey in-vay-tid as" },
        { phrase: "He warned them about", meaning: "Onları ... hakkında uyardı", context: "Uyarı", example: "He warned them about the storm.", pronunciation: "hi vorn-d dem e-baut" },
        { phrase: "I apologized for being late", meaning: "Geç kaldığım için özür diledim", context: "Özür", example: "I apologized for being late again.", pronunciation: "ay e-po-lo-cay-zd for bi-ing ley-t" },
        { phrase: "Best wishes", meaning: "En iyi dileklerimle", context: "Kapanış", example: "Happy birthday and best wishes!", pronunciation: "best vi-şız" }
    ]
};

// Unit 186: Collocations
export const u186: EnglishPhraseUnit = {
    unitId: 186, title: "Collocations", phrases: [
        { phrase: "Do your homework", meaning: "Ödevini yap", context: "Eğitim", example: "Please do your homework before dinner.", pronunciation: "du yör hom-vörk" },
        { phrase: "Make a mistake", meaning: "Hata yapmak", context: "Eylem", example: "It's okay to make a mistake.", pronunciation: "meyk e mis-teyk" },
        { phrase: "Take a break", meaning: "Ara vermek", context: "Eylem", example: "Let's take a break for ten minutes.", pronunciation: "teyk e b-reyk" },
        { phrase: "Keep a secret", meaning: "Sır tutmak", context: "Sosyal", example: "Can you keep a secret?", pronunciation: "kip e sik-rıt" },
        { phrase: "Have a seat", meaning: "Oturun", context: "Nezaket", example: "Please, have a seat.", pronunciation: "hev e si-it" },
        { phrase: "Give a presentation", meaning: "Sunum yapmak", context: "İş", example: "I have to give a presentation tomorrow.", pronunciation: "giv e p-re-zen-tey-şın" },
        { phrase: "Catch a cold", meaning: "Şifayı kapmak / Soğuk almak", context: "Sağlık", example: "Wear a coat or you'll catch a cold.", pronunciation: "keç e kold" },
        { phrase: "Make a phone call", meaning: "Telefon görüşmesi yapmak", context: "İletişim", example: "I need to make a phone call.", pronunciation: "meyk e foun kol" },
        { phrase: "Pay attention", meaning: "Dikkatini vermek", context: "Eylem", example: "Please pay attention to the teacher.", pronunciation: "pey e-ten-şın" },
        { phrase: "Take a photo", meaning: "Fotoğraf çekmek", context: "Hobi", example: "Can you take a photo of us?", pronunciation: "teyk e fo-to" },
        { phrase: "Go for a walk", meaning: "Yürüyüşe çıkmak", context: "Aktivite", example: "Let's go for a walk in the park.", pronunciation: "gou for e volk" },
        { phrase: "Come to an end", meaning: "Sona ermek", context: "Zaman", example: "The meeting finally came to an end.", pronunciation: "kam tu en end" },
        { phrase: "Get ready", meaning: "Hazırlanmak", context: "Eylem", example: "Hurry up and get ready!", pronunciation: "get re-di" },
        { phrase: "Do me a favor", meaning: "Bana bir iyilik yap", context: "Rica", example: "Can you do me a favor?", pronunciation: "du mi e fey-vır" },
        { phrase: "Make a progress", meaning: "İlerleme kaydetmek", context: "Başarı", example: "You are making great progress.", pronunciation: "meyk e p-rog-res" }
    ]
};

// Unit 187: Connectors
export const u187: EnglishPhraseUnit = {
    unitId: 187, title: "Connectors", phrases: [
        { phrase: "However", meaning: "Ancak / Oysa", context: "Bağlaç", example: "He was tired; however, he kept working.", pronunciation: "hau-e-vır" },
        { phrase: "Therefore", meaning: "Bu nedenle", context: "Bağlaç", example: "It rained; therefore, the game was cancelled.", pronunciation: "der-for" },
        { phrase: "Although", meaning: "Rağmen / -e karşın", context: "Bağlaç", example: "Although it was cold, we went swimming.", pronunciation: "ol-dou" },
        { phrase: "In addition", meaning: "Ek olarak", context: "Bağlaç", example: "In addition, we need more staff.", pronunciation: "in e-di-şın" },
        { phrase: "On the contrary", meaning: "Aksine", context: "Bağlaç", example: "I'm not tired; on the contrary, I feel great.", pronunciation: "on dı kon-t-re-ri" },
        { phrase: "Otherwise", meaning: "Aksi takdirde", context: "Bağlaç", example: "Hurry up; otherwise, we'll be late.", pronunciation: "a-dır-vayz" },
        { phrase: "Meanwhile", meaning: "Bu sırada / Bu esnada", context: "Bağlaç", example: "I'll cook; meanwhile, you clean the table.", pronunciation: "min-vayl" },
        { phrase: "As a result", meaning: "Sonuç olarak", context: "Bağlaç", example: "As a result, she won the prize.", pronunciation: "ez e ri-zalt" },
        { phrase: "Despite the fact that", meaning: "... gerçeğine rağmen", context: "Bağlaç", example: "Despite the fact that it was late, he called.", pronunciation: "dis-payt dı fekt det" },
        { phrase: "Furthermore", meaning: "Dahası", context: "Bağlaç", example: "The food was bad; furthermore, it was expensive.", pronunciation: "för-dır-mor" },
        { phrase: "Unless", meaning: "Medikçe / Madıkça", context: "Bağlaç", example: "I won't go unless you come too.", pronunciation: "an-les" },
        { phrase: "Provided that", meaning: "Şartıyla", context: "Bağlaç", example: "You can go, provided that you finish your work.", pronunciation: "p-ro-vay-did det" },
        { phrase: "Even if", meaning: "Bile / Olsa bile", context: "Bağlaç", example: "Even if it rains, I'll go.", pronunciation: "i-vın if" },
        { phrase: "In case", meaning: "Durumunda / Diye", context: "Bağlaç", example: "Take an umbrella in case it rains.", pronunciation: "in keys" },
        { phrase: "So that", meaning: "Böylece / Olsun diye", context: "Bağlaç", example: "I started early so that I could finish early.", pronunciation: "sou det" }
    ]
};

// Unit 188: Formal vs Informal
export const u188: EnglishPhraseUnit = {
    unitId: 188, title: "Formal vs Informal", phrases: [
        { phrase: "Could you please inform me?", meaning: "Lütfen beni bilgilendirir misiniz?", context: "Resmi", example: "Could you please inform me about the dates?", pronunciation: "kud yu p-li-iz in-form mi" },
        { phrase: "Just letting you know", meaning: "Sadece haber vereyim dedim", context: "Samimi", example: "Just letting you know I'll be late.", pronunciation: "cast le-ting yu nou" },
        { phrase: "I would like to apologize", meaning: "Özür dilemek isterim", context: "Resmi", example: "I would like to apologize for the delay.", pronunciation: "ay vud layk tu e-po-lo-cayz" },
        { phrase: "Sorry about that", meaning: "Onun için üzgünüm (pardon)", context: "Samimi", example: "Oops! Sorry about that.", pronunciation: "so-ri e-baut det" },
        { phrase: "I look forward to your reply", meaning: "Cevabınızı bekliyorum", context: "Resmi", example: "I look forward to your reply regarding the issue.", pronunciation: "ay luk for-vırd tu yör ri-p-lay" },
        { phrase: "Hope to hear from you soon", meaning: "Yakında haberleşmek dileğiyle", context: "Samimi", example: "Anyway, hope to hear from you soon.", pronunciation: "houp tu hi-ır f-rom yu su-un" },
        { phrase: "Regarding your request", meaning: "Talebinizle ilgili olarak", context: "Resmi", example: "Regarding your request, it's approved.", pronunciation: "ri-gar-ding yör ri-kvest" },
        { phrase: "About what you asked", meaning: "Sorduğun şey hakkında", context: "Samimi", example: "About what you asked, I don't know.", pronunciation: "e-baut vat yu ask-t" },
        { phrase: "Yours sincerely", meaning: "Saygılarımla", context: "Resmi", example: "Yours sincerely, John Doe.", pronunciation: "yorz sin-si-ır-li" },
        { phrase: "Best regards", meaning: "En iyi dileklerimle", context: "Resmi/Yarı resmi", example: "Best regards, Management.", pronunciation: "best ri-gardz" },
        { phrase: "Best", meaning: "Sevgiler / Selamlar", context: "Samimi", example: "Best, Sarah.", pronunciation: "best" },
        { phrase: "Take care", meaning: "Kendine iyi bak", context: "Samimi", example: "See you, take care!", pronunciation: "teyk keyr" },
        { phrase: "Should you require assistance", meaning: "Yardıma ihtiyaç duyarsanız", context: "Resmi", example: "Should you require assistance, call us.", pronunciation: "şud yu ri-k-va-yır e-sis-tıns" },
        { phrase: "If you need help", meaning: "Yardım lazımsa", context: "Samimi", example: "If you need help, just ask.", pronunciation: "if yu nid help" },
        { phrase: "It was a pleasure meeting you", meaning: "Sizinle tanışmak bir zevkti", context: "Resmi", example: "It was a pleasure meeting you at the conference.", pronunciation: "it vaz e p-le-jur mi-ting yu" }
    ]
};

// Unit 189: Debate Skills
export const u189: EnglishPhraseUnit = {
    unitId: 189, title: "Debate Skills", phrases: [
        { phrase: "Let's weigh the pros and cons", meaning: "Artıları ve eksileri tartalım", context: "Tartışma", example: "Let's weigh the pros and cons of this plan.", pronunciation: "lets vey dı p-rouz end konz" },
        { phrase: "That is a valid point", meaning: "Bu geçerli bir nokta (haklısın)", context: "Tartışma", example: "That is a valid point, but look at this.", pronunciation: "det iz e ve-lid poynt" },
        { phrase: "I disagree with you", meaning: "Sizinle aynı fikirde değilim", context: "Tartışma", example: "I'm sorry, but I disagree with you on this.", pronunciation: "ay dis-e-g-ri vid yu" },
        { phrase: "What is the evidence?", meaning: "Kanıt nedir?", context: "Tartışma", example: "You say it's safe. What is the evidence?", pronunciation: "vat iz dı e-vi-dıns" },
        { phrase: "Broadly speaking", meaning: "Genel anlamda konuşursak", context: "Tartışma", example: "Broadly speaking, it's a good idea.", pronunciation: "b-rod-li s-pi-king" },
        { phrase: "I'd like to point out", meaning: "Belirtmek isterim ki", context: "Tartışma", example: "I'd like to point out that we are over budget.", pronunciation: "ayd layk tu poynt aut" },
        { phrase: "Looking at it from another angle", meaning: "Başka bir açıdan bakarsak", context: "Tartışma", example: "Looking at it from another angle, it's a chance.", pronunciation: "lu-king et it f-rom e-na-dır eng-gıl" },
        { phrase: "To clarify", meaning: "Açıklığa kavuşturmak gerekirse", context: "Tartışma", example: "To clarify, I mean we should wait.", pronunciation: "tu k-le-ri-fay" },
        { phrase: "In the long run", meaning: "Uzun vadede", context: "Tartışma", example: "In the long run, it will save money.", pronunciation: "in dı long ran" },
        { phrase: "On the surface", meaning: "Yüzeysel olarak / Görünüşte", context: "Tartışma", example: "On the surface, it looks easy.", pronunciation: "on dı sör-fıs" },
        { phrase: "Strictly speaking", meaning: "Tam olarak konuşmak gerekirse / Aslında", context: "Tartışma", example: "Strictly speaking, it's not allowed.", pronunciation: "s-t-rikt-li s-pi-king" },
        { phrase: "We need to address the issue", meaning: "Sorunu ele almamız gerekiyor", context: "Tartışma", example: "We need to address the issue of pollution.", pronunciation: "vi nid tu ed-res dı i-şu" },
        { phrase: "What are the implications?", meaning: "Sonuçları/Etkileri nelerdir?", context: "Tartışma", example: "What are the implications of this decision?", pronunciation: "vat ar dı im-p-li-key-şınz" },
        { phrase: "Having said that", meaning: "Bunu söylemiş olmakla birlikte / Öte yandan", context: "Tartışma", example: "It's hard. Having said that, it's worth it.", pronunciation: "he-ving sed det" },
        { phrase: "It remains to be seen", meaning: "Gelecekte göreceğiz / Henüz belli değil", context: "Tartışma", example: "It remains to be seen if he will succeed.", pronunciation: "it ri-meynz tu bi sin" }
    ]
};

// Unit 190: B1 Tekrar
export const u190: EnglishPhraseUnit = {
    unitId: 190, title: "B1 Tekrar", phrases: [
        { phrase: "Let's review the main points", meaning: "Ana noktaları gözden geçirelim", context: "Tekrar", example: "Before we end, let's review the main points.", pronunciation: "lets ri-v-yu dı meyn poynts" },
        { phrase: "I've learned a lot", meaning: "Çok şey öğrendim", context: "Öğrenme", example: "I've learned a lot during this courses.", pronunciation: "ayv lörnd e lot" },
        { phrase: "I'm more confident now", meaning: "Şimdi daha özgüvenliyim", context: "Duygu", example: "I'm more confident now with my English.", pronunciation: "aym mor kon-fi-dınt nau" },
        { phrase: "Can we practice more?", meaning: "Daha fazla pratik yapabilir miyiz?", context: "İstek", example: "Can we practice more on relative clauses?", pronunciation: "ken vi p-rek-tis mor" },
        { phrase: "Everything is clear", meaning: "Her şey açık / net", context: "Anlama", example: "Thank you, teacher. Everything is clear.", pronunciation: "ev-ri-ting iz kli-ır" },
        { phrase: "I need to improve my speaking", meaning: "Konuşmamı geliştirmem gerek", context: "Hedef", example: "I need to improve my speaking skills.", pronunciation: "ay nid tu im-p-ruv may s-pi-king" },
        { phrase: "Let's move to the next level", meaning: "Bir sonraki seviyeye geçelim", context: "İlerleme", example: "I'm ready. Let's move to the next level.", pronunciation: "lets mu-uv tu dı nekst le-vıl" },
        { phrase: "What was the rule again?", meaning: "Kural neydi yine?", context: "Soru", example: "What was the rule for passive voice again?", pronunciation: "vat vaz dı ru-ul e-geyn" },
        { phrase: "This was quite challenge", meaning: "Bu bayağı zorlayıcıydı", context: "Deneyim", example: "Unit 184 was quite challenge.", pronunciation: "dis vaz k-vayt ça-lınc" },
        { phrase: "I can communicate better", meaning: "Daha iyi iletişim kurabiliyorum", context: "Başarı", example: "I can communicate better with people now.", pronunciation: "ay ken ko-mu-ni-keyt be-tır" },
        { phrase: "Practice makes perfect", meaning: "Pratik mükemmelleştirir", context: "Deyim", example: "Don't forget: practice makes perfect.", pronunciation: "p-rek-tis meyks pör-fekt" },
        { phrase: "I'll keep studying", meaning: "Çalışmaya devam edeceğim", context: "Söz", example: "I'll keep studying every day.", pronunciation: "ayl kip s-ta-di-ying" },
        { phrase: "Great job!", meaning: "Harika iş!", context: "Övgü", example: "You finished B1 level. Great job!", pronunciation: "g-reyt cob" },
        { phrase: "See you in B2", meaning: "B2'de görüşürüz", context: "Veda", example: "See you in B2 level soon.", pronunciation: "si yu in bi tu" },
        { phrase: "Ready for the test", meaning: "Test için hazırım", context: "Durum", example: "I've reviewed everything and I'm ready for the test.", pronunciation: "re-di for dı test" }
    ]
};


// Unit 166: Phrasal Verbs 1
export const u166: EnglishPhraseUnit = {
    unitId: 166, title: "Phrasal Verbs 1", phrases: [
        { phrase: "Wake up", meaning: "Uyanmak", context: "Rutin", example: "I usually wake up at 7 o'clock.", pronunciation: "veyk ap" },
        { phrase: "Get up", meaning: "Kalkmak / Yataktan çıkmak", context: "Rutin", example: "I wake up at 7, but I get up at 7:30.", pronunciation: "get ap" },
        { phrase: "Get off", meaning: "İnmek (araçtan)", context: "Ulaşım", example: "Get off the bus at the next stop.", pronunciation: "get of" },
        { phrase: "Go out", meaning: "Dışarı çıkmak", context: "Sosyal", example: "We are going out for dinner tonight.", pronunciation: "gou aut" },
        { phrase: "Look for", meaning: "Aramak", context: "Eylem", example: "I'm looking for my keys.", pronunciation: "luk for" },
        { phrase: "Find out", meaning: "Öğrenmek / Bulmak (bilgi)", context: "Bilgi", example: "I need to find out the time of the meeting.", pronunciation: "faynd aut" },
        { phrase: "Carry on", meaning: "Devam etmek", context: "Eylem", example: "Please carry on with your work.", pronunciation: "ke-ri on" },
        { phrase: "Give up", meaning: "Vazgeçmek / Bırakmak", context: "Eylem", example: "Never give up on your dreams.", pronunciation: "giv ap" },
        { phrase: "Put on", meaning: "Giymek", context: "Giyim", example: "Put on your coat, it's cold outside.", pronunciation: "put on" },
        { phrase: "Take off", meaning: "Çıkarmak / Havalanmak", context: "Giyim/Ulaşım", example: "Take off your shoes.", pronunciation: "teyk of" },
        { phrase: "Call back", meaning: "Geri aramak", context: "İletişim", example: "I'll call you back in five minutes.", pronunciation: "kol bek" },
        { phrase: "Turn on", meaning: "Açmak (ışık, cihaz)", context: "Eylem", example: "Turn on the light, please.", pronunciation: "törn on" },
        { phrase: "Turn off", meaning: "Kapatmak (ışık, cihaz)", context: "Eylem", example: "Remember to turn off the TV.", pronunciation: "törn of" },
        { phrase: "Look forward to", meaning: "Dört gözle beklemek", context: "Deyim", example: "I look forward to seeing you soon.", pronunciation: "luk for-vırd tu" },
        { phrase: "Run out of", meaning: "Bitmek / Tüketmek", context: "Eylem", example: "We ran out of milk.", pronunciation: "ran aut ov" }
    ]
};

// Unit 167: Phrasal Verbs 2
export const u167: EnglishPhraseUnit = {
    unitId: 167, title: "Phrasal Verbs 2", phrases: [
        { phrase: "Hold on", meaning: "Beklemek (telefonda vb.)", context: "Bekleme", example: "Hold on a second, please.", pronunciation: "ho-ld on" },
        { phrase: "Bring up", meaning: "Bahsetmek / Yetiştirmek (çocuk)", context: "İletişim/Aile", example: "She brought up an interesting point.", pronunciation: "bring ap" },
        { phrase: "Set up", meaning: "Kurmak / Ayarlamak", context: "İş", example: "They set up a new company.", pronunciation: "set ap" },
        { phrase: "Call off", meaning: "İptal etmek", context: "Plan", example: "The meeting was called off.", pronunciation: "kol of" },
        { phrase: "Check in", meaning: "Kayıt yaptırmak", context: "Seyehat", example: "You can check in at 2 PM.", pronunciation: "çek in" },
        { phrase: "Break down", meaning: "Bozulmak", context: "Teknik", example: "The car broke down on the highway.", pronunciation: "b-reyk da-un" },
        { phrase: "Pick up", meaning: "Almak / Toplamak", context: "Eylem", example: "I'll pick you up at 8.", pronunciation: "pik ap" },
        { phrase: "Drop off", meaning: "Bırakmak (araçla)", context: "Ulaşım", example: "Can you drop me off at the station?", pronunciation: "d-rop of" },
        { phrase: "Put off", meaning: "Ertelemek", context: "Zaman", example: "Don't put off what you can do today.", pronunciation: "put of" },
        { phrase: "Take up", meaning: "Başlamak (hobi, aktivite)", context: "Hobi", example: "He took up photography last year.", pronunciation: "teyk ap" },
        { phrase: "Grow up", meaning: "Büyümek", context: "Yaşam", example: "I grew up in Istanbul.", pronunciation: "g-ro ap" },
        { phrase: "Look after", meaning: "Bakmak / İlgilenmek", context: "Sorumluluk", example: "I look after my younger sister.", pronunciation: "luk af-tır" },
        { phrase: "Show up", meaning: "Ortaya çıkmak / Gelmek", context: "Sosyal", example: "He didn't show up for the party.", pronunciation: "şou ap" },
        { phrase: "Make up", meaning: "Uydurmak / Barışmak", context: "Eylem", example: "They had a fight, but they made up.", pronunciation: "meyk ap" },
        { phrase: "Settle down", meaning: "Yerleşmek", context: "Yaşam", example: "They want to settle down in the country.", pronunciation: "se-tıl da-un" }
    ]
};

// Unit 168: Haberler ve Medya
export const u168: EnglishPhraseUnit = {
    unitId: 168, title: "Haberler ve Medya", phrases: [
        { phrase: "Breaking news", meaning: "Son dakika haberi", context: "Medya", example: "We have some breaking news.", pronunciation: "b-rey-king nu-uz" },
        { phrase: "According to sources", meaning: "Kaynaklara göre", context: "Medya", example: "According to sources, the deal is done.", pronunciation: "e-kor-ding tu sor-sız" },
        { phrase: "Headline", meaning: "Manşet", context: "Gazete", example: "I read the headline in the newspaper.", pronunciation: "hed-layn" },
        { phrase: "Live coverage", meaning: "Canlı yayın", context: "TV", example: "Live coverage of the event starts now.", pronunciation: "layv ka-vı-rıc" },
        { phrase: "Interview", meaning: "Mülakat / Röpörtaj", context: "Medya", example: "An exclusive interview with the star.", pronunciation: "in-tör-v-yu" },
        { phrase: "Social media trend", meaning: "Sosyal medya trendi", context: "İnternet", example: "It's a huge social media trend.", pronunciation: "so-şıl mi-di-ya t-rend" },
        { phrase: "Press conference", meaning: "Basın toplantısı", context: "Medya", example: "The mayor held a press conference.", pronunciation: "p-res kon-fı-rıns" },
        { phrase: "Fake news", meaning: "Yalan haber", context: "Toplum", example: "Be careful with fake news online.", pronunciation: "feyk nu-uz" },
        { phrase: "In depth report", meaning: "Detaylı rapor", context: "Analiz", example: "Read our in depth report on climate.", pronunciation: "in dept ri-port" },
        { phrase: "Journalist", meaning: "Gazeteci", context: "Meslek", example: "She is a top journalist.", pronunciation: "cör-nı-list" },
        { phrase: "Mass media", meaning: "Kitle iletişim araçları", context: "Toplum", example: "The influence of mass media.", pronunciation: "mes mi-di-ya" },
        { phrase: "Broadcast live", meaning: "Canlı yayınlamak", context: "Yayın", example: "The match will be broadcast live.", pronunciation: "b-rod-kast layv" },
        { phrase: "Public opinion", meaning: "Kamuoyu", context: "Siyaset", example: "Public opinion is divided on this issue.", pronunciation: "pab-lik o-pin-yın" },
        { phrase: "Viral video", meaning: "Viral video", context: "İnternet", example: "The video became viral instantly.", pronunciation: "va-y-rıl vi-di-yo" },
        { phrase: "Subscribe", meaning: "Abone olmak", context: "Medya", example: "Don't forget to subscribe.", pronunciation: "sab-s-k-rayb" }
    ]
};

// Unit 169: Çevre Sorunları
export const u169: EnglishPhraseUnit = {
    unitId: 169, title: "Çevre Sorunları", phrases: [
        { phrase: "Climate change", meaning: "İklim değişikliği", context: "Çevre", example: "Climate change is a global threat.", pronunciation: "k-lay-mıt çeync" },
        { phrase: "Global warming", meaning: "Küresel ısınma", context: "Çevre", example: "Global warming causes sea levels to rise.", pronunciation: "g-lo-bıl vor-ming" },
        { phrase: "Pollution", meaning: "Kirlilik", context: "Çevre", example: "Air pollution is bad in the city.", pronunciation: "po-lu-şın" },
        { phrase: "Renewable energy", meaning: "Yenilenebilir enerji", context: "Çevre", example: "We need more renewable energy.", pronunciation: "ri-nu-vı-bıl e-nır-ci" },
        { phrase: "Protect the environment", meaning: "Çevreyi korumak", context: "Çevre", example: "It's our duty to protect the environment.", pronunciation: "p-ro-tekt dı en-va-y-rın-mınt" },
        { phrase: "Deforestation", meaning: "Ormansızlaşma", context: "Çevre", example: "Deforestation destroys animal habitats.", pronunciation: "di-fo-ris-tey-şın" },
        { phrase: "Endangered species", meaning: "Nesli tükenmekte olan türler", context: "Doğa", example: "Pandas are an endangered species.", pronunciation: "en-deyn-cırd s-pi-şiz" },
        { phrase: "Carbon footprint", meaning: "Karbon ayak izi", context: "Sorumluluk", example: "Reduce your carbon footprint.", pronunciation: "kar-bın fut-p-rint" },
        { phrase: "Sustainable living", meaning: "Sürdürülebilir yaşam", context: "Yaşam", example: "Tips for sustainable living.", pronunciation: "sas-tey-nı-bıl li-ving" },
        { phrase: "Eco-friendly", meaning: "Çevre dostu", context: "Ürün", example: "Use eco-friendly products.", pronunciation: "e-ko f-rend-li" },
        { phrase: "Waste management", meaning: "Atık yönetimi", context: "Şehir", example: "Improve waste management systems.", pronunciation: "veyst me-nıc-mınt" },
        { phrase: "Ozone layer", meaning: "Ozon tabakası", context: "Bilim", example: "The ozone layer protects the Earth.", pronunciation: "o-zoun ley-ır" },
        { phrase: "Conservation", meaning: "Koruma / Tasarruf", context: "Çevre", example: "Water conservation is important.", pronunciation: "kon-sır-vey-şın" },
        { phrase: "Greenhouse effect", meaning: "Sera etkisi", context: "Bilim", example: "The greenhouse effect warms the planet.", pronunciation: "g-ri-in-haus i-fekt" },
        { phrase: "Biodiversity", meaning: "Biyoçeşitlilik", context: "Doğa", example: "Saving the world's biodiversity.", pronunciation: "ba-yo-di-vör-si-ti" }
    ]
};

// Unit 170: Sürdürülebilirlik
export const u170: EnglishPhraseUnit = {
    unitId: 170, title: "Sürdürülebilirlik", phrases: [
        { phrase: "Recycle", meaning: "Geri dönüştürmek", context: "Eylem", example: "Please recycle your plastic bottles.", pronunciation: "ri-say-kıl" },
        { phrase: "Reduce and reuse", meaning: "Azalt ve yeniden kullan", context: "Prensip", example: "The best way is to reduce and reuse.", pronunciation: "ri-du-us end ri-yu-uz" },
        { phrase: "Composting", meaning: "Kompost yapma", context: "Bahçe", example: "Composting helps soil health.", pronunciation: "kom-pos-ting" },
        { phrase: "Solar power", meaning: "Güneş enerjisi", context: "Enerji", example: "We installed solar power panels.", pronunciation: "so-lır pa-vır" },
        { phrase: "Zero waste", meaning: "Sıfır atık", context: "Hedef", example: "Aiming for a zero waste lifestyle.", pronunciation: "zi-ro veyst" },
        { phrase: "Organically grown", meaning: "Organik yetiştirilmiş", context: "Gıda", example: "I buy organically grown vegetables.", pronunciation: "or-ge-ni-ki-li g-roun" },
        { phrase: "Energy efficiency", meaning: "Enerji verimliliği", context: "Tasarruf", example: "Improve your home's energy efficiency.", pronunciation: "e-nır-ci i-fi-şın-si" },
        { phrase: "Ethical consumption", meaning: "Etik tüketim", context: "Pazarlama", example: "Ethical consumption matters to us.", pronunciation: "e-ti-kıl kon-samp-şın" },
        { phrase: "Fair trade", meaning: "Adil ticaret", context: "Ticaret", example: "Support fair trade coffee.", pronunciation: "fe-ir t-reyd" },
        { phrase: "Plastic-free", meaning: "Plastiksiz", context: "Ürün", example: "Looking for plastic-free alternatives.", pronunciation: "p-las-tik f-ri" },
        { phrase: "Public transport", meaning: "Toplu taşıma", context: "Ulaşım", example: "Use public transport more often.", pronunciation: "pab-lik t-rans-port" },
        { phrase: "Wind energy", meaning: "Rüzgar enerjisi", context: "Enerji", example: "Wind energy is a clean source.", pronunciation: "vind e-nır-ci" },
        { phrase: "Landfill", meaning: "Çöp sahası", context: "Atık", example: "Too much trash goes to the landfill.", pronunciation: "lend-fil" },
        { phrase: "Green space", meaning: "Yeşil alan", context: "Şehir", example: "We need more green space in cities.", pronunciation: "g-ri-in s-peys" },
        { phrase: "Sustainability report", meaning: "Sürdürülebilirlik raporu", context: "İş", example: "The company's annual sustainability report.", pronunciation: "sas-tey-na-bi-li-ti ri-port" }
    ]
};

// Unit 171: Kültür ve Gelenekler
export const u171: EnglishPhraseUnit = {
    unitId: 171, title: "Kültür ve Gelenekler", phrases: [
        { phrase: "Cultural heritage", meaning: "Kültürel miras", context: "Kültür", example: "We must preserve our cultural heritage.", pronunciation: "kal-çu-rıl he-ri-tıc" },
        { phrase: "Traditional festival", meaning: "Geleneksel festival", context: "Etkinlik", example: "The traditional festival is held in July.", pronunciation: "t-ra-di-şı-nıl fes-ti-vıl" },
        { phrase: "Customs and beliefs", meaning: "Gelenekler ve inanışlar", context: "Toplum", example: "Every country has its own customs and beliefs.", pronunciation: "kas-tımz end bi-li-ifs" },
        { phrase: "Folklore", meaning: "Folklor / Halk bilimi", context: "Kültür", example: "Studying the local folklore.", pronunciation: "folk-lor" },
        { phrase: "Sense of belonging", meaning: "Aidiyet duygusu", context: "Psikoloji", example: "Community events create a sense of belonging.", pronunciation: "sens ov bi-lon-ging" },
        { phrase: "Diverse backgrounds", meaning: "Farklı kökenler", context: "Toplum", example: "People from diverse backgrounds live here.", pronunciation: "da-vörs bek-g-ra-undz" },
        { phrase: "Social norms", meaning: "Sosyal normlar", context: "Toplum", example: "Adapting to new social norms.", pronunciation: "so-şıl normz" },
        { phrase: "Global citizenship", meaning: "Dünya vatandaşlığı", context: "Toplum", example: "Promoting the idea of global citizenship.", pronunciation: "g-lo-bıl si-ti-zın-şip" },
        { phrase: "Preserve traditions", meaning: "Gelenekleri korumak", context: "Kültür", example: "It's hard to preserve traditions in a modern world.", pronunciation: "p-ri-zörv t-ra-di-şınz" },
        { phrase: "Indigenous people", meaning: "Yerli halk", context: "Toplum", example: "Respect the rights of indigenous people.", pronunciation: "in-di-cı-nıs pi-pıl" },
        { phrase: "Cross-cultural", meaning: "Kültürlerarası", context: "İletişim", example: "A cross-cultural exchange program.", pronunciation: "k-ros kal-çu-rıl" },
        { phrase: "Stereotype", meaning: "Kalıplaşmış yargı", context: "Toplum", example: "Challenge the common stereotype.", pronunciation: "s-te-re-o-tayp" },
        { phrase: "Values and ethics", meaning: "Değerler ve etik", context: "Felsefe", example: "Teaching values and ethics to children.", pronunciation: "vel-yu-uz end e-tiks" },
        { phrase: "Unity in diversity", meaning: "Çeşitlilikte birlik", context: "Slogan", example: "The country's motto is unity in diversity.", pronunciation: "yu-ni-ti in da-vör-si-ti" },
        { phrase: "Pass down", meaning: "Nesilden nesile aktarmak", context: "Eylem", example: "Stories passed down through generations.", pronunciation: "pas da-un" }
    ]
};

// Unit 172: Ekonomi Temelleri
export const u172: EnglishPhraseUnit = {
    unitId: 172, title: "Ekonomi Temelleri", phrases: [
        { phrase: "Interest rate", meaning: "Faiz oranı", context: "Ekonomi", example: "The interest rate went up recently.", pronunciation: "in-t-rist reyt" },
        { phrase: "Household budget", meaning: "Ev bütçesi", pronunciation: "haus-ho-ld ba-cit", context: "Finans", example: "Managing a household budget is tricky." },
        { phrase: "Inflation", meaning: "Enflasyon", context: "Ekonomi", example: "Inflation affects the cost of living.", pronunciation: "in-f-ley-şın" },
        { phrase: "Tax return", meaning: "Vergi iadesi", context: "Finans", example: "Filing my tax return online.", pronunciation: "teks ri-törn" },
        { phrase: "Savings account", meaning: "Birikim hesabı", context: "Banka", example: "Put some money in your savings account.", pronunciation: "sey-vingz e-ka-unt" },
        { phrase: "Exchange rate", meaning: "Döviz kuru", context: "Finans", example: "Check the exchange rate before traveling.", pronunciation: "eks-çeync reyt" },
        { phrase: "Financial advice", meaning: "Finansal tavsiye", context: "Finans", example: "Seek professional financial advice.", pronunciation: "fay-nen-şıl ed-vays" },
        { phrase: "Cost of living", meaning: "Yaşam maliyeti", context: "Ekonomi", example: "The cost of living in London is high.", pronunciation: "kost ov li-ving" },
        { phrase: "Profit and loss", meaning: "Kar ve zarar", context: "İş", example: "Analyze the profit and loss statement.", pronunciation: "p-ro-fit end los" },
        { phrase: "Investment", meaning: "Yatırım", context: "Finans", example: "Investing in the stock market.", pronunciation: "in-vest-mınt" },
        { phrase: "Pay off debt", meaning: "Borç ödemek", context: "Finans", example: "It took years to pay off debt.", pronunciation: "pey of det" },
        { phrase: "Credit score", meaning: "Kredi notu", context: "Finans", example: "Keep an eye on your credit score.", pronunciation: "k-re-dit s-kor" },
        { phrase: "Economic growth", meaning: "Ekonomik büyüme", context: "Ekonomi", example: "The country saw steady economic growth.", pronunciation: "i-ko-no-mik g-routh" },
        { phrase: "Apply for a loan", meaning: "Kredi başvurusu yapmak", context: "Banka", example: "I need to apply for a loan for my car.", pronunciation: "e-p-lay for e loun" },
        { phrase: "Income and expenses", meaning: "Gelir ve giderler", context: "Finans", example: "Track your income and expenses.", pronunciation: "in-kam end eks-pen-sız" }
    ]
};

// Unit 173: Tartışma Becerileri
export const u173: EnglishPhraseUnit = {
    unitId: 173, title: "Tartışma Becerileri", phrases: [
        { phrase: "In my opinion", meaning: "Benim fikrime göre", context: "Fikir", example: "In my opinion, this is the best option.", pronunciation: "in may o-pin-yın" },
        { phrase: "I strongly believe", meaning: "Güçlü bir şekilde inanıyorum ki", context: "Fikir", example: "I strongly believe we should act now.", pronunciation: "ay s-t-rong-li bi-li-iv" },
        { phrase: "On the other hand", meaning: "Öte yandan", context: "Zıtlık", example: "It's expensive; on the other hand, it's better.", pronunciation: "on dı a-dır hend" },
        { phrase: "I see your point", meaning: "Noktanı anlıyorum / Hak veriyorum", context: "Anlaşma", example: "I see your point, but I disagree.", pronunciation: "ay si yör poynt" },
        { phrase: "Could you elaborate?", meaning: "Detaylandırabilir misin?", context: "Soru", example: "That's interesting. Could you elaborate?", pronunciation: "kud yu i-le-bo-reyt" },
        { phrase: "To sum up", meaning: "Özetlemek gerekirse", context: "Özet", example: "To sum up, we need more time.", pronunciation: "tu sam ap" },
        { phrase: "What do you think?", meaning: "Ne düşünüyorsun?", context: "Soru", example: "I like it. What do you think?", pronunciation: "vat du yu tink" },
        { phrase: "I totally agree", meaning: "Tamamen katılıyorum", context: "Anlaşma", example: "I totally agree with your proposal.", pronunciation: "ay tou-tı-li e-g-ri" },
        { phrase: "I beg to differ", meaning: "Aynı fikirde değilim", context: "Anlaşmazlık", example: "I'm sorry, but I beg to differ.", pronunciation: "ay beg tu di-fır" },
        { phrase: "That makes sense", meaning: "Bu mantıklı", context: "Onay", example: "Yes, that makes sense.", pronunciation: "det meyks sens" },
        { phrase: "Let's find a compromise", meaning: "Bir orta yol bulalım", context: "Müzakere", example: "We disagree. Let's find a compromise.", pronunciation: "lets faynd e kom-p-ro-mayz" },
        { phrase: "As far as I'm concerned", meaning: "Bana kalırsa / Benim açımdan", context: "Fikir", example: "As far as I'm concerned, the case is closed.", pronunciation: "ez far ez aym kon-sırnd" },
        { phrase: "To be honest", meaning: "Dürüst olmak gerekirse", context: "Dürüstlük", example: "To be honest, I'm not sure.", pronunciation: "tu bi o-nist" },
        { phrase: "Coming back to the point", meaning: "Konuya geri dönersek", context: "Geçiş", example: "Coming back to the point, what's the cost?", pronunciation: "ka-ming bek tu dı poynt" },
        { phrase: "In conclusion", meaning: "Sonuç olarak", context: "Kapanış", example: "In conclusion, I support the plan.", pronunciation: "in kon-k-lu-jın" }
    ]
};

// Unit 174: Sunum Yapma
export const u174: EnglishPhraseUnit = {
    unitId: 174, title: "Sunum Yapma", phrases: [
        { phrase: "I'd like to introduce", meaning: "Tanıştırmak/Sunmak isterim", context: "Giriş", example: "I'd like to introduce our guest speaker.", pronunciation: "ayd layk tu in-t-ro-du-us" },
        { phrase: "Today I'll talk about", meaning: "Bugün ... hakkında konuşacağım", context: "Konu", example: "Today I'll talk about market trends.", pronunciation: "tu-dey ayl tolk e-baut" },
        { phrase: "Moving on to", meaning: "... konusuna geçersek", context: "Geçiş", example: "Moving on to the next slide.", pronunciation: "mu-ving on tu" },
        { phrase: "As you can see", meaning: "Gördüğünüz gibi", context: "Görsel", example: "As you can see on the chart.", pronunciation: "ez yu ken si" },
        { phrase: "Any questions?", meaning: "Sorusu olan?", context: "Soru", example: "That's all. Any questions?", pronunciation: "e-ni kves-çınz" },
        { phrase: "I'll start by", meaning: "... ile başlayacağım", context: "Giriş", example: "I'll start by showing some data.", pronunciation: "ayl s-tart bay" },
        { phrase: "Thank you for your attention", meaning: "İlginiz için teşekkürler", context: "Kapanış", example: "Thank you for your attention today.", pronunciation: "tenk yu for yör e-ten-şın" },
        { phrase: "Let's look at the facts", meaning: "Gerçeklere bakalım", context: "Analiz", example: "Now, let's look at the facts.", pronunciation: "lets luk et dı fekts" },
        { phrase: "I would like to highlight", meaning: "Vurgulamak isterim", context: "Vurgu", example: "I would like to highlight this point.", pronunciation: "ay vud layk tu hay-layt" },
        { phrase: "For instance", meaning: "Örneğin", context: "Örnek", example: "For instance, consider this case.", pronunciation: "for in-s-tıns" },
        { phrase: "In summary", meaning: "Özetle", context: "Özet", example: "In summary, we are growing.", pronunciation: "in sa-mı-ri" },
        { phrase: "This brings me to the end", meaning: "Beni sona getirdi", context: "Kapanış", example: "This brings me to the end of my talk.", pronunciation: "dis bringz mi tu dı end" },
        { phrase: "I'll be happy to answer", meaning: "Cevaplamaktan mutlu olurum", context: "Soru", example: "I'll be happy to answer any questions.", pronunciation: "ayl bi he-pi tu en-sır" },
        { phrase: "Briefly", meaning: "Kısaca", context: "Zaman", example: "Briefly, I'll explain the process.", pronunciation: "b-rif-li" },
        { phrase: "Take a look at", meaning: "...'ya bir göz atın", context: "Görsel", example: "Take a look at the handout.", pronunciation: "teyk e luk et" }
    ]
};

// Unit 175: Edebiyat 1
export const u175: EnglishPhraseUnit = {
    unitId: 175, title: "Edebiyat 1", phrases: [
        { phrase: "Main character", meaning: "Ana karakter", context: "Kitap", example: "The main character is very brave.", pronunciation: "meyn ke-rik-tır" },
        { phrase: "Plot twist", meaning: "Beklenmedik gelişme (hikayede)", context: "Analiz", example: "The plot twist at the end was shocking.", pronunciation: "p-lot t-vist" },
        { phrase: "Once upon a time", meaning: "Bir varmış bir yokmuş", context: "Masal", example: "Once upon a time, there was a king.", pronunciation: "vans e-pon e taym" },
        { phrase: "Happy ending", meaning: "Mutlu son", context: "Hikaye", example: "I love stories with a happy ending.", pronunciation: "he-pi en-ding" },
        { phrase: "Underlying theme", meaning: "Altta yatan tema", context: "Analiz", example: "Love is the underlying theme of the book.", pronunciation: "an-dır-la-ying tim" },
        { phrase: "First person perspective", meaning: "Birinci şahıs bakış açısı", context: "Analiz", example: "It's written in first person perspective.", pronunciation: "först per-sın pör-s-pek-tiv" },
        { phrase: "Symbolism", meaning: "Sembolizm", context: "Sanat", example: "The rose is used as symbolism for love.", pronunciation: "sim-bo-li-zım" },
        { phrase: "Author's intent", meaning: "Yazarın niyeti", context: "Analiz", example: "What is the author's intent here?", pronunciation: "o-dırz in-tent" },
        { phrase: "Climax of the story", meaning: "Hikayenin doruk noktası", context: "Analiz", example: "The climax of the story happens in chapter 5.", pronunciation: "k-lay-maks ov dı s-to-ri" },
        { phrase: "Metaphor", meaning: "Metafor / Mecaz", context: "Dil", example: "The poet used a beautiful metaphor.", pronunciation: "me-ta-for" },
        { phrase: "Narrator", meaning: "Anlatıcı", context: "Edebiyat", example: "The narrator has a deep voice.", pronunciation: "ne-re-y-tır" },
        { phrase: "Novel", meaning: "Roman", context: "Edebiyat", example: "He is writing a new novel.", pronunciation: "no-vıl" },
        { phrase: "Chapter", meaning: "Bölüm (kitap)", context: "Edebiyat", example: "I'm reading the third chapter.", pronunciation: "çep-tır" },
        { phrase: "Best-seller", meaning: "En çok satan", context: "Kitap", example: "The book became a best-seller.", pronunciation: "best se-lır" },
        { phrase: "Classic literature", meaning: "Klasik edebiyat", context: "Kültür", example: "Enjoying a piece of classic literature.", pronunciation: "k-la-sik li-t-rı-çur" }
    ]
};

// Unit 176: Akademik Yazma
export const u176: EnglishPhraseUnit = {
    unitId: 176, title: "Akademik Yazma", phrases: [
        { phrase: "First and foremost", meaning: "Her şeyden önce", context: "Yazma", example: "First and foremost, we need a plan.", pronunciation: "först end for-moust" },
        { phrase: "Furthermore", meaning: "Ayrıca / Dahası", context: "Yazma", example: "Furthermore, it is very expensive.", pronunciation: "för-dır-mor" },
        { phrase: "In contrast", meaning: "Aksine / Karşıt olarak", context: "Yazma", example: "In contrast, the second group failed.", pronunciation: "in kon-t-rast" },
        { phrase: "Consequently", meaning: "Sonuç olarak", context: "Yazma", example: "Consequently, the project was delayed.", pronunciation: "kon-si-kvent-li" },
        { phrase: "Nevertheless", meaning: "Yine de", context: "Yazma", example: "It was late; nevertheless, we finished.", pronunciation: "ne-vır-dı-les" },
        { phrase: "To illustrate", meaning: "Örneklendirmek gerekirse", context: "Yazma", example: "To illustrate, look at this example.", pronunciation: "tu i-las-t-reyt" },
        { phrase: "Given that", meaning: "Dikkate alındığında", context: "Yazma", example: "Given that it's raining, we should stay.", pronunciation: "gi-vın det" },
        { phrase: "Admittedly", meaning: "Kabul etmek gerekir ki", context: "Yazma", example: "Admittedly, it was my mistake.", pronunciation: "ed-mi-tid-li" },
        { phrase: "It is widely believed", meaning: "Yaygın olarak inanılmaktadır ki", context: "Yazma", example: "It is widely believed that health is wealth.", pronunciation: "it iz vayd-li bi-li-ivd" },
        { phrase: "Regarding", meaning: "İlgili / Hakkında", context: "Yazma", example: "I am writing regarding your order.", pronunciation: "ri-gar-ding" },
        { phrase: "In terms of", meaning: "Bakımından / Açısından", context: "Yazma", example: "In terms of cost, it's cheap.", pronunciation: "in törmz ov" },
        { phrase: "With respect to", meaning: "İle ilgili olarak", context: "Yazma", example: "With respect to your request, here it is.", pronunciation: "vid ri-s-pekt tu" },
        { phrase: "Primarily", meaning: "Öncelikle", context: "Yazma", example: "The book is primarily about history.", pronunciation: "p-ray-me-rı-li" },
        { phrase: "Ultimately", meaning: "En nihayetinde", context: "Yazma", example: "Ultimately, the decision is yours.", pronunciation: "al-ti-mıt-li" },
        { phrase: "Final thoughts", meaning: "Son düşünceler", context: "Yazma", example: "My final thoughts on the topic.", pronunciation: "fay-nıl tots" }
    ]
};

// Unit 177: Bilim ve Teknoloji
export const u177: EnglishPhraseUnit = {
    unitId: 177, title: "Bilim ve Teknoloji", phrases: [
        { phrase: "Scientific discovery", meaning: "Bilimsel keşif", context: "Bilim", example: "A major scientific discovery was made.", pronunciation: "sa-yın-ti-fik dis-ka-vı-ri" },
        { phrase: "Technological innovation", meaning: "Teknolojik yenilik", context: "Teknoloji", example: "Technological innovation is fast.", pronunciation: "tek-no-lo-ci-kıl in-no-vey-şın" },
        { phrase: "Breakthrough", meaning: "Çığır açan gelişme", context: "Bilim", example: "A medical breakthrough in cancer research.", pronunciation: "b-reyk-th-ru" },
        { phrase: "Cutting-edge", meaning: "En son teknoloji / son sistem", context: "Teknoloji", example: "This lab has cutting-edge equipment.", pronunciation: "ka-ting eç" },
        { phrase: "Digital age", meaning: "Dijital çağ", context: "Toplum", example: "Living in a digital age has pros and cons.", pronunciation: "di-ci-tıl eyc" },
        { phrase: "Smart devices", meaning: "Akıllı cihazlar", context: "Teknoloji", example: "We use smart devices every day.", pronunciation: "s-mart di-vay-sız" },
        { phrase: "Data analysis", meaning: "Veri analizi", context: "Bilim", example: "Data analysis is key to success.", pronunciation: "dey-ta e-ne-li-sis" },
        { phrase: "High-tech", meaning: "Yüksek teknoloji", context: "Teknoloji", example: "A high-tech manufacturing plant.", pronunciation: "hay tek" },
        { phrase: "User-friendly", meaning: "Kullanıcı dostu", context: "Teknoloji", example: "The interface is very user-friendly.", pronunciation: "yu-zır f-rend-li" },
        { phrase: "Revolutionize", meaning: "Devrim yapmak", context: "Eylem", example: "The internet revolutionized communication.", pronunciation: "re-vo-lu-şı-nayz" },
        { phrase: "Artificial intelligence", meaning: "Yapay zeka", context: "Teknoloji", example: "Artificial intelligence is changing the world.", pronunciation: "ar-ti-fi-şıl in-te-li-cıns" },
        { phrase: "Connectivity", meaning: "Bağlanabilirlik", context: "Teknoloji", example: "Better connectivity in rural areas.", pronunciation: "ko-nek-ti-vi-ti" },
        { phrase: "State-of-the-art", meaning: "Son teknoloji", context: "Teknoloji", example: "State-of-the-art facilities.", pronunciation: "s-teyt ov dı art" },
        { phrase: "Efficient", meaning: "Verimli", context: "Bilim", example: "An efficient way to produce energy.", pronunciation: "e-fi-şınt" },
        { phrase: "Explore new horizons", meaning: "Yeni ufuklar keşfetmek", context: "Deyim", example: "Science helps us explore new horizons.", pronunciation: "eks-p-lor nu ho-ray-zınz" }
    ]
};

// Unit 178: Sağlık ve Beslenme
export const u178: EnglishPhraseUnit = {
    unitId: 178, title: "Sağlık ve Beslenme", phrases: [
        { phrase: "Balanced diet", meaning: "Dengeli diyet", context: "Sağlık", example: "A balanced diet is essential for health.", pronunciation: "be-lınst da-yıt" },
        { phrase: "Nutritional value", meaning: "Besin değeri", context: "Sağlık", example: "Apples have high nutritional value.", pronunciation: "nu-t-ri-şı-nıl vel-yu" },
        { phrase: "Heart rate", meaning: "Kalp atış hızı", context: "Sağlık", example: "Check your heart rate during exercise.", pronunciation: "hart reyt" },
        { phrase: "Physical activity", meaning: "Fiziksel aktivite", context: "Sağlık", example: "Physical activity reduces stress.", pronunciation: "fi-zi-kıl ek-ti-vi-ti" },
        { phrase: "Calorie count", meaning: "Kalori hesabı", context: "Sağlık", example: "Watch your daily calorie count.", pronunciation: "ke-lo-ri ka-unt" },
        { phrase: "Healthy habit", meaning: "Sağlıklı alışkanlık", context: "Sağlık", example: "Washing hands is a healthy habit.", pronunciation: "hel-ti he-bit" },
        { phrase: "Mental health", meaning: "Ruh sağlığı", context: "Sağlık", example: "Mental health is as important as physical.", pronunciation: "men-tıl hel-th" },
        { phrase: "Stay hydrated", meaning: "Su içmeyi unutma (vücudu susuz bırakma)", context: "Sağlık", example: "Remember to stay hydrated in summer.", pronunciation: "s-tey hay-d-rey-tid" },
        { phrase: "Prevent diseases", meaning: "Hastalıkları önlemek", context: "Sağlık", example: "Vaccines help prevent diseases.", pronunciation: "p-ri-vent di-zi-zız" },
        { phrase: "Medical check-up", meaning: "Doktor kontrolü", context: "Sağlık", example: "Have a medical check-up once a year.", pronunciation: "me-di-kıl çek ap" },
        { phrase: "Low-fat", meaning: "Az yağlı", context: "Sağlık", example: "I prefer low-fat yogurt.", pronunciation: "lou fet" },
        { phrase: "Vitamins and minerals", meaning: "Vitaminler ve mineraller", context: "Sağlık", example: "Fruit is full of vitamins and minerals.", pronunciation: "vay-ta-minz end mi-nı-rılz" },
        { phrase: "Get enough sleep", meaning: "Yeterince uyu", context: "Sağlık", example: "Try to get enough sleep every night.", pronunciation: "get i-naf s-li-ip" },
        { phrase: "Processed food", meaning: "İşlenmiş gıda", context: "Sağlık", example: "Avoid eating too much processed food.", pronunciation: "p-ro-ses-t fu-ud" },
        { phrase: "Well-being", meaning: "Refah / Esenlik", context: "Sağlık", example: "Exercise improves your well-being.", pronunciation: "vel bi-ing" }
    ]
};

// Unit 179: Psikoloji Temelleri
export const u179: EnglishPhraseUnit = {
    unitId: 179, title: "Psikoloji Temelleri", phrases: [
        { phrase: "Behavior pattern", meaning: "Davranış kalıbı", context: "Psikoloji", example: "Breaking a bad behavior pattern.", pronunciation: "bi-hey-v-yır pe-törn" },
        { phrase: "Coping mechanism", meaning: "Başa çıkma mekanizması", context: "Psikoloji", example: "Music is my coping mechanism for stress.", pronunciation: "ko-ping me-ke-ni-zım" },
        { phrase: "Emotional intelligence", meaning: "Duygusal zeka", context: "Psikoloji", example: "Emotional intelligence is key in leaders.", pronunciation: "i-mo-şı-nıl in-te-li-cıns" },
        { phrase: "Self-esteem", meaning: "Özgüven / Kendine saygı", context: "Psikoloji", example: "Positive self-esteem is important.", pronunciation: "self es-tim" },
        { phrase: "Cognitive development", meaning: "Bilişsel gelişim", context: "Psikoloji", example: "Child's cognitive development.", pronunciation: "kog-ni-tiv di-ve-lop-mınt" },
        { phrase: "Social influence", meaning: "Sosyal etki", context: "Psikoloji", example: "Peer pressure is a social influence.", pronunciation: "so-şıl in-f-lu-ıns" },
        { phrase: "Motivation", meaning: "Motivasyon", context: "Psikoloji", example: "What is your main motivation?", pronunciation: "mo-ti-vey-şın" },
        { phrase: "Subconscious", meaning: "Bilinçaltı", context: "Psikoloji", example: "Fear often lies in the subconscious.", pronunciation: "sab-kon-şıs" },
        { phrase: "Anxiety", meaning: "Kaygı / Endişe", context: "Psikoloji", example: "Social anxiety can be difficult.", pronunciation: "ang-za-yı-ti" },
        { phrase: "Empathy", meaning: "Empati", context: "Psikoloji", example: "Have empathy for others.", pronunciation: "em-pa-ti" },
        { phrase: "Personality traits", meaning: "Kişilik özellikleri", context: "Psikoloji", example: "Honesty is one of her personality traits.", pronunciation: "per-sı-ne-li-ti t-reyts" },
        { phrase: "Perception", meaning: "Algı", context: "Psikoloji", example: "Our perception of reality.", pronunciation: "pör-sep-şın" },
        { phrase: "Memory loss", meaning: "Hafıza kaybı", context: "Psikoloji", example: "He suffered from minor memory loss.", pronunciation: "me-mo-ri los" },
        { phrase: "Mindfulness", meaning: "Farkındalık / Bilinçli farkındalık", context: "Psikoloji", example: "Practicing mindfulness daily.", pronunciation: "maynd-ful-nıs" },
        { phrase: "Stress management", meaning: "Stres yönetimi", context: "Psikoloji", example: "Techniques for stress management.", pronunciation: "s-t-res me-nıc-mınt" }
    ]
};

// Unit 180: İş İngilizcesi 1
export const u180: EnglishPhraseUnit = {
    unitId: 180, title: "İş İngilizcesi 1", phrases: [
        { phrase: "Quarterly report", meaning: "Üç aylık rapor", context: "İş", example: "Submit the quarterly report by Friday.", pronunciation: "kvor-tör-li ri-port" },
        { phrase: "Meeting agenda", meaning: "Toplantı gündemi", context: "İş", example: "What is on the meeting agenda today?", pronunciation: "mi-ting e-cen-da" },
        { phrase: "Market research", meaning: "Pazar araştırması", context: "İş", example: "Conduct market research first.", pronunciation: "mar-kıt ri-sörç" },
        { phrase: "Customer service", meaning: "Müşteri hizmetleri", context: "İş", example: "Customer service is our priority.", pronunciation: "kas-tı-mır sör-vis" },
        { phrase: "Project deadline", meaning: "Proje teslim tarihi", context: "İş", example: "Don't miss the project deadline.", pronunciation: "p-ro-cekt ded-layn" },
        { phrase: "Sales target", meaning: "Satış hedefi", context: "İş", example: "Did we reach our sales target?", pronunciation: "seylz tar-git" },
        { phrase: "Company policy", meaning: "Şirket politikası", context: "İş", example: "According to company policy, no smoking.", pronunciation: "kam-pı-ni po-li-si" },
        { phrase: "Competitive market", meaning: "Rekabetçi pazar", context: "İş", example: "It's a very competitive market.", pronunciation: "kom-pe-ti-tiv mar-kıt" },
        { phrase: "Business partnership", meaning: "İş ortaklığı", context: "İş", example: "A new business partnership was formed.", pronunciation: "biz-nis part-nır-şip" },
        { phrase: "Strategic planning", meaning: "Stratejik planlama", context: "İş", example: "Focus on strategic planning for next year.", pronunciation: "s-t-ra-te-cik p-le-ning" },
        { phrase: "Networking event", meaning: "Ağ kurma etkinliği", context: "İş", example: "Join the networking event tonight.", pronunciation: "net-vör-king i-vent" },
        { phrase: "Professional development", meaning: "Mesleki gelişim", context: "İş", example: "Invest in professional development.", pronunciation: "p-ro-fe-şı-nıl di-ve-lop-mınt" },
        { phrase: "Budget cut", meaning: "Bütçe kesintisi", context: "İş", example: "There was a massive budget cut.", pronunciation: "ba-cit kat" },
        { phrase: "Brand awareness", meaning: "Marka bilinirliği", context: "İş", example: "Increase brand awareness online.", pronunciation: "b-rend e-ver-nıs" },
        { phrase: "Product launch", meaning: "Ürün lansmanı", context: "İş", example: "The product launch was a success.", pronunciation: "p-ro-dakt lonç" }
    ]
};

// Unit 181: Past Perfect
export const u181: EnglishPhraseUnit = {
    unitId: 181, title: "Past Perfect", phrases: [
        { phrase: "I had already eaten", meaning: "Zaten yemiştim", context: "Zaman", example: "When she arrived, I had already eaten.", pronunciation: "ay hed ol-re-di i-tın" },
        { phrase: "He had never seen it", meaning: "Onu daha önce hiç görmemişti", context: "Zaman", example: "He told me he had never seen it before.", pronunciation: "hi hed ne-vır sin it" },
        { phrase: "The train had left", meaning: "Tren kalkmıştı", context: "Zaman", example: "By the time we got there, the train had left.", pronunciation: "dı t-reyn hed left" },
        { phrase: "I had forgotten my keys", meaning: "Anahtarlarımı unutmuştum", context: "Eylem", example: "I realized I had forgotten my keys at home.", pronunciation: "ay hed for-go-tın may ki-iz" },
        { phrase: "After I had finished", meaning: "Bitirdikten sonra", context: "Bağlaç", example: "After I had finished my work, I went out.", pronunciation: "af-tır ay hed fi-nişt" },
        { phrase: "She had been a teacher", meaning: "Öğretmenlik yapmıştı", context: "Durum", example: "Before retiring, she had been a teacher for 30 years.", pronunciation: "şi hed bi-in e ti-çır" },
        { phrase: "Had you heard the news?", meaning: "Haberi duymuş muydun?", context: "Soru", example: "Had you heard the news before I told you?", pronunciation: "hed yu hörd dı nu-uz" },
        { phrase: "If I had known", meaning: "Eğer bilseydim", context: "Koşul", example: "If I had known, I would have come.", pronunciation: "if ay hed noun" },
        { phrase: "I wished I had stayed", meaning: "Keşke kalsaydım", context: "Pişmanlık", example: "I wished I had stayed a bit longer.", pronunciation: "ay vişt ay hed s-teyd" },
        { phrase: "Everything had changed", meaning: "Her şey değişmişti", context: "Durum", example: "When I returned, everything had changed.", pronunciation: "ev-ri-ting hed çeync-d" },
        { phrase: "They had already decided", meaning: "Çoktan karar vermişlerdi", context: "Karar", example: "They had already decided to sell the house.", pronunciation: "dey hed ol-re-di di-say-did" },
        { phrase: "I had never been there", meaning: "Oraya hiç gitmemiştim", context: "Deneyim", example: "I had never been there until last year.", pronunciation: "ay hed ne-vır bi-in der" },
        { phrase: "As soon as he had left", meaning: "O gider gitmez", context: "Zaman", example: "As soon as he had left, the phone rang.", pronunciation: "ez su-un ez hi hed left" },
        { phrase: "She had just arrived", meaning: "Henüz varmıştı", context: "Zaman", example: "She had just arrived when it started to rain.", pronunciation: "şi hed cast e-ray-vd" },
        { phrase: "Hardly had I started", meaning: "Tam başlamıştım ki (henüz başlamıştım)", context: "Zaman", example: "Hardly had I started when the bell rang.", pronunciation: "hard-li hed ay s-tar-tid" }
    ]
};

// Unit 182: Future Perfect
export const u182: EnglishPhraseUnit = {
    unitId: 182, title: "Future Perfect", phrases: [
        { phrase: "I will have finished", meaning: "Bitirmiş olacağım", context: "Zaman", example: "By 5 PM, I will have finished my report.", pronunciation: "ay vil hev fi-nişt" },
        { phrase: "She will have arrived", meaning: "Varmış olacak", context: "Zaman", example: "By tomorrow, she will have arrived in Paris.", pronunciation: "şi vil hev e-ray-vd" },
        { phrase: "Will you have done it?", meaning: "Onu yapmış olacak mısın?", context: "Soru", example: "Will you have done it by next week?", pronunciation: "vil yu hev dan it" },
        { phrase: "They won't have left", meaning: "Ayrılmamış olacaklar", context: "Tahmin", example: "I think they won't have left yet.", pronunciation: "dey vount hev left" },
        { phrase: "By next year", meaning: "Gelecek yıla kadar", context: "Zaman", example: "By next year, I will have bought a car.", pronunciation: "bay nekst yi-ır" },
        { phrase: "I'll have been working", meaning: "Çalışıyor olacağım (o vakte kadar)", context: "Süreç", example: "I'll have been working here for 10 years by July.", pronunciation: "ayl hev bi-in vör-king" },
        { phrase: "Everything will have changed", meaning: "Her şey değişmiş olacak", context: "Durum", example: "In ten years, everything will have changed.", pronunciation: "ev-ri-ting vil hev çeync-d" },
        { phrase: "Will it have ended?", meaning: "Bitmiş olacak mı?", context: "Soru", example: "Will the movie have ended by 10?", pronunciation: "vil it hev en-did" },
        { phrase: "By the end of the month", meaning: "Ay sonuna kadar", context: "Zaman", example: "By the end of the month, I will have saved $100.", pronunciation: "bay dı end ov dı manth" },
        { phrase: "He will have forgotten", meaning: "Unutmuş olacak", context: "Tahmin", example: "Soon, he will have forgotten the whole thing.", pronunciation: "hi vil hev for-go-tın" },
        { phrase: "I'll have completed the course", meaning: "Kursu tamamlamış olacağım", context: "Başarı", example: "I'll have completed the course by December.", pronunciation: "ayl hev kom-p-li-tid dı kors" },
        { phrase: "Will they have heard?", meaning: "Duymuş olacaklar mı?", context: "Soru", example: "Will they have heard the news by then?", pronunciation: "vil dey hev hörd" },
        { phrase: "By this time tomorrow", meaning: "Yarın bu vakitte", context: "Zaman", example: "By this time tomorrow, I'll have arrived home.", pronunciation: "bay dis taym tu-mo-rou" },
        { phrase: "It will have rained", meaning: "Yağmış olacak", context: "Hava", example: "The ground is wet. It will have rained.", pronunciation: "it vil hev reynd" },
        { phrase: "She'll have graduated", meaning: "Mezun olmuş olacak", context: "Eğitim", example: "Next summer, she'll have graduated.", pronunciation: "şil hev g-ra-cu-ey-tid" }
    ]
};

// Unit 183: Relative Clauses
export const u183: EnglishPhraseUnit = {
    unitId: 183, title: "Relative Clauses", phrases: [
        { phrase: "The man who lives here", meaning: "Burada yaşayan adam", context: "Tanımlama", example: "The man who lives here is a doctor.", pronunciation: "dı men hu livz hi-ır" },
        { phrase: "The book which I read", meaning: "Okuduğum kitap", context: "Tanımlama", example: "The book which I read was great.", pronunciation: "dı buk viç ay red" },
        { phrase: "The girl that I saw", meaning: "Gördüğüm kız", context: "Tanımlama", example: "The girl that I saw earlier is my sister.", pronunciation: "dı görl det ay so" },
        { phrase: "Whose car is this?", meaning: "Bu kimin arabası?", context: "Mülkiyet", example: "Do you know whose car this is?", pronunciation: "huz kar iz dis" },
        { phrase: "The place where we met", meaning: "Tanıştığımız yer", context: "Mekan", example: "This is the place where we met.", pronunciation: "dı s-peys ver vi met" },
        { phrase: "The time when it happened", meaning: "Olduğu zaman", context: "Zaman", example: "I remember the time when it happened.", pronunciation: "dı taym ven it he-pınd" },
        { phrase: "People whom I know", meaning: "Tanıdığım insanlar", context: "Resmi", example: "There are many people whom I know here.", pronunciation: "pi-pıl hum ay nou" },
        { phrase: "Is this the one?", meaning: "Bu o mu?", context: "Soru", example: "Is this the one you were talking about?", pronunciation: "iz dis dı van" },
        { phrase: "The reason why", meaning: "Neden / Sebep", context: "Gerekçe", example: "That's the reason why I'm here.", pronunciation: "dı ri-zın vay" },
        { phrase: "A friend of mine", meaning: "Benim bir arkadaşım", context: "Aitlik", example: "She is a friend of mine.", pronunciation: "e f-rend ov mayn" },
        { phrase: "Someone you trust", meaning: "Güvendiğin biri", context: "İnsan", example: "You need someone you trust.", pronunciation: "sam-van yu t-rast" },
        { phrase: "All that matters", meaning: "Tüm önemli olan / Tek önemli olan", context: "Vurgu", example: "Love is all that matters.", pronunciation: "ol det me-törz" },
        { phrase: "Which means that", meaning: "Ki bu şu anlama gelir ki", context: "Açıklama", example: "It's free, which means that we can save money.", pronunciation: "viç mi-inz det" },
        { phrase: "The student whose father", meaning: "Babası ... olan öğrenci", context: "İlişki", example: "The student whose father is a pilot.", pronunciation: "dı s-tu-dınt huz fa-dır" },
        { phrase: "Whoever told you that", meaning: "Sana bunu her kim söylediyse", context: "İfade", example: "Whoever told you that was lying.", pronunciation: "hu-e-vır told yu det" }
    ]
};

// Unit 184: Causatives
export const u184: EnglishPhraseUnit = {
    unitId: 184, title: "Causatives", phrases: [
        { phrase: "Have my car fixed", meaning: "Arabamı tamir ettirmek", context: "Eylem", example: "I need to have my car fixed today.", pronunciation: "hev may kar fikst" },
        { phrase: "Get your hair cut", meaning: "Saçını kestirmek", context: "Bakım", example: "You should get your hair cut soon.", pronunciation: "get yör he-ır kat" },
        { phrase: "Make him do it", meaning: "Ona yaptırtmak", context: "Zorlama", example: "You can't make him do it if he doesn't want.", pronunciation: "meyk him du it" },
        { phrase: "Let me go", meaning: "Bırak gideyim / İzin ver gideyim", context: "İzin", example: "Please, let me go now.", pronunciation: "let mi gou" },
        { phrase: "Help me move", meaning: "Taşınmama yardım et", context: "Yardım", example: "Can you help me move this weekend?", pronunciation: "help mi mu-uv" },
        { phrase: "Have the house painted", meaning: "Evi boyatmak", context: "Eylem", example: "We're going to have the house painted.", pronunciation: "hev dı haus peyn-tid" },
        { phrase: "Get things done", meaning: "İşleri halletmek", context: "Eylem", example: "I need to get things done by Friday.", pronunciation: "get fings dan" },
        { phrase: "Make a decision", meaning: "Karar vermek", context: "Eylem", example: "It's time to make a decision.", pronunciation: "meyk e di-si-jın" },
        { phrase: "Let's get started", meaning: "Hadi başlayalım", context: "Başlangıç", example: "The meeting is at 9. Let's get started.", pronunciation: "lets get s-tar-tid" },
        { phrase: "Have a look", meaning: "Bir bak / Göz at", context: "Rica", example: "Can you have a look at this document?", pronunciation: "hev e luk" },
        { phrase: "Get someone to help", meaning: "Birine yardım ettirmek", context: "Eylem", example: "I'll get someone to help you with the bags.", pronunciation: "get sam-van tu help" },
        { phrase: "I'll have it ready", meaning: "Onu hazır edeceğim", context: "Söz", example: "I'll have it ready for you tomorrow.", pronunciation: "ayl hev it re-di" },
        { phrase: "Let it be", meaning: "Bırak öyle kalsın / Kurcalama", context: "Deyim", example: "It's not perfect, but let it be.", pronunciation: "let it bi" },
        { phrase: "Make yourself at home", meaning: "Kendini evinde hisset", context: "Sosyal", example: "Come in and make yourself at home.", pronunciation: "meyk yör-self et hom" },
        { phrase: "Get used to it", meaning: "Ona alışmak", context: "Süreç", example: "It's noisy, but you'll get used to it.", pronunciation: "get yu-zd tu it" }
    ]
};

// Unit 185: Wish Clauses
export const u185: EnglishPhraseUnit = {
    unitId: 185, title: "Wish Clauses", phrases: [
        { phrase: "I wish I were rich", meaning: "Keşke zengin olsaydım", context: "Arzu", example: "I wish I were rich and could travel.", pronunciation: "ay viş ay vör riç" },
        { phrase: "I wish I could go", meaning: "Keşke gidebilseydim", context: "Arzu", example: "I'm busy, but I wish I could go.", pronunciation: "ay viş ay kud gou" },
        { phrase: "I wish it would stop raining", meaning: "Keşke yağmur dursa", context: "Şikayet", example: "I wish it would stop raining so we could play.", pronunciation: "ay viş it vud s-top rey-ning" },
        { phrase: "I wish I had told her", meaning: "Keşke ona söyleseydim", context: "Pişmanlık", example: "Now it's too late. I wish I had told her.", pronunciation: "ay viş ay hed told hör" },
        { phrase: "If only I knew", meaning: "Keşke bilseydim", context: "Arzu", example: "If only I knew the answer!", pronunciation: "if on-li ay nu" },
        { phrase: "I wish you were here", meaning: "Keşke burada olsaydın", context: "Duygu", example: "The view is lovely. I wish you were here.", pronunciation: "ay viş yu vör hi-ır" },
        { phrase: "I wish I had more time", meaning: "Keşke daha çok vaktim olsaydı", context: "Arzu", example: "I wish I had more time to finish this.", pronunciation: "ay viş ay hed mor taym" },
        { phrase: "I wish he would listen", meaning: "Keşke dinlese", context: "Şikayet", example: "He's making a mistake. I wish he would listen.", pronunciation: "ay viş hi vud li-sın" },
        { phrase: "I wish I hadn't said that", meaning: "Keşke onu söylemeseydim", context: "Pişmanlık", example: "I feel bad now. I wish I hadn't said that.", pronunciation: "ay viş ay hed-ınt sed det" },
        { phrase: "If only we could fly", meaning: "Keşke uçabilsek", context: "Hayal", example: "If only we could fly like birds.", pronunciation: "if on-li vi kud f-lay" },
        { phrase: "I wish you wouldn't do that", meaning: "Keşke bunu yapmasan", context: "Şikayet", example: "It's annoying. I wish you wouldn't do that.", pronunciation: "ay viş yu vud-ınt du det" },
        { phrase: "I wish life were easier", meaning: "Keşke hayat daha kolay olsaydı", context: "Arzu", example: "I wish life were easier sometimes.", pronunciation: "ay viş layf vör i-zi-ır" },
        { phrase: "If only she had come", meaning: "Keşke gelseydi", context: "Pişmanlık", example: "The party was fun. If only she had come.", pronunciation: "if on-li şi hed kam" },
        { phrase: "I wish I knew how", meaning: "Keşke nasıl (yapıldığını) bilseydim", context: "Yetersizlik", example: "I wish I knew how to fix this car.", pronunciation: "ay viş ay nu hau" },
        { phrase: "Best wishes", meaning: "En iyi dileklerimle", context: "Kapanış", example: "Happy birthday and best wishes!", pronunciation: "best vi-şız" }
    ]
};

const unitMap: { [key: number]: EnglishPhraseUnit } = {
    161: u161, 162: u162, 163: u163, 164: u164, 165: u165,
    166: u166, 167: u167, 168: u168, 169: u169, 170: u170,
    171: u171, 172: u172, 173: u173, 174: u174, 175: u175,
    176: u176, 177: u177, 178: u178, 179: u179, 180: u180,
    181: u181, 182: u182, 183: u183, 184: u184, 185: u185,
    186: u186, 187: u187, 188: u188, 189: u189, 190: u190,
};

export function getEnglishB1PhrasesForUnit(unitId: number): EnglishPhraseUnit {
    return unitMap[unitId] || u161;
}
