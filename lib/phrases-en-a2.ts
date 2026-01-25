/**
 * SteadyShell Phrases - English A2 (Units 131-140)
 * 15 phrase per unit
 */

export interface EnglishPhrase {
    phrase: string;
    meaning: string;
    context: string;
    example: string;
}

export interface EnglishPhraseUnit {
    unitId: number;
    title: string;
    phrases: EnglishPhrase[];
}

// Unit 131: Past Simple Regular
export const u131: EnglishPhraseUnit = {
    unitId: 131, title: "Past Simple - Regular Verbs", phrases: [
        { phrase: "Last week", meaning: "Geçen hafta", context: "Zaman", example: "I saw him last week." },
        { phrase: "A month ago", meaning: "Bir ay önce", context: "Zaman", example: "I started a month ago." },
        { phrase: "In the past", meaning: "Geçmişte", context: "Zaman", example: "In the past, people lived differently." },
        { phrase: "The other day", meaning: "Geçen gün", context: "Zaman", example: "I met her the other day." },
        { phrase: "Once upon a time", meaning: "Bir zamanlar", context: "Hikaye", example: "Once upon a time, there was a king." },
        { phrase: "Yesterday morning", meaning: "Dün sabah", context: "Zaman", example: "I woke up early yesterday morning." },
        { phrase: "Last night", meaning: "Dün gece", context: "Zaman", example: "I watched a movie last night." },
        { phrase: "Two days ago", meaning: "İki gün önce", context: "Zaman", example: "I finished the project two days ago." },
        { phrase: "A year ago", meaning: "Bir yıl önce", context: "Zaman", example: "A year ago, I started learning English." },
        { phrase: "Long ago", meaning: "Uzun zaman önce", context: "Zaman", example: "Long ago, there were no computers." },
        { phrase: "At that time", meaning: "O zaman", context: "Zaman", example: "At that time, I was a student." },
        { phrase: "Back then", meaning: "O zamanlar", context: "Zaman", example: "Back then, life was simpler." },
        { phrase: "In the old days", meaning: "Eski günlerde", context: "Zaman", example: "In the old days, people wrote letters." },
        { phrase: "Earlier today", meaning: "Bugün daha önce", context: "Zaman", example: "I called him earlier today." },
        { phrase: "Just now", meaning: "Az önce", context: "Zaman", example: "I finished my homework just now." }
    ]
};

// Unit 132: Past Simple Irregular
export const u132: EnglishPhraseUnit = {
    unitId: 132, title: "Past Simple - Irregular Verbs", phrases: [
        { phrase: "When I was young", meaning: "Gençken", context: "Geçmiş", example: "When I was young, I played football." },
        { phrase: "Back in the day", meaning: "O zamanlar", context: "Geçmiş", example: "Back in the day, we had no internet." },
        { phrase: "Years ago", meaning: "Yıllar önce", context: "Zaman", example: "I met her years ago." },
        { phrase: "Long time ago", meaning: "Uzun zaman önce", context: "Zaman", example: "Long time ago, I lived in Paris." },
        { phrase: "In those days", meaning: "O günlerde", context: "Geçmiş", example: "In those days, life was simpler." },
        { phrase: "When I was a child", meaning: "Çocukken", context: "Geçmiş", example: "When I was a child, I had many toys." },
        { phrase: "In my childhood", meaning: "Çocukluğumda", context: "Geçmiş", example: "In my childhood, we lived in a village." },
        { phrase: "As a teenager", meaning: "Ergenken", context: "Geçmiş", example: "As a teenager, I loved music." },
        { phrase: "During my school years", meaning: "Okul yıllarımda", context: "Geçmiş", example: "During my school years, I made many friends." },
        { phrase: "At that moment", meaning: "O anda", context: "Zaman", example: "At that moment, I understood everything." },
        { phrase: "Before that", meaning: "Ondan önce", context: "Zaman", example: "Before that, I had never seen the sea." },
        { phrase: "After that", meaning: "Ondan sonra", context: "Zaman", example: "After that, everything changed." },
        { phrase: "First... then", meaning: "Önce... sonra", context: "Sıralama", example: "First I woke up, then I had breakfast." },
        { phrase: "Finally", meaning: "Sonunda", context: "Sıralama", example: "Finally, we arrived home." },
        { phrase: "All of a sudden", meaning: "Birdenbire", context: "Anlatı", example: "All of a sudden, it started raining." }
    ]
};

// Unit 133: Restaurant
export const u133: EnglishPhraseUnit = {
    unitId: 133, title: "Restaurant Phrases", phrases: [
        { phrase: "A table for two, please", meaning: "İki kişilik masa lütfen", context: "Restoran", example: "A table for two, please." },
        { phrase: "I'd like to order", meaning: "Sipariş vermek istiyorum", context: "Sipariş", example: "I'd like to order now." },
        { phrase: "What do you recommend?", meaning: "Ne önerirsiniz?", context: "Sipariş", example: "What do you recommend today?" },
        { phrase: "The bill, please", meaning: "Hesap lütfen", context: "Ödeme", example: "Can we have the bill, please?" },
        { phrase: "Keep the change", meaning: "Üstü kalsın", context: "Ödeme", example: "Here you go. Keep the change." },
        { phrase: "Can I see the menu?", meaning: "Menüyü görebilir miyim?", context: "Sipariş", example: "Can I see the menu, please?" },
        { phrase: "I'll have the...", meaning: "Ben... alacağım", context: "Sipariş", example: "I'll have the steak, please." },
        { phrase: "Is this dish spicy?", meaning: "Bu yemek acılı mı?", context: "Soru", example: "Is this dish spicy?" },
        { phrase: "Could I have some water?", meaning: "Biraz su alabilir miyim?", context: "İstek", example: "Could I have some water, please?" },
        { phrase: "Everything was delicious", meaning: "Her şey lezzetliydi", context: "Yorum", example: "Everything was delicious, thank you." },
        { phrase: "We're ready to order", meaning: "Sipariş vermeye hazırız", context: "Sipariş", example: "We're ready to order now." },
        { phrase: "I'm vegetarian", meaning: "Vejetaryenim", context: "Bilgi", example: "I'm vegetarian. Do you have salads?" },
        { phrase: "Can we split the bill?", meaning: "Hesabı bölebilir miyiz?", context: "Ödeme", example: "Can we split the bill?" },
        { phrase: "Do you take credit cards?", meaning: "Kredi kartı kabul ediyor musunuz?", context: "Ödeme", example: "Do you take credit cards?" },
        { phrase: "For here or to go?", meaning: "Burada mı paket mi?", context: "Sipariş", example: "For here or to go?" }
    ]
};

// Unit 134: Shopping
export const u134: EnglishPhraseUnit = {
    unitId: 134, title: "Shopping Phrases", phrases: [
        { phrase: "Just looking", meaning: "Sadece bakıyorum", context: "Mağaza", example: "No thanks, just looking." },
        { phrase: "How much is this?", meaning: "Bu ne kadar?", context: "Fiyat", example: "Excuse me, how much is this?" },
        { phrase: "On sale", meaning: "İndirimde", context: "Fiyat", example: "This jacket is on sale." },
        { phrase: "That's too expensive", meaning: "Çok pahalı", context: "Fiyat", example: "That's too expensive for me." },
        { phrase: "I'll take it", meaning: "Alıyorum", context: "Satın alma", example: "It fits perfectly. I'll take it." },
        { phrase: "Do you have this in a different size?", meaning: "Bunun farklı bedeni var mı?", context: "Beden", example: "Do you have this in a larger size?" },
        { phrase: "Can I try this on?", meaning: "Bunu deneyebilir miyim?", context: "Mağaza", example: "Can I try this on?" },
        { phrase: "Where are the fitting rooms?", meaning: "Giyinme odaları nerede?", context: "Mağaza", example: "Where are the fitting rooms?" },
        { phrase: "It doesn't fit", meaning: "Uymadı", context: "Beden", example: "It doesn't fit. It's too small." },
        { phrase: "Do you have this in another color?", meaning: "Bunun başka rengi var mı?", context: "Renk", example: "Do you have this in blue?" },
        { phrase: "I'm looking for...", meaning: "...arıyorum", context: "Arama", example: "I'm looking for a winter coat." },
        { phrase: "Is there a discount?", meaning: "İndirim var mı?", context: "Fiyat", example: "Is there a discount on this?" },
        { phrase: "Can I pay by card?", meaning: "Kartla ödeyebilir miyim?", context: "Ödeme", example: "Can I pay by card?" },
        { phrase: "Keep the receipt", meaning: "Fişi saklayın", context: "Ödeme", example: "Keep the receipt for return." },
        { phrase: "Can I return this?", meaning: "Bunu iade edebilir miyim?", context: "İade", example: "Can I return this if it doesn't fit?" }
    ]
};

