/**
 * SteadyShell Readings - English A2 (Units 131-160)
 */

import { UnitReading } from './readings';

// Unit 131: Past Simple Regular - My Weekend
const u131: UnitReading = {
    unitId: 131,
    title: "A Busy Weekend",
    language: "English",
    level: "A2",
    story: {
        text: "Last weekend was very busy but productive. On Saturday morning, I cleaned my apartment and washed my clothes. Then, I relaxed for an hour and listened to some jazz music. In the afternoon, I walked to the city center to meet a friend. We chatted for a long time at a small cafe. On Sunday, I stayed at home and prepared for my English exam. In the evening, my brother arrived at my house and we enjoyed a delicious dinner together. It was a tiring but happy weekend.",
        translation: "Geçen hafta sonu çok yoğun ama verimliydi. Cumartesi sabahı dairemi temizledim ve kıyafetlerimi yıkadım. Sonra, bir saat dinlendim ve biraz caz müziği dinledim. Öğleden sonra bir arkadaşımla buluşmak için şehir merkezine yürüdüm. Küçük bir kafede uzun süre sohbet ettik. Pazar günü evde kaldım ve İngilizce sınavıma hazırlandım. Akşam erkek kardeşim evime geldi ve birlikte lezzetli bir akşam yemeğinin tadını çıkardık. Yorucu ama mutlu bir hafta sonuydu."
    },
    vocabulary: [
        { word: "Productive", meaning: "Verimli" },
        { word: "Apartment", meaning: "Daire" },
        { word: "Relaxed", meaning: "Dinlendi" },
        { word: "Chatted", meaning: "Sohbet etti" },
        { word: "Prepared", meaning: "Hazırlandı" },
        { word: "Arrived", meaning: "Vardı/Geldi" },
        { word: "Enjoyed", meaning: "Zevk aldı / Tadını çıkardı" }
    ],
    questions: [
        { id: 1, question: "How was the weekend overall?", options: ["Boring", "Productive", "Terrible"], correctAnswer: "Productive" },
        { id: 2, question: "What did he do on Saturday morning?", options: ["Worked", "Cleaned apartment", "Slept"], correctAnswer: "Cleaned apartment" },
        { id: 3, question: "What type of music did he listen to?", options: ["Rock", "Pop", "Jazz"], correctAnswer: "Jazz" },
        { id: 4, question: "Who did he meet in the city center?", options: ["His brother", "A friend", "His teacher"], correctAnswer: "A friend" },
        { id: 5, question: "Where did they chat?", options: ["At the park", "In the street", "At a cafe"], correctAnswer: "At a cafe" },
        { id: 6, question: "Why did he stay home on Sunday?", options: ["He was sick", "To prepare for an exam", "To sleep"], correctAnswer: "To prepare for an exam" },
        { id: 7, question: "Who arrived at his house on Sunday evening?", options: ["His parents", "His friend", "His brother"], correctAnswer: "His brother" },
        { id: 8, question: "How was the dinner?", options: ["Cold", "Delicious", "Bad"], correctAnswer: "Delicious" },
        { id: 9, question: "Did he walk or drive to the city center?", options: ["He drove", "He walked", "He took a bus"], correctAnswer: "He walked" },
        { id: 10, question: "Was the weekend tiring?", options: ["Yes", "No", "Maybe"], correctAnswer: "Yes" }
    ]
};

// Unit 132: Past Simple Irregular - Childhood Memories
const u132: UnitReading = {
    unitId: 132,
    title: "Growing Up in a Small Town",
    language: "English",
    level: "A2",
    story: {
        text: "When I was ten years old, my family moved to a small town near the sea. I went to a primary school there and had many friends. Every summer, we ate fresh fruit from the trees in our garden. My father bought me a red bicycle and I rode it every day after school. One day, I saw a rare bird in the woods and took a photo of it. Life was very different then. We didn't have smartphones, but we had a lot of fun. I made many beautiful memories in that town.",
        translation: "On yaşındayken ailem deniz kenarında küçük bir kasabaya taşındı. Orada bir ilkokula gittim ve birçok arkadaşım vardı. Her yaz bahçemizdeki ağaçlardan taze meyve yerdik. Babam bana kırmızı bir bisiklet aldı ve her gün okuldan sonra ona binerdim. Bir gün ormanda nadir bir kuş gördüm ve fotoğrafını çektim. O zamanlar hayat çok farklıydı. Akıllı telefonlarımız yoktu ama çok eğlenirdik. O kasabada çok güzel anılar biriktirdim."
    },
    vocabulary: [
        { word: "Primary school", meaning: "İlkokul" },
        { word: "Fresh", meaning: "Taze" },
        { word: "Rode", meaning: "Bindi (bisiklet/at vb.)" },
        { word: "Rare", meaning: "Nadir" },
        { word: "Woods", meaning: "Ormanlık alan" },
        { word: "Different", meaning: "Farklı" },
        { word: "Memories", meaning: "Anılar" }
    ],
    questions: [
        { id: 1, question: "How old was he when they moved?", options: ["Eight", "Ten", "Twelve"], correctAnswer: "Ten" },
        { id: 2, question: "Where was the small town located?", options: ["Near the sea", "In the mountains", "In the city"], correctAnswer: "Near the sea" },
        { id: 3, question: "What did they eat in the summer?", options: ["Pizza", "Fresh fruit", "Ice cream"], correctAnswer: "Fresh fruit" },
        { id: 4, question: "What gift did his father buy?", options: ["A car", "A camera", "A red bicycle"], correctAnswer: "A red bicycle" },
        { id: 5, question: "When did he ride his bicycle?", options: ["Every morning", "Every Sunday", "Every day after school"], correctAnswer: "Every day after school" },
        { id: 6, question: "What did he see in the woods?", options: ["A fox", "A rare bird", "A wolf"], correctAnswer: "A rare bird" },
        { id: 7, question: "What did he take a photo of?", options: ["His friends", "The sea", "The bird"], correctAnswer: "The bird" },
        { id: 8, question: "Did they have smartphones then?", options: ["Yes", "No", "Only some people"], correctAnswer: "No" },
        { id: 9, question: "Was life the same as today?", options: ["Yes", "No, it was different", "Almost the same"], correctAnswer: "No, it was different" },
        { id: 10, question: "Where did he go to school?", options: ["In the city", "In the town", "At home"], correctAnswer: "In the town" }
    ]
};

// Unit 133: At the Restaurant - A Special Evening
const u133: UnitReading = {
    unitId: 133,
    title: "A Night Out with Friends",
    language: "English",
    level: "A2",
    story: {
        text: "Last night, my friends and I decided to try a new Italian restaurant in the city center. The atmosphere was very cozy and the waiters were polite. I ordered a large pepperoni pizza, while my best friend, Sarah, chose the seafood pasta. Everything tasted fresh and delicious. For dessert, we all shared a chocolate cake. When the waiter brought the bill, we noticed that it was quite expensive, but the meal was definitely worth it. We left a generous tip because the service was excellent. We'll certainly return there next month.",
        translation: "Dün gece arkadaşlarım ve ben şehir merkezinde yeni bir İtalyan restoranı denemeye karar verdik. Atmosfer çok samimiydi ve garsonlar nazikti. Ben büyük bir biberli pizza sipariş ettim, en iyi arkadaşım Sarah ise deniz mahsullü makarnayı seçti. Her şey taze ve lezzetliydi. Tatlı olarak hepimiz bir çikolatalı keki paylaştık. Garson hesabı getirdiğinde, epey pahalı olduğunu fark ettik ama yemek kesinlikle buna değerdi. Servis mükemmel olduğu için cömert bir bahşiş bıraktık. Gelecek ay oraya kesinlikle döneceğiz."
    },
    vocabulary: [
        { word: "Atmosphere", meaning: "Atmosfer" },
        { word: "Cozy", meaning: "Samimi / Rahat" },
        { word: "Polite", meaning: "Nazik" },
        { word: "Worth it", meaning: "Değer" },
        { word: "Generous", meaning: "Cömert" },
        { word: "Excellent", meaning: "Mükemmel" },
        { word: "Certainly", meaning: "Kesinlikle" }
    ],
    questions: [
        { id: 1, question: "What kind of restaurant was it?", options: ["French", "Italian", "Turkish"], correctAnswer: "Italian" },
        { id: 2, question: "How was the atmosphere?", options: ["Cold", "Cozy", "Loud"], correctAnswer: "Cozy" },
        { id: 3, question: "What did pepperoni pizza taste like?", options: ["Bad", "Salty", "Delicious"], correctAnswer: "Delicious" },
        { id: 4, question: "What did Sarah order?", options: ["Seafood pasta", "Salad", "Steak"], correctAnswer: "Seafood pasta" },
        { id: 5, question: "What did they have for dessert?", options: ["Fruit salad", "Ice cream", "Chocolate cake"], correctAnswer: "Chocolate cake" },
        { id: 6, question: "Was the bill cheap?", options: ["Yes", "No, quite expensive", "Average"], correctAnswer: "No, quite expensive" },
        { id: 7, question: "Why did they leave a generous tip?", options: ["Because they had extra money", "Service was excellent", "It was a tradition"], correctAnswer: "Service was excellent" },
        { id: 8, question: "Will they return to the restaurant?", options: ["Never", "Maybe next year", "Certainly next month"], correctAnswer: "Certainly next month" },
        { id: 9, question: "Where is the restaurant?", options: ["At the airport", "City center", "In the woods"], correctAnswer: "City center" },
        { id: 10, question: "Was the meal worth the money?", options: ["No", "Yes", "Not sure"], correctAnswer: "Yes" }
    ]
};

// Unit 134: Shopping Day - Finding a Bargain
const u134: UnitReading = {
    unitId: 134,
    title: "The Weekend Shopping Trip",
    language: "English",
    level: "A2",
    story: {
        text: "I went to the shopping mall yesterday because I needed some formal clothes for a job interview. First, I entered a department store and found a classic white shirt. It was on sale for only fifteen pounds! Then, I looked for black trousers. I tried on three different pairs before I found the perfect size. The cashier was very helpful and showed me some matching leather shoes. Although the shoes were expensive, I decided to buy them because the quality was great. I paid by credit card and felt very happy with my new outfit. Shopping can be tiring, but finding a bargain is always satisfying.",
        translation: "Dün alışveriş merkezine gittim çünkü bir iş görüşmesi için resmi kıyafetlere ihtiyacım vardı. Önce bir büyük mağazaya girdim ve klasik beyaz bir gömlek buldum. Sadece on beş pound'a indirimdeydi! Sonra siyah pantolon aradım. Mükemmel bedeni bulmadan önce üç farklı çift denedim. Kasiyer çok yardımcı oldu ve bana uygun deri ayakkabılar gösterdi. Ayakkabılar pahalı olsa da kalitesi harika olduğu için onları almaya karar verdim. Kredi kartıyla ödedim ve yeni kıyafetlerimden dolayı çok mutlu hissettim. Alışveriş yorucu olabilir ama kelepir bir şey bulmak her zaman tatmin edicidir."
    },
    vocabulary: [
        { word: "Department store", meaning: "Büyük mağaza" },
        { word: "Formal clothes", meaning: "Resmi kıyafetler" },
        { word: "On sale", meaning: "İndirimde" },
        { word: "Bargain", meaning: "Kelepir / Ucuz alışveriş" },
        { word: "Outfit", meaning: "Kıyafet kombinasyonu" },
        { word: "Satisfying", meaning: "Tatmin edici" },
        { word: "Matching", meaning: "Uyumlu" }
    ],
    questions: [
        { id: 1, question: "Why did he go to the shopping mall?", options: ["For a party", "For a job interview", "For school"], correctAnswer: "For a job interview" },
        { id: 2, question: "How much was the white shirt?", options: ["Five pounds", "Ten pounds", "Fifteen pounds"], correctAnswer: "Fifteen pounds" },
        { id: 3, question: "What color were the trousers?", options: ["Blue", "Black", "Grey"], correctAnswer: "Black" },
        { id: 4, question: "How many pairs of trousers did he try on?", options: ["One", "Two", "Three"], correctAnswer: "Three" },
        { id: 5, question: "Who was helpful in the store?", options: ["The manager", "The cashier", "A security guard"], correctAnswer: "The cashier" },
        { id: 6, question: "What kind of shoes did he buy?", options: ["Sneakers", "Leather shoes", "Boots"], correctAnswer: "Leather shoes" },
        { id: 7, question: "Why did he buy the expensive shoes?", options: ["They were cheap", "Quality was great", "He liked the color"], correctAnswer: "Quality was great" },
        { id: 8, question: "How did he pay?", options: ["By cash", "By check", "By credit card"], correctAnswer: "By credit card" },
        { id: 9, question: "Was shopping satisfying for him?", options: ["No", "Yes", "Maybe"], correctAnswer: "Yes" },
        { id: 10, question: "Is a bargain an expensive or cheap item?", options: ["Expensive", "Cheap", "Normal price"], correctAnswer: "Cheap" }
    ]
};

