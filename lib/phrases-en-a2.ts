/**
 * SteadyShell Phrases - English A2 (Units 131-140)
 * 15 phrase per unit
 */

// [x] Interface Update: Add `pronunciation` to `EnglishPhrase` in `lib/phrases-en-a2.ts`
// [x] Batch 1: Units 131-140 (Past Tense, Travel, Medical, Jobs) - Add Pronunciation
// [x] Batch 2: Units 141-150 (Interviews, Media, Personal, Tech) - Add Pronunciation
// [ ] Batch 3: Units 151-160 (Home, Env, News, Grammar patterns) - Add Pronunciation
// [ ] Final Verification (npx tsc --noEmit)

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

// Unit 131: Past Simple Regular
export const u131: EnglishPhraseUnit = {
    unitId: 131, title: "Past Simple - Regular Verbs", phrases: [
        { phrase: "Last week", meaning: "Geçen hafta", context: "Zaman", example: "I saw him last week.", pronunciation: "last viik" },
        { phrase: "A month ago", meaning: "Bir ay önce", context: "Zaman", example: "I started a month ago.", pronunciation: "e manth e-go" },
        { phrase: "In the past", meaning: "Geçmişte", context: "Zaman", example: "In the past, people lived differently.", pronunciation: "in dı past" },
        { phrase: "The other day", meaning: "Geçen gün", context: "Zaman", example: "I met her the other day.", pronunciation: "dı a-dır dey" },
        { phrase: "Once upon a time", meaning: "Bir zamanlar", context: "Hikaye", example: "Once upon a time, there was a king.", pronunciation: "vans e-pon e taym" },
        { phrase: "Yesterday morning", meaning: "Dün sabah", context: "Zaman", example: "I woke up early yesterday morning.", pronunciation: "yes-tır-dey mor-ning" },
        { phrase: "Last night", meaning: "Dün gece", context: "Zaman", example: "I watched a movie last night.", pronunciation: "last nayt" },
        { phrase: "Two days ago", meaning: "İki gün önce", context: "Zaman", example: "I finished the project two days ago.", pronunciation: "tu deys e-go" },
        { phrase: "A year ago", meaning: "Bir yıl önce", context: "Zaman", example: "A year ago, I started learning English.", pronunciation: "e yi-ır e-go" },
        { phrase: "Long ago", meaning: "Uzun zaman önce", context: "Zaman", example: "Long ago, there were no computers.", pronunciation: "long e-go" },
        { phrase: "At that time", meaning: "O zaman", context: "Zaman", example: "At that time, I was a student.", pronunciation: "et det taym" },
        { phrase: "Back then", meaning: "O zamanlar", context: "Zaman", example: "Back then, life was simpler.", pronunciation: "bek den" },
        { phrase: "In the old days", meaning: "Eski günlerde", context: "Zaman", example: "In the old days, people wrote letters.", pronunciation: "in dı old deys" },
        { phrase: "Earlier today", meaning: "Bugün daha önce", context: "Zaman", example: "I called him earlier today.", pronunciation: "ör-li-ır tu-dey" },
        { phrase: "Just now", meaning: "Az önce", context: "Zaman", example: "I finished my homework just now.", pronunciation: "cast nau" }
    ]
};

// Unit 132: Past Simple Irregular
export const u132: EnglishPhraseUnit = {
    unitId: 132, title: "Past Simple - Irregular Verbs", phrases: [
        { phrase: "When I was young", meaning: "Gençken", context: "Geçmiş", example: "When I was young, I played football.", pronunciation: "ven ay vaz yang" },
        { phrase: "Back in the day", meaning: "O zamanlar", context: "Geçmiş", example: "Back in the day, we had no internet.", pronunciation: "bek in dı dey" },
        { phrase: "Years ago", meaning: "Yıllar önce", context: "Zaman", example: "I met her years ago.", pronunciation: "yi-ırs e-go" },
        { phrase: "Long time ago", meaning: "Uzun zaman önce", context: "Zaman", example: "Long time ago, I lived in Paris.", pronunciation: "long taym e-go" },
        { phrase: "In those days", meaning: "O günlerde", context: "Geçmiş", example: "In those days, life was simpler.", pronunciation: "in doz deys" },
        { phrase: "When I was a child", meaning: "Çocukken", context: "Geçmiş", example: "When I was a child, I had many toys.", pronunciation: "ven ay vaz e çayld" },
        { phrase: "In my childhood", meaning: "Çocukluğumda", context: "Geçmiş", example: "In my childhood, we lived in a village.", pronunciation: "in may çayld-hud" },
        { phrase: "As a teenager", meaning: "Ergenken", context: "Geçmiş", example: "As a teenager, I loved music.", pronunciation: "ez e ti-ne-yıcır" },
        { phrase: "During my school years", meaning: "Okul yıllarımda", context: "Geçmiş", example: "During my school years, I made many friends.", pronunciation: "du-ring may skuul yi-ırs" },
        { phrase: "At that moment", meaning: "O anda", context: "Zaman", example: "At that moment, I understood everything.", pronunciation: "et det mo-mınt" },
        { phrase: "Before that", meaning: "Ondan önce", context: "Zaman", example: "Before that, I had never seen the sea.", pronunciation: "bi-for det" },
        { phrase: "After that", meaning: "Ondan sonra", context: "Zaman", example: "After that, everything changed.", pronunciation: "af-tır det" },
        { phrase: "First... then", meaning: "Önce... sonra", context: "Sıralama", example: "First I woke up, then I had breakfast.", pronunciation: "först... den" },
        { phrase: "Finally", meaning: "Sonunda", context: "Sıralama", example: "Finally, we arrived home.", pronunciation: "fay-nu-li" },
        { phrase: "All of a sudden", meaning: "Birdenbire", context: "Anlatı", example: "All of a sudden, it started raining.", pronunciation: "ol ov e sa-dın" }
    ]
};

// Unit 133: Restaurant
export const u133: EnglishPhraseUnit = {
    unitId: 133, title: "Restaurant Phrases", phrases: [
        { phrase: "A table for two, please", meaning: "İki kişilik masa lütfen", context: "Restoran", example: "A table for two, please.", pronunciation: "e tey-bıl for tu pli-iz" },
        { phrase: "I'd like to order", meaning: "Sipariş vermek istiyorum", context: "Sipariş", example: "I'd like to order now.", pronunciation: "ayd layk tu or-dır" },
        { phrase: "What do you recommend?", meaning: "Ne önerirsiniz?", context: "Sipariş", example: "What do you recommend today?", pronunciation: "vat du yu re-ko-mend" },
        { phrase: "The bill, please", meaning: "Hesap lütfen", context: "Ödeme", example: "Can we have the bill, please?", pronunciation: "dı bil pli-iz" },
        { phrase: "Keep the change", meaning: "Üstü kalsın", context: "Ödeme", example: "Here you go. Keep the change.", pronunciation: "ki-ip dı çeync" },
        { phrase: "Can I see the menu?", meaning: "Menüyü görebilir miyim?", context: "Sipariş", example: "Can I see the menu, please?", pronunciation: "ken ay si dı me-nyu" },
        { phrase: "I'll have the...", meaning: "Ben... alacağım", context: "Sipariş", example: "I'll have the steak, please.", pronunciation: "ayl hev dı" },
        { phrase: "Is this dish spicy?", meaning: "Bu yemek acılı mı?", context: "Soru", example: "Is this dish spicy?", pronunciation: "iz dis diş spay-si" },
        { phrase: "Could I have some water?", meaning: "Biraz su alabilir miyim?", context: "İstek", example: "Could I have some water, please?", pronunciation: "kud ay hev sam vo-tır" },
        { phrase: "Everything was delicious", meaning: "Her şey lezzetliydi", context: "Yorum", example: "Everything was delicious, thank you.", pronunciation: "ev-ri-thing vaz de-li-şas" },
        { phrase: "We're ready to order", meaning: "Sipariş vermeye hazırız", context: "Sipariş", example: "We're ready to order now.", pronunciation: "vi-ar re-di tu or-dır" },
        { phrase: "I'm vegetarian", meaning: "Vejetaryenim", context: "Bilgi", example: "I'm vegetarian. Do you have salads?", pronunciation: "aym ve-ce-te-ri-yın" },
        { phrase: "Can we split the bill?", meaning: "Hesabı bölebilir miyiz?", context: "Ödeme", example: "Can we split the bill?", pronunciation: "ken vi s-p-lit dı bil" },
        { phrase: "Do you take credit cards?", meaning: "Kredi kartı kabul ediyor musunuz?", context: "Ödeme", example: "Do you take credit cards?", pronunciation: "du yu teyk k-re-dit kards" },
        { phrase: "For here or to go?", meaning: "Burada mı paket mi?", context: "Sipariş", example: "For here or to go?", pronunciation: "for hi-ır or tu go" }
    ]
};

// Unit 134: Shopping
export const u134: EnglishPhraseUnit = {
    unitId: 134, title: "Shopping Phrases", phrases: [
        { phrase: "Just looking", meaning: "Sadece bakıyorum", context: "Mağaza", example: "No thanks, just looking.", pronunciation: "cast lu-king" },
        { phrase: "How much is this?", meaning: "Bu ne kadar?", context: "Fiyat", example: "Excuse me, how much is this?", pronunciation: "hau maç iz dis" },
        { phrase: "On sale", meaning: "İndirimde", context: "Fiyat", example: "This jacket is on sale.", pronunciation: "on se-yıl" },
        { phrase: "That's too expensive", meaning: "Çok pahalı", context: "Fiyat", example: "That's too expensive for me.", pronunciation: "dets tu ek-s-pen-siv" },
        { phrase: "I'll take it", meaning: "Alıyorum", context: "Satın alma", example: "It fits perfectly. I'll take it.", pronunciation: "ayl teyk it" },
        { phrase: "Do you have this in a different size?", meaning: "Bunun farklı bedeni var mı?", context: "Beden", example: "Do you have this in a larger size?", pronunciation: "du yu hev dis in e di-fı-rent sayz" },
        { phrase: "Can I try this on?", meaning: "Bunu deneyebilir miyim?", context: "Mağaza", example: "Can I try this on?", pronunciation: "ken ay t-ray dis on" },
        { phrase: "Where are the fitting rooms?", meaning: "Giyinme odaları nerede?", context: "Mağaza", example: "Where are the fitting rooms?", pronunciation: "ver ar dı fi-ting ru-ums" },
        { phrase: "It doesn't fit", meaning: "Uymadı", context: "Beden", example: "It doesn't fit. It's too small.", pronunciation: "it da-zınt fit" },
        { phrase: "Do you have this in another color?", meaning: "Bunun başka rengi var mı?", context: "Renk", example: "Do you have this in blue?", pronunciation: "du yu hev dis in e-na-dır ka-lır" },
        { phrase: "I'm looking for...", meaning: "...arıyorum", context: "Arama", example: "I'm looking for a winter coat.", pronunciation: "aym lu-king for" },
        { phrase: "Is there a discount?", meaning: "İndirim var mı?", context: "Fiyat", example: "Is there a discount on this?", pronunciation: "iz der e dis-ka-unt" },
        { phrase: "Can I pay by card?", meaning: "Kartla ödeyebilir miyim?", context: "Ödeme", example: "Can I pay by card?", pronunciation: "ken ay pey bay kard" },
        { phrase: "Keep the receipt", meaning: "Fişi saklayın", context: "Ödeme", example: "Keep the receipt for return.", pronunciation: "ki-ip dı ri-si-it" },
        { phrase: "Can I return this?", meaning: "Bunu iade edebilir miyim?", context: "İade", example: "Can I return this if it doesn't fit?", pronunciation: "ken ay ri-törn dis" }
    ]
};

