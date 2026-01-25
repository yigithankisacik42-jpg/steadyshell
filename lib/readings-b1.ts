/**
 * SteadyShell Okuma Veritabanı - İspanyolca B1
 * 30 Ünite (ID: 61-90), curriculum ile uyumlu
 * Her ünite: título, hikaye, çeviri, 5 kelime, 10 soru
 */

import { UnitReading } from './readings';

// ===== ÜNİTE 61: GELECEK ZAMAN =====
const unit61Reading: UnitReading = {
    unitId: 61,
    title: "Gelecek Zaman",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "El próximo año será muy importante para mí. Primero, terminaré mi máster en administración de empresas en junio. Después, buscaré trabajo en una empresa internacional. Mi sueño es trabajar en el extranjero, preferiblemente en Alemania o Francia. También quiero mejorar mi inglés y empezar a aprender alemán. En cuanto a mi vida personal, mi novia y yo nos casaremos en septiembre. Tendremos una boda pequeña con solo familia y amigos cercanos. Después de la boda, viajaremos a Japón para nuestra luna de miel. Será una experiencia inolvidable.",
        translation: "Gelecek yıl benim için çok önemli olacak. Önce haziranda işletme yüksek lisansımı bitireceğim. Sonra uluslararası bir şirkette iş arayacağım. Hayalim yurt dışında, tercihen Almanya veya Fransa'da çalışmak. Ayrıca İngilizcemi geliştirmek ve Almanca öğrenmeye başlamak istiyorum. Kişisel hayatıma gelince, kız arkadaşım ve ben eylülde evleneceğiz. Sadece aile ve yakın arkadaşlarla küçük bir düğün yapacağız. Düğünden sonra balayımız için Japonya'ya gideceğiz. Unutulmaz bir deneyim olacak."
    },
    vocabulary: [
        { word: "Terminaré", meaning: "Bitireceğim" },
        { word: "Buscaré", meaning: "Arayacağım" },
        { word: "Nos casaremos", meaning: "Evleneceğiz" },
        { word: "Viajaremos", meaning: "Seyahat edeceğiz" },
        { word: "Será", meaning: "Olacak" }
    ],
    questions: [
        { id: 1, question: "Yüksek lisans ne zaman bitecek?", options: ["Mayıs", "Haziran", "Temmuz"], correctAnswer: "Haziran" },
        { id: 2, question: "Nerede çalışmak istiyor?", options: ["Türkiye", "Yurt dışı", "Uzaktan"], correctAnswer: "Yurt dışı" },
        { id: 3, question: "Hangi dili öğrenmeye başlayacak?", options: ["Fransızca", "Almanca", "İtalyanca"], correctAnswer: "Almanca" },
        { id: 4, question: "Düğün ne zaman olacak?", options: ["Haziran", "Ağustos", "Eylül"], correctAnswer: "Eylül" },
        { id: 5, question: "Balayı nerede olacak?", options: ["Fransa", "Japonya", "İtalya"], correctAnswer: "Japonya" },
        { id: 6, question: "'Terminaré' hangi zamanda?", options: ["Geçmiş", "Şimdiki", "Gelecek"], correctAnswer: "Gelecek" },
        { id: 7, question: "İngilizce için ne yapacak?", options: ["Geliştirmek", "Unutmak", "Öğretmek"], correctAnswer: "Geliştirmek" },
        { id: 8, question: "Düğün nasıl olacak?", options: ["Büyük", "Küçük", "Uzaktan"], correctAnswer: "Küçük" },
        { id: 9, question: "'Buscaré' ne demek?", options: ["Aradım", "Arayacağım", "Arıyorum"], correctAnswer: "Arayacağım" },
        { id: 10, question: "Hangi ülkelerde çalışmayı hayal ediyor?", options: ["İngiltere-ABD", "Almanya-Fransa", "İtalya-İspanya"], correctAnswer: "Almanya-Fransa" }
    ]
};

// ===== ÜNİTE 62: KOŞUL CÜMLELERİ 1 =====
const unit62Reading: UnitReading = {
    unitId: 62,
    title: "Koşul Cümleleri 1",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Si hace buen tiempo mañana, iremos a la playa con toda la familia. Si tengo dinero suficiente, compraré un coche nuevo el próximo mes. Si estudias mucho, aprobarás el examen sin problemas. Estas frases usan el condicional tipo 1, que expresa situaciones posibles en el futuro. La estructura es: si + presente, futuro. Por ejemplo: 'Si llueve, me quedaré en casa' o 'Si me llamas, te ayudaré con el proyecto'. Es muy útil para hacer planes y expresar consecuencias de acciones probables en la vida diaria.",
        translation: "Yarın hava güzel olursa, tüm aileyle plaja gideceğiz. Yeterli param olursa, gelecek ay yeni bir araba alacağım. Çok çalışırsan, sınavı sorunsuz geçeceksin. Bu cümleler gelecekte olası durumları ifade eden 1. tip koşul cümlelerini kullanır. Yapı: eğer + şimdiki zaman, gelecek zaman. Örneğin: 'Yağmur yağarsa, evde kalacağım' veya 'Beni ararsan, projeyle yardım edeceğim'. Günlük hayatta plan yapmak ve olası eylemlerin sonuçlarını ifade etmek için çok yararlıdır."
    },
    vocabulary: [
        { word: "Si", meaning: "Eğer" },
        { word: "Iremos", meaning: "Gideceğiz" },
        { word: "Compraré", meaning: "Alacağım" },
        { word: "Aprobarás", meaning: "Geçeceksin" },
        { word: "Me quedaré", meaning: "Kalacağım" }
    ],
    questions: [
        { id: 1, question: "Tip 1 koşul yapısı nedir?", options: ["Si + geçmiş, şimdi", "Si + şimdi, gelecek", "Si + gelecek, geçmiş"], correctAnswer: "Si + şimdi, gelecek" },
        { id: 2, question: "Hava güzel olursa ne yapacaklar?", options: ["Evde kalacaklar", "Plaja gidecekler", "Çalışacaklar"], correctAnswer: "Plaja gidecekler" },
        { id: 3, question: "'Si llueve' ne demek?", options: ["Yağmur yağarsa", "Yağmur yağdı", "Yağmur yağıyor"], correctAnswer: "Yağmur yağarsa" },
        { id: 4, question: "Tip 1 koşul neyi ifade eder?", options: ["İmkansız durumlar", "Olası durumlar", "Geçmiş olaylar"], correctAnswer: "Olası durumlar" },
        { id: 5, question: "Çok çalışırsa ne olacak?", options: ["Başarısız olacak", "Sınavı geçecek", "Hastalanacak"], correctAnswer: "Sınavı geçecek" },
        { id: 6, question: "'Aprobarás' ne demek?", options: ["Geçtin", "Geçeceksin", "Geçiyorsun"], correctAnswer: "Geçeceksin" },
        { id: 7, question: "Para olursa ne alacak?", options: ["Ev", "Araba", "Telefon"], correctAnswer: "Araba" },
        { id: 8, question: "'Me quedaré' hangi fiil?", options: ["Gitmek", "Kalmak", "Almak"], correctAnswer: "Kalmak" },
        { id: 9, question: "Yağmur yağarsa ne yapacak?", options: ["Dışarı çıkacak", "Evde kalacak", "Yüzecek"], correctAnswer: "Evde kalacak" },
        { id: 10, question: "Bu yapı ne için kullanılır?", options: ["Geçmiş anlatmak", "Plan yapmak", "Özür dilemek"], correctAnswer: "Plan yapmak" }
    ]
};

// ===== ÜNİTE 63: KOŞUL CÜMLELERİ 2 =====
const unit63Reading: UnitReading = {
    unitId: 63,
    title: "Koşul Cümleleri 2",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Si ganara la lotería, cambiaría completamente mi vida. Primero, dejaría mi trabajo y viajaría por todo el mundo durante un año. Si tuviera más tiempo libre, aprendería a tocar el piano y estudiaría fotografía. Si pudiera vivir en cualquier país del mundo, elegiría España por su clima mediterráneo y su cultura. Estas frases usan el condicional tipo 2, que expresa situaciones hipotéticas o poco probables. La estructura es: si + imperfecto de subjuntivo, condicional. Por ejemplo: 'Si fuera rico, compraría una isla privada'.",
        translation: "Piyango kazansam, hayatımı tamamen değiştirirdim. Önce işimi bırakır ve bir yıl boyunca dünyayı gezerdim. Daha fazla boş zamanım olsaydı, piyano çalmayı öğrenir ve fotoğrafçılık okurdum. Dünyanın herhangi bir ülkesinde yaşayabilseydim, Akdeniz iklimi ve kültürü için İspanya'yı seçerdim. Bu cümleler varsayımsal veya olası olmayan durumları ifade eden 2. tip koşul cümlelerini kullanır. Yapı: eğer + subjuntivo geçmiş, koşullu. Örneğin: 'Zengin olsaydım, özel bir ada alırdım'."
    },
    vocabulary: [
        { word: "Si ganara", meaning: "Kazansam" },
        { word: "Cambiaría", meaning: "Değiştirirdim" },
        { word: "Si tuviera", meaning: "Olsaydı" },
        { word: "Elegiría", meaning: "Seçerdim" },
        { word: "Si pudiera", meaning: "Yapabilseydim" }
    ],
    questions: [
        { id: 1, question: "Tip 2 koşul neyi ifade eder?", options: ["Gerçek durumlar", "Varsayımsal durumlar", "Geçmiş olaylar"], correctAnswer: "Varsayımsal durumlar" },
        { id: 2, question: "'Si ganara' ne demek?", options: ["Kazanırsam", "Kazansam", "Kazandım"], correctAnswer: "Kazansam" },
        { id: 3, question: "Piyango kazansa ne yapardı?", options: ["Çalışmaya devam", "Hayatı değiştirir", "Aynı kalır"], correctAnswer: "Hayatı değiştirir" },
        { id: 4, question: "Hangi ülkede yaşamak isterdi?", options: ["Fransa", "İspanya", "İtalya"], correctAnswer: "İspanya" },
        { id: 5, question: "Neden İspanya?", options: ["Yemek", "İklim ve kültür", "Dil"], correctAnswer: "İklim ve kültür" },
        { id: 6, question: "'Cambiaría' hangi kip?", options: ["Geçmiş", "Koşullu", "Gelecek"], correctAnswer: "Koşullu" },
        { id: 7, question: "Daha fazla zamanı olsa ne öğrenirdi?", options: ["Yüzme", "Piyano", "Araba kullanma"], correctAnswer: "Piyano" },
        { id: 8, question: "Tip 2 yapısı nedir?", options: ["Si + şimdi, gelecek", "Si + subjuntivo, koşullu", "Si + geçmiş, şimdi"], correctAnswer: "Si + subjuntivo, koşullu" },
        { id: 9, question: "'Si pudiera' ne demek?", options: ["Yapabilsem", "Yaptım", "Yapacağım"], correctAnswer: "Yapabilsem" },
        { id: 10, question: "Dünyayı ne kadar süre gezerdi?", options: ["Bir ay", "Bir yıl", "İki yıl"], correctAnswer: "Bir yıl" }
    ]
};

// ===== ÜNİTE 64: SUBJUNTİVO GİRİŞ =====
const unit64Reading: UnitReading = {
    unitId: 64,
    title: "Subjunctive Giriş",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Mi madre siempre quiere que yo sea más organizado y que llegue a tiempo a las citas. Espera que encuentre un buen trabajo y que me case con una persona honesta y trabajadora. Duda que pueda vivir solo porque nunca he cocinado en mi vida. Le molesta que deje la ropa en el suelo de mi habitación. Sin embargo, se alegra de que tenga buenos amigos que me apoyan. Es importante que escuchemos los consejos de nuestros padres aunque no siempre estemos de acuerdo. El subjuntivo se usa después de verbos de deseo, duda y emoción.",
        translation: "Annem her zaman daha düzenli olmamı ve randevulara zamanında varmamı istiyor. İyi bir iş bulmamı ve dürüst, çalışkan biriyle evlenmemi umuyor. Yalnız yaşayabileceğimden şüphe ediyor çünkü hayatımda hiç yemek yapmadım. Kıyafetleri odamın yere bırakmam onu rahatsız ediyor. Ancak beni destekleyen iyi arkadaşlarım olmasına seviniyor. Her zaman aynı fikirde olmasak da ebeveynlerimizin tavsiyelerini dinlememiz önemli. Subjuntivo dilek, şüphe ve duygu fiillerinden sonra kullanılır."
    },
    vocabulary: [
        { word: "Quiero que", meaning: "İstiyorum ki" },
        { word: "Espero que", meaning: "Umuyorum ki" },
        { word: "Dudo que", meaning: "Şüphe ediyorum ki" },
        { word: "Me alegro de que", meaning: "Seviniyorum ki" },
        { word: "Es importante que", meaning: "Önemli ki" }
    ],
    questions: [
        { id: 1, question: "Subjuntivo ne zaman kullanılır?", options: ["Kesin olaylar", "Dilek ve şüphe", "Geçmiş"], correctAnswer: "Dilek ve şüphe" },
        { id: 2, question: "'Quiero que vengas' ne demek?", options: ["Geldin", "Gelmeni istiyorum", "Geleceksin"], correctAnswer: "Gelmeni istiyorum" },
        { id: 3, question: "Anne ne istiyor?", options: ["Daha az çalışması", "Daha düzenli olması", "Daha çok uyuması"], correctAnswer: "Daha düzenli olması" },
        { id: 4, question: "'Dudo que' hangi duyguyu ifade eder?", options: ["Sevinç", "Şüphe", "Öfke"], correctAnswer: "Şüphe" },
        { id: 5, question: "Anne neden şüphe duyuyor?", options: ["Yalnız yaşar mı", "İş bulur mu", "Evlenir mi"], correctAnswer: "Yalnız yaşar mı" },
        { id: 6, question: "'Espero que estés bien' ne demek?", options: ["İyisin", "İyi olmanı umuyorum", "İyi olacaksın"], correctAnswer: "İyi olmanı umuyorum" },
        { id: 7, question: "Anne neye seviniyor?", options: ["Parası olmasına", "İyi arkadaşları olmasına", "Evi olmasına"], correctAnswer: "İyi arkadaşları olmasına" },
        { id: 8, question: "'Me alegro de que' ne ifade eder?", options: ["Üzüntü", "Sevinç", "Korku"], correctAnswer: "Sevinç" },
        { id: 9, question: "Neden hiç yemek yapmamış?", options: ["Zamanı yok", "Belirtilmemiş", "Sevmiyor"], correctAnswer: "Belirtilmemiş" },
        { id: 10, question: "'Es importante que' yapısında ne var?", options: ["Indicativo", "Subjuntivo", "Imperativo"], correctAnswer: "Subjuntivo" }
    ]
};