// Unit 135: Travel Plans - Going to Spain
const u135: UnitReading = {
    unitId: 135,
    title: "Planning a Dream Vacation",
    language: "English",
    level: "A2",
    story: {
        text: "Next July, I am going to travel to Spain with my family for a two-week vacation. We are very excited! First, we are going to stay in Madrid for three days. My father wants to visit the Prado Museum, and I'm going to watch a football match at the Bernabeu Stadium. After that, we are going to take a fast train to Barcelona. We are going to explore the beautiful architecture and try traditional Spanish food. My mother is going to relax on the beach every afternoon while my brother and I swim in the sea. I'm going to take a lot of photos to share on social media. I think it's going to be the best trip ever!",
        translation: "Gelecek Temmuz'da ailemle birlikte iki haftalık bir tatil için İspanya'ya seyahat edeceğim. Çok heyecanlıyız! Önce üç gün boyunca Madrid'de kalacağız. Babam Prado Müzesi'ni ziyaret etmek istiyor, ben ise Bernabeu Stadyumu'nda bir futbol maçı izleyeceğim. Ondan sonra hızlı trenle Barselona'ya gideceğiz. Güzel mimariyi keşfedeceğiz ve geleneksel İspanyol yemeklerini deneyeceğiz. Annem her öğleden sonra plajda dinlenirken, kardeşim ve ben denizde yüzeceğiz. Sosyal medyada paylaşmak için çok fotoğraf çekeceğim. Sanırım şimdiye kadarki en iyi gezi olacak!"
    },
    vocabulary: [
        { word: "Vacation", meaning: "Tatil" },
        { word: "Architecture", meaning: "Mimari" },
        { word: "Traditional", meaning: "Geleneksel" },
        { word: "Explore", meaning: "Keşfetmek" },
        { word: "Bernabeu Stadium", meaning: "Bernabeu Stadyumu" },
        { word: "Social media", meaning: "Sosyal medya" },
        { word: "Excited", meaning: "Heyecanlı" }
    ],
    questions: [
        { id: 1, question: "When are they going to Spain?", options: ["In June", "In July", "In August"], correctAnswer: "In July" },
        { id: 2, question: "How long is the vacation?", options: ["One week", "Two weeks", "One month"], correctAnswer: "Two weeks" },
        { id: 3, question: "Which city are they visiting first?", options: ["Barcelona", "Valencia", "Madrid"], correctAnswer: "Madrid" },
        { id: 4, question: "Where does the father want to go?", options: ["Bernabeu Stadium", "Prado Museum", "The beach"], correctAnswer: "Prado Museum" },
        { id: 5, question: "What is the narrator going to do in Madrid?", options: ["Visit a museum", "Watch a football match", "Go shopping"], correctAnswer: "Watch a football match" },
        { id: 6, question: "How are they going to travel to Barcelona?", options: ["By bus", "By fast train", "By plane"], correctAnswer: "By fast train" },
        { id: 7, question: "Who is going to relax on the beach?", options: ["The narrator", "The mother", "The brother"], correctAnswer: "The mother" },
        { id: 8, question: "What are the brother and narrator going to do?", options: ["Study", "Cook", "Swim in the sea"], correctAnswer: "Swim in the sea" },
        { id: 9, question: "What will he share on social media?", options: ["Food", "Videos", "Photos"], correctAnswer: "Photos" },
        { id: 10, question: "What food will they try?", options: ["Italian food", "Fast food", "Traditional Spanish food"], correctAnswer: "Traditional Spanish food" }
    ]
};

// Unit 136: Hotel Booking - A Room with a View
const u136: UnitReading = {
    unitId: 136,
    title: "The Ultimate Hotel Experience",
    language: "English",
    level: "A2",
    story: {
        text: "Last night, I successfully made a reservation at a luxury hotel near the Mediterranean coast. I booked a double room with a beautiful sea view for three nights. The receptionist was very professional and sent me a confirmation email immediately. The hotel provides many facilities, including a large swimming pool, a modern gym, and a spa area. Breakfast is included in the price, which is perfect for me. The check-in time is at 2 PM, and check-out is at 11 AM on the last day. I am really looking forward to this holiday because I need some peace and quiet. It's going to be so relaxing!",
        translation: "Dün gece Akdeniz kıyısındaki lüks bir otelde başarıyla rezervasyon yaptım. Üç gece için harika deniz manzaralı çift kişilik bir oda ayırttım. Resepsiyonist çok profesyoneldi ve bana hemen bir onay e-postası gönderdi. Otel, büyük bir yüzme havuzu, modern bir spor salonu ve bir spa alanı gibi birçok olanak sağlıyor. Kahvaltı fiyata dahil, bu benim için mükemmel. Giriş saati öğleden sonra 2'de, çıkış saati ise son gün sabah 11'de. Bir az huzur ve sessizliğe ihtiyacım olduğu için bu tatili gerçekten merakla bekliyorum. Çok rahatlatıcı olacak!"
    },
    vocabulary: [
        { word: "Reservation", meaning: "Rezervasyon" },
        { word: "Confirmation", meaning: "Onay" },
        { word: "Facilities", meaning: "Olanaklar / Tesisler" },
        { word: "Including", meaning: "Dahil" },
        { word: "Looking forward to", meaning: "Merakla/Dört gözle beklemek" },
        { word: "Professional", meaning: "Profesyonel" },
        { word: "Spa area", meaning: "Spa alanı" }
    ],
    questions: [
        { id: 1, question: "Where is the hotel located?", options: ["In the city center", "Near the Mediterranean coast", "At the airport"], correctAnswer: "Near the Mediterranean coast" },
        { id: 2, question: "What type of room did he book?", options: ["Single room", "Double room", "Suite"], correctAnswer: "Double room" },
        { id: 3, question: "How many nights is the stay?", options: ["Two nights", "Three nights", "Four nights"], correctAnswer: "Three nights" },
        { id: 4, question: "What kind of view does the room have?", options: ["City view", "Mountain view", "Sea view"], correctAnswer: "Sea view" },
        { id: 5, question: "What did the receptionist send?", options: ["A passport", "A confirmation email", "A key"], correctAnswer: "A confirmation email" },
        { id: 6, question: "Is breakfast extra or included?", options: ["Extra cost", "Included in the price", "Not available"], correctAnswer: "Included in the price" },
        { id: 7, question: "What time can he check in?", options: ["At 11 AM", "At 2 PM", "At 5 PM"], correctAnswer: "At 2 PM" },
        { id: 8, question: "Does the hotel have a gym?", options: ["Yes, modern", "No", "Only a small one"], correctAnswer: "Yes, modern" },
        { id: 9, question: "What does he need from this holiday?", options: ["Adventure", "Peace and quiet", "Loud music"], correctAnswer: "Peace and quiet" },
        { id: 10, question: "What time is check-out on the last day?", options: ["11 AM", "12 PM", "1 PM"], correctAnswer: "11 AM" }
    ]
};

// Unit 137: At the Airport - Preparing for Flight
const u137: UnitReading = {
    unitId: 137,
    title: "Terminal Stories",
    language: "English",
    level: "A2",
    story: {
        text: "I arrived at the international airport three hours before my flight departure. It was very crowded and busy. First, I went to the airline check-in counter to drop off my suitcase and get my boarding pass. The agent asked for my passport and flight confirmation. Then, I had to pass through security control. They checked my metal items and electronic devices carefully. After security, I visited the duty-free shops to buy some chocolate for my family. Finally, I went to Gate 42 and waited for boarding. The flight was delayed for fifteen minutes, but the plane finally took off at 11:30 AM. It was a long journey, but I enjoyed the clouds through the window.",
        translation: "Uçuşumun kalkışından üç saat önce uluslararası havalimanına vardım. Çok kalabalık ve yoğundu. Önce bavulumu bırakmak ve biniş kartımı almak için havayolu check-in kontuarına gittim. Görevli pasaportumu ve uçuş onayımı istedi. Sonra güvenlik kontrolünden geçmek zorunda kaldım. Metal eşyalarımı ve elektronik cihazlarımı dikkatlice kontrol ettiler. Güvenlikten sonra ailem için çikolata almak üzere duty-free dükkanlarını ziyaret ettim. Sonunda, 42 numaralı kapıya gittim ve biniş için bekledim. Uçuş on beş dakika gecikti ama uçak sonunda 11:30'da havalandı. Uzun bir yolculuktu ama pencereden bulutları izlemekten keyif aldım."
    },
    vocabulary: [
        { word: "Departure", meaning: "Kalkış" },
        { word: "Check-in counter", meaning: "Kayıt/Kontuar masası" },
        { word: "Boarding pass", meaning: "Biniş kartı" },
        { word: "Security control", meaning: "Güvenlik kontrolü" },
        { word: "Duty-free", meaning: "Gümrüksüz satış mağazası" },
        { word: "Delayed", meaning: "Gecikmiş" },
        { word: "Took off", meaning: "Havalandı" }
    ],
    questions: [
        { id: 1, question: "How early did he arrive at the airport?", options: ["One hour early", "Three hours early", "Five hours early"], correctAnswer: "Three hours early" },
        { id: 2, question: "Where did he go first?", options: ["To the gate", "To the check-in counter", "To a restaurant"], correctAnswer: "To the check-in counter" },
        { id: 3, question: "What did he get from the agent?", options: ["A passport", "A boarding pass", "A gift"], correctAnswer: "A boarding pass" },
        { id: 4, question: "What did security check carefully?", options: ["His shoes", "Metal items and electronics", "His pockets"], correctAnswer: "Metal items and electronics" },
        { id: 5, question: "Why did he visit duty-free shops?", options: ["To buy clothes", "To buy chocolate", "To drink coffee"], correctAnswer: "To buy chocolate" },
        { id: 6, question: "Which gate was his flight?", options: ["Gate 12", "Gate 24", "Gate 42"], correctAnswer: "Gate 42" },
        { id: 7, question: "How long was the flight delayed?", options: ["Ten minutes", "Fifteen minutes", "Thirty minutes"], correctAnswer: "Fifteen minutes" },
        { id: 8, question: "What time did the plane take off?", options: ["11:00 AM", "11:15 AM", "11:30 AM"], correctAnswer: "11:30 AM" },
        { id: 9, question: "Did he enjoy the journey?", options: ["No, it was boring", "Yes, he liked the clouds", "He slept all the time"], correctAnswer: "Yes, he liked the clouds" },
        { id: 10, question: "What did he drop off at the counter?", options: ["His bag", "His suitcase", "His phone"], correctAnswer: "His suitcase" }
    ]
};

// Unit 138: At the Doctor - Feeling Unwell
const u138: UnitReading = {
    unitId: 138,
    title: "A Visit to the Doctor",
    language: "English",
    level: "A2",
    story: {
        text: "I woke up yesterday with a terrible headache and a high fever. I also had a sore throat, so I decided to make an appointment with my family doctor. When I reached the clinic, the nurse asked some questions and checked my blood pressure. Then, the doctor examined me. He looked at my throat and listened to my breathing. He told me that I had a seasonal flu. He advised me to rest at home for at least three days and drink plenty of liquids like water and herbal tea. He also gave me a prescription for some painkillers and vitamins. I felt a bit better after talking to him because he was very kind and professional.",
        translation: "Dün korkunç bir baş ağrısı ve yüksek ateşle uyandım. Ayrıca boğazım da ağrıyordu, bu yüzden aile doktorumdan bir randevu almaya karar verdim. Kliniğe ulaştığımda hemşire bazı sorular sordu ve tansiyonumu kontrol etti. Sonra doktor beni muayene etti. Boğazıma baktı ve nefesimi dinledi. Bana mevsimsel grip olduğumu söyledi. Evde en az üç gün dinlenmemi ve su ve bitki çayı gibi bol sıvı tüketmemi tavsiye etti. Ayrıca bana bazı ağrı kesiciler ve vitaminler için reçete verdi. Onunla konuştuktan sonra biraz daha iyi hissettim çünkü çok nazik ve profesyoneldi."
    },
    vocabulary: [
        { word: "Headache", meaning: "Baş ağrısı" },
        { word: "Fever", meaning: "Ateş" },
        { word: "Appointment", meaning: "Randevu" },
        { word: "Blood pressure", meaning: "Tansiyon / Kan basıncı" },
        { word: "Examined", meaning: "Muayene etti" },
        { word: "Flu", meaning: "Grip" },
        { word: "Prescription", meaning: "Reçete" }
    ],
    questions: [
        { id: 1, question: "How did he feel when he woke up?", options: ["Great", "Sick with a headache", "Tired"], correctAnswer: "Sick with a headache" },
        { id: 2, question: "What else besides a headache did he have?", options: ["Stomach ache", "High fever and sore throat", "Cold hands"], correctAnswer: "High fever and sore throat" },
        { id: 3, question: "Who checked his blood pressure?", options: ["The doctor", "The nurse", "The receptionist"], correctAnswer: "The nurse" },
        { id: 4, question: "What did the doctor do during examination?", options: ["Checked eyes", "Listened to breathing", "Checked weight"], correctAnswer: "Listened to breathing" },
        { id: 5, question: "What illness did he have?", options: ["Common cold", "Seasonal flu", "Stomach virus"], correctAnswer: "Seasonal flu" },
        { id: 6, question: "How many days should he rest?", options: ["Only one", "At least three", "A week"], correctAnswer: "At least three" },
        { id: 7, question: "What should he drink according to advice?", options: ["Coffee", "Soda", "Water and herbal tea"], correctAnswer: "Water and herbal tea" },
        { id: 8, question: "What did physician give him?", options: ["Medicine directly", "A prescription", "Nothing"], correctAnswer: "A prescription" },
        { id: 9, question: "How was the doctor's attitude?", options: ["Rude", "Kind and professional", "Boring"], correctAnswer: "Kind and professional" },
        { id: 10, question: "When did he wake up like this?", options: ["This morning", "Yesterday", "Two days ago"], correctAnswer: "Yesterday" }
    ]
};