// Unit 135: Travel
export const u135: EnglishPhraseUnit = {
    unitId: 135, title: "Travel Phrases", phrases: [
        { phrase: "Have a safe trip", meaning: "İyi yolculuklar", context: "Seyahat", example: "Have a safe trip!", pronunciation: "hev e seyf trip" },
        { phrase: "Let's hit the road", meaning: "Yola çıkalım", context: "Seyahat", example: "It's time. Let's hit the road.", pronunciation: "lets hit dı roud" },
        { phrase: "Travel light", meaning: "Hafif seyahat et", context: "Seyahat", example: "Try to travel light.", pronunciation: "trav-ul layt" },
        { phrase: "Off the beaten path", meaning: "Az bilinen yer", context: "Keşif", example: "I like places off the beaten path.", pronunciation: "of dı bi-tın path" },
        { phrase: "Book a flight", meaning: "Uçuş rezervasyonu yap", context: "Planlama", example: "I need to book a flight.", pronunciation: "buk e f-layt" },
        { phrase: "Pack your bags", meaning: "Bavulunu topla", context: "Hazırlık", example: "Pack your bags, we leave tomorrow.", pronunciation: "pek yor begs" },
        { phrase: "Check the itinerary", meaning: "Güzergahı kontrol et", context: "Planlama", example: "Let me check the itinerary.", pronunciation: "çek dı ay-ti-ne-re-ri" },
        { phrase: "Catch a plane", meaning: "Uçağa yetiş", context: "Ulaşım", example: "We need to catch a plane at 6 AM.", pronunciation: "keç e p-le-yın" },
        { phrase: "Travel abroad", meaning: "Yurtdışına seyahat", context: "Seyahat", example: "I love to travel abroad.", pronunciation: "trav-ul e-b-road" },
        { phrase: "Go sightseeing", meaning: "Gezmeye git", context: "Aktivite", example: "Let's go sightseeing tomorrow.", pronunciation: "go sayt-si-ing" },
        { phrase: "Take a trip", meaning: "Gezi yap", context: "Seyahat", example: "We're taking a trip next week.", pronunciation: "teyk e trip" },
        { phrase: "Arrive at the destination", meaning: "Varış yerine ulaş", context: "Ulaşım", example: "We arrived at the destination.", pronunciation: "e-rayv et dı des-ti-ne-yışın" },
        { phrase: "Get lost", meaning: "Kaybolmak", context: "Problem", example: "I got lost in the city center.", pronunciation: "get lost" },
        { phrase: "Ask for directions", meaning: "Yol sor", context: "İletişim", example: "Let's ask for directions.", pronunciation: "ask for di-rek-şıns" },
        { phrase: "Enjoy your stay", meaning: "İyi kalışlar", context: "Konaklama", example: "Enjoy your stay at our hotel.", pronunciation: "en-coy yor s-tey" }
    ]
};

// Units 136-140 continue...
export const u136: EnglishPhraseUnit = {
    unitId: 136, title: "Hotel Phrases", phrases: [
        { phrase: "Do you have any vacancies?", meaning: "Boş odanız var mı?", context: "Otel", example: "Do you have any vacancies for tonight?", pronunciation: "du yu hev e-ni vey-kın-siz" },
        { phrase: "I have a reservation", meaning: "Rezervasyonum var", context: "Otel", example: "Hello, I have a reservation under Smith.", pronunciation: "ay hev e re-zer-vey-şın" },
        { phrase: "Room service", meaning: "Oda servisi", context: "Otel", example: "Can I get room service?", pronunciation: "ru-um ser-vis" },
        { phrase: "Wake-up call", meaning: "Uyandırma servisi", context: "Otel", example: "I'd like a wake-up call at 7 AM.", pronunciation: "veyk ap kol" },
        { phrase: "Check in / Check out", meaning: "Giriş / Çıkış", context: "Otel", example: "What time is check out?", pronunciation: "çek in / çek aut" },
        { phrase: "Is breakfast included?", meaning: "Kahvaltı dahil mi?", context: "Otel", example: "Is breakfast included in the price?", pronunciation: "iz b-rek-fıst in-klu-did" },
        { phrase: "I'd like a room with a view", meaning: "Manzaralı oda istiyorum", context: "Otel", example: "I'd like a room with a sea view.", pronunciation: "ayd layk e ru-um vid e v-yu" },
        { phrase: "Can I have a late checkout?", meaning: "Geç çıkış yapabilir miyim?", context: "Otel", example: "Can I have a late checkout at 2 PM?", pronunciation: "ken ay hev e ley-t çek-aut" },
        { phrase: "Where is the elevator?", meaning: "Asansör nerede?", context: "Otel", example: "Where is the elevator, please?", pronunciation: "ver iz dı e-le-vey-tır" },
        { phrase: "The air conditioning doesn't work", meaning: "Klima çalışmıyor", context: "Problem", example: "The air conditioning doesn't work.", pronunciation: "dı e-ir kon-di-şı-ning da-zınt vörk" },
        { phrase: "Could I have extra towels?", meaning: "Fazladan havlu alabilir miyim?", context: "İstek", example: "Could I have extra towels?", pronunciation: "kud ay hev eks-t-ra ta-vıls" },
        { phrase: "Is there wifi?", meaning: "Wifi var mı?", context: "Otel", example: "Is there free wifi?", pronunciation: "iz der vay-fay" },
        { phrase: "What's the wifi password?", meaning: "Wifi şifresi ne?", context: "Otel", example: "What's the wifi password?", pronunciation: "vats dı vay-fay pas-vörd" },
        { phrase: "I'd like to extend my stay", meaning: "Kalışımı uzatmak istiyorum", context: "Otel", example: "I'd like to extend my stay by two nights.", pronunciation: "ayd layk tu ek-s-tend may s-tey" },
        { phrase: "Can I leave my luggage here?", meaning: "Bagajımı burada bırakabilir miyim?", context: "Otel", example: "Can I leave my luggage here until 3 PM?", pronunciation: "ken ay li-iv may la-gıc hi-ır" }
    ]
};

export const u137: EnglishPhraseUnit = {
    unitId: 137, title: "Airport Phrases", phrases: [
        { phrase: "Next in line", meaning: "Sıradaki", context: "Kuyruk", example: "Next in line, please.", pronunciation: "nekst in layn" },
        { phrase: "Final call", meaning: "Son çağrı", context: "Uçuş", example: "Final call for flight 403.", pronunciation: "fay-nul kol" },
        { phrase: "Now boarding", meaning: "Biniş başladı", context: "Uçuş", example: "Gate 5 is now boarding.", pronunciation: "nau bor-ding" },
        { phrase: "Carry-on luggage", meaning: "Kabin bagajı", context: "Bagaj", example: "Is this your carry-on luggage?", pronunciation: "ke-ri on la-gıc" },
        { phrase: "Fasten your seatbelt", meaning: "Kemerini bağla", context: "Uçuş", example: "Please fasten your seatbelt.", pronunciation: "fas-ın yor si-it-belt" },
        { phrase: "Window or aisle?", meaning: "Pencere mi koridor mu?", context: "Koltuk", example: "Window or aisle seat?", pronunciation: "vin-dou or ay-ıl" },
        { phrase: "Flight delayed", meaning: "Uçuş gecikti", context: "Problem", example: "The flight is delayed by 2 hours.", pronunciation: "f-layt di-ley-d" },
        { phrase: "Flight cancelled", meaning: "Uçuş iptal", context: "Problem", example: "Unfortunately, the flight is cancelled.", pronunciation: "f-layt ken-sıld" },
        { phrase: "Baggage claim", meaning: "Bagaj teslim", context: "Varış", example: "Go to baggage claim area.", pronunciation: "ba-gıc k-le-yim" },
        { phrase: "Passport control", meaning: "Pasaport kontrolü", context: "Güvenlik", example: "Please proceed to passport control.", pronunciation: "pas-port kon-t-rol" },
        { phrase: "Customs declaration", meaning: "Gümrük beyanı", context: "Gümrük", example: "Do you have anything to declare?", pronunciation: "kas-tımls dek-la-rey-şın" },
        { phrase: "Duty-free shop", meaning: "Gümrüksüz mağaza", context: "Alışveriş", example: "Let's check the duty-free shop.", pronunciation: "du-ti f-ri şop" },
        { phrase: "Gate change", meaning: "Kapı değişikliği", context: "Duyuru", example: "Attention: gate change for flight 789.", pronunciation: "ge-yıt çeync" },
        { phrase: "Have a nice flight", meaning: "İyi uçuşlar", context: "İyi dilek", example: "Have a nice flight!", pronunciation: "hev e nays f-layt" },
        { phrase: "Direct flight", meaning: "Direkt uçuş", context: "Uçuş", example: "Is this a direct flight?", pronunciation: "di-rekt f-layt" }
    ]
};

