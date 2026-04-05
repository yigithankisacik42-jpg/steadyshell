/**
 * SteadyShell Müfredat Verileri - 20 Ünite/Seviye
 * 
 * Dil > Seviye > Ünite > Ders hiyerarşisi
 * Tüm ünite başlıkları Türkçe (Türkçe bilenlere yönelik)
 */

export type LessonType = "LESSON" | "READING" | "LECTURE" | "SPEAKING" | "VOCABULARY" | "PHRASES" | "GRAMMAR" | "VIDEO";

export interface Lesson {
    id: number;
    type: LessonType;
    title: string;
    description?: string;
}

export interface Unit {
    id: number;
    title: string;
    description: string;
    color: string;
    borderColor: string;
    lessons: Lesson[];
}

export interface LevelCurriculum {
    levelCode: string;
    units: Unit[];
}

export interface LanguageCurriculum {
    langCode: string;
    levels: LevelCurriculum[];
}

// Renk paleti (20 renk)
const unitColors = [
    { color: "from-indigo-500 to-indigo-600", borderColor: "border-indigo-700" },
    { color: "from-violet-500 to-violet-600", borderColor: "border-violet-700" },
    { color: "from-rose-500 to-rose-600", borderColor: "border-rose-700" },
    { color: "from-amber-500 to-amber-600", borderColor: "border-amber-700" },
    { color: "from-emerald-500 to-emerald-600", borderColor: "border-emerald-700" },
    { color: "from-sky-500 to-sky-600", borderColor: "border-sky-700" },
    { color: "from-purple-500 to-purple-600", borderColor: "border-purple-700" },
    { color: "from-pink-500 to-pink-600", borderColor: "border-pink-700" },
    { color: "from-teal-500 to-teal-600", borderColor: "border-teal-700" },
    { color: "from-orange-500 to-orange-600", borderColor: "border-orange-700" },
    { color: "from-cyan-500 to-cyan-600", borderColor: "border-cyan-700" },
    { color: "from-fuchsia-500 to-fuchsia-600", borderColor: "border-fuchsia-700" },
    { color: "from-lime-500 to-lime-600", borderColor: "border-lime-700" },
    { color: "from-red-500 to-red-600", borderColor: "border-red-700" },
    { color: "from-blue-500 to-blue-600", borderColor: "border-blue-700" },
    { color: "from-yellow-500 to-yellow-600", borderColor: "border-yellow-700" },
    { color: "from-green-500 to-green-600", borderColor: "border-green-700" },
    { color: "from-slate-500 to-slate-600", borderColor: "border-slate-700" },
    { color: "from-zinc-500 to-zinc-600", borderColor: "border-zinc-700" },
    { color: "from-stone-500 to-stone-600", borderColor: "border-stone-700" },
];

// Ders dizisi oluştur (VOCABULARY, PHRASES, GRAMMAR dahil)
function generateLessons(startId: number, count: number = 10): Lesson[] {
    const lessons: Lesson[] = [];
    const pattern: LessonType[] = [
        "VIDEO",       // 1. Video (YENİ)
        "LECTURE",     // 2. Konu Anlatımı
        "VOCABULARY",  // 3. Kelimeler
        "PHRASES",     // 4. Kalıplar
        "GRAMMAR",     // 5. Gramer
        "LESSON",      // 6. Quiz 1
        "LESSON",      // 7. Quiz 2
        "SPEAKING",    // 8. Konuşma
        "READING",     // 9. Okuma
        "LESSON",      // 10. Quiz 3
        "LESSON"       // 11. Quiz 4
    ];

    for (let i = 0; i < count; i++) {
        const type = pattern[i % pattern.length];
        lessons.push({
            id: startId + i,
            type,
            title: type === "VIDEO" ? "Video Ders" :
                type === "LECTURE" ? "Konu Anlatımı" :
                    type === "VOCABULARY" ? "Kelimeler" :
                        type === "PHRASES" ? "Kalıplar" :
                            type === "GRAMMAR" ? "Gramer" :
                                type === "READING" ? "Okuma" :
                                    type === "SPEAKING" ? "Konuşma" :
                                        `Alıştırma`,
        });
    }

    return lessons;
}

// ===== İSPANYOLCA A1 =====
const spanishA1Units: Unit[] = [
    { id: 1, title: "Selamlaşma ve Tanışma", description: "Merhaba, nasılsın, teşekkürler", ...unitColors[0], lessons: generateLessons(1) },
    { id: 2, title: "Sayılar 1-20", description: "Temel sayılar", ...unitColors[1], lessons: generateLessons(10) },
    { id: 3, title: "Aile Üyeleri", description: "Anne, baba, kardeş", ...unitColors[2], lessons: generateLessons(20) },
    { id: 4, title: "Renkler", description: "Temel renkler", ...unitColors[3], lessons: generateLessons(30) },
    { id: 5, title: "Yiyecekler ve Meyveler", description: "Meyve, sebze, et, ekmek", ...unitColors[4], lessons: generateLessons(40) },
    { id: 6, title: "İçecekler", description: "Su, kahve, çay", ...unitColors[5], lessons: generateLessons(50) },
    { id: 7, title: "Günler ve Aylar", description: "Pazartesi, Ocak", ...unitColors[6], lessons: generateLessons(60) },
    { id: 8, title: "Sayılar 21-100", description: "İleri sayılar", ...unitColors[7], lessons: generateLessons(70) },
    { id: 9, title: "Ev Odaları", description: "Yatak odası, mutfak", ...unitColors[8], lessons: generateLessons(80) },
    { id: 10, title: "Mobilyalar", description: "Masa, sandalye", ...unitColors[9], lessons: generateLessons(90) },
    { id: 11, title: "Vücut Bölümleri", description: "Baş, kol, bacak", ...unitColors[10], lessons: generateLessons(100) },
    { id: 12, title: "Giysiler", description: "Gömlek, pantolon", ...unitColors[11], lessons: generateLessons(110) },
    { id: 13, title: "Hayvanlar", description: "Kedi, köpek, kuş", ...unitColors[12], lessons: generateLessons(120) },
    { id: 14, title: "Meslekler 1", description: "Doktor, öğretmen", ...unitColors[13], lessons: generateLessons(130) },
    { id: 15, title: "Şehirde Yerler", description: "Okul, market, park", ...unitColors[14], lessons: generateLessons(140) },
    { id: 16, title: "Ulaşım Araçları", description: "Araba, otobüs", ...unitColors[15], lessons: generateLessons(150) },
    { id: 17, title: "Günlük Rutinler", description: "Kalkmak, yemek", ...unitColors[16], lessons: generateLessons(160) },
    { id: 18, title: "Saat Kaç?", description: "Saat okuma", ...unitColors[17], lessons: generateLessons(170) },
    { id: 19, title: "Hava Durumu", description: "Güneşli, yağmurlu", ...unitColors[18], lessons: generateLessons(180) },
    { id: 20, title: "Hobiler ve Boş Zaman", description: "Spor, müzik, sanat, oyunlar", ...unitColors[19], lessons: generateLessons(190) },
    // A1 Üniteleri (21-25)
    { id: 21, title: "Duygular ve Hisler", description: "Nasıl hissediyorsun", ...unitColors[0], lessons: generateLessons(200) },
    { id: 22, title: "Okul ve Sınıf", description: "Kitap, defter, kalem", ...unitColors[1], lessons: generateLessons(210) },
    { id: 23, title: "Tatiller ve Bayramlar", description: "Doğum günü, Noel, Ramazan", ...unitColors[2], lessons: generateLessons(220) },
    { id: 24, title: "Ülkeler ve Milletler", description: "Nereli olduğunu söyle", ...unitColors[3], lessons: generateLessons(230) },
    { id: 25, title: "Temel Fiiller", description: "Konuşmak, yemek", ...unitColors[4], lessons: generateLessons(240) },
    // YENİ A1 Üniteleri (26-30) - Gramer genişletmesi
    { id: 26, title: "İşaret Sıfatları (Tam Set)", description: "Este, Ese, Aquel", ...unitColors[5], lessons: generateLessons(245) },
    { id: 27, title: "DEL Kullanımı", description: "DE + EL = DEL", ...unitColors[6], lessons: generateLessons(248) },
    { id: 28, title: "Sıra Sayıları", description: "Primero, Segundo, Tercero", ...unitColors[7], lessons: generateLessons(251) },
    { id: 29, title: "Soru Kelimeleri", description: "Cuál, Cuánto, Por qué", ...unitColors[8], lessons: generateLessons(254) },
    { id: 30, title: "PODER Fiili", description: "Yapabilmek, izin isteme", ...unitColors[9], lessons: generateLessons(257) },
];