// ===== ÜNİTE 65: HABERLER VE MEDYA =====
const unit65Reading: UnitReading = {
    unitId: 65,
    title: "Haberler ve Medya",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Cada mañana leo las noticias en diferentes fuentes para tener una visión completa de lo que pasa en el mundo. Empiezo con un periódico nacional serio y después consulto medios internacionales como la BBC o El País. Es importante contrastar la información porque cada medio tiene su propia perspectiva política. También sigo a algunos periodistas independientes en redes sociales que analizan las noticias en profundidad. Intento evitar las noticias falsas verificando siempre la fuente original antes de compartir. El periodismo de calidad es esencial para una democracia sana y para ciudadanos bien informados.",
        translation: "Her sabah dünyada olup bitenler hakkında eksiksiz bir görüş edinmek için farklı kaynaklardan haberleri okuyorum. Ciddi bir ulusal gazeteyle başlıyorum ve sonra BBC veya El País gibi uluslararası medyaya danışıyorum. Her medyanın kendi siyasi bakış açısı olduğu için bilgileri karşılaştırmak önemli. Ayrıca sosyal medyada haberleri derinlemesine analiz eden bazı bağımsız gazetecileri takip ediyorum. Paylaşmadan önce her zaman orijinal kaynağı doğrulayarak sahte haberlerden kaçınmaya çalışıyorum. Kaliteli gazetecilik sağlıklı bir demokrasi ve iyi bilgilendirilmiş vatandaşlar için gereklidir."
    },
    vocabulary: [
        { word: "Noticias", meaning: "Haberler" },
        { word: "Periódico", meaning: "Gazete" },
        { word: "Fuentes", meaning: "Kaynaklar" },
        { word: "Noticias falsas", meaning: "Sahte haberler" },
        { word: "Periodismo", meaning: "Gazetecilik" }
    ],
    questions: [
        { id: 1, question: "Neden farklı kaynaklara bakıyor?", options: ["Zaman geçirmek", "Eksiksiz görüş", "Eğlence"], correctAnswer: "Eksiksiz görüş" },
        { id: 2, question: "İlk ne okuyor?", options: ["Dergi", "Ulusal gazete", "Blog"], correctAnswer: "Ulusal gazete" },
        { id: 3, question: "Sahte haberleri nasıl önlüyor?", options: ["Hiç okumamak", "Kaynağı doğrulamak", "Sadece bir gazete"], correctAnswer: "Kaynağı doğrulamak" },
        { id: 4, question: "Sosyal medyada kimi takip ediyor?", options: ["Ünlüler", "Bağımsız gazeteciler", "Politikacılar"], correctAnswer: "Bağımsız gazeteciler" },
        { id: 5, question: "Kaliteli gazetecilik ne için önemli?", options: ["Eğlence", "Demokrasi", "Ekonomi"], correctAnswer: "Demokrasi" },
        { id: 6, question: "Bilgileri neden karşılaştırıyor?", options: ["Sıkıldığı için", "Her medyanın bakış açısı farklı", "Daha hızlı okumak için"], correctAnswer: "Her medyanın bakış açısı farklı" },
        { id: 7, question: "Uluslararası medya ne zaman okunuyor?", options: ["İlk önce", "Sonra", "Hiç"], correctAnswer: "Sonra" },
        { id: 8, question: "Gazeteciler haberleri nasıl analiz ediyor?", options: ["Yüzeysel", "Derinlemesine", "Hızlı"], correctAnswer: "Derinlemesine" },
        { id: 9, question: "Her sabah ne yapıyor?", options: ["Uyuyor", "Haber okuyor", "Spor yapıyor"], correctAnswer: "Haber okuyor" },
        { id: 10, question: "'Noticias falsas' ne demek?", options: ["Önemli haberler", "Sahte haberler", "Spor haberleri"], correctAnswer: "Sahte haberler" }
    ]
};

// ===== ÜNİTE 66: ÇEVRE SORUNLARI =====
const unit66Reading: UnitReading = {
    unitId: 66,
    title: "Çevre Sorunları",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "El cambio climático es uno de los mayores desafíos de nuestra época. Las temperaturas globales están aumentando debido a las emisiones de gases de efecto invernadero producidas principalmente por la industria y el transporte. Esto provoca fenómenos extremos como sequías prolongadas, inundaciones devastadoras y olas de calor mortales. Los océanos se están calentando y acidificando, lo que amenaza la vida marina. El nivel del mar está subiendo, poniendo en peligro ciudades costeras. Muchas especies animales están en peligro de extinción porque sus hábitats naturales desaparecen. La contaminación del aire afecta especialmente a las grandes ciudades, causando enfermedades respiratorias.",
        translation: "İklim değişikliği çağımızın en büyük zorluklarından biridir. Küresel sıcaklıklar, esas olarak sanayi ve ulaşım tarafından üretilen sera gazı emisyonları nedeniyle artıyor. Bu, uzun süreli kuraklıklar, yıkıcı seller ve ölümcül sıcak dalgaları gibi aşırı olaylara neden oluyor. Okyanuslar ısınıyor ve asitleniyor, bu da deniz yaşamını tehdit ediyor. Deniz seviyesi yükseliyor ve kıyı şehirlerini tehlikeye atıyor. Birçok hayvan türü, doğal yaşam alanları yok olduğu için nesli tükenme tehlikesiyle karşı karşıya. Hava kirliliği özellikle büyük şehirleri etkiliyor ve solunum hastalıklarına neden oluyor."
    },
    vocabulary: [
        { word: "Cambio climático", meaning: "İklim değişikliği" },
        { word: "Contaminación", meaning: "Kirlilik" },
        { word: "Emisiones", meaning: "Emisyonlar" },
        { word: "Extinción", meaning: "Nesli tükenme" },
        { word: "Sequía", meaning: "Kuraklık" }
    ],
    questions: [
        { id: 1, question: "Sıcaklıklar neden artıyor?", options: ["Güneş", "Sera gazları", "Volkanlar"], correctAnswer: "Sera gazları" },
        { id: 2, question: "Aşırı olaylara ne örnek?", options: ["Yağmur", "Kuraklık", "Rüzgar"], correctAnswer: "Kuraklık" },
        { id: 3, question: "Okyanuslar ne oluyor?", options: ["Soğuyor", "Isınıyor", "Kuruyor"], correctAnswer: "Isınıyor" },
        { id: 4, question: "Hayvanlar ne tehlikesiyle karşı karşıya?", options: ["Açlık", "Nesli tükenme", "Hastalık"], correctAnswer: "Nesli tükenme" },
        { id: 5, question: "Hava kirliliği nereyi etkiliyor?", options: ["Köyler", "Büyük şehirler", "Ormanlar"], correctAnswer: "Büyük şehirler" },
        { id: 6, question: "Deniz seviyesi ne oluyor?", options: ["Düşüyor", "Yükseliyor", "Aynı"], correctAnswer: "Yükseliyor" },
        { id: 7, question: "Emisyonları kim üretiyor?", options: ["Doğa", "Sanayi ve ulaşım", "Hayvanlar"], correctAnswer: "Sanayi ve ulaşım" },
        { id: 8, question: "Aşırı olaylara başka örnek?", options: ["Kar", "Sel", "Sis"], correctAnswer: "Sel" },
        { id: 9, question: "'Cambio climático' ne demek?", options: ["Hava durumu", "İklim değişikliği", "Mevsim"], correctAnswer: "İklim değişikliği" },
        { id: 10, question: "Hava kirliliği ne hastalığa neden olur?", options: ["Kalp", "Solunum", "Cilt"], correctAnswer: "Solunum" }
    ]
};

// ===== ÜNİTE 67: SÜRDÜRÜLEBİLİRLİK =====
const unit67Reading: UnitReading = {
    unitId: 67,
    title: "Sürdürülebilirlik",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La sostenibilidad es clave para el futuro de nuestro planeta. Podemos contribuir en nuestra vida diaria con pequeñas acciones: reciclar plástico, papel y vidrio correctamente; reducir el consumo de agua cerrando el grifo mientras nos lavamos los dientes; usar transporte público, bicicleta o caminar en lugar del coche; comprar productos locales y de temporada para reducir la huella de carbono. Muchas empresas están adoptando prácticas ecológicas como el uso de energías renovables y la reducción de residuos. Los gobiernos implementan políticas verdes para proteger el medio ambiente. Cada pequeña acción cuenta para construir un futuro más sostenible.",
        translation: "Sürdürülebilirlik gezegenimizin geleceği için anahtardır. Günlük hayatımızda küçük eylemlerle katkıda bulunabiliriz: plastik, kağıt ve camı doğru geri dönüştürmek; dişlerimizi fırçalarken musluğu kapatarak su tüketimini azaltmak; araba yerine toplu taşıma, bisiklet kullanmak veya yürümek; karbon ayak izini azaltmak için yerel ve mevsimlik ürünler almak. Birçok şirket yenilenebilir enerji kullanımı ve atık azaltma gibi ekolojik uygulamalar benimsiyor. Hükümetler çevreyi korumak için yeşil politikalar uyguluyor. Her küçük eylem daha sürdürülebilir bir gelecek inşa etmek için önemli."
    },
    vocabulary: [
        { word: "Sostenibilidad", meaning: "Sürdürülebilirlik" },
        { word: "Reciclar", meaning: "Geri dönüştürmek" },
        { word: "Residuos", meaning: "Atıklar" },
        { word: "Energías renovables", meaning: "Yenilenebilir enerji" },
        { word: "Huella de carbono", meaning: "Karbon ayak izi" }
    ],
    questions: [
        { id: 1, question: "Günlük hayatta ne yapabiliriz?", options: ["Daha çok tüketmek", "Geri dönüşüm yapmak", "Hiçbir şey"], correctAnswer: "Geri dönüşüm yapmak" },
        { id: 2, question: "Neler geri dönüştürülmeli?", options: ["Sadece plastik", "Plastik, kağıt, cam", "Sadece cam"], correctAnswer: "Plastik, kağıt, cam" },
        { id: 3, question: "Hangi ulaşım öneriliyor?", options: ["Araba", "Toplu taşıma", "Taksi"], correctAnswer: "Toplu taşıma" },
        { id: 4, question: "Hangi ürünler tercih edilmeli?", options: ["İthal", "Yerel ve mevsimlik", "Pahalı"], correctAnswer: "Yerel ve mevsimlik" },
        { id: 5, question: "Şirketler ne yapıyor?", options: ["Daha çok kirletme", "Ekolojik uygulamalar", "Hiçbir şey"], correctAnswer: "Ekolojik uygulamalar" },
        { id: 6, question: "'Reciclar' ne demek?", options: ["Atmak", "Geri dönüştürmek", "Satın almak"], correctAnswer: "Geri dönüştürmek" },
        { id: 7, question: "Hükümetler ne uyguluyorlar?", options: ["Ekonomik politikalar", "Yeşil politikalar", "Askeri politikalar"], correctAnswer: "Yeşil politikalar" },
        { id: 8, question: "Su için ne yapılmalı?", options: ["Daha çok kullanmak", "Tüketimi azaltmak", "Sınırsız harcamak"], correctAnswer: "Tüketimi azaltmak" },
        { id: 9, question: "'Sostenibilidad' ne demek?", options: ["Ekonomi", "Sürdürülebilirlik", "Teknoloji"], correctAnswer: "Sürdürülebilirlik" },
        { id: 10, question: "Her küçük eylem ne için önemli?", options: ["Eğlence", "Gelecek inşası", "Geçmiş"], correctAnswer: "Gelecek inşası" }
    ]
};