// Unit 135: Travel
export const u135: EnglishPhraseUnit = {
    unitId: 135, title: "Travel Phrases", phrases: [
        { phrase: "Have a safe trip", meaning: "İyi yolculuklar", context: "Seyahat", example: "Have a safe trip!" },
        { phrase: "Let's hit the road", meaning: "Yola çıkalım", context: "Seyahat", example: "It's time. Let's hit the road." },
        { phrase: "Travel light", meaning: "Hafif seyahat et", context: "Seyahat", example: "Try to travel light." },
        { phrase: "Off the beaten path", meaning: "Az bilinen yer", context: "Keşif", example: "I like places off the beaten path." },
        { phrase: "Book a flight", meaning: "Uçuş rezervasyonu yap", context: "Planlama", example: "I need to book a flight." },
        { phrase: "Pack your bags", meaning: "Bavulunu topla", context: "Hazırlık", example: "Pack your bags, we leave tomorrow." },
        { phrase: "Check the itinerary", meaning: "Güzergahı kontrol et", context: "Planlama", example: "Let me check the itinerary." },
        { phrase: "Catch a plane", meaning: "Uçağa yetiş", context: "Ulaşım", example: "We need to catch a plane at 6 AM." },
        { phrase: "Travel abroad", meaning: "Yurtdışına seyahat", context: "Seyahat", example: "I love to travel abroad." },
        { phrase: "Go sightseeing", meaning: "Gezmeye git", context: "Aktivite", example: "Let's go sightseeing tomorrow." },
        { phrase: "Take a trip", meaning: "Gezi yap", context: "Seyahat", example: "We're taking a trip next week." },
        { phrase: "Arrive at the destination", meaning: "Varış yerine ulaş", context: "Ulaşım", example: "We arrived at the destination." },
        { phrase: "Get lost", meaning: "Kaybolmak", context: "Problem", example: "I got lost in the city center." },
        { phrase: "Ask for directions", meaning: "Yol sor", context: "İletişim", example: "Let's ask for directions." },
        { phrase: "Enjoy your stay", meaning: "İyi kalışlar", context: "Konaklama", example: "Enjoy your stay at our hotel." }
    ]
};

// Units 136-140 continue...
export const u136: EnglishPhraseUnit = {
    unitId: 136, title: "Hotel Phrases", phrases: [
        { phrase: "Do you have any vacancies?", meaning: "Boş odanız var mı?", context: "Otel", example: "Do you have any vacancies for tonight?" },
        { phrase: "I have a reservation", meaning: "Rezervasyonum var", context: "Otel", example: "Hello, I have a reservation under Smith." },
        { phrase: "Room service", meaning: "Oda servisi", context: "Otel", example: "Can I get room service?" },
        { phrase: "Wake-up call", meaning: "Uyandırma servisi", context: "Otel", example: "I'd like a wake-up call at 7 AM." },
        { phrase: "Check in / Check out", meaning: "Giriş / Çıkış", context: "Otel", example: "What time is check out?" },
        { phrase: "Is breakfast included?", meaning: "Kahvaltı dahil mi?", context: "Otel", example: "Is breakfast included in the price?" },
        { phrase: "I'd like a room with a view", meaning: "Manzaralı oda istiyorum", context: "Otel", example: "I'd like a room with a sea view." },
        { phrase: "Can I have a late checkout?", meaning: "Geç çıkış yapabilir miyim?", context: "Otel", example: "Can I have a late checkout at 2 PM?" },
        { phrase: "Where is the elevator?", meaning: "Asansör nerede?", context: "Otel", example: "Where is the elevator, please?" },
        { phrase: "The air conditioning doesn't work", meaning: "Klima çalışmıyor", context: "Problem", example: "The air conditioning doesn't work." },
        { phrase: "Could I have extra towels?", meaning: "Fazladan havlu alabilir miyim?", context: "İstek", example: "Could I have extra towels?" },
        { phrase: "Is there wifi?", meaning: "Wifi var mı?", context: "Otel", example: "Is there free wifi?" },
        { phrase: "What's the wifi password?", meaning: "Wifi şifresi ne?", context: "Otel", example: "What's the wifi password?" },
        { phrase: "I'd like to extend my stay", meaning: "Kalışımı uzatmak istiyorum", context: "Otel", example: "I'd like to extend my stay by two nights." },
        { phrase: "Can I leave my luggage here?", meaning: "Bagajımı burada bırakabilir miyim?", context: "Otel", example: "Can I leave my luggage here until 3 PM?" }
    ]
};

export const u137: EnglishPhraseUnit = {
    unitId: 137, title: "Airport Phrases", phrases: [
        { phrase: "Next in line", meaning: "Sıradaki", context: "Kuyruk", example: "Next in line, please." },
        { phrase: "Final call", meaning: "Son çağrı", context: "Uçuş", example: "Final call for flight 403." },
        { phrase: "Now boarding", meaning: "Biniş başladı", context: "Uçuş", example: "Gate 5 is now boarding." },
        { phrase: "Carry-on luggage", meaning: "Kabin bagajı", context: "Bagaj", example: "Is this your carry-on luggage?" },
        { phrase: "Fasten your seatbelt", meaning: "Kemerini bağla", context: "Uçuş", example: "Please fasten your seatbelt." },
        { phrase: "Window or aisle?", meaning: "Pencere mi koridor mu?", context: "Koltuk", example: "Window or aisle seat?" },
        { phrase: "Flight delayed", meaning: "Uçuş gecikti", context: "Problem", example: "The flight is delayed by 2 hours." },
        { phrase: "Flight cancelled", meaning: "Uçuş iptal", context: "Problem", example: "Unfortunately, the flight is cancelled." },
        { phrase: "Baggage claim", meaning: "Bagaj teslim", context: "Varış", example: "Go to baggage claim area." },
        { phrase: "Passport control", meaning: "Pasaport kontrolü", context: "Güvenlik", example: "Please proceed to passport control." },
        { phrase: "Customs declaration", meaning: "Gümrük beyanı", context: "Gümrük", example: "Do you have anything to declare?" },
        { phrase: "Duty-free shop", meaning: "Gümrüksüz mağaza", context: "Alışveriş", example: "Let's check the duty-free shop." },
        { phrase: "Gate change", meaning: "Kapı değişikliği", context: "Duyuru", example: "Attention: gate change for flight 789." },
        { phrase: "Have a nice flight", meaning: "İyi uçuşlar", context: "İyi dilek", example: "Have a nice flight!" },
        { phrase: "Direct flight", meaning: "Direkt uçuş", context: "Uçuş", example: "Is this a direct flight?" }
    ]
};

