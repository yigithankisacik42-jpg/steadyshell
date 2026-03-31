/**
 * SteadyShell Lectures - English A2 (Units 131-160)
 * Curriculum ile uyumlu içerikler
 */

import { LectureSection, EnglishLecture } from './lectures-en-a1';

// Unit 131: Past Simple Regular
const u131: EnglishLecture = {
    unitId: 131,
    title: "Past Simple - Regular Verbs",
    introduction: "Geçmişte tamamlanmış eylemleri anlatmak için 'Past Simple' (Belirli Geçmiş Zaman) kullanırız. Bu ünitede düzenli fiillere odaklanacağız.",
    sections: [
        {
            title: "Düzenli Fiillerin Yapısı",
            content: "Düzenli fiillerin sonuna '-ed' takısı getirerek geçmiş zaman yaparız.",
            examples: [
                { english: "Work -> Worked", turkish: "Çalışmak -> Çalıştı" },
                { english: "Play -> Played", turkish: "Oynamak -> Oynadı" }
            ]
        },
        {
            title: "Yazım Kuralları",
            content: "Sessiz + 'y' ile biten fiillerde 'y' düşer ve '-ied' gelir (try -> tried). Sadece 'e' ile bitenlere sadece 'd' eklenir (dance -> danced).",
            examples: [
                { english: "I watched television last night.", turkish: "Dün gece televizyon izledim." },
                { english: "They stayed at a hotel.", turkish: "Bir otelde kaldılar." }
            ]
        }
    ],
    tips: ["Zaman zarfları (yesterday, last night, two days ago) cümleye anlam katar."],
    summary: "Düzenli fiillerin sonuna '-ed' ekleyerek geçmişten bahsedebilirsiniz."
};

// Unit 132: Past Simple Irregular
const u132: EnglishLecture = {
    unitId: 132,
    title: "Past Simple - Irregular Verbs",
    introduction: "Bazı fiiller geçmiş zamanda '-ed' takısı almazlar, tamamen değişirler. Bunlara 'Düzensiz Fiiller' diyoruz.",
    sections: [
        {
            title: "Yaygın Düzensiz Fiiller",
            content: "En sık kullanılan düzensiz fiillerin ikinci hallerini ezberlemek konuşmanızı hızlandıracaktır.",
            examples: [
                { english: "Go -> Went", turkish: "Gitmek -> Gitti" },
                { english: "See -> Saw", turkish: "Görmek -> Gördü" },
                { english: "Have -> Had", turkish: "Sahip olmak -> Vardı/Oldu" }
            ]
        },
        {
            title: "Cümle İçinde Kullanım",
            content: "Cümle olumsuz olduğunda veya soru sorarken fiil yalın haline (1. hal) geri döner.",
            examples: [
                { english: "I went to the park.", turkish: "Parka gittim." },
                { english: "Did you see my keys?", turkish: "Anahtarlarımı gördün mü?" }
            ]
        }
    ],
    tips: ["Düzensiz fiilleri gruplayarak (örneğin buy-brought, think-thought) daha kolay ezberleyebilirsiniz."],
    summary: "Düzensiz fiillerin özel hallerini öğrenerek geçmişi daha doğal anlatabilirsiniz."
};

// Unit 133: Restoranda Sipariş
const u133: EnglishLecture = {
    unitId: 133,
    title: "At the Restaurant",
    introduction: "Bir restoranda sipariş verirken veya hizmet alırken kullanılan temel kalıpları öğreneceğiz.",
    sections: [
        {
            title: "Sipariş Verme",
            content: "'I'd like...' (isterim) kalıbı 'I want'tan daha naziktir.",
            examples: [
                { english: "I'd like the steak, please.", turkish: "Bonfile istiyorum lütfen." },
                { english: "Could I have the menu?", turkish: "Menüyü alabilir miyim?" }
            ]
        },
        {
            title: "Hesap İsteme",
            content: "Yemeğiniz bittiğinde hesabı şu şekilde isteyebilirsiniz:",
            examples: [
                { english: "Check, please / Bill, please.", turkish: "Hesap lütfen." },
                { english: "Can we pay by card?", turkish: "Kartla ödeyebilir miyiz?" }
            ]
        }
    ],
    tips: ["Bahşiş bırakmak istiyorsanız 'Keep the change' (üstü kalsın) diyebilirsiniz."],
    summary: "Nazikçe sipariş vermeyi ve hesap istemeyi öğrendiniz."
};