// ===== ÜNİTE 68: KÜLTÜR VE GELENEKLER =====
const unit68Reading: UnitReading = {
    unitId: 68,
    title: "Kültür ve Gelenekler",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "España es un país con una rica diversidad cultural. Cada región tiene sus propias tradiciones, gastronomía e incluso idioma. En Cataluña se habla catalán y se celebran los castells, impresionantes torres humanas. En el País Vasco, la cultura vasca tiene siglos de historia y su idioma, el euskera, es único en Europa. Andalucía es famosa por el flamenco, un arte que combina canto, baile y guitarra con pasión. Las fiestas de San Fermín en Pamplona y la Tomatina en Valencia atraen turistas de todo el mundo. La siesta y las tapas son tradiciones que definen el estilo de vida español. Esta diversidad es la mayor riqueza cultural del país.",
        translation: "İspanya zengin kültürel çeşitliliğe sahip bir ülkedir. Her bölgenin kendi gelenekleri, mutfağı ve hatta dili vardır. Katalonya'da Katalanca konuşulur ve etkileyici insan kuleleri olan castells kutlanır. Bask Ülkesi'nde Bask kültürü yüzyılların tarihine sahiptir ve dilleri Baskça Avrupa'da benzersizdir. Endülüs, şarkı, dans ve gitarı tutkuyla birleştiren flamenko sanatıyla ünlüdür. Pamplona'daki San Fermín ve Valencia'daki Tomatina festivalleri dünyanın her yerinden turistleri çekiyor. Siesta ve tapas, İspanyol yaşam tarzını tanımlayan geleneklerdir. Bu çeşitlilik ülkenin en büyük kültürel zenginliğidir."
    },
    vocabulary: [
        { word: "Tradiciones", meaning: "Gelenekler" },
        { word: "Gastronomía", meaning: "Mutfak kültürü" },
        { word: "Diversidad", meaning: "Çeşitlilik" },
        { word: "Fiesta", meaning: "Festival" },
        { word: "Flamenco", meaning: "Flamenko" }
    ],
    questions: [
        { id: 1, question: "Katalonya'da ne konuşuluyor?", options: ["İspanyolca", "Katalanca", "Baskça"], correctAnswer: "Katalanca" },
        { id: 2, question: "Castells nedir?", options: ["Yemek", "Dans", "İnsan kuleleri"], correctAnswer: "İnsan kuleleri" },
        { id: 3, question: "Baskça için ne söyleniyor?", options: ["Yaygın", "Benzersiz", "Kolay"], correctAnswer: "Benzersiz" },
        { id: 4, question: "Flamenko nerede ünlü?", options: ["Katalonya", "Galiçya", "Endülüs"], correctAnswer: "Endülüs" },
        { id: 5, question: "San Fermín nerede kutlanır?", options: ["Valencia", "Pamplona", "Madrid"], correctAnswer: "Pamplona" },
        { id: 6, question: "Flamenko neyi birleştiriyor?", options: ["Dans ve spor", "Şarkı, dans ve gitar", "Yemek ve müzik"], correctAnswer: "Şarkı, dans ve gitar" },
        { id: 7, question: "Her bölgenin neyi farklı?", options: ["Sadece dil", "Gelenekler ve mutfak", "Sadece iklim"], correctAnswer: "Gelenekler ve mutfak" },
        { id: 8, question: "Tomatina nerede?", options: ["Valencia", "Barcelona", "Sevilla"], correctAnswer: "Valencia" },
        { id: 9, question: "'Tradiciones' ne demek?", options: ["Yemek", "Gelenekler", "Müzik"], correctAnswer: "Gelenekler" },
        { id: 10, question: "Çeşitlilik nasıl değerlendiriliyor?", options: ["Problem", "En büyük zenginlik", "Zayıflık"], correctAnswer: "En büyük zenginlik" }
    ]
};

// ===== ÜNİTE 69: EKONOMİ TEMELLERİ =====
const unit69Reading: UnitReading = {
    unitId: 69,
    title: "Ekonomi Temelleri",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La economía mundial atraviesa un momento de incertidumbre. La inflación ha subido significativamente en los últimos meses, lo que ha reducido el poder adquisitivo de las familias. Los bancos centrales están aumentando los tipos de interés para controlar los precios, pero esto también encarece los préstamos. El desempleo ha mejorado respecto al año pasado, pero los salarios no han subido al mismo ritmo que los precios. El PIB es el indicador más importante de la economía de un país y mide toda la producción. Los expertos recomiendan ahorrar, diversificar las inversiones y evitar las deudas innecesarias para mantener una buena salud financiera en tiempos difíciles.",
        translation: "Dünya ekonomisi belirsizlik dönemi geçiriyor. Enflasyon son aylarda önemli ölçüde yükseldi, bu da ailelerin satın alma gücünü azalttı. Merkez bankaları fiyatları kontrol etmek için faiz oranlarını artırıyor, ancak bu aynı zamanda kredileri pahalılandırıyor. İşsizlik geçen yıla göre iyileşti, ancak maaşlar fiyatlarla aynı oranda artmadı. GSYİH bir ülke ekonomisinin en önemli göstergesidir ve tüm üretimi ölçer. Uzmanlar zor dönemlerde iyi bir mali sağlık için tasarruf etmeyi, yatırımları çeşitlendirmeyi ve gereksiz borçlardan kaçınmayı öneriyor."
    },
    vocabulary: [
        { word: "Economía", meaning: "Ekonomi" },
        { word: "Inflación", meaning: "Enflasyon" },
        { word: "PIB", meaning: "GSYİH" },
        { word: "Desempleo", meaning: "İşsizlik" },
        { word: "Tipos de interés", meaning: "Faiz oranları" }
    ],
    questions: [
        { id: 1, question: "Enflasyon ne yaptı?", options: ["Düştü", "Yükseldi", "Aynı kaldı"], correctAnswer: "Yükseldi" },
        { id: 2, question: "Merkez bankaları ne yapıyor?", options: ["Faiz düşürüyor", "Faiz artırıyor", "Bekliyor"], correctAnswer: "Faiz artırıyor" },
        { id: 3, question: "İşsizlik nasıl?", options: ["Kötüleşti", "İyileşti", "Aynı"], correctAnswer: "İyileşti" },
        { id: 4, question: "Maaşlar ne durumda?", options: ["Fiyatlarla artıyor", "Fiyatların altında", "Düşüyor"], correctAnswer: "Fiyatların altında" },
        { id: 5, question: "Uzmanlar ne öneriyor?", options: ["Harcamak", "Tasarruf", "Borç almak"], correctAnswer: "Tasarruf" },
        { id: 6, question: "'Inflación' ne demek?", options: ["Büyüme", "Enflasyon", "Kriz"], correctAnswer: "Enflasyon" },
        { id: 7, question: "PIB neyi gösterir?", options: ["Nüfus", "Ekonomi gücü", "Yüzölçümü"], correctAnswer: "Ekonomi gücü" },
        { id: 8, question: "Yatırımlar nasıl olmalı?", options: ["Tek bir yerde", "Çeşitlendirilmiş", "Yok"], correctAnswer: "Çeşitlendirilmiş" },
        { id: 9, question: "Dünya ekonomisi nasıl?", options: ["İstikrarlı", "Belirsiz", "Çok iyi"], correctAnswer: "Belirsiz" },
        { id: 10, question: "Gereksiz borçlar için ne?", options: ["Almak", "Kaçınmak", "Artırmak"], correctAnswer: "Kaçınmak" }
    ]
};

// ===== ÜNİTE 70: BANKACILIK =====
const unit70Reading: UnitReading = {
    unitId: 70,
    title: "Bankacılık",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Hoy fui al banco a abrir una cuenta de ahorro para empezar a guardar dinero para el futuro. El empleado me explicó los diferentes productos disponibles: cuenta corriente para gastos diarios, cuenta de ahorro con un pequeño interés, depósitos a plazo fijo con mayor rentabilidad y fondos de inversión para los más arriesgados. Decidí abrir una cuenta de ahorro porque ofrece un interés del 2% anual sin comisiones. También solicité una tarjeta de débito y activé la banca online para poder hacer transferencias y consultar mi saldo desde casa. Me recomendaron establecer un plan de ahorro automático para apartar dinero cada mes sin pensarlo.",
        translation: "Bugün gelecek için para biriktirmeye başlamak amacıyla tasarruf hesabı açmak için bankaya gittim. Çalışan bana mevcut farklı ürünleri açıkladı: günlük harcamalar için cari hesap, küçük faizli tasarruf hesabı, daha yüksek getirili vadeli mevduat ve daha riskli olanlar için yatırım fonları. Komisyonsuz yıllık %2 faiz sunduğu için tasarruf hesabı açmaya karar verdim. Ayrıca bir banka kartı talep ettim ve evden transfer yapabilmek ve bakiyemi sorgulayabilmek için internet bankacılığını aktive ettim. Düşünmeden her ay para ayırmak için otomatik tasarruf planı kurmamı önerdiler."
    },
    vocabulary: [
        { word: "Cuenta de ahorro", meaning: "Tasarruf hesabı" },
        { word: "Transferencias", meaning: "Transferler" },
        { word: "Interés", meaning: "Faiz" },
        { word: "Préstamo", meaning: "Kredi" },
        { word: "Banca online", meaning: "İnternet bankacılığı" }
    ],
    questions: [
        { id: 1, question: "Neden bankaya gitti?", options: ["Kredi", "Hesap açmak", "Para çekmek"], correctAnswer: "Hesap açmak" },
        { id: 2, question: "Faiz oranı kaç?", options: ["1%", "2%", "3%"], correctAnswer: "2%" },
        { id: 3, question: "Hangi kartı aldı?", options: ["Kredi", "Banka", "Hediye"], correctAnswer: "Banka" },
        { id: 4, question: "İnternet bankacılığı ne için?", options: ["Oyun", "Transfer ve bakiye", "Alışveriş"], correctAnswer: "Transfer ve bakiye" },
        { id: 5, question: "Ne önerdiler?", options: ["Daha çok harca", "Otomatik tasarruf", "Yatırım"], correctAnswer: "Otomatik tasarruf" },
        { id: 6, question: "Hangi hesap türü açtı?", options: ["Cari", "Tasarruf", "Vadeli"], correctAnswer: "Tasarruf" },
        { id: 7, question: "'Préstamo' ne demek?", options: ["Faiz", "Kredi", "Hesap"], correctAnswer: "Kredi" },
        { id: 8, question: "Evden ne yapabilir?", options: ["Alışveriş", "Transfer", "Oyun"], correctAnswer: "Transfer" },
        { id: 9, question: "Neden tasarruf hesabı seçti?", options: ["Kolay", "Komisyonsuz faiz", "İsim güzel"], correctAnswer: "Komisyonsuz faiz" },
        { id: 10, question: "Otomatik plan ne için?", options: ["Harcamak", "Düşünmeden biriktirmek", "Borç almak"], correctAnswer: "Düşünmeden biriktirmek" }
    ]
};

// ===== ÜNİTE 71: TARTIŞMA BECERİLERİ =====
const unit71Reading: UnitReading = {
    unitId: 71,
    title: "Tartışma Becerileri",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Saber debatir es una habilidad fundamental en la vida profesional y personal. Lo más importante es escuchar activamente al otro antes de responder, sin interrumpir. Hay que evitar atacar personalmente al oponente y centrarse en los argumentos. Es mejor usar expresiones como 'en mi opinión' o 'desde mi punto de vista' en lugar de afirmar verdades absolutas. También es útil reconocer los puntos válidos del contrario y buscar puntos en común. Un buen debate no trata de ganar a toda costa, sino de entender diferentes perspectivas y llegar a conclusiones más completas. La calma, el respeto mutuo y la mente abierta son esenciales para un diálogo constructivo.",
        translation: "Tartışmayı bilmek profesyonel ve kişisel hayatta temel bir beceridir. En önemlisi, sözünü kesmeden cevap vermeden önce diğerini aktif olarak dinlemektir. Rakibe kişisel saldırıdan kaçınmak ve argümanlara odaklanmak gerekir. Mutlak doğrular iddia etmek yerine 'bence' veya 'benim bakış açımdan' gibi ifadeler kullanmak daha iyidir. Karşı tarafın geçerli noktalarını tanımak ve ortak noktalar bulmak yararlıdır. İyi bir tartışma her ne pahasına olursa olsun kazanmakla ilgili değil, farklı bakış açılarını anlamak ve daha kapsamlı sonuçlara ulaşmakla ilgilidir. Sakinlik, karşılıklı saygı ve açık fikirlilik yapıcı bir diyalog için esastır."
    },
    vocabulary: [
        { word: "Debatir", meaning: "Tartışmak" },
        { word: "Interrumpir", meaning: "Sözünü kesmek" },
        { word: "Perspectiva", meaning: "Bakış açısı" },
        { word: "Conclusión", meaning: "Sonuç" },
        { word: "En mi opinión", meaning: "Bence" }
    ],
    questions: [
        { id: 1, question: "En önemli şey ne?", options: ["Hızlı konuşmak", "Aktif dinlemek", "Son sözü söylemek"], correctAnswer: "Aktif dinlemek" },
        { id: 2, question: "Nelerden kaçınılmalı?", options: ["Soru sormak", "Kişisel saldırı", "Örnekleme"], correctAnswer: "Kişisel saldırı" },
        { id: 3, question: "Ne kullanmak daha iyi?", options: ["Mutlak doğrular", "'Bence' ifadesi", "Sessiz kalmak"], correctAnswer: "'Bence' ifadesi" },
        { id: 4, question: "İyi tartışma amacı ne?", options: ["Kazanmak", "Anlamak", "İkna etmek"], correctAnswer: "Anlamak" },
        { id: 5, question: "Hangi değerler esastır?", options: ["Hız ve güç", "Sakinlik ve saygı", "Enerji ve tutku"], correctAnswer: "Sakinlik ve saygı" },
        { id: 6, question: "'Debatir' ne demek?", options: ["Konuşmak", "Tartışmak", "Susturmak"], correctAnswer: "Tartışmak" },
        { id: 7, question: "Karşı tarafın ne yapılmalı?", options: ["Görmezden gel", "Geçerli noktaları tanı", "Alay et"], correctAnswer: "Geçerli noktaları tanı" },
        { id: 8, question: "Tartışma neyden ibaret değil?", options: ["Anlamak", "Her ne pahasına kazanmak", "Dinlemek"], correctAnswer: "Her ne pahasına kazanmak" },
        { id: 9, question: "Ortak noktalar ne için aranır?", options: ["Savaşmak", "Uzlaşmak", "Kaçmak"], correctAnswer: "Uzlaşmak" },
        { id: 10, question: "Açık fikirlilik ne için gerekli?", options: ["Kaybetmek", "Yapıcı diyalog", "Öfkelenmek"], correctAnswer: "Yapıcı diyalog" }
    ]
};