// Unit 139: At the Pharmacy - Following Instructions
const u139: UnitReading = {
    unitId: 139,
    title: "Getting Medicine at the Local Pharmacy",
    language: "English",
    level: "A2",
    story: {
        text: "After leaving the doctor's office, I went directly to the local pharmacy. I handed my prescription to the pharmacist. He was very helpful and prepared my medicine quickly. He gave me two boxes: one with antibiotics and another with cough syrup. He explained the instructions clearly. I have to take one antibiotic tablet twice a day after meals. The cough syrup is for every six hours if I feel pain. He also warned me about potential side effects like sleepiness. I also bought some vitamin C supplements and a thermometer. I thanked the pharmacist and went home to start my recovery. It is important to follow the instructions exactly.",
        translation: "Doktorun ofisinden ayrıldıktan sonra doğrudan yerel eczaneye gittim. Reçetemi eczacıya verdim. Çok yardımcı oldu ve ilacımı hızlıca hazırladı. Bana iki kutu verdi: biri antibiyotik, diğeri ise öksürük şurubu. Talimatları net bir şekilde açıkladı. Yemeklerden sonra günde iki kez bir antibiyotik tableti almam gerekiyor. Öksürük şurubu, ağrı hissedersem altı saatte bir içilecek. Ayrıca beni uykululuk gibi potansiyel yan etkiler konusunda uyardı. Ayrıca biraz C vitamini takviyesi ve bir termometre aldım. Eczacıya teşekkür ettim ve iyileşme sürecime başlamak için eve gittim. Talimatları aynen takip etmek önemlidir."
    },
    vocabulary: [
        { word: "Pharmacist", meaning: "Eczacı" },
        { word: "Antibiotics", meaning: "Antibiyotikler" },
        { word: "Syrup", meaning: "Şurup" },
        { word: "Instructions", meaning: "Talimatlar" },
        { word: "Side effects", meaning: "Yan etkiler" },
        { word: "Recovery", meaning: "İyileşme süreci" },
        { word: "Thermometer", meaning: "Termometre" }
    ],
    questions: [
        { id: 1, question: "Where did he go after the doctor?", options: ["Home", "Pharmacy", "Work"], correctAnswer: "Pharmacy" },
        { id: 2, question: "Who prepared the medicine?", options: ["The doctor", "The pharmacist", "The nurse"], correctAnswer: "The pharmacist" },
        { id: 3, question: "How many boxes of medicine did he get?", options: ["One", "Two", "Three"], correctAnswer: "Two" },
        { id: 4, question: "How often should he take the antibiotic?", options: ["Once a day", "Twice a day", "Three times a day"], correctAnswer: "Twice a day" },
        { id: 5, question: "When should he take the antibiotic tablet?", options: ["Before meals", "After meals", "Anytime"], correctAnswer: "After meals" },
        { id: 6, question: "What is the cough syrup for?", options: ["For sleep", "For pain/cough", "For vitamins"], correctAnswer: "For pain/cough" },
        { id: 7, question: "What was a potential side effect?", options: ["Hunger", "Sleepiness", "Excitement"], correctAnswer: "Sleepiness" },
        { id: 8, question: "What accessory did he buy?", options: ["Bandage", "Thermometer", "Spoon"], correctAnswer: "Thermometer" },
        { id: 9, question: "Is it important to follow instructions?", options: ["Yes", "No", "Depends"], correctAnswer: "Yes" },
        { id: 10, question: "Did the pharmacist explain clearly?", options: ["No", "Yes", "Only a little"], correctAnswer: "Yes" }
    ]
};

// Unit 140: Jobs and Professions - A Day at Work
const u140: UnitReading = {
    unitId: 140,
    title: "A Day in the Life of an Engineer",
    language: "English",
    level: "A2",
    story: {
        text: "My cousin, Mike, works as a civil engineer for a big construction company. His job is very interesting but challenging. He usually starts his day early at 8 AM. Every morning, he wears a hard hat and visits the construction site to check the progress. He communicates with the workers and ensures everything is safe. In the afternoon, he works in the office. He designs new projects on his computer and writes detailed reports. He often has meetings with architects and clients. Although he works long hours, he earns a high salary and loves his profession. He believes that building bridges and houses is very important for the city.",
        translation: "Kuzenim Mike, büyük bir inşaat şirketi için inşaat mühendisi olarak çalışıyor. İşi çok ilginç ama zorlayıcı. Genellikle gününe sabah erken saat 8'de başlıyor. Her sabah baretini takıyor ve ilerlemeyi kontrol etmek için inşaat alanını ziyaret ediyor. İşçilerle iletişim kuruyor ve her şeyin güvenli olduğundan emin oluyor. Öğleden sonra ofiste çalışıyor. Bilgisayarında yeni projeler tasarlıyor ve detaylı raporlar yazıyor. Sıklıkla mimarlar ve müşterilerle toplantıları oluyor. Uzun saatler çalışsa da yüksek maaş alıyor ve mesleğini seviyor. Köprüler ve evler inşa etmenin şehir için çok önemli olduğuna inanıyor."
    },
    vocabulary: [
        { word: "Civil engineer", meaning: "İnşaat mühendisi" },
        { word: "Construction company", meaning: "İnşaat şirketi" },
        { word: "Hard hat", meaning: "Baret / Kask" },
        { word: "Progress", meaning: "İlerleme" },
        { word: "Ensures", meaning: "Emin olur / Garanti eder" },
        { word: "Profession", meaning: "Meslek" },
        { word: "Salary", meaning: "Maaş" }
    ],
    questions: [
        { id: 1, question: "What is Mike's job?", options: ["Architect", "Civil engineer", "Worker"], correctAnswer: "Civil engineer" },
        { id: 2, question: "What time does he start his day?", options: ["7 AM", "8 AM", "9 AM"], correctAnswer: "8 AM" },
        { id: 3, question: "What does he wear at the construction site?", options: ["A suit", "A hard hat", "Casual clothes"], correctAnswer: "A hard hat" },
        { id: 4, question: "Who does he communicate with at the site?", options: ["Clients", "The workers", "Architects"], correctAnswer: "The workers" },
        { id: 5, question: "What does he ensure at the site?", options: ["Food for workers", "Safety", "Music"], correctAnswer: "Safety" },
        { id: 6, question: "Where does he work in the afternoon?", options: ["At home", "In the office", "Outside"], correctAnswer: "In the office" },
        { id: 7, question: "What does he design on his computer?", options: ["Videos", "Games", "New projects"], correctAnswer: "New projects" },
        { id: 8, question: "Who does he have meetings with?", options: ["Farmers", "Architects and clients", "Drivers"], correctAnswer: "Architects and clients" },
        { id: 9, question: "Does he earn a high salary?", options: ["No", "Yes", "Average"], correctAnswer: "Yes" },
        { id: 10, question: "What does he think about building houses?", options: ["It's boring", "It's important", "It's easy"], correctAnswer: "It's important" }
    ]
};

// Unit 141: Job Interview - The First Step
const u141: UnitReading = {
    unitId: 141,
    title: "Preparing for the Big Interview",
    language: "English",
    level: "A2",
    story: {
        text: "Today was a very important day for me because I had a job interview at a global marketing agency. I woke up early and wore my charcoal grey suit to look professional. I arrived at the office ten minutes before the scheduled time. When the interviewer, Ms. Thompson, called my name, I felt a bit nervous, but I tried to stay calm. She asked about my previous work experience and my technical skills. I explained that I am a hardworking person and always eager to learn new things. She also asked why I wanted to work for their company specifically. After thirty minutes, the interview ended. She smiled and said they would contact me by next Friday. I really hope I get this position!",
        translation: "Bugün benim için çok önemli bir gündü çünkü küresel bir pazarlama ajansında iş görüşmem vardı. Erken uyandım ve profesyonel görünmek için kurşuni gri takımımı giydim. Ofise randevu saatinden on dakika önce vardım. Görüşmeci Bayan Thompson adımı çağırdığında biraz gergin hissettim ama sakin kalmaya çalıştım. Önceki iş deneyimim ve teknik becerilerim hakkında sorular sordu. Çalışkan bir insan olduğumu ve her zaman yeni şeyler öğrenmeye istekli olduğumu açıkladım. Ayrıca neden özellikle onların şirketi için çalışmak istediğimi sordu. Otuz dakika sonra görüşme sona erdi. Gülümsedi ve gelecek Cuma'ya kadar benimle iletişime geçeceklerini söyledi. Gerçekten bu pozisyonu almayı umuyorum!"
    },
    vocabulary: [
        { word: "Global", meaning: "Küresel / Dünya çapında" },
        { word: "Scheduled time", meaning: "Planlanan zaman" },
        { word: "Nervous", meaning: "Gergin" },
        { word: "Eager", meaning: "İstekli" },
        { word: "Specifically", meaning: "Özellikle" },
        { word: "Contact", meaning: "İletişime geçmek" },
        { word: "Position", meaning: "Pozisyon / Mevki" }
    ],
    questions: [
        { id: 1, question: "What kind of company did he have an interview with?", options: ["A hospital", "A marketing agency", "A school"], correctAnswer: "A marketing agency" },
        { id: 2, question: "What clothes did he wear?", options: ["Jeans and a t-shirt", "A charcoal grey suit", "Casual clothes"], correctAnswer: "A charcoal grey suit" },
        { id: 3, question: "How early did he arrive?", options: ["Five minutes", "Ten minutes", "Twenty minutes"], correctAnswer: "Ten minutes" },
        { id: 4, question: "How did he feel when his name was called?", options: ["Happy", "Angry", "A bit nervous"], correctAnswer: "A bit nervous" },
        { id: 5, question: "Who was the interviewer?", options: ["Mr. Smith", "Ms. Thompson", "Mike"], correctAnswer: "Ms. Thompson" },
        { id: 6, question: "What did the narrator discuss regarding his personality?", options: ["He is lazy", "He is hardworking", "He is funny"], correctAnswer: "He is hardworking" },
        { id: 7, question: "How long did the interview last?", options: ["Ten minutes", "Twenty minutes", "Thirty minutes"], correctAnswer: "Thirty minutes" },
        { id: 8, question: "When will the company contact him?", options: ["Tomorrow", "By next Friday", "Next month"], correctAnswer: "By next Friday" },
        { id: 9, question: "Did the interviewer smile at the end?", options: ["Yes", "No", "She was angry"], correctAnswer: "Yes" },
        { id: 10, question: "Does he want the job?", options: ["No", "Yes", "He is not sure"], correctAnswer: "Yes" }
    ]
};

// Unit 142: Phone Call - Solving Problems
const u142: UnitReading = {
    unitId: 142,
    title: "A Frustrating Morning with Customer Service",
    language: "English",
    level: "A2",
    story: {
        text: "I had a very frustrating morning because my home internet suddenly stopped working. I called the customer service department of my provider. First, an automated voice told me to press 1 for English and then 3 for technical support. I had to wait on hold for almost fifteen minutes while listening to some boring music. Finally, a representative named David answered my call. I explained the situation and told him that I needed the internet for my online meetings. He asked for my account number and the serial number of my router. After checking the system, he discovered that there was a signal problem in my neighborhood. He fixed it remotely within five minutes. I was very relieved when the connection returned. I thanked him and hung up.",
        translation: "Evimdeki internet aniden çalışmayı durdurduğu için çok sinir bozucu bir sabah geçirdim. Sağlayıcımın müşteri hizmetleri departmanını aradım. Önce otomatik bir ses İngilizce için 1'e, ardından teknik destek için 3'e basmamı söyledi. Bazı sıkıcı müzikler dinlerken neredeyse on beş dakika beklemede kalmak zorunda kaldım. Sonunda David adında bir temsilci aramama cevap verdi. Durumu açıkladım ve çevrimiçi toplantılarım için internete ihtiyacım olduğunu söyledim. Hesap numaramı ve modemimin seri numarasını istedi. Sistemi kontrol ettikten sonra mahallemde bir sinyal sorunu olduğunu keşfetti. Sorunu beş dakika içinde uzaktan çözdü. Bağlantı geri geldiğinde çok rahatladım. Ona teşekkür ettim ve kapattım."
    },
    vocabulary: [
        { word: "Frustrating", meaning: "Sinir bozucu / Hayal kırıklığına uğratan" },
        { word: "Provider", meaning: "Sağlayıcı" },
        { word: "Automated voice", meaning: "Otomatik ses" },
        { word: "On hold", meaning: "Beklemede" },
        { word: "Representative", meaning: "Temsilci" },
        { word: "Router", meaning: "Modem / Yönlendirici" },
        { word: "Relieved", meaning: "Rahatlamış" }
    ],
    questions: [
        { id: 1, question: "Why was the morning frustrating?", options: ["No water", "Internet stopped working", "Phone was lost"], correctAnswer: "Internet stopped working" },
        { id: 2, question: "Which button did he press for technical support?", options: ["1", "2", "3"], correctAnswer: "3" },
        { id: 3, question: "How long did he wait on hold?", options: ["Five minutes", "Ten minutes", "Almost fifteen minutes"], correctAnswer: "Almost fifteen minutes" },
        { id: 4, question: "What was he listening to while waiting?", options: ["News", "Boring music", "A podcast"], correctAnswer: "Boring music" },
        { id: 5, question: "What was the name of the representative?", options: ["David", "Mike", "Sarah"], correctAnswer: "David" },
        { id: 6, question: "Why did he need the internet urgently?", options: ["To play games", "For online meetings", "To watch movies"], correctAnswer: "For online meetings" },
        { id: 7, question: "What information did David ask for?", options: ["Address", "Account and serial numbers", "Credit card number"], correctAnswer: "Account and serial numbers" },
        { id: 8, question: "Where was the actual problem?", options: ["In his computer", "In his neighborhood", "In the office"], correctAnswer: "In his neighborhood" },
        { id: 9, question: "How long did it take to fix the problem remotely?", options: ["Five minutes", "One hour", "A whole day"], correctAnswer: "Five minutes" },
        { id: 10, question: "How did he feel after the internet returned?", options: ["Angry", "Relieved", "Tired"], correctAnswer: "Relieved" }
    ]
};

