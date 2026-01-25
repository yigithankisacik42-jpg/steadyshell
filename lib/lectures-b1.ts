/**
 * SteadyShell Konu Anlatımı Veritabanı - İspanyolca B1
 * 20 Ünite (ID: 41-60), her biri için detaylı konu anlatımı
 */

import { UnitLecture, LectureSlide } from './lectures';

// ===== ÜNİTE 41: GELECEK ZAMAN 1 =====
const unit41Lecture: UnitLecture = {
    unitId: 41, title: "Gelecek Zaman 1 - Futuro Simple", language: "İspanyolca", level: "B1",
    slides: [
        {
            id: 1,
            type: "intro",
            title: "Mantık: Makas Yok, Yapıştır Geç ✂️🚫",
            content: "Şimdiki zamanda veya geçmiş zamanda fiillerin kökünü bulmak için sonundaki -ar, -er, -ir eklerini atardık, hatırlıyor musun? Unut gitsin. Futuro Simple'da makas kullanmıyoruz. Fiilin orijinal haline (sözlükte gördüğün o uzun haline) hiç dokunmadan, doğrudan kuyruğuna ek yapıştırıyoruz.",
            tip: "Hablar (Konuşmak) -> Hablar + é -> Hablaré (Konuşacağım)"
        },
        {
            id: 2,
            type: "grammar",
            title: "Formül ve Ekler (Tek Tip Tarife) 📝",
            rules: [
                {
                    rule: "Tek Tip Ekler",
                    explanation: "Fiil ister -ar, ister -er, ister -ir ile bitsin; hepsi aynı ekleri alır.",
                    examples: ["Comer + é = Comeré (Yiyeceğim)", "Comer + ás = Comerás (Yiyeceksin)", "Comer + á = Comerá (Yiyecek)"]
                },
                {
                    rule: "Kişi Ekleri Tablosu",
                    explanation: "Ezberlemen gereken tek liste:",
                    examples: [
                        "Ben (Yo) -> **-é**",
                        "Sen (Tú) -> **-ás**",
                        "O (Él/Ella) -> **-á**",
                        "Biz (Nosotros) -> **-emos**",
                        "Siz (Vosotros) -> **-éis**",
                        "Onlar (Ellos) -> **-án**"
                    ]
                }
            ],
            note: "⚠️ Koçun Uyarısı: 'Biz' (Nosotros) hariç hepsinde vurgu işareti var! Vurguyu eke bas: Ko-me-RE!"
        },
        {
            id: 3,
            type: "practice",
            title: "Ne Zaman Kullanacağız? (1/2) 🕰️",
            content: "Bu zamanın 2 temel görevi:",
            points: [
                "**1. Uzak Gelecek ve Tahminler (Will):** Planlanmamış veya hayal edilen gelecek. 'Viajaré a España algún día.' (Bir gün İspanya'ya gideceğim)",
                "**2. Söz Verme (Promise):** Ciddiyet katar. 'Te prometo, estudiaré mucho.' (Söz veriyorum, çok çalışacağım)",
                "Voy a (Planlı) vs Futuro Simple (Niyet/Söz)"
            ]
        },
        {
            id: 4,
            type: "practice",
            title: "B1 Farkı: Şimdiki Zaman Tahmini 🌟",
            content: "İspanyollar bu zaman ekini, 'Şu an ne oluyor acaba?' diye tahmin yürütmek için kullanır. Türkçedeki '-dir, -dır' veya 'herhalde' anlamını verir.",
            points: [
                "Senaryo: Kapı çalıyor. Kim?",
                "Türkçe: 'Ahmet'tir.' (Şu anki tahmin)",
                "İspanyolca: **Será** Ahmet. (Ser + á)",
                "Senaryo: Saat soruluyor.",
                "İspanyolca: No sé, **serán** las tres. (Bilmiyorum, saat 3 falandır)"
            ]
        },
        {
            id: 5,
            type: "summary",
            title: "Özet 📝",
            points: [
                "Makas yok, fiilin sonuna ekle!",
                "Ekler: -é, -ás, -á, -emos, -éis, -án",
                "Vurgulara dikkat (Ko-me-RE!)",
                "Kullanım: Gelecek, Söz Verme ve Şimdiki Zaman Tahmini (B1 Farkı)"
            ]
        }
    ]
};

// ===== ÜNİTE 42: GELECEK ZAMAN 2 =====
const unit42Lecture: UnitLecture = {
    unitId: 42, title: "Gelecek Zaman 2 - Düzensiz Fiiller", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Düzensiz Gelecek Fiilleri 🔄", content: "Bazı fiillerin kökleri gelecek zamanda değişir. Ekler aynı kalır (-é, -ás, -á...) ama kök farklılaşır.", tip: "İyi haber: Düzensiz kökler gelecek zaman ve koşullu kipte AYNI!" },
        {
            id: 2, type: "grammar", title: "Düzensiz Kökler 📝", rules: [
                { rule: "Kök Değişimleri", explanation: "Bu fiillerin kökleri değişir, ama ekler aynıdır.", examples: [] }
            ], points: [
                "Tener → Tendr- (Tendré, tendrás...)",
                "Poder → Podr- (Podré, podrás...)",
                "Saber → Sabr- (Sabré, sabrás...)",
                "Venir → Vendr- (Vendré, vendrás...)",
                "Salir → Saldr- (Saldré, saldrás...)",
                "Hacer → Har- (Haré, harás...)",
                "Decir → Dir- (Diré, dirás...)",
                "Haber → Habr- (Habrá - sadece 3. tekil)"
            ]
        },
        { id: 3, type: "example", title: "Örnek Kullanımlar", content: "Düzensiz fiillerle cümleler:", points: ["Mañana tendré una reunión. (Yarın toplantım olacak)", "Podré ayudarte el viernes. (Cuma sana yardım edebileceğim)", "Habrá una fiesta el sábado. (Cumartesi parti olacak)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Kökler değişir, ekler AYNI", "Tener→Tendr, Poder→Podr, Saber→Sabr", "Hacer→Har, Decir→Dir, Haber→Habr"] }
    ]
};