// ===== ÜNİTE 72: SUNUM YAPMA =====
const unit72Reading: UnitReading = {
    unitId: 72,
    title: "Sunum Yapma",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Hacer una buena presentación requiere preparación y práctica. Primero, debes conocer bien tu tema y organizar la información de forma clara con introducción, desarrollo y conclusión. Los elementos visuales como gráficos y diapositivas ayudan a mantener la atención del público, pero no deben tener demasiado texto. Es importante hablar con claridad, hacer contacto visual y controlar el lenguaje corporal. Empieza con una frase que capture la atención, usa ejemplos concretos y termina con un resumen claro. Practica varias veces antes del día de la presentación. Respira profundamente para controlar los nervios. Deja tiempo para preguntas al final y responde con confianza.",
        translation: "İyi bir sunum yapmak hazırlık ve pratik gerektirir. Önce konunu iyi bilmeli ve bilgileri giriş, gelişme ve sonuç şeklinde net organize etmelisin. Grafik ve slaytlar gibi görsel öğeler izleyicilerin dikkatini çekmeye yardımcı olur, ancak çok fazla metin içermemelidir. Net konuşmak, göz teması kurmak ve beden dilini kontrol etmek önemlidir. Dikkat çeken bir cümleyle başla, somut örnekler kullan ve net bir özetle bitir. Sunum gününden önce birkaç kez prova yap. Sinirleri kontrol etmek için derin nefes al. Sonunda sorular için zaman bırak ve güvenle cevapla."
    },
    vocabulary: [
        { word: "Presentación", meaning: "Sunum" },
        { word: "Diapositivas", meaning: "Slaytlar" },
        { word: "Gráficos", meaning: "Grafikler" },
        { word: "Conclusión", meaning: "Sonuç" },
        { word: "Audiencia", meaning: "İzleyici" }
    ],
    questions: [
        { id: 1, question: "İyi sunum ne gerektirir?", options: ["Şans", "Hazırlık ve pratik", "Pahalı ekipman"], correctAnswer: "Hazırlık ve pratik" },
        { id: 2, question: "Sunum nasıl organize edilmeli?", options: ["Rastgele", "Giriş-gelişme-sonuç", "Sadece sonuç"], correctAnswer: "Giriş-gelişme-sonuç" },
        { id: 3, question: "Slaytlarda ne olmamalı?", options: ["Resim", "Çok fazla metin", "Grafik"], correctAnswer: "Çok fazla metin" },
        { id: 4, question: "Nasıl başlamalı?", options: ["Sessizce", "Dikkat çeken cümleyle", "Özür dileyerek"], correctAnswer: "Dikkat çeken cümleyle" },
        { id: 5, question: "Sinirleri kontrol için ne?", options: ["Koşmak", "Derin nefes", "Bağırmak"], correctAnswer: "Derin nefes" },
        { id: 6, question: "Göz teması neden önemli?", options: ["Görmek için", "Bağlantı kurmak", "Okumak için"], correctAnswer: "Bağlantı kurmak" },
        { id: 7, question: "Somut örnekler ne yapar?", options: ["Karıştırır", "Anlamayı kolaylaştırır", "Sıkıcı yapar"], correctAnswer: "Anlamayı kolaylaştırır" },
        { id: 8, question: "Sonunda ne yapılmalı?", options: ["Hemen gitmek", "Soru için zaman bırakmak", "Uyumak"], correctAnswer: "Soru için zaman bırakmak" },
        { id: 9, question: "Prova ne zaman yapılmalı?", options: ["Sunum günü", "Önceden", "Hiç"], correctAnswer: "Önceden" },
        { id: 10, question: "Beden dili nasıl olmalı?", options: ["Kontrolsüz", "Kontrollü", "Sabit"], correctAnswer: "Kontrollü" }
    ]
};

// ===== ÜNİTE 73: EDEBİYAT 1 =====
const unit73Reading: UnitReading = {
    unitId: 73,
    title: "Edebiyat 1",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La literatura española tiene una larga y rica historia. Miguel de Cervantes escribió 'Don Quijote de la Mancha' en 1605, considerada la primera novela moderna de la historia. La obra cuenta las aventuras de un hidalgo que, tras leer demasiados libros de caballerías, decide convertirse en caballero andante. Su escudero, Sancho Panza, representa el realismo frente al idealismo de Don Quijote. La novela combina humor, crítica social y reflexiones profundas sobre la naturaleza humana. Otros autores españoles importantes incluyen a Federico García Lorca, cuya poesía habla del amor y la muerte, y Gabriel García Márquez, aunque colombiano, es fundamental en la literatura en español con su realismo mágico.",
        translation: "İspanyol edebiyatı uzun ve zengin bir tarihe sahiptir. Miguel de Cervantes 1605'te tarihin ilk modern romanı olarak kabul edilen 'Don Kişot'u yazdı. Eser, çok fazla şövalye romanı okuduktan sonra gezgin şövalye olmaya karar veren bir soylu'nun maceralarını anlatır. Şövalyesi Sancho Panza, Don Kişot'un idealizmine karşı gerçekçiliği temsil eder. Roman mizah, sosyal eleştiri ve insan doğası üzerine derin düşünceleri birleştirir. Diğer önemli İspanyol yazarlar arasında aşk ve ölümden bahseden şiirleriyle Federico García Lorca ve Kolombiyalı olmasına rağmen büyülü gerçekçiliğiyle İspanyolca edebiyatın temellerinden Gabriel García Márquez yer alır."
    },
    vocabulary: [
        { word: "Novela", meaning: "Roman" },
        { word: "Poesía", meaning: "Şiir" },
        { word: "Autor", meaning: "Yazar" },
        { word: "Aventuras", meaning: "Maceralar" },
        { word: "Literatura", meaning: "Edebiyat" }
    ],
    questions: [
        { id: 1, question: "Don Kişot ne zaman yazıldı?", options: ["1505", "1605", "1705"], correctAnswer: "1605" },
        { id: 2, question: "Cervantes'in ünlü eseri?", options: ["Hamlet", "Don Kişot", "Odysseia"], correctAnswer: "Don Kişot" },
        { id: 3, question: "Don Kişot neden şövalye oldu?", options: ["Kral emretti", "Çok kitap okudu", "Zengin olmak için"], correctAnswer: "Çok kitap okudu" },
        { id: 4, question: "Sancho Panza kim?", options: ["Düşman", "Şövalye", "Kral"], correctAnswer: "Şövalye" },
        { id: 5, question: "Sancho neyi temsil eder?", options: ["İdealizm", "Gerçekçilik", "Romantizm"], correctAnswer: "Gerçekçilik" },
        { id: 6, question: "Lorca ne yazıyor?", options: ["Roman", "Şiir", "Oyun"], correctAnswer: "Şiir" },
        { id: 7, question: "García Márquez nereli?", options: ["İspanyol", "Kolombiyalı", "Meksikalı"], correctAnswer: "Kolombiyalı" },
        { id: 8, question: "García Márquez hangi tarzda yazar?", options: ["Gotik", "Büyülü gerçekçilik", "Polisiye"], correctAnswer: "Büyülü gerçekçilik" },
        { id: 9, question: "Don Kişot nasıl değerlendirilir?", options: ["İlk roman", "Son roman", "En kısa roman"], correctAnswer: "İlk roman" },
        { id: 10, question: "Lorca'nın şiirleri ne hakkında?", options: ["Doğa", "Aşk ve ölüm", "Politika"], correctAnswer: "Aşk ve ölüm" }
    ]
};

// ===== ÜNİTE 74: ŞİİR VE ŞARKI =====
const unit74Reading: UnitReading = {
    unitId: 74,
    title: "Şiir ve Şarkı",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La poesía y la música están estrechamente relacionadas en la cultura hispana. Federico García Lorca no solo escribió poemas, sino también letras de canciones populares. El flamenco, tradición andaluza, combina poesía, canto y guitarra con intensidad emocional. Las canciones de cantautores como Joan Manuel Serrat, Joaquín Sabina y Silvio Rodríguez son verdadera poesía puesta en música, con letras que hablan del amor, la política y la vida cotidiana. Aprender canciones en español es una manera excelente de mejorar el vocabulario y la pronunciación. Las rimas y los ritmos ayudan a memorizar estructuras gramaticales naturalmente. Escuchar música hispana abre una ventana a la cultura.",
        translation: "Şiir ve müzik İspanyol kültüründe yakından ilişkilidir. Federico García Lorca sadece şiir değil, aynı zamanda popüler şarkı sözleri de yazdı. Endülüs geleneği olan flamenko, şiir, şarkı ve gitarı duygusal yoğunlukla birleştirir. Joan Manuel Serrat, Joaquín Sabina ve Silvio Rodríguez gibi söz yazarlarının şarkıları, aşk, politika ve günlük yaşam hakkında sözlerle müziğe dönüştürülmüş gerçek şiirlerdir. İspanyolca şarkı öğrenmek kelime dağarcığını ve telaffuzu geliştirmenin mükemmel bir yoludur. Kafiyeler ve ritimler dilbilgisi yapılarını doğal olarak ezberlemeye yardımcı olur. İspanyol müziği dinlemek kültüre bir pencere açar."
    },
    vocabulary: [
        { word: "Canción", meaning: "Şarkı" },
        { word: "Letra", meaning: "Şarkı sözü" },
        { word: "Cantautor", meaning: "Söz yazarı şarkıcı" },
        { word: "Rima", meaning: "Kafiye" },
        { word: "Ritmo", meaning: "Ritim" }
    ],
    questions: [
        { id: 1, question: "Şiir ve müzik nasıl?", options: ["Ayrı", "Yakından ilişkili", "Zıt"], correctAnswer: "Yakından ilişkili" },
        { id: 2, question: "Lorca ne yazdı?", options: ["Sadece şiir", "Şiir ve şarkı sözü", "Sadece roman"], correctAnswer: "Şiir ve şarkı sözü" },
        { id: 3, question: "Flamenko ne birleştirir?", options: ["Dans ve yemek", "Şiir, şarkı ve gitar", "Spor ve müzik"], correctAnswer: "Şiir, şarkı ve gitar" },
        { id: 4, question: "Cantautor ne demek?", options: ["Dans eden", "Söz yazıp söyleyen", "Çizen"], correctAnswer: "Söz yazıp söyleyen" },
        { id: 5, question: "Şarkılar ne hakkında?", options: ["Sadece aşk", "Aşk, politika, hayat", "Sadece doğa"], correctAnswer: "Aşk, politika, hayat" },
        { id: 6, question: "Şarkı öğrenmek neyi geliştirir?", options: ["Yüzme", "Kelime ve telaffuz", "Matematik"], correctAnswer: "Kelime ve telaffuz" },
        { id: 7, question: "Kafiyeler neye yardımcı?", options: ["Uyumaya", "Ezberlemeye", "Koşmaya"], correctAnswer: "Ezberlemeye" },
        { id: 8, question: "Müzik dinlemek ne açar?", options: ["Kapı", "Kültüre pencere", "Problem"], correctAnswer: "Kültüre pencere" },
        { id: 9, question: "Flamenko hangi bölgeden?", options: ["Katalonya", "Endülüs", "Bask"], correctAnswer: "Endülüs" },
        { id: 10, question: "Silvio Rodríguez ne yapar?", options: ["Resim yapar", "Şarkı söyler", "Dans eder"], correctAnswer: "Şarkı söyler" }
    ]
};

// ===== ÜNİTE 75: TARİH VE POLİTİKA =====
const unit75Reading: UnitReading = {
    unitId: 75,
    title: "Tarih ve Politika",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La transición española fue el período de cambio político que tuvo lugar entre 1975 y 1982. Tras la muerte del dictador Francisco Franco, España pasó de una dictadura a una democracia parlamentaria de forma pacífica. El rey Juan Carlos I jugó un papel fundamental al apoyar la democracia y frenar un golpe de estado en 1981. En 1978 se aprobó la nueva Constitución mediante un referéndum popular. Los principales partidos políticos, tanto de derecha como de izquierda, llegaron a acuerdos históricos conocidos como los Pactos de la Moncloa. La transición española es estudiada internacionalmente como un modelo de cambio político pacífico y consensuado.",
        translation: "İspanyol geçişi 1975 ile 1982 arasında gerçekleşen siyasi değişim dönemiydi. Diktatör Francisco Franco'nun ölümünden sonra İspanya diktatörlükten parlamenter demokrasiye barışçıl bir şekilde geçti. Kral Juan Carlos I demokrasiyi destekleyerek ve 1981'de bir darbe girişimini durdurarak temel bir rol oynadı. 1978'de yeni Anayasa halk oylamasıyla kabul edildi. Sağ ve sol ana siyasi partiler Moncloa Paktları olarak bilinen tarihi anlaşmalara vardı. İspanyol geçişi uluslararası alanda barışçıl ve uzlaşmacı siyasi değişim modeli olarak incelenmektedir."
    },
    vocabulary: [
        { word: "Transición", meaning: "Geçiş" },
        { word: "Dictadura", meaning: "Diktatörlük" },
        { word: "Constitución", meaning: "Anayasa" },
        { word: "Democracia", meaning: "Demokrasi" },
        { word: "Golpe de estado", meaning: "Darbe" }
    ],
    questions: [
        { id: 1, question: "Dönem ne zaman?", options: ["1960-1970", "1975-1982", "1990-2000"], correctAnswer: "1975-1982" },
        { id: 2, question: "Franco kimdi?", options: ["Kral", "Diktatör", "Başbakan"], correctAnswer: "Diktatör" },
        { id: 3, question: "Anayasa ne zaman kabul edildi?", options: ["1975", "1978", "1982"], correctAnswer: "1978" },
        { id: 4, question: "Anlaşmalar ne olarak bilinir?", options: ["Madrid Paktları", "Moncloa Paktları", "Barcelona Paktları"], correctAnswer: "Moncloa Paktları" },
        { id: 5, question: "Geçiş nasıl değerlendiriliyor?", options: ["Şiddetli", "Barışçıl model", "Başarısız"], correctAnswer: "Barışçıl model" },
        { id: 6, question: "Juan Carlos I ne yaptı?", options: ["Darbeyi destekledi", "Demokrasiyi destekledi", "Kaçtı"], correctAnswer: "Demokrasiyi destekledi" },
        { id: 7, question: "Darbe girişimi ne zaman?", options: ["1978", "1981", "1985"], correctAnswer: "1981" },
        { id: 8, question: "Anayasa nasıl kabul edildi?", options: ["Meclis", "Referandum", "Kral kararı"], correctAnswer: "Referandum" },
        { id: 9, question: "Hangi partiler anlaştı?", options: ["Sadece sağ", "Sağ ve sol", "Sadece sol"], correctAnswer: "Sağ ve sol" },
        { id: 10, question: "Önceki rejim ne?", options: ["Monarşi", "Diktatörlük", "Cumhuriyet"], correctAnswer: "Diktatörlük" }
    ]
};

