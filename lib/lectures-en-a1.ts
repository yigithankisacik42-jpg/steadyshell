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

const unit103Lecture: EnglishLecture = { unitId: 103, title: "Family Members", introduction: "Bu ünitede aile üyelerinin İngilizce karşılıklarını öğreneceksiniz.", sections: [{ title: "Temel Aile Üyeleri", content: "Mother (anne), Father (baba), Sister (kız kardeş), Brother (erkek kardeş), Grandmother (büyükanne), Grandfather (büyükbaba).", examples: [{ english: "My mother is a teacher.", turkish: "Annem öğretmen." }] }], summary: "Aile üyelerini İngilizce tanımlayabilir hale geldiniz." };

const unit104Lecture: EnglishLecture = { unitId: 104, title: "Colors", introduction: "Renkler günlük hayatta sıkça kullanılır. Bu ünitede temel renkleri öğreneceksiniz.", sections: [{ title: "Temel Renkler", content: "Red, Blue, Green, Yellow, Black, White, Orange, Purple, Pink, Brown, Gray.", examples: [{ english: "The sky is blue.", turkish: "Gökyüzü mavi." }] }], summary: "Renkleri İngilizce tanımlayabilir hale geldiniz." };

const unit105Lecture: EnglishLecture = { unitId: 105, title: "Food", introduction: "Yiyecekler hakkında konuşmak temel bir beceridir.", sections: [{ title: "Yiyecek Çeşitleri", content: "Meyveler (fruits), sebzeler (vegetables), et (meat), balık (fish), ekmek (bread).", examples: [{ english: "I like pizza.", turkish: "Pizza severim." }] }], summary: "Temel yiyecekleri İngilizce söyleyebilir hale geldiniz." };

const unit106Lecture: EnglishLecture = { unitId: 106, title: "Drinks", introduction: "İçecekler hakkında konuşmayı öğreneceksiniz.", sections: [{ title: "İçecek Çeşitleri", content: "Water (su), coffee (kahve), tea (çay), milk (süt), juice (meyve suyu).", examples: [{ english: "I drink coffee every morning.", turkish: "Her sabah kahve içerim." }] }], summary: "İçecekler hakkında konuşabilir hale geldiniz." };

