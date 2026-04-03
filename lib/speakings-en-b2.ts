/**
 * SteadyShell Speaking - English B2 (Units 191-220)
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

// Unit 191: Advanced Tenses (Project Management)
const u191: EnglishSpeaking = {
    unitId: 191, title: "Managing Expectations", dialogues: [
        { speaker: "Manager", text: "How long have you been working on this restructuring plan?", translation: "Bu yeniden yapılandırma planı üzerinde ne kadar süredir çalışıyorsunuz?" },
        { speaker: "Engineer", text: "We've been developing it for six months, and we'll have finished the first draft by Friday.", translation: "Altı aydır geliştiriyoruz ve Cuma gününe kadar ilk taslağı bitirmiş olacağız." },
        { speaker: "Manager", text: "By the time the board meets, will you have tested the new workflow?", translation: "Yönetim kurulu toplandığında, yeni iş akışını test etmiş olacak mısınız?" },
        { speaker: "Engineer", text: "Yes, we will have been testing it for at least a week by then.", translation: "Evet, o zamana kadar en az bir haftadır test ediyor olacağız." }
    ], prompts: [
        { instruction: "Bir proje süreci hakkında gelecek tamamlanmışlık (future perfect) kullanarak konuşun.", prompt: "What will you have achieved by the end of this year?", sampleAnswer: "By the end of this year, I will have completed my language course and I will have started a new job." }
    ]
};

// Unit 192: Complex Structures (Breakthroughs)
const u192: EnglishSpeaking = {
    unitId: 192, title: "Discussing Innovations", dialogues: [
        { speaker: "A", text: "It is widely reported that solar efficiency has doubled.", translation: "Güneş enerjisi verimliliğinin iki katına çıktığı yaygın olarak bildiriliyor." },
        { speaker: "B", text: "Not only is the technology more efficient, but it's also cheaper.", translation: "Teknoloji sadece daha verimli değil, aynı zamanda daha ucuz." },
        { speaker: "A", text: "Some critics dismissed it, but the results were verified.", translation: "Bazı eleştirmenler reddetti ama sonuçlar doğrulandı." },
        { speaker: "B", text: "Such innovations are essential if we are to save the planet.", translation: "Gezegeni kurtaracaksak bu tür yenilikler elzemdir." }
    ], prompts: [
        { instruction: "Önemli bir teknolojik gelişme hakkında pasif yapı kullanarak konuşun.", prompt: "Tell me about a recent scientific breakthrough you find interesting.", sampleAnswer: "It has been announced that a new vaccine was developed. It is expected to save millions of lives." }
    ]
};

// Unit 193: Common Idioms (Failure/Restart)
const u193: EnglishSpeaking = {
    unitId: 193, title: "Back to Basics", dialogues: [
        { speaker: "Manager", text: "Our marketing campaign failed. It's a bitter pill to swallow.", translation: "Pazarlama kampanyamız başarısız oldu. Bu kabullenmesi zor bir durum." },
        { speaker: "Lead", text: "We bit off more than we could chew by launching in three countries.", translation: "Üç ülkede lansman yaparak boyumuzdan büyük işe kalkıştık." },
        { speaker: "Manager", text: "Does this mean we go back to the drawing board?", translation: "Bu, en başa (yeni bir plana) döneceğimiz anlamına mı geliyor?" },
        { speaker: "Lead", text: "Exactly. We need to hit the nail on the head with the next strategy.", translation: "Kesinlikle. Bir sonraki stratejide tam isabet tutturmamız lazım." }
    ], prompts: [
        { instruction: "İş hayatındaki zorluklar hakkında deyimler kullanarak konuşun.", prompt: "Have you ever had to go back to the drawing board after a failure?", sampleAnswer: "Yes, last year my first business plan failed, so I had to go back to the drawing board and change everything." }
    ]
};

// Unit 194: More Idioms (Studying)
const u194: EnglishSpeaking = {
    unitId: 194, title: "Midnight Oil", dialogues: [
        { speaker: "A", text: "You look exhausted. Have you been burning the midnight oil?", translation: "Yorgun görünüyorsun. Geceleri geç saatlere kadar mı çalışıyorsun?" },
        { speaker: "B", text: "Yes, I'm under the weather too because of the stress.", translation: "Evet, stres yüzünden kendimi biraz keyifsiz de hissediyorum." },
        { speaker: "A", text: "We are in the same boat; my exams are next week too.", translation: "Aynı gemideyiz; benim sınavlarım da haftaya." },
        { speaker: "B", text: "The deadline extension was a blessing in disguise.", translation: "Teslim tarihinin uzatılması gizli bir lütuf oldu." }
    ], prompts: [
        { instruction: "Okul veya iş stresi hakkında deyimler kullanarak konuşun.", prompt: "Tell me about a time you had to burn the midnight oil.", sampleAnswer: "I had to burn the midnight oil last month when I was preparing for my final project presentation." }
    ]
};

// Unit 195: Formal Letters (Complaint)
const u195: EnglishSpeaking = {
    unitId: 195, title: "Raising a Concern", dialogues: [
        { speaker: "Customer", text: "I'm writing to express my dissatisfaction with the waiting time.", translation: "Bekleme süresinden duyduğum memnuniyetsizliği dile getirmek için yazıyorum." },
        { speaker: "Staff", text: "I apologize, sir. We are attending to your request now.", translation: "Özür dilerim efendim. Talebinizle ilgileniyoruz." },
        { speaker: "Customer", text: "The staff was dismissive when I first mentioned it.", translation: "İlk bahsettiğimde personel ilgisizdi." },
        { speaker: "Staff", text: "We will investigate this at our earliest convenience.", translation: "Bunu mümkün olan en kısa sürede araştıracağız." }
    ], prompts: [
        { instruction: "Resmi bir şikayet senaryosunda konuşun.", prompt: "Imagine you received a broken product. How would you complain formally?", sampleAnswer: "I am writing to inform you that the product I received is damaged. I'd appreciate a full refund." }
    ]
};

// Unit 196: Advanced Presenting
const u196: EnglishSpeaking = {
    unitId: 196, title: "Public Speaking Secrets", dialogues: [
        { speaker: "Speaker", text: "How can I capture the audience's attention immediately?", translation: "Dinleyicinin dikkatini anında nasıl çekebilirim?" },
        { speaker: "Coach", text: "Start with a compelling statistic or a surprising story.", translation: "Etkileyici bir istatistikle veya şaşırtıcı bir hikayeyle başla." },
        { speaker: "Speaker", text: "Should my visual aids be full of information?", translation: "Görsel yardımcılarım bilgiyle dolu mu olmalı?" },
        { speaker: "Coach", text: "No, keep them minimal. Your goal is to persuade and inspire.", translation: "Hayır, onları minimal tut. Amacın ikna etmek ve ilham vermek." }
    ], prompts: [
        { instruction: "Sunum teknikleri hakkında tavsiye verin.", prompt: "What are the keys to a successful presentation?", sampleAnswer: "The keys are maintaining eye contact, using open body language, and keeping your slides simple." }
    ]
};

// Unit 197: Negotiation
const u197: EnglishSpeaking = {
    unitId: 197, title: "Finding Common Ground", dialogues: [
        { speaker: "Buyer", text: "We'd like to lower the unit price by at least 10%.", translation: "Birim fiyatı en az %10 düşürmek istiyoruz." },
        { speaker: "Seller", text: "We are hesitant due to the rising costs of raw materials.", translation: "Hammadde maliyetlerinin artması nedeniyle tereddütlüyüz." },
        { speaker: "Buyer", text: "If you give us the discount, we'll sign a longer contract.", translation: "Bize indirim yaparsanız daha uzun bir sözleşme imzalayacağız." },
        { speaker: "Seller", text: "That sounds like a win-win situation. Let's bridge the gap.", translation: "Bu 'kazan-kazan' durumu gibi duruyor. Aradaki farkı kapatalım." }
    ], prompts: [
        { instruction: "Bir pazarlık senaryosunda taviz vererek konuşun.", prompt: "Negotiate for a lower price on a new car.", sampleAnswer: "I like the car, but the price is too high. If you include free insurance, I will buy it today." }
    ]
};

// Unit 198: Legal Vocabulary
const u198: EnglishSpeaking = {
    unitId: 198, title: "Employment Terms", dialogues: [
        { speaker: "Candidate", text: "Are the termination clauses included in the contract?", translation: "Fesih maddeleri sözleşmeye dahil mi?" },
        { speaker: "HR", text: "Yes, and there is also a non-disclosure agreement.", translation: "Evet, ayrıca bir gizlilik sözleşmesi (NDA) de var." },
        { speaker: "Candidate", text: "Is this document legally binding right now?", translation: "Bu belge şu an yasal olarak bağlayıcı mı?" },
        { speaker: "HR", text: "Only after both parties have signed and dated it.", translation: "Sadece her iki taraf imzalayıp tarih attıktan sonra." }
    ], prompts: [
        { instruction: "Yasal terimler kullanarak bir iş sözleşmesini tartışın.", prompt: "What should you check before signing a legal document?", sampleAnswer: "You should check the terms and conditions, the compensation notice, and any non-disclosure clauses." }
    ]
};

// Unit 199: Medical Terms
const u199: EnglishSpeaking = {
    unitId: 199, title: "Healthcare Innovations", dialogues: [
        { speaker: "Patient", text: "Is my condition hereditary or environmental?", translation: "Durumum kalıtsal mı yoksa çevresel mi?" },
        { speaker: "Doctor", text: "We'll analyze your DNA to see if it's a chronic condition.", translation: "Kronik bir durum mu diye bakmak için DNA'nızı analiz edeceğiz." },
        { speaker: "Patient", text: "I've heard that preventative care is very popular now.", translation: "Koruyucu bakımın şu an çok popüler olduğunu duydum." },
        { speaker: "Doctor", text: "Yes, telemedicine and regular screenings save many lives.", translation: "Evet, teletıp ve düzenli taramalar birçok hayat kurtarıyor." }
    ], prompts: [
        { instruction: "Tıbbi gelişmeler hakkında fikirlerinizi söyleyin.", prompt: "How has technology improved modern medicine recently?", sampleAnswer: "Technology has introduced telemedicine and targeted therapy for chronic diseases." }
    ]
};

// Unit 200: Finance
const u200: EnglishSpeaking = {
    unitId: 200, title: "Investment Strategy", dialogues: [
        { speaker: "Investor", text: "Should I focus on blue-chip stocks for stability?", translation: "İstikrar için güvenilir (blue-chip) hisselere mi odaklanmalıyım?" },
        { speaker: "Advisor", text: "Yes, but diversification is key to mitigate market volatility.", translation: "Evet, ancak dalgalanmayı hafifletmek için çeşitlendirme anahtardır." },
        { speaker: "Investor", text: "What about start-ups with high potential returns?", translation: "Yüksek potansiyel getirili yeni girişimler ne olacak?" },
        { speaker: "Advisor", text: "They carry more risk, especially with current inflation rates.", translation: "Özellikle mevcut enflasyon oranlarıyla daha fazla risk taşıyorlar." }
    ], prompts: [
        { instruction: "Finansal risk ve yatırım hakkında konuşun.", prompt: "How do you manage your personal financial risks?", sampleAnswer: "I manage risk by having a balanced portfolio and monitoring inflation trends regularly." }
    ]
};

// Unit 201: Literature
const u201: EnglishSpeaking = {
    unitId: 201, title: "Analyzing the Narrative", dialogues: [
        { speaker: "Student", text: "What does the recurrent image of the bird symbolize?", translation: "Tekrarlanan kuş imgesi neyi sembolize ediyor?" },
        { speaker: "Professor", text: "It represents the protagonist's desire for escape.", translation: "Başkahramanın kaçış arzusunu temsil ediyor." },
        { speaker: "Student", text: "The setting creates a very dark mood, doesn't it?", translation: "Mekan çok karanlık bir ruh hali yaratıyor, değil mi?" },
        { speaker: "Professor", text: "Yes, the atmosphere highlights the nuances of the story.", translation: "Evet, atmosfer hikayenin nüanslarını vurguluyor." }
    ], prompts: [
        { instruction: "Okuduğunuz bir kitap hakkında analiz yapın.", prompt: "Discuss the central theme of your favorite novel.", sampleAnswer: "The central theme of '1984' is the danger of total control and the loss of individual privacy." }
    ]
};

// Unit 202: AI Ethics
const u202: EnglishSpeaking = {
    unitId: 202, title: "The AI Debate", dialogues: [
        { speaker: "A", text: "Should AI be strictly regulated to prevent bias?", translation: "Önyargıyı önlemek için yapay zeka sıkı bir şekilde düzenlenmeli mi?" },
        { speaker: "B", text: "If we over-regulate, we might stifle innovation.", translation: "Eğer aşırı düzenlersek, inovasyonu engelleyebiliriz." },
        { speaker: "A", text: "But what about job displacement and data security?", translation: "Peki ya iş kaybı ve veri güvenliği ne olacak?" },
        { speaker: "B", text: "We must find a balance between progress and safety.", translation: "İlerleme ve güvenlik arasında bir denge bulmalıyız." }
    ], prompts: [
        { instruction: "Yapay zekanın etik sorunları hakkında konuşun.", prompt: "Do you think AI will ever possess real consciousness?", sampleAnswer: "I don't think so, because consciousness involves biological complexity that machines can't replicate." }
    ]
};

// Unit 203: Research
const u203: EnglishSpeaking = {
    unitId: 203, title: "Academic Methodology", dialogues: [
        { speaker: "A", text: "How do we ensure the validity and reliability of results?", translation: "Sonuçların geçerliliğini ve güvenilirliğini nasıl sağlarız?" },
        { speaker: "B", text: "By following strict protocols and conducting a peer review.", translation: "Sıkı protokollere uyarak ve akran denetimi yaparak." },
        { speaker: "A", text: "Did you obtain informed consent from everyone?", translation: "Herkesin bilgilendirilmiş onamını aldın mı?" },
        { speaker: "B", text: "Yes, ethical considerations are paramount in this study.", translation: "Evet, etik mülahazalar bu çalışmada her şeyden önemlidir." }
    ], prompts: [
        { instruction: "Bir araştırma süreci hakkında detay verin.", prompt: "What are the most important steps in academic research?", sampleAnswer: "The most important steps are defining a clear question and conducting a thorough literature review." }
    ]
};

// Unit 204: Critical Thinking
const u204: EnglishSpeaking = {
    unitId: 204, title: "Evaluating Information", dialogues: [
        { speaker: "A", text: "Don't accept that fact at face value; check the source.", translation: "O gerçeği olduğu gibi kabul etme; kaynağı kontrol et." },
        { speaker: "B", text: "You're right, I need to identify the logical fallacies.", translation: "Haklısın, mantıksal hataları belirlemem gerekiyor." },
        { speaker: "A", text: "Critical thinking involves analyzing info objectively.", translation: "Eleştirel düşünme, bilgiyi nesnel olarak analiz etmeyi içerir." },
        { speaker: "B", text: "It helps us avoid being misled by bias.", translation: "Önyargılar tarafından yanlış yönlendirilmekten kaçınmamıza yardımcı olur." }
    ], prompts: [
        { instruction: "Medya ve bilgi güvenilirliği hakkında konuşun.", prompt: "How do you recognize bias in a news article?", sampleAnswer: "I check if the language is emotional and see if multiple perspectives are presented." }
    ]
};

// Unit 205: Global Affairs
const u205: EnglishSpeaking = {
    unitId: 205, title: "International Relations", dialogues: [
        { speaker: "A", text: "Has diplomacy shifted toward non-state actors?", translation: "Diplomasi devlet dışı aktörlere mi kaydı?" },
        { speaker: "B", text: "Yes, NGOs and companies play a role in global stability.", translation: "Evet, STK'lar ve şirketler küresel istikrarda rol oynuyor." },
        { speaker: "A", text: "Does nationalism pose a threat to multilateralism?", translation: "Milliyetçilik çok taraflılığa bir tehdit mi?" },
        { speaker: "B", text: "In some regions, it definitely challenges international cooperation.", translation: "Bazı bölgelerde uluslararası işbirliğini kesinlikle zorluyor." }
    ], prompts: [
        { instruction: "Dünya gündemi hakkında fikir belirtin.", prompt: "What is the most pressing global issue today?", sampleAnswer: "I believe climate change is the most pressing issue because it affects everyone's future." }
    ]
};

// Unit 206: Media Literacy
const u206: EnglishSpeaking = {
    unitId: 206, title: "Analyzing the News", dialogues: [
        { speaker: "A", text: "Fake news often spreads faster because it's emotional.", translation: "Yalan haberler duygusal olduğu için genelde daha hızlı yayılır." },
        { speaker: "B", text: "We must cross-reference information with reputable sources.", translation: "Bilgileri saygın kaynaklarla karşılaştırmalıyız." },
        { speaker: "A", text: "Algorithms can create filter bubbles in our feeds.", translation: "Algoritmalar akışlarımızda filtre balonları oluşturabilir." },
        { speaker: "B", text: "Media literacy empowers us to form independent opinions.", translation: "Medya okuryazarlığı bizi bağımsız fikirler oluşturmak için güçlendirir." }
    ], prompts: [
        { instruction: "Haberlerin doğruluğunu nasıl teyit ettiğinizden bahsedin.", prompt: "How do you verify the credibility of a news article online?", sampleAnswer: "I verify it by checking the author's credentials and cross-referencing the claims with other news outlets." }
    ]
};

// Unit 207: Sustainability
const u207: EnglishSpeaking = {
    unitId: 207, title: "Corporate Responsibility", dialogues: [
        { speaker: "CEO", text: "We must consider our environmental and social impact.", translation: "Çevresel ve sosyal etkimizi göz önünde bulundurmalıyız." },
        { speaker: "Board", text: "Does this shift align with our core values?", translation: "Bu değişim temel değerlerimizle örtüşüyor mu?" },
        { speaker: "CEO", text: "Yes, the triple bottom line is the new industry standard.", translation: "Evet, üçlü bilanço yeni sektör standardıdır." },
        { speaker: "Board", text: "Sustainable practices will lead to long-term cost savings.", translation: "Sürdürülebilir uygulamalar uzun vadeli maliyet tasarrufu sağlayacaktır." }
    ], prompts: [
        { instruction: "Sürdürülebilir iş modelleri hakkında konuşun.", prompt: "Why is sustainability important for modern businesses?", sampleAnswer: "It's important because consumers prefer ethical brands, and it ensures long-term survival for the planet." }
    ]
};

// Unit 208: Project Management
const u208: EnglishSpeaking = {
    unitId: 208, title: "Project Methodologies", dialogues: [
        { speaker: "Manager", text: "Is the Waterfall model suitable for this initiative?", translation: "Şelale modeli bu girişim için uygun mu?" },
        { speaker: "Lead", text: "No, we need the flexibility of an Agile approach here.", translation: "Hayır, burada Çevik (Agile) bir yaklaşımın esnekliğine ihtiyacımız var." },
        { speaker: "Manager", text: "We must define the scope early to avoid scope creep.", translation: "Kapsam kaymasını önlemek için kapsamı erkenden tanımlamalıyız." },
        { speaker: "Lead", text: "I'll schedule regular milestone reviews to stay on track.", translation: "Yolunda kalmak için düzenli kilometre taşı incelemeleri planlayacağım." }
    ], prompts: [
        { instruction: "İş projelerini nasıl yönettiğinizi anlatın.", prompt: "Do you prefer long-term planning or flexible updating in projects?", sampleAnswer: "I prefer a flexible Agile approach because it allows us to adapt to unforeseen changes quickly." }
    ]
};

// Unit 209: Cross-cultural Communication
const u209: EnglishSpeaking = {
    unitId: 209, title: "Cultural Sensitivity", dialogues: [
        { speaker: "A", text: "Misunderstandings often arise from non-verbal cues.", translation: "Yanlış anlamalar genelde sözsüz ipuçlarından kaynaklanır." },
        { speaker: "B", text: "Exactly. We must understand the cultural nuances of eye contact.", translation: "Kesinlikle. Göz temasının kültürel nüanslarını anlamalıyız." },
        { speaker: "A", text: "Overcoming stereotypes is essential for collaboration.", translation: "İşbirliği için stereotipleri yıkmak elzemdir." },
        { speaker: "B", text: "Awareness of our own cultural bias is the first step.", translation: "Kendi kültürel önyargımızın farkında olmak ilk adımdır." }
    ], prompts: [
        { instruction: "Farklı kültürlerle iletişim hakkında konuşun.", prompt: "How do you handle cultural differences in a professional setting?", sampleAnswer: "I handle them by practicing active listening and showing empathy toward different norms." }
    ]
};

// Unit 210: Career Development
const u210: EnglishSpeaking = {
    unitId: 210, title: "Building a Career", dialogues: [
        { speaker: "A", text: "Mentorship provides guidance during career transitions.", translation: "Mentorluk, kariyer geçişleri sırasında rehberlik sağlar." },
        { speaker: "B", text: "I'm proactively seeking networking opportunities.", translation: "Proaktif olarak ağ kurma fırsatları arıyorum." },
        { speaker: "A", text: "Hidden job opportunities are often not advertised publicly.", translation: "Gizli iş fırsatları genelde halka açık ilan edilmez." },
        { speaker: "B", text: "Continuous learning is vital to remain competitive.", translation: "Rekabetçi kalmak için sürekli öğrenme hayati önem taşır." }
    ], prompts: [
        { instruction: "Kariyer hedeflerinizden ve mentorluğun öneminden bahsedin.", prompt: "What are your short-term and long-term career goals?", sampleAnswer: "Short-term, I want to master English; long-term, I hope to lead a global engineering team." }
    ]
};

// Unit 211: Inversion
const u211: EnglishSpeaking = {
    unitId: 211, title: "Dramatic Emphasis", dialogues: [
        { speaker: "A", text: "Rarely have I seen such a breathtaking performance.", translation: "Nadiren böyle nefes kesici bir performans görmüşümdür." },
        { speaker: "B", text: "Under no circumstances should we miss the next show.", translation: "Hiçbir koşulda bir sonraki gösteriyi kaçırmamalıyız." },
        { speaker: "A", text: "Seldom do we encounter such mastery of language.", translation: "Dilin bu denli ustalığına nadiren rastlarız." },
        { speaker: "B", text: "Little did she know that it would be a success.", translation: "Bunun bir başarı olacağını hayal bile edemezdi (az biliyordu)." }
    ], prompts: [
        { instruction: "Devrik cümleler (inversion) kullanarak vurgu yapın.", prompt: "Tell me something you have rarely experienced using inversion.", sampleAnswer: "Rarely have I seen such a beautiful city like Paris at night." }
    ]
};

// Unit 212: Mixed Conditionals
const u212: EnglishSpeaking = {
    unitId: 212, title: "Hypothetical Regrets", dialogues: [
        { speaker: "A", text: "If I hadn't moved to London, I wouldn't be fluent now.", translation: "Londra'ya taşınmamış olsaydım, şu an akıcı olmazdım." },
        { speaker: "B", text: "If she were more organized, she wouldn't have missed it.", translation: "Daha düzenli olsaydı, onu (toplantıyı/fırsatı) kaçırmazdı." },
        { speaker: "A", text: "If we hadn't invested early, we wouldn't be rich today.", translation: "Erkenden yatırım yapmasaydık, bugün zengin olmazdık." },
        { speaker: "B", text: "We often imagine how life might be different.", translation: "Hayatın nasıl farklı olabileceğini sık sık hayal ederiz." }
    ], prompts: [
        { instruction: "Geçmiş kararlar ve şimdiki durumlar hakkında konuşun.", prompt: "How would your life be different if you had chosen another career?", sampleAnswer: "If I had chosen to be an artist, I would probably be traveling and painting in Europe right now." }
    ]
};

// Unit 213: Advanced Passive
const u213: EnglishSpeaking = {
    unitId: 213, title: "Reporting Measures", dialogues: [
        { speaker: "A", text: "The new highway is expected to reduce traffic congestion.", translation: "Yeni otoyolun trafik sıkışıklığını azaltması bekleniyor." },
        { speaker: "B", text: "Measures are being taken to ensure minimal impact.", translation: "Minimum etkiyi sağlamak için önlemler alınıyor." },
        { speaker: "A", text: "It has been argued that the budget was underestimated.", translation: "Bütçenin düşük tahmin edildiği iddia ediliyor." },
        { speaker: "B", text: "The findings were based on data from a three-year study.", translation: "Bulgular, üç yıllık bir çalışmadan elde edilen verilere dayanıyordu." }
    ], prompts: [
        { instruction: "Resmi bir dille bir projenin durumunu anlatın.", prompt: "Report on a city project using passive voice.", sampleAnswer: "The new park is being built in the city center. It is expected to be opened next summer." }
    ]
};

// Unit 214: Cleft Sentences
const u214: EnglishSpeaking = {
    unitId: 214, title: "Pointing the Finger", dialogues: [
        { speaker: "A", text: "It was the lack of funding that caused the failure.", translation: "Başarısızlığa neden olan şey finansman eksikliğiydi." },
        { speaker: "B", text: "What we need is a more sustainable approach.", translation: "İhtiyacımız olan şey daha sürdürülebilir bir yaklaşım." },
        { speaker: "A", text: "It is her innovation that set her apart from the team.", translation: "Onu ekipten ayıran şey inovasyonuydu." },
        { speaker: "B", text: "What impressed me most was the speed of delivery.", translation: "Beni en çok etkileyen şey teslimat hızıydı." }
    ], prompts: [
        { instruction: "Bir durumdaki en önemli öğeyi vurgulayın.", prompt: "What is it that you love most about your current job?", sampleAnswer: "What I love most about my job is the freedom to work from anywhere." }
    ]
};

// Unit 215: Advanced Vocabulary
const u215: EnglishSpeaking = {
    unitId: 215, title: "Nuanced Expression", dialogues: [
        { speaker: "A", text: "I'm trying to be more articulate and nuanced.", translation: "Daha net (ifade gücü yüksek) ve nüanslı olmaya çalışıyorum." },
        { speaker: "B", text: "Distinct connotations can change the entire meaning.", translation: "Farklı yan anlamlar tüm anlamı değiştirebilir." },
        { speaker: "A", text: "The benefits for communication are truly immense.", translation: "İletişim için faydaları gerçekten muazzam." },
        { speaker: "B", text: "Choosing the right word for the context takes effort.", translation: "Bağlam için doğru kelimeyi seçmek çaba gerektirir." }
    ], prompts: [
        { instruction: "Kelime seçiminin önemi hakkında konuşun.", prompt: "Why is it important to choose words with high precision?", sampleAnswer: "It's important because it avoids misunderstandings and shows a higher level of education." }
    ]
};

// Unit 216: Essay Writing
const u216: EnglishSpeaking = {
    unitId: 216, title: "Academic Discourse", dialogues: [
        { speaker: "A", text: "A strong thesis statement is indispensable.", translation: "Güçlü bir tez cümlesi vazgeçilmezdir." },
        { speaker: "B", text: "Avoid colloquialisms to maintain a formal tone.", translation: "Resmi bir tonu korumak için argo ifadelerden kaçının." },
        { speaker: "A", text: "Did you address the counter-arguments?", translation: "Karşı argümanlara değindin mi?" },
        { speaker: "B", text: "Yes, I proofread the entire essay for clarity.", translation: "Evet, netlik için tüm makaleyi son okumadan geçirdim." }
    ], prompts: [
        { instruction: "Bir tartışmada iki tarafın da argümanlarını sunun.", prompt: "What is your opinion on working from home?", sampleAnswer: "While it offers flexibility, some argue it leads to isolation. I believe a hybrid model is best." }
    ]
};

// Unit 217: Speaking Fluency
const u217: EnglishSpeaking = {
    unitId: 217, title: "Natural Flow", dialogues: [
        { speaker: "A", text: "I want to speak smoothly without frequent pauses.", translation: "Sık sık duraksamadan akıcı bir şekilde konuşmak istiyorum." },
        { speaker: "B", text: "Using fillers like 'actually' can make it sound authentic.", translation: "'Aslında' gibi dolgu kelimeleri kullanmak doğal duyulmasını sağlayabilir." },
        { speaker: "A", text: "Engagement with native speakers is a great way to pick it up.", translation: "Anadili konuşanlarla etkileşim bunu kapmak için harika bir yol." },
        { speaker: "B", text: "Persistence is key to reaching oral proficiency.", translation: "Sözlü yeterliliğe ulaşmak için sebat anahtardır." }
    ], prompts: [
        { instruction: "Konuşma akıcılığı için kullandığınız stratejileri anlatın.", prompt: "What do you do when you forget a word in English?", sampleAnswer: "When I forget a word, I try to describe it using other words I know." }
    ]
};

// Unit 218: Listening Skills
const u218: EnglishSpeaking = {
    unitId: 218, title: "The Ear for English", dialogues: [
        { speaker: "A", text: "Connected speech is quite daunting at first.", translation: "Bitişik konuşma başta oldukça ürkütücü." },
        { speaker: "B", text: "Focus on keywords to grasp the overall meaning.", translation: "Genel anlamı kavramak için anahtar kelimelere odaklan." },
        { speaker: "A", text: "Podcasts helped my ear to sharpen gradually.", translation: "Podcast'ler kulağımın yavaş yavaş keskinleşmesine yardımcı oldu." },
        { speaker: "B", text: "Context clues are your best friend in rapid speech.", translation: "Hızlı konuşmalarda bağlam ipuçları en iyi dostundur." }
    ], prompts: [
        { instruction: "Dinleme becerilerini nasıl geliştirdiğinizden bahsedin.", prompt: "What variety of English accents do you find easiest to understand?", sampleAnswer: "I find the Standard American accent easiest because most movies I watch use it." }
    ]
};

// Unit 219: Reading Comprehension
const u219: EnglishSpeaking = {
    unitId: 219, title: "Deep Engagement", dialogues: [
        { speaker: "A", text: "Skimming for main ideas is a useful strategy.", translation: "Ana fikirler için göz gezdirmek faydalı bir stratejidir." },
        { speaker: "B", text: "Annotating the text enhances retention significantly.", translation: "Metni notlandırmak hafızada tutmayı önemli ölçüde artırır." },
        { speaker: "A", text: "We encounter abstract concepts in higher levels.", translation: "İleri seviyelerde soyut kavramlarla karşılaşıyoruz." },
        { speaker: "B", text: "Critical reading is vital for academic success.", translation: "Eleştirel okuma akademik başarı için hayati önem taşır." }
    ], prompts: [
        { instruction: "Karmaşık bir metni nasıl okuduğunuzu anlatın.", prompt: "How do you tackle a difficult academic article?", sampleAnswer: "I first skim the abstract and conclusion, then I read the methodology carefully while taking notes." }
    ]
};

// Unit 220: B2 Review
const u220: EnglishSpeaking = {
    unitId: 220, title: "Path to Mastery", dialogues: [
        { speaker: "A", text: "We've reached the end of the B2 level!", translation: "B2 seviyesinin sonuna ulaştık!" },
        { speaker: "B", text: "It's a milestone, not the destination.", translation: "Bu bir kilometre taşı, varış noktası değil." },
        { speaker: "A", text: "I'm ready for the subtle nuances of the C1 level.", translation: "C1 seviyesinin ince nüansları için hazırım." },
        { speaker: "B", text: "Stay curious and keep practicing every day.", translation: "Meraklı kalmaya ve her gün pratik yapmaya devam et." }
    ], prompts: [
        { instruction: "Tüm öğrenme yolculuğunuzu özetleyin.", prompt: "How do you feel about your progress in English so far?", sampleAnswer: "I feel proud because I can now express complex ideas and understand formal discussions." }
    ]
};

// Export individual units
export function getEnglishB2SpeakingForUnit(unitId: number): EnglishSpeaking | null {
    const units: { [key: number]: EnglishSpeaking } = {
        191: u191, 192: u192, 193: u193, 194: u194, 195: u195,
        196: u196, 197: u197, 198: u198, 199: u199, 200: u200,
        201: u201, 202: u202, 203: u203, 204: u204, 205: u205,
        206: u206, 207: u207, 208: u208, 209: u209, 210: u210,
        211: u211, 212: u212, 213: u213, 214: u214, 215: u215,
        216: u216, 217: u217, 218: u218, 219: u219, 220: u220,
    };
    return units[unitId] || null;
}

