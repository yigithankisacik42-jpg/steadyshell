/**
 * SteadyShell Lectures - English A2 (Units 131-160)
 * Curriculum ile uyumlu içerikler
 */

import { LectureSection, EnglishLecture } from './lectures-en-a1';

// Unit 131: Geçmiş Zaman 1 (Past Simple)
const u131: EnglishLecture = { unitId: 131, title: "Past Simple - Regular Verbs", introduction: "Bu ünitede basit geçmiş zaman öğreneceğiz.", sections: [{ title: "Düzenli Fiiller", content: "Düzenli fiillerin geçmiş zaman formu için -ed eki eklenir: work→worked, play→played, visit→visited.", examples: [{ english: "I worked yesterday.", turkish: "Dün çalıştım." }, { english: "She visited her grandmother.", turkish: "Büyükannesini ziyaret etti." }] }], summary: "Düzenli fiillerin geçmiş zaman formunu öğrendiniz." };

// Unit 132: Geçmiş Zaman 2 (Irregular Verbs)
const u132: EnglishLecture = { unitId: 132, title: "Past Simple - Irregular Verbs", introduction: "Bu ünitede düzensiz fiillerin geçmiş zaman formlarını öğreneceğiz.", sections: [{ title: "Düzensiz Fiiller", content: "go→went, see→saw, have→had, do→did, eat→ate, come→came.", examples: [{ english: "I went to school.", turkish: "Okula gittim." }, { english: "We saw a movie.", turkish: "Film izledik." }] }], summary: "Düzensiz fiillerin geçmiş zamanını öğrendiniz." };

// Unit 133: Restoranda
const u133: EnglishLecture = { unitId: 133, title: "At the Restaurant", introduction: "Bu ünitede restoranda sipariş vermeyi öğreneceğiz.", sections: [{ title: "Sipariş Verme", content: "Can I have the menu? I'd like to order... The bill, please.", examples: [{ english: "I'd like the chicken, please.", turkish: "Tavuk istiyorum lütfen." }, { english: "Could I have the bill?", turkish: "Hesabı alabilir miyim?" }] }], summary: "Restoran konuşmalarını öğrendiniz." };

// Unit 134: Alışveriş
const u134: EnglishLecture = { unitId: 134, title: "Shopping", introduction: "Bu ünitede alışveriş yapmayı öğreneceğiz.", sections: [{ title: "Alışveriş İfadeleri", content: "How much is this? Can I try this on? Do you have this in a different size?", examples: [{ english: "How much is this shirt?", turkish: "Bu gömlek ne kadar?" }, { english: "Can I pay by card?", turkish: "Kartla ödeyebilir miyim?" }] }], summary: "Alışveriş konuşmalarını öğrendiniz." };

// Unit 135: Seyahat Planları
const u135: EnglishLecture = { unitId: 135, title: "Travel Plans", introduction: "Bu ünitede seyahat planlarından bahsetmeyi öğreneceğiz.", sections: [{ title: "Seyahat İfadeleri", content: "I'm going to visit... I will travel to... I'm planning to...", examples: [{ english: "I'm going to visit Paris next summer.", turkish: "Gelecek yaz Paris'i ziyaret edeceğim." }, { english: "We're planning a trip to the beach.", turkish: "Plaja bir gezi planlıyoruz." }] }], summary: "Seyahat planlarından bahsetmeyi öğrendiniz." };

// Unit 136: Otel Rezervasyonu
const u136: EnglishLecture = { unitId: 136, title: "Hotel Reservation", introduction: "Bu ünitede otel rezervasyonu yapmayı öğreneceğiz.", sections: [{ title: "Rezervasyon", content: "I'd like to book a room. Do you have any vacancies? What's the rate per night?", examples: [{ english: "I'd like a double room for three nights.", turkish: "Üç gece için çift kişilik oda istiyorum." }, { english: "Is breakfast included?", turkish: "Kahvaltı dahil mi?" }] }], summary: "Otel rezervasyonu yapmayı öğrendiniz." };

// Unit 137: Havalimanında
const u137: EnglishLecture = { unitId: 137, title: "At the Airport", introduction: "Bu ünitede havalimanı işlemlerini öğreneceğiz.", sections: [{ title: "Havalimanı İfadeleri", content: "Check-in, boarding pass, gate, departure, arrival, baggage claim.", examples: [{ english: "Where is the check-in counter?", turkish: "Check-in gişesi nerede?" }, { english: "My flight is delayed.", turkish: "Uçuşum gecikti." }] }], summary: "Havalimanı işlemlerini öğrendiniz." };