// Unit 134: Alışveriş
const u134: EnglishLecture = {
    unitId: 134,
    title: "Shopping",
    introduction: "Mağazada fiyat sorma, kıyafet deneme ve ödeme yapma süreçlerini kapsar.",
    sections: [
        {
            title: "Fiyat Sorma",
            content: "Tekil ürünler için 'is this', çoğul ürünler için 'are these' kullanırız.",
            examples: [
                { english: "How much is this shirt?", turkish: "Bu gömlek ne kadar?" },
                { english: "How much are these shoes?", turkish: "Bu ayakkabılar ne kadar?" }
            ]
        },
        {
            title: "Deneme Odası",
            content: "Bir şeyi satın almadan önce denemek için 'try on' fiili kullanılır.",
            examples: [
                { english: "Can I try this on?", turkish: "Bunu deneyebilir miyim?" },
                { english: "Where are the changing rooms?", turkish: "Soyunma kabinleri nerede?" }
            ]
        }
    ],
    tips: ["İndirim sormak için 'Is there a discount?' diyebilirsiniz."],
    summary: "Alışveriş sırasında ihtiyaç duyacağınız temel soruları öğrendiniz."
};

// Unit 135: Seyahat Planları
const u135: EnglishLecture = {
    unitId: 135,
    title: "Travel Plans",
    introduction: "Gelecek planlarınızdan bahsetmek için 'be going to' yapısını kullanmayı öğreneceğiz.",
    sections: [
        {
            title: "Planlanmış Eylemler (Be Going To)",
            content: "Kesinleşmiş planlar için 'am/is/are + going to + fiil' kullanılır.",
            examples: [
                { english: "I'm going to travel to London.", turkish: "Londra'ya seyahat edeceğim." },
                { english: "We're going to stay at a hotel.", turkish: "Bir otelde kalacağız." }
            ]
        },
        {
            title: "Süre Bildirme",
            content: "Ne kadar kalacağınızı bildirmek için 'for' kullanılır.",
            examples: [
                { english: "I'm going to stay for two weeks.", turkish: "İki hafta kalacağım." },
                { english: "When are you coming back?", turkish: "Ne zaman geri dönüyorsun?" }
            ]
        }
    ],
    tips: ["'Gonna', günlük konuşmada 'going to'nun yaygın kısaltmasıdır."],
    summary: "Gelecek planlarınızı ifade etmeyi öğrendiniz."
};

// Unit 136: Otel Rezervasyonu
const u136: EnglishLecture = {
    unitId: 136,
    title: "Hotel Reservation",
    introduction: "Otelde oda ayırtma ve giriş (check-in) işlemleri.",
    sections: [
        {
            title: "Oda Ayırtma",
            content: "Single (tek kişilik) veya double (çift kişilik) oda tercihleri önemlidir.",
            examples: [
                { english: "I'd like to book a single room.", turkish: "Tek kişilik oda ayırtmak istiyorum." },
                { english: "Is breakfast included?", turkish: "Kahvaltı dahil mi?" }
            ]
        },
        {
            title: "Boş Yer Sorma",
            content: "Boş yer olup olmadığını sormak için 'vacancies' kelimesi kullanılır.",
            examples: [
                { english: "Do you have any vacancies?", turkish: "Boş odanız var mı?" },
                { english: "I have a reservation under the name Mike.", turkish: "Mike adına rezervasyonum var." }
            ]
        }
    ],
    tips: ["Otelden ayrılırken 'Check-out' yapmayı unutmayın."],
    summary: "Otel rezervasyonu ve giriş işlemlerini öğrendiniz."
};

// Unit 137: Havalimanında
const u137: EnglishLecture = {
    unitId: 137,
    title: "At the Airport",
    introduction: "Uçuş öncesi ve sonrası havalimanı terminolojisi.",
    sections: [
        {
            title: "Check-in İşlemleri",
            content: "Biletinizi ve pasaportunuzu hazırlayın.",
            examples: [
                { english: "Where is the check-in counter?", turkish: "Check-in kontuarı nerede?" },
                { english: "Can I have a window seat?", turkish: "Pencere kenarı alabilir miyim?" }
            ]
        },
        {
            title: "Kapı ve Uçuş Bilgisi",
            content: "Kapı (Gate) ve biniş kartı (Boarding pass) anahtar kelimelerdir.",
            examples: [
                { english: "Which gate does the flight depart from?", turkish: "Uçuş hangi kapıdan kalkıyor?" },
                { english: "Is the flight on time?", turkish: "Uçuş vaktinde mi?" }
            ]
        }
    ],
    tips: ["'Delayed' uçuşun geciktiği, 'Cancelled' iptal edildiği anlamına gelir."],
    summary: "Havalimanındaki yönlendirmeleri ve temel soruları öğrendiniz."
};