export const u138: EnglishPhraseUnit = {
    unitId: 138, title: "Doctor Phrases", phrases: [
        { phrase: "I don't feel well", meaning: "İyi hissetmiyorum", context: "Sağlık", example: "I don't feel well today.", pronunciation: "ay do-nt fi-il vel" },
        { phrase: "It hurts here", meaning: "Burası ağrıyor", context: "Ağrı", example: "It hurts here when I press.", pronunciation: "it hörts hi-ır" },
        { phrase: "Take a deep breath", meaning: "Derin nefes al", context: "Muayene", example: "Take a deep breath, please.", pronunciation: "teyk e di-ip b-reth" },
        { phrase: "Get well soon", meaning: "Geçmiş olsun", context: "İyi dilek", example: "Get well soon!", pronunciation: "get vel su-un" },
        { phrase: "I have a headache", meaning: "Başım ağrıyor", context: "Semptom", example: "I have a terrible headache.", pronunciation: "ay hev e hed-eyk" },
        { phrase: "I have a fever", meaning: "Ateşim var", context: "Semptom", example: "I have a high fever.", pronunciation: "ay hev e fi-vır" },
        { phrase: "I've been feeling dizzy", meaning: "Başım dönüyor", context: "Semptom", example: "I've been feeling dizzy lately.", pronunciation: "ayv bi-in fi-ling di-zi" },
        { phrase: "Open your mouth", meaning: "Ağzını aç", context: "Muayene", example: "Open your mouth and say 'ahh'.", pronunciation: "o-pın yor mauth" },
        { phrase: "You need to rest", meaning: "Dinlenmen lazım", context: "Tavsiye", example: "You need to rest for a few days.", pronunciation: "yu ni-id tu rest" },
        { phrase: "Take this medicine", meaning: "Bu ilacı al", context: "Reçete", example: "Take this medicine twice a day.", pronunciation: "teyk dis me-di-sin" },
        { phrase: "I'm allergic to...", meaning: "...alerjim var", context: "Bilgi", example: "I'm allergic to penicillin.", pronunciation: "aym e-ler-cik tu" },
        { phrase: "Schedule an appointment", meaning: "Randevu al", context: "Planlama", example: "I need to schedule an appointment.", pronunciation: "skec-u-ul en e-poynt-mınt" },
        { phrase: "How long have you had this?", meaning: "Bu ne zamandır var?", context: "Soru", example: "How long have you had this cough?", pronunciation: "hau long hev yu hed dis" },
        { phrase: "It's nothing serious", meaning: "Ciddi bir şey değil", context: "Teşhis", example: "Don't worry, it's nothing serious.", pronunciation: "its na-thing si-ri-yıs" },
        { phrase: "You should see a specialist", meaning: "Uzman görmelisin", context: "Tavsiye", example: "You should see a specialist.", pronunciation: "yu şud si e s-pe-şı-list" }
    ]
};

export const u139: EnglishPhraseUnit = {
    unitId: 139, title: "Pharmacy Phrases", phrases: [
        { phrase: "Over-the-counter", meaning: "Reçetesiz", context: "İlaç", example: "Is this over-the-counter?", pronunciation: "o-vır dı ka-un-tır" },
        { phrase: "Prescription required", meaning: "Reçete gerekli", context: "İlaç", example: "This medication is prescription required.", pronunciation: "p-ri-sk-rip-şın ri-kway-ırd" },
        { phrase: "Take with food", meaning: "Yemekle birlikte al", context: "Kullanım", example: "Take this medicine with food.", pronunciation: "teyk vid fu-ud" },
        { phrase: "Side effects", meaning: "Yan etkiler", context: "İlaç", example: "What are the side effects?", pronunciation: "sayd e-fekts" },
        { phrase: "Once/twice a day", meaning: "Günde bir/iki kez", context: "Doz", example: "Take it twice a day.", pronunciation: "vans / tvays e dey" },
        { phrase: "Before/after meals", meaning: "Yemeklerden önce/sonra", context: "Kullanım", example: "Take it before meals.", pronunciation: "bi-for / af-tır mi-ıls" },
        { phrase: "Keep out of reach of children", meaning: "Çocukların erişemeyeceği yerde tutun", context: "Uyarı", example: "Keep out of reach of children.", pronunciation: "ki-ip aut ov ri-iç ov çil-drın" },
        { phrase: "Do not exceed the dose", meaning: "Dozu aşma", context: "Uyarı", example: "Do not exceed the recommended dose.", pronunciation: "du not ek-si-id dı dous" },
        { phrase: "I need something for...", meaning: "...için bir şeye ihtiyacım var", context: "İstek", example: "I need something for a headache.", pronunciation: "ay ni-id sam-thing for" },
        { phrase: "Is this safe during pregnancy?", meaning: "Hamilelikte güvenli mi?", context: "Soru", example: "Is this safe during pregnancy?", pronunciation: "iz dis seyf du-ring p-reg-nın-si" },
        { phrase: "Generic version", meaning: "Jenerik versiyon", context: "İlaç", example: "Is there a generic version?", pronunciation: "ce-ne-rik ver-şın" },
        { phrase: "Expiry date", meaning: "Son kullanma tarihi", context: "İlaç", example: "Check the expiry date.", pronunciation: "ek-s-pay-ri deyt" },
        { phrase: "Shake well before use", meaning: "Kullanmadan önce çalkalayın", context: "Kullanım", example: "Shake well before use.", pronunciation: "şeyk vel bi-for yu-us" },
        { phrase: "For external use only", meaning: "Sadece harici kullanım", context: "Kullanım", example: "For external use only.", pronunciation: "for ek-s-tör-nul yu-us on-li" },
        { phrase: "Store in a cool place", meaning: "Serin yerde saklayın", context: "Saklama", example: "Store in a cool, dry place.", pronunciation: "s-tor in e ku-ul p-le-yıs" }
    ]
};

export const u140: EnglishPhraseUnit = {
    unitId: 140, title: "Job Phrases", phrases: [
        { phrase: "Nine to five", meaning: "9-5 mesai", context: "İş", example: "I work nine to five.", pronunciation: "nayn tu feyv" },
        { phrase: "Work from home", meaning: "Evden çalış", context: "İş", example: "I work from home on Fridays.", pronunciation: "vörk f-rom hohm" },
        { phrase: "Make a living", meaning: "Geçimini sağla", context: "İş", example: "How do you make a living?", pronunciation: "meyk e li-ving" },
        { phrase: "Career ladder", meaning: "Kariyer basamakları", context: "İş", example: "Climbing the career ladder.", pronunciation: "ka-ri-ır le-dır" },
        { phrase: "Apply for a job", meaning: "İşe başvur", context: "Başvuru", example: "I applied for a job at the bank.", pronunciation: "e-p-lay for e cob" },
        { phrase: "Full-time/Part-time", meaning: "Tam/yarı zamanlı", context: "İş türü", example: "Is this a full-time position?", pronunciation: "ful taym / part taym" },
        { phrase: "Get promoted", meaning: "Terfi etmek", context: "Kariyer", example: "She got promoted to manager.", pronunciation: "get p-ro-mo-tid" },
        { phrase: "Hand in your notice", meaning: "İstifanı ver", context: "İş", example: "He handed in his notice.", pronunciation: "hend in yor no-tis" },
        { phrase: "Work overtime", meaning: "Fazla mesai yap", context: "İş", example: "I had to work overtime yesterday.", pronunciation: "vörk o-vır-taym" },
        { phrase: "Take a day off", meaning: "Bir gün izin al", context: "İzin", example: "Can I take a day off next week?", pronunciation: "teyk e dey of" },
        { phrase: "Be in charge of", meaning: "Sorumlu olmak", context: "Görev", example: "She's in charge of marketing.", pronunciation: "bi in çarç ov" },
        { phrase: "Meet a deadline", meaning: "Teslim tarihine yetiş", context: "İş", example: "We need to meet the deadline.", pronunciation: "mi-it e ded-layn" },
        { phrase: "Work under pressure", meaning: "Baskı altında çalış", context: "İş", example: "I can work under pressure.", pronunciation: "vörk an-dır p-re-şır" },
        { phrase: "Team meeting", meaning: "Ekip toplantısı", context: "İş", example: "We have a team meeting at 10.", pronunciation: "ti-im mi-ting" },
        { phrase: "Call in sick", meaning: "Hasta olduğunu bildir", context: "İş", example: "I had to call in sick today.", pronunciation: "kol in sik" }
    ]
};
// Units 141-160 - Part 2

export const u141: EnglishPhraseUnit = {
    unitId: 141, title: "Interview Phrases", phrases: [
        { phrase: "Tell me about yourself", meaning: "Kendinizden bahsedin", context: "Görüşme", example: "Tell me about yourself.", pronunciation: "tel mi e-baut yor-self" },
        { phrase: "Team player", meaning: "Takım oyuncusu", context: "Görüşme", example: "I'm a team player.", pronunciation: "ti-im p-le-yır" },
        { phrase: "Problem solver", meaning: "Problem çözücü", context: "Görüşme", example: "I'm a problem solver.", pronunciation: "p-rob-lım sol-vır" },
        { phrase: "Hit the ground running", meaning: "Hızlı başla", context: "Görüşme", example: "I can hit the ground running.", pronunciation: "hit dı g-ra-und rın-ning" },
        { phrase: "What are your strengths?", meaning: "Güçlü yönleriniz neler?", context: "Görüşme", example: "What are your strengths?", pronunciation: "vat ar yor s-t-rengts" },
        { phrase: "What are your weaknesses?", meaning: "Zayıf yönleriniz neler?", context: "Görüşme", example: "What are your weaknesses?", pronunciation: "vat ar yor vi-ik-nıs-sız" },
        { phrase: "Why should we hire you?", meaning: "Sizi neden işe alalım?", context: "Görüşme", example: "Why should we hire you?", pronunciation: "vay şud vi ha-yır yu" },
        { phrase: "What is your salary expectation?", meaning: "Maaş beklentiniz ne?", context: "Görüşme", example: "What is your salary expectation?", pronunciation: "vat iz yor se-le-ri ek-s-pek-tey-şın" },
        { phrase: "When can you start?", meaning: "Ne zaman başlayabilirsiniz?", context: "Görüşme", example: "When can you start?", pronunciation: "ven ken yu s-tart" },
        { phrase: "Do you have any questions?", meaning: "Sorunuz var mı?", context: "Görüşme", example: "Do you have any questions for us?", pronunciation: "du yu hev e-ni k-ves-çıns" },
        { phrase: "I have experience in...", meaning: "...konusunda deneyimim var", context: "Görüşme", example: "I have experience in marketing.", pronunciation: "ay hev ek-s-pi-ri-yıns in" },
        { phrase: "I'm a quick learner", meaning: "Çabuk öğrenirim", context: "Görüşme", example: "I'm a quick learner.", pronunciation: "aym e k-vik lör-nır" },
        { phrase: "I work well under pressure", meaning: "Baskı altında iyi çalışırım", context: "Görüşme", example: "I work well under pressure.", pronunciation: "ay vörk vel an-dır p-re-şır" },
        { phrase: "Thank you for your time", meaning: "Zamanınız için teşekkürler", context: "Görüşme", example: "Thank you for your time.", pronunciation: "teng-k yu for yor taym" },
        { phrase: "I look forward to hearing from you", meaning: "Sizden haber bekliyorum", context: "Görüşme", example: "I look forward to hearing from you.", pronunciation: "ay luk for-vırd tu hi-ring f-rom yu" }
    ]
};