// ===== ÜNİTE 43: EMİR KİPİ (OLUMLU) =====
const unit43Lecture: UnitLecture = {
    unitId: 43, title: "Emir Kipi (Olumlu) - Imperativo Afirmativo", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Emir Ver! 📢", content: "Emir kipi, birine bir şey yapmasını söylemek için kullanılır. Olumlu emir 'Yap!' anlamındadır.", tip: "Tú formu şimdiki zamanın 3. kişisine benzer!" },
        {
            id: 2, type: "grammar", title: "Düzenli Fiillerin Emir Kipi 📝", rules: [
                { rule: "Tú için", explanation: "-AR fiiller -a, -ER/-IR fiiller -e takısı alır.", examples: ["Hablar → ¡Habla! (Konuş!)", "Comer → ¡Come! (Ye!)", "Escribir → ¡Escribe! (Yaz!)"] }
            ]
        },
        {
            id: 3, type: "grammar", title: "Düzensiz Emir Fiilleri (Tú) ⚠️", rules: [
                { rule: "Ezberlenmesi Gerekenler", explanation: "Bu 8 fiil tamamen düzensizdir.", examples: [] }
            ], points: [
                "Venir → **Ven** (Gel!)",
                "Hacer → **Haz** (Yap!)",
                "Decir → **Di** (Söyle!)",
                "Salir → **Sal** (Çık!)",
                "Tener → **Ten** (Al/Tut!)",
                "Poner → **Pon** (Koy!)",
                "Ser → **Sé** (Ol!)",
                "Ir → **Ve** (Git!)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Düzenli: Habla, Come, Escribe", "Düzensiz (8 tane): Ven, Haz, Di, Sal, Ten, Pon, Sé, Ve", "Usted için Subjuntivo kullanılır"] }
    ]
};

// ===== ÜNİTE 44: EMİR KİPİ (OLUMSUZ) =====
const unit44Lecture: UnitLecture = {
    unitId: 44, title: "Emir Kipi (Olumsuz) - Imperativo Negativo", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Yapma! 🚫", content: "Olumsuz emir, birine bir şey yapMAmasını söylemek için kullanılır. Olumlu emirden farklı olarak Subjuntivo formları kullanılır.", tip: "No + Subjuntivo = Olumsuz Emir" },
        {
            id: 2, type: "grammar", title: "Olumsuz Emir Çekimi 📝", rules: [
                { rule: "Formül", explanation: "No + Subjuntivo Presente. Olumlu emirle karşılaştır:", examples: [] }
            ], points: [
                "Hablar: **Habla** (Konuş!) ↔ **No hables** (Konuşma!)",
                "Comer: **Come** (Ye!) ↔ **No comas** (Yeme!)",
                "Venir: **Ven** (Gel!) ↔ **No vengas** (Gelme!)",
                "Hacer: **Haz** (Yap!) ↔ **No hagas** (Yapma!)",
                "Decir: **Di** (Söyle!) ↔ **No digas** (Söyleme!)",
                "Ir: **Ve** (Git!) ↔ **No vayas** (Gitme!)"
            ]
        },
        { id: 3, type: "example", title: "Günlük Kullanım", content: "Yaygın olumsuz emirler:", points: ["¡No vengas tarde! (Geç gelme!)", "¡No hagas ruido! (Gürültü yapma!)", "¡No te preocupes! (Endişelenme!)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Olumsuz emir = No + Subjuntivo", "Tú: -AR → -es, -ER/-IR → -as", "Olumlu ve olumsuz formlar FARKLI!"] }
    ]
};

// ===== ÜNİTE 45: SUBJUNTİVO GİRİŞ =====
const unit45Lecture: UnitLecture = {
    unitId: 45, title: "Subjuntivo - İstek Kipi Giriş", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "İspanyolca'nın En Zor Konusu! 😱", content: "Subjuntivo, İspanyolca'yı diğer dillerden ayıran önemli bir özelliktir. Şüphe, istek, duygu, emir ve olasılık ifade eder. Tetikleyici kelimelerden sonra kullanılır.", tip: "İngilizce'de yok, Türkçe'de 'keşke' yapısına benzer!" },
        {
            id: 2, type: "grammar", title: "Subjuntivo Presente Çekimi 📝", rules: [
                { rule: "Tersine Çevirme!", explanation: "-AR fiiller şimdi -E, -ER/-IR fiiller şimdi -A alır. (Şimdiki zamanın tam tersi!)", examples: [] }
            ], points: [
                "Hablar → Habl**e**, habl**es**, habl**e**, habl**emos**, habl**éis**, habl**en**",
                "Comer → Com**a**, com**as**, com**a**, com**amos**, com**áis**, com**an**",
                "Vivir → Viv**a**, viv**as**, viv**a**, viv**amos**, viv**áis**, viv**an**"
            ]
        },
        {
            id: 3, type: "grammar", title: "Tetikleyici İfadeler 🎯", rules: [
                { rule: "Bu ifadelerden sonra Subjuntivo kullan:", explanation: "İstek, şüphe, duygu veya olasılık bildiren ana cümleden sonra", examples: [] }
            ], points: [
                "**Espero que**... (Umarım ki...)",
                "**Quiero que**... (İstiyorum ki...)",
                "**Ojalá**... (Keşke.../Umarım...)",
                "**Dudo que**... (Şüpheliyim ki...)",
                "**Es posible que**... (Mümkün ki...)",
                "**Es necesario que**... (Gerekli ki...)"
            ]
        },
        { id: 4, type: "example", title: "Örnek Cümleler", content: "Subjuntivo pratiği:", points: ["Espero que **estés** bien. (Umarım iyisindir)", "Quiero que **vengas**. (Gelmeni istiyorum)", "Ojalá **haga** buen tiempo. (Keşke hava güzel olsa)"] },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Subjuntivo = Şüphe, istek, duygu, olasılık", "Çekim: -AR → -e, -ER/-IR → -a", "Tetikleyicilerden sonra kullan"] }
    ]
};