// ===== İSPANYOLCA A2 (ID: 31-60) =====
const spanishA2Units: Unit[] = [
    { id: 31, title: "Geçmiş Zaman 1", description: "Pretérito indefinido", ...unitColors[0], lessons: generateLessons(300) },
    { id: 32, title: "Geçmiş Zaman 2", description: "Düzensiz fiiller", ...unitColors[1], lessons: generateLessons(310) },
    { id: 33, title: "Restoranda", description: "Sipariş verme", ...unitColors[2], lessons: generateLessons(320) },
    { id: 34, title: "Alışveriş", description: "Fiyat sorma", ...unitColors[3], lessons: generateLessons(330) },
    { id: 35, title: "Seyahat Planları", description: "Tatil yerleri", ...unitColors[4], lessons: generateLessons(340) },
    { id: 36, title: "Otel Rezervasyonu", description: "Oda ayırtma", ...unitColors[5], lessons: generateLessons(350) },
    { id: 37, title: "Havalimanında", description: "Uçuş bilgileri", ...unitColors[6], lessons: generateLessons(360) },
    { id: 38, title: "Doktorda", description: "Şikayet bildirme", ...unitColors[7], lessons: generateLessons(370) },
    { id: 39, title: "Eczanede", description: "İlaç alma", ...unitColors[8], lessons: generateLessons(380) },
    { id: 40, title: "Meslekler 2", description: "İş tanımları", ...unitColors[9], lessons: generateLessons(390) },
    { id: 41, title: "İş Görüşmesi", description: "CV hazırlama", ...unitColors[10], lessons: generateLessons(400) },
    { id: 42, title: "Telefonda", description: "Telefon konuşması", ...unitColors[11], lessons: generateLessons(410) },
    { id: 43, title: "E-posta Yazma", description: "Resmi yazışma", ...unitColors[12], lessons: generateLessons(420) },
    { id: 44, title: "Fikir Beyan Etme", description: "Creo que, Pienso que", ...unitColors[13], lessons: generateLessons(430) },
    { id: 45, title: "Karakter Özellikleri", description: "Kibar, çalışkan", ...unitColors[14], lessons: generateLessons(440) },
    { id: 46, title: "Gelecek Planları", description: "Ir a + infinitivo", ...unitColors[15], lessons: generateLessons(450) },
    { id: 47, title: "Emir Kipi (Tú)", description: "Ven, Di, Sal, Haz...", ...unitColors[16], lessons: generateLessons(460) },
    { id: 48, title: "Sinema ve Dizi", description: "Film türleri", ...unitColors[17], lessons: generateLessons(470) },
    { id: 49, title: "Teknoloji", description: "Bilgisayar, telefon", ...unitColors[18], lessons: generateLessons(480) },
    { id: 50, title: "Sosyal Medya", description: "İnternet kullanımı", ...unitColors[19], lessons: generateLessons(490) },
    // A1 Üniteleri (51-60)
    { id: 51, title: "Ev ve Taşınma", description: "Kira, ev arama", ...unitColors[0], lessons: generateLessons(500) },
    { id: 52, title: "Çevre ve Doğa", description: "Çevre koruma", ...unitColors[1], lessons: generateLessons(510) },
    { id: 53, title: "Haberler", description: "Gazete ve dergi", ...unitColors[2], lessons: generateLessons(520) },
    { id: 54, title: "Kültür ve Gelenekler", description: "Festivaller", ...unitColors[3], lessons: generateLessons(530) },
    { id: 55, title: "İlgi Zamirleri", description: "Que, Quien, Donde", ...unitColors[4], lessons: generateLessons(540) },
    { id: 56, title: "Dolaylı Nesne Zamirleri", description: "Me, Te, Le, Nos, Les", ...unitColors[5], lessons: generateLessons(550) },
    { id: 57, title: "Belirsiz Zamirler", description: "Algo, Nada, Alguien", ...unitColors[6], lessons: generateLessons(560) },
    { id: 58, title: "A2 Nitelik Sıfatları", description: "Sıfat çeşitleri", ...unitColors[7], lessons: generateLessons(570) },
    { id: 59, title: "A2 Zarf Yapıları", description: "Zaman, mekan zarfları", ...unitColors[8], lessons: generateLessons(580) },
    { id: 60, title: "A2 Final Tekrar", description: "Genel tekrar", ...unitColors[9], lessons: generateLessons(590) },
];


// ===== İSPANYOLCA B1 (ID: 61-90) - 30 ÜNİTE =====
const spanishB1Units: Unit[] = [
    { id: 61, title: "Gelecek Zaman", description: "Planlar ve tahminler", ...unitColors[0], lessons: generateLessons(600) },
    { id: 62, title: "Koşul Cümleleri 1", description: "Eğer olursa", ...unitColors[1], lessons: generateLessons(610) },
    { id: 63, title: "Koşul Cümleleri 2", description: "Gerçekdışı koşullar", ...unitColors[2], lessons: generateLessons(620) },
    { id: 64, title: "Subjunctive Giriş", description: "Dilek ve istek", ...unitColors[3], lessons: generateLessons(630) },
    { id: 65, title: "Haberler ve Medya", description: "Gazete okuma", ...unitColors[4], lessons: generateLessons(640) },
    { id: 66, title: "Çevre Sorunları", description: "Kirlilik, iklim", ...unitColors[5], lessons: generateLessons(650) },
    { id: 67, title: "Sürdürülebilirlik", description: "Geri dönüşüm", ...unitColors[6], lessons: generateLessons(660) },
    { id: 68, title: "Kültür ve Gelenekler", description: "Festivaller", ...unitColors[7], lessons: generateLessons(670) },
    { id: 69, title: "Ekonomi Temelleri", description: "Para, bütçe", ...unitColors[8], lessons: generateLessons(680) },
    { id: 70, title: "Bankacılık", description: "Hesap işlemleri", ...unitColors[9], lessons: generateLessons(690) },
    { id: 71, title: "Tartışma Becerileri", description: "Fikir belirtme", ...unitColors[10], lessons: generateLessons(700) },
    { id: 72, title: "Sunum Yapma", description: "İş sunumları", ...unitColors[11], lessons: generateLessons(710) },
    { id: 73, title: "Edebiyat 1", description: "Hikaye okuma", ...unitColors[12], lessons: generateLessons(720) },
    { id: 74, title: "Şiir ve Şarkı", description: "Dil sanatları", ...unitColors[13], lessons: generateLessons(730) },
    { id: 75, title: "Tarih ve Politika", description: "Geçmiş olaylar", ...unitColors[14], lessons: generateLessons(740) },
    { id: 76, title: "Hukuk Temelleri", description: "Haklar ve yasalar", ...unitColors[15], lessons: generateLessons(750) },
    { id: 77, title: "Bilim ve Teknoloji", description: "Yenilikler", ...unitColors[16], lessons: generateLessons(760) },
    { id: 78, title: "Sağlık ve Beslenme", description: "Sağlıklı yaşam", ...unitColors[17], lessons: generateLessons(770) },
    { id: 79, title: "Psikoloji Temelleri", description: "Davranış, düşünce", ...unitColors[18], lessons: generateLessons(780) },
    { id: 80, title: "Por vs Para", description: "Edat ayrımı", ...unitColors[19], lessons: generateLessons(790) },
    // B1 İleri Üniteler (81-90)
    { id: 81, title: "Ser vs Estar İleri", description: "B1 nüansları", ...unitColors[0], lessons: generateLessons(800) },
    { id: 82, title: "Spor ve Fitness", description: "Aktiviteler", ...unitColors[1], lessons: generateLessons(810) },
    { id: 83, title: "Seyahat Deneyimleri", description: "Hikaye anlatımı", ...unitColors[2], lessons: generateLessons(820) },
    { id: 84, title: "Müzik ve Sanat", description: "Kültürel konuşmalar", ...unitColors[3], lessons: generateLessons(830) },
    { id: 85, title: "İlişkiler ve Sosyal Hayat", description: "İnsan ilişkileri", ...unitColors[4], lessons: generateLessons(840) },
    { id: 86, title: "İş ve Kariyer", description: "Profesyonel ortam", ...unitColors[5], lessons: generateLessons(850) },
    { id: 87, title: "Edebiyat 2", description: "İleri okuma", ...unitColors[6], lessons: generateLessons(860) },
    { id: 88, title: "İspanyol Coğrafyası", description: "Kültürel bilgi", ...unitColors[7], lessons: generateLessons(870) },
    { id: 89, title: "Latin Amerika Kültürü", description: "Bölgesel farklılıklar", ...unitColors[8], lessons: generateLessons(880) },
    { id: 90, title: "B1 Kapsamlı Final", description: "Tüm konuların tekrarı", ...unitColors[9], lessons: generateLessons(890) },
];

// ===== İSPANYOLCA B2 (ID: 91-110) =====
const spanishB2Units: Unit[] = [
    { id: 91, title: "Subjunctive Derinlemesine", description: "Karmaşık dilek cümleleri", ...unitColors[0], lessons: generateLessons(900) },
    { id: 92, title: "Koşul Cümleleri 3", description: "İmkansız koşullar", ...unitColors[1], lessons: generateLessons(910) },
    { id: 93, title: "Edilgen Çatı", description: "Pasif yapılar", ...unitColors[2], lessons: generateLessons(920) },
    { id: 94, title: "Dolaylı Anlatım İleri", description: "Aktarılan konuşma", ...unitColors[3], lessons: generateLessons(930) },
    { id: 95, title: "Akademik Yazarlık", description: "Makale ve tez yazımı", ...unitColors[4], lessons: generateLessons(940) },
    { id: 96, title: "Tartışma ve Münazara", description: "İleri argüman geliştirme", ...unitColors[5], lessons: generateLessons(950) },
    { id: 97, title: "İş Müzakereleri", description: "Anlaşma ve pazarlık", ...unitColors[6], lessons: generateLessons(960) },
    { id: 98, title: "Hukuk Dili", description: "Sözleşme ve yasal terimler", ...unitColors[7], lessons: generateLessons(970) },
    { id: 99, title: "Tıp Terminolojisi", description: "Sağlık sektörü dili", ...unitColors[8], lessons: generateLessons(980) },
    { id: 100, title: "Finans ve Yatırım", description: "Ekonomik terimler", ...unitColors[9], lessons: generateLessons(990) },
    { id: 101, title: "Çağdaş Edebiyat", description: "Modern İspanyol yazarlar", ...unitColors[10], lessons: generateLessons(1000) },
    { id: 102, title: "Eleştiri Yazarlığı", description: "Analitik yazım", ...unitColors[11], lessons: generateLessons(1010) },
    { id: 103, title: "Medya Analizi", description: "Haber ve propaganda", ...unitColors[12], lessons: generateLessons(1020) },
    { id: 104, title: "Sosyoloji ve Toplum", description: "Sosyal meseleler", ...unitColors[13], lessons: generateLessons(1030) },
    { id: 105, title: "Felsefe Temelleri", description: "Düşünce tarihi", ...unitColors[14], lessons: generateLessons(1040) },
    { id: 106, title: "Bilimsel Araştırma", description: "Araştırma metodolojisi", ...unitColors[15], lessons: generateLessons(1050) },
    { id: 107, title: "Çevre Politikaları", description: "Küresel çevre sorunları", ...unitColors[16], lessons: generateLessons(1060) },
    { id: 108, title: "Uluslararası İlişkiler", description: "Diplomasi dili", ...unitColors[17], lessons: generateLessons(1070) },
    { id: 109, title: "Kültürlerarası İletişim", description: "Farklı kültürler", ...unitColors[18], lessons: generateLessons(1080) },
    { id: 110, title: "B2 Final Tekrar", description: "Kapsamlı değerlendirme", ...unitColors[19], lessons: generateLessons(1090) },
];