// Unit 143: Writing an Email - Business Communication
const u143: UnitReading = {
    unitId: 143,
    title: "The Professional Email",
    language: "English",
    level: "A2",
    story: {
        text: "Writing a professional email is an essential skill in modern business. This morning, I had to write an important email to a new client from Canada. I started with a formal greeting: 'Dear Mr. Henderson'. In the first paragraph, I explained the purpose of my message. I invited him to a video conference next Wednesday to discuss our new project. I also attached a PDF document containing the price list and the schedule. Before sending it, I checked my spelling and grammar very carefully to avoid mistakes. I ended the email with 'Best regards' and my full name and job title. I clicked the 'send' button and waited for his reply. Communication is much faster with emails, but we must stay professional.",
        translation: "Profesyonel bir e-posta yazmak, modern iş dünyasında temel bir beceridir. Bu sabah, Kanada'dan yeni bir müşteriye önemli bir e-posta yazmam gerekiyordu. Resmi bir selamlamayla başladım: 'Sayın Bay Henderson'. İlk paragrafta, mesajımın amacını açıkladım. Onu yeni projemizi tartışmak üzere önümüzdeki Çarşamba günü bir video konferansa davet ettim. Ayrıca fiyat listesini ve programı içeren bir PDF belgesi ekledim. Göndermeden önce, hatalardan kaçınmak için yazım ve dilbilgisini çok dikkatli bir şekilde kontrol ettim. E-postayı 'Saygılarımla', tam adım ve iş unvanımla bitirdim. 'Gönder' düğmesine tıkladım ve cevabını bekledim. E-postalarla iletişim çok daha hızlıdır, ancak profesyonel kalmalıyız."
    },
    vocabulary: [
        { word: "Essential", meaning: "Temel / Çok önemli" },
        { word: "Greeting", meaning: "Selamlama" },
        { word: "Purpose", meaning: "Amaç" },
        { word: "Attached", meaning: "Eklendi" },
        { word: "Schedule", meaning: "Program / Takvim" },
        { word: "Avoid", meaning: "Kaçınmak" },
        { word: "Job title", meaning: "İş unvanı" }
    ],
    questions: [
        { id: 1, question: "Where is the new client from?", options: ["USA", "Canada", "UK"], correctAnswer: "Canada" },
        { id: 2, question: "How did he start the email?", options: ["Hi!", "Dear Mr. Henderson", "Hello world"], correctAnswer: "Dear Mr. Henderson" },
        { id: 3, question: "What is the purpose of the email?", options: ["A party invitation", "A video conference", "A complaint"], correctAnswer: "A video conference" },
        { id: 4, question: "When is the meeting scheduled?", options: ["This Monday", "Next Wednesday", "Next Friday"], correctAnswer: "Next Wednesday" },
        { id: 5, question: "What type of file did he attach?", options: ["A photo", "A PDF document", "A video"], correctAnswer: "A PDF document" },
        { id: 6, question: "What did the attached file contain?", options: ["Only photos", "Price list and schedule", "Bank details"], correctAnswer: "Price list and schedule" },
        { id: 7, question: "What did he check before sending?", options: ["The time", "Spelling and grammar", "His phone"], correctAnswer: "Spelling and grammar" },
        { id: 8, question: "How did he end the email?", options: ["Bye!", "Best regards", "See you"], correctAnswer: "Best regards" },
        { id: 9, question: "Is email communication fast or slow?", options: ["Fast", "Slow", "Very slow"], correctAnswer: "Fast" },
        { id: 10, question: "Did he add his job title?", options: ["No", "Yes", "He forgot"], correctAnswer: "Yes" }
    ]
};

// Unit 144: Feelings and Emotions - An Emotional Day
const u144: UnitReading = {
    unitId: 144,
    title: "Ups and Downs of a Birthday",
    language: "English",
    level: "A2",
    story: {
        text: "Yesterday was my 25th birthday, and it was a day full of mixed emotions. In the morning, I felt extremely happy and surprised because my roommates decorated the living room with colorful balloons and banners. They even prepared a delicious breakfast for me! I felt so loved. However, in the afternoon, I felt a little disappointed and sad because my parents couldn't travel to my city due to a heavy snowstorm. I missed them very much. Luckily, we had a video call in the evening, and seeing their faces made me feel much better. Finally, my friends organized a surprise dinner at a local Italian place. I was so excited and surprised! Overall, it was a memorable day with many happy tears.",
        translation: "Dün 25. yaş günümdü ve karışık duygularla dolu bir gündü. Sabah, oda arkadaşlarım oturma odasını renkli balonlar ve afişlerle süslediği için kendimi son derece mutlu ve şaşırmış hissettim. Hatta benim için lezzetli bir kahvaltı hazırladılar! Çok sevildiğimi hissettim. Ancak öğleden sonra, yoğun bir kar fırtınası nedeniyle ailem şehrime seyahat edemediği için biraz hayal kırıklığına uğramış ve üzgün hissettim. Onları çok özledim. Şans eseri akşam görüntülü görüşme yaptık ve yüzlerini görmek beni çok daha iyi hissettirdi. Son olarak, arkadaşlarım yerel bir İtalyan mekanında sürpriz bir akşam yemeği düzenlediler. Çok heyecanlandım ve şaşırdım! Genel olarak, birçok mutlu gözyaşının olduğu unutulmaz bir gündü."
    },
    vocabulary: [
        { word: "Mixed emotions", meaning: "Karışık duygular" },
        { word: "Decorated", meaning: "Süsledi" },
        { word: "Disappointed", meaning: "Hayal kırıklığına uğramış" },
        { word: "Snowstorm", meaning: "Kar fırtınası" },
        { word: "Luckily", meaning: "Şans eseri / Neyse ki" },
        { word: "Organized", meaning: "Düzenledi" },
        { word: "Memorable", meaning: "Unutulmaz" }
    ],
    questions: [
        { id: 1, question: "How old did the narrator turn?", options: ["20", "25", "30"], correctAnswer: "25" },
        { id: 2, question: "Why was he happy in the morning?", options: ["Good weather", "Roommates decorated the room", "He found money"], correctAnswer: "Roommates decorated the room" },
        { id: 3, question: "What did the roommates prepare?", options: ["Dinner", "A cake", "A delicious breakfast"], correctAnswer: "A delicious breakfast" },
        { id: 4, question: "Why did he feel disappointed in the afternoon?", options: ["He lost his phone", "Parents couldn't come", "No gifts"], correctAnswer: "Parents couldn't come" },
        { id: 5, question: "What was the reason for the travel problem?", options: ["Rain", "Heavy snowstorm", "Wind"], correctAnswer: "Heavy snowstorm" },
        { id: 6, question: "How did he talk to his parents?", options: ["With a letter", "Via video call", "In person"], correctAnswer: "Via video call" },
        { id: 7, question: "How did he feel after the call?", options: ["Worse", "Sad", "Much better"], correctAnswer: "Much better" },
        { id: 8, question: "Where did they have the surprise dinner?", options: ["At home", "At a local Italian place", "At the park"], correctAnswer: "At a local Italian place" },
        { id: 9, question: "Was he expecting the dinner?", options: ["Yes", "No, it was a surprise", "Maybe"], correctAnswer: "No, it was a surprise" },
        { id: 10, question: "Was the day memorable?", options: ["No, it was boring", "Yes, with happy tears", "He forgot it quickly"], correctAnswer: "Yes, with happy tears" }
    ]
};

// Unit 145: Character and Personality - My Unique Family
const u145: UnitReading = {
    unitId: 145,
    title: "Diverse Personalities in One House",
    language: "English",
    level: "A2",
    story: {
        text: "Everyone in my family has a very different and unique personality. My older sister, Clara, is extremely hardworking and ambitious. She works as a lawyer and studies even on weekends. On the other hand, my younger brother, Leo, is very creative but a bit lazy. He loves painting but often forgets to clean his room. My father is the most generous person I know; he always helps the neighbors and gives money to charity. My mother is quite shy with strangers, but she is very talkative and funny when she is with family. As for me, I think I am an honest and reliable person. Although we are all different, we respect each other and live happily together.",
        translation: "Ailemdeki herkesin çok farklı ve benzersiz bir kişiliği var. Ablam Clara son derece çalışkan ve hırslıdır. Avukat olarak çalışıyor ve hafta sonları bile ders çalışıyor. Öte yandan, küçük kardeşim Leo çok yaratıcı ama biraz tembeldir. Resim yapmayı seviyor ama sık sık odasını temizlemeyi unutuyor. Babam tanıdığım en cömert insandır; her zaman komşulara yardım eder ve hayır kurumlarına para verir. Annem yabancılara karşı oldukça utangaçtır ama ailesiyle birlikteyken çok konuşkan ve komiktir. Bana gelince, dürüst ve güvenilir bir insan olduğumu düşünüyorum. Hepimiz farklı olsak da birbirimize saygı duyuyoruz ve birlikte mutlu yaşıyoruz."
    },
    vocabulary: [
        { word: "Unique", meaning: "Benzersiz / Eşsiz" },
        { word: "Ambitious", meaning: "Hırslı" },
        { word: "Creative", meaning: "Yaratıcı" },
        { word: "Charity", meaning: "Hayır kurumu" },
        { word: "Strangers", meaning: "Yabancılar" },
        { word: "Talkative", meaning: "Konuşkan" },
        { word: "Reliable", meaning: "Güvenilir" }
    ],
    questions: [
        { id: 1, question: "What is Clara's job?", options: ["Doctor", "Lawyer", "Teacher"], correctAnswer: "Lawyer" },
        { id: 2, question: "How would you describe Clara's personality?", options: ["Lazy", "Hardworking and ambitious", "Shy"], correctAnswer: "Hardworking and ambitious" },
        { id: 3, question: "Does Leo like painting?", options: ["No", "Yes", "He hates it"], correctAnswer: "Yes" },
        { id: 4, question: "What is Leo's negative trait?", options: ["He is rude", "He is a bit lazy", "He is too loud"], correctAnswer: "He is a bit lazy" },
        { id: 5, question: "Who is the most generous person?", options: ["The father", "Clara", "Leo"], correctAnswer: "The father" },
        { id: 6, question: "What does the father do for others?", options: ["Gives advice", "Helps neighbors and charity", "Buys gifts"], correctAnswer: "Helps neighbors and charity" },
        { id: 7, question: "How is the mother with strangers?", options: ["Funny", "Talkative", "Quite shy"], correctAnswer: "Quite shy" },
        { id: 8, question: "When is the mother talkative and funny?", options: ["With friends", "With family", "At work"], correctAnswer: "With family" },
        { id: 9, question: "What does the narrator think about himself?", options: ["Lazy", "Funny", "Honest and reliable"], correctAnswer: "Honest and reliable" },
        { id: 10, question: "Do the family members respect each other?", options: ["No", "Yes", "Sometimes"], correctAnswer: "Yes" }
    ]
};

// Unit 146: Sports and Health - The Annual Sports Day
const u146: UnitReading = {
    unitId: 146,
    title: "Competition and Team Spirit",
    language: "English",
    level: "A2",
    story: {
        text: "Our university organized the annual sports day last Saturday. It was a day full of energy and competition. I decided to participate in three different events. First, I entered the 400-meter race. Although I started well, I finished in fourth place. After that, I joined my department's basketball team. We played against the engineering department and won the match with a score of 52-48. It was a very close and exciting game! Finally, I tried the high jump for the first time. I didn't win a medal, but I was proud of myself for trying a new sport. Most students attended the event, and the atmosphere was fantastic. Staying active through sports is not only good for health but also for building new friendships.",
        translation: "Geçen Cumartesi üniversitemiz yıllık spor gününü düzenledi. Enerji ve rekabet dolu bir gündü. Üç farklı etkinliğe katılmaya karar verdim. İlk olarak 400 metre koşusuna girdim. İyi başlasam da dördüncü sırada bitirdim. Ondan sonra bölümümün basketbol takımına katıldım. Mühendislik bölümüne karşı oynadık ve maçı 52-48'lik bir skorla kazandık. Çok çekişmeli ve heyecan verici bir maçtı! Son olarak ilk kez yüksek atlamayı denedim. Madalya kazanamadım ama yeni bir spor denediğim için kendimle gurur duydum. Öğrencilerin çoğu etkinliğe katıldı ve atmosfer harikaydı. Spor yoluyla aktif kalmak sadece sağlık için değil, aynı zamanda yeni arkadaşlıklar kurmak için de iyidir."
    },
    vocabulary: [
        { word: "Annual", meaning: "Yıllık" },
        { word: "Competition", meaning: "Rekabet / Yarışma" },
        { word: "Participate", meaning: "Katılmak" },
        { word: "Against", meaning: "Karşı" },
        { word: "Score", meaning: "Skor" },
        { word: "Medal", meaning: "Madalya" },
        { word: "Spirit", meaning: "Ruh" }
    ],
    questions: [
        { id: 1, question: "When was the sports day?", options: ["Last Friday", "Last Saturday", "Last Sunday"], correctAnswer: "Last Saturday" },
        { id: 2, question: "How many events did he participate in?", options: ["Two", "Three", "Four"], correctAnswer: "Three" },
        { id: 3, question: "What place did he finish in the 400-meter race?", options: ["First", "Second", "Fourth"], correctAnswer: "Fourth" },
        { id: 4, question: "Which team did the narrator's department play against?", options: ["Medicine", "Engineering", "Arts"], correctAnswer: "Engineering" },
        { id: 5, question: "What was the basketball score?", options: ["50-50", "52-48", "60-40"], correctAnswer: "52-48" },
        { id: 6, question: "Did they win the basketball match?", options: ["No", "Yes", "It was a draw"], correctAnswer: "Yes" },
        { id: 7, question: "What new sport did he try for the first time?", options: ["Swimming", "High jump", "Tennis"], correctAnswer: "High jump" },
        { id: 8, question: "Did he win a medal in high jump?", options: ["Yes", "No", "Maybe"], correctAnswer: "No" },
        { id: 9, question: "How many students attended?", options: ["A few", "Half of them", "Most students"], correctAnswer: "Most students" },
        { id: 10, question: "What is sport good for according to the text?", options: ["Only health", "Health and building friendships", "Winning money"], correctAnswer: "Health and building friendships" }
    ]
};