// Unit 138: Doktorda
const u138: EnglishLecture = {
    unitId: 138,
    title: "At the Doctor",
    introduction: "Sağlık sorunlarını ve ağrıları ifade etme.",
    sections: [
        {
            title: "Ağrıları Belirtme",
            content: "Vücut bölümü + 'ache' son eki ağrıyı belirtir.",
            examples: [
                { english: "I have a headache.", turkish: "Başım ağrıyor." },
                { english: "I have a backache.", turkish: "Belim/Sırtım ağrıyor." }
            ]
        },
        {
            title: "Genel Şikayetler",
            content: "Nasıl hissettiğinizi anlatmak için 'feel' kullanılır.",
            examples: [
                { english: "I feel sick.", turkish: "Hasta hissediyorum." },
                { english: "I have a sore throat.", turkish: "Boğazım ağrıyor." }
            ]
        }
    ],
    tips: ["'Symptoms', doktorun size soracağı 'belirtiler' demektir."],
    summary: "Sağlık şikayetlerinizi basitçe anlatmayı öğrendiniz."
};

// Unit 139: Eczanede
const u139: EnglishLecture = {
    unitId: 139,
    title: "At the Pharmacy",
    introduction: "İlaç alma ve kullanım talimatları.",
    sections: [
        {
            title: "İlaç İsteme",
            content: "Hafif rahatsızlıklar için ilaç sormak.",
            examples: [
                { english: "I need something for a cold.", turkish: "Soğuk algınlığı için bir şey lazım." },
                { english: "Can I get some painkillers?", turkish: "Biraz ağrı kesici alabilir miyim?" }
            ]
        },
        {
            title: "Kullanım Talimatı",
            content: "İlacın ne sıklıkla alınacağını sormak önemlidir.",
            examples: [
                { english: "How often should I take this?", turkish: "Bunu ne sıklıkla almalıyım?" },
                { english: "Take one tablet twice a day.", turkish: "Günde iki kez bir tablet alın." }
            ]
        }
    ],
    tips: ["Reçete için 'Prescription' kelimesi kullanılır."],
    summary: "İlaç istemeyi ve kullanımını anlamayı öğrendiniz."
};

// Unit 140: Meslekler
const u140: EnglishLecture = {
    unitId: 140,
    title: "Jobs and Professions",
    introduction: "Çalışma hayatı ve profesyonel tanımlar.",
    sections: [
        {
            title: "Meslek İsimleri",
            content: "Daha karmaşık meslek isimlerini ve çalışma alanlarını öğrenebiliriz.",
            examples: [
                { english: "Software Engineer", turkish: "Yazılım Mühendisi" },
                { english: "Civil Servant", turkish: "Devlet Memuru" }
            ]
        },
        {
            title: "Nerede Çalışıyorsun?",
            content: "Çalıştığınız kurumu belirtmek için 'at' veya 'for' kullanılır.",
            examples: [
                { english: "I work at a bank.", turkish: "Bir bankada çalışıyorum." },
                { english: "What is your job?", turkish: "İşin nedir?" }
            ]
        }
    ],
    tips: ["'Unemployed', şu an bir işi olmayan (işsiz) demektir."],
    summary: "Meslekleri ve çalışma yerlerini ifade etmeyi öğrendiniz."
};

// Unit 141: İş Görüşmesi
const u141: EnglishLecture = {
    unitId: 141,
    title: "Job Interview",
    introduction: "Kariyerinizdeki bir sonraki adım için iş görüşmesi İngilizcesini öğrenmek kritik öneme sahiptir.",
    sections: [
        {
            title: "Kendini Tanıtma",
            content: "'Tell me about yourself' sorusuna hazırlıklı olun. Deneyimlerinizden bahsederken past tense (geçmiş zaman) kullanın.",
            examples: [
                { english: "I have 5 years of experience in marketing.", turkish: "Pazarlamada 5 yıllık deneyimim var." },
                { english: "I'm a hardworking and reliable person.", turkish: "Çalışkan ve güvenilir biriyim." }
            ]
        },
        {
            title: "Güçlü Yönler",
            content: "Neden sizi seçmeleri gerektiğini anlatırken yetkinliklerinizi vurgulayın.",
            examples: [
                { english: "My greatest strength is team work.", turkish: "En büyük güçlü yanım takım çalışmasıdır." },
                { english: "I'm good at problem-solving.", turkish: "Problem çözmede iyiyimdir." }
            ]
        }
    ],
    tips: ["Görüşme sonunda 'Do you have any questions for us?' sorusuna hazırlıklı olun."],
    summary: "İş görüşmelerinde kendinizi ve deneyimlerinizi anlatmayı öğrendiniz."
};

