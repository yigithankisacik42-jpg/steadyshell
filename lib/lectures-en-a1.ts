/**
 * SteadyShell Lectures Database - English A1
 * 30 Units (ID: 101-130) with lecture content
 */

export interface LectureSection {
    title: string;
    content: string;
    examples?: { english: string; turkish: string }[];
    tips?: string[];
}

export interface EnglishLecture {
    unitId: number;
    title: string;
    introduction: string;
    sections: LectureSection[];
    tips?: string[];
    summary: string;
}

// ===== UNIT 101: GREETINGS =====
const unit101Lecture: EnglishLecture = {
    unitId: 101,
    title: "Greetings & Introductions",
    introduction: "Bu ünitede İngilizce'de selamlaşma ve tanışma ifadelerini öğreneceksiniz. Günlük hayatta en sık kullanılan temel ifadelerle başlıyoruz.",
    sections: [
        {
            title: "Resmi ve Gayri Resmi Selamlaşma",
            content: "İngilizce'de 'Hello' ve 'Hi' en yaygın selamlama ifadeleridir. 'Hello' daha resmi, 'Hi' daha samimi ortamlarda kullanılır.",
            examples: [
                { english: "Hello, Mr. Smith.", turkish: "Merhaba Bay Smith." },
                { english: "Hi, how are you?", turkish: "Selam, nasılsın?" }
            ],
            tips: ["İş ortamlarında 'Hello' tercih edin", "Arkadaşlarınızla 'Hi' kullanabilirsiniz"]
        },
        {
            title: "Günün Zamanına Göre Selamlaşma",
            content: "Sabah için 'Good morning', öğleden sonra için 'Good afternoon', akşam için 'Good evening' kullanılır.",
            examples: [
                { english: "Good morning!", turkish: "Günaydın!" },
                { english: "Good evening, everyone.", turkish: "İyi akşamlar, herkese." }
            ]
        },
        {
            title: "Vedalaşma",
            content: "'Goodbye' en yaygın vedalaşma ifadesidir. 'Bye', 'See you later', 'Take care' gibi alternatifler de vardır.",
            examples: [
                { english: "Goodbye, see you tomorrow!", turkish: "Hoşça kal, yarın görüşürüz!" },
                { english: "Bye bye!", turkish: "Bay bay!" }
            ]
        }
    ],
    summary: "Bu ünitede Hello/Hi, Good morning/afternoon/evening ve Goodbye gibi temel selamlama ifadelerini öğrendiniz."
};

// ===== UNIT 102: NUMBERS =====
const unit102Lecture: EnglishLecture = {
    unitId: 102,
    title: "Numbers 1-20",
    introduction: "Sayılar günlük iletişimin temelini oluşturur. Bu ünitede 1'den 20'ye kadar olan sayıları öğreneceksiniz.",
    sections: [
        {
            title: "1'den 10'a Kadar Sayılar",
            content: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten. Bu sayıları ezberlemek çok önemlidir.",
            examples: [
                { english: "I have five apples.", turkish: "Beş elmam var." },
                { english: "There are ten students.", turkish: "On öğrenci var." }
            ]
        },
        {
            title: "11'den 20'ye Kadar Sayılar",
            content: "Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty.",
            examples: [
                { english: "She is fifteen years old.", turkish: "O on beş yaşında." },
                { english: "Twenty minus five is fifteen.", turkish: "Yirmi eksi beş on beş eder." }
            ],
            tips: ["13-19 arası sayılar '-teen' ile biter", "Telefon numarası söylerken sayıları tek tek söyleyin"]
        }
    ],
    summary: "1-20 arası sayıları İngilizce olarak söyleyebilir ve anlayabilir hale geldiniz."
};

// ===== UNIT 103-130: Diğer ders içerikleri =====

// ===== UNIT 103: FAMILY MEMBERS =====
const unit103Lecture: EnglishLecture = {
    unitId: 103,
    title: "Family",
    introduction: "Bu ünitede ailenizi İngilizce olarak nasıl tanıtacağınızı ve akrabalık terimlerini öğreneceksiniz.",
    sections: [
        {
            title: "Çekirdek Aile (Immediate Family)",
            content: "Anne, baba ve kardeşler çekirdek aileyi oluşturur. 'Mother' ve 'Father' resmi, 'Mom' ve 'Dad' ise daha yaygındır.",
            examples: [
                { english: "This is my mother.", turkish: "Bu benim annem." },
                { english: "I have one brother and two sisters.", turkish: "Bir erkek kardeşim ve iki kız kardeşim var." }
            ],
            tips: ["'Sibling' kelimesi hem kız hem erkek kardeş için kullanılır."]
        },
        {
            title: "Geniş Aile (Extended Family)",
            content: "Büyükanne, büyükbaba, amca, hala gibi akrabalarımızı tanımlayan kelimelerdir.",
            examples: [
                { english: "My grandfather is 70 years old.", turkish: "Büyükbabam 70 yaşında." },
                { english: "I have many cousins.", turkish: "Çok sayıda kuzenim var." }
            ]
        }
    ],
    summary: "Artık ailenizi ve akrabalarınızı İngilizce kelimelerle tanıtabilirsiniz."
};