// Unit 147: Music and Entertainment - The Jazz Festival
const u147: UnitReading = {
    unitId: 147,
    title: "A Magical Night with Music",
    language: "English",
    level: "A2",
    story: {
        text: "Music is a universal language that brings people together. Last weekend, I attended an international jazz festival held in an old park. The venue was decorated with fairy lights, which created a magical environment. My favorite jazz band from New Orleans was the main act of the night. The lead singer had an incredible voice and played the trumpet beautifully. The crowd was very diverse, and everyone was dancing and clapping their hands. The festival also offered various food stalls selling international snacks. I bought a souvenir t-shirt and took many videos of the performance. Listening to live music under the stars was an unforgettable experience. I can't wait for next year's festival!",
        translation: "Müzik, insanları bir araya getiren evrensel bir dildir. Geçen hafta sonu, eski bir parkta düzenlenen uluslararası bir caz festivaline katıldım. Mekan, büyülü bir ortam yaratan peri ışıklarıyla süslenmişti. New Orleans'tan gelen en sevdiğim caz grubu gecenin ana grubuydu. Solistin inanılmaz bir sesi vardı ve trompeti harika çalıyordu. Kalabalık çok çeşitliydi ve herkes dans ediyor, el çırpıyordu. Festivalde ayrıca uluslararası atıştırmalıklar satan çeşitli yemek stantları da vardı. Hatıra bir tişört aldım ve performansın birçok videosunu çektim. Yıldızların altında canlı müzik dinlemek unutulmaz bir deneyimdi. Gelecek yılki festivali sabırsızlıkla bekliyorum!"
    },
    vocabulary: [
        { word: "Universal", meaning: "Evrensel" },
        { word: "Held", meaning: "Düzenlendi" },
        { word: "Incredible", meaning: "İnanılmaz" },
        { word: "Crowd", meaning: "Kalabalık" },
        { word: "Stall", meaning: "Tezgah / Stant" },
        { word: "Souvenir", meaning: "Hediyelik eşya" },
        { word: "Unforgettable", meaning: "Unutulmaz" }
    ],
    questions: [
        { id: 1, question: "Where was the jazz festival held?", options: ["In a stadium", "In an old park", "In a theater"], correctAnswer: "In an old park" },
        { id: 2, question: "How was the venue decorated?", options: ["With flowers", "With fairy lights", "With paintings"], correctAnswer: "With fairy lights" },
        { id: 3, question: "Where was the favorite jazz band from?", options: ["New York", "Chicago", "New Orleans"], correctAnswer: "New Orleans" },
        { id: 4, question: "What instrument did the lead singer play?", options: ["Guitar", "Drums", "Trumpet"], correctAnswer: "Trumpet" },
        { id: 5, question: "How was the crowd?", options: ["Boring", "Diverse", "Angry"], correctAnswer: "Diverse" },
        { id: 6, question: "What were people doing?", options: ["Sleeping", "Dancing and clapping", "Fighting"], correctAnswer: "Dancing and clapping" },
        { id: 7, question: "What did the food stalls sell?", options: ["Only pizza", "International snacks", "Drinks only"], correctAnswer: "International snacks" },
        { id: 8, question: "What souvenir did he buy?", options: ["A hat", "A t-shirt", "A poster"], correctAnswer: "A t-shirt" },
        { id: 9, question: "Was the experience unforgettable?", options: ["No", "Yes", "He doesn't remember"], correctAnswer: "Yes" },
        { id: 10, question: "What does he wait for now?", options: ["Next week", "Next year's festival", "The end of month"], correctAnswer: "Next year's festival" }
    ]
};

// Unit 148: Movies and TV - The World of Cinema
const u148: UnitReading = {
    unitId: 148,
    title: "Behind the Big Screen",
    language: "English",
    level: "A2",
    story: {
        text: "I am a big fan of science fiction movies, especially those about space exploration and new technologies. Last night, I went to the premiere of a new movie called 'Mars Journey'. The special effects were absolutely stunning and looked very realistic. The plot was quite complex, with many unexpected twists and surprises. The main actor, who is my favorite, gave a brilliant performance. The movie lasted nearly three hours, but I didn't feel bored for a second. After the screening, my friends and I discussed the movie's message at a nearby cafe. We all agreed that it was one of the best movies of the year. Modern cinema is not just about entertainment; it often makes us think about our future.",
        translation: "Bilim kurgu filmlerinin, özellikle de uzay keşfi ve yeni teknolojiler hakkında olanların büyük bir hayranıyım. Dün gece 'Mars Yolculuğu' adlı yeni bir filmin galasına gittim. Özel efektler kesinlikle büyüleyiciydi ve çok gerçekçi görünüyordu. Hikaye akışı, birçok beklenmedik dönüş ve sürprizle oldukça karmaşıktı. En sevdiğim oyuncu olan başrol oyuncusu harika bir performans sergiledi. Film yaklaşık üç saat sürdü ama bir saniye bile sıkılmadım. Gösterimden sonra arkadaşlarım ve ben yakındaki bir kafede filmin mesajını tartıştık. Hepimiz bunun yılın en iyi filmlerinden biri olduğu konusunda hemfikirdik. Modern sinema sadece eğlence değil; sık sık bizi geleceğimiz hakkında düşündürür."
    },
    vocabulary: [
        { word: "Science fiction", meaning: "Bilim kurgu" },
        { word: "Exploration", meaning: "Keşif" },
        { word: "Premiere", meaning: "Gala / İlk gösterim" },
        { word: "Realistic", meaning: "Gerçekçi" },
        { word: "Complex", meaning: "Karmaşık" },
        { word: "Unexpected", meaning: "Beklenmedik" },
        { word: "Screening", meaning: "Gösterim" }
    ],
    questions: [
        { id: 1, question: "What is his favorite movie genre?", options: ["Comedy", "Science fiction", "Horror"], correctAnswer: "Science fiction" },
        { id: 2, question: "What was the name of the new movie?", options: ["Mars Journey", "Space Wars", "New Technology"], correctAnswer: "Mars Journey" },
        { id: 3, question: "How were the special effects?", options: ["Bad", "Boring", "Stunning and realistic"], correctAnswer: "Stunning and realistic" },
        { id: 4, question: "Was the plot simple?", options: ["Yes", "No, it was complex", "It was for kids"], correctAnswer: "No, it was complex" },
        { id: 5, question: "How was the performance of the main actor?", options: ["Bad", "Average", "Brilliant"], correctAnswer: "Brilliant" },
        { id: 6, question: "How long did the movie last?", options: ["One hour", "Two hours", "Nearly three hours"], correctAnswer: "Nearly three hours" },
        { id: 7, question: "Was he bored during the movie?", options: ["Yes", "No", "Only at the end"], correctAnswer: "No" },
        { id: 8, question: "Where did they discuss the movie?", options: ["At home", "At a nearby cafe", "In the cinema"], correctAnswer: "At a nearby cafe" },
        { id: 9, question: "What did the friends agree about?", options: ["The movie was bad", "It was one of the best of the year", "It was too short"], correctAnswer: "It was one of the best of the year" },
        { id: 10, question: "What does cinema make us think about according to the text?", options: ["Past", "Present", "Future"], correctAnswer: "Future" }
    ]
};

// Unit 149: Technology - Our Digital Lives
const u149: UnitReading = {
    unitId: 149,
    title: "Changing the World with Technology",
    language: "English",
    level: "A2",
    story: {
        text: "Technology has changed our daily lives in many positive ways. I bought a new high-end smartphone last month, and it is like a mini-computer in my pocket. It has a high-resolution camera and a very fast processor. I use many helpful applications every day. For example, I use a translation app to learn new English words and a navigation app to find my way around the city. I also use a banking app to pay my bills without going to the bank. Another amazing piece of technology is the smartwatch, which monitors my heart rate and counts my steps. However, we should be careful not to spend too much time on our devices. Balance is very important.",
        translation: "Teknoloji günlük hayatımızı birçok olumlu yönde değiştirdi. Geçen ay yeni bir üst düzey akıllı telefon aldım ve bu cebimdeki minik bir bilgisayar gibi. Yüksek çözünürlüklü bir kamerası ve çok hızlı bir işlemcisi var. Her gün birçok yardımcı uygulama kullanıyorum. Örneğin, yeni İngilizce kelimeler öğrenmek için bir çeviri uygulaması ve şehirde yolumu bulmak için bir navigasyon uygulaması kullanıyorum. Ayrıca faturalarımı bankaya gitmeden ödemek için bir bankacılık uygulaması kullanıyorum. Bir diğer harika teknoloji ürünü ise kalp atışımı takip eden ve adımlarımı sayan akıllı saattir. Ancak, cihazlarımızda çok fazla zaman geçirmemeye dikkat etmeliyiz. Denge çok önemlidir."
    },
    vocabulary: [
        { word: "High-end", meaning: "Üst düzey / Kaliteli" },
        { word: "Resolution", meaning: "Çözünürlük" },
        { word: "Processor", meaning: "İşlemci" },
        { word: "Navigation", meaning: "Navigasyon / Yol bulma" },
        { word: "Monitors", meaning: "İzler / Takip eder" },
        { word: "Devices", meaning: "Cihazlar" },
        { word: "Balance", meaning: "Denge" }
    ],
    questions: [
        { id: 1, question: "When did he buy the new smartphone?", options: ["Yesterday", "Last week", "Last month"], correctAnswer: "Last month" },
        { id: 2, question: "What is the smartphone like according to the text?", options: ["A toy", "A mini-computer", "A TV"], correctAnswer: "A mini-computer" },
        { id: 3, question: "Which app does he use for English words?", options: ["Music app", "Translation app", "Navigation app"], correctAnswer: "Translation app" },
        { id: 4, question: "What does the navigation app help with?", options: ["Cooking", "Finding the way", "Shopping"], correctAnswer: "Finding the way" },
        { id: 5, question: "How does he pay bills?", options: ["Cash", "Checks", "With a banking app"], correctAnswer: "With a banking app" },
        { id: 6, question: "What does his smartwatch monitor?", options: ["Eyes", "Steps and heart rate", "Brain"], correctAnswer: "Steps and heart rate" },
        { id: 7, question: "What counts his steps?", options: ["Smartphone", "Smartwatch", "Shoes"], correctAnswer: "Smartwatch" },
        { id: 8, question: "Should we spend all day on devices?", options: ["Yes", "No", "Maybe"], correctAnswer: "No" },
        { id: 9, question: "Is balance important?", options: ["No", "Yes", "Not sure"], correctAnswer: "Yes" },
        { id: 10, question: "Is the technology mentioned positive or negative?", options: ["Positive", "Negative", "Both"], correctAnswer: "Positive" }
    ]
};

// Unit 150: Social Media - Connecting the World
const u150: UnitReading = {
    unitId: 150,
    title: "The Power of Social Media",
    language: "English",
    level: "A2",
    story: {
        text: "Social media platforms have become the main way we communicate with friends and family. I spend about one hour a day checking my favorite social media accounts. I use Instagram to share photos of my travels and delicious meals. I follow many famous photographers because I want to improve my own skills. I also use Twitter to read the latest global news and follow technology experts. LinkedIn is another important platform for my career; I use it to connect with other professionals in my field. Social media helps us stay connected with people far away, but it can also be a distraction. We should remember to enjoy the real world too.",
        translation: "Sosyal medya platformları, arkadaşlarımızla ve ailemizle iletişim kurmamızın ana yolu haline geldi. Favori sosyal medya hesaplarımı kontrol etmek için günde yaklaşık bir saat geçiriyorum. Seyahatlerimin ve lezzetli yemeklerimin fotoğraflarını paylaşmak için Instagram kullanıyorum. Kendi becerilerimi geliştirmek istediğim için birçok ünlü fotoğrafçıyı takip ediyorum. Ayrıca en son küresel haberleri okumak ve teknoloji uzmanlarını takip etmek için Twitter kullanıyorum. LinkedIn kariyerim için bir başka önemli platform; alanımdaki diğer profesyonellerle bağlantı kurmak için kullanıyorum. Sosyal medya uzaklardaki insanlarla bağlantıda kalmamıza yardımcı olur, ancak bir dikkat dağıtıcı da olabilir. Gerçek dünyanın da tadını çıkarmayı unutmamalıyız."
    },
    vocabulary: [
        { word: "Platform", meaning: "Platform / Ortam" },
        { word: "Main way", meaning: "Ana yol" },
        { word: "Photographer", meaning: "Fotoğrafçı" },
        { word: "Expert", meaning: "Uzman" },
        { word: "Career", meaning: "Kariyer" },
        { word: "Field", meaning: "Alan / Branş" },
        { word: "Distraction", meaning: "Dikkat dağıtıcı" }
    ],
    questions: [
        { id: 1, question: "How much time does he spend on social media daily?", options: ["One hour", "Two hours", "Three hours"], correctAnswer: "One hour" },
        { id: 2, question: "What does he share on Instagram?", options: ["Videos", "Thoughts", "Photos of travels and meals"], correctAnswer: "Photos of travels and meals" },
        { id: 3, question: "Why does he follow famous photographers?", options: ["To buy photos", "To improve his own skills", "To see the world"], correctAnswer: "To improve his own skills" },
        { id: 4, question: "Which app does he use for news?", options: ["Instagram", "Twitter", "Facebook"], correctAnswer: "Twitter" },
        { id: 5, question: "Who does he follow on Twitter?", options: ["Singers", "Actors", "Technology experts"], correctAnswer: "Technology experts" },
        { id: 6, question: "Which platform is for his career?", options: ["Instagram", "Twitter", "LinkedIn"], correctAnswer: "LinkedIn" },
        { id: 7, question: "Who does he connect with on LinkedIn?", options: ["Family", "Professionals in his field", "Old friends"], correctAnswer: "Professionals in his field" },
        { id: 8, question: "What can social media be apart from connection?", options: ["A hobby", "A job", "A distraction"], correctAnswer: "A distraction" },
        { id: 9, question: "Should we forget the real world?", options: ["Yes", "No", "Maybe"], correctAnswer: "No" },
        { id: 10, question: "Does social media help with long distance connection?", options: ["No", "Yes", "Not at all"], correctAnswer: "Yes" }
    ]
};