// Unit 142: Telefonda Konuşma
const u142: EnglishLecture = {
    unitId: 142,
    title: "On the Phone",
    introduction: "Yüz yüze olmayan iletişimde net ve nazik kalıplar kullanmak gerekir.",
    sections: [
        {
            title: "Aramayı Başlatma",
            content: "Kendinizi tanıtmak ve biriyle görüşmek istemek için standart kalıplar vardır.",
            examples: [
                { english: "Hello, this is Jane speaking.", turkish: "Merhaba, ben Jane." },
                { english: "May I speak to Mr. Smith, please?", turkish: "Bay Smith ile görüşebilir miyim lütfen?" }
            ]
        },
        {
            title: "Hattı Bekletme ve Mesaj",
            content: "Bağlantı kurarken veya mesaj alırken kullanılan ifadeler:",
            examples: [
                { english: "Could you hold the line, please?", turkish: "Lütfen hatta bekler misiniz?" },
                { english: "Can I take a message?", turkish: "Mesaj alabilir miyim?" }
            ]
        }
    ],
    tips: ["Ses gitmiyorsa 'I can't hear you clearly' diyebilirsiniz."],
    summary: "Telefonla profesyonel iletişim kurma becerilerini kazandınız."
};

// Unit 143: E-posta Yazma
const u143: EnglishLecture = {
    unitId: 143,
    title: "Writing Emails",
    introduction: "Modern iş dünyasında e-posta, profesyonelliğin aynasıdır.",
    sections: [
        {
            title: "Resmi Hitaplar ve Giriş",
            content: "E-postaya nasıl başlanacağı ve konuya nasıl girileceği önemlidir.",
            examples: [
                { english: "Dear Mr. / Ms. [Name]", turkish: "Sayın Bay / Bayan [İsim]" },
                { english: "I am writing to inquire about your services.", turkish: "Hizmetleriniz hakkında bilgi almak için yazıyorum." }
            ]
        },
        {
            title: "Dosya Ekleme ve Kapanış",
            content: "Dosya eklediğinizi belirtmek ve maili bitirmek için yaygın yapılar:",
            examples: [
                { english: "Please find the attached document.", turkish: "Lütfen ekteki belgeyi inceleyin." },
                { english: "Kind regards / Best regards.", turkish: "Saygılarımla / İyi dileklerimle." }
            ]
        }
    ],
    tips: ["Resmi olmayan maillerde 'Best' veya 'Take care' diyebilirsiniz."],
    summary: "E-posta yapısını ve temel hitap şekillerini öğrendiniz."
};

// Unit 144: Duygular
const u144: EnglishLecture = {
    unitId: 144,
    title: "Feelings and Emotions",
    introduction: "Duygularımızı ifade etmek, empati kurmamızı sağlar.",
    sections: [
        {
            title: "Daha İleri Duygular",
            content: "Happy/Sad ötesindeki duyguları öğrenelim.",
            examples: [
                { english: "I'm feeling nervous about the exam.", turkish: "Sınav için gergin hissediyorum." },
                { english: "She was surprised by the news.", turkish: "Haber karşısında şaşırmıştı." }
            ]
        },
        {
            title: "Endişe ve Heyecan",
            content: "Gelecek olaylar hakkındaki hislerimizi tarif etme.",
            examples: [
                { english: "I'm excited about the party!", turkish: "Parti için heyecanlıyım!" },
                { english: "Don't worry, everything will be fine.", turkish: "Endişelenme, her şey iyi olacak." }
            ]
        }
    ],
    tips: ["Aşırı bir duyguyu belirtmek için 'so' veya 'really' ekleyebilirsiniz: 'really tired'."],
    summary: "Duygu durumunuzu daha zengin bir kelime hazinesiyle anlatmayı öğrendiniz."
};

// Unit 145: Kişilik Özellikleri
const u145: EnglishLecture = {
    unitId: 145,
    title: "Personality Traits",
    introduction: "İnsanları tanımlarken kullandığımız sıfatlar.",
    sections: [
        {
            title: "Pozitif Özellikler",
            content: "Birinin karakterini övmek için kullanılan kelimeler.",
            examples: [
                { english: "She is a very generous and kind person.", turkish: "O çok cömert ve nazik biridir." },
                { english: "My teacher is patient.", turkish: "Öğretmenim sabırlıdır." }
            ]
        },
        {
            title: "Sosyal İlişkiler",
            content: "Dışadönüklük ve içedönüklük durumları.",
            examples: [
                { english: "He is shy and doesn't talk much.", turkish: "O utangaçtır ve pek konuşmaz." },
                { english: "Mark is very outgoing.", turkish: "Mark çok dışadönüktür." }
            ]
        }
    ],
    tips: ["Birinin nasıl biri olduğunu sormak için 'What is he like?' kalıbı kullanılır."],
    summary: "Karakter ve kişilik üzerine tanımlamalar yapmayı öğrendiniz."
};