// ===== ÜNİTE 76: HUKUK TEMELLERİ =====
const unit76Reading: UnitReading = {
    unitId: 76,
    title: "Hukuk Temelleri",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Conocer nuestros derechos fundamentales es esencial en una democracia. La Constitución española garantiza la libertad de expresión, el derecho a la educación gratuita y obligatoria, y la sanidad pública universal. Todos somos iguales ante la ley sin discriminación por raza, sexo, religión u orientación política. Si alguien viola nuestros derechos, podemos acudir a los tribunales de justicia. Un abogado puede asesorarnos y representarnos legalmente en cualquier procedimiento. También existe el Defensor del Pueblo, una institución que protege a los ciudadanos frente a posibles abusos de la administración pública. Conocer la ley nos hace ciudadanos más conscientes.",
        translation: "Temel haklarımızı bilmek demokraside esastır. İspanyol Anayasası ifade özgürlüğünü, zorunlu ve ücretsiz eğitim hakkını ve evrensel kamu sağlığını garanti eder. Irk, cinsiyet, din veya siyasi yönelim ayrımı olmaksızın hepimiz kanun önünde eşitiz. Biri haklarımızı ihlal ederse mahkemelere başvurabiliriz. Bir avukat herhangi bir işlemde bize danışmanlık yapabilir ve yasal olarak temsil edebilir. Ayrıca vatandaşları kamu yönetiminin olası suistimallerine karşı koruyan Kamu Denetçisi kurumu vardır. Yasayı bilmek bizi daha bilinçli vatandaşlar yapar."
    },
    vocabulary: [
        { word: "Derechos", meaning: "Haklar" },
        { word: "Tribunales", meaning: "Mahkemeler" },
        { word: "Abogado", meaning: "Avukat" },
        { word: "Ley", meaning: "Yasa" },
        { word: "Constitución", meaning: "Anayasa" }
    ],
    questions: [
        { id: 1, question: "Anayasa neyi garanti ediyor?", options: ["Zenginlik", "İfade özgürlüğü", "Seyahat"], correctAnswer: "İfade özgürlüğü" },
        { id: 2, question: "Kanun önünde nasılız?", options: ["Farklı", "Eşit", "Belirsiz"], correctAnswer: "Eşit" },
        { id: 3, question: "Haklar ihlal edilirse nereye başvurulur?", options: ["Polis", "Mahkeme", "Gazete"], correctAnswer: "Mahkeme" },
        { id: 4, question: "Avukat ne yapar?", options: ["Yasal temsil", "Tedavi", "Öğretim"], correctAnswer: "Yasal temsil" },
        { id: 5, question: "Kamu denetçisi kimi korur?", options: ["Şirketleri", "Vatandaşları", "Politikacıları"], correctAnswer: "Vatandaşları" },
        { id: 6, question: "Eğitim hakkı nerede garanti?", options: ["Yasada", "Anayasada", "Hiçbirinde"], correctAnswer: "Anayasada" },
        { id: 7, question: "Ayrımcılık hangi konularda yasak?", options: ["Yaş", "Irk, cinsiyet, din", "Servet"], correctAnswer: "Irk, cinsiyet, din" },
        { id: 8, question: "Eğitim nasıl olmalı?", options: ["Ücretli", "Ücretsiz ve zorunlu", "İsteğe bağlı"], correctAnswer: "Ücretsiz ve zorunlu" },
        { id: 9, question: "Kamu denetçisi neye karşı korur?", options: ["Hastalık", "Kamu yönetimi suistimalleri", "Hava durumu"], correctAnswer: "Kamu yönetimi suistimalleri" },
        { id: 10, question: "Yasayı bilmek bizi ne yapar?", options: ["Zengin", "Bilinçli vatandaş", "Avukat"], correctAnswer: "Bilinçli vatandaş" }
    ]
};

// ===== ÜNİTE 77: BİLİM VE TEKNOLOJİ =====
const unit77Reading: UnitReading = {
    unitId: 77,
    title: "Bilim ve Teknoloji",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La inteligencia artificial está transformando todos los aspectos de nuestra vida diaria. Los algoritmos de aprendizaje automático pueden analizar enormes cantidades de datos en segundos y tomar decisiones complejas. En medicina, la IA ayuda a diagnosticar enfermedades con mayor precisión y velocidad. En transporte, los vehículos autónomos prometen revolucionar la movilidad urbana. Sin embargo, también hay preocupaciones éticas importantes sobre la privacidad de los datos, el impacto en el empleo y la toma de decisiones automatizada. Los expertos piden una regulación clara para que el desarrollo tecnológico beneficie a toda la humanidad de forma equitativa.",
        translation: "Yapay zeka günlük hayatımızın her alanını dönüştürüyor. Makine öğrenimi algoritmaları saniyeler içinde devasa miktarda veriyi analiz edebilir ve karmaşık kararlar alabilir. Tıpta yapay zeka hastalıkları daha doğru ve hızlı teşhis etmeye yardımcı oluyor. Ulaşımda otonom araçlar kentsel hareketliliği devrimleştirmeyi vaat ediyor. Ancak veri gizliliği, istihdama etkisi ve otomatik karar verme konusunda önemli etik endişeler de var. Uzmanlar teknolojik gelişmenin tüm insanlığa eşit şekilde fayda sağlaması için net düzenleme istiyor."
    },
    vocabulary: [
        { word: "Inteligencia artificial", meaning: "Yapay zeka" },
        { word: "Algoritmos", meaning: "Algoritmalar" },
        { word: "Vehículos autónomos", meaning: "Otonom araçlar" },
        { word: "Privacidad", meaning: "Gizlilik" },
        { word: "Regulación", meaning: "Düzenleme" }
    ],
    questions: [
        { id: 1, question: "Algoritmalar ne yapabiliyor?", options: ["Yavaş çalışmak", "Veri analizi", "Yemek yapmak"], correctAnswer: "Veri analizi" },
        { id: 2, question: "Tıpta yapay zeka ne yapıyor?", options: ["Ameliyat", "Teşhis", "İlaç üretimi"], correctAnswer: "Teşhis" },
        { id: 3, question: "Otonom araçlar ne vaat ediyor?", options: ["Ucuzluk", "Hareketlilik devrimi", "Çevre kirliliği"], correctAnswer: "Hareketlilik devrimi" },
        { id: 4, question: "Etik endişe ne?", options: ["Hız", "Gizlilik", "Renk"], correctAnswer: "Gizlilik" },
        { id: 5, question: "Uzmanlar ne istiyor?", options: ["Yasaklama", "Düzenleme", "Daha fazla yatırım"], correctAnswer: "Düzenleme" },
        { id: 6, question: "Yapay zeka neyi dönüştürüyor?", options: ["Sadece iş", "Her alanı", "Sadece eğlence"], correctAnswer: "Her alanı" },
        { id: 7, question: "Veriler ne kadar hızlı analiz ediliyor?", options: ["Günler", "Saatler", "Saniyeler"], correctAnswer: "Saniyeler" },
        { id: 8, question: "İstihdam hakkında endişe var mı?", options: ["Hayır", "Evet", "Bilinmiyor"], correctAnswer: "Evet" },
        { id: 9, question: "Teknoloji kime fayda sağlamalı?", options: ["Sadece şirketlere", "Tüm insanlığa", "Sadece zenginlere"], correctAnswer: "Tüm insanlığa" },
        { id: 10, question: "'Inteligencia artificial' ne demek?", options: ["Doğal zeka", "Yapay zeka", "İnsan zekası"], correctAnswer: "Yapay zeka" }
    ]
};

// ===== ÜNİTE 78: SAĞLIK VE BESLENME =====
const unit78Reading: UnitReading = {
    unitId: 78,
    title: "Sağlık ve Beslenme",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Una alimentación equilibrada es fundamental para mantener una buena salud a largo plazo. Los expertos recomiendan consumir frutas y verduras diariamente, al menos cinco porciones. Es importante limitar el azúcar y la sal, y preferir grasas saludables como el aceite de oliva en lugar de grasas saturadas. La dieta mediterránea, típica de España, Italia y Grecia, es considerada una de las más saludables del mundo. Además de la alimentación, es importante hacer ejercicio regularmente, dormir suficientes horas y gestionar el estrés. Evitar el tabaco y moderar el consumo de alcohol también son factores clave para una vida larga y saludable.",
        translation: "Dengeli beslenme uzun vadede iyi sağlığı korumak için temeldir. Uzmanlar günlük en az beş porsiyon meyve ve sebze tüketmeyi öneriyor. Şeker ve tuzu sınırlamak ve doymuş yağlar yerine zeytinyağı gibi sağlıklı yağları tercih etmek önemlidir. İspanya, İtalya ve Yunanistan'a özgü Akdeniz diyeti dünyanın en sağlıklılarından biri olarak kabul ediliyor. Beslenmenin yanı sıra düzenli egzersiz yapmak, yeterli uyumak ve stresi yönetmek önemlidir. Sigaradan kaçınmak ve alkol tüketimini ölçülü tutmak da uzun ve sağlıklı bir yaşam için anahtar faktörlerdir."
    },
    vocabulary: [
        { word: "Alimentación", meaning: "Beslenme" },
        { word: "Equilibrada", meaning: "Dengeli" },
        { word: "Saludable", meaning: "Sağlıklı" },
        { word: "Aceite de oliva", meaning: "Zeytinyağı" },
        { word: "Dieta", meaning: "Diyet" }
    ],
    questions: [
        { id: 1, question: "Günlük ne tüketilmeli?", options: ["Et", "Meyve ve sebze", "Tatlı"], correctAnswer: "Meyve ve sebze" },
        { id: 2, question: "Hangi yağ öneriliyor?", options: ["Tereyağı", "Zeytinyağı", "Margarin"], correctAnswer: "Zeytinyağı" },
        { id: 3, question: "Hangi diyet en sağlıklı?", options: ["Amerikan", "Akdeniz", "Fast food"], correctAnswer: "Akdeniz" },
        { id: 4, question: "Ne kaçınılmalı?", options: ["Spor", "Uyku", "Sigara"], correctAnswer: "Sigara" },
        { id: 5, question: "Stres nasıl yönetilmeli?", options: ["Görmezden gel", "Yönetilmeli", "Artırılmalı"], correctAnswer: "Yönetilmeli" },
        { id: 6, question: "Ne sınırlanmalı?", options: ["Su", "Şeker ve tuz", "Sebze"], correctAnswer: "Şeker ve tuz" },
        { id: 7, question: "Kaç porsiyon meyve-sebze?", options: ["2", "5", "10"], correctAnswer: "5" },
        { id: 8, question: "Egzersiz nasıl olmalı?", options: ["Nadiren", "Düzenli", "Hiç"], correctAnswer: "Düzenli" },
        { id: 9, question: "Alkol için ne?", options: ["Sınırsız", "Ölçülü", "Yasak"], correctAnswer: "Ölçülü" },
        { id: 10, question: "Uyku için ne gerekli?", options: ["Az saat", "Yeterli saat", "Hiç"], correctAnswer: "Yeterli saat" }
    ]
};

// ===== ÜNİTE 79: PSİKOLOJİ TEMELLERİ =====
const unit79Reading: UnitReading = {
    unitId: 79,
    title: "Psikoloji Temelleri",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La salud mental es tan importante como la salud física, aunque durante mucho tiempo fue ignorada. El estrés crónico, la ansiedad y la depresión afectan a millones de personas en todo el mundo. Es fundamental reconocer las señales de alerta: cambios de humor repentinos, problemas de sueño, falta de motivación o aislamiento social. Buscar ayuda profesional no es signo de debilidad sino de fortaleza y autoconocimiento. La terapia psicológica y, en algunos casos, la medicación pueden mejorar significativamente la calidad de vida. También ayudan las técnicas de relajación como la meditación, el ejercicio regular y mantener conexiones sociales significativas.",
        translation: "Ruh sağlığı fiziksel sağlık kadar önemlidir, ancak uzun süre görmezden gelindi. Kronik stres, anksiyete ve depresyon dünyada milyonlarca insanı etkiliyor. Uyarı işaretlerini tanımak temeldir: ani duygu durum değişiklikleri, uyku sorunları, motivasyon eksikliği veya sosyal izolasyon. Profesyonel yardım aramak zayıflık değil güç ve kendini tanıma işaretidir. Psikolojik terapi ve bazı durumlarda ilaç tedavisi yaşam kalitesini önemli ölçüde iyileştirebilir. Meditasyon gibi gevşeme teknikleri, düzenli egzersiz ve anlamlı sosyal bağlantıları sürdürmek de yardımcı olur."
    },
    vocabulary: [
        { word: "Salud mental", meaning: "Ruh sağlığı" },
        { word: "Ansiedad", meaning: "Anksiyete" },
        { word: "Depresión", meaning: "Depresyon" },
        { word: "Terapia", meaning: "Terapi" },
        { word: "Meditación", meaning: "Meditasyon" }
    ],
    questions: [
        { id: 1, question: "Ruh sağlığı ne kadar önemli?", options: ["Daha az", "Eşit", "Daha fazla"], correctAnswer: "Eşit" },
        { id: 2, question: "Belirtiler neler?", options: ["Açlık", "Uyku sorunu", "Susuzluk"], correctAnswer: "Uyku sorunu" },
        { id: 3, question: "Yardım istemek ne göstergesi?", options: ["Zayıflık", "Güç", "Hastalık"], correctAnswer: "Güç" },
        { id: 4, question: "Tedavi seçenekleri neler?", options: ["Sadece ilaç", "Terapi ve ilaç", "Hiçbir şey"], correctAnswer: "Terapi ve ilaç" },
        { id: 5, question: "Ne de yardımcı?", options: ["Yalnızlık", "Egzersiz", "Çok çalışmak"], correctAnswer: "Egzersiz" },
        { id: 6, question: "Kronik stres kimi etkiliyor?", options: ["Kimseyi", "Milyonlarca kişiyi", "Sadece yaşlıları"], correctAnswer: "Milyonlarca kişiyi" },
        { id: 7, question: "Meditasyon ne tür teknik?", options: ["Spor", "Gevşeme", "Yemek"], correctAnswer: "Gevşeme" },
        { id: 8, question: "Sosyal bağlantılar ne için?", options: ["Zararlı", "Yardımcı", "Önemsiz"], correctAnswer: "Yardımcı" },
        { id: 9, question: "Başka belirti ne?", options: ["Açlık", "Motivasyon eksikliği", "Enerji fazlası"], correctAnswer: "Motivasyon eksikliği" },
        { id: 10, question: "Ruh sağlığı uzun süre ne oldu?", options: ["Önemsendi", "Görmezden gelindi", "Araştırıldı"], correctAnswer: "Görmezden gelindi" }
    ]
};

