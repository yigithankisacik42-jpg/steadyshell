/**
 * SteadyShell Phrases Database - English A1
 * 30 Units (ID: 101-130) with common phrases
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

// Create phrase units for all A1 topics
const unit101Phrases: EnglishPhraseUnit = {
    unitId: 101, title: "Greetings Phrases",
    phrases: [
        { phrase: "How are you?", meaning: "Nasılsın?", context: "Hal hatır sorma", example: "Hi! How are you?" },
        { phrase: "I'm fine, thanks.", meaning: "İyiyim, teşekkürler.", context: "İyi olduğunu söyleme", example: "I'm fine, thanks. And you?" },
        { phrase: "Nice to meet you.", meaning: "Tanıştığımıza memnun oldum.", context: "İlk tanışma", example: "Hello, I'm John. Nice to meet you." },
        { phrase: "See you later.", meaning: "Sonra görüşürüz.", context: "Vedalaşma", example: "Bye! See you later." },
        { phrase: "What's your name?", meaning: "Adın ne?", context: "İsim sorma", example: "Hello! What's your name?" }
    ]
};

const unit102Phrases: EnglishPhraseUnit = { unitId: 102, title: "Numbers Phrases", phrases: [{ phrase: "How old are you?", meaning: "Kaç yaşındasın?", context: "Yaş sorma", example: "Excuse me, how old are you?" }, { phrase: "I'm ... years old.", meaning: "... yaşındayım.", context: "Yaş söyleme", example: "I'm twenty-five years old." }, { phrase: "What's your phone number?", meaning: "Telefon numaran ne?", context: "Numara sorma", example: "Can I have your phone number?" }] };

const unit103Phrases: EnglishPhraseUnit = { unitId: 103, title: "Family Phrases", phrases: [{ phrase: "This is my...", meaning: "Bu benim...", context: "Aile tanıtma", example: "This is my mother." }, { phrase: "I have a big family.", meaning: "Kalabalık bir ailem var.", context: "Aile hakkında", example: "I have a big family with five siblings." }, { phrase: "Do you have siblings?", meaning: "Kardeşin var mı?", context: "Kardeş sorma", example: "Do you have any siblings?" }] };

const unit104Phrases: EnglishPhraseUnit = { unitId: 104, title: "Color Phrases", phrases: [{ phrase: "What color is it?", meaning: "Ne renk?", context: "Renk sorma", example: "What color is your car?" }, { phrase: "My favorite color is...", meaning: "En sevdiğim renk...", context: "Tercih belirtme", example: "My favorite color is blue." }] };

const unit105Phrases: EnglishPhraseUnit = { unitId: 105, title: "Food Phrases", phrases: [{ phrase: "I'm hungry.", meaning: "Açım.", context: "Açlık", example: "I'm hungry. Let's eat!" }, { phrase: "I like...", meaning: "...seviyorum.", context: "Yemek tercihi", example: "I like pizza." }, { phrase: "I don't like...", meaning: "...sevmiyorum.", context: "Hoşlanmama", example: "I don't like fish." }, { phrase: "Can I have...?", meaning: "...alabilir miyim?", context: "Sipariş", example: "Can I have a sandwich, please?" }] };

const unit106Phrases: EnglishPhraseUnit = { unitId: 106, title: "Drink Phrases", phrases: [{ phrase: "I'm thirsty.", meaning: "Susadım.", context: "Susuzluk", example: "I'm thirsty. Do you have water?" }, { phrase: "Would you like...?", meaning: "...ister misin?", context: "Teklif", example: "Would you like some coffee?" }, { phrase: "Yes, please.", meaning: "Evet, lütfen.", context: "Kabul", example: "Would you like tea? Yes, please." }, { phrase: "No, thank you.", meaning: "Hayır, teşekkürler.", context: "Red", example: "Coffee? No, thank you." }] };

const unit107Phrases: EnglishPhraseUnit = { unitId: 107, title: "Time Phrases", phrases: [{ phrase: "What day is it?", meaning: "Bugün günlerden ne?", context: "Gün sorma", example: "What day is it today?" }, { phrase: "When is...?", meaning: "...ne zaman?", context: "Zaman sorma", example: "When is the meeting?" }, { phrase: "On Monday.", meaning: "Pazartesi günü.", context: "Gün belirtme", example: "The party is on Saturday." }] };

const unit108Phrases: EnglishPhraseUnit = { unitId: 108, title: "Number Phrases 2", phrases: [{ phrase: "How much is it?", meaning: "Ne kadar?", context: "Fiyat sorma", example: "How much is this book?" }, { phrase: "It costs...", meaning: "...fiyatında.", context: "Fiyat söyleme", example: "It costs fifty dollars." }] };

const unit109Phrases: EnglishPhraseUnit = { unitId: 109, title: "Home Phrases", phrases: [{ phrase: "Where do you live?", meaning: "Nerede yaşıyorsun?", context: "Adres sorma", example: "Where do you live?" }, { phrase: "I live in...", meaning: "...yaşıyorum.", context: "Yaşadığı yer", example: "I live in Istanbul." }, { phrase: "Welcome to my home.", meaning: "Evime hoş geldin.", context: "Misafir karşılama", example: "Come in! Welcome to my home." }] };

const unit110Phrases: EnglishPhraseUnit = { unitId: 110, title: "Furniture Phrases", phrases: [{ phrase: "Where is the...?", meaning: "...nerede?", context: "Yer sorma", example: "Where is the bathroom?" }, { phrase: "It's in the...", meaning: "...içinde/da.", context: "Yer belirtme", example: "It's in the bedroom." }] };

const unit111Phrases: EnglishPhraseUnit = { unitId: 111, title: "Body Phrases", phrases: [{ phrase: "I have a headache.", meaning: "Başım ağrıyor.", context: "Rahatsızlık", example: "I can't work. I have a headache." }, { phrase: "My ... hurts.", meaning: "...ağrıyor.", context: "Ağrı belirtme", example: "My stomach hurts." }, { phrase: "I don't feel well.", meaning: "İyi hissetmiyorum.", context: "Hasta hissetme", example: "I don't feel well. I'm sick." }] };

const unit112Phrases: EnglishPhraseUnit = { unitId: 112, title: "Clothes Phrases", phrases: [{ phrase: "What are you wearing?", meaning: "Ne giyiyorsun?", context: "Kıyafet sorma", example: "What are you wearing to the party?" }, { phrase: "I'm wearing...", meaning: "...giyiyorum.", context: "Kıyafet söyleme", example: "I'm wearing a blue dress." }, { phrase: "Can I try this on?", meaning: "Bunu deneyebilir miyim?", context: "Alışveriş", example: "Can I try this on, please?" }] };

const unit113Phrases: EnglishPhraseUnit = { unitId: 113, title: "Animal Phrases", phrases: [{ phrase: "Do you have a pet?", meaning: "Evcil hayvanın var mı?", context: "Evcil hayvan sorma", example: "Do you have a pet at home?" }, { phrase: "I love animals.", meaning: "Hayvanları severim.", context: "Sevgi ifadesi", example: "I love animals, especially dogs." }] };

const unit114Phrases: EnglishPhraseUnit = { unitId: 114, title: "Job Phrases", phrases: [{ phrase: "What do you do?", meaning: "Ne iş yaparsın?", context: "Meslek sorma", example: "Nice to meet you. What do you do?" }, { phrase: "I'm a...", meaning: "Ben bir...", context: "Meslek söyleme", example: "I'm a teacher." }, { phrase: "I work at...", meaning: "...çalışıyorum.", context: "İş yeri", example: "I work at a hospital." }] };

const unit115Phrases: EnglishPhraseUnit = { unitId: 115, title: "Place Phrases", phrases: [{ phrase: "Where is...?", meaning: "...nerede?", context: "Yer sorma", example: "Excuse me, where is the bank?" }, { phrase: "It's next to...", meaning: "...yanında.", context: "Yön tarifi", example: "It's next to the supermarket." }, { phrase: "Is there a ... near here?", meaning: "Yakınlarda ... var mı?", context: "Yer arama", example: "Is there a pharmacy near here?" }] };

const unit116Phrases: EnglishPhraseUnit = { unitId: 116, title: "Transport Phrases", phrases: [{ phrase: "How do you go to...?", meaning: "...nasıl gidersin?", context: "Ulaşım sorma", example: "How do you go to work?" }, { phrase: "I go by...", meaning: "...ile giderim.", context: "Ulaşım aracı", example: "I go by bus." }, { phrase: "How long does it take?", meaning: "Ne kadar sürer?", context: "Süre sorma", example: "How long does it take to get there?" }] };

const unit117Phrases: EnglishPhraseUnit = { unitId: 117, title: "Routine Phrases", phrases: [{ phrase: "What time do you...?", meaning: "Saat kaçta...?", context: "Rutin sorma", example: "What time do you wake up?" }, { phrase: "I usually...", meaning: "Genellikle...", context: "Alışkanlık", example: "I usually have breakfast at 8." }, { phrase: "Every day...", meaning: "Her gün...", context: "Günlük aktivite", example: "Every day I go jogging." }] };

const unit118Phrases: EnglishPhraseUnit = { unitId: 118, title: "Time Telling Phrases", phrases: [{ phrase: "What time is it?", meaning: "Saat kaç?", context: "Saat sorma", example: "Excuse me, what time is it?" }, { phrase: "It's ... o'clock.", meaning: "Saat ...", context: "Tam saat", example: "It's three o'clock." }, { phrase: "At what time?", meaning: "Saat kaçta?", context: "Zaman sorma", example: "At what time is the meeting?" }] };

const unit119Phrases: EnglishPhraseUnit = { unitId: 119, title: "Weather Phrases", phrases: [{ phrase: "What's the weather like?", meaning: "Hava nasıl?", context: "Hava durumu sorma", example: "What's the weather like today?" }, { phrase: "It's sunny/rainy.", meaning: "Güneşli/Yağmurlu.", context: "Hava durumu", example: "It's sunny and warm today." }, { phrase: "It's going to rain.", meaning: "Yağmur yağacak.", context: "Tahmin", example: "Take an umbrella. It's going to rain." }] };

const unit120Phrases: EnglishPhraseUnit = { unitId: 120, title: "Hobby Phrases", phrases: [{ phrase: "What do you like doing?", meaning: "Ne yapmayı seversin?", context: "Hobi sorma", example: "What do you like doing in your free time?" }, { phrase: "I enjoy...", meaning: "...hoşlanırım.", context: "Hobi", example: "I enjoy reading books." }, { phrase: "My hobby is...", meaning: "Hobim...", context: "Hobi belirtme", example: "My hobby is photography." }] };

const unit121Phrases: EnglishPhraseUnit = { unitId: 121, title: "Feeling Phrases", phrases: [{ phrase: "How are you feeling?", meaning: "Nasıl hissediyorsun?", context: "Hal hatır", example: "How are you feeling today?" }, { phrase: "I feel...", meaning: "...hissediyorum.", context: "Duygu ifade", example: "I feel happy." }, { phrase: "Are you okay?", meaning: "İyi misin?", context: "Endişe", example: "You look sad. Are you okay?" }] };

const unit122Phrases: EnglishPhraseUnit = { unitId: 122, title: "School Phrases", phrases: [{ phrase: "What's your favorite subject?", meaning: "En sevdiğin ders ne?", context: "Ders tercihi", example: "What's your favorite subject at school?" }, { phrase: "I have homework.", meaning: "Ödevim var.", context: "Ödev", example: "I can't play. I have homework." }, { phrase: "Can you repeat that?", meaning: "Tekrar eder misin?", context: "Sınıf", example: "Sorry, can you repeat that?" }] };

const unit123Phrases: EnglishPhraseUnit = { unitId: 123, title: "Holiday Phrases", phrases: [{ phrase: "Happy birthday!", meaning: "Doğum günün kutlu olsun!", context: "Kutlama", example: "Happy birthday! Here's your gift." }, { phrase: "Merry Christmas!", meaning: "Mutlu Noeller!", context: "Tatil", example: "Merry Christmas and Happy New Year!" }, { phrase: "Have a nice holiday!", meaning: "İyi tatiller!", context: "Dilek", example: "Have a nice holiday! See you soon." }] };

const unit124Phrases: EnglishPhraseUnit = { unitId: 124, title: "Country Phrases", phrases: [{ phrase: "Where are you from?", meaning: "Nerelisin?", context: "Köken sorma", example: "Nice to meet you. Where are you from?" }, { phrase: "I'm from...", meaning: "...denim.", context: "Köken söyleme", example: "I'm from Turkey." }, { phrase: "What language do you speak?", meaning: "Hangi dili konuşursun?", context: "Dil sorma", example: "What languages do you speak?" }] };

const unit125Phrases: EnglishPhraseUnit = { unitId: 125, title: "Verb Phrases", phrases: [{ phrase: "I need to...", meaning: "...gerekiyor.", context: "Gereklilik", example: "I need to go now." }, { phrase: "I want to...", meaning: "...istiyorum.", context: "İstek", example: "I want to learn English." }, { phrase: "Let's...", meaning: "Hadi...", context: "Teklif", example: "Let's go to the cinema." }] };

const unit126Phrases: EnglishPhraseUnit = { unitId: 126, title: "Present Simple Phrases", phrases: [{ phrase: "Do you...?", meaning: "...yapar mısın?", context: "Soru", example: "Do you like coffee?" }, { phrase: "I always...", meaning: "Her zaman...", context: "Sıklık", example: "I always wake up early." }, { phrase: "She never...", meaning: "O asla...", context: "Olumsuz sıklık", example: "She never eats meat." }] };

const unit127Phrases: EnglishPhraseUnit = { unitId: 127, title: "Present Continuous Phrases", phrases: [{ phrase: "What are you doing?", meaning: "Ne yapıyorsun?", context: "Şu anki eylem", example: "What are you doing right now?" }, { phrase: "I'm studying.", meaning: "Çalışıyorum.", context: "Eylem", example: "I'm studying for my exam." }, { phrase: "Look! He's...", meaning: "Bak! O...", context: "Dikkat çekme", example: "Look! He's coming!" }] };

const unit128Phrases: EnglishPhraseUnit = { unitId: 128, title: "Adjective Phrases", phrases: [{ phrase: "How is...?", meaning: "...nasıl?", context: "Tanım sorma", example: "How is your new job?" }, { phrase: "It's very...", meaning: "Çok...", context: "Yoğunluk", example: "It's very interesting." }, { phrase: "... is better than...", meaning: "...dan daha iyi.", context: "Karşılaştırma", example: "This is better than that." }] };

const unit129Phrases: EnglishPhraseUnit = { unitId: 129, title: "Preposition Phrases", phrases: [{ phrase: "In the morning.", meaning: "Sabahleyin.", context: "Zaman", example: "I exercise in the morning." }, { phrase: "On the table.", meaning: "Masanın üstünde.", context: "Yer", example: "The keys are on the table." }, { phrase: "At home.", meaning: "Evde.", context: "Yer", example: "I'm at home now." }] };

const unit130Phrases: EnglishPhraseUnit = { unitId: 130, title: "Review Phrases", phrases: [{ phrase: "Can you help me?", meaning: "Bana yardım eder misin?", context: "Yardım isteme", example: "Excuse me, can you help me?" }, { phrase: "I don't understand.", meaning: "Anlamıyorum.", context: "Anlama zorluğu", example: "Sorry, I don't understand." }, { phrase: "Could you speak slowly?", meaning: "Yavaş konuşur musun?", context: "Rica", example: "Could you speak more slowly, please?" }] };

// Export function
export function getEnglishA1PhrasesForUnit(unitId: number): EnglishPhraseUnit {
    const idMapping: { [key: number]: EnglishPhraseUnit } = {
        101: unit101Phrases, 102: unit102Phrases, 103: unit103Phrases, 104: unit104Phrases, 105: unit105Phrases,
        106: unit106Phrases, 107: unit107Phrases, 108: unit108Phrases, 109: unit109Phrases, 110: unit110Phrases,
        111: unit111Phrases, 112: unit112Phrases, 113: unit113Phrases, 114: unit114Phrases, 115: unit115Phrases,
        116: unit116Phrases, 117: unit117Phrases, 118: unit118Phrases, 119: unit119Phrases, 120: unit120Phrases,
        121: unit121Phrases, 122: unit122Phrases, 123: unit123Phrases, 124: unit124Phrases, 125: unit125Phrases,
        126: unit126Phrases, 127: unit127Phrases, 128: unit128Phrases, 129: unit129Phrases, 130: unit130Phrases,
    };

    return idMapping[unitId] || unit101Phrases;
}