// Unit 146: Spor ve Fitness
const u146: EnglishLecture = {
    unitId: 146,
    title: "Sports and Fitness",
    introduction: "Sağlıklı yaşam ve spor dalları.",
    sections: [
        {
            title: "Spor Yapmak (Do vs Play vs Go)",
            content: "Spor dallarına göre kullanılan fiiller değişir.",
            examples: [
                { english: "Play: football, tennis, basketball (toplu sporlar)", turkish: "Oynamak" },
                { english: "Go: cycling, swimming, running (-ing bitimli sporlar)", turkish: "Gitmek" },
                { english: "Do: yoga, gymnastics, aerobics (bireysel/salon sporları)", turkish: "Yapmak" }
            ]
        },
        {
            title: "Salon ve Ekipman",
            content: "Spor salonu terminolojisi.",
            examples: [
                { english: "I'm working out at the gym.", turkish: "Spor salonunda antrenman yapıyorum." },
                { english: "I need to lose some weight.", turkish: "Biraz kilo vermem lazım." }
            ]
        }
    ],
    tips: ["'Athlete' sporcu demektir."],
    summary: "Spor aktivitelerinden bahsederken doğru fiilleri seçmeyi öğrendiniz."
};

// Unit 147: Müzik ve Sanat
const u147: EnglishLecture = {
    unitId: 147,
    title: "Music and Art",
    introduction: "Kültürel aktiviteler ve sanatsal ilgi alanları.",
    sections: [
        {
            title: "Müzik Türleri ve Enstrümanlar",
            content: "Enstrüman isimlerinden önce 'the' kullanılır (Play the guitar).",
            examples: [
                { english: "I like listening to classical music.", turkish: "Klasik müzik dinlemeyi severim." },
                { english: "Can you play the piano?", turkish: "Piyano çalabilir misin?" }
            ]
        },
        {
            title: "Sanat ve Sergi",
            content: "Müzeler ve sanat eserleri hakkında konuşma.",
            examples: [
                { english: "This painting is very famous.", turkish: "Bu tablo çok meşhurdur." },
                { english: "Let's visit the modern art gallery.", turkish: "Modern sanat galerisini ziyaret edelim." }
            ]
        }
    ],
    tips: ["'Listen' fiili her zaman 'to' ile kullanılır: 'Listen to music'."],
    summary: "Müzik ve sanat dünyasına dair temel konuşmaları öğrendiniz."
};

// Unit 148: Sinema ve Dizi
const u148: EnglishLecture = {
    unitId: 148,
    title: "Movies and TV Shows",
    introduction: "Eğlence dünyası ve medya tüketimi.",
    sections: [
        {
            title: "Film Türleri",
            content: "Sevdiğiniz türleri ifade etme.",
            examples: [
                { english: "What is your favorite genre?", turkish: "En sevdiğin tür hangisi?" },
                { english: "Action, comedy, thriller, sci-fi.", turkish: "Aksiyon, komedi, gerilim, bilim kurgu." }
            ]
        },
        {
            title: "Diziler ve Bölümler",
            content: "Streaming platformları ve dizi terminolojisi.",
            examples: [
                { english: "I missed the last episode of the series.", turkish: "Dizinin son bölümünü kaçırdım." },
                { english: "The plot was very exciting.", turkish: "Olay örgüsü çok heyecan vericiydi." }
            ]
        }
    ],
    tips: ["'Binge-watch', bir diziyi ara vermeden arka arkaya izlemek demektir."],
    summary: "Film ve diziler hakkında fikir beyan etmeyi öğrendiniz."
};