export const u142: EnglishPhraseUnit = {
    unitId: 142, title: "Phone Phrases", phrases: [
        { phrase: "Speaking", meaning: "Ben konuşuyorum", context: "Telefon", example: "John speaking. How can I help?", pronunciation: "s-pi-king" },
        { phrase: "Hold the line", meaning: "Hatta kalın", context: "Telefon", example: "Please hold the line.", pronunciation: "ho-ld dı layn" },
        { phrase: "I'll put you through", meaning: "Bağlıyorum", context: "Telefon", example: "I'll put you through to sales.", pronunciation: "ayl put yu t-ru" },
        { phrase: "Call back later", meaning: "Sonra ara", context: "Telefon", example: "Can you call back later?", pronunciation: "kol bek ley-tır" },
        { phrase: "May I speak to...?", meaning: "...ile konuşabilir miyim?", context: "Telefon", example: "May I speak to Mr. Smith?", pronunciation: "mey ay s-pi-ik tu" },
        { phrase: "Who's calling, please?", meaning: "Kim arıyor?", context: "Telefon", example: "Who's calling, please?", pronunciation: "huz ko-ling pli-iz" },
        { phrase: "I'm sorry, he/she is not available", meaning: "Üzgünüm, müsait değil", context: "Telefon", example: "I'm sorry, she's not available.", pronunciation: "aym so-ri hi iz not e-vey-lı-bıl" },
        { phrase: "Can I take a message?", meaning: "Mesaj alabilir miyim?", context: "Telefon", example: "Can I take a message?", pronunciation: "ken ay teyk e me-sıc" },
        { phrase: "Could you spell that?", meaning: "Heceler misiniz?", context: "Telefon", example: "Could you spell your name?", pronunciation: "kud yu s-pel det" },
        { phrase: "I'll call you back", meaning: "Sizi arayacağım", context: "Telefon", example: "I'll call you back in 5 minutes.", pronunciation: "ayl kol yu bek" },
        { phrase: "The line is busy", meaning: "Hat meşgul", context: "Telefon", example: "The line is busy. Try again.", pronunciation: "dı layn iz bi-zi" },
        { phrase: "You have the wrong number", meaning: "Yanlış numarayı aradınız", context: "Telefon", example: "Sorry, you have the wrong number.", pronunciation: "yu hev dı rong nam-bır" },
        { phrase: "Can you hear me?", meaning: "Beni duyuyor musunuz?", context: "Telefon", example: "Can you hear me now?", pronunciation: "ken yu hi-ır mi" },
        { phrase: "The connection is bad", meaning: "Bağlantı kötü", context: "Telefon", example: "The connection is bad.", pronunciation: "dı ko-nek-şın iz bed" },
        { phrase: "I'm losing signal", meaning: "Sinyal kaybediyorum", context: "Telefon", example: "I'm losing signal.", pronunciation: "aym lu-zing sig-nıl" }
    ]
};

export const u143: EnglishPhraseUnit = {
    unitId: 143, title: "Email Phrases", phrases: [
        { phrase: "Dear Sir/Madam", meaning: "Sayın Yetkili", context: "E-posta", example: "Dear Sir/Madam,", pronunciation: "di-ır sör / me-dım" },
        { phrase: "I am writing to", meaning: "...için yazıyorum", context: "E-posta", example: "I am writing to inquire about...", pronunciation: "ay em ray-ting tu" },
        { phrase: "Please find attached", meaning: "Ekte bulabilirsiniz", context: "E-posta", example: "Please find attached my CV.", pronunciation: "pli-iz faynd e-teçt" },
        { phrase: "Looking forward to", meaning: "Bekliyorum", context: "E-posta", example: "Looking forward to hearing from you.", pronunciation: "lu-king for-vırd tu" },
        { phrase: "Best regards", meaning: "Saygılarımla", context: "E-posta", example: "Best regards, John", pronunciation: "best ri-gardz" },
        { phrase: "Kind regards", meaning: "Saygılarımla", context: "E-posta", example: "Kind regards, Sarah", pronunciation: "kaynd ri-gardz" },
        { phrase: "Thank you for your email", meaning: "E-postanız için teşekkürler", context: "E-posta", example: "Thank you for your email.", pronunciation: "teng-k yu for yor i-mey-ıl" },
        { phrase: "In response to your inquiry", meaning: "Sorgunuza cevaben", context: "E-posta", example: "In response to your inquiry...", pronunciation: "in ri-s-pons tu yor in-k-vay-ri" },
        { phrase: "As discussed", meaning: "Görüştüğümüz gibi", context: "E-posta", example: "As discussed in our meeting...", pronunciation: "ez dis-kast" },
        { phrase: "Please confirm", meaning: "Lütfen onaylayın", context: "E-posta", example: "Please confirm your attendance.", pronunciation: "pli-iz kon-förm" },
        { phrase: "I apologize for the delay", meaning: "Gecikme için özür dilerim", context: "E-posta", example: "I apologize for the delay in responding.", pronunciation: "ay e-po-lo-cayz for dı di-ley" },
        { phrase: "Please do not hesitate to contact me", meaning: "Benimle iletişime geçmekten çekinmeyin", context: "E-posta", example: "Please do not hesitate to contact me.", pronunciation: "pli-iz du not he-zi-teyt tu kon-tekt mi" },
        { phrase: "I would appreciate it if", meaning: "...yaparsanız memnun olurum", context: "E-posta", example: "I would appreciate it if you could...", pronunciation: "ay vud e-p-ri-şi-eyt it if" },
        { phrase: "Further to our conversation", meaning: "Konuşmamızın devamı olarak", context: "E-posta", example: "Further to our conversation yesterday...", pronunciation: "för-dır tu au-ır kon-ver-sey-şın" },
        { phrase: "Yours sincerely", meaning: "Saygılarımla", context: "E-posta", example: "Yours sincerely, Tom", pronunciation: "yorz sin-si-ır-li" }
    ]
};

export const u144: EnglishPhraseUnit = {
    unitId: 144, title: "Feeling Phrases", phrases: [
        { phrase: "Over the moon", meaning: "Çok mutlu", context: "Mutluluk", example: "I'm over the moon about the news.", pronunciation: "o-vır dı mu-un" },
        { phrase: "Down in the dumps", meaning: "Kederli", context: "Üzüntü", example: "She's been down in the dumps lately.", pronunciation: "da-un in dı dam-ps" },
        { phrase: "On cloud nine", meaning: "Mutluluktan uçmak", context: "Mutluluk", example: "He's on cloud nine after the promotion.", pronunciation: "on k-la-ud nayn" },
        { phrase: "Butterflies in my stomach", meaning: "Heyecanlı", context: "Heyecan", example: "I have butterflies in my stomach.", pronunciation: "ba-tır-f-lays in may s-ta-mık" },
        { phrase: "Under the weather", meaning: "Hasta", context: "Sağlık", example: "I'm feeling under the weather today.", pronunciation: "an-dır dı ve-dır" },
        { phrase: "Fed up with", meaning: "Bıkmış", context: "Can sıkkınlığı", example: "I'm fed up with this job.", pronunciation: "fed ap vid" },
        { phrase: "Keep your chin up", meaning: "Moralini yüksek tut", context: "Cesaret", example: "Keep your chin up!", pronunciation: "ki-ip yor çin ap" },
        { phrase: "Get something off your chest", meaning: "İçini dökmek", context: "Rahatlama", example: "I need to get this off my chest.", pronunciation: "get sam-thing of yor çest" },
        { phrase: "Burst into tears", meaning: "Ağlamaya başlamak", context: "Üzüntü", example: "She burst into tears.", pronunciation: "börst in-tu ti-ırs" },
        { phrase: "Jump for joy", meaning: "Sevinçten zıplamak", context: "Mutluluk", example: "They jumped for joy.", pronunciation: "camp for coy" },
        { phrase: "Scared to death", meaning: "Ödü kopmuş", context: "Korku", example: "I was scared to death.", pronunciation: "s-ke-yırd tu deth" },
        { phrase: "Worried sick", meaning: "Çok endişeli", context: "Endişe", example: "I was worried sick about you.", pronunciation: "va-ri-id sik" },
        { phrase: "Bored to tears", meaning: "Can sıkıntısından ölmek", context: "Can sıkıntısı", example: "I was bored to tears.", pronunciation: "bo-rd tu ti-ırs" },
        { phrase: "Mixed feelings", meaning: "Karışık duygular", context: "Belirsizlik", example: "I have mixed feelings about this.", pronunciation: "miks-t fi-lings" },
        { phrase: "Feel at ease", meaning: "Rahat hissetmek", context: "Rahatlık", example: "I feel at ease with her.", pronunciation: "fi-il et i-iz" }
    ]
};

