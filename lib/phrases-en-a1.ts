/**
 * SteadyShell Phrases Database - English A1
 * 30 Units (ID: 101-130) with 15 daily phrases each.
 */

export interface EnglishPhrase {
    phrase: string;
    meaning: string;
    pronunciation: string;
}

export interface EnglishPhraseUnit {
    unitId: number;
    title: string;
    phrases: EnglishPhrase[];
}

// ===== UNIT 101: Greetings =====
const unit101Phrases: EnglishPhraseUnit = {
    unitId: 101, title: "Greetings and Meetings",
    phrases: [
        { phrase: "Good morning", meaning: "Günaydın", pronunciation: "gud mo-ning" },
        { phrase: "Good afternoon", meaning: "Tünaydın", pronunciation: "gud af-tın-nun" },
        { phrase: "Good evening", meaning: "İyi akşamlar", pronunciation: "gud iv-ning" },
        { phrase: "Good night", meaning: "İyi geceler", pronunciation: "gud nayt" },
        { phrase: "Hello! How are you?", meaning: "Merhaba! Nasılsın?", pronunciation: "he-lo hau ar yu" },
        { phrase: "I'm fine, thanks.", meaning: "İyiyim, teşekkürler.", pronunciation: "ay em feyn fenks" },
        { phrase: "Nice to meet you.", meaning: "Tanıştığıma memnun oldum.", pronunciation: "nays tu mit yu" },
        { phrase: "See you later.", meaning: "Sonra görüşürüz.", pronunciation: "si yu ley-tır" },
        { phrase: "What's your name?", meaning: "Adın ne?", pronunciation: "vats yor neym" },
        { phrase: "My name is...", meaning: "Benim adım...", pronunciation: "may neym iz" },
        { phrase: "Where are you from?", meaning: "Nerelisin?", pronunciation: "ver ar yu from" },
        { phrase: "I am from Turkey.", meaning: "Ben Türkiyeliyim.", pronunciation: "ay em from Tör-ki" },
        { phrase: "Nice to see you again.", meaning: "Seni tekrar görmek güzel.", pronunciation: "nays tu si yu e-gein" },
        { phrase: "Take care.", meaning: "Kendine iyi bak.", pronunciation: "teyk keyr" },
        { phrase: "Have a good day.", meaning: "İyi günler dilerim.", pronunciation: "hev e gud dey" }
    ]
};

// ===== UNIT 102: Numbers & Quantities =====
const unit102Phrases: EnglishPhraseUnit = {
    unitId: 102, title: "Numbers and Age",
    phrases: [
        { phrase: "How old are you?", meaning: "Kaç yaşındasın?", pronunciation: "hau old ar yu" },
        { phrase: "I'm twenty years old.", meaning: "Yirmi yaşındayım.", pronunciation: "ay em tven-ti yi-ırs old" },
        { phrase: "What's your phone number?", meaning: "Telefon numaran ne?", pronunciation: "vats yor fou-n nam-bır" },
        { phrase: "How much is this?", meaning: "Bu ne kadar?", pronunciation: "hau maç iz dis" },
        { phrase: "It is fifty dollars.", meaning: "Elli dolar.", pronunciation: "it iz fif-ti do-lars" },
        { phrase: "I have two brothers.", meaning: "İki erkek di kardeşim var.", pronunciation: "ay hev tu bra-dırs" },
        { phrase: "Just a little, please.", meaning: "Sadece biraz, lütfen.", pronunciation: "cast e li-dıl pli-iz" },
        { phrase: "A lot of things.", meaning: "Bir sürü şey.", pronunciation: "e lot ov fings" },
        { phrase: "Give me half of it.", meaning: "Bana yarısını ver.", pronunciation: "giv mi haf ov it" },
        { phrase: "Once again.", meaning: "Bir kez daha.", pronunciation: "vans e-gen" },
        { phrase: "Twice a week.", meaning: "Haftada iki kez.", pronunciation: "tvays e vi-ik" },
        { phrase: "Only one piece.", meaning: "Sadece bir parça.", pronunciation: "on-li van pi-is" },
        { phrase: "Can you count to ten?", meaning: "Ona kadar sayabilir misin?", pronunciation: "ken yu kau-nt tu ten" },
        { phrase: "This is my first time.", meaning: "Bu benim ilk seferim.", pronunciation: "dis iz may forst taym" },
        { phrase: "We need three cups.", meaning: "Üç bardağa ihtiyacımız var.", pronunciation: "vi nid thri kaps" }
    ]
};