// ===== UNIT 104: COLORS =====
const unit104Lecture: EnglishLecture = {
    unitId: 104,
    title: "Colors",
    introduction: "Kıyafetleri, eşyaları ve doğayı tanımlamak için renkleri bilmek çok önemlidir. Bu ünitede temel renkleri öğreneceğiz.",
    sections: [
        {
            title: "Temel Renkler",
            content: "Red (kırmızı), Blue (mavi), Green (yeşil), Yellow (sarı), Black (siyah), White (beyaz).",
            examples: [
                { english: "The apple is red.", turkish: "Elma kırmızıdır." },
                { english: "I like the blue car.", turkish: "Mavi arabayı seviyorum." }
            ],
            tips: ["Renkler İngilizce'de nesneden önce gelir: 'Red apple' (Kırmızı elma)."]
        },
        {
            title: "Ara Renkler",
            content: "Orange (turuncu), Purple (mor), Pink (pembe), Brown (kahverengi), Gray (gri).",
            examples: [
                { english: "She has pink shoes.", turkish: "Onun pembe ayakkabıları var." },
                { english: "The sky is gray today.", turkish: "Bugün gökyüzü gri." }
            ]
        }
    ],
    summary: "Temel ve ara renkleri öğrendiniz, artık nesnelerin renklerini söyleyebilirsiniz."
};

// ===== UNIT 105: FOOD =====
const unit105Lecture: EnglishLecture = {
    unitId: 105,
    title: "Food",
    introduction: "Yiyecekler hakkında konuşmak, sipariş vermek ve tercihlerimizi belirtmek için temel kelimeleri öğrenelim.",
    sections: [
        {
            title: "Kahvaltılıklar ve Temel Gıdalar",
            content: "Bread (ekmek), Egg (yumurta), Cheese (peynir), Butter (tereyağı), Honey (bal).",
            examples: [
                { english: "I eat eggs for breakfast.", turkish: "Kahvaltıda yumurta yerim." },
                { english: "Can I have some bread?", turkish: "Biraz ekmek alabilir miyim?" }
            ]
        },
        {
            title: "Meyve ve Sebzeler",
            content: "Apple (elma), Banana (muz), Tomato (domates), Potato (patates), Orange (portakal).",
            examples: [
                { english: "I like apples.", turkish: "Elma severim." },
                { english: "We need potatoes for dinner.", turkish: "Akşam yemeği için patatese ihtiyacımız var." }
            ]
        },
        {
            title: "Ana Yemekler",
            content: "Meat (et), Chicken (tavuk), Fish (balık), Pasta (makarna), Rice (pirinç/pilav).",
            examples: [
                { english: "Chicken is my favorite food.", turkish: "Tavuk benim en sevdiğim yemektir." }
            ],
            tips: ["'Fruit' genellikle sayılamayan bir isimdir (singular kullanılır)."]
        }
    ],
    summary: "Temel yiyecekleri, meyve ve sebzeleri İngilizce olarak öğrendiniz."
};

// ===== UNIT 106: DRINKS =====
const unit106Lecture: EnglishLecture = {
    unitId: 106,
    title: "Drinks",
    introduction: "Sıcak ve soğuk içecekleri, su ve diğer sıvıları İngilizce ifade etmeyi öğreniyoruz.",
    sections: [
        {
            title: "Sıcak İçecekler",
            content: "Tea (çay), Coffee (kahve), Hot chocolate (sıcak çikolata).",
            examples: [
                { english: "I drink tea every morning.", turkish: "Her sabah çay içerim." },
                { english: "He likes coffee without sugar.", turkish: "O, şekersiz kahve sever." }
            ]
        },
        {
            title: "Soğuk İçecekler",
            content: "Water (su), Milk (süt), Fruit juice (meyve suyu), Lemonade (limonata).",
            examples: [
                { english: "A glass of water, please.", turkish: "Bir bardak su, lütfen." },
                { english: "I love orange juice.", turkish: "Portakal suyuna bayılırım." }
            ],
            tips: ["İçecek siparişi verirken 'I would like...' (İsterdim) kalıbı daha naziktir."]
        }
    ],
    summary: "İçecek çeşitlerini ve temel sipariş kalıplarını öğrendiniz."
};

