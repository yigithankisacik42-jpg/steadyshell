/**
 * SteadyShell Speaking Exercises - English A1
 * 30 Units (ID: 101-130) with speaking prompts and dialogues
 */

export interface SpeakingDialogue {
    speaker: string;
    text: string;
    translation: string;
}

export interface SpeakingPrompt {
    instruction: string;
    prompt: string;
    sampleAnswer: string;
}

export interface EnglishSpeaking {
    unitId: number;
    title: string;
    dialogues: SpeakingDialogue[];
    prompts: SpeakingPrompt[];
}

// ===== UNIT 101-130 SPEAKING EXERCISES =====

const unit101Speaking: EnglishSpeaking = {
    unitId: 101, title: "Greetings",
    dialogues: [
        { speaker: "A", text: "Hello! How are you?", translation: "Merhaba! Nasılsın?" },
        { speaker: "B", text: "I'm fine, thank you. And you?", translation: "İyiyim, teşekkürler. Sen?" },
        { speaker: "A", text: "I'm great! Nice to meet you.", translation: "Harikayım! Tanıştığımıza memnun oldum." },
        { speaker: "B", text: "Nice to meet you too!", translation: "Ben de memnun oldum!" }
    ],
    prompts: [
        { instruction: "Kendinizi tanıtın", prompt: "Introduce yourself to a new friend.", sampleAnswer: "Hello! My name is... Nice to meet you!" }
    ]
};

const unit102Speaking: EnglishSpeaking = { unitId: 102, title: "Numbers", dialogues: [{ speaker: "A", text: "How old are you?", translation: "Kaç yaşındasın?" }, { speaker: "B", text: "I am twenty years old.", translation: "Yirmi yaşındayım." }], prompts: [{ instruction: "Telefon numaranızı söyleyin", prompt: "Tell me your phone number.", sampleAnswer: "My phone number is 555-123-4567." }] };

const unit103Speaking: EnglishSpeaking = { unitId: 103, title: "Family", dialogues: [{ speaker: "A", text: "Do you have any siblings?", translation: "Kardeşin var mı?" }, { speaker: "B", text: "Yes, I have one brother.", translation: "Evet, bir erkek kardeşim var." }], prompts: [{ instruction: "Ailenizi tanıtın", prompt: "Describe your family.", sampleAnswer: "I have a big family. My mother is a teacher..." }] };

const unit104Speaking: EnglishSpeaking = { unitId: 104, title: "Colors", dialogues: [{ speaker: "A", text: "What's your favorite color?", translation: "En sevdiğin renk ne?" }, { speaker: "B", text: "My favorite color is blue.", translation: "En sevdiğim renk mavi." }], prompts: [{ instruction: "Giydiğiniz kıyafetlerin renklerini söyleyin", prompt: "What color is your shirt?", sampleAnswer: "My shirt is white and my pants are blue." }] };

const unit105Speaking: EnglishSpeaking = { unitId: 105, title: "Food", dialogues: [{ speaker: "A", text: "What do you like to eat?", translation: "Ne yemeyi seversin?" }, { speaker: "B", text: "I like pizza and pasta.", translation: "Pizza ve makarna severim." }], prompts: [{ instruction: "Kahvaltıda ne yersiniz?", prompt: "What do you eat for breakfast?", sampleAnswer: "I eat eggs and bread for breakfast." }] };

const unit106Speaking: EnglishSpeaking = { unitId: 106, title: "Drinks", dialogues: [{ speaker: "A", text: "Would you like some coffee?", translation: "Kahve ister misin?" }, { speaker: "B", text: "Yes, please. With milk.", translation: "Evet, lütfen. Sütlü." }], prompts: [{ instruction: "En sevdiğiniz içeceği söyleyin", prompt: "What's your favorite drink?", sampleAnswer: "My favorite drink is tea." }] };

const unit107Speaking: EnglishSpeaking = { unitId: 107, title: "Days & Months", dialogues: [{ speaker: "A", text: "What day is it today?", translation: "Bugün günlerden ne?" }, { speaker: "B", text: "Today is Monday.", translation: "Bugün Pazartesi." }], prompts: [{ instruction: "Doğum gününüzü söyleyin", prompt: "When is your birthday?", sampleAnswer: "My birthday is on May 15th." }] };

