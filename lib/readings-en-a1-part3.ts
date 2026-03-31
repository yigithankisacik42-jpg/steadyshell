import { UnitReading } from './readings';

export const enA1ReadingsPart3: { [key: number]: UnitReading } = {
    121: {
        unitId: 121, title: "Nasıl Hissediyorsun? - Feel + Adjective", language: "İngilizce", level: "A1",
        story: {
            text: "Hello, doctor. I don't feel well today. I feel very tired and sick. My head is warm and my throat is dry. I feel so weak that I cannot stand up. The doctor checks me. 'You have a bad cold,' he says. 'You must rest and drink hot tea.' After sleeping for ten hours, I feel better. Now I feel happy, strong, and hungry. It is good to return to normal.",
            translation: "Merhaba doktor. Bugün iyi hissetmiyorum. Çok yorgun ve hasta hissediyorum. Başım sıcak ve boğazım kuru. O kadar zayıf hissediyorum ki ayağa kalkamıyorum. Doktor beni kontrol ediyor. 'Kötü bir soğuk algınlığınız var' diyor. 'Dinlenmeli ve sıcak çay içmelisiniz.' On saat uyuduktan sonra daha iyi hissediyorum. Şimdi mutlu, güçlü ve aç hissediyorum. Normale dönmek güzel."
        },
        vocabulary: [
            { word: "Feel", meaning: "Hissetmek" }, { word: "Tired", meaning: "Yorgun" },
            { word: "Weak", meaning: "Güçsüz/Zayıf" }, { word: "Throat", meaning: "Boğaz" },
            { word: "Cold", meaning: "Soğuk algınlığı" }
        ],
        questions: [
            { id: 1, question: "Hasta kendini nasıl hissediyor?", options: ["Excited", "Very bored", "Very tired and sick"], correctAnswer: "Very tired and sick" },
            { id: 2, question: "Hastanın boğazı (throat) nasıldır?", options: ["Sore", "Dry", "Red"], correctAnswer: "Dry" },
            { id: 3, question: "Neden ayağa kalkamıyor?", options: ["Because he is happy", "Because his leg is broken", "Because he feels so weak"], correctAnswer: "Because he feels so weak" },
            { id: 4, question: "Doktor ona neyi olduğunu söylüyor?", options: ["A bad headache", "A broken arm", "A bad cold"], correctAnswer: "A bad cold" },
            { id: 5, question: "Doktor ona ne içmesini tavsiye ediyor?", options: ["Cold water", "Hot soup", "Hot tea"], correctAnswer: "Hot tea" },
            { id: 6, question: "Doktor ne yapmasını söylüyor?", options: ["Go running", "Rest and drink hot tea", "Eat a big meal"], correctAnswer: "Rest and drink hot tea" },
            { id: 7, question: "Hasta kaç saat uyuyor?", options: ["Ten hours", "Eight hours", "Five hours"], correctAnswer: "Ten hours" },
            { id: 8, question: "Uyuduktan sonra nasıl hissediyor (önce)?", options: ["Better", "Worse", "Sad"], correctAnswer: "Better" },
            { id: 9, question: "En sonunda kendini nasıl tarif ediyor?", options: ["Happy, strong, and hungry", "Weak and sick", "Sleepy and tired"], correctAnswer: "Happy, strong, and hungry" },
            { id: 10, question: "Hastaya göre iyi/güzel olan nedir?", options: ["Being sick", "Returning to normal", "Going to doctor"], correctAnswer: "Returning to normal" }
        ]
    },
    122: {
        unitId: 122, title: "Partideki İnsanlar - Object Pronouns", language: "İngilizce", level: "A1",
        story: {
            text: "Look at the people at the party! That is my friend Mary. I call her every day. Do you see the tall man? He is Tom. I like him very much. Can you see us? We are standing near the door. My parents are at the table. Let's go and talk to them. John has a new camera. He wants to show it to me. I enjoy this party. Tell me, do you like it?",
            translation: "Partideki insanlara bak! O(şu) arkadaşım Mary. Her gün onu ararım. Uzun adamı görüyor musun? O Tom'dur. Onu çok severim. Bizi görebiliyor musun? Kapının yanında duruyoruz. Ailem masada. Hadi gidip onlarla konuşalım. John'un yeni bir kamerası var. Onu bana göstermek istiyor. Bu partiden keyif alıyorum. Söyle bana, sen onu sevdin mi?"
        },
        vocabulary: [
            { word: "Call her", meaning: "Onu (kadını) aramak" }, { word: "Talk to them", meaning: "Onlarla konuşmak" },
            { word: "Show it to me", meaning: "Onu (cansız objects) bana göstermek" }, { word: "Tell me", meaning: "Bana söyle" },
            { word: "Enjoy", meaning: "Keyif almak" }
        ],
        questions: [
            { id: 1, question: "Yazar Mary'yi ne sıklıkla arıyor?", options: ["Never", "Every day", "Once a week"], correctAnswer: "Every day" },
            { id: 2, question: "'Her' kimin yerini (Object Pronoun) tutuyor?", options: ["Tom", "Mary", "John"], correctAnswer: "Mary" },
            { id: 3, question: "Uzun boylu adamın (tall man) adı nedir?", options: ["John", "Mark", "Tom"], correctAnswer: "Tom" },
            { id: 4, question: "Yazar Tom hakkında ne söylüyor?", options: ["He is angry", "I don't know him", "I like him very much"], correctAnswer: "I like him very much" },
            { id: 5, question: "Yazar ve yanındakiler nerede duruyorlar?", options: ["Near the window", "Near the door", "At the table"], correctAnswer: "Near the door" },
            { id: 6, question: "Anne babası (parents) nerede?", options: ["Dancing on the floor", "At the table", "Outside"], correctAnswer: "At the table" },
            { id: 7, question: "Yazar gidip kiminle konuşmayı öneriyor?", options: ["With Mary", "With them (parents)", "With Tom"], correctAnswer: "With them (parents)" },
            { id: 8, question: "John'un yeni olan nesi var?", options: ["A new car", "A new book", "A new camera"], correctAnswer: "A new camera" },
            { id: 9, question: "John kamerasını kime göstermek istiyor?", options: ["To him", "To her", "To me (the writer)"], correctAnswer: "To me (the writer)" },
            { id: 10, question: "The word 'it' cümlede neyi (object pronoun) işaret eder: 'do you like it?'?", options: ["The camera", "The tall man", "The party"], correctAnswer: "The party" }
        ]
    },
    123: {
        unitId: 123, title: "Kibar Bir Sipariş - Would Like", language: "İngilizce", level: "A1",
        story: {
            text: "Good morning! Can I help you? Yes, I would like to order breakfast, please. What would you like to drink? I would like a large cup of black coffee. And what would you like to eat? I'd like a cheese sandwich and a slice of chocolate cake. Would you like some sugar in your coffee? No, thank you. Would you like to sit near the window? Yes, that would be lovely.",
            translation: "Günaydın! Size yardım edebilir miyim? Evet, kahvaltı sipariş etmek istiyorum(isterdim), lütfen. Ne içmek istersiniz? Büyük bir fincan siyah kahve istiyorum. Peki ya ne yemek istersiniz? Peynirli bir sandviç ve bir dilim çikolatalı kek isterim(istiyorum). Kahvenizde biraz şeker ister misiniz? Hayır, teşekkür ederim. Pencerenin yakınına oturmak ister misiniz? Evet, bu çok hoş (lovely) olur."
        },
        vocabulary: [
            { word: "Would like", meaning: "İstemek (Kibarca/Arzu etmek)" }, { word: "Order", meaning: "Sipariş vermek" },
            { word: "Slice", meaning: "Dilim" }, { word: "Sit", meaning: "Oturmak" },
            { word: "Lovely", meaning: "Çok hoş, harika" }
        ],
        questions: [
            { id: 1, question: "Müşteri ne için sipariş vermek istiyor?", options: ["Lunch", "Dinner", "Breakfast"], correctAnswer: "Breakfast" },
            { id: 2, question: "Müşterinin içecek (drink) tercihi nedir?", options: ["A large cup of black tea", "A large cup of black coffee", "A glass of milk"], correctAnswer: "A large cup of black coffee" },
            { id: 3, question: "Yiyecek olarak (eat) ne istiyor?", options: ["Burger and fries", "Chicken soup", "A cheese sandwich and chocolate cake"], correctAnswer: "A cheese sandwich and chocolate cake" },
            { id: 4, question: "Sandviç ne tür bir sandviç?", options: ["Chicken", "Cheese", "Meat"], correctAnswer: "Cheese" },
            { id: 5, question: "Pastadan ne kadar (ne ölçüde) istiyor?", options: ["A whole cake", "Two slices", "A slice"], correctAnswer: "A slice" },
            { id: 6, question: "Garson kahve için ne soruyor?", options: ["Would you like cold coffee?", "Would you like some sugar?", "Would you like some milk?"], correctAnswer: "Would you like some sugar?" },
            { id: 7, question: "Müşteri şeker istiyor mu?", options: ["Yes, please", "Just a little", "No, thank you"], correctAnswer: "No, thank you" },
            { id: 8, question: "Garson nereye oturmasını teklif ediyor?", options: ["Near the kitchen", "Near the door", "Near the window"], correctAnswer: "Near the window" },
            { id: 9, question: "Müşteri cam kenarına oturmak fikrini nasıl buluyor?", options: ["Terrible", "Bad", "Lovely"], correctAnswer: "Lovely" },
            { id: 10, question: "'I'd like' hangi ifadenin kısaltmasıdır?", options: ["I did like", "I would like", "I do like"], correctAnswer: "I would like" }
        ]
    },
    124: {
        unitId: 124, title: "Nerelisin? - Where Are You From?", language: "İngilizce", level: "A1",
        story: {
            text: "Hello everyone. My name is Carlos, and I am from Madrid. So, I am Spanish. My friend Yumi is from Tokyo. She is Japanese. We study in London with a boy named Pierre. Where is Pierre from? He is from Paris. He is French. And our teacher? Our teacher is Mr. Smith, and he is from America. Therefore, he is American. We all learn English together. The world is a small place!",
            translation: "Herkese merhaba. Benim adım Carlos ve ben Madridliyim. Yani ben İspanyolum. Arkadaşım Yumi Tokyo'ludur. O Japondur. Biz Pierre adında bir oğlanla birlikte Londra'da okuruz/çalışırız. Pierre nerelidir? O Paris'tendir. Fransız'dır. Peki ya öğretmenimiz? Öğretmenimiz Bay Smith'tir ve kendisi Amerika'tandır / Amerikalıdır. Bu yüzden o Amerikalıdır. Biz hep birlikte İngilizce öğreniyoruz. Dünya küçük bir yerdir!"
        },
        vocabulary: [
            { word: "From", meaning: "...'dan (Nereli olduğunu belirtir)" }, { word: "Spanish", meaning: "İspanyol" },
            { word: "Japanese", meaning: "Japon" }, { word: "Together", meaning: "Birlikte" },
            { word: "Therefore", meaning: "Bu yüzden / Dolayısıyla" }
        ],
        questions: [
            { id: 1, question: "Carlos nerelidir?", options: ["Tokyo", "Paris", "Madrid"], correctAnswer: "Madrid" },
            { id: 2, question: "Carlos'un milliyeti nedir?", options: ["French", "Spanish", "Japanese"], correctAnswer: "Spanish" },
            { id: 3, question: "Yumi hangi şehirdendir?", options: ["Kyoto", "Osaka", "Tokyo"], correctAnswer: "Tokyo" },
            { id: 4, question: "Yumi'nin milliyeti nedir?", options: ["Japanese", "Chinese", "Korean"], correctAnswer: "Japanese" },
            { id: 5, question: "Pierre adındaki arkadaşın milliyeti nedir?", options: ["Spanish", "American", "French"], correctAnswer: "French" },
            { id: 6, question: "Pierre nereden gelmektedir?", options: ["London", "Paris", "Madrid"], correctAnswer: "Paris" },
            { id: 7, question: "Hepsi nerede okumaktadır / çalışmaktadır?", options: ["In Madrid", "In Tokyo", "In London"], correctAnswer: "In London" },
            { id: 8, question: "Öğretmenlerinin adı nedir?", options: ["Mr. Carlos", "Mr. Pierre", "Mr. Smith"], correctAnswer: "Mr. Smith" },
            { id: 9, question: "Öğretmen nerelidir / milliyeti nedir?", options: ["English", "American", "French"], correctAnswer: "American" },
            { id: 10, question: "Hep birlikte ne öğrenmektedirler?", options: ["Spanish", "French", "English"], correctAnswer: "English" }
        ]
    },
    125: {
        unitId: 125, title: "Mia'nın Hayatı - Present Simple Tam", language: "İngilizce", level: "A1",
        story: {
            text: "Mia lives in a small apartment. She works as a graphic designer. She gets up early every day. Does she drive to work? No, she doesn't. She takes the subway because it is fast. At work, she designs websites and makes presentations. She doesn't eat meat; she is a vegetarian. On the weekends, she doesn't work. Instead, she goes to the park and paints pictures. Mia's life is simple but she loves it completely.",
            translation: "Mia küçük bir apartman dairesinde yaşar. Grafik tasarımcı olarak çalışır. Her gün erken kalkar. İşe arabayla mı gider? Hayır, gitmez. Metroya (subway) biner çünkü o hızlıdır. İşteyken web siteleri tasarlar ve sunumlar yapar. O et yemez; vejetaryendir. Hafta sonlarında çalışmaz. Bunun yerine, parka gider ve resim çizer(boyar). Mia'nın hayatı basittir ama o, onu tamamen sever."
        },
        vocabulary: [
            { word: "Subway", meaning: "Metro (Tren)" }, { word: "Design", meaning: "Tasarlamak" },
            { word: "Presentation", meaning: "Sunum" }, { word: "Vegetarian", meaning: "Vejetaryen" },
            { word: "Instead", meaning: "Onun yerine" }
        ],
        questions: [
            { id: 1, question: "Mia nerede yaşar?", options: ["In a big house", "In a village", "In a small apartment"], correctAnswer: "In a small apartment" },
            { id: 2, question: "Mia'nın mesleği nedir?", options: ["Teacher", "Web developer", "Graphic designer"], correctAnswer: "Graphic designer" },
            { id: 3, question: "Nasıl kalkar?", options: ["Early", "Late", "Never sleeps"], correctAnswer: "Early" },
            { id: 4, question: "Mia işe nasıl gider?", options: ["She walks", "She drives a car", "She takes the subway"], correctAnswer: "She takes the subway" },
            { id: 5, question: "Mia'nın kullandığı ulaşım aracı (metro) neden onun tarafından tercih ediliyor?", options: ["Because it is fun", "Because it is cheap", "Because it is fast"], correctAnswer: "Because it is fast" },
            { id: 6, question: "İşte neler yapar?", options: ["Answers phones and emails", "Sells products", "Designs websites and makes presentations"], correctAnswer: "Designs websites and makes presentations" },
            { id: 7, question: "Mia ne yemez?", options: ["Vegetables", "Fish", "Meat"], correctAnswer: "Meat" },
            { id: 8, question: "Hafta sonları çalışır mı?", options: ["Yes, every weekend", "Sometimes", "No, she doesn't work"], correctAnswer: "No, she doesn't work" },
            { id: 9, question: "Hafta sonu parka gidip ne yapar?", options: ["Reads a book", "Plays football", "Paints pictures"], correctAnswer: "Paints pictures" },
            { id: 10, question: "Mia'nın genel olarak hayatı için söylenen nedir?", options: ["It is stressful", "It is exciting", "It is simple but she loves it"], correctAnswer: "It is simple but she loves it" }
        ]
    },
    126: {
        unitId: 126, title: "Ne Sıklıkla? - Sıklık Zarfları", language: "İngilizce", level: "A1",
        story: {
            text: "How often do you exercise? I always go to the gym on Mondays. My brother rarely goes to the gym. He usually stays at home and plays games. I often eat healthy food like salads and fruits. But my sister sometimes eats fast food on Fridays. We never eat junk food inside our house. Our parents are very strict! They always cook fresh meals. The habit of healthy living is very important to us.",
            translation: "Ne sıklıkla egzersiz yaparsın? Pazartesileri her zaman spor salonuna giderim. Kardeşim nadiren spor salonuna gider. O genellikle evde kalır ve oyun oynar. Ben genellikle/çoğu kez salata ve meyve gibi sağlıklı yiyecekler yerim. Ama kız kardeşim bazen cuma günleri fast food yer. Biz evin içinde asla abur cubur yemeyiz. Anne babamız (ebeveynlerimiz) çok sıkıdır (katıdır)! Onlar daima taze yemekler pişirir. Sağlıklı yaşam alışkanlığı bizim için çok önemlidir."
        },
        vocabulary: [
            { word: "Always", meaning: "Her zaman" }, { word: "Usually", meaning: "Genellikle" },
            { word: "Often", meaning: "Çoğu zaman / Sık sık" }, { word: "Sometimes", meaning: "Bazen" },
            { word: "Rarely / Never", meaning: "Nadiren / Asla" }
        ],
        questions: [
            { id: 1, question: "Yazar (I) ne sıklıkla egzersiz (spor salonuna) gidiyor?", options: ["Sometimes", "Always on Mondays", "Never"], correctAnswer: "Always on Mondays" },
            { id: 2, question: "Erkek kardeş (brother) ne sıklıkla spor salonuna gidiyor?", options: ["Rarely", "Always", "Often"], correctAnswer: "Rarely" },
            { id: 3, question: "Erkek kardeş genellikle ne yapıyor?", options: ["Plays football outside", "Stays at home and plays games", "Runs in the park"], correctAnswer: "Stays at home and plays games" },
            { id: 4, question: "Yazar sık sık (often) ne yer?", options: ["Junk food", "Healthy food like salads and fruits", "Ice cream"], correctAnswer: "Healthy food like salads and fruits" },
            { id: 5, question: "Kız kardeş (sister) bazen cuma günleri ne yiyor?", options: ["Apples", "Fresh meals", "Fast food"], correctAnswer: "Fast food" },
            { id: 6, question: "Evin içinde ne yeme alışkanlıkları ASLA (never) yoktur?", options: ["Junk food", "Vegetables", "Fish"], correctAnswer: "Junk food" },
            { id: 7, question: "Anne babaları (parents) nasıldır?", options: ["Very fun", "Very lazy", "Very strict!"], correctAnswer: "Very strict!" },
            { id: 8, question: "Anne babaları daima ne pişirirler?", options: ["Fast food", "Fresh meals", "Frozen food"], correctAnswer: "Fresh meals" },
            { id: 9, question: "Hangi sıklık zarfı %100 her seferinde yapılma anlamı taşır?", options: ["Sometimes", "Often", "Always"], correctAnswer: "Always" },
            { id: 10, question: "Yazar ve ailesi için ne daha önemlidir?", options: ["Making money", "Watching TV", "The habit of healthy living"], correctAnswer: "The habit of healthy living" }
        ]
    },
    127: {
        unitId: 127, title: "Şu An Ne Yapıyorlar? - Present Continuous", language: "İngilizce", level: "A1",
        story: {
            text: "Look outside! It is raining right now. What are the people doing? The man is running to his office with an umbrella. Two girls are waiting at the bus stop. They are talking and laughing. A dog is barking at a car. I am watching them from my window. I am drinking a hot chocolate and I am listening to jazz music. Everything is moving so fast outside, but my room is peaceful.",
            translation: "Dışarıya bak! Şu an yağmur yağıyor. İnsanlar ne yapıyorlar? Adam şemsiyesiyle ofisine koşuyor. İki kız otobüs durağında bekliyorlar. Konuşuyorlar ve gülüyorlar. Bir köpek bir arabaya havlıyor. Onları penceremden izliyorum. Sıcak bir çikolata içiyorum ve caz müziği dinliyorum. Dışardaki her şey çok hızlı hareket ediyor, ama benim odam huzurlu."
        },
        vocabulary: [
            { word: "Right now", meaning: "Şu an / Tam şimdi" }, { word: "Rain", meaning: "Yağmur yağmak" },
            { word: "Laugh", meaning: "Gülmek" }, { word: "Bark", meaning: "Havlamak" },
            { word: "Peaceful", meaning: "Huzurlu" }
        ],
        questions: [
            { id: 1, question: "Şu an (right now) hava nasıldır?", options: ["It is snowing", "It is sunny", "It is raining"], correctAnswer: "It is raining" },
            { id: 2, question: "Adam ne yapıyor?", options: ["He is singing", "He is sleeping", "He is running to his office"], correctAnswer: "He is running to his office" },
            { id: 3, question: "Adamın yanında ne var?", options: ["A dog", "An umbrella", "A book"], correctAnswer: "An umbrella" },
            { id: 4, question: "Otobüs durağında (at the bus stop) kimler var?", options: ["Two men", "Three dogs", "Two girls"], correctAnswer: "Two girls" },
            { id: 5, question: "Kızlar durakta ne yapıyor?", options: ["Reading a book", "Waiting, talking and laughing", "Crying"], correctAnswer: "Waiting, talking and laughing" },
            { id: 6, question: "Dışarıda köpek (dog) ne yapıyor?", options: ["It is running with a cat", "It is sleeping under a tree", "It is barking at a car"], correctAnswer: "It is barking at a car" },
            { id: 7, question: "Yazar insanları (them) nereden izliyor?", options: ["From a cafe", "From his car", "From his window"], correctAnswer: "From his window" },
            { id: 8, question: "Yazar izlerken ne içiyor?", options: ["Coffee", "Beer", "A hot chocolate"], correctAnswer: "A hot chocolate" },
            { id: 9, question: "Yazar izlerken ne tür bir müzik dinliyor?", options: ["Jazz music", "Rock music", "Pop music"], correctAnswer: "Jazz music" },
            { id: 10, question: "Yazar odasını nasıl buluyor?", options: ["Noisy", "Crowded", "Peaceful"], correctAnswer: "Peaceful" }
        ]
    },
    128: {
        unitId: 128, title: "Kıyaslama - Comparatives", language: "İngilizce", level: "A1",
        story: {
            text: "My new car is faster than my old car. But my old car was more comfortable than the new one. Traveling by train is cheaper than traveling by plane. However, the plane is quicker. Life in the city is more stressful than life in the village. But the city is more exciting. My sister is taller than me, but I am older than her. Everyone is different, and everything has two sides.",
            translation: "Benim yeni arabam eski arabamdan daha hızlıdır (faster). Fakat eski arabam yeni olandan daha rahat (more comfortable) idi. Trenle seyahat etmek uçakla seyahat etmekten daha ucuzdur (cheaper). Ancak uçak daha çabuktur (quicker). Şehirdeki hayat köydeki hayattan daha streslidir. Ama şehir daha heyecan vericidir. Kız kardeşim benden daha uzundur (taller), ama ben ondan daha yaşlıyım (older). Herkes farklıdır ve her şeyin iki yönü vardır."
        },
        vocabulary: [
            { word: "Faster", meaning: "Daha hızlı" }, { word: "Cheaper", meaning: "Daha ucuz" },
            { word: "More comfortable", meaning: "Daha rahat" }, { word: "More exciting", meaning: "Daha heyecan verici" },
            { word: "Taller", meaning: "Daha uzun" }
        ],
        questions: [
            { id: 1, question: "Yeni araba eski arabaya göre (faster) nasıldır?", options: ["It is slower", "It is faster", "It is bigger"], correctAnswer: "It is faster" },
            { id: 2, question: "Eski arabanın hangi özelliği yeni olandan daha iyiydi?", options: ["It was faster", "It was more expensive", "It was more comfortable"], correctAnswer: "It was more comfortable" },
            { id: 3, question: "Trenle seyahat uçakla seyahate göre nasıldır?", options: ["It is more dangerous", "It is cheaper", "It is quicker"], correctAnswer: "It is cheaper" },
            { id: 4, question: "Uçak trene göre nasıldır?", options: ["It is cheaper", "It is quicker", "It is slower"], correctAnswer: "It is quicker" },
            { id: 5, question: "Şehirdeki hayat nasıldır?", options: ["More peaceful", "Cheaper", "More stressful"], correctAnswer: "More stressful" },
            { id: 6, question: "Şehirdeki hayatın diğer bir özelliği (köydeki hayata göre) nedir?", options: ["More boring", "More dangerous", "More exciting"], correctAnswer: "More exciting" },
            { id: 7, question: "Kim yazarın kendisinden daha uzundur (taller)?", options: ["His brother", "His friend", "His sister"], correctAnswer: "His sister" },
            { id: 8, question: "Yazar (I) kendisini kimden daha yaşlı / büyük bulmaktadır?", options: ["His father", "His sister", "His mother"], correctAnswer: "His sister" },
            { id: 9, question: "Sıfatları (Daha hızlı, daha rahat vs.) karşılaştırırken hangi kelimeyi kullanıyor?", options: ["Than", "That", "Then"], correctAnswer: "Than" },
            { id: 10, question: "Metnin ana düşüncesi nedir?", options: ["Cars are bad", "Cities are bad", "Everyone is different, everything has two sides"], correctAnswer: "Everyone is different, everything has two sides" }
        ]
    },
    129: {
        unitId: 129, title: "Hazine Avı - Edatlar Tekrar", language: "İngilizce", level: "A1",
        story: {
            text: "Let's find the hidden treasure! The old map says the treasure is not in the house. Go outside! Walk behind the big hospital. You see a bridge over the dirty river. Walk across the bridge. Look at the two big rocks. The treasure is between those rocks. Do not look under the bridge, look exactly between the rocks. Wow! I see a small wooden box. What is inside it? Just some chocolate coins!",
            translation: "Hadi gizli hazineyi bulalım! Eski harita hazinenin evin içinde (in) olmadığını söylüyor. Dışarıya çık! Büyük hastanenin arkasına doğru yürü. Kirli nehrin üzerinde (over) bir köprü göreceksin. Şehrin üzerinden/karşısına (across) yürü. İki büyük kayaya bak. Hazine o iki kayanın arasındadır (between). Köprünün altına (under) bakma, tam kayaların arasına bak. Vay canına! Küçük ahşap bir kutu görüyorum. Onun içinde (inside) ne var? Sadece biraz madeni para formunda çikolatalar!"
        },
        vocabulary: [
            { word: "Treasure", meaning: "Hazine" }, { word: "Behind", meaning: "Arkasında" },
            { word: "Over", meaning: "Üzerinde/Üstünde (temassız)" }, { word: "Under", meaning: "Altında" },
            { word: "Inside", meaning: "İçinde (kapalı alan)" }
        ],
        questions: [
            { id: 1, question: "Hikayedeki karakterler neyi bulmak istiyorlar?", options: ["A lost dog", "A hidden treasure", "A new house"], correctAnswer: "A hidden treasure" },
            { id: 2, question: "Eski harita hazinenin OLMADIĞI yeri neresi gosterir?", options: ["In the park", "In the hospital", "In the house"], correctAnswer: "In the house" },
            { id: 3, question: "Büyük hastanenin neresine (behind) doğru yürümeliler?", options: ["Next to it", "Behind it", "Inside it"], correctAnswer: "Behind it" },
            { id: 4, question: "Hastanenin arkasında gördükleri köprü neyin üzerindedir (over)?", options: ["A clean street", "A dirty river", "A wide road"], correctAnswer: "A dirty river" },
            { id: 5, question: "Nehrin üzerinden geçmek için neyin üzerini geçmeliler?", options: ["Walk across the bridge", "Walk under the bridge", "Swim the river"], correctAnswer: "Walk across the bridge" },
            { id: 6, question: "Karşılarına ne çıkmaktadır?", options: ["Two big rocks", "A huge tree", "A golden door"], correctAnswer: "Two big rocks" },
            { id: 7, question: "Hazine tam olarak nerede (between) bulunmaktadır?", options: ["Behind the rocks", "Between those rocks", "Under the bridge"], correctAnswer: "Between those rocks" },
            { id: 8, question: "Hazinenin nerede olmadığı, nereye (under) bakılmaması vurgulanıyor?", options: ["Under the rocks", "Under the earth", "Under the bridge"], correctAnswer: "Under the bridge" },
            { id: 9, question: "Sonunda kayaların arasında ne buluyorlar?", options: ["A large chest", "A small wooden box", "Real gold"], correctAnswer: "A small wooden box" },
            { id: 10, question: "Tahta kutunun içinde ne buldular?", options: ["Old paper maps", "Diamond rings", "Chocolate coins"], correctAnswer: "Chocolate coins" }
        ]
    },
    130: {
        unitId: 130, title: "A1 Genel Tekrar - The Final Review", language: "İngilizce", level: "A1",
        story: {
            text: "Dear friend. My name is Alex. I am writing this letter to you to practice my English. I am a university student and I work part-time in a lovely cafe. My family is very kind, they live in Canada. Every weekend, I ride my bicycle and explore the green parks. I always love learning new words! Yesterday, my friend Peter gave me an English book. I enjoy reading it. It is easier than French. I hope you are doing well!",
            translation: "Sevgili arkadaşım. Benim adım Alex. Sana bu mektubu İngilizcemi pratik yapmak (practice) için yazıyorum. Ben bir üniversite öğrencisiyim ve şirin bir kafede yarı zamanlı (part-time) olarak çalışırım. Ailem çok naziktir; onlar Kanada'da yaşarlar. Her hafta sonu, bisikletimi sürerim ve yeşil parkları keşfederim. Yeni kelimeler öğrenmeyi daima severim! Dün, arkadaşım Peter bana bir İngilizce kitabı verdi. Onu okumaktan keyif alıyorum (enjoy reading). Fransızca'dan daha kolaydır. Umarım sen iyi gidiyorsundur!"
        },
        vocabulary: [
            { word: "Dear", meaning: "Sevgili (Mektupların başında)" }, { word: "Practice", meaning: "Pratik (alıştırma) yapmak" },
            { word: "Part-time", meaning: "Yarı zamanlı (iş)" }, { word: "Enjoy", meaning: "Keyif almak / Tadını çıkarmak" },
            { word: "Hope", meaning: "Ummak / Ümit etmek" }
        ],
        questions: [
            { id: 1, question: "Yazar mektuba nasıl başlıyor?", options: ["Hello brother", "Hey you", "Dear friend"], correctAnswer: "Dear friend" },
            { id: 2, question: "Yazarın adı nedir?", options: ["Peter", "Alex", "Tom"], correctAnswer: "Alex" },
            { id: 3, question: "Bu mektubu neden (ne amaçla) yazıyor?", options: ["To sell a book", "To ask for money", "To practice his English"], correctAnswer: "To practice his English" },
            { id: 4, question: "Alex ne okuyor ve ne iş yapıyor?", options: ["He is a teacher, working full-time", "He is a student, working part-time in a cafe", "He is a doctor"], correctAnswer: "He is a student, working part-time in a cafe" },
            { id: 5, question: "Ailesi nerede mülk sahibi veya nerede yaşıyor?", options: ["In France", "In England", "In Canada"], correctAnswer: "In Canada" },
            { id: 6, question: "Her hafta sonu dışarı çıkarak ne sürmeyi tercih eder?", options: ["His bicycle", "His parents' car", "A motorcycle"], correctAnswer: "His bicycle" },
            { id: 7, question: "Neleri öğrenmeyi ne sıklıkla çok sever?", options: ["He always loves learning new words", "He never loves studying math", "He rarely learns French"], correctAnswer: "He always loves learning new words" },
            { id: 8, question: "Dün arkadaşı Peter ona ne hediye etmiştir?", options: ["A new bicycle", "An English book", "A French movie"], correctAnswer: "An English book" },
            { id: 9, question: "Alex kitabı neye (which language) kıyaslıyor?", options: ["To Spanish", "To Turkish", "To French"], correctAnswer: "To French" },
            { id: 10, question: "Kitabın başka bir dile kıyasla durumu nedir (Comparatives)?", options: ["Harder than French", "Easier than French", "More boring than French"], correctAnswer: "Easier than French" }
        ]
    }
};