// ===== UNIT 107: DAYS & MONTHS =====
const unit107Lecture: EnglishLecture = {
    unitId: 107,
    title: "Days and Months",
    introduction: "Zaman yönetimi ve randevular için haftanın günlerini ve yılın aylarını bilmek şarttır.",
    sections: [
        {
            title: "Haftanın Günleri (Days of the Week)",
            content: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
            examples: [
                { english: "Today is Monday.", turkish: "Bugün Pazartesi." },
                { english: "We have a meeting on Friday.", turkish: "Cuma günü bir toplantımız var." }
            ],
            tips: ["Günlerden önce her zaman 'on' edatı kullanılır: on Monday."]
        },
        {
            title: "Yılın Ayları (Months of the Year)",
            content: "January, February, March, April, May, June, July, August, September, October, November, December.",
            examples: [
                { english: "My birthday is in May.", turkish: "Doğum günüm Mayıs'ta." },
                { english: "It is very cold in January.", turkish: "Ocak ayında hava çok soğuktur." }
            ],
            tips: ["Aylardan önce 'in' edatı kullanılır: in June.", "Gün ve ay isimleri her zaman büyük harfle başlar."]
        }
    ],
    summary: "Günleri, ayları ve bunlarla kullanılan edatları (in/on) öğrendiniz."
};

// ===== UNIT 108: NUMBERS 21-100 =====
const unit108Lecture: EnglishLecture = {
    unitId: 108,
    title: "Numbers 21-100",
    introduction: "20'den büyük sayıları öğrenerek yaşınızı, fiyatları ve miktarları daha detaylı ifade edebilirsiniz.",
    sections: [
        {
            title: "Onluk Gruplar",
            content: "Twenty (20), Thirty (30), Forty (40), Fifty (50), Sixty (60), Seventy (70), Eighty (80), Ninety (90).",
            examples: [
                { english: "I am thirty-two years old.", turkish: "Otuz iki yaşındayım." },
                { english: "The book is forty-five dollars.", turkish: "Kitap kırk beş dolar." }
            ],
            tips: ["40 yazımına dikkat edin: 'Forty' (u harfi düşer).", "Sayıları birleştirirken araya tire (-) koyun: 'Twenty-one'."]
        },
        {
            title: "Yüz ve Ötesi",
            content: "One hundred (100).",
            examples: [
                { english: "One hundred students.", turkish: "Yüz öğrenci." }
            ]
        }
    ],
    summary: "100'e kadar olan tüm sayıları İngilizce okuyabilir ve yazabilirsiniz."
};

// ===== UNIT 109: HOME & ROOMS =====
const unit109Lecture: EnglishLecture = {
    unitId: 109,
    title: "Home and Rooms",
    introduction: "Evinizi ve içindeki odaları İngilizce olarak tanımlamayı öğreneceksiniz.",
    sections: [
        {
            title: "Evin Bölümleri",
            content: "Living room (oturma odası), Kitchen (mutfak), Bedroom (yatak odası), Bathroom (banyo), Garden (bahçe).",
            examples: [
                { english: "My bedroom is small but comfortable.", turkish: "Yatak odam küçük ama konforlu." },
                { english: "Mom is in the kitchen.", turkish: "Annem mutfakta." }
            ]
        },
        {
            title: "Konum Belirtme",
            content: "Bir odada olduğumuzu belirtirken 'in' edatını kullanırız.",
            examples: [
                { english: "I am in the living room.", turkish: "Oturma odasındayım." }
            ]
        }
    ],
    summary: "Evin bölümlerini ve nerede olduğunuzu ifade etmeyi öğrendiniz."
};

// ===== UNIT 110: FURNITURE =====
const unit110Lecture: EnglishLecture = {
    unitId: 110,
    title: "Furniture",
    introduction: "Ev eşyalarını ve mobilyaları İngilizce isimlendirmeyi öğreneceğiz.",
    sections: [
        {
            title: "Temel Mobilyalar",
            content: "Table (masa), Chair (sandalye), Sofa/Couch (koltuk), Bed (yatak), Wardrobe (gardırop).",
            examples: [
                { english: "There is a large table in the kitchen.", turkish: "Mutfakta büyük bir masa var." },
                { english: "My bed is very soft.", turkish: "Yatağım çok yumuşak." }
            ]
        },
        {
            title: "Elektronik ve Diğer Eşyalar",
            content: "Television (televizyon), Lamp (lamba), Mirror (ayna), Carpet (halı).",
            examples: [
                { english: "Turn on the lamp.", turkish: "Lambayı aç." }
            ],
            tips: ["'Furniture' kelimesi sayılamaz (uncountable), her zaman tekil kullanılır."]
        }
    ],
    summary: "Evinizdeki temel eşyaları İngilizce olarak adlandırabilirsiniz."
};

// ===== UNIT 111: BODY PARTS =====
const unit111Lecture: EnglishLecture = {
    unitId: 111,
    title: "Body Parts",
    introduction: "Vücudumuzun bölümlerini ve organlarımızı İngilizce olarak öğreniyoruz.",
    sections: [
        {
            title: "Baş ve Yüz",
            content: "Head (baş), Eye (göz), Ear (kulak), Nose (burun), Mouth (ağız), Hair (saç).",
            examples: [
                { english: "She has blue eyes.", turkish: "Onun mavi gözleri var." },
                { english: "Wash your face.", turkish: "Yüzünü yıka." }
            ]
        },
        {
            title: "Gövde ve Uzuvlar",
            content: "Arm (kol), Hand (el), Finger (parmak), Leg (bacak), Foot (ayak).",
            examples: [
                { english: "I have ten fingers.", turkish: "On parmağım var." }
            ],
            tips: ["'Foot' (tekil) -> 'Feet' (çoğul) düzensiz bir çoğul yapıdır."]
        }
    ],
    summary: "Vücudunuzun temel bölümlerini İngilizce olarak öğrendiniz."
};