// ===== ÜNİTE 46: ŞART CÜMLELERİ =====
const unit46Lecture: UnitLecture = {
    unitId: 46, title: "Şart Cümleleri - Condicional", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Keşke Yapabilsem... 💭", content: "Koşullu kip, hayalleri, istekleri ve kibar ricaları ifade etmek için kullanılır. Türkçe'deki '-ecektim', '-ardım' anlamındadır.", tip: "Ekler gelecek zamana benzer, ama farklı!" },
        {
            id: 2, type: "grammar", title: "Condicional Simple Çekimi 📝", rules: [
                { rule: "Formül", explanation: "Mastar + ekler. Düzensiz fiillerin kökleri Futuro ile AYNI!", examples: [] }
            ], points: [
                "Yo hablar**ía** (Konuşurdum)",
                "Tú hablar**ías** (Konuşurdun)",
                "Él hablar**ía** (Konuşurdu)",
                "Nosotros hablar**íamos** (Konuşurduk)",
                "Vosotros hablar**íais** (Konuşurdunuz)",
                "Ellos hablar**ían** (Konuşurlardı)"
            ]
        },
        {
            id: 3, type: "grammar", title: "Kullanım Alanları 🎯", rules: [
                { rule: "Kibar İstek", explanation: "Querría/Podría... şeklinde kibar ricalar", examples: ["Querría un café. (Bir kahve isterdim)"] },
                { rule: "Tavsiye", explanation: "Deberías... şeklinde tavsiyeler", examples: ["Deberías descansar. (Dinlenmelisin)"] },
                { rule: "Hayal", explanation: "Me gustaría... şeklinde hayaller", examples: ["Me gustaría vivir en España. (İspanya'da yaşamak isterdim)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Ekler: -ía, -ías, -ía, -íamos, -íais, -ían", "Düzensiz kökler Futuro ile aynı", "Kibar rica, tavsiye, hayal için kullanılır"] }
    ]
};

// ===== ÜNİTE 47: ÇEVRE VE DOĞA =====
const unit47Lecture: UnitLecture = {
    unitId: 47, title: "Çevre ve Doğa", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Dünyamızı Koruyalım 🌍", content: "Çevre sorunları hakkında konuşmak için bu ünite çok önemli. İklim değişikliği, kirlilik ve sürdürülebilirlik kavramlarını öğreneceksin.", tip: "Zorunluluk yapıları (hay que, tener que, deber) bu konuda sık kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Çevre Kelimeleri", words: [
                { target: "El medio ambiente", native: "Çevre", pronunciation: "ME-dio am-BIEN-te" },
                { target: "La contaminación", native: "Kirlilik", pronunciation: "kon-ta-mi-na-SION" },
                { target: "El cambio climático", native: "İklim değişikliği", pronunciation: "KAM-bio kli-MA-ti-ko" },
                { target: "Reciclar", native: "Geri dönüştürmek", pronunciation: "re-si-KLAR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Zorunluluk Yapıları 📝", rules: [
                { rule: "Hay que + mastar", explanation: "Genel zorunluluk (Herkes için)", examples: ["Hay que reciclar más. (Daha çok geri dönüştürmek gerekiyor)"] },
                { rule: "Tener que + mastar", explanation: "Kişisel zorunluluk", examples: ["Tenemos que proteger la naturaleza. (Doğayı korumamız gerekiyor)"] },
                { rule: "Deber + mastar", explanation: "Ahlaki zorunluluk", examples: ["Debemos reducir el consumo. (Tüketimi azaltmalıyız)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Çevre kelimeleri: medio ambiente, contaminación, reciclar", "Hay que = Genel zorunluluk", "Tener que = Kişisel, Deber = Ahlaki"] }
    ]
};

// ===== ÜNİTE 48: EĞİTİM VE OKUL =====
const unit48Lecture: UnitLecture = {
    unitId: 48, title: "Eğitim ve Okul", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Öğrenmeye Devam 📚", content: "Eğitim hayatından, üniversiteden ve akademik başarılardan bahsetmeyi öğreneceksin.", tip: "Geçmiş deneyimler için Pretérito Perfecto (He estudiado) kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Eğitim Kelimeleri", words: [
                { target: "La carrera", native: "Bölüm/Kariyer", pronunciation: "ka-RRE-ra" },
                { target: "La beca", native: "Burs", pronunciation: "BE-ka" },
                { target: "Aprobar", native: "Geçmek (Sınav)", pronunciation: "a-pro-BAR" },
                { target: "Suspender", native: "Kalmak (Sınav)", pronunciation: "sus-pen-DER" }
            ]
        },
        { id: 3, type: "example", title: "Akademik Konuşmalar", content: "Eğitim hakkında konuşurken:", points: ["Estudio la carrera de medicina. (Tıp okuyorum)", "He aprobado todos los exámenes. (Tüm sınavları geçtim)", "Me licencié el año pasado. (Geçen yıl mezun oldum)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Carrera = Bölüm, Beca = Burs", "Aprobar = Geçmek, Suspender = Kalmak", "He + participio = Deneyim anlatma"] }
    ]
};