// Units 151-160
// Unit 151: Moving House - A Fresh Start
const u151: UnitReading = {
    unitId: 151,
    title: "The Big Move to the Suburbs",
    language: "English",
    level: "A2",
    story: {
        text: "Moving to a new house is both exciting and exhausting. Last month, my family finally moved from our small city apartment to a spacious house in the suburbs. The new house has three bright bedrooms, two modern bathrooms, and a large garden with two apple trees. My brother and I were very happy because we finally have our own rooms. We hired professional movers to transport our heavy furniture and delicate boxes. It took us a whole week to unpack everything and organize our new life. The kitchen is my favorite part because it has brand new appliances and a beautiful view of the neighborhood. Now that everything is in its place, it finally feels like a real home. We are planning to have a housewarming party next Saturday!",
        translation: "Yeni bir eve taşınmak hem heyecan verici hem de yorucudur. Geçen ay, ailem nihayet şehirdeki küçük dairemizden banliyödeki ferah bir eve taşındı. Yeni evin üç aydınlık yatak odası, iki modern banyosu ve iki elma ağacı olan büyük bir bahçesi var. Kardeşim ve ben çok mutluyduk çünkü sonunda kendi odalarımıza sahibiz. Ağır mobilyalarımızı ve hassas kutularımızı taşımak için profesyonel nakliyeciler tuttuk. Her şeyi açıp yeni hayatımızı düzene koymak tam bir haftamızı aldı. Mutfak en sevdiğim kısım çünkü yepyeni aletleri ve mahallenin güzel bir manzarası var. Artık her şey yerli yerinde olduğuna göre, nihayet gerçek bir yuva gibi hissettiriyor. Önümüzdeki Cumartesi bir ev görme partisi vermeyi planlıyoruz!"
    },
    vocabulary: [
        { word: "Exhausting", meaning: "Yorucu" },
        { word: "Spacious", meaning: "Ferah / Geniş" },
        { word: "Suburbs", meaning: "Banliyö / Şehir dışı yerleşim" },
        { word: "Delicate", meaning: "Hassas / Narin" },
        { word: "Unpack", meaning: "Paketleri açmak" },
        { word: "Appliances", meaning: "Ev aletleri" },
        { word: "Housewarming", meaning: "Ev görme / Yeni eve taşınma kutlaması" }
    ],
    questions: [
        { id: 1, question: "Where did the family move to?", options: ["A small apartment", "A house in the suburbs", "A farm"], correctAnswer: "A house in the suburbs" },
        { id: 2, question: "How many apple trees are in the garden?", options: ["One", "Two", "Three"], correctAnswer: "Two" },
        { id: 3, question: "Why were the children happy?", options: ["Because of the garden", "Because they have their own rooms", "Because of the apple trees"], correctAnswer: "Because they have their own rooms" },
        { id: 4, question: "Who transported the furniture?", options: ["The father", "Professional movers", "The neighbors"], correctAnswer: "Professional movers" },
        { id: 5, question: "How long did it take to unpack?", options: ["One day", "A whole week", "A month"], correctAnswer: "A whole week" },
        { id: 6, question: "What is the narrator's favorite part of the house?", options: ["The garden", "The kitchen", "The bedroom"], correctAnswer: "The kitchen" },
        { id: 7, question: "What does the kitchen have a view of?", options: ["A park", "The neighborhood", "The city"], correctAnswer: "The neighborhood" },
        { id: 8, question: "Does the house feel like a real home now?", options: ["No", "Yes", "Not yet"], correctAnswer: "Yes" },
        { id: 9, question: "When is the housewarming party?", options: ["Today", "Next Saturday", "Next month"], correctAnswer: "Next Saturday" },
        { id: 10, question: "Is moving described as easy?", options: ["Yes", "No, it's exhausting", "It's boring"], correctAnswer: "No, it's exhausting" }
    ]
};

// Unit 152: The Environment - Our Responsibility
const u152: UnitReading = {
    unitId: 152,
    title: "Protecting Our Planet",
    language: "English",
    level: "A2",
    story: {
        text: "Climate change is one of the biggest challenges for our world today. Due to global warming, temperatures are rising everywhere and ice is melting in the Arctic regions. This causes sea levels to rise, which threatens many coastal cities. To protect our environment, we need to take urgent action. We must reduce air and water pollution by using more renewable energy sources. On a personal level, we can make a difference by recycling paper, plastic, and glass every day. We should also try to use less electricity and avoid wasting water. Planting trees and using public transportation instead of private cars are also great ways to help. If everyone contributes a little, we can create a cleaner and healthier future for the next generations.",
        translation: "İklim değişikliği günümüzde dünyamız için en büyük zorluklardan biridir. Küresel ısınma nedeniyle sıcaklıklar her yerde yükseliyor ve Kuzey Kutbu bölgelerinde buzlar eriyor. Bu durum, birçok kıyı şehrini tehdit eden deniz seviyelerinin yükselmesine neden oluyor. Çevremizi korumak için acil önlem almamız gerekiyor. Daha fazla yenilenebilir enerji kaynağı kullanarak hava ve su kirliliğini azaltmalıyız. Kişisel düzeyde, her gün kağıt, plastik ve camı geri dönüştürerek bir fark yaratabiliriz. Ayrıca daha az elektrik kullanmaya çalışmalı ve su israfından kaçınmalıyız. Ağaç dikmek ve özel arabalar yerine toplu taşımayı kullanmak da yardımcı olmanın harika yollarıdır. Eğer herkes biraz katkıda bulunursa, gelecek nesiller için daha temiz ve sağlıklı bir gelecek yaratabiliriz."
    },
    vocabulary: [
        { word: "Challenge", meaning: "Zorluk / Engel" },
        { word: "Coastal", meaning: "Kıyı / Sahil" },
        { word: "Urgent", meaning: "Acil" },
        { word: "Renewable", meaning: "Yenilenebilir" },
        { word: "Contribute", meaning: "Katkıda bulunmak" },
        { word: "Generations", meaning: "Nesiller / Kuşaklar" },
        { word: "Waste", meaning: "İsraf etmek / Boşa harcamak" }
    ],
    questions: [
        { id: 1, question: "What is one of the biggest challenges today?", options: ["Technology", "Climate change", "Education"], correctAnswer: "Climate change" },
        { id: 2, question: "What is happening in the Arctic regions?", options: ["It is getting colder", "Ice is melting", "More trees are growing"], correctAnswer: "Ice is melting" },
        { id: 3, question: "What does the rise in sea levels threaten?", options: ["Mountains", "Coastal cities", "Deserts"], correctAnswer: "Coastal cities" },
        { id: 4, question: "How can we reduce pollution?", options: ["By using more oil", "By using renewable energy", "By driving more"], correctAnswer: "By using renewable energy" },
        { id: 5, question: "What materials can be recycled according to the text?", options: ["Only plastic", "Only paper", "Paper, plastic, and glass"], correctAnswer: "Paper, plastic, and glass" },
        { id: 6, question: "Should we waste water?", options: ["Yes", "No", "Only on weekends"], correctAnswer: "No" },
        { id: 7, question: "What is better than using private cars?", options: ["Walking", "Public transportation", "Flying"], correctAnswer: "Public transportation" },
        { id: 8, question: "Why should we plant trees?", options: ["To get fruit", "To help the environment", "To build houses"], correctAnswer: "To help the environment" },
        { id: 9, question: "Can personal actions make a difference?", options: ["No", "Yes", "Maybe"], correctAnswer: "Yes" },
        { id: 10, question: "What is the goal for the next generations?", options: ["A richer world", "A cleaner and healthier future", "A faster world"], correctAnswer: "A cleaner and healthier future" }
    ]
};

// Unit 153: News Report - A New Discovery
const u153: UnitReading = {
    unitId: 153,
    title: "Breaking News: Ancient City Discovered",
    language: "English",
    level: "A2",
    story: {
        text: "In today's global news, a team of archaeologists has made an extraordinary discovery in the middle of a dense jungle. They found the ruins of an ancient city that is over two thousand years old. According to the lead archaeologist, Dr. Miller, this city was once a major center for trade and culture. The team discovered beautiful stone temples, colorful pottery, and even some gold jewelry. Experts believe that hundreds of families lived in this area during its golden age. The local government has officially closed the site to protect the artifacts from thieves. Next month, a famous international museum will send a group of specialists to help with the excavation. This discovery will help us understand more about the history of human civilization.",
        translation: "Bugünkü küresel haberlerde, bir grup arkeolog yoğun bir ormanın ortasında olağanüstü bir keşif yaptı. İki bin yıldan daha eski bir antik kentin kalıntılarını buldular. Baş arkeolog Dr. Miller'a göre, bu şehir bir zamanlar ticaret ve kültür için önemli bir merkezdi. Ekip; güzel taş tapınaklar, renkli çömlekler ve hatta bazı altın takılar keşfetti. Uzmanlar, altın çağında bu bölgede yüzlerce ailenin yaşadığına inanıyor. Yerel hükümet, eserleri hırsızlardan korumak için alanı resmen kapattı. Gelecek ay, ünlü bir uluslararası müze, kazıya yardımcı olması için bir grup uzman gönderecek. Bu keşif, insanlık tarihini daha iyi anlamamıza yardımcı olacak."
    },
    vocabulary: [
        { word: "Archaeologist", meaning: "Arkeolog" },
        { word: "Extraordinary", meaning: "Olağanüstü" },
        { word: "Dense jungle", meaning: "Yoğun orman" },
        { word: "Ruins", meaning: "Kalıntılar" },
        { word: "Trade", meaning: "Ticaret" },
        { word: "Excavation", meaning: "Kazı" },
        { word: "Artifacts", meaning: "Tarihi eserler" }
    ],
    questions: [
        { id: 1, question: "Where was the ancient city discovered?", options: ["In a desert", "In a dense jungle", "Under the sea"], correctAnswer: "In a dense jungle" },
        { id: 2, question: "How old is the city?", options: ["100 years", "500 years", "Over 2000 years"], correctAnswer: "Over 2000 years" },
        { id: 3, question: "Who is the lead archaeologist?", options: ["Dr. Miller", "Dr. Smith", "Dr. Jones"], correctAnswer: "Dr. Miller" },
        { id: 4, question: "What was the city a center for?", options: ["War", "Trade and culture", "Sports"], correctAnswer: "Trade and culture" },
        { id: 5, question: "What kind of items did they find?", options: ["Only stones", "Temples, pottery, and gold jewelry", "Cars"], correctAnswer: "Temples, pottery, and gold jewelry" },
        { id: 6, question: "Who lived in this area during the golden age?", options: ["Soldiers", "Only kings", "Hundreds of families"], correctAnswer: "Hundreds of families" },
        { id: 7, question: "Why did the government close the site?", options: ["To build a road", "To protect artifacts from thieves", "To renovate it"], correctAnswer: "To protect artifacts from thieves" },
        { id: 8, question: "Who will send specialists next month?", options: ["A school", "A famous international museum", "A hospital"], correctAnswer: "A famous international museum" },
        { id: 9, question: "What will the specialists help with?", options: ["Building houses", "Excavation", "Selling jewelry"], correctAnswer: "Excavation" },
        { id: 10, question: "Will this help us understand history better?", options: ["Yes", "No", "Maybe"], correctAnswer: "Yes" }
    ]
};