// ===== UNIT 112: CLOTHES =====
const unit112Lecture: EnglishLecture = {
    unitId: 112,
    title: "Clothes",
    introduction: "Kıyafetleri ve ne giydiğimizi anlatmak için gerekli kelimeleri öğreneceğiz.",
    sections: [
        {
            title: "Üst ve Alt Giyim",
            content: "Shirt (gömlek), T-shirt (tişört), Pants/Trousers (pantolon), Skirt (etek), Dress (elbise).",
            examples: [
                { english: "I'm wearing a white shirt.", turkish: "Beyaz bir gömlek giyiyorum." },
                { english: "These pants are new.", turkish: "Bu pantolon yeni." }
            ],
            tips: ["'Pants', 'Trousers', 'Glasses', 'Shoes' gibi kelimeler her zaman çoğul kullanılır."]
        },
        {
            title: "Dış Giyim ve Aksesuarlar",
            content: "Jacket (ceket), Coat (manto/palto), Hat (şapka), Shoes (ayakkabı).",
            examples: [
                { english: "Put on your coat, it's cold.", turkish: "Mantonu giy, hava soğuk." }
            ]
        }
    ],
    summary: "Kıyafetleri İngilizce olarak tanımlayabilir ve ne giydiğinizi söyleyebilirsiniz."
};

// ===== UNIT 113: ANIMALS =====
const unit113Lecture: EnglishLecture = {
    unitId: 113,
    title: "Animals",
    introduction: "Hayvan dostlarımızı, evcil hayvanları ve vahşi doğadaki canlıları İngilizce adlandırmayı öğreniyoruz.",
    sections: [
        {
            title: "Evcil Hayvanlar (Pets)",
            content: "Dog (köpek), Cat (kedi), Rabbit (tavşan), Hamster, Bird (kuş), Fish (balık).",
            examples: [
                { english: "I have a small dog.", turkish: "Küçük bir köpeğim var." },
                { english: "My cat is sleeping.", turkish: "Kedim uyuyor." }
            ]
        },
        {
            title: "Çiftlik ve Vahşi Hayvanlar",
            content: "Cow (inek), Horse (at), Sheep (koyun), Lion (aslan), Elephant (fil), Tiger (kaplan).",
            examples: [
                { english: "The lion is the king of the jungle.", turkish: "Aslan ormanın kralıdır." }
            ],
            tips: ["'Sheep' kelimesinin çoğulu da 'sheep'dir (değişmez)."]
        }
    ],
    summary: "Hayvan türlerini ve evcil hayvanları İngilizce olarak ifade edebilirsiniz."
};

// ===== UNIT 114: JOBS =====
const unit114Lecture: EnglishLecture = {
    unitId: 114,
    title: "Jobs",
    introduction: "Meslekleri ve insanların ne iş yaptığını sormayı/anlatmayı öğreneceğiz.",
    sections: [
        {
            title: "Yaygın Meslekler",
            content: "Teacher (öğretmen), Doctor (doktor), Nurse (hemşire), Engineer (mühendis), Student (öğrenci), Chef (şef).",
            examples: [
                { english: "I am a student.", turkish: "Ben bir öğrenciyim." },
                { english: "My father is an engineer.", turkish: "Babam bir mühendis." }
            ],
            tips: ["Mesleklerden önce mutlaka 'a' veya 'an' belgisiz tanımlığını kullanın: 'a doctor', 'an engineer'."]
        },
        {
            title: "Meslek Sorma",
            content: "Birinin ne iş yaptığını sormak için 'What do you do?' veya 'What is your job?' kalıplarını kullanırız.",
            examples: [
                { english: "What do you do? - I am a teacher.", turkish: "Ne iş yapıyorsun? - Ben öğretmenim." }
            ]
        }
    ],
    summary: "Meslek isimlerini ve işiniz hakkında konuşmayı öğrendiniz."
};

// ===== UNIT 115: PLACES IN THE CITY =====
const unit115Lecture: EnglishLecture = {
    unitId: 115,
    title: "Places in the City",
    introduction: "Şehirdeki binaları, dükkanları ve önemli yerleri İngilizce öğreniyoruz.",
    sections: [
        {
            title: "Önemli Yapılar",
            content: "School (okul), Hospital (hastane), Bank (banka), Post office (postane), Cinema (sinema).",
            examples: [
                { english: "The hospital is near the bank.", turkish: "Hastane bankanın yanındadır." }
            ]
        },
        {
            title: "Alışveriş ve Sosyal Yerler",
            content: "Supermarket (süpermarket), Restaurant (restoran), Park, Pharmacy (eczane), Library (kütüphane).",
            examples: [
                { english: "Let's go to the park.", turkish: "Hadi parka gidelim." },
                { english: "I am at the pharmacy.", turkish: "Eczanedeyim." }
            ]
        }
    ],
    summary: "Şehirdeki temel yerleri ve nerede olduğunuzu söyleyebilirsiniz."
};