// ===== ÜNİTE 49: TEKNOLOJİ VE BİLİM =====
const unit49Lecture: UnitLecture = {
    unitId: 49, title: "Teknoloji ve Bilim", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Dijital Çağ 💻", content: "Teknolojik gelişmeler, yapay zeka, veri ve inovasyon hakkında konuşmayı öğreneceksin.", tip: "Gelecek tahminleri için Futuro kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Teknoloji Kelimeleri", words: [
                { target: "El avance", native: "İlerleme", pronunciation: "a-VAN-se" },
                { target: "La inteligencia artificial", native: "Yapay zeka", pronunciation: "in-te-li-HEN-sia" },
                { target: "Desarrollar", native: "Geliştirmek", pronunciation: "de-sa-rro-LLAR" },
                { target: "El dato", native: "Veri", pronunciation: "DA-to" }
            ]
        },
        { id: 3, type: "example", title: "Teknoloji Hakkında", content: "Gelecek tahminleri:", points: ["La tecnología cambiará nuestras vidas. (Teknoloji hayatımızı değiştirecek)", "La IA podría reemplazar muchos trabajos. (Yapay zeka birçok işin yerini alabilir)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Avance = İlerleme, Desarrollar = Geliştirmek", "IA = Inteligencia Artificial = Yapay Zeka", "Futuro + Condicional = Tahminler"] }
    ]
};