export const u138: EnglishPhraseUnit = {
    unitId: 138, title: "Doctor Phrases", phrases: [
        { phrase: "I don't feel well", meaning: "İyi hissetmiyorum", context: "Sağlık", example: "I don't feel well today." },
        { phrase: "It hurts here", meaning: "Burası ağrıyor", context: "Ağrı", example: "It hurts here when I press." },
        { phrase: "Take a deep breath", meaning: "Derin nefes al", context: "Muayene", example: "Take a deep breath, please." },
        { phrase: "Get well soon", meaning: "Geçmiş olsun", context: "İyi dilek", example: "Get well soon!" },
        { phrase: "I have a headache", meaning: "Başım ağrıyor", context: "Semptom", example: "I have a terrible headache." },
        { phrase: "I have a fever", meaning: "Ateşim var", context: "Semptom", example: "I have a high fever." },
        { phrase: "I've been feeling dizzy", meaning: "Başım dönüyor", context: "Semptom", example: "I've been feeling dizzy lately." },
        { phrase: "Open your mouth", meaning: "Ağzını aç", context: "Muayene", example: "Open your mouth and say 'ahh'." },
        { phrase: "You need to rest", meaning: "Dinlenmen lazım", context: "Tavsiye", example: "You need to rest for a few days." },
        { phrase: "Take this medicine", meaning: "Bu ilacı al", context: "Reçete", example: "Take this medicine twice a day." },
        { phrase: "I'm allergic to...", meaning: "...alerjim var", context: "Bilgi", example: "I'm allergic to penicillin." },
        { phrase: "Schedule an appointment", meaning: "Randevu al", context: "Planlama", example: "I need to schedule an appointment." },
        { phrase: "How long have you had this?", meaning: "Bu ne zamandır var?", context: "Soru", example: "How long have you had this cough?" },
        { phrase: "It's nothing serious", meaning: "Ciddi bir şey değil", context: "Teşhis", example: "Don't worry, it's nothing serious." },
        { phrase: "You should see a specialist", meaning: "Uzman görmelisin", context: "Tavsiye", example: "You should see a specialist." }
    ]
};

export const u139: EnglishPhraseUnit = {
    unitId: 139, title: "Pharmacy Phrases", phrases: [
        { phrase: "Over-the-counter", meaning: "Reçetesiz", context: "İlaç", example: "Is this over-the-counter?" },
        { phrase: "Prescription required", meaning: "Reçete gerekli", context: "İlaç", example: "This medication is prescription required." },
        { phrase: "Take with food", meaning: "Yemekle birlikte al", context: "Kullanım", example: "Take this medicine with food." },
        { phrase: "Side effects", meaning: "Yan etkiler", context: "İlaç", example: "What are the side effects?" },
        { phrase: "Once/twice a day", meaning: "Günde bir/iki kez", context: "Doz", example: "Take it twice a day." },
        { phrase: "Before/after meals", meaning: "Yemeklerden önce/sonra", context: "Kullanım", example: "Take it before meals." },
        { phrase: "Keep out of reach of children", meaning: "Çocukların erişemeyeceği yerde tutun", context: "Uyarı", example: "Keep out of reach of children." },
        { phrase: "Do not exceed the dose", meaning: "Dozu aşma", context: "Uyarı", example: "Do not exceed the recommended dose." },
        { phrase: "I need something for...", meaning: "...için bir şeye ihtiyacım var", context: "İstek", example: "I need something for a headache." },
        { phrase: "Is this safe during pregnancy?", meaning: "Hamilelikte güvenli mi?", context: "Soru", example: "Is this safe during pregnancy?" },
        { phrase: "Generic version", meaning: "Jenerik versiyon", context: "İlaç", example: "Is there a generic version?" },
        { phrase: "Expiry date", meaning: "Son kullanma tarihi", context: "İlaç", example: "Check the expiry date." },
        { phrase: "Shake well before use", meaning: "Kullanmadan önce çalkalayın", context: "Kullanım", example: "Shake well before use." },
        { phrase: "For external use only", meaning: "Sadece harici kullanım", context: "Kullanım", example: "For external use only." },
        { phrase: "Store in a cool place", meaning: "Serin yerde saklayın", context: "Saklama", example: "Store in a cool, dry place." }
    ]
};

export const u140: EnglishPhraseUnit = {
    unitId: 140, title: "Job Phrases", phrases: [
        { phrase: "Nine to five", meaning: "9-5 mesai", context: "İş", example: "I work nine to five." },
        { phrase: "Work from home", meaning: "Evden çalış", context: "İş", example: "I work from home on Fridays." },
        { phrase: "Make a living", meaning: "Geçimini sağla", context: "İş", example: "How do you make a living?" },
        { phrase: "Career ladder", meaning: "Kariyer basamakları", context: "İş", example: "Climbing the career ladder." },
        { phrase: "Apply for a job", meaning: "İşe başvur", context: "Başvuru", example: "I applied for a job at the bank." },
        { phrase: "Full-time/Part-time", meaning: "Tam/yarı zamanlı", context: "İş türü", example: "Is this a full-time position?" },
        { phrase: "Get promoted", meaning: "Terfi etmek", context: "Kariyer", example: "She got promoted to manager." },
        { phrase: "Hand in your notice", meaning: "İstifanı ver", context: "İş", example: "He handed in his notice." },
        { phrase: "Work overtime", meaning: "Fazla mesai yap", context: "İş", example: "I had to work overtime yesterday." },
        { phrase: "Take a day off", meaning: "Bir gün izin al", context: "İzin", example: "Can I take a day off next week?" },
        { phrase: "Be in charge of", meaning: "Sorumlu olmak", context: "Görev", example: "She's in charge of marketing." },
        { phrase: "Meet a deadline", meaning: "Teslim tarihine yetiş", context: "İş", example: "We need to meet the deadline." },
        { phrase: "Work under pressure", meaning: "Baskı altında çalış", context: "İş", example: "I can work under pressure." },
        { phrase: "Team meeting", meaning: "Ekip toplantısı", context: "İş", example: "We have a team meeting at 10." },
        { phrase: "Call in sick", meaning: "Hasta olduğunu bildir", context: "İş", example: "I had to call in sick today." }
    ]
};
// Units 141-160 - Part 2

export const u141: EnglishPhraseUnit = {
    unitId: 141, title: "Interview Phrases", phrases: [
        { phrase: "Tell me about yourself", meaning: "Kendinizden bahsedin", context: "Görüşme", example: "Tell me about yourself." },
        { phrase: "Team player", meaning: "Takım oyuncusu", context: "Görüşme", example: "I'm a team player." },
        { phrase: "Problem solver", meaning: "Problem çözücü", context: "Görüşme", example: "I'm a problem solver." },
        { phrase: "Hit the ground running", meaning: "Hızlı başla", context: "Görüşme", example: "I can hit the ground running." },
        { phrase: "What are your strengths?", meaning: "Güçlü yönleriniz neler?", context: "Görüşme", example: "What are your strengths?" },
        { phrase: "What are your weaknesses?", meaning: "Zayıf yönleriniz neler?", context: "Görüşme", example: "What are your weaknesses?" },
        { phrase: "Why should we hire you?", meaning: "Sizi neden işe alalım?", context: "Görüşme", example: "Why should we hire you?" },
        { phrase: "What is your salary expectation?", meaning: "Maaş beklentiniz ne?", context: "Görüşme", example: "What is your salary expectation?" },
        { phrase: "When can you start?", meaning: "Ne zaman başlayabilirsiniz?", context: "Görüşme", example: "When can you start?" },
        { phrase: "Do you have any questions?", meaning: "Sorunuz var mı?", context: "Görüşme", example: "Do you have any questions for us?" },
        { phrase: "I have experience in...", meaning: "...konusunda deneyimim var", context: "Görüşme", example: "I have experience in marketing." },
        { phrase: "I'm a quick learner", meaning: "Çabuk öğrenirim", context: "Görüşme", example: "I'm a quick learner." },
        { phrase: "I work well under pressure", meaning: "Baskı altında iyi çalışırım", context: "Görüşme", example: "I work well under pressure." },
        { phrase: "Thank you for your time", meaning: "Zamanınız için teşekkürler", context: "Görüşme", example: "Thank you for your time." },
        { phrase: "I look forward to hearing from you", meaning: "Sizden haber bekliyorum", context: "Görüşme", example: "I look forward to hearing from you." }
    ]
};