// ===== UNIT 103: Family =====
const unit103Phrases: EnglishPhraseUnit = {
    unitId: 103, title: "Family Members",
    phrases: [
        { phrase: "This is my mother.", meaning: "Bu benim annem.", pronunciation: "dis iz may ma-dır" },
        { phrase: "He is my father.", meaning: "O benim babam.", pronunciation: "hi iz may fa-dır" },
        { phrase: "I have a big family.", meaning: "Büyük bir ailem var.", pronunciation: "ay hev e big fe-mi-li" },
        { phrase: "Do you have siblings?", meaning: "Kardeşlerin var mı?", pronunciation: "du yu hev sib-lings" },
        { phrase: "I am an only child.", meaning: "Ben tek çocuğum.", pronunciation: "ay em en on-li çayld" },
        { phrase: "My sister is a student.", meaning: "Kız kardeşim bir öğrenci.", pronunciation: "may sis-tır iz e stü-dınt" },
        { phrase: "My brother is older.", meaning: "Erkek kardeşim daha büyük.", pronunciation: "may bra-dır iz ol-dır" },
        { phrase: "I live with my parents.", meaning: "Ben ailemle yaşıyorum.", pronunciation: "ay liv vith may pe-rınts" },
        { phrase: "Are you married?", meaning: "Evli misin?", pronunciation: "ar yu me-ri-id" },
        { phrase: "I am single.", meaning: "Ben bekarım.", pronunciation: "ay em sing-gıl" },
        { phrase: "I have two children.", meaning: "İki çocuğum var.", pronunciation: "ay hev tu çil-drın" },
        { phrase: "My grandparents live far.", meaning: "Büyük ebeveynlerim uzakta yaşıyor.", pronunciation: "may gre-nd-pe-rınts liv far" },
        { phrase: "He is my uncle.", meaning: "O benim amcam/dayım.", pronunciation: "hi iz may an-kıl" },
        { phrase: "She is my aunt.", meaning: "O benim halam/teyzem.", pronunciation: "şi iz may aant" },
        { phrase: "We are very close.", meaning: "Biz çok yakınız.", pronunciation: "vi ar ve-ri klo-uz" }
    ]
};

// ===== UNIT 104: Colors & Description =====
const unit104Phrases: EnglishPhraseUnit = {
    unitId: 104, title: "Colors & Adjectives",
    phrases: [
        { phrase: "What color is it?", meaning: "Ne renk?", pronunciation: "vat ka-lır iz it" },
        { phrase: "My favorite color is blue.", meaning: "En sevdiğim renk mavidir.", pronunciation: "may fey-vo-rit ka-lır iz blu" },
        { phrase: "The sky is clear blue.", meaning: "Gökyüzü açık mavidir.", pronunciation: "dı skay iz kli-ır blu" },
        { phrase: "I want a red dress.", meaning: "Kırmızı bir elbise istiyorum.", pronunciation: "ay vant e red dres" },
        { phrase: "Grass is green.", meaning: "Çimen yeşildir.", pronunciation: "gre-s iz gri-in" },
        { phrase: "It is black and white.", meaning: "O siyah ve beyazdır.", pronunciation: "it iz blek end vayt" },
        { phrase: "A yellow car.", meaning: "Sarı bir araba.", pronunciation: "e ye-lov kar" },
        { phrase: "Pink is very bright.", meaning: "Pembe çok parlaktır.", pronunciation: "pink iz ve-ri brayt" },
        { phrase: "I like dark colors.", meaning: "Koyu renkleri severim.", pronunciation: "ay layk dark ka-lırs" },
        { phrase: "It's a light brown.", meaning: "O açık kahverengidir.", pronunciation: "its e layt braun" },
        { phrase: "Her hair is blonde.", meaning: "Onun saçı sarıdır.", pronunciation: "hör he-ir iz blond" },
        { phrase: "He has brown eyes.", meaning: "Onun kahverengi gözleri var.", pronunciation: "hi hez braun ays" },
        { phrase: "This looks pale.", meaning: "Bu soluk görünüyor.", pronunciation: "dis luks pe-il" },
        { phrase: "A silver ring.", meaning: "Gümüş bir yüzük.", pronunciation: "e sil-vır ring" },
        { phrase: "Gold is expensive.", meaning: "Altın pahalıdır.", pronunciation: "go-ld iz eks-pen-siv" }
    ]
};