// ===== ÜNİTE 50: MEDYA VE HABERLER =====
const unit50Lecture: UnitLecture = {
    unitId: 50, title: "Medya ve Haberler", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Dünyayı Takip Et 📰", content: "Haberler, basın ve medya hakkında konuşmayı öğreneceksin. Dolaylı anlatıma giriş yapacağız.", tip: "Haberler genellikle pasif yapıyla verilir." },
        {
            id: 2, type: "vocabulary", title: "Medya Kelimeleri", words: [
                { target: "La noticia", native: "Haber", pronunciation: "no-TI-sia" },
                { target: "El periódico", native: "Gazete", pronunciation: "pe-RI-o-di-ko" },
                { target: "Publicar", native: "Yayınlamak", pronunciation: "pu-bli-KAR" },
                { target: "En directo", native: "Canlı yayın", pronunciation: "en di-REK-to" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Dolaylı Anlatım Giriş 📝", rules: [
                { rule: "Başkasının sözlerini aktarma", explanation: "Dijo que... (... dedi)", examples: ["El ministro dijo que era importante. (Bakan önemli olduğunu söyledi)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Noticia = Haber, Periódico = Gazete", "Dijo que... = ... dedi ki", "En directo = Canlı yayın"] }
    ]
};

// ===== ÜNİTE 51: SAĞLIK VE BESLENME =====
const unit51Lecture: UnitLecture = {
    unitId: 51, title: "Sağlık ve Beslenme", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Sağlıklı Yaşam 🍎", content: "Diyet, beslenme ve sağlıklı yaşam hakkında konuşmayı öğreneceksin. Tavsiye yapıları sık kullanılır.", tip: "Deberías + mastar = Tavsiye" },
        {
            id: 2, type: "vocabulary", title: "Sağlık Kelimeleri", words: [
                { target: "La dieta", native: "Diyet", pronunciation: "DIE-ta" },
                { target: "Saludable", native: "Sağlıklı", pronunciation: "sa-lu-DA-ble" },
                { target: "El nutriente", native: "Besin maddesi", pronunciation: "nu-tri-EN-te" },
                { target: "Adelgazar", native: "Zayıflamak", pronunciation: "a-del-ga-SAR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Tavsiye Yapıları 📝", rules: [
                { rule: "Deberías + mastar", explanation: "Yapmalısın", examples: ["Deberías comer más verduras. (Daha çok sebze yemelisin)"] },
                { rule: "Te recomiendo que + subjuntivo", explanation: "Tavsiye ederim ki", examples: ["Te recomiendo que hagas ejercicio. (Egzersiz yapmanı tavsiye ederim)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Saludable = Sağlıklı, Dieta = Diyet", "Deberías = Yapmalısın (Tavsiye)", "Te recomiendo que + Subjuntivo"] }
    ]
};

// ===== ÜNİTE 52: İLİŞKİLER =====
const unit52Lecture: UnitLecture = {
    unitId: 52, title: "İlişkiler ve Sosyal Hayat", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "İnsan İlişkileri ❤️", content: "Dostluk, aşk ve sosyal ilişkiler hakkında konuşmayı öğreneceksin. Dönüşlü fiiller bu konuda çok kullanılır.", tip: "İlişki fiillerinin çoğu dönüşlüdür: -se ile biter." },
        {
            id: 2, type: "vocabulary", title: "İlişki Kelimeleri", words: [
                { target: "La amistad", native: "Dostluk", pronunciation: "a-mis-TAD" },
                { target: "Enamorarse", native: "Aşık olmak", pronunciation: "e-na-mo-RAR-se" },
                { target: "Reconciliarse", native: "Barışmak", pronunciation: "re-kon-si-LIAR-se" },
                { target: "Confiar", native: "Güvenmek", pronunciation: "kon-fi-AR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Dönüşlü Fiiller 📝", rules: [
                { rule: "İlişki Fiilleri", explanation: "Bu fiiller dönüşlü veya karşılıklıdır", examples: [] }
            ], points: [
                "Enamor**arse** (Aşık olmak) → Me enamoré",
                "Cas**arse** (Evlenmek) → Nos casamos",
                "Divorci**arse** (Boşanmak) → Se divorciaron",
                "Reconcili**arse** (Barışmak) → Nos reconciliamos"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Amistad = Dostluk, Enamorarse = Aşık olmak", "Dönüşlü fiiller: me, te, se, nos, os, se", "Casarse, divorciarse, reconciliarse"] }
    ]
};

// ===== ÜNİTE 53: SANAT VE KÜLTÜR =====
const unit53Lecture: UnitLecture = {
    unitId: 53, title: "Sanat ve Kültür", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Sanat Dünyası 🎨", content: "Resim, heykel, dans ve müzik hakkında konuşmayı öğreneceksin. İspanyol sanatçılar hakkında bilgi edineceksin.", tip: "İspanya: Picasso, Dalí, Goya, Velázquez..." },
        {
            id: 2, type: "vocabulary", title: "Sanat Kelimeleri", words: [
                { target: "La obra", native: "Eser", pronunciation: "O-bra" },
                { target: "El cuadro", native: "Tablo", pronunciation: "KUA-dro" },
                { target: "La exposición", native: "Sergi", pronunciation: "eks-po-si-SION" },
                { target: "Contemporáneo", native: "Çağdaş", pronunciation: "kon-tem-po-RA-neo" }
            ]
        },
        { id: 3, type: "example", title: "Sanat Hakkında", content: "Sanat tartışmaları:", points: ["Es una obra maestra. (Bu bir başyapıt)", "Fui a una exposición de arte contemporáneo. (Çağdaş sanat sergisine gittim)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Obra = Eser, Cuadro = Tablo", "Exposición = Sergi", "Contemporáneo = Çağdaş"] }
    ]
};

// ===== ÜNİTE 54: POLİTİKA VE TOPLUM =====
const unit54Lecture: UnitLecture = {
    unitId: 54, title: "Politika ve Toplum", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Toplumsal Konular 🌐", content: "Hükümet, seçimler, haklar ve toplumsal konular hakkında konuşmayı öğreneceksin.", tip: "Politik haberlerde pasif yapı sıkça kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Politika Kelimeleri", words: [
                { target: "El gobierno", native: "Hükümet", pronunciation: "go-BIER-no" },
                { target: "Votar", native: "Oy vermek", pronunciation: "vo-TAR" },
                { target: "El derecho", native: "Hak", pronunciation: "de-RE-cho" },
                { target: "La igualdad", native: "Eşitlik", pronunciation: "i-gual-DAD" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Görüş Bildirme 📝", rules: [
                { rule: "Creo que + İndicativo", explanation: "Emin olduğunda", examples: ["Creo que tienen razón. (Haklı olduklarını düşünüyorum)"] },
                { rule: "No creo que + Subjuntivo", explanation: "Şüphe duyduğunda", examples: ["No creo que tengan razón. (Haklı olduklarını düşünmüyorum)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Gobierno = Hükümet, Votar = Oy vermek", "Creo que + İndicativo (Emin)", "No creo que + Subjuntivo (Şüphe)"] }
    ]
};

// ===== ÜNİTE 55: DOLAYLI ANLATIM =====
const unit55Lecture: UnitLecture = {
    unitId: 55, title: "Dolaylı Anlatım - Estilo Indirecto", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Başkasının Sözlerini Aktarma 🗣️", content: "Birinin söylediklerini aktarırken zaman uyumu yapılır. Ana cümle geçmişteyse, yan cümledeki zaman da geriye kayar.", tip: "Dijo que... = ... dedi ki" },
        {
            id: 2, type: "grammar", title: "Zaman Kayması 📝", rules: [
                { rule: "Zaman Uyumu", explanation: "Ana cümle geçmişte ise zaman geriye kayar", examples: [] }
            ], points: [
                "Presente → Imperfecto: 'Estoy bien' → Dijo que **estaba** bien",
                "Perfecto → Pluscuamperfecto: 'He comido' → Dijo que **había comido**",
                "Futuro → Condicional: 'Iré' → Dijo que **iría**",
                "Imperativo → Subjuntivo: '¡Ven!' → Le dijo que **viniera**"
            ]
        },
        { id: 3, type: "example", title: "Örnekler", content: "Dolaylı anlatım pratiği:", points: ["'Tengo hambre' → Dijo que tenía hambre. (Aç olduğunu söyledi)", "'Vendré mañana' → Dijo que vendría mañana. (Yarın geleceğini söyledi)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Dijo que... = ... dedi ki", "Presente → Imperfecto", "Futuro → Condicional"] }
    ]
};

// ===== ÜNİTE 56: GEÇMİŞ ZAMAN 3 =====
const unit56Lecture: UnitLecture = {
    unitId: 56, title: "Geçmiş Zaman 3 - Pluscuamperfecto", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Geçmişin Geçmişi ⏪", content: "Pretérito Pluscuamperfecto, geçmişte başka bir olaydan ÖNCE tamamlanmış eylemleri anlatır. Türkçe'deki '-mıştı' anlamındadır.", tip: "Había + participio = ...mıştı" },
        {
            id: 2, type: "grammar", title: "Pluscuamperfecto Çekimi 📝", rules: [
                { rule: "Formül", explanation: "Haber'in Imperfecto + Participio", examples: [] }
            ], points: [
                "Yo **había** comido (Yemişt**im**)",
                "Tú **habías** llegado (Gelmişt**in**)",
                "Él **había** terminado (Bitirmişt**i**)",
                "Nosotros **habíamos** visto (Görmüşt**ük**)",
                "Vosotros **habíais** dicho (Söylemişt**iniz**)",
                "Ellos **habían** hecho (Yapmışlardı)"
            ]
        },
        { id: 3, type: "example", title: "Örnekler", content: "Pluscuamperfecto kullanımı:", points: ["Cuando llegué, ya había terminado. (Geldiğimde çoktan bitmişti)", "Nunca había visto algo así. (Böyle bir şey hiç görmemiştim)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Había + participio = ...mıştı", "Geçmişte başka bir olaydan ÖNCE", "Cuando llegué, ya había..."] }
    ]
};

// ===== ÜNİTE 57: POR VS PARA =====
const unit57Lecture: UnitLecture = {
    unitId: 57, title: "Bağlaçlar - Por vs Para", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "En Kafa Karıştırıcı Konu! 🤯", content: "Por ve Para ikisi de 'için' anlamına gelebilir ama kullanımları çok farklıdır. Bu ünitede bu farkları öğreneceksin.", tip: "POR = Sebep/Neden, PARA = Amaç/Hedef" },
        {
            id: 2, type: "grammar", title: "Por vs Para 📝", rules: [
                { rule: "POR (Sebep/Neden)", explanation: "Bir şeyin nedeni, sebebi, değişimi için", examples: ["Gracias **por** tu ayuda. (Yardımın için teşekkürler - SEBEP)"] },
                { rule: "PARA (Amaç/Hedef)", explanation: "Bir şeyin amacı, hedefi, alıcısı için", examples: ["Estudio **para** aprender. (Öğrenmek için çalışıyorum - AMAÇ)"] }
            ]
        },
        {
            id: 3, type: "grammar", title: "Diğer Bağlaçlar 📝", rules: [
                { rule: "Önemli Bağlaçlar", explanation: "Cümleleri bağlayan ifadeler", examples: [] }
            ], points: [
                "**Sin embargo** = Ancak/Bununla birlikte",
                "**Además** = Ayrıca",
                "**Por lo tanto** = Dolayısıyla",
                "**A pesar de** = ...e rağmen",
                "**Mientras que** = ... iken"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["POR = Sebep (Gracias por...)", "PARA = Amaç (Estudio para...)", "Sin embargo, Además, Por lo tanto..."] }
    ]
};

// ===== ÜNİTE 58: DEYİMLER =====
const unit58Lecture: UnitLecture = {
    unitId: 58, title: "Deyimler ve Atasözleri", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Renkli İfadeler 🎨", content: "Deyimler ve atasözleri, dili daha renkli ve doğal hale getirir. Bu ünitede en yaygın İspanyol deyimlerini öğreneceksin.", tip: "Deyimler kelimelerin tek tek anlamlarından farklıdır!" },
        {
            id: 2, type: "vocabulary", title: "Yaygın Deyimler", words: [
                { target: "Costar un ojo de la cara", native: "Çok pahalıya mal olmak", pronunciation: "kos-TAR un O-ho" },
                { target: "Meter la pata", native: "Pot kırmak", pronunciation: "me-TER la PA-ta" },
                { target: "Echar una mano", native: "Yardım etmek", pronunciation: "e-CHAR u-na MA-no" },
                { target: "Estar en las nubes", native: "Dalgın olmak", pronunciation: "es-TAR en las NU-bes" }
            ]
        },
        { id: 3, type: "example", title: "Atasözleri", content: "Yaygın atasözleri:", points: ["Más vale tarde que nunca. (Geç olsun güç olmasın)", "A quien madruga, Dios le ayuda. (Erken kalkan yol alır)", "No hay mal que por bien no venga. (Her işte bir hayır vardır)"] },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Deyimler mecazi anlam taşır", "Costar un ojo = Çok pahalı", "Más vale tarde que nunca = Geç olsun güç olmasın"] }
    ]
};

// ===== ÜNİTE 59: İŞ DÜNYASI =====
const unit59Lecture: UnitLecture = {
    unitId: 59, title: "İş Dünyası (İleri)", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Profesyonel Hayat 💼", content: "İş görüşmeleri, toplantılar ve profesyonel iletişim için gereken ileri düzey ifadeleri öğreneceksin.", tip: "İş dünyasında resmi dil (Usted) kullanılır." },
        {
            id: 2, type: "vocabulary", title: "İş Kelimeleri", words: [
                { target: "El contrato", native: "Sözleşme", pronunciation: "kon-TRA-to" },
                { target: "Despedir", native: "İşten çıkarmak", pronunciation: "des-pe-DIR" },
                { target: "El aumento", native: "Zam", pronunciation: "au-MEN-to" },
                { target: "Negociar", native: "Pazarlık etmek", pronunciation: "ne-go-SIAR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Resmi Dil 📝", rules: [
                { rule: "Kibar Ricalar", explanation: "İş ortamında kibar ifadeler", examples: ["¿Podría usted enviarme el informe? (Raporu gönderebilir misiniz?)", "Le agradecería que... (Size minnettar olurdum eğer...)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Contrato = Sözleşme, Aumento = Zam", "¿Podría usted...? = Kibar rica", "Usted formu = Resmi"] }
    ]
};

// ===== ÜNİTE 60: B1 GENEL TEKRAR =====
const unit60Lecture: UnitLecture = {
    unitId: 60, title: "B1 Genel Tekrar ve Bitiş", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Tebrikler! 🎉🎊🎉", content: "B1 seviyesini başarıyla tamamladın! Artık orta seviye İspanyolca konuşabilirsin. Günlük hayatta, seyahatte ve işte İspanyolca ile iletişim kurabilirsin.", tip: "B2'ye hazırsın!" },
        {
            id: 2, type: "summary", title: "B1'de Öğrendiklerin", points: [
                "✓ Futuro Simple (Gelecek Zaman)",
                "✓ Condicional Simple (Koşullu Kip)",
                "✓ Imperativo (Emir Kipi)",
                "✓ Subjuntivo Presente (İstek Kipi)",
                "✓ Pretérito Pluscuamperfecto",
                "✓ Estilo Indirecto (Dolaylı Anlatım)",
                "✓ Por vs Para",
                "✓ Bağlaçlar ve Deyimler"
            ]
        },
        {
            id: 3, type: "summary", title: "Bundan Sonra...", points: [
                "📺 İspanyolca dizi ve film izle",
                "📚 İspanyolca kitap oku",
                "🗣️ Konuşma pratiği yap",
                "✍️ İspanyolca günlük tut",
                "🎓 B2 seviyesine geç!"
            ]
        },
        { id: 4, type: "summary", title: "¡Felicidades! 🎉", points: ["B1 Seviyesini Tamamladın!", "Orta seviye İspanyolca konuşabilirsin", "Günlük hayatta iletişim kurabilirsin", "B2'ye hazırsın!"], cta: "Sertifikanı al!" }
    ]
};

// ===== YENİ B1 ÜNİTELERİ (81-90) =====

const unit81Lecture: UnitLecture = {
    unitId: 81, title: "Ser vs Estar İleri", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Ser vs Estar İleri 🧠", content: "Bu derste ser ve estar arasındaki ileri düzey farkları öğreneceksin.", tip: "Aynı sıfat, farklı anlam!" },
        { id: 2, type: "grammar", title: "Sıfatlara Göre Değişen Anlam", rules: [{ rule: "Ser = kalıcı özellik", explanation: "Kişinin doğasına ait özellikler", examples: ["Ser listo = Zeki olmak", "Ser aburrido = Sıkıcı olmak"] }], points: ["Estar = geçici durum", "Estar listo = Hazır olmak", "Estar aburrido = Sıkılmış olmak"] },
        { id: 3, type: "practice", title: "Pratik", content: "Boşlukları doldurun:", points: ["Él _____ muy listo (zeki) - es", "¿_____ lista para salir? - Estás"] }
    ]
};

const unit82Lecture: UnitLecture = {
    unitId: 82, title: "Spor ve Fitness", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Spor ve Fitness 🏋️", content: "Bu derste spor ve fitness ile ilgili kelime ve ifadeleri öğreneceksin.", tip: "El deporte es salud!" },
        { id: 2, type: "summary", title: "Spor Terimleri", points: ["El gimnasio = Spor salonu", "Correr = Koşmak", "Nadar = Yüzmek", "Levantar pesas = Ağırlık kaldırmak"] },
        { id: 3, type: "practice", title: "Pratik", content: "Boşlukları doldurun:", points: ["Voy al _____ tres veces a la semana - gimnasio", "Me gusta _____ por la mañana - correr"] }
    ]
};

const unit83Lecture: UnitLecture = {
    unitId: 83, title: "Seyahat Deneyimleri", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Seyahat Deneyimleri ✈️", content: "Bu derste seyahat deneyimlerini anlatmayı öğreneceksin.", tip: "Viajar es vivir!" },
        { id: 2, type: "summary", title: "Seyahat Kelimeleri", points: ["El viaje = Yolculuk", "El recuerdo = Anı", "La aventura = Macera", "El destino = Varış noktası"] },
        { id: 3, type: "practice", title: "Pratik", content: "Boşlukları doldurun:", points: ["Mi mejor viaje fue a _____ - España", "Tengo muchos _____ de ese viaje - recuerdos"] }
    ]
};

const unit84Lecture: UnitLecture = {
    unitId: 84, title: "Müzik ve Sanat", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Müzik ve Sanat 🎵🎨", content: "Bu derste müzik ve sanat hakkında konuşmayı öğreneceksin.", tip: "El arte enriquece el alma!" },
        { id: 2, type: "summary", title: "Sanat Terimleri", points: ["El concierto = Konser", "El museo = Müze", "La canción = Şarkı", "El cuadro = Tablo"] },
        { id: 3, type: "practice", title: "Pratik", content: "Boşlukları doldurun:", points: ["Fui a un _____ de rock - concierto", "Visité el _____ del Prado - museo"] }
    ]
};