export const u142: EnglishPhraseUnit = {
    unitId: 142, title: "Phone Phrases", phrases: [
        { phrase: "Speaking", meaning: "Ben konuşuyorum", context: "Telefon", example: "John speaking. How can I help?" },
        { phrase: "Hold the line", meaning: "Hatta kalın", context: "Telefon", example: "Please hold the line." },
        { phrase: "I'll put you through", meaning: "Bağlıyorum", context: "Telefon", example: "I'll put you through to sales." },
        { phrase: "Call back later", meaning: "Sonra ara", context: "Telefon", example: "Can you call back later?" },
        { phrase: "May I speak to...?", meaning: "...ile konuşabilir miyim?", context: "Telefon", example: "May I speak to Mr. Smith?" },
        { phrase: "Who's calling, please?", meaning: "Kim arıyor?", context: "Telefon", example: "Who's calling, please?" },
        { phrase: "I'm sorry, he/she is not available", meaning: "Üzgünüm, müsait değil", context: "Telefon", example: "I'm sorry, she's not available." },
        { phrase: "Can I take a message?", meaning: "Mesaj alabilir miyim?", context: "Telefon", example: "Can I take a message?" },
        { phrase: "Could you spell that?", meaning: "Heceler misiniz?", context: "Telefon", example: "Could you spell your name?" },
        { phrase: "I'll call you back", meaning: "Sizi arayacağım", context: "Telefon", example: "I'll call you back in 5 minutes." },
        { phrase: "The line is busy", meaning: "Hat meşgul", context: "Telefon", example: "The line is busy. Try again." },
        { phrase: "You have the wrong number", meaning: "Yanlış numarayı aradınız", context: "Telefon", example: "Sorry, you have the wrong number." },
        { phrase: "Can you hear me?", meaning: "Beni duyuyor musunuz?", context: "Telefon", example: "Can you hear me now?" },
        { phrase: "The connection is bad", meaning: "Bağlantı kötü", context: "Telefon", example: "The connection is bad." },
        { phrase: "I'm losing signal", meaning: "Sinyal kaybediyorum", context: "Telefon", example: "I'm losing signal." }
    ]
};

export const u143: EnglishPhraseUnit = {
    unitId: 143, title: "Email Phrases", phrases: [
        { phrase: "Dear Sir/Madam", meaning: "Sayın Yetkili", context: "E-posta", example: "Dear Sir/Madam," },
        { phrase: "I am writing to", meaning: "...için yazıyorum", context: "E-posta", example: "I am writing to inquire about..." },
        { phrase: "Please find attached", meaning: "Ekte bulabilirsiniz", context: "E-posta", example: "Please find attached my CV." },
        { phrase: "Looking forward to", meaning: "Bekliyorum", context: "E-posta", example: "Looking forward to hearing from you." },
        { phrase: "Best regards", meaning: "Saygılarımla", context: "E-posta", example: "Best regards, John" },
        { phrase: "Kind regards", meaning: "Saygılarımla", context: "E-posta", example: "Kind regards, Sarah" },
        { phrase: "Thank you for your email", meaning: "E-postanız için teşekkürler", context: "E-posta", example: "Thank you for your email." },
        { phrase: "In response to your inquiry", meaning: "Sorgunuza cevaben", context: "E-posta", example: "In response to your inquiry..." },
        { phrase: "As discussed", meaning: "Görüştüğümüz gibi", context: "E-posta", example: "As discussed in our meeting..." },
        { phrase: "Please confirm", meaning: "Lütfen onaylayın", context: "E-posta", example: "Please confirm your attendance." },
        { phrase: "I apologize for the delay", meaning: "Gecikme için özür dilerim", context: "E-posta", example: "I apologize for the delay in responding." },
        { phrase: "Please do not hesitate to contact me", meaning: "Benimle iletişime geçmekten çekinmeyin", context: "E-posta", example: "Please do not hesitate to contact me." },
        { phrase: "I would appreciate it if", meaning: "...yaparsanız memnun olurum", context: "E-posta", example: "I would appreciate it if you could..." },
        { phrase: "Further to our conversation", meaning: "Konuşmamızın devamı olarak", context: "E-posta", example: "Further to our conversation yesterday..." },
        { phrase: "Yours sincerely", meaning: "Saygılarımla", context: "E-posta", example: "Yours sincerely, Tom" }
    ]
};

export const u144: EnglishPhraseUnit = {
    unitId: 144, title: "Feeling Phrases", phrases: [
        { phrase: "Over the moon", meaning: "Çok mutlu", context: "Mutluluk", example: "I'm over the moon about the news." },
        { phrase: "Down in the dumps", meaning: "Kederli", context: "Üzüntü", example: "She's been down in the dumps lately." },
        { phrase: "On cloud nine", meaning: "Mutluluktan uçmak", context: "Mutluluk", example: "He's on cloud nine after the promotion." },
        { phrase: "Butterflies in my stomach", meaning: "Heyecanlı", context: "Heyecan", example: "I have butterflies in my stomach." },
        { phrase: "Under the weather", meaning: "Hasta", context: "Sağlık", example: "I'm feeling under the weather today." },
        { phrase: "Fed up with", meaning: "Bıkmış", context: "Can sıkkınlığı", example: "I'm fed up with this job." },
        { phrase: "Keep your chin up", meaning: "Moralini yüksek tut", context: "Cesaret", example: "Keep your chin up!" },
        { phrase: "Get something off your chest", meaning: "İçini dökmek", context: "Rahatlama", example: "I need to get this off my chest." },
        { phrase: "Burst into tears", meaning: "Ağlamaya başlamak", context: "Üzüntü", example: "She burst into tears." },
        { phrase: "Jump for joy", meaning: "Sevinçten zıplamak", context: "Mutluluk", example: "They jumped for joy." },
        { phrase: "Scared to death", meaning: "Ödü kopmuş", context: "Korku", example: "I was scared to death." },
        { phrase: "Worried sick", meaning: "Çok endişeli", context: "Endişe", example: "I was worried sick about you." },
        { phrase: "Bored to tears", meaning: "Can sıkıntısından ölmek", context: "Can sıkıntısı", example: "I was bored to tears." },
        { phrase: "Mixed feelings", meaning: "Karışık duygular", context: "Belirsizlik", example: "I have mixed feelings about this." },
        { phrase: "Feel at ease", meaning: "Rahat hissetmek", context: "Rahatlık", example: "I feel at ease with her." }
    ]
};

export const u145: EnglishPhraseUnit = {
    unitId: 145, title: "Personality Phrases", phrases: [
        { phrase: "Down to earth", meaning: "Mütevazı", context: "Kişilik", example: "She's really down to earth." },
        { phrase: "Easy going", meaning: "Uyumlu", context: "Kişilik", example: "He's very easy going." },
        { phrase: "Heart of gold", meaning: "Altın kalp", context: "Kişilik", example: "She has a heart of gold." },
        { phrase: "People person", meaning: "İnsancıl", context: "Kişilik", example: "I'm a people person." },
        { phrase: "Set in their ways", meaning: "Değişime kapalı", context: "Kişilik", example: "He's set in his ways." },
        { phrase: "Good sense of humor", meaning: "İyi espri anlayışı", context: "Kişilik", example: "She has a good sense of humor." },
        { phrase: "Quick tempered", meaning: "Çabuk sinirlenen", context: "Kişilik", example: "He's a bit quick tempered." },
        { phrase: "Level headed", meaning: "Sağduyulu", context: "Kişilik", example: "She's very level headed." },
        { phrase: "Full of life", meaning: "Hayat dolu", context: "Kişilik", example: "The children are full of life." },
        { phrase: "Keep to yourself", meaning: "İçine kapanık", context: "Kişilik", example: "He tends to keep to himself." },
        { phrase: "Thick skinned", meaning: "Kalın derili", context: "Kişilik", example: "You need to be thick skinned." },
        { phrase: "Wear your heart on your sleeve", meaning: "Duygularını açıkça göstermek", context: "Kişilik", example: "She wears her heart on her sleeve." },
        { phrase: "Two-faced", meaning: "İki yüzlü", context: "Kişilik", example: "Don't trust him, he's two-faced." },
        { phrase: "Pain in the neck", meaning: "Can sıkıcı kişi", context: "Kişilik", example: "He can be a pain in the neck." },
        { phrase: "Salt of the earth", meaning: "Çok iyi insan", context: "Kişilik", example: "My grandmother is the salt of the earth." }
    ]
};