// ===== UNIT 116: TRANSPORTATION =====
const unit116Lecture: EnglishLecture = {
    unitId: 116,
    title: "Transportation",
    introduction: "Ulaşım araçlarını ve bir yere nasıl gidileceğini anlatmayı öğreneceğiz.",
    sections: [
        {
            title: "Kara, Deniz ve Hava Ulaşımı",
            content: "Car (araba), Bus (otobüs), Train (tren), Bicycle (bisiklet), Plane (uçak), Ship (gemi).",
            examples: [
                { english: "I go to work by car.", turkish: "İşe arabayla giderim." },
                { english: "The train is late.", turkish: "Tren gecikti." }
            ]
        },
        {
            title: "Vasıta Belirtme",
            content: "Bir yere nasıl gittiğimizi belirtirken vasıtadan önce 'by' kullanırız.",
            examples: [
                { english: "I travel by plane.", turkish: "Uçakla seyahat ederim." }
            ],
            tips: ["'On foot' (yürüyerek) kalıbı 'by' ile kullanılmaz."]
        }
    ],
    summary: "Ulaşım araçlarını ve seyahat şekillerini İngilizce ifade edebilirsiniz."
};

// ===== UNIT 117: DAILY ROUTINES =====
const unit117Lecture: EnglishLecture = {
    unitId: 117,
    title: "Daily Routines",
    introduction: "Günlük yaptığımız rutin aktiviteleri anlatmayı öğreneceğiz.",
    sections: [
        {
            title: "Sabah Rutini",
            content: "Wake up (uyanmak), Get up (yataktan kalkmak), Wash face (yüz yıkamak), Have breakfast (kahvaltı yapmak).",
            examples: [
                { english: "I wake up at 7 AM.", turkish: "Sabah 7'de uyanırım." }
            ]
        },
        {
            title: "Gün İçi ve Akşam",
            content: "Go to work/school (işe/okula gitmek), Have lunch (öğle yemeği yemek), Come home (eve gelmek), Watch TV (TV izlemek), Go to bed (yatmak).",
            examples: [
                { english: "I go to bed at 11 PM.", turkish: "Gece 11'de yatarım." }
            ],
            tips: ["Rutinlerden bahsederken genellikle 'Simple Present' (Geniş Zaman) kullanılır."]
        }
    ],
    summary: "Günlük yaşantınızı ve alışkanlıklarınızı İngilizce anlatabilirsiniz."
};

// ===== UNIT 118: TELLING TIME =====
const unit118Lecture: EnglishLecture = {
    unitId: 118,
    title: "Telling Time",
    introduction: "Saati sormayı ve söylemeyi öğrenerek randevularınızı ve günlük planlarınızı daha iyi yönetebilirsiniz.",
    sections: [
        {
            title: "Tam Saatler",
            content: "Tam saatlerde 'o'clock' ifadesi kullanılır.",
            examples: [
                { english: "It is three o'clock.", turkish: "Saat üç." }
            ]
        },
        {
            title: "Buçuk ve Çeyrek Geçer/Kala",
            content: "Half past (buçuk), Quarter past (çeyrek geçe), Quarter to (çeyrek kala).",
            examples: [
                { english: "It is half past four.", turkish: "Saat dört buçuk." },
                { english: "It is quarter past six.", turkish: "Saat altıyı çeyrek geçiyor." }
            ],
            tips: ["Saat sorarken 'What time is it?' veya 'What is the time?' diyebilirsiniz."]
        }
    ],
    summary: "İngilizce olarak saati sormayı ve her türlü zaman dilimini ifade etmeyi öğrendiniz."
};

// ===== UNIT 119: WEATHER =====
const unit119Lecture: EnglishLecture = {
    unitId: 119,
    title: "Weather",
    introduction: "Hava durumunu sormayı ve tarif etmeyi öğreneceğiz.",
    sections: [
        {
            title: "Hava Durumu Sıfatları",
            content: "Sunny (güneşli), Rainy (yağmurlu), Cloudy (bulutlu), Windy (rüzgarlı), Snowy (karlı).",
            examples: [
                { english: "It is sunny today.", turkish: "Bugün hava güneşli." },
                { english: "It is raining outside.", turkish: "Dışarıda yağmur yağıyor." }
            ]
        },
        {
            title: "Sıcaklık Durumu",
            content: "Hot (sıcak), Cold (soğuk), Warm (ılık), Cool (serin).",
            examples: [
                { english: "It is very cold in winter.", turkish: "Kışın hava çok soğuktur." }
            ],
            tips: ["Hava durumu sorarken 'How is the weather?' veya 'What's the weather like?' kullanılır."]
        }
    ],
    summary: "Hava durumunu ve sıcaklığı İngilizce olarak anlatabilirsiniz."
};