// Unit 149: Teknoloji
const u149: EnglishLecture = {
    unitId: 149,
    title: "Technology",
    introduction: "Dijital dünyada hayatta kalmak için gereken teknik İngilizce.",
    sections: [
        {
            title: "Cihazlar ve Komutlar",
            content: "Günlük teknolojik işlemler.",
            examples: [
                { english: "I need to update my operating system.", turkish: "İşletim sistemimi güncellemem gerekiyor." },
                { english: "Don't forget to backup your files.", turkish: "Dosyalarını yedeklemeyi unutma." }
            ]
        },
        {
            title: "Bağlantı Sorunları",
            content: "İnternet ve donanım hataları.",
            examples: [
                { english: "The wifi connection is very slow.", turkish: "Wifi bağlantısı çok yavaş." },
                { english: "My battery is running low.", turkish: "Şarjım bitiyor." }
            ]
        }
    ],
    tips: ["'Crash', bir programın aniden kapanması demektir."],
    summary: "Teknolojik sorunları ve işlemleri ifade etmeyi öğrendiniz."
};

// Unit 150: Sosyal Medya
const u150: EnglishLecture = {
    unitId: 150,
    title: "Social Media",
    introduction: "İnternet dünyasının sosyal yüzü.",
    sections: [
        {
            title: "Etkileşim ve Paylaşım",
            content: "Sosyal ağlardaki aktiviteler.",
            examples: [
                { english: "He has a lot of followers on Instagram.", turkish: "Instagram'da çok takipçisi var." },
                { english: "I posted a new story today.", turkish: "Bugün yeni bir hikaye paylaştım." }
            ]
        },
        {
            title: "Terimler",
            content: "Dünya genelinde kullanılan sosyal medya terimleri.",
            examples: [
                { english: "Click the link in bio.", turkish: "Biyografideki linke tıklayın." },
                { english: "She shared my post.", turkish: "Paylaşımımı paylaştı." }
            ]
        }
    ],
    tips: ["'Influencer', sosyal medyada etkileyici kişi anlamına gelir."],
    summary: "Sosyal medya ortamlarında iletişim kurmayı öğrendiniz."
};

// Unit 151: Ev ve Taşınma
const u151: EnglishLecture = {
    unitId: 151,
    title: "Home and Moving",
    introduction: "Yeni bir eve taşınırken ve emlak işlemlerinde kullanılan ifadeler.",
    sections: [
        {
            title: "Kiralama Terimleri",
            content: "Ev ararken karşınıza çıkacak temel kelimeler.",
            examples: [
                { english: "I'm looking for a flat to rent.", turkish: "Kiralık bir daire arıyorum." },
                { english: "The rent is £800 per month.", turkish: "Kira aylık 800 pound." }
            ]
        },
        {
            title: "Taşınma Süreci",
            content: "'Move in' ve 'Move out' fiilleri.",
            examples: [
                { english: "When are you moving into your new house?", turkish: "Yeni evine ne zaman taşınıyorsun?" },
                { english: "I need to buy some new furniture.", turkish: "Biraz yeni mobilya almam lazım." }
            ]
        }
    ],
    tips: ["'Flat' İngiliz İngilizcesinde, 'Apartment' Amerikan İngilizcesinde yaygındır."],
    summary: "Konaklama ve taşınma ile ilgili temel terimleri öğrendiniz."
};

// Unit 152: Çevre ve Doğa
const u152: EnglishLecture = {
    unitId: 152,
    title: "Environment and Nature",
    introduction: "Gelecek nesiller için çevre bilinci ve doğa hakkında konuşma.",
    sections: [
        {
            title: "Geri Dönüşüm ve Koruma",
            content: "Dünyamızı korumak için yapabileceklerimiz.",
            examples: [
                { english: "We should recycle paper and plastic.", turkish: "Kağıt ve plastiği geri dönüştürmeliyiz." },
                { english: "Save energy to protect the environment.", turkish: "Çevreyi korumak için enerji tasarrufu yapın." }
            ]
        },
        {
            title: "Global Sorunlar",
            content: "İklim değişikliği ve kirlilik.",
            examples: [
                { english: "Climate change is a global threat.", turkish: "İklim değişikliği küresel bir tehdittir." },
                { english: "Pollution affects our health.", turkish: "Kirlilik sağlığımızı etkiler." }
            ]
        }
    ],
    tips: ["'Sustainable' sürdürülebilir demektir."],
    summary: "Çevresel konuları İngilizce ifade etme yeteneği kazandınız."
};