export const u146: EnglishPhraseUnit = {
    unitId: 146, title: "Sports Phrases", phrases: [
        { phrase: "Work out", meaning: "Spor yapmak", context: "Egzersiz", example: "I work out every morning." },
        { phrase: "Keep fit", meaning: "Formda kalmak", context: "Sağlık", example: "I try to keep fit." },
        { phrase: "Get in shape", meaning: "Form kazanmak", context: "Egzersiz", example: "I want to get in shape." },
        { phrase: "Break a sweat", meaning: "Ter dökmek", context: "Egzersiz", example: "You need to break a sweat." },
        { phrase: "Warm up", meaning: "Isınmak", context: "Egzersiz", example: "Don't forget to warm up." },
        { phrase: "Cool down", meaning: "Serinlemek", context: "Egzersiz", example: "Always cool down after exercise." },
        { phrase: "Personal best", meaning: "Kişisel en iyi", context: "Başarı", example: "I achieved a personal best!" },
        { phrase: "Out of breath", meaning: "Nefes nefese", context: "Yorgunluk", example: "I was out of breath." },
        { phrase: "Win/lose by a mile", meaning: "Açık ara kazan/kaybet", context: "Sonuç", example: "They won by a mile." },
        { phrase: "Level playing field", meaning: "Eşit şartlar", context: "Adalet", example: "We need a level playing field." },
        { phrase: "Ball is in your court", meaning: "Sıra sende", context: "Sorumluluk", example: "The ball is in your court now." },
        { phrase: "Throw in the towel", meaning: "Pes etmek", context: "Vazgeçme", example: "Don't throw in the towel." },
        { phrase: "Go the extra mile", meaning: "Fazlasını yapmak", context: "Çaba", example: "She always goes the extra mile." },
        { phrase: "Second wind", meaning: "Yeni enerji", context: "Canlanma", example: "I got a second wind." },
        { phrase: "Home stretch", meaning: "Son aşama", context: "Bitiş", example: "We're in the home stretch now." }
    ]
};

export const u147: EnglishPhraseUnit = {
    unitId: 147, title: "Music Phrases", phrases: [
        { phrase: "Music to my ears", meaning: "Kulağıma hoş geliyor", context: "İfade", example: "That's music to my ears!" },
        { phrase: "Face the music", meaning: "Sonuçlarla yüzleş", context: "İfade", example: "It's time to face the music." },
        { phrase: "Play by ear", meaning: "Duruma göre hareket et", context: "İfade", example: "Let's play it by ear." },
        { phrase: "Ring a bell", meaning: "Tanıdık gelmek", context: "İfade", example: "Does that name ring a bell?" },
        { phrase: "Blow your own trumpet", meaning: "Övünmek", context: "İfade", example: "Don't blow your own trumpet." },
        { phrase: "Strike a chord", meaning: "Etkilemek", context: "İfade", example: "The speech struck a chord with everyone." },
        { phrase: "Change your tune", meaning: "Fikir değiştirmek", context: "İfade", example: "He changed his tune quickly." },
        { phrase: "For a song", meaning: "Çok ucuza", context: "İfade", example: "I got this for a song." },
        { phrase: "Hit the right note", meaning: "Doğru anlamı yakalamak", context: "İfade", example: "Her speech hit the right note." },
        { phrase: "Fine tune", meaning: "İnce ayar yapmak", context: "İfade", example: "We need to fine tune the plan." },
        { phrase: "Play second fiddle", meaning: "İkinci planda kalmak", context: "İfade", example: "I don't want to play second fiddle." },
        { phrase: "In tune with", meaning: "Uyum içinde", context: "İfade", example: "He's in tune with modern trends." },
        { phrase: "Out of tune", meaning: "Uyumsuz", context: "İfade", example: "The guitar is out of tune." },
        { phrase: "Turn up the volume", meaning: "Sesi aç", context: "Müzik", example: "Turn up the volume, I love this song!" },
        { phrase: "Live music", meaning: "Canlı müzik", context: "Müzik", example: "I prefer live music." }
    ]
};

export const u148: EnglishPhraseUnit = {
    unitId: 148, title: "Movie Phrases", phrases: [
        { phrase: "Spoiler alert", meaning: "Spoiler uyarısı", context: "Film", example: "Spoiler alert: the hero dies." },
        { phrase: "Edge of your seat", meaning: "Heyecanlı", context: "Film", example: "The movie keeps you on the edge of your seat." },
        { phrase: "Block buster", meaning: "Gişe rekortmeni", context: "Film", example: "It was a real blockbuster." },
        { phrase: "Steal the show", meaning: "Gösteriyi çalmak", context: "Film", example: "She stole the show." },
        { phrase: "Behind the scenes", meaning: "Kamera arkası", context: "Film", example: "Let's see what happens behind the scenes." },
        { phrase: "Based on a true story", meaning: "Gerçek hikayeden uyarlama", context: "Film", example: "This movie is based on a true story." },
        { phrase: "Box office hit", meaning: "Gişe başarısı", context: "Film", example: "It was a box office hit." },
        { phrase: "A must-see", meaning: "Mutlaka izlenmeli", context: "Film", example: "This movie is a must-see." },
        { phrase: "Plot twist", meaning: "Beklenmedik gelişme", context: "Film", example: "What a plot twist!" },
        { phrase: "Movie marathon", meaning: "Film maratonu", context: "Film", example: "Let's have a movie marathon." },
        { phrase: "Sneak peek", meaning: "Ön izleme", context: "Film", example: "Here's a sneak peek of the movie." },
        { phrase: "Give it a thumbs up/down", meaning: "Beğenmek/beğenmemek", context: "Değerlendirme", example: "I give it a thumbs up." },
        { phrase: "It has a happy ending", meaning: "Mutlu sonu var", context: "Film", example: "Don't worry, it has a happy ending." },
        { phrase: "Action-packed", meaning: "Aksiyon dolu", context: "Film", example: "It's an action-packed movie." },
        { phrase: "Tear-jerker", meaning: "Ağlatıcı", context: "Film", example: "That movie is a real tear-jerker." }
    ]
};

export const u149: EnglishPhraseUnit = {
    unitId: 149, title: "Technology Phrases", phrases: [
        { phrase: "Tech-savvy", meaning: "Teknolojiye yatkın", context: "Teknoloji", example: "He's very tech-savvy." },
        { phrase: "Cutting-edge", meaning: "En son teknoloji", context: "Teknoloji", example: "It's cutting-edge technology." },
        { phrase: "Go viral", meaning: "Viral olmak", context: "İnternet", example: "The video went viral." },
        { phrase: "Stay connected", meaning: "Bağlantıda kal", context: "İletişim", example: "Technology helps us stay connected." },
        { phrase: "Log in/out", meaning: "Giriş/çıkış yap", context: "Bilgisayar", example: "Don't forget to log out." },
        { phrase: "Back up", meaning: "Yedekle", context: "Bilgisayar", example: "Always back up your files." },
        { phrase: "Scroll down/up", meaning: "Aşağı/yukarı kaydır", context: "Bilgisayar", example: "Scroll down to see more." },
        { phrase: "Crash", meaning: "Çökmek", context: "Bilgisayar", example: "My computer crashed." },
        { phrase: "Bug in the system", meaning: "Sistemde hata", context: "Yazılım", example: "There's a bug in the system." },
        { phrase: "User-friendly", meaning: "Kullanıcı dostu", context: "Yazılım", example: "This app is very user-friendly." },
        { phrase: "Cloud storage", meaning: "Bulut depolama", context: "Teknoloji", example: "I use cloud storage for my files." },
        { phrase: "Run out of battery", meaning: "Bataryası bitmek", context: "Cihaz", example: "My phone is running out of battery." },
        { phrase: "Screen time", meaning: "Ekran süresi", context: "Teknoloji", example: "Reduce your screen time." },
        { phrase: "Digital detox", meaning: "Dijital detoks", context: "Teknoloji", example: "I need a digital detox." },
        { phrase: "Smart device", meaning: "Akıllı cihaz", context: "Teknoloji", example: "I have many smart devices at home." }
    ]
};