// Unit 154: Traditions - Cultural Heritage
const u154: UnitReading = {
    unitId: 154,
    title: "Celebrating Our Traditions",
    language: "English",
    level: "A2",
    story: {
        text: "Every culture has unique traditions that pass from one generation to another. In my country, the most important tradition is the annual spring festival. During this time, families gather together to celebrate the arrival of warmer weather. We wear traditional clothes with bright colors and embroidery. The highlight of the festival is the street parade, where people play loud music and dance through the city center. We also prepare special foods like spicy stews and sweet honey cakes. In other countries, traditions are different. For example, in Japan, the tea ceremony is a peaceful and respectful ritual with a long history. In Mexico, the Day of the Dead is a colorful celebration to remember ancestors. Although traditions vary, they all help to maintain a sense of community and belonging.",
        translation: "Her kültürün bir nesilden diğerine geçen benzersiz gelenekleri vardır. Benim ülkemde en önemli gelenek yıllık bahar festivalidir. Bu süre zarfında aileler, daha sıcak hava gelişini kutlamak için bir araya gelirler. Parlak renkli ve nakışlı geleneksel kıyafetler giyeriz. Festivalin en önemli anı, insanların yüksek sesle müzik çalıp şehir merkezinde dans ettiği sokak geçididir. Ayrıca baharatlı yahniler ve tatlı ballı kekler gibi özel yemekler hazırlarız. Diğer ülkelerde gelenekler farklıdır. Örneğin, Japonya'da çay töreni, uzun bir geçmişi olan huzurlu ve saygılı bir ritüeldir. Meksika'da Ölüler Günü, ataları anmak için yapılan renkli bir kutlamadır. Gelenekler farklılık gösterse de, hepsi bir topluluk ve aidiyet duygusunun korunmasına yardımcı olur."
    },
    vocabulary: [
        { word: "Heritage", meaning: "Miras / Kültürel miras" },
        { word: "Embroidery", meaning: "Nakış / İşleme" },
        { word: "Highlight", meaning: "En önemli an" },
        { word: "Parade", meaning: "Geçit töreni" },
        { word: "Ritual", meaning: "Ritüel / Tören" },
        { word: "Ancestors", meaning: "Atalar" },
        { word: "Belonging", meaning: "Aidiyet" }
    ],
    questions: [
        { id: 1, question: "What is the most important tradition in the narrator's country?", options: ["A winter party", "A spring festival", "A summer race"], correctAnswer: "A spring festival" },
        { id: 2, question: "What do families celebrate during the festival?", options: ["The end of school", "The arrival of warmer weather", "A new year"], correctAnswer: "The arrival of warmer weather" },
        { id: 3, question: "What kind of clothes do people wear?", options: ["Black and white", "Casual jeans", "Traditional with bright colors and embroidery"], correctAnswer: "Traditional with bright colors and embroidery" },
        { id: 4, question: "What is the highlight of the festival?", options: ["A movie", "The street parade", "A quiet dinner"], correctAnswer: "The street parade" },
        { id: 5, question: "What special foods are mentioned?", options: ["Pizza and burgers", "Spicy stews and honey cakes", "Sandwiches"], correctAnswer: "Spicy stews and honey cakes" },
        { id: 6, question: "How is the tea ceremony in Japan described?", options: ["Loud and fast", "Peaceful and respectful", "Boring"], correctAnswer: "Peaceful and respectful" },
        { id: 7, question: "Where is the 'Day of the Dead' celebrated?", options: ["Japan", "Mexico", "Turkey"], correctAnswer: "Mexico" },
        { id: 8, question: "What is the purpose of the 'Day of the Dead'?", options: ["To find gold", "To remember ancestors", "To buy cakes"], correctAnswer: "To remember ancestors" },
        { id: 9, question: "Do all countries have the same traditions?", options: ["Yes", "No, they vary", "Maybe"], correctAnswer: "No, they vary" },
        { id: 10, question: "What do traditions help to maintain?", options: ["Wealth", "Confusion", "Sense of community and belonging"], correctAnswer: "Sense of community and belonging" }
    ]
};

// Unit 155: Life Experiences - Looking Back
const u155: UnitReading = {
    unitId: 155,
    title: "A Journey of a Thousand Miles",
    language: "English",
    level: "A2",
    story: {
        text: "I have had many wonderful experiences in my life so far. I have traveled to five different countries and met many interesting people from different backgrounds. Two years ago, I visited the Swiss Alps, and I saw snow for the first time in my life! It was a breathtaking view that I will never forget. I have also learned how to cook several international dishes, like Italian lasagna and Thai curry. Recently, I have started learning to play the acoustic guitar. It is difficult, but I have already learned three songs! One of my biggest achievements was finishing a marathon last summer; I trained for six months to reach that goal. All these experiences have shaped my personality and taught me that tryng new things is always worth it.",
        translation: "Hayatımda şimdiye kadar pek çok harika deneyim yaşadım. Beş farklı ülkeye seyahat ettim ve farklı geçmişlere sahip birçok ilginç insanla tanıştım. İki yıl önce İsviçre Alplerini ziyaret ettim ve hayatımda ilk kez kar gördüm! Asla unutamayacağım nefes kesici bir manzaraydı. Ayrıca İtalyan lazanyası ve Tayland köri soslu yemeği gibi çeşitli uluslararası yemekleri pişirmeyi öğrendim. Son zamanlarda akustik gitar çalmayı öğrenmeye başladım. Zor ama şimdiden üç şarkı öğrendim! En büyük başarılarımdan biri geçen yaz bir maratonu bitirmekti; bu hedefe ulaşmak için altı ay boyunca antrenman yaptım. Tüm bu deneyimler kişiliğimi şekillendirdi ve yeni şeyler denemenin her zaman buna değdiğini bana öğretti."
    },
    vocabulary: [
        { word: "Background", meaning: "Geçmiş / Özgeçmiş" },
        { word: "Breathtaking", meaning: "Nefes kesici" },
        { word: "Achievement", meaning: "Başarı" },
        { word: "Shaped", meaning: "Şekillendirdi" },
        { word: "Worth it", meaning: "Buna değer" },
        { word: "Acoustic", meaning: "Akustik" }
    ],
    questions: [
        { id: 1, question: "How many countries has the narrator traveled to?", options: ["Two", "Three", "Five"], correctAnswer: "Five" },
        { id: 2, question: "When did he visit the Swiss Alps?", options: ["Last month", "Two years ago", "Five years ago"], correctAnswer: "Two years ago" },
        { id: 3, question: "What did he see for the first time in the Alps?", options: ["A bird", "Snow", "A lake"], correctAnswer: "Snow" },
        { id: 4, question: "Which dishes has he learned to cook?", options: ["Lasagna and curry", "Sushi and pizza", "Steak and fries"], correctAnswer: "Lasagna and curry" },
        { id: 5, question: "What instrument is he learning to play now?", options: ["Piano", "Violin", "Acoustic guitar"], correctAnswer: "Acoustic guitar" },
        { id: 6, question: "How many songs has he learned on the guitar?", options: ["None", "Three", "Ten"], correctAnswer: "Three" },
        { id: 7, question: "What was one of his biggest achievements?", options: ["Buying a car", "Finishing a marathon", "Learning French"], correctAnswer: "Finishing a marathon" },
        { id: 8, question: "How long did he train for the marathon?", options: ["One month", "Three months", "Six months"], correctAnswer: "Six months" },
        { id: 9, question: "Have these experiences shaped his personality?", options: ["Yes", "No", "He is not sure"], correctAnswer: "Yes" },
        { id: 10, question: "Is trying new things worth it according to the text?", options: ["No", "Always worth it", "Only sometimes"], correctAnswer: "Always worth it" }
    ]
};

// Unit 156: Comparing Cities - My Urban Adventures
const u156: UnitReading = {
    unitId: 156,
    title: "City vs. Countryside",
    language: "English",
    level: "A2",
    story: {
        text: "Choosing where to live is a very important decision. Some people prefer the vibrant life of a city, while others like the peace of the countryside. Living in a city like New York is much more exciting than living in a small village because there are many theaters, museums, and shopping malls. However, cities are often nosier and more polluted than rural areas. On the other hand, the countryside is much quieter and healthier due to the fresh air and many trees. Life in a small town is also cheaper than in a major city; rent and food prices are usually lower. I think cities are better for young professionals who want to build a career, but the countryside is more suitable for families with children who want a safe environment. Personally, I like visiting the city but I prefer living in a quiet town.",
        translation: "Nerede yaşayacağını seçmek çok önemli bir karardır. Bazı insanlar bir şehrin canlı hayatını tercih ederken, diğerleri kırsalın huzurunu severler. New York gibi bir şehirde yaşamak, bir köyde yaşamaktan çok daha heyecan vericidir çünkü birçok tiyatro, müze ve alışveriş merkezi vardır. Ancak şehirler genellikle kırsal alanlardan daha gürültülü ve daha kirlidir. Öte yandan, kırsal kesim temiz hava ve çok sayıda ağaç nedeniyle çok daha sessiz ve sağlıklıdır. Küçük bir kasabada yaşam da büyük bir şehirden daha ucuzdur; kira ve yemek fiyatları genellikle daha düşüktür. Bence şehirler kariyer yapmak isteyen genç profesyoneller için daha iyi, ancak kırsal kesim güvenli bir ortam isteyen çocuklu aileler için daha uygundur. Şahsen, şehri ziyaret etmeyi seviyorum ama sessiz bir kasabada yaşamayı tercih ediyorum."
    },
    vocabulary: [
        { word: "Vibrant", meaning: "Canlı / Hareketli" },
        { word: "Rural", meaning: "Kırsal" },
        { word: "Noisier", meaning: "Daha gürültülü" },
        { word: "Lower", meaning: "Daha düşük" },
        { word: "Suitable", meaning: "Uygun / Elverişli" },
        { word: "Professional", meaning: "Profesyonel / Uzman" },
        { word: "Environment", meaning: "Çevre / Ortam" }
    ],
    questions: [
        { id: 1, question: "Is living in a city more or less exciting than a village?", options: ["Less exciting", "More exciting", "Same"], correctAnswer: "More exciting" },
        { id: 2, question: "What can you find in a city like New York?", options: ["Only farms", "Theaters, museums, and malls", "Nothing"], correctAnswer: "Theaters, museums, and malls" },
        { id: 3, question: "Are cities quieter than rural areas?", options: ["No, they are noisier", "Yes", "They are the same"], correctAnswer: "No, they are noisier" },
        { id: 4, question: "Why is the countryside healthier?", options: ["Because of malls", "Because of fresh air and trees", "Because of traffic"], correctAnswer: "Because of fresh air and trees" },
        { id: 5, question: "Is life in a small town more expensive than a major city?", options: ["Yes", "No, it's cheaper", "Same"], correctAnswer: "No, it's cheaper" },
        { id: 6, question: "Who are cities better for according to the text?", options: ["Families", "Young professionals", "Farmers"], correctAnswer: "Young professionals" },
        { id: 7, question: "Which place is more suitable for families with children?", options: ["Major city", "Countryside", "Industrial area"], correctAnswer: "Countryside" },
        { id: 8, question: "Are rent prices higher in cities or small towns?", options: ["Cities", "Small towns", "Same"], correctAnswer: "Cities" },
        { id: 9, question: "What does the narrator prefer personally?", options: ["Living in a city", "Living in a quiet town", "Living on a boat"], correctAnswer: "Living in a quiet town" },
        { id: 10, question: "Does he like visiting the city?", options: ["No", "Yes", "He hates it"], correctAnswer: "Yes" }
    ]
};