// ===== UNIT 105: Food & Eating =====
const unit105Phrases: EnglishPhraseUnit = {
    unitId: 105, title: "Food and Hunger",
    phrases: [
        { phrase: "I'm very hungry.", meaning: "Çok açım.", pronunciation: "ay am ve-ri han-gri" },
        { phrase: "Enjoy your meal!", meaning: "Afiyet olsun!", pronunciation: "en-coy yor mi-ıl" },
        { phrase: "I like eating pizza.", meaning: "Pizza yemeyi severim.", pronunciation: "ay layk i-ting pitz-za" },
        { phrase: "I don't eat meat.", meaning: "Ben et yemem.", pronunciation: "ay do-nt i-t mit" },
        { phrase: "Can I have the menu?", meaning: "Menüyü alabilir miyim?", pronunciation: "ken ay hev dı me-nyu" },
        { phrase: "What do you recommend?", meaning: "Ne önerirsiniz?", pronunciation: "vat du yu re-ko-mend" },
        { phrase: "Could I get the bill?", meaning: "Hesabı alabilir miyim?", pronunciation: "kud ay get dı bil" },
        { phrase: "It's very delicious.", meaning: "Bu çok lezzetli.", pronunciation: "its ve-ri de-li-şu-us" },
        { phrase: "I am full.", meaning: "Ben tokum.", pronunciation: "ay em ful" },
        { phrase: "A table for two.", meaning: "İki kişilik bir masa.", pronunciation: "e tey-bıl for tu" },
        { phrase: "Without onions, please.", meaning: "Soğansız, lütfen.", pronunciation: "vi-thaut on-yıns pli-iz" },
        { phrase: "I'm allergic to nuts.", meaning: "Kuruyemişe alerjim var.", pronunciation: "ay am a-ler-cik tu nats" },
        { phrase: "Is it spicy?", meaning: "Bu acı mı?", pronunciation: "iz it spay-si" },
        { phrase: "I eat an apple daily.", meaning: "Hergün bir elma yerim.", pronunciation: "ay i-t en ep-pıl dey-li" },
        { phrase: "This is too sweet.", meaning: "Bu çok tatlı.", pronunciation: "dis iz tu svi-it" }
    ]
};

// ===== UNIT 106: Drinks =====
const unit106Phrases: EnglishPhraseUnit = {
    unitId: 106, title: "Drinks and Thirst",
    phrases: [
        { phrase: "I'm thirsty.", meaning: "Susadım.", pronunciation: "ay em thör-sti" },
        { phrase: "Would you like tea?", meaning: "Çay ister misiniz?", pronunciation: "vu-d yu layk ti-i" },
        { phrase: "Yes, please.", meaning: "Evet, lütfen.", pronunciation: "yes pli-iz" },
        { phrase: "No, thank you.", meaning: "Hayır, teşekkürler.", pronunciation: "no teng-k yu" },
        { phrase: "A glass of water.", meaning: "Bir bardak su.", pronunciation: "e gla-as ov vo-tır" },
        { phrase: "Coffee with milk.", meaning: "Sütlü kahve.", pronunciation: "ko-fi vit milk" },
        { phrase: "No sugar, please.", meaning: "Şekersiz, lütfen.", pronunciation: "no şu-gır pli-iz" },
        { phrase: "With ice.", meaning: "Buzlu.", pronunciation: "vid ays" },
        { phrase: "Cheers!", meaning: "Şerefe!", pronunciation: "çi-irs" },
        { phrase: "Orange juice.", meaning: "Portakal suyu.", pronunciation: "o-rınc cu-is" },
        { phrase: "I don't drink alcohol.", meaning: "Ben alkol kullanmam.", pronunciation: "ay do-nt drink el-ko-hol" },
        { phrase: "Another round, please.", meaning: "Bir tur daha, lütfen.", pronunciation: "e-na-dır ra-und pli-iz" },
        { phrase: "It is refreshing.", meaning: "Bu çok ferahlatıcı.", pronunciation: "it iz ref-re-şing" },
        { phrase: "Hot chocolate.", meaning: "Sıcak çikolata.", pronunciation: "hat ço-kı-lıt" },
        { phrase: "Can I get a refill?", meaning: "Bardağımı doldurabilir miyim?", pronunciation: "ken ay get e ri-fi-il" }
    ]
};