// ===== UNIT 120: HOBBIES =====
const unit120Lecture: EnglishLecture = {
    unitId: 120,
    title: "Hobbies",
    introduction: "Boş zamanlarımızda yapmayı sevdiğimiz aktivitelerden ve hobilerimizden bahsetmeyi öğreneceğiz.",
    sections: [
        {
            title: "Yaygın Hobiler",
            content: "Reading books (kitap okumak), Swimming (yüzmek), Playing football (futbol oynamak), Listening to music (müzik dinlemek), Cooking (yemek yapmak).",
            examples: [
                { english: "I like swimming.", turkish: "Yüzmeyi severim." },
                { english: "My hobby is reading.", turkish: "Hobim kitap okumaktır." }
            ]
        },
        {
            title: "Beğeni İfade Etme",
            content: "Sevdiğimiz şeyleri belirtirken 'I like...', 'I love...' veya 'I enjoy...' kalıplarını kullanırız.",
            examples: [
                { english: "Do you like cooking? - Yes, I do.", turkish: "Yemek yapmayı sever misin? - Evet, severim." }
            ],
            tips: ["'Like' fiilinden sonra gelen fiil genellikle '-ing' takısı alır: 'I like reading'."]
        }
    ],
    summary: "İlgilendiğiniz aktiviteleri ve hobilerinizi İngilizce anlatabilirsiniz."
};

// ===== UNIT 121: FEELINGS =====
const unit121Lecture: EnglishLecture = {
    unitId: 121,
    title: "Feelings",
    introduction: "Duygularımızı ve nasıl hissettiğimizi ifade etmeyi öğreneceğiz.",
    sections: [
        {
            title: "Temel Duygular",
            content: "Happy (mutlu), Sad (üzgün), Angry (kızgın), Tired (yorgun), Sleepy (uykulu), Excited (heyecanlı).",
            examples: [
                { english: "I am happy today.", turkish: "Bugün mutluyum." },
                { english: "Are you tired?", turkish: "Yorgun musun?" }
            ]
        },
        {
            title: "Durum Sorma",
            content: "Birisinin nasıl hissettiğini sormak için 'How do you feel?' veya 'How are you?' kullanırız.",
            examples: [
                { english: "I feel great!", turkish: "Harika hissediyorum!" }
            ]
        }
    ],
    summary: "Duygularınızı ve fiziksel durumunuzu İngilizce ifade edebilirsiniz."
};

// ===== UNIT 122: SCHOOL & CLASSROOM =====
const unit122Lecture: EnglishLecture = {
    unitId: 122,
    title: "School and Classroom",
    introduction: "Okul ortamını, sınıf eşyalarını ve derslerle ilgili temel kelimeleri öğreniyoruz.",
    sections: [
        {
            title: "Sınıf Eşyaları",
            content: "Book (kitap), Notebook (defter), Pen (tükenmez kalem), Pencil (kurşun kalem), Eraser (silgi), Desk (sıra/masa).",
            examples: [
                { english: "Open your notebooks.", turkish: "Defterlerinizi açın." },
                { english: "Can I borrow your pen?", turkish: "Kalemini ödünç alabilir miyim?" }
            ]
        },
        {
            title: "Okul Bölümleri",
            content: "Classroom (sınıf), Library (kütüphane), Teacher's room (öğretmenler odası), Canteen (kantin).",
            examples: [
                { english: "The students are in the classroom.", turkish: "Öğrenciler sınıftalar." }
            ]
        }
    ],
    summary: "Okul ve sınıf ortamındaki nesneleri İngilizce olarak adlandırabilirsiniz."
};

// ===== UNIT 123: HOLIDAYS & CELEBRATIONS =====
const unit123Lecture: EnglishLecture = {
    unitId: 123,
    title: "Holidays and Celebrations",
    introduction: "Özel günleri, bayramları ve tatil planlarını İngilizce olarak nasıl ifade edeceğimizi öğreneceğiz.",
    sections: [
        {
            title: "Önemli Günler",
            content: "Birthday (doğum günü), Wedding (düğün), Christmas (Noel), New Year (Yeni Yıl).",
            examples: [
                { english: "Happy birthday!", turkish: "Doğum günün kutlu olsun!" },
                { english: "We have a party on New Year's Eve.", turkish: "Yılbaşı gecesi bir partimiz var." }
            ]
        },
        {
            title: "Tatil Türleri",
            content: "Summer holiday (yaz tatili), Winter holiday (kış tatili), Sightseeing (gezi).",
            examples: [
                { english: "I am on holiday.", turkish: "Tatildeyim." }
            ],
            tips: ["Bir kutlama yaparken 'celebrate' fiili kullanılır."]
        }
    ],
    summary: "Tatilleri ve kutlamaları İngilizce olarak karşı tarafa aktarabilirsiniz."
};