// ===== İNGİLİZCE A1 (30 Ünite: ID 101-130) =====
const englishA1Units: Unit[] = [
    { id: 101, title: "Selamlaşma ve Tanışma", description: "Hello, how are you", ...unitColors[0], lessons: generateLessons(5000) },
    { id: 102, title: "Sayılar 1-20", description: "Basic numbers", ...unitColors[1], lessons: generateLessons(5020) },
    { id: 103, title: "Aile Üyeleri", description: "Family members", ...unitColors[2], lessons: generateLessons(5040) },
    { id: 104, title: "Renkler", description: "Colors", ...unitColors[3], lessons: generateLessons(5060) },
    { id: 105, title: "Yiyecekler", description: "Fruits and vegetables", ...unitColors[4], lessons: generateLessons(5080) },
    { id: 106, title: "İçecekler", description: "Water, coffee, tea", ...unitColors[5], lessons: generateLessons(5100) },
    { id: 107, title: "Günler ve Aylar", description: "Monday, January", ...unitColors[6], lessons: generateLessons(5120) },
    { id: 108, title: "Sayılar 21-100", description: "Advanced numbers", ...unitColors[7], lessons: generateLessons(5140) },
    { id: 109, title: "Ev Odaları", description: "Bedroom, kitchen", ...unitColors[8], lessons: generateLessons(5160) },
    { id: 110, title: "Mobilyalar", description: "Table, chair", ...unitColors[9], lessons: generateLessons(5180) },
    { id: 111, title: "Vücut Bölümleri", description: "Head, arm, leg", ...unitColors[10], lessons: generateLessons(5200) },
    { id: 112, title: "Giysiler", description: "Shirt, pants", ...unitColors[11], lessons: generateLessons(5220) },
    { id: 113, title: "Hayvanlar", description: "Cat, dog, bird", ...unitColors[12], lessons: generateLessons(5240) },
    { id: 114, title: "Meslekler 1", description: "Doctor, teacher", ...unitColors[13], lessons: generateLessons(5260) },
    { id: 115, title: "Şehirde Yerler", description: "School, market, park", ...unitColors[14], lessons: generateLessons(5280) },
    { id: 116, title: "Ulaşım Araçları", description: "Car, bus", ...unitColors[15], lessons: generateLessons(5300) },
    { id: 117, title: "Günlük Rutinler", description: "Wake up, eat", ...unitColors[16], lessons: generateLessons(5320) },
    { id: 118, title: "Saat Kaç?", description: "Telling time", ...unitColors[17], lessons: generateLessons(5340) },
    { id: 119, title: "Hava Durumu", description: "Sunny, rainy", ...unitColors[18], lessons: generateLessons(5360) },
    { id: 120, title: "Hobiler", description: "Sports, music", ...unitColors[19], lessons: generateLessons(5380) },
    // YENİ ÜNİTELER (21-30)
    { id: 121, title: "Duygular ve Hisler", description: "Happy, sad, angry", ...unitColors[0], lessons: generateLessons(5400) },
    { id: 122, title: "Okul ve Sınıf", description: "Book, pen, classroom", ...unitColors[1], lessons: generateLessons(5420) },
    { id: 123, title: "Tatiller ve Bayramlar", description: "Christmas, birthday", ...unitColors[2], lessons: generateLessons(5440) },
    { id: 124, title: "Ülkeler ve Milletler", description: "Countries, nationalities", ...unitColors[3], lessons: generateLessons(5460) },
    { id: 125, title: "Temel Fiiller", description: "Go, come, do, make", ...unitColors[4], lessons: generateLessons(5480) },
    { id: 126, title: "Present Simple", description: "I work, she works", ...unitColors[5], lessons: generateLessons(5500) },
    { id: 127, title: "Present Continuous", description: "I am working", ...unitColors[6], lessons: generateLessons(5520) },
    { id: 128, title: "Sıfatlar", description: "Big, small, beautiful", ...unitColors[7], lessons: generateLessons(5540) },
    { id: 129, title: "Edatlar", description: "In, on, at, under", ...unitColors[8], lessons: generateLessons(5560) },
    { id: 130, title: "A1 Tekrar", description: "A1 level review", ...unitColors[9], lessons: generateLessons(5580) },
];


// ===== İNGİLİZCE A2 (30 Ünite: ID 131-160) =====
const englishA2Units: Unit[] = [
    { id: 131, title: "Geçmiş Zaman 1", description: "Simple past", ...unitColors[0], lessons: generateLessons(6000) },
    { id: 132, title: "Geçmiş Zaman 2", description: "Irregular verbs", ...unitColors[1], lessons: generateLessons(6020) },
    { id: 133, title: "Restoranda", description: "Ordering food", ...unitColors[2], lessons: generateLessons(6040) },
    { id: 134, title: "Alışveriş", description: "Asking prices", ...unitColors[3], lessons: generateLessons(6060) },
    { id: 135, title: "Seyahat Planları", description: "Vacation places", ...unitColors[4], lessons: generateLessons(6080) },
    { id: 136, title: "Otel Rezervasyonu", description: "Booking a room", ...unitColors[5], lessons: generateLessons(6100) },
    { id: 137, title: "Havalimanında", description: "Flight information", ...unitColors[6], lessons: generateLessons(6120) },
    { id: 138, title: "Doktorda", description: "Describing symptoms", ...unitColors[7], lessons: generateLessons(6140) },
    { id: 139, title: "Eczanede", description: "Getting medicine", ...unitColors[8], lessons: generateLessons(6160) },
    { id: 140, title: "Meslekler 2", description: "Job descriptions", ...unitColors[9], lessons: generateLessons(6180) },
    { id: 141, title: "İş Görüşmesi", description: "CV preparation", ...unitColors[10], lessons: generateLessons(6200) },
    { id: 142, title: "Telefonda", description: "Phone conversation", ...unitColors[11], lessons: generateLessons(6220) },
    { id: 143, title: "E-posta Yazma", description: "Formal writing", ...unitColors[12], lessons: generateLessons(6240) },
    { id: 144, title: "Duygular", description: "Happy, sad", ...unitColors[13], lessons: generateLessons(6260) },
    { id: 145, title: "Karakter Özellikleri", description: "Kind, hardworking", ...unitColors[14], lessons: generateLessons(6280) },
    { id: 146, title: "Spor ve Fitness", description: "Exercise types", ...unitColors[15], lessons: generateLessons(6300) },
    { id: 147, title: "Müzik ve Sanat", description: "Instruments", ...unitColors[16], lessons: generateLessons(6320) },
    { id: 148, title: "Sinema ve Dizi", description: "Movie genres", ...unitColors[17], lessons: generateLessons(6340) },
    { id: 149, title: "Teknoloji", description: "Computer, phone", ...unitColors[18], lessons: generateLessons(6360) },
    { id: 150, title: "Sosyal Medya", description: "Internet use", ...unitColors[19], lessons: generateLessons(6380) },
    // YENİ ÜNİTELER (21-30)
    { id: 151, title: "Ev ve Taşınma", description: "Renting, moving", ...unitColors[0], lessons: generateLessons(6400) },
    { id: 152, title: "Çevre ve Doğa", description: "Environment", ...unitColors[1], lessons: generateLessons(6420) },
    { id: 153, title: "Haberler", description: "News, media", ...unitColors[2], lessons: generateLessons(6440) },
    { id: 154, title: "Kültür ve Gelenekler", description: "Culture, traditions", ...unitColors[3], lessons: generateLessons(6460) },
    { id: 155, title: "Present Perfect", description: "Have done", ...unitColors[4], lessons: generateLessons(6480) },
    { id: 156, title: "Comparatives", description: "Bigger, smaller", ...unitColors[5], lessons: generateLessons(6500) },
    { id: 157, title: "Superlatives", description: "The biggest", ...unitColors[6], lessons: generateLessons(6520) },
    { id: 158, title: "Modal Verbs", description: "Can, must, should", ...unitColors[7], lessons: generateLessons(6540) },
    { id: 159, title: "Question Tags", description: "Isn't it?", ...unitColors[8], lessons: generateLessons(6560) },
    { id: 160, title: "A2 Tekrar", description: "A2 level review", ...unitColors[9], lessons: generateLessons(6580) },
];