const unit108Speaking: EnglishSpeaking = { unitId: 108, title: "Numbers 21-100", dialogues: [{ speaker: "A", text: "How many students are in your class?", translation: "Sınıfında kaç öğrenci var?" }, { speaker: "B", text: "There are thirty students.", translation: "Otuz öğrenci var." }], prompts: [{ instruction: "Yaşınızı söyleyin", prompt: "How old are your parents?", sampleAnswer: "My father is fifty and my mother is forty-five." }] };

const unit109Speaking: EnglishSpeaking = { unitId: 109, title: "Home", dialogues: [{ speaker: "A", text: "How many rooms are in your house?", translation: "Evinde kaç oda var?" }, { speaker: "B", text: "There are four rooms.", translation: "Dört oda var." }], prompts: [{ instruction: "Evinizi tarif edin", prompt: "Describe your home.", sampleAnswer: "I live in an apartment. It has three bedrooms and a kitchen." }] };

const unit110Speaking: EnglishSpeaking = { unitId: 110, title: "Furniture", dialogues: [{ speaker: "A", text: "Where is the TV?", translation: "Televizyon nerede?" }, { speaker: "B", text: "It's in the living room.", translation: "Oturma odasında." }], prompts: [{ instruction: "Odanızdaki mobilyaları sayın", prompt: "What furniture is in your bedroom?", sampleAnswer: "In my bedroom there is a bed, a desk, and a wardrobe." }] };

const unit111Speaking: EnglishSpeaking = { unitId: 111, title: "Body Parts", dialogues: [{ speaker: "A", text: "What's wrong?", translation: "Sorun ne?" }, { speaker: "B", text: "My head hurts.", translation: "Başım ağrıyor." }], prompts: [{ instruction: "Kendinizi fiziksel olarak tanımlayın", prompt: "Describe yourself.", sampleAnswer: "I have brown eyes and black hair." }] };

const unit112Speaking: EnglishSpeaking = { unitId: 112, title: "Clothes", dialogues: [{ speaker: "A", text: "What are you wearing today?", translation: "Bugün ne giyiyorsun?" }, { speaker: "B", text: "I'm wearing a T-shirt and jeans.", translation: "Tişört ve kot pantolon giyiyorum." }], prompts: [{ instruction: "Bugün giydiğiniz kıyafetleri anlatın", prompt: "Describe what you're wearing.", sampleAnswer: "I'm wearing a blue shirt and black pants." }] };

const unit113Speaking: EnglishSpeaking = { unitId: 113, title: "Animals", dialogues: [{ speaker: "A", text: "Do you have a pet?", translation: "Evcil hayvanın var mı?" }, { speaker: "B", text: "Yes, I have a cat.", translation: "Evet, bir kedim var." }], prompts: [{ instruction: "En sevdiğiniz hayvanı anlatın", prompt: "What's your favorite animal?", sampleAnswer: "My favorite animal is dog. Dogs are loyal." }] };

const unit114Speaking: EnglishSpeaking = { unitId: 114, title: "Jobs", dialogues: [{ speaker: "A", text: "What do you do?", translation: "Ne iş yaparsın?" }, { speaker: "B", text: "I am a student.", translation: "Ben öğrenciyim." }], prompts: [{ instruction: "Ailenizin mesleklerini söyleyin", prompt: "What do your parents do?", sampleAnswer: "My father is an engineer and my mother is a teacher." }] };

const unit115Speaking: EnglishSpeaking = { unitId: 115, title: "Places", dialogues: [{ speaker: "A", text: "Where is the bank?", translation: "Banka nerede?" }, { speaker: "B", text: "It's next to the supermarket.", translation: "Süpermarketin yanında." }], prompts: [{ instruction: "Evden okula nasıl gidersiniz?", prompt: "How do you get to school?", sampleAnswer: "I walk to school. It takes ten minutes." }] };