// ===== UNIT 124: COUNTRIES & NATIONALITIES =====
const unit124Lecture: EnglishLecture = {
    unitId: 124,
    title: "Countries and Nationalities",
    introduction: "Nereli olduğumuzu ve hangi dili konuştuğumuzu belirtmek için ülke ve millet isimlerini öğreniyoruz.",
    sections: [
        {
            title: "Ülkeler ve Milletler",
            content: "Turkey - Turkish, England - English, Germany - German, France - French, Spain - Spanish, Italy - Italian.",
            examples: [
                { english: "I am from Turkey.", turkish: "Ben Türkiye'denim." },
                { english: "He is Italian.", turkish: "O İtalyan." }
            ],
            tips: ["Ülkelerden önce 'from' kullanılır, milletlerden önce kullanılmaz: 'from Turkey' ama 'I am Turkish'."]
        },
        {
            title: "Dil Sorma",
            content: "Hangi dilleri konuştuğumuzu belirtirken 'I speak...' kalıbını kullanırız.",
            examples: [
                { english: "I speak Turkish and a little English.", turkish: "Türkçe ve biraz İngilizce konuşuyorum." }
            ]
        }
    ],
    summary: "Ülke ve millet isimlerini kullanarak kendinizi tantabilirsiniz."
};

// ===== UNIT 125: BASIC VERBS =====
const unit125Lecture: EnglishLecture = {
    unitId: 125,
    title: "Basic Verbs",
    introduction: "İngilizce cümle kurmanın temeli olan en sık kullanılan hareket fiillerini öğreneceğiz.",
    sections: [
        {
            title: "Günlük Hareket Fiilleri",
            content: "Go (gitmek), Come (gelmek), Eat (yemek), Drink (içmek), Sleep (uyumak), Read (okumak), Write (yazmak).",
            examples: [
                { english: "I read a book every night.", turkish: "Her gece kitap okurum." },
                { english: "Go to the door.", turkish: "Kapıya git." }
            ]
        },
        {
            title: "Yardımcı ve Önemli Fiiller",
            content: "Do (yapmak), Make (yapmak/hazırlamak), Have (sahip olmak), Take (almak/götürmek).",
            examples: [
                { english: "I have a car.", turkish: "Bir arabam var." }
            ],
            tips: ["'Do' genellikle eylemler için, 'Make' ise bir şey üretmek/hazırlamak için kullanılır."]
        }
    ],
    summary: "Temel fiilleri kullanarak basit eylem cümleleri kurmaya hazırsınız."
};

// ===== UNIT 126: PRESENT SIMPLE (HABITS) =====
const unit126Lecture: EnglishLecture = {
    unitId: 126,
    title: "Present Simple",
    introduction: "Geniş zamanı kullanarak alışkanlıklarımızdan, rutinlerimizden ve genel gerçeklerden bahsetmeyi öğreniyoruz.",
    sections: [
        {
            title: "Olumlu Cümle Yapısı",
            content: "I, You, We, They özneleriyle fiilin 1. hali kullanılır. He, She, It özneleriyle fiile '-s' takısı gelir.",
            examples: [
                { english: "I work every day.", turkish: "Her gün çalışırım." },
                { english: "She works every day.", turkish: "O her gün çalışır." }
            ]
        },
        {
            title: "Sıklık Zarfları",
            content: "Always (her zaman), Usually (genellikle), Sometimes (bazen), Never (asla).",
            examples: [
                { english: "I always drink milk.", turkish: "Her zaman süt içerim." }
            ],
            tips: ["Sıklık zarfları genellikle ana fiilden önce gelir."]
        }
    ],
    summary: "Geniş zamanı kullanarak rutinlerinizi ve alışkanlıklarınızı anlatabilirsiniz."
};

// ===== UNIT 127: PRESENT CONTINUOUS (NOW) =====
const unit127Lecture: EnglishLecture = {
    unitId: 127,
    title: "Present Continuous",
    introduction: "Şu anda, konuşma anında yaptığımız eylemleri anlatmayı öğreniyoruz.",
    sections: [
        {
            title: "Cümle Yapısı",
            content: "am / is / are + Fiil + ing yapısı kullanılır.",
            examples: [
                { english: "I am studying English now.", turkish: "Şu an İngilizce çalışıyorum." },
                { english: "They are playing football.", turkish: "Onlar futbol oynuyorlar." }
            ]
        },
        {
            title: "Zaman İfadeleri",
            content: "Now (şimdi), Right now (hemen şimdi), At the moment (şu anda).",
            examples: [
                { english: "She is sleeping at the moment.", turkish: "Şu anda uyuyor." }
            ],
            tips: ["Duygu ve sahiplik bildiren bazı fiiller (like, want, have) genellikle -ing almaz."]
        }
    ],
    summary: "Şu an devam eden eylemleri İngilizce ifade etmeyi öğrendiniz."
};