// ===== ÜNİTE 80: POR VS PARA =====
const unit80Reading: UnitReading = {
    unitId: 80,
    title: "Por vs Para",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Las preposiciones 'por' y 'para' son de las más difíciles de dominar en español. 'Por' indica causa o razón: 'Gracias por tu ayuda' significa que la ayuda es la razón del agradecimiento. También indica medio: 'Viajamos por avión'. 'Para' indica objetivo o destino: 'Estudio para aprender' muestra el objetivo del estudio. También indica beneficiario: 'Este regalo es para ti'. Un truco útil: 'por' mira hacia atrás (causa), 'para' mira hacia adelante (propósito). Es importante practicar con muchos ejemplos para dominar la diferencia. Algunos verbos usan siempre una: 'trabajar para' (una empresa), 'preguntar por' (alguien).",
        translation: "'Por' ve 'para' edatları İspanyolca'da ustalaşması en zor olanlardandır. 'Por' sebep veya neden gösterir: 'Gracias por tu ayuda' yardımın teşekkür nedeni olduğunu gösterir. Ayrıca araç gösterir: 'Viajamos por avión' (Uçakla seyahat ediyoruz). 'Para' amaç veya hedef gösterir: 'Estudio para aprender' çalışmanın amacını gösterir. Ayrıca faydalanıcıyı gösterir: 'Este regalo es para ti' (Bu hediye senin için). Yararlı bir ipucu: 'por' geriye bakar (sebep), 'para' ileriye bakar (amaç). Farkı öğrenmek için çok örnekle pratik yapmak önemlidir. Bazı fiiller her zaman birini kullanır: 'trabajar para' (bir şirket için), 'preguntar por' (birini sormak)."
    },
    vocabulary: [
        { word: "Por", meaning: "Yüzünden/İçin (sebep)" },
        { word: "Para", meaning: "İçin (amaç)" },
        { word: "Causa", meaning: "Sebep" },
        { word: "Objetivo", meaning: "Amaç" },
        { word: "Beneficiario", meaning: "Faydalanıcı" }
    ],
    questions: [
        { id: 1, question: "'Por' ne gösterir?", options: ["Amaç", "Sebep", "Zaman"], correctAnswer: "Sebep" },
        { id: 2, question: "'Para' ne gösterir?", options: ["Sebep", "Amaç", "Araç"], correctAnswer: "Amaç" },
        { id: 3, question: "'Gracias por' ne tür kullanım?", options: ["Amaç", "Sebep", "Yer"], correctAnswer: "Sebep" },
        { id: 4, question: "'Para ti' ne demek?", options: ["Senin için", "Senden dolayı", "Seninle"], correctAnswer: "Senin için" },
        { id: 5, question: "'Por' hangi yöne bakar?", options: ["İleri", "Geri", "Yan"], correctAnswer: "Geri" },
        { id: 6, question: "'Para' hangi yöne bakar?", options: ["İleri", "Geri", "Aşağı"], correctAnswer: "İleri" },
        { id: 7, question: "'Viajamos por avión' ne demek?", options: ["Uçak için", "Uçakla", "Uçağa"], correctAnswer: "Uçakla" },
        { id: 8, question: "'Trabajar para' neyi gösterir?", options: ["Sebep", "Şirket/Amaç", "Zaman"], correctAnswer: "Şirket/Amaç" },
        { id: 9, question: "Bu edatlar neden zor?", options: ["Uzun", "Benzer kullanım", "Telaffuz"], correctAnswer: "Benzer kullanım" },
        { id: 10, question: "'Preguntar por' ne demek?", options: ["Sormak için", "Birini sormak", "Sorarak"], correctAnswer: "Birini sormak" }
    ]
};

// ===== ÜNİTE 81: SER VS ESTAR İLERİ =====
const unit81Reading: UnitReading = {
    unitId: 81,
    title: "Ser vs Estar İleri",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La diferencia entre 'ser' y 'estar' se complica con ciertos adjetivos que cambian de significado. 'Ser listo' significa ser inteligente como característica permanente. 'Estar listo' significa estar preparado en este momento. 'Ser aburrido' describe una persona que causa aburrimiento. 'Estar aburrido' expresa que la persona siente aburrimiento ahora. 'Ser rico' habla de tener dinero. 'Estar rico' describe que la comida tiene buen sabor. 'Ser verde' es el color. 'Estar verde' significa no estar maduro o no tener experiencia. Esta diferencia es fundamental para comunicarse correctamente y evitar malentendidos graciosos o embarazosos.",
        translation: "'Ser' ve 'estar' arasındaki fark bazı sıfatlarla anlam değiştirdiğinde karmaşıklaşır. 'Ser listo' kalıcı özellik olarak zeki olmak demektir. 'Estar listo' şu anda hazır olmak demektir. 'Ser aburrido' sıkıcılığa neden olan kişiyi tanımlar. 'Estar aburrido' kişinin şu anda sıkıntı hissettiğini ifade eder. 'Ser rico' parası olmaktan bahseder. 'Estar rico' yemeğin lezzetli olduğunu tanımlar. 'Ser verde' renktir. 'Estar verde' olgunlaşmamış veya deneyimsiz olmak demektir. Bu fark doğru iletişim kurmak ve komik veya utanç verici yanlış anlamalardan kaçınmak için temeldir."
    },
    vocabulary: [
        { word: "Ser listo", meaning: "Zeki olmak" },
        { word: "Estar listo", meaning: "Hazır olmak" },
        { word: "Ser aburrido", meaning: "Sıkıcı olmak" },
        { word: "Estar aburrido", meaning: "Sıkılmış olmak" },
        { word: "Estar verde", meaning: "Ham/Deneyimsiz olmak" }
    ],
    questions: [
        { id: 1, question: "'Ser listo' ne demek?", options: ["Hazır olmak", "Zeki olmak", "Hasta olmak"], correctAnswer: "Zeki olmak" },
        { id: 2, question: "'Estar listo' ne demek?", options: ["Zeki", "Hazır", "Yorgun"], correctAnswer: "Hazır" },
        { id: 3, question: "'Ser aburrido' kimi tanımlar?", options: ["Sıkılan", "Sıkıcı kişi", "Mutlu"], correctAnswer: "Sıkıcı kişi" },
        { id: 4, question: "'Estar aburrido' ne ifade eder?", options: ["Kalıcı özellik", "Şu anki his", "Fiziksel durum"], correctAnswer: "Şu anki his" },
        { id: 5, question: "'Ser rico' ne hakkında?", options: ["Yemek", "Para", "Sağlık"], correctAnswer: "Para" },
        { id: 6, question: "'Estar rico' neyi tanımlar?", options: ["Zengin kişi", "Lezzetli yemek", "Güzel ev"], correctAnswer: "Lezzetli yemek" },
        { id: 7, question: "'Ser verde' ne?", options: ["Ham", "Renk", "Hasta"], correctAnswer: "Renk" },
        { id: 8, question: "'Estar verde' ne demek?", options: ["Yeşil renk", "Ham/Deneyimsiz", "Hasta"], correctAnswer: "Ham/Deneyimsiz" },
        { id: 9, question: "Bu farkı bilmek neden önemli?", options: ["Gramer için", "Yanlış anlamadan kaçınmak", "Yazı için"], correctAnswer: "Yanlış anlamadan kaçınmak" },
        { id: 10, question: "Ser daha çok neyi ifade eder?", options: ["Geçici durum", "Kalıcı özellik", "Yer"], correctAnswer: "Kalıcı özellik" }
    ]
};

// ===== ÜNİTE 82: SPOR VE FİTNESS =====
const unit82Reading: UnitReading = {
    unitId: 82,
    title: "Spor ve Fitness",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "El deporte es esencial para mantener una buena salud física y mental. En España, el fútbol es el deporte más popular, con equipos legendarios como el Real Madrid y el FC Barcelona. Millones de personas van al gimnasio regularmente para hacer ejercicio: correr en la cinta, nadar en la piscina, levantar pesas o practicar yoga. El ciclismo también es muy popular, especialmente en ciudades con carriles bici. Cada cuatro años, el mundo se une para ver los Juegos Olímpicos y el Mundial de fútbol. El deporte nos enseña disciplina, trabajo en equipo y superación personal. También es una excelente forma de conocer gente y hacer amigos.",
        translation: "Spor iyi bir fiziksel ve ruhsal sağlığı korumak için şarttır. İspanya'da futbol en popüler spordur, Real Madrid ve FC Barcelona gibi efsanevi takımlarla. Milyonlarca insan egzersiz yapmak için düzenli olarak spor salonuna gider: koşu bandında koşmak, havuzda yüzmek, ağırlık kaldırmak veya yoga yapmak. Bisiklet de özellikle bisiklet yolu olan şehirlerde çok popüler. Her dört yılda bir dünya Olimpiyat Oyunları ve Dünya Kupası'nı izlemek için birleşir. Spor bize disiplin, takım çalışması ve kişisel gelişim öğretir. Ayrıca insanlarla tanışmak ve arkadaş edinmek için mükemmel bir yoldur."
    },
    vocabulary: [
        { word: "Gimnasio", meaning: "Spor salonu" },
        { word: "Entrenamiento", meaning: "Antrenman" },
        { word: "Equipo", meaning: "Takım" },
        { word: "Competición", meaning: "Yarışma" },
        { word: "Superación", meaning: "Gelişim/Aşma" }
    ],
    questions: [
        { id: 1, question: "En popüler spor ne?", options: ["Tenis", "Futbol", "Basketbol"], correctAnswer: "Futbol" },
        { id: 2, question: "Dünya Kupası ne sıklıkla?", options: ["2 yıl", "4 yıl", "Yıllık"], correctAnswer: "4 yıl" },
        { id: 3, question: "Spor salonu aktiviteleri?", options: ["Sadece koşu", "Koşu, yüzme, ağırlık", "Sadece yoga"], correctAnswer: "Koşu, yüzme, ağırlık" },
        { id: 4, question: "Bisiklet nerede popüler?", options: ["Köylerde", "Bisiklet yolu olan şehirlerde", "Dağlarda"], correctAnswer: "Bisiklet yolu olan şehirlerde" },
        { id: 5, question: "Spor ne öğretir?", options: ["Tembellik", "Disiplin ve takım çalışması", "Para kazanmak"], correctAnswer: "Disiplin ve takım çalışması" },
        { id: 6, question: "Hangi İspanyol takımları ünlü?", options: ["Liverpool", "Real Madrid, Barcelona", "PSG"], correctAnswer: "Real Madrid, Barcelona" },
        { id: 7, question: "Spor ruh sağlığı için nasıl?", options: ["Zararlı", "Faydalı", "Etkisiz"], correctAnswer: "Faydalı" },
        { id: 8, question: "Olimpiyatlar ne sıklıkla?", options: ["2 yıl", "4 yıl", "Yıllık"], correctAnswer: "4 yıl" },
        { id: 9, question: "Spor arkadaşlık için nasıl?", options: ["Kötü", "Mükemmel", "Etkisiz"], correctAnswer: "Mükemmel" },
        { id: 10, question: "'Gimnasio' ne demek?", options: ["Stadyum", "Spor salonu", "Park"], correctAnswer: "Spor salonu" }
    ]
};

// ===== ÜNİTE 83: SEYAHAT DENEYİMLERİ =====
const unit83Reading: UnitReading = {
    unitId: 83,
    title: "Seyahat Deneyimleri",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Viajar es una de las mejores formas de aprender un idioma y conocer nuevas culturas. Cuando visitas un país hispanohablante, practicas el español en situaciones reales: pedir comida en restaurantes, preguntar direcciones en la calle, negociar precios en mercados. Los viajes te obligan a salir de tu zona de confort y comunicarte aunque cometas errores. Cada viaje es una aventura llena de recuerdos inolvidables. Es importante planificar bien: reservar alojamiento, preparar documentos como el pasaporte, y hacer un itinerario flexible. Los mejores viajes combinan visitas turísticas con experiencias locales auténticas.",
        translation: "Seyahat bir dil öğrenmenin ve yeni kültürler tanımanın en iyi yollarından biridir. İspanyolca konuşulan bir ülkeyi ziyaret ettiğinde, gerçek durumlarda pratik yaparsın: restoranlarda yemek sipariş etmek, sokakta yol tarifi sormak, pazarlarda fiyat pazarlığı yapmak. Seyahatler seni konfor alanından çıkmaya ve hata yapsan bile iletişim kurmaya zorlar. Her seyahat unutulmaz anılarla dolu bir maceradır. İyi planlamak önemlidir: konaklama rezervasyonu yapmak, pasaport gibi belgeleri hazırlamak ve esnek bir güzergah oluşturmak. En iyi seyahatler turistik ziyaretleri otantik yerel deneyimlerle birleştirir."
    },
    vocabulary: [
        { word: "Viaje", meaning: "Yolculuk" },
        { word: "Recuerdos", meaning: "Anılar" },
        { word: "Alojamiento", meaning: "Konaklama" },
        { word: "Itinerario", meaning: "Güzergah" },
        { word: "Aventura", meaning: "Macera" }
    ],
    questions: [
        { id: 1, question: "Seyahat ne için iyi?", options: ["Para biriktirmek", "Dil öğrenmek", "Uyumak"], correctAnswer: "Dil öğrenmek" },
        { id: 2, question: "Gerçek pratik nerede?", options: ["Evde", "Restoran, sokak, pazar", "Okulda"], correctAnswer: "Restoran, sokak, pazar" },
        { id: 3, question: "Seyahat neyi zorlar?", options: ["Uyumayı", "Konfor alanından çıkmayı", "Yemek yemeyi"], correctAnswer: "Konfor alanından çıkmayı" },
        { id: 4, question: "Planlama için ne gerekli?", options: ["Sadece para", "Konaklama ve belgeler", "Hiçbir şey"], correctAnswer: "Konaklama ve belgeler" },
        { id: 5, question: "En iyi seyahat nasıl?", options: ["Sadece turistik", "Turistik ve yerel", "Sadece otel"], correctAnswer: "Turistik ve yerel" },
        { id: 6, question: "Hata yapınca ne olmalı?", options: ["Susmak", "Yine de iletişim kurmak", "Geri dönmek"], correctAnswer: "Yine de iletişim kurmak" },
        { id: 7, question: "Güzergah nasıl olmalı?", options: ["Katı", "Esnek", "Yok"], correctAnswer: "Esnek" },
        { id: 8, question: "'Alojamiento' ne demek?", options: ["Yemek", "Konaklama", "Ulaşım"], correctAnswer: "Konaklama" },
        { id: 9, question: "Her seyahat ne?", options: ["Sıkıcı", "Unutulmaz macera", "Pahalı"], correctAnswer: "Unutulmaz macera" },
        { id: 10, question: "Hangi belge gerekli?", options: ["Ehliyet", "Pasaport", "Diploma"], correctAnswer: "Pasaport" }
    ]
};

