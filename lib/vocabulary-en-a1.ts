/**
 * LinguaFlow Vocabulary Database - English A1
 * 30 Units (ID: 101-130), 15 words per unit
 */

export interface EnglishVocabulary {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

export interface EnglishUnitVocabulary {
    unitId: number;
    title: string;
    words: EnglishVocabulary[];
}

// ===== UNIT 101: GREETINGS & INTRODUCTIONS =====
const unit101Vocab: EnglishUnitVocabulary = {
    unitId: 101, title: "Greetings",
    words: [
        { word: "Hello", meaning: "Merhaba", pronunciation: "he-LOH", example: "Hello, how are you?", exampleTranslation: "Merhaba, nasılsın?" },
        { word: "Goodbye", meaning: "Hoşça kal", pronunciation: "good-BYE", example: "Goodbye, see you tomorrow!", exampleTranslation: "Hoşça kal, yarın görüşürüz!" },
        { word: "Good morning", meaning: "Günaydın", pronunciation: "good MOR-ning", example: "Good morning, Mom!", exampleTranslation: "Günaydın anne!" },
        { word: "Good afternoon", meaning: "İyi öğlenler", pronunciation: "good af-ter-NOON", example: "Good afternoon, teacher.", exampleTranslation: "İyi öğlenler öğretmen." },
        { word: "Good evening", meaning: "İyi akşamlar", pronunciation: "good EE-vning", example: "Good evening, everyone.", exampleTranslation: "İyi akşamlar herkese." },
        { word: "Good night", meaning: "İyi geceler", pronunciation: "good NITE", example: "Good night, sleep well.", exampleTranslation: "İyi geceler, iyi uykular." },
        { word: "Please", meaning: "Lütfen", pronunciation: "pleez", example: "Please help me.", exampleTranslation: "Lütfen bana yardım et." },
        { word: "Thank you", meaning: "Teşekkür ederim", pronunciation: "THANK yoo", example: "Thank you very much!", exampleTranslation: "Çok teşekkür ederim!" },
        { word: "You're welcome", meaning: "Rica ederim", pronunciation: "yoor WEL-kum", example: "You're welcome, anytime.", exampleTranslation: "Rica ederim, her zaman." },
        { word: "Sorry", meaning: "Özür dilerim", pronunciation: "SO-ree", example: "I'm sorry for being late.", exampleTranslation: "Geç kaldığım için özür dilerim." },
        { word: "Excuse me", meaning: "Affedersiniz", pronunciation: "ek-SKYOOZ mee", example: "Excuse me, where is the bank?", exampleTranslation: "Affedersiniz, banka nerede?" },
        { word: "Nice to meet you", meaning: "Tanıştığımıza memnun oldum", pronunciation: "nys too meet yoo", example: "Nice to meet you, John.", exampleTranslation: "Tanıştığımıza memnun oldum, John." },
        { word: "How are you?", meaning: "Nasılsın?", pronunciation: "how ar yoo", example: "Hello! How are you today?", exampleTranslation: "Merhaba! Bugün nasılsın?" },
        { word: "I'm fine", meaning: "İyiyim", pronunciation: "aym fyn", example: "I'm fine, thank you.", exampleTranslation: "İyiyim, teşekkürler." },
        { word: "See you later", meaning: "Sonra görüşürüz", pronunciation: "see yoo LAY-ter", example: "See you later, bye!", exampleTranslation: "Sonra görüşürüz, hoşça kal!" }
    ]
};

// ===== UNIT 102: NUMBERS 1-20 =====
const unit102Vocab: EnglishUnitVocabulary = {
    unitId: 102, title: "Numbers 1-20",
    words: [
        { word: "One", meaning: "1", pronunciation: "wun", example: "I have one apple.", exampleTranslation: "Bir elmam var." },
        { word: "Two", meaning: "2", pronunciation: "too", example: "Two plus two is four.", exampleTranslation: "İki artı iki dört eder." },
        { word: "Three", meaning: "3", pronunciation: "three", example: "There are three cats.", exampleTranslation: "Üç kedi var." },
        { word: "Four", meaning: "4", pronunciation: "for", example: "Four seasons in a year.", exampleTranslation: "Bir yılda dört mevsim." },
        { word: "Five", meaning: "5", pronunciation: "fyv", example: "I work five days a week.", exampleTranslation: "Haftada beş gün çalışırım." },
        { word: "Six", meaning: "6", pronunciation: "siks", example: "Six divided by two is three.", exampleTranslation: "Altı bölü iki üç eder." },
        { word: "Seven", meaning: "7", pronunciation: "SEV-en", example: "Seven days in a week.", exampleTranslation: "Bir haftada yedi gün." },
        { word: "Eight", meaning: "8", pronunciation: "eyt", example: "I wake up at eight.", exampleTranslation: "Sekizde uyanırım." },
        { word: "Nine", meaning: "9", pronunciation: "nyn", example: "Nine is my lucky number.", exampleTranslation: "Dokuz benim şanslı numaram." },
        { word: "Ten", meaning: "10", pronunciation: "ten", example: "Count to ten.", exampleTranslation: "Ona kadar say." },
        { word: "Eleven", meaning: "11", pronunciation: "i-LEV-en", example: "The train arrives at eleven.", exampleTranslation: "Tren on birde gelir." },
        { word: "Twelve", meaning: "12", pronunciation: "twelv", example: "There are twelve months.", exampleTranslation: "On iki ay var." },
        { word: "Fifteen", meaning: "15", pronunciation: "fif-TEEN", example: "She is fifteen years old.", exampleTranslation: "O on beş yaşında." },
        { word: "Twenty", meaning: "20", pronunciation: "TWEN-tee", example: "I have twenty dollars.", exampleTranslation: "Yirmi dolarım var." },
        { word: "Zero", meaning: "0", pronunciation: "ZEE-roh", example: "The temperature is zero.", exampleTranslation: "Sıcaklık sıfır." }
    ]
};

// ===== UNIT 103: FAMILY MEMBERS =====
const unit103Vocab: EnglishUnitVocabulary = {
    unitId: 103, title: "Family Members",
    words: [
        { word: "Mother", meaning: "Anne", pronunciation: "MUH-ther", example: "My mother is a teacher.", exampleTranslation: "Annem öğretmen." },
        { word: "Father", meaning: "Baba", pronunciation: "FAH-ther", example: "My father works in a bank.", exampleTranslation: "Babam bankada çalışır." },
        { word: "Sister", meaning: "Kız kardeş", pronunciation: "SIS-ter", example: "I have two sisters.", exampleTranslation: "İki kız kardeşim var." },
        { word: "Brother", meaning: "Erkek kardeş", pronunciation: "BRUH-ther", example: "My brother is older than me.", exampleTranslation: "Erkek kardeşim benden büyük." },
        { word: "Grandmother", meaning: "Büyükanne", pronunciation: "GRAND-muh-ther", example: "My grandmother makes cookies.", exampleTranslation: "Büyükannem kurabiye yapar." },
        { word: "Grandfather", meaning: "Büyükbaba", pronunciation: "GRAND-fah-ther", example: "My grandfather tells stories.", exampleTranslation: "Büyükbabam hikaye anlatır." },
        { word: "Aunt", meaning: "Teyze/Hala", pronunciation: "ant", example: "My aunt lives in London.", exampleTranslation: "Teyzem Londra'da yaşar." },
        { word: "Uncle", meaning: "Amca/Dayı", pronunciation: "UN-kul", example: "My uncle is a doctor.", exampleTranslation: "Amcam doktor." },
        { word: "Cousin", meaning: "Kuzen", pronunciation: "KUH-zin", example: "My cousin is my best friend.", exampleTranslation: "Kuzenim en iyi arkadaşım." },
        { word: "Parents", meaning: "Ebeveynler", pronunciation: "PAIR-ents", example: "My parents love me.", exampleTranslation: "Ailem beni seviyor." },
        { word: "Son", meaning: "Oğul", pronunciation: "sun", example: "They have one son.", exampleTranslation: "Bir oğulları var." },
        { word: "Daughter", meaning: "Kız", pronunciation: "DAW-ter", example: "Their daughter is smart.", exampleTranslation: "Kızları akıllı." },
        { word: "Husband", meaning: "Koca", pronunciation: "HUZ-band", example: "Her husband is kind.", exampleTranslation: "Kocası nazik." },
        { word: "Wife", meaning: "Eş (kadın)", pronunciation: "wyf", example: "His wife is beautiful.", exampleTranslation: "Eşi güzel." },
        { word: "Family", meaning: "Aile", pronunciation: "FAM-i-lee", example: "I love my family.", exampleTranslation: "Ailemi seviyorum." }
    ]
};

// ===== UNIT 104: COLORS =====
const unit104Vocab: EnglishUnitVocabulary = {
    unitId: 104, title: "Colors",
    words: [
        { word: "Red", meaning: "Kırmızı", pronunciation: "red", example: "The apple is red.", exampleTranslation: "Elma kırmızı." },
        { word: "Blue", meaning: "Mavi", pronunciation: "bloo", example: "The sky is blue.", exampleTranslation: "Gökyüzü mavi." },
        { word: "Green", meaning: "Yeşil", pronunciation: "green", example: "Grass is green.", exampleTranslation: "Çimen yeşil." },
        { word: "Yellow", meaning: "Sarı", pronunciation: "YEL-oh", example: "The sun is yellow.", exampleTranslation: "Güneş sarı." },
        { word: "Orange", meaning: "Turuncu", pronunciation: "OR-inj", example: "I like orange juice.", exampleTranslation: "Portakal suyunu severim." },
        { word: "Purple", meaning: "Mor", pronunciation: "PUR-pul", example: "Purple is my favorite color.", exampleTranslation: "Mor benim en sevdiğim renk." },
        { word: "Pink", meaning: "Pembe", pronunciation: "pink", example: "She wears a pink dress.", exampleTranslation: "Pembe elbise giyiyor." },
        { word: "Black", meaning: "Siyah", pronunciation: "blak", example: "The cat is black.", exampleTranslation: "Kedi siyah." },
        { word: "White", meaning: "Beyaz", pronunciation: "wyt", example: "Snow is white.", exampleTranslation: "Kar beyaz." },
        { word: "Brown", meaning: "Kahverengi", pronunciation: "brown", example: "The table is brown.", exampleTranslation: "Masa kahverengi." },
        { word: "Gray", meaning: "Gri", pronunciation: "gray", example: "The elephant is gray.", exampleTranslation: "Fil gri." },
        { word: "Gold", meaning: "Altın rengi", pronunciation: "gohld", example: "Gold is valuable.", exampleTranslation: "Altın değerli." },
        { word: "Silver", meaning: "Gümüş rengi", pronunciation: "SIL-ver", example: "The ring is silver.", exampleTranslation: "Yüzük gümüş." },
        { word: "Dark", meaning: "Koyu", pronunciation: "dark", example: "Dark blue is nice.", exampleTranslation: "Koyu mavi güzel." },
        { word: "Light", meaning: "Açık", pronunciation: "lyt", example: "Light green looks fresh.", exampleTranslation: "Açık yeşil taze görünür." }
    ]
};

// ===== UNIT 105: FOOD =====
const unit105Vocab: EnglishUnitVocabulary = {
    unitId: 105, title: "Food",
    words: [
        { word: "Apple", meaning: "Elma", pronunciation: "AP-ul", example: "An apple a day.", exampleTranslation: "Günde bir elma." },
        { word: "Bread", meaning: "Ekmek", pronunciation: "bred", example: "I eat bread every day.", exampleTranslation: "Her gün ekmek yerim." },
        { word: "Cheese", meaning: "Peynir", pronunciation: "cheez", example: "I love cheese.", exampleTranslation: "Peyniri severim." },
        { word: "Chicken", meaning: "Tavuk", pronunciation: "CHIK-en", example: "Chicken soup is good.", exampleTranslation: "Tavuk çorbası iyi." },
        { word: "Egg", meaning: "Yumurta", pronunciation: "eg", example: "I eat eggs for breakfast.", exampleTranslation: "Kahvaltıda yumurta yerim." },
        { word: "Fish", meaning: "Balık", pronunciation: "fish", example: "Fish is healthy.", exampleTranslation: "Balık sağlıklı." },
        { word: "Rice", meaning: "Pirinç/Pilav", pronunciation: "rys", example: "Rice is a staple food.", exampleTranslation: "Pirinç temel gıdadır." },
        { word: "Meat", meaning: "Et", pronunciation: "meet", example: "I don't eat meat.", exampleTranslation: "Et yemiyorum." },
        { word: "Vegetable", meaning: "Sebze", pronunciation: "VEJ-tuh-bul", example: "Eat your vegetables.", exampleTranslation: "Sebzelerini ye." },
        { word: "Fruit", meaning: "Meyve", pronunciation: "froot", example: "Fruit is sweet.", exampleTranslation: "Meyve tatlı." },
        { word: "Salad", meaning: "Salata", pronunciation: "SAL-ud", example: "I want a salad.", exampleTranslation: "Salata istiyorum." },
        { word: "Soup", meaning: "Çorba", pronunciation: "soop", example: "Hot soup is nice.", exampleTranslation: "Sıcak çorba güzel." },
        { word: "Pizza", meaning: "Pizza", pronunciation: "PEET-suh", example: "Pizza is delicious.", exampleTranslation: "Pizza lezzetli." },
        { word: "Pasta", meaning: "Makarna", pronunciation: "PAS-tuh", example: "I cook pasta.", exampleTranslation: "Makarna pişiririm." },
        { word: "Sandwich", meaning: "Sandviç", pronunciation: "SAND-wich", example: "I made a sandwich.", exampleTranslation: "Sandviç yaptım." }
    ]
};

// ===== UNIT 106: DRINKS =====
const unit106Vocab: EnglishUnitVocabulary = {
    unitId: 106, title: "Drinks",
    words: [
        { word: "Water", meaning: "Su", pronunciation: "WAW-ter", example: "I drink water.", exampleTranslation: "Su içerim." },
        { word: "Coffee", meaning: "Kahve", pronunciation: "KAW-fee", example: "I love coffee.", exampleTranslation: "Kahveyi severim." },
        { word: "Tea", meaning: "Çay", pronunciation: "tee", example: "Turkish tea is strong.", exampleTranslation: "Türk çayı güçlü." },
        { word: "Milk", meaning: "Süt", pronunciation: "milk", example: "Children drink milk.", exampleTranslation: "Çocuklar süt içer." },
        { word: "Juice", meaning: "Meyve suyu", pronunciation: "joos", example: "Orange juice is fresh.", exampleTranslation: "Portakal suyu taze." },
        { word: "Soda", meaning: "Gazlı içecek", pronunciation: "SOH-duh", example: "I don't drink soda.", exampleTranslation: "Gazlı içecek içmem." },
        { word: "Beer", meaning: "Bira", pronunciation: "beer", example: "Cold beer is nice.", exampleTranslation: "Soğuk bira güzel." },
        { word: "Wine", meaning: "Şarap", pronunciation: "wyn", example: "Red wine is popular.", exampleTranslation: "Kırmızı şarap popüler." },
        { word: "Lemonade", meaning: "Limonata", pronunciation: "lem-uh-NAYD", example: "Fresh lemonade is tasty.", exampleTranslation: "Taze limonata lezzetli." },
        { word: "Hot chocolate", meaning: "Sıcak çikolata", pronunciation: "hot CHOK-lit", example: "I want hot chocolate.", exampleTranslation: "Sıcak çikolata istiyorum." },
        { word: "Bottle", meaning: "Şişe", pronunciation: "BOT-ul", example: "A bottle of water.", exampleTranslation: "Bir şişe su." },
        { word: "Glass", meaning: "Bardak", pronunciation: "glas", example: "A glass of milk.", exampleTranslation: "Bir bardak süt." },
        { word: "Cup", meaning: "Fincan", pronunciation: "kup", example: "A cup of tea.", exampleTranslation: "Bir fincan çay." },
        { word: "Cold", meaning: "Soğuk", pronunciation: "kohld", example: "I want cold water.", exampleTranslation: "Soğuk su istiyorum." },
        { word: "Hot", meaning: "Sıcak", pronunciation: "hot", example: "The coffee is hot.", exampleTranslation: "Kahve sıcak." }
    ]
};

// ===== UNIT 107: DAYS & MONTHS =====
const unit107Vocab: EnglishUnitVocabulary = {
    unitId: 107, title: "Days & Months",
    words: [
        { word: "Monday", meaning: "Pazartesi", pronunciation: "MUN-day", example: "Monday is the first day.", exampleTranslation: "Pazartesi ilk gün." },
        { word: "Tuesday", meaning: "Salı", pronunciation: "TOOZ-day", example: "I have class on Tuesday.", exampleTranslation: "Salı günü dersim var." },
        { word: "Wednesday", meaning: "Çarşamba", pronunciation: "WENZ-day", example: "Wednesday is midweek.", exampleTranslation: "Çarşamba hafta ortası." },
        { word: "Thursday", meaning: "Perşembe", pronunciation: "THURZ-day", example: "Thursday is almost Friday.", exampleTranslation: "Perşembe neredeyse Cuma." },
        { word: "Friday", meaning: "Cuma", pronunciation: "FRY-day", example: "Friday is the weekend.", exampleTranslation: "Cuma hafta sonu." },
        { word: "Saturday", meaning: "Cumartesi", pronunciation: "SAT-er-day", example: "I rest on Saturday.", exampleTranslation: "Cumartesi dinlenirim." },
        { word: "Sunday", meaning: "Pazar", pronunciation: "SUN-day", example: "Sunday is family day.", exampleTranslation: "Pazar aile günü." },
        { word: "January", meaning: "Ocak", pronunciation: "JAN-yoo-er-ee", example: "January is cold.", exampleTranslation: "Ocak soğuk." },
        { word: "February", meaning: "Şubat", pronunciation: "FEB-roo-er-ee", example: "February is short.", exampleTranslation: "Şubat kısa." },
        { word: "March", meaning: "Mart", pronunciation: "march", example: "Spring starts in March.", exampleTranslation: "İlkbahar Mart'ta başlar." },
        { word: "April", meaning: "Nisan", pronunciation: "AY-pril", example: "April has rain.", exampleTranslation: "Nisan'da yağmur var." },
        { word: "May", meaning: "Mayıs", pronunciation: "may", example: "May is beautiful.", exampleTranslation: "Mayıs güzel." },
        { word: "Week", meaning: "Hafta", pronunciation: "week", example: "A week has seven days.", exampleTranslation: "Bir hafta yedi gün." },
        { word: "Month", meaning: "Ay", pronunciation: "munth", example: "One month is 30 days.", exampleTranslation: "Bir ay 30 gün." },
        { word: "Year", meaning: "Yıl", pronunciation: "yeer", example: "A year has 12 months.", exampleTranslation: "Bir yıl 12 ay." }
    ]
};

// ===== UNIT 108: NUMBERS 21-100 =====
const unit108Vocab: EnglishUnitVocabulary = {
    unitId: 108, title: "Numbers 21-100",
    words: [
        { word: "Twenty-one", meaning: "21", pronunciation: "TWEN-tee-wun", example: "He is twenty-one.", exampleTranslation: "O yirmi bir yaşında." },
        { word: "Thirty", meaning: "30", pronunciation: "THUR-tee", example: "Thirty minutes left.", exampleTranslation: "Otuz dakika kaldı." },
        { word: "Forty", meaning: "40", pronunciation: "FOR-tee", example: "Forty people came.", exampleTranslation: "Kırk kişi geldi." },
        { word: "Fifty", meaning: "50", pronunciation: "FIF-tee", example: "Fifty percent.", exampleTranslation: "Yüzde elli." },
        { word: "Sixty", meaning: "60", pronunciation: "SIK-stee", example: "Sixty seconds.", exampleTranslation: "Altmış saniye." },
        { word: "Seventy", meaning: "70", pronunciation: "SEV-en-tee", example: "Seventy kilometers.", exampleTranslation: "Yetmiş kilometre." },
        { word: "Eighty", meaning: "80", pronunciation: "AY-tee", example: "Eighty years old.", exampleTranslation: "Seksen yaşında." },
        { word: "Ninety", meaning: "90", pronunciation: "NYN-tee", example: "Ninety degrees.", exampleTranslation: "Doksan derece." },
        { word: "One hundred", meaning: "100", pronunciation: "wun HUN-dred", example: "One hundred points.", exampleTranslation: "Yüz puan." },
        { word: "First", meaning: "Birinci", pronunciation: "furst", example: "I am first.", exampleTranslation: "Ben birinciyim." },
        { word: "Second", meaning: "İkinci", pronunciation: "SEK-und", example: "Second place.", exampleTranslation: "İkinci sıra." },
        { word: "Third", meaning: "Üçüncü", pronunciation: "thurd", example: "Third floor.", exampleTranslation: "Üçüncü kat." },
        { word: "Half", meaning: "Yarım", pronunciation: "haf", example: "Half an hour.", exampleTranslation: "Yarım saat." },
        { word: "Double", meaning: "İki kat", pronunciation: "DUB-ul", example: "Double the amount.", exampleTranslation: "Miktarın iki katı." },
        { word: "Pair", meaning: "Çift", pronunciation: "pair", example: "A pair of shoes.", exampleTranslation: "Bir çift ayakkabı." }
    ]
};

// ===== UNIT 109: HOME & ROOMS =====
const unit109Vocab: EnglishUnitVocabulary = {
    unitId: 109, title: "Home & Rooms",
    words: [
        { word: "House", meaning: "Ev", pronunciation: "hows", example: "My house is big.", exampleTranslation: "Evim büyük." },
        { word: "Kitchen", meaning: "Mutfak", pronunciation: "KICH-en", example: "I cook in the kitchen.", exampleTranslation: "Mutfakta yemek yaparım." },
        { word: "Bedroom", meaning: "Yatak odası", pronunciation: "BED-room", example: "I sleep in my bedroom.", exampleTranslation: "Yatak odamda uyurum." },
        { word: "Bathroom", meaning: "Banyo", pronunciation: "BATH-room", example: "The bathroom is clean.", exampleTranslation: "Banyo temiz." },
        { word: "Living room", meaning: "Oturma odası", pronunciation: "LIV-ing room", example: "We watch TV in the living room.", exampleTranslation: "Oturma odasında TV izleriz." },
        { word: "Dining room", meaning: "Yemek odası", pronunciation: "DY-ning room", example: "We eat in the dining room.", exampleTranslation: "Yemek odasında yeriz." },
        { word: "Garden", meaning: "Bahçe", pronunciation: "GAR-den", example: "We have a nice garden.", exampleTranslation: "Güzel bir bahçemiz var." },
        { word: "Garage", meaning: "Garaj", pronunciation: "guh-RAZH", example: "The car is in the garage.", exampleTranslation: "Araba garajda." },
        { word: "Door", meaning: "Kapı", pronunciation: "dor", example: "Close the door.", exampleTranslation: "Kapıyı kapat." },
        { word: "Window", meaning: "Pencere", pronunciation: "WIN-doh", example: "Open the window.", exampleTranslation: "Pencereyi aç." },
        { word: "Floor", meaning: "Zemin/Kat", pronunciation: "flor", example: "Clean the floor.", exampleTranslation: "Zemini temizle." },
        { word: "Wall", meaning: "Duvar", pronunciation: "wawl", example: "The wall is white.", exampleTranslation: "Duvar beyaz." },
        { word: "Roof", meaning: "Çatı", pronunciation: "roof", example: "The roof is red.", exampleTranslation: "Çatı kırmızı." },
        { word: "Stairs", meaning: "Merdivenler", pronunciation: "stairz", example: "Go up the stairs.", exampleTranslation: "Merdivenlerden çık." },
        { word: "Apartment", meaning: "Daire", pronunciation: "uh-PART-ment", example: "I live in an apartment.", exampleTranslation: "Bir dairede yaşıyorum." }
    ]
};

// ===== UNIT 110: FURNITURE =====
const unit110Vocab: EnglishUnitVocabulary = {
    unitId: 110, title: "Furniture",
    words: [
        { word: "Table", meaning: "Masa", pronunciation: "TAY-bul", example: "The table is wooden.", exampleTranslation: "Masa ahşap." },
        { word: "Chair", meaning: "Sandalye", pronunciation: "chair", example: "Sit on the chair.", exampleTranslation: "Sandalyeye otur." },
        { word: "Sofa", meaning: "Koltuk", pronunciation: "SOH-fuh", example: "The sofa is comfortable.", exampleTranslation: "Koltuk rahat." },
        { word: "Bed", meaning: "Yatak", pronunciation: "bed", example: "My bed is soft.", exampleTranslation: "Yatağım yumuşak." },
        { word: "Desk", meaning: "Çalışma masası", pronunciation: "desk", example: "I study at my desk.", exampleTranslation: "Masamda çalışırım." },
        { word: "Lamp", meaning: "Lamba", pronunciation: "lamp", example: "Turn on the lamp.", exampleTranslation: "Lambayı aç." },
        { word: "TV", meaning: "Televizyon", pronunciation: "tee-vee", example: "Watch TV.", exampleTranslation: "TV izle." },
        { word: "Shelf", meaning: "Raf", pronunciation: "shelf", example: "Books on the shelf.", exampleTranslation: "Raftaki kitaplar." },
        { word: "Mirror", meaning: "Ayna", pronunciation: "MEER-er", example: "Look in the mirror.", exampleTranslation: "Aynaya bak." },
        { word: "Carpet", meaning: "Halı", pronunciation: "KAR-pet", example: "The carpet is soft.", exampleTranslation: "Halı yumuşak." },
        { word: "Curtain", meaning: "Perde", pronunciation: "KUR-tin", example: "Close the curtains.", exampleTranslation: "Perdeleri kapat." },
        { word: "Pillow", meaning: "Yastık", pronunciation: "PIL-oh", example: "I need a pillow.", exampleTranslation: "Bir yastığa ihtiyacım var." },
        { word: "Blanket", meaning: "Battaniye", pronunciation: "BLANK-et", example: "The blanket is warm.", exampleTranslation: "Battaniye sıcak." },
        { word: "Fridge", meaning: "Buzdolabı", pronunciation: "frij", example: "Food is in the fridge.", exampleTranslation: "Yiyecek buzdolabında." },
        { word: "Wardrobe", meaning: "Gardırop", pronunciation: "WOR-drohb", example: "Clothes in the wardrobe.", exampleTranslation: "Gardıroptaki kıyafetler." }
    ]
};

// Continue with more units...
// Units 111-130 will be added

// ===== UNIT 111: BODY PARTS =====
const unit111Vocab: EnglishUnitVocabulary = {
    unitId: 111, title: "Body Parts",
    words: [
        { word: "Head", meaning: "Baş", pronunciation: "hed", example: "My head hurts.", exampleTranslation: "Başım ağrıyor." },
        { word: "Eye", meaning: "Göz", pronunciation: "ai", example: "Blue eyes.", exampleTranslation: "Mavi gözler." },
        { word: "Ear", meaning: "Kulak", pronunciation: "eer", example: "I can hear with my ears.", exampleTranslation: "Kulaklarımla duyabilirim." },
        { word: "Nose", meaning: "Burun", pronunciation: "nohz", example: "My nose is cold.", exampleTranslation: "Burnum soğuk." },
        { word: "Mouth", meaning: "Ağız", pronunciation: "mowth", example: "Open your mouth!", exampleTranslation: "Ağzını aç!" },
        { word: "Hand", meaning: "El", pronunciation: "hand", example: "Wash your hands.", exampleTranslation: "Ellerini yıka." },
        { word: "Arm", meaning: "Kol", pronunciation: "arm", example: "Raise your arm.", exampleTranslation: "Kolunu kaldır." },
        { word: "Leg", meaning: "Bacak", pronunciation: "leg", example: "My legs are tired.", exampleTranslation: "Bacaklarım yorgun." },
        { word: "Foot", meaning: "Ayak", pronunciation: "foot", example: "My foot hurts.", exampleTranslation: "Ayağım ağrıyor." },
        { word: "Finger", meaning: "Parmak", pronunciation: "FING-ger", example: "Five fingers.", exampleTranslation: "Beş parmak." },
        { word: "Hair", meaning: "Saç", pronunciation: "hair", example: "Long hair.", exampleTranslation: "Uzun saç." },
        { word: "Face", meaning: "Yüz", pronunciation: "fays", example: "Wash your face.", exampleTranslation: "Yüzünü yıka." },
        { word: "Back", meaning: "Sırt", pronunciation: "bak", example: "My back is sore.", exampleTranslation: "Sırtım ağrıyor." },
        { word: "Stomach", meaning: "Mide/Karın", pronunciation: "STUM-uk", example: "My stomach hurts.", exampleTranslation: "Midem ağrıyor." },
        { word: "Heart", meaning: "Kalp", pronunciation: "hart", example: "My heart beats fast.", exampleTranslation: "Kalbim hızlı atıyor." }
    ]
};

// ===== UNIT 112: CLOTHES =====
const unit112Vocab: EnglishUnitVocabulary = {
    unitId: 112, title: "Clothes",
    words: [
        { word: "Shirt", meaning: "Gömlek", pronunciation: "shurt", example: "A white shirt.", exampleTranslation: "Beyaz gömlek." },
        { word: "Pants", meaning: "Pantolon", pronunciation: "pants", example: "Blue pants.", exampleTranslation: "Mavi pantolon." },
        { word: "Dress", meaning: "Elbise", pronunciation: "dres", example: "A red dress.", exampleTranslation: "Kırmızı elbise." },
        { word: "Shoes", meaning: "Ayakkabılar", pronunciation: "shooz", example: "New shoes.", exampleTranslation: "Yeni ayakkabılar." },
        { word: "Jacket", meaning: "Ceket", pronunciation: "JAK-et", example: "Leather jacket.", exampleTranslation: "Deri ceket." },
        { word: "Coat", meaning: "Palto", pronunciation: "koht", example: "Winter coat.", exampleTranslation: "Kış paltosu." },
        { word: "T-shirt", meaning: "Tişört", pronunciation: "TEE-shurt", example: "Cotton T-shirt.", exampleTranslation: "Pamuklu tişört." },
        { word: "Jeans", meaning: "Kot pantolon", pronunciation: "jeenz", example: "I love jeans.", exampleTranslation: "Kot pantolonu severim." },
        { word: "Skirt", meaning: "Etek", pronunciation: "skurt", example: "Short skirt.", exampleTranslation: "Kısa etek." },
        { word: "Socks", meaning: "Çoraplar", pronunciation: "soks", example: "White socks.", exampleTranslation: "Beyaz çoraplar." },
        { word: "Hat", meaning: "Şapka", pronunciation: "hat", example: "A nice hat.", exampleTranslation: "Güzel bir şapka." },
        { word: "Scarf", meaning: "Atkı", pronunciation: "skarf", example: "Wool scarf.", exampleTranslation: "Yün atkı." },
        { word: "Gloves", meaning: "Eldivenler", pronunciation: "gluvz", example: "Leather gloves.", exampleTranslation: "Deri eldivenler." },
        { word: "Sweater", meaning: "Kazak", pronunciation: "SWET-er", example: "Warm sweater.", exampleTranslation: "Sıcak kazak." },
        { word: "Suit", meaning: "Takım elbise", pronunciation: "soot", example: "Business suit.", exampleTranslation: "İş takımı." }
    ]
};

// ===== UNIT 113: ANIMALS =====
const unit113Vocab: EnglishUnitVocabulary = {
    unitId: 113, title: "Animals",
    words: [
        { word: "Dog", meaning: "Köpek", pronunciation: "dawg", example: "I have a dog.", exampleTranslation: "Bir köpeğim var." },
        { word: "Cat", meaning: "Kedi", pronunciation: "kat", example: "The cat is sleeping.", exampleTranslation: "Kedi uyuyor." },
        { word: "Bird", meaning: "Kuş", pronunciation: "burd", example: "A bird is singing.", exampleTranslation: "Bir kuş ötüyor." },
        { word: "Fish", meaning: "Balık", pronunciation: "fish", example: "Fish in the sea.", exampleTranslation: "Denizdeki balıklar." },
        { word: "Horse", meaning: "At", pronunciation: "hors", example: "A beautiful horse.", exampleTranslation: "Güzel bir at." },
        { word: "Cow", meaning: "İnek", pronunciation: "kow", example: "Cows give milk.", exampleTranslation: "İnekler süt verir." },
        { word: "Lion", meaning: "Aslan", pronunciation: "LY-un", example: "The lion is strong.", exampleTranslation: "Aslan güçlü." },
        { word: "Elephant", meaning: "Fil", pronunciation: "EL-uh-funt", example: "Elephants are big.", exampleTranslation: "Filler büyük." },
        { word: "Monkey", meaning: "Maymun", pronunciation: "MUNG-kee", example: "Monkeys climb trees.", exampleTranslation: "Maymunlar ağaca tırmanır." },
        { word: "Rabbit", meaning: "Tavşan", pronunciation: "RAB-it", example: "A white rabbit.", exampleTranslation: "Beyaz bir tavşan." },
        { word: "Bear", meaning: "Ayı", pronunciation: "bair", example: "Bears like honey.", exampleTranslation: "Ayılar bal sever." },
        { word: "Snake", meaning: "Yılan", pronunciation: "snayk", example: "Snakes are scary.", exampleTranslation: "Yılanlar korkutucu." },
        { word: "Chicken", meaning: "Tavuk", pronunciation: "CHIK-en", example: "Chickens lay eggs.", exampleTranslation: "Tavuklar yumurta yapar." },
        { word: "Duck", meaning: "Ördek", pronunciation: "duk", example: "Ducks swim.", exampleTranslation: "Ördekler yüzer." },
        { word: "Pet", meaning: "Evcil hayvan", pronunciation: "pet", example: "I love my pet.", exampleTranslation: "Evcil hayvanımı seviyorum." }
    ]
};

// Placeholder for remaining units (114-130)
// These would follow the same pattern

// ===== UNIT 114: JOBS 1 =====
const unit114Vocab: EnglishUnitVocabulary = {
    unitId: 114, title: "Jobs 1",
    words: [
        { word: "Doctor", meaning: "Doktor", pronunciation: "DOK-ter", example: "The doctor helps people.", exampleTranslation: "Doktor insanlara yardım eder." },
        { word: "Teacher", meaning: "Öğretmen", pronunciation: "TEE-cher", example: "My teacher is kind.", exampleTranslation: "Öğretmenim nazik." },
        { word: "Nurse", meaning: "Hemşire", pronunciation: "nurs", example: "The nurse is helpful.", exampleTranslation: "Hemşire yardımsever." },
        { word: "Police officer", meaning: "Polis", pronunciation: "poh-LEES", example: "Police officers protect us.", exampleTranslation: "Polisler bizi korur." },
        { word: "Firefighter", meaning: "İtfaiyeci", pronunciation: "FYR-fy-ter", example: "Firefighters are brave.", exampleTranslation: "İtfaiyeciler cesur." },
        { word: "Chef", meaning: "Şef", pronunciation: "shef", example: "The chef cooks well.", exampleTranslation: "Şef iyi yemek yapar." },
        { word: "Engineer", meaning: "Mühendis", pronunciation: "en-jih-NEER", example: "My father is an engineer.", exampleTranslation: "Babam mühendis." },
        { word: "Lawyer", meaning: "Avukat", pronunciation: "LOY-er", example: "The lawyer works hard.", exampleTranslation: "Avukat çok çalışır." },
        { word: "Driver", meaning: "Şoför", pronunciation: "DRY-ver", example: "The bus driver.", exampleTranslation: "Otobüs şoförü." },
        { word: "Waiter", meaning: "Garson", pronunciation: "WAY-ter", example: "The waiter brings food.", exampleTranslation: "Garson yemek getirir." },
        { word: "Student", meaning: "Öğrenci", pronunciation: "STOO-dent", example: "I am a student.", exampleTranslation: "Ben öğrenciyim." },
        { word: "Office worker", meaning: "Ofis çalışanı", pronunciation: "OF-is WUR-ker", example: "Office workers use computers.", exampleTranslation: "Ofis çalışanları bilgisayar kullanır." },
        { word: "Farmer", meaning: "Çiftçi", pronunciation: "FAR-mer", example: "Farmers grow food.", exampleTranslation: "Çiftçiler yiyecek yetiştirir." },
        { word: "Artist", meaning: "Sanatçı", pronunciation: "AR-tist", example: "The artist paints.", exampleTranslation: "Sanatçı resim yapar." },
        { word: "Job", meaning: "İş", pronunciation: "job", example: "I need a job.", exampleTranslation: "Bir işe ihtiyacım var." }
    ]
};

// ===== UNIT 115: PLACES IN THE CITY =====
const unit115Vocab: EnglishUnitVocabulary = {
    unitId: 115, title: "Places in the City",
    words: [
        { word: "School", meaning: "Okul", pronunciation: "skool", example: "I go to school.", exampleTranslation: "Okula giderim." },
        { word: "Hospital", meaning: "Hastane", pronunciation: "HOS-pi-tul", example: "The hospital is near.", exampleTranslation: "Hastane yakın." },
        { word: "Bank", meaning: "Banka", pronunciation: "bank", example: "I go to the bank.", exampleTranslation: "Bankaya giderim." },
        { word: "Restaurant", meaning: "Restoran", pronunciation: "RES-tuh-ront", example: "We eat at a restaurant.", exampleTranslation: "Restoranda yeriz." },
        { word: "Supermarket", meaning: "Süpermarket", pronunciation: "SOO-per-mar-ket", example: "Buy food at the supermarket.", exampleTranslation: "Süpermarketten yiyecek al." },
        { word: "Park", meaning: "Park", pronunciation: "park", example: "Children play in the park.", exampleTranslation: "Çocuklar parkta oynar." },
        { word: "Library", meaning: "Kütüphane", pronunciation: "LY-brer-ee", example: "I study in the library.", exampleTranslation: "Kütüphanede çalışırım." },
        { word: "Cinema", meaning: "Sinema", pronunciation: "SIN-uh-muh", example: "Let's go to the cinema.", exampleTranslation: "Sinemaya gidelim." },
        { word: "Station", meaning: "İstasyon", pronunciation: "STAY-shun", example: "The train station.", exampleTranslation: "Tren istasyonu." },
        { word: "Airport", meaning: "Havalimanı", pronunciation: "AIR-port", example: "We go to the airport.", exampleTranslation: "Havalimanına gideriz." },
        { word: "Shop", meaning: "Dükkan", pronunciation: "shop", example: "A clothing shop.", exampleTranslation: "Giyim dükkânı." },
        { word: "Market", meaning: "Pazar", pronunciation: "MAR-ket", example: "Buy vegetables at the market.", exampleTranslation: "Pazardan sebze al." },
        { word: "Church", meaning: "Kilise", pronunciation: "church", example: "An old church.", exampleTranslation: "Eski bir kilise." },
        { word: "Mosque", meaning: "Cami", pronunciation: "mosk", example: "A beautiful mosque.", exampleTranslation: "Güzel bir cami." },
        { word: "Street", meaning: "Sokak", pronunciation: "street", example: "Walk on the street.", exampleTranslation: "Sokakta yürü." }
    ]
};

// ===== UNIT 116: TRANSPORTATION =====
const unit116Vocab: EnglishUnitVocabulary = {
    unitId: 116, title: "Transportation",
    words: [
        { word: "Car", meaning: "Araba", pronunciation: "kar", example: "I drive a car.", exampleTranslation: "Araba kullanırım." },
        { word: "Bus", meaning: "Otobüs", pronunciation: "bus", example: "Take the bus.", exampleTranslation: "Otobüse bin." },
        { word: "Train", meaning: "Tren", pronunciation: "trayn", example: "The train is fast.", exampleTranslation: "Tren hızlı." },
        { word: "Plane", meaning: "Uçak", pronunciation: "playn", example: "I fly by plane.", exampleTranslation: "Uçakla uçarım." },
        { word: "Bicycle", meaning: "Bisiklet", pronunciation: "BY-si-kul", example: "I ride a bicycle.", exampleTranslation: "Bisiklet sürerim." },
        { word: "Motorcycle", meaning: "Motosiklet", pronunciation: "MOH-ter-sy-kul", example: "He has a motorcycle.", exampleTranslation: "Onun motosikleti var." },
        { word: "Taxi", meaning: "Taksi", pronunciation: "TAK-see", example: "Call a taxi.", exampleTranslation: "Bir taksi çağır." },
        { word: "Subway", meaning: "Metro", pronunciation: "SUB-way", example: "Take the subway.", exampleTranslation: "Metroya bin." },
        { word: "Ship", meaning: "Gemi", pronunciation: "ship", example: "Travel by ship.", exampleTranslation: "Gemiyle seyahat et." },
        { word: "Boat", meaning: "Tekne", pronunciation: "boht", example: "A small boat.", exampleTranslation: "Küçük bir tekne." },
        { word: "Ticket", meaning: "Bilet", pronunciation: "TIK-et", example: "Buy a ticket.", exampleTranslation: "Bilet al." },
        { word: "Driver", meaning: "Sürücü", pronunciation: "DRY-ver", example: "The driver is careful.", exampleTranslation: "Sürücü dikkatli." },
        { word: "Traffic", meaning: "Trafik", pronunciation: "TRAF-ik", example: "There is traffic.", exampleTranslation: "Trafik var." },
        { word: "Road", meaning: "Yol", pronunciation: "rohd", example: "The road is long.", exampleTranslation: "Yol uzun." },
        { word: "Stop", meaning: "Durak", pronunciation: "stop", example: "Bus stop.", exampleTranslation: "Otobüs durağı." }
    ]
};

// ===== UNIT 117: DAILY ROUTINES =====
const unit117Vocab: EnglishUnitVocabulary = {
    unitId: 117, title: "Daily Routines",
    words: [
        { word: "Wake up", meaning: "Uyanmak", pronunciation: "wayk up", example: "I wake up at 7.", exampleTranslation: "7'de uyanırım." },
        { word: "Sleep", meaning: "Uyumak", pronunciation: "sleep", example: "I sleep well.", exampleTranslation: "İyi uyurum." },
        { word: "Eat", meaning: "Yemek", pronunciation: "eet", example: "I eat breakfast.", exampleTranslation: "Kahvaltı yerim." },
        { word: "Drink", meaning: "İçmek", pronunciation: "drink", example: "I drink coffee.", exampleTranslation: "Kahve içerim." },
        { word: "Work", meaning: "Çalışmak", pronunciation: "wurk", example: "I work every day.", exampleTranslation: "Her gün çalışırım." },
        { word: "Study", meaning: "Ders çalışmak", pronunciation: "STUD-ee", example: "I study English.", exampleTranslation: "İngilizce çalışırım." },
        { word: "Cook", meaning: "Yemek pişirmek", pronunciation: "kook", example: "I cook dinner.", exampleTranslation: "Akşam yemeği pişiririm." },
        { word: "Clean", meaning: "Temizlemek", pronunciation: "kleen", example: "Clean the room.", exampleTranslation: "Odayı temizle." },
        { word: "Shower", meaning: "Duş almak", pronunciation: "SHOW-er", example: "I take a shower.", exampleTranslation: "Duş alırım." },
        { word: "Brush teeth", meaning: "Diş fırçalamak", pronunciation: "brush teeth", example: "Brush your teeth.", exampleTranslation: "Dişlerini fırçala." },
        { word: "Get dressed", meaning: "Giyinmek", pronunciation: "get drest", example: "I get dressed.", exampleTranslation: "Giyinirim." },
        { word: "Go to bed", meaning: "Yatmak", pronunciation: "goh too bed", example: "I go to bed at 11.", exampleTranslation: "11'de yatarım." },
        { word: "Walk", meaning: "Yürümek", pronunciation: "wawk", example: "I walk to work.", exampleTranslation: "İşe yürürüm." },
        { word: "Run", meaning: "Koşmak", pronunciation: "run", example: "I run in the morning.", exampleTranslation: "Sabahları koşarım." },
        { word: "Read", meaning: "Okumak", pronunciation: "reed", example: "I read books.", exampleTranslation: "Kitap okurum." }
    ]
};

// ===== UNIT 118: TELLING TIME =====
const unit118Vocab: EnglishUnitVocabulary = {
    unitId: 118, title: "Telling Time",
    words: [
        { word: "O'clock", meaning: "Tam saat", pronunciation: "oh-KLOK", example: "It's 3 o'clock.", exampleTranslation: "Saat 3." },
        { word: "Half past", meaning: "Buçuk", pronunciation: "haf past", example: "Half past two.", exampleTranslation: "İki buçuk." },
        { word: "Quarter past", meaning: "Çeyrek geçe", pronunciation: "KWOR-ter past", example: "Quarter past five.", exampleTranslation: "Beşi çeyrek geçe." },
        { word: "Quarter to", meaning: "Çeyrek kala", pronunciation: "KWOR-ter too", example: "Quarter to six.", exampleTranslation: "Altıya çeyrek kala." },
        { word: "Minute", meaning: "Dakika", pronunciation: "MIN-it", example: "Five minutes.", exampleTranslation: "Beş dakika." },
        { word: "Hour", meaning: "Saat", pronunciation: "OW-er", example: "One hour.", exampleTranslation: "Bir saat." },
        { word: "Second", meaning: "Saniye", pronunciation: "SEK-und", example: "Wait a second.", exampleTranslation: "Bir saniye bekle." },
        { word: "Morning", meaning: "Sabah", pronunciation: "MOR-ning", example: "In the morning.", exampleTranslation: "Sabahleyin." },
        { word: "Afternoon", meaning: "Öğleden sonra", pronunciation: "af-ter-NOON", example: "In the afternoon.", exampleTranslation: "Öğleden sonra." },
        { word: "Evening", meaning: "Akşam", pronunciation: "EE-vning", example: "In the evening.", exampleTranslation: "Akşamleyin." },
        { word: "Night", meaning: "Gece", pronunciation: "nyt", example: "At night.", exampleTranslation: "Gece." },
        { word: "Today", meaning: "Bugün", pronunciation: "too-DAY", example: "Today is Monday.", exampleTranslation: "Bugün Pazartesi." },
        { word: "Tomorrow", meaning: "Yarın", pronunciation: "too-MOR-oh", example: "See you tomorrow.", exampleTranslation: "Yarın görüşürüz." },
        { word: "Yesterday", meaning: "Dün", pronunciation: "YES-ter-day", example: "Yesterday was Sunday.", exampleTranslation: "Dün Pazardı." },
        { word: "Now", meaning: "Şimdi", pronunciation: "now", example: "I am here now.", exampleTranslation: "Şimdi buradayım." }
    ]
};

// ===== UNIT 119: WEATHER =====
const unit119Vocab: EnglishUnitVocabulary = {
    unitId: 119, title: "Weather",
    words: [
        { word: "Sunny", meaning: "Güneşli", pronunciation: "SUN-ee", example: "It's sunny today.", exampleTranslation: "Bugün güneşli." },
        { word: "Rainy", meaning: "Yağmurlu", pronunciation: "RAY-nee", example: "It's rainy.", exampleTranslation: "Yağmurlu." },
        { word: "Cloudy", meaning: "Bulutlu", pronunciation: "KLOW-dee", example: "A cloudy day.", exampleTranslation: "Bulutlu bir gün." },
        { word: "Windy", meaning: "Rüzgarlı", pronunciation: "WIN-dee", example: "It's windy outside.", exampleTranslation: "Dışarısı rüzgarlı." },
        { word: "Snowy", meaning: "Karlı", pronunciation: "SNOH-ee", example: "Snowy winter.", exampleTranslation: "Karlı kış." },
        { word: "Hot", meaning: "Sıcak", pronunciation: "hot", example: "It's very hot.", exampleTranslation: "Çok sıcak." },
        { word: "Cold", meaning: "Soğuk", pronunciation: "kohld", example: "It's cold today.", exampleTranslation: "Bugün soğuk." },
        { word: "Warm", meaning: "Ilık", pronunciation: "worm", example: "A warm day.", exampleTranslation: "Ilık bir gün." },
        { word: "Cool", meaning: "Serin", pronunciation: "kool", example: "Cool weather.", exampleTranslation: "Serin hava." },
        { word: "Rain", meaning: "Yağmur", pronunciation: "rayn", example: "It's going to rain.", exampleTranslation: "Yağmur yağacak." },
        { word: "Snow", meaning: "Kar", pronunciation: "snoh", example: "Snow is falling.", exampleTranslation: "Kar yağıyor." },
        { word: "Sun", meaning: "Güneş", pronunciation: "sun", example: "The sun is bright.", exampleTranslation: "Güneş parlak." },
        { word: "Cloud", meaning: "Bulut", pronunciation: "klowd", example: "Dark clouds.", exampleTranslation: "Koyu bulutlar." },
        { word: "Weather", meaning: "Hava durumu", pronunciation: "WE-ther", example: "What's the weather?", exampleTranslation: "Hava nasıl?" },
        { word: "Temperature", meaning: "Sıcaklık", pronunciation: "TEM-per-a-chur", example: "High temperature.", exampleTranslation: "Yüksek sıcaklık." }
    ]
};

// ===== UNIT 120: HOBBIES =====
const unit120Vocab: EnglishUnitVocabulary = {
    unitId: 120, title: "Hobbies",
    words: [
        { word: "Hobby", meaning: "Hobi", pronunciation: "HOB-ee", example: "What's your hobby?", exampleTranslation: "Hobin ne?" },
        { word: "Sports", meaning: "Spor", pronunciation: "sports", example: "I like sports.", exampleTranslation: "Sporu severim." },
        { word: "Music", meaning: "Müzik", pronunciation: "MYOO-zik", example: "I love music.", exampleTranslation: "Müziği severim." },
        { word: "Reading", meaning: "Okuma", pronunciation: "REE-ding", example: "Reading is fun.", exampleTranslation: "Okumak eğlenceli." },
        { word: "Dancing", meaning: "Dans", pronunciation: "DAN-sing", example: "I enjoy dancing.", exampleTranslation: "Dans etmeyi severim." },
        { word: "Swimming", meaning: "Yüzme", pronunciation: "SWIM-ing", example: "I go swimming.", exampleTranslation: "Yüzmeye giderim." },
        { word: "Cooking", meaning: "Yemek yapma", pronunciation: "KOOK-ing", example: "I love cooking.", exampleTranslation: "Yemek yapmayı severim." },
        { word: "Gaming", meaning: "Oyun oynama", pronunciation: "GAY-ming", example: "Gaming is popular.", exampleTranslation: "Oyun oynamak popüler." },
        { word: "Photography", meaning: "Fotoğrafçılık", pronunciation: "foh-TOG-ra-fee", example: "I like photography.", exampleTranslation: "Fotoğrafçılığı severim." },
        { word: "Painting", meaning: "Resim yapma", pronunciation: "PAIN-ting", example: "She loves painting.", exampleTranslation: "Resim yapmayı seviyor." },
        { word: "Travel", meaning: "Seyahat", pronunciation: "TRAV-ul", example: "I like to travel.", exampleTranslation: "Seyahat etmeyi severim." },
        { word: "Exercise", meaning: "Egzersiz", pronunciation: "EK-ser-syz", example: "I exercise daily.", exampleTranslation: "Her gün egzersiz yaparım." },
        { word: "Watch", meaning: "İzlemek", pronunciation: "woch", example: "I watch movies.", exampleTranslation: "Film izlerim." },
        { word: "Play", meaning: "Oynamak", pronunciation: "play", example: "Play a game.", exampleTranslation: "Oyun oyna." },
        { word: "Listen", meaning: "Dinlemek", pronunciation: "LIS-en", example: "Listen to music.", exampleTranslation: "Müzik dinle." }
    ]
};

// ===== UNIT 121: FEELINGS & EMOTIONS =====
const unit121Vocab: EnglishUnitVocabulary = {
    unitId: 121, title: "Feelings",
    words: [
        { word: "Happy", meaning: "Mutlu", pronunciation: "HAP-ee", example: "I am happy.", exampleTranslation: "Mutluyum." },
        { word: "Sad", meaning: "Üzgün", pronunciation: "sad", example: "She is sad.", exampleTranslation: "O üzgün." },
        { word: "Angry", meaning: "Kızgın", pronunciation: "ANG-gree", example: "Don't be angry.", exampleTranslation: "Kızma." },
        { word: "Tired", meaning: "Yorgun", pronunciation: "TY-erd", example: "I am tired.", exampleTranslation: "Yorgunum." },
        { word: "Hungry", meaning: "Aç", pronunciation: "HUNG-gree", example: "I am hungry.", exampleTranslation: "Açım." },
        { word: "Thirsty", meaning: "Susamış", pronunciation: "THUR-stee", example: "I am thirsty.", exampleTranslation: "Susadım." },
        { word: "Scared", meaning: "Korkmuş", pronunciation: "skerd", example: "The child is scared.", exampleTranslation: "Çocuk korkmuş." },
        { word: "Excited", meaning: "Heyecanlı", pronunciation: "ek-SY-ted", example: "I am excited!", exampleTranslation: "Heyecanlıyım!" },
        { word: "Bored", meaning: "Sıkılmış", pronunciation: "bord", example: "I am bored.", exampleTranslation: "Sıkıldım." },
        { word: "Surprised", meaning: "Şaşırmış", pronunciation: "ser-PRYZD", example: "He was surprised.", exampleTranslation: "Şaşırdı." },
        { word: "Nervous", meaning: "Gergin", pronunciation: "NUR-vus", example: "I feel nervous.", exampleTranslation: "Gerginim." },
        { word: "Calm", meaning: "Sakin", pronunciation: "kahm", example: "Stay calm.", exampleTranslation: "Sakin ol." },
        { word: "Love", meaning: "Aşk/Sevgi", pronunciation: "luv", example: "I love you.", exampleTranslation: "Seni seviyorum." },
        { word: "Hate", meaning: "Nefret", pronunciation: "hayt", example: "I hate lies.", exampleTranslation: "Yalanlardan nefret ederim." },
        { word: "Feel", meaning: "Hissetmek", pronunciation: "feel", example: "How do you feel?", exampleTranslation: "Nasıl hissediyorsun?" }
    ]
};

// ===== UNIT 122: SCHOOL & CLASSROOM =====
const unit122Vocab: EnglishUnitVocabulary = {
    unitId: 122, title: "School",
    words: [
        { word: "Book", meaning: "Kitap", pronunciation: "book", example: "Read the book.", exampleTranslation: "Kitabı oku." },
        { word: "Pen", meaning: "Kalem", pronunciation: "pen", example: "Write with a pen.", exampleTranslation: "Kalemle yaz." },
        { word: "Pencil", meaning: "Kurşunkalem", pronunciation: "PEN-sul", example: "Use a pencil.", exampleTranslation: "Kurşunkalem kullan." },
        { word: "Notebook", meaning: "Defter", pronunciation: "NOHT-book", example: "Write in your notebook.", exampleTranslation: "Defterine yaz." },
        { word: "Classroom", meaning: "Sınıf", pronunciation: "KLAS-room", example: "Enter the classroom.", exampleTranslation: "Sınıfa gir." },
        { word: "Blackboard", meaning: "Kara tahta", pronunciation: "BLAK-bord", example: "Look at the blackboard.", exampleTranslation: "Tahtaya bak." },
        { word: "Homework", meaning: "Ödev", pronunciation: "HOHM-wurk", example: "Do your homework.", exampleTranslation: "Ödevini yap." },
        { word: "Exam", meaning: "Sınav", pronunciation: "ig-ZAM", example: "We have an exam.", exampleTranslation: "Sınavımız var." },
        { word: "Lesson", meaning: "Ders", pronunciation: "LES-un", example: "The lesson is over.", exampleTranslation: "Ders bitti." },
        { word: "Learn", meaning: "Öğrenmek", pronunciation: "lurn", example: "I learn fast.", exampleTranslation: "Hızlı öğrenirim." },
        { word: "Teach", meaning: "Öğretmek", pronunciation: "teech", example: "She teaches well.", exampleTranslation: "İyi öğretir." },
        { word: "Question", meaning: "Soru", pronunciation: "KWES-chun", example: "Ask a question.", exampleTranslation: "Soru sor." },
        { word: "Answer", meaning: "Cevap", pronunciation: "AN-ser", example: "Give an answer.", exampleTranslation: "Cevap ver." },
        { word: "Paper", meaning: "Kağıt", pronunciation: "PAY-per", example: "A piece of paper.", exampleTranslation: "Bir parça kağıt." },
        { word: "Eraser", meaning: "Silgi", pronunciation: "i-RAY-zer", example: "Use the eraser.", exampleTranslation: "Silgiyi kullan." }
    ]
};

// ===== UNIT 123: HOLIDAYS & CELEBRATIONS =====
const unit123Vocab: EnglishUnitVocabulary = {
    unitId: 123, title: "Holidays",
    words: [
        { word: "Birthday", meaning: "Doğum günü", pronunciation: "BURTH-day", example: "Happy birthday!", exampleTranslation: "Doğum günün kutlu olsun!" },
        { word: "Christmas", meaning: "Noel", pronunciation: "KRIS-mus", example: "Merry Christmas!", exampleTranslation: "Mutlu Noeller!" },
        { word: "New Year", meaning: "Yeni Yıl", pronunciation: "noo yeer", example: "Happy New Year!", exampleTranslation: "Mutlu Yıllar!" },
        { word: "Holiday", meaning: "Tatil", pronunciation: "HOL-i-day", example: "Summer holiday.", exampleTranslation: "Yaz tatili." },
        { word: "Party", meaning: "Parti", pronunciation: "PAR-tee", example: "Birthday party.", exampleTranslation: "Doğum günü partisi." },
        { word: "Gift", meaning: "Hediye", pronunciation: "gift", example: "A nice gift.", exampleTranslation: "Güzel bir hediye." },
        { word: "Present", meaning: "Hediye", pronunciation: "PREZ-ent", example: "Open your present.", exampleTranslation: "Hediyeni aç." },
        { word: "Celebrate", meaning: "Kutlamak", pronunciation: "SEL-uh-brayt", example: "We celebrate together.", exampleTranslation: "Birlikte kutlarız." },
        { word: "Cake", meaning: "Pasta", pronunciation: "kayk", example: "Birthday cake.", exampleTranslation: "Doğum günü pastası." },
        { word: "Candle", meaning: "Mum", pronunciation: "KAN-dul", example: "Blow out the candles.", exampleTranslation: "Mumları üfle." },
        { word: "Decoration", meaning: "Süsleme", pronunciation: "dek-oh-RAY-shun", example: "Party decorations.", exampleTranslation: "Parti süslemeleri." },
        { word: "Invitation", meaning: "Davetiye", pronunciation: "in-vi-TAY-shun", example: "Send an invitation.", exampleTranslation: "Davetiye gönder." },
        { word: "Guest", meaning: "Misafir", pronunciation: "gest", example: "Welcome our guests.", exampleTranslation: "Misafirleri karşıla." },
        { word: "Wish", meaning: "Dilek", pronunciation: "wish", example: "Make a wish.", exampleTranslation: "Bir dilek tut." },
        { word: "Festival", meaning: "Festival", pronunciation: "FES-ti-vul", example: "Music festival.", exampleTranslation: "Müzik festivali." }
    ]
};

// ===== UNIT 124: COUNTRIES & NATIONALITIES =====
const unit124Vocab: EnglishUnitVocabulary = {
    unitId: 124, title: "Countries",
    words: [
        { word: "Country", meaning: "Ülke", pronunciation: "KUN-tree", example: "Which country?", exampleTranslation: "Hangi ülke?" },
        { word: "Turkey", meaning: "Türkiye", pronunciation: "TUR-key", example: "I'm from Turkey.", exampleTranslation: "Türkiye'denim." },
        { word: "England", meaning: "İngiltere", pronunciation: "ING-lund", example: "England is in Europe.", exampleTranslation: "İngiltere Avrupa'da." },
        { word: "America", meaning: "Amerika", pronunciation: "uh-MER-i-kuh", example: "I visited America.", exampleTranslation: "Amerika'yı ziyaret ettim." },
        { word: "Germany", meaning: "Almanya", pronunciation: "JUR-muh-nee", example: "Germany is beautiful.", exampleTranslation: "Almanya güzel." },
        { word: "France", meaning: "Fransa", pronunciation: "frans", example: "Paris is in France.", exampleTranslation: "Paris Fransa'da." },
        { word: "Turkish", meaning: "Türk", pronunciation: "TUR-kish", example: "I am Turkish.", exampleTranslation: "Ben Türküm." },
        { word: "English", meaning: "İngiliz", pronunciation: "ING-lish", example: "He is English.", exampleTranslation: "O İngiliz." },
        { word: "American", meaning: "Amerikalı", pronunciation: "uh-MER-i-kun", example: "She is American.", exampleTranslation: "O Amerikalı." },
        { word: "Language", meaning: "Dil", pronunciation: "LANG-gwij", example: "What language?", exampleTranslation: "Hangi dil?" },
        { word: "City", meaning: "Şehir", pronunciation: "SIT-ee", example: "A big city.", exampleTranslation: "Büyük bir şehir." },
        { word: "Capital", meaning: "Başkent", pronunciation: "KAP-i-tul", example: "The capital city.", exampleTranslation: "Başkent." },
        { word: "Flag", meaning: "Bayrak", pronunciation: "flag", example: "The Turkish flag.", exampleTranslation: "Türk bayrağı." },
        { word: "World", meaning: "Dünya", pronunciation: "wurld", example: "Around the world.", exampleTranslation: "Dünya çapında." },
        { word: "Foreign", meaning: "Yabancı", pronunciation: "FOR-in", example: "Foreign language.", exampleTranslation: "Yabancı dil." }
    ]
};

// ===== UNIT 125: BASIC VERBS =====
const unit125Vocab: EnglishUnitVocabulary = {
    unitId: 125, title: "Basic Verbs",
    words: [
        { word: "Go", meaning: "Gitmek", pronunciation: "goh", example: "I go to school.", exampleTranslation: "Okula giderim." },
        { word: "Come", meaning: "Gelmek", pronunciation: "kum", example: "Come here.", exampleTranslation: "Buraya gel." },
        { word: "Do", meaning: "Yapmak", pronunciation: "doo", example: "What do you do?", exampleTranslation: "Ne yaparsın?" },
        { word: "Make", meaning: "Yapmak", pronunciation: "mayk", example: "Make a cake.", exampleTranslation: "Bir pasta yap." },
        { word: "Take", meaning: "Almak", pronunciation: "tayk", example: "Take this.", exampleTranslation: "Bunu al." },
        { word: "Give", meaning: "Vermek", pronunciation: "giv", example: "Give me a book.", exampleTranslation: "Bana bir kitap ver." },
        { word: "Say", meaning: "Söylemek", pronunciation: "say", example: "Say something.", exampleTranslation: "Bir şey söyle." },
        { word: "Know", meaning: "Bilmek", pronunciation: "noh", example: "I know.", exampleTranslation: "Biliyorum." },
        { word: "Think", meaning: "Düşünmek", pronunciation: "think", example: "I think so.", exampleTranslation: "Öyle düşünüyorum." },
        { word: "See", meaning: "Görmek", pronunciation: "see", example: "I see you.", exampleTranslation: "Seni görüyorum." },
        { word: "Want", meaning: "İstemek", pronunciation: "wont", example: "I want water.", exampleTranslation: "Su istiyorum." },
        { word: "Like", meaning: "Sevmek", pronunciation: "lyk", example: "I like pizza.", exampleTranslation: "Pizza severim." },
        { word: "Need", meaning: "İhtiyaç duymak", pronunciation: "need", example: "I need help.", exampleTranslation: "Yardıma ihtiyacım var." },
        { word: "Have", meaning: "Sahip olmak", pronunciation: "hav", example: "I have a car.", exampleTranslation: "Bir arabam var." },
        { word: "Be", meaning: "Olmak", pronunciation: "bee", example: "Be happy.", exampleTranslation: "Mutlu ol." }
    ]
};

// ===== UNIT 126: PRESENT SIMPLE =====
const unit126Vocab: EnglishUnitVocabulary = {
    unitId: 126, title: "Present Simple",
    words: [
        { word: "Works", meaning: "Çalışır", pronunciation: "wurks", example: "She works here.", exampleTranslation: "O burada çalışır." },
        { word: "Lives", meaning: "Yaşar", pronunciation: "livz", example: "He lives in London.", exampleTranslation: "Londra'da yaşar." },
        { word: "Speaks", meaning: "Konuşur", pronunciation: "speeks", example: "She speaks English.", exampleTranslation: "İngilizce konuşur." },
        { word: "Every day", meaning: "Her gün", pronunciation: "EV-ree day", example: "I work every day.", exampleTranslation: "Her gün çalışırım." },
        { word: "Always", meaning: "Her zaman", pronunciation: "AWL-wayz", example: "I always study.", exampleTranslation: "Her zaman çalışırım." },
        { word: "Usually", meaning: "Genellikle", pronunciation: "YOO-zhoo-uh-lee", example: "I usually wake up at 7.", exampleTranslation: "Genellikle 7'de uyanırım." },
        { word: "Sometimes", meaning: "Bazen", pronunciation: "SUM-tymz", example: "I sometimes eat pizza.", exampleTranslation: "Bazen pizza yerim." },
        { word: "Never", meaning: "Asla", pronunciation: "NEV-er", example: "I never smoke.", exampleTranslation: "Asla sigara içmem." },
        { word: "Often", meaning: "Sık sık", pronunciation: "OF-en", example: "I often read.", exampleTranslation: "Sık sık okurum." },
        { word: "Rarely", meaning: "Nadiren", pronunciation: "RAIR-lee", example: "I rarely watch TV.", exampleTranslation: "Nadiren TV izlerim." },
        { word: "Does", meaning: "Yapar (o)", pronunciation: "duz", example: "Does she work?", exampleTranslation: "O çalışır mı?" },
        { word: "Don't", meaning: "Yapmam", pronunciation: "dohnt", example: "I don't like it.", exampleTranslation: "Sevmiyorum." },
        { word: "Doesn't", meaning: "Yapmaz", pronunciation: "DUZ-ent", example: "She doesn't eat meat.", exampleTranslation: "Et yemez." },
        { word: "Routine", meaning: "Rutin", pronunciation: "roo-TEEN", example: "Daily routine.", exampleTranslation: "Günlük rutin." },
        { word: "Habit", meaning: "Alışkanlık", pronunciation: "HAB-it", example: "A good habit.", exampleTranslation: "İyi bir alışkanlık." }
    ]
};

// ===== UNIT 127: PRESENT CONTINUOUS =====
const unit127Vocab: EnglishUnitVocabulary = {
    unitId: 127, title: "Present Continuous",
    words: [
        { word: "Working", meaning: "Çalışıyor", pronunciation: "WUR-king", example: "I am working.", exampleTranslation: "Çalışıyorum." },
        { word: "Eating", meaning: "Yiyor", pronunciation: "EE-ting", example: "She is eating.", exampleTranslation: "Yemek yiyor." },
        { word: "Reading", meaning: "Okuyor", pronunciation: "REE-ding", example: "He is reading.", exampleTranslation: "Okuyor." },
        { word: "Sleeping", meaning: "Uyuyor", pronunciation: "SLEE-ping", example: "The baby is sleeping.", exampleTranslation: "Bebek uyuyor." },
        { word: "Right now", meaning: "Şu anda", pronunciation: "ryt now", example: "I am studying right now.", exampleTranslation: "Şu anda çalışıyorum." },
        { word: "At the moment", meaning: "Şu an", pronunciation: "at thuh MOH-ment", example: "What are you doing at the moment?", exampleTranslation: "Şu an ne yapıyorsun?" },
        { word: "Currently", meaning: "Şu anda", pronunciation: "KUR-ent-lee", example: "I am currently busy.", exampleTranslation: "Şu anda meşgulüm." },
        { word: "Talking", meaning: "Konuşuyor", pronunciation: "TAW-king", example: "They are talking.", exampleTranslation: "Konuşuyorlar." },
        { word: "Writing", meaning: "Yazıyor", pronunciation: "RY-ting", example: "I am writing.", exampleTranslation: "Yazıyorum." },
        { word: "Listening", meaning: "Dinliyor", pronunciation: "LIS-en-ing", example: "He is listening.", exampleTranslation: "Dinliyor." },
        { word: "Watching", meaning: "İzliyor", pronunciation: "WOCH-ing", example: "We are watching TV.", exampleTranslation: "TV izliyoruz." },
        { word: "Playing", meaning: "Oynuyor", pronunciation: "PLAY-ing", example: "Kids are playing.", exampleTranslation: "Çocuklar oynuyor." },
        { word: "Singing", meaning: "Şarkı söylüyor", pronunciation: "SING-ing", example: "She is singing.", exampleTranslation: "Şarkı söylüyor." },
        { word: "Dancing", meaning: "Dans ediyor", pronunciation: "DAN-sing", example: "They are dancing.", exampleTranslation: "Dans ediyorlar." },
        { word: "Happening", meaning: "Oluyor", pronunciation: "HAP-en-ing", example: "What is happening?", exampleTranslation: "Ne oluyor?" }
    ]
};

// ===== UNIT 128: ADJECTIVES =====
const unit128Vocab: EnglishUnitVocabulary = {
    unitId: 128, title: "Adjectives",
    words: [
        { word: "Big", meaning: "Büyük", pronunciation: "big", example: "A big house.", exampleTranslation: "Büyük bir ev." },
        { word: "Small", meaning: "Küçük", pronunciation: "smawl", example: "A small dog.", exampleTranslation: "Küçük bir köpek." },
        { word: "Beautiful", meaning: "Güzel", pronunciation: "BYOO-ti-ful", example: "Beautiful view.", exampleTranslation: "Güzel manzara." },
        { word: "Ugly", meaning: "Çirkin", pronunciation: "UG-lee", example: "An ugly building.", exampleTranslation: "Çirkin bir bina." },
        { word: "Good", meaning: "İyi", pronunciation: "good", example: "Good idea.", exampleTranslation: "İyi fikir." },
        { word: "Bad", meaning: "Kötü", pronunciation: "bad", example: "Bad weather.", exampleTranslation: "Kötü hava." },
        { word: "New", meaning: "Yeni", pronunciation: "noo", example: "New car.", exampleTranslation: "Yeni araba." },
        { word: "Old", meaning: "Eski", pronunciation: "ohld", example: "Old house.", exampleTranslation: "Eski ev." },
        { word: "Fast", meaning: "Hızlı", pronunciation: "fast", example: "Fast train.", exampleTranslation: "Hızlı tren." },
        { word: "Slow", meaning: "Yavaş", pronunciation: "sloh", example: "Slow turtle.", exampleTranslation: "Yavaş kaplumbağa." },
        { word: "Easy", meaning: "Kolay", pronunciation: "EE-zee", example: "Easy question.", exampleTranslation: "Kolay soru." },
        { word: "Difficult", meaning: "Zor", pronunciation: "DIF-i-kult", example: "Difficult exam.", exampleTranslation: "Zor sınav." },
        { word: "Long", meaning: "Uzun", pronunciation: "long", example: "Long road.", exampleTranslation: "Uzun yol." },
        { word: "Short", meaning: "Kısa", pronunciation: "short", example: "Short hair.", exampleTranslation: "Kısa saç." },
        { word: "Tall", meaning: "Uzun boylu", pronunciation: "tawl", example: "A tall building.", exampleTranslation: "Uzun bir bina." }
    ]
};

// ===== UNIT 129: PREPOSITIONS =====
const unit129Vocab: EnglishUnitVocabulary = {
    unitId: 129, title: "Prepositions",
    words: [
        { word: "In", meaning: "İçinde", pronunciation: "in", example: "In the box.", exampleTranslation: "Kutunun içinde." },
        { word: "On", meaning: "Üstünde", pronunciation: "on", example: "On the table.", exampleTranslation: "Masanın üstünde." },
        { word: "At", meaning: "De/Da", pronunciation: "at", example: "At home.", exampleTranslation: "Evde." },
        { word: "Under", meaning: "Altında", pronunciation: "UN-der", example: "Under the bed.", exampleTranslation: "Yatağın altında." },
        { word: "Next to", meaning: "Yanında", pronunciation: "nekst too", example: "Next to the door.", exampleTranslation: "Kapının yanında." },
        { word: "Behind", meaning: "Arkasında", pronunciation: "bi-HYND", example: "Behind the tree.", exampleTranslation: "Ağacın arkasında." },
        { word: "In front of", meaning: "Önünde", pronunciation: "in frunt uv", example: "In front of the house.", exampleTranslation: "Evin önünde." },
        { word: "Between", meaning: "Arasında", pronunciation: "bi-TWEEN", example: "Between the chairs.", exampleTranslation: "Sandalyelerin arasında." },
        { word: "Above", meaning: "Üzerinde", pronunciation: "uh-BUV", example: "Above the clouds.", exampleTranslation: "Bulutların üzerinde." },
        { word: "Below", meaning: "Altında", pronunciation: "bi-LOH", example: "Below zero.", exampleTranslation: "Sıfırın altında." },
        { word: "With", meaning: "İle", pronunciation: "with", example: "With my friend.", exampleTranslation: "Arkadaşımla." },
        { word: "Without", meaning: "Olmadan", pronunciation: "with-OUT", example: "Without sugar.", exampleTranslation: "Şekersiz." },
        { word: "From", meaning: "-den/-dan", pronunciation: "from", example: "From Turkey.", exampleTranslation: "Türkiye'den." },
        { word: "To", meaning: "-e/-a", pronunciation: "too", example: "Go to school.", exampleTranslation: "Okula git." },
        { word: "Near", meaning: "Yakın", pronunciation: "neer", example: "Near the park.", exampleTranslation: "Parkın yakınında." }
    ]
};

// ===== UNIT 130: A1 REVIEW =====
const unit130Vocab: EnglishUnitVocabulary = {
    unitId: 130, title: "A1 Review",
    words: [
        { word: "Hello", meaning: "Merhaba", pronunciation: "he-LOH", example: "Hello, everyone!", exampleTranslation: "Herkese merhaba!" },
        { word: "Family", meaning: "Aile", pronunciation: "FAM-i-lee", example: "My family is big.", exampleTranslation: "Ailem büyük." },
        { word: "Work", meaning: "İş", pronunciation: "wurk", example: "I go to work.", exampleTranslation: "İşe giderim." },
        { word: "School", meaning: "Okul", pronunciation: "skool", example: "I love school.", exampleTranslation: "Okulu severim." },
        { word: "Friend", meaning: "Arkadaş", pronunciation: "frend", example: "My best friend.", exampleTranslation: "En iyi arkadaşım." },
        { word: "House", meaning: "Ev", pronunciation: "hows", example: "A nice house.", exampleTranslation: "Güzel bir ev." },
        { word: "Food", meaning: "Yiyecek", pronunciation: "food", example: "Delicious food.", exampleTranslation: "Lezzetli yemek." },
        { word: "Water", meaning: "Su", pronunciation: "WAW-ter", example: "Clean water.", exampleTranslation: "Temiz su." },
        { word: "Time", meaning: "Zaman", pronunciation: "tym", example: "What time is it?", exampleTranslation: "Saat kaç?" },
        { word: "Day", meaning: "Gün", pronunciation: "day", example: "A beautiful day.", exampleTranslation: "Güzel bir gün." },
        { word: "Life", meaning: "Hayat", pronunciation: "lyf", example: "Life is beautiful.", exampleTranslation: "Hayat güzel." },
        { word: "People", meaning: "İnsanlar", pronunciation: "PEE-pul", example: "Nice people.", exampleTranslation: "İyi insanlar." },
        { word: "Love", meaning: "Sevgi", pronunciation: "luv", example: "Love is important.", exampleTranslation: "Sevgi önemli." },
        { word: "World", meaning: "Dünya", pronunciation: "wurld", example: "A better world.", exampleTranslation: "Daha iyi bir dünya." },
        { word: "English", meaning: "İngilizce", pronunciation: "ING-lish", example: "I speak English.", exampleTranslation: "İngilizce konuşurum." }
    ]
};

// Export function to get vocabulary for a specific unit
export function getEnglishA1VocabularyForUnit(unitId: number): EnglishUnitVocabulary {
    const idMapping: { [key: number]: EnglishUnitVocabulary } = {
        101: unit101Vocab, 102: unit102Vocab, 103: unit103Vocab, 104: unit104Vocab, 105: unit105Vocab,
        106: unit106Vocab, 107: unit107Vocab, 108: unit108Vocab, 109: unit109Vocab, 110: unit110Vocab,
        111: unit111Vocab, 112: unit112Vocab, 113: unit113Vocab, 114: unit114Vocab, 115: unit115Vocab,
        116: unit116Vocab, 117: unit117Vocab, 118: unit118Vocab, 119: unit119Vocab, 120: unit120Vocab,
        121: unit121Vocab, 122: unit122Vocab, 123: unit123Vocab, 124: unit124Vocab, 125: unit125Vocab,
        126: unit126Vocab, 127: unit127Vocab, 128: unit128Vocab, 129: unit129Vocab, 130: unit130Vocab,
    };

    return idMapping[unitId] || unit101Vocab;
}