// ===== UNIT 128: ADJECTIVES =====
const unit128Lecture: EnglishLecture = {
    unitId: 128,
    title: "Adjectives",
    introduction: "Nesneleri, insanları ve durumları tanımlamak için kullanılan sıfatları öğreneceğiz.",
    sections: [
        {
            title: "Zıt Sıfatlar",
            content: "Big - Small (büyük - küçük), Good - Bad (iyi - kötü), New - Old (yeni - eski), Fast - Slow (hızlı - yavaş).",
            examples: [
                { english: "This is a big house.", turkish: "Bu büyük bir ev." },
                { english: "My car is old.", turkish: "Arabam eski." }
            ]
        },
        {
            title: "Tanımlama Sıfatları",
            content: "Beautiful (güzel), Expensive (pahalı), Cheap (ucuz), Easy (kolay), Difficult (zor).",
            examples: [
                { english: "English is easy.", turkish: "İngilizce kolaydır." }
            ],
            tips: ["Sıfatlar isimlerden önce gelir: 'A beautiful day'."]
        }
    ],
    summary: "Sıfatları kullanarak nesneleri ve durumları detaylıca tarif edebilirsiniz."
};

// ===== UNIT 129: PREPOSITIONS =====
const unit129Lecture: EnglishLecture = {
    unitId: 129,
    title: "Prepositions",
    introduction: "Nesnelerin nerede olduğunu belirtmek için kullanılan yer edatlarını öğreniyoruz.",
    sections: [
        {
            title: "Temel Yer Edatları",
            content: "In (içinde), On (üstünde), At (noktasında), Under (altında), Next to (yanında).",
            examples: [
                { english: "The book is on the table.", turkish: "Kitap masanın üstünde." },
                { english: "The cat is under the chair.", turkish: "Kedi sandalyenin altında." }
            ]
        },
        {
            title: "Daha Fazla Edat",
            content: "Behind (arkasında), In front of (önünde), Between (arasında).",
            examples: [
                { english: "The bank is between the school and the park.", turkish: "Banka okul ile parkın arasındadır." }
            ],
            tips: ["'At' genellikle belirli bir adresi veya noktayı belirtmek için kullanılır (at school, at home)."]
        }
    ],
    summary: "Nesnelerin konumlarını İngilizce edatlar kullanarak kesin bir şekilde ifade edebilirsiniz."
};

// ===== UNIT 130: A1 REVIEW =====
const unit130Lecture: EnglishLecture = {
    unitId: 130,
    title: "A1 Level Review",
    introduction: "İngilizce A1 seviyesinin sonuna geldiniz! Bu ünitede öğrendiğimiz tüm temel konuları hızlıca gözden geçireceğiz.",
    sections: [
        {
            title: "Öğrendiğimiz Konular",
            content: "Selamlaşma, sayılar, aile, renkler, yiyecekler, zamanlar (Present Simple/Continuous), sıfatlar ve edatlar.",
            examples: [
                { english: "Hello! My name is Alex. I am from Germany. I like reading and I am studying English right now.", turkish: "Merhaba! Benim adım Alex. Almanya'danım. Okumayı severim ve şu an İngilizce çalışıyorum." }
            ]
        },
        {
            title: "Başarı Tebriği",
            content: "Artık temel düzeyde İngilizce iletişim kurabilir, kendinizi tanıtabilir ve günlük ihtiyaçlarınızı ifade edebilirsiniz.",
            examples: [
                { english: "Congratulations! You finished A1.", turkish: "Tebrikler! A1 seviyesini bitirdiniz." }
            ],
            tips: ["Dil öğrenimi süreklilik ister, A2 seviyesine geçmeye hazırsınız!"]
        }
    ],
    summary: "A1 seviyesindeki tüm temel dil becerilerini başarıyla tamamladınız!"
};

// Export function
export function getEnglishA1LectureForUnit(unitId: number): EnglishLecture {
    const idMapping: { [key: number]: EnglishLecture } = {
        101: unit101Lecture, 102: unit102Lecture, 103: unit103Lecture, 104: unit104Lecture, 105: unit105Lecture,
        106: unit106Lecture, 107: unit107Lecture, 108: unit108Lecture, 109: unit109Lecture, 110: unit110Lecture,
        111: unit111Lecture, 112: unit112Lecture, 113: unit113Lecture, 114: unit114Lecture, 115: unit115Lecture,
        116: unit116Lecture, 117: unit117Lecture, 118: unit118Lecture, 119: unit119Lecture, 120: unit120Lecture,
        121: unit121Lecture, 122: unit122Lecture, 123: unit123Lecture, 124: unit124Lecture, 125: unit125Lecture,
        126: unit126Lecture, 127: unit127Lecture, 128: unit128Lecture, 129: unit129Lecture, 130: unit130Lecture,
    };

    return idMapping[unitId] || unit101Lecture;
}