// Unit 157: The Best of the Best - World Records
const u157: UnitReading = {
    unitId: 157,
    title: "Extraordinary Records of Our World",
    language: "English",
    level: "A2",
    story: {
        text: "Our world is full of fascinating facts and incredible records. For example, Mount Everest is the highest mountain on Earth, reaching nearly 9,000 meters above sea level. The Amazon is often considered the longest and largest river system. When we look at countries, Russia is definitely the largest by land area, while Vatican City is the smallest in the world. In the animal kingdom, the cheetah is the fastest land animal, reaching speeds of over 100 kilometers per hour. Among humans, Usain Bolt is famous for being the fastest person in history. These records show us the amazing diversity and limits of nature and human potential. Learning about these 'superlatives' helps us understand the true scale of our planet.",
        translation: "Dünyamız büyüleyici gerçekler ve inanılmaz rekorlarla doludur. Örneğin, Everest Dağı, deniz seviyesinden yaklaşık 9.000 metre yüksekliğe ulaşan, Dünya'daki en yüksek dağdır. Amazon genellikle en uzun ve en büyük nehir sistemi olarak kabul edilir. Ülkelere baktığımızda, Rusya yüzölçümü bakımından kesinlikle en büyüğüdür, Vatikan ise dünyadaki en küçüğüdür. Hayvanlar aleminde, çita saatte 100 kilometrenin üzerindeki hızlara ulaşan en hızlı kara hayvanıdır. İnsanlar arasında Usain Bolt, tarihteki en hızlı kişi olmasıyla ünlüdür. Bu rekorlar bize doğanın ve insan potansiyelinin şaşırtıcı çeşitliliğini ve sınırlarını gösterir. Bu 'en'leri öğrenmek, gezegenimizin gerçek ölçeğini anlamamıza yardımcı olur."
    },
    vocabulary: [
        { word: "Fascinating", meaning: "Büyüleyici" },
        { word: "Nearly", meaning: "Yaklaşık / Hemen hemen" },
        { word: "Definitely", meaning: "Kesinlikle" },
        { word: "Kingdom", meaning: "Krallık / Alem" },
        { word: "Diversity", meaning: "Çeşitlilik" },
        { word: "Superlatives", meaning: "En üstünlük dereceleri" },
        { word: "Scale", meaning: "Ölçek" }
    ],
    questions: [
        { id: 1, question: "What is the highest mountain on Earth?", options: ["K2", "Mount Everest", "Kilimanjaro"], correctAnswer: "Mount Everest" },
        { id: 2, question: "How high is Mount Everest nearly?", options: ["5,000 meters", "7,000 meters", "9,000 meters"], correctAnswer: "9,000 meters" },
        { id: 3, question: "What is considered the longest river system?", options: ["The Nile", "The Amazon", "The Mississippi"], correctAnswer: "The Amazon" },
        { id: 4, question: "Which is the largest country by land area?", options: ["USA", "China", "Russia"], correctAnswer: "Russia" },
        { id: 5, question: "Which is the smallest country?", options: ["Monaco", "Vatican City", "San Marino"], correctAnswer: "Vatican City" },
        { id: 6, question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse"], correctAnswer: "Cheetah" },
        { id: 7, question: "How fast can a cheetah run?", options: ["50 km/h", "Over 100 km/h", "200 km/h"], correctAnswer: "Over 100 km/h" },
        { id: 8, question: "Who is the fastest person in history?", options: ["Michael Jordan", "Usain Bolt", "Tiger Woods"], correctAnswer: "Usain Bolt" },
        { id: 9, question: "What do these records show us?", options: ["Boring facts", "Diversity and limits of nature", "Only numbers"], correctAnswer: "Diversity and limits of nature" },
        { id: 10, question: "Does learning about superlatives help us understand the planet?", options: ["No", "Yes", "Maybe"], correctAnswer: "Yes" }
    ]
};

// Unit 158: Rules and Obligations - Social Etiquette
const u158: UnitReading = {
    unitId: 158,
    title: "Navigating Rules in Daily Life",
    language: "English",
    level: "A2",
    story: {
        text: "In every society, there are certain rules and obligations that we must follow to maintain order. For example, in a professional workplace, employees must arrive on time every morning. Most offices have a dress code, so you might have to wear formal clothes like a suit or a blouse. During important meetings, you mustn't use your mobile phone because it is considered rude. You should also be polite and respectful to your colleagues and clients. On the other hand, there are things you don't have to do; for instance, you don't have to work on Sundays unless there is an emergency. At home, children should follow their parents' rules, like finishing their homework before playing video games. Rules might seem strict sometimes, but they help everyone live together peacefully.",
        translation: "Her toplumda, düzeni korumak için uymamız gereken belirli kurallar ve yükümlülükler vardır. Örneğin, profesyonel bir iş yerinde çalışanlar her sabah zamanında gelmelidir. Çoğu ofisin kıyafet kuralı vardır, bu nedenle takım elbise veya bluz gibi resmi kıyafetler giymek zorunda kalabilirsiniz. Önemli toplantılar sırasında cep telefonunuzu kullanmamalısınız çünkü bu kaba bir davranış olarak kabul edilir. Ayrıca meslektaşlarınıza ve müşterilerinize karşı kibar ve saygılı olmalısınız. Öte yandan, yapmak zorunda olmadığınız şeyler de vardır; örneğin acil bir durum olmadıkça Pazar günleri çalışmak zorunda değilsiniz. Evde çocuklar; video oyunları oynamadan önce ödevlerini bitirmek gibi ebeveynlerinin kurallarına uymalıdır. Kurallar bazen katı görünebilir ancak herkesin barış içinde birlikte yaşamasına yardımcı olurlar."
    },
    vocabulary: [
        { word: "Obligation", meaning: "Yükümlülük / Zorunluluk" },
        { word: "Workplace", meaning: "İş yeri" },
        { word: "Dress code", meaning: "Kıyafet kuralı" },
        { word: "Colleagues", meaning: "Meslektaşlar / İş arkadaşları" },
        { word: "Emergency", meaning: "Acil durum" },
        { word: "Strict", meaning: "Katı / Sert" },
        { word: "Maintain", meaning: "Sürdürmek / Korumak" }
    ],
    questions: [
        { id: 1, question: "Why do we have rules in society?", options: ["To make money", "To maintain order", "To have fun"], correctAnswer: "To maintain order" },
        { id: 2, question: "When must employees arrive at work?", options: ["Whenever they want", "On time", "At noon"], correctAnswer: "On time" },
        { id: 3, question: "What is a 'dress code'?", options: ["A list of foods", "Rules about clothes", "A code for a door"], correctAnswer: "Rules about clothes" },
        { id: 4, question: "What shouldn't you use during meetings?", options: ["Your pen", "Your mobile phone", "A chair"], correctAnswer: "Your mobile phone" },
        { id: 5, question: "Why is using a phone in a meeting bad?", options: ["It's expensive", "It's considered rude", "It's dangerous"], correctAnswer: "It's considered rude" },
        { id: 6, question: "How should you treat colleagues?", options: ["Be rude", "Be polite and respectful", "Don't talk to them"], correctAnswer: "Be polite and respectful" },
        { id: 7, question: "Do you have to work on Sundays usually?", options: ["Yes, always", "No, unless there's an emergency", "Only in the morning"], correctAnswer: "No, unless there's an emergency" },
        { id: 8, question: "What should children do before playing games?", options: ["Eat candy", "Finish their homework", "Go to sleep"], correctAnswer: "Finish their homework" },
        { id: 9, question: "Are rules always described as bad?", options: ["Yes", "No, they help people live peacefully", "They are boring"], correctAnswer: "No, they help people live peacefully" },
        { id: 10, question: "Can rules be strict?", options: ["No, never", "Yes, sometimes", "Always easy"], correctAnswer: "Yes, sometimes" }
    ]
};

// Unit 159: Conversation Skills - Tag Questions
const u159: UnitReading = {
    unitId: 159,
    title: "Mastering the Art of Conversation",
    language: "English",
    level: "A2",
    story: {
        text: "Making good conversation is an important social skill, isn't it? In English, we often use 'tag questions' to check information or to encourage the other person to speak. For example, if you see a beautiful sunset, you might say, 'It's a lovely evening, isn't it?' If you want to confirm someone's ability, you could ask, 'You speak Spanish, don't you?' These short questions at the end of sentences are very common in daily talk. When the main sentence is positive, the tag is negative, like 'She is nice, isn't she?' When the main sentence is negative, the tag is positive, like 'They aren't tired, are they?' Using tags makes you sound more natural and friendly. It is much better than just asking 'Right?' every time, don't you agree?",
        translation: "İyi sohbet etmek önemli bir sosyal beceridir, değil mi? İngilizce'de bilgiyi kontrol etmek veya karşıdaki kişiyi konuşmaya teşvik etmek için sık sık 'ek sorular' (tag questions) kullanırız. Örneğin, güzel bir gün batımı görürseniz, 'Harika bir akşam, değil mi?' diyebilirsiniz. Birinin yeteneğini onaylamak isterseniz, 'İspanyolca konuşuyorsun, değil mi?' diye sorabilirsiniz. Cümlelerin sonundaki bu kısa sorular günlük konuşmada çok yaygındır. Ana cümle olumlu olduğunda ek soru olumsuzdur, örneğin 'O nazik biri, değil mi?'. Ana cümle olumsuz olduğunda ek soru olumludur, örneğin 'Yorgun değiller, değil mi?'. Ek soruları kullanmak kulağa daha doğal ve arkadaşça gelmenizi sağlar. Her seferinde sadece 'Doğru mu?' (Right?) diye sormaktan çok daha iyidir, katılmaz mısın?"
    },
    vocabulary: [
        { word: "Mastering", meaning: "Ustalık kazanmak" },
        { word: "Encourage", meaning: "Teşvik etmek" },
        { word: "Sunset", meaning: "Gün batımı" },
        { word: "Confirm", meaning: "Onaylamak" },
        { word: "Common", meaning: "Yaygın" },
        { word: "Natural", meaning: "Doğal" },
        { word: "Encourage", meaning: "Cesaretlendirmek" }
    ],
    questions: [
        { id: 1, question: "What are 'tag questions' used for?", options: ["To find money", "To check info or encourage someone", "To speak faster"], correctAnswer: "To check info or encourage someone" },
        { id: 2, question: "Which tag is used for 'It's a lovely evening'?", options: ["Is it?", "Isn't it?", "Wasn't it?"], correctAnswer: "Isn't it?" },
        { id: 3, question: "Which tag for 'You speak Spanish'?", options: ["Don't you?", "Do you?", "Speak you?"], correctAnswer: "Don't you?" },
        { id: 4, question: "When the main sentence is positive, what is the tag?", options: ["Negative", "Positive", "Neutral"], correctAnswer: "Negative" },
        { id: 5, question: "What is the tag for 'She is nice'?", options: ["Is she?", "She is?", "Isn't she?"], correctAnswer: "Isn't she?" },
        { id: 6, question: "When the main sentence is negative, what is the tag?", options: ["Negative", "Positive", "Neutral"], correctAnswer: "Positive" },
        { id: 7, question: "What is the tag for 'They aren't tired'?", options: ["Are they?", "Aren't they?", "They aren't?"], correctAnswer: "Are they?" },
        { id: 8, question: "Do tags make you sound more natural?", options: ["No", "Yes", "Maybe"], correctAnswer: "Yes" },
        { id: 9, question: "Is using tags better than saying 'Right?' every time?", options: ["No", "Yes", "It's the same"], correctAnswer: "Yes" },
        { id: 10, question: "Are tags common in daily talk?", options: ["No, rare", "Yes, very common", "Only in books"], correctAnswer: "Yes, very common" }
    ]
};

// Unit 160: A2 Review - My English Journey
const u160: UnitReading = {
    unitId: 160,
    title: "Looking Back at Level A2",
    language: "English",
    level: "A2",
    story: {
        text: "Congratulations! You have reached the end of the A2 level. Let's look back at everything you have learned during this journey. You can now talk about your daily routines, hobbies, and past experiences with confidence. You have learned how to describe people's personalities and compare different places using comparatives and superlatives. You can also express obligations and rules using 'must' and 'have to'. Your vocabulary has expanded to include topics like technology, the environment, and job interviews. Although you still make some mistakes, your communication is much clearer than before. Remember that learning a language is a lifelong process. Practice every day, listen to English music, and watch your favorite shows in English. You are ready for the next level, B1! Keep going, and never give up!",
        translation: "Tebrikler! A2 seviyesinin sonuna ulaştınız. Bu yolculuk boyunca öğrendiğiniz her şeye bir göz atalım. Artık günlük rutinleriniz, hobileriniz ve geçmiş deneyimleriniz hakkında güvenle konuşabiliyorsunuz. Kişilik özelliklerini tarif etmeyi ve karşılaştırmalı (komparatif) ve üstünlük (süperlatif) yapılarını kullanarak farklı yerleri kıyaslamayı öğrendiniz. Ayrıca 'must' ve 'have to' kullanarak zorunlulukları ve kuralları ifade edebiliyorsunuz. Kelime dağarcığınız teknoloji, çevre ve iş görüşmeleri gibi konuları içerecek şekilde genişledi. Hala bazı hatalar yapıyor olsanız da, iletişiminiz eskisinden çok daha net. Dil öğrenmenin ömür boyu süren bir süreç olduğunu unutmayın. Her gün pratik yapın, İngilizce müzik dinleyin ve en sevdiğiniz dizileri İngilizce izleyin. Bir sonraki seviye olan B1 için hazırsınız! Devam edin ve asla pes etmeyin!"
    },
    vocabulary: [
        { word: "Routines", meaning: "Rutinler" },
        { word: "Confidence", meaning: "Güven" },
        { word: "Lifelong", meaning: "Ömür boyu" },
        { word: "Process", meaning: "Süreç" },
        { word: "Expanded", meaning: "Genişledi" },
        { word: "Give up", meaning: "Vazgeçmek / Pes etmek" },
        { word: "Journey", meaning: "Yolculuk" }
    ],
    questions: [
        { id: 1, question: "What level is the student at the end of?", options: ["A1", "A2", "B1"], correctAnswer: "A2" },
        { id: 2, question: "What can the student talk about now?", options: ["Only eating", "Daily routines, hobbies, and experiences", "Physics"], correctAnswer: "Daily routines, hobbies, and experiences" },
        { id: 3, question: "What structures are used to compare places?", options: ["Comparatives and superlatives", "Past tense", "Present continuous"], correctAnswer: "Comparatives and superlatives" },
        { id: 4, question: "What are 'must' and 'have to' used for?", options: ["Asking time", "Expressing obligations and rules", "Buying food"], correctAnswer: "Expressing obligations and rules" },
        { id: 5, question: "Which topics are included in the expanded vocabulary?", options: ["Only animals", "Technology, environment, and job interviews", "Only furniture"], correctAnswer: "Technology, environment, and job interviews" },
        { id: 6, question: "Is the communication clearer than before?", options: ["No, it's worse", "Yes, much clearer", "It's the same"], correctAnswer: "Yes, much clearer" },
        { id: 7, question: "Is learning a language a short or lifelong process?", options: ["Short", "One month", "Lifelong"], correctAnswer: "Lifelong" },
        { id: 8, question: "What should the student do every day?", options: ["Practice", "Nothing", "Sleep all day"], correctAnswer: "Practice" },
        { id: 9, question: "What is the next level after A2?", options: ["A1", "B1", "C1"], correctAnswer: "B1" },
        { id: 10, question: "Should the student give up?", options: ["Yes", "No, never", "Maybe"], correctAnswer: "No, never" }
    ]
};

// Export function
export function getEnglishA2ReadingForUnit(unitId: number): UnitReading {
    const m: { [k: number]: UnitReading } = {
        131: u131, 132: u132, 133: u133, 134: u134, 135: u135, 136: u136, 137: u137, 138: u138, 139: u139, 140: u140,
        141: u141, 142: u142, 143: u143, 144: u144, 145: u145, 146: u146, 147: u147, 148: u148, 149: u149, 150: u150,
        151: u151, 152: u152, 153: u153, 154: u154, 155: u155, 156: u156, 157: u157, 158: u158, 159: u159, 160: u160
    };
    return m[unitId] || u131;
}