export const u145: EnglishPhraseUnit = {
    unitId: 145, title: "Personality Phrases", phrases: [
        { phrase: "Down to earth", meaning: "Mütevazı", context: "Kişilik", example: "She's really down to earth.", pronunciation: "da-un tu örth" },
        { phrase: "Easy going", meaning: "Uyumlu", context: "Kişilik", example: "He's very easy going.", pronunciation: "i-zi go-ing" },
        { phrase: "Heart of gold", meaning: "Altın kalp", context: "Kişilik", example: "She has a heart of gold.", pronunciation: "hart ov go-ld" },
        { phrase: "People person", meaning: "İnsancıl", context: "Kişilik", example: "I'm a people person.", pronunciation: "pi-pıl per-sın" },
        { phrase: "Set in their ways", meaning: "Değişime kapalı", context: "Kişilik", example: "He's set in his ways.", pronunciation: "set in der veys" },
        { phrase: "Good sense of humor", meaning: "İyi espri anlayışı", context: "Kişilik", example: "She has a good sense of humor.", pronunciation: "gud sens ov hu-mır" },
        { phrase: "Quick tempered", meaning: "Çabuk sinirlenen", context: "Kişilik", example: "He's a bit quick tempered.", pronunciation: "k-vik tem-pırd" },
        { phrase: "Level headed", meaning: "Sağduyulu", context: "Kişilik", example: "She's very level headed.", pronunciation: "le-vıl he-did" },
        { phrase: "Full of life", meaning: "Hayat dolu", context: "Kişilik", example: "The children are full of life.", pronunciation: "ful ov layf" },
        { phrase: "Keep to yourself", meaning: "İçine kapanık", context: "Kişilik", example: "He tends to keep to himself.", pronunciation: "ki-ip tu yor-self" },
        { phrase: "Thick skinned", meaning: "Kalın derili", context: "Kişilik", example: "You need to be thick skinned.", pronunciation: "tik s-kind" },
        { phrase: "Wear your heart on your sleeve", meaning: "Duygularını açıkça göstermek", context: "Kişilik", example: "She wears her heart on her sleeve.", pronunciation: "ver yor hart on yor s-li-iv" },
        { phrase: "Two-faced", meaning: "İki yüzlü", context: "Kişilik", example: "Don't trust him, he's two-faced.", pronunciation: "tu fey-s-t" },
        { phrase: "Pain in the neck", meaning: "Can sıkıcı kişi", context: "Kişilik", example: "He can be a pain in the neck.", pronunciation: "peyn in dı nek" },
        { phrase: "Salt of the earth", meaning: "Çok iyi insan", context: "Kişilik", example: "My grandmother is the salt of the earth.", pronunciation: "solt ov dı örth" }
    ]
};

export const u146: EnglishPhraseUnit = {
    unitId: 146, title: "Sports Phrases", phrases: [
        { phrase: "Work out", meaning: "Spor yapmak", context: "Egzersiz", example: "I work out every morning.", pronunciation: "vörk aut" },
        { phrase: "Keep fit", meaning: "Formda kalmak", context: "Sağlık", example: "I try to keep fit.", pronunciation: "ki-ip fit" },
        { phrase: "Get in shape", meaning: "Form kazanmak", context: "Egzersiz", example: "I want to get in shape.", pronunciation: "get in şeyp" },
        { phrase: "Break a sweat", meaning: "Ter dökmek", context: "Egzersiz", example: "You need to break a sweat.", pronunciation: "breyk e s-vet" },
        { phrase: "Warm up", meaning: "Isınmak", context: "Egzersiz", example: "Don't forget to warm up.", pronunciation: "varm ap" },
        { phrase: "Cool down", meaning: "Serinlemek", context: "Egzersiz", example: "Always cool down after exercise.", pronunciation: "ku-ul da-un" },
        { phrase: "Personal best", meaning: "Kişisel en iyi", context: "Başarı", example: "I achieved a personal best!", pronunciation: "per-sı-nıl best" },
        { phrase: "Out of breath", meaning: "Nefes nefese", context: "Yorgunluk", example: "I was out of breath.", pronunciation: "aut ov b-reth" },
        { phrase: "Win/lose by a mile", meaning: "Açık ara kazan/kaybet", context: "Sonuç", example: "They won by a mile.", pronunciation: "vin / luz bay e mayl" },
        { phrase: "Level playing field", meaning: "Eşit şartlar", context: "Adalet", example: "We need a level playing field.", pronunciation: "le-vıl p-le-ying fi-ıld" },
        { phrase: "Ball is in your court", meaning: "Sıra sende", context: "Sorumluluk", example: "The ball is in your court now.", pronunciation: "bol iz in yor kort" },
        { phrase: "Throw in the towel", meaning: "Pes etmek", context: "Vazgeçme", example: "Don't throw in the towel.", pronunciation: "t-rou in dı ta-vıl" },
        { phrase: "Go the extra mile", meaning: "Fazlasını yapmak", context: "Çaba", example: "She always goes the extra mile.", pronunciation: "go dı eks-t-ra mayl" },
        { phrase: "Second wind", meaning: "Yeni enerji", context: "Canlanma", example: "I got a second wind.", pronunciation: "se-kınd vind" },
        { phrase: "Home stretch", meaning: "Son aşama", context: "Bitiş", example: "We're in the home stretch now.", pronunciation: "hohm s-t-reç" }
    ]
};

export const u147: EnglishPhraseUnit = {
    unitId: 147, title: "Music Phrases", phrases: [
        { phrase: "Music to my ears", meaning: "Kulağıma hoş geliyor", context: "İfade", example: "That's music to my ears!", pronunciation: "myu-zik tu may hi-ırs" },
        { phrase: "Face the music", meaning: "Sonuçlarla yüzleş", context: "İfade", example: "It's time to face the music.", pronunciation: "fey-s dı myu-zik" },
        { phrase: "Play by ear", meaning: "Duruma göre hareket et", context: "İfade", example: "Let's play it by ear.", pronunciation: "p-ley bay hi-ır" },
        { phrase: "Ring a bell", meaning: "Tanıdık gelmek", context: "İfade", example: "Does that name ring a bell?", pronunciation: "ring e bel" },
        { phrase: "Blow your own trumpet", meaning: "Övünmek", context: "İfade", example: "Don't blow your own trumpet.", pronunciation: "b-lou yor ohn t-ram-pıt" },
        { phrase: "Strike a chord", meaning: "Etkilemek", context: "İfade", example: "The speech struck a chord with everyone.", pronunciation: "s-t-rayk e kord" },
        { phrase: "Change your tune", meaning: "Fikir değiştirmek", context: "İfade", example: "He changed his tune quickly.", pronunciation: "çeync yor tu-un" },
        { phrase: "For a song", meaning: "Çok ucuza", context: "İfade", example: "I got this for a song.", pronunciation: "for e song" },
        { phrase: "Hit the right note", meaning: "Doğru anlamı yakalamak", context: "İfade", example: "Her speech hit the right note.", pronunciation: "hit dı rayt no-ut" },
        { phrase: "Fine tune", meaning: "İnce ayar yapmak", context: "İfade", example: "We need to fine tune the plan.", pronunciation: "fayn tu-un" },
        { phrase: "Play second fiddle", meaning: "İkinci planda kalmak", context: "İfade", example: "I don't want to play second fiddle.", pronunciation: "p-ley se-kınd fi-dıl" },
        { phrase: "In tune with", meaning: "Uyum içinde", context: "İfade", example: "He's in tune with modern trends.", pronunciation: "in tu-un vid" },
        { phrase: "Out of tune", meaning: "Uyumsuz", context: "İfade", example: "The guitar is out of tune.", pronunciation: "aut ov tu-un" },
        { phrase: "Turn up the volume", meaning: "Sesi aç", context: "Müzik", example: "Turn up the volume, I love this song!", pronunciation: "törn ap dı vol-yum" },
        { phrase: "Live music", meaning: "Canlı müzik", context: "Müzik", example: "I prefer live music.", pronunciation: "layv myu-zik" }
    ]
};

export const u148: EnglishPhraseUnit = {
    unitId: 148, title: "Movie Phrases", phrases: [
        { phrase: "Spoiler alert", meaning: "Spoiler uyarısı", context: "Film", example: "Spoiler alert: the hero dies.", pronunciation: "s-poy-lır e-lört" },
        { phrase: "Edge of your seat", meaning: "Heyecanlı", context: "Film", example: "The movie keeps you on the edge of your seat.", pronunciation: "eç ov yor si-it" },
        { phrase: "Block buster", meaning: "Gişe rekortmeni", context: "Film", example: "It was a real blockbuster.", pronunciation: "b-lok bas-tır" },
        { phrase: "Steal the show", meaning: "Gösteriyi çalmak", context: "Film", example: "She stole the show.", pronunciation: "s-ti-il dı şou" },
        { phrase: "Behind the scenes", meaning: "Kamera arkası", context: "Film", example: "Let's see what happens behind the scenes.", pronunciation: "bi-haynd dı si-ins" },
        { phrase: "Based on a true story", meaning: "Gerçek hikayeden uyarlama", context: "Film", example: "This movie is based on a true story.", pronunciation: "bey-st on e t-ru s-to-ri" },
        { phrase: "Box office hit", meaning: "Gişe başarısı", context: "Film", example: "It was a box office hit.", pronunciation: "boks o-fis hit" },
        { phrase: "A must-see", meaning: "Mutlaka izlenmeli", context: "Film", example: "This movie is a must-see.", pronunciation: "e mast si" },
        { phrase: "Plot twist", meaning: "Beklenmedik gelişme", context: "Film", example: "What a plot twist!", pronunciation: "p-lot t-vist" },
        { phrase: "Movie marathon", meaning: "Film maratonu", context: "Film", example: "Let's have a movie marathon.", pronunciation: "mu-vi me-rı-ton" },
        { phrase: "Sneak peek", meaning: "Ön izleme", context: "Film", example: "Here's a sneak peek of the movie.", pronunciation: "s-ni-ik pi-ik" },
        { phrase: "Give it a thumbs up/down", meaning: "Beğenmek/beğenmemek", context: "Değerlendirme", example: "I give it a thumbs up.", pronunciation: "giv it e tamz ap / da-un" },
        { phrase: "It has a happy ending", meaning: "Mutlu sonu var", context: "Film", example: "Don't worry, it has a happy ending.", pronunciation: "it hez e he-pi en-ding" },
        { phrase: "Action-packed", meaning: "Aksiyon dolu", context: "Film", example: "It's an action-packed movie.", pronunciation: "ek-şın pek-t" },
        { phrase: "Tear-jerker", meaning: "Ağlatıcı", context: "Film", example: "That movie is a real tear-jerker.", pronunciation: "ti-ır cer-kır" }
    ]
};