// ===== İNGİLİZCE B1 (30 Ünite: ID 161-190) =====
const englishB1Units: Unit[] = [
    { id: 161, title: "Gelecek Zaman", description: "Will and going to", ...unitColors[0], lessons: generateLessons(7000) },
    { id: 162, title: "Koşul Cümleleri 1", description: "First conditional", ...unitColors[1], lessons: generateLessons(7020) },
    { id: 163, title: "Koşul Cümleleri 2", description: "Second conditional", ...unitColors[2], lessons: generateLessons(7040) },
    { id: 164, title: "Passive Voice", description: "Edilgen yapı", ...unitColors[3], lessons: generateLessons(7060) },
    { id: 165, title: "Reported Speech", description: "Dolaylı anlatım", ...unitColors[4], lessons: generateLessons(7080) },
    { id: 166, title: "Phrasal Verbs 1", description: "Deyimsel fiiller", ...unitColors[5], lessons: generateLessons(7100) },
    { id: 167, title: "Phrasal Verbs 2", description: "Daha fazla deyim", ...unitColors[6], lessons: generateLessons(7120) },
    { id: 168, title: "Haberler ve Medya", description: "News reading", ...unitColors[7], lessons: generateLessons(7140) },
    { id: 169, title: "Çevre Sorunları", description: "Environment", ...unitColors[8], lessons: generateLessons(7160) },
    { id: 170, title: "Sürdürülebilirlik", description: "Recycling", ...unitColors[9], lessons: generateLessons(7180) },
    { id: 171, title: "Kültür ve Gelenekler", description: "Festivals", ...unitColors[10], lessons: generateLessons(7200) },
    { id: 172, title: "Ekonomi Temelleri", description: "Money, budget", ...unitColors[11], lessons: generateLessons(7220) },
    { id: 173, title: "Tartışma Becerileri", description: "Giving opinions", ...unitColors[12], lessons: generateLessons(7240) },
    { id: 174, title: "Sunum Yapma", description: "Presentations", ...unitColors[13], lessons: generateLessons(7260) },
    { id: 175, title: "Edebiyat 1", description: "Story reading", ...unitColors[14], lessons: generateLessons(7280) },
    { id: 176, title: "Akademik Yazma", description: "Essay writing", ...unitColors[15], lessons: generateLessons(7300) },
    { id: 177, title: "Bilim ve Teknoloji", description: "Innovations", ...unitColors[16], lessons: generateLessons(7320) },
    { id: 178, title: "Sağlık ve Beslenme", description: "Healthy living", ...unitColors[17], lessons: generateLessons(7340) },
    { id: 179, title: "Psikoloji Temelleri", description: "Behavior, thoughts", ...unitColors[18], lessons: generateLessons(7360) },
    { id: 180, title: "İş İngilizcesi 1", description: "Business basics", ...unitColors[19], lessons: generateLessons(7380) },
    // YENİ ÜNİTELER (21-30)
    { id: 181, title: "Past Perfect", description: "Had done", ...unitColors[0], lessons: generateLessons(7400) },
    { id: 182, title: "Future Perfect", description: "Will have done", ...unitColors[1], lessons: generateLessons(7420) },
    { id: 183, title: "Relative Clauses", description: "Who, which, that", ...unitColors[2], lessons: generateLessons(7440) },
    { id: 184, title: "Causatives", description: "Have something done", ...unitColors[3], lessons: generateLessons(7460) },
    { id: 185, title: "Wish Clauses", description: "I wish I could", ...unitColors[4], lessons: generateLessons(7480) },
    { id: 186, title: "Collocations", description: "Word combinations", ...unitColors[5], lessons: generateLessons(7500) },
    { id: 187, title: "Connectors", description: "However, although", ...unitColors[6], lessons: generateLessons(7520) },
    { id: 188, title: "Formal vs Informal", description: "Register differences", ...unitColors[7], lessons: generateLessons(7540) },
    { id: 189, title: "Debate Skills", description: "Arguing points", ...unitColors[8], lessons: generateLessons(7560) },
    { id: 190, title: "B1 Tekrar", description: "B1 level review", ...unitColors[9], lessons: generateLessons(7580) },
];

// ===== İNGİLİZCE B2 (30 Ünite: ID 191-220) =====
const englishB2Units: Unit[] = [
    { id: 191, title: "İleri Gramer 1", description: "Advanced tenses", ...unitColors[0], lessons: generateLessons(8000) },
    { id: 192, title: "İleri Gramer 2", description: "Complex structures", ...unitColors[1], lessons: generateLessons(8020) },
    { id: 193, title: "Deyimler 1", description: "Common idioms", ...unitColors[2], lessons: generateLessons(8040) },
    { id: 194, title: "Deyimler 2", description: "More idioms", ...unitColors[3], lessons: generateLessons(8060) },
    { id: 195, title: "Formal Yazışma", description: "Formal letters", ...unitColors[4], lessons: generateLessons(8080) },
    { id: 196, title: "Sunum Teknikleri", description: "Advanced presenting", ...unitColors[5], lessons: generateLessons(8100) },
    { id: 197, title: "Müzakere", description: "Negotiation skills", ...unitColors[6], lessons: generateLessons(8120) },
    { id: 198, title: "Hukuk İngilizcesi", description: "Legal vocabulary", ...unitColors[7], lessons: generateLessons(8140) },
    { id: 199, title: "Tıbbi İngilizce", description: "Medical terms", ...unitColors[8], lessons: generateLessons(8160) },
    { id: 200, title: "Finans İngilizcesi", description: "Finance vocabulary", ...unitColors[9], lessons: generateLessons(8180) },
    { id: 201, title: "Edebiyat Analizi", description: "Literature analysis", ...unitColors[10], lessons: generateLessons(8200) },
    { id: 202, title: "Tartışmalı Konular", description: "Controversial topics", ...unitColors[11], lessons: generateLessons(8220) },
    { id: 203, title: "Akademik Okuma", description: "Research papers", ...unitColors[12], lessons: generateLessons(8240) },
    { id: 204, title: "Eleştirel Düşünme", description: "Critical thinking", ...unitColors[13], lessons: generateLessons(8260) },
    { id: 205, title: "Uluslararası İlişkiler", description: "Global affairs", ...unitColors[14], lessons: generateLessons(8280) },
    { id: 206, title: "Medya Analizi", description: "Media literacy", ...unitColors[15], lessons: generateLessons(8300) },
    { id: 207, title: "İş İngilizcesi 2", description: "Advanced business", ...unitColors[16], lessons: generateLessons(8320) },
    { id: 208, title: "Proje Yönetimi", description: "Project management", ...unitColors[17], lessons: generateLessons(8340) },
    { id: 209, title: "Kültürlerarası İletişim", description: "Cross-cultural", ...unitColors[18], lessons: generateLessons(8360) },
    { id: 210, title: "Kariyer Geliştirme", description: "Career development", ...unitColors[19], lessons: generateLessons(8380) },
    // YENİ ÜNİTELER (21-30)
    { id: 211, title: "Inversion", description: "Not only, hardly", ...unitColors[0], lessons: generateLessons(8400) },
    { id: 212, title: "Mixed Conditionals", description: "Complex conditions", ...unitColors[1], lessons: generateLessons(8420) },
    { id: 213, title: "Advanced Passive", description: "Complex passive forms", ...unitColors[2], lessons: generateLessons(8440) },
    { id: 214, title: "Cleft Sentences", description: "It is... that", ...unitColors[3], lessons: generateLessons(8460) },
    { id: 215, title: "Advanced Vocabulary", description: "C1 level words", ...unitColors[4], lessons: generateLessons(8480) },
    { id: 216, title: "Essay Writing", description: "Academic essays", ...unitColors[5], lessons: generateLessons(8500) },
    { id: 217, title: "Speaking Fluency", description: "Advanced speaking", ...unitColors[6], lessons: generateLessons(8520) },
    { id: 218, title: "Listening Skills", description: "Native speed", ...unitColors[7], lessons: generateLessons(8540) },
    { id: 219, title: "Reading Comprehension", description: "Complex texts", ...unitColors[8], lessons: generateLessons(8560) },
    { id: 220, title: "B2 Tekrar", description: "B2 level review", ...unitColors[9], lessons: generateLessons(8580) },
];