const unit116Speaking: EnglishSpeaking = { unitId: 116, title: "Transportation", dialogues: [{ speaker: "A", text: "How do you go to work?", translation: "İşe nasıl gidersin?" }, { speaker: "B", text: "I take the bus.", translation: "Otobüse binerim." }], prompts: [{ instruction: "Kullandığınız ulaşım araçlarını anlatın", prompt: "What transportation do you use?", sampleAnswer: "I usually take the subway. Sometimes I ride my bicycle." }] };

const unit117Speaking: EnglishSpeaking = { unitId: 117, title: "Daily Routines", dialogues: [{ speaker: "A", text: "What time do you wake up?", translation: "Saat kaçta uyanırsın?" }, { speaker: "B", text: "I wake up at seven.", translation: "Yedide uyanırım." }], prompts: [{ instruction: "Günlük rutininizi anlatın", prompt: "Describe your daily routine.", sampleAnswer: "I wake up at 7, eat breakfast at 7:30, and go to school at 8." }] };

const unit118Speaking: EnglishSpeaking = { unitId: 118, title: "Telling Time", dialogues: [{ speaker: "A", text: "What time is it?", translation: "Saat kaç?" }, { speaker: "B", text: "It's half past three.", translation: "Üç buçuk." }], prompts: [{ instruction: "Saat sorma ve söyleme", prompt: "Ask and tell the time.", sampleAnswer: "Excuse me, what time is it? It's quarter to five." }] };

const unit119Speaking: EnglishSpeaking = { unitId: 119, title: "Weather", dialogues: [{ speaker: "A", text: "What's the weather like today?", translation: "Bugün hava nasıl?" }, { speaker: "B", text: "It's sunny and warm.", translation: "Güneşli ve sıcak." }], prompts: [{ instruction: "Bugünkü hava durumunu anlatın", prompt: "Describe today's weather.", sampleAnswer: "Today is cloudy. I think it's going to rain." }] };

const unit120Speaking: EnglishSpeaking = { unitId: 120, title: "Hobbies", dialogues: [{ speaker: "A", text: "What do you like doing in your free time?", translation: "Boş zamanında ne yapmayı seversin?" }, { speaker: "B", text: "I like reading books.", translation: "Kitap okumayı severim." }], prompts: [{ instruction: "Hobilerinizi anlatın", prompt: "What are your hobbies?", sampleAnswer: "My hobbies are swimming and playing video games." }] };

const unit121Speaking: EnglishSpeaking = { unitId: 121, title: "Feelings", dialogues: [{ speaker: "A", text: "How do you feel today?", translation: "Bugün nasıl hissediyorsun?" }, { speaker: "B", text: "I feel happy!", translation: "Mutlu hissediyorum!" }], prompts: [{ instruction: "Şu anki ruh halinizi anlatın", prompt: "How are you feeling right now?", sampleAnswer: "I'm feeling a bit tired but happy." }] };

const unit122Speaking: EnglishSpeaking = { unitId: 122, title: "School", dialogues: [{ speaker: "A", text: "What's your favorite subject?", translation: "En sevdiğin ders ne?" }, { speaker: "B", text: "My favorite subject is English.", translation: "En sevdiğim ders İngilizce." }], prompts: [{ instruction: "Okulunuzu anlatın", prompt: "Tell me about your school.", sampleAnswer: "My school is big. I study many subjects like math and science." }] };

const unit123Speaking: EnglishSpeaking = { unitId: 123, title: "Holidays", dialogues: [{ speaker: "A", text: "What did you do on your birthday?", translation: "Doğum gününde ne yaptın?" }, { speaker: "B", text: "I had a party with my friends.", translation: "Arkadaşlarımla parti yaptım." }], prompts: [{ instruction: "En sevdiğiniz tatili anlatın", prompt: "What's your favorite holiday?", sampleAnswer: "My favorite holiday is New Year. I celebrate with my family." }] };

const unit124Speaking: EnglishSpeaking = { unitId: 124, title: "Countries", dialogues: [{ speaker: "A", text: "Where are you from?", translation: "Nerelisin?" }, { speaker: "B", text: "I'm from Turkey.", translation: "Türkiye'denim." }], prompts: [{ instruction: "Ülkenizi tanıtın", prompt: "Tell me about your country.", sampleAnswer: "I'm from Turkey. It's a beautiful country. The capital is Ankara." }] };