export const u150: EnglishPhraseUnit = {
    unitId: 150, title: "Social Media Phrases", phrases: [
        { phrase: "Go viral", meaning: "Viral olmak", context: "Sosyal medya", example: "My post went viral!" },
        { phrase: "Breaking the internet", meaning: "İnterneti kırmak", context: "Popülerlik", example: "That photo is breaking the internet." },
        { phrase: "Slide into DMs", meaning: "DM'den yazmak", context: "Sosyal medya", example: "He slid into her DMs." },
        { phrase: "Throwback", meaning: "Geçmişe dönüş", context: "Paylaşım", example: "Throwback to last summer." },
        { phrase: "Like and subscribe", meaning: "Beğen ve abone ol", context: "Sosyal medya", example: "Don't forget to like and subscribe." },
        { phrase: "Content creator", meaning: "İçerik üreticisi", context: "Sosyal medya", example: "She's a content creator." },
        { phrase: "Influencer", meaning: "Etkileyici", context: "Sosyal medya", example: "He's a famous influencer." },
        { phrase: "Trending topic", meaning: "Gündem konusu", context: "Sosyal medya", example: "It became a trending topic." },
        { phrase: "Go live", meaning: "Canlı yayına geç", context: "Sosyal medya", example: "I'm going live at 8 PM." },
        { phrase: "Hashtag", meaning: "Etiket", context: "Sosyal medya", example: "Use the right hashtag." },
        { phrase: "Unfollow", meaning: "Takibi bırak", context: "Sosyal medya", example: "I unfollowed him." },
        { phrase: "Tag someone", meaning: "Birini etiketle", context: "Sosyal medya", example: "Tag your best friend." },
        { phrase: "Story", meaning: "Hikaye", context: "Sosyal medya", example: "Did you see my story?" },
        { phrase: "Repost/Share", meaning: "Tekrar paylaş/Paylaş", context: "Sosyal medya", example: "Please share this post." },
        { phrase: "Block someone", meaning: "Birini engelle", context: "Sosyal medya", example: "I had to block him." }
    ]
};

// Units 151-160 continue...
export const u151: EnglishPhraseUnit = {
    unitId: 151, title: "Home Phrases", phrases: [
        { phrase: "Feel at home", meaning: "Evinde gibi hisset", context: "Rahatlık", example: "Make yourself feel at home." },
        { phrase: "Home sweet home", meaning: "Evim güzel evim", context: "Ev", example: "Home sweet home!" },
        { phrase: "Move in/out", meaning: "Taşınmak", context: "Taşınma", example: "We're moving in next week." },
        { phrase: "Settle down", meaning: "Yerleşmek", context: "Yaşam", example: "They want to settle down." },
        { phrase: "Do up the house", meaning: "Evi yenilemek", context: "Tadilat", example: "We're doing up the house." },
        { phrase: "House warming party", meaning: "Ev ısıtma partisi", context: "Kutlama", example: "Come to my house warming party." },
        { phrase: "Landlord/Tenant", meaning: "Ev sahibi/Kiracı", context: "Kira", example: "My landlord is very nice." },
        { phrase: "Pay the rent", meaning: "Kirayı öde", context: "Kira", example: "Don't forget to pay the rent." },
        { phrase: "Flat/Apartment share", meaning: "Ev arkadaşlığı", context: "Konaklama", example: "I'm looking for a flat share." },
        { phrase: "Tidy up", meaning: "Toplamak", context: "Temizlik", example: "Tidy up your room." },
        { phrase: "Spring cleaning", meaning: "Bahar temizliği", context: "Temizlik", example: "It's time for spring cleaning." },
        { phrase: "Make the bed", meaning: "Yatağı yap", context: "Temizlik", example: "Make your bed every morning." },
        { phrase: "Do the dishes", meaning: "Bulaşıkları yıka", context: "Temizlik", example: "Can you do the dishes?" },
        { phrase: "Take out the trash", meaning: "Çöpü çıkar", context: "Temizlik", example: "Please take out the trash." },
        { phrase: "Lock the door", meaning: "Kapıyı kilitle", context: "Güvenlik", example: "Don't forget to lock the door." }
    ]
};

export const u152: EnglishPhraseUnit = {
    unitId: 152, title: "Environment Phrases", phrases: [
        { phrase: "Go green", meaning: "Çevreci ol", context: "Çevre", example: "It's time to go green." },
        { phrase: "Carbon footprint", meaning: "Karbon ayak izi", context: "Çevre", example: "Reduce your carbon footprint." },
        { phrase: "Save the planet", meaning: "Gezegeni kurtar", context: "Çevre", example: "Let's save the planet." },
        { phrase: "Eco-friendly", meaning: "Çevre dostu", context: "Çevre", example: "Use eco-friendly products." },
        { phrase: "Renewable energy", meaning: "Yenilenebilir enerji", context: "Çevre", example: "We need more renewable energy." },
        { phrase: "Reduce, reuse, recycle", meaning: "Azalt, tekrar kullan, geri dönüştür", context: "Çevre", example: "Remember: reduce, reuse, recycle." },
        { phrase: "Climate change", meaning: "İklim değişikliği", context: "Çevre", example: "Climate change is a serious problem." },
        { phrase: "Global warming", meaning: "Küresel ısınma", context: "Çevre", example: "Global warming is affecting everyone." },
        { phrase: "Endangered species", meaning: "Nesli tehlike altındaki türler", context: "Çevre", example: "We must protect endangered species." },
        { phrase: "Natural resources", meaning: "Doğal kaynaklar", context: "Çevre", example: "Don't waste natural resources." },
        { phrase: "Pollution levels", meaning: "Kirlilik seviyeleri", context: "Çevre", example: "Pollution levels are high today." },
        { phrase: "Plastic-free", meaning: "Plastiksiz", context: "Çevre", example: "Try to be plastic-free." },
        { phrase: "Plant a tree", meaning: "Ağaç dik", context: "Çevre", example: "Let's plant a tree." },
        { phrase: "Single-use plastic", meaning: "Tek kullanımlık plastik", context: "Çevre", example: "Avoid single-use plastic." },
        { phrase: "Zero waste", meaning: "Sıfır atık", context: "Çevre", example: "We aim for zero waste." }
    ]
};