const unit85Lecture: UnitLecture = {
    unitId: 85, title: "İlişkiler ve Sosyal Hayat", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "İlişkiler 💕", content: "Bu derste ilişkiler ve sosyal hayat hakkında konuşmayı öğreneceksin.", tip: "La amistad es un tesoro!" },
        { id: 2, type: "summary", title: "İlişki Kelimeleri", points: ["La confianza = Güven", "El respeto = Saygı", "Perdonar = Affetmek", "Apoyar = Desteklemek"] },
        { id: 3, type: "practice", title: "Pratik", content: "Boşlukları doldurun:", points: ["La _____ es fundamental - confianza", "Hay que _____ para seguir adelante - perdonar"] }
    ]
};

const unit86Lecture: UnitLecture = {
    unitId: 86, title: "İş ve Kariyer", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "İş ve Kariyer 💼", content: "Bu derste iş dünyası ve kariyer hakkında konuşmayı öğreneceksin.", tip: "El trabajo dignifica!" },
        { id: 2, type: "summary", title: "İş Terimleri", points: ["El empleo = İş", "La entrevista = Mülakat", "El currículum = Özgeçmiş", "El sueldo = Maaş"] },
        { id: 3, type: "practice", title: "Pratik", content: "Boşlukları doldurun:", points: ["Tengo una _____ mañana - entrevista", "Envié mi _____ a la empresa - currículum"] }
    ]
};