// ===== FRANSIZCA A1 (30 Ünite: ID 301-330) =====
const frenchA1Units: Unit[] = [
    { id: 301, title: "Merhaba", description: "Selamlaşma ve tanışma", ...unitColors[0], lessons: generateLessons(3001) },
    { id: 302, title: "Alfabe ve Sesler", description: "Fransızca sesletim", ...unitColors[1], lessons: generateLessons(3011) },
    { id: 303, title: "Sayılar (0-20)", description: "Temel sayılar", ...unitColors[2], lessons: generateLessons(3021) },
    { id: 304, title: "Renkler", description: "Temel renkler", ...unitColors[3], lessons: generateLessons(3031) },
    { id: 305, title: "Aile Bireyleri", description: "Aile tanıtımı", ...unitColors[4], lessons: generateLessons(3041) },
    { id: 306, title: "Günler ve Aylar", description: "Zaman kavramları", ...unitColors[5], lessons: generateLessons(3051) },
    { id: 307, title: "Ülkeler ve Milletler", description: "Nerelisin?", ...unitColors[6], lessons: generateLessons(3061) },
    { id: 308, title: "Meslekler", description: "Ne iş yapıyorsun?", ...unitColors[7], lessons: generateLessons(3071) },
    { id: 309, title: "Evimiz", description: "Ev ve odalar", ...unitColors[8], lessons: generateLessons(3081) },
    { id: 310, title: "Sınıfta", description: "Sınıf eşyaları", ...unitColors[9], lessons: generateLessons(3091) },
    { id: 311, title: "Vücudumuz", description: "Vücut bölümleri", ...unitColors[10], lessons: generateLessons(3101) },
    { id: 312, title: "Giysiler", description: "Kıyafetler", ...unitColors[11], lessons: generateLessons(3111) },
    { id: 313, title: "Yiyecekler", description: "Temel gıdalar", ...unitColors[12], lessons: generateLessons(3121) },
    { id: 314, title: "İçecekler", description: "Sıcak ve soğuk içecekler", ...unitColors[13], lessons: generateLessons(3131) },
    { id: 315, title: "Saat Kaç?", description: "Saati sorma", ...unitColors[14], lessons: generateLessons(3141) },
    { id: 316, title: "Günlük Rutin", description: "Sabah rutini", ...unitColors[15], lessons: generateLessons(3151) },
    { id: 317, title: "Hobiler", description: "Boş zaman aktiviteleri", ...unitColors[16], lessons: generateLessons(3161) },
    { id: 318, title: "Hava Durumu", description: "Hava nasıl?", ...unitColors[17], lessons: generateLessons(3171) },
    { id: 319, title: "Duygular", description: "Nasıl hissediyorsun?", ...unitColors[18], lessons: generateLessons(3181) },
    { id: 320, title: "Şehirde Yönler", description: "Adres tarifi", ...unitColors[19], lessons: generateLessons(3191) },
    { id: 321, title: "Ulaşım", description: "Toplu taşıma", ...unitColors[0], lessons: generateLessons(3201) },
    { id: 322, title: "Mevsimler", description: "Dört mevsim", ...unitColors[1], lessons: generateLessons(3211) },
    { id: 323, title: "Doğum Günü", description: "Kutlamalar", ...unitColors[2], lessons: generateLessons(3221) },
    { id: 324, title: "Tatil", description: "Tatil planları", ...unitColors[3], lessons: generateLessons(3231) },
    { id: 325, title: "Alışveriş", description: "Markette", ...unitColors[4], lessons: generateLessons(3241) },
    { id: 326, title: "Restoranda", description: "Sipariş verme", ...unitColors[5], lessons: generateLessons(3251) },
    { id: 327, title: "Renkler ve Sıfatlar", description: "Niteleme sıfatları", ...unitColors[6], lessons: generateLessons(3261) },
    { id: 328, title: "Hayvanlar", description: "Evcil ve vahşi hayvanlar", ...unitColors[7], lessons: generateLessons(3271) },
    { id: 329, title: "Teknoloji", description: "Temel cihazlar", ...unitColors[8], lessons: generateLessons(3281) },
    { id: 330, title: "A1 Genel Tekrar", description: "Seviye özeti", ...unitColors[9], lessons: generateLessons(3291) },
];

// ===== FRANSIZCA A2 (30 Ünite: ID 331-360) =====
const frenchA2Units: Unit[] = [
    { id: 331, title: "Geçmiş Tatiller", description: "Tatil anıları", ...unitColors[10], lessons: generateLessons(3301) },
    { id: 332, title: "Gelecek Planları", description: "Gelecek yaz", ...unitColors[11], lessons: generateLessons(3311) },
    { id: 333, title: "Sağlık ve Hastalık", description: "Doktorda", ...unitColors[12], lessons: generateLessons(3321) },
    { id: 334, title: "Bankada", description: "Para işlemleri", ...unitColors[13], lessons: generateLessons(3331) },
    { id: 335, title: "Postanede", description: "Mektup gönderme", ...unitColors[14], lessons: generateLessons(3341) },
    { id: 336, title: "Otel Rezervasyonu", description: "Oda ayırtma", ...unitColors[15], lessons: generateLessons(3351) },
    { id: 337, title: "Tren İstasyonunda", description: "Bilet alma", ...unitColors[16], lessons: generateLessons(3361) },
    { id: 338, title: "Havaalanında", description: "Check-in", ...unitColors[17], lessons: generateLessons(3371) },
    { id: 339, title: "Restoranda Sipariş", description: "Detaylı sipariş", ...unitColors[18], lessons: generateLessons(3381) },
    { id: 340, title: "Yemek Tarifi", description: "Mutfakta", ...unitColors[19], lessons: generateLessons(3391) },
    { id: 341, title: "Alışveriş Diyaloğu", description: "Pazarlık yapma", ...unitColors[0], lessons: generateLessons(3401) },
    { id: 342, title: "Kıyafet Alışverişi", description: "Beden ve renk", ...unitColors[1], lessons: generateLessons(3411) },
    { id: 343, title: "Ev İşleri", description: "Temizlik ve düzen", ...unitColors[2], lessons: generateLessons(3421) },
    { id: 344, title: "Günlük Haberler", description: "Gazete okuma", ...unitColors[3], lessons: generateLessons(3431) },
    { id: 345, title: "Televizyon Programları", description: "TV rehberi", ...unitColors[4], lessons: generateLessons(3441) },
    { id: 346, title: "Sinema ve Filmler", description: "Film türleri", ...unitColors[5], lessons: generateLessons(3451) },
    { id: 347, title: "Müzik Zevkleri", description: "Konser ve albüm", ...unitColors[6], lessons: generateLessons(3461) },
    { id: 348, title: "Spor Aktiviteleri", description: "Spor dalları", ...unitColors[7], lessons: generateLessons(3471) },
    { id: 349, title: "Doğa Gezisi", description: "Kamp ve yürüyüş", ...unitColors[8], lessons: generateLessons(3481) },
    { id: 350, title: "Arkadaş Buluşması", description: "Plan yapma", ...unitColors[9], lessons: generateLessons(3491) },
    { id: 351, title: "Telefon Görüşmesi", description: "Telefon adabı", ...unitColors[10], lessons: generateLessons(3501) },
    { id: 352, title: "Davet Etme", description: "Parti daveti", ...unitColors[11], lessons: generateLessons(3511) },
    { id: 353, title: "Özür Dileme", description: "Mazeret bildirme", ...unitColors[12], lessons: generateLessons(3521) },
    { id: 354, title: "Yol Tarifi", description: "Detaylı tarif", ...unitColors[13], lessons: generateLessons(3531) },
    { id: 355, title: "Şehir Tanıtımı", description: "Turistik yerler", ...unitColors[14], lessons: generateLessons(3541) },
    { id: 356, title: "Kültürel Farklar", description: "Yaşam tarzı", ...unitColors[15], lessons: generateLessons(3551) },
    { id: 357, title: "Eğitim Hayatı", description: "Okul ve dersler", ...unitColors[16], lessons: generateLessons(3561) },
    { id: 358, title: "İş Hayatı", description: "Ofis ortamı", ...unitColors[17], lessons: generateLessons(3571) },
    { id: 359, title: "Teknoloji Kullanımı", description: "Bilgisayar ve internet", ...unitColors[18], lessons: generateLessons(3581) },
    { id: 360, title: "A2 Genel Tekrar", description: "Seviye özeti", ...unitColors[19], lessons: generateLessons(3591) },
];

