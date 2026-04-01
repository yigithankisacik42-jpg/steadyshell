/**
 * SteadyShell Speaking - English B1 (Units 161-190)
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

// Unit 161: Future (Will/Going to)
const u161: EnglishSpeaking = {
    unitId: 161, title: "Future Plans", dialogues: [
        { speaker: "A", text: "What are you going to do this summer?", translation: "Bu yaz ne yapacaksın?" },
        { speaker: "B", text: "I'm going to travel to Europe. I've already booked my flights.", translation: "Avrupa'ya seyahat edeceğim. Uçuşlarımı çoktan rezerve ettim." },
        { speaker: "A", text: "That sounds amazing! Will you visit Italy?", translation: "Kulağa harika geliyor! İtalya'yı ziyaret edecek misin?" },
        { speaker: "B", text: "I think I will stay in Rome for three days.", translation: "Sanırım Roma'da üç gün kalacağım." }
    ], prompts: [
        { instruction: "Gelecek planlarınız hakkında konuşun.", prompt: "Tell me about your plans for next weekend.", sampleAnswer: "Next weekend, I'm going to visit my parents. We will probably have dinner together." }
    ]
};

// Unit 162: 1st Conditional
const u162: EnglishSpeaking = {
    unitId: 162, title: "Possibilities", dialogues: [
        { speaker: "A", text: "If it rains tomorrow, will the match be cancelled?", translation: "Yarın yağmur yağarsa maç iptal edilir mi?" },
        { speaker: "B", text: "Yes, if the field is too wet, they will stop the game.", translation: "Evet, saha çok ıslak olursa oyunu durdururlar." },
        { speaker: "A", text: "What will you do if you have free time?", translation: "Boş vaktin olursa ne yapacaksın?" },
        { speaker: "B", text: "If I finish early, I'll go to the gym.", translation: "Erken bitirirsem spor salonuna gideceğim." }
    ], prompts: [
        { instruction: "Olasılıklar hakkında konuşun.", prompt: "What will you do if you win the lottery?", sampleAnswer: "If I win the lottery, I will travel around the world and buy a new house." }
    ]
};

// Unit 163: 2nd Conditional
const u163: EnglishSpeaking = {
    unitId: 163, title: "Imaginary Situations", dialogues: [
        { speaker: "A", text: "If you were the president, what would you change?", translation: "Başkan olsaydın neyi değiştirirdin?" },
        { speaker: "B", text: "If I were the president, I would make education free for everyone.", translation: "Başkan olsaydım, eğitimi herkes için ücretsiz yapardım." },
        { speaker: "A", text: "Would you live in another country if you could?", translation: "Eline geçse başka bir ülkede yaşar mıydın?" },
        { speaker: "B", text: "Yes, I'd live in Japan if I spoke Japanese fluently.", translation: "Evet, akıcı Japonca konuşsam Japonya'da yaşardım." }
    ], prompts: [
        { instruction: "Hayali durumlar hakkında konuşun.", prompt: "If you could meet any famous person, who would it be?", sampleAnswer: "If I could meet a famous person, I would choose Elon Musk because I admire his vision." }
    ]
};

// Unit 164: Passive Voice
const u164: EnglishSpeaking = {
    unitId: 164, title: "The Passive Voice", dialogues: [
        { speaker: "A", text: "When was this bridge built?", translation: "Bu köprü ne zaman inşa edildi?" },
        { speaker: "B", text: "It was built in 1920 by a famous architect.", translation: "1920 yılında ünlü bir mimar tarafından inşa dildi." },
        { speaker: "A", text: "Where are these cars manufactured?", translation: "Bu arabalar nerede üretiliyor?" },
        { speaker: "B", text: "Most of them are made in Germany.", translation: "Çoğu Almanya'da yapılıyor." }
    ], prompts: [
        { instruction: "Edilgen yapıyı kullanarak nesneleri tanımlayın.", prompt: "Tell me about a famous landmark in your country.", sampleAnswer: "The Galata Tower was built by the Genoese in the 14th century. It is visited by many tourists every year." }
    ]
};

// Unit 165: Reported Speech
const u165: EnglishSpeaking = {
    unitId: 165, title: "Reporting What People Said", dialogues: [
        { speaker: "A", text: "What did the manager say in the meeting?", translation: "Müdür toplantıda ne dedi?" },
        { speaker: "B", text: "He said that the project was going well.", translation: "Projenin iyi gittiğini söyledi." },
        { speaker: "A", text: "Did he mention the deadline?", translation: "Teslim tarihinden bahsetti mi?" },
        { speaker: "B", text: "Yes, he told us that we had to finish it by Friday.", translation: "Evet, Cuma gününe kadar bitirmemiz gerektiğini söyledi." }
    ], prompts: [
        { instruction: "Birinin söylediklerini aktarın.", prompt: "What did your best friend tell you recently?", sampleAnswer: "My friend told me that he was planning to move to another city next month." }
    ]
};

// Unit 166: Phrasal Verbs 1
const u166: EnglishSpeaking = {
    unitId: 166, title: "Phrasal Verbs - Part 1", dialogues: [
        { speaker: "A", text: "What time do you usually wake up?", translation: "Genelde saat kaçta uyanırsın?" },
        { speaker: "B", text: "I usually wake up at 7, but I don't get up until 7:30.", translation: "Genelde 7'de uyanırım ama 7:30'a kadar yataktan kalkmam." },
        { speaker: "A", text: "Do you get along with your colleagues?", translation: "Meslektaşlarınla iyi geçiniyor musun?" },
        { speaker: "B", text: "Yes, we all get along very well.", translation: "Evet, hepimiz çok iyi geçiniyoruz." }
    ], prompts: [
        { instruction: "Deyimsel fiiller kullanarak rutininizi anlatın.", prompt: "Talk about your morning routine using phrasal verbs.", sampleAnswer: "I wake up at 6 AM, put on my clothes, and head out for work." }
    ]
};

// Unit 167: Phrasal Verbs 2
const u167: EnglishSpeaking = {
    unitId: 167, title: "Phrasal Verbs - Part 2", dialogues: [
        { speaker: "A", text: "I can't figure out how to use this app.", translation: "Bu uygulamayı nasıl kullanacağımı çözemiyorum." },
        { speaker: "B", text: "Don't give up! I'll show you how it works.", translation: "Vazgeçme! Nasıl çalıştığını sana göstereceğim." },
        { speaker: "A", text: "Can you look after my cat while I'm away?", translation: "Ben yokken kedime bakabilir misin?" },
        { speaker: "B", text: "Of course, I'll take care of it.", translation: "Tabii ki, onunla ilgilenirim." }
    ], prompts: [
        { instruction: "Deyimsel fiiller kullanarak bir problemi anlatın.", prompt: "Talk about a time you had to deal with a difficult situation.", sampleAnswer: "I had to look for a new job last year. I didn't give up and finally found a great position." }
    ]
};

// Unit 168: News & Media
const u168: EnglishSpeaking = {
    unitId: 168, title: "News and Media", dialogues: [
        { speaker: "A", text: "Did you hear the latest news about the space mission?", translation: "Uzay görevi hakkındaki son haberleri duydun mu?" },
        { speaker: "B", text: "Yes, it was all over the headlines this morning.", translation: "Evet, bu sabah tüm manşetlerdeydi." },
        { speaker: "A", text: "Do you trust the news on social media?", translation: "Sosyal medyadaki haberlere güveniyor musun?" },
        { speaker: "B", text: "Not really, I prefer watching reliable news channels.", translation: "Pek değil, güvenilir haber kanallarını izlemeyi tercih ederim." }
    ], prompts: [
        { instruction: "Haberler hakkında konuşun.", prompt: "How do you stay updated with current events?", sampleAnswer: "I usually read news apps on my phone and listen to podcasts during my commute." }
    ]
};

// Unit 169: Environment
const u169: EnglishSpeaking = {
    unitId: 169, title: "The Environment", dialogues: [
        { speaker: "A", text: "Global warming is becoming a huge threat.", translation: "Küresel ısınma devasa bir tehdit haline geliyor." },
        { speaker: "B", text: "I agree. We should reduce our carbon footprint.", translation: "Katılıyorum. Karbon ayak izimizi azaltmalıyız." },
        { speaker: "A", text: "Do you think renewable energy is the solution?", translation: "Sence çözüm yenilenebilir enerji mi?" },
        { speaker: "B", text: "It's a big part of it, but we also need to change our habits.", translation: "Büyük bir parçası ama alışkanlıklarımızı da değiştirmemiz gerekiyor." }
    ], prompts: [
        { instruction: "Çevre sorunları hakkında konuşun.", prompt: "What can individuals do to protect the environment?", sampleAnswer: "We can use less plastic, save water, and plant more trees in our local area." }
    ]
};

// Unit 170: Sustainability
const u170: EnglishSpeaking = {
    unitId: 170, title: "Sustainability", dialogues: [
        { speaker: "A", text: "Does your company have a sustainability policy?", translation: "Şirketinizin bir sürdürülebilirlik politikası var mı?" },
        { speaker: "B", text: "Yes, we are trying to go paperless by next year.", translation: "Evet, gelecek yıla kadar kağıtsız sisteme geçmeye çalışıyoruz." },
        { speaker: "A", text: "That's a great initiative. How do the employees feel?", translation: "Harika bir girişim. Çalışanlar nasıl hissediyor?" },
        { speaker: "B", text: "Most people are very supportive of the change.", translation: "Çoğu insan değişikliği çok destekliyor." }
    ], prompts: [
        { instruction: "Sürdürülebilirlik hakkında konuşun.", prompt: "How do you practice sustainability in your daily life?", sampleAnswer: "I always carry a reusable water bottle and I try to buy local products to support my community." }
    ]
};

// Unit 171: Culture & Traditions
const u171: EnglishSpeaking = {
    unitId: 171, title: "Culture and Traditions", dialogues: [
        { speaker: "A", text: "What is the most important festival in your country?", translation: "Ülkenizdeki en önemli festival hangisi?" },
        { speaker: "B", text: "We have several, but the New Year celebrations are very big.", translation: "Birkaç tane var ama Yeni Yıl kutlamaları çok büyüktür." },
        { speaker: "A", text: "How do you celebrate it?", translation: "Onu nasıl kutlarsınız?" },
        { speaker: "B", text: "We usually have a big dinner with the whole family.", translation: "Genelde tüm aileyle büyük bir akşam yemeği yeriz." }
    ], prompts: [
        { instruction: "Gelenekleriniz hakkında konuşun.", prompt: "Describe a traditional dish from your culture.", sampleAnswer: "One of our traditional dishes is Baklava. It is made with thin layers of pastry, nuts, and syrup." }
    ]
};

// Unit 172: Economy Basics
const u172: EnglishSpeaking = {
    unitId: 172, title: "Economy Basics", dialogues: [
        { speaker: "A", text: "The inflation rate has increased again this month.", translation: "Enflasyon oranı bu ay yine arttı." },
        { speaker: "B", text: "Yes, the cost of living is becoming quite high.", translation: "Evet, yaşam maliyeti oldukça yükseliyor." },
        { speaker: "A", text: "How do you manage your budget?", translation: "Bütçeni nasıl yönetiyorsun?" },
        { speaker: "B", text: "I use an app to track all my expenses.", translation: "Tüm masraflarımı takip etmek için bir uygulama kullanıyorum." }
    ], prompts: [
        { instruction: "Ekonomi ve bütçe hakkında konuşun.", prompt: "What are your tips for saving money?", sampleAnswer: "I always cook at home instead of eating out, and I compare prices before buying expensive items." }
    ]
};

// Unit 173: Discussion Skills
const u173: EnglishSpeaking = {
    unitId: 173, title: "Discussion Skills", dialogues: [
        { speaker: "A", text: "In my opinion, children shouldn't use smartphones.", translation: "Bence çocuklar akıllı telefon kullanmamalı." },
        { speaker: "B", text: "I see your point, but they can be useful for learning.", translation: "Haklısınız ama öğrenme için yararlı olabilirler." },
        { speaker: "A", text: "I agree, but there should be a time limit.", translation: "Katılıyorum ama bir zaman sınırı olmalı." },
        { speaker: "B", text: "Exactly. Balance is the most important thing.", translation: "Kesinlikle. Denge en önemli şeydir." }
    ], prompts: [
        { instruction: "Fikirlerinizi tartışın.", prompt: "What is your opinion on working from home?", sampleAnswer: "I think working from home is great because it saves time, but I miss social interaction with my team." }
    ]
};

// Unit 174: Presentations
const u174: EnglishSpeaking = {
    unitId: 174, title: "Giving Presentations", dialogues: [
        { speaker: "Presenter", text: "Today, I'd like to talk about our new marketing strategy.", translation: "Bugün yeni pazarlama stratejimiz hakkında konuşmak istiyorum." },
        { speaker: "Audience", text: "Will you show us the sales data?", translation: "Bize satış verilerini gösterecek misiniz?" },
        { speaker: "Presenter", text: "Yes, please look at the chart on the next slide.", translation: "Evet, lütfen bir sonraki slayttaki grafiğe bakın." },
        { speaker: "Audience", text: "That's very interesting. Can I ask a question?", translation: "Bu çok ilginç. Bir soru sorabilir miyim?" }
    ], prompts: [
        { instruction: "Bir sunuma başlayın.", prompt: "Introduce a topic for a presentation.", sampleAnswer: "Good morning everyone. Today I'm going to present the results of our customer survey." }
    ]
};

// Unit 175: Literature 1
const u175: EnglishSpeaking = {
    unitId: 175, title: "Literature and Stories", dialogues: [
        { speaker: "A", text: "Have you read the latest novel by this author?", translation: "Bu yazarın son romanını okudun mu?" },
        { speaker: "B", text: "Yes, the plot was very engaging.", translation: "Evet, kurgusu çok sürükleyiciydi." },
        { speaker: "A", text: "Who was your favorite character?", translation: "En sevdiğin karakter kimdi?" },
        { speaker: "B", text: "I liked the protagonist's determination.", translation: "Baş kahramanın azmini sevdim." }
    ], prompts: [
        { instruction: "Okuduğunuz bir kitap hakkında konuşun.", prompt: "Tell me about a book that changed your perspective.", sampleAnswer: "I read '1984' and it made me think a lot about privacy and government control." }
    ]
};

// Unit 176: Academic Writing
const u176: EnglishSpeaking = {
    unitId: 176, title: "Academic Writing", dialogues: [
        { speaker: "Student", text: "I'm struggling with the structure of my essay.", translation: "Makalemin yapısıyla ilgili zorlanıyorum." },
        { speaker: "Tutor", text: "You should start with a clear thesis statement.", translation: "Net bir tez cümlesiyle başlamalısın." },
        { speaker: "Student", text: "How should I reference my sources?", translation: "Kaynaklarımı nasıl belirtmeliyim?" },
        { speaker: "Tutor", text: "Use the APA style consistently throughout the paper.", translation: "Kağıdın her yerinde tutarlı bir şekilde APA stilini kullan." }
    ], prompts: [
        { instruction: "Akademik bir konu hakkında konuşun.", prompt: "Explain the importance of critical thinking in education.", sampleAnswer: "Critical thinking is essential because it allows students to analyze information instead of just memorizing it." }
    ]
};

// Unit 177: Science & Tech
const u177: EnglishSpeaking = {
    unitId: 177, title: "Science and Technology", dialogues: [
        { speaker: "A", text: "Artificial Intelligence is evolving so fast.", translation: "Yapay zeka çok hızlı gelişiyor." },
        { speaker: "B", text: "It's true. It will soon transform every industry.", translation: "Doğru. Yakında her sektörü dönüştürecek." },
        { speaker: "A", text: "Are you worried about job losses?", translation: "İş kayıpları konusunda endişeli misin?" },
        { speaker: "B", text: "A little, but it also creates new opportunities.", translation: "Biraz ama aynı zamanda yeni fırsatlar da yaratıyor." }
    ], prompts: [
        { instruction: "Teknolojik bir yenilik hakkında konuşun.", prompt: "What is the most useful gadget you own?", sampleAnswer: "My smartphone is definitely the most useful gadget because I use it for navigation, banking, and communication." }
    ]
};

// Unit 178: Health & Nutrition
const u178: EnglishSpeaking = {
    unitId: 178, title: "Health and Nutrition", dialogues: [
        { speaker: "A", text: "I want to start a healthier diet.", translation: "Daha sağlıklı bir diyete başlamak istiyorum." },
        { speaker: "B", text: "You should eat more protein and less sugar.", translation: "Daha fazla protein ve daha az şeker yemelisin." },
        { speaker: "A", text: "How much water should I drink daily?", translation: "Günde ne kadar su içmeliyim?" },
        { speaker: "B", text: "At least two liters for better hydration.", translation: "Daha iyi hidrasyon için en az iki litre." }
    ], prompts: [
        { instruction: "Sağlık alışkanlıklarınız hakkında konuşun.", prompt: "What do you do to stay healthy?", sampleAnswer: "I try to sleep 8 hours a night, walk every day, and avoid eating fast food." }
    ]
};

// Unit 179: Psychology Basics
const u179: EnglishSpeaking = {
    unitId: 179, title: "Psychology Basics", dialogues: [
        { speaker: "A", text: "Why do people behave differently in groups?", translation: "İnsanlar neden gruplar içinde farklı davranır?" },
        { speaker: "B", text: "It's often due to social pressure or peer influence.", translation: "Genellikle sosyal baskı veya akran etkisi nedeniyledir." },
        { speaker: "A", text: "What is the role of motivation in success?", translation: "Başarıda motivasyonun rolü nedir?" },
        { speaker: "B", text: "Motivation gives you the energy to keep going despite challenges.", translation: "Motivasyon, zorluklara rağmen devam etmeniz için size enerji verir." }
    ], prompts: [
        { instruction: "Bir psikolojik kavram hakkında konuşun.", prompt: "How do you handle stress?", sampleAnswer: "When I'm stressed, I use breathing techniques or listen to classical music to calm down." }
    ]
};

// Unit 180: Business English 1
const u180: EnglishSpeaking = {
    unitId: 180, title: "Business Basics", dialogues: [
        { speaker: "A", text: "Welcome to the team! I'll show you around the office.", translation: "Ekibe hoş geldin! Ofisi sana gezdireceğim." },
        { speaker: "B", text: "Thank you. Who is the head of the department?", translation: "Teşekkür ederim. Bölüm başkanı kim?" },
        { speaker: "A", text: "That's Mr. Smith. He's very approachable.", translation: "Bay Smith. Kendisi çok yaklaşılabilirdir." },
        { speaker: "B", text: "Great. I'm looking forward to working with everyone.", translation: "Harika. Herkesle çalışmayı dört gözle bekliyorum." }
    ], prompts: [
        { instruction: "İş yerindeki ilk gününüz hakkında konuşun.", prompt: "Introduce yourself to a new colleague.", sampleAnswer: "Hi, I'm Sarah. I've just joined the marketing team as a manager. Nice to meet you." }
    ]
};

// Unit 181: Past Perfect
const u181: EnglishSpeaking = {
    unitId: 181, title: "The Past Perfect", dialogues: [
        { speaker: "A", text: "Had you already eaten when you arrived?", translation: "Vardığında çoktan yemek yemiş miydin?" },
        { speaker: "B", text: "Yes, I had finished dinner ten minutes before.", translation: "Evet, akşam yemeğini on dakika önce bitirmiştim." },
        { speaker: "A", text: "And what did you do after that?", translation: "Peki ondan sonra ne yaptın?" },
        { speaker: "B", text: "I went for a walk.", translation: "Yürüyüşe çıktım." }
    ], prompts: [
        { instruction: "Geçmişte yaşanmış iki olayı kıyaslayın.", prompt: "Talk about something you had done before starting your current job.", sampleAnswer: "Before I started this job, I had worked in a local library for three years." }
    ]
};

// Unit 182: Future Perfect
const u182: EnglishSpeaking = {
    unitId: 182, title: "Future Perfect", dialogues: [
        { speaker: "A", text: "Will you have finished the report by tomorrow?", translation: "Raporu yarına kadar bitirmiş olacak mısın?" },
        { speaker: "B", text: "Yes, I will have sent it by 5 PM.", translation: "Evet, saat 17:00'ye kadar göndermiş olacağım." },
        { speaker: "A", text: "That's great. We can discuss it in the meeting.", translation: "Harika. Toplantıda tartışabiliriz." },
        { speaker: "B", text: "Perfect. I'll be ready.", translation: "Mükemmel. Hazır olacağım." }
    ], prompts: [
        { instruction: "Gelecek hedefleriniz hakkında konuşun.", prompt: "What will you have achieved in five years?", sampleAnswer: "In five years, I will have graduated from university and started my career." }
    ]
};

// Unit 183: Relative Clauses
const u183: EnglishSpeaking = {
    unitId: 183, title: "Relative Clauses", dialogues: [
        { speaker: "A", text: "Is this the book that you told me about?", translation: "Bana bahsettiğin kitap bu mu?" },
        { speaker: "B", text: "Yes, it's the one which won the award last year.", translation: "Evet, geçen yıl ödül kazanan kitap o." },
        { speaker: "A", text: "And who is the author?", translation: "Peki yazarı kim?" },
        { speaker: "B", text: "He's a writer who lives in London.", translation: "Londra'da yaşayan bir yazar." }
    ], prompts: [
        { instruction: "Bir kişiyi veya nesneyi tanımlayın.", prompt: "Describe a gadget that you can't live without.", sampleAnswer: "I can't live without my laptop, which I use for everything from work to entertainment." }
    ]
};

// Unit 184: Causatives
const u184: EnglishSpeaking = {
    unitId: 184, title: "Causatives (Have/Get)", dialogues: [
        { speaker: "A", text: "I need to have my car repaired.", translation: "Arabamı tamir ettirmem gerekiyor." },
        { speaker: "B", text: "Why? What happened?", translation: "Neden? Ne oldu?" },
        { speaker: "A", text: "The engine is making a strange noise.", translation: "Motor garip bir ses çıkarıyor." },
        { speaker: "B", text: "You should get it checked as soon as possible.", translation: "En kısa sürede kontrol ettirmelisin." }
    ], prompts: [
        { instruction: "Yaptırdığınız bir hizmet hakkında konuşun.", prompt: "What service do you regularly have done?", sampleAnswer: "I have my hair cut every two months at the same barber." }
    ]
};

// Unit 185: Wish Clauses
const u185: EnglishSpeaking = {
    unitId: 185, title: "Wishes and Regrets", dialogues: [
        { speaker: "A", text: "I wish I could speak more languages.", translation: "Keşke daha fazla dil konuşabilsem." },
        { speaker: "B", text: "Me too. I wish I had studied harder in school.", translation: "Ben de. Keşke okulda daha çok çalışsaydım." },
        { speaker: "A", text: "It's never too late to start learning.", translation: "Öğrenmeye başlamak için asla geç değil." },
        { speaker: "B", text: "You're right. Maybe I'll sign up for a course.", translation: "Haklısın. Belki bir kursa kaydolurum." }
    ], prompts: [
        { instruction: "Dilekleriniz hakkında konuşun.", prompt: "What is one thing you wish you could change about your routine?", sampleAnswer: "I wish I could wake up earlier to have time for a morning workout." }
    ]
};

// Unit 186: Collocations
const u186: EnglishSpeaking = {
    unitId: 186, title: "Common Collocations", dialogues: [
        { speaker: "A", text: "I made a mistake in the calculation.", translation: "Hesaplamada bir hata yaptım." },
        { speaker: "B", text: "Don't worry, everyone makes mistakes.", translation: "Endişelenme, herkes hata yapar." },
        { speaker: "A", text: "I'll do my best to fix it.", translation: "Düzeltmek için elimden geleni yapacağım." },
        { speaker: "B", text: "Good. Take your time.", translation: "Güzel. Acele etme." }
    ], prompts: [
        { instruction: "Hatalar ve başarılar hakkında konuşun.", prompt: "Tell me about a time you made a tough decision.", sampleAnswer: "I had to decide whether to move abroad. I stayed with my family after thinking carefully." }
    ]
};

// Unit 187: Connectors
const u187: EnglishSpeaking = {
    unitId: 187, title: "Connecting Ideas", dialogues: [
        { speaker: "A", text: "Although it was raining, we went for a run.", translation: "Yağmur yağmasına rağmen koşuya çıktık." },
        { speaker: "B", text: "However, you should have worn a jacket.", translation: "Ancak ceket giymeliydin." },
        { speaker: "A", text: "I forgot it because I was in a hurry.", translation: "Acele ettiğim için unuttum." },
        { speaker: "B", text: "Therefore, you got wet!", translation: "Bu yüzden ıslandın!" }
    ], prompts: [
        { instruction: "Zıt fikirleri bağlayın.", prompt: "Discuss the pros and cons of technology.", sampleAnswer: "Technology saves time; however, it can also lead to social isolation if overused." }
    ]
};

// Unit 188: Formal vs Informal
const u188: EnglishSpeaking = {
    unitId: 188, title: "Formal vs Informal English", dialogues: [
        { speaker: "Boss", text: "Good morning. Please have a seat.", translation: "Günaydın. Lütfen oturun." },
        { speaker: "Employee", text: "Thank you. I appreciate you meeting with me.", translation: "Teşekkür ederim. Benimle görüştüğünüz için minnettarım." },
        { speaker: "Boss", text: "I'd like to discuss the project status.", translation: "Proje durumunu görüşmek istiyorum." },
        { speaker: "Employee", text: "I've prepared a summary for your review.", translation: "İncelemeniz için bir özet hazırladım." }
    ], prompts: [
        { instruction: "Resmi bir dille konuşun.", prompt: "Politely request information from a manager.", sampleAnswer: "Excuse me, would it be possible to get more details about the upcoming project?" }
    ]
};

// Unit 189: Debate Skills
const u189: EnglishSpeaking = {
    unitId: 189, title: "Debate and Argument", dialogues: [
        { speaker: "A", text: "I strongly believe that social media is harmful.", translation: "Sosyal medyanın zararlı olduğuna yürekten inanıyorum." },
        { speaker: "B", text: "That might be true, but it also connects people.", translation: "Bu doğru olabilir ama aynı zamanda insanları birbirine bağlıyor." },
        { speaker: "A", text: "But what about the impact on mental health?", translation: "Peki ya ruh sağlığı üzerindeki etkisi?" },
        { speaker: "B", text: "We need more regulation to prevent the negative effects.", translation: "Olumsuz etkileri önlemek için daha fazla düzenlemeye ihtiyacımız var." }
    ], prompts: [
        { instruction: "Bir tartışmada taraf tutun.", prompt: "Is technology making us lazier?", sampleAnswer: "I disagree. Technology automates boring tasks, allowing us to focus on creative work." }
    ]
};

// Unit 190: B1 Review
const u190: EnglishSpeaking = {
    unitId: 190, title: "B1 General Review", dialogues: [
        { speaker: "A", text: "You've completed the B1 level! How do you feel?", translation: "B1 seviyesini tamamladın! Nasıl hissediyorsun?" },
        { speaker: "B", text: "I feel more confident about my speaking skills.", translation: "Konuşma becerilerim konusunda daha özgüvenli hissediyorum." },
        { speaker: "A", text: "What's your next goal?", translation: "Bir sonraki hedefin ne?" },
        { speaker: "B", text: "I want to reach the B2 level by next year.", translation: "Gelecek yıla kadar B2 seviyesine ulaşmak istiyorum." }
    ], prompts: [
        { instruction: "İlerlemeniz hakkında konuşun.", prompt: "Compare your English level now with six months ago.", sampleAnswer: "Six months ago, I couldn't understand native speakers. Now, I can follow conversations easily." }
    ]
};

// Export function
export function getEnglishB1SpeakingForUnit(unitId: number): EnglishSpeaking {
    const m: { [k: number]: EnglishSpeaking } = {
        161: u161, 162: u162, 163: u163, 164: u164, 165: u165, 166: u166, 167: u167, 168: u168, 169: u169, 170: u170,
        171: u171, 172: u172, 173: u173, 174: u174, 175: u175, 176: u176, 177: u177, 178: u178, 179: u179, 180: u180,
        181: u181, 182: u182, 183: u183, 184: u184, 185: u185, 186: u186, 187: u187, 188: u188, 189: u189, 190: u190
    };
    return m[unitId] || u161;
}