const unit107Lecture: EnglishLecture = { unitId: 107, title: "Days & Months", introduction: "Günler ve aylar zaman ifadelerinin temelidir.", sections: [{ title: "Haftanın Günleri", content: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.", examples: [{ english: "Today is Monday.", turkish: "Bugün Pazartesi." }] }, { title: "Yılın Ayları", content: "January, February, March, April, May, June, July, August, September, October, November, December.", examples: [{ english: "My birthday is in May.", turkish: "Doğum günüm Mayıs'ta." }] }], summary: "Günleri ve ayları İngilizce söyleyebilir hale geldiniz." };

const unit108Lecture: EnglishLecture = { unitId: 108, title: "Numbers 21-100", introduction: "Daha büyük sayıları öğrenelim.", sections: [{ title: "Onluk Sayılar", content: "Twenty (20), Thirty (30), Forty (40), Fifty (50), Sixty (60), Seventy (70), Eighty (80), Ninety (90), One hundred (100).", examples: [{ english: "I am twenty-five years old.", turkish: "Yirmi beş yaşındayım." }] }], summary: "21-100 arası sayıları söyleyebilir hale geldiniz." };

const unit109Lecture: EnglishLecture = { unitId: 109, title: "Home & Rooms", introduction: "Evdeki odaları ve ev eşyalarını öğrenelim.", sections: [{ title: "Evin Odaları", content: "Kitchen (mutfak), bedroom (yatak odası), bathroom (banyo), living room (oturma odası).", examples: [{ english: "I sleep in my bedroom.", turkish: "Yatak odamda uyurum." }] }], summary: "Ev ve odaları İngilizce tanımlayabilir hale geldiniz." };

const unit110Lecture: EnglishLecture = { unitId: 110, title: "Furniture", introduction: "Mobilya ve ev eşyalarını öğrenelim.", sections: [{ title: "Temel Mobilyalar", content: "Table (masa), chair (sandalye), bed (yatak), sofa (koltuk), desk (çalışma masası).", examples: [{ english: "Sit on the chair.", turkish: "Sandalyeye otur." }] }], summary: "Mobilyaları İngilizce söyleyebilir hale geldiniz." };

const unit111Lecture: EnglishLecture = { unitId: 111, title: "Body Parts", introduction: "Vücut bölümlerini öğrenelim.", sections: [{ title: "Vücut Bölümleri", content: "Head (baş), eye (göz), ear (kulak), nose (burun), mouth (ağız), hand (el), arm (kol), leg (bacak), foot (ayak).", examples: [{ english: "My head hurts.", turkish: "Başım ağrıyor." }] }], summary: "Vücut bölümlerini İngilizce söyleyebilir hale geldiniz." };

const unit112Lecture: EnglishLecture = { unitId: 112, title: "Clothes", introduction: "Giysileri öğrenelim.", sections: [{ title: "Temel Giysiler", content: "Shirt (gömlek), pants (pantolon), dress (elbise), shoes (ayakkabı), jacket (ceket).", examples: [{ english: "I wear a blue shirt.", turkish: "Mavi gömlek giyerim." }] }], summary: "Giysileri İngilizce tanımlayabilir hale geldiniz." };

const unit113Lecture: EnglishLecture = { unitId: 113, title: "Animals", introduction: "Hayvanları öğrenelim.", sections: [{ title: "Evcil ve Vahşi Hayvanlar", content: "Dog (köpek), cat (kedi), bird (kuş), fish (balık), lion (aslan), elephant (fil).", examples: [{ english: "I have a dog.", turkish: "Bir köpeğim var." }] }], summary: "Hayvanları İngilizce söyleyebilir hale geldiniz." };

const unit114Lecture: EnglishLecture = { unitId: 114, title: "Jobs", introduction: "Meslekleri öğrenelim.", sections: [{ title: "Temel Meslekler", content: "Doctor (doktor), teacher (öğretmen), nurse (hemşire), engineer (mühendis), chef (şef).", examples: [{ english: "She is a doctor.", turkish: "O bir doktor." }] }], summary: "Meslekleri İngilizce söyleyebilir hale geldiniz." };

const unit115Lecture: EnglishLecture = { unitId: 115, title: "Places in the City", introduction: "Şehirdeki yerleri öğrenelim.", sections: [{ title: "Önemli Yerler", content: "School (okul), hospital (hastane), bank (banka), restaurant (restoran), park (park).", examples: [{ english: "I go to school.", turkish: "Okula giderim." }] }], summary: "Şehirdeki yerleri İngilizce söyleyebilir hale geldiniz." };

const unit116Lecture: EnglishLecture = { unitId: 116, title: "Transportation", introduction: "Ulaşım araçlarını öğrenelim.", sections: [{ title: "Ulaşım Araçları", content: "Car (araba), bus (otobüs), train (tren), plane (uçak), bicycle (bisiklet).", examples: [{ english: "I go to work by bus.", turkish: "İşe otobüsle giderim." }] }], summary: "Ulaşım araçlarını İngilizce söyleyebilir hale geldiniz." };

const unit117Lecture: EnglishLecture = { unitId: 117, title: "Daily Routines", introduction: "Günlük rutinleri anlatmayı öğrenelim.", sections: [{ title: "Günlük Aktiviteler", content: "Wake up (uyanmak), eat breakfast (kahvaltı yapmak), go to work (işe gitmek), sleep (uyumak).", examples: [{ english: "I wake up at 7 o'clock.", turkish: "Saat 7'de uyanırım." }] }], summary: "Günlük rutinleri İngilizce anlatabilir hale geldiniz." };

const unit118Lecture: EnglishLecture = { unitId: 118, title: "Telling Time", introduction: "Saat söylemeyi öğrenelim.", sections: [{ title: "Saat Söyleme", content: "O'clock (tam saat), half past (buçuk), quarter past (çeyrek geçe), quarter to (çeyrek kala).", examples: [{ english: "It's half past three.", turkish: "Saat üç buçuk." }] }], summary: "Saati İngilizce söyleyebilir hale geldiniz." };

const unit119Lecture: EnglishLecture = { unitId: 119, title: "Weather", introduction: "Hava durumunu anlatmayı öğrenelim.", sections: [{ title: "Hava Durumu", content: "Sunny (güneşli), rainy (yağmurlu), cloudy (bulutlu), windy (rüzgarlı), snowy (karlı).", examples: [{ english: "It's sunny today.", turkish: "Bugün güneşli." }] }], summary: "Hava durumunu İngilizce anlatabilir hale geldiniz." };

const unit120Lecture: EnglishLecture = { unitId: 120, title: "Hobbies", introduction: "Hobiler hakkında konuşmayı öğrenelim.", sections: [{ title: "Hobiler", content: "Reading (okuma), swimming (yüzme), cooking (yemek yapma), playing sports (spor yapma).", examples: [{ english: "I like reading books.", turkish: "Kitap okumayı severim." }] }], summary: "Hobiler hakkında konuşabilir hale geldiniz." };

const unit121Lecture: EnglishLecture = { unitId: 121, title: "Feelings", introduction: "Duyguları ifade etmeyi öğrenelim.", sections: [{ title: "Duygular", content: "Happy (mutlu), sad (üzgün), angry (kızgın), tired (yorgun), excited (heyecanlı).", examples: [{ english: "I feel happy today.", turkish: "Bugün mutlu hissediyorum." }] }], summary: "Duygularınızı İngilizce ifade edebilir hale geldiniz." };

const unit122Lecture: EnglishLecture = { unitId: 122, title: "School", introduction: "Okul ve sınıf ortamını öğrenelim.", sections: [{ title: "Okul Eşyaları", content: "Book (kitap), pen (kalem), notebook (defter), blackboard (tahta), classroom (sınıf).", examples: [{ english: "Open your books.", turkish: "Kitaplarınızı açın." }] }], summary: "Okul ortamını İngilizce anlatabilir hale geldiniz." };

const unit123Lecture: EnglishLecture = { unitId: 123, title: "Holidays", introduction: "Tatiller ve kutlamalar hakkında konuşalım.", sections: [{ title: "Önemli Günler", content: "Birthday (doğum günü), Christmas (Noel), New Year (Yeni Yıl), holiday (tatil).", examples: [{ english: "Happy birthday!", turkish: "Doğum günün kutlu olsun!" }] }], summary: "Tatil ve kutlamalar hakkında konuşabilir hale geldiniz." };

const unit124Lecture: EnglishLecture = { unitId: 124, title: "Countries", introduction: "Ülkeler ve milletler hakkında konuşalım.", sections: [{ title: "Ülkeler ve Milletler", content: "Turkey-Turkish, England-English, America-American, Germany-German.", examples: [{ english: "I'm from Turkey. I'm Turkish.", turkish: "Türkiye'denim. Türküm." }] }], summary: "Ülke ve milletleri İngilizce söyleyebilir hale geldiniz." };

const unit125Lecture: EnglishLecture = { unitId: 125, title: "Basic Verbs", introduction: "Temel fiilleri öğrenelim.", sections: [{ title: "En Sık Kullanılan Fiiller", content: "Go (gitmek), come (gelmek), do (yapmak), make (yapmak), have (sahip olmak), be (olmak).", examples: [{ english: "I go to school every day.", turkish: "Her gün okula giderim." }] }], summary: "Temel fiilleri kullanabilir hale geldiniz." };

const unit126Lecture: EnglishLecture = { unitId: 126, title: "Present Simple", introduction: "Geniş zaman yapısını öğrenelim.", sections: [{ title: "Present Simple", content: "Düzenli eylemler ve gerçekler için kullanılır. I/You/We/They + V1, He/She/It + V1s.", examples: [{ english: "She works every day.", turkish: "O her gün çalışır." }] }], summary: "Geniş zaman cümleleri kurabilir hale geldiniz." };

const unit127Lecture: EnglishLecture = { unitId: 127, title: "Present Continuous", introduction: "Şimdiki zaman yapısını öğrenelim.", sections: [{ title: "Present Continuous", content: "Şu an devam eden eylemler için: am/is/are + V-ing.", examples: [{ english: "I am studying now.", turkish: "Şu an çalışıyorum." }] }], summary: "Şimdiki zaman cümleleri kurabilir hale geldiniz." };

const unit128Lecture: EnglishLecture = { unitId: 128, title: "Adjectives", introduction: "Sıfatları öğrenelim.", sections: [{ title: "Temel Sıfatlar", content: "Big-small, beautiful-ugly, good-bad, new-old, fast-slow.", examples: [{ english: "This is a big house.", turkish: "Bu büyük bir ev." }] }], summary: "Sıfatları kullanabilir hale geldiniz." };

const unit129Lecture: EnglishLecture = { unitId: 129, title: "Prepositions", introduction: "Edatları öğrenelim.", sections: [{ title: "Temel Edatlar", content: "In (içinde), on (üstünde), at (de), under (altında), next to (yanında).", examples: [{ english: "The book is on the table.", turkish: "Kitap masanın üstünde." }] }], summary: "Edatları doğru kullanabilir hale geldiniz." };

const unit130Lecture: EnglishLecture = { unitId: 130, title: "A1 Review", introduction: "A1 seviyesinde öğrendiklerimizi tekrar edelim.", sections: [{ title: "Genel Tekrar", content: "Bu ünitede A1 seviyesinde öğrendiğiniz tüm konuları (selamlama, sayılar, aile, renkler, yiyecekler, günler, saat, hobiler, duygular, temel zamanlar) tekrar ediyoruz.", examples: [{ english: "Hello! I'm John. I'm from Turkey. I'm a student. I like reading.", turkish: "Merhaba! Ben John. Türkiye'denim. Öğrenciyim. Okumayı severim." }] }], summary: "A1 seviyesini tamamladınız! Tebrikler!" };

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