// ===== FRANSIZCA B1 (30 Ünite: ID 361-390) =====
const frenchB1Units: Unit[] = [
    { id: 361, title: "İş Görüşmesi", description: "Mülakat teknikleri", ...unitColors[0], lessons: generateLessons(3601) },
    { id: 362, title: "Özgeçmiş Hazırlama", description: "CV yazımı", ...unitColors[1], lessons: generateLessons(3611) },
    { id: 363, title: "Kariyer Planlaması", description: "Gelecek hedefleri", ...unitColors[2], lessons: generateLessons(3621) },
    { id: 364, title: "Eğitim Sistemi", description: "Okul ve üniversite", ...unitColors[3], lessons: generateLessons(3631) },
    { id: 365, title: "Teknoloji ve Toplum", description: "Dijital etki", ...unitColors[4], lessons: generateLessons(3641) },
    { id: 366, title: "Sosyal Medya", description: "Ağ kullanımı", ...unitColors[5], lessons: generateLessons(3651) },
    { id: 367, title: "Çevre Sorunları", description: "Kirlilik ve koruma", ...unitColors[6], lessons: generateLessons(3661) },
    { id: 368, title: "Küresel Isınma", description: "İklim değişikliği", ...unitColors[7], lessons: generateLessons(3671) },
    { id: 369, title: "Geri Dönüşüm", description: "Atık yönetimi", ...unitColors[8], lessons: generateLessons(3681) },
    { id: 370, title: "Sağlıklı Yaşam", description: "Spor ve diyet", ...unitColors[9], lessons: generateLessons(3691) },
    { id: 371, title: "Diyet ve Beslenme", description: "Besin değerleri", ...unitColors[10], lessons: generateLessons(3701) },
    { id: 372, title: "Stres Yönetimi", description: "Ruh sağlığı", ...unitColors[11], lessons: generateLessons(3711) },
    { id: 373, title: "Seyahat Kültürü", description: "Farklı yerler", ...unitColors[12], lessons: generateLessons(3721) },
    { id: 374, title: "Farklı Kültürler", description: "Gelenekler", ...unitColors[13], lessons: generateLessons(3731) },
    { id: 375, title: "Sanat ve Edebiyat", description: "Kültürel miras", ...unitColors[14], lessons: generateLessons(3741) },
    { id: 376, title: "Tarihi Olaylar", description: "Geçmişten günümüze", ...unitColors[15], lessons: generateLessons(3751) },
    { id: 377, title: "Ünlü Şahsiyetler", description: "Biyografiler", ...unitColors[16], lessons: generateLessons(3761) },
    { id: 378, title: "Bilimsel Keşifler", description: "İcatlar", ...unitColors[17], lessons: generateLessons(3771) },
    { id: 379, title: "Uzay Araştırmaları", description: "Evren ve gezegenler", ...unitColors[18], lessons: generateLessons(3781) },
    { id: 380, title: "Moda Trendleri", description: "Giyim tarzları", ...unitColors[19], lessons: generateLessons(3791) },
    { id: 381, title: "Tüketim Alışkanlıkları", description: "Alışveriş kültürü", ...unitColors[0], lessons: generateLessons(3801) },
    { id: 382, title: "Reklamcılık", description: "Pazarlama", ...unitColors[1], lessons: generateLessons(3811) },
    { id: 383, title: "Haber Medyası", description: "Gazetecilik", ...unitColors[2], lessons: generateLessons(3821) },
    { id: 384, title: "Politik Sistemler", description: "Yönetim biçimleri", ...unitColors[3], lessons: generateLessons(3831) },
    { id: 385, title: "Hukuk ve Adalet", description: "Yasal haklar", ...unitColors[4], lessons: generateLessons(3841) },
    { id: 386, title: "İnsan Hakları", description: "Eşitlik ve özgürlük", ...unitColors[5], lessons: generateLessons(3851) },
    { id: 387, title: "Gönüllülük", description: "Sosyal sorumluluk", ...unitColors[6], lessons: generateLessons(3861) },
    { id: 388, title: "Göç ve Mülteciler", description: "Toplumsal uyum", ...unitColors[7], lessons: generateLessons(3871) },
    { id: 389, title: "Ekonomik Sorunlar", description: "Enflasyon ve pazar", ...unitColors[8], lessons: generateLessons(3881) },
    { id: 390, title: "B1 Genel Tekrar", description: "Seviye özeti", ...unitColors[9], lessons: generateLessons(3891) },
];

// ===== FRANSIZCA B2 (30 Ünite: ID 391-420) =====
const frenchB2Units: Unit[] = [
    { id: 391, title: "Küreselleşme", description: "Dünya ekonomisi", ...unitColors[10], lessons: generateLessons(3901) },
    { id: 392, title: "Sürdürülebilirlik", description: "Yeşil enerji", ...unitColors[11], lessons: generateLessons(3911) },
    { id: 393, title: "Yapay Zeka", description: "AI ve gelecek", ...unitColors[12], lessons: generateLessons(3921) },
    { id: 394, title: "Genetik Mühendisliği", description: "DNA ve bilim", ...unitColors[13], lessons: generateLessons(3931) },
    { id: 395, title: "Modern Sanat", description: "Çağdaş akımlar", ...unitColors[14], lessons: generateLessons(3941) },
    { id: 396, title: "Klasik Edebiyat", description: "Başyapıtlar", ...unitColors[15], lessons: generateLessons(3951) },
    { id: 397, title: "Felsefi Akımlar", description: "Düşünce tarihi", ...unitColors[16], lessons: generateLessons(3961) },
    { id: 398, title: "Psikoloji", description: "İnsan davranışı", ...unitColors[17], lessons: generateLessons(3971) },
    { id: 399, title: "Sosyoloji", description: "Toplumsal yapı", ...unitColors[18], lessons: generateLessons(3981) },
    { id: 400, title: "Uluslararası İlişkiler", description: "Diplomasi", ...unitColors[19], lessons: generateLessons(3991) },
    { id: 401, title: "Diplomasi Dili", description: "Resmi yazışma", ...unitColors[0], lessons: generateLessons(4001) },
    { id: 402, title: "Küresel Ekonomi", description: "Pazar dinamikleri", ...unitColors[1], lessons: generateLessons(4011) },
    { id: 403, title: "Kripto Paralar", description: "Dijital finans", ...unitColors[2], lessons: generateLessons(4021) },
    { id: 404, title: "İklim Politikaları", description: "Çevre zirveleri", ...unitColors[3], lessons: generateLessons(4031) },
    { id: 405, title: "Yenilenebilir Enerji", description: "Güneş ve rüzgar", ...unitColors[4], lessons: generateLessons(4041) },
    { id: 406, title: "Eğitim Reformu", description: "Öğrenim modelleri", ...unitColors[5], lessons: generateLessons(4051) },
    { id: 407, title: "Uzaktan Çalışma", description: "Dijital göçebelik", ...unitColors[6], lessons: generateLessons(4061) },
    { id: 408, title: "Liderlik", description: "Yönetim becerileri", ...unitColors[7], lessons: generateLessons(4071) },
    { id: 409, title: "Girişimcilik", description: "Startup kültürü", ...unitColors[8], lessons: generateLessons(4081) },
    { id: 410, title: "Medya Manipülasyonu", description: "Dezenformasyon", ...unitColors[9], lessons: generateLessons(4091) },
    { id: 411, title: "İfade Özgürlüğü", description: "Basın hakları", ...unitColors[10], lessons: generateLessons(4101) },
    { id: 412, title: "Biyoetik", description: "Tıp etiği", ...unitColors[11], lessons: generateLessons(4111) },
    { id: 413, title: "Uzay Kolonizasyonu", description: "Mars görevi", ...unitColors[12], lessons: generateLessons(4121) },
    { id: 414, title: "Geleceğin Şehirleri", description: "Akıllı kentler", ...unitColors[13], lessons: generateLessons(4131) },
    { id: 415, title: "Sanal Gerçeklik", description: "VR ve AR", ...unitColors[14], lessons: generateLessons(4141) },
    { id: 416, title: "Kuantum Çağı", description: "Fizik ve gelecek", ...unitColors[15], lessons: generateLessons(4151) },
    { id: 417, title: "Nörobilim", description: "Beyin araştırmaları", ...unitColors[16], lessons: generateLessons(4161) },
    { id: 418, title: "Kültürel Miras", description: "UNESCO", ...unitColors[17], lessons: generateLessons(4171) },
    { id: 419, title: "Dilin Evrimi", description: "Linguistik", ...unitColors[18], lessons: generateLessons(4181) },
    { id: 420, title: "B2 Genel Tekrar", description: "Seviye özeti", ...unitColors[19], lessons: generateLessons(4191) },
];


// ===== ALMANCA A1 (30 Ünite: ID 501-530) =====
const germanA1Units: Unit[] = [
    { id: 501, title: "Selamlaşma ve Tanışma", description: "Hallo, Wie heißt du?", ...unitColors[0], lessons: generateLessons(9000, 11) },
    { id: 502, title: "Sayılar 1-20", description: "Eins, Zwei, Drei", ...unitColors[1], lessons: generateLessons(9020, 11) },
    { id: 503, title: "Aile Üyeleri", description: "Mutter, Vater, Schwester", ...unitColors[2], lessons: generateLessons(9040, 11) },
    { id: 504, title: "Renkler", description: "Rot, Blau, Grün", ...unitColors[3], lessons: generateLessons(9060, 11) },
    { id: 505, title: "Yiyecekler", description: "Brot, Käse, Obst", ...unitColors[4], lessons: generateLessons(9080, 11) },
    { id: 506, title: "İçecekler", description: "Wasser, Kaffee, Tee", ...unitColors[5], lessons: generateLessons(9100, 11) },
    { id: 507, title: "Günler ve Aylar", description: "Montag, Januar", ...unitColors[6], lessons: generateLessons(9120, 11) },
    { id: 508, title: "Sayılar 21-100", description: "Einundzwanzig bis Hundert", ...unitColors[7], lessons: generateLessons(9140, 11) },
    { id: 509, title: "Ev Odaları", description: "Schlafzimmer, Küche", ...unitColors[8], lessons: generateLessons(9160, 11) },
    { id: 510, title: "Mobilyalar", description: "Tisch, Stuhl, Bett", ...unitColors[9], lessons: generateLessons(9180, 11) },
    { id: 511, title: "Vücut Bölümleri", description: "Kopf, Arm, Bein", ...unitColors[10], lessons: generateLessons(9200, 11) },
    { id: 512, title: "Giysiler", description: "Hemd, Hose, Kleid", ...unitColors[11], lessons: generateLessons(9220, 11) },
    { id: 513, title: "Hayvanlar", description: "Katze, Hund, Vogel", ...unitColors[12], lessons: generateLessons(9240, 11) },
    { id: 514, title: "Meslekler 1", description: "Arzt, Lehrer, Ingenieur", ...unitColors[13], lessons: generateLessons(9260, 11) },
    { id: 515, title: "Şehirde Yerler", description: "Schule, Markt, Park", ...unitColors[14], lessons: generateLessons(9280, 11) },
    { id: 516, title: "Ulaşım Araçları", description: "Auto, Bus, Zug", ...unitColors[15], lessons: generateLessons(9300, 11) },
    { id: 517, title: "Günlük Rutinler", description: "Aufstehen, Frühstücken", ...unitColors[16], lessons: generateLessons(9320, 11) },
    { id: 518, title: "Saat Kaç?", description: "Wie spät ist es?", ...unitColors[17], lessons: generateLessons(9340, 11) },
    { id: 519, title: "Hava Durumu", description: "Sonnig, Regnerisch", ...unitColors[18], lessons: generateLessons(9360, 11) },
    { id: 520, title: "Hobiler", description: "Sport, Musik, Lesen", ...unitColors[19], lessons: generateLessons(9380, 11) },
    { id: 521, title: "Duygular ve Hisler", description: "Glücklich, Traurig", ...unitColors[0], lessons: generateLessons(9400, 11) },
    { id: 522, title: "Okul ve Sınıf", description: "Buch, Stift, Tafel", ...unitColors[1], lessons: generateLessons(9420, 11) },
    { id: 523, title: "Tatiller ve Bayramlar", description: "Weihnachten, Ostern", ...unitColors[2], lessons: generateLessons(9440, 11) },
    { id: 524, title: "Ülkeler ve Milletler", description: "Woher kommst du?", ...unitColors[3], lessons: generateLessons(9460, 11) },
    { id: 525, title: "Temel Fiiller", description: "Gehen, Kommen, Machen", ...unitColors[4], lessons: generateLessons(9480, 11) },
    { id: 526, title: "Artikeller (der/die/das)", description: "Almanca artikel kuralları", ...unitColors[5], lessons: generateLessons(9500, 11) },
    { id: 527, title: "Akkusativ Hali", description: "Den, Die, Das", ...unitColors[6], lessons: generateLessons(9520, 11) },
    { id: 528, title: "Sıfatlar", description: "Groß, Klein, Schön", ...unitColors[7], lessons: generateLessons(9540, 11) },
    { id: 529, title: "Edatlar", description: "In, Auf, An, Unter", ...unitColors[8], lessons: generateLessons(9560, 11) },
    { id: 530, title: "A1 Tekrar", description: "Seviye özeti", ...unitColors[9], lessons: generateLessons(9580, 11) },
];

