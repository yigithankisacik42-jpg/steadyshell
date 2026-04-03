/**
 * SteadyShell Vocabulary Database - English B2
 * Units 191-220
 */

export interface Vocabulary {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

export interface UnitVocabulary {
    unitId: number;
    title: string;
    words: Vocabulary[];
}

const unit191Vocab: UnitVocabulary = {
    unitId: 191,
    title: "Past Perfect Continuous Vocabulary",
    words: [
        { word: "Continuous", meaning: "Sürekli, devam eden", pronunciation: "kən-ˈtin-yü-əs", example: "It was a continuous process.", exampleTranslation: "Bu sürekli bir süreçti." },
        { word: "Previous", meaning: "Önceki", pronunciation: "ˈprē-vē-əs", example: "I had met him on a previous occasion.", exampleTranslation: "Onunla önceki bir vesileyle tanışmıştım." },
        { word: "Duration", meaning: "Süre, müddet", pronunciation: "du-ˈrā-shən", example: "The duration of the flight is two hours.", exampleTranslation: "Uçuşun süresi iki saattir." },
        { word: "Conclude", meaning: "Sonuçlandırmak, bitirmek", pronunciation: "kən-ˈklüd", example: "The meeting concluded at midnight.", exampleTranslation: "Toplantı gece yarısı sonuçlandı." },
        { word: "Exhausted", meaning: "Bitkin, çok yorgun", pronunciation: "ig-ˈzȯ-stəd", example: "I had been running, so I was exhausted.", exampleTranslation: "Koşmaktaydım, bu yüzden bitkindim." },
        { word: "Frustrating", meaning: "Sinir bozucu", pronunciation: "ˈfrəs-ˌtrā-tiŋ", example: "It had been a frustrating day.", exampleTranslation: "Sinir bozucu bir gündü." },
        { word: "Interrupt", meaning: "Sözünü kesmek, bölmek", pronunciation: "ˌin-tə-ˈrəpt", example: "Don't interrupt me while I'm working.", exampleTranslation: "Çalışırken sözümü kesme." },
        { word: "Progress", meaning: "İlerleme", pronunciation: "ˈprä-grəs", example: "We had been making good progress.", exampleTranslation: "İyi bir ilerleme kaydediyorduk." },
        { word: "Evidence", meaning: "Kanıt, delil", pronunciation: "ˈe-və-dəns", example: "There was evidence of rain.", exampleTranslation: "Yağmurun kanıtı (izi) vardı." },
        { word: "Occur", meaning: "Meydana gelmek", pronunciation: "ə-ˈkər", example: "The accident occurred at 3 PM.", exampleTranslation: "Kaza saat 15:00'te meydana geldi." }
    ]
};

const unit192Vocab: UnitVocabulary = {
    unitId: 192,
    title: "Future Perfect & Time Expressions",
    words: [
        { word: "By the time", meaning: "...dığı zamana kadar", pronunciation: "baɪ ðə taɪm", example: "By the time you arrive, I will have finished.", exampleTranslation: "Sen varana kadar ben bitirmiş olacağım." },
        { word: "Retire", meaning: "Emekli olmak", pronunciation: "ri-ˈtī(-ə)r", example: "He will have retired by next year.", exampleTranslation: "Gelecek yıla kadar emekli olmuş olacak." },
        { word: "Deadline", meaning: "Son teslim tarihi", pronunciation: "ˈded-ˌlīn", example: "We must meet the deadline.", exampleTranslation: "Son teslim tarihine uymalıyız." },
        { word: "Achieve", meaning: "Başarmak, ulaşmak", pronunciation: "ə-ˈchēv", example: "I will have achieved my goals soon.", exampleTranslation: "Yakında hedeflerime ulaşmış olacağım." },
        { word: "Estimation", meaning: "Tahmin, kestirim", pronunciation: "ˌe-stə-ˈmā-shən", example: "My estimation was correct.", exampleTranslation: "Tahminim doğruydu." },
        { word: "Forecast", meaning: "Hava tahmini / Öngörü", pronunciation: "ˈfȯr-ˌkast", example: "The economic forecast is positive.", exampleTranslation: "Ekonomik öngörü olumlu." },
        { word: "Anticipate", meaning: "Beklemek, ummak", pronunciation: "an-ˈti-sə-ˌpāt", example: "We anticipate a large crowd.", exampleTranslation: "Büyük bir kalabalık bekliyoruz." },
        { word: "Completeness", meaning: "Tamlık, bütünlük", pronunciation: "kəm-ˈplēt-nəs", example: "We checked the completeness of the report.", exampleTranslation: "Raporun tamlığını kontrol ettik." },
        { word: "Milestone", meaning: "Dönüm noktası", pronunciation: "ˈmīl-ˌstōn", example: "This is a major milestone for us.", exampleTranslation: "Bu bizim için büyük bir dönüm noktası." },
        { word: "Perspective", meaning: "Bakış açısı", pronunciation: "pər-ˈspek-tiv", example: "From my perspective, it's a success.", exampleTranslation: "Benim bakış açımdan bu bir başarı." }
    ]
};

const unit193Vocab: UnitVocabulary = {
    unitId: 193,
    title: "Idiomatic Expressions 1",
    words: [
        { word: "Under the weather", meaning: "Halsiz, biraz hasta", pronunciation: "ˈən-dər ðə ˈwe-ðər", example: "I'm feeling a bit under the weather.", exampleTranslation: "Kendimi biraz halsiz hissediyorum." },
        { word: "Break the ice", meaning: "Buzları eritmek (ortamı yumuşatmak)", pronunciation: "breɪk ðə aɪs", example: "He told a joke to break the ice.", exampleTranslation: "Ortamı yumuşatmak için bir fıkra anlattı." },
        { word: "Cost an arm and a leg", meaning: "Çok pahalı olmak", pronunciation: "kɔst æn ɑrm ænd ə leg", example: "That car cost an arm and a leg.", exampleTranslation: "O araba bir servete mal oldu." },
        { word: "Piece of cake", meaning: "Çok kolay", pronunciation: "pis ʌv keɪk", example: "The exam was a piece of cake.", exampleTranslation: "Sınav çok kolaydı." },
        { word: "Let the cat out of the bag", meaning: "Baklayı ağzından çıkarmak / Sırrı ifşa etmek", pronunciation: "let ðə kæt aʊt ʌv ðə bæg", example: "Who let the cat out of the bag?", exampleTranslation: "Sırrı kim ağzından kaçırdı?" },
        { word: "Spill the beans", meaning: "Ağzındaki baklayı çıkarmak", pronunciation: "spɪl ðə binz", example: "Go ahead, spill the beans!", exampleTranslation: "Hadi, dökül bakalım (sırrı anlat)!" },
        { word: "Barking up the wrong tree", meaning: "Yanlış kapıyı çalmak", pronunciation: "ˈbɑrkɪŋ ʌp ðə rɔŋ tri", example: "If you think I did it, you're barking up the wrong tree.", exampleTranslation: "Eğer benim yaptığımı düşünüyorsan, yanlış kapıyı çalıyorsun." },
        { word: "Beat around the bush", meaning: "Lafı dolandırmak", pronunciation: "bit əˈraʊnd ðə bʊʃ", example: "Stop beating around the bush!", exampleTranslation: "Lafı dolandırmayı bırak!" },
        { word: "Blessing in disguise", meaning: "Görünüşte kötü ama aslında iyi olan şey", pronunciation: "ˈblesɪŋ ɪn dɪsˈgaɪz", example: "Losing that job was a blessing in disguise.", exampleTranslation: "O işi kaybetmek aslında gizli bir lütuftu." },
        { word: "Cry over spilt milk", meaning: "Olmuş bitmiş şeye üzülmek (faydası yok)", pronunciation: "kraɪ ˈoʊvər spɪlt mɪlk", example: "It's no use crying over spilt milk.", exampleTranslation: "Olmuş bitmiş şeye üzülmenin faydası yok." }
    ]
};

const unit194Vocab: UnitVocabulary = {
    unitId: 194,
    title: "Advanced Phrasal Verbs Vocabulary",
    words: [
        { word: "Look down on", meaning: "Küçümsemek, hor görmek", pronunciation: "lʊk daʊn ɒn", example: "She looks down on people who don't have a degree.", exampleTranslation: "Diploması olmayan insanları küçümsüyor." },
        { word: "Keep up with", meaning: "Hızına yetişmek, ayak uydurmak", pronunciation: "kip ʌp wɪð", example: "It's hard to keep up with the news.", exampleTranslation: "Haberlere ayak uydurmak zor." },
        { word: "Run out of", meaning: "Tükenmek, bitmesi", pronunciation: "rʌn aʊt ʌv", example: "We've run out of milk.", exampleTranslation: "Sütümüz bitti." },
        { word: "Carry out", meaning: "Yerine getirmek, uygulamak", pronunciation: "ˈkæri aʊt", example: "They carried out the plan successfully.", exampleTranslation: "Planı başarıyla uyguladılar." },
        { word: "Put up with", meaning: "Katlanmak, tahammül etmek", pronunciation: "pʊt ʌp wɪð", example: "I can't put up with his behavior anymore.", exampleTranslation: "Onun davranışlarına daha fazla katlanamıyorum." },
        { word: "Get away with", meaning: "Yanına kar kalmak", pronunciation: "get əˈweɪ wɪð", example: "He thought he could get away with cheating.", exampleTranslation: "Kopya çekmenin yanına kar kalacağını sandı." },
        { word: "Look up to", meaning: "Hayranlık duymak, saygı duymak", pronunciation: "lʊk ʌp tu", example: "I've always looked up to my older brother.", exampleTranslation: "Ağabeyime her zaman hayranlık duymuşumdur." },
        { word: "Cut down on", meaning: "Azaltmak (tüketimi vb.)", pronunciation: "kʌt daʊn ɒn", example: "I'm trying to cut down on sugar.", exampleTranslation: "Şekeri azaltmaya çalışıyorum." },
        { word: "Fall out with", meaning: "Arası açılmak, kavga etmek", pronunciation: "fɔl aʊt wɪð", example: "He fell out with his best friend over a girl.", exampleTranslation: "Bir kız yüzünden en yakın arkadaşıyla arası açıldı." },
        { word: "Make up for", meaning: "Telafi etmek", pronunciation: "meɪk ʌp fɔr", example: "I'll make up for being late.", exampleTranslation: "Geç kaldığım için telafi edeceğim." }
    ]
};

const unit195Vocab: UnitVocabulary = {
    unitId: 195,
    title: "Formal Communication Vocabulary",
    words: [
        { word: "Furthermore", meaning: "Dahası, ayrıca", pronunciation: "ˌfər-ðər-ˈmȯr", example: "Furthermore, the cost is too high.", exampleTranslation: "Dahası, maliyet çok yüksek." },
        { word: "Nevertheless", meaning: "Yine de, buna rağmen", pronunciation: "ˌne-vər-ðə-ˈles", example: "Nevertheless, he decided to go.", exampleTranslation: "Yine de gitmeye karar verdi." },
        { word: "Consequently", meaning: "Sonuç olarak, bu nedenle", pronunciation: "ˈkän-sə-kwənt-lē", example: "He worked hard; consequently, he was promoted.", exampleTranslation: "Çok çalıştı; sonuç olarak terfi ettirildi." },
        { word: "Regarding", meaning: "İle ilgili olarak", pronunciation: "ri-ˈgär-diŋ", example: "I am writing regarding your recent order.", exampleTranslation: "Son siparişinizle ilgili olarak yazıyorum." },
        { word: "Inquire", meaning: "Bilgi istemek, sormak", pronunciation: "in-ˈkwī(-ə)r", example: "I'd like to inquire about the vacancy.", exampleTranslation: "Boş kadro hakkında bilgi almak istiyorum." },
        { word: "Establish", meaning: "Kurmak, saptamak", pronunciation: "i-ˈsta-blish", example: "They established a new branch in Japan.", exampleTranslation: "Japonya'da yeni bir şube kurdular." },
        { word: "Correspondence", meaning: "Yazışma", pronunciation: "ˌkȯr-ə-ˈspän-dəns", example: "Your correspondence has been received.", exampleTranslation: "Yazışmanız alındı." },
        { word: "Appropriate", meaning: "Uygun, yerinde", pronunciation: "ə-ˈprō-prē-ət", example: "It is not appropriate to wear jeans here.", exampleTranslation: "Burada kot giymek uygun değil." },
        { word: "Reference", meaning: "Referans, kaynak", pronunciation: "ˈre-f(ə-)rəns", example: "Please include a reference number.", exampleTranslation: "Lütfen bir referans numarası ekleyin." },
        { word: "Submit", meaning: "Sunmak, teslim etmek", pronunciation: "səb-ˈmit", example: "You must submit your report by Friday.", exampleTranslation: "Raporunuzu cumaya kadar teslim etmelisiniz." }
    ]
};
const unit196Vocab: UnitVocabulary = {
    unitId: 196,
    title: "Modal Verbs in the Past Vocabulary",
    words: [
        { word: "Certainty", meaning: "Kesinlik", pronunciation: "ˈsər-tən-tē", example: "There is no certainty of success.", exampleTranslation: "Başarı kesinliği yok." },
        { word: "Deduction", meaning: "Çıkarım, sonuç çıkarma", pronunciation: "di-ˈdək-shən", example: "His deduction was based on logic.", exampleTranslation: "Çıkarımı mantığa dayanıyordu." },
        { word: "Probability", meaning: "Olasılık, ihtimal", pronunciation: "ˌprä-bə-ˈbi-lə-tē", example: "There is a high probability of rain.", exampleTranslation: "Yağmur ihtimali yüksek." },
        { word: "Regret", meaning: "Pişmanlık", pronunciation: "ri-ˈgret", example: "I have no regrets.", exampleTranslation: "Hiç pişmanlığım yok." },
        { word: "Criticism", meaning: "Eleştiri", pronunciation: "ˈkri-tə-ˌsi-zəm", example: "He can't handle criticism.", exampleTranslation: "Eleştiriyle başa çıkamaz." },
        { word: "Assume", meaning: "Farz etmek, varsaymak", pronunciation: "ə-ˈsüm", example: "I assume you are ready.", exampleTranslation: "Hazır olduğunuzu varsayıyorum." },
        { word: "Inference", meaning: "Çıkarım", pronunciation: "ˈin-f(ə-)rəns", example: "What inference can we draw?", exampleTranslation: "Hangi çıkarımı yapabiliriz?" },
        { word: "Possibility", meaning: "Olasılık", pronunciation: "ˌpä-sə-ˈbi-lə-tē", example: "Check all possibilities.", exampleTranslation: "Tüm olasılıkları kontrol et." },
        { word: "Speculate", meaning: "Tahmin yürütmek, spekülasyon yapmak", pronunciation: "ˈspe-kyə-ˌlāt", example: "I don't want to speculate on the results.", exampleTranslation: "Sonuçlar üzerine tahmin yürütmek istemiyorum." },
        { word: "Undoubtedly", meaning: "Kuşkusuz", pronunciation: "ˌən-ˈdau-təd-lē", example: "Undoubtedly, he is the best.", exampleTranslation: "Kuşkusuz, o en iyisidir." }
    ]
};

const unit197Vocab: UnitVocabulary = {
    unitId: 197,
    title: "Narrative & Storytelling Vocabulary",
    words: [
        { word: "Atmosphere", meaning: "Atmosfer, ortam", pronunciation: "ˈat-mə-ˌsfir", example: "The atmosphere was tense.", exampleTranslation: "Atmosfer gergindi." },
        { word: "Sequence", meaning: "Dizi, sıra", pronunciation: "ˈsē-kwəns", example: "Follow the sequence of events.", exampleTranslation: "Olayların sırasını takip et." },
        { word: "Background", meaning: "Arka plan", pronunciation: "ˈbak-ˌgraʊnd", example: "The music is in the background.", exampleTranslation: "Müzik arka planda." },
        { word: "Plot", meaning: "Konu, olay örgüsü", pronunciation: "plät", example: "The plot of the movie is complex.", exampleTranslation: "Filmin olay örgüsü karmaşık." },
        { word: "Character", meaning: "Karakter", pronunciation: "ˈker-ik-tər", example: "He is a strong character.", exampleTranslation: "O güçlü bir karakter." },
        { word: "Setting", meaning: "Mekan, ortam", pronunciation: "ˈse-tiŋ", example: "The setting of the story is Paris.", exampleTranslation: "Hikayenin geçtiği yer Paris." },
        { word: "Narrative", meaning: "Anlatı, öykü", pronunciation: "ˈner-ə-tiv", example: "A complex narrative structure.", exampleTranslation: "Karmaşık bir anlatı yapısı." },
        { word: "Simultaneously", meaning: "Eşzamanlı olarak", pronunciation: "ˌsī-məl-ˈtā-nē-əs-lē", example: "Two things happened simultaneously.", exampleTranslation: "İki şey eşzamanlı olarak oldu." },
        { word: "Crucial", meaning: "Çok önemli, hayati", pronunciation: "ˈkrü-shəl", example: "This is a crucial moment.", exampleTranslation: "Bu hayati bir an." },
        { word: "Unfold", meaning: "Göz önüne serilmek, açılmak", pronunciation: "ˌən-ˈfōld", example: "As the story unfolds...", exampleTranslation: "Hikaye ilerledikçe..." }
    ]
};

const unit198Vocab: UnitVocabulary = {
    unitId: 198,
    title: "Logical Connectors & Conditions",
    words: [
        { word: "Unless", meaning: "...medikçe", pronunciation: "ən-ˈles", example: "Unless you try, you won't succeed.", exampleTranslation: "Denemedikçe başaramazsın." },
        { word: "Provided", meaning: "Şartıyla", pronunciation: "prə-ˈvī-dəd", example: "You can go, provided you finish.", exampleTranslation: "Bitirmen şartıyla gidebilirsin." },
        { word: "Condition", meaning: "Şart, koşul", pronunciation: "kən-ˈdi-shən", example: "Terms and conditions apply.", exampleTranslation: "Şartlar ve koşullar geçerlidir." },
        { word: "Stipulation", meaning: "Şart, koşul koyma", pronunciation: "ˌsti-pyə-ˈlā-shən", example: "A major stipulation of the contract.", exampleTranslation: "Sözleşmenin ana şartlarından biri." },
        { word: "Supposing", meaning: "Sayalım ki, farz edelim", pronunciation: "sə-ˈpō-ziŋ", example: "Supposing it rains, what then?", exampleTranslation: "Diyelim ki yağmur yağdı, o zaman ne olacak?" },
        { word: "As long as", meaning: "...dığı sürece", pronunciation: "æz lɔŋ æz", example: "As long as I'm here, you're safe.", exampleTranslation: "Ben burada olduğum sürece güvendesin." },
        { word: "Circumstance", meaning: "Durum, koşul", pronunciation: "ˈsər-kəm-ˌstans", example: "In these circumstances, we wait.", exampleTranslation: "Bu koşullar altında bekliyoruz." },
        { word: "Outcome", meaning: "Sonuç, akıbet", pronunciation: "ˈau̇t-ˌkəm", example: "The outcome was positive.", exampleTranslation: "Sonuç olumluydu." },
        { word: "Alternative", meaning: "Alternatif", pronunciation: "ȯl-ˈtər-nə-tiv", example: "There is no alternative.", exampleTranslation: "Alternatif yok." },
        { word: "In case", pronunciation: "ɪn keɪs", meaning: "Durumunda, ...olur diye", example: "Take an umbrella in case it rains.", exampleTranslation: "Yağmur yağar diye bir şemsiye al." }
    ]
};

const unit199Vocab: UnitVocabulary = {
    unitId: 199,
    title: "Mixed Conditionals Vocabulary",
    words: [
        { word: "Hypothetical", meaning: "Varsayımsal", pronunciation: "ˌhī-pə-ˈthe-ti-kəl", example: "This is a hypothetical question.", exampleTranslation: "Bu varsayımsal bir soru." },
        { word: "Unreal", meaning: "Gerçek dışı", pronunciation: "ˌən-ˈrē(-ə)l", example: "This situation is unreal.", exampleTranslation: "Bu durum gerçek dışı." },
        { word: "Imagine", meaning: "Hayal etmek", pronunciation: "i-ˈma-jən", example: "Imagine you are in London.", exampleTranslation: "Londra'da olduğunu hayal et." },
        { word: "Scenario", meaning: "Senaryo", pronunciation: "sə-ˈner-ē-ˌō", example: "A worst-case scenario.", exampleTranslation: "En kötü durum senaryosu." },
        { word: "Combination", meaning: "Kombinasyon", pronunciation: "ˌkäm-bə-ˈnā-shən", example: "A combination of factors.", exampleTranslation: "Faktörlerin birleşimi." },
        { word: "Fluently", meaning: "Akıcı bir şekilde", pronunciation: "ˈflü-ənt-lē", example: "She speaks English fluently.", exampleTranslation: "O İngilizceyi akıcı bir şekilde konuşur." },
        { word: "Regrettably", meaning: "Maalesef", pronunciation: "ri-ˈgre-tə-blē", example: "Regrettably, I can't come.", exampleTranslation: "Maalesef gelemiyorum." },
        { word: "Outcome", meaning: "Sonuç", pronunciation: "ˈaʊt-ˌkʌm", example: "The final outcome of the study.", exampleTranslation: "Çalışmanın nihai sonucu." },
        { word: "Interconnected", meaning: "Birbiriyle bağlantılı", pronunciation: "ˌin-tər-kə-ˈnek-təd", example: "The issues are interconnected.", exampleTranslation: "Sorunlar birbiriyle bağlantılı." },
        { word: "Modify", meaning: "Değiştirmek", pronunciation: "ˈmä-də-ˌfī", example: "We need to modify the plan.", exampleTranslation: "Planı değiştirmemiz gerekiyor." }
    ]
};

const unit200Vocab: UnitVocabulary = {
    unitId: 200,
    title: "B2 Progress Review Vocabulary",
    words: [
        { word: "Comprehensive", meaning: "Kapsamlı", pronunciation: "ˌkäm-pri-ˈhen-siv", example: "A comprehensive review.", exampleTranslation: "Kapsamlı bir inceleme." },
        { word: "Proficiency", meaning: "Yeterlilik", pronunciation: "prə-ˈfi-shən-sē", example: "Language proficiency test.", exampleTranslation: "Dil yeterlilik sınavı." },
        { word: "Recall", meaning: "Hatırlamak", pronunciation: "ri-ˈkȯl", example: "I can't recall his name.", exampleTranslation: "Adını hatırlayamıyorum." },
        { word: "Assessment", meaning: "Değerlendirme", pronunciation: "ə-ˈse-smənt", example: "A final assessment.", exampleTranslation: "Nihai bir değerlendirme." },
        { word: "Structure", meaning: "Yapı", pronunciation: "ˈstrək-chər", example: "Sentence structure.", exampleTranslation: "Cümle yapısı." },
        { word: "Context", meaning: "Bağlam", pronunciation: "ˈkän-ˌtekst", example: "Use words in context.", exampleTranslation: "Kelimeleri bağlam içinde kullanın." },
        { word: "Fluency", meaning: "Akıcılık", pronunciation: "ˈflü-ən-sē", example: "Speaking fluency.", exampleTranslation: "Konuşma akıcılığı." },
        { word: "Vocabulary", meaning: "Kelime bilgisi", pronunciation: "vō-ˈka-byə-ˌler-ē", example: "Improve your vocabulary.", exampleTranslation: "Kelime bilginizi geliştirin." },
        { word: "Grammar", meaning: "Dilbilgisi", pronunciation: "ˈgra-mər", example: "Grammar rules.", exampleTranslation: "Dilbilgisi kuralları." },
        { word: "Completion", meaning: "Tamamlama", pronunciation: "kəm-ˈplē-shən", example: "Course completion certificate.", exampleTranslation: "Kurs tamamlama sertifikası." }
    ]
};

const unit201Vocab: UnitVocabulary = {
    unitId: 201,
    title: "Medical English: Symptoms & Staff",
    words: [
        { word: "Diagnosis", meaning: "Teşhis, tanı", pronunciation: "ˌdī-ig-ˈnō-səs", example: "The diagnosis was confirmed.", exampleTranslation: "Teşhis doğrulandı." },
        { word: "Symptoms", meaning: "Belirtiler, semptomlar", pronunciation: "ˈsim(p)-təmz", example: "What are your symptoms?", exampleTranslation: "Belirtileriniz nelerdir?" },
        { word: "Nausea", meaning: "Bulantı", pronunciation: "ˈnȯ-zē-ə", example: "I feel some nausea.", exampleTranslation: "Biraz bulantı hissediyorum." },
        { word: "Dizziness", meaning: "Baş dönmesi", pronunciation: "ˈdi-zē-nəs", example: "Dizziness is a common side effect.", exampleTranslation: "Baş dönmesi yaygın bir yan etkidir." },
        { word: "Physician", meaning: "Hekim, doktor", pronunciation: "fə-ˈzi-shən", example: "Consult your physician.", exampleTranslation: "Hekiminize danışın." },
        { word: "Surgeon", meaning: "Cerrah", pronunciation: "ˈsər-jən", example: "The surgeon performed the operation.", exampleTranslation: "Cerrah operasyonu gerçekleştirdi." },
        { word: "Specialist", meaning: "Uzman", pronunciation: "ˈspe-sh(ə-)list", example: "You need to see a specialist.", exampleTranslation: "Bir uzmana görünmeniz gerekiyor." },
        { word: "Referral", meaning: "Sevk", pronunciation: "ri-ˈfər-əl", example: "I have a referral from my GP.", exampleTranslation: "Aile hekimimden sevkim var." },
        { word: "Patient", meaning: "Hasta", pronunciation: "ˈpā-shənt", example: "The patient is recovering.", exampleTranslation: "Hasta iyileşiyor." },
        { word: "Vital signs", meaning: "Yaşam bulguları", pronunciation: "ˈvaɪtl saɪnz", example: "Monitor the vital signs.", exampleTranslation: "Yaşam bulgularını takip et." }
    ]
};

const unit202Vocab: UnitVocabulary = {
    unitId: 202,
    title: "Medical English: Treatment & Meds",
    words: [
        { word: "Prescription", meaning: "Reçete", pronunciation: "pri-ˈskrip-shən", example: "This drug is available on prescription only.", exampleTranslation: "Bu ilaç sadece reçete ile alınabilir." },
        { word: "Dosage", meaning: "Dozaj", pronunciation: "ˈdō-sij", example: "Do not exceed the recommended dosage.", exampleTranslation: "Önerilen dozu aşmayın." },
        { word: "Medication", meaning: "İlaç, tedavi", pronunciation: "ˌme-də-ˈkā-shən", example: "Are you taking any medication?", exampleTranslation: "Herhangi bir ilaç kullanıyor musunuz?" },
        { word: "Side effect", meaning: "Yan etki", pronunciation: "saɪd ɪˈfɛkt", example: "Drowsiness is a side effect.", exampleTranslation: "Uyuşukluk bir yan etkidir." },
        { word: "Therapy", meaning: "Terapi, tedavi", pronunciation: "ˈther-ə-pē", example: "Physical therapy is needed.", exampleTranslation: "Fizik tedavi gerekiyor." },
        { word: "Injection", meaning: "Enjeksiyon, iğne", pronunciation: "in-ˈjek-shən", example: "She gave him an injection.", exampleTranslation: "Ona bir iğne yaptı." },
        { word: "Recovery", meaning: "İyileşme", pronunciation: "ri-ˈkə-v(ə-)rē", example: "I wish you a speedy recovery.", exampleTranslation: "Acil şifalar dilerim." },
        { word: "Admit", meaning: "Hastaneye yatırmak", pronunciation: "əd-ˈmit", example: "He was admitted to the ICU.", exampleTranslation: "Yoğun bakıma yatırıldı." },
        { word: "Discharge", meaning: "Taburcu etmek", pronunciation: "dis-ˈchärj", example: "The patient was discharged today.", exampleTranslation: "Hasta bugün taburcu edildi." },
        { word: "Procedure", meaning: "Prosedür, işlem", pronunciation: "prə-ˈsē-jər", example: "The procedure took two hours.", exampleTranslation: "İşlem iki saat sürdü." }
    ]
};

const unit203Vocab: UnitVocabulary = {
    unitId: 203,
    title: "Public Health & Epidemiology Vocab",
    words: [
        { word: "Epidemic", meaning: "Salgın", pronunciation: "ˌe-pə-ˈde-mik", example: "The flu epidemic spread rapidly.", exampleTranslation: "Grip salgını hızla yayıldı." },
        { word: "Contagious", meaning: "Bulaşıcı", pronunciation: "kən-ˈtā-jəs", example: "This disease is highly contagious.", exampleTranslation: "Bu hastalık çok bulaşıcıdır." },
        { word: "Vaccination", meaning: "Aşılama", pronunciation: "ˌvak-sə-ˈnā-shən", example: "Vaccination is essential for prevention.", exampleTranslation: "Önleme için aşılama şarttır." },
        { word: "Sanitation", meaning: "Sanitasyon, sağlık koruma", pronunciation: "ˌsa-nə-ˈtā-shən", example: "Improved sanitation saves lives.", exampleTranslation: "Gelişmiş sanitasyon hayat kurtarır." },
        { word: "Immunity", meaning: "Bağışıklık", pronunciation: "i-ˈmyü-nə-tē", example: "Natural immunity is not enough.", exampleTranslation: "Doğal bağışıklık yeterli değil." },
        { word: "Policy", meaning: "Politika", pronunciation: "ˈpä-lə-sē", example: "New health policies were introduced.", exampleTranslation: "Yeni sağlık politikaları tanıtıldı." },
        { word: "Prevention", meaning: "Önleme", pronunciation: "pri-ˈven-shən", example: "Prevention is better than cure.", exampleTranslation: "Önleme, tedaviden iyidir." },
        { word: "Hygiene", meaning: "Hijyen", pronunciation: "ˈhī-ˌjēn", example: "Personal hygiene is important.", exampleTranslation: "Kişisel hijyen önemlidir." },
        { word: "Outbreak", meaning: "Patlak verme, salgın başlangıcı", pronunciation: "ˈau̇t-ˌbrāk", example: "A local outbreak was reported.", exampleTranslation: "Yerel bir salgın patlak vermesi bildirildi." },
        { word: "Screening", meaning: "Tarama (sağlık)", pronunciation: "ˈskrē-niŋ", example: "Regular cancer screening is vital.", exampleTranslation: "Düzenli kanser taraması hayatidir." }
    ]
};

const unit204Vocab: UnitVocabulary = {
    unitId: 204,
    title: "Legal English: Court & Rights",
    words: [
        { word: "Plaintiff", meaning: "Davacı", pronunciation: "ˈplān-tif", example: "The plaintiff won the case.", exampleTranslation: "Davacı davayı kazandı." },
        { word: "Defendant", meaning: "Davalı / Sanık", pronunciation: "di-ˈfen-dənt", example: "The defendant pleaded not guilty.", exampleTranslation: "Davalı suçsuz olduğunu iddia etti." },
        { word: "Verdict", meaning: "Hüküm, karar", pronunciation: "ˈvər-dikt", example: "The jury reached a verdict.", exampleTranslation: "Jüri bir karara vardı." },
        { word: "Legislation", meaning: "Mevzuat", pronunciation: "ˌle-jəs-ˈlā-shən", example: "New legislation was passed.", exampleTranslation: "Yeni mevzuat geçti." },
        { word: "Prosecutor", meaning: "Savcı", pronunciation: "ˈprä-si-ˌkyü-tər", example: "The prosecutor presented the evidence.", exampleTranslation: "Savcı kanıtları sundu." },
        { word: "Attorney", meaning: "Avukat", pronunciation: "ə-ˈtər-nē", example: "Consult your attorney.", exampleTranslation: "Avukatınıza danışın." },
        { word: "Sentence", meaning: "Ceza, mahkumiyet", pronunciation: "ˈsen-təns", example: "He received a five-year sentence.", exampleTranslation: "Beş yıl ceza aldı." },
        { word: "Appeal", meaning: "Temyiz", pronunciation: "ə-ˈpēl", example: "They decided to appeal the decision.", exampleTranslation: "Karara temyiz başvurusu yapmaya karar verdiler." },
        { word: "Constitutional", meaning: "Anayasal", pronunciation: "ˌkän-stə-ˈtü-shə-nəl", example: "It is a constitutional right.", exampleTranslation: "Bu anayasal bir haktır." },
        { word: "Jurisdiction", meaning: "Yetki alanı, yargı yetkisi", pronunciation: "ˌju̇r-əs-ˈdik-shən", example: "This is outside our jurisdiction.", exampleTranslation: "Bu bizim yetki alanımızın dışında." }
    ]
};

const unit205Vocab: UnitVocabulary = {
    unitId: 205,
    title: "Legal English: Contracts & Liability",
    words: [
        { word: "Contract", meaning: "Sözleşme", pronunciation: "ˈkän-ˌtrakt", example: "Sign the contract here.", exampleTranslation: "Sözleşmeyi buradan imzalayın." },
        { word: "Binding", meaning: "Bağlayıcı", pronunciation: "ˈbīn-diŋ", example: "The agreement is legally binding.", exampleTranslation: "Anlaşma yasal olarak bağlayıcıdır." },
        { word: "Breach", meaning: "İhlal", pronunciation: "brēch", example: "This is a breach of contract.", exampleTranslation: "Bu bir sözleşme ihlalidir." },
        { word: "Liability", meaning: "Sorumluluk, yükümlülük", pronunciation: "ˌlī-ə-ˈbi-lə-tē", example: "Limited liability company.", exampleTranslation: "Limited şirket (sınırlı sorumluluk)." },
        { word: "Clause", meaning: "Madde, fıkra", pronunciation: "klȯz", example: "Check the termination clause.", exampleTranslation: "Fesih maddesini kontrol edin." },
        { word: "Agreement", meaning: "Anlaşma", pronunciation: "ə-ˈgrē-mənt", example: "We have reached an agreement.", exampleTranslation: "Bir anlaşmaya vardık." },
        { word: "Termination", meaning: "Fesih, sonlandırma", pronunciation: "ˌtər-mə-ˈnā-shən", example: "Termination of the lease.", exampleTranslation: "Kiranın feshi." },
        { word: "Obligation", meaning: "Yükümlülük, borç", pronunciation: "ˌä-blə-ˈgā-shən", example: "They failed to fulfill their obligations.", exampleTranslation: "Yükümlülüklerini yerine getiremediler." },
        { word: "Indemnity", meaning: "Tazminat", pronunciation: "in-ˈdem-nə-tē", example: "They signed an indemnity agreement.", exampleTranslation: "Bir tazminat anlaşması imzaladılar." },
        { word: "Litigation", meaning: "Dava açma, dava süreci", pronunciation: "ˌli-tə-ˈgā-shən", example: "Avoid litigation if possible.", exampleTranslation: "Mümkünse dava sürecinden kaçının." }
    ]
};

const unit206Vocab: UnitVocabulary = {
    unitId: 206,
    title: "Legal English: IP & Privacy",
    words: [
        { word: "Copyright", meaning: "Telif hakkı", pronunciation: "ˈkä-pē-ˌrīt", example: "The book is protected by copyright.", exampleTranslation: "Kitap telif hakkı ile korunmaktadır." },
        { word: "Infringement", meaning: "İhlal", pronunciation: "in-ˈfrinj-mənt", example: "Copyright infringement is a serious offense.", exampleTranslation: "Telif hakkı ihlali ciddi bir suçtur." },
        { word: "Trademark", meaning: "Ticari marka", pronunciation: "ˈtrād-ˌmärk", example: "They registered a new trademark.", exampleTranslation: "Yeni bir ticari marka tescil ettirdiler." },
        { word: "Confidentiality", meaning: "Gizlilik", pronunciation: "ˌkän-fə-ˌden-shē-ˈa-lə-tē", example: "Maintain strict confidentiality.", exampleTranslation: "Sıkı bir gizlilik sağlayın." },
        { word: "Disclosure", meaning: "İfşa, açıklama", pronunciation: "dis-ˈklō-zhər", example: "Non-disclosure agreement (NDA).", exampleTranslation: "Gizlilik sözleşmesi (İfşa etmeme anlaşması)." },
        { word: "Privacy", meaning: "Gizlilik, özel hayat", pronunciation: "ˈprī-və-sē", example: "Data privacy laws (GDPR).", exampleTranslation: "Veri gizliliği yasaları." },
        { word: "Intellectual", meaning: "Entelektüel, fikri", pronunciation: "ˌin-tə-ˈlek-chə-wəl", example: "Intellectual property rights.", exampleTranslation: "Fikri mülkiyet hakları." },
        { word: "Patent", meaning: "Patent", pronunciation: "ˈpa-tənt", example: "The patent expires next year.", exampleTranslation: "Patentin süresi gelecek yıl doluyor." },
        { word: "License", meaning: "Lisans", pronunciation: "ˈlī-səns", example: "You need a license to use this software.", exampleTranslation: "Bu yazılımı kullanmak için lisansa ihtiyacınız var." },
        { word: "Enforcement", meaning: "Uygulama, icra (yasa)", pronunciation: "in-ˈfōrs-mənt", example: "Law enforcement agencies.", exampleTranslation: "Kolluk kuvvetleri / İcra makamları." }
    ]
};

const unit207Vocab: UnitVocabulary = {
    unitId: 207,
    title: "Finance: Banking & Personal Finance",
    words: [
        { word: "Interest rate", meaning: "Faiz oranı", pronunciation: "ˈɪntrəst reɪt", example: "Interest rates are rising.", exampleTranslation: "Faiz oranları yükseliyor." },
        { word: "Mortgage", meaning: "Konut kredisi, ipotek", pronunciation: "ˈmȯr-gij", example: "We took out a 20-year mortgage.", exampleTranslation: "20 yıllık bir konut kredisi çektik." },
        { word: "Transaction", meaning: "İşlem, muamele", pronunciation: "tran-ˈzak-shən", example: "The transaction was successful.", exampleTranslation: "İşlem başarılıydı." },
        { word: "Withdrawal", meaning: "Para çekme", pronunciation: "wið-ˈdrɔ-əl", example: "Atm withdrawal limit.", exampleTranslation: "ATM para çekme limiti." },
        { word: "Balance", meaning: "Bakiye", pronunciation: "ˈba-ləns", example: "Check your account balance.", exampleTranslation: "Hesap bakiyenizi kontrol edin." },
        { word: "Overdraft", meaning: "Kredili mevduat, hesap aşımı", pronunciation: "ˈō-vər-ˌdraft", example: "I have a small overdraft.", exampleTranslation: "Küçük bir hesap aşımım (eksi bakiye) var." },
        { word: "Savings", meaning: "Birikim, tasarruf", pronunciation: "ˈsā-viŋz", example: "Personal savings account.", exampleTranslation: "Kişisel birikim hesabı." },
        { word: "Loan", meaning: "Kredi, borç", pronunciation: "lōn", example: "Apply for a student loan.", exampleTranslation: "Öğrenci kredisi için başvurun." },
        { word: "Instalment", meaning: "Taksit", pronunciation: "in-ˈstȯl-mənt", example: "Pay in monthly instalments.", exampleTranslation: "Aylık taksitlerle ödeyin." },
        { word: "Currency", meaning: "Para birimi", pronunciation: "ˈkər-ən-sē", example: "Foreign currency exchange.", exampleTranslation: "Döviz (yabancı para) değişimi." }
    ]
};

const unit208Vocab: UnitVocabulary = {
    unitId: 208,
    title: "Finance: Investment & Stocks",
    words: [
        { word: "Shares", meaning: "Hisseler", pronunciation: "shers", example: "I bought 100 shares of Apple.", exampleTranslation: "Apple'dan 100 hisse aldım." },
        { word: "Dividend", meaning: "Temettü, kar payı", pronunciation: "ˈdi-və-ˌdend", example: "Companies pay annual dividends.", exampleTranslation: "Şirketler yıllık temettü öder." },
        { word: "Bull market", meaning: "Boğa piyasası (Yükselen)", pronunciation: "bʊl ˈmɑrkət", example: "The bull market lasted for years.", exampleTranslation: "Boğa piyasası yıllarca sürdü." },
        { word: "Bear market", meaning: "Ayı piyasası (Düşen)", pronunciation: "ber ˈmɑrkət", example: "Investors fear a bear market.", exampleTranslation: "Yatırımcılar ayı piyasası korkusu yaşıyor." },
        { word: "Portfolio", meaning: "Portföy", pronunciation: "pȯrt-ˈfō-lē-ˌō", example: "A diversified investment portfolio.", exampleTranslation: "Çeşitlendirilmiş bir yatırım portföyü." },
        { word: "Asset", meaning: "Varlık, aktif", pronunciation: "ˈa-ˌset", example: "Total assets of the company.", exampleTranslation: "Şirketin toplam varlıkları." },
        { word: "Liability", meaning: "Borç, pasif / Sorumluluk", pronunciation: "ˌlī-ə-ˈbi-lə-tē", example: "Assets and liabilities.", exampleTranslation: "Varlıklar ve borçlar." },
        { word: "Equity", meaning: "Özkaynak, hisse değeri", pronunciation: "ˈe-kwə-tē", example: "Home equity loan.", exampleTranslation: "Konut özkaynak kredisi." },
        { word: "Bond", meaning: "Tahvil", pronunciation: "bänd", example: "Government bonds are safe.", exampleTranslation: "Devlet tahvilleri güvenlidir." },
        { word: "Volatility", meaning: "Volatilite, oynaklık", pronunciation: "ˌvä-lə-ˈti-lə-tē", example: "High market volatility.", exampleTranslation: "Yüksek piyasa oynaklığı." }
    ]
};

const unit209Vocab: UnitVocabulary = {
    unitId: 209,
    title: "Business English: Corporate Structure",
    words: [
        { word: "Board of Directors", meaning: "Yönetim Kurulu", pronunciation: "bɔrd ʌv dəˈrɛktərz", example: "The board approved the budget.", exampleTranslation: "Yönetim kurulu bütçeyi onayladı." },
        { word: "Stakeholder", meaning: "Paydaş", pronunciation: "ˈstāk-ˌhōl-dər", example: "Meeting with all stakeholders.", exampleTranslation: "Tüm paydaşlarla toplantı." },
        { word: "Shareholder", meaning: "Hissedar", pronunciation: "ˈsher-ˌhōl-dər", example: "The shareholder's meeting.", exampleTranslation: "Hissedarlar toplantısı." },
        { word: "CEO", meaning: "Genel Müdür / İcra Kurulu Başkanı", pronunciation: "ˌsē-ˌē-ˈō", example: "The CEO announced a merger.", exampleTranslation: "CEO bir birleşme duyurdu." },
        { word: "Merger", meaning: "Birleşme (şirket)", pronunciation: "ˈmər-jər", example: "A merger between two tech giants.", exampleTranslation: "İki teknoloji devi arasında bir birleşme." },
        { word: "Acquisition", meaning: "Satın alma (şirket)", pronunciation: "ˌa-kwə-ˈzi-shən", example: "Hostile acquisition.", exampleTranslation: "Düşmanca satın alma." },
        { word: "Headquarters", meaning: "Genel merkez", pronunciation: "ˈhed-ˌkwȯr-tərz", example: "Our headquarters is in London.", exampleTranslation: "Genel merkezimiz Londra'da." },
        { word: "Subsidiary", meaning: "Bağlı ortaklık, şube", pronunciation: "səb-ˈsi-dē-ˌer-ē", example: "A subsidiary company in Asia.", exampleTranslation: "Asya'da bağlı bir şirket." },
        { word: "Minutes", meaning: "Toplantı tutanağı", pronunciation: "ˈmi-nəts", example: "Who is taking the minutes?", exampleTranslation: "Toplantı tutanağını kim tutuyor?" },
        { word: "Agenda", meaning: "Gündem", pronunciation: "ə-ˈjen-də", example: "What's on the agenda today?", exampleTranslation: "Bugün gündemde ne var?" }
    ]
};

const unit210Vocab: UnitVocabulary = {
    unitId: 210,
    title: "ESP Integration Review Vocab",
    words: [
        { word: "Professionalism", meaning: "Profesyonellik", pronunciation: "prə-ˈfesh-nə-ˌli-zəm", example: "High standards of professionalism.", exampleTranslation: "Yüksek profesyonellik standartları." },
        { word: "Specialization", meaning: "Uzmanlaşma", pronunciation: "ˌspe-shə-lə-ˈzā-shən", example: "Specialization in medical law.", exampleTranslation: "Sağlık hukuku alanında uzmanlaşma." },
        { word: "Terminology", meaning: "Terminoloji, terimler", pronunciation: "ˌtər-mə-ˈnä-lə-jē", example: "Technical medical terminology.", exampleTranslation: "Teknik tıbbi terminoloji." },
        { word: "Communication", meaning: "İletişim", pronunciation: "kə-ˌmyü-nə-ˈkā-shən", example: "Effective workplace communication.", exampleTranslation: "Etkili işyeri iletişimi." },
        { word: "Precision", meaning: "Hassasiyet, kesinlik", pronunciation: "pri-ˈsi-zhən", example: "Precision is key in legal work.", exampleTranslation: "Hukuki çalışmalarda kesinlik esastır." },
        { word: "Expertise", meaning: "Uzmanlık", pronunciation: "ˌek-spər-ˈtēz", example: "Technical expertise.", exampleTranslation: "Teknik uzmanlık." },
        { word: "Application", meaning: "Uygulama", pronunciation: "ˌa-plə-ˈkā-shən", example: "Practical application of knowledge.", exampleTranslation: "Bilginin pratik uygulaması." },
        { word: "Mastery", meaning: "Ustalık", pronunciation: "ˈma-st(ə-)rē", example: "Mastery of business English.", exampleTranslation: "İş İngilizcesi ustalığı." },
        { word: "Contextual", meaning: "Bağlamsal", pronunciation: "kän-ˈteks-chə-wəl", example: "Contextual meaning.", exampleTranslation: "Bağlamsal anlam." },
        { word: "Synthesis", meaning: "Sentez", pronunciation: "ˈsin-thə-səs", example: "Synthesis of medical and legal concepts.", exampleTranslation: "Tıbbi ve hukuki kavramların sentezi." }
    ]
};

const unit211Vocab: UnitVocabulary = {
    unitId: 211,
    title: "Formal & Academic Adverbs",
    words: [
        { word: "Scarcely", meaning: "Neredeyse hiç, güçbela", pronunciation: "ˈskers-lē", example: "He had scarcely begun to speak.", exampleTranslation: "Neredeyse konuşmaya henüz başlamıştı." },
        { word: "Seldom", meaning: "Nadiren", pronunciation: "ˈsel-dəm", example: "Seldom do we see such talent.", exampleTranslation: "Böyle bir yeteneği nadiren görürüz." },
        { word: "Hardly", meaning: "Hemen hemen hiç", pronunciation: "ˈhärd-lē", example: "Hardly had I left the house.", exampleTranslation: "Evden henüz çıkmıştım ki..." },
        { word: "Manifest", meaning: "Açıkça göstermek, belirgin", pronunciation: "ˈma-nə-ˌfest", example: "His anger was manifest.", exampleTranslation: "Öfkesi belirgindi." },
        { word: "Phenomenon", meaning: "Olgu, fenomen", pronunciation: "fi-ˈnä-mə-ˌnän", example: "A natural phenomenon.", exampleTranslation: "Doğal bir olgu." },
        { word: "Paradox", meaning: "Paradoks, çelişki", pronunciation: "ˈper-ə-ˌdäks", example: "It is a strange paradox.", exampleTranslation: "Bu tuhaf bir çelişkidir." },
        { word: "Insight", meaning: "İçgörü, kavrayış", pronunciation: "ˈin-ˌsīt", example: "Gain insight into the problem.", exampleTranslation: "Sıkıntıyı derinlemesine kavrayın." },
        { word: "Abstract", meaning: "Soyut", pronunciation: "ˈab-ˌstrakt", example: "Abstract concepts are hard to grasp.", exampleTranslation: "Soyut kavramları kavramak zordur." },
        { word: "Concrete", meaning: "Somut", pronunciation: "ˈkän-ˌkrēt", example: "Need concrete evidence.", exampleTranslation: "Somut kanıta ihtiyaç var." },
        { word: "Vague", meaning: "Belirsiz, net olmayan", pronunciation: "ˈvāg", example: "The instructions were vague.", exampleTranslation: "Talimatlar belirsizdi." }
    ]
};

const unit212Vocab: UnitVocabulary = {
    unitId: 212,
    title: "Vocabulary for Emphasis",
    words: [
        { word: "Precisely", meaning: "Kesinlikle, tam olarak", pronunciation: "pri-ˈsīs-lē", example: "That is precisely what I meant.", exampleTranslation: "Tam olarak kastettiğim buydu." },
        { word: "Specifically", meaning: "Özellikle", pronunciation: "spi-ˈsi-fi-k(ə-)lē", example: "I specifically asked for help.", exampleTranslation: "Özellikle yardım istedim." },
        { word: "Essential", meaning: "Temel, zorunlu", pronunciation: "i-ˈsen-shəl", example: "Water is essential for life.", exampleTranslation: "Su yaşam için temeldir." },
        { word: "Fundamental", meaning: "Esas, köklü", pronunciation: "ˌfən-də-ˈmen-təl", example: "Fundamental changes are needed.", exampleTranslation: "Köklü değişimler gerekiyor." },
        { word: "Paramount", meaning: "En önemli, üstün", pronunciation: "ˈper-ə-ˌmau̇nt", example: "Safety is of paramount importance.", exampleTranslation: "Güvenlik en üst düzeyde öneme sahiptir." },
        { word: "Inherent", meaning: "Doğasında olan, içsel", pronunciation: "in-ˈhir-ənt", example: "Inherent risks of the job.", exampleTranslation: "İşin doğasında olan riskler." },
        { word: "Ultimate", meaning: "Nihai, son", pronunciation: "ˈəl-tə-mət", example: "The ultimate goal.", exampleTranslation: "Nihai hedef." },
        { word: "Notable", meaning: "Kayda değer", pronunciation: "ˈnō-tə-bəl", example: "A notable achievement.", exampleTranslation: "Kayda değer bir başarı." },
        { word: "Distinct", meaning: "Belirgin, farklı", pronunciation: "di-ˈstiŋkt", example: "There's a distinct possibility.", exampleTranslation: "Belirgin bir ihtimal var." },
        { word: "Striking", meaning: "çarpıcı", pronunciation: "ˈstrī-kiŋ", example: "A striking resemblance.", exampleTranslation: "Çarpıcı bir benzerlik." }
    ]
};

const unit213Vocab: UnitVocabulary = {
    unitId: 213,
    title: "Reporting & Academic Verbs",
    words: [
        { word: "Allegedly", meaning: "İddiaya göre", pronunciation: "ə-ˈle-jəd-lē", example: "He allegedly stole the car.", exampleTranslation: "İddiaya göre arabayı o çaldı." },
        { word: "Reportedly", meaning: "Bildirilene göre", pronunciation: "ri-ˈpōr-təd-lē", example: "They are reportedly engaged.", exampleTranslation: "Bildirilene göre nişanlandılar." },
        { word: "Presumably", meaning: "Muhtemelen", pronunciation: "pri-ˈzü-mə-blē", example: "Presumably, he forgot.", exampleTranslation: "Muhtemelen unuttu." },
        { word: "Assert", meaning: "İddia etmek, öne sürmek", pronunciation: "ə-ˈsərt", example: "She continued to assert her innocence.", exampleTranslation: "Suçsuzluğunu iddia etmeye devam etti." },
        { word: "Hypothesize", meaning: "Hipotez kurmak", pronunciation: "hī-ˈpä-thə-ˌsīz", example: "Scientists hypothesize about it.", exampleTranslation: "Bilim insanları bu konuda hipotez kuruyor." },
        { word: "Analyze", meaning: "Analiz etmek", pronunciation: "ˈa-nə-ˌlīz", example: "Analyze the results.", exampleTranslation: "Sonuçları analiz edin." },
        { word: "Estimate", meaning: "Tahmin etmek (sayısal)", pronunciation: "ˈes-tə-ˌmāt", example: "Estimate the costs.", exampleTranslation: "Maliyetleri tahmin edin." },
        { word: "Acknowledge", meaning: "Kabul etmek, onaylamak", pronunciation: "ik-ˈnä-lij", example: "He acknowledged his mistake.", exampleTranslation: "Hatasını kabul etti." },
        { word: "Conclude", meaning: "Sonuca varmak", pronunciation: "kən-ˈklüd", example: "What do you conclude from this?", exampleTranslation: "Bundan ne sonuç çıkarıyorsun?" },
        { word: "Infer", meaning: "Çıkarım yapmak", pronunciation: "in-ˈfər", example: "What can we infer from the data?", exampleTranslation: "Verilerden ne çıkarım yapabiliriz?" }
    ]
};

const unit214Vocab: UnitVocabulary = {
    unitId: 214,
    title: "Formal Requirements Vocab",
    words: [
        { word: "Mandatory", meaning: "Zorunlu", pronunciation: "ˈman-də-ˌtōr-ē", example: "Attendance is mandatory.", exampleTranslation: "Katılım zorunludur." },
        { word: "Imperative", meaning: "Mecburi, hayati", pronunciation: "im-ˈper-ə-tiv", example: "It is imperative to act now.", exampleTranslation: "Şimdi harekete geçmek mecburidir." },
        { word: "Stipulate", meaning: "Şart koşmak", pronunciation: "ˈsti-pyə-ˌlāt", example: "The contract stipulates a fee.", exampleTranslation: "Sözleşme bir ücret şart koşuyor." },
        { word: "Advocate", meaning: "Savunmak, desteklemek", pronunciation: "ˈad-və-kət", example: "She advocates for human rights.", exampleTranslation: "İnsan haklarını savunuyor." },
        { word: "Comply", meaning: "Uyum sağlamak, riayet etmek", pronunciation: "kəm-ˈplī", example: "Comply with the rules.", exampleTranslation: "Kurallara uyun." },
        { word: "Regulation", meaning: "Düzenleme, yönetmelik", pronunciation: "ˌre-gyə-ˈlā-shən", example: "Health and safety regulations.", exampleTranslation: "Sağlık ve güvenlik yönetmelikleri." },
        { word: "Requirement", meaning: "Gereksinim", pronunciation: "ri-ˈkwī(-ə)r-mənt", example: "Entry requirements.", exampleTranslation: "Giriş gereksinimleri." },
        { word: "Standard", meaning: "Standart", pronunciation: "ˈstan-dərd", example: "Meet the high standards.", exampleTranslation: "Yüksek standartları karşılayın." },
        { word: "Criterion", meaning: "Kriter, ölçüt", pronunciation: "krī-ˈtir-ē-ən", example: "What is the main criterion?", exampleTranslation: "Ana kriter nedir?" },
        { word: "Protocol", meaning: "Protokol", pronunciation: "ˈprō-tə-ˌkȯl", example: "Follow the protocol.", exampleTranslation: "Protokole uyun." }
    ]
};

const unit215Vocab: UnitVocabulary = {
    unitId: 215,
    title: "Nuanced Descriptors",
    words: [
        { word: "Vivid", meaning: "Canlı, parlak", pronunciation: "ˈvi-vəd", example: "A vivid memory.", exampleTranslation: "Canlı bir anı." },
        { word: "Evocative", meaning: "Anışlar uyandıran, dokunaklı", pronunciation: "i-ˈvä-kə-tiv", example: "An evocative smell.", exampleTranslation: "Anıları canlandıran bir koku." },
        { word: "Nuanced", meaning: "İncelikli, nüanslı", pronunciation: "ˈnyü-änst", example: "A nuanced argument.", exampleTranslation: "İncelikli bir argüman." },
        { word: "Compelling", meaning: "İkna edici, sürükleyici", pronunciation: "kəm-ˈpe-liŋ", example: "A compelling story.", exampleTranslation: "Sürükleyici bir hikaye." },
        { word: "Intricate", meaning: "Karmaşık, girift", pronunciation: "ˈin-tri-kət", example: "An intricate pattern.", exampleTranslation: "Karmaşık bir desen." },
        { word: "Subtle", meaning: "Hafif, hemen göze çarpmayan", pronunciation: "ˈsə-təl", example: "A subtle difference.", exampleTranslation: "Hafif bir fark." },
        { word: "Profound", meaning: "Derin, köklü", pronunciation: "prə-ˈfau̇nd", example: "A profound impact.", exampleTranslation: "Derin bir etki." },
        { word: "Comprehensive", meaning: "Kapsamlı", pronunciation: "ˌkäm-pri-ˈhen-siv", example: "A comprehensive list.", exampleTranslation: "Kapsamlı bir liste." },
        { word: "Persuasive", meaning: "İkna edici", pronunciation: "pər-ˈswā-siv", example: "A persuasive speaker.", exampleTranslation: "İkna edici bir konuşmacı." },
        { word: "Eloquent", meaning: "Güzel konuşan, anlamlı", pronunciation: "ˈe-lə-kwənt", example: "An eloquent speech.", exampleTranslation: "Etkileyici bir konuşma." }
    ]
};

const unit216Vocab: UnitVocabulary = {
    unitId: 216,
    title: "Advanced Quantifiers & Amounts",
    words: [
        { word: "Abundant", meaning: "Bol, bereketli", pronunciation: "ə-ˈbən-dənt", example: "Abundant rainfall.", exampleTranslation: "Bol yağış." },
        { word: "Scarce", meaning: "Kıt, az", pronunciation: "ˈskers", example: "Food was scarce.", exampleTranslation: "Yemek kıttı." },
        { word: "Substantial", meaning: "Önemli, hatırı sayılır", pronunciation: "səb-ˈstan-shəl", example: "A substantial amount of money.", exampleTranslation: "Hatırı sayılır miktarda para." },
        { word: "Mere", meaning: "Sadece, yalnızca", pronunciation: "ˈmir", example: "A mere 5 dollars.", exampleTranslation: "Sadece 5 dolar." },
        { word: "Heaps", meaning: "Yığınla, çok fazla", pronunciation: "hēps", example: "We have heaps of time.", exampleTranslation: "Yığınla vaktimiz var." },
        { word: "Vast", meaning: "Muazzam, engin", pronunciation: "ˈvast", example: "The vast majority.", exampleTranslation: "Büyük çoğunluk." },
        { word: "Trivial", meaning: "Önemsiz, ıvır zıvır", pronunciation: "ˈtri-vē-əl", example: "A trivial matter.", exampleTranslation: "Önemsiz bir mesele." },
        { word: "Infinite", meaning: "Sonsuz", pronunciation: "ˈin-fə-nət", example: "Infinite possibilities.", exampleTranslation: "Sonsuz ihtimaller." },
        { word: "Sufficient", meaning: "Yeterli", pronunciation: "sə-ˈfi-shənt", example: "Sufficient evidence.", exampleTranslation: "Yeterli kanıt." },
        { word: "Excessive", meaning: "Aşırı", pronunciation: "ik-ˈse-siv", example: "Excessive noise.", exampleTranslation: "Aşırı gürültü." }
    ]
};

const unit217Vocab: UnitVocabulary = {
    unitId: 217,
    title: "Vigor & Emphasis Vocab",
    words: [
        { word: "Vigorously", meaning: "Enerjik bir şekilde, güçlüce", pronunciation: "ˈvi-gə-rəs-lē", example: "He shook his head vigorously.", exampleTranslation: "Başını güçlüce salladı." },
        { word: "Utterly", meaning: "Tamamen, büsbütün", pronunciation: "ˈə-tər-lē", example: "I was utterly confused.", exampleTranslation: "Tamamen kafam karışmıştı." },
        { word: "Solely", meaning: "Yalnızca, sadece", pronunciation: "ˈsō-lē", example: "I am solely responsible.", exampleTranslation: "Sadece ben sorumluyum." },
        { word: "Purely", meaning: "Tamamen, sırf", pronunciation: "ˈpyu̇r-lē", example: "It was purely accidental.", exampleTranslation: "Sırf tesadüftü." },
        { word: "Forcefully", meaning: "Güçlü bir şekilde, etkili", pronunciation: "ˈfōrs-fə-lē", example: "He spoke forcefully.", exampleTranslation: "Etkili bir şekilde konuştu." },
        { word: "Strongly", meaning: "Güçlü bir şekilde", pronunciation: "ˈstrȯŋ-lē", example: "I strongly disagree.", exampleTranslation: "Kesinlikle katılmıyorum." },
        { word: "Absolutely", meaning: "Kesinlikle", pronunciation: "ˌab-sə-ˈlüt-lē", example: "You are absolutely right.", exampleTranslation: "Kesinlikle haklısın." },
        { word: "Entirely", meaning: "Tamamen", pronunciation: "in-ˈtī-ər-lē", example: "A different story entirely.", exampleTranslation: "Tamamen farklı bir hikaye." },
        { word: "Highly", meaning: "Oldukça, çok", pronunciation: "ˈhī-lē", example: "A highly complex task.", exampleTranslation: "Oldukça karmaşık bir görev." },
        { word: "Extremely", meaning: "Aşırı derecede", pronunciation: "ik-ˈstrēm-lē", example: "Extremely hot weather.", exampleTranslation: "Aşırı sıcak hava." }
    ]
};

const unit218Vocab: UnitVocabulary = {
    unitId: 218,
    title: "Formal Prepositional Vocabulary",
    words: [
        { word: "Pursuant", meaning: "Uyarınca, gereğince", pronunciation: "pər-ˈsü-ənt", example: "Pursuant to the rules.", exampleTranslation: "Kurallar uyarınca." },
        { word: "Irrespective", meaning: "Bakılmaksızın", pronunciation: "ˌir-i-ˈspek-tiv", example: "Irrespective of the cost.", exampleTranslation: "Maliyetine bakılmaksızın." },
        { word: "Notwithstanding", meaning: "-e rağmen", pronunciation: "ˌnät-with-ˈstan-diŋ", example: "Notwithstanding the weather, we went.", exampleTranslation: "Havaya rağmen gittik." },
        { word: "Regarding", meaning: "İle ilgili, hususunda", pronunciation: "ri-ˈgär-diŋ", example: "Regarding your request.", exampleTranslation: "Talebinizle ilgili." },
        { word: "Concerning", meaning: "İle ilgili", pronunciation: "kən-ˈsər-niŋ", example: "Issues concerning safety.", exampleTranslation: "Güvenlikle ilgili konular." },
        { word: "Involved", meaning: "İlişkili, dahil", pronunciation: "in-ˈvälvd", example: "The parties involved.", exampleTranslation: "Dahil olan taraflar." },
        { word: "Corresponding", meaning: "Karşılık gelen", pronunciation: "ˌkȯr-ə-ˈspän-diŋ", example: "Relevant data and corresponding charts.", exampleTranslation: "İlgili veriler ve karşılık gelen grafikler." },
        { word: "Subsequent", meaning: "Sonraki", pronunciation: "ˈsəb-si-kwənt", example: "Subsequent events proved him right.", exampleTranslation: "Sonraki olaylar onu haklı çıkardı." },
        { word: "Prior", meaning: "Önceki", pronunciation: "ˈprī-ər", example: "Prior to the meeting.", exampleTranslation: "Toplantıdan önce." },
        { word: "Following", meaning: "Ardından, sonra", pronunciation: "ˈfä-lə-wiŋ", example: "Following the announcement.", exampleTranslation: "Duyurunun ardından." }
    ]
};

const unit219Vocab: UnitVocabulary = {
    unitId: 219,
    title: "Synthesis & Advanced Skills",
    words: [
        { word: "Versatile", meaning: "Çok yönlü", pronunciation: "ˈvər-sə-təl", example: "A versatile performer.", exampleTranslation: "Çok yönlü bir oyuncu." },
        { word: "Dynamic", meaning: "Dinamik, hareketli", pronunciation: "dī-ˈna-mik", example: "A dynamic environment.", exampleTranslation: "Dinamik bir ortam." },
        { word: "Adaptable", pronunciation: "ə-ˈdap-tə-bəl", meaning: "Uyarlanabilir", example: "Be adaptable to change.", exampleTranslation: "Değişime uyum sağlayabilen olun." },
        { word: "Proficient", meaning: "Yetenekli, uzman", pronunciation: "prə-ˈfi-shənt", example: "Proficient in English.", exampleTranslation: "İngilizcede yetkin." },
        { word: "Sophisticated", meaning: "Gelişmiş, karmaşık", pronunciation: "sə-ˈfi-stə-ˌkā-təd", example: "A sophisticated system.", exampleTranslation: "Gelişmiş bir sistem." },
        { word: "Expert", meaning: "Uzman", pronunciation: "ˈek-ˌspərt", example: "An expert witness.", exampleTranslation: "Uzman bir tanık." },
        { word: "Competent", meaning: "Yetkin", pronunciation: "ˈkäm-pə-tənt", example: "A competent worker.", exampleTranslation: "Yetkin bir çalışan." },
        { word: "Qualified", meaning: "Nitelikli", pronunciation: "ˈkwä-lə-ˌfīd", example: "Fully qualified doctors.", exampleTranslation: "Tam nitelikli doktorlar." },
        { word: "Accomplished", meaning: "Başarılı, yetenekli", pronunciation: "ə-ˈkäm-plisht", example: "An accomplished pianist.", exampleTranslation: "Yetenekli bir piyanist." },
        { word: "Skilled", meaning: "Becerikli", pronunciation: "skild", example: "Skilled labor.", exampleTranslation: "Vasıflı (becerikli) işgücü." }
    ]
};

const unit220Vocab: UnitVocabulary = {
    unitId: 220,
    title: "B2 Graduation Mastery",
    words: [
        { word: "Excellence", meaning: "Mükemmellik", pronunciation: "ˈek-sə-ləns", example: "A center of excellence.", exampleTranslation: "Bir mükemmellik merkezi." },
        { word: "Proficiency", meaning: "Yetkinlik, ustalık", pronunciation: "prə-ˈfi-shən-sē", example: "English language proficiency.", exampleTranslation: "İngilizce dil yetkinliği." },
        { word: "Fluency", meaning: "Akıcılık", pronunciation: "ˈflü-ən-sē", example: "Achieve native-like fluency.", exampleTranslation: "Ana dil gibi akıcılığa ulaşın." },
        { word: "Competence", meaning: "Yeterlilik", pronunciation: "ˈkäm-pə-təns", example: "Linguistic competence.", exampleTranslation: "Dilbilimsel yeterlilik." },
        { word: "Achievement", meaning: "Başarı", pronunciation: "ə-ˈchēv-mənt", example: "A great achievement.", exampleTranslation: "Büyük bir başarı." },
        { word: "Success", meaning: "Başarı", pronunciation: "sək-ˈses", example: "The key to success.", exampleTranslation: "Başarının anahtarı." },
        { word: "Milestone", meaning: "Dönüm noktası", pronunciation: "ˈmīl-ˌstōn", example: "A major milestone.", exampleTranslation: "Önemli bir dönüm noktası." },
        { word: "Progress", meaning: "İlerleme", pronunciation: "ˈprä-grəs", example: "Make steady progress.", exampleTranslation: "İstikrarlı ilerleme kaydedin." },
        { word: "Mastery", meaning: "Ustalık", pronunciation: "ˈma-st(ə-)rē", example: "Subject mastery.", exampleTranslation: "Konu uzmanlığı." },
        { word: "Commencement", meaning: "Başlangıç / Mezuniyet", pronunciation: "kə-ˈmen-smənt", example: "The commencement of a new journey.", exampleTranslation: "Yeni bir yolculuğun başlangıcı." }
    ]
};

export function getEnglishB2VocabularyForUnit(unitId: number): UnitVocabulary {
    const b2Vocab: { [key: number]: UnitVocabulary } = {
        191: unit191Vocab,
        192: unit192Vocab,
        193: unit193Vocab,
        194: unit194Vocab,
        195: unit195Vocab,
        196: unit196Vocab,
        197: unit197Vocab,
        198: unit198Vocab,
        199: unit199Vocab,
        200: unit200Vocab,
        201: unit201Vocab,
        202: unit202Vocab,
        203: unit203Vocab,
        204: unit204Vocab,
        205: unit205Vocab,
        206: unit206Vocab,
        207: unit207Vocab,
        208: unit208Vocab,
        209: unit209Vocab,
        210: unit210Vocab,
        211: unit211Vocab,
        212: unit212Vocab,
        213: unit213Vocab,
        214: unit214Vocab,
        215: unit215Vocab,
        216: unit216Vocab,
        217: unit217Vocab,
        218: unit218Vocab,
        219: unit219Vocab,
        220: unit220Vocab
    };
    return b2Vocab[unitId] || unit191Vocab;
}