export const u153: EnglishPhraseUnit = {
    unitId: 153, title: "News Phrases", phrases: [
        { phrase: "Breaking news", meaning: "Son dakika", context: "Haber", example: "Breaking news: earthquake hits city." },
        { phrase: "Make headlines", meaning: "Manşet olmak", context: "Haber", example: "The story made headlines." },
        { phrase: "Hot off the press", meaning: "Taze haber", context: "Haber", example: "Hot off the press!" },
        { phrase: "Spread like wildfire", meaning: "Hızla yayılmak", context: "Haber", example: "The news spread like wildfire." },
        { phrase: "According to sources", meaning: "Kaynaklara göre", context: "Haber", example: "According to sources, he resigned." },
        { phrase: "Eye witness", meaning: "Görgü tanığı", context: "Haber", example: "An eye witness reported the accident." },
        { phrase: "Press conference", meaning: "Basın toplantısı", context: "Haber", example: "The president held a press conference." },
        { phrase: "Live coverage", meaning: "Canlı yayın", context: "Haber", example: "We have live coverage of the event." },
        { phrase: "Stay tuned", meaning: "Kanalda kalın", context: "Haber", example: "Stay tuned for more updates." },
        { phrase: "In other news", meaning: "Diğer haberlerde", context: "Haber", example: "In other news, the economy..." },
        { phrase: "Fake news", meaning: "Yalan haber", context: "Haber", example: "Don't believe fake news." },
        { phrase: "Go viral", meaning: "Viral olmak", context: "Haber", example: "The video went viral." },
        { phrase: "Make the front page", meaning: "Birinci sayfa olmak", context: "Haber", example: "The story made the front page." },
        { phrase: "Exclusive story", meaning: "Özel haber", context: "Haber", example: "We have an exclusive story." },
        { phrase: "No comment", meaning: "Yorum yok", context: "Haber", example: "The politician said 'no comment'." }
    ]
};

export const u154: EnglishPhraseUnit = {
    unitId: 154, title: "Culture Phrases", phrases: [
        { phrase: "Cultural heritage", meaning: "Kültürel miras", context: "Kültür", example: "We must protect our cultural heritage." },
        { phrase: "Traditional values", meaning: "Geleneksel değerler", context: "Kültür", example: "They believe in traditional values." },
        { phrase: "Custom and tradition", meaning: "Gelenek ve görenek", context: "Kültür", example: "It's an old custom and tradition." },
        { phrase: "Culture shock", meaning: "Kültür şoku", context: "Kültür", example: "I experienced culture shock." },
        { phrase: "When in Rome, do as the Romans do", meaning: "Atın bulunduğu yere göre", context: "Atasözü", example: "Remember: when in Rome, do as the Romans do." },
        { phrase: "Pass down", meaning: "Nesilden nesile aktarmak", context: "Gelenek", example: "This recipe was passed down from my grandmother." },
        { phrase: "Old wives' tale", meaning: "Hurafeler", context: "İnanış", example: "That's just an old wives' tale." },
        { phrase: "National holiday", meaning: "Milli bayram", context: "Kutlama", example: "Tomorrow is a national holiday." },
        { phrase: "Local customs", meaning: "Yerel gelenekler", context: "Kültür", example: "Learn about local customs before traveling." },
        { phrase: "Mother tongue", meaning: "Ana dil", context: "Dil", example: "Turkish is my mother tongue." },
        { phrase: "Multicultural society", meaning: "Çok kültürlü toplum", context: "Kültür", example: "We live in a multicultural society." },
        { phrase: "The good old days", meaning: "Eski güzel günler", context: "Nostalji", example: "I miss the good old days." },
        { phrase: "Folk tale", meaning: "Halk hikayesi", context: "Edebiyat", example: "This is an old folk tale." },
        { phrase: "Generation gap", meaning: "Kuşak farkı", context: "Toplum", example: "There's a generation gap." },
        { phrase: "Social norms", meaning: "Sosyal normlar", context: "Toplum", example: "Follow the social norms." }
    ]
};

export const u155: EnglishPhraseUnit = {
    unitId: 155, title: "Present Perfect Phrases", phrases: [
        { phrase: "Have you ever...?", meaning: "Hiç... yapmış mıydın?", context: "Deneyim", example: "Have you ever been to Paris?" },
        { phrase: "I've never...", meaning: "Hiç... yapmadım", context: "Deneyim", example: "I've never seen snow." },
        { phrase: "I've already...", meaning: "Zaten... yaptım", context: "Tamamlanmış", example: "I've already finished my homework." },
        { phrase: "I haven't... yet", meaning: "Henüz... yapmadım", context: "Tamamlanmamış", example: "I haven't eaten yet." },
        { phrase: "Just now", meaning: "Az önce", context: "Zaman", example: "I've just finished." },
        { phrase: "So far", meaning: "Şimdiye kadar", context: "Zaman", example: "So far, everything is fine." },
        { phrase: "Up to now", meaning: "Şu ana kadar", context: "Zaman", example: "Up to now, we've had no problems." },
        { phrase: "Since then", meaning: "O zamandan beri", context: "Zaman", example: "I haven't seen her since then." },
        { phrase: "For a long time", meaning: "Uzun zamandır", context: "Süre", example: "I've known him for a long time." },
        { phrase: "Recently", meaning: "Son zamanlarda", context: "Zaman", example: "I've been busy recently." },
        { phrase: "Lately", meaning: "Son zamanlarda", context: "Zaman", example: "Have you seen him lately?" },
        { phrase: "In my life", meaning: "Hayatımda", context: "Deneyim", example: "This is the best day in my life!" },
        { phrase: "Once/Twice", meaning: "Bir/iki kez", context: "Sıklık", example: "I've been there twice." },
        { phrase: "Several times", meaning: "Birkaç kez", context: "Sıklık", example: "I've visited several times." },
        { phrase: "How long have you...?", meaning: "Ne zamandır...?", context: "Süre", example: "How long have you lived here?" }
    ]
};

export const u156: EnglishPhraseUnit = {
    unitId: 156, title: "Comparison Phrases", phrases: [
        { phrase: "As... as", meaning: "Kadar", context: "Karşılaştırma", example: "She's as tall as her mother." },
        { phrase: "Not as... as", meaning: "Kadar... değil", context: "Karşılaştırma", example: "It's not as cold as yesterday." },
        { phrase: "Much more", meaning: "Çok daha", context: "Karşılaştırma", example: "This is much more interesting." },
        { phrase: "A bit less", meaning: "Biraz daha az", context: "Karşılaştırma", example: "It's a bit less expensive." },
        { phrase: "Far better", meaning: "Çok daha iyi", context: "Karşılaştırma", example: "This one is far better." },
        { phrase: "Way more", meaning: "Çok daha fazla", context: "Karşılaştırma", example: "That's way more difficult." },
        { phrase: "Getting better", meaning: "İyileşiyor", context: "Değişim", example: "Things are getting better." },
        { phrase: "The more... the more", meaning: "Ne kadar... o kadar", context: "Karşılaştırma", example: "The more you practice, the better you get." },
        { phrase: "At least", meaning: "En azından", context: "Minimum", example: "At least try." },
        { phrase: "At most", meaning: "En fazla", context: "Maximum", example: "It will take at most 2 hours." },
        { phrase: "Compared to", meaning: "Kıyasla", context: "Karşılaştırma", example: "Compared to last year, this is better." },
        { phrase: "In comparison with", meaning: "Karşılaştırmada", context: "Karşılaştırma", example: "In comparison with others, it's cheap." },
        { phrase: "Similar to", meaning: "Benzer", context: "Benzerlik", example: "It's similar to mine." },
        { phrase: "Different from", meaning: "Farklı", context: "Farklılık", example: "This is different from that." },
        { phrase: "The same as", meaning: "Aynı", context: "Benzerlik", example: "It's the same as before." }
    ]
};