// Unit 138: Doktorda
const u138: EnglishLecture = { unitId: 138, title: "At the Doctor", introduction: "Bu ünitede doktorda şikayetlerimizi anlatmayı öğreneceğiz.", sections: [{ title: "Sağlık İfadeleri", content: "I have a headache. I feel sick. My throat hurts. I have a fever.", examples: [{ english: "I've been feeling tired lately.", turkish: "Son zamanlarda yorgun hissediyorum." }, { english: "I have a sore throat.", turkish: "Boğazım ağrıyor." }] }], summary: "Doktorda şikayet bildirmeyi öğrendiniz." };

// Unit 139: Eczanede
const u139: EnglishLecture = { unitId: 139, title: "At the Pharmacy", introduction: "Bu ünitede eczanede ilaç almayı öğreneceğiz.", sections: [{ title: "Eczane İfadeleri", content: "I need something for... Do I need a prescription? How often should I take this?", examples: [{ english: "I need something for a headache.", turkish: "Baş ağrısı için bir şey lazım." }, { english: "Take one tablet twice a day.", turkish: "Günde iki kez bir tablet alın." }] }], summary: "Eczane konuşmalarını öğrendiniz." };

// Unit 140: Meslekler 2
const u140: EnglishLecture = { unitId: 140, title: "Jobs and Professions", introduction: "Bu ünitede farklı meslekleri öğreneceğiz.", sections: [{ title: "Meslekler", content: "Engineer, accountant, lawyer, nurse, chef, pilot, architect.", examples: [{ english: "She works as a lawyer.", turkish: "Avukat olarak çalışıyor." }, { english: "He is a software engineer.", turkish: "O bir yazılım mühendisi." }] }], summary: "Çeşitli meslekleri öğrendiniz." };

// Unit 141: İş Görüşmesi
const u141: EnglishLecture = { unitId: 141, title: "Job Interview", introduction: "Bu ünitede iş görüşmesi için hazırlanmayı öğreneceğiz.", sections: [{ title: "Görüşme İfadeleri", content: "Tell me about yourself. What are your strengths? Why do you want this job?", examples: [{ english: "I have 3 years of experience.", turkish: "3 yıllık deneyimim var." }, { english: "I'm a team player.", turkish: "Takım oyuncusuyum." }] }], summary: "İş görüşmesi ifadelerini öğrendiniz." };

// Unit 142: Telefonda
const u142: EnglishLecture = { unitId: 142, title: "On the Phone", introduction: "Bu ünitede telefon konuşması yapmayı öğreneceğiz.", sections: [{ title: "Telefon İfadeleri", content: "Hello, this is... Can I speak to...? Could you hold, please? I'll call you back.", examples: [{ english: "May I speak to John, please?", turkish: "John ile görüşebilir miyim?" }, { english: "Can I leave a message?", turkish: "Mesaj bırakabilir miyim?" }] }], summary: "Telefon konuşması yapmayı öğrendiniz." };

// Unit 143: E-posta Yazma
const u143: EnglishLecture = { unitId: 143, title: "Writing Emails", introduction: "Bu ünitede resmi e-posta yazmayı öğreneceğiz.", sections: [{ title: "E-posta Yapısı", content: "Dear Mr./Ms., I am writing to... Best regards, Sincerely.", examples: [{ english: "I am writing to inquire about...", turkish: "...hakkında bilgi almak için yazıyorum." }, { english: "Thank you for your prompt reply.", turkish: "Hızlı cevabınız için teşekkürler." }] }], summary: "E-posta yazma kurallarını öğrendiniz." };

// Unit 144: Duygular
const u144: EnglishLecture = { unitId: 144, title: "Feelings and Emotions", introduction: "Bu ünitede duyguları ifade etmeyi öğreneceğiz.", sections: [{ title: "Duygu İfadeleri", content: "Happy, sad, angry, excited, worried, nervous, surprised, disappointed.", examples: [{ english: "I'm so excited about the trip!", turkish: "Gezi için çok heyecanlıyım!" }, { english: "She felt disappointed.", turkish: "Hayal kırıklığına uğradı." }] }], summary: "Duygu ifadelerini öğrendiniz." };

// Unit 145: Karakter Özellikleri
const u145: EnglishLecture = { unitId: 145, title: "Personality Traits", introduction: "Bu ünitede kişilik özelliklerini tanımlamayı öğreneceğiz.", sections: [{ title: "Kişilik Sıfatları", content: "Friendly, shy, outgoing, honest, kind, generous, hardworking, lazy.", examples: [{ english: "She's very friendly and outgoing.", turkish: "Çok arkadaş canlısı ve dışadönük." }, { english: "He's a hardworking person.", turkish: "Çalışkan bir kişi." }] }], summary: "Kişilik özelliklerini tanımlamayı öğrendiniz." };

