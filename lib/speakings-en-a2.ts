/**
 * LinguaFlow Speaking - English A2 (Units 131-160)
 * Curriculum ile uyumlu konuşma içerikleri
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

// Unit 131: Past Simple Regular
const u131: EnglishSpeaking = {
    unitId: 131, title: "Past Simple - Regular Verbs", dialogues: [
        { speaker: "A", text: "What did you do yesterday?", translation: "Dün ne yaptın?" },
        { speaker: "B", text: "I watched a movie at home.", translation: "Evde film izledim." },
        { speaker: "A", text: "Did you like it?", translation: "Beğendin mi?" },
        { speaker: "B", text: "Yes, I loved it!", translation: "Evet, çok sevdim!" }
    ], prompts: [
        { instruction: "Dün yaptıklarınızı anlatın.", prompt: "What did you do yesterday?", sampleAnswer: "Yesterday I woke up at 8, had breakfast, and went to work." }
    ]
};

// Unit 132: Past Simple Irregular
const u132: EnglishSpeaking = {
    unitId: 132, title: "Past Simple - Irregular Verbs", dialogues: [
        { speaker: "A", text: "Where did you go last weekend?", translation: "Geçen hafta sonu nereye gittin?" },
        { speaker: "B", text: "I went to the beach.", translation: "Plaja gittim." },
        { speaker: "A", text: "That sounds great! What did you eat?", translation: "Kulağa harika geliyor! Ne yedin?" },
        { speaker: "B", text: "I ate fish and chips.", translation: "Balık ve patates yedim." }
    ], prompts: [
        { instruction: "Geçen hafta sonu hakkında konuşun.", prompt: "What did you do last weekend?", sampleAnswer: "Last weekend I went to a restaurant. I ate pizza and saw my friends." }
    ]
};

// Unit 133: Restaurant
const u133: EnglishSpeaking = {
    unitId: 133, title: "At the Restaurant", dialogues: [
        { speaker: "Waiter", text: "Good evening. Are you ready to order?", translation: "İyi akşamlar. Sipariş vermeye hazır mısınız?" },
        { speaker: "Customer", text: "Yes, I'd like the grilled fish, please.", translation: "Evet, ızgara balık istiyorum lütfen." },
        { speaker: "Waiter", text: "And to drink?", translation: "İçmek için?" },
        { speaker: "Customer", text: "A glass of water, please.", translation: "Bir bardak su lütfen." }
    ], prompts: [
        { instruction: "Bir restoranda sipariş verin.", prompt: "Order your favorite meal at a restaurant.", sampleAnswer: "I'd like the steak with salad, please. And a cola to drink." }
    ]
};

// Unit 134: Shopping
const u134: EnglishSpeaking = {
    unitId: 134, title: "Shopping", dialogues: [
        { speaker: "Customer", text: "Excuse me, how much is this shirt?", translation: "Affedersiniz, bu gömlek ne kadar?" },
        { speaker: "Shop assistant", text: "It's £25.", translation: "25 pound." },
        { speaker: "Customer", text: "Can I try it on?", translation: "Deneyebilir miyim?" },
        { speaker: "Shop assistant", text: "Of course, the changing rooms are over there.", translation: "Tabii, giyinme odaları şurada." }
    ], prompts: [
        { instruction: "Bir mağazada alışveriş yapın.", prompt: "Ask about price and size in a shop.", sampleAnswer: "How much is this jacket? Do you have it in medium?" }
    ]
};

// Units 135-160 (compact format)
const u135: EnglishSpeaking = { unitId: 135, title: "Travel Plans", dialogues: [{ speaker: "A", text: "Where are you going on holiday?", translation: "Tatilde nereye gidiyorsun?" }, { speaker: "B", text: "I'm going to Spain.", translation: "İspanya'ya gidiyorum." }, { speaker: "A", text: "How long will you stay?", translation: "Ne kadar kalacaksın?" }, { speaker: "B", text: "For two weeks.", translation: "İki hafta." }], prompts: [{ instruction: "Tatil planlarınızı anlatın.", prompt: "Talk about your travel plans.", sampleAnswer: "I'm going to visit Italy next summer. I'll stay for one week." }] };

const u136: EnglishSpeaking = { unitId: 136, title: "Hotel Reservation", dialogues: [{ speaker: "Receptionist", text: "Good morning. How can I help you?", translation: "Günaydın. Size nasıl yardımcı olabilirim?" }, { speaker: "Guest", text: "I'd like to book a double room.", translation: "Çift kişilik oda ayırtmak istiyorum." }, { speaker: "Receptionist", text: "For how many nights?", translation: "Kaç gece için?" }, { speaker: "Guest", text: "Three nights, please.", translation: "Üç gece lütfen." }], prompts: [{ instruction: "Otel rezervasyonu yapın.", prompt: "Book a room at a hotel.", sampleAnswer: "I'd like a single room for two nights. Is breakfast included?" }] };

const u137: EnglishSpeaking = { unitId: 137, title: "At the Airport", dialogues: [{ speaker: "Agent", text: "May I see your passport?", translation: "Pasaportunuzu görebilir miyim?" }, { speaker: "Passenger", text: "Here it is.", translation: "Buyurun." }, { speaker: "Agent", text: "Your flight departs from Gate 5.", translation: "Uçuşunuz 5 numaralı kapıdan kalkıyor." }, { speaker: "Passenger", text: "Thank you. Where is Gate 5?", translation: "Teşekkürler. 5 numaralı kapı nerede?" }], prompts: [{ instruction: "Havalimanında sorun.", prompt: "Ask for directions at the airport.", sampleAnswer: "Excuse me, where is Gate 12? Is my flight on time?" }] };

const u138: EnglishSpeaking = { unitId: 138, title: "At the Doctor", dialogues: [{ speaker: "Doctor", text: "What seems to be the problem?", translation: "Sorun ne gibi görünüyor?" }, { speaker: "Patient", text: "I have a headache and sore throat.", translation: "Başım ve boğazım ağrıyor." }, { speaker: "Doctor", text: "How long have you had these symptoms?", translation: "Bu belirtiler ne zamandır var?" }, { speaker: "Patient", text: "For about three days.", translation: "Yaklaşık üç gündür." }], prompts: [{ instruction: "Doktora şikayetinizi anlatın.", prompt: "Describe your symptoms to the doctor.", sampleAnswer: "I have a high fever and I feel very tired." }] };

const u139: EnglishSpeaking = { unitId: 139, title: "At the Pharmacy", dialogues: [{ speaker: "Customer", text: "I need something for a cold.", translation: "Soğuk algınlığı için bir şey lazım." }, { speaker: "Pharmacist", text: "I recommend this medicine.", translation: "Bu ilacı öneriyorum." }, { speaker: "Customer", text: "How should I take it?", translation: "Nasıl kullanmalıyım?" }, { speaker: "Pharmacist", text: "One tablet twice a day after meals.", translation: "Yemeklerden sonra günde iki kez bir tablet." }], prompts: [{ instruction: "Eczanede ilaç isteyin.", prompt: "Ask for medicine at the pharmacy.", sampleAnswer: "I need something for a headache. How often should I take it?" }] };

const u140: EnglishSpeaking = { unitId: 140, title: "Jobs and Professions", dialogues: [{ speaker: "A", text: "What do you do for a living?", translation: "Ne iş yapıyorsun?" }, { speaker: "B", text: "I'm a software engineer.", translation: "Yazılım mühendisiyim." }, { speaker: "A", text: "Where do you work?", translation: "Nerede çalışıyorsun?" }, { speaker: "B", text: "I work at a tech company downtown.", translation: "Şehir merkezindeki bir teknoloji şirketinde çalışıyorum." }], prompts: [{ instruction: "İşinizi tanıtın.", prompt: "Describe your job.", sampleAnswer: "I work as a teacher. I teach English at a high school." }] };

const u141: EnglishSpeaking = { unitId: 141, title: "Job Interview", dialogues: [{ speaker: "Interviewer", text: "Tell me about yourself.", translation: "Kendinizden bahsedin." }, { speaker: "Candidate", text: "I have 5 years of experience in marketing.", translation: "Pazarlamada 5 yıllık deneyimim var." }, { speaker: "Interviewer", text: "Why do you want this job?", translation: "Bu işi neden istiyorsunuz?" }, { speaker: "Candidate", text: "I'm looking for new challenges.", translation: "Yeni zorluklar arıyorum." }], prompts: [{ instruction: "İş görüşmesine hazırlanın.", prompt: "Answer interview questions.", sampleAnswer: "I'm a hardworking person with good communication skills." }] };

const u142: EnglishSpeaking = { unitId: 142, title: "Phone Call", dialogues: [{ speaker: "Caller", text: "Hello, may I speak to John?", translation: "Merhaba, John ile konuşabilir miyim?" }, { speaker: "Receptionist", text: "He's in a meeting. Can I take a message?", translation: "Toplantıda. Mesaj bırakabilir misiniz?" }, { speaker: "Caller", text: "Yes, please tell him Sarah called.", translation: "Evet, lütfen Sarah'nın aradığını söyleyin." }, { speaker: "Receptionist", text: "Sure, I'll pass on the message.", translation: "Tabii, mesajı ileteceğim." }], prompts: [{ instruction: "Telefon görüşmesi yapın.", prompt: "Make a phone call to a company.", sampleAnswer: "Hello, may I speak to the manager? I'd like to ask about my order." }] };

const u143: EnglishSpeaking = { unitId: 143, title: "Email Writing", dialogues: [{ speaker: "A", text: "Did you send the email?", translation: "E-postayı gönderdin mi?" }, { speaker: "B", text: "Yes, I attached the document.", translation: "Evet, belgeyi ekledim." }, { speaker: "A", text: "Did they reply?", translation: "Cevap verdiler mi?" }, { speaker: "B", text: "Not yet.", translation: "Henüz değil." }], prompts: [{ instruction: "E-posta konuşması yapın.", prompt: "Talk about email communication.", sampleAnswer: "I need to write an email to my boss. I'll attach the report." }] };

const u144: EnglishSpeaking = { unitId: 144, title: "Feelings and Emotions", dialogues: [{ speaker: "A", text: "How are you feeling today?", translation: "Bugün nasıl hissediyorsun?" }, { speaker: "B", text: "I'm feeling a bit nervous.", translation: "Biraz gergin hissediyorum." }, { speaker: "A", text: "Why? What's wrong?", translation: "Neden? Ne oldu?" }, { speaker: "B", text: "I have a job interview tomorrow.", translation: "Yarın iş görüşmem var." }], prompts: [{ instruction: "Duygularınızı ifade edin.", prompt: "Talk about how you feel.", sampleAnswer: "I'm feeling excited because I'm going on holiday tomorrow." }] };

const u145: EnglishSpeaking = { unitId: 145, title: "Personality Traits", dialogues: [{ speaker: "A", text: "What is your new colleague like?", translation: "Yeni meslektaşın nasıl biri?" }, { speaker: "B", text: "She's very friendly and hardworking.", translation: "Çok arkadaş canlısı ve çalışkan." }, { speaker: "A", text: "That's great!", translation: "Harika!" }], prompts: [{ instruction: "Birini tanımlayın.", prompt: "Describe a person's personality.", sampleAnswer: "My best friend is very kind and generous. She always helps others." }] };

const u146: EnglishSpeaking = { unitId: 146, title: "Sports and Fitness", dialogues: [{ speaker: "A", text: "Do you play any sports?", translation: "Spor yapıyor musun?" }, { speaker: "B", text: "Yes, I play tennis twice a week.", translation: "Evet, haftada iki kez tenis oynarım." }, { speaker: "A", text: "Do you go to the gym?", translation: "Spor salonuna gidiyor musun?" }, { speaker: "B", text: "Sometimes. I prefer running outdoors.", translation: "Bazen. Dışarıda koşmayı tercih ederim." }], prompts: [{ instruction: "Spor alışkanlıklarınızı anlatın.", prompt: "Talk about your sports activities.", sampleAnswer: "I go swimming every weekend. I also do yoga at home." }] };

const u147: EnglishSpeaking = { unitId: 147, title: "Music and Art", dialogues: [{ speaker: "A", text: "Do you play any instrument?", translation: "Enstrüman çalar mısın?" }, { speaker: "B", text: "Yes, I play the guitar.", translation: "Evet, gitar çalarım." }, { speaker: "A", text: "How long have you been playing?", translation: "Ne zamandır çalıyorsun?" }, { speaker: "B", text: "For about 3 years.", translation: "Yaklaşık 3 yıldır." }], prompts: [{ instruction: "Müzik tercihlerinizi anlatın.", prompt: "Talk about your music preferences.", sampleAnswer: "I love listening to rock music. I go to concerts sometimes." }] };

const u148: EnglishSpeaking = { unitId: 148, title: "Movies and TV Shows", dialogues: [{ speaker: "A", text: "Have you seen any good movies lately?", translation: "Son zamanlarda güzel film izledin mi?" }, { speaker: "B", text: "Yes, I watched a great action movie.", translation: "Evet, harika bir aksiyon filmi izledim." }, { speaker: "A", text: "What was it about?", translation: "Ne hakkındaydı?" }, { speaker: "B", text: "It was about superheroes saving the world.", translation: "Dünyayı kurtaran süper kahramanlar hakkındaydı." }], prompts: [{ instruction: "Favori filminizi anlatın.", prompt: "Talk about your favorite movie.", sampleAnswer: "My favorite movie is Inception. It's a sci-fi movie with a great plot." }] };

const u149: EnglishSpeaking = { unitId: 149, title: "Technology", dialogues: [{ speaker: "A", text: "Did you get the new phone?", translation: "Yeni telefonu aldın mı?" }, { speaker: "B", text: "Yes, I love the camera.", translation: "Evet, kamerasını seviyorum." }, { speaker: "A", text: "Is it easy to use?", translation: "Kullanması kolay mı?" }, { speaker: "B", text: "Very easy. I downloaded many apps already.", translation: "Çok kolay. Zaten birçok uygulama indirdim." }], prompts: [{ instruction: "Teknoloji hakkında konuşun.", prompt: "Talk about technology you use.", sampleAnswer: "I use my laptop every day for work. I also have a tablet for reading." }] };

const u150: EnglishSpeaking = { unitId: 150, title: "Social Media", dialogues: [{ speaker: "A", text: "Are you on Instagram?", translation: "Instagram'da var mısın?" }, { speaker: "B", text: "Yes, follow me. My username is...", translation: "Evet, takip et. Kullanıcı adım..." }, { speaker: "A", text: "How often do you post?", translation: "Ne sıklıkla paylaşım yapıyorsun?" }, { speaker: "B", text: "About once a week.", translation: "Haftada bir kez civarı." }], prompts: [{ instruction: "Sosyal medya kullanımınızı anlatın.", prompt: "Talk about your social media use.", sampleAnswer: "I use Instagram to share photos. I follow many travel accounts." }] };

const u151: EnglishSpeaking = { unitId: 151, title: "Home and Moving", dialogues: [{ speaker: "A", text: "Are you moving to a new apartment?", translation: "Yeni bir daireye mi taşınıyorsun?" }, { speaker: "B", text: "Yes, next month.", translation: "Evet, gelecek ay." }, { speaker: "A", text: "How many bedrooms does it have?", translation: "Kaç yatak odası var?" }, { speaker: "B", text: "Two bedrooms and a big kitchen.", translation: "İki yatak odası ve büyük bir mutfak." }], prompts: [{ instruction: "Evinizi tanımlayın.", prompt: "Describe your home.", sampleAnswer: "I live in a small apartment. It has one bedroom and a nice balcony." }] };

const u152: EnglishSpeaking = { unitId: 152, title: "Environment and Nature", dialogues: [{ speaker: "A", text: "Do you recycle?", translation: "Geri dönüşüm yapıyor musun?" }, { speaker: "B", text: "Yes, I try to recycle plastic and paper.", translation: "Evet, plastik ve kağıdı geri dönüştürmeye çalışıyorum." }, { speaker: "A", text: "What else can we do?", translation: "Başka ne yapabiliriz?" }, { speaker: "B", text: "We can use less electricity.", translation: "Daha az elektrik kullanabiliriz." }], prompts: [{ instruction: "Çevre koruma hakkında konuşun.", prompt: "Talk about protecting the environment.", sampleAnswer: "I think we should recycle more and use less plastic." }] };

const u153: EnglishSpeaking = { unitId: 153, title: "News and Media", dialogues: [{ speaker: "A", text: "Did you see the news today?", translation: "Bugün haberleri gördün mü?" }, { speaker: "B", text: "Yes, there was a story about climate change.", translation: "Evet, iklim değişikliği hakkında bir haber vardı." }, { speaker: "A", text: "It's a serious problem.", translation: "Ciddi bir sorun." }, { speaker: "B", text: "I agree. We need to do something.", translation: "Katılıyorum. Bir şeyler yapmalıyız." }], prompts: [{ instruction: "Haberler hakkında konuşun.", prompt: "Discuss a news story.", sampleAnswer: "I read an article about new technology. It was very interesting." }] };

const u154: EnglishSpeaking = { unitId: 154, title: "Culture and Traditions", dialogues: [{ speaker: "A", text: "What traditions do you have in your country?", translation: "Ülkenizde hangi gelenekler var?" }, { speaker: "B", text: "We celebrate Bayram twice a year.", translation: "Yılda iki kez Bayram kutlarız." }, { speaker: "A", text: "What do you do during Bayram?", translation: "Bayram'da ne yaparsınız?" }, { speaker: "B", text: "We visit family and eat special food.", translation: "Aileyi ziyaret eder ve özel yemekler yeriz." }], prompts: [{ instruction: "Geleneklerinizi anlatın.", prompt: "Talk about traditions in your country.", sampleAnswer: "We celebrate New Year with our family. We eat together and give gifts." }] };

const u155: EnglishSpeaking = { unitId: 155, title: "Present Perfect", dialogues: [{ speaker: "A", text: "Have you ever been to Paris?", translation: "Hiç Paris'e gittin mi?" }, { speaker: "B", text: "Yes, I've been there twice.", translation: "Evet, iki kez gittim." }, { speaker: "A", text: "Have you tried French food?", translation: "Fransız yemeği denedin mi?" }, { speaker: "B", text: "Yes, I've tried croissants. They're delicious!", translation: "Evet, kruvasan denedim. Lezzetliler!" }], prompts: [{ instruction: "Deneyimlerinizi anlatın.", prompt: "Talk about your experiences.", sampleAnswer: "I've visited many countries. I've been to Spain, Italy, and France." }] };

const u156: EnglishSpeaking = { unitId: 156, title: "Comparatives", dialogues: [{ speaker: "A", text: "Which city is bigger, London or Paris?", translation: "Hangi şehir daha büyük, Londra mı Paris mi?" }, { speaker: "B", text: "London is bigger.", translation: "Londra daha büyük." }, { speaker: "A", text: "Which one is more beautiful?", translation: "Hangisi daha güzel?" }, { speaker: "B", text: "I think Paris is more romantic.", translation: "Bence Paris daha romantik." }], prompts: [{ instruction: "Karşılaştırma yapın.", prompt: "Compare two things.", sampleAnswer: "My new phone is faster than my old one. The camera is better too." }] };

const u157: EnglishSpeaking = { unitId: 157, title: "Superlatives", dialogues: [{ speaker: "A", text: "What's the best restaurant in town?", translation: "Şehirdeki en iyi restoran hangisi?" }, { speaker: "B", text: "The Italian place on Main Street.", translation: "Ana Cadde'deki İtalyan mekanı." }, { speaker: "A", text: "Is it the most expensive?", translation: "En pahalısı mı?" }, { speaker: "B", text: "No, it's actually quite affordable.", translation: "Hayır, aslında oldukça uygun fiyatlı." }], prompts: [{ instruction: "En iyi/en kötü hakkında konuşun.", prompt: "Talk about the best and worst things.", sampleAnswer: "The best movie I've seen is Inception. It has the most interesting plot." }] };

const u158: EnglishSpeaking = { unitId: 158, title: "Modal Verbs", dialogues: [{ speaker: "A", text: "You should see a doctor.", translation: "Doktora gitmelisin." }, { speaker: "B", text: "I know, but I must finish this work first.", translation: "Biliyorum ama önce bu işi bitirmem lazım." }, { speaker: "A", text: "Your health is more important.", translation: "Sağlığın daha önemli." }, { speaker: "B", text: "You're right. I'll go tomorrow.", translation: "Haklısın. Yarın gideceğim." }], prompts: [{ instruction: "Tavsiye verin.", prompt: "Give advice using modals.", sampleAnswer: "You should exercise more. You must eat healthy food." }] };

const u159: EnglishSpeaking = { unitId: 159, title: "Question Tags", dialogues: [{ speaker: "A", text: "It's a beautiful day, isn't it?", translation: "Güzel bir gün, değil mi?" }, { speaker: "B", text: "Yes, it is. You like sunny weather, don't you?", translation: "Evet, öyle. Güneşli havayı seversin, değil mi?" }, { speaker: "A", text: "I love it! We should go for a walk.", translation: "Bayılıyorum! Yürüyüşe çıkmalıyız." }], prompts: [{ instruction: "Ek soru kullanarak konuşun.", prompt: "Use question tags in conversation.", sampleAnswer: "This coffee is delicious, isn't it? You work here, don't you?" }] };

const u160: EnglishSpeaking = { unitId: 160, title: "A2 Review", dialogues: [{ speaker: "A", text: "You've learned a lot this year, haven't you?", translation: "Bu yıl çok şey öğrendin, değil mi?" }, { speaker: "B", text: "Yes, I've improved a lot.", translation: "Evet, çok geliştim." }, { speaker: "A", text: "What was the most difficult part?", translation: "En zor kısım neydi?" }, { speaker: "B", text: "Grammar was harder than vocabulary.", translation: "Gramer kelimeden daha zordu." }], prompts: [{ instruction: "İngilizce öğrenme deneyiminizi anlatın.", prompt: "Talk about your English learning journey.", sampleAnswer: "I've studied English for two years. I can speak better than before." }] };

// Export function
export function getEnglishA2SpeakingForUnit(unitId: number): EnglishSpeaking {
    const m: { [k: number]: EnglishSpeaking } = {
        131: u131, 132: u132, 133: u133, 134: u134, 135: u135, 136: u136, 137: u137, 138: u138, 139: u139, 140: u140,
        141: u141, 142: u142, 143: u143, 144: u144, 145: u145, 146: u146, 147: u147, 148: u148, 149: u149, 150: u150,
        151: u151, 152: u152, 153: u153, 154: u154, 155: u155, 156: u156, 157: u157, 158: u158, 159: u159, 160: u160
    };
    return m[unitId] || u131;
}