// Unit 153: Haberler ve Medya
const u153: EnglishLecture = {
    unitId: 153,
    title: "News and Media",
    introduction: "Dünyadan haberleri takip etmek ve üzerine konuşmak.",
    sections: [
        {
            title: "Manşetler ve Haberler",
            content: "Haber bülteni terminolojisi.",
            examples: [
                { english: "Did you hear the breaking news?", turkish: "Son dakika haberini duydun mu?" },
                { english: "The headline was very shocking.", turkish: "Haber başlığı çok şaşırtıcıydı." }
            ]
        },
        {
            title: "Basın ve Yayın",
            content: "Gazetecilik ve makaleler.",
            examples: [
                { english: "The reporter is at the scene.", turkish: "Muhabir olay yerinde." },
                { english: "I read an interesting article today.", turkish: "Bugün ilginç bir makale okudum." }
            ]
        }
    ],
    tips: ["'Fake news', yalan veya uydurma haber demektir."],
    summary: "Medya ve güncel olaylar hakkında konuşmayı öğrendiniz."
};

// Unit 154: Kültür ve Gelenekler
const u154: EnglishLecture = {
    unitId: 154,
    title: "Culture and Traditions",
    introduction: "Farklı kültürleri ve kendi geleneklerimizi tanıtma.",
    sections: [
        {
            title: "Geleneksel Kutlamalar",
            content: "Festivaller ve bayramlar.",
            examples: [
                { english: "It is a tradition to eat turkey on Christmas.", turkish: "Noel'de hindi yemek bir gelendir." },
                { english: "How do you celebrate New Year?", turkish: "Yılbaşını nasıl kutlarsınız?" }
            ]
        },
        {
            title: "Kültürel Miras",
            content: "Gelenek ve görenekleri anlatma.",
            examples: [
                { english: "Every country has its own unique heritage.", turkish: "Her ülkenin kendine özgü bir mirası vardır." },
                { english: "Respect other cultures.", turkish: "Diğer kültürlere saygı duyun." }
            ]
        }
    ],
    tips: ["'Ancestors' atalar demektir."],
    summary: "Kültürel farklılıkları ve gelenekleri ifade etmeyi öğrendiniz."
};

// Unit 155: Present Perfect Tense
const u155: EnglishLecture = {
    unitId: 155,
    title: "Present Perfect Tense",
    introduction: "Geçmişle bugün arasında köprü kuran 'Present Perfect' zamanı.",
    sections: [
        {
            title: "Deneyimler (Ever/Never)",
            content: "Hayatımızdaki tecrübelerden bahsederken kullanılır. 'have/has + fiilin 3. hali'.",
            examples: [
                { english: "I have been to London twice.", turkish: "Londra'da iki kez bulundum." },
                { english: "Have you ever tried sushi?", turkish: "Hiç sushi denedin mi?" }
            ]
        },
        {
            title: "Süreklilik (For/Since)",
            content: "Geçmişte başlayıp hala devam eden durumlar.",
            examples: [
                { english: "She has lived here for ten years.", turkish: "On yıldır burada yaşıyor." },
                { english: "I haven't seen him since Monday.", turkish: "Pazartesi'den beri onu görmedim." }
            ]
        }
    ],
    tips: ["Geçmişte zamanı belli olan eylemler için Past Simple kullanılır, belirsiz tecrübeler için Present Perfect."],
    summary: "Present Perfect zamanının temel kullanım alanlarını öğrendiniz."
};

// Unit 156: Karşılaştırmalar (Comparatives)
const u156: EnglishLecture = {
    unitId: 156,
    title: "Comparatives",
    introduction: "İki nesneyi veya insanı birbiriyle kıyaslama.",
    sections: [
        {
            title: "Kısa Sıfatlar (-er)",
            content: "Tek heceli sıfatların sonuna '-er' takısı ve 'than' kelimesi gelir.",
            examples: [
                { english: "Fast -> Faster", turkish: "Hızlı -> Daha hızlı" },
                { english: "My car is faster than yours.", turkish: "Benim arabam seninkinden daha hızlı." }
            ]
        },
        {
            title: "Uzun Sıfatlar (More)",
            content: "İki veya daha fazla heceli sıfatların başına 'more' gelir.",
            examples: [
                { english: "Expensive -> More expensive", turkish: "Pahalı -> Daha pahalı" },
                { english: "Health is more important than money.", turkish: "Sağlık paradan daha önemlidir." }
            ]
        }
    ],
    tips: ["Good -> Better, Bad -> Worse düzensiz karşılaştırma sıfatlarıdır."],
    summary: "İki durumu veya nesneyi birbiriyle kıyaslamayı öğrendiniz."
};