// Unit 146: Spor ve Fitness
const u146: EnglishLecture = { unitId: 146, title: "Sports and Fitness", introduction: "Bu ünitede spor ve fitness konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Spor İfadeleri", content: "Play football, go swimming, do yoga, work out, go jogging, lift weights.", examples: [{ english: "I go to the gym three times a week.", turkish: "Haftada üç kez spor salonuna gidiyorum." }, { english: "She does yoga every morning.", turkish: "Her sabah yoga yapıyor." }] }], summary: "Spor ve fitness ifadelerini öğrendiniz." };

// Unit 147: Müzik ve Sanat
const u147: EnglishLecture = { unitId: 147, title: "Music and Art", introduction: "Bu ünitede müzik ve sanat konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Müzik ve Sanat", content: "Play the guitar, listen to music, go to a concert, visit a museum, paint.", examples: [{ english: "I play the piano.", turkish: "Piyano çalıyorum." }, { english: "Let's go to the art exhibition.", turkish: "Sanat sergisine gidelim." }] }], summary: "Müzik ve sanat ifadelerini öğrendiniz." };

// Unit 148: Sinema ve Dizi
const u148: EnglishLecture = { unitId: 148, title: "Movies and TV Shows", introduction: "Bu ünitede film ve diziler hakkında konuşmayı öğreneceğiz.", sections: [{ title: "Film/Dizi İfadeleri", content: "Action movie, comedy, drama, documentary, series, episode, plot.", examples: [{ english: "What's your favorite genre?", turkish: "En sevdiğin tür ne?" }, { english: "The plot was really interesting.", turkish: "Olay örgüsü çok ilginçti." }] }], summary: "Film ve dizi ifadelerini öğrendiniz." };

// Unit 149: Teknoloji
const u149: EnglishLecture = { unitId: 149, title: "Technology", introduction: "Bu ünitede teknoloji konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Teknoloji İfadeleri", content: "Download, upload, click, install, update, password, connect to wifi.", examples: [{ english: "I need to update my phone.", turkish: "Telefonumu güncellemem gerekiyor." }, { english: "Can you connect to the wifi?", turkish: "Wifi'ye bağlanabilir misin?" }] }], summary: "Teknoloji ifadelerini öğrendiniz." };

// Unit 150: Sosyal Medya
const u150: EnglishLecture = { unitId: 150, title: "Social Media", introduction: "Bu ünitede sosyal medya konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Sosyal Medya İfadeleri", content: "Post, share, like, follow, comment, profile, feed, story.", examples: [{ english: "I posted a new photo on Instagram.", turkish: "Instagram'a yeni bir fotoğraf paylaştım." }, { english: "How many followers do you have?", turkish: "Kaç takipçin var?" }] }], summary: "Sosyal medya ifadelerini öğrendiniz." };

// Unit 151: Ev ve Taşınma
const u151: EnglishLecture = { unitId: 151, title: "Home and Moving", introduction: "Bu ünitede ev ve taşınma konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Ev İfadeleri", content: "Rent, landlord, tenant, deposit, move in, move out, apartment, furniture.", examples: [{ english: "I'm looking for an apartment to rent.", turkish: "Kiralık daire arıyorum." }, { english: "When are you moving in?", turkish: "Ne zaman taşınıyorsun?" }] }], summary: "Ev ve taşınma ifadelerini öğrendiniz." };

// Unit 152: Çevre ve Doğa
const u152: EnglishLecture = { unitId: 152, title: "Environment and Nature", introduction: "Bu ünitede çevre ve doğa konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Çevre İfadeleri", content: "Pollution, recycle, climate change, endangered species, renewable energy.", examples: [{ english: "We should recycle more.", turkish: "Daha fazla geri dönüşüm yapmalıyız." }, { english: "Climate change is a serious problem.", turkish: "İklim değişikliği ciddi bir sorun." }] }], summary: "Çevre ve doğa ifadelerini öğrendiniz." };

// Unit 153: Haberler
const u153: EnglishLecture = { unitId: 153, title: "News and Media", introduction: "Bu ünitede haberler ve medya konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Haber İfadeleri", content: "Breaking news, headline, article, reporter, journalist, interview.", examples: [{ english: "Did you see the news?", turkish: "Haberleri gördün mü?" }, { english: "The headline says...", turkish: "Başlık şunu söylüyor..." }] }], summary: "Haber ve medya ifadelerini öğrendiniz." };