export const u149: EnglishPhraseUnit = {
    unitId: 149, title: "Technology Phrases", phrases: [
        { phrase: "Tech-savvy", meaning: "Teknolojiye yatkın", context: "Teknoloji", example: "He's very tech-savvy.", pronunciation: "tek se-vi" },
        { phrase: "Cutting-edge", meaning: "En son teknoloji", context: "Teknoloji", example: "It's cutting-edge technology.", pronunciation: "kat-ting eç" },
        { phrase: "Go viral", meaning: "Viral olmak", context: "İnternet", example: "The video went viral.", pronunciation: "go va-y-rıl" },
        { phrase: "Stay connected", meaning: "Bağlantıda kal", context: "İletişim", example: "Technology helps us stay connected.", pronunciation: "s-tey ko-nek-tid" },
        { phrase: "Log in/out", meaning: "Giriş/çıkış yap", context: "Bilgisayar", example: "Don't forget to log out.", pronunciation: "log in / aut" },
        { phrase: "Back up", meaning: "Yedekle", context: "Bilgisayar", example: "Always back up your files.", pronunciation: "bek ap" },
        { phrase: "Scroll down/up", meaning: "Aşağı/yukarı kaydır", context: "Bilgisayar", example: "Scroll down to see more.", pronunciation: "s-k-rol da-un / ap" },
        { phrase: "Crash", meaning: "Çökmek", context: "Bilgisayar", example: "My computer crashed.", pronunciation: "k-reş" },
        { phrase: "Bug in the system", meaning: "Sistemde hata", context: "Yazılım", example: "There's a bug in the system.", pronunciation: "bag in dı sis-tım" },
        { phrase: "User-friendly", meaning: "Kullanıcı dostu", context: "Yazılım", example: "This app is very user-friendly.", pronunciation: "yu-zır f-rend-li" },
        { phrase: "Cloud storage", meaning: "Bulut depolama", context: "Teknoloji", example: "I use cloud storage for my files.", pronunciation: "k-la-ud s-to-rıc" },
        { phrase: "Run out of battery", meaning: "Bataryası bitmek", context: "Cihaz", example: "My phone is running out of battery.", pronunciation: "ran aut ov be-tı-ri" },
        { phrase: "Screen time", meaning: "Ekran süresi", context: "Teknoloji", example: "Reduce your screen time.", pronunciation: "s-k-ri-in taym" },
        { phrase: "Digital detox", meaning: "Dijital detoks", context: "Teknoloji", example: "I need a digital detox.", pronunciation: "di-ci-tıl di-toks" },
        { phrase: "Smart device", meaning: "Akıllı cihaz", context: "Teknoloji", example: "I have many smart devices at home.", pronunciation: "s-mart di-vays" }
    ]
};

export const u150: EnglishPhraseUnit = {
    unitId: 150, title: "Social Media Phrases", phrases: [
        { phrase: "Go viral", meaning: "Viral olmak", context: "Sosyal medya", example: "My post went viral!", pronunciation: "go va-y-rıl" },
        { phrase: "Breaking the internet", meaning: "İnterneti kırmak", context: "Popülerlik", example: "That photo is breaking the internet.", pronunciation: "b-rey-king dı in-tör-net" },
        { phrase: "Slide into DMs", meaning: "DM'den yazmak", context: "Sosyal medya", example: "He slid into her DMs.", pronunciation: "s-layd in-tu di ems" },
        { phrase: "Throwback", meaning: "Geçmişe dönüş", context: "Paylaşım", example: "Throwback to last summer.", pronunciation: "t-rou-bek" },
        { phrase: "Like and subscribe", meaning: "Beğen ve abone ol", context: "Sosyal medya", example: "Don't forget to like and subscribe.", pronunciation: "layk end sab-s-k-rayb" },
        { phrase: "Content creator", meaning: "İçerik üreticisi", context: "Sosyal medya", example: "She's a content creator.", pronunciation: "kon-tent k-ri-ey-tır" },
        { phrase: "Influencer", meaning: "Etkileyici", context: "Sosyal medya", example: "He's a famous influencer.", pronunciation: "in-f-lu-en-sır" },
        { phrase: "Trending topic", meaning: "Gündem konusu", context: "Sosyal medya", example: "It became a trending topic.", pronunciation: "t-ren-ding to-pik" },
        { phrase: "Go live", meaning: "Canlı yayına geç", context: "Sosyal medya", example: "I'm going live at 8 PM.", pronunciation: "go layv" },
        { phrase: "Hashtag", meaning: "Etiket", context: "Sosyal medya", example: "Use the right hashtag.", pronunciation: "heş-teg" },
        { phrase: "Unfollow", meaning: "Takibi bırak", context: "Sosyal medya", example: "I unfollowed him.", pronunciation: "an-fol-lou" },
        { phrase: "Tag someone", meaning: "Birini etiketle", context: "Sosyal medya", example: "Tag your best friend.", pronunciation: "teg sam-van" },
        { phrase: "Story", meaning: "Hikaye", context: "Sosyal medya", example: "Did you see my story?", pronunciation: "s-to-ri" },
        { phrase: "Repost/Share", meaning: "Tekrar paylaş/Paylaş", context: "Sosyal medya", example: "Please share this post.", pronunciation: "ri-post / şe-ir" },
        { phrase: "Block someone", meaning: "Birini engelle", context: "Sosyal medya", example: "I had to block him.", pronunciation: "b-lok sam-van" }
    ]
};

// Units 151-160 continue...
export const u151: EnglishPhraseUnit = {
    unitId: 151, title: "Home Phrases", phrases: [
        { phrase: "Feel at home", meaning: "Evinde gibi hisset", context: "Rahatlık", example: "Make yourself feel at home.", pronunciation: "fi-il et ho-um" },
        { phrase: "Home sweet home", meaning: "Evim güzel evim", context: "Ev", example: "Home sweet home!", pronunciation: "ho-um s-vi-it ho-um" },
        { phrase: "Move in/out", meaning: "Taşınmak", context: "Taşınma", example: "We're moving in next week.", pronunciation: "mu-uv in / aut" },
        { phrase: "Settle down", meaning: "Yerleşmek", context: "Yaşam", example: "They want to settle down.", pronunciation: "se-tıl da-un" },
        { phrase: "Do up the house", meaning: "Evi yenilemek", context: "Tadilat", example: "We're doing up the house.", pronunciation: "du ap dı ha-us" },
        { phrase: "House warming party", meaning: "Ev ısıtma partisi", context: "Kutlama", example: "Come to my house warming party.", pronunciation: "ha-us vor-ming par-ti" },
        { phrase: "Landlord/Tenant", meaning: "Ev sahibi/Kiracı", context: "Kira", example: "My landlord is very nice.", pronunciation: "lend-lord / te-nınt" },
        { phrase: "Pay the rent", meaning: "Kirayı öde", context: "Kira", example: "Don't forget to pay the rent.", pronunciation: "pey dı rent" },
        { phrase: "Flat/Apartment share", meaning: "Ev arkadaşlığı", context: "Konaklama", example: "I'm looking for a flat share.", pronunciation: "f-let / e-part-mınt şe-ir" },
        { phrase: "Tidy up", meaning: "Toplamak", context: "Temizlik", example: "Tidy up your room.", pronunciation: "tay-di ap" },
        { phrase: "Spring cleaning", meaning: "Bahar temizliği", context: "Temizlik", example: "It's time for spring cleaning.", pronunciation: "s-p-ring k-li-ning" },
        { phrase: "Make the bed", meaning: "Yatağı yap", context: "Temizlik", example: "Make your bed every morning.", pronunciation: "meyk dı bed" },
        { phrase: "Do the dishes", meaning: "Bulaşıkları yıka", context: "Temizlik", example: "Can you do the dishes?", pronunciation: "du dı di-şız" },
        { phrase: "Take out the trash", meaning: "Çöpü çıkar", context: "Temizlik", example: "Please take out the trash.", pronunciation: "teyk aut dı t-reş" },
        { phrase: "Lock the door", meaning: "Kapıyı kilitle", context: "Güvenlik", example: "Don't forget to lock the door.", pronunciation: "lok dı dor" }
    ]
};

export const u152: EnglishPhraseUnit = {
    unitId: 152, title: "Environment Phrases", phrases: [
        { phrase: "Go green", meaning: "Çevreci ol", context: "Çevre", example: "It's time to go green.", pronunciation: "go g-ri-in" },
        { phrase: "Carbon footprint", meaning: "Karbon ayak izi", context: "Çevre", example: "Reduce your carbon footprint.", pronunciation: "kar-bın fut-p-rint" },
        { phrase: "Save the planet", meaning: "Gezegeni kurtar", context: "Çevre", example: "Let's save the planet.", pronunciation: "seyv dı p-le-nıt" },
        { phrase: "Eco-friendly", meaning: "Çevre dostu", context: "Çevre", example: "Use eco-friendly products.", pronunciation: "i-ko-f-rend-li" },
        { phrase: "Renewable energy", meaning: "Yenilenebilir enerji", context: "Çevre", example: "We need more renewable energy.", pronunciation: "ri-nu-e-bıl e-ner-ci" },
        { phrase: "Reduce, reuse, recycle", meaning: "Azalt, tekrar kullan, geri dönüştür", context: "Çevre", example: "Remember: reduce, reuse, recycle.", pronunciation: "ri-dyus ri-yuz ri-say-kıl" },
        { phrase: "Climate change", meaning: "İklim değişikliği", context: "Çevre", example: "Climate change is a serious problem.", pronunciation: "k-la-y-mıt çeync" },
        { phrase: "Global warming", meaning: "Küresel ısınma", context: "Çevre", example: "Global warming is affecting everyone.", pronunciation: "g-lo-bıl var-ming" },
        { phrase: "Endangered species", meaning: "Nesli tehlike altındaki türler", context: "Çevre", example: "We must protect endangered species.", pronunciation: "en-deyn-cırd s-pi-şiz" },
        { phrase: "Natural resources", meaning: "Doğal kaynaklar", context: "Çevre", example: "Don't waste natural resources.", pronunciation: "ne-çu-rıl ri-sor-sız" },
        { phrase: "Pollution levels", meaning: "Kirlilik seviyeleri", context: "Çevre", example: "Pollution levels are high today.", pronunciation: "po-lu-şın le-vıls" },
        { phrase: "Plastic-free", meaning: "Plastiksiz", context: "Çevre", example: "Try to be plastic-free.", pronunciation: "p-les-tik f-ri" },
        { phrase: "Plant a tree", meaning: "Ağaç dik", context: "Çevre", example: "Let's plant a tree.", pronunciation: "p-lant e t-ri" },
        { phrase: "Single-use plastic", meaning: "Tek kullanımlık plastik", context: "Çevre", example: "Avoid single-use plastic.", pronunciation: "sing-gıl yu-uz p-les-tik" },
        { phrase: "Zero waste", meaning: "Sıfır atık", context: "Çevre", example: "We aim for zero waste.", pronunciation: "zi-ro veyst" }
    ]
};