// Unit 157: Üstünlük Bildirme (Superlatives)
const u157: EnglishLecture = {
    unitId: 157,
    title: "Superlatives",
    introduction: "Bir grup içindeki 'en' üstün olanı belirtme.",
    sections: [
        {
            title: "En Üstün Kısa Sıfatlar (-est)",
            content: "'The' + sıfat + '-est' yapısı kullanılır.",
            examples: [
                { english: "Big -> The biggest", turkish: "Büyük -> En büyük" },
                { english: "This is the richest man in the world.", turkish: "Bu dünyadaki en zengin adam." }
            ]
        },
        {
            title: "En Üstün Uzun Sıfatlar (Most)",
            content: "'The most' + sıfat yapısı kullanılır.",
            examples: [
                { english: "Beautiful -> The most beautiful", turkish: "Güzel -> En güzel" },
                { english: "It was the most difficult exam.", turkish: "En zor sınavdı." }
            ]
        }
    ],
    tips: ["Daima 'the' kullanmayı unutmayın."],
    summary: "Bir topluluk içindeki 'en' olan mülkiyeti ifade etmeyi öğrendiniz."
};

// Unit 158: Modal Verbs
const u158: EnglishLecture = {
    unitId: 158,
    title: "Modal Verbs",
    introduction: "Yetenek, zorunluluk, olasılık ve tavsiye bildiren yardımcı fiiller.",
    sections: [
        {
            title: "Zorunluluk ve Tavsiye",
            content: "'Must' (zorunluluk), 'Should' (tavsiye).",
            examples: [
                { english: "You must wear a helmet.", turkish: "Kask takmalısın (zorunlu)." },
                { english: "You should sleep early.", turkish: "Erken uyumalısın (tavsiye)." }
            ]
        },
        {
            title: "Yetenek ve İzin",
            content: "'Can' ve 'Could'.",
            examples: [
                { english: "I can speak three languages.", turkish: "Üç dil konuşabiliyorum." },
                { english: "Could you help me, please?", turkish: "Lütfen bana yardım edebilir misiniz?" }
            ]
        }
    ],
    tips: ["Modallardan sonra fiil her zaman yalın haldedir."],
    summary: "İstek, emir ve tavsiyelerinizi İngilizce ifade etmeyi öğrendiniz."
};

// Unit 159: Ek Sorular (Question Tags)
const u159: EnglishLecture = {
    unitId: 159,
    title: "Question Tags",
    introduction: "Onay almak veya bir şeyden emin olmak için cümle sonuna eklenen sorular.",
    sections: [
        {
            title: "Zıt Kutup Kuralı",
            content: "Cümle olumluysa tag olumsuz, cümle olumsuzsa tag olumlu olur.",
            examples: [
                { english: "You are a student, aren't you?", turkish: "Öğrencisin, değil mi?" },
                { english: "She doesn't like tea, does she?", turkish: "Çay sevmiyor, değil mi?" }
            ]
        },
        {
            title: "Yardımcı Fiil Uyumu",
            content: "Cümledeki zamanın yardımcı fiili kullanılır.",
            examples: [
                { english: "They went home, didn't they?", turkish: "Eve gittiler, değil mi?" },
                { english: "He has finished, hasn't he?", turkish: "Bitirdi, değil mi?" }
            ]
        }
    ],
    tips: ["'I am' için tag 'aren't I?' olur."],
    summary: "Cümlelerinize onaylatma eklemeyi öğrendiniz."
};

// Unit 160: A2 Genel Tekrar
const u160: EnglishLecture = {
    unitId: 160,
    title: "A2 Final Review",
    introduction: "Tebrikler! A2 seviyesinin sonuna geldiniz. Şimdiye kadar öğrendiğimiz ana başlıkları gözden geçirelim.",
    sections: [
        {
            title: "Zamanlar ve Yapılar",
            content: "Past Simple, Present Perfect, Comparatives, Superlatives, Modals.",
            examples: [
                { english: "I have improved my English a lot.", turkish: "İngilizcemi çok geliştirdim." },
                { english: "I'm ready for the next level!", turkish: "Bir sonraki seviye için hazırım!" }
            ]
        }
    ],
    tips: ["Dil öğrenmek bir maratondur, her gün küçük bir adım atın!"],
    summary: "A2 seviyesini başarıyla tamamladınız ve B1'e hazırsınız."
};

export function getEnglishA2LectureForUnit(unitId: number): EnglishLecture {
    const m: { [k: number]: EnglishLecture } = {
        131: u131, 132: u132, 133: u133, 134: u134, 135: u135, 136: u136, 137: u137, 138: u138, 139: u139, 140: u140,
        141: u141, 142: u142, 143: u143, 144: u144, 145: u145, 146: u146, 147: u147, 148: u148, 149: u149, 150: u150,
        151: u151, 152: u152, 153: u153, 154: u154, 155: u155, 156: u156, 157: u157, 158: u158, 159: u159, 160: u160
    };
    return m[unitId] || u131;
}