// ===== ÜNİTE 84: MÜZİK VE SANAT =====
const unit84Reading: UnitReading = {
    unitId: 84,
    title: "Müzik ve Sanat",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "El arte y la música son expresiones culturales fundamentales en el mundo hispano. España tiene una rica tradición artística con genios como Picasso, Dalí y Goya, cuyas obras se exhiben en el Museo del Prado de Madrid y el Museo Reina Sofía. En música, el flamenco es Patrimonio Cultural de la Humanidad, combinando cante, baile y guitarra con pasión y profundidad. El reggaetón, la salsa y el pop latino dominan las listas mundiales. Los museos, galerías y conciertos son espacios donde el arte cobra vida. Aprender sobre arte español enriquece enormemente la comprensión de la cultura y el idioma.",
        translation: "Sanat ve müzik İspanyol dünyasında temel kültürel ifadelerdir. İspanya'nın Madrid'deki Prado Müzesi ve Reina Sofía Müzesi'nde eserleri sergilenen Picasso, Dalí ve Goya gibi dahilerle zengin bir sanat geleneği var. Müzikte flamenko, cante, baile ve gitarı tutku ve derinlikle birleştirerek İnsanlığın Kültürel Mirası'dır. Reggaeton, salsa ve Latin pop dünya listelerine hakimdir. Müzeler, galeriler ve konserler sanatın canlandığı mekanlardır. İspanyol sanatı hakkında öğrenmek kültür ve dil anlayışını büyük ölçüde zenginleştirir."
    },
    vocabulary: [
        { word: "Museo", meaning: "Müze" },
        { word: "Obra maestra", meaning: "Başyapıt" },
        { word: "Concierto", meaning: "Konser" },
        { word: "Galería", meaning: "Galeri" },
        { word: "Patrimonio", meaning: "Miras" }
    ],
    questions: [
        { id: 1, question: "İspanya'nın ünlü müzesi?", options: ["Louvre", "Prado", "British"], correctAnswer: "Prado" },
        { id: 2, question: "Flamenko ne?", options: ["Yemek", "Kültürel Miras", "Spor"], correctAnswer: "Kültürel Miras" },
        { id: 3, question: "Hangi ressam ünlü?", options: ["Van Gogh", "Picasso", "Monet"], correctAnswer: "Picasso" },
        { id: 4, question: "Sanat nerede canlanır?", options: ["Evde", "Müze ve konser", "Parkta"], correctAnswer: "Müze ve konser" },
        { id: 5, question: "Flamenko neyi birleştirir?", options: ["Yemek ve dans", "Cante, baile, gitar", "Spor ve müzik"], correctAnswer: "Cante, baile, gitar" },
        { id: 6, question: "Dünya listelerine ne hakim?", options: ["Rock", "Latin pop", "Jazz"], correctAnswer: "Latin pop" },
        { id: 7, question: "Dalí hangi ülkeden?", options: ["İtalya", "İspanya", "Fransa"], correctAnswer: "İspanya" },
        { id: 8, question: "Sanat öğrenmek neyi zenginleştirir?", options: ["Cüzdanı", "Kültür anlayışını", "Yemeği"], correctAnswer: "Kültür anlayışını" },
        { id: 9, question: "'Concierto' ne demek?", options: ["Müze", "Konser", "Galeri"], correctAnswer: "Konser" },
        { id: 10, question: "Goya kim?", options: ["Müzisyen", "Ressam", "Yazar"], correctAnswer: "Ressam" }
    ]
};

// ===== ÜNİTE 85: İLİŞKİLER VE SOSYAL HAYAT =====
const unit85Reading: UnitReading = {
    unitId: 85,
    title: "İlişkiler ve Sosyal Hayat",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Las relaciones humanas son complejas pero fundamentales para nuestra felicidad. La confianza y el respeto mutuo son la base de cualquier amistad duradera y de las relaciones de pareja. Cuando hay conflictos, es esencial comunicarse abiertamente, escuchar al otro y buscar soluciones juntos. Perdonar los errores y apoyarse mutuamente fortalece los vínculos. En España, la vida social es muy importante: reunirse con amigos y familia para comer, salir los fines de semana, celebrar fiestas. Las redes sociales han cambiado la forma de relacionarnos, pero nada sustituye el contacto personal y las conversaciones cara a cara.",
        translation: "İnsan ilişkileri karmaşık ama mutluluğumuz için temeldir. Güven ve karşılıklı saygı herhangi bir kalıcı dostluğun ve çift ilişkilerinin temelini oluşturur. Çatışma olduğunda, açıkça iletişim kurmak, diğerini dinlemek ve birlikte çözüm aramak esastır. Hataları affetmek ve karşılıklı destek olmak bağları güçlendirir. İspanya'da sosyal hayat çok önemlidir: yemek için arkadaş ve aileyle buluşmak, hafta sonları dışarı çıkmak, kutlamalar yapmak. Sosyal medya ilişki kurma şeklimizi değiştirdi, ama hiçbir şey kişisel temas ve yüz yüze sohbetin yerini tutmaz."
    },
    vocabulary: [
        { word: "Confianza", meaning: "Güven" },
        { word: "Respeto", meaning: "Saygı" },
        { word: "Amistad", meaning: "Dostluk" },
        { word: "Perdonar", meaning: "Affetmek" },
        { word: "Vínculos", meaning: "Bağlar" }
    ],
    questions: [
        { id: 1, question: "İlişkilerin temeli ne?", options: ["Para", "Güven ve saygı", "Mesafe"], correctAnswer: "Güven ve saygı" },
        { id: 2, question: "Çatışmada ne yapılmalı?", options: ["Kaçmak", "Açıkça iletişim", "Susmak"], correctAnswer: "Açıkça iletişim" },
        { id: 3, question: "Bağları ne güçlendirir?", options: ["Para", "Affetmek ve destek olmak", "Tartışmak"], correctAnswer: "Affetmek ve destek olmak" },
        { id: 4, question: "İspanya'da sosyal hayat nasıl?", options: ["Önemsiz", "Çok önemli", "Yok"], correctAnswer: "Çok önemli" },
        { id: 5, question: "Sosyal medya neyi değiştirdi?", options: ["Yemek", "İlişki kurma şekli", "Uyku"], correctAnswer: "İlişki kurma şekli" },
        { id: 6, question: "En iyi iletişim nasıl?", options: ["Mesaj", "Yüz yüze", "E-posta"], correctAnswer: "Yüz yüze" },
        { id: 7, question: "Hafta sonları ne yapılır?", options: ["Çalışmak", "Dışarı çıkmak", "Uyumak"], correctAnswer: "Dışarı çıkmak" },
        { id: 8, question: "'Perdonar' ne demek?", options: ["Suçlamak", "Affetmek", "Unutmak"], correctAnswer: "Affetmek" },
        { id: 9, question: "Karşılıklı destek ne için?", options: ["Zayıflatır", "Güçlendirir", "Boşuna"], correctAnswer: "Güçlendirir" },
        { id: 10, question: "İlişkiler ne için önemli?", options: ["Para", "Mutluluk", "İş"], correctAnswer: "Mutluluk" }
    ]
};

// ===== ÜNİTE 86: İŞ VE KARİYER =====
const unit86Reading: UnitReading = {
    unitId: 86,
    title: "İş ve Kariyer",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "El mundo laboral requiere una combinación de habilidades técnicas y personales. Para encontrar un buen empleo, es fundamental preparar un currículum claro y conciso que destaque tus logros. Las entrevistas de trabajo son oportunidades para demostrar tus capacidades y personalidad. El trabajo en equipo, la comunicación efectiva y la adaptabilidad son competencias muy valoradas por las empresas. Una vez en el trabajo, es importante mantener una actitud profesional, cumplir los plazos y buscar oportunidades de desarrollo. El equilibrio entre vida laboral y personal es clave para evitar el agotamiento y mantener la motivación a largo plazo.",
        translation: "İş dünyası teknik ve kişisel becerilerin kombinasyonunu gerektirir. İyi bir iş bulmak için başarılarını öne çıkaran net ve özlü bir özgeçmiş hazırlamak temeldir. İş görüşmeleri yeteneklerini ve kişiliğini göstermek için fırsatlardır. Takım çalışması, etkili iletişim ve uyum yeteneği şirketler tarafından çok değer verilen yetkinliklerdir. İşe girdikten sonra profesyonel bir tutum sürdürmek, son teslim tarihlerine uymak ve gelişim fırsatları aramak önemlidir. İş ve özel hayat dengesi tükenmişlikten kaçınmak ve uzun vadeli motivasyonu korumak için anahtardır."
    },
    vocabulary: [
        { word: "Currículum", meaning: "Özgeçmiş" },
        { word: "Entrevista", meaning: "Mülakat" },
        { word: "Empleo", meaning: "İş" },
        { word: "Sueldo", meaning: "Maaş" },
        { word: "Equilibrio", meaning: "Denge" }
    ],
    questions: [
        { id: 1, question: "İş için ne gerekli?", options: ["Sadece diploma", "Özgeçmiş ve mülakat", "Hiçbir şey"], correctAnswer: "Özgeçmiş ve mülakat" },
        { id: 2, question: "Değerli yetkinlik?", options: ["Yalnız çalışma", "Takım çalışması", "Sessizlik"], correctAnswer: "Takım çalışması" },
        { id: 3, question: "Özgeçmiş nasıl olmalı?", options: ["Uzun", "Net ve özlü", "Boş"], correctAnswer: "Net ve özlü" },
        { id: 4, question: "Mülakat ne için?", options: ["Yemek", "Yetenekleri göstermek", "Uyumak"], correctAnswer: "Yetenekleri göstermek" },
        { id: 5, question: "İşte ne önemli?", options: ["Geç kalmak", "Profesyonel tutum", "Şikayet etmek"], correctAnswer: "Profesyonel tutum" },
        { id: 6, question: "Tükenmişlikten kaçınmak için?", options: ["Daha çok çalışmak", "İş-hayat dengesi", "Uyumamak"], correctAnswer: "İş-hayat dengesi" },
        { id: 7, question: "'Entrevista' ne demek?", options: ["Özgeçmiş", "Mülakat", "Maaş"], correctAnswer: "Mülakat" },
        { id: 8, question: "Uyum yeteneği neden önemli?", options: ["Değişime ayak uydurmak", "Değişmemek", "Şikayet etmek"], correctAnswer: "Değişime ayak uydurmak" },
        { id: 9, question: "Son teslim tarihlerine ne yapılmalı?", options: ["Gecikmek", "Uymak", "Görmezden gelmek"], correctAnswer: "Uymak" },
        { id: 10, question: "Gelişim fırsatları ne için?", options: ["Gereksiz", "Kariyer ilerlemesi", "Zaman kaybı"], correctAnswer: "Kariyer ilerlemesi" }
    ]
};