// ===== ALMANCA A2 (30 Ünite: ID 531-560) =====
const germanA2Units: Unit[] = [
    { id: 531, title: "Geçmiş Zaman (Perfekt)", description: "Ich habe gemacht", ...unitColors[0], lessons: generateLessons(9600, 11) },
    { id: 532, title: "Geçmiş Zaman 2 (Präteritum)", description: "Ich war, Ich hatte", ...unitColors[1], lessons: generateLessons(9620, 11) },
    { id: 533, title: "Restoranda", description: "Bestellen und Bezahlen", ...unitColors[2], lessons: generateLessons(9640, 11) },
    { id: 534, title: "Alışveriş", description: "Einkaufen und Preise", ...unitColors[3], lessons: generateLessons(9660, 11) },
    { id: 535, title: "Seyahat Planları", description: "Urlaub und Reise", ...unitColors[4], lessons: generateLessons(9680, 11) },
    { id: 536, title: "Otel Rezervasyonu", description: "Zimmer buchen", ...unitColors[5], lessons: generateLessons(9700, 11) },
    { id: 537, title: "Havalimanında", description: "Flughafen und Flug", ...unitColors[6], lessons: generateLessons(9720, 11) },
    { id: 538, title: "Doktorda", description: "Beim Arzt", ...unitColors[7], lessons: generateLessons(9740, 11) },
    { id: 539, title: "Eczanede", description: "In der Apotheke", ...unitColors[8], lessons: generateLessons(9760, 11) },
    { id: 540, title: "Meslekler 2", description: "Berufe und Arbeit", ...unitColors[9], lessons: generateLessons(9780, 11) },
    { id: 541, title: "İş Görüşmesi", description: "Vorstellungsgespräch", ...unitColors[10], lessons: generateLessons(9800, 11) },
    { id: 542, title: "Telefonda", description: "Telefonieren", ...unitColors[11], lessons: generateLessons(9820, 11) },
    { id: 543, title: "E-posta Yazma", description: "Formelle E-Mails", ...unitColors[12], lessons: generateLessons(9840, 11) },
    { id: 544, title: "Duygular", description: "Gefühle ausdrücken", ...unitColors[13], lessons: generateLessons(9860, 11) },
    { id: 545, title: "Karakter Özellikleri", description: "Nett, fleißig, lustig", ...unitColors[14], lessons: generateLessons(9880, 11) },
    { id: 546, title: "Spor ve Fitness", description: "Sportarten", ...unitColors[15], lessons: generateLessons(9900, 11) },
    { id: 547, title: "Müzik ve Sanat", description: "Instrumente, Konzert", ...unitColors[16], lessons: generateLessons(9920, 11) },
    { id: 548, title: "Sinema ve Dizi", description: "Filmgenres", ...unitColors[17], lessons: generateLessons(9940, 11) },
    { id: 549, title: "Teknoloji", description: "Computer, Handy", ...unitColors[18], lessons: generateLessons(9960, 11) },
    { id: 550, title: "Sosyal Medya", description: "Internet und Apps", ...unitColors[19], lessons: generateLessons(9980, 11) },
    { id: 551, title: "Ev ve Taşınma", description: "Miete, Umzug", ...unitColors[0], lessons: generateLessons(10000, 11) },
    { id: 552, title: "Çevre ve Doğa", description: "Umwelt und Natur", ...unitColors[1], lessons: generateLessons(10020, 11) },
    { id: 553, title: "Haberler", description: "Nachrichten lesen", ...unitColors[2], lessons: generateLessons(10040, 11) },
    { id: 554, title: "Kültür ve Gelenekler", description: "Traditionen", ...unitColors[3], lessons: generateLessons(10060, 11) },
    { id: 555, title: "Dativ Hali", description: "Dem, Der, Dem", ...unitColors[4], lessons: generateLessons(10080, 11) },
    { id: 556, title: "Modalverben", description: "Können, Müssen, Dürfen", ...unitColors[5], lessons: generateLessons(10100, 11) },
    { id: 557, title: "Nebensätze", description: "Weil, Dass, Wenn", ...unitColors[6], lessons: generateLessons(10120, 11) },
    { id: 558, title: "Karşılaştırma", description: "Größer, Am größten", ...unitColors[7], lessons: generateLessons(10140, 11) },
    { id: 559, title: "Dönüşlü Fiiller", description: "Sich waschen, freuen", ...unitColors[8], lessons: generateLessons(10160, 11) },
    { id: 560, title: "A2 Tekrar", description: "Seviye özeti", ...unitColors[9], lessons: generateLessons(10180, 11) },
];

// ===== ALMANCA B1 (30 Ünite: ID 561-590) =====
const germanB1Units: Unit[] = [
    { id: 561, title: "Gelecek Zaman (Futur I)", description: "Ich werde machen", ...unitColors[0], lessons: generateLessons(10200, 11) },
    { id: 562, title: "Konjunktiv II", description: "Ich würde, Ich hätte", ...unitColors[1], lessons: generateLessons(10220, 11) },
    { id: 563, title: "Passiv Yapı", description: "Es wird gemacht", ...unitColors[2], lessons: generateLessons(10240, 11) },
    { id: 564, title: "Dolaylı Anlatım", description: "Indirekte Rede", ...unitColors[3], lessons: generateLessons(10260, 11) },
    { id: 565, title: "Genitiv Hali", description: "Des, Der, Des", ...unitColors[4], lessons: generateLessons(10280, 11) },
    { id: 566, title: "Phrasal Verbs 1", description: "Trennbare Verben", ...unitColors[5], lessons: generateLessons(10300, 11) },
    { id: 567, title: "Phrasal Verbs 2", description: "Untrennbare Verben", ...unitColors[6], lessons: generateLessons(10320, 11) },
    { id: 568, title: "Haberler ve Medya", description: "Medien und Presse", ...unitColors[7], lessons: generateLessons(10340, 11) },
    { id: 569, title: "Çevre Sorunları", description: "Umweltprobleme", ...unitColors[8], lessons: generateLessons(10360, 11) },
    { id: 570, title: "Sürdürülebilirlik", description: "Nachhaltigkeit", ...unitColors[9], lessons: generateLessons(10380, 11) },
    { id: 571, title: "Kültür ve Gelenekler", description: "Deutsche Kultur", ...unitColors[10], lessons: generateLessons(10400, 11) },
    { id: 572, title: "Ekonomi Temelleri", description: "Wirtschaft und Geld", ...unitColors[11], lessons: generateLessons(10420, 11) },
    { id: 573, title: "Tartışma Becerileri", description: "Meinungen äußern", ...unitColors[12], lessons: generateLessons(10440, 11) },
    { id: 574, title: "Sunum Yapma", description: "Präsentationen", ...unitColors[13], lessons: generateLessons(10460, 11) },
    { id: 575, title: "Edebiyat 1", description: "Deutsche Literatur", ...unitColors[14], lessons: generateLessons(10480, 11) },
    { id: 576, title: "Akademik Yazma", description: "Aufsatz schreiben", ...unitColors[15], lessons: generateLessons(10500, 11) },
    { id: 577, title: "Bilim ve Teknoloji", description: "Wissenschaft", ...unitColors[16], lessons: generateLessons(10520, 11) },
    { id: 578, title: "Sağlık ve Beslenme", description: "Gesundheit", ...unitColors[17], lessons: generateLessons(10540, 11) },
    { id: 579, title: "Psikoloji Temelleri", description: "Verhalten, Gedanken", ...unitColors[18], lessons: generateLessons(10560, 11) },
    { id: 580, title: "İş Almancası 1", description: "Geschäftsdeutsch", ...unitColors[19], lessons: generateLessons(10580, 11) },
    { id: 581, title: "Plusquamperfekt", description: "Ich hatte gemacht", ...unitColors[0], lessons: generateLessons(10600, 11) },
    { id: 582, title: "Futur II", description: "Ich werde gemacht haben", ...unitColors[1], lessons: generateLessons(10620, 11) },
    { id: 583, title: "Relativsätze", description: "Der Mann, der...", ...unitColors[2], lessons: generateLessons(10640, 11) },
    { id: 584, title: "Kausalsätze", description: "Weil, Da, Denn", ...unitColors[3], lessons: generateLessons(10660, 11) },
    { id: 585, title: "Wunschsätze", description: "Ich wünschte, dass...", ...unitColors[4], lessons: generateLessons(10680, 11) },
    { id: 586, title: "Kollokationen", description: "Wortverbindungen", ...unitColors[5], lessons: generateLessons(10700, 11) },
    { id: 587, title: "Konnektoren", description: "Jedoch, Trotzdem", ...unitColors[6], lessons: generateLessons(10720, 11) },
    { id: 588, title: "Formell vs Informell", description: "Sie vs Du", ...unitColors[7], lessons: generateLessons(10740, 11) },
    { id: 589, title: "Debattieren", description: "Argumente aufbauen", ...unitColors[8], lessons: generateLessons(10760, 11) },
    { id: 590, title: "B1 Tekrar", description: "Seviye özeti", ...unitColors[9], lessons: generateLessons(10780, 11) },
];

