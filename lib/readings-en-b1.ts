import { UnitReading } from './readings';

/**
 * SteadyShell English B1 Reading Database
 * Units 161-190
 */

const enB1Readings: Record<number, UnitReading> = {
    // ===== ÜNİTE 161: FUTURE PLANS =====
    161: {
        unitId: 161, title: "Career Ambitions", language: "İngilizce", level: "B1",
        story: {
            text: "My goal is to become a successful manager within the next five years. To achieve this, I have the intention of completing a leadership course next month. I need to organize my schedule carefully to balance work and study. It is hard to predict the future, but I expect that digital skills will be even more important soon. I have already made a definite arrangement with my boss to take on more responsibility in new projects. I believe that with the right ambition and hard work, I can reach my target.",
            translation: "Hedefim önümüzdeki beş yıl içinde başarılı bir yönetici olmak. Bunu başarmak için önümüzdeki ay bir liderlik kursunu tamamlama niyetim var. İş ve dersi dengelemek için programımı dikkatlice organize etmem gerekiyor. Geleceği tahmin etmek zordur, ancak dijital becerilerin yakında daha da önemli olacağını bekliyorum. Yeni projelerde daha fazla sorumluluk almak için patronumla şimdiden kesin bir düzenleme yaptım. Doğru hırs ve sıkı çalışma ile hedefime ulaşabileceğime inanıyorum."
        },
        vocabulary: [
            { word: "Intention", meaning: "Niyet" }, { word: "Ambition", meaning: "Hırs/Hedef" },
            { word: "Organize", meaning: "Organize etmek" }, { word: "Schedule", meaning: "Program" },
            { word: "Achieve", meaning: "Başarmak" }
        ],
        questions: [
            { id: 1, question: "What is the narrator's goal?", options: ["To quit their job", "To become a manager", "To travel the world"], correctAnswer: "To become a manager" },
            { id: 2, question: "When does the leadership course start?", options: ["Next week", "Next month", "Next year"], correctAnswer: "Next month" },
            { id: 3, question: "Why does the narrator need to organize their schedule?", options: ["To find a new job", "To balance work and study", "To go on vacation"], correctAnswer: "To balance work and study" },
            { id: 4, question: "What does the narrator expect for the future?", options: ["Less work", "Lower salaries", "Importance of digital skills"], correctAnswer: "Importance of digital skills" },
            { id: 5, question: "Who did the narrator make an arrangement with?", options: ["Their family", "Their boss", "A teacher"], correctAnswer: "Their boss" },
            { id: 6, question: "What is the intended timeframe for the goal?", options: ["One year", "Two years", "Five years"], correctAnswer: "Five years" },
            { id: 7, question: "What is hard to do according to the text?", options: ["To study", "To predict the future", "To work hard"], correctAnswer: "To predict the future" },
            { id: 8, question: "What will the narrator take on in new projects?", options: ["More money", "More responsibility", "Less time"], correctAnswer: "More responsibility" },
            { id: 9, question: "The word 'Ambition' in the text means:", options: ["Laziness", "A strong desire to achieve", "A fixed schedule"], correctAnswer: "A strong desire to achieve" },
            { id: 10, question: "How does the narrator feel about reaching their target?", options: ["Doubtful", "Confident", "Uninterested"], correctAnswer: "Confident" }
        ]
    },
    // ===== ÜNİTE 162: TRAVEL POSSIBILITIES =====
    162: {
        unitId: 162, title: "At the Airport", language: "İngilizce", level: "B1",
        story: {
            text: "There is a possibility that our flight will be delayed due to the weather. If it is likely to rain, departures might be slow. We should check the arrival time of the plane before we leave for the airport. Please keep your boarding pass and passport ready at all times. Once we arrive, we have to go through customs and pick up our luggage at the terminal. Don't leave your bags unattended while waiting for your flight. It's better to be early than late for such important arrangements.",
            translation: "Hava durumu nedeniyle uçuşumuzun gecikme olasılığı var. Yağmur yağma ihtimali varsa, kalkışlar yavaşlayabilir. Havaalanına gitmeden önce uçağın varış saatini kontrol etmeliyiz. Lütfen biniş kartınızı ve pasaportunuzu her zaman hazır tutun. Vardığımızda gümrükten geçmeli ve terminaldeki bagajlarımızı almalıyız. Uçuşunuzu beklerken çantalarınızı sahipsiz bırakmayın. Bu kadar önemli düzenlemeler için geç kalmaktansa erken gitmek daha iyidir."
        },
        vocabulary: [
            { word: "Possibility", meaning: "Olasılık" }, { word: "Departure", meaning: "Kalkış" },
            { word: "Arrival", meaning: "Varış" }, { word: "Luggage", meaning: "Bagaj" },
            { word: "Customs", meaning: "Gümrük" }
        ],
        questions: [
            { id: 1, question: "Why might the flight be delayed?", options: ["Technical issues", "Weather", "Too many passengers"], correctAnswer: "Weather" },
            { id: 2, question: "What should you check before leaving?", options: ["The arrival time", "The weather forecast", "The terminal map"], correctAnswer: "The arrival time" },
            { id: 3, question: "Which documents should be ready?", options: ["Only ID", "Driver's license", "Boarding pass and passport"], correctAnswer: "Boarding pass and passport" },
            { id: 4, question: "Where do you pick up your luggage?", options: ["At the gate", "At the terminal", "At customs"], correctAnswer: "At the terminal" },
            { id: 5, question: "What is the advice about bags?", options: ["Keep them open", "Don't leave them unattended", "Put stickers on them"], correctAnswer: "Don't leave them unattended" },
            { id: 6, question: "If it rains, what might happen to departures?", options: ["They will be faster", "They might be slow", "They will be cancelled"], correctAnswer: "They might be slow" },
            { id: 7, question: "What must you go through after you arrive?", options: ["Security", "Customs", "The exit"], correctAnswer: "Customs" },
            { id: 8, question: "Is it better to be early or late?", options: ["Early", "Late", "Exactly on time"], correctAnswer: "Early" },
            { id: 9, question: "The word 'Luggage' refers to:", options: ["Bags and suitcases", "Food and drinks", "Electronics"], correctAnswer: "Bags and suitcases" },
            { id: 10, question: "The text is mainly about:", options: ["Train travel", "Airport procedures", "Bus schedules"], correctAnswer: "Airport procedures" }
        ]
    },
    // ===== ÜNİTE 163: IMAGINARY SITUATIONS =====
    163: {
        unitId: 163, title: "The Ideal Vacation", language: "İngilizce", level: "B1",
        story: {
            text: "If I had enough money, I would stay in a luxury hotel by the sea. I would check the availability of a room with a balcony first. I would recommend a place that offers great sightseeing experiences. In this hypothetical situation, I don't have a budget, so I can choose anything I want. However, in reality, we often have to make a reservation months in advance to get a good price. It would be an amazing experience to travel around the world and see all the famous landmarks.",
            translation: "Eğer yeterli param olsaydı, deniz kenarında lüks bir otelde kalırdım. Önce balkonlu bir odanın müsaitliğini kontrol ederdim. Harika gezip görme deneyimleri sunan bir yer önerirdim. Bu varsayımsal durumda bir bütçem yok, bu yüzden istediğim her şeyi seçebilirim. Ancak gerçekte, iyi bir fiyat almak için genellikle aylar öncesinden rezervasyon yapmamız gerekiyor. Dünyayı dolaşmak ve tüm ünlü yapıları görmek harika bir deneyim olurdu."
        },
        vocabulary: [
            { word: "Luxury", meaning: "Lüks" }, { word: "Availability", meaning: "Müsaitlik" },
            { word: "Recommend", meaning: "Önermek" }, { word: "Budget", meaning: "Bütçe" },
            { word: "Sightseeing", meaning: "Gezip görme" }
        ],
        questions: [
            { id: 1, question: "Where would the narrator stay if they had money?", options: ["In a small hut", "In a luxury hotel", "In a city apartment"], correctAnswer: "In a luxury hotel" },
            { id: 2, question: "What would they check first?", options: ["The price", "The food", "Room availability with a balcony"], correctAnswer: "Room availability with a balcony" },
            { id: 3, question: "What kind of place would they recommend?", options: ["A cheap one", "One with sightseeing experiences", "A quiet one"], correctAnswer: "One with sightseeing experiences" },
            { id: 4, question: "Why can the narrator choose anything in the story?", options: ["Because they are rich", "Because they have no budget in this scenario", "Because it is free"], correctAnswer: "Because they have no budget in this scenario" },
            { id: 5, question: "How far in advance should you make a reservation in reality?", options: ["One day", "One week", "Months"], correctAnswer: "Months" },
            { id: 6, question: "In reality, why do we make reservations early?", options: ["To be polite", "To get a good price", "To meet people"], correctAnswer: "To get a good price" },
            { id: 7, question: "What would be an 'amazing experience'?", options: ["Staying at home", "Traveling around the world", "Buying a car"], correctAnswer: "Traveling around the world" },
            { id: 8, question: "The situation in the text is:", options: ["Real", "Hypothetical", "Historical"], correctAnswer: "Hypothetical" },
            { id: 9, question: "What does 'Sightseeing' involve?", options: ["Cooking", "Seeing famous landmarks", "Studying"], correctAnswer: "Seeing famous landmarks" },
            { id: 10, question: "What is a 'Landmark'?", options: ["A type of food", "A famous building or place", "A travel bag"], correctAnswer: "A famous building or place" }
        ]
    },
    // ===== ÜNİTE 164: PASSIVE VOICE =====
    164: {
        unitId: 164, title: "How Glass is Produced", language: "İngilizce", level: "B1",
        story: {
            text: "Glass is produced from natural materials like sand and soda ash. It was first invented thousands of years ago, but modern methods are used today. Large quantities of glass are manufactured in factories around the world. The designs are created by experts to ensure they are both beautiful and strong. Once the glass is formed, it is distributed to different companies. Today, glass is required for many things, from windows to smartphone screens. It is also delivered in large sheets to construction sites where big buildings are constructed.",
            translation: "Cam; kum ve soda külü gibi doğal malzemelerden üretilir. İlk olarak binlerce yıl önce icat edildi ancak bugün modern yöntemler kullanılmaktadır. Dünyanın dört bir yanındaki fabrikalarda büyük miktarlarda cam imal edilmektedir. Tasarımlar, hem güzel hem de dayanıklı olmalarını sağlamak için uzmanlarca oluşturulur. Cam şekillendirildikten sonra farklı şirketlere dağıtılır. Bugün pencerelerden akıllı telefon ekranlarına kadar pek çok şey için cam gereklidir. Ayrıca büyük binaların inşa edildiği şantiyelere büyük levhalar halinde teslim edilir."
        },
        vocabulary: [
            { word: "Produced", meaning: "Üretilen" }, { word: "Invented", meaning: "İcat edilen" },
            { word: "Manufactured", meaning: "İmal edilen" }, { word: "Distributed", meaning: "Dağıtılan" },
            { word: "Constructed", meaning: "İnşa edilen" }
        ],
        questions: [
            { id: 1, question: "What is glass produced from?", options: ["Plastic", "Sand and soda ash", "Wood"], correctAnswer: "Sand and soda ash" },
            { id: 2, question: "When was glass invented?", options: ["Last year", "In 1900", "Thousands of years ago"], correctAnswer: "Thousands of years ago" },
            { id: 3, question: "Where is glass manufactured today?", options: ["In small shops", "In factories", "At home"], correctAnswer: "In factories" },
            { id: 4, question: "Who creates the designs for glass?", options: ["Experts", "Children", "Robots"], correctAnswer: "Experts" },
            { id: 5, question: "What happens after the glass is formed?", options: ["It is thrown away", "It is distributed to companies", "It is melted again"], correctAnswer: "It is distributed to companies" },
            { id: 6, question: "Name one modern use of glass mentioned.", options: ["Shoes", "Smartphone screens", "Paper"], correctAnswer: "Smartphone screens" },
            { id: 7, question: "How is glass delivered to construction sites?", options: ["In small pieces", "In large sheets", "By mail"], correctAnswer: "In large sheets" },
            { id: 8, question: "The focus of this text is on:", options: ["The price of glass", "The process of glass production", "The history of sand"], correctAnswer: "The process of glass production" },
            { id: 9, question: "Is modern glass production different from the past?", options: ["Yes, modern methods are used", "No, it is exactly the same", "The text doesn't say"], correctAnswer: "Yes, modern methods are used" },
            { id: 10, question: "What does 'Manufactured' mean?", options: ["Grown on trees", "Made in a factory", "Found in nature"], correctAnswer: "Made in a factory" }
        ]
    },
    // ===== ÜNİTE 165: REPORTED SPEECH =====
    165: {
        unitId: 165, title: "The Office Meeting", language: "İngilizce", level: "B1",
        story: {
            text: "During the meeting, the manager informed us that the new project would start next week. She mentioned that the budget was already approved. One employee claimed that they needed more time to finish the previous task. The manager suggested a new plan to work faster. She explained that every team member must report their progress daily. She also stated that success depends on our collaboration. Later, she admitted that the schedule was very tight, but denied that it was impossible to achieve.",
            translation: "Toplantı sırasında yönetici, yeni projenin önümüzdeki hafta başlayacağı konusunda bizi bilgilendirdi. Bütçenin şimdiden onaylandığından bahsetti. Bir çalışan önceki işi bitirmek için daha fazla zamana ihtiyaçları olduğunu iddia etti. Yönetici daha hızlı çalışmak için yeni bir plan önerdi. Her ekip üyesinin ilerlemesini günlük olarak rapor etmesi gerektiğini açıkladı. Ayrıca başarının işbirliğimize bağlı olduğunu belirtti. Daha sonra programın çok sıkışık olduğunu kabul etti, ancak başarmanın imkansız olduğunu inkar etti (reddetti)."
        },
        vocabulary: [
            { word: "Inform", meaning: "Bilgilendirmek" }, { word: "Claim", meaning: "İddia etmek" },
            { word: "Suggest", meaning: "Önermek" }, { word: "Admit", meaning: "Kabul etmek" },
            { word: "Deny", meaning: "Reddetmek" }
        ],
        questions: [
            { id: 1, question: "When will the new project start?", options: ["Today", "Next week", "Next month"], correctAnswer: "Next week" },
            { id: 2, question: "What did the manager mention about the budget?", options: ["It was rejected", "It was approved", "It was missing"], correctAnswer: "It was approved" },
            { id: 3, question: "What did an employee claim?", options: ["They need more money", "They need more time", "They want a vacation"], correctAnswer: "They need more time" },
            { id: 4, question: "What did the manager suggest?", options: ["A new plan", "To quit", "To take a break"], correctAnswer: "A new plan" },
            { id: 5, question: "How often should progress be reported?", options: ["Weekly", "Monthly", "Daily"], correctAnswer: "Daily" },
            { id: 6, question: "What does success depend on?", options: ["Luck", "Collaboration", "Money"], correctAnswer: "Collaboration" },
            { id: 7, question: "What did the manager admit?", options: ["That the project was bad", "That the schedule was tight", "That she was tired"], correctAnswer: "That the schedule was tight" },
            { id: 8, question: "Did the manager think the goal was impossible?", options: ["Yes", "No", "She wasn't sure"], correctAnswer: "No" },
            { id: 9, question: "The word 'Informed' means:", options: ["Told someone facts", "Asked a question", "Ignored someone"], correctAnswer: "Told someone facts" },
            { id: 10, question: "What was 'approved'?", options: ["The vacation", "The budget", "The employee"], correctAnswer: "The budget" }
        ]
    },
    // ===== ÜNİTE 166: PHRASAL VERBS 1 =====
    166: {
        unitId: 166, title: "An Unexpected Adventure", language: "İngilizce", level: "B1",
        story: {
            text: "Last weekend, we decided to set up a small camp in the mountains. We wanted to find out if we could survive in the wild for two days. We started to look for a perfect spot near the river. To get on the trail, we had to hike for two hours. My uncle came to pick up the kids after the first night because they were tired. I stayed to look after the equipment. We will come back next month for another adventure. Now that I wake up in my own bed, I realize how much I missed home. Let's go out for dinner tonight to celebrate our return!",
            translation: "Geçen hafta sonu dağlarda küçük bir kamp kurmaya (set up) karar verdik. Doğada iki gün hayatta kalıp kalamayacağımızı öğrenmek (find out) istedik. Nehrin yakınında mükemmel bir yer aramaya (look for) başladık. Patikaya girmek (get on) için iki saat yürümek zorunda kaldık. Amcam, çocuklar yoruldukları için ilk geceden sonra onları almaya (pick up) geldi. Ben ekipmanlara bakmak (look after) için kaldım. Gelecek ay başka bir macera için geri döneceğiz (come back). Şimdi kendi yatağımda uyandığımda (wake up), evimi ne kadar çok özlediğimi anlıyorum. Dönüşümüzü kutlamak için bu akşam yemeğe dışarı çıkalım (go out)!"
        },
        vocabulary: [
            { word: "Set up", meaning: "Kurmak" }, { word: "Find out", meaning: "Öğrenmek" },
            { word: "Pick up", meaning: "Almak/Toplamak" }, { word: "Look after", meaning: "Bakmak" },
            { word: "Go out", meaning: "Dışarı çıkmak" }
        ],
        questions: [
            { id: 1, question: "What did they set up in the mountains?", options: ["A hotel", "A small camp", "A business"], correctAnswer: "A small camp" },
            { id: 2, question: "What did they want to find out?", options: ["If they can survive", "If it is raining", "The name of the mountain"], correctAnswer: "If they can survive" },
            { id: 3, question: "How long did it take to get on the trail?", options: ["One hour", "Two hours", "All day"], correctAnswer: "Two hours" },
            { id: 4, question: "Who did the uncle pick up?", options: ["The narrator", "The kids", "The equipment"], correctAnswer: "The kids" },
            { id: 5, question: "Why did the narrator stay?", options: ["To sleep", "To look after equipment", "To fish"], correctAnswer: "To look after equipment" },
            { id: 6, question: "What is the plan for next month?", options: ["To sell equipment", "To come back", "To stay home"], correctAnswer: "To come back" },
            { id: 7, question: "What does the narrator realize after waking up?", options: ["They are tired", "They missed home", "They are hungry"], correctAnswer: "They missed home" },
            { id: 8, question: "What do they want to do tonight?", options: ["Sleep", "Go out for dinner", "Watch TV"], correctAnswer: "Go out for dinner" },
            { id: 9, question: "What were they looking for?", options: ["Gold", "A perfect spot", "A dog"], correctAnswer: "A perfect spot" },
            { id: 10, question: "Did the kids stay for two nights?", options: ["Yes", "No", "It is not mentioned"], correctAnswer: "No" }
        ]
    },
    // ===== ÜNİTE 167: PHRASAL VERBS 2 =====
    167: {
        unitId: 167, title: "Starting Fresh", language: "İngilizce", level: "B1",
        story: {
            text: "Moving to a new city is never easy. Your car might break down on the way, but you shouldn't give up. You must carry on until you reach your new home. Once you arrive, you'll need to fill in some forms at the local office. After a long day, you can turn on the TV and relax. Don't forget to turn off the lights before you sleep. You should take care of your new apartment and keep it clean. It's exciting to grow up in one place and move to another. Just make sure you don't run out of energy!",
            translation: "Yeni bir şehre taşınmak asla kolay değildir. Arabanız yolda bozulabilir (break down), ama pes etmemelisiniz (give up). Yeni evinize ulaşana kadar devam etmelisiniz (carry on). Vardığınızda, yerel ofiste bazı formları doldurmanız (fill in) gerekecektir. Uzun bir günün ardından TV'yi açıp (turn on) rahatlayabilirsiniz. Uyumadan önce ışıkları kapatmayı (turn off) unutmayın. Yeni dairenize iyi bakmalı (take care of) ve onu temiz tutmalısınız. Bir yerde büyüyüp (grow up) başka bir yere taşınmak heyecan vericidir. Sadece enerjinizin tükenmediğinden (run out of) emin olun!"
        },
        vocabulary: [
            { word: "Break down", meaning: "Bozulmak" }, { word: "Give up", meaning: "Vazgeçmek" },
            { word: "Fill in", meaning: "Doldurmak" }, { word: "Take care of", meaning: "Bakmak/Ilgilenmek" },
            { word: "Run out of", meaning: "Tükenmek" }
        ],
        questions: [
            { id: 1, question: "What might happen to the car?", options: ["It might be stolen", "It might break down", "It might fly"], correctAnswer: "It might break down" },
            { id: 2, question: "What should you NOT do even if it's hard?", options: ["Sleep", "Give up", "Eat"], correctAnswer: "Give up" },
            { id: 3, question: "What do you do with forms at the office?", options: ["Read them", "Fill them in", "Throw them away"], correctAnswer: "Fill them in" },
            { id: 4, question: "What can you do to relax after a long day?", options: ["Turn on the TV", "Run a marathon", "Go back home"], correctAnswer: "Turn on the TV" },
            { id: 5, question: "What should you turn off before sleeping?", options: ["The water", "The lights", "The radio"], correctAnswer: "The lights" },
            { id: 6, question: "What should you take care of?", options: ["Your old school", "Your new apartment", "The neighbors"], correctAnswer: "Your new apartment" },
            { id: 7, question: "Is moving to a new city described as easy?", options: ["Yes", "It's never easy", "Sometimes"], correctAnswer: "It's never easy" },
            { id: 8, question: "The word 'Grow up' refers to:", options: ["Getting taller", "Getting older in a place", "Buying a house"], correctAnswer: "Getting older in a place" },
            { id: 9, question: "What should you not run out of?", options: ["Milk", "Energy", "Patience"], correctAnswer: "Energy" },
            { id: 10, question: "What is the general tone of the text?", options: ["Scary", "Encouraging", "Boring"], correctAnswer: "Encouraging" }
        ]
    },
    // ===== ÜNİTE 168: NEWS & MEDIA =====
    168: {
        unitId: 168, title: "The Power of Media", language: "İngilizce", level: "B1",
        story: {
            text: "Today, anyone can reach a global audience through the internet. A simple video of a cat can go viral in hours. Broadcasting has changed significantly because of digital platforms. Sometimes, you see more commercials than content during a series. If you watch a foreign film, you might need subtitles to understand the dialogue. Journalism also has a huge impact on our opinions. Before watching a movie, I always read a review to see if it's good. A great performance by an actor can turn a simple drama into a masterpiece.",
            translation: "Bugün herkes internet aracılığıyla küresel bir kitleye (audience) ulaşabilir. Basit bir kedi videosu saatler içinde viral olabilir. Yayıncılık (broadcasting), dijital platformlar nedeniyle önemli ölçüde değişti. Bazen bir dizi (series) sırasında içerikten daha fazla reklam (commercial) görürsünüz. Yabancı bir film izlerseniz, diyaloğu anlamak için altyazılara (subtitle) ihtiyacınız olabilir. Gazetecilik (journalism) de fikirlerimiz üzerinde büyük bir etkiye sahiptir. Bir film izlemeden önce, iyi olup olmadığını görmek için her zaman bir inceleme (review) okurum. Bir oyuncunun harika performansı, basit bir dramı bir şahesere dönüştürebilir."
        },
        vocabulary: [
            { word: "Audience", meaning: "İzleyici/Kitle" }, { word: "Viral", meaning: "Viral" },
            { word: "Subtitle", meaning: "Altyazı" }, { word: "Review", meaning: "İnceleme" },
            { word: "Performance", meaning: "Performans" }
        ],
        questions: [
            { id: 1, question: "How can someone reach a global audience today?", options: ["By mail", "Through the internet", "By shouting"], correctAnswer: "Through the internet" },
            { id: 2, question: "How fast can a video go viral?", options: ["In years", "In hours", "It never does"], correctAnswer: "In hours" },
            { id: 3, question: "What has changed because of digital platforms?", options: ["Broadcasting", "The weather", "The price of food"], correctAnswer: "Broadcasting" },
            { id: 4, question: "What might you see too many of during a series?", options: ["Cats", "Commercials", "Actors"], correctAnswer: "Commercials" },
            { id: 5, question: "When do you need subtitles?", options: ["For silent movies", "For foreign films", "For cartoons"], correctAnswer: "For foreign films" },
            { id: 6, question: "What can have a huge impact on our opinions?", options: ["Journalism", "A cat", "Subtitles"], correctAnswer: "Journalism" },
            { id: 7, question: "What does the narrator do before watching a movie?", options: ["Eat popcorn", "Read a review", "Go to sleep"], correctAnswer: "Read a review" },
            { id: 8, question: "What can turn a drama into a masterpiece?", options: ["More commercials", "A great performance", "Loud music"], correctAnswer: "A great performance" },
            { id: 9, question: "The word 'Viral' means:", options: ["Slow moving", "Spreading quickly on the internet", "Old fashioned"], correctAnswer: "Spreading quickly on the internet" },
            { id: 10, question: "What is a 'Commercial'?", options: ["An advertisement", "A news report", "A long movie"], correctAnswer: "An advertisement" }
        ]
    },
    // ===== ÜNİTE 169: ENVIRONMENTAL ISSUES =====
    169: {
        unitId: 169, title: "Our Changing Environment", language: "İngilizce", level: "B1",
        story: {
            text: "Pollution is one of the biggest problems for our environment today. Air and water pollution can hurt local wildlife and endangered species. We must learn to recycle more of our waste to protect natural resources. Climate change and global warming are making our planet warmer every year. Nature conservation is essential to keep our world healthy for future generations. If we don't take action now, many animals will lose their homes. It is our responsibility to change our habits and live more sustainably.",
            translation: "Kirlilik (pollution), bugün çevremiz (environment) için en büyük sorunlardan biridir. Hava ve su kirliliği yerel vahşi yaşama ve nesli tükenmekte olan türlere zarar verebilir. Doğal kaynakları (resource) korumak için atıklarımızın daha fazlasını geri dönüştürmeyi (recycle) öğrenmeliyiz. İklim değişikliği ve küresel ısınma (global warming), gezegenimizi her yıl daha sıcak hale getiriyor. Dünyamızı gelecek nesiller için sağlıklı tutmak için doğayı koruma (conservation) esastır. Şimdi harekete geçmezsek, birçok hayvan evini kaybedecek. Alışkanlıklarımızı değiştirmek ve daha sürdürülebilir bir şekilde yaşamak bizim sorumluluğumuzdur."
        },
        vocabulary: [
            { word: "Pollution", meaning: "Kirlilik" }, { word: "Environment", meaning: "Çevre" },
            { word: "Recycle", meaning: "Geri dönüştürmek" }, { word: "Resource", meaning: "Kaynak" },
            { word: "Conservation", meaning: "Koruma" }
        ],
        questions: [
            { id: 1, question: "What is a major problem for the environment?", options: ["Rain", "Pollution", "Silence"], correctAnswer: "Pollution" },
            { id: 2, question: "What can be hurt by air and water pollution?", options: ["Robots", "Wildlife and endangered species", "Cars"], correctAnswer: "Wildlife and endangered species" },
            { id: 3, question: "Why should we recycle more?", options: ["To make money", "To protect natural resources", "To be busy"], correctAnswer: "To protect natural resources" },
            { id: 4, question: "What is making the planet warmer?", options: ["Buildings", "Climate change and global warming", "The moon"], correctAnswer: "Climate change and global warming" },
            { id: 5, question: "Why is nature conservation important?", options: ["To travel more", "To keep the world healthy", "To build factories"], correctAnswer: "To keep the world healthy" },
            { id: 6, question: "What will happen if we don't take action?", options: ["Animals will lose their homes", "Everything will be fine", "It will snow"], correctAnswer: "Animals will lose their homes" },
            { id: 7, question: "Who is responsible for changing habits?", options: ["Only companies", "It's our responsibility", "Nobody"], correctAnswer: "It's our responsibility" },
            { id: 8, question: "The word 'Endangered' means:", options: ["Very safe", "In danger of disappearing", "Very noisy"], correctAnswer: "In danger of disappearing" },
            { id: 9, question: "What is an example of a 'Natural Resource'?", options: ["Plastics", "Water and forests", "Computers"], correctAnswer: "Water and forests" },
            { id: 10, question: "The text suggests we should:", options: ["Live sustainably", "Use more resources", "Ignore pollution"], correctAnswer: "Live sustainably" }
        ]
    },
    // ===== ÜNİTE 170: SUSTAINABILITY =====
    170: {
        unitId: 170, title: "A Sustainable Future", language: "İngilizce", level: "B1",
        story: {
            text: "Sustainability means living in a way that protects our planet for the future. We need to reduce CO2 emissions to stop global warming. Protecting biodiversity is important for our local ecology. We must learn to preserve wild nature and use our limited resources wisely. Every small action, like using less water or electricity, has a global impact. Governments and individuals must work together to find sustainable energy solutions. We depend on nature for our survival, so we must protect it with great care.",
            translation: "Sürdürülebilirlik (sustainability), geleceğimiz için gezegenimizi koruyacak şekilde yaşamak demektir. Küresel ısınmayı durdurmak için CO2 emisyonlarını (emission) azaltmamız gerekiyor. Biyoçeşitliliği (biodiversity) korumak yerel ekolojimiz için önemlidir. Vahşi doğayı korumayı (preserve) ve sınırlı kaynaklarımızı (resource) akıllıca kullanmayı öğrenmeliyiz. Daha az su veya elektrik kullanmak gibi her küçük eylemin küresel bir etkisi (impact) vardır. Hükümetler ve bireyler sürdürülebilir enerji çözümleri bulmak için birlikte çalışmalıdır. Hayatta kalmak için doğaya bağımlıyız, bu yüzden onu büyük bir özenle korumalıyız."
        },
        vocabulary: [
            { word: "Emission", meaning: "Emisyon" }, { word: "Biodiversity", meaning: "Biyoçeşitlilik" },
            { word: "Preserve", meaning: "Korumak" }, { word: "Global", meaning: "Küresel" },
            { word: "Impact", meaning: "Etki" }
        ],
        questions: [
            { id: 1, question: "What does sustainability mean?", options: ["Living fast", "Protecting the planet for the future", "Moving to another planet"], correctAnswer: "Protecting the planet for the future" },
            { id: 2, question: "What should we reduce to stop global warming?", options: ["Food", "Emissions", "Books"], correctAnswer: "Emissions" },
            { id: 3, question: "Why is protecting biodiversity important?", options: ["For local ecology", "To save money", "To build parks"], correctAnswer: "For local ecology" },
            { id: 4, question: "How should we use limited resources?", options: ["Quickly", "Wisely", "Never use them"], correctAnswer: "Wisely" },
            { id: 5, question: "Does a small action have an impact?", options: ["No, it's too small", "Yes, it has a global impact", "Only in one city"], correctAnswer: "Yes, it has a global impact" },
            { id: 6, question: "Who must work together for energy solutions?", options: ["Only kids", "Governments and individuals", "Only scientists"], correctAnswer: "Governments and individuals" },
            { id: 7, question: "Why must we protect nature?", options: ["Because we depend on it", "Because it's pretty", "Because it's a rule"], correctAnswer: "Because we depend on it" },
            { id: 8, question: "The word 'Preserve' means:", options: ["To destroy", "To keep safe", "To cook"], correctAnswer: "To keep safe" },
            { id: 9, question: "What is an example of 'Biodiversity'?", options: ["Different types of soil", "Many different animals and plants", "Different types of cars"], correctAnswer: "Many different animals and plants" },
            { id: 10, question: "The text is about:", options: ["Historical events", "Future technology", "Sustainability and planet protection"], correctAnswer: "Sustainability and planet protection" }
        ]
    },
    // ===== ÜNİTE 171: CULTURE & TRADITIONS =====
    171: {
        unitId: 171, title: "Cultural Heritage", language: "İngilizce", level: "B1",
        story: {
            text: "Every country has its own unique culture and traditions. For many families, celebrating local festivals is a way to honor their heritage. We often follow social customs that have been passed down for generations. Rituals and celebrations help people feel a sense of identity and belonging. For example, some festivals use deep symbolism to tell the story of their ancestors. It is important to preserve these traditions because they represent our history and communal values.",
            translation: "Her ülkenin kendine özgü bir kültürü ve gelenekleri (tradition) vardır. Birçok aile için yerel festivalleri kutlamak, miraslarını (heritage) onurlandırmanın bir yoludur. Genellikle nesiller boyu aktarılan sosyal adetleri (custom) takip ederiz. Ritüeller (ritual) ve kutlamalar (celebration), insanların bir kimlik (identity) ve aidiyet duygusu hissetmelerine yardımcı olur. Örneğin, bazı festivaller atalarının (ancestry) hikayesini anlatmak için derin bir sembolizm (symbolism) kullanır. Bu gelenekleri korumak önemlidir çünkü bunlar tarihimizi ve toplumsal değerlerimizi temsil eder."
        },
        vocabulary: [
            { word: "Tradition", meaning: "Gelenek" }, { word: "Heritage", meaning: "Miras" },
            { word: "Custom", meaning: "Adet" }, { word: "Identity", meaning: "Kimlik" },
            { word: "Communal", meaning: "Toplumsal" }
        ],
        questions: [
            { id: 1, question: "What does every country have?", options: ["The same food", "Unique culture and traditions", "No history"], correctAnswer: "Unique culture and traditions" },
            { id: 2, question: "Why do families celebrate local festivals?", options: ["To buy clothes", "To honor their heritage", "To move to another city"], correctAnswer: "To honor their heritage" },
            { id: 3, question: "What are social customs passed down through?", options: ["Emails", "Generations", "Television"], correctAnswer: "Generations" },
            { id: 4, question: "How do rituals and celebrations help people?", options: ["They feel a sense of identity", "They feel tired", "They feel angry"], correctAnswer: "They feel a sense of identity" },
            { id: 5, question: "What do some festivals use to tell stories?", options: ["Smartphones", "Deep symbolism", "Fast cars"], correctAnswer: "Deep symbolism" },
            { id: 6, question: "Whose story do these festivals often tell?", options: ["Strangers", "Their ancestors", "Celebrities"], correctAnswer: "Their ancestors" },
            { id: 7, question: "Why is it important to preserve these traditions?", options: ["Because they represent history", "Because they are expensive", "Because they are new"], correctAnswer: "Because they represent history" },
            { id: 8, question: "The word 'Communal' refers to:", options: ["Private", "Shared by a group", "Secret"], correctAnswer: "Shared by a group" },
            { id: 9, question: "What are 'Ancestors'?", options: ["Future children", "Family members from long ago", "New neighbors"], correctAnswer: "Family members from long ago" },
            { id: 10, question: "The text is mainly about:", options: ["Cooking", "Culture and tradition", "Shopping habits"], correctAnswer: "Culture and tradition" }
        ]
    },
    // ===== ÜNİTE 172: ECONOMY & FINANCE =====
    172: {
        unitId: 172, title: "Managing Your Money", language: "İngilizce", level: "B1",
        story: {
            text: "Understanding the economy is important for managing personal finance. One of the best ways to save money is to plan a monthly budget. You should think about your income and your expenses carefully. If you have extra money, you might consider a safe investment to make a profit in the future. However, there is always a risk of loss in the market. Rising inflation can also affect the value of your currency. It is better to use your financial resources wisely and avoid unnecessary debt when possible.",
            translation: "Ekonomiyi (economy) anlamak, kişisel finansı (finance) yönetmek için önemlidir. Para biriktirmenin en iyi yollarından biri aylık bütçe (budget) planlamaktır. Gelirinizi ve giderlerinizi dikkatlice düşünmelisiniz. Fazladan paranız varsa, gelecekte kâr (profit) elde etmek için güvenli bir yatırım (investment) düşünebilirsiniz. Ancak piyasada (market) her zaman zarar (loss) riski vardır. Yükselen enflasyon (inflation) para biriminizin (currency) değerini de etkileyebilir. Maddi kaynaklarınızı (resources) akıllıca kullanmak ve mümkün olduğunda gereksiz borçlardan kaçınmak daha iyidir."
        },
        vocabulary: [
            { word: "Finance", meaning: "Finans" }, { word: "Budget", meaning: "Bütçe" },
            { word: "Investment", meaning: "Yatırım" }, { word: "Profit", meaning: "Kâr" },
            { word: "Inflation", meaning: "Enflasyon" }
        ],
        questions: [
            { id: 1, question: "What is important for managing personal finance?", options: ["Understanding the economy", "Playing games", "Buying a big TV"], correctAnswer: "Understanding the economy" },
            { id: 2, question: "What is a good way to save money?", options: ["Buying everything", "Planning a monthly budget", "Ignoring prices"], correctAnswer: "Planning a monthly budget" },
            { id: 3, question: "What should you think about when budgeting?", options: ["Only vacations", "Income and expenses", "Other people's money"], correctAnswer: "Income and expenses" },
            { id: 4, question: "Why do people make investments?", options: ["To lose money", "To make a profit", "To be famous"], correctAnswer: "To make a profit" },
            { id: 5, question: "Where is there a risk of loss?", options: ["In the bank", "In the market", "At home"], correctAnswer: "In the market" },
            { id: 6, question: "What can affect the value of currency?", options: ["The weather", "Inflation", "The price of shoes"], correctAnswer: "Inflation" },
            { id: 7, question: "How should you use your financial resources?", options: ["Quickly", "Wisely", "Never"], correctAnswer: "Wisely" },
            { id: 8, question: "The word 'Expense' refers to:", options: ["Money earned", "Money spent", "Money found"], correctAnswer: "Money spent" },
            { id: 9, question: "What is 'Debt'?", options: ["Money you owe", "Money you give as a gift", "A type of bank account"], correctAnswer: "Money you owe" },
            { id: 10, question: "The text suggests avoiding:", options: ["Savings", "Unnecessary debt", "All investments"], correctAnswer: "Unnecessary debt" }
        ]
    },
    // ===== ÜNİTE 173: DEBATE SKILLS =====
    173: {
        unitId: 173, title: "The School Debate", language: "İngilizce", level: "B1",
        story: {
            text: "In our school debate today, we discussed the impact of technology on homework. Each student had to state their opinion clearly. I tried to use strong evidence to support my argument. Some students agree that AI helps them learn faster, while others disagree and prefer traditional methods. It is important to try to persuade others with logic rather than emotion. At the end of the discussion, we reached a conclusion. Even if we oppose some ideas, we should always listen to different views with respect.",
            translation: "Bugünkü okul tartışmamızda (debate), teknolojinin ödevler üzerindeki etkisini tartıştık (discuss). Her öğrenci fikrini (opinion) açıkça belirtmek zorundaydı. Argümanımı (argument) desteklemek için güçlü kanıtlar (evidence) kullanmaya çalıştım. Bazı öğrenciler yapay zekanın daha hızlı öğrenmelerine yardımcı olduğu konusunda hemfikir (agree), diğerleri ise katılmıyor (disagree) ve geleneksel yöntemleri tercih ediyor. Başkalarını duygudan ziyade mantıkla ikna etmeye (persuade) çalışmak önemlidir. Tartışmanın sonunda bir sonuca (conclusion) vardık. Bazı fikirlere karşı çıksak (oppose) bile, farklı görüşleri her zaman saygıyla dinlemeliyiz."
        },
        vocabulary: [
            { word: "Debate", meaning: "Tartışma" }, { word: "Opinion", meaning: "Fikir" },
            { word: "Argument", meaning: "Argüman" }, { word: "Evidence", meaning: "Kanıt" },
            { word: "Persuade", meaning: "İkna etmek" }
        ],
        questions: [
            { id: 1, question: "What was the topic of the school debate?", options: ["Cooking", "Technology and homework", "Sports"], correctAnswer: "Technology and homework" },
            { id: 2, question: "What did each student have to do?", options: ["Sing a song", "State their opinion", "Draw a map"], correctAnswer: "State their opinion" },
            { id: 3, question: "What did the narrator use to support their argument?", options: ["Loud music", "Strong evidence", "False stories"], correctAnswer: "Strong evidence" },
            { id: 4, question: "Do all students agree about AI?", options: ["Yes", "No, some disagree", "The text doesn't say"], correctAnswer: "No, some disagree" },
            { id: 5, question: "How should you try to persuade others?", options: ["By shouting", "With logic", "With money"], correctAnswer: "With logic" },
            { id: 6, question: "What happened at the end of the discussion?", options: ["They fought", "They reached a conclusion", "Everyone left"], correctAnswer: "They reached a conclusion" },
            { id: 7, question: "Should you listen to ideas you oppose?", options: ["No, ignore them", "Yes, with respect", "Only if they are funny"], correctAnswer: "Yes, with respect" },
            { id: 8, question: "The word 'Persuade' means:", options: ["To make someone angry", "To make someone believe you", "To run away"], correctAnswer: "To make someone believe you" },
            { id: 9, question: "The word 'Oppose' means:", options: ["To support", "To be against", "To follow"], correctAnswer: "To be against" },
            { id: 10, question: "What did they 'reach' at the end?", options: ["The school", "A conclusion", "A prize"], correctAnswer: "A conclusion" }
        ]
    },
    // ===== ÜNİTE 174: PRESENTATIONS =====
    174: {
        unitId: 174, title: "Giving a Great Presentation", language: "İngilizce", level: "B1",
        story: {
            text: "Giving a presentation can be stressful, but preparation helps you speak with confidence. First, you should choose a topic that you are interested in. It is important to have a clear structure for your speech. Use visual aids to help the audience understand complex points. During the talk, you should highlight the most important facts. At the end, provide a short summary of your main ideas. If anyone is confused, try to clarify your points with simple examples. A good speaker always addresses the audience directly.",
            translation: "Sunum (presentation) yapmak stresli olabilir ancak hazırlık güvenle (confidence) konuşmanıza yardımcı olur. İlk olarak, ilgilendiğiniz bir konu (topic) seçmelisiniz. Konuşmanız için net bir yapıya (structure) sahip olmak önemlidir. Dinleyicilerin (audience) karmaşık noktaları anlamasına yardımcı olmak için görsel (visual) yardımlar kullanın. Konuşma sırasında en önemli gerçekleri vurgulamalısınız (highlight). Sonunda, ana fikirlerinizin kısa bir özetini (summary) sunun. Kafası karışan olursa, noktalarınızı basit örneklerle netleştirmeye (clarify) çalışın. İyi bir konuşmacı (speaker) her zaman dinleyicilere doğrudan hitap eder."
        },
        vocabulary: [
            { word: "Presentation", meaning: "Sunum" }, { word: "Confidence", meaning: "Güven" },
            { word: "Topic", meaning: "Konu" }, { word: "Audience", meaning: "Dinleyici" },
            { word: "Highlight", meaning: "Vurgulamak" }
        ],
        questions: [
            { id: 1, question: "What helps you speak with confidence?", options: ["Preparation", "Running fast", "Coffee"], correctAnswer: "Preparation" },
            { id: 2, question: "What is the first step according to the text?", options: ["Buy a suit", "Choose a topic", "Leave the room"], correctAnswer: "Choose a topic" },
            { id: 3, question: "What should your speech have?", options: ["Many jokes", "A clear structure", "Loud music"], correctAnswer: "A clear structure" },
            { id: 4, question: "Why use visual aids?", options: ["To look cool", "To help the audience understand", "To hide your face"], correctAnswer: "To help the audience understand" },
            { id: 5, question: "What should you do during the talk?", options: ["Highlight important facts", "Dance", "Read from a book"], correctAnswer: "Highlight important facts" },
            { id: 6, question: "What should you provide at the end?", options: ["A long story", "A short summary", "A gift"], correctAnswer: "A short summary" },
            { id: 7, question: "How should you clarify points if people are confused?", options: ["By shouting", "With simple examples", "By stopping"], correctAnswer: "With simple examples" },
            { id: 8, question: "The word 'Structure' refers to:", options: ["The price", "The organization of parts", "The colors used"], correctAnswer: "The organization of parts" },
            { id: 9, question: "What is an 'Audience'?", options: ["The people watching", "The people speaking", "The chairs"], correctAnswer: "The people watching" },
            { id: 10, question: "A good speaker speaks:", options: ["To the wall", "To the audience directly", "To their feet"], correctAnswer: "To the audience directly" }
        ]
    },
    // ===== ÜNİTE 175: LITERATURE =====
    175: {
        unitId: 175, title: "Exploring Literature", language: "İngilizce", level: "B1",
        story: {
            text: "Literature allows us to experience different worlds through stories. A famous author often spends years writing a single novel. In fiction, the plot can be very creative and surprising. Non-fiction, on the other hand, deals with real facts and history. When reading a book, pay attention to the main character and their development. Each chapter usually tells a small part of the larger narrative. Some people prefer poetry because of its beautiful language. No matter what you read, a powerful story can change the way you think.",
            translation: "Edebiyat (literature), hikayeler aracılığıyla farklı dünyaları deneyimlememizi sağlar. Ünlü bir yazar (author) genellikle tek bir roman (novel) yazmak için yıllarını harcar. Kurgu (fiction) türünde olay örgüsü (plot) çok yaratıcı ve şaşırtıcı olabilir. Kurgu dışı (non-fiction) ise gerçek gerçekler ve tarihle ilgilenir. Bir kitap okurken ana karaktere (character) ve gelişimine dikkat edin. Her bölüm (chapter) genellikle daha büyük olan anlatının (narrative) küçük bir parçasını anlatır. Bazı insanlar güzel dili nedeniyle şiiri (poetry) tercih eder. Ne okursanız okuyun, güçlü bir hikaye düşünme şeklinizi değiştirebilir."
        },
        vocabulary: [
            { word: "Literature", meaning: "Edebiyat" }, { word: "Author", meaning: "Yazar" },
            { word: "Fiction", meaning: "Kurgu" }, { word: "Plot", meaning: "Olay örgüsü" },
            { word: "Chapter", meaning: "Bölüm" }
        ],
        questions: [
            { id: 1, question: "What does literature allow us to do?", options: ["To travel by plane", "To experience different worlds", "To buy books"], correctAnswer: "To experience different worlds" },
            { id: 2, question: "Who writes novels?", options: ["Authors", "Painters", "Doctors"], correctAnswer: "Authors" },
            { id: 3, question: "What can be creative in fiction?", options: ["The paper", "The plot", "The ink"], correctAnswer: "The plot" },
            { id: 4, question: "What does non-fiction deal with?", options: ["Magic", "Real facts and history", "Aliens"], correctAnswer: "Real facts and history" },
            { id: 5, question: "Who should you pay attention to in a story?", options: ["The narrator's cat", "The main character", "The background"], correctAnswer: "The main character" },
            { id: 6, question: "What does each chapter usually tell?", options: ["Everything", "A small part of the larger narrative", "The ending"], correctAnswer: "A small part of the larger narrative" },
            { id: 7, question: "Why do some people prefer poetry?", options: ["Because it's short", "Because of its beautiful language", "Because it's cheap"], correctAnswer: "Because of its beautiful language" },
            { id: 8, question: "The word 'Plot' means:", options: ["The structure of the story", "The name of the author", "The price of the book"], correctAnswer: "The structure of the story" },
            { id: 9, question: "What is 'Fiction'?", options: ["A true story", "An invented story", "A science book"], correctAnswer: "An invented story" },
            { id: 10, question: "Can a powerful story change your thinking?", options: ["Yes", "No", "Only if it is a movie"], correctAnswer: "Yes" }
        ]
    },
    // ===== ÜNİTE 176: ACADEMIC WRITING =====
    176: {
        unitId: 176, title: "Mastering Academic Writing", language: "İngilizce", level: "B1",
        story: {
            text: "Academic writing requires a clear structure and logical analysis. When you write an essay, you should start with a strong introduction. It is essential to cite your references properly to avoid plagiarism. You must use supporting evidence for every claim you make in your research paper. After the main body, you should write a final conclusion that summarizes your findings. Following the correct format and using academic language will help you achieve higher standards in your studies.",
            translation: "Akademik yazma (academic writing), net bir yapı ve mantıksal analiz gerektirir. Bir makale (essay) yazdığınızda, güçlü bir giriş (introduction) ile başlamalısınız. İntihalden kaçınmak için kaynaklarınızı (reference) uygun şekilde belirtmeniz (cite) esastır. Araştırma ödevinizde (research) yaptığınız her iddia için destekleyici kanıtlar (evidence) kullanmalısınız. Ana metinden sonra, bulgularınızı özetleyen nihai bir sonuç (conclusion) yazmalısınız. Doğru formatı takip etmek ve akademik dil kullanmak, çalışmalarınızda daha yüksek standartlara ulaşmanıza yardımcı olacaktır."
        },
        vocabulary: [
            { word: "Academic", meaning: "Akademik" }, { word: "Essay", meaning: "Makale" },
            { word: "Analysis", meaning: "Analiz" }, { word: "Reference", meaning: "Referans" },
            { word: "Conclusion", meaning: "Sonuç" }
        ],
        questions: [
            { id: 1, question: "What does academic writing require?", options: ["Loud music", "A clear structure and logical analysis", "Lots of colors"], correctAnswer: "A clear structure and logical analysis" },
            { id: 2, question: "Where should you start an essay?", options: ["In the middle", "With a strong introduction", "At the end"], correctAnswer: "With a strong introduction" },
            { id: 3, question: "Why is it essential to cite references?", options: ["To look busy", "To avoid plagiarism", "To spend time"], correctAnswer: "To avoid plagiarism" },
            { id: 4, question: "What should you use for every claim?", options: ["Supporting evidence", "Personal jokes", "Short sentences"], correctAnswer: "Supporting evidence" },
            { id: 5, question: "What should the conclusion do?", options: ["Introduce new ideas", "Summarize findings", "Ask questions"], correctAnswer: "Summarize findings" },
            { id: 6, question: "What helps you achieve higher standards?", options: ["Correct format and academic language", "Being fast", "Ignoring rules"], correctAnswer: "Correct format and academic language" },
            { id: 7, question: "What is a 'Research paper'?", options: ["A type of notebook", "A formal document about a study", "A news report"], correctAnswer: "A formal document about a study" },
            { id: 8, question: "The word 'Cite' means:", options: ["To find a place", "To quote or refer to a source", "To write fast"], correctAnswer: "To quote or refer to a source" },
            { id: 9, question: "The word 'Essential' means:", options: ["Optional", "Necessary/Very important", "Boring"], correctAnswer: "Necessary/Very important" },
            { id: 10, question: "The text is about:", options: ["Cooking", "Travel", "Academic writing tips"], correctAnswer: "Academic writing tips" }
        ]
    },
    // ===== ÜNİTE 177: SCIENCE & TECHNOLOGY =====
    177: {
        unitId: 177, title: "The World of Technology", language: "İngilizce", level: "B1",
        story: {
            text: "Scientific discovery and technological innovation change our lives every day. New electronic devices are invented to make our work easier. Today, many companies use Artificial Intelligence to analyze large amounts of data. Virtual reality and digital networks allow us to connect with people worldwide instantly. Scientists perform experiments in laboratories to test new ideas. Access to the internet has transformed how we find information. It is exciting to see how these advancements will shape our future.",
            translation: "Bilimsel keşif (discovery) ve teknolojik yenilik (innovation) hayatımızı her gün değiştiriyor. İşimizi kolaylaştırmak için yeni elektronik cihazlar (device) icat ediliyor. Bugün birçok şirket, büyük miktarlarda veriyi (data) analiz etmek için Yapay Zeka (artificial intelligence) kullanıyor. Sanal (virtual) gerçeklik ve dijital ağlar (network), dünya çapındaki insanlarla anında bağlantı kurmamızı sağlar. Bilim insanları yeni fikirleri test etmek için laboratuvarlarda deneyler (experiment) yaparlar. İnternete erişim, bilgiyi nasıl bulduğumuzu dönüştürdü. Bu ilerlemelerin geleceğimizi nasıl şekillendireceğini görmek heyecan verici."
        },
        vocabulary: [
            { word: "Innovation", meaning: "Yenilik" }, { word: "Device", meaning: "Cihaz" },
            { word: "Artificial", meaning: "Yapay" }, { word: "Network", meaning: "Ağ" },
            { word: "Experiment", meaning: "Deney" }
        ],
        questions: [
            { id: 1, question: "What changes our lives every day?", options: ["Old books", "Scientific discovery and innovation", "Sleep"], correctAnswer: "Scientific discovery and innovation" },
            { id: 2, question: "Why are new devices invented?", options: ["To look pretty", "To make work easier", "To waste time"], correctAnswer: "To make work easier" },
            { id: 3, question: "What is used to analyze large amounts of data?", options: ["Artificial Intelligence", "Magic", "Small pens"], correctAnswer: "Artificial Intelligence" },
            { id: 4, question: "What allows us to connect worldwide instantly?", options: ["Trains", "Digital networks", "Shouting"], correctAnswer: "Digital networks" },
            { id: 5, question: "Where do scientists perform experiments?", options: ["In the park", "In laboratories", "At the cinema"], correctAnswer: "In laboratories" },
            { id: 6, question: "What has transformed how we find information?", options: ["Radio", "Access to the internet", "Old maps"], correctAnswer: "Access to the internet" },
            { id: 7, question: "The word 'Innovation' means:", options: ["Old history", "A new idea or method", "A type of machine"], correctAnswer: "A new idea or method" },
            { id: 8, question: "What is 'Data'?", options: ["Information/Facts", "A type of food", "A travel bag"], correctAnswer: "Information/Facts" },
            { id: 9, question: "What does 'Virtual' mean in technology?", options: ["Old fashioned", "Created by computers/Online", "Very slow"], correctAnswer: "Created by computers/Online" },
            { id: 10, question: "The text is about:", options: ["Cooking", "Science and technology", "Music"], correctAnswer: "Science and technology" }
        ]
    },
    // ===== ÜNİTE 178: HEALTH & NUTRITION =====
    178: {
        unitId: 178, title: "Eating for Health", language: "İngilizce", level: "B1",
        story: {
            text: "Good nutrition is the foundation of a healthy lifestyle. A balanced diet should include enough protein, vitamins, and minerals. We should watch our daily calorie intake and avoid eating too much sugar. Regular exercise is also essential for overall wellness. Some people prefer organic food because it is grown without chemicals. Obesity is a growing problem in many countries, so we must be careful with our choices. Staying active and eating fresh food will help you feel much better every day.",
            translation: "İyi beslenme (nutrition), sağlıklı (healthy) bir yaşam tarzının temelidir. Dengeli (balanced) bir diyet yeterli protein, vitamin ve mineral içermelidir. Günlük kalori (calories) alımımızı izlemeli ve çok fazla şeker yemekten kaçınmalıyız. Düzenli egzersiz (exercise) de genel zindelik (wellness) için esastır. Bazı insanlar kimyasallar olmadan yetiştirildiği için organik (organic) gıdaları tercih ederler. Obezite (obesity) birçok ülkede büyüyen bir sorundur, bu yüzden seçimlerimizde dikkatli olmalıyız. Aktif kalmak ve taze yemek yemek her gün çok daha iyi hissetmenize yardımcı olacaktır."
        },
        vocabulary: [
            { word: "Nutrition", meaning: "Beslenme" }, { word: "Healthy", meaning: "Sağlıklı" },
            { word: "Balanced", meaning: "Dengeli" }, { word: "Calories", meaning: "Kalori" },
            { word: "Wellness", meaning: "Zindelik" }
        ],
        questions: [
            { id: 1, question: "What is the foundation of a healthy lifestyle?", options: ["Watching TV", "Good nutrition", "Sleeping all day"], correctAnswer: "Good nutrition" },
            { id: 2, question: "What should a balanced diet include?", options: ["Only sugar", "Protein, vitamins, and minerals", "Fast food"], correctAnswer: "Protein, vitamins, and minerals" },
            { id: 3, question: "What should we watch daily?", options: ["Calorie intake", "Movies", "Other people"], correctAnswer: "Calorie intake" },
            { id: 4, question: "What is essential for wellness besides food?", options: ["Video games", "Regular exercise", "Shopping"], correctAnswer: "Regular exercise" },
            { id: 5, question: "Why do some people prefer organic food?", options: ["It's cheaper", "It's grown without chemicals", "It has more colors"], correctAnswer: "It's grown without chemicals" },
            { id: 6, question: "What is a growing health problem mentioned?", options: ["Obesity", "Cold weather", "Losing pens"], correctAnswer: "Obesity" },
            { id: 7, question: "The word 'Balanced' means:", options: ["Falling down", "Keeping parts in good proportions", "Very loud"], correctAnswer: "Keeping parts in good proportions" },
            { id: 8, question: "What are 'Calories'?", options: ["Units of energy from food", "Types of fruit", "Exercises"], correctAnswer: "Units of energy from food" },
            { id: 9, question: "What is 'Protein'?", options: ["A type of exercise", "A nutrient found in meat, beans, etc.", "A vitamin"], correctAnswer: "A nutrient found in meat, beans, etc." },
            { id: 10, question: "How does staying active make you feel?", options: ["Tired", "Better", "Sad"], correctAnswer: "Better" }
        ]
    },
    // ===== ÜNİTE 179: PSİKOLOJİ TEMELLERİ =====
    179: {
        unitId: 179, title: "Understanding the Mind", language: "İngilizce", level: "B1",
        story: {
            text: "Psychology is the study of the human mind and behavior. It helps us understand how emotions and thoughts affect our lives. Our state of mind can change depending on our environment. Some people go to therapy to learn how to cope with stress and anxiety. Memory and perception are also important topics in this field. Motivation is what drives us to achieve our goals. By learning more about ourselves, we can improve our mental health and personal relationships.",
            translation: "Psikoloji (psychology), insan zihninin (mind) ve davranışlarının (behavior) incelenmesidir. Duyguların (emotion) ve düşüncelerin hayatımızı nasıl etkilediğini anlamamıza yardımcı olur. Zihin durumumuz çevremize bağlı olarak değişebilir. Bazı insanlar stresle ve kaygıyla (anxiety) başa çıkmayı öğrenmek için terapiye (therapy) giderler. Hafıza (memory) ve algı (perception) da bu alandaki önemli konulardır. Motivasyon (motivation), bizi hedeflerimize ulaşmaya iten şeydir. Kendimiz hakkında daha fazla şey öğrenerek ruh sağlığımızı ve kişisel ilişkilerimizi geliştirebiliriz."
        },
        vocabulary: [
            { word: "Psychology", meaning: "Psikoloji" }, { word: "Emotion", meaning: "Duygu" },
            { word: "Therapy", meaning: "Terapi" }, { word: "Memory", meaning: "Hafıza" },
            { word: "Motivation", meaning: "Motivasyon" }
        ],
        questions: [
            { id: 1, question: "What is psychology?", options: ["Study of plants", "Study of the human mind and behavior", "Study of space"], correctAnswer: "Study of the human mind and behavior" },
            { id: 2, question: "What does it help us understand?", options: ["How emotions affect us", "How to fix a car", "The price of milk"], correctAnswer: "How emotions affect us" },
            { id: 3, question: "Why do people go to therapy?", options: ["To buy clothes", "To cope with stress and anxiety", "To sleep"], correctAnswer: "To cope with stress and anxiety" },
            { id: 4, question: "What are two important topics in psychology?", options: ["Colors and shapes", "Memory and perception", "Bikes and cars"], correctAnswer: "Memory and perception" },
            { id: 5, question: "What drives us to achieve goals?", options: ["Fear", "Motivation", "Money only"], correctAnswer: "Motivation" },
            { id: 6, question: "Can we improve our mental health?", options: ["Yes, by learning about ourselves", "No", "Only by sleeping"], correctAnswer: "Yes, by learning about ourselves" },
            { id: 7, question: "The word 'Behavior' refers to:", options: ["What someone says", "How someone acts", "What someone eats"], correctAnswer: "How someone acts" },
            { id: 8, question: "What is 'Anxiety'?", options: ["Feeling very happy", "Feeling nervous or worried", "Feeling hungry"], correctAnswer: "Feeling nervous or worried" },
            { id: 9, question: "The word 'Perception' means:", options: ["How we see and understand things", "How fast we run", "A type of medicine"], correctAnswer: "How we see and understand things" },
            { id: 10, question: "The text is about:", options: ["Sports", "Basic psychology", "Cooking"], correctAnswer: "Basic psychology" }
        ]
    },
    // ===== ÜNİTE 180: BUSINESS ENGLISH =====
    180: {
        unitId: 180, title: "Professionalism at Work", language: "İngilizce", level: "B1",
        story: {
            text: "In the professional world, good communication is the key to success. You should have a clear strategy for your business projects. Effective management helps to increase productivity and meet deadlines. During a meeting, it is important to collaborate with your colleagues and share ideas. When you finish a task, ask for feedback to improve your work. Negotiation skills are also valuable when discussing prices or contracts. Being professional means being reliable and organized in everything you do.",
            translation: "Profesyonel (professional) dünyada, iyi iletişim başarının anahtarıdır. İş projeleriniz için net bir stratejiniz (strategy) olmalıdır. Etkili yönetim (management), üretkenliği (productivity) artırmaya ve teslim tarihlerine (deadline) yetişmeye yardımcı olur. Bir toplantı (meeting) sırasında, meslektaşlarınızla işbirliği yapmak (collaborate) ve fikirlerinizi paylaşmak önemlidir. Bir işi bitirdiğinizde, çalışmanızı geliştirmek için geri bildirim (feedback) isteyin. Fiyatları veya sözleşmeleri tartışırken müzakere (negotiation) becerileri de değerlidir. Profesyonel olmak, yaptığınız her şeyde güvenilir ve düzenli olmak demektir."
        },
        vocabulary: [
            { word: "Professional", meaning: "Profesyonel" }, { word: "Strategy", meaning: "Strateji" },
            { word: "Meeting", meaning: "Toplantı" }, { word: "Productivity", meaning: "Üretkenlik" },
            { word: "Deadline", meaning: "Son teslim tarihi" }
        ],
        questions: [
            { id: 1, question: "What is a key to success in the professional world?", options: ["Good communication", "Playing games", "Wearing hats"], correctAnswer: "Good communication" },
            { id: 2, question: "What should you have for business projects?", options: ["A clear strategy", "Lots of food", "A big car"], correctAnswer: "A clear strategy" },
            { id: 3, question: "What does effective management increase?", options: ["Noise", "Productivity", "Errors"], correctAnswer: "Productivity" },
            { id: 4, question: "What should you do during a meeting?", options: ["Sleep", "Collaborate with colleagues", "Stay silent"], correctAnswer: "Collaborate with colleagues" },
            { id: 5, question: "When should you ask for feedback?", options: ["When you start", "When you finish a task", "Never"], correctAnswer: "When you finish a task" },
            { id: 6, question: "Are negotiation skills valuable?", options: ["Yes, for prices and contracts", "No", "Only for vacation"], correctAnswer: "Yes, for prices and contracts" },
            { id: 7, question: "The word 'Deadline' refers to:", options: ["The start of a project", "The time by which a task must be finished", "A lunch break"], correctAnswer: "The time by which a task must be finished" },
            { id: 8, question: "What is 'Collaborate'?", options: ["To work alone", "To work together", "To quit"], correctAnswer: "To work together" },
            { id: 9, question: "The word 'Productivity' means:", options: ["The rate at which goods or work are produced", "The price of products", "Having a lot of free time"], correctAnswer: "The rate at which goods or work are produced" },
            { id: 10, question: "Being professional means being:", options: ["Reliable and organized", "Funny", "Fast and messy"], correctAnswer: "Reliable and organized" }
        ]
    },
    // ===== ÜNİTE 181: PAST PERFECT =====
    181: {
        unitId: 181, title: "Memories of the Past", language: "İngilizce", level: "B1",
        story: {
            text: "In retrospect, that summer was a major turning point in my life. I had already finished my studies when the event occurred. I had never traveled alone beforehand, so I was quite nervous. I remember the sequence of events clearly even now. I had prepared everything carefully earlier that week. When I look back, I realize that I had already learned so much from previous experiences. It is amazing how much detail we can recall when we think about our favorite memories.",
            translation: "Geriye bakıldığında (retrospect), o yaz hayatımda önemli bir dönüm noktasıydı. Olay meydana geldiğinde (occur) çalışmalarımı çoktan bitirmiştim. Daha önce (beforehand) hiç yalnız seyahat etmemiştim, bu yüzden oldukça gergindim. Olayların dizisini (sequence) şimdi bile net bir şekilde hatırlıyorum. O haftanın başlarında her şeyi dikkatlice hazırlamıştım. Geriye bakınca, önceki (previous) deneyimlerimden çoktan çok şey öğrendiğimi fark ediyorum. En sevdiğimiz anılarımızı düşündüğümüzde ne kadar çok detayı hatırlayabildiğimiz (recall) şaşırtıcıdır."
        },
        vocabulary: [
            { word: "Previous", meaning: "Önceki" }, { word: "Already", meaning: "Zaten/Çoktan" },
            { word: "Beforehand", meaning: "Önceden" }, { word: "Recall", meaning: "Hatırlamak" },
            { word: "Occur", meaning: "Meydana gelmek" }
        ],
        questions: [
            { id: 1, question: "What was the summer according to the text?", options: ["A boring time", "A major turning point", "A short vacation"], correctAnswer: "A major turning point" },
            { id: 2, question: "Had the narrator finished their studies when the event occurred?", options: ["No", "Yes, already", "They were still studying"], correctAnswer: "Yes, already" },
            { id: 3, question: "Had the narrator traveled alone before this event?", options: ["Many times", "Never beforehand", "Once"], correctAnswer: "Never beforehand" },
            { id: 4, question: "How does the narrator remember the sequence of events?", options: ["Faintly", "Clearly", "They forgot everything"], correctAnswer: "Clearly" },
            { id: 5, question: "When did they prepare everything?", options: ["After the event", "Earlier that week", "On the day of the event"], correctAnswer: "Earlier that week" },
            { id: 6, question: "What does the narrator realize when looking back?", options: ["They had already learned much", "They made a mistake", "They were lucky"], correctAnswer: "They had already learned much" },
            { id: 7, question: "The word 'Recall' means:", options: ["To forget", "To remember/bring back to mind", "To call someone again"], correctAnswer: "To remember/bring back to mind" },
            { id: 8, question: "The word 'Occur' means:", options: ["To finish", "To happen/take place", "To plan"], correctAnswer: "To happen/take place" },
            { id: 9, question: "What does 'Beforehand' mean?", options: ["Later", "In advance/Before a specific time", "Right now"], correctAnswer: "In advance/Before a specific time" },
            { id: 10, question: "The text uses 'Past Perfect' to show:", options: ["Only the future", "Actions completed before another time in the past", "Current habits"], correctAnswer: "Actions completed before another time in the past" }
        ]
    },
    // ===== ÜNİTE 182: FUTURE PERFECT =====
    182: {
        unitId: 182, title: "Planning for the Future", language: "İngilizce", level: "B1",
        story: {
            text: "By this time next year, I will have finished my master's degree. It will be a major milestone in my career. I hope I will have achieved all my personal goals by then. My target is to find a job in a global company. Experts forecast that the economy will grow, and I want to be ready for the new outcome. Making a prediction about the future is never easy, but I try to fulfill my responsibilities every day. I am sure that I will have reached a high level of proficiency in English by the time I graduate.",
            translation: "Gelecek yıl bu zamanlar, yüksek lisans derecemi bitirmiş olacağım. Kariyerimde önemli bir dönüm noktası (milestone) olacak. Umarım o zamana kadar (by then) tüm kişisel hedeflerime ulaşmış (achieve) olurum. Hedefim (target) küresel bir şirkette iş bulmak. Uzmanlar ekonominin büyüyeceğini tahmin ediyor (forecast) ve ben yeni sonuca (outcome) hazır olmak istiyorum. Gelecek hakkında bir tahminde bulunmak (prediction) asla kolay değildir, ancak her gün sorumluluklarımı yerine getirmeye (fulfill) çalışıyorum. Mezun olana kadar İngilizcede yüksek bir yeterlilik seviyesine ulaşmış olacağımdan eminim."
        },
        vocabulary: [
            { word: "Achievement", meaning: "Başarı" }, { word: "Milestone", meaning: "Dönüm noktası" },
            { word: "Forecast", meaning: "Tahmin" }, { word: "Outcome", meaning: "Sonuç" },
            { word: "Fulfill", meaning: "Yerine getirmek" }
        ],
        questions: [
            { id: 1, question: "What will the narrator have finished by next year?", options: ["A book", "Their master's degree", "A marathon"], correctAnswer: "Their master's degree" },
            { id: 2, question: "What is the degree to the narrator's career?", options: ["A small step", "A major milestone", "A mistake"], correctAnswer: "A major milestone" },
            { id: 3, question: "What does the narrator hope to have achieved 'by then'?", options: ["Everything", "Their personal goals", "Nothing"], correctAnswer: "Their personal goals" },
            { id: 4, question: "What is their target job?", options: ["In a small shop", "In a global company", "Working from home"], correctAnswer: "In a global company" },
            { id: 5, question: "What do experts forecast for the economy?", options: ["It will grow", "It will crash", "No change"], correctAnswer: "It will grow" },
            { id: 6, question: "What does 'Fulfill a responsibility' mean?", options: ["To avoid work", "To do what is required", "To ask for help"], correctAnswer: "To do what is required" },
            { id: 7, question: "The word 'Outcome' means:", options: ["The beginning", "A result or consequence", "An income"], correctAnswer: "A result or consequence" },
            { id: 8, question: "The phrase 'By then' refers to:", options: ["Right now", "The time mentioned in the future", "A long time ago"], correctAnswer: "The time mentioned in the future" },
            { id: 9, question: "What is a 'Milestone'?", options: ["A type of building", "A significant stage or event", "A stone in a garden"], correctAnswer: "A significant stage or event" },
            { id: 10, question: "What level of English does the narrator expect to reach?", options: ["Beginner", "High level of proficiency", "None"], correctAnswer: "High level of proficiency" }
        ]
    },
    // ===== ÜNİTE 183: RELATIVE CLAUSES =====
    183: {
        unitId: 183, title: "Defining People and Places", language: "İngilizce", level: "B1",
        story: {
            text: "When you describe someone, you should focus on specific attributes that define their character. For example, a mentor is a person whose advice helps you grow. In the context of work, it is essential to identify the skills that are required for a task. Relative clauses allow us to provide a detailed description without starting a new sentence. We use 'who' for people, 'which' for things, and 'whose' for possession. Understanding these rules is a relative concept; it becomes easier the more you practice.",
            translation: "Birini tarif ederken, karakterlerini tanımlayan (define) özel niteliklere (attribute) odaklanmalısınız. Örneğin, akıl hocası, tavsiyesi (advice) büyümenize yardımcı olan (whose) kişidir. İş bağlamında (context), bir görev için gerekli olan becerileri belirlemek (identify) esastır. İlgi cümlecikleri (relative clauses), yeni bir cümleye başlamadan ayrıntılı bir açıklama (description) sunmamızı sağlar. İnsanlar için 'who', şeyler için 'which' ve iyelik için 'whose' kullanırız. Bu kuralları anlamak göreceli (relative) bir kavramdır; pratik yaptıkça kolaylaşır."
        },
        vocabulary: [
            { word: "Identify", meaning: "Belirlemek" }, { word: "Attribute", meaning: "Özellik" },
            { word: "Specific", meaning: "Özel/Belirli" }, { word: "Essential", meaning: "Temel/Zorunlu" },
            { word: "Context", meaning: "Bağlam" }
        ],
        questions: [
            { id: 1, question: "What should you focus on when describing someone?", options: ["Their clothes", "Specific attributes", "Their name only"], correctAnswer: "Specific attributes" },
            { id: 2, question: "What is a mentor according to the text?", options: ["A driver", "A person whose advice helps you grow", "A chef"], correctAnswer: "A person whose advice helps you grow" },
            { id: 3, question: "What is essential in the context of work?", options: ["To sleep", "To identify required skills", "To drink coffee"], correctAnswer: "To identify required skills" },
            { id: 4, question: "What do relative clauses allow us to do?", options: ["To write shorter sentences", "To provide detailed descriptions", "To stop writing"], correctAnswer: "To provide detailed descriptions" },
            { id: 5, question: "What word is used for possession?", options: ["Who", "Which", "Whose"], correctAnswer: "Whose" },
            { id: 6, question: "When does understanding relative clauses become easier?", options: ["When you stop", "The more you practice", "In the morning"], correctAnswer: "The more you practice" },
            { id: 7, question: "The word 'Attribute' means:", options: ["A price", "A quality or feature", "A type of food"], correctAnswer: "A quality or feature" },
            { id: 8, question: "The word 'Identify' means:", options: ["To hide", "To recognize or name someone/something", "To look for"], correctAnswer: "To recognize or name someone/something" },
            { id: 9, question: "What does 'Relative' mean in 'relative concept'?", options: ["Family member", "Considered in relation to something else", "Very fast"], correctAnswer: "Considered in relation to something else" },
            { id: 10, question: "Which relative pronoun is used for things?", options: ["Who", "Which", "Whose"], correctAnswer: "Which" }
        ]
    },
    // ===== ÜNİTE 184: CAUSATIVES =====
    184: {
        unitId: 184, title: "Getting Things Done", language: "İngilizce", level: "B1",
        story: {
            text: "Sometimes it is better to have a professional handle a task for you. For instance, I usually have my car repaired by a mechanic to ensure safety. Regular maintenance is a basic requirement for any vehicle. If you are busy, you can instruct someone to help with technical assistance. A good manager knows how to supervise a project and use proper delegation to get results. It is important to ensure that every task is completed according to the instructions. This way, you can provide a quality service to your customers.",
            translation: "Bazen bir işi (task) bir profesyonelin sizin yerinize halletmesi daha iyidir. Örneğin, güvenliği sağlamak (ensure) için genellikle arabamı bir tamirciye tamir ettiririm (have repaired). Düzenli bakım (maintenance), herhangi bir araç için temel bir gereksinimdir (requirement). Meşgulseniz, birine teknik destekle (assistance) yardımcı olması için talimat (instruct) verebilirsiniz. İyi bir yönetici, bir projeyi nasıl denetleyeceğini (supervise) ve sonuç almak için uygun yetkilendirmeyi (delegation) nasıl kullanacağını bilir. Her görevin talimatlara göre tamamlandığından emin olmak önemlidir. Bu sayede müşterilerinize kaliteli bir hizmet (service) sunabilirsiniz."
        },
        vocabulary: [
            { word: "Service", meaning: "Hizmet" }, { word: "Maintenance", meaning: "Bakım" },
            { word: "Repair", meaning: "Tamir etmek" }, { word: "Assistance", meaning: "Yardım" },
            { word: "Ensure", meaning: "Emin olmak" }
        ],
        questions: [
            { id: 1, question: "Why does the narrator have their car repaired by a mechanic?", options: ["Because they are lazy", "To ensure safety", "Because it's free"], correctAnswer: "To ensure safety" },
            { id: 2, question: "What is a basic requirement for any vehicle?", options: ["New tires each week", "Regular maintenance", "Being red"], correctAnswer: "Regular maintenance" },
            { id: 3, question: "What can you do if you are busy?", options: ["Quit", "Instruct someone to help", "Sleep"], correctAnswer: "Instruct someone to help" },
            { id: 4, question: "What does a good manager know how to do?", options: ["Supervise a project and use delegation", "Do everything themselves", "Ignore workers"], correctAnswer: "Supervise a project and use delegation" },
            { id: 5, question: "What should every task follow?", options: ["The owner's mood", "The instructions", "Nothing"], correctAnswer: "The instructions" },
            { id: 6, question: "What do you provide by ensuring quality?", options: ["A quality service", "A lot of noise", "Difficult tasks"], correctAnswer: "A quality service" },
            { id: 7, question: "The word 'Maintenance' means:", options: ["Breaking things", "The work of keeping something in good condition", "Buying new parts"], correctAnswer: "The work of keeping something in good condition" },
            { id: 8, question: "The word 'Ensure' means:", options: ["To make sure or certain", "To forget", "To ask"], correctAnswer: "To make sure or certain" },
            { id: 9, question: "What is 'Delegation'?", options: ["Giving your work to others", "Acting as a boss", "Studying alone"], correctAnswer: "Giving your work to others" },
            { id: 10, question: "The text says 'have my car repaired'. This is a:", options: ["Possessive form", "Causative form", "Passive form"], correctAnswer: "Causative form" }
        ]
    },
    // ===== ÜNİTE 185: WISH CLAUSES =====
    185: {
        unitId: 185, title: "Wishes and Regrets", language: "İngilizce", level: "B1",
        story: {
            text: "We often think about imaginary scenarios and how life could be different. Sometimes I regret my past decisions and wish I had made a different choice. In reality, we must face the consequences of our actions. It is normal to have a preference for certain potential outcomes, even if they are unlikely to happen. For example, you might have a strong desire to travel to space. Although it remains a fantasy for most, thinking about such possibilities can be inspiring. It's better to focus on your goals than to live in a state of regret.",
            translation: "Sık sık hayali (imaginary) senaryolar ve hayatın nasıl farklı olabileceği hakkında düşünürüz. Bazen geçmiş kararlarımdan pişmanlık (regret) duyarım ve keşke farklı bir seçim yapsaydım derim. Gerçekte (reality), eylemlerimizin sonuçlarıyla yüzleşmelisiniz. Olma ihtimali düşük (unlikely) olsa bile, belirli potansiyel (potential) sonuçlar için bir tercih (preference) duymanız normaldir. Örneğin, uzaya seyahat etmek için güçlü bir arzunuz (desire) olabilir. Çoğu kişi için bir fantezi olarak kalsa da, bu tür olasılıkları (possibility) düşünmek ilham verici olabilir. Pişmanlık içinde yaşamaktansa hedeflerinize odaklanmak daha iyidir."
        },
        vocabulary: [
            { word: "Desire", meaning: "Arzu/İstek" }, { word: "Regret", meaning: "Pişmanlık" },
            { word: "Reality", meaning: "Gerçeklik" }, { word: "Scenario", meaning: "Senaryo" },
            { word: "Unlikely", meaning: "Düşük ihtimalle" }
        ],
        questions: [
            { id: 1, question: "What do we often think about?", options: ["Our breakfast", "Imaginary scenarios", "Yesterday's movie"], correctAnswer: "Imaginary scenarios" },
            { id: 2, question: "What does the narrator sometimes feel about past decisions?", options: ["Happiness", "Regret", "Pride"], correctAnswer: "Regret" },
            { id: 3, question: "What must we face in reality?", options: ["The rain", "Consequences of our actions", "Other people's cats"], correctAnswer: "Consequences of our actions" },
            { id: 4, question: "Is it normal to have a preference for unlikely outcomes?", options: ["Yes, even if they are unlikely", "No, it is crazy", "Only if you are rich"], correctAnswer: "Yes, even if they are unlikely" },
            { id: 5, question: "What is an example of a strong desire mentioned?", options: ["To eat pizza", "To travel to space", "To sleep more"], correctAnswer: "To travel to space" },
            { id: 6, question: "What can be inspiring according to the text?", options: ["Thinking about possibilities", "Watching TV", "Working hard"], correctAnswer: "Thinking about possibilities" },
            { id: 7, question: "The word 'Regret' means:", options: ["Feeling sorry about something you did or didn't do", "Feeling very happy", "Feeling angry"], correctAnswer: "Feeling sorry about something you did or didn't do" },
            { id: 8, question: "The word 'Unlikely' means:", options: ["Impossible", "Not expected to happen", "Very fast"], correctAnswer: "Not expected to happen" },
            { id: 9, question: "What is a 'Scenario'?", options: ["A type of food", "A sequence of events in a situation", "A travel map"], correctAnswer: "A sequence of events in a situation" },
            { id: 10, question: "The text suggests focusing on:", options: ["Regrets", "Goals", "Fantasies only"], correctAnswer: "Goals" }
        ]
    },
    // ===== ÜNİTE 186: COLLOCATIONS =====
    186: {
        unitId: 186, title: "Natural English Expressions", language: "İngilizce", level: "B1",
        story: {
            text: "To speak English fluently, you should learn how words work together in common collocations. For example, we 'make a decision' but we 'do homework'. It is important to pay attention to these patterns to sound more natural. Using the right combination of words helps you express your ideas with clarity. Sometimes, a slight change in phrasing can alter the meaning of a sentence. Practice making progress by using these expressions in your daily conversations. The more you use them, the more they will become a part of your active vocabulary.",
            translation: "İngilizceyi akıcı bir şekilde konuşmak için, kelimelerin yaygın dizilimlerde (collocation) nasıl birlikte çalıştığını öğrenmelisiniz. Örneğin, biz 'karar veririz' (make a decision) ama 'ödev yaparız' (do homework). Daha doğal görünmek için bu desenlere (pattern) dikkat etmek önemlidir. Doğru kelime kombinasyonunu (combination) kullanmak, fikirlerinizi netlikle (clarity) ifade etmenize yardımcı olur. Bazen, ifade biçimindeki (phrasing) hafif bir değişiklik bir cümlenin anlamını değiştirebilir. Günlük konuşmalarınızda bu ifadeleri kullanarak ilerleme (progress) kaydetme pratiği yapın. Onları ne kadar çok kullanırsanız, aktif kelime dağarcığınızın o kadar parçası haline geleceklerdir."
        },
        vocabulary: [
            { word: "Collocation", meaning: "Kalıplaşmış ifade" }, { word: "Natural", meaning: "Doğal" },
            { word: "Pattern", meaning: "Desen/Kalıp" }, { word: "Clarity", meaning: "Netlik" },
            { word: "Progress", meaning: "İlerleme" }
        ],
        questions: [
            { id: 1, question: "What should you learn to speak English fluently?", options: ["Only single words", "Common collocations", "The alphabet only"], correctAnswer: "Common collocations" },
            { id: 2, question: "Which verb goes with 'decision'?", options: ["Do", "Make", "Go"], correctAnswer: "Make" },
            { id: 3, question: "Which verb goes with 'homework'?", options: ["Make", "Do", "Take"], correctAnswer: "Do" },
            { id: 4, question: "Why is it important to pay attention to patterns?", options: ["To sound more natural", "To look smart", "To spend time"], correctAnswer: "To sound more natural" },
            { id: 5, question: "What does using the right combination of words help with?", options: ["Running fast", "Expressing ideas with clarity", "Eating healthy"], correctAnswer: "Expressing ideas with clarity" },
            { id: 6, question: "Can a slight change in phrasing change the meaning?", options: ["No", "Yes, sometimes", "Only in books"], correctAnswer: "Yes, sometimes" },
            { id: 7, question: "The word 'Combination' means:", options: ["A single thing", "Two or more things joined together", "A type of lock"], correctAnswer: "Two or more things joined together" },
            { id: 8, question: "The word 'Clarity' means:", options: ["The quality of being easy to understand", "Being very loud", "Being colorful"], correctAnswer: "The quality of being easy to understand" },
            { id: 9, question: "What is 'Vocabulary'?", options: ["A list of numbers", "Body of words used in a language", "A type of book"], correctAnswer: "Body of words used in a language" },
            { id: 10, question: "The text suggests practicing by:", options: ["Using expressions in daily conversation", "Watching movies only", "Sleeping"], correctAnswer: "Using expressions in daily conversation" }
        ]
    },
    // ===== ÜNİTE 187: CONNECTORS & TRANSITIONS =====
    187: {
        unitId: 187, title: "Connecting Your Ideas", language: "İngilizce", level: "B1",
        story: {
            text: "Using connectors and transitions is essential for writing a coherent text. For instance, words like 'however' and 'although' help you show contrast between two ideas. On the other hand, 'furthermore' and 'moreover' are used to add more information. To show a result, you can use 'consequently' or 'therefore'. These logical links allow the reader to follow your argument easily. Without proper transitions, your writing might seem fragmented and difficult to understand. Always try to choose the most appropriate connector for the relationship between your sentences.",
            translation: "Bağlaçlar (connector) ve geçiş ifadeleri (transition) kullanmak, uyumlu (coherent) bir metin yazmak için esastır. Örneğin, 'ancak' (however) ve 'rağmen' (although) gibi kelimeler iki fikir arasındaki zıtlığı (contrast) göstermenize yardımcı olur. Öte yandan, 'dahası' (furthermore) ve 'ayrıca' (moreover) daha fazla bilgi eklemek için kullanılır. Bir sonuç göstermek için 'sonuç olarak' (consequently) veya 'bu nedenle' (therefore) kullanabilirsiniz. Bu mantıksal (logical) bağlar, okuyucunun argümanınızı kolayca takip etmesini sağlar. Uygun geçişler olmadan, yazınız parçalı (fragmented) ve anlaşılması zor görünebilir. Cümleleriniz arasındaki ilişki için her zaman en uygun (appropriate) bağlacı seçmeye çalışın."
        },
        vocabulary: [
            { word: "Connector", meaning: "Bağlaç" }, { word: "Transition", meaning: "Geçiş" },
            { word: "Coherent", meaning: "Uyumlu" }, { word: "Contrast", meaning: "Zıtlık" },
            { word: "Appropriate", meaning: "Uygun" }
        ],
        questions: [
            { id: 1, question: "What is essential for writing a coherent text?", options: ["Using colors", "Using connectors and transitions", "Using short words"], correctAnswer: "Using connectors and transitions" },
            { id: 2, question: "Which words show contrast?", options: ["However and although", "Furthermore and moreover", "Therefore and consequently"], correctAnswer: "However and although" },
            { id: 3, question: "Which words add more information?", options: ["However and although", "Furthermore and moreover", "Therefore and consequently"], correctAnswer: "Furthermore and moreover" },
            { id: 4, question: "What do connectors allow the reader to do?", options: ["To sleep", "To follow the argument easily", "To stop reading"], correctAnswer: "To follow the argument easily" },
            { id: 5, question: "What happens without proper transitions?", options: ["Writing seems fragmented", "Writing is too fast", "Writing is perfect"], correctAnswer: "Writing seems fragmented" },
            { id: 6, question: "When should you use 'therefore'?", options: ["To show contrast", "To show a result", "To greet someone"], correctAnswer: "To show a result" },
            { id: 7, question: "The word 'Coherent' means:", options: ["Logical and consistent", "Random and messy", "Very long"], correctAnswer: "Logical and consistent" },
            { id: 8, question: "The word 'Furthermore' means:", options: ["Finally", "In addition", "But"], correctAnswer: "In addition" },
            { id: 9, question: "What is 'Contrast'?", options: ["The same thing", "Difference between things", "A type of light"], correctAnswer: "Difference between things" },
            { id: 10, question: "The word 'Fragmented' means:", options: ["Whole", "Broken into small parts", "Finished"], correctAnswer: "Broken into small parts" }
        ]
    },
    // ===== ÜNİTE 188: FORMAL VS INFORMAL =====
    188: {
        unitId: 188, title: "Choosing the Right Style", language: "İngilizce", level: "B1",
        story: {
            text: "It is important to adjust your language style depending on the situation and the person you are talking to. In a formal context, such as a job interview, you should use polite and precise language. You should avoid using slang or casual expressions that might seem unprofessional. On the other hand, informal language is perfect for chatting with friends or family. In daily life, we often use contractions and idiomatic phrases that show our personality. Understanding the difference between these registers helps you communicate effectively in any environment.",
            translation: "Duruma ve konuştuğunuz kişiye bağlı olarak dil tarzınızı (style) ayarlamanız (adjust) önemlidir. İş görüşmesi gibi resmi (formal) bir bağlamda, nazik ve kesin (precise) bir dil kullanmalısınız. Profesyonelce görünmeyebilecek argo (slang) veya gündelik (casual) ifadelerden kaçınmalısınız. Öte yandan, resmi olmayan (informal) dil, arkadaşlarla veya aileyle sohbet etmek için mükemmeldir. Günlük yaşamda sık sık kişiliğimizi gösteren kısaltmalar (contraction) ve deyimsel ifadeler (idiomatic) kullanırız. Bu dil düzeyleri (register) arasındaki farkı anlamak, her ortamda etkili bir şekilde iletişim kurmanıza yardımcı olur."
        },
        vocabulary: [
            { word: "Formal", meaning: "Resmi" }, { word: "Informal", meaning: "Samimi/Resmi olmayan" },
            { word: "Slang", meaning: "Argo" }, { word: "Precise", meaning: "Kesin/Net" },
            { word: "Register", meaning: "Dil düzeyi" }
        ],
        questions: [
            { id: 1, question: "What should you adjust depending on the situation?", options: ["Your height", "Your language style", "Your shoes"], correctAnswer: "Your language style" },
            { id: 2, question: "When should you use formal language?", options: ["In a job interview", "At a party", "In the shower"], correctAnswer: "In a job interview" },
            { id: 3, question: "What should you avoid in formal contexts?", options: ["Polite words", "Slang and casual expressions", "Saying 'hello'"], correctAnswer: "Slang and casual expressions" },
            { id: 4, question: "Who is informal language perfect for?", options: ["A boss", "Friends or family", "The president"], correctAnswer: "Friends or family" },
            { id: 5, question: "What do we often use in informal daily life?", options: ["Contractions and idiomatic phrases", "Scientific reports", "Long poems"], correctAnswer: "Contractions and idiomatic phrases" },
            { id: 6, question: "What does 'precise language' mean?", options: ["Vague words", "Exact and accurate words", "Loud shouting"], correctAnswer: "Exact and accurate words" },
            { id: 7, question: "The word 'Register' in linguistics refers to:", options: ["A type of book", "A variety of language used for a particular purpose", "A cash machine"], correctAnswer: "A variety of language used for a particular purpose" },
            { id: 8, question: "What is 'Slang'?", options: ["Formal dictionary words", "Very informal words/phrases used by specific groups", "A new language"], correctAnswer: "Very informal words/phrases used by specific groups" },
            { id: 9, question: "Is it okay to be unprofessional in an interview?", options: ["Yes", "No, avoid casual expressions", "Only if you are late"], correctAnswer: "No, avoid casual expressions" },
            { id: 10, question: "The text helps you communicate effectively in:", options: ["Only work", "Only home", "Any environment"], correctAnswer: "Any environment" }
        ]
    },
    // ===== ÜNİTE 189: CRITICAL THINKING =====
    189: {
        unitId: 189, title: "Thinking Critically", language: "İngilizce", level: "B1",
        story: {
            text: "Critical thinking is the ability to analyze information objectively rather than just accepting it. It involves evaluating different perspectives to form a well-reasoned opinion. We should be aware of potential bias that can influence our judgment. When you hear a claim, look for evidence and logical reasoning before you conclude it is true. Asking questions and seeking clarity are key parts of this process. Developing these skills helps you make better decisions and understand the complexity of the world around you.",
            translation: "Eleştirel düşünme (critical thinking), bilgiyi sadece kabul etmek yerine nesnel (objectively) olarak analiz etme yeteneğidir. İyi gerekçelendirilmiş bir fikir oluşturmak için farklı bakış açılarını (perspective) değerlendirmeyi (evaluate) içerir. Kararımızı etkileyebilecek potansiyel yanlılığın (bias) farkında olmalıyız. Bir iddia duyduğunuzda, doğru olduğu sonucuna varmadan önce kanıt ve mantıksal muhakeme (reasoning) arayın. Soru sormak ve netlik aramak bu sürecin temel parçalarıdır. Bu becerileri geliştirmek, daha iyi kararlar vermenize ve etrafınızdaki dünyanın karmaşıklığını anlamanıza yardımcı olur."
        },
        vocabulary: [
            { word: "Critical", meaning: "Eleştirel" }, { word: "Objective", meaning: "Nesnel" },
            { word: "Perspective", meaning: "Bakış açısı" }, { word: "Bias", meaning: "Yanlılık" },
            { word: "Evaluate", meaning: "Değerlendirmek" }
        ],
        questions: [
            { id: 1, question: "What is critical thinking?", options: ["Thinking about movies", "Analyzing information objectively", "Agreeing with everyone"], correctAnswer: "Analyzing information objectively" },
            { id: 2, question: "What does it involve evaluating?", options: ["The weather", "Different perspectives", "Price of cars"], correctAnswer: "Different perspectives" },
            { id: 3, question: "What should we be aware of?", options: ["Bias", "The time", "Other people's shoes"], correctAnswer: "Bias" },
            { id: 4, question: "What should you look for when you hear a claim?", options: ["A gift", "Evidence and logical reasoning", "A loud noise"], correctAnswer: "Evidence and logical reasoning" },
            { id: 5, question: "What are key parts of the process?", options: ["Asking questions and seeking clarity", "Staying silent", "Running away"], correctAnswer: "Asking questions and seeking clarity" },
            { id: 6, question: "How does developing these skills help you?", options: ["It makes you taller", "It helps you make better decisions", "It makes you sleep more"], correctAnswer: "It helps you make better decisions" },
            { id: 7, question: "The word 'Objective' means:", options: ["Influenced by personal feelings", "Not influenced by personal feelings", "A type of camera lens only"], correctAnswer: "Not influenced by personal feelings" },
            { id: 8, question: "What is 'Bias'?", options: ["Being fair to everyone", "Prejudice in favor of or against something", "A type of paper"], correctAnswer: "Prejudice in favor of or against something" },
            { id: 9, question: "The word 'Evaluate' means:", options: ["To find the value or quality of something", "To ignore", "To sell"], correctAnswer: "To find the value or quality of something" },
            { id: 10, question: "Does critical thinking involve just accepting information?", options: ["Yes", "No, it involves analysis", "Only if it is on TV"], correctAnswer: "No, it involves analysis" }
        ]
    },
    // ===== ÜNİTE 190: B1 MASTERY REVIEW =====
    190: {
        unitId: 190, title: "Reflecting on Your Progress", language: "İngilizce", level: "B1",
        story: {
            text: "Congratulations on reaching the end of the B1 level! This final review is an opportunity to reflect on your journey. You have learned a wide range of vocabulary and complex grammar structures. Consistency in your studies has been the key to your success. Now, you can express your thoughts on many topics and interact with others more confidently. Remember that language learning is a continuous process of improvement. Take pride in your achievement and get ready for the next challenge in the B2 level. Keep practicing and keep moving forward!",
            translation: "B1 seviyesinin sonuna ulaştığınız için tebrikler! Bu son inceleme (review), yolculuğunuz hakkında düşünmek (reflect) için bir fırsattır. Çok çeşitli (wide range) kelimeler ve karmaşık dilbilgisi yapıları öğrendiniz. Çalışmalarınızdaki tutarlılık (consistency), başarınızın anahtarı olmuştur. Artık birçok konuda düşüncelerinizi ifade edebilir ve başkalarıyla daha güvenli bir şekilde etkileşim (interact) kurabilirsiniz. Dil öğrenmenin sürekli bir gelişim süreci olduğunu unutmayın. Başarınızla gurur duyun ve B2 seviyesindeki bir sonraki zorluğa (challenge) hazırlanın. Pratik yapmaya devam edin ve ilerlemeye devam edin!"
        },
        vocabulary: [
            { word: "Review", meaning: "İnceleme/Tekrar" }, { word: "Consistency", meaning: "Tutarlılık" },
            { word: "Interact", meaning: "Etkileşim kurmak" }, { word: "Challenge", meaning: "Zorluk" },
            { word: "Achievement", meaning: "Başarı" }
        ],
        questions: [
            { id: 1, question: "What should you do at the end of the B1 level?", options: ["Stop learning", "Reflect on your progress", "Forget everything"], correctAnswer: "Reflect on your progress" },
            { id: 2, question: "What have you learned during B1?", options: ["Only numbers", "Wide range of vocabulary and grammar", "How to swim"], correctAnswer: "Wide range of vocabulary and grammar" },
            { id: 3, question: "What was the key to success?", options: ["Luck", "Consistency in studies", "Loud music"], correctAnswer: "Consistency in studies" },
            { id: 4, question: "How can you interact with others now?", options: ["More confidently", "With fear", "Not at all"], correctAnswer: "More confidently" },
            { id: 5, question: "Is language learning a continuous process?", options: ["No, it ends here", "Yes, it is continuous", "Only for one year"], correctAnswer: "Yes, it is continuous" },
            { id: 6, question: "What should you get ready for next?", options: ["Sleep", "The B2 level", "A long vacation"], correctAnswer: "The B2 level" },
            { id: 7, question: "The word 'Consistency' means:", options: ["Changing all the time", "Acting or being the same over time", "Being very fast"], correctAnswer: "Acting or being the same over time" },
            { id: 8, question: "The word 'Interact' means:", options: ["To act alone", "To communicate or be involved with others", "To stop acting"], correctAnswer: "To communicate or be involved with others" },
            { id: 9, question: "What is a 'Challenge'?", options: ["An easy task", "A task that tests someone's ability", "A type of game"], correctAnswer: "A task that tests someone's ability" },
            { id: 10, question: "What is the final advice?", options: ["Give up", "Keep practicing and moving forward", "Go back to A1"], correctAnswer: "Keep practicing and moving forward" }
        ]
    }
};

export function getEnglishB1ReadingForUnit(unitId: number): UnitReading {
    return enB1Readings[unitId] || {
        unitId, title: "Loading...", language: "İngilizce", level: "B1",
        story: { text: "", translation: "" }, vocabulary: [], questions: []
    };
}