// ===== ÜNİTE 87: EDEBİYAT 2 =====
const unit87Reading: UnitReading = {
    unitId: 87,
    title: "Edebiyat 2",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "La literatura hispanoamericana es extraordinariamente rica y variada. Gabriel García Márquez, colombiano, ganó el Premio Nobel con 'Cien años de soledad', obra maestra del realismo mágico. Isabel Allende, chilena, escribe novelas sobre historia familiar y temas sociales. Mario Vargas Llosa, peruano y también Nobel, explora la política latinoamericana. La poesía de Pablo Neruda habla del amor, la naturaleza y la justicia social con pasión. Jorge Luis Borges, argentino, es famoso por sus cuentos filosóficos. Estos autores han influido profundamente en la literatura mundial y son lectura esencial para quien quiera entender la cultura hispana.",
        translation: "Latin Amerika edebiyatı olağanüstü zengin ve çeşitlidir. Kolombiyalı Gabriel García Márquez, büyülü gerçekçiliğin başyapıtı 'Yüzyıllık Yalnızlık' ile Nobel Ödülü kazandı. Şilili Isabel Allende aile tarihi ve sosyal konular hakkında romanlar yazıyor. Perulu ve Nobel sahibi Mario Vargas Llosa Latin Amerika siyasetini araştırıyor. Pablo Neruda'nın şiiri aşk, doğa ve sosyal adaletten tutkuyla bahseder. Arjantinli Jorge Luis Borges felsefi öyküleriyle ünlüdür. Bu yazarlar dünya edebiyatını derinden etkilemiş ve İspanyol kültürünü anlamak isteyen herkes için temel okumadır."
    },
    vocabulary: [
        { word: "Novela", meaning: "Roman" },
        { word: "Premio Nobel", meaning: "Nobel Ödülü" },
        { word: "Realismo mágico", meaning: "Büyülü gerçekçilik" },
        { word: "Cuento", meaning: "Öykü" },
        { word: "Poesía", meaning: "Şiir" }
    ],
    questions: [
        { id: 1, question: "Nobel kazanan Kolombiyalı?", options: ["Neruda", "García Márquez", "Allende"], correctAnswer: "García Márquez" },
        { id: 2, question: "García Márquez'in ünlü eseri?", options: ["Don Kişot", "Yüzyıllık Yalnızlık", "Şiirler"], correctAnswer: "Yüzyıllık Yalnızlık" },
        { id: 3, question: "Büyülü gerçekçilik kimin tarzı?", options: ["Borges", "García Márquez", "Neruda"], correctAnswer: "García Márquez" },
        { id: 4, question: "Isabel Allende nereli?", options: ["Peru", "Şili", "Arjantin"], correctAnswer: "Şili" },
        { id: 5, question: "Neruda ne yazıyor?", options: ["Roman", "Şiir", "Tiyatro"], correctAnswer: "Şiir" },
        { id: 6, question: "Borges hangi türde ünlü?", options: ["Şiir", "Felsefi öykü", "Roman"], correctAnswer: "Felsefi öykü" },
        { id: 7, question: "Vargas Llosa nereli?", options: ["Kolombiya", "Peru", "Meksika"], correctAnswer: "Peru" },
        { id: 8, question: "Neruda neyi anlatıyor?", options: ["Sadece aşk", "Aşk, doğa, adalet", "Sadece politika"], correctAnswer: "Aşk, doğa, adalet" },
        { id: 9, question: "'Cuento' ne demek?", options: ["Roman", "Öykü", "Şiir"], correctAnswer: "Öykü" },
        { id: 10, question: "Bu yazarlar neyi etkiledi?", options: ["Sadece İspanya", "Dünya edebiyatı", "Sadece Latin Amerika"], correctAnswer: "Dünya edebiyatı" }
    ]
};

// ===== ÜNİTE 88: İSPANYOL COĞRAFYASI =====
const unit88Reading: UnitReading = {
    unitId: 88,
    title: "İspanyol Coğrafyası",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "España tiene una geografía muy diversa que influye en su cultura y tradiciones. El norte, con regiones como Galicia, Asturias y el País Vasco, es verde y montañoso con clima oceánico lluvioso. El centro es una meseta alta y seca, con inviernos fríos y veranos calurosos. El sur, Andalucía, tiene clima mediterráneo con playas espectaculares. Las Islas Baleares en el Mediterráneo son destino turístico internacional, mientras las Islas Canarias, cerca de África, tienen clima subtropical y volcanes. Los Pirineos separan España de Francia. Esta diversidad hace que cada región tenga su propia personalidad, gastronomía y a veces incluso su propia lengua.",
        translation: "İspanya kültürünü ve geleneklerini etkileyen çok çeşitli bir coğrafyaya sahiptir. Galiçya, Asturias ve Bask Ülkesi gibi bölgeleri içeren kuzey bölgesi yeşil ve dağlıktır, yağışlı okyanus iklimine sahiptir. Merkez, soğuk kışları ve sıcak yazları olan yüksek ve kuru bir yayla. Güneyde Endülüs, muhteşem plajlarıyla Akdeniz iklimine sahiptir. Akdeniz'deki Balear Adaları uluslararası turizm destinasyonuyken, Afrika'ya yakın Kanarya Adaları'nda subtropikal iklim ve yanardağlar var. Pireneler İspanya'yı Fransa'dan ayırır. Bu çeşitlilik her bölgenin kendi kişiliği, mutfağı ve bazen kendi diline sahip olmasını sağlar."
    },
    vocabulary: [
        { word: "Meseta", meaning: "Yayla" },
        { word: "Costa", meaning: "Kıyı" },
        { word: "Montaña", meaning: "Dağ" },
        { word: "Clima", meaning: "İklim" },
        { word: "Isla", meaning: "Ada" }
    ],
    questions: [
        { id: 1, question: "Kuzey nasıl?", options: ["Kurak", "Yeşil ve yağışlı", "Çöl"], correctAnswer: "Yeşil ve yağışlı" },
        { id: 2, question: "Merkez nasıl?", options: ["Yağışlı", "Kuru yayla", "Tropikal"], correctAnswer: "Kuru yayla" },
        { id: 3, question: "Kanarya'da ne var?", options: ["Buzullar", "Yanardağlar", "Ormanlar"], correctAnswer: "Yanardağlar" },
        { id: 4, question: "Pireneler neyi ayırır?", options: ["İspanya-Portekiz", "İspanya-Fransa", "İspanya-İtalya"], correctAnswer: "İspanya-Fransa" },
        { id: 5, question: "Endülüs'ün iklimi?", options: ["Soğuk", "Akdeniz", "Kutup"], correctAnswer: "Akdeniz" },
        { id: 6, question: "Balear Adaları nerede?", options: ["Atlas Okyanusu", "Akdeniz", "Baltık"], correctAnswer: "Akdeniz" },
        { id: 7, question: "Galiçya nerede?", options: ["Güney", "Kuzey", "Doğu"], correctAnswer: "Kuzey" },
        { id: 8, question: "Kanarya nereye yakın?", options: ["Avrupa", "Afrika", "Asya"], correctAnswer: "Afrika" },
        { id: 9, question: "'Isla' ne demek?", options: ["Dağ", "Ada", "Irmak"], correctAnswer: "Ada" },
        { id: 10, question: "Bu çeşitlilik ne sağlar?", options: ["Tek tip kültür", "Bölgesel farklılıklar", "Problem"], correctAnswer: "Bölgesel farklılıklar" }
    ]
};

// ===== ÜNİTE 89: LATİN AMERİKA KÜLTÜRÜ =====
const unit89Reading: UnitReading = {
    unitId: 89,
    title: "Latin Amerika Kültürü",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "Latinoamérica es un continente de extraordinaria diversidad cultural donde el español se habla con acentos y vocabulario diferentes. En Argentina se usa el voseo ('vos tenés' en lugar de 'tú tienes') y el tango es símbolo nacional. México tiene una rica herencia maya y azteca, con comida picante y mariachis. Colombia es famosa por su cumbia y café de calidad mundial. Cuba aporta salsa, son y una historia única. Perú conserva las ruinas de Machu Picchu y la herencia inca. Cada país tiene sus propias tradiciones, música y gastronomía. El español varía enormemente: lo que en España es 'coche' en México es 'carro' y en Argentina 'auto'.",
        translation: "Latin Amerika İspanyolca'nın farklı aksanlar ve kelime dağarcığıyla konuşulduğu olağanüstü kültürel çeşitliliğe sahip bir kıtadır. Arjantin'de voseo kullanılır ('tú tienes' yerine 'vos tenés') ve tango ulusal semboldür. Meksika'nın zengin Maya ve Aztek mirası, baharatlı yemekleri ve mariachi'leri var. Kolombiya cumbia'sı ve dünya kalitesinde kahvesiyle ünlü. Küba salsa, son ve benzersiz bir tarih katkıda bulunur. Peru, Machu Picchu kalıntılarını ve İnka mirasını koruyor. Her ülkenin kendi gelenekleri, müziği ve mutfağı var. İspanyolca büyük ölçüde değişir: İspanya'da 'coche' olan Meksika'da 'carro' ve Arjantin'de 'auto'dur."
    },
    vocabulary: [
        { word: "Voseo", meaning: "Vos kullanımı" },
        { word: "Tango", meaning: "Tango" },
        { word: "Cumbia", meaning: "Cumbia" },
        { word: "Herencia", meaning: "Miras" },
        { word: "Acento", meaning: "Aksan" }
    ],
    questions: [
        { id: 1, question: "Arjantin'in dansı?", options: ["Salsa", "Tango", "Cumbia"], correctAnswer: "Tango" },
        { id: 2, question: "Voseo nerede kullanılır?", options: ["İspanya", "Arjantin", "Meksika"], correctAnswer: "Arjantin" },
        { id: 3, question: "Meksika'nın mirası?", options: ["İnka", "Maya ve Aztek", "Viking"], correctAnswer: "Maya ve Aztek" },
        { id: 4, question: "Kolombiya neyle ünlü?", options: ["Tango", "Cumbia ve kahve", "Tequila"], correctAnswer: "Cumbia ve kahve" },
        { id: 5, question: "Machu Picchu nerede?", options: ["Meksika", "Peru", "Arjantin"], correctAnswer: "Peru" },
        { id: 6, question: "Küba'nın müziği?", options: ["Tango", "Salsa ve son", "Mariachi"], correctAnswer: "Salsa ve son" },
        { id: 7, question: "'Coche' Meksika'da ne?", options: ["Coche", "Carro", "Auto"], correctAnswer: "Carro" },
        { id: 8, question: "Mariachi nereye ait?", options: ["Küba", "Arjantin", "Meksika"], correctAnswer: "Meksika" },
        { id: 9, question: "'Vos tenés' İspanya'da ne?", options: ["Vos tenés", "Tú tienes", "Él tiene"], correctAnswer: "Tú tienes" },
        { id: 10, question: "Latin Amerika'da İspanyolca nasıl?", options: ["Aynı", "Her yerde farklı", "Yok"], correctAnswer: "Her yerde farklı" }
    ]
};

// ===== ÜNİTE 90: B1 FİNAL =====
const unit90Reading: UnitReading = {
    unitId: 90,
    title: "B1 Kapsamlı Final",
    language: "İspanyolca",
    level: "B1",
    story: {
        text: "¡Felicidades! Has completado el nivel B1 de español y ahora eres un hablante independiente. Puedes expresar opiniones, hablar del pasado y futuro con fluidez, entender textos complejos y mantener conversaciones sobre temas variados. El subjuntivo, los condicionales y las diferencias entre ser/estar y por/para ya no son un misterio. Has explorado la rica cultura española y latinoamericana, desde la literatura de Cervantes y García Márquez hasta el flamenco y el tango. El siguiente paso es B2, donde perfeccionarás tu fluidez y profundizarás en temas académicos y profesionales. Recuerda: la práctica constante es la clave del éxito. ¡Sigue adelante!",
        translation: "Tebrikler! İspanyolca B1 seviyesini tamamladın ve artık bağımsız bir konuşucusun. Görüş belirtebilir, geçmiş ve gelecekten akıcı bir şekilde bahsedebilir, karmaşık metinler anlayabilir ve çeşitli konularda sohbet sürdürebilirsin. Subjuntivo, koşul cümleleri ve ser/estar ile por/para arasındaki farklar artık bir sır değil. Cervantes ve García Márquez'in edebiyatından flamenko ve tangoya kadar zengin İspanyol ve Latin Amerika kültürünü keşfettin. Sonraki adım B2, orada akıcılığını mükemmelleştirecek ve akademik ve profesyonel konularda derinleşeceksin. Unutma: sürekli pratik başarının anahtarı. Devam et!"
    },
    vocabulary: [
        { word: "Fluidez", meaning: "Akıcılık" },
        { word: "Independiente", meaning: "Bağımsız" },
        { word: "Perfeccionar", meaning: "Mükemmelleştirmek" },
        { word: "Práctica", meaning: "Pratik" },
        { word: "Éxito", meaning: "Başarı" }
    ],
    questions: [
        { id: 1, question: "B1'de ne oldun?", options: ["Başlangıç", "Bağımsız konuşucu", "Uzman"], correctAnswer: "Bağımsız konuşucu" },
        { id: 2, question: "Başarının anahtarı?", options: ["Şans", "Sürekli pratik", "Para"], correctAnswer: "Sürekli pratik" },
        { id: 3, question: "B1'de ne öğrenildi?", options: ["Sadece kelime", "Subjuntivo ve koşullar", "Sadece telaffuz"], correctAnswer: "Subjuntivo ve koşullar" },
        { id: 4, question: "Sonraki seviye ne?", options: ["A2", "B2", "C1"], correctAnswer: "B2" },
        { id: 5, question: "B2'de ne yapılacak?", options: ["Aynı şeyler", "Akıcılığı mükemmelleştirmek", "Sıfırdan başlamak"], correctAnswer: "Akıcılığı mükemmelleştirmek" },
        { id: 6, question: "Hangi edebiyat öğrenildi?", options: ["İngiliz", "İspanyol ve Latin Amerika", "Fransız"], correctAnswer: "İspanyol ve Latin Amerika" },
        { id: 7, question: "'Éxito' ne demek?", options: ["Çıkış", "Başarı", "Giriş"], correctAnswer: "Başarı" },
        { id: 8, question: "Hangi dans öğrenildi?", options: ["Vals", "Flamenko ve tango", "Bale"], correctAnswer: "Flamenko ve tango" },
        { id: 9, question: "Artık ne yapabilirsin?", options: ["Sadece okumak", "Görüş belirtmek", "Sadece dinlemek"], correctAnswer: "Görüş belirtmek" },
        { id: 10, question: "Mesaj ne?", options: ["Dur", "Devam et", "Unut"], correctAnswer: "Devam et" }
    ]
};

// ===== B1 READING MAPPING (ID: 61-90) =====
const b1Readings: { [key: number]: UnitReading } = {
    61: unit61Reading, 62: unit62Reading, 63: unit63Reading, 64: unit64Reading, 65: unit65Reading,
    66: unit66Reading, 67: unit67Reading, 68: unit68Reading, 69: unit69Reading, 70: unit70Reading,
    71: unit71Reading, 72: unit72Reading, 73: unit73Reading, 74: unit74Reading, 75: unit75Reading,
    76: unit76Reading, 77: unit77Reading, 78: unit78Reading, 79: unit79Reading, 80: unit80Reading,
    81: unit81Reading, 82: unit82Reading, 83: unit83Reading, 84: unit84Reading, 85: unit85Reading,
    86: unit86Reading, 87: unit87Reading, 88: unit88Reading, 89: unit89Reading, 90: unit90Reading
};

export function getB1ReadingForUnit(unitId: number): UnitReading | undefined {
    return b1Readings[unitId];
}
