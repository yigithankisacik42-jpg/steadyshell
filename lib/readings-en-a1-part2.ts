import { UnitReading } from './readings';

export const enA1ReadingsPart2: { [key: number]: UnitReading } = {
    111: {
        unitId: 111, title: "Sahiplik - Have/Has got", language: "İngilizce", level: "A1",
        story: {
            text: "My family has got a beautiful farm. I have got two brown horses and three white sheep. My sister Anna has got a small pet rabbit. Her rabbit has got long ears and a short tail. Have you got any pets? My friend Mark hasn't got a farm, but he has got a dog. Mark's dog has got big teeth, but it is very friendly. We have all got animals in our lives and we love them.",
            translation: "Ailemin güzel bir çiftliği var (sahiptir). İki kahverengi atım ve üç beyaz koyunum var. Kız kardeşim Anna'nın küçük bir evcil tavşanı var. Tavşanının uzun kulakları ve kısa bir kuyruğu var. Senin hiç evcil hayvanın var mı? Arkadaşım Mark'ın bir çiftliği yok, ama bir köpeği var. Mark'ın köpeğinin büyük dişleri var ama çok dost canlısıdır. Hepimizin hayatında hayvanlar var ve onları seviyoruz."
        },
        vocabulary: [
            { word: "Farm", meaning: "Çiftlik" }, { word: "Horse", meaning: "At" },
            { word: "Sheep", meaning: "Koyun" }, { word: "Tail", meaning: "Kuyruk" },
            { word: "Friendly", meaning: "Dost canlısı" }
        ],
        questions: [
            { id: 1, question: "Ailenin neyi var?", options: ["A big house", "A small car", "A beautiful farm"], correctAnswer: "A beautiful farm" },
            { id: 2, question: "Yazarın kaç tane atı var?", options: ["One", "Two", "Three"], correctAnswer: "Two" },
            { id: 3, question: "Yazarın sahip olduğu koyunlar ne renktir?", options: ["Black", "Brown", "White"], correctAnswer: "White" },
            { id: 4, question: "Kız kardeşin (Anna) hangi evcil hayvanı var?", options: ["A cat", "A dog", "A rabbit"], correctAnswer: "A rabbit" },
            { id: 5, question: "Tavşanın neresi kısadır?", options: ["Its ears", "Its legs", "Its tail"], correctAnswer: "Its tail" },
            { id: 6, question: "Arkadaşı Mark'ın neyi yok?", options: ["A farm", "A dog", "A cat"], correctAnswer: "A farm" },
            { id: 7, question: "Mark'ın neyi var?", options: ["A dog", "A farm", "A bird"], correctAnswer: "A dog" },
            { id: 8, question: "Mark'ın köpeğinin neresi büyüktür?", options: ["Its ears", "Its tail", "Its teeth"], correctAnswer: "Its teeth" },
            { id: 9, question: "Mark'ın köpeği nasıldır?", options: ["Angry and wild", "Friendly", "Quiet"], correctAnswer: "Friendly" },
            { id: 10, question: "Kahramanlarımız hayatlarında neyi severler?", options: ["Their cars", "Their computers", "Their animals"], correctAnswer: "Their animals" }
        ]
    },
    112: {
        unitId: 112, title: "Hayvanlar Alemi - Çoğullar", language: "İngilizce", level: "A1",
        story: {
            text: "Look at the park today. There are many men, women and children playing. These are irregular plurals. We don't say 'mans' or 'childs'. I can see five small babies in their strollers. Some birds are flying in the sky. Look! There are two mice running near the trees. Mice is the plural of mouse. People are sitting on the benches. It is a wonderful day to watch the leaves fall.",
            translation: "Bugün parka bak. Oynayan birçok adam, kadın ve çocuk var. Bunlar kuralsız çoğullardır. 'Mans' veya 'childs' demeyiz. Bebek arabalarında beş küçük bebek görebiliyorum. Bazı kuşlar gökyüzünde uçuyor. Bak! Ağaçların yakınında koşan iki fare var. Fareler (mice), farenin (mouse) çoğuludur. İnsanlar banklarda oturuyor. Yaprakların düşüşünü izlemek için harika bir gün."
        },
        vocabulary: [
            { word: "Men", meaning: "Adamlar (Erkekler)" }, { word: "Women", meaning: "Kadınlar" },
            { word: "Children", meaning: "Çocuklar" }, { word: "Mice", meaning: "Fareler" },
            { word: "Leaves", meaning: "Yapraklar" }
        ],
        questions: [
            { id: 1, question: "Man (Adam) kelimesinin çoğulu nedir?", options: ["Mans", "Men", "Mannies"], correctAnswer: "Men" },
            { id: 2, question: "Child (Çocuk) kelimesinin çoğulu nedir?", options: ["Childs", "Children", "Childes"], correctAnswer: "Children" },
            { id: 3, question: "Baby (Bebek) kelimesinin çoğulu nedir?", options: ["Babys", "Babies", "Babyies"], correctAnswer: "Babies" },
            { id: 4, question: "Gökyüzünde ne uçuyor?", options: ["Mice", "Leaves", "Birds"], correctAnswer: "Birds" },
            { id: 5, question: "Ağaçların yanında kaç tane fare koşuyor?", options: ["Two", "Three", "Four"], correctAnswer: "Two" },
            { id: 6, question: "Farenin (Mouse) çoğulu nedir?", options: ["Mouses", "Mice", "Mices"], correctAnswer: "Mice" },
            { id: 7, question: "İnsanlar (People) nerede oturuyor?", options: ["On the grass", "On the benches", "In the trees"], correctAnswer: "On the benches" },
            { id: 8, question: "Bebekler nerede?", options: ["In their strollers", "On the benches", "In the cars"], correctAnswer: "In their strollers" },
            { id: 9, question: "Leaf (Yaprak) kelimesinin çoğulu nedir?", options: ["Leafs", "Leaves", "Leavs"], correctAnswer: "Leaves" },
            { id: 10, question: "Parktaki atmosfer nasıl?", options: ["Wonderful", "Boring", "Cold"], correctAnswer: "Wonderful" }
        ]
    },
    113: {
        unitId: 113, title: "Yeni Arabam - Adjective Order", language: "İngilizce", level: "A1",
        story: {
            text: "My brother bought a fantastic fast new red Italian sports car today. It looks amazing! We put a beautiful big round wooden table in the garage to celebrate. He wore his ugly old brown leather jacket for driving. I told him: 'Your jacket is terrible, but your car is a gorgeous shiny modern vehicle!' The adjective order is important in English. Opinion, size, age, shape, color, origin, material and purpose!",
            translation: "Kardeşim bugün harika, hızlı, yeni, kırmızı bir İtalyan spor arabası (fantastic fast new red Italian sports car) aldı. İnanılmaz görünüyor! Kutlamak için garaja güzel, büyük, yuvarlak ahşap bir masa koyduk. Sürüş için çirkin, eski, kahverengi deri ceketini giydi. Ona şöyle dedim: 'Ceketin berbat, ama araban muhteşem, parlak, modern bir araç!' İngilizcede sıfat sıralaması önemlidir. Fikir, boyut, yaş, şekil, renk, menşei, malzeme ve amaç!"
        },
        vocabulary: [
            { word: "Italian", meaning: "İtalyan" }, { word: "Sports car", meaning: "Spor araba" },
            { word: "Wooden", meaning: "Ahşaptan yapılmış" }, { word: "Leather", meaning: "Deri" },
            { word: "Gorgeous", meaning: "Muhteşem" }
        ],
        questions: [
            { id: 1, question: "Kardeşinin yeni arabası nasıldır?", options: ["A slow old green car", "A fantastic fast new red Italian sports car", "An ugly big yellow taxi"], correctAnswer: "A fantastic fast new red Italian sports car" },
            { id: 2, question: "Araba nerede üretilmiştir (origin)?", options: ["American", "German", "Italian"], correctAnswer: "Italian" },
            { id: 3, question: "Garaja ne tür bir masa koydular?", options: ["A small square plastic table", "A beautiful big round wooden table", "A cheap glass table"], correctAnswer: "A beautiful big round wooden table" },
            { id: 4, question: "Kutlamak için masa nereye kondu?", options: ["Into the garden", "Into the kitchen", "In the garage"], correctAnswer: "In the garage" },
            { id: 5, question: "Kardeşi ne giyiyordu?", options: ["A new amazing black shirt", "An ugly old brown leather jacket", "A big scary hat"], correctAnswer: "An ugly old brown leather jacket" },
            { id: 6, question: "Ceket hangi malzemeden yapılmıştı?", options: ["Cotton", "Leather", "Silk"], correctAnswer: "Leather" },
            { id: 7, question: "Yazar kardeşinin ceketi hakkında ne diyor?", options: ["It is perfect", "It is terrible", "It is brand new"], correctAnswer: "It is terrible" },
            { id: 8, question: "Sıfat diziliminde (Adjective Order) ilk sırada hangisi gelir?", options: ["Color", "Age", "Opinion (Fikir)"], correctAnswer: "Opinion (Fikir)" },
            { id: 9, question: "Sıfat diziliminde boyuttan (size) sonra ne gelir?", options: ["Origin", "Age", "Material"], correctAnswer: "Age" },
            { id: 10, question: "Yazar aracı nasıl tarif ediyor?", options: ["A gorgeous shiny modern vehicle", "A slow old truck", "An ugly brown van"], correctAnswer: "A gorgeous shiny modern vehicle" }
        ]
    },
    114: {
        unitId: 114, title: "Ben Ne Yapabilirim? - Can (Yetenek)", language: "İngilizce", level: "A1",
        story: {
            text: "I can play the piano very well, but I cannot play the guitar. My sister Lucy can speak three languages. She can speak English, Spanish and French. Can you ski? I can't ski at all. It is very difficult for me. Our father can cook delicious pasta, but he can't bake cakes. The birds can fly high, but they cannot swim. We all have different abilities and skills.",
            translation: "Piyanoyu çok iyi çalabilirim ama gitar çalamam. Kız kardeşim Lucy üç dil konuşabilir. İngilizce, İspanyolca ve Fransızca konuşabiliyor. Kayak yapabilir misin? Ben hiç kayak yapamam. Benim için çok zor. Babamız lezzetli makarna pişirebilir, ama pasta pişiremez. Kuşlar yüksekten uçabilirler ama yüzemezler. Hepimizin farklı yetenekleri ve becerileri vardır."
        },
        vocabulary: [
            { word: "Play the piano", meaning: "Piyano çalmak" }, { word: "Languages", meaning: "Diller" },
            { word: "Ski", meaning: "Kayak yapmak" }, { word: "Ability", meaning: "Yetenek" },
            { word: "Bake", meaning: "Fırında pişirmek (Kek, pasta)" }
        ],
        questions: [
            { id: 1, question: "Yazar hangi enstrümanı çok iyi çalabilir?", options: ["The guitar", "The piano", "The drums"], correctAnswer: "The piano" },
            { id: 2, question: "Yazar hangi enstrümanı çalamaz?", options: ["The piano", "The guitar", "The violin"], correctAnswer: "The guitar" },
            { id: 3, question: "Kız kardeşi Lucy kaç dil konuşabilir?", options: ["Two", "Three", "Four"], correctAnswer: "Three" },
            { id: 4, question: "Lucy hangi dilleri konuşabilir?", options: ["English, German and Turkish", "English, Spanish and French", "Italian, Russian, English"], correctAnswer: "English, Spanish and French" },
            { id: 5, question: "Yazar kayak yapabiliyor mu?", options: ["Yes, very well", "No, not at all", "Yes, a little bit"], correctAnswer: "No, not at all" },
            { id: 6, question: "Babası ne tür yemek pişirebilir?", options: ["Delicious soups", "Delicious pizzas", "Delicious pasta"], correctAnswer: "Delicious pasta" },
            { id: 7, question: "Babası ne pişiremez (bake)?", options: ["Pasta", "Meat", "Cakes"], correctAnswer: "Cakes" },
            { id: 8, question: "Kuşlar ne yapabilir?", options: ["Fly high", "Swim underwater", "Play instruments"], correctAnswer: "Fly high" },
            { id: 9, question: "Kuşlar ne yapamaz?", options: ["Fly", "Swim", "Eat"], correctAnswer: "Swim" },
            { id: 10, question: "Metnin ana fikri nedir?", options: ["We all like the same things", "We all have different abilities", "Animals are smart"], correctAnswer: "We all have different abilities" }
        ]
    },
    115: {
        unitId: 115, title: "Çikolatalı Kek Tarifi - Imperatives", language: "İngilizce", level: "A1",
        story: {
            text: "Let's make a chocolate cake. First, preheat the oven. Do not forget this step! Then, mix the flour, sugar and cocoa powder in a bowl. Add the eggs and milk. Don't use hot milk; use cold milk. Stir the mixture well. Pour the chocolate mixture into a pan. Bake it for thirty minutes. Finally, take it out and let it cool. Eat and enjoy your delicious cake!",
            translation: "Hadi çikolatalı bir kek yapalım. Öncelikle, fırını önceden ısıt. Bu adımı unutma! Sonra bir kasede unu, şekeri ve kakao tozunu karıştır. Yumurtaları ve sütü ekle. Sıcak süt kullanma; soğuk süt kullan. Karışımı iyice karıştır (çırp). Çikolatalı karışımı bir tavaya/kaba dök. Onu otuz dakika fırında pişir. Son olarak, çıkar ve soğumaya bırak. Ye ve lezzetli kekinin tadını çıkar!"
        },
        vocabulary: [
            { word: "Preheat", meaning: "Önceden ısıtmak" }, { word: "Mix", meaning: "Karıştırmak" },
            { word: "Flour", meaning: "Un" }, { word: "Stir", meaning: "Çırpmak / Hızlıca karıştırmak" },
            { word: "Pour", meaning: "Dökmek" }
        ],
        questions: [
            { id: 1, question: "Kek yapmak için ilk emir/adım nedir?", options: ["Mix the eggs", "Preheat the oven", "Pour the milk"], correctAnswer: "Preheat the oven" },
            { id: 2, question: "Hangisi kekte kullanılmaz?", options: ["Flour", "Sugar", "Meat"], correctAnswer: "Meat" },
            { id: 3, question: "Toz malzemeler nerede karıştırılmalıdır?", options: ["In a cup", "In a bowl", "In the sink"], correctAnswer: "In a bowl" },
            { id: 4, question: "Yumurtalarla birlikte ne eklenir?", options: ["Water", "Oil", "Milk"], correctAnswer: "Milk" },
            { id: 5, question: "Süt nasıl olmalıdır?", options: ["Hot", "Boiling", "Cold"], correctAnswer: "Cold" },
            { id: 6, question: "Karışıma ne yapılmalıdır?", options: ["Stir it well", "Throw it away", "Freeze it"], correctAnswer: "Stir it well" },
            { id: 7, question: "Kek nerede veya neyin içinde pişirilir?", options: ["Into a pan", "Into a glass", "On a plate"], correctAnswer: "Into a pan" },
            { id: 8, question: "Fırında kaç dakika pişirilmelidir?", options: ["Twenty minutes", "Thirty minutes", "Forty minutes"], correctAnswer: "Thirty minutes" },
            { id: 9, question: "Fırından çıkardıktan sonra ne emeli edilir?", options: ["Let it cool", "Eat it hot", "Put it in fridge"], correctAnswer: "Let it cool" },
            { id: 10, question: "Hikayede kullanılan yapının gramer adı nedir?", options: ["Past continuous", "Imperatives (Emir Kipi)", "Passive voice"], correctAnswer: "Imperatives (Emir Kipi)" }
        ]
    },
    116: {
        unitId: 116, title: "Sabah Koşusu - Movement Prepositions", language: "İngilizce", level: "A1",
        story: {
            text: "Every morning, I run out of my house. I walk along the river. Then, I run across the bridge to get to the park. Inside the park, I walk past the old oak tree and run through the tunnel. It is a dark tunnel. Don't go into the forest, it is dangerous. Finally, I run around the lake and go back up the hill towards my house. Exercise makes me strong.",
            translation: "Her sabah evimden dışarıya koşarım. Nehir boyunca yürürüm. Sonra, parka ulaşmak için köprünün karşısına (üzerinden) koşarım. Parkın içinde, eski meşe ağacının yanından geçerim ve tünelin içinden koşarım. O karanlık bir tüneldir. Ormanın içine gitme, tehlikelidir. Son olarak, gölün etrafında koşarım ve evime doğru tepeden yukarıya dönerim. Egzersiz beni güçlü yapar."
        },
        vocabulary: [
            { word: "Out of", meaning: "Dışarısına" }, { word: "Along", meaning: "Boyunca" },
            { word: "Across", meaning: "Karşısına (bir uçtan diğer uca)" }, { word: "Through", meaning: "İçinden geçerek" },
            { word: "Towards", meaning: "Doğru (yönelme)" }
        ],
        questions: [
            { id: 1, question: "Yazar ilk olarak nereye koşar?", options: ["Into the house", "Out of the house", "Through the window"], correctAnswer: "Out of the house" },
            { id: 2, question: "Nehir (river) nerede takip edilir?", options: ["Through the river", "Across the river", "Along the river"], correctAnswer: "Along the river" },
            { id: 3, question: "Parka ulaşmak için neyin üzerinden geçer?", options: ["The bridge", "The tunnel", "The lake"], correctAnswer: "The bridge" },
            { id: 4, question: "Hangi ağacın yanından geçer (past)?", options: ["Pine tree", "Oak tree", "Apple tree"], correctAnswer: "Oak tree" },
            { id: 5, question: "Tünelin içinden nasıl geçer?", options: ["He swims", "He cycles", "He runs through it"], correctAnswer: "He runs through it" },
            { id: 6, question: "Tünel nasıldır?", options: ["Bright", "Dark", "Hot"], correctAnswer: "Dark" },
            { id: 7, question: "Ormanın içine (into) girmek neden tavsiye edilmez?", options: ["It is dangerous", "It is small", "It is closed"], correctAnswer: "It is dangerous" },
            { id: 8, question: "Gölün neresinden koşar?", options: ["Under the lake", "Around the lake", "Into the lake"], correctAnswer: "Around the lake" },
            { id: 9, question: "Evine dönerken tepeyi (hill) nasıl çıkar?", options: ["Down the hill", "Up the hill", "Through the hill"], correctAnswer: "Up the hill" },
            { id: 10, question: "Yazarı güçlü yapan şey nedir?", options: ["Sleeping", "Eating", "Exercise"], correctAnswer: "Exercise" }
        ]
    },
    117: {
        unitId: 117, title: "Çiftçinin Günü - Present Simple", language: "İngilizce", level: "A1",
        story: {
            text: "My grandfather works on a large farm. He always wakes up at 5 AM. He milk the cows and feeds the chickens. He doesn't watch TV in the morning. Does he drink coffee? Yes, he drinks pure black coffee. After breakfast, he drives his tractor to the fields. He plants tomatoes and carrots. In the evening, he rests on his porch. Life is quiet on the farm.",
            translation: "Büyükbabam büyük bir çiftlikte çalışır. Her zaman sabah 5'te uyanır. İnekleri sağar ve tavukları besler. Sabahları TV izlemez. Kahve içer mi? Evet, saf siyah kahve içer. Kahvaltıdan sonra tarlaya traktörünü sürer. Domates ve havuç eker. Akşamları verandasında dinlenir. Hayat çiftlikte sessizdir."
        },
        vocabulary: [
            { word: "Wake up", meaning: "Uyanmak" }, { word: "Milk", meaning: "Süt sağmak" },
            { word: "Feed", meaning: "Beslemek" }, { word: "Tractor", meaning: "Traktör" },
            { word: "Porch", meaning: "Veranda" }
        ],
        questions: [
            { id: 1, question: "Büyükbaba nerede çalışır?", options: ["In a bank", "On a ship", "On a large farm"], correctAnswer: "On a large farm" },
            { id: 2, question: "Saat kaçta uyanır?", options: ["At 5 AM", "At 6 AM", "At 7 AM"], correctAnswer: "At 5 AM" },
            { id: 3, question: "Sabahları İnekler için ne yapar?", options: ["Feeds them", "Milks them", "Washes them"], correctAnswer: "Milks them" },
            { id: 4, question: "Tavuklara ne yapar?", options: ["Feeds them", "Milks them", "Runs after them"], correctAnswer: "Feeds them" },
            { id: 5, question: "Sabahları ne yapmaz?", options: ["Eat breakfast", "Watch TV", "Drink coffee"], correctAnswer: "Watch TV" },
            { id: 6, question: "Ne tür kahve içer?", options: ["Cold coffee", "Coffee with milk", "Pure black coffee"], correctAnswer: "Pure black coffee" },
            { id: 7, question: "Tarlaya ne sürer?", options: ["A truck", "A tractor", "A car"], correctAnswer: "A tractor" },
            { id: 8, question: "Tarlada ne eker (plants)?", options: ["Apples and oranges", "Wheat and corn", "Tomatoes and carrots"], correctAnswer: "Tomatoes and carrots" },
            { id: 9, question: "Akşamları nerede dinlenir?", options: ["On his porch", "In his bed", "In the barn"], correctAnswer: "On his porch" },
            { id: 10, question: "Çiftlikte hayat nasıldır?", options: ["Noisy", "Crowded", "Quiet"], correctAnswer: "Quiet" }
        ]
    },
    118: {
        unitId: 118, title: "Tren Ne Zaman Kalkıyor - Telling Time", language: "İngilizce", level: "A1",
        story: {
            text: "Excuse me, what time is it? It is half past three. My train leaves at quarter to four. I only have fifteen minutes! The ticket counter closes at twenty past three. Look at the big clock; it is ticking fast. My friend arrives at 4 o'clock exactly. I need to run to platform number nine. The journey takes two and a half hours. I will be in Paris at quarter past six.",
            translation: "Afedersiniz, saat kaç? Saat üç buçuk. Trenim dörde çeyrek kala kalkıyor. Sadece on beş dakikam var! Bilet gişesi üçü yirmi geçe kapanır. Büyük saate bak; hızlı tıkırdıyor. Arkadaşım tam saat 4'te varıyor. Dokuz numaralı perona koşmam lazım. Yolculuk iki buçuk saat sürüyor (alıyor). Altıyı çeyrek geçe Paris'te olacağım."
        },
        vocabulary: [
            { word: "What time is it", meaning: "Saat kaç" }, { word: "Half past", meaning: "Buçuk" },
            { word: "Quarter to", meaning: "Çeyrek kala" }, { word: "Quarter past", meaning: "Çeyrek geçe" },
            { word: "Ticket counter", meaning: "Bilet gişesi" }
        ],
        questions: [
            { id: 1, question: "Yazar saatin kaç olduğunu sorunca ne cevap alıyor?", options: ["Three o'clock", "Half past three", "Quarter past three"], correctAnswer: "Half past three" },
            { id: 2, question: "Tren saat kaçta kalkıyor?", options: ["Quarter to three", "Quarter to four", "Half past four"], correctAnswer: "Quarter to four" },
            { id: 3, question: "Yazarın trene binmek için ne kadar vakti kalmıştır?", options: ["Ten minutes", "Fifteen minutes", "Twenty minutes"], correctAnswer: "Fifteen minutes" },
            { id: 4, question: "Bilet gişesi saat kaçta kapanır?", options: ["At three o'clock", "At half past three", "At twenty past three"], correctAnswer: "At twenty past three" },
            { id: 5, question: "Küçük arkadaşı tam ne zaman varıyor?", options: ["At 3 o'clock", "At 4 o'clock", "At 5 o'clock"], correctAnswer: "At 4 o'clock" },
            { id: 6, question: "Hangi perona (platform) koşması gerekiyor?", options: ["Platform number eight", "Platform number nine", "Platform number ten"], correctAnswer: "Platform number nine" },
            { id: 7, question: "Saatin tıkırdaması (ticking) nasıl tarif ediliyor?", options: ["Slow", "Quiet", "Fast"], correctAnswer: "Fast" },
            { id: 8, question: "Yolculuk toplam kaç saat sürüyor?", options: ["One hour", "Two and a half hours", "Three hours"], correctAnswer: "Two and a half hours" },
            { id: 9, question: "Yolculuk nereye yapılıyor?", options: ["London", "Rome", "Paris"], correctAnswer: "Paris" },
            { id: 10, question: "Paris'e saat kaçta varacak?", options: ["Quarter past five", "Quarter past six", "Quarter to six"], correctAnswer: "Quarter past six" }
        ]
    },
    119: {
        unitId: 119, title: "Nasıl Giyinmeli? - Hava Durumu", language: "İngilizce", level: "A1",
        story: {
            text: "What is the weather like today? In the morning, it is cloudy and windy. Put on your jumper. In the afternoon, it starts to rain. You need your umbrella and your raincoat. Don't forget your boots! The streets are wet. But tomorrow, the sun will shine. It will be hot and sunny. We can wear t-shirts and shorts. The weather in spring is always full of surprises.",
            translation: "Bugün hava nasıl? Sabah, bulutlu ve rüzgarlı. Kazağını giy. Öğleden sonra, yağmur yağmaya başlıyor. Şemsiyene ve yağmurluğuna ihtiyacın var. Botlarını unutma! Sokaklar ıslak. Ama yarın, güneş parlayacak. Sıcak ve güneşli olacak. Tişört ve şort giyebiliriz. İlkbaharda hava durumu her zaman sürprizlerle doludur."
        },
        vocabulary: [
            { word: "Weather", meaning: "Hava durumu" }, { word: "Cloudy", meaning: "Bulutlu" },
            { word: "Windy", meaning: "Rüzgarlı" }, { word: "Jumper", meaning: "Kazak" },
            { word: "Wet", meaning: "Islak" }
        ],
        questions: [
            { id: 1, question: "Sabah hava nasıldır?", options: ["Hot and sunny", "Cloudy and windy", "Snowy"], correctAnswer: "Cloudy and windy" },
            { id: 2, question: "Sabah ne giymek tavsiye ediliyor?", options: ["T-shirt", "Shorts", "Jumper"], correctAnswer: "Jumper" },
            { id: 3, question: "Öğleden sonra ne olmaya başlıyor?", options: ["It starts to rain", "It snows", "The sun shines"], correctAnswer: "It starts to rain" },
            { id: 4, question: "Yağmur yağınca neye ihtiyacınız olur?", options: ["Sunglasses", "Umbrella and raincoat", "A hat"], correctAnswer: "Umbrella and raincoat" },
            { id: 5, question: "Neyi unutmamalısınız?", options: ["Your boots", "Your scarf", "Your gloves"], correctAnswer: "Your boots" },
            { id: 6, question: "Sokaklar (streets) nasıldır?", options: ["Dry", "Clean", "Wet"], correctAnswer: "Wet" },
            { id: 7, question: "Yarın hava nasıl olacak?", options: ["Windy", "Hot and sunny", "Cold"], correctAnswer: "Hot and sunny" },
            { id: 8, question: "Yarın ne giyebilirler?", options: ["Winter coat", "T-shirts and shorts", "Jumpers"], correctAnswer: "T-shirts and shorts" },
            { id: 9, question: "Hangi mevsimdeyiz?", options: ["Winter", "Summer", "Spring"], correctAnswer: "Spring" },
            { id: 10, question: "İlkbahar hakkında ne söyleniyor?", options: ["Always boring", "Full of surprises", "Always hot"], correctAnswer: "Full of surprises" }
        ]
    },
    120: {
        unitId: 120, title: "Hobilerim - Like, Love, Hate + ing", language: "İngilizce", level: "A1",
        story: {
            text: "In my free time, I love taking photographs. I enjoy walking in the nature. However, I hate staying at home all day. My brother likes playing video games. He doesn't like reading books. We both love watching classic movies on Sunday nights. What do you like doing? Do you like swimming or dancing? Life is beautiful when you find hobbies you love doing.",
            translation: "Boş zamanlarımda fotoğraf çekmeyi (taking) çok severim. Doğada yürümekten (walking) keyif alırım. Ancak, bütün gün evde kalmaktan (staying) nefret ederim. Erkek kardeşim video oyunları oynamayı (playing) sever. O, kitap okumayı (reading) sevmez. İkimiz de Pazar geceleri klasik filmler izlemeyi çok severiz. Sen ne yapmayı seversin? Yüzmeyi (swimming) ya da dans etmeyi sever misin? Yapmayı sevdiğin hobiler (hobbies) bulduğunda hayat güzeldir."
        },
        vocabulary: [
            { word: "Free time", meaning: "Boş zaman" }, { word: "Taking photographs", meaning: "Fotoğraf çekmek" },
            { word: "Stay", meaning: "Kalmak" }, { word: "Hate", meaning: "Nefret etmek" },
            { word: "Enjoy", meaning: "Keyif almak" }
        ],
        questions: [
            { id: 1, question: "Yazar boş zamanlarında ne yapmayı sever?", options: ["Taking photographs", "Playing video games", "Staying at home"], correctAnswer: "Taking photographs" },
            { id: 2, question: "Nerede yürümekten keyif alır?", options: ["In the city", "In the mall", "In the nature"], correctAnswer: "In the nature" },
            { id: 3, question: "Neden (ne yapmaktan) nefret eder?", options: ["Eating vegetables", "Staying at home all day", "Running fast"], correctAnswer: "Staying at home all day" },
            { id: 4, question: "Erkek kardeşi ne yapmayı sever?", options: ["Reading books", "Taking photos", "Playing video games"], correctAnswer: "Playing video games" },
            { id: 5, question: "Erkek kardeşi ne yapmayı sevmez?", options: ["Playing games", "Reading books", "Listening to music"], correctAnswer: "Reading books" },
            { id: 6, question: "İkisi de (We both) ortak neyi çok sever?", options: ["Watching classic movies", "Swimming in the lake", "Dancing at a party"], correctAnswer: "Watching classic movies" },
            { id: 7, question: "Filmleri ne zaman izlerler?", options: ["Friday mornings", "Saturday afternoons", "Sunday nights"], correctAnswer: "Sunday nights" },
            { id: 8, question: "Okuyucuya hangi aktiviteyi sevip sevmediğini sorar?", options: ["Cooking", "Swimming or dancing", "Drawing"], correctAnswer: "Swimming or dancing" },
            { id: 9, question: "Gramer kuralına göre 'like' fiilinden sonra gelen aktiviteye hangi takı eklenir?", options: ["-ed", "-s", "-ing"], correctAnswer: "-ing" },
            { id: 10, question: "Yazara göre 'Hayat' ne zaman güzeldir?", options: ["When you sleep", "When you find hobbies you love doing", "When you have money"], correctAnswer: "When you find hobbies you love doing" }
        ]
    }
};