// Unit 154: Kültür ve Gelenekler
const u154: EnglishLecture = { unitId: 154, title: "Culture and Traditions", introduction: "Bu ünitede kültür ve gelenekler konusunda konuşmayı öğreneceğiz.", sections: [{ title: "Kültür İfadeleri", content: "Tradition, custom, festival, celebration, heritage, ceremony.", examples: [{ english: "It's a tradition in our family.", turkish: "Ailemizde bir gelenek." }, { english: "We celebrate many festivals.", turkish: "Birçok festival kutluyoruz." }] }], summary: "Kültür ve gelenek ifadelerini öğrendiniz." };

// Unit 155: Present Perfect
const u155: EnglishLecture = { unitId: 155, title: "Present Perfect Tense", introduction: "Bu ünitede Present Perfect zamanını öğreneceğiz.", sections: [{ title: "Present Perfect", content: "have/has + past participle. Deneyimler, tamamlanmış eylemler, devam eden durumlar için kullanılır.", examples: [{ english: "I have visited Paris twice.", turkish: "Paris'i iki kez ziyaret ettim." }, { english: "She has lived here for 5 years.", turkish: "5 yıldır burada yaşıyor." }] }], summary: "Present Perfect zamanını öğrendiniz." };

// Unit 156: Comparatives
const u156: EnglishLecture = { unitId: 156, title: "Comparatives", introduction: "Bu ünitede karşılaştırma yapmayı öğreneceğiz.", sections: [{ title: "Karşılaştırma Sıfatları", content: "Kısa sıfatlar: -er (bigger, taller). Uzun sıfatlar: more + adjective (more beautiful, more expensive).", examples: [{ english: "This car is bigger than that one.", turkish: "Bu araba diğerinden büyük." }, { english: "She is more intelligent than her brother.", turkish: "Kardeşinden daha zeki." }] }], summary: "Karşılaştırma sıfatlarını öğrendiniz." };

// Unit 157: Superlatives
const u157: EnglishLecture = { unitId: 157, title: "Superlatives", introduction: "Bu ünitede üstünlük bildirmeyi öğreneceğiz.", sections: [{ title: "Üstünlük Sıfatları", content: "Kısa sıfatlar: the + -est (the biggest). Uzun sıfatlar: the most + adjective (the most beautiful).", examples: [{ english: "It's the tallest building in the city.", turkish: "Şehirdeki en yüksek bina." }, { english: "She's the most talented student.", turkish: "En yetenekli öğrenci." }] }], summary: "Üstünlük sıfatlarını öğrendiniz." };

// Unit 158: Modal Verbs
const u158: EnglishLecture = { unitId: 158, title: "Modal Verbs", introduction: "Bu ünitede modal fiilleri öğreneceğiz.", sections: [{ title: "Modal Fiiller", content: "Can (yetenek), could (kibarlık), should (tavsiye), must (zorunluluk), might (olasılık).", examples: [{ english: "You should see a doctor.", turkish: "Doktora gitmelisin." }, { english: "I must finish this today.", turkish: "Bugün bitirmem lazım." }] }], summary: "Modal fiilleri öğrendiniz." };

// Unit 159: Question Tags
const u159: EnglishLecture = { unitId: 159, title: "Question Tags", introduction: "Bu ünitede ek soru yapısını öğreneceğiz.", sections: [{ title: "Ek Sorular", content: "Olumlu cümle + olumsuz tag. Olumsuz cümle + olumlu tag.", examples: [{ english: "You're coming, aren't you?", turkish: "Geliyorsun, değil mi?" }, { english: "She doesn't like coffee, does she?", turkish: "Kahve sevmiyor, değil mi?" }] }], summary: "Ek soru yapısını öğrendiniz." };

// Unit 160: A2 Tekrar
const u160: EnglishLecture = { unitId: 160, title: "A2 Review", introduction: "Bu ünitede A2 seviyesini tekrar edeceğiz.", sections: [{ title: "Genel Tekrar", content: "Past Simple, Present Perfect, Comparatives, Superlatives, Modal Verbs, Question Tags.", examples: [{ english: "I've learned so much this year.", turkish: "Bu yıl çok şey öğrendim." }, { english: "Keep practicing every day!", turkish: "Her gün pratik yapmaya devam et!" }] }], summary: "A2 seviyesini başarıyla tamamladınız!" };

export function getEnglishA2LectureForUnit(unitId: number): EnglishLecture {
    const m: { [k: number]: EnglishLecture } = {
        131: u131, 132: u132, 133: u133, 134: u134, 135: u135, 136: u136, 137: u137, 138: u138, 139: u139, 140: u140,
        141: u141, 142: u142, 143: u143, 144: u144, 145: u145, 146: u146, 147: u147, 148: u148, 149: u149, 150: u150,
        151: u151, 152: u152, 153: u153, 154: u154, 155: u155, 156: u156, 157: u157, 158: u158, 159: u159, 160: u160
    };
    return m[unitId] || u131;
}