// ===== ALMANCA B2 (30 Ünite: ID 591-620) =====
const germanB2Units: Unit[] = [
    { id: 591, title: "İleri Gramer 1", description: "Erweiterte Zeiten", ...unitColors[0], lessons: generateLessons(10800, 11) },
    { id: 592, title: "İleri Gramer 2", description: "Komplexe Strukturen", ...unitColors[1], lessons: generateLessons(10820, 11) },
    { id: 593, title: "Deyimler 1", description: "Redewendungen", ...unitColors[2], lessons: generateLessons(10840, 11) },
    { id: 594, title: "Deyimler 2", description: "Weitere Redewendungen", ...unitColors[3], lessons: generateLessons(10860, 11) },
    { id: 595, title: "Formal Yazışma", description: "Geschäftsbriefe", ...unitColors[4], lessons: generateLessons(10880, 11) },
    { id: 596, title: "Sunum Teknikleri", description: "Fortgeschrittene Präsentation", ...unitColors[5], lessons: generateLessons(10900, 11) },
    { id: 597, title: "Müzakere", description: "Verhandlungsfähigkeiten", ...unitColors[6], lessons: generateLessons(10920, 11) },
    { id: 598, title: "Hukuk Almancası", description: "Rechtsbegriffe", ...unitColors[7], lessons: generateLessons(10940, 11) },
    { id: 599, title: "Tıbbi Almanca", description: "Medizinische Begriffe", ...unitColors[8], lessons: generateLessons(10960, 11) },
    { id: 600, title: "Finans Almancası", description: "Finanzvokabular", ...unitColors[9], lessons: generateLessons(10980, 11) },
    { id: 601, title: "Edebiyat Analizi", description: "Literaturanalyse", ...unitColors[10], lessons: generateLessons(11000, 11) },
    { id: 602, title: "Tartışmalı Konular", description: "Kontroverse Themen", ...unitColors[11], lessons: generateLessons(11020, 11) },
    { id: 603, title: "Akademik Okuma", description: "Wissenschaftliche Texte", ...unitColors[12], lessons: generateLessons(11040, 11) },
    { id: 604, title: "Eleştirel Düşünme", description: "Kritisches Denken", ...unitColors[13], lessons: generateLessons(11060, 11) },
    { id: 605, title: "Uluslararası İlişkiler", description: "Internationale Beziehungen", ...unitColors[14], lessons: generateLessons(11080, 11) },
    { id: 606, title: "Medya Analizi", description: "Medienkompetenz", ...unitColors[15], lessons: generateLessons(11100, 11) },
    { id: 607, title: "İş Almancası 2", description: "Fortgeschrittenes Geschäftsdeutsch", ...unitColors[16], lessons: generateLessons(11120, 11) },
    { id: 608, title: "Proje Yönetimi", description: "Projektmanagement", ...unitColors[17], lessons: generateLessons(11140, 11) },
    { id: 609, title: "Kültürlerarası İletişim", description: "Interkulturelle Kommunikation", ...unitColors[18], lessons: generateLessons(11160, 11) },
    { id: 610, title: "Kariyer Geliştirme", description: "Karriereentwicklung", ...unitColors[19], lessons: generateLessons(11180, 11) },
    { id: 611, title: "Konjunktiv I", description: "Er sagte, er sei...", ...unitColors[0], lessons: generateLessons(11200, 11) },
    { id: 612, title: "Partizipialkonstruktionen", description: "Partizip I und II", ...unitColors[1], lessons: generateLessons(11220, 11) },
    { id: 613, title: "Nominalstil", description: "Nominalisierung", ...unitColors[2], lessons: generateLessons(11240, 11) },
    { id: 614, title: "Erweiterte Passivformen", description: "Vorgangs- und Zustandspassiv", ...unitColors[3], lessons: generateLessons(11260, 11) },
    { id: 615, title: "Wissenschaftliches Schreiben", description: "Akademisches Deutsch", ...unitColors[4], lessons: generateLessons(11280, 11) },
    { id: 616, title: "Aufsatz schreiben", description: "Erörterung und Analyse", ...unitColors[5], lessons: generateLessons(11300, 11) },
    { id: 617, title: "Mündliche Prüfung", description: "Sprechen B2 Niveau", ...unitColors[6], lessons: generateLessons(11320, 11) },
    { id: 618, title: "Hörverstehen", description: "Fortgeschrittenes Hören", ...unitColors[7], lessons: generateLessons(11340, 11) },
    { id: 619, title: "Leseverstehen", description: "Komplexe Texte", ...unitColors[8], lessons: generateLessons(11360, 11) },
    { id: 620, title: "B2 Tekrar", description: "Seviye özeti", ...unitColors[9], lessons: generateLessons(11380, 11) },
];


// Tüm müfredat
export const curriculum: LanguageCurriculum[] = [
    {
        langCode: "es",
        levels: [
            { levelCode: "A1", units: spanishA1Units },
            { levelCode: "A2", units: spanishA2Units },
            { levelCode: "B1", units: spanishB1Units },
            { levelCode: "B2", units: spanishB2Units },
        ],
    },
    {
        langCode: "en",
        levels: [
            { levelCode: "A1", units: englishA1Units },
            { levelCode: "A2", units: englishA2Units },
            { levelCode: "B1", units: englishB1Units },
            { levelCode: "B2", units: englishB2Units },
        ],
    },
    {
        langCode: "fr",
        levels: [
            { levelCode: "A1", units: frenchA1Units },
            { levelCode: "A2", units: frenchA2Units },
            { levelCode: "B1", units: frenchB1Units },
            { levelCode: "B2", units: frenchB2Units },
        ],
    },
    {
        langCode: "de",
        levels: [
            { levelCode: "A1", units: germanA1Units },
            { levelCode: "A2", units: germanA2Units },
            { levelCode: "B1", units: germanB1Units },
            { levelCode: "B2", units: germanB2Units },
        ],
    },
];

// Yardımcı fonksiyonlar
export function getCurriculum(langCode: string, levelCode: string): Unit[] {
    const langCurriculum = curriculum.find(c => c.langCode === langCode);
    if (!langCurriculum) return [];

    const levelCurriculum = langCurriculum.levels.find(l => l.levelCode === levelCode);
    return levelCurriculum?.units || [];
}

export function getUnit(langCode: string, levelCode: string, unitId: number): Unit | undefined {
    const units = getCurriculum(langCode, levelCode);
    return units.find(u => u.id === unitId);
}

export function findUnitById(unitId: number): { langCode: string; levelCode: string; unit: Unit } | null {
    for (const lang of curriculum) {
        for (const level of lang.levels) {
            const unit = level.units.find(u => u.id === unitId);
            if (unit) {
                return { langCode: lang.langCode, levelCode: level.levelCode, unit };
            }
        }
    }
    return null;
}

export function findUnitByLessonId(lessonId: number): { langCode: string; levelCode: string; unit: Unit } | null {
    for (const lang of curriculum) {
        for (const level of lang.levels) {
            const unit = level.units.find(u => u.lessons.some(l => l.id === lessonId));
            if (unit) {
                return { langCode: lang.langCode, levelCode: level.levelCode, unit };
            }
        }
    }
    return null;
}

export function getLessonIdForUnit(
    unitId: number,
    lessonType: LessonType,
    quizIndex?: number
): number | null {
    const found = findUnitById(unitId);
    if (!found) return null;

    const { unit } = found;

    if (lessonType === "LESSON") {
        const lessonList = unit.lessons.filter(l => l.type === "LESSON");
        const index = Math.max(0, (quizIndex ?? 1) - 1);
        return lessonList[index]?.id ?? null;
    }

    const lesson = unit.lessons.find(l => l.type === lessonType);
    return lesson?.id ?? null;
}

// İstatistikler
export function getCurriculumStats(langCode: string) {
    const lang = curriculum.find(c => c.langCode === langCode);
    if (!lang) return { levels: 0, units: 0, lessons: 0 };

    let totalUnits = 0;
    let totalLessons = 0;

    lang.levels.forEach(level => {
        totalUnits += level.units.length;
        level.units.forEach(unit => {
            totalLessons += unit.lessons.length;
        });
    });

    return {
        levels: lang.levels.length,
        units: totalUnits,
        lessons: totalLessons,
    };
}



