import { UnitReading } from './readings';

export const enA1ReadingsPart1: { [key: number]: UnitReading } = {
    101: {
        unitId: 101, title: "Yeni Bir Başlangıç - To Be", language: "İngilizce", level: "A1",
        story: {
            text: "Hello! My name is Sarah. I am twenty-two years old and I am a student. I am from Canada, but I am in London now. London is a big and beautiful city. My friend is Tom. He is twenty-four years old. He is a teacher. We are very happy here. The weather is cold, but the people are warm. Are you a student too? It is nice to meet you!",
            translation: "Merhaba! Benim adım Sarah. Yirmi iki yaşındayım ve bir öğrenciyim. Kanadalıyım ama şu an Londra'dayım. Londra büyük ve güzel bir şehir. Arkadaşım Tom'dur. O yirmi dört yaşındadır. O bir öğretmendir. Biz burada çok mutluyuz. Hava soğuk ama insanlar sıcakkanlı. Sen de bir öğrenci misin? Seninle tanışmak güzel!"
        },
        vocabulary: [
            { word: "Name", meaning: "İsim" }, { word: "Student", meaning: "Öğrenci" },
            { word: "Weather", meaning: "Hava durumu" }, { word: "Warm", meaning: "Sıcakkanlı / Ilık" },
            { word: "Happy", meaning: "Mutlu" }
        ],
        questions: [
            { id: 1, question: "Sarah nereli?", options: ["London", "Canada", "America"], correctAnswer: "Canada" },
            { id: 2, question: "Sarah kaç yaşında?", options: ["Twenty", "Twenty-two", "Twenty-four"], correctAnswer: "Twenty-two" },
            { id: 3, question: "Sarah'nın mesleği nedir?", options: ["Teacher", "Doctor", "Student"], correctAnswer: "Student" },
            { id: 4, question: "Tom kaç yaşında?", options: ["Twenty-two", "Twenty-four", "Twenty-five"], correctAnswer: "Twenty-four" },
            { id: 5, question: "Tom'un mesleği nedir?", options: ["Teacher", "Student", "Engineer"], correctAnswer: "Teacher" },
            { id: 6, question: "Şu an neredeler?", options: ["In Canada", "In Paris", "In London"], correctAnswer: "In London" },
            { id: 7, question: "Londra nasıl bir şehir?", options: ["Small and ugly", "Big and beautiful", "Hot and small"], correctAnswer: "Big and beautiful" },
            { id: 8, question: "Hava durumu nasıl?", options: ["Hot", "Warm", "Cold"], correctAnswer: "Cold" },
            { id: 9, question: "İnsanlar nasıl?", options: ["Cold", "Warm", "Angry"], correctAnswer: "Warm" },
            { id: 10, question: "Orada nasıl hissediyorlar?", options: ["Sad", "Happy", "Tired"], correctAnswer: "Happy" }
        ]
    },
    102: {
        unitId: 102, title: "Odamda Neler Var? - There is/are", language: "İngilizce", level: "A1",
        story: {
            text: "This is my dream bedroom. It is very large. There is a big bed in the middle of the room. There are two small lamps on the table. Is there a television? Yes, there is a smart TV on the wall. There are three posters next to the window. Are there any plants? Yes, there are some green plants. There is a computer on my desk, but there isn't a printer. I love my room!",
            translation: "Bu benim hayalimdeki yatak odası. Çok geniştir. Odanın ortasında büyük bir yatak var. Masanın üzerinde iki küçük lamba var. Bir televizyon var mı? Evet, duvarda akıllı bir TV var. Pencerenin yanında üç poster var. Hiç bitki var mı? Evet, bazı yeşil bitkiler var. Masamın üzerinde bir bilgisayar var ama bir yazıcı yok. Odamı seviyorum!"
        },
        vocabulary: [
            { word: "Bedroom", meaning: "Yatak odası" }, { word: "Middle", meaning: "Orta" },
            { word: "Wall", meaning: "Duvar" }, { word: "Window", meaning: "Pencere" },
            { word: "Plant", meaning: "Bitki" }
        ],
        questions: [
            { id: 1, question: "Yatak odası nasıldır?", options: ["Small", "Large", "Dark"], correctAnswer: "Large" },
            { id: 2, question: "Odanın ortasında ne var?", options: ["A TV", "A big bed", "A desk"], correctAnswer: "A big bed" },
            { id: 3, question: "Masada kaç tane lamba var?", options: ["One", "Two", "Three"], correctAnswer: "Two" },
            { id: 4, question: "Lambalar nasıl?", options: ["Big", "Small", "Tall"], correctAnswer: "Small" },
            { id: 5, question: "Televizyon nerede?", options: ["On the table", "On the bed", "On the wall"], correctAnswer: "On the wall" },
            { id: 6, question: "Kaç tane poster var?", options: ["Two", "Three", "Four"], correctAnswer: "Three" },
            { id: 7, question: "Posterler nerede?", options: ["Next to the window", "Under the bed", "On the door"], correctAnswer: "Next to the window" },
            { id: 8, question: "Odadaki bitkiler ne renk?", options: ["Red", "Green", "Yellow"], correctAnswer: "Green" },
            { id: 9, question: "Masada ne yok?", options: ["A computer", "A printer", "A TV"], correctAnswer: "A printer" },
            { id: 10, question: "Yazar odası hakkında ne hissediyor?", options: ["He hates it", "He loves it", "He doesn't care"], correctAnswer: "He loves it" }
        ]
    },
    103: {
        unitId: 103, title: "Benim Ailem - Possessive Adjectives", language: "İngilizce", level: "A1",
        story: {
            text: "Look at this picture. It is my family. My father is tall and his hair is grey. His name is Robert. My mother is short and her hair is blonde. Her name is Mary. Our house is in the country. We have a dog. Its name is Buster and its ears are very long! My parents love their garden. Their flowers are beautiful. What about your family? Is your family big or small?",
            translation: "Bu fotoğrafa bak. O benim ailem. Babam uzundur ve onun saçları gridir. Onun adı Robert'tır. Annem kısadır ve onun saçları sarıdır. Onun adı Mary'dir. Bizim evimiz kırsaldadır. Bir köpeğimiz var. Onun adı Buster'dır ve onun kulakları çok uzundur! Ebeveynlerim bahçelerini severler. Onların çiçekleri güzeldir. Peki ya senin ailen? Senin ailen büyük mü yoksa küçük mü?"
        },
        vocabulary: [
            { word: "Picture", meaning: "Fotoğraf / Resim" }, { word: "Hair", meaning: "Saç" },
            { word: "Country", meaning: "Kırsal kesim / Ülke" }, { word: "Garden", meaning: "Bahçe" },
            { word: "Parents", meaning: "Ebeveynler (Anne-Baba)" }
        ],
        questions: [
            { id: 1, question: "Babanın adı nedir?", options: ["Tom", "Robert", "John"], correctAnswer: "Robert" },
            { id: 2, question: "Babanın saçları ne renktir?", options: ["Blonde", "Black", "Grey"], correctAnswer: "Grey" },
            { id: 3, question: "Anne nasıl biridir?", options: ["Tall", "Short", "Fat"], correctAnswer: "Short" },
            { id: 4, question: "Annenin saçları ne renktir?", options: ["Brown", "Grey", "Blonde"], correctAnswer: "Blonde" },
            { id: 5, question: "Annenin adı nedir?", options: ["Mary", "Sarah", "Emily"], correctAnswer: "Mary" },
            { id: 6, question: "Evleri nerededir?", options: ["In the city", "In the country", "Near the sea"], correctAnswer: "In the country" },
            { id: 7, question: "Köpeğin adı nedir?", options: ["Max", "Buddy", "Buster"], correctAnswer: "Buster" },
            { id: 8, question: "Köpeğin neresi uzundur?", options: ["Its tail", "Its legs", "Its ears"], correctAnswer: "Its ears" },
            { id: 9, question: "Ebeveynler neyi çok sever?", options: ["Their car", "Their dog", "Their garden"], correctAnswer: "Their garden" },
            { id: 10, question: "Bahçede güzel olan nedir?", options: ["The trees", "The flowers", "The birds"], correctAnswer: "The flowers" }
        ]
    },
    104: {
        unitId: 104, title: "Alışveriş Zamanı - Articles (A/An/The)", language: "İngilizce", level: "A1",
        story: {
            text: "Let's go to the supermarket. I need an apple and a banana for my breakfast. The apple is red and the banana is yellow. Look at the sky! The sun is shining today. We also need an umbrella because the weather man says it can rain later. Is there a good bakery near here? Yes, the bakery on the corner is fantastic. They sell a delicious chocolate cake. Let's buy the cake!",
            translation: "Hadi süpermarkete gidelim. Kahvaltım için bir elma ve bir muza ihtiyacım var. Elma kırmızıdır ve muz sarıdır. Gökyüzüne bak! Bugün güneş parlıyor. Ayrıca bir şemsiyeye ihtiyacımız var çünkü hava durumu sunucusu daha sonra yağmur yağabileceğini söylüyor. Buralarda iyi bir fırın var mı? Evet, köşedeki fırın harika. Lezzetli bir çikolatalı pasta satıyorlar. Hadi pastayı satın alalım!"
        },
        vocabulary: [
            { word: "Supermarket", meaning: "Süpermarket" }, { word: "Breakfast", meaning: "Kahvaltı" },
            { word: "Sky", meaning: "Gökyüzü" }, { word: "Umbrella", meaning: "Şemsiye" },
            { word: "Bakery", meaning: "Fırın" }
        ],
        questions: [
            { id: 1, question: "Yazar nereye gitmek istiyor?", options: ["To the park", "To the supermarket", "To the hospital"], correctAnswer: "To the supermarket" },
            { id: 2, question: "Kahvaltı için neye ihtiyacı var?", options: ["An egg and a tomato", "An apple and a banana", "Milk and cereal"], correctAnswer: "An apple and a banana" },
            { id: 3, question: "Elma ne renktir?", options: ["Green", "Yellow", "Red"], correctAnswer: "Red" },
            { id: 4, question: "Muz ne renktir?", options: ["Green", "Yellow", "Red"], correctAnswer: "Yellow" },
            { id: 5, question: "Gökyüzünde ne parlıyor?", options: ["The moon", "The stars", "The sun"], correctAnswer: "The sun" },
            { id: 6, question: "Neden bir şemsiyeye ihtiyaçları var?", options: ["It is hot", "It can rain later", "It is for a friend"], correctAnswer: "It can rain later" },
            { id: 7, question: "Fırın nerede?", options: ["On the corner", "Next to the supermarket", "Far away"], correctAnswer: "On the corner" },
            { id: 8, question: "Fırın nasıl bir yer?", options: ["Bad", "Fantastic", "Cheap"], correctAnswer: "Fantastic" },
            { id: 9, question: "Fırında ne satıyorlar?", options: ["A delicious apple pie", "A delicious chocolate cake", "A good bread"], correctAnswer: "A delicious chocolate cake" },
            { id: 10, question: "Hikayenin sonunda ne satın almak istiyorlar?", options: ["The umbrella", "The banana", "The cake"], correctAnswer: "The cake" }
        ]
    },
    105: {
        unitId: 105, title: "Buzdolabında Neler Var? - Some and Any", language: "İngilizce", level: "A1",
        story: {
            text: "I am very hungry. Let's look in the fridge. We have some eggs and some cheese. That is good for an omelet. But we don't have any milk. Do we have any tomatoes? Yes, we have some red tomatoes. Are there any mushrooms? No, there aren't any mushrooms. Let's make a cheese and tomato omelet. We can drink some water or some apple juice. The breakfast is ready!",
            translation: "Ben çok açım. Hadi buzdolabına bakalım. Biraz yumurtamız ve biraz peynirimiz var. Bu bir omlet için iyidir. Ama hiç sütümüz yok. Hiç domatesimiz var mı? Evet, biraz kırmızı domatesimiz var. Hiç mantar var mı? Hayır, hiç mantar yok. Hadi peynirli ve domatesli bir omlet yapalım. Biraz su veya biraz elma suyu içebiliriz. Kahvaltı hazır!"
        },
        vocabulary: [
            { word: "Hungry", meaning: "Aç" }, { word: "Fridge", meaning: "Buzdolabı" },
            { word: "Cheese", meaning: "Peynir" }, { word: "Mushroom", meaning: "Mantar" },
            { word: "Juice", meaning: "Meyve suyu" }
        ],
        questions: [
            { id: 1, question: "Yazar nasıl hissediyor?", options: ["Thirsty", "Hungry", "Tired"], correctAnswer: "Hungry" },
            { id: 2, question: "Nereye bakıyorlar?", options: ["In the cup", "In the fridge", "On the table"], correctAnswer: "In the fridge" },
            { id: 3, question: "Omlet için hangi malzemeleri buluyorlar?", options: ["Eggs and cheese", "Milk and bread", "Chicken and rice"], correctAnswer: "Eggs and cheese" },
            { id: 4, question: "Buzdolabında hiç var mı dedikleri ama olmayan şey nedir (1. eksik)?", options: ["Eggs", "Cheese", "Milk"], correctAnswer: "Milk" },
            { id: 5, question: "Domatesleri var mı?", options: ["No, they don't", "Yes, green tomatoes", "Yes, they have some red tomatoes"], correctAnswer: "Yes, they have some red tomatoes" },
            { id: 6, question: "Buzdolabında mantar var mı?", options: ["Yes, a lot", "No, there aren't any", "Yes, just one"], correctAnswer: "No, there aren't any" },
            { id: 7, question: "Nasıl bir omlet yapıyorlar?", options: ["Mushroom and cheese", "Cheese and tomato", "Plain egg"], correctAnswer: "Cheese and tomato" },
            { id: 8, question: "İçecek seçenekleri neler?", options: ["Coffee or tea", "Milk or cola", "Water or apple juice"], correctAnswer: "Water or apple juice" },
            { id: 9, question: "Kaç tane mantar var?", options: ["Zero", "Five", "Many"], correctAnswer: "Zero" },
            { id: 10, question: "Günün hangi öğününü hazırlıyorlar?", options: ["Breakfast", "Lunch", "Dinner"], correctAnswer: "Breakfast" }
        ]
    },
    106: {
        unitId: 106, title: "Alışveriş Listesi - Countable / Uncountable", language: "İngilizce", level: "A1",
        story: {
            text: "My shopping list is very long today. First, I need three carrots and two onions for the soup. Carrots and onions are countable. I can count them. But I also need a lot of rice and some meat. Rice and meat are uncountable. I cannot say 'two rices'. I need a bottle of water, a loaf of bread, and a slice of cheese. How much sugar do we have at home? Oh, we don't have much sugar. Let's add sugar to the list!",
            translation: "Bugün alışveriş listem çok uzun. Öncelikle, çorba için üç havuç ve iki soğana ihtiyacım var. Havuçlar ve soğanlar sayılabilirdir. Onları sayabilirim. Ama aynı zamanda çok fazla pirince ve biraz ete ihtiyacım var. Pirinç ve et sayılamazdır. 'İki pirinç' diyemem. Bir şişe suya, bir somun ekmeğe ve bir dilim peynire ihtiyacım var. Evde ne kadar şekerimiz var? Oh, pek fazla şekerimiz yok. Listeye şeker de ekleyelim!"
        },
        vocabulary: [
            { word: "List", meaning: "Liste" }, { word: "Carrot", meaning: "Havuç" },
            { word: "Onion", meaning: "Soğan" }, { word: "Rice", meaning: "Pirinç" },
            { word: "Loaf", meaning: "Somun" }
        ],
        questions: [
            { id: 1, question: "Alışveriş listesi nasıldır?", options: ["Short", "Long", "Normal"], correctAnswer: "Long" },
            { id: 2, question: "Çorba için kaç tane havuç lazım?", options: ["Two", "Three", "Four"], correctAnswer: "Three" },
            { id: 3, question: "Çorba için kaç tane soğan lazım?", options: ["Two", "Three", "Four"], correctAnswer: "Two" },
            { id: 4, question: "Aşağıdakilerden hangisi sayılabilir (countable)?", options: ["Rice", "Meat", "Carrot"], correctAnswer: "Carrot" },
            { id: 5, question: "Aşağıdakilerden hangisi sayılamaz (uncountable)?", options: ["Onion", "Meat", "Carrot"], correctAnswer: "Meat" },
            { id: 6, question: "Suyu nasıl ölçüyor?", options: ["A bottle", "A slice", "A loaf"], correctAnswer: "A bottle" },
            { id: 7, question: "Ekmeği nasıl ölçüyor?", options: ["A bottle", "A slice", "A loaf"], correctAnswer: "A loaf" },
            { id: 8, question: "Peyniri nasıl ölçüyor?", options: ["A bottle", "A slice", "A loaf"], correctAnswer: "A slice" },
            { id: 9, question: "Evde çok fazla var mı diye sorulan şey nedir?", options: ["Rice", "Sugar", "Water"], correctAnswer: "Sugar" },
            { id: 10, question: "Listeye son olarak ne ekleniyor?", options: ["Meat", "Sugar", "Cheese"], correctAnswer: "Sugar" }
        ]
    },
    107: {
        unitId: 107, title: "Zamanla Yarış - Prepositions of Time", language: "İngilizce", level: "A1",
        story: {
            text: "I wake up at seven o'clock in the morning. On Mondays, I usually go to the gym. In the afternoon, I work in my office from 1 PM to 5 PM. I meet my friends at noon for lunch. In the evening, I watch a movie. My favorite time of the year is in summer. We go to the beach in July. My birthday is on the 15th of August. I stay awake at night to read books.",
            translation: "Sabah saat yedide uyanırım. Pazartesi günleri genelde spor salonuna giderim. Öğleden sonra, ofisimde öğleden sonra 1'den 5'e kadar çalışırım. Öğlen yemeği için öğle vakti (noon) arkadaşlarımla buluşurum. Akşamları bir film izlerim. Yılın en sevdiğim zamanı yazdır. Temmuz ayında plaja gideriz. Benim doğum günüm 15 Ağustos'tadır. Geceleri kitap okumak için uyanık kalırım."
        },
        vocabulary: [
            { word: "Wake up", meaning: "Uyanmak" }, { word: "Gym", meaning: "Spor salonu" },
            { word: "Office", meaning: "Ofis" }, { word: "Beach", meaning: "Plaj/Kumsal" },
            { word: "Awake", meaning: "Uyanık" }
        ],
        questions: [
            { id: 1, question: "Sabah saat kaçta uyanıyor?", options: ["Six o'clock", "Seven o'clock", "Eight o'clock"], correctAnswer: "Seven o'clock" },
            { id: 2, question: "Hangi gün spor salonuna gidiyor?", options: ["On Sundays", "On Mondays", "On Fridays"], correctAnswer: "On Mondays" },
            { id: 3, question: "Ofiste ne zaman çalışıyor?", options: ["In the morning", "In the evening", "In the afternoon"], correctAnswer: "In the afternoon" },
            { id: 4, question: "Öğle yemeği için arkadaşlarıyla ne zaman buluşuyor?", options: ["At noon", "In the evening", "At midnight"], correctAnswer: "At noon" },
            { id: 5, question: "Akşamları (in the evening) ne yapıyor?", options: ["Goes to the gym", "Reads a book", "Watches a movie"], correctAnswer: "Watches a movie" },
            { id: 6, question: "Yılın en sevdiği zamanı hangisi?", options: ["Winter", "Spring", "Summer"], correctAnswer: "Summer" },
            { id: 7, question: "Plaja hangi ayda gidiyorlar?", options: ["In June", "In July", "In August"], correctAnswer: "In July" },
            { id: 8, question: "Doğum günü ne zaman?", options: ["On the 10th of August", "On the 15th of August", "On the 15th of July"], correctAnswer: "On the 15th of August" },
            { id: 9, question: "Geceleri ne yapmak için uyanık kalıyor?", options: ["To watch TV", "To read books", "To eat fast food"], correctAnswer: "To read books" },
            { id: 10, question: "Çalışma saatleri nedir?", options: ["1 PM to 5 PM", "9 AM to 5 PM", "8 AM to 4 PM"], correctAnswer: "1 PM to 5 PM" }
        ]
    },
    108: {
        unitId: 108, title: "Büyük Bina - Ordinal Numbers", language: "İngilizce", level: "A1",
        story: {
            text: "This is a very tall building in New York. The reception desk is on the first floor. Emma works on the second floor. She is a designer. The big cafeteria is on the third floor. Everyone loves to eat there. Mark's office is on the eighth floor. He has a great view of the city. The boss is on the tenth floor. To reach the top, you must go to the fiftieth floor! It takes a long time by elevator.",
            translation: "Bu New York'ta çok yüksek bir bina. Resepsiyon masası birinci kattadır. Emma ikinci katta çalışıyor. O bir tasarımcıdır. Büyük kafeterya üçüncü kattadır. Herkes orada yemek yemeyi sever. Mark'ın ofisi sekizinci kattadır. Onun şehrin harika bir manzarası var. Patron onuncu kattadır. Zirveye ulaşmak için ellinci kata gitmelisin! Asansörle uzun zaman alıyor."
        },
        vocabulary: [
            { word: "Building", meaning: "Bina" }, { word: "Floor", meaning: "Kat / Zemin" },
            { word: "Designer", meaning: "Tasarımcı" }, { word: "View", meaning: "Manzara" },
            { word: "Elevator", meaning: "Asansör" }
        ],
        questions: [
            { id: 1, question: "Bina nerededir?", options: ["London", "Paris", "New York"], correctAnswer: "New York" },
            { id: 2, question: "Resepsiyon masası hangi kattadır?", options: ["First floor", "Second floor", "Third floor"], correctAnswer: "First floor" },
            { id: 3, question: "Emma hangi katta çalışır?", options: ["First floor", "Second floor", "Eighth floor"], correctAnswer: "Second floor" },
            { id: 4, question: "Emma'nın mesleği nedir?", options: ["Teacher", "Designer", "Boss"], correctAnswer: "Designer" },
            { id: 5, question: "Büyük kafeterya hangi kattadır?", options: ["Second floor", "Third floor", "Tenth floor"], correctAnswer: "Third floor" },
            { id: 6, question: "Mark'ın ofisi hangi kattadır?", options: ["Third floor", "Eighth floor", "Tenth floor"], correctAnswer: "Eighth floor" },
            { id: 7, question: "Mark'ın nesine sahip olduğu söyleniyor?", options: ["A big car", "A great view", "A fast elevator"], correctAnswer: "A great view" },
            { id: 8, question: "Patron hangi kattadır?", options: ["Eighth floor", "Tenth floor", "Fiftieth floor"], correctAnswer: "Tenth floor" },
            { id: 9, question: "Binanın en üst katı hangisidir?", options: ["Tenth floor", "Twentieth floor", "Fiftieth floor"], correctAnswer: "Fiftieth floor" },
            { id: 10, question: "En üst kata ulaşmak için ne kullanırsın?", options: ["Stairs", "Elevator", "Bus"], correctAnswer: "Elevator" }
        ]
    },
    109: {
        unitId: 109, title: "Şehir Haritası - Prepositions of Place", language: "İngilizce", level: "A1",
        story: {
            text: "Welcome to my town. Look at the map. The hospital is opposite the post office. There is a bank next to the hospital. Between the bank and the school, there is a beautiful park. My favorite cafe is behind the supermarket. The cinema is in front of the train station. Where is the library? It is under the big clock tower. I love exploring the streets. Everything is very close in this town.",
            translation: "Benim kasabama hoş geldiniz. Haritaya bakın. Hastane postanenin karşısındadır. Hastanenin yanında bir banka var. Banka ve okulun arasında güzel bir park var. En sevdiğim kafe süpermarketin arkasındadır. Sinema tren istasyonunun önündedir. Kütüphane nerede? O büyük saat kulesinin altındadır. Sokakları keşfetmeyi seviyorum. Bu kasabada her şey çok yakındır."
        },
        vocabulary: [
            { word: "Opposite", meaning: "Karşısında" }, { word: "Between", meaning: "Arasında" },
            { word: "Behind", meaning: "Arkasında" }, { word: "In front of", meaning: "Önünde" },
            { word: "Explore", meaning: "Keşfetmek" }
        ],
        questions: [
            { id: 1, question: "Hastane neresindedir?", options: ["Next to the park", "Opposite the post office", "Behind the cinema"], correctAnswer: "Opposite the post office" },
            { id: 2, question: "Hastanenin yanında (next to) ne var?", options: ["A bank", "A park", "A school"], correctAnswer: "A bank" },
            { id: 3, question: "Güzel park nerede?", options: ["Behind the bank", "Between the bank and the school", "In front of the hospital"], correctAnswer: "Between the bank and the school" },
            { id: 4, question: "En sevdiği kafe nerede?", options: ["Behind the supermarket", "Next to the post office", "Under the clock tower"], correctAnswer: "Behind the supermarket" },
            { id: 5, question: "Sinema nerede?", options: ["Next to the bank", "In front of the train station", "Opposite the hospital"], correctAnswer: "In front of the train station" },
            { id: 6, question: "Hangi bina tren istasyonunun önündedir?", options: ["The hospital", "The library", "The cinema"], correctAnswer: "The cinema" },
            { id: 7, question: "Kütüphane neresindedir?", options: ["Under the big clock tower", "Next to the cafe", "Behind the school"], correctAnswer: "Under the big clock tower" },
            { id: 8, question: "Yazar kasabasında ne yapmayı seviyor?", options: ["Exploring the streets", "Sleeping", "Driving fast"], correctAnswer: "Exploring the streets" },
            { id: 9, question: "Kasabadaki mesafeler nasıldır?", options: ["Very far", "Very close", "Difficult to walk"], correctAnswer: "Very close" },
            { id: 10, question: "Bu okuma parçası neyi tarif ediyor?", options: ["A recipe", "A town map", "A weather report"], correctAnswer: "A town map" }
        ]
    },
    110: {
        unitId: 110, title: "Giysi Mağazasında - Demonstratives (This/That)", language: "İngilizce", level: "A1",
        story: {
            text: "I am in a clothing store now. I like this red shirt I am holding. It is very soft. But look at that blue shirt over there. That blue shirt is very stylish! These shoes give me comfort. I want to buy these shoes for my holiday. Are those sunglasses expensive? Yes, those sunglasses on the high shelf are very expensive. I will buy this shirt and these shoes today. That is enough for shopping.",
            translation: "Şu an bir giysi mağazasındayım. Elimde tuttuğum bu kırmızı gömleği seviyorum. Çok yumuşaktır. Ama şuradaki o mavi gömleğe bir bak. O mavi gömlek çok şıktır! Bu ayakkabılar bana rahatlık veriyor. Tatilim için bu ayakkabıları satın almak istiyorum. Şunlar (uzaktaki güneş gözlükleri) pahalı mı? Evet, yüksek raftaki o güneş gözlükleri çok pahalıdır. Bugün bu gömleği ve bu ayakkabıları alacağım. Bu, alışveriş için yeterli."
        },
        vocabulary: [
            { word: "Clothing store", meaning: "Giysi mağazası" }, { word: "Hold", meaning: "Tutmak" },
            { word: "Soft", meaning: "Yumuşak" }, { word: "Stylish", meaning: "Şık" },
            { word: "Shelf", meaning: "Raf" }
        ],
        questions: [
            { id: 1, question: "Hikaye nerede geçiyor?", options: ["In a supermarket", "In a clothing store", "At a cafe"], correctAnswer: "In a clothing store" },
            { id: 2, question: "Yazarın elinde tuttuğu (bu) gömlek ne renktir?", options: ["Red", "Blue", "Black"], correctAnswer: "Red" },
            { id: 3, question: "Kırmızı gömlek nasıl hissettiriyor?", options: ["Hard", "Rough", "Soft"], correctAnswer: "Soft" },
            { id: 4, question: "Uzaktaki (şu/o) gömlek ne renktir?", options: ["Red", "Blue", "Green"], correctAnswer: "Blue" },
            { id: 5, question: "Mavi gömlek için ne söylüyor?", options: ["It is cheap", "It is stylish", "It is ugly"], correctAnswer: "It is stylish" },
            { id: 6, question: "Yazar hangi ürünü rahat buluyor?", options: ["These shoes", "That hat", "These bags"], correctAnswer: "These shoes" },
            { id: 7, question: "Ayakkabıları ne için almak istiyor?", options: ["For his dog", "For his holiday", "For school"], correctAnswer: "For his holiday" },
            { id: 8, question: "Yüksek raftaki güneş gözlükleri (those) için ne söyleniyor?", options: ["Very cheap", "Very expensive", "Very bright"], correctAnswer: "Very expensive" },
            { id: 9, question: "Güneş gözlükleri nerede duruyor?", options: ["On the floor", "On the table", "On the high shelf"], correctAnswer: "On the high shelf" },
            { id: 10, question: "Yazar günü nasıl bitiriyor?", options: ["Buys the glasses", "Buys this shirt and these shoes", "Buys nothing"], correctAnswer: "Buys this shirt and these shoes" }
        ]
    }
};