const unit87Lecture: UnitLecture = {
    unitId: 87, title: "Edebiyat 2", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Edebiyat 2 📚", content: "Bu derste Latin Amerika edebiyatını keşfedeceksin.", tip: "Leer es viajar sin moverse!" },
        { id: 2, type: "summary", title: "Edebiyat Terimleri", points: ["La novela = Roman", "El cuento = Hikaye", "El poema = Şiir", "El autor = Yazar"] },
        { id: 3, type: "summary", title: "Ünlü Yazarlar", points: ["Gabriel García Márquez - Kolombiya", "Pablo Neruda - Şili", "Isabel Allende - Şili"] }
    ]
};

const unit88Lecture: UnitLecture = {
    unitId: 88, title: "İspanyol Coğrafyası", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "İspanyol Coğrafyası 🗺️", content: "Bu derste İspanya'nın coğrafyasını keşfedeceksin.", tip: "España es diversa!" },
        { id: 2, type: "summary", title: "Coğrafya Terimleri", points: ["La comunidad autónoma = Özerk bölge", "La meseta = Yayla", "La costa = Kıyı", "La sierra = Dağ sırası"] },
        { id: 3, type: "summary", title: "Bölgeler", points: ["El norte: verde y lluvioso (Yeşil)", "El centro: meseta seca (Kuru yayla)", "El sur: mediterráneo (Akdeniz)"] }
    ]
};