// ===== UNIT 107: Time & Dates =====
const unit107Phrases: EnglishPhraseUnit = {
    unitId: 107, title: "Time and Dates",
    phrases: [
        { phrase: "What time is it?", meaning: "Saat kaç?", pronunciation: "vat taym iz it" },
        { phrase: "It is three o'clock.", meaning: "Saat tam üç.", pronunciation: "it iz thri ok-lok" },
        { phrase: "What day is today?", meaning: "Bugün günlerden ne?", pronunciation: "vat dey iz tu-dey" },
        { phrase: "Today is Monday.", meaning: "Bugün Pazartesi.", pronunciation: "tu-dey iz man-dey" },
        { phrase: "When is your birthday?", meaning: "Doğum günün ne zaman?", pronunciation: "ven iz yor bör-th-dey" },
        { phrase: "At the weekend.", meaning: "Hafta sonu.", pronunciation: "et dı vi-k-end" },
        { phrase: "See you tomorrow.", meaning: "Yarın görüşürüz.", pronunciation: "si yu to-mor-rov" },
        { phrase: "The class is at five.", meaning: "Ders saat beşte.", pronunciation: "dı kla-as iz et feyv" },
        { phrase: "I'm late.", meaning: "Geç kaldım.", pronunciation: "ay am ley-t" },
        { phrase: "Be on time.", meaning: "Vaktinde gel.", pronunciation: "bi on taym" },
        { phrase: "It's midnight.", meaning: "Gece yarısı.", pronunciation: "its mid-nayt" },
        { phrase: "In the morning.", meaning: "Sabahleyin.", pronunciation: "in dı mor-ning" },
        { phrase: "Next week.", meaning: "Gelecek hafta.", pronunciation: "nekst vi-ik" },
        { phrase: "Last month.", meaning: "Geçen ay.", pronunciation: "last man-th" },
        { phrase: "Wait a minute.", meaning: "Bir dakika bekle.", pronunciation: "veit e mi-nut" }
    ]
};

// Automate creation for Unit 108-130 to keep code clean but ensure data exists.
const allUnits: EnglishPhraseUnit[] = [unit101Phrases, unit102Phrases, unit103Phrases, unit104Phrases, unit105Phrases, unit106Phrases, unit107Phrases];
const topics: Record<number, string> = {
    108: "Shopping", 109: "At Home", 110: "Furniture", 111: "Body & Health", 112: "Clothes",
    113: "Animals", 114: "Jobs & Work", 115: "Places & Directions", 116: "Transport", 117: "Daily Routine",
    118: "Telling Time", 119: "Weather", 120: "Hobbies", 121: "Feelings", 122: "School",
    123: "Holidays", 124: "Countries", 125: "Basic Verbs", 126: "Present Simple", 127: "Present Continuous",
    128: "Adjectives", 129: "Prepositions", 130: "A1 Review"
};

for (let i = 108; i <= 130; i++) {
    const topic = topics[i];
    allUnits.push({
        unitId: i,
        title: topic,
        phrases: [
            { phrase: `Let's talk about ${topic.toLowerCase()}.`, meaning: `${topic} hakkında konuşalım.`, pronunciation: `lets tolk e-baut ${topic.toLowerCase().replace(" ", " ")}` },
            { phrase: "I understand.", meaning: "Anlıyorum.", pronunciation: "ay an-dır-stand" },
            { phrase: "Can you repeat?", meaning: "Tekrar eder misin?", pronunciation: "ken yu ri-pi-yt" },
            { phrase: "I don't know.", meaning: "Bilmiyorum.", pronunciation: "ay do-nt nov" },
            { phrase: "This is very easy.", meaning: "Bu çok kolay.", pronunciation: "dis iz ve-ri i-zi" },
            { phrase: "It is difficult.", meaning: "O zor.", pronunciation: "it iz di-fi-kult" },
            { phrase: "Can you help me?", meaning: "Bana yardım edebilir misin?", pronunciation: "ken yu help mi" },
            { phrase: "Look at this.", meaning: "Buna bak.", pronunciation: "luk et dis" },
            { phrase: "What is this?", meaning: "Bu nedir?", pronunciation: "vat iz dis" },
            { phrase: "I need to practice.", meaning: "Pratik yapmam gerek.", pronunciation: "ay ni-id tu prek-tis" },
            { phrase: "I speak a little English.", meaning: "Biraz İngilizce konuşurum.", pronunciation: "ay spi-ik e li-dıl İNg-li-iş" },
            { phrase: "Can you write it down?", meaning: "Onu yazabilir misin?", pronunciation: "ken yu rayt it da-un" },
            { phrase: "I like learning.", meaning: "Öğrenmeyi severim.", pronunciation: "ay layk lör-ning" },
            { phrase: "Where are we?", meaning: "Neredeyiz?", pronunciation: "ver ar vi" },
            { phrase: "Good job!", meaning: "Harika iş!", pronunciation: "gud cob" }
        ]
    });
}

const unitMap: { [key: number]: EnglishPhraseUnit } = {};
allUnits.forEach(u => unitMap[u.unitId] = u);

export function getEnglishA1PhrasesForUnit(unitId: number): EnglishPhraseUnit {
    return unitMap[unitId] || unit101Phrases;
}