export const u157: EnglishPhraseUnit = {
    unitId: 157, title: "Superlative Phrases", phrases: [
        { phrase: "The best of all", meaning: "Hepsinin en iyisi", context: "Üstünlük", example: "This is the best of all." },
        { phrase: "The worst ever", meaning: "Şimdiye kadar en kötüsü", context: "Üstünlük", example: "That was the worst movie ever." },
        { phrase: "Second to none", meaning: "Eşsiz", context: "Üstünlük", example: "Her cooking is second to none." },
        { phrase: "One of the best", meaning: "En iyilerden biri", context: "Üstünlük", example: "He's one of the best players." },
        { phrase: "By far the most", meaning: "Açık ara en", context: "Üstünlük", example: "This is by far the most expensive." },
        { phrase: "Without a doubt", meaning: "Şüphesiz", context: "Kesinlik", example: "He is without a doubt the best." },
        { phrase: "In the world", meaning: "Dünyada", context: "Kapsam", example: "The tallest building in the world." },
        { phrase: "Ever seen/heard", meaning: "Şimdiye kadar gördüğüm/duyduğum", context: "Deneyim", example: "The funniest joke I've ever heard." },
        { phrase: "The least expensive", meaning: "En ucuz", context: "Fiyat", example: "This is the least expensive option." },
        { phrase: "The most popular", meaning: "En popüler", context: "Popülerlik", example: "It's the most popular song." },
        { phrase: "Peak/Prime", meaning: "Zirve", context: "Doruk", example: "He's at his peak performance." },
        { phrase: "Top of the line", meaning: "En üst düzey", context: "Kalite", example: "This is a top of the line product." },
        { phrase: "Best seller", meaning: "En çok satan", context: "Satış", example: "It's a best seller." },
        { phrase: "World record", meaning: "Dünya rekoru", context: "Başarı", example: "He broke the world record." },
        { phrase: "All-time favorite", meaning: "Tüm zamanların favorisi", context: "Tercih", example: "It's my all-time favorite movie." }
    ]
};

export const u158: EnglishPhraseUnit = {
    unitId: 158, title: "Modal Verb Phrases", phrases: [
        { phrase: "Should I...?", meaning: "...malı mıyım?", context: "Tavsiye", example: "Should I call him?" },
        { phrase: "You must...", meaning: "...malısın", context: "Zorunluluk", example: "You must wear a seatbelt." },
        { phrase: "You don't have to", meaning: "Zorunda değilsin", context: "İzin", example: "You don't have to come." },
        { phrase: "You mustn't", meaning: "...mamalısın", context: "Yasak", example: "You mustn't smoke here." },
        { phrase: "Could you please...?", meaning: "Lütfen... misiniz?", context: "Rica", example: "Could you please help me?" },
        { phrase: "Would you mind...?", meaning: "...sakıncası var mı?", context: "Rica", example: "Would you mind opening the window?" },
        { phrase: "I might...", meaning: "...yapabilirim", context: "Olasılık", example: "I might come to the party." },
        { phrase: "I had better...", meaning: "...sam iyi olur", context: "Tavsiye", example: "I had better leave now." },
        { phrase: "You ought to", meaning: "...malısın", context: "Tavsiye", example: "You ought to study more." },
        { phrase: "Can I...?", meaning: "...bilir miyim?", context: "İzin", example: "Can I use your phone?" },
        { phrase: "May I...?", meaning: "...bilir miyim?", context: "Resmi izin", example: "May I come in?" },
        { phrase: "I'd rather...", meaning: "...mayı tercih ederim", context: "Tercih", example: "I'd rather stay home." },
        { phrase: "It could be", meaning: "Olabilir", context: "Olasılık", example: "It could be true." },
        { phrase: "It can't be", meaning: "Olamaz", context: "İmkansızlık", example: "It can't be him." },
        { phrase: "Need I...?", meaning: "...mem gerekir mi?", context: "Gereklilik", example: "Need I say more?" }
    ]
};

export const u159: EnglishPhraseUnit = {
    unitId: 159, title: "Question Tag Phrases", phrases: [
        { phrase: "...isn't it?", meaning: "...değil mi?", context: "Soru eki", example: "It's hot, isn't it?" },
        { phrase: "...don't you?", meaning: "...değil mi?", context: "Soru eki", example: "You like coffee, don't you?" },
        { phrase: "...doesn't she?", meaning: "...değil mi?", context: "Soru eki", example: "She works here, doesn't she?" },
        { phrase: "...didn't they?", meaning: "...değil mi?", context: "Soru eki", example: "They came yesterday, didn't they?" },
        { phrase: "...won't you?", meaning: "...olmaz mı?", context: "Soru eki", example: "You'll come, won't you?" },
        { phrase: "...can't he?", meaning: "...değil mi?", context: "Soru eki", example: "He can swim, can't he?" },
        { phrase: "...have you?", meaning: "...mı?", context: "Soru eki", example: "You haven't seen it, have you?" },
        { phrase: "...shall we?", meaning: "...mi?", context: "Teklif", example: "Let's go, shall we?" },
        { phrase: "...will you?", meaning: "...misiniz?", context: "Rica", example: "Close the door, will you?" },
        { phrase: "...aren't they?", meaning: "...değiller mi?", context: "Soru eki", example: "They're coming, aren't they?" },
        { phrase: "...wasn't it?", meaning: "...değil miydi?", context: "Soru eki", example: "It was great, wasn't it?" },
        { phrase: "...wouldn't they?", meaning: "...değil mi?", context: "Soru eki", example: "They would help, wouldn't they?" },
        { phrase: "...should I?", meaning: "...malı mıyım?", context: "Soru eki", example: "I shouldn't go, should I?" },
        { phrase: "...could she?", meaning: "...yapabilir miydi?", context: "Soru eki", example: "She couldn't do it, could she?" },
        { phrase: "Right?", meaning: "Değil mi?", context: "Onay", example: "You understand, right?" }
    ]
};

export const u160: EnglishPhraseUnit = {
    unitId: 160, title: "A2 Review Phrases", phrases: [
        { phrase: "In conclusion", meaning: "Sonuç olarak", context: "Özet", example: "In conclusion, I learned a lot." },
        { phrase: "All in all", meaning: "Sonuç olarak", context: "Özet", example: "All in all, it was a good experience." },
        { phrase: "To sum up", meaning: "Özetlemek gerekirse", context: "Özet", example: "To sum up, English is fun." },
        { phrase: "Overall", meaning: "Genel olarak", context: "Özet", example: "Overall, I'm happy with my progress." },
        { phrase: "Looking back", meaning: "Geriye bakınca", context: "Değerlendirme", example: "Looking back, I've improved a lot." },
        { phrase: "Step by step", meaning: "Adım adım", context: "Süreç", example: "I learned step by step." },
        { phrase: "Little by little", meaning: "Yavaş yavaş", context: "Süreç", example: "Little by little, I got better." },
        { phrase: "Day by day", meaning: "Gün geçtikçe", context: "Süreç", example: "Day by day, I understand more." },
        { phrase: "Practice makes perfect", meaning: "Pratik mükemmelleştirir", context: "Atasözü", example: "Remember: practice makes perfect!" },
        { phrase: "Every cloud has a silver lining", meaning: "Her işte bir hayır vardır", context: "Atasözü", example: "Don't worry, every cloud has a silver lining." },
        { phrase: "Better late than never", meaning: "Geç olsun güç olmasın", context: "Atasözü", example: "Better late than never!" },
        { phrase: "Keep it up", meaning: "Böyle devam et", context: "Teşvik", example: "Great work, keep it up!" },
        { phrase: "Well done", meaning: "Aferin", context: "Övgü", example: "Well done! You did great." },
        { phrase: "Good luck", meaning: "İyi şanslar", context: "İyi dilek", example: "Good luck with your exam!" },
        { phrase: "You've got this", meaning: "Yapabilirsin", context: "Teşvik", example: "Don't worry, you've got this!" }
    ]
};

// Export function
export function getEnglishA2PhrasesForUnit(unitId: number): EnglishPhraseUnit {
    const m: { [k: number]: EnglishPhraseUnit } = {
        131: u131, 132: u132, 133: u133, 134: u134, 135: u135, 136: u136, 137: u137, 138: u138, 139: u139, 140: u140,
        141: u141, 142: u142, 143: u143, 144: u144, 145: u145, 146: u146, 147: u147, 148: u148, 149: u149, 150: u150,
        151: u151, 152: u152, 153: u153, 154: u154, 155: u155, 156: u156, 157: u157, 158: u158, 159: u159, 160: u160
    };
    return m[unitId] || u131;
}