const unit125Speaking: EnglishSpeaking = { unitId: 125, title: "Basic Verbs", dialogues: [{ speaker: "A", text: "What do you do every day?", translation: "Her gün ne yaparsın?" }, { speaker: "B", text: "I go to school and study.", translation: "Okula gider ve çalışırım." }], prompts: [{ instruction: "Temel eylemlerinizi anlatın", prompt: "What did you do today?", sampleAnswer: "Today I woke up, had breakfast, and went to work." }] };

const unit126Speaking: EnglishSpeaking = { unitId: 126, title: "Present Simple", dialogues: [{ speaker: "A", text: "What does your sister do?", translation: "Kız kardeşin ne iş yapar?" }, { speaker: "B", text: "She works in a hospital.", translation: "Hastanede çalışır." }], prompts: [{ instruction: "Her gün yaptığınız şeyleri anlatın", prompt: "What do you do every day?", sampleAnswer: "I work from 9 to 5. I usually eat lunch at noon." }] };

const unit127Speaking: EnglishSpeaking = { unitId: 127, title: "Present Continuous", dialogues: [{ speaker: "A", text: "What are you doing?", translation: "Ne yapıyorsun?" }, { speaker: "B", text: "I am studying English.", translation: "İngilizce çalışıyorum." }], prompts: [{ instruction: "Şu an ne yapıyorsunuz?", prompt: "What are you doing right now?", sampleAnswer: "Right now I am sitting at my desk and learning English." }] };

const unit128Speaking: EnglishSpeaking = { unitId: 128, title: "Adjectives", dialogues: [{ speaker: "A", text: "How is your new apartment?", translation: "Yeni dairen nasıl?" }, { speaker: "B", text: "It's big and beautiful.", translation: "Büyük ve güzel." }], prompts: [{ instruction: "Bir şeyi sıfatlarla tarif edin", prompt: "Describe your best friend.", sampleAnswer: "My best friend is tall, funny, and kind." }] };

const unit129Speaking: EnglishSpeaking = { unitId: 129, title: "Prepositions", dialogues: [{ speaker: "A", text: "Where is your book?", translation: "Kitabın nerede?" }, { speaker: "B", text: "It's on the table.", translation: "Masanın üstünde." }], prompts: [{ instruction: "Eşyaların yerini söyleyin", prompt: "Where are your keys?", sampleAnswer: "My keys are in my bag, next to my phone." }] };

const unit130Speaking: EnglishSpeaking = { unitId: 130, title: "A1 Review", dialogues: [{ speaker: "A", text: "Tell me about yourself.", translation: "Kendinden bahset." }, { speaker: "B", text: "I'm from Turkey. I'm a student. I like reading.", translation: "Türkiye'denim. Öğrenciyim. Okumayı severim." }], prompts: [{ instruction: "Kendinizi tanıtın", prompt: "Introduce yourself completely.", sampleAnswer: "Hello! My name is... I'm from Turkey. I'm 25 years old. I'm a student. I like sports and music." }] };

// Export function
export function getEnglishA1SpeakingForUnit(unitId: number): EnglishSpeaking {
    const idMapping: { [key: number]: EnglishSpeaking } = {
        101: unit101Speaking, 102: unit102Speaking, 103: unit103Speaking, 104: unit104Speaking, 105: unit105Speaking,
        106: unit106Speaking, 107: unit107Speaking, 108: unit108Speaking, 109: unit109Speaking, 110: unit110Speaking,
        111: unit111Speaking, 112: unit112Speaking, 113: unit113Speaking, 114: unit114Speaking, 115: unit115Speaking,
        116: unit116Speaking, 117: unit117Speaking, 118: unit118Speaking, 119: unit119Speaking, 120: unit120Speaking,
        121: unit121Speaking, 122: unit122Speaking, 123: unit123Speaking, 124: unit124Speaking, 125: unit125Speaking,
        126: unit126Speaking, 127: unit127Speaking, 128: unit128Speaking, 129: unit129Speaking, 130: unit130Speaking,
    };

    return idMapping[unitId] || unit101Speaking;
}