export const u153: EnglishPhraseUnit = {
    unitId: 153, title: "News Phrases", phrases: [
        { phrase: "Breaking news", meaning: "Son dakika", context: "Haber", example: "Breaking news: earthquake hits city.", pronunciation: "b-rey-king nu-uz" },
        { phrase: "Make headlines", meaning: "Manşet olmak", context: "Haber", example: "The story made headlines.", pronunciation: "meyk hed-laynz" },
        { phrase: "Hot off the press", meaning: "Taze haber", context: "Haber", example: "Hot off the press!", pronunciation: "hot of dı p-res" },
        { phrase: "Spread like wildfire", meaning: "Hızla yayılmak", context: "Haber", example: "The news spread like wildfire.", pronunciation: "s-p-red layk vayld-fa-yır" },
        { phrase: "According to sources", meaning: "Kaynaklara göre", context: "Haber", example: "According to sources, he resigned.", pronunciation: "e-kor-ding tu sor-sız" },
        { phrase: "Eye witness", meaning: "Görgü tanığı", context: "Haber", example: "An eye witness reported the accident.", pronunciation: "ay vit-nıs" },
        { phrase: "Press conference", meaning: "Basın toplantısı", context: "Haber", example: "The president held a press conference.", pronunciation: "p-res kon-fı-rıns" },
        { phrase: "Live coverage", meaning: "Canlı yayın", context: "Haber", example: "We have live coverage of the event.", pronunciation: "layv ka-vı-rıç" },
        { phrase: "Stay tuned", meaning: "Kanalda kalın", context: "Haber", example: "Stay tuned for more updates.", pronunciation: "s-tey tu-und" },
        { phrase: "In other news", meaning: "Diğer haberlerde", context: "Haber", example: "In other news, the economy...", pronunciation: "in a-dır nu-uz" },
        { phrase: "Fake news", meaning: "Yalan haber", context: "Haber", example: "Don't believe fake news.", pronunciation: "feyk nu-uz" },
        { phrase: "Go viral", meaning: "Viral olmak", context: "Haber", example: "The video went viral.", pronunciation: "go va-y-rıl" },
        { phrase: "Make the front page", meaning: "Birinci sayfa olmak", context: "Haber", example: "The story made the front page.", pronunciation: "meyk dı f-rant peyc" },
        { phrase: "Exclusive story", meaning: "Özel haber", context: "Haber", example: "We have an exclusive story.", pronunciation: "ek-s-k-lu-siv s-to-ri" },
        { phrase: "No comment", meaning: "Yorum yok", context: "Haber", example: "The politician said 'no comment'.", pronunciation: "no ko-ment" }
    ]
};

export const u154: EnglishPhraseUnit = {
    unitId: 154, title: "Culture Phrases", phrases: [
        { phrase: "Cultural heritage", meaning: "Kültürel miras", context: "Kültür", example: "We must protect our cultural heritage.", pronunciation: "kal-çu-rıl he-ri-tıç" },
        { phrase: "Traditional values", meaning: "Geleneksel değerler", context: "Kültür", example: "They believe in traditional values.", pronunciation: "t-ra-di-şı-nıl ve-lyuz" },
        { phrase: "Custom and tradition", meaning: "Gelenek ve görenek", context: "Kültür", example: "It's an old custom and tradition.", pronunciation: "kas-tım end t-ra-di-şın" },
        { phrase: "Culture shock", meaning: "Kültür şoku", context: "Kültür", example: "I experienced culture shock.", pronunciation: "kal-çır şok" },
        { phrase: "When in Rome, do as the Romans do", meaning: "Atın bulunduğu yere göre", context: "Atasözü", example: "Remember: when in Rome, do as the Romans do.", pronunciation: "ven in ro-um du ez dı ro-mıns du" },
        { phrase: "Pass down", meaning: "Nesilden nesile aktarmak", context: "Gelenek", example: "This recipe was passed down from my grandmother.", pronunciation: "pas da-un" },
        { phrase: "Old wives' tale", meaning: "Hurafeler", context: "İnanış", example: "That's just an old wives' tale.", pronunciation: "o-uld vayvz tey-ıl" },
        { phrase: "National holiday", meaning: "Milli bayram", context: "Kutlama", example: "Tomorrow is a national holiday.", pronunciation: "ne-şı-nıl ho-li-dey" },
        { phrase: "Local customs", meaning: "Yerel gelenekler", context: "Kültür", example: "Learn about local customs before traveling.", pronunciation: "lo-kıl kas-tımz" },
        { phrase: "Mother tongue", meaning: "Ana dil", context: "Dil", example: "Turkish is my mother tongue.", pronunciation: "ma-dır tang" },
        { phrase: "Multicultural society", meaning: "Çok kültürlü toplum", context: "Kültür", example: "We live in a multicultural society.", pronunciation: "mal-ti-kal-çu-rıl so-sa-y-ti" },
        { phrase: "The good old days", meaning: "Eski güzel günler", context: "Nostalji", example: "I miss the good old days.", pronunciation: "dı gud o-uld deyz" },
        { phrase: "Folk tale", meaning: "Halk hikayesi", context: "Edebiyat", example: "This is an old folk tale.", pronunciation: "fo-uk tey-ıl" },
        { phrase: "Generation gap", meaning: "Kuşak farkı", context: "Toplum", example: "There's a generation gap.", pronunciation: "ce-nı-rey-şın gep" },
        { phrase: "Social norms", meaning: "Sosyal normlar", context: "Toplum", example: "Follow the social norms.", pronunciation: "so-şıl normz" }
    ]
};

export const u155: EnglishPhraseUnit = {
    unitId: 155, title: "Present Perfect Phrases", phrases: [
        { phrase: "Have you ever...?", meaning: "Hiç... yapmış mıydın?", context: "Deneyim", example: "Have you ever been to Paris?", pronunciation: "hev yu e-vır" },
        { phrase: "I've never...", meaning: "Hiç... yapmadım", context: "Deneyim", example: "I've never seen snow.", pronunciation: "ayv ne-vır" },
        { phrase: "I've already...", meaning: "Zaten... yaptım", context: "Tamamlanmış", example: "I've already finished my homework.", pronunciation: "ayv ol-re-di" },
        { phrase: "I haven't... yet", meaning: "Henüz... yapmadım", context: "Tamamlanmamış", example: "I haven't eaten yet.", pronunciation: "ay he-vınt yet" },
        { phrase: "Just now", meaning: "Az önce", context: "Zaman", example: "I've just finished.", pronunciation: "cast na-u" },
        { phrase: "So far", meaning: "Şimdiye kadar", context: "Zaman", example: "So far, everything is fine.", pronunciation: "so far" },
        { phrase: "Up to now", meaning: "Şu ana kadar", context: "Zaman", example: "Up to now, we've had no problems.", pronunciation: "ap tu na-u" },
        { phrase: "Since then", meaning: "O zamandan beri", context: "Zaman", example: "I haven't seen her since then.", pronunciation: "sins den" },
        { phrase: "For a long time", meaning: "Uzun zamandır", context: "Süre", example: "I've known him for a long time.", pronunciation: "for e long taym" },
        { phrase: "Recently", meaning: "Son zamanlarda", context: "Zaman", example: "I've been busy recently.", pronunciation: "ri-sınt-li" },
        { phrase: "Lately", meaning: "Son zamanlarda", context: "Zaman", example: "Have you seen him lately?", pronunciation: "leyt-li" },
        { phrase: "In my life", meaning: "Hayatımda", context: "Deneyim", example: "This is the best day in my life!", pronunciation: "in may layf" },
        { phrase: "Once/Twice", meaning: "Bir/iki kez", context: "Sıklık", example: "I've been there twice.", pronunciation: "vans / t-vays" },
        { phrase: "Several times", meaning: "Birkaç kez", context: "Sıklık", example: "I've visited several times.", pronunciation: "se-vı-rıl taymz" },
        { phrase: "How long have you...?", meaning: "Ne zamandır...?", context: "Süre", example: "How long have you lived here?", pronunciation: "ha-u long hev yu" }
    ]
};

export const u156: EnglishPhraseUnit = {
    unitId: 156, title: "Comparison Phrases", phrases: [
        { phrase: "As... as", meaning: "Kadar", context: "Karşılaştırma", example: "She's as tall as her mother.", pronunciation: "ez ... ez" },
        { phrase: "Not as... as", meaning: "Kadar... değil", context: "Karşılaştırma", example: "It's not as cold as yesterday.", pronunciation: "not ez ... ez" },
        { phrase: "Much more", meaning: "Çok daha", context: "Karşılaştırma", example: "This is much more interesting.", pronunciation: "maç mor" },
        { phrase: "A bit less", meaning: "Biraz daha az", context: "Karşılaştırma", example: "It's a bit less expensive.", pronunciation: "e bit les" },
        { phrase: "Far better", meaning: "Çok daha iyi", context: "Karşılaştırma", example: "This one is far better.", pronunciation: "far be-tır" },
        { phrase: "Way more", meaning: "Çok daha fazla", context: "Karşılaştırma", example: "That's way more difficult.", pronunciation: "vey mor" },
        { phrase: "Getting better", meaning: "İyileşiyor", context: "Değişim", example: "Things are getting better.", pronunciation: "ge-ting be-tır" },
        { phrase: "The more... the more", meaning: "Ne kadar... o kadar", context: "Karşılaştırma", example: "The more you practice, the better you get.", pronunciation: "dı mor ... dı mor" },
        { phrase: "At least", meaning: "En azından", context: "Minimum", example: "At least try.", pronunciation: "et li-ist" },
        { phrase: "At most", meaning: "En fazla", context: "Maximum", example: "It will take at most 2 hours.", pronunciation: "et mo-ust" },
        { phrase: "Compared to", meaning: "Kıyasla", context: "Karşılaştırma", example: "Compared to last year, this is better.", pronunciation: "kom-pe-yırd tu" },
        { phrase: "In comparison with", meaning: "Karşılaştırmada", context: "Karşılaştırma", example: "In comparison with others, it's cheap.", pronunciation: "in kom-pe-ri-sın vid" },
        { phrase: "Similar to", meaning: "Benzer", context: "Benzerlik", example: "It's similar to mine.", pronunciation: "si-mi-lır tu" },
        { phrase: "Different from", meaning: "Farklı", context: "Farklılık", example: "This is different from that.", pronunciation: "di-fı-rınt f-rom" },
        { phrase: "The same as", meaning: "Aynı", context: "Benzerlik", example: "It's the same as before.", pronunciation: "dı seym ez" }
    ]
};