const unit89Lecture: UnitLecture = {
    unitId: 89, title: "Latin Amerika Kültürü", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "Latin Amerika'ya Hoş Geldin! 🌎", content: "İspanyolca dünya genelinde 21 ülkede resmi dildir! Bu derste İspanya ile Latin Amerika arasındaki dilsel ve kültürel farkları keşfedeceksin.", tip: "21 ülke, 500 milyon konuşucu!" },
        {
            id: 2, type: "grammar", title: "Voseo: Arjantin'in Sırrı 🇦🇷", rules: [
                { rule: "Tú vs Vos", explanation: "Arjantin, Uruguay ve bazı Orta Amerika ülkelerinde 'Tú' yerine 'VOS' kullanılır.", examples: ["Tú hablas → Vos hablás", "Tú tienes → Vos tenés", "Tú eres → Vos sos"] }
            ], note: "Arjantin dizilerinde her zaman duyarsın!"
        },
        {
            id: 3, type: "vocabulary", title: "Kelime Farklılıkları 🚗", content: "Aynı nesne, farklı isimler:", words: [
                { target: "Coche (🇪🇸) / Carro (🇲🇽) / Auto (🇦🇷)", native: "Araba", pronunciation: "ko-CHE / KA-rro / AU-to" },
                { target: "Móvil (🇪🇸) / Celular (🌎)", native: "Cep telefonu", pronunciation: "MO-vil / se-lu-LAR" },
                { target: "Ordenador (🇪🇸) / Computadora (🌎)", native: "Bilgisayar", pronunciation: "or-de-na-DOR / kom-pu-ta-DO-ra" },
                { target: "Vale (🇪🇸) / Órale (🇲🇽) / Dale (🇦🇷)", native: "Tamam", pronunciation: "VA-le / O-ra-le / DA-le" }
            ]
        },
        {
            id: 4, type: "summary", title: "Müzik ve Dans 🎵💃", points: [
                "🇦🇷 Argentina: TANGO + Milonga (Buenos Aires'in ruhu)",
                "🇨🇺 Cuba: SALSA + Son cubano + Rumba",
                "🇲🇽 México: MARIACHI + Ranchera + Corrido",
                "🇨🇴 Colombia: CUMBIA + Vallenato + Reggaetón",
                "🇧🇷 Brasil: SAMBA + Bossa nova (Portekizce ama yakın!)",
                "🇩🇴 Dominicana: BACHATA + Merengue"
            ]
        },
        {
            id: 5, type: "summary", title: "Yemek Kültürü 🌮", points: [
                "🇲🇽 México: Taco, Burrito, Guacamole, Enchilada",
                "🇦🇷 Argentina: Asado (Mangal), Empanada, MATE (İçecek)",
                "🇵🇪 Perú: Ceviche (Limonlu çiğ balık), Pisco sour",
                "🇨🇴 Colombia: Arepa, Bandeja paisa, Café Colombian",
                "🇻🇪 Venezuela: Arepa (farklı versiyon), Pabellón criollo"
            ]
        },
        {
            id: 6, type: "summary", title: "Festivaller 🎉", points: [
                "🇧🇷 Carnaval de Río - Dünyanın en büyük festivali",
                "🇲🇽 Día de los Muertos (1-2 Kasım) - Ölüler Günü (üzgün değil, kutlama!)",
                "🇵🇪 Inti Raymi - İnka Güneş Festivali",
                "🇪🇸 La Tomatina - Domates Festivali (İspanya)"
            ]
        },
        {
            id: 7, type: "grammar", title: "Telaffuz Farkları 🗣️", rules: [
                { rule: "C/Z Sesi", explanation: "İspanya'da 'th' (Θ), Latin Amerika'da 's' sesi", examples: ["Barcelona: Barθelona (🇪🇸) vs Barselona (🌎)", "Cerveza: Θerveθa (🇪🇸) vs Servesa (🌎)"] },
                { rule: "LL/Y Sesi (Arjantin)", explanation: "Arjantin'de 'j/ş' sesi", examples: ["Yo: Jo/Şo (🇦🇷)", "Playa: Plaşa (🇦🇷)"] }
            ]
        },
        { id: 8, type: "summary", title: "Özet 📝", points: ["Voseo = Arjantin'de Tú yerine Vos", "Kelime farklılıkları = Coche/Carro/Auto", "Her ülkenin kendine özgü müziği ve mutfağı var", "Telaffuz farkları: Ceceo vs Seseo"] }
    ]
};


const unit90Lecture: UnitLecture = {
    unitId: 90, title: "B1 Kapsamlı Final", language: "İspanyolca", level: "B1",
    slides: [
        { id: 1, type: "intro", title: "¡Felicidades! 🎉🎊🎉", content: "B1 seviyesini başarıyla tamamladın! Artık bağımsız bir İspanyolca konuşucususun.", tip: "¡Lo lograste!" },
        { id: 2, type: "summary", title: "B1'de Öğrendiklerin", points: ["✓ Gelecek Zaman", "✓ Koşullu Cümleler", "✓ Subjuntivo", "✓ Por vs Para", "✓ Ser vs Estar İleri", "✓ İspanyol ve Latin Amerika Kültürü"] },
        { id: 3, type: "summary", title: "Sonraki Adımlar", points: ["📺 İspanyolca içerik izle", "📚 Kitap oku", "🗣️ Konuşma pratiği yap", "🎓 B2'ye geç!"] }
    ]
};


// Ünite ID'sine göre B1 lecture getir (ID: 61-90) - Güncellenmiş aralık
export function getB1LectureForUnit(unitId: number): UnitLecture {
    const idMapping: { [key: number]: UnitLecture } = {
        // B1 Temel Üniteler (61-80)
        61: unit41Lecture, 62: unit42Lecture, 63: unit43Lecture, 64: unit44Lecture, 65: unit45Lecture,
        66: unit46Lecture, 67: unit47Lecture, 68: unit48Lecture, 69: unit49Lecture, 70: unit50Lecture,
        71: unit51Lecture, 72: unit52Lecture, 73: unit53Lecture, 74: unit54Lecture, 75: unit55Lecture,
        76: unit56Lecture, 77: unit57Lecture, 78: unit58Lecture, 79: unit59Lecture, 80: unit60Lecture,
        // B1 Yeni Üniteler (81-90)
        81: unit81Lecture, 82: unit82Lecture, 83: unit83Lecture, 84: unit84Lecture, 85: unit85Lecture,
        86: unit86Lecture, 87: unit87Lecture, 88: unit88Lecture, 89: unit89Lecture, 90: unit90Lecture
    };
    return idMapping[unitId] || unit41Lecture;
}