export const u157: EnglishPhraseUnit = {
    unitId: 157, title: "Superlative Phrases", phrases: [
        { phrase: "The best of all", meaning: "Hepsinin en iyisi", context: "Üstünlük", example: "This is the best of all.", pronunciation: "dı best ov ol" },
        { phrase: "The worst ever", meaning: "Şimdiye kadar en kötüsü", context: "Üstünlük", example: "That was the worst movie ever.", pronunciation: "dı vörst e-vır" },
        { phrase: "Second to none", meaning: "Eşsiz", context: "Üstünlük", example: "Her cooking is second to none.", pronunciation: "se-kınd tu nan" },
        { phrase: "One of the best", meaning: "En iyilerden biri", context: "Üstünlük", example: "He's one of the best players.", pronunciation: "van ov dı best" },
        { phrase: "By far the most", meaning: "Açık ara en", context: "Üstünlük", example: "This is by far the most expensive.", pronunciation: "bay far dı mo-ust" },
        { phrase: "Without a doubt", meaning: "Şüphesiz", context: "Kesinlik", example: "He is without a doubt the best.", pronunciation: "vi-da-ut e da-ut" },
        { phrase: "In the world", meaning: "Dünyada", context: "Kapsam", example: "The tallest building in the world.", pronunciation: "in dı vör-ıld" },
        { phrase: "Ever seen/heard", meaning: "Şimdiye kadar gördüğüm/duyduğum", context: "Deneyim", example: "The funniest joke I've ever heard.", pronunciation: "e-vır si-in / hörd" },
        { phrase: "The least expensive", meaning: "En ucuz", context: "Fiyat", example: "This is the least expensive option.", pronunciation: "dı li-ist ek-s-pen-siv" },
        { phrase: "The most popular", meaning: "En popüler", context: "Popülerlik", example: "It's the most popular song.", pronunciation: "dı mo-ust po-pyu-lır" },
        { phrase: "Peak/Prime", meaning: "Zirve", context: "Doruk", example: "He's at his peak performance.", pronunciation: "pi-ik / p-raym" },
        { phrase: "Top of the line", meaning: "En üst düzey", context: "Kalite", example: "This is a top of the line product.", pronunciation: "top ov dı layn" },
        { phrase: "Best seller", meaning: "En çok satan", context: "Satış", example: "It's a best seller.", pronunciation: "best se-lır" },
        { phrase: "World record", meaning: "Dünya rekoru", context: "Başarı", example: "He broke the world record.", pronunciation: "vör-ıld re-kord" },
        { phrase: "All-time favorite", meaning: "Tüm zamanların favorisi", context: "Tercih", example: "It's my all-time favorite movie.", pronunciation: "ol taym fey-vı-rıt" }
    ]
};

export const u158: EnglishPhraseUnit = {
    unitId: 158, title: "Modal Verb Phrases", phrases: [
        { phrase: "Should I...?", meaning: "...malı mıyım?", context: "Tavsiye", example: "Should I call him?", pronunciation: "şud ay" },
        { phrase: "You must...", meaning: "...malısın", context: "Zorunluluk", example: "You must wear a seatbelt.", pronunciation: "yu mast" },
        { phrase: "You don't have to", meaning: "Zorunda değilsin", context: "İzin", example: "You don't have to come.", pronunciation: "yu do-unt hev tu" },
        { phrase: "You mustn't", meaning: "...mamalısın", context: "Yasak", example: "You mustn't smoke here.", pronunciation: "yu mas-ınt" },
        { phrase: "Could you please...?", meaning: "Lütfen... misiniz?", context: "Rica", example: "Could you please help me?", pronunciation: "kud yu p-li-iz" },
        { phrase: "Would you mind...?", meaning: "...sakıncası var mı?", context: "Rica", example: "Would you mind opening the window?", pronunciation: "vud yu maynd" },
        { phrase: "I might...", meaning: "...yapabilirim", context: "Olasılık", example: "I might come to the party.", pronunciation: "ay mayt" },
        { phrase: "I had better...", meaning: "...sam iyi olur", context: "Tavsiye", example: "I had better leave now.", pronunciation: "ay hed be-tır" },
        { phrase: "You ought to", meaning: "...malısın", context: "Tavsiye", example: "You ought to study more.", pronunciation: "yu ot tu" },
        { phrase: "Can I...?", meaning: "...bilir miyim?", context: "İzin", example: "Can I use your phone?", pronunciation: "ken ay" },
        { phrase: "May I...?", meaning: "...bilir miyim?", context: "Resmi izin", example: "May I come in?", pronunciation: "mey ay" },
        { phrase: "I'd rather...", meaning: "...mayı tercih ederim", context: "Tercih", example: "I'd rather stay home.", pronunciation: "ayd ra-dır" },
        { phrase: "It could be", meaning: "Olabilir", context: "Olasılık", example: "It could be true.", pronunciation: "it kud bi" },
        { phrase: "It can't be", meaning: "Olamaz", context: "İmkansızlık", example: "It can't be him.", pronunciation: "it kant bi" },
        { phrase: "Need I...?", meaning: "...mem gerekir mi?", context: "Gereklilik", example: "Need I say more?", pronunciation: "ni-id ay" }
    ]
};

export const u159: EnglishPhraseUnit = {
    unitId: 159, title: "Question Tag Phrases", phrases: [
        { phrase: "...isn't it?", meaning: "...değil mi?", context: "Soru eki", example: "It's hot, isn't it?", pronunciation: "iz-ınt it" },
        { phrase: "...don't you?", meaning: "...değil mi?", context: "Soru eki", example: "You like coffee, don't you?", pronunciation: "do-unt yu" },
        { phrase: "...doesn't she?", meaning: "...değil mi?", context: "Soru eki", example: "She works here, doesn't she?", pronunciation: "da-zınt şi" },
        { phrase: "...didn't they?", meaning: "...değil mi?", context: "Soru eki", example: "They came yesterday, didn't they?", pronunciation: "did-ınt dey" },
        { phrase: "...won't you?", meaning: "...olmaz mı?", context: "Soru eki", example: "You'll come, won't you?", pronunciation: "vo-unt yu" },
        { phrase: "...can't he?", meaning: "...değil mi?", context: "Soru eki", example: "He can swim, can't he?", pronunciation: "kant hi" },
        { phrase: "...have you?", meaning: "...mı?", context: "Soru eki", example: "You haven't seen it, have you?", pronunciation: "hev yu" },
        { phrase: "...shall we?", meaning: "...mi?", context: "Teklif", example: "Let's go, shall we?", pronunciation: "şel vi" },
        { phrase: "...will you?", meaning: "...misiniz?", context: "Rica", example: "Close the door, will you?", pronunciation: "vil yu" },
        { phrase: "...aren't they?", meaning: "...değiller mi?", context: "Soru eki", example: "They're coming, aren't they?", pronunciation: "ar-ınt dey" },
        { phrase: "...wasn't it?", meaning: "...değil miydi?", context: "Soru eki", example: "It was great, wasn't it?", pronunciation: "vaz-ınt it" },
        { phrase: "...wouldn't they?", meaning: "...değil mi?", context: "Soru eki", example: "They would help, wouldn't they?", pronunciation: "vud-ınt dey" },
        { phrase: "...should I?", meaning: "...malı mıyım?", context: "Soru eki", example: "I shouldn't go, should I?", pronunciation: "şud ay" },
        { phrase: "...could she?", meaning: "...yapabilir miydi?", context: "Soru eki", example: "She couldn't do it, could she?", pronunciation: "kud şi" },
        { phrase: "Right?", meaning: "Değil mi?", context: "Onay", example: "You understand, right?", pronunciation: "rayt" }
    ]
};

export const u160: EnglishPhraseUnit = {
    unitId: 160, title: "A2 Review Phrases", phrases: [
        { phrase: "In conclusion", meaning: "Sonuç olarak", context: "Özet", example: "In conclusion, I learned a lot.", pronunciation: "in kon-k-lu-jın" },
        { phrase: "All in all", meaning: "Sonuç olarak", context: "Özet", example: "All in all, it was a good experience.", pronunciation: "ol in ol" },
        { phrase: "To sum up", meaning: "Özetlemek gerekirse", context: "Özet", example: "To sum up, English is fun.", pronunciation: "tu sam ap" },
        { phrase: "Overall", meaning: "Genel olarak", context: "Özet", example: "Overall, I'm happy with my progress.", pronunciation: "o-vır-ol" },
        { phrase: "Looking back", meaning: "Geriye bakınca", context: "Değerlendirme", example: "Looking back, I've improved a lot.", pronunciation: "lu-king bek" },
        { phrase: "Step by step", meaning: "Adım adım", context: "Süreç", example: "I learned step by step.", pronunciation: "s-tep bay s-tep" },
        { phrase: "Little by little", meaning: "Yavaş yavaş", context: "Süreç", example: "Little by little, I got better.", pronunciation: "li-tıl bay li-tıl" },
        { phrase: "Day by day", meaning: "Gün geçtikçe", context: "Süreç", example: "Day by day, I understand more.", pronunciation: "dey bay dey" },
        { phrase: "Practice makes perfect", meaning: "Pratik mükemmelleştirir", context: "Atasözü", example: "Remember: practice makes perfect!", pronunciation: "p-rek-tis meyks pör-fekt" },
        { phrase: "Every cloud has a silver lining", meaning: "Her işte bir hayır vardır", context: "Atasözü", example: "Don't worry, every cloud has a silver lining.", pronunciation: "ev-ri k-la-ud hez e sil-vır lay-ning" },
        { phrase: "Better late than never", meaning: "Geç olsun güç olmasın", context: "Atasözü", example: "Better late than never!", pronunciation: "be-tır leyt den ne-vır" },
        { phrase: "Keep it up", meaning: "Böyle devam et", context: "Teşvik", example: "Great work, keep it up!", pronunciation: "ki-ip it ap" },
        { phrase: "Well done", meaning: "Aferin", context: "Övgü", example: "Well done! You did great.", pronunciation: "vel dan" },
        { phrase: "Good luck", meaning: "İyi şanslar", context: "İyi dilek", example: "Good luck with your exam!", pronunciation: "gud lak" },
        { phrase: "You've got this", meaning: "Yapabilirsin", context: "Teşvik", example: "Don't worry, you've got this!", pronunciation: "yuv got dis" }
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
