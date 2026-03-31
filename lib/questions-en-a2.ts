/**
 * SteadyShell Questions - English A2 (Units 131-160)
 * 80 Questions per unit (4 Quizzes x 20)
 */

export interface EnglishQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    type: "grammar" | "vocabulary";
}

// Unit 131: Past Simple Regular - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic -ed forms & Identifiers)
const u131q1: EnglishQuestion[] = [
    { question: "I ___ (watch) a movie yesterday.", options: ["watch", "watched", "watching", "watches"], correctAnswer: 1, explanation: "Geçmiş zaman (Past Simple) cümlelerinde düzenli fiillerin sonuna '-ed' eki getirilir. watch → watched.", type: "grammar" },
    { question: "She ___ (clean) her room two hours ago.", options: ["clean", "cleans", "cleaned", "cleaning"], correctAnswer: 2, explanation: "Eylem geçmişte (two hours ago) tamamlandığı için fiil '-ed' takısı alır.", type: "grammar" },
    { question: "We ___ (play) tennis last weekend.", options: ["play", "played", "playing", "plays"], correctAnswer: 1, explanation: "Last weekend (geçen hafta sonu) geçmiş zamanın bir işaretçisidir. play → played.", type: "grammar" },
    { question: "They ___ (visit) their grandparents.", options: ["visit", "visits", "visited", "visiting"], correctAnswer: 2, explanation: "Visit fiili düzenlidir, sonuna -ed alarak visited olur.", type: "grammar" },
    { question: "It ___ (rain) all night.", options: ["rain", "rained", "rains", "raining"], correctAnswer: 1, explanation: "Yağmurun bütün gece yağdığını (geçmişte) belirtmek için rained kullanılır.", type: "grammar" },
    { question: "He ___ (finish) his work at 5 PM.", options: ["finish", "finishes", "finished", "finishing"], correctAnswer: 2, explanation: "Finish → Finished. Düzenli bir fiildir.", type: "grammar" },
    { question: "I ___ (listen) to music last night.", options: ["listen", "listens", "listened", "listening"], correctAnswer: 2, explanation: "Dün gece (last night) yapılan bir iş: listened.", type: "grammar" },
    { question: "The train ___ (arrive) on time.", options: ["arrive", "arrives", "arrived", "arriving"], correctAnswer: 2, explanation: "Arrive fiili 'e' ile bittiği için sadece -d eklenir: arrived.", type: "grammar" },
    { question: "She ___ (cook) a delicious dinner.", options: ["cook", "cooks", "cooked", "cooking"], correctAnswer: 2, explanation: "Cook → Cooked. 'Pişirdi' anlamında geçmiş zaman.", type: "grammar" },
    { question: "They ___ (walk) to the park.", options: ["walk", "walks", "walked", "walking"], correctAnswer: 2, explanation: "Walk fiili düzenlidir: walked.", type: "grammar" },
    { question: "'Yesterday' ne demek?", options: ["Dün", "Bugün", "Yarın", "Şimdi"], correctAnswer: 0, explanation: "Yesterday kelimesi 'Dün' anlamına gelir.", type: "vocabulary" },
    { question: "'Last year' ne demek?", options: ["Geçen yıl", "Bu yıl", "Gelecek yıl", "Her yıl"], correctAnswer: 0, explanation: "Last = Geçen, Year = Yıl.", type: "vocabulary" },
    { question: "He ___ (open) the window.", options: ["open", "opens", "opened", "opening"], correctAnswer: 2, explanation: "Open → Opened.", type: "grammar" },
    { question: "We ___ (dance) at the party.", options: ["dance", "danced", "dancing", "dances"], correctAnswer: 1, explanation: "Dance fiili 'e' ile bittiği için sadece -d alır: danced.", type: "grammar" },
    { question: "The teacher ___ (help) the students.", options: ["help", "helps", "helped", "helping"], correctAnswer: 2, explanation: "Help → Helped.", type: "grammar" },
    { question: "I ___ (look) at the map.", options: ["look", "looks", "looked", "looking"], correctAnswer: 2, explanation: "Look → Looked.", type: "grammar" },
    { question: "She ___ (brush) her teeth.", options: ["brush", "brushes", "brushed", "brushing"], correctAnswer: 2, explanation: "Brush → Brushed.", type: "grammar" },
    { question: "They ___ (start) the game.", options: ["start", "starts", "started", "starting"], correctAnswer: 2, explanation: "Start → Started.", type: "grammar" },
    { question: "We ___ (wait) for the bus.", options: ["wait", "waits", "waited", "waiting"], correctAnswer: 2, explanation: "Wait → Waited.", type: "grammar" },
    { question: "The kids ___ (jump) in the garden.", options: ["jump", "jumps", "jumped", "jumping"], correctAnswer: 2, explanation: "Jump → Jumped.", type: "grammar" }
];

// Quiz 2: MEDIUM - Uygulama (Negatives & Questions & Orthography)
const u131q2: EnglishQuestion[] = [
    { question: "I ___ (not watch) TV yesterday.", options: ["didn't watch", "don't watch", "not watched", "didn't watched"], correctAnswer: 0, explanation: "Olumsuz geçmiş zaman cümlelerinde 'didn't' yardımcı fiili kullanılır ve ana fiil yalın (V1) kalır.", type: "grammar" },
    { question: "She ___ (not clean) her room.", options: ["didn't clean", "not cleaned", "didn't cleaned", "doesn't clean"], correctAnswer: 0, explanation: "Didn't + Fiilin 1. hali kuralını unutma!", type: "grammar" },
    { question: "___ you play football last Sunday?", options: ["Do", "Did", "Are", "Were"], correctAnswer: 1, explanation: "Geçmiş zamanlı bir soru 'Did' yardımcı fiili ile başlar.", type: "grammar" },
    { question: "___ they arrive on time?", options: ["Do", "Are", "Did", "Have"], correctAnswer: 2, explanation: "Soru sorarken 'Did' başa gelir.", type: "grammar" },
    { question: "He ___ (try) to call you.", options: ["tryed", "tried", "tries", "trying"], correctAnswer: 1, explanation: "Sonu 'sessiz harf + y' ile biten fiillerde 'y' düşer ve '-ied' eklenir. try → tried.", type: "grammar" },
    { question: "She ___ (study) hard for the exam.", options: ["studyed", "studies", "studying", "studied"], correctAnswer: 3, explanation: "Study → Studied. (y düşer, ied gelir)", type: "grammar" },
    { question: "We ___ (stop) at the red light.", options: ["stoped", "stopped", "stops", "stopping"], correctAnswer: 1, explanation: "Sessiz-Sesli-Sessiz düzeni olan tek heceli fiillerde sondaki sessiz harf çift yazılır: stopped.", type: "grammar" },
    { question: "They ___ (clap) after the song.", options: ["claped", "clapped", "claps", "clapping"], correctAnswer: 1, explanation: "Clap → Clapped. (Sondaki sessiz harf çift yazılır)", type: "grammar" },
    { question: "Did she ___ (finish) the book?", options: ["finish", "finished", "finishes", "finishing"], correctAnswer: 0, explanation: "Soru cümlesinde 'Did' yardımcı fiili zaten geçmiş zamanı bildirdiği için ana fiil yalın (V1) kullanılır.", type: "grammar" },
    { question: "I didn't ___ (like) the coffee.", options: ["like", "liked", "likes", "liking"], correctAnswer: 0, explanation: "Olumsuzda didn't kullandığımız için fiilin 2. hali (liked) yerine 1. hali (like) gelir.", type: "grammar" },
    { question: "___ he work yesterday?", options: ["Was", "Is", "Did", "Do"], correctAnswer: 2, explanation: "Did + He + Work? (Dün çalıştı mı?)", type: "grammar" },
    { question: "She ___ (plan) a surprise party.", options: ["planed", "planned", "plans", "planning"], correctAnswer: 1, explanation: "Plan → Planned. (n harfi çift yazılır)", type: "grammar" },
    { question: "We ___ (carry) the boxes.", options: ["carryed", "carried", "carries", "carrying"], correctAnswer: 1, explanation: "Carry → Carried. (y düşer, ied gelir)", type: "grammar" },
    { question: "They didn't ___ (stay) long.", options: ["stay", "stayed", "stays", "staying"], correctAnswer: 0, explanation: "Stay fiili 'sesli + y' ile bittiği için sadece -ed alır ama olumsuzda didn't olduğu için stay kalır.", type: "grammar" },
    { question: "Did it ___ (happen) again?", options: ["happen", "happened", "happens", "happening"], correctAnswer: 0, explanation: "Happened değil, soru olduğu için 'happen'.", type: "grammar" },
    { question: "I ___ (empty) the bin.", options: ["emptyed", "emptied", "empties", "emptying"], correctAnswer: 1, explanation: "Empty → Emptied. (y düşer, ied gelir)", type: "grammar" },
    { question: "The baby ___ (cry) all night.", options: ["cryed", "cried", "cries", "crying"], correctAnswer: 1, explanation: "Cry → Cried. (y düşer, ied gelir)", type: "grammar" },
    { question: "Did you ___ (answer) the phone?", options: ["answer", "answered", "answers", "answering"], correctAnswer: 0, explanation: "Answer (V1) kullanılır.", type: "grammar" },
    { question: "She didn't ___ (decide) yet.", options: ["decide", "decided", "decides", "deciding"], correctAnswer: 0, explanation: "Decide (V1) kullanılır.", type: "grammar" },
    { question: "We ___ (jog) in the park.", options: ["joged", "jogged", "jogs", "jogging"], correctAnswer: 1, explanation: "Jog → Jogged. (g harfi çift yazılır)", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Complex sentences & Specific rules)
const u131q3: EnglishQuestion[] = [
    { question: "When I arrived, they ___ (start) without me.", options: ["start", "started", "starting", "starts"], correctAnswer: 1, explanation: "İki geçmiş zaman eylemi: Arrived ve Started. Düzenli fiil çekimi gereklidir.", type: "grammar" },
    { question: "The teacher ___ (explain) the rules clearly.", options: ["explain", "explains", "explained", "explaining"], correctAnswer: 2, explanation: "Explain fiili düzenlidir: explained.", type: "grammar" },
    { question: "___ she ___ (listen) to you?", options: ["Did / listen", "Does / listen", "Did / listened", "Was / listened"], correctAnswer: 0, explanation: "Did + Özne + V1 yapısı her zaman korunmalıdır.", type: "grammar" },
    { question: "I ___ (admit) that I was wrong.", options: ["admited", "admitted", "admits", "admitting"], correctAnswer: 1, explanation: "Admit (itiraf etmek) fiilinde sondaki 't' harfi çift yazılır: admitted.", type: "grammar" },
    { question: "They ___ (travel) around Europe last year.", options: ["travel", "traveled", "travelled", "Other"], correctAnswer: 3, explanation: "Amerikan İngilizcesinde 'traveled', İngiliz İngilizcesinde 'travelled' doğrudur.", type: "grammar" },
    { question: "She ___ (prefer) tea over coffee.", options: ["prefered", "preferred", "prefers", "prefering"], correctAnswer: 1, explanation: "Prefer fiilinde sondaki 'r' harfi çift yazılır: preferred.", type: "grammar" },
    { question: "Why didn't you ___ (check) the email?", options: ["check", "checked", "checking", "checks"], correctAnswer: 0, explanation: "Neden (Why) sorusu da olsa didn't varsa fiil 1. haldedir.", type: "grammar" },
    { question: "He ___ (fix) his bike yesterday.", options: ["fix", "fixed", "fixxed", "fixing"], correctAnswer: 1, explanation: "Fix fiilinde 'x' harfi çift yazılmaz: fixed.", type: "grammar" },
    { question: "The cat ___ (chase) the mouse.", options: ["chase", "chases", "chased", "chasing"], correctAnswer: 2, explanation: "Chase (kovalamak) e ile bittiği için sadece -d alır.", type: "grammar" },
    { question: "Which one is CORRECT?", options: ["I didn't stayed", "I didn't stay", "Did you stayed?", "I not stayed"], correctAnswer: 1, explanation: "Sadece 'I didn't stay' gramer olarak doğrudur.", type: "grammar" },
    { question: "We ___ (invite) them but they ___ (not come).", options: ["invite / not come", "invited / didn't come", "invited / not came", "inviting / didn't came"], correctAnswer: 1, explanation: "Invited (düzenli) ve didn't come (olumsuz düzensiz).", type: "grammar" },
    { question: "The company ___ (offer) him a job.", options: ["offer", "offered", "offers", "offering"], correctAnswer: 1, explanation: "Offer → Offered.", type: "grammar" },
    { question: "Did you ___ (notice) anything strange?", options: ["notice", "noticed", "notices", "noticing"], correctAnswer: 0, explanation: "Soru cümlesinde fiilin 1. hali: notice.", type: "grammar" },
    { question: "She ___ (tidy) her room yesterday.", options: ["tidied", "tidyed", "tidies", "tidying"], correctAnswer: 0, explanation: "Tidy (toparlamak), sessiz + y ile bittiği için y düşer, ied gelir: tidied.", type: "grammar" },
    { question: "The light ___ (flash) three times.", options: ["flash", "flashed", "flashs", "flashes"], correctAnswer: 1, explanation: "Flash → Flashed.", type: "grammar" },
    { question: "He ___ (refuse) to answer.", options: ["refuse", "refuses", "refused", "refusing"], correctAnswer: 2, explanation: "Refuse (reddetmek) → Refused.", type: "grammar" },
    { question: "They ___ (match) the colors perfectly.", options: ["match", "matched", "matching", "matches"], correctAnswer: 1, explanation: "Match → Matched.", type: "grammar" },
    { question: "We ___ (miss) the train.", options: ["miss", "missed", "missing", "misses"], correctAnswer: 1, explanation: "Miss (kaçırmak) → Missed.", type: "grammar" },
    { question: "Did she ___ (promise) to help?", options: ["promise", "promised", "promises", "promising"], correctAnswer: 0, explanation: "Promise (V1).", type: "grammar" },
    { question: "It ___ (snow) heavily last winter.", options: ["snow", "snowed", "snows", "snowing"], correctAnswer: 1, explanation: "Snow → Snowed.", type: "grammar" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Real-life & Error focus)
const u131q4: EnglishQuestion[] = [
    { question: "A: Did you clean the car? B: Yes, I ___ it an hour ago.", options: ["cleaned", "clean", "did clean", "cleaning"], correctAnswer: 0, explanation: "Diyalogda olumlu yanıt verirken fiilin 2. hali kullanılır.", type: "grammar" },
    { question: "A: ___? B: No, I didn't. I stayed home.", options: ["Did you go out?", "Do you go out?", "Were you go out?", "Are you go out?"], correctAnswer: 0, explanation: "Doğru soru yapısı: Did + Özne + V1.", type: "grammar" },
    { question: "I ___ (watch) the TV, then I ___ (prepare) dinner.", options: ["watched / prepared", "watch / prepare", "watched / prepare", "watching / preparing"], correctAnswer: 0, explanation: "Arka arkaya yapılan iki geçmiş zaman eylemi.", type: "grammar" },
    { question: "Identify the ERROR: 'She didn't liked the gift.'", options: ["She", "didn't", "liked", "the gift"], correctAnswer: 2, explanation: "Didn't kelimesinden sonra fiil 'liked' değil 'like' (V1) olmalıdır.", type: "grammar" },
    { question: "Which spelling is correct?", options: ["Carryied", "Carried", "Caryed", "Carryed"], correctAnswer: 1, explanation: "Carried (y harfi 'i'ye dönüşür).", type: "vocabulary" },
    { question: "A: Did it rain? B: ___, but it was windy.", options: ["No, it didn't", "No, it wasn't", "Yes, it did", "Yes, it was"], correctAnswer: 0, explanation: "Did ile sorulan soruya olumsuz kısa cevap: 'No, it didn't'.", type: "grammar" },
    { question: "We ___ (stay) at a very nice hotel.", options: ["stay", "stayed", "staied", "stays"], correctAnswer: 1, explanation: "Stay fiili 'sesli + y' ile bittiği için y düşmez, sadece -ed alır: stayed.", type: "grammar" },
    { question: "Why ___ they ___ (cancel) the meeting?", options: ["did / cancel", "did / cancelled", "do / cancel", "were / cancel"], correctAnswer: 0, explanation: "Did + Özne + V1.", type: "grammar" },
    { question: "Everything ___ (change) after that day.", options: ["change", "changed", "changes", "changing"], correctAnswer: 1, explanation: "Change → Changed.", type: "grammar" },
    { question: "She ___ (dance) beautifully in the show.", options: ["dance", "danced", "dances", "dancing"], correctAnswer: 1, explanation: "Danced (sergiledi).", type: "grammar" },
    { question: "I ___ (not believe) my eyes!", options: ["didn't believe", "not believed", "not believe", "didn't believed"], correctAnswer: 0, explanation: "Didn't believe (V1).", type: "grammar" },
    { question: "He ___ (try) his best, but he failed.", options: ["tried", "tryed", "tries", "trying"], correctAnswer: 0, explanation: "Tried (y düşer, ied gelir).", type: "grammar" },
    { question: "The principal ___ (notice) the mistake.", options: ["notice", "noticed", "notices", "noticing"], correctAnswer: 1, explanation: "Noticed.", type: "grammar" },
    { question: "Did you ___ (manage) to fix it?", options: ["manage", "managed", "manages", "managing"], correctAnswer: 0, explanation: "Manage (V1).", type: "grammar" },
    { question: "We ___ (serve) 100 people today.", options: ["serve", "served", "serving", "serves"], correctAnswer: 1, explanation: "Served.", type: "grammar" },
    { question: "They ___ (receive) your message.", options: ["receive", "received", "receiving", "receives"], correctAnswer: 1, explanation: "Received.", type: "grammar" },
    { question: "I ___ (not touch) anything, I promise!", options: ["didn't touch", "didn't touched", "not touched", "don't touch"], correctAnswer: 0, explanation: "Didn't touch.", type: "grammar" },
    { question: "She ___ (explain) why she was late.", options: ["explain", "explained", "explains", "explaining"], correctAnswer: 1, explanation: "Explained.", type: "grammar" },
    { question: "Which sentence is CORRECT?", options: ["I watched TV yesterday.", "I watch TV yesterday.", "I watching TV yesterday.", "I was watch TV yesterday."], correctAnswer: 0, explanation: "Past Simple yapısına en uygun olan budur.", type: "grammar" },
    { question: "They ___ (knock) on the door.", options: ["knock", "knocked", "knocking", "knocks"], correctAnswer: 1, explanation: "Knock → Knocked.", type: "grammar" }
];

// Unit 132: Past Simple Irregular - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Common Irregular Verbs - Basic meaning & V2)
const u132q1: EnglishQuestion[] = [
    { question: "I ___ (go) to the park yesterday.", options: ["go", "goes", "went", "goed"], correctAnswer: 2, explanation: "'Go' fiili düzensizdir. Geçmiş zaman hali 'went' olur. Kesinlikle 'goed' denilmez!", type: "grammar" },
    { question: "She ___ (see) a famous actor.", options: ["see", "saw", "sees", "seen"], correctAnswer: 1, explanation: "See (görmek) → Saw. 'Gördü' anlamında düzensiz çekim kullanılır.", type: "grammar" },
    { question: "We ___ (eat) pizza for dinner.", options: ["eat", "ate", "eated", "eats"], correctAnswer: 1, explanation: "Eat → Ate. Düzensiz bir fiildir, -ed takısı almaz.", type: "grammar" },
    { question: "They ___ (drink) all the juice.", options: ["drink", "drank", "drunk", "drinks"], correctAnswer: 1, explanation: "Drink → Drank. 'İçti' anlamında geçmiş zaman halidir.", type: "grammar" },
    { question: "He ___ (buy) a new car last month.", options: ["buy", "buyed", "bought", "buying"], correctAnswer: 2, explanation: "Buy → Bought. Düzensiz olduğu için tamamen değişir.", type: "grammar" },
    { question: "I ___ (find) my keys in the bag.", options: ["find", "finded", "found", "finds"], correctAnswer: 2, explanation: "Find (bulmak) → Found. 'Buldum' anlamında kullanılır.", type: "grammar" },
    { question: "She ___ (make) a delicious cake.", options: ["make", "maked", "made", "makes"], correctAnswer: 2, explanation: "Make → Made. 'Yaptı' anlamında düzensiz çekim.", type: "grammar" },
    { question: "We ___ (take) some photos.", options: ["take", "taked", "took", "takes"], correctAnswer: 2, explanation: "Take (almak/çekmek) → Took. 'Çektik' anlamında kullanılır.", type: "grammar" },
    { question: "They ___ (read) the book last week.", options: ["read", "readed", "reads", "readed"], correctAnswer: 0, explanation: "Read (okumak) fiilinin yazılışı aynı kalsa da okunuşu 'red' (kırmızı gibi) olur.", type: "grammar" },
    { question: "He ___ (give) me a present.", options: ["give", "gives", "gave", "given"], correctAnswer: 2, explanation: "Give → Gave. 'Verdi' anlamında düzensizdir.", type: "grammar" },
    { question: "I ___ (know) the answer.", options: ["know", "knew", "known", "knows"], correctAnswer: 1, explanation: "Know (bilmek) → Knew. 'Biliyordum/Bildim' anlamında kullanılır.", type: "grammar" },
    { question: "She ___ (keep) the secret.", options: ["keep", "keeped", "kept", "keeps"], correctAnswer: 2, explanation: "Keep → Kept. 'Tuttu/Sakladı' anlamında düzensizdir.", type: "grammar" },
    { question: "We ___ (sleep) late on Saturday.", options: ["sleep", "sleeped", "slept", "sleeps"], correctAnswer: 2, explanation: "Sleep → Slept. 'Uyuduk' anlamında kullanılır.", type: "grammar" },
    { question: "Small animals ___ (hide) there.", options: ["hide", "hided", "hid", "hides"], correctAnswer: 2, explanation: "Hide (gizlenmek) → Hid. Düzensizdir.", type: "grammar" },
    { question: "I ___ (lose) my umbrella.", options: ["lose", "losed", "lost", "loses"], correctAnswer: 2, explanation: "Lose → Lost. 'Kaybettim' anlamında kullanılır.", type: "grammar" },
    { question: "The teacher ___ (speak) to us.", options: ["speak", "speaks", "spoke", "spoken"], correctAnswer: 2, explanation: "Speak → Spoke. 'Konuştu' anlamında düzensizdir.", type: "grammar" },
    { question: "He ___ (tell) me a story.", options: ["tell", "tells", "told", "telling"], correctAnswer: 2, explanation: "Tell (anlatmak) → Told. 'Anlattı' anlamında kullanılır.", type: "grammar" },
    { question: "They ___ (write) a letter.", options: ["write", "writes", "wrote", "written"], correctAnswer: 2, explanation: "Write → Wrote. 'Yazdı' anlamında düzensiz çekim.", type: "grammar" },
    { question: "'Bought' hangi fiilin geçmiş halidir?", options: ["Buy", "Bring", "Build", "Break"], correctAnswer: 0, explanation: "Bought, 'Buy' (satın almak) fiilinin düzensiz geçmiş halidir.", type: "vocabulary" },
    { question: "'Saw' ne demek?", options: ["Gördü", "Gitti", "Geldi", "Baktı"], correctAnswer: 0, explanation: "Saw, 'See' (görmek) fiilinin geçmiş hali olan 'Gördü' demektir.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Negatives, Questions & Specific verbs)
const u132q2: EnglishQuestion[] = [
    { question: "I didn't ___ (go) anywhere last night.", options: ["go", "went", "gone", "goed"], correctAnswer: 0, explanation: "Olumsuz cümlelerde 'didn't' kullanıldığında fiil her zaman 1. halinde (yalın) kalır.", type: "grammar" },
    { question: "Did you ___ (see) the news?", options: ["see", "saw", "seen", "sees"], correctAnswer: 0, explanation: "'Did' ile başlayan sorularda fiil düzensiz olsa bile yalın haliyle (V1) kullanılır.", type: "grammar" },
    { question: "She didn't ___ (eat) her lunch.", options: ["eat", "ate", "eaten", "eats"], correctAnswer: 0, explanation: "Didn't + V1 kuralı: 'Yemedi' derken 'didn't eat' kullanılır.", type: "grammar" },
    { question: "___ they ___ (buy) the tickets?", options: ["Did / buy", "Do / buy", "Did / bought", "Were / buy"], correctAnswer: 0, explanation: "Soru yapısı: Did + Özne + V1.", type: "grammar" },
    { question: "He ___ (cost) me a lot of money.", options: ["cost", "costed", "costs", "costing"], correctAnswer: 0, explanation: "Cost (maliyeti olmak) fiilinin 1, 2 ve 3. halleri aynıdır: cost.", type: "grammar" },
    { question: "I ___ (cut) the paper yesterday.", options: ["cut", "cutted", "cuts", "cutting"], correctAnswer: 0, explanation: "Cut (kesmek) fiilinin geçmiş hali de 'cut' şeklindedir.", type: "grammar" },
    { question: "The bird ___ (fly) away.", options: ["fly", "flied", "flew", "flying"], correctAnswer: 2, explanation: "Fly → Flew. 'Uçtu' anlamında düzensizdir.", type: "grammar" },
    { question: "She ___ (draw) a beautiful picture.", options: ["draw", "drawed", "drew", "drawing"], correctAnswer: 2, explanation: "Draw (çizmek) → Drew. Düzensiz çekim.", type: "grammar" },
    { question: "Did he ___ (know) about it?", options: ["know", "knew", "known", "knows"], correctAnswer: 0, explanation: "Soru olduğu için 'know' (V1).", type: "grammar" },
    { question: "I didn't ___ (lose) anything.", options: ["lose", "lost", "losed", "loses"], correctAnswer: 0, explanation: "Olumsuzda didn't + V1: 'didn't lose'.", type: "grammar" },
    { question: "We ___ (send) the email.", options: ["send", "sended", "sent", "sending"], correctAnswer: 2, explanation: "Send (göndermek) fiilinin geçmiş hali 'sent' (t harfi ile) olur.", type: "grammar" },
    { question: "They ___ (spend) all their money.", options: ["spend", "spended", "spent", "spending"], correctAnswer: 2, explanation: "Spend (harcamak) → Spent.", type: "grammar" },
    { question: "Where did you ___ (hide)?", options: ["hide", "hid", "hidden", "hiding"], correctAnswer: 0, explanation: "Soru cümlesinde yalın hal: hide.", type: "grammar" },
    { question: "She ___ (leave) early.", options: ["leave", "leaves", "left", "leaved"], correctAnswer: 2, explanation: "Leave (ayrılmak/çıkmak) → Left.", type: "grammar" },
    { question: "I ___ (bring) some food.", options: ["bring", "bringed", "brought", "bringing"], correctAnswer: 2, explanation: "Bring (getirmek) → Brought.", type: "grammar" },
    { question: "They ___ (sing) very well.", options: ["sing", "singed", "sang", "sung"], correctAnswer: 2, explanation: "Sing (şarkı söylemek) → Sang.", type: "grammar" },
    { question: "He ___ (swim) in the sea.", options: ["swim", "swimed", "swam", "swum"], correctAnswer: 2, explanation: "Swim (yüzmek) → Swam.", type: "grammar" },
    { question: "Did you ___ (sleep) well?", options: ["sleep", "slept", "sleeps", "sleeping"], correctAnswer: 0, explanation: "Soru olduğu için 'sleep' (V1).", type: "grammar" },
    { question: "I ___ (pay) the bill.", options: ["pay", "payed", "paid", "pays"], correctAnswer: 2, explanation: "Pay (ödemek) fiili düzensizdir ve 'paid' olur.", type: "grammar" },
    { question: "They ___ (win) the match.", options: ["win", "wins", "won", "winning"], correctAnswer: 2, explanation: "Win (kazanmak) → Won.", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Complex sentences & Rare irregulars)
const u132q3: EnglishQuestion[] = [
    { question: "I ___ (hear) a loud noise.", options: ["hear", "heared", "heard", "hearing"], correctAnswer: 2, explanation: "Hear (duymak) → Heard (okunuşu: hörd). Düzensizdir.", type: "grammar" },
    { question: "She ___ (teach) English for years.", options: ["teached", "taught", "teach", "teaching"], correctAnswer: 1, explanation: "Teach (öğretmek) → Taught (okunuşu: tot).", type: "grammar" },
    { question: "The bell ___ (ring) suddenly.", options: ["ring", "ringed", "rang", "rung"], correctAnswer: 2, explanation: "Ring (çalmak) → Rang.", type: "grammar" },
    { question: "He ___ (hit) the ball very hard.", options: ["hit", "hitted", "hits", "hitting"], correctAnswer: 0, explanation: "Hit fiili 1, 2 ve 3. halleri aynı olan gruptadır: hit.", type: "grammar" },
    { question: "We ___ (meet) them at the airport.", options: ["meet", "met", "meets", "meeting"], correctAnswer: 1, explanation: "Meet (buluşmak/tanışmak) → Met.", type: "grammar" },
    { question: "They ___ (choose) the best option.", options: ["choose", "choosed", "chose", "chosen"], correctAnswer: 2, explanation: "Choose (seçmek) → Chose (tek 'o' ile).", type: "grammar" },
    { question: "I ___ (forget) to bring my bag.", options: ["forget", "forgetted", "forgot", "forgotten"], correctAnswer: 2, explanation: "Forget (unutmak) → Forgot.", type: "grammar" },
    { question: "She ___ (begin) to cry.", options: ["begin", "begined", "began", "begun"], correctAnswer: 2, explanation: "Begin (başlamak) → Began.", type: "grammar" },
    { question: "The sun ___ (rise) early today.", options: ["rise", "rised", "rose", "risen"], correctAnswer: 2, explanation: "Rise (yükselmek/doğmak) → Rose.", type: "grammar" },
    { question: "We ___ (build) a sandcastle.", options: ["build", "builded", "built", "building"], correctAnswer: 2, explanation: "Build (inşa etmek) → Built (t harfi ile).", type: "grammar" },
    { question: "They ___ (catch) a big fish.", options: ["catch", "catched", "caught", "catching"], correctAnswer: 2, explanation: "Catch (yakalamak) → Caught (okunuşu: kot).", type: "grammar" },
    { question: "I ___ (understand) everything.", options: ["understand", "understood", "understands", "understanding"], correctAnswer: 1, explanation: "Understand → Understood.", type: "grammar" },
    { question: "She ___ (wear) a red dress.", options: ["wear", "weared", "wore", "worn"], correctAnswer: 2, explanation: "Wear (giymek) → Wore.", type: "grammar" },
    { question: "He ___ (break) the window.", options: ["break", "breaked", "broke", "broken"], correctAnswer: 2, explanation: "Break (kırmak) → Broke.", type: "grammar" },
    { question: "The price ___ (fall) sharply.", options: ["fall", "falled", "fell", "fallen"], correctAnswer: 2, explanation: "Fall (düşmek) → Fell.", type: "grammar" },
    { question: "Did you ___ (feel) the earthquake?", options: ["feel", "felt", "feeling", "feels"], correctAnswer: 0, explanation: "Soru cümlesi V1: feel.", type: "grammar" },
    { question: "We ___ (run) five kilometres.", options: ["run", "ran", "runs", "running"], correctAnswer: 1, explanation: "Run (koşmak) → Ran.", type: "grammar" },
    { question: "They ___ (throw) the ball.", options: ["throw", "thraw", "threw", "thrown"], correctAnswer: 2, explanation: "Throw (atmak) → Threw.", type: "grammar" },
    { question: "He ___ (steal) my bicycle.", options: ["steal", "stealed", "stole", "stolen"], correctAnswer: 2, explanation: "Steal (çalmak - hırsızlık) → Stole.", type: "grammar" },
    { question: "I ___ (ride) a horse yesterday.", options: ["ride", "rided", "rode", "ridden"], correctAnswer: 2, explanation: "Ride (binmek) → Rode.", type: "grammar" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Storytelling & Error detection)
const u132q4: EnglishQuestion[] = [
    { question: "A: Did you eat lunch? B: Yes, I ___ a sandwich.", options: ["eat", "ate", "eaten", "did ate"], correctAnswer: 1, explanation: "Cevap verirken fiilin 2. hali: 'ate'.", type: "grammar" },
    { question: "Identify the ERROR: 'He drinked water quickly.'", options: ["He", "drinked", "water", "quickly"], correctAnswer: 1, explanation: "Drink düzensizdir, 'drinked' diye bir kelime yoktur. Doğrusu 'drank' olmalıydı.", type: "grammar" },
    { question: "A: Where did they go? B: They ___ to the cinema.", options: ["go", "gone", "went", "did go"], correctAnswer: 2, explanation: "They went (Gittiler).", type: "grammar" },
    { question: "First I ___ (wake) up, then I ___ (have) coffee.", options: ["wake / have", "waked / haved", "woke / had", "woke / have"], correctAnswer: 2, explanation: "Her iki eylem de geçmişte: Woke ve Had.", type: "grammar" },
    { question: "Which one is INCORRECT?", options: ["I saw him.", "She made it.", "He buyed a car.", "We ate out."], correctAnswer: 2, explanation: "'He buyed' yanlıştır, 'He bought' olmalıdır.", type: "grammar" },
    { question: "She ___ (think) about the problem.", options: ["think", "thought", "thinked", "thinking"], correctAnswer: 1, explanation: "Think (düşünmek) → Thought (okunuşu: tot).", type: "grammar" },
    { question: "A: Did you find your keys? B: No, I ___.", options: ["didn't", "don't", "wasn't", "haven't"], correctAnswer: 0, explanation: "Did ile sorulan soruya kısa olumsuz cevap: No, I didn't.", type: "grammar" },
    { question: "He ___ (become) a doctor in 2010.", options: ["become", "becomes", "became", "becomed"], correctAnswer: 2, explanation: "Become → Became.", type: "grammar" },
    { question: "We ___ (drive) through the city.", options: ["drive", "drived", "drove", "driven"], correctAnswer: 2, explanation: "Drive → Drove.", type: "grammar" },
    { question: "They ___ (show) us the pictures.", options: ["show", "showed", "shown", "shone"], correctAnswer: 1, explanation: "Show fiili geçmiş zamanda 'showed' (düzenli gibi) olur (3. hali shown'dur).", type: "grammar" },
    { question: "I ___ (get) a strange gift.", options: ["get", "got", "gotten", "gets"], correctAnswer: 1, explanation: "Get (almak) → Got.", type: "grammar" },
    { question: "Which spelling is correct for 'geçmiş' of write?", options: ["Writed", "Wrotte", "Wrote", "Written"], correctAnswer: 2, explanation: "Wrote (tek t ile).", type: "vocabulary" },
    { question: "A: ___ you ___ (hear) that? B: No, what was it?", options: ["Did / hear", "Do / hear", "Did / heard", "Were / hear"], correctAnswer: 0, explanation: "Did + hear? (Duydun mu?)", type: "grammar" },
    { question: "She ___ (lay) the baby on the bed.", options: ["lie", "lied", "lay", "laid"], correctAnswer: 3, explanation: "Lay (yatırmak) fiilinin geçmişi 'laid' şeklindedir.", type: "grammar" },
    { question: "He ___ (stand) up and left.", options: ["stand", "standed", "stood", "standing"], correctAnswer: 2, explanation: "Stand (ayakta durmak) → Stood.", type: "grammar" },
    { question: "They ___ (shake) hands.", options: ["shake", "shaked", "shook", "shaken"], correctAnswer: 2, explanation: "Shake (sallamak/sıkışmak) → Shook.", type: "grammar" },
    { question: "I ___ (spend) the whole afternoon reading.", options: ["spend", "spended", "spent", "spending"], correctAnswer: 2, explanation: "Spent.", type: "grammar" },
    { question: "Did the water ___ (freeze)?", options: ["freeze", "froze", "frozen", "freezes"], correctAnswer: 0, explanation: "Soru olduğu için yalın hal: freeze.", type: "grammar" },
    { question: "Everything ___ (go) wrong.", options: ["go", "goes", "went", "gone"], correctAnswer: 2, explanation: "Went wrong (ters gitti).", type: "grammar" },
    { question: "She ___ (win) the first prize.", options: ["win", "wins", "won", "winning"], correctAnswer: 2, explanation: "Won.", type: "grammar" }
];

// Unit 133: Restaurant - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Vocabulary & 'I would like')
const u133q1: EnglishQuestion[] = [
    { question: "I'd like ___ the menu, please.", options: ["see", "to see", "seeing", "sees"], correctAnswer: 1, explanation: "Nazikçe bir şey istemek için 'I would like to + fiil' yapısı kullanılır.", type: "grammar" },
    { question: "'Bill' ne demek?", options: ["Hesap", "Menü", "Garson", "Bahşiş"], correctAnswer: 0, explanation: "Restaurant bağlamında 'Bill' hesap demektir. ABD'de bazen 'Check' de denir.", type: "vocabulary" },
    { question: "___ I have some water?", options: ["Do", "Are", "Could", "Am"], correctAnswer: 2, explanation: "Rica cümlelerinde 'Could I...?' (Yapsam olur mu / Alabilir miyim?) kalıbı kullanılır.", type: "grammar" },
    { question: "'Waiter' ne demek?", options: ["Müşteri", "Aşçı", "Garson", "Patron"], correctAnswer: 2, explanation: "Erkek garson için 'Waiter', kadın garson için 'Waitress' kullanılır.", type: "vocabulary" },
    { question: "A table ___ two, please.", options: ["at", "for", "to", "in"], correctAnswer: 1, explanation: "Kişi sayısı belirtirken 'for' kullanılır: 'for two' (iki kişilik).", type: "grammar" },
    { question: "'Appetizer' ne demek?", options: ["Ana yemek", "Tatlı", "Başlangıç/Meze", "İçecek"], correctAnswer: 2, explanation: "Ana yemekten önce gelen iştah açıcılara 'Appetizer' (veya starter) denir.", type: "vocabulary" },
    { question: "I ___ like a coffee.", options: ["am", "will", "would", "do"], correctAnswer: 2, explanation: "'I would like' (İstiyorum - nazikçe) kalıbı.", type: "grammar" },
    { question: "'Main course' ne demek?", options: ["Başlangıç", "Ana yemek", "Tatlı", "Salata"], correctAnswer: 1, explanation: "Yemeğin en önemli kısmı olan 'Ana yemek' bölümüdür.", type: "vocabulary" },
    { question: "Is the service charge ___?", options: ["include", "included", "including", "includes"], correctAnswer: 1, explanation: "Included = Dahil. 'Servis ücreti dahil mi?'", type: "grammar" },
    { question: "'Dessert' ne demek?", options: ["Tatlı", "Çöl", "Yemek", "Mutfak"], correctAnswer: 0, explanation: "İki 's' ile yazılan dessert tatlıdır. Tek 's' ile yazılan desert çöldür.", type: "vocabulary" },
    { question: "Can I ___ the chicken, please?", options: ["have", "has", "having", "had"], correctAnswer: 0, explanation: "Can I have...? (Alabilir miyim / Sipariş edebilir miyim?)", type: "grammar" },
    { question: "The food ___ delicious.", options: ["is", "are", "be", "being"], correctAnswer: 0, explanation: "Yemek (food) sayılamaz ve tekil fiil alır.", type: "grammar" },
    { question: "'Tip' ne demek?", options: ["Hesap", "Bahşiş", "Yemek", "Masa"], correctAnswer: 1, explanation: "Garsona bırakılan ekstra paraya 'Tip' denir.", type: "vocabulary" },
    { question: "Are you ready ___ order?", options: ["for", "to", "at", "in"], correctAnswer: 1, explanation: "Ready to + fiil. 'Sipariş vermeye hazır mısınız?'", type: "grammar" },
    { question: "I'd like my steak ___ done.", options: ["well", "good", "nice", "fine"], correctAnswer: 0, explanation: "Well-done = Çok pişmiş et.", type: "vocabulary" },
    { question: "Is there a ___ table?", options: ["free", "empty", "open", "clear"], correctAnswer: 0, explanation: "Free table = Boş/Müsait masa.", type: "vocabulary" },
    { question: "We'd like a window ___.", options: ["seat", "sit", "table", "chair"], correctAnswer: 2, explanation: "Window table = Pencere kenarı masa.", type: "vocabulary" },
    { question: "Could you ___ me the salt?", options: ["give", "pass", "send", "take"], correctAnswer: 1, explanation: "Masada bir şeyi uzatmasını isterken 'pass' (uzatmak) kullanılır.", type: "vocabulary" },
    { question: "Do you have any ___ dishes?", options: ["vegetable", "vegetarian", "vegetate", "veganed"], correctAnswer: 1, explanation: "Vegetarian dishes = Vejetaryen yemekler.", type: "vocabulary" },
    { question: "One check, ___.", options: ["please", "thanks", "sorry", "excuse"], correctAnswer: 0, explanation: "İsteğin sonuna nezaket için 'please' eklenir.", type: "grammar" }
];

// Quiz 2: MEDIUM - Uygulama (Ordering & Requests)
const u133q2: EnglishQuestion[] = [
    { question: "I'll ___ the grilled salmon.", options: ["take", "have", "do", "get"], correctAnswer: 1, explanation: "Sipariş verirken 'I will have...' (Alacağım) kalıbı çok yaygındır.", type: "grammar" },
    { question: "Could we have the bill, ___?", options: ["excuse me", "please", "thanks", "sorry"], correctAnswer: 1, explanation: "Hesap isterken sonuna 'please' eklenir.", type: "grammar" },
    { question: "Would you like ___ dessert?", options: ["any", "some", "a", "an"], correctAnswer: 1, explanation: "İkram veya teklif cümlelerinde 'any' yerine 'some' kullanımı daha yaygın ve naziktir.", type: "grammar" },
    { question: "How would you like your ___?", options: ["meat", "steak", "food", "dish"], correctAnswer: 1, explanation: "Etin pişme derecesi sorulurken genellikle 'steak' (bonfile/et) kullanılır.", type: "vocabulary" },
    { question: "___ it come with chips?", options: ["Do", "Does", "Is", "Are"], correctAnswer: 1, explanation: "It (yemek) için soru 'Does' ile sorulur.", type: "grammar" },
    { question: "Could I change my ___, please?", options: ["order", "ordered", "orderly", "ordering"], correctAnswer: 0, explanation: "Order = Sipariş (İsim hali).", type: "vocabulary" },
    { question: "Is this dish very ___?", options: ["spice", "spiced", "spicy", "spices"], correctAnswer: 2, explanation: "Spicy = Baharatlı / Acılı. (Sıfat hali)", type: "vocabulary" },
    { question: "I ___ allergic to nuts.", options: ["is", "am", "are", "be"], correctAnswer: 1, explanation: "Alerjiyi belirtirken 'I am allergic to...' kullanılır.", type: "grammar" },
    { question: "Can we have a ___ for four?", options: ["table", "chair", "seat", "place"], correctAnswer: 0, explanation: "Table for four = Dört kişilik masa.", type: "vocabulary" },
    { question: "Does this have any ___ in it?", options: ["meat", "meated", "meats", "meating"], correctAnswer: 0, explanation: "İçinde et var mı? (Meat - sayılamaz).", type: "vocabulary" },
    { question: "I'd like to ___ a table for tonight.", options: ["book", "make", "take", "do"], correctAnswer: 0, explanation: "Rezervasyon yapmak için 'book' veya 'reserve' kullanılır.", type: "vocabulary" },
    { question: "What do you ___?", options: ["recommend", "recommendation", "recommends", "recommending"], correctAnswer: 0, explanation: "Recommend = Tavsiye etmek (Fiil). 'Ne tavsiye edersiniz?'", type: "vocabulary" },
    { question: "I'll have the same ___ my friend.", options: ["as", "with", "like", "than"], correctAnswer: 0, explanation: "The same as... = ... ile aynısı.", type: "grammar" },
    { question: "Can I get you ___ to drink?", options: ["anything", "something", "any", "some"], correctAnswer: 1, explanation: "Teklif/İkramda 'something' daha yaygındır.", type: "grammar" },
    { question: "Is this ___ taken?", options: ["chair", "seat", "table", "place"], correctAnswer: 1, explanation: "Is this seat taken? = Bu koltuk/yer dolu mu?", type: "vocabulary" },
    { question: "I'd like it ___ the side, please.", options: ["at", "in", "on", "for"], correctAnswer: 2, explanation: "On the side = (Sosun vb.) Yanda olması.", type: "grammar" },
    { question: "Could you ___ me a napkin?", options: ["get", "take", "make", "do"], correctAnswer: 0, explanation: "Get someone something = Birine bir şey getirmek.", type: "vocabulary" },
    { question: "How ___ is the wait?", options: ["much", "long", "many", "far"], correctAnswer: 1, explanation: "How long is the wait? = Bekleme süresi ne kadar?", type: "vocabulary" },
    { question: "We are ___ five people.", options: ["a party of", "a group of", "a set of", "a team of"], correctAnswer: 0, explanation: "Restoranlarda grup sayısını belirtirken 'a party of [sayı]' kalıbı kullanılır.", type: "vocabulary" },
    { question: "Everything ___ delicious, thank you.", options: ["was", "were", "is", "be"], correctAnswer: 0, explanation: "Geçmişten bahsediyorsak 'was'.", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Complaints & Complex Situations)
const u133q3: EnglishQuestion[] = [
    { question: "Excuse me, this is not what I ___.", options: ["order", "ordered", "ordering", "orders"], correctAnswer: 1, explanation: "'Bu sipariş ettiğim şey değil'. Eylem geçmişte yapıldı: ordered.", type: "grammar" },
    { question: "My soup is ___. Could you heat it up?", options: ["cold", "cool", "chilly", "frozen"], correctAnswer: 0, explanation: "Çorbanın soğuk olduğunu ve ısıtılması gerektiğini belirtiyor.", type: "vocabulary" },
    { question: "There seems to be a ___ in the bill.", options: ["fault", "mistake", "wrong", "error"], correctAnswer: 1, explanation: "Mistake in the bill = Hesapta hata.", type: "vocabulary" },
    { question: "I ___ for a medium steak, but this is well-done.", options: ["ask", "asked", "asking", "asks"], correctAnswer: 1, explanation: "Asked = İstedim / Sipariş ettim.", type: "grammar" },
    { question: "The fish doesn't taste ___.", options: ["fresh", "new", "early", "clean"], correctAnswer: 0, explanation: "Fresh = Taze. Balığın taze olmadığını belirtiyor.", type: "vocabulary" },
    { question: "Could we have some more ___, please?", options: ["bread", "breads", "breading", "breaded"], correctAnswer: 0, explanation: "Bread sayılamaz (uncountable), -s almaz.", type: "vocabulary" },
    { question: "I've been waiting ___ 30 minutes.", options: ["since", "for", "at", "in"], correctAnswer: 1, explanation: "Süre belirtirken 'for' kullanılır.", type: "grammar" },
    { question: "We'd like to ___ the bill, please.", options: ["share", "cut", "split", "divide"], correctAnswer: 2, explanation: "Split the bill = Hesabı bölüşmek/ayrı ödemek.", type: "vocabulary" },
    { question: "Could I have a ___ bag, please?", options: ["doggy", "catty", "food", "left"], correctAnswer: 0, explanation: "Doggy bag = Artan yemekleri paket yaptırmak için kullanılan çanta.", type: "vocabulary" },
    { question: "The service was quite ___, wasn't it?", options: ["slow", "slowly", "slowness", "slows"], correctAnswer: 0, explanation: "Sıfat hali: slow (yavaş).", type: "grammar" },
    { question: "Do you have any ___ options?", options: ["sugar-free", "non-sugar", "without sugar", "no sugar"], correctAnswer: 0, explanation: "Sugar-free = Şekersiz seçenekler.", type: "vocabulary" },
    { question: "Could you ___ the music a bit?", options: ["lower", "reduce", "down", "turn down"], correctAnswer: 3, explanation: "Turn down = Sesi kısmak (phrasal verb).", type: "grammar" },
    { question: "We're in a bit of a ___. Could we have the bill?", options: ["hurry", "fast", "speed", "quick"], correctAnswer: 0, explanation: "In a hurry = Acelesi olmak.", type: "vocabulary" },
    { question: "What's the ___ of the day?", options: ["special", "speacialty", "specially", "specialize"], correctAnswer: 0, explanation: "Special of the day = Günün spesiyali/yemeği.", type: "vocabulary" },
    { question: "Does this dish contain any ___?", options: ["dairy", "daily", "diary", "dairyed"], correctAnswer: 0, explanation: "Dairy = Süt ürünleri.", type: "vocabulary" },
    { question: "I'd like to make a ___.", options: ["complain", "complaint", "complaining", "complaints"], correctAnswer: 1, explanation: "Make a complaint = Şikayette bulunmak (isim hali).", type: "vocabulary" },
    { question: "Could I have a ___ of water?", options: ["pitcher", "plate", "bowl", "napkin"], correctAnswer: 0, explanation: "Pitcher = Sürahi.", type: "vocabulary" },
    { question: "Is there a ___ for large groups?", options: ["discount", "drop", "less", "sale"], correctAnswer: 0, explanation: "Discount = İndirim.", type: "vocabulary" },
    { question: "The steak is a bit ___.", options: ["tough", "hard", "sharp", "loud"], correctAnswer: 0, explanation: "Tough = Sert (çiğnemesi zor et).", type: "vocabulary" },
    { question: "We're ___ to leave soon.", options: ["going", "about", "want", "ready"], correctAnswer: 1, explanation: "About to leave = Ayrılmak üzereyiz.", type: "grammar" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Real-world interactions & Idioms)
const u133q4: EnglishQuestion[] = [
    { question: "A: What would you like to start with? B: ___ the tomato soup.", options: ["I'm have", "I'll have", "I have", "I'd have"], correctAnswer: 1, explanation: "I'll have... (Alacağım) - Sipariş verme anı.", type: "grammar" },
    { question: "A: Can I bring you anything else? B: No, just the check, ___.", options: ["thank you", "please", "thanks", "B ve C"], correctAnswer: 3, explanation: "Please ve Thanks ikisi de nazik kapanışlardır.", type: "grammar" },
    { question: "This steak is ___ cooked. It's perfect!", options: ["well", "finely", "superbly", "perfectly"], correctAnswer: 3, explanation: "Perfectly cooked = Mükemmel pişmiş.", type: "vocabulary" },
    { question: "A: How was your meal? B: It was ___ this world!", options: ["out of", "away from", "outside", "beyond"], correctAnswer: 0, explanation: "Out of this world = Harika, muazzam (deyim).", type: "vocabulary" },
    { question: "I'm sorry, we're fully ___ for tonight.", options: ["booked", "reservated", "taken", "filled"], correctAnswer: 0, explanation: "Fully booked = Tamamen dolu (rezervasyonlar dolmuş).", type: "vocabulary" },
    { question: "Can we pay ___?", options: ["separate", "separately", "separating", "separation"], correctAnswer: 1, explanation: "Pay separately = Ayrı ayrı ödemek (Zarf hali).", type: "grammar" },
    { question: "Do you accept ___ cards?", options: ["credit", "cash", "money", "paper"], correctAnswer: 0, explanation: "Credit cards = Kredi kartları.", type: "vocabulary" },
    { question: "A: Keep the ___. B: Thank you, sir.", options: ["money", "cash", "change", "coins"], correctAnswer: 2, explanation: "Keep the change = Üstü kalsın (Bahşiş bırakırken).", type: "vocabulary" },
    { question: "I'd like to ___ a complaint to the manager.", options: ["do", "make", "give", "tell"], correctAnswer: 1, explanation: "Make a complaint.", type: "grammar" },
    { question: "The food was a bit ___ for my taste.", options: ["salty", "salt", "salting", "salted"], correctAnswer: 0, explanation: "Salty = Tuzlu.", type: "vocabulary" },
    { question: "Could you ___ us some more water?", options: ["carry", "bring", "take", "send"], correctAnswer: 1, explanation: "Bring us = Bize getirin.", type: "vocabulary" },
    { question: "We have a ___ at 8 PM.", options: ["reservation", "reserve", "reserving", "reserved"], correctAnswer: 0, explanation: "Have a reservation = Rezervasyonumuz var.", type: "vocabulary" },
    { question: "It's my ___. I'll pay for everyone.", options: ["treat", "turn", "time", "gift"], correctAnswer: 0, explanation: "It's my treat = Benden (Ben ısmarlıyorum).", type: "vocabulary" },
    { question: "Can I have a ___ of the wine, please?", options: ["taste", "sip", "try", "look"], correctAnswer: 0, explanation: "Have a taste = Tadına bakmak.", type: "vocabulary" },
    { question: "This table is ___. Let's find another one.", options: ["reserved", "booked", "occupied", "A ve C"], correctAnswer: 3, explanation: "Reserved veya Occupied ikisi de dolu olduğunu belirtir.", type: "vocabulary" },
    { question: "Everything was to our ___.", options: ["satisfy", "satisfaction", "satisfying", "satisfied"], correctAnswer: 1, explanation: "To our satisfaction = Memnuniyetimize uygun/Harika.", type: "vocabulary" },
    { question: "I'll ___ for the bill now.", options: ["ask", "tell", "say", "order"], correctAnswer: 0, explanation: "Ask for the bill = Hesabı istemek.", type: "grammar" },
    { question: "Could you ___ what this dish is?", options: ["describe", "tell", "explain", "Hepsi"], correctAnswer: 3, explanation: "Describe/Tell/Explain hepsi bilgi istemek için uygundur.", type: "vocabulary" },
    { question: "Do you have a ___ for children?", options: ["list", "menu", "page", "book"], correctAnswer: 1, explanation: "Children's menu = Çocuk menüsü.", type: "vocabulary" },
    { question: "That's ___ much for me. Can I have a smaller portion?", options: ["too", "so", "very", "enough"], correctAnswer: 0, explanation: "Too much = Aşırı fazla.", type: "grammar" }
];

// Unit 134: Shopping - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Vocabulary & Pricing)
const u134q1: EnglishQuestion[] = [
    { question: "How much ___ this shirt?", options: ["is", "are", "be", "do"], correctAnswer: 0, explanation: "Tekil nesnelerin (this shirt) fiyatını sorarken 'How much is...?' kullanılır.", type: "grammar" },
    { question: "How much ___ these shoes?", options: ["is", "are", "do", "am"], correctAnswer: 1, explanation: "Çoğul nesnelerin (these shoes) fiyatını sorarken 'How much are...?' kullanılır.", type: "grammar" },
    { question: "'Receipt' ne demek?", options: ["Reçete", "Fiş/Fatura", "İndirim", "Cüzdan"], correctAnswer: 1, explanation: "Alışverişten sonra aldığımız ödeme belgesine 'Receipt' (okunuşu: risiit) denir.", type: "vocabulary" },
    { question: "I'm looking ___ a blue dress.", options: ["at", "for", "to", "in"], correctAnswer: 1, explanation: "Look for = Bir şeyi aramak.", type: "grammar" },
    { question: "'Size' ne demek?", options: ["Fiyat", "Renk", "Beden/Boyut", "Kumaş"], correctAnswer: 2, explanation: "Kıyafetlerde beden veya ayakkabılarda numara için 'Size' kullanılır.", type: "vocabulary" },
    { question: "Do you have this in small ___?", options: ["size", "color", "price", "way"], correctAnswer: 0, explanation: "Small size = Küçük beden.", type: "vocabulary" },
    { question: "'Cheap' kelimesinin zıttı nedir?", options: ["Expensive", "Poor", "Old", "Large"], correctAnswer: 0, explanation: "Cheap (ucuz) - Expensive (pahalı).", type: "vocabulary" },
    { question: "I'll ___ it.", options: ["take", "give", "make", "do"], correctAnswer: 0, explanation: "Bir şeyi satın almaya karar verdiğimizde 'I'll take it' (Onu alacağım) deriz.", type: "grammar" },
    { question: "Where is the cash ___?", options: ["desk", "table", "board", "box"], correctAnswer: 0, explanation: "Cash desk = Kasa.", type: "vocabulary" },
    { question: "Is there a ___ on this jacket?", options: ["sale", "discount", "price", "tag"], correctAnswer: 1, explanation: "Discount = İndirim.", type: "vocabulary" },
    { question: "Can I ___ by credit card?", options: ["pay", "give", "buy", "sell"], correctAnswer: 0, explanation: "Pay by credit card = Kredi kartıyla ödemek.", type: "grammar" },
    { question: "'Customer' ne demek?", options: ["Satıcı", "Müdür", "Müşteri", "Kasiyer"], correctAnswer: 2, explanation: "Alışveriş yapan kişiye 'Customer' denir.", type: "vocabulary" },
    { question: "These jeans are too ___.", options: ["long", "high", "many", "much"], correctAnswer: 0, explanation: "Kıyafetler için uzunluk belirtirken 'long' kullanılır.", type: "vocabulary" },
    { question: "Do you ___ cash?", options: ["take", "do", "make", "go"], correctAnswer: 0, explanation: "Do you take cash? = Nakit alıyor musunuz? (Nakit geçiyor mu?)", type: "grammar" },
    { question: "I need a bigger ___.", options: ["size", "long", "tall", "heavy"], correctAnswer: 0, explanation: "Daha büyük bir beden (size).", type: "vocabulary" },
    { question: "Wait, the price ___ is missing.", options: ["tag", "label", "card", "paper"], correctAnswer: 0, explanation: "Price tag = Fiyat etiketi.", type: "vocabulary" },
    { question: "It ___ 50 dollars.", options: ["costs", "pays", "is cost", "has"], correctAnswer: 0, explanation: "Cost = Maliyeti olmak / ... lira tutmak.", type: "grammar" },
    { question: "The shop ___ at 9 PM.", options: ["closes", "closing", "close", "is close"], correctAnswer: 0, explanation: "Geniş zaman: Dükkan 9'da kapanır.", type: "grammar" },
    { question: "'Sale' ne demek?", options: ["Satış/İndirim", "Pahalı", "Yeni", "Kapalı"], correctAnswer: 0, explanation: "Sale hem satış hem de indirimli dönemler için kullanılır.", type: "vocabulary" },
    { question: "This is very ___.", options: ["cheap", "cheaping", "cheaps", "cheaply"], correctAnswer: 0, explanation: "Sıfat hali: cheap (ucuz).", type: "grammar" }
];

// Quiz 2: MEDIUM - Uygulama (Trying on & Preferences)
const u134q2: EnglishQuestion[] = [
    { question: "Can I ___ this on?", options: ["try", "put", "take", "do"], correctAnswer: 0, explanation: "Try on = (Kıyafeti) denemek.", type: "grammar" },
    { question: "Where are the ___ rooms?", options: ["changing", "fitting", "trying", "A ve B"], correctAnswer: 3, explanation: "Changing room veya Fitting room ikisi de deneme kabini demektir.", type: "vocabulary" },
    { question: "Does this ___ me?", options: ["fit", "suit", "match", "Hepsi"], correctAnswer: 3, explanation: "Fit (beden), Suit (yakışmak), Match (uymak). Hepsi bağlama göre olur.", type: "vocabulary" },
    { question: "I ___ a size 10.", options: ["am", "take", "have", "A ve B"], correctAnswer: 3, explanation: "'I am a size 10' veya 'I take a size 10' (10 beden giyiyorum) yaygındır.", type: "grammar" },
    { question: "This is a bit too ___.", options: ["tight", "loose", "large", "Hepsi"], correctAnswer: 3, explanation: "Tight (dar), Loose (bol), Large (büyük).", type: "vocabulary" },
    { question: "Do you have this in ___?", options: ["another color", "other color", "others color", "any color"], correctAnswer: 0, explanation: "Another color = Başka bir renk.", type: "grammar" },
    { question: "I'm just ___, thank you.", options: ["looking", "seeing", "browsing", "A ve C"], correctAnswer: 3, explanation: "Sadece bakıyorum derken 'looking' veya 'browsing' kullanılır.", type: "vocabulary" },
    { question: "These shoes are very ___.", options: ["comfort", "comfortable", "comforting", "comforts"], correctAnswer: 1, explanation: "Comfortable = Rahat.", type: "vocabulary" },
    { question: "I'd like to ___ this, please.", options: ["buy", "purchase", "get", "Hepsi"], correctAnswer: 3, explanation: "Hepsi 'satın almak' anlamında kullanılabilir.", type: "vocabulary" },
    { question: "Is this jacket ___?", options: ["washable", "washing", "washed", "wash"], correctAnswer: 0, explanation: "Washable = Yıkanabilir.", type: "vocabulary" },
    { question: "Do you sell ___?", options: ["batteries", "battery", "batteried", "battering"], correctAnswer: 0, explanation: "Çoğul isim kullanımı: 'Pil satıyor musunuz?'", type: "vocabulary" },
    { question: "I ___ it in the window.", options: ["see", "saw", "seeing", "seen"], correctAnswer: 1, explanation: "Vitrinde gördüm (Geçmiş zaman): saw.", type: "grammar" },
    { question: "Can you ___ it for me?", options: ["wrap", "gift", "pack", "A ve C"], correctAnswer: 3, explanation: "Wrap (paketlemek) veya Pack (paket yapmak).", type: "vocabulary" },
    { question: "Is there a ___ for this?", options: ["guarantee", "warranty", "paper", "A ve B"], correctAnswer: 3, explanation: "Bozulacak ürünler için garanti: Guarantee veya Warranty.", type: "vocabulary" },
    { question: "It doesn't ___ me. It's too small.", options: ["fit", "suit", "match", "go"], correctAnswer: 0, explanation: "Bedeni uymamak = Not fit.", type: "vocabulary" },
    { question: "Red ___ you.", options: ["fits", "suits", "matches", "goes"], correctAnswer: 1, explanation: "Bir rengin veya modelin yakışması = Suit.", type: "vocabulary" },
    { question: "Do you have a ___ bag?", options: ["plastic", "paper", "carrier", "Hepsi"], correctAnswer: 3, explanation: "Alışveriş poşeti için hepsi kullanılabilir.", type: "vocabulary" },
    { question: "I'll pay in ___.", options: ["cash", "money", "paper", "coins"], correctAnswer: 0, explanation: "Pay in cash = Nakit ödemek.", type: "grammar" },
    { question: "The ___ is over there.", options: ["queue", "line", "row", "A ve B"], correctAnswer: 3, explanation: "Sıra/Kuyruk = Queue (İng.) veya Line (ABD).", type: "vocabulary" },
    { question: "Can I have a ___?", options: ["receipt", "recipe", "receive", "reception"], correctAnswer: 0, explanation: "Fiş istiyoruz: Receipt.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Returns, Exchanges & Details)
const u134q3: EnglishQuestion[] = [
    { question: "I'd like to ___ this shirt, please.", options: ["return", "exchange", "refund", "A ve B"], correctAnswer: 3, explanation: "Return (iade etmek), Exchange (değiştirmek).", type: "vocabulary" },
    { question: "Do you have the ___?", options: ["receipt", "recipe", "receive", "reception"], correctAnswer: 0, explanation: "İade için fiil (receipt) gereklidir.", type: "vocabulary" },
    { question: "Can I get a ___?", options: ["refund", "money back", "return", "A ve B"], correctAnswer: 3, explanation: "Refund veya Money back (parayı geri almak).", type: "vocabulary" },
    { question: "This is ___ to 20 dollars.", options: ["reduced", "off", "less", "down"], correctAnswer: 0, explanation: "Reduced = (Fiyatı) düşürülmüş.", type: "vocabulary" },
    { question: "Is it still under ___?", options: ["guarantee", "warranty", "paper", "A ve B"], correctAnswer: 3, explanation: "Hala garanti kapsamında mı? (Under warranty).", type: "vocabulary" },
    { question: "I bought it ___ sale.", options: ["at", "on", "in", "to"], correctAnswer: 1, explanation: "On sale = İndirimde.", type: "grammar" },
    { question: "There's a ___ on this sleeve.", options: ["stain", "hole", "mark", "Hepsi"], correctAnswer: 3, explanation: "Stain (leke), Hole (delik), Mark (iz). Mağaza hataları.", type: "vocabulary" },
    { question: "Do you have this ___ stock?", options: ["at", "on", "in", "with"], correctAnswer: 2, explanation: "In stock = Stokta olmak.", type: "grammar" },
    { question: "We are out ___ stock.", options: ["to", "from", "of", "in"], correctAnswer: 2, explanation: "Out of stock = Stokta kalmamış.", type: "grammar" },
    { question: "Can I speak to the ___, please?", options: ["manager", "boss", "leader", "owner"], correctAnswer: 0, explanation: "Manager = Mağaza müdürü.", type: "vocabulary" },
    { question: "It's a ___-for-one offer.", options: ["two", "dual", "double", "pair"], correctAnswer: 0, explanation: "Two-for-one = Bir alana bir bedava / İkisi bir fiyata.", type: "vocabulary" },
    { question: "Is this ___?", options: ["leather", "cotton", "wool", "Hepsi"], correctAnswer: 3, explanation: "Materyaller: Leather (deri), Cotton (pamuk), Wool (yün).", type: "vocabulary" },
    { question: "It's half ___.", options: ["price", "cost", "value", "money"], correctAnswer: 0, explanation: "Half price = Yarı fiyatına.", type: "vocabulary" },
    { question: "Do you deliver ___?", options: ["at home", "to home", "home", "in home"], correctAnswer: 2, explanation: "Deliver home = Eve teslim etmek.", type: "grammar" },
    { question: "What's your ___ policy?", options: ["return", "give", "back", "take"], correctAnswer: 0, explanation: "Return policy = İade politikası.", type: "vocabulary" },
    { question: "I'll leave it, ___.", options: ["thanks", "please", "sorry", "excuse"], correctAnswer: 0, explanation: "Almaktan vazgeçince 'I'll leave it, thanks' (Dursun, teşekkürler).", type: "vocabulary" },
    { question: "Can you check in the ___, please?", options: ["back", "warehouse", "store", "A ve B"], correctAnswer: 3, explanation: "Depoya bakmak: In the back / In the warehouse.", type: "vocabulary" },
    { question: "This is a real ___!", options: ["bargain", "cheap", "good", "sale"], correctAnswer: 0, explanation: "Bargain = Çok karlı alışveriş / Kelepir.", type: "vocabulary" },
    { question: "Do you give ___?", options: ["discounts", "sales", "less", "offs"], correctAnswer: 0, explanation: "Give discounts = İndirim yapmak.", type: "vocabulary" },
    { question: "I'm looking for the ___ department.", options: ["jewelry", "shoe", "toy", "Hepsi"], correctAnswer: 3, explanation: "Department = Reyon/Bölüm.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Cashier & Complex situations)
const u134q4: EnglishQuestion[] = [
    { question: "A: Can I help you? B: No, thanks. I'm just ___.", options: ["looking around", "browsing", "seeing", "A ve B"], correctAnswer: 3, explanation: "Müşterinin 'Sadece bakıyorum' demesi.", type: "vocabulary" },
    { question: "Cashier: That's 45 pounds, please. Customer: ___.", options: ["Here you go", "There you are", "Take it", "A ve B"], correctAnswer: 3, explanation: "Para verirken 'Buyrun' anlamında 'Here you go' veya 'There you are' kullanılır.", type: "vocabulary" },
    { question: "Cashier: Would you like a ___? Customer: Yes, a small one please.", options: ["bag", "pack", "carry", "handle"], correctAnswer: 0, explanation: "Poşet teklifi.", type: "vocabulary" },
    { question: "Which one is CORRECT?", options: ["Can I try on it?", "Can I try it on?", "Can I trying it on?", "Can I try on."], correctAnswer: 1, explanation: "Phrasal verb kullanımında (try it on) nesne araya gelir.", type: "grammar" },
    { question: "Cashier: Your ___ is 5 pounds. Customer: Thank you.", options: ["change", "money", "rest", "coins"], correctAnswer: 0, explanation: "Para üstü: Change.", type: "vocabulary" },
    { question: "I'd like to ___ a complaint about the service.", options: ["do", "make", "tell", "give"], correctAnswer: 1, explanation: "Make a complaint.", type: "grammar" },
    { question: "A: Does it suit me? B: Yes, it looks ___ on you.", options: ["good", "well", "great", "A ve C"], correctAnswer: 3, explanation: "Good veya Great (Harika duruyor).", type: "vocabulary" },
    { question: "I'm afraid it's ___, we won't have more.", options: ["sold out", "finished", "gone", "A ve C"], correctAnswer: 3, explanation: "Sold out = Tükenmiş.", type: "vocabulary" },
    { question: "It was worth every ___.", options: ["penny", "cent", "money", "dollar"], correctAnswer: 0, explanation: "Worth every penny = Her kuruşuna değdi.", type: "vocabulary" },
    { question: "Let's go to the ___ counters.", options: ["checkout", "payment", "exit", "buying"], correctAnswer: 0, explanation: "Checkout counter = Kasa sırası/tezgahı.", type: "vocabulary" },
    { question: "Would you like your receipt in the ___?", options: ["bag", "hand", "pocket", "box"], correctAnswer: 0, explanation: "Fişi poşete koyayım mı?", type: "vocabulary" },
    { question: "I'll pay ___ cash.", options: ["with", "by", "in", "at"], correctAnswer: 2, explanation: "In cash (Nakit), By card (Kartla).", type: "grammar" },
    { question: "Can I have a ___ for this gift?", options: ["gift receipt", "price tag", "box", "ribbon"], correctAnswer: 0, explanation: "Gift receipt = Hediye fişi (Fiyat yazmayan iade belgesi).", type: "vocabulary" },
    { question: "I think you ___ me the wrong change.", options: ["give", "gave", "given", "giving"], correctAnswer: 1, explanation: "Yanlış para üstü verdiniz (Geçmiş zaman): Gave.", type: "grammar" },
    { question: "It's buy one, get one ___.", options: ["free", "discount", "half", "less"], correctAnswer: 0, explanation: "BOGOF = Buy One Get One Free.", type: "vocabulary" },
    { question: "We don't accept ___.", options: ["personal checks", "money", "cards", "A ve C"], correctAnswer: 0, explanation: "Kişisel çekler artık pek kabul edilmiyor.", type: "vocabulary" },
    { question: "This is a bit over my ___.", options: ["budget", "price", "money", "limit"], correctAnswer: 0, explanation: "Over my budget = Bütçemi aşıyor.", type: "vocabulary" },
    { question: "Can I ___ a store credit instead of a refund?", options: ["get", "do", "make", "take"], correctAnswer: 0, explanation: "Store credit = Mağaza çeki/kredisi.", type: "vocabulary" },
    { question: "Are these items ___ sale?", options: ["at", "on", "in", "to"], correctAnswer: 1, explanation: "On sale.", type: "grammar" },
    { question: "The ___ is over 100 dollars.", options: ["total", "sum", "all", "number"], correctAnswer: 0, explanation: "The total = Toplam tutar.", type: "vocabulary" }
];

// Unit 135: Travel Plans - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Vocabulary & 'Going to')
const u135q1: EnglishQuestion[] = [
    { question: "I am ___ to visit Spain next summer.", options: ["go", "going", "goes", "gone"], correctAnswer: 1, explanation: "Gelecek planlarından bahsederken 'be going to + fiil' yapısı kullanılır.", type: "grammar" },
    { question: "'Suitcase' ne demek?", options: ["Pasaport", "Bilet", "Bavul", "Cüzdan"], correctAnswer: 2, explanation: "Suitcase = Bavul/Valiz.", type: "vocabulary" },
    { question: "We ___ going to fly to London.", options: ["is", "am", "are", "be"], correctAnswer: 2, explanation: "We öznesi için 'are' yardımcı fiili kullanılır.", type: "grammar" },
    { question: "Where is my ___? I need it for the flight.", options: ["ticket", "menu", "bill", "shoe"], correctAnswer: 0, explanation: "Uçuş için bilet (ticket) gereklidir.", type: "vocabulary" },
    { question: "She ___ going to stay in a hotel.", options: ["is", "are", "am", "be"], correctAnswer: 0, explanation: "She (Tekil) olduğu için 'is' kullanılır.", type: "grammar" },
    { question: "'Passport' ne demek?", options: ["Kimlik", "Pasaport", "Ehliyet", "Bilet"], correctAnswer: 1, explanation: "Yurtdışı seyahati için gerekli olan belge: Passport.", type: "vocabulary" },
    { question: "They are going to ___ a car.", options: ["rent", "renting", "rented", "rents"], correctAnswer: 0, explanation: "'Going to' kalıbından sonra fiilin yalın hali (V1) gelir.", type: "grammar" },
    { question: "'Flight' ne demek?", options: ["Gezinti", "Uçuş", "Yolculuk", "Tatil"], correctAnswer: 1, explanation: "Flight = Uçuş.", type: "vocabulary" },
    { question: "Are you ___ to pack your bags?", options: ["go", "goes", "going", "gone"], correctAnswer: 2, explanation: "Soru yapısında da 'going to' bozulmaz.", type: "grammar" },
    { question: "I need to buy a ___.", options: ["map", "book", "bag", "Hepsi"], correctAnswer: 3, explanation: "Seyahat için harita, kitap veya çanta gerekebilir.", type: "vocabulary" },
    { question: "'Destination' ne demek?", options: ["Başlangıç", "Varış noktası", "Yolculuk", "Hız"], correctAnswer: 1, explanation: "Gidilecek olan yer, varış noktası.", type: "vocabulary" },
    { question: "We ___ stay for a week.", options: ["go to", "are going to", "is going to", "am going to"], correctAnswer: 1, explanation: "We are going to...", type: "grammar" },
    { question: "He is going to ___ photos.", options: ["take", "make", "do", "give"], correctAnswer: 0, explanation: "Take photos = Fotoğraf çekmek.", type: "grammar" },
    { question: "'Travel' ne demek?", options: ["Yemek", "Seyahat etmek", "Uyumak", "Çalışmak"], correctAnswer: 1, explanation: "Travel = Seyahat etmek / Gezmek.", type: "vocabulary" },
    { question: "Is it going to ___ tomorrow?", options: ["rain", "raining", "rained", "rains"], correctAnswer: 0, explanation: "Going to + V1 (rain).", type: "grammar" },
    { question: "I'm going to eat ___ food.", options: ["local", "localed", "locally", "location"], correctAnswer: 0, explanation: "Local food = Yerel yemek.", type: "vocabulary" },
    { question: "Don't forget your ___.", options: ["camera", "sunscreen", "hat", "Hepsi"], correctAnswer: 3, explanation: "Tatil eşyaları.", type: "vocabulary" },
    { question: "We are ___ for Rome tonight.", options: ["leaving", "leave", "left", "leaves"], correctAnswer: 0, explanation: "Şimdiki zaman (Present Continuous) bazen gelecek planları için kullanılır.", type: "grammar" },
    { question: "'Tourist' ne demek?", options: ["Rehber", "Turist", "Yolcu", "Kaptan"], correctAnswer: 1, explanation: "Gezgin, turist.", type: "vocabulary" },
    { question: "I'm ___ excited!", options: ["so", "too", "very", "A ve C"], correctAnswer: 3, explanation: "So excited / Very excited (Çok heyecanlıyım).", type: "grammar" }
];

// Quiz 2: MEDIUM - Uygulama (Transportation & Hotel)
const u135q2: EnglishQuestion[] = [
    { question: "How are you going to ___ there?", options: ["get", "go", "arrive", "Hepsi"], correctAnswer: 3, explanation: "Get there / Go there / Arrive there: Hepsi oraya varmak/gitmek anlamındadır.", type: "vocabulary" },
    { question: "We're going by ___.", options: ["train", "plane", "bus", "Hepsi"], correctAnswer: 3, explanation: "By + ulaşım aracı.", type: "vocabulary" },
    { question: "I'd like to ___ a double room.", options: ["book", "stay", "live", "make"], correctAnswer: 0, explanation: "Book a room = Oda ayırtmak/rezervasyon yapmak.", type: "vocabulary" },
    { question: "Is breakfast ___?", options: ["include", "included", "including", "includes"], correctAnswer: 1, explanation: "Included = Dahil. 'Kahvaltı dahil mi?'", type: "grammar" },
    { question: "What time is ___?", options: ["check-in", "check-out", "arrival", "A ve B"], correctAnswer: 3, explanation: "Giriş (check-in) veya çıkış (check-out) saati.", type: "vocabulary" },
    { question: "We need to ___ our flight online.", options: ["check-in", "check-up", "check-out", "check-at"], correctAnswer: 0, explanation: "Check-in online = Çevrimiçi kayıt yapmak.", type: "vocabulary" },
    { question: "Is there a ___ from the airport?", options: ["shuttle", "bus", "taxi", "Hepsi"], correctAnswer: 3, explanation: "Havaalanı servisleri için özellikle 'shuttle' kullanılır.", type: "vocabulary" },
    { question: "I'd like a room with a ___.", options: ["view", "look", "see", "sight"], correctAnswer: 0, explanation: "Room with a view = Manzaralı oda.", type: "vocabulary" },
    { question: "How long are you going to ___?", options: ["stay", "live", "be", "A ve C"], correctAnswer: 3, explanation: "Stay (kalmak).", type: "vocabulary" },
    { question: "We're going to ___ the museum.", options: ["visit", "visiting", "visited", "visits"], correctAnswer: 0, explanation: "Visit (V1).", type: "grammar" },
    { question: "I'll ___ you at the station.", options: ["meet", "met", "meeting", "meets"], correctAnswer: 0, explanation: "I will meet you (Seni karşılayacağım).", type: "grammar" },
    { question: "Is the ___ expensive?", options: ["fare", "price", "cost", "Hepsi"], correctAnswer: 3, explanation: "Fare = Yol ücreti (bilet fiyatı).", type: "vocabulary" },
    { question: "I need to ___ my currency.", options: ["change", "exchange", "switch", "A ve B"], correctAnswer: 3, explanation: "Exchange currency = Döviz bozdurmak.", type: "vocabulary" },
    { question: "Where is the ___ office?", options: ["information", "tourism", "help", "A ve B"], correctAnswer: 3, explanation: "Information office = Danışma.", type: "vocabulary" },
    { question: "Does the hotel have ___?", options: ["Wi-Fi", "a gym", "a pool", "Hepsi"], correctAnswer: 3, explanation: "Otel olanakları.", type: "vocabulary" },
    { question: "I'm going to ___ a souvenir.", options: ["buy", "bring", "take", "make"], correctAnswer: 0, explanation: "Souvenir = Hediyelik eşya.", type: "vocabulary" },
    { question: "The train ___ at 10 AM.", options: ["leaves", "leaving", "is leave", "leaved"], correctAnswer: 0, explanation: "Tarifeli işler (tren, uçak) için geniş zaman kullanılır.", type: "grammar" },
    { question: "We ___ have a great time.", options: ["will", "going to", "are", "do"], correctAnswer: 0, explanation: "Tahmin yürütürken 'will' kullanımı uygundur.", type: "grammar" },
    { question: "I need to ___ my phone.", options: ["charge", "refill", "load", "power"], correctAnswer: 0, explanation: "Charge phone = Telefonu şarj etmek.", type: "vocabulary" },
    { question: "Is the water ___?", options: ["safe to drink", "drinkable", "clean", "Hepsi"], correctAnswer: 3, explanation: "İçilebilir su sorgusu.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Problems & Future Forms)
const u135q3: EnglishQuestion[] = [
    { question: "If the flight is cancelled, what ___ we do?", options: ["will", "are", "shall", "A ve C"], correctAnswer: 3, explanation: "Gelecekte ne yapacağımızı soruyoruz. 'Will' veya 'Shall' (öneri için).", type: "grammar" },
    { question: "My luggage has been ___.", options: ["lost", "losing", "lose", "losed"], correctAnswer: 0, explanation: "Lost = Kaybolmuş (Passive yapı).", type: "vocabulary" },
    { question: "I think it ___ be a long journey.", options: ["will", "is going to", "is", "A ve B"], correctAnswer: 3, explanation: "Tahminler için hem will hem be going to kullanılabilir.", type: "grammar" },
    { question: "There's a ___ with my reservation.", options: ["problem", "fault", "mistake", "A ve C"], correctAnswer: 3, explanation: "Rezervasyon hatası/sorunu.", type: "vocabulary" },
    { question: "We have to ___ the flight.", options: ["delay", "cancel", "postpone", "Hepsi"], correctAnswer: 3, explanation: "Ertelemek (postpone/delay) veya iptal etmek (cancel).", type: "vocabulary" },
    { question: "The flight is ___ by two hours.", options: ["delayed", "late", "behind", "slowed"], correctAnswer: 0, explanation: "Delayed = Gecikmeli.", type: "vocabulary" },
    { question: "I'd like to ___ my booking.", options: ["confirm", "change", "cancel", "Hepsi"], correctAnswer: 3, explanation: "Onaylamak (confirm), değiştirmek (change) veya iptal etmek.", type: "vocabulary" },
    { question: "Is there any ___ room service?", options: ["available", "open", "ready", "free"], correctAnswer: 0, explanation: "Available = Mevcut/Müsait.", type: "vocabulary" },
    { question: "I'm ___ forward to the trip.", options: ["looking", "seeing", "waiting", "hoping"], correctAnswer: 0, explanation: "Look forward to = Dört gözle beklemek.", type: "grammar" },
    { question: "We ___ probably stay for two nights.", options: ["will", "are going to", "do", "shall"], correctAnswer: 0, explanation: "Probably (muhtemelen) kelimesi 'will' ile çok sık kullanılır.", type: "grammar" },
    { question: "What's the ___ for a taxi?", options: ["estimate", "price", "fare", "Hepsi"], correctAnswer: 3, explanation: "Tahmini fiyat/ücret.", type: "vocabulary" },
    { question: "I ___ my flight if I don't hurry.", options: ["will miss", "miss", "going to miss", "am miss"], correctAnswer: 0, explanation: "Koşul cümlesi (If) + Gelecek zaman.", type: "grammar" },
    { question: "Is there a ___ near here?", options: ["subway station", "bus stop", "taxi rank", "Hepsi"], correctAnswer: 3, explanation: "Ulaşım noktaları.", type: "vocabulary" },
    { question: "The air conditioning isn't ___.", options: ["working", "doing", "making", "going"], correctAnswer: 0, explanation: "Not working = Çalışmıyor (bozuk).", type: "vocabulary" },
    { question: "Could I have a ___ towel, please?", options: ["fresh", "new", "clean", "A ve C"], correctAnswer: 3, explanation: "Fresh/Clean towel (Temiz havlu).", type: "vocabulary" },
    { question: "We're going to ___ a sightseeing tour.", options: ["go on", "take", "do", "Hepsi"], correctAnswer: 3, explanation: "Sightseeing tour = Şehir turu.", type: "vocabulary" },
    { question: "I've ___ a double room with a balcony.", options: ["booked", "ordered", "made", "taken"], correctAnswer: 0, explanation: "Booked = Ayırttım.", type: "vocabulary" },
    { question: "The hotel is ___ the city center.", options: ["near", "far from", "close to", "Hepsi"], correctAnswer: 3, explanation: "Konum belirtme.", type: "vocabulary" },
    { question: "Is there any ___ for an extra bed?", options: ["charge", "money", "price", "cost"], correctAnswer: 0, explanation: "Charge = Ek ücret (hizmet karşılığı).", type: "vocabulary" },
    { question: "We'll ___ there around midnight.", options: ["arrive", "get", "be", "Hepsi"], correctAnswer: 3, explanation: "Varmak/Orada olmak.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Airport & Idioms)
const u135q4: EnglishQuestion[] = [
    { question: "Customs: Do you have anything to ___? Traveler: No, nothing.", options: ["say", "declare", "show", "tell"], correctAnswer: 1, explanation: "Gümrükte bildirecek bir şeyiniz var mı? (Anything to declare?)", type: "vocabulary" },
    { question: "Agent: Can I see your ___? Traveler: Here you go.", options: ["boarding pass", "passport", "ID", "Hepsi"], correctAnswer: 3, explanation: "Biniş kartı (boarding pass) veya pasaport.", type: "vocabulary" },
    { question: "The plane is about to ___.", options: ["take off", "land", "fly", "A ve B"], correctAnswer: 3, explanation: "Take off (havalanmak) veya land (iniş yapmak).", type: "vocabulary" },
    { question: "A: Have a safe ___! B: Thank you!", options: ["trip", "journey", "flight", "Hepsi"], correctAnswer: 3, explanation: "İyi yolculuklar/uçuşlar.", type: "vocabulary" },
    { question: "I have a ___ in Paris on my way to New York.", options: ["layover", "stop", "break", "pause"], correctAnswer: 0, explanation: "Layover = Aktarma süresi / Bekleme.", type: "vocabulary" },
    { question: "Excuse me, which ___ does the flight leave from?", options: ["gate", "door", "port", "exit"], correctAnswer: 0, explanation: "Gate = (Havaalanı) Kapı.", type: "vocabulary" },
    { question: "My ___ is overweight. I have to pay extra.", options: ["bag", "suitcase", "luggage", "Hepsi"], correctAnswer: 3, explanation: "Bagaj/Bavul.", type: "vocabulary" },
    { question: "A: ___? B: It's at 5 PM. We should leave now.", options: ["What time is the flight?", "When is the train?", "What's the time?", "A ve B"], correctAnswer: 3, explanation: "Zaman sorma.", type: "grammar" },
    { question: "I'll ___ a postcard to you.", options: ["send", "write", "post", "Hepsi"], correctAnswer: 3, explanation: "Kartpostal göndermek/yazmak.", type: "vocabulary" },
    { question: "We're going to ___ some light.", options: ["travel", "go", "be", "pack"], correctAnswer: 0, explanation: "Travel light = Az eşyayla seyahat etmek (deyim).", type: "vocabulary" },
    { question: "It's time to ___ the road.", options: ["hit", "kick", "run", "go"], correctAnswer: 0, explanation: "Hit the road = Yola çıkmak (deyim).", type: "vocabulary" },
    { question: "Wait, I need to ___ my battery.", options: ["recharge", "refill", "fill", "made"], correctAnswer: 0, explanation: "Recharge battery (Enerji toplamak/şarj etmek).", type: "vocabulary" },
    { question: "We ___ be back by Sunday.", options: ["will", "going to", "are", "do"], correctAnswer: 0, explanation: "Will (Geri döneceğiz).", type: "grammar" },
    { question: "Where can I ___ my bags?", options: ["collect", "take", "pick up", "A ve C"], correctAnswer: 3, explanation: "Baggage claim (bagaj alım) alanında çantaları almak.", type: "vocabulary" },
    { question: "Everything is ___ for the trip.", options: ["ready", "set", "done", "A ve B"], correctAnswer: 3, explanation: "Ready / Set (Her şey hazır).", type: "vocabulary" },
    { question: "Do you have a ___ for the city?", options: ["map", "guide", "plan", "A ve B"], correctAnswer: 3, explanation: "Harita veya rehber.", type: "vocabulary" },
    { question: "Enjoy your ___!", options: ["stay", "holiday", "vacation", "Hepsi"], correctAnswer: 3, explanation: "İyi tatiller/kalışlar.", type: "vocabulary" },
    { question: "I'll ___ you a message when I arrive.", options: ["send", "give", "tell", "say"], correctAnswer: 0, explanation: "I'll send you a message.", type: "grammar" },
    { question: "Is the ___ included in the price?", options: ["tax", "fee", "service", "Hepsi"], correctAnswer: 3, explanation: "Vergi/Ücret dahil mi?", type: "vocabulary" },
    { question: "Safe ___!", options: ["travels", "trips", "flying", "going"], correctAnswer: 0, explanation: "Safe travels! (Kalıplaşmış bir veda).", type: "vocabulary" }
];

// Unit 136: Health & Illness - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Body Parts & Common Aches)
const u136q1: EnglishQuestion[] = [
    { question: "I have a ___ in my head.", options: ["pain", "sore", "ache", "hurt"], correctAnswer: 2, explanation: "Baş ağrısı için 'headache' kelimesi kullanılır (head + ache).", type: "grammar" },
    { question: "'Stomach' ne demek?", options: ["Sırt", "Mide", "Omuz", "Bacak"], correctAnswer: 1, explanation: "Stomach = Mide/Karın.", type: "vocabulary" },
    { question: "He has a ___ throat.", options: ["pain", "hurt", "sore", "ache"], correctAnswer: 2, explanation: "Boğaz ağrısı/yanması için 'sore throat' kalıbı kullanılır.", type: "vocabulary" },
    { question: "'Back' ne demek?", options: ["Ön", "Yan", "Sırt", "Ayak"], correctAnswer: 2, explanation: "Back = Sırt.", type: "vocabulary" },
    { question: "I fell down and my knee ___.", options: ["aches", "hurts", "pains", "sore"], correctAnswer: 1, explanation: "Acımak/İncinmek anlamında 'hurts' fiili sık kullanılır.", type: "grammar" },
    { question: "'Toothache' ne demek?", options: ["Kulak ağrısı", "Diş ağrısı", "Göz ağrısı", "Ayak ağrısı"], correctAnswer: 1, explanation: "Tooth (diş) + ache (ağrı).", type: "vocabulary" },
    { question: "She ___ a cold.", options: ["is", "has", "does", "feels"], correctAnswer: 1, explanation: "Hastalık belirtirken 'have/has' kullanılır: 'She has a cold'.", type: "grammar" },
    { question: "'Health' ne demek?", options: ["Hastalık", "Sağlık", "Zenginlik", "Mutluluk"], correctAnswer: 1, explanation: "Health = Sağlık.", type: "vocabulary" },
    { question: "I need to see a ___.", options: ["doctor", "teacher", "waiter", "driver"], correctAnswer: 0, explanation: "Hasta olan kişi doktora görünmelidir.", type: "vocabulary" },
    { question: "My ___ are tired.", options: ["leg", "legs", "eyes", "B ve C"], correctAnswer: 3, explanation: "Bacaklar veya gözler yorulabilir (çoğul kullanım).", type: "grammar" },
    { question: "'Shoulder' ne demek?", options: ["Dirsek", "Omuz", "Bilek", "Boyun"], correctAnswer: 1, explanation: "Shoulder = Omuz.", type: "vocabulary" },
    { question: "He ___ a high temperature.", options: ["is", "has", "feels", "does"], correctAnswer: 1, explanation: "Ateşi olmak: Have a temperature.", type: "grammar" },
    { question: "I ___ a headache.", options: ["is", "have", "am", "do"], correctAnswer: 1, explanation: "I have a headache.", type: "grammar" },
    { question: "'Medicine' ne demek?", options: ["Doktor", "İlaç", "Hemsire", "Eczane"], correctAnswer: 1, explanation: "Medicine = İlaç/Tıp.", type: "vocabulary" },
    { question: "Wash your ___ before eating.", options: ["hands", "feet", "ears", "hair"], correctAnswer: 0, explanation: "Yemekten önce eller yıkanmalıdır.", type: "vocabulary" },
    { question: "Does your arm ___?", options: ["hurt", "pains", "sore", "aching"], correctAnswer: 0, explanation: "Soru cümlesinde yalın fiil: hurt.", type: "grammar" },
    { question: "'Earache' ne demek?", options: ["Göz ağrısı", "Kulak ağrısı", "Burun ağrısı", "Diş ağrısı"], correctAnswer: 1, explanation: "Ear (kulak) + ache.", type: "vocabulary" },
    { question: "He has a broken ___.", options: ["leg", "hair", "eye", "ear"], correctAnswer: 0, explanation: "Kırılan şey genellikle kemik/bacak/koldur.", type: "vocabulary" },
    { question: "I feel ___.", options: ["bad", "ill", "sick", "Hepsi"], correctAnswer: 3, explanation: "Kötü/Hasta/Midesi bulanmış hissetmek.", type: "vocabulary" },
    { question: "Take a ___ to relax.", options: ["pill", "rest", "medicine", "B ve C"], correctAnswer: 1, explanation: "Dinlenmek: Take a rest.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Advice with 'Should' & Illnesses)
const u136q2: EnglishQuestion[] = [
    { question: "You ___ see a doctor.", options: ["should", "shouldn't", "are", "do"], correctAnswer: 0, explanation: "Tavsiye verirken 'should' kullanılır.", type: "grammar" },
    { question: "You ___ drink cold water if you have a sore throat.", options: ["should", "shouldn't", "must", "can"], correctAnswer: 1, explanation: "Öneri: Boğazın ağrıyorsa soğuk su içmemelisin.", type: "grammar" },
    { question: "He ___ take some medicine.", options: ["should", "shouldn't", "is", "don't"], correctAnswer: 0, explanation: "İlaç almalı.", type: "grammar" },
    { question: "I have the ___. I feel very weak.", options: ["flu", "cold", "cough", "sore"], correctAnswer: 0, explanation: "Flu = Grip (Ağır bir durum).", type: "vocabulary" },
    { question: "You should ___ in bed.", options: ["stay", "stays", "staying", "stayed"], correctAnswer: 0, explanation: "Should'dan sonra fiilin yalın hali (V1) gelir.", type: "grammar" },
    { question: "He has a bad ___.", options: ["cough", "coughs", "coughing", "coughed"], correctAnswer: 0, explanation: "Cough = Öksürük (İsim hali).", type: "vocabulary" },
    { question: "You shouldn't ___ junk food.", options: ["eat", "eats", "eating", "ate"], correctAnswer: 0, explanation: "Shouldn't + V1.", type: "grammar" },
    { question: "I have a ___ nose.", options: ["runny", "running", "ran", "runs"], correctAnswer: 0, explanation: "Runny nose = Akıntılı burun.", type: "vocabulary" },
    { question: "She should ___ more water.", options: ["drink", "drinks", "drinking", "drank"], correctAnswer: 0, explanation: "Drink (V1).", type: "grammar" },
    { question: "I am ___ to pollen.", options: ["allergic", "allergy", "allergies", "allergied"], correctAnswer: 0, explanation: "Allergic = Alerjik (Sıfat).", type: "vocabulary" },
    { question: "___ you feel better now?", options: ["Do", "Are", "Did", "Is"], correctAnswer: 0, explanation: "Do you feel better? (Daha iyi hissediyor musun?)", type: "grammar" },
    { question: "You should ___ the dentist.", options: ["visit", "visiting", "to visit", "visited"], correctAnswer: 0, explanation: "Should + V1.", type: "grammar" },
    { question: "He looks very ___.", options: ["pale", "white", "clear", "clean"], correctAnswer: 0, explanation: "Pale = Solgun (Hastalık belirtisi).", type: "vocabulary" },
    { question: "You ___ work too hard.", options: ["should", "shouldn't", "are", "am"], correctAnswer: 1, explanation: "Çok yorulmamalısın tavsiyesi.", type: "grammar" },
    { question: "I have an ___ in my eye.", options: ["infection", "infect", "infecting", "infected"], correctAnswer: 0, explanation: "Infection = Enfeksiyon.", type: "vocabulary" },
    { question: "You should ___ some tea with lemon.", options: ["have", "has", "having", "had"], correctAnswer: 0, explanation: "Have some tea.", type: "grammar" },
    { question: "Is it ___?", options: ["contagious", "contagion", "catching", "A ve C"], correctAnswer: 3, explanation: "Contagious/Catching = Bulaşıcı.", type: "vocabulary" },
    { question: "You should ___ plenty of rest.", options: ["get", "take", "do", "A ve B"], correctAnswer: 3, explanation: "Get rest / Take rest (Dinlenmek).", type: "grammar" },
    { question: "I can't stop ___.", options: ["sneezing", "sneeze", "sneezed", "sneezes"], correctAnswer: 0, explanation: "Stop + V-ing: 'Hapşırmayı durduramıyorum'.", type: "grammar" },
    { question: "They should ___ a specialist.", options: ["see", "seeing", "sees", "seen"], correctAnswer: 0, explanation: "See a specialist = Uzmana görünmek.", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Appointments & Prescriptions)
const u136q3: EnglishQuestion[] = [
    { question: "I'd like to make an ___ with Dr. Smith.", options: ["appointment", "booking", "meeting", "order"], correctAnswer: 0, explanation: "Doktor randevusu için 'appointment' kullanılır.", type: "vocabulary" },
    { question: "The doctor gave me a ___.", options: ["prescription", "recipe", "note", "paper"], correctAnswer: 0, explanation: "Prescription = Reçete.", type: "vocabulary" },
    { question: "I have been feeling dizzy ___ this morning.", options: ["for", "since", "at", "in"], correctAnswer: 1, explanation: "Morning (belirli bir an) olduğu için 'since' kullanılır.", type: "grammar" },
    { question: "Does it ___ when I press here?", options: ["hurt", "pains", "sore", "aches"], correctAnswer: 0, explanation: "Buraya bastırdığımda acıyor mu?", type: "grammar" },
    { question: "I need to go to the ___ for my medicine.", options: ["pharmacy", "chemist's", "drugstore", "Hepsi"], correctAnswer: 3, explanation: "Eczane için kullanılan kelimeler.", type: "vocabulary" },
    { question: "You need to take this ___ a day.", options: ["twice", "two times", "double", "A ve B"], correctAnswer: 3, explanation: "Twice / Two times a day = Günde iki kez.", type: "vocabulary" },
    { question: "I have a sharp ___ in my chest.", options: ["pain", "ache", "sore", "hurt"], correctAnswer: 0, explanation: "Vücudun herhangi bir yerindeki ağrı için 'pain' daha geneldir.", type: "vocabulary" },
    { question: "Are there any side ___?", options: ["effects", "affects", "results", "problems"], correctAnswer: 0, explanation: "Side effects = Yan etkiler.", type: "vocabulary" },
    { question: "She ___ her ankle while playing tennis.", options: ["sprained", "broken", "cut", "hurt"], correctAnswer: 0, explanation: "Sprain = Burkmak.", type: "vocabulary" },
    { question: "I need to ___ my blood pressure.", options: ["check", "see", "make", "take"], correctAnswer: 0, explanation: "Tansiyon ölçtürmek/kontrol ettirmek.", type: "vocabulary" },
    { question: "Take this medicine ___ food.", options: ["with", "before", "after", "Hepsi"], correctAnswer: 3, explanation: "Kullanım tarifleri.", type: "grammar" },
    { question: "The doctor said I have a ___.", options: ["fever", "cold", "flu", "Hepsi"], correctAnswer: 3, explanation: "Fever = Yüksek ateş.", type: "vocabulary" },
    { question: "I am ___ pain.", options: ["in", "at", "with", "on"], correctAnswer: 0, explanation: "Be in pain = Acı/ağrı içinde olmak.", type: "grammar" },
    { question: "Is the operation ___?", options: ["necessary", "need", "must", "done"], correctAnswer: 0, explanation: "Necessary = Gerekli.", type: "vocabulary" },
    { question: "I have lost my ___.", options: ["appetite", "hunger", "eat", "food"], correctAnswer: 0, explanation: "Appetite = İştah. 'İştahım kesildi'.", type: "vocabulary" },
    { question: "The wound is ___.", options: ["healing", "fixing", "improving", "doing"], correctAnswer: 0, explanation: "Heal = İyileşmek (yara için).", type: "vocabulary" },
    { question: "I'm going to ___ a blood test.", options: ["have", "do", "make", "take"], correctAnswer: 0, explanation: "Blood test = Kan tahlili yaptırmak.", type: "grammar" },
    { question: "How long has it been ___ you?", options: ["bothering", "hurting", "paining", "A ve B"], correctAnswer: 3, explanation: "Bother = Rahatsız etmek.", type: "vocabulary" },
    { question: "I feel a bit ___.", options: ["nauseous", "sick", "vomit", "A ve B"], correctAnswer: 3, explanation: "Nauseous/Sick = Midesi bulanmış.", type: "vocabulary" },
    { question: "She is ___ of her injuries.", options: ["recovering", "healing", "fixing", "doing"], correctAnswer: 0, explanation: "Recover = İyileşmek/Toparlanmak.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Emergencies & Nuance)
const u136q4: EnglishQuestion[] = [
    { question: "A: What's the matter? B: I ___ very well.", options: ["don't feel", "am not feel", "doesn't feel", "not feel"], correctAnswer: 0, explanation: "I don't feel very well = Pek iyi hissetmiyorum.", type: "grammar" },
    { question: "A: Where does it hurt? B: ___.", options: ["In my back", "Right here", "It's a pain", "A ve B"], correctAnswer: 3, explanation: "Konum belirtme.", type: "grammar" },
    { question: "A: Are you allergic to anything? B: Yes, ___.", options: ["penicillin", "to cats", "nuts", "Hepsi"], correctAnswer: 3, explanation: "Alerjenler.", type: "vocabulary" },
    { question: "Call an ___! It's an emergency.", options: ["ambulance", "doctor", "police", "truck"], correctAnswer: 0, explanation: "Ambulans çağırmak.", type: "vocabulary" },
    { question: "I'm feeling a bit ___ the weather today.", options: ["under", "on", "above", "behind"], correctAnswer: 0, explanation: "Feeling under the weather = Biraz halsiz/hasta hissetmek (deyim).", type: "vocabulary" },
    { question: "You look like a ghost! Are you ___?", options: ["okay", "faint", "sick", "A ve C"], correctAnswer: 3, explanation: "Ghost = Hayalet gibi solgun.", type: "vocabulary" },
    { question: "A: Get well soon! B: ___.", options: ["Thank you", "You too", "I will", "Good bye"], correctAnswer: 0, explanation: "Geçmiş olsun dileğine teşekkür edilir.", type: "vocabulary" },
    { question: "I think I'm coming ___ with a cold.", options: ["down", "up", "with", "on"], correctAnswer: 0, explanation: "Come down with = Hastalığa yakalanmak (deyim).", type: "vocabulary" },
    { question: "He ___ consciousness for a minute.", options: ["lost", "dropped", "fell", "missed"], correctAnswer: 0, explanation: "Lose consciousness = Bilincini yitirmek.", type: "vocabulary" },
    { question: "Keep it clean to prevent ___.", options: ["infection", "infect", "infecting", "infected"], correctAnswer: 0, explanation: "Infection = Enfeksiyon.", type: "vocabulary" },
    { question: "I've got a ___ nose and a dry ___.", options: ["runny / cough", "running / cough", "ran / coughs", "A ve B"], correctAnswer: 3, explanation: "Runny nose ve Dry cough (Kuru öksürük).", type: "vocabulary" },
    { question: "Put a ___ on that cut.", options: ["plaster", "bandage", "dressing", "Hepsi"], correctAnswer: 3, explanation: "Plaster (Yara bandı) veya Bandage (Sargı).", type: "vocabulary" },
    { question: "A: How are you feeling today? B: ___ better, thanks.", options: ["Much", "Very", "So", "More"], correctAnswer: 0, explanation: "Much better = Çok daha iyi.", type: "grammar" },
    { question: "You ___ stay at home and rest.", options: ["ought to", "should", "had better", "Hepsi"], correctAnswer: 3, explanation: "Tavsiye kalıplarının hepsi uygundur.", type: "grammar" },
    { question: "My eyes are ___. I think I need glasses.", options: ["itchy", "blurry", "red", "Hepsi"], correctAnswer: 3, explanation: "Göz şikayetleri.", type: "vocabulary" },
    { question: "The doctor ___ my pulse.", options: ["took", "made", "checked", "A ve C"], correctAnswer: 3, explanation: "Nabız ölçmek/kontrol etmek.", type: "vocabulary" },
    { question: "I need to ___ down for a while.", options: ["lie", "lay", "laying", "lying"], correctAnswer: 0, explanation: "Lie down = Uzanmak.", type: "grammar" },
    { question: "Is she ___ of any medications?", options: ["on", "with", "at", "taking"], correctAnswer: 0, explanation: "'Be on medication' = İlaç kullanıyor olmak.", type: "grammar" },
    { question: "Take a deep ___.", options: ["breath", "breathe", "breathing", "breather"], correctAnswer: 0, explanation: "Take a breath = Nefes al (İsim hali).", type: "vocabulary" },
    { question: "Stay ___!", options: ["healthy", "health", "healthier", "healths"], correctAnswer: 0, explanation: "Stay healthy = Sağlıklı kal.", type: "vocabulary" }
];

// Unit 137: Technology & Internet - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Devices & Basic actions)
const u137q1: EnglishQuestion[] = [
    { question: "I use a ___ to type letters.", options: ["mouse", "keyboard", "screen", "printer"], correctAnswer: 1, explanation: "Keyboard = Klavye. Yazı yazmak için kullanılır.", type: "vocabulary" },
    { question: "'Screen' ne demek?", options: ["Klavye", "Ekran", "Fare", "Kablo"], correctAnswer: 1, explanation: "Screen = Ekran/Monitör.", type: "vocabulary" },
    { question: "You need to ___ the link.", options: ["click", "write", "read", "type"], correctAnswer: 0, explanation: "Bağlantının üzerine 'tıklamak' (click) gerekir.", type: "grammar" },
    { question: "'Laptop' ne demek?", options: ["Masaüstü bilgisayar", "Dizüstü bilgisayar", "Tablet", "Telefon"], correctAnswer: 1, explanation: "Laptop = Dizüstü bilgisayar.", type: "vocabulary" },
    { question: "My phone ___ is empty.", options: ["battery", "screen", "button", "case"], correctAnswer: 0, explanation: "Şarjın bitmesi 'battery is empty/dead' ile ifade edilir.", type: "vocabulary" },
    { question: "'Mouse' ne demek?", options: ["Ekran", "Fare", "Hoparlör", "Kamera"], correctAnswer: 1, explanation: "Mouse = Fare.", type: "vocabulary" },
    { question: "I want to ___ a photo online.", options: ["post", "write", "read", "do"], correctAnswer: 0, explanation: "İnternette fotoğraf paylaşmak 'post' eylemiyle ifade edilir.", type: "grammar" },
    { question: "'Printer' ne demek?", options: ["Tarayıcı", "Yazıcı", "Ekran", "Hoparlör"], correctAnswer: 1, explanation: "Printer = Yazıcı.", type: "vocabulary" },
    { question: "The ___ is too slow.", options: ["internet", "computer", "connection", "Hepsi"], correctAnswer: 3, explanation: "İnternet, bilgisayar veya bağlantı (connection) yavaş olabilir.", type: "vocabulary" },
    { question: "___ you have a smartphone?", options: ["Do", "Are", "Is", "Does"], correctAnswer: 0, explanation: "Soru cümlesi 'Do you have...?' yapısıyla kurulur.", type: "grammar" },
    { question: "'Button' ne demek?", options: ["Ekran", "Tuş/Düğme", "Kablo", "Fare"], correctAnswer: 1, explanation: "Button = Tuş/Düğme.", type: "vocabulary" },
    { question: "I need to ___ my phone.", options: ["charge", "refill", "fill", "clean"], correctAnswer: 0, explanation: "Charge phone = Telefonu şarj etmek.", type: "vocabulary" },
    { question: "The ___ is high quality.", options: ["sound", "video", "picture", "Hepsi"], correctAnswer: 3, explanation: "Ses, video veya görüntü kalitesi.", type: "vocabulary" },
    { question: "'Speaker' ne demek?", options: ["Mikrofon", "Hoparlör", "Ekran", "Yazıcı"], correctAnswer: 1, explanation: "Speaker = Hoparlör.", type: "vocabulary" },
    { question: "You should ___ your password regularly.", options: ["change", "keep", "make", "delete"], correctAnswer: 0, explanation: "Şifre (password) düzenli olarak değiştirilmelidir.", type: "grammar" },
    { question: "I use ___ every day.", options: ["social media", "the internet", "apps", "Hepsi"], correctAnswer: 3, explanation: "Modern teknoloji kullanımı.", type: "vocabulary" },
    { question: "'Delete' ne demek?", options: ["Kaydetmek", "Silmek", "Kopyalamak", "Yapıştırmak"], correctAnswer: 1, explanation: "Delete = Silmek.", type: "vocabulary" },
    { question: "Is your laptop ___?", options: ["new", "old", "fast", "Hepsi"], correctAnswer: 3, explanation: "Cihaz özellikleri.", type: "vocabulary" },
    { question: "I often ___ videos on YouTube.", options: ["watch", "see", "look", "listen"], correctAnswer: 0, explanation: "Watch videos = Video izlemek.", type: "grammar" },
    { question: "'Website' ne demek?", options: ["İnternet sitesi", "Bilgisayar", "Ekran", "Klavye"], correctAnswer: 0, explanation: "Website = İnternet sitesi/Web sitesi.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Internet terms & 'How to')
const u137q2: EnglishQuestion[] = [
    { question: "How do I ___ this file?", options: ["download", "upload", "open", "Hepsi"], correctAnswer: 3, explanation: "Dosya indirmek (download), yüklemek (upload) veya açmak (open).", type: "grammar" },
    { question: "You need an ___ to log in.", options: ["account", "password", "email", "Hepsi"], correctAnswer: 3, explanation: "Giriş yapmak için hesap, şifre ve e-posta gereklidir.", type: "vocabulary" },
    { question: "I'll ___ the documents to you.", options: ["email", "send", "post", "A ve B"], correctAnswer: 3, explanation: "Email/Send = E-posta ile göndermek.", type: "grammar" },
    { question: "The Wi-Fi ___ is '123456'.", options: ["name", "code", "password", "key"], correctAnswer: 2, explanation: "Wi-Fi şifresi: Wi-Fi password.", type: "vocabulary" },
    { question: "Can you ___ more photos on Instagram?", options: ["post", "share", "upload", "Hepsi"], correctAnswer: 3, explanation: "Paylaşım yapmak.", type: "vocabulary" },
    { question: "I need to ___ the software.", options: ["update", "new", "fix", "clean"], correctAnswer: 0, explanation: "Update = Güncellemek.", type: "vocabulary" },
    { question: "Don't ___ on suspicious links.", options: ["click", "press", "touch", "go"], correctAnswer: 0, explanation: "Click on links = Bağlantılara tıklamak.", type: "grammar" },
    { question: "'User' ne demek?", options: ["Yönetici", "Kullanıcı", "Müşteri", "Sahip"], correctAnswer: 1, explanation: "User = Kullanıcı.", type: "vocabulary" },
    { question: "My computer is ___.", options: ["broken", "not working", "crashing", "Hepsi"], correctAnswer: 3, explanation: "Bilgisayar sorunları.", type: "vocabulary" },
    { question: "You should ___ your work often.", options: ["save", "keep", "hold", "make"], correctAnswer: 0, explanation: "Save = Kaydetmek.", type: "grammar" },
    { question: "How many ___ do you have on Twitter?", options: ["friends", "followers", "users", "people"], correctAnswer: 1, explanation: "Followers = Takipçiler.", type: "vocabulary" },
    { question: "I use a ___ to find information.", options: ["search engine", "website", "blog", "A ve B"], correctAnswer: 3, explanation: "Search engine = Arama motoru (Google vb.).", type: "vocabulary" },
    { question: "'Icon' ne demek?", options: ["Resim", "Simge/İkon", "Dosya", "Klasör"], correctAnswer: 1, explanation: "Icon = Simge.", type: "vocabulary" },
    { question: "Is this laptop ___ with Mac?", options: ["compatible", "good", "ready", "match"], correctAnswer: 0, explanation: "Compatible = Uyumlu.", type: "vocabulary" },
    { question: "You can ___ the settings.", options: ["change", "fix", "adjust", "A ve C"], correctAnswer: 3, explanation: "Adjust settings = Ayarları düzenlemek/ayarlamak.", type: "vocabulary" },
    { question: "I have a lot of ___ on my phone.", options: ["apps", "applications", "games", "Hepsi"], correctAnswer: 3, explanation: "Apps = Uygulamalar.", type: "vocabulary" },
    { question: "Does it have a ___?", options: ["touchscreen", "keyboard", "camera", "Hepsi"], correctAnswer: 3, explanation: "Touchscreen = Dokunmatik ekran.", type: "vocabulary" },
    { question: "I'm ___ for a new smartphone.", options: ["looking", "searching", "buying", "A ve B"], correctAnswer: 3, explanation: "Searching/Looking for = Aramak.", type: "grammar" },
    { question: "'Folder' ne demek?", options: ["Dosya", "Klasör", "Sayfa", "Belge"], correctAnswer: 1, explanation: "Folder = Klasör.", type: "vocabulary" },
    { question: "You should ___ the computer before you leave.", options: ["turn off", "shut down", "close", "A ve B"], correctAnswer: 3, explanation: "Turn off / Shut down = Kapatmak.", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Technical issues & Differences)
const u137q3: EnglishQuestion[] = [
    { question: "My computer keeps ___.", options: ["freezing", "staying", "stopping", "going"], correctAnswer: 0, explanation: "Freeze = Donmak (bilgisayar için).", type: "vocabulary" },
    { question: "The file is too ___ to send by email.", options: ["big", "large", "heavy", "A ve B"], correctAnswer: 3, explanation: "Big/Large = Büyük (dosya boyutu).", type: "vocabulary" },
    { question: "You need to ___ your identity.", options: ["verify", "check", "see", "show"], correctAnswer: 0, explanation: "Verify = Doğrulamak.", type: "vocabulary" },
    { question: "There's a ___ in the system.", options: ["bug", "mistake", "error", "A ve C"], correctAnswer: 3, explanation: "Bug = Yazılım hatası.", type: "vocabulary" },
    { question: "This device is ___.", options: ["wireless", "plugged in", "battery-powered", "Hepsi"], correctAnswer: 3, explanation: "Wireless = Kablosuz.", type: "vocabulary" },
    { question: "I need to ___ some space on my drive.", options: ["free up", "make", "clear", "Hepsi"], correctAnswer: 3, explanation: "Free up space = Yer açmak.", type: "vocabulary" },
    { question: "Are you using the ___ version?", options: ["latest", "last", "newest", "A ve C"], correctAnswer: 3, explanation: "Latest/Newest = En yeni versiyon.", type: "vocabulary" },
    { question: "The ___ is not responding.", options: ["app", "system", "program", "Hepsi"], correctAnswer: 3, explanation: "Not responding = Yanıt vermiyor.", type: "vocabulary" },
    { question: "I've ___ my password.", options: ["forgotten", "lost", "missed", "done"], correctAnswer: 0, explanation: "Forget password = Şifreyi unutmak.", type: "grammar" },
    { question: "You should ___ your data.", options: ["backup", "save", "copy", "A ve B"], correctAnswer: 3, explanation: "Backup = Yedeklemek.", type: "vocabulary" },
    { question: "Is this website ___?", options: ["secure", "safe", "ready", "A ve B"], correctAnswer: 3, explanation: "Secure = Güvenli.", type: "vocabulary" },
    { question: "I can't ___ to the internet.", options: ["connect", "go", "get", "join"], correctAnswer: 0, explanation: "Connect to the internet = İnternete bağlanmak.", type: "grammar" },
    { question: "The ___ is blurry.", options: ["image", "picture", "video", "Hepsi"], correctAnswer: 3, explanation: "Blurry = Bulanık.", type: "vocabulary" },
    { question: "I've ___ the wrong button.", options: ["pressed", "clicked", "touched", "A ve B"], correctAnswer: 3, explanation: "Press a button = Tuşa basmak.", type: "grammar" },
    { question: "Is it ___ or hardware?", options: ["software", "program", "data", "A ve B"], correctAnswer: 0, explanation: "Software = Yazılım.", type: "vocabulary" },
    { question: "I'm out of ___.", options: ["data", "internet", "space", "Hepsi"], correctAnswer: 3, explanation: "Veri paketinin veya alanın bitmesi.", type: "vocabulary" },
    { question: "Can you ___ the volume?", options: ["increase", "lower", "adjust", "Hepsi"], correctAnswer: 3, explanation: "Sesi artırmak (increase) veya azaltmak (lower).", type: "vocabulary" },
    { question: "The ___ is low.", options: ["signal", "battery", "volume", "Hepsi"], correctAnswer: 3, explanation: "Signal = Sinyal.", type: "vocabulary" },
    { question: "I need to ___ this document.", options: ["print", "scan", "edit", "Hepsi"], correctAnswer: 3, explanation: "Print (yazdırmak), Scan (taramak), Edit (düzenlemek).", type: "vocabulary" },
    { question: "He is a ___ expert.", options: ["security", "tech", "computer", "Hepsi"], correctAnswer: 3, explanation: "Expert = Uzman.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Real-world scenarios & Idioms)
const u137q4: EnglishQuestion[] = [
    { question: "A: My internet is down. B: Have you tried ___ the router?", options: ["restarting", "turning off", "resetting", "Hepsi"], correctAnswer: 3, explanation: "Down = Çalışmıyor/Kesik.", type: "vocabulary" },
    { question: "A: How do I save this? B: Just ___ on the disk icon.", options: ["click", "double-click", "press", "A ve B"], correctAnswer: 3, explanation: "Click = Tıklamak.", type: "grammar" },
    { question: "I'm not very ___. Can you help me?", options: ["tech-savvy", "teched", "technical", "good at tech"], correctAnswer: 0, explanation: "Tech-savvy = Teknolojiden iyi anlayan (deyim).", type: "vocabulary" },
    { question: "A: Did you see my post? B: Yes, I ___ it.", options: ["liked", "shared", "commented on", "Hepsi"], correctAnswer: 3, explanation: "Sosyal medya etkileşimleri.", type: "vocabulary" },
    { question: "It's a ___ of cake to use this app.", options: ["piece", "slice", "bit", "part"], correctAnswer: 0, explanation: "A piece of cake = Çok kolay (deyim).", type: "vocabulary" },
    { question: "I'm ___ on the internet.", options: ["surfing", "browsing", "going", "A ve B"], correctAnswer: 3, explanation: "Surfing/Browsing the internet = İnternette gezinmek.", type: "vocabulary" },
    { question: "A: Is it expensive? B: No, it's ___.", options: ["affordable", "cheap", "on sale", "Hepsi"], correctAnswer: 3, explanation: "Affordable = Karşılanabilir/Uygun fiyatlı.", type: "vocabulary" },
    { question: "Don't believe everything you ___ online.", options: ["read", "see", "hear", "Hepsi"], correctAnswer: 3, explanation: "İnternetteki her şeye inanma.", type: "grammar" },
    { question: "I need to ___ from social media for a while.", options: ["unplug", "disconnect", "go away", "A ve B"], correctAnswer: 0, explanation: "Unplug = Fişi çekmek / Bağlantıyı kesmek (deyimsel).", type: "vocabulary" },
    { question: "The computer is ___ at 100%.", options: ["loading", "done", "ready", "finished"], correctAnswer: 0, explanation: "Loading = Yükleniyor.", type: "vocabulary" },
    { question: "You can find the link in my ___.", options: ["bio", "profile", "page", "A ve B"], correctAnswer: 3, explanation: "Bio/Profile = Profil/Biyografi.", type: "vocabulary" },
    { question: "I'm ___ a webinar tonight.", options: ["hosting", "joining", "watching", "Hepsi"], correctAnswer: 3, explanation: "Webinar = İnternet semineri.", type: "vocabulary" },
    { question: "Is there any ___ storage?", options: ["cloud", "online", "external", "Hepsi"], correctAnswer: 3, explanation: "Cloud storage = Bulut depolama.", type: "vocabulary" },
    { question: "He is always ___ on his phone.", options: ["glued", "stuck", "fixed", "attached"], correctAnswer: 0, explanation: "Glued to the phone = Telefona yapışık olmak (deyim).", type: "vocabulary" },
    { question: "I've ___ my screen.", options: ["cracked", "broken", "scratched", "Hepsi"], correctAnswer: 3, explanation: "Cracked screen = Çatlamış ekran.", type: "vocabulary" },
    { question: "You should ___ your cookies.", options: ["clear", "delete", "clean", "Hepsi"], correctAnswer: 3, explanation: "Clear cookies = Çerezleri temizlemek.", type: "vocabulary" },
    { question: "The ___ is amazing.", options: ["user interface", "UI", "design", "Hepsi"], correctAnswer: 3, explanation: "User Interface (UI) = Kullanıcı arayüzü.", type: "vocabulary" },
    { question: "I'll ___ you the link.", options: ["DM", "text", "send", "Hepsi"], correctAnswer: 3, explanation: "DM (Direct Message) = Özel mesaj atmak (Instagram vb.).", type: "vocabulary" },
    { question: "The site is ___.", options: ["under construction", "being fixed", "down", "Hepsi"], correctAnswer: 3, explanation: "Site durumu.", type: "vocabulary" },
    { question: "Modern technology is ___.", options: ["essential", "helpful", "complex", "Hepsi"], correctAnswer: 3, explanation: "Teknoloji yorumu.", type: "vocabulary" }
];

// Unit 138: Work & Careers - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Jobs & Simple Questions)
const u138q1: EnglishQuestion[] = [
    { question: "What ___ you do for a living?", options: ["do", "are", "is", "does"], correctAnswer: 0, explanation: "'Sizin mesleğiniz nedir?' sorusu 'What DO you do?' şeklinde sorulur.", type: "grammar" },
    { question: "'Nurse' ne demek?", options: ["Doktor", "Hemşire", "Mühendis", "Öğretmen"], correctAnswer: 1, explanation: "Nurse = Hemşire.", type: "vocabulary" },
    { question: "He works ___ a hospital.", options: ["in", "at", "on", "to"], correctAnswer: 0, explanation: "Bina içindeki çalışma yerleri için 'in' veya 'at' kullanılır. Hastane için 'in a hospital' yaygındır.", type: "grammar" },
    { question: "'Engineer' ne demek?", options: ["Mimar", "Mühendis", "İşçi", "Memur"], correctAnswer: 1, explanation: "Engineer = Mühendis.", type: "vocabulary" },
    { question: "She is ___ English teacher.", options: ["a", "an", "the", "some"], correctAnswer: 1, explanation: "E-sesiyle başladığı için 'an' gelir.", type: "grammar" },
    { question: "'Full-time' ne demek?", options: ["Yarım gün", "Tam zamanlı", "Geçici", "Ücretli"], correctAnswer: 1, explanation: "Full-time = Haftalık tam çalışma saati (genelde 40 saat).", type: "vocabulary" },
    { question: "I want to ___ a doctor.", options: ["be", "become", "do", "A ve B"], correctAnswer: 3, explanation: "Be a doctor / Become a doctor (Doktor olmak).", type: "grammar" },
    { question: "'Salary' ne demek?", options: ["Maaş", "İş", "Mesai", "Sigorta"], correctAnswer: 0, explanation: "Salary = Aylık/Yıllık maaş.", type: "vocabulary" },
    { question: "They work ___ 9 to 5.", options: ["from", "at", "between", "on"], correctAnswer: 0, explanation: "Work from [X] to [Y] (Şu saatten şu saate kadar çalışmak).", type: "grammar" },
    { question: "'Office' ne demek?", options: ["Atölye", "Ofis/Büro", "Fabrika", "Dükkan"], correctAnswer: 1, explanation: "Office = Ofis.", type: "vocabulary" },
    { question: "He is looking for a ___.", options: ["job", "work", "worker", "career"], correctAnswer: 0, explanation: "Look for a job = İş aramak.", type: "vocabulary" },
    { question: "My father is ___.", options: ["retired", "retirement", "retire", "retires"], correctAnswer: 0, explanation: "Retired = Emekli.", type: "vocabulary" },
    { question: "'Actor' ne demek?", options: ["Yönetmen", "Oyuncu", "Yazar", "Şarkıcı"], correctAnswer: 1, explanation: "Actor = Erkek oyuncu (bazen kadınlar için de kullanılır).", type: "vocabulary" },
    { question: "Do you like your ___?", options: ["boss", "work", "colleagues", "Hepsi"], correctAnswer: 3, explanation: "Patron, iş veya meslektaşlar.", type: "vocabulary" },
    { question: "She works in an ___.", options: ["office", "shop", "airport", "A ve C"], correctAnswer: 3, explanation: "Sesli harfle başlayan kelimelerden (an) önce kullanılır.", type: "grammar" },
    { question: "'Part-time' ne demek?", options: ["Tam zamanlı", "Yarı zamanlı", "Haftalık", "Yıllık"], correctAnswer: 1, explanation: "Part-time = Haftanın belirli günlerinde/saatlerinde çalışma.", type: "vocabulary" },
    { question: "I go to work ___ bus.", options: ["with", "by", "on", "at"], correctAnswer: 1, explanation: "Ulaşım araçlarında 'by' kullanılır.", type: "grammar" },
    { question: "'Chef' ne demek?", options: ["Şef/Aşçı", "Garson", "Müdür", "Kasiyer"], correctAnswer: 0, explanation: "Chef = Profesyonel aşçı.", type: "vocabulary" },
    { question: "He ___ a uniform at work.", options: ["wears", "puts", "does", "makes"], correctAnswer: 0, explanation: "Wear a uniform = Üniforma giymek.", type: "grammar" },
    { question: "'Colleague' ne demek?", options: ["Patron", "Meslektaş", "Müşteri", "Rakip"], correctAnswer: 1, explanation: "Colleague = İş arkadaşı / Meslektaş.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Office Routines & Verbs)
const u138q2: EnglishQuestion[] = [
    { question: "I need to ___ this meeting.", options: ["join", "attend", "go to", "Hepsi"], correctAnswer: 3, explanation: "Toplantıya katılmak için attend, join veya go to kullanılabilir.", type: "vocabulary" },
    { question: "She ___ reports every Friday.", options: ["writes", "is write", "writing", "wrote"], correctAnswer: 0, explanation: "Rutin işlerden bahsederken Geniş Zaman (Present Simple) kullanılır.", type: "grammar" },
    { question: "Can you ___ this document?", options: ["print", "sign", "send", "Hepsi"], correctAnswer: 3, explanation: "Yazdırmak, imzalamak (sign) veya göndermek.", type: "vocabulary" },
    { question: "I'm having a ___ with my boss.", options: ["meeting", "talk", "chat", "Hepsi"], correctAnswer: 3, explanation: "Görüşme/Toplantı.", type: "vocabulary" },
    { question: "We work ___ a multinational company.", options: ["for", "at", "in", "Hepsi"], correctAnswer: 3, explanation: "Bir şirket için (for) veya bir şirkette (at/in) çalışmak.", type: "grammar" },
    { question: "I need to check my ___.", options: ["emails", "messages", "schedule", "Hepsi"], correctAnswer: 3, explanation: "E-postalar veya program (schedule).", type: "vocabulary" },
    { question: "He is in ___ of the marketing team.", options: ["charge", "leader", "boss", "head"], correctAnswer: 0, explanation: "In charge of = ...'dan sorumlu / ...'nın başında.", type: "vocabulary" },
    { question: "'Deadline' ne demek?", options: ["Başlangıç", "Son teslim tarihi", "Tatil", "Maaş günü"], correctAnswer: 1, explanation: "Deadline = Bir işin bitirilmesi gereken son zaman dilimi.", type: "vocabulary" },
    { question: "Do you have to work ___?", options: ["overtime", "extra", "more", "A ve B"], correctAnswer: 0, explanation: "Work overtime = Fazla mesai yapmak.", type: "vocabulary" },
    { question: "I'm ___ a break right now.", options: ["having", "taking", "doing", "A ve B"], correctAnswer: 3, explanation: "Have/Take a break = Mola vermek.", type: "grammar" },
    { question: "She is very ___ at her job.", options: ["good", "well", "skilled", "A ve C"], correctAnswer: 3, explanation: "İşinde iyi veya yetenekli.", type: "vocabulary" },
    { question: "I get ___ on the 1st of every month.", options: ["paid", "pay", "payment", "money"], correctAnswer: 0, explanation: "Get paid = Maaş almak / Ödeme almak.", type: "grammar" },
    { question: "He ___ his own business.", options: ["has", "runs", "does", "A ve B"], correctAnswer: 3, explanation: "Run a business = İşletme yönetmek / Kendi işinin sahibi olmak.", type: "vocabulary" },
    { question: "Where is the ___ room?", options: ["conference", "meeting", "break", "Hepsi"], correctAnswer: 3, explanation: "Ofis bölümleri.", type: "vocabulary" },
    { question: "I need to ___ a phone call.", options: ["make", "do", "take", "A ve C"], correctAnswer: 3, explanation: "Make/Take a phone call = Telefon görüşmesi yapmak.", type: "grammar" },
    { question: "They are ___ for a new manager.", options: ["hiring", "looking", "taking", "A ve B"], correctAnswer: 3, explanation: "Hire = İşe almak.", type: "vocabulary" },
    { question: "Do you ___ a lot of people at work?", options: ["meet", "see", "talk to", "Hepsi"], correctAnswer: 3, explanation: "İnsanlarla tanışmak/konuşmak.", type: "vocabulary" },
    { question: "I've been working here ___ three years.", options: ["since", "for", "at", "in"], correctAnswer: 1, explanation: "Süre belirtirken 'for' kullanılır.", type: "grammar" },
    { question: "She wants to ___ her own company.", options: ["start", "found", "build", "Hepsi"], correctAnswer: 3, explanation: "Kendi şirketini kurmak.", type: "vocabulary" },
    { question: "Is the ___ high in this area?", options: ["unemployment", "job", "work", "salary"], correctAnswer: 0, explanation: "Unemployment = İşsizlik.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Interviews & Skills)
const u138q3: EnglishQuestion[] = [
    { question: "I have a job ___ tomorrow morning.", options: ["interview", "meeting", "talk", "test"], correctAnswer: 0, explanation: "Job interview = İş görüşmesi.", type: "vocabulary" },
    { question: "You should send your ___ to the HR department.", options: ["CV", "resume", "papers", "A ve B"], correctAnswer: 3, explanation: "CV (Curriculum Vitae) veya Resume (Özgeçmiş).", type: "vocabulary" },
    { question: "What are your main ___?", options: ["strengths", "skills", "abilities", "Hepsi"], correctAnswer: 3, explanation: "Güçlü yönler (strengths) veya yetenekler.", type: "vocabulary" },
    { question: "Why do you want to ___ this company?", options: ["join", "work", "enter", "build"], correctAnswer: 0, explanation: "Join a company = Bir şirkete katılmak/girmek.", type: "vocabulary" },
    { question: "They offered him a very good ___ package.", options: ["benefit", "salary", "work", "A ve B"], correctAnswer: 3, explanation: "Benefit package = Maaş dışı yan haklar (sigorta, yemek vb.).", type: "vocabulary" },
    { question: "I graduated ___ university last year.", options: ["from", "at", "in", "to"], correctAnswer: 0, explanation: "Graduate from = ...'dan mezun olmak.", type: "grammar" },
    { question: "I have five years of ___ in this field.", options: ["experience", "work", "job", "time"], correctAnswer: 0, explanation: "Work experience = İş tecrübesi.", type: "vocabulary" },
    { question: "She was ___ promoted to manager.", options: ["recent", "recently", "just", "B ve C"], correctAnswer: 3, explanation: "Recently / Just = Az önce, yakın zamanda terfi etti.", type: "grammar" },
    { question: "Is the position still ___?", options: ["open", "available", "empty", "A ve B"], correctAnswer: 3, explanation: "Pozisyonun açık/müsait olması.", type: "vocabulary" },
    { question: "I'd like to ___ for the manager position.", options: ["apply", "ask", "request", "do"], correctAnswer: 0, explanation: "Apply for = ... için başvurmak.", type: "vocabulary" },
    { question: "He has excellent communication ___.", options: ["skills", "talents", "ways", "talks"], correctAnswer: 0, explanation: "Communication skills = İletişim becerileri.", type: "vocabulary" },
    { question: "What is your current ___?", options: ["occupation", "job", "profession", "Hepsi"], correctAnswer: 3, explanation: "Mevcut mesleğiniz nedir? (Resmi sorular).", type: "vocabulary" },
    { question: "The company ___ in 2005.", options: ["was founded", "started", "opened", "Hepsi"], correctAnswer: 3, explanation: "Şirketin kurulması.", type: "grammar" },
    { question: "We need someone who can work ___ pressure.", options: ["under", "at", "in", "with"], correctAnswer: 0, explanation: "Work under pressure = Baskı altında çalışmak.", type: "grammar" },
    { question: "Do you have any ___?", options: ["references", "referees", "letters", "A ve B"], correctAnswer: 3, explanation: "References = Referanslar.", type: "vocabulary" },
    { question: "I'm very ___ and hardworking.", options: ["punctual", "late", "lazy", "reliable"], correctAnswer: 0, explanation: "Punctual = Dakik. İşe girişlerde önemli bir sıfat.", type: "vocabulary" },
    { question: "She decided to ___ from her job.", options: ["quit", "resign", "leave", "Hepsi"], correctAnswer: 3, explanation: "İstifa etmek (resign) veya bırakmak (quit).", type: "vocabulary" },
    { question: "What is the ___ salary for this role?", options: ["starting", "base", "average", "Hepsi"], correctAnswer: 3, explanation: "Başlangıç, temel veya ortalama maaş.", type: "vocabulary" },
    { question: "We will ___ you by the end of the week.", options: ["contact", "call", "email", "Hepsi"], correctAnswer: 3, explanation: "Sizinle iletişime geçeceğiz.", type: "vocabulary" },
    { question: "It was a very ___ interview.", options: ["tough", "hard", "difficult", "Hepsi"], correctAnswer: 3, explanation: "Zorlu görüşme.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Workplace Nuance & Idioms)
const u138q4: EnglishQuestion[] = [
    { question: "A: How is the new job? B: It's great, but I'm ___ my head in work.", options: ["over", "under", "in", "above"], correctAnswer: 0, explanation: "Over my head = İşlerin başından aşkın olması / Çok yoğun olmak.", type: "vocabulary" },
    { question: "Unfortunately, he was ___ last month.", options: ["fired", "laid off", "dismissed", "Hepsi"], correctAnswer: 3, explanation: "İşten çıkarılmak (fired: kovulmak, laid off: ekonomik sebeplerle çıkarılmak).", type: "vocabulary" },
    { question: "I need to learn the ___ of the trade.", options: ["ropes", "ways", "rules", "lines"], correctAnswer: 0, explanation: "Learn the ropes = Bir işin inceliklerini öğrenmek (deyim).", type: "vocabulary" },
    { question: "A: Can we talk? B: Sorry, I'm ___ the middle of something.", options: ["in", "at", "on", "into"], correctAnswer: 0, explanation: "In the middle of something = Bir işin ortasında/meşgul olmak.", type: "grammar" },
    { question: "He is a real ___.", options: ["workaholic", "worker", "workmate", "A ve C"], correctAnswer: 0, explanation: "Workaholic = İşkolik.", type: "vocabulary" },
    { question: "Let's ___ it a day. We've done enough.", options: ["call", "make", "do", "say"], correctAnswer: 0, explanation: "Call it a day = Bugünlük bu kadar yeter (çalışmayı bitirmek).", type: "vocabulary" },
    { question: "She is climbing the corporate ___.", options: ["ladder", "stairs", "hill", "wall"], correctAnswer: 0, explanation: "Corporate ladder = Kariyer basamakları.", type: "vocabulary" },
    { question: "I have to ___ early today.", options: ["clock out", "leave", "finish", "Hepsi"], correctAnswer: 3, explanation: "Clock out = Mesai bitiminde kaydını yaptırıp çıkmak.", type: "vocabulary" },
    { question: "The company provides a lot of ___.", options: ["perks", "benefits", "extras", "A ve B"], correctAnswer: 3, explanation: "Perks = Yan haklar / İş avantajları.", type: "vocabulary" },
    { question: "A: Where is Tom? B: He is on ___ leave.", options: ["sick", "annual", "maternity", "Hepsi"], correctAnswer: 0, explanation: "On sick leave = Hastalık izninde.", type: "vocabulary" },
    { question: "I'm thinking of ___ a career change.", options: ["making", "doing", "starting", "taking"], correctAnswer: 0, explanation: "Make a career change = Kariyer değişikliği yapmak.", type: "grammar" },
    { question: "He is the breadwinner of the ___.", options: ["family", "house", "work", "team"], correctAnswer: 0, explanation: "Breadwinner = Evi geçindiren kişi.", type: "vocabulary" },
    { question: "They are working ___ the clock to finish it.", options: ["against", "around", "at", "on"], correctAnswer: 1, explanation: "Work around the clock = Gece gündüz durmadan çalışmak.", type: "vocabulary" },
    { question: "I have a lot on my ___ at the moment.", options: ["plate", "table", "desk", "mind"], correctAnswer: 0, explanation: "Have a lot on one's plate = Yapacak çok işi olmak (deyim).", type: "vocabulary" },
    { question: "She is a very ___ manager.", options: ["supportive", "tough", "fair", "Hepsi"], correctAnswer: 3, explanation: "Yönetici sıfatları.", type: "vocabulary" },
    { question: "I'm going to ___ a promotion soon.", options: ["get", "receive", "take", "A ve B"], correctAnswer: 3, explanation: "Receive/Get a promotion = Terfi almak.", type: "grammar" },
    { question: "Is the work-life ___ good here?", options: ["balance", "ratio", "level", "state"], correctAnswer: 0, explanation: "Work-life balance = İş-özel hayat dengesi.", type: "vocabulary" },
    { question: "I've been ___ since the company closed.", options: ["out of work", "unemployed", "jobless", "Hepsi"], correctAnswer: 3, explanation: "İşsiz olmak.", type: "vocabulary" },
    { question: "Let's ___ business.", options: ["talk", "do", "get down to", "Hepsi"], correctAnswer: 2, explanation: "Get down to business = Sadede gelmek / İş konuşmaya başlamak.", type: "vocabulary" },
    { question: "I love my job because it's very ___.", options: ["rewarding", "fulfilling", "easy", "A ve B"], correctAnswer: 3, explanation: "Rewarding/Fulfilling = Tatmin edici / Karşılığını veren.", type: "vocabulary" }
];

// Unit 139: Environment & Nature - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Nature & Animals)
const u139q1: EnglishQuestion[] = [
    { question: "The ___ is full of trees.", options: ["forest", "desert", "ocean", "beach"], correctAnswer: 0, explanation: "Forest = Orman. Ağaçlarla doludur.", type: "vocabulary" },
    { question: "'Mountain' ne demek?", options: ["Dere", "Dağ", "Tepe", "Tabak"], correctAnswer: 1, explanation: "Mountain = Dağ.", type: "vocabulary" },
    { question: "Look at that blue ___.", options: ["sky", "grass", "mud", "stone"], correctAnswer: 0, explanation: "Mavi olan gökyüzüdür (sky).", type: "vocabulary" },
    { question: "'Elephant' ne demek?", options: ["Zürafa", "Fil", "Aslan", "Kaplan"], correctAnswer: 1, explanation: "Elephant = Fil.", type: "vocabulary" },
    { question: "The ___ is very cold today.", options: ["water", "air", "ground", "Hepsi"], correctAnswer: 3, explanation: "Su, hava veya yer soğuk olabilir.", type: "vocabulary" },
    { question: "'River' ne demek?", options: ["Deniz", "Nehir/Irmak", "Göl", "Okyanus"], correctAnswer: 1, explanation: "River = Nehir.", type: "vocabulary" },
    { question: "Birds can ___.", options: ["run", "swim", "fly", "climb"], correctAnswer: 2, explanation: "Fly = Uçmak. Kuşların temel yeteneğidir.", type: "grammar" },
    { question: "'Sun' ne demek?", options: ["Ay", "Yıldız", "Güneş", "Bulut"], correctAnswer: 2, explanation: "Sun = Güneş.", type: "vocabulary" },
    { question: "The grass is ___.", options: ["green", "blue", "red", "yellow"], correctAnswer: 0, explanation: "Çimler (grass) yeşildir.", type: "vocabulary" },
    { question: "___ you like animals?", options: ["Do", "Are", "Is", "Does"], correctAnswer: 0, explanation: "Do you like...? (Hayvanları sever misin?)", type: "grammar" },
    { question: "'Sea' ne demek?", options: ["Göl", "Deniz", "Okyanus", "Dere"], correctAnswer: 1, explanation: "Sea = Deniz.", type: "vocabulary" },
    { question: "A ___ lives in the desert.", options: ["camel", "fish", "polar bear", "penguin"], correctAnswer: 0, explanation: "Camel = Deve. Çölde yaşar.", type: "vocabulary" },
    { question: "The ___ is shining.", options: ["moon", "stars", "sun", "Hepsi"], correctAnswer: 3, explanation: "Ay, yıldızlar veya güneş parlayabilir (shining).", type: "vocabulary" },
    { question: "'Flower' ne demek?", options: ["Ağaç", "Çiçek", "Yaprak", "Dal"], correctAnswer: 1, explanation: "Flower = Çiçek.", type: "vocabulary" },
    { question: "I see a ___ in the garden.", options: ["rabbit", "car", "chair", "Hepsi"], correctAnswer: 0, explanation: "Bahçede tavşan (rabbit) görülebilir.", type: "vocabulary" },
    { question: "The lake is very ___.", options: ["deep", "high", "long", "fast"], correctAnswer: 0, explanation: "Deep = Derin. Göller için uygun bir sıfat.", type: "vocabulary" },
    { question: "'Animal' ne demek?", options: ["Bitki", "Hayvan", "İnsan", "Doğa"], correctAnswer: 1, explanation: "Animal = Hayvan.", type: "vocabulary" },
    { question: "It is a beautiful ___.", options: ["day", "world", "place", "Hepsi"], correctAnswer: 3, explanation: "Güzel bir gün/dünya/yer.", type: "vocabulary" },
    { question: "Do you go to the ___ in summer?", options: ["beach", "snow", "mountain", "A ve C"], correctAnswer: 3, explanation: "Yazın plaja (beach) veya dağa gidilebilir.", type: "grammar" },
    { question: "'Star' ne demek?", options: ["Gezegen", "Yıldız", "Kuyruklu yıldız", "Göktaşı"], correctAnswer: 1, explanation: "Star = Yıldız.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Weather & Eco-friendly actions)
const u139q2: EnglishQuestion[] = [
    { question: "What is the ___ like today?", options: ["weather", "sky", "air", "time"], correctAnswer: 0, explanation: "Hava durumunu sormak için 'What is the weather like?' kullanılır.", type: "grammar" },
    { question: "We should ___ paper and plastic.", options: ["recycle", "waste", "burn", "throw"], correctAnswer: 0, explanation: "Recycle = Geri dönüştürmek.", type: "vocabulary" },
    { question: "It's going to ___ this afternoon.", options: ["rain", "rainy", "raining", "rained"], correctAnswer: 0, explanation: "Going to + V1 (rain).", type: "grammar" },
    { question: "Don't ___ water.", options: ["save", "waste", "drink", "use"], correctAnswer: 1, explanation: "Waste water = Suyu israf etmek.", type: "vocabulary" },
    { question: "The ___ is very strong tonight.", options: ["wind", "sunny", "cloud", "rainy"], correctAnswer: 0, explanation: "Wind = Rüzgar (İsim hali).", type: "vocabulary" },
    { question: "We need to ___ more trees.", options: ["plant", "cut", "sell", "fix"], correctAnswer: 0, explanation: "Plant trees = Ağaç dikmek.", type: "vocabulary" },
    { question: "It's a ___ day. I need my sunglasses.", options: ["rainy", "cloudy", "sunny", "stormy"], correctAnswer: 2, explanation: "Güneş gözlüğü güneşli (sunny) havada takılır.", type: "vocabulary" },
    { question: "'Environment' ne demek?", options: ["Gelecek", "Çevre", "Doğa", "Dünya"], correctAnswer: 1, explanation: "Environment = Çevre.", type: "vocabulary" },
    { question: "It's ___ outside. Wear a coat.", options: ["hot", "warm", "freezing", "sunny"], correctAnswer: 2, explanation: "Freezing = Çok soğuk (dondurucu).", type: "vocabulary" },
    { question: "You should ___ the lights when you leave.", options: ["turn on", "turn off", "open", "close"], correctAnswer: 1, explanation: "Enerji tasarrufu için ışıklar kapatılmalıdır (turn off).", type: "grammar" },
    { question: "There is a lot of ___ in the city.", options: ["pollution", "polluted", "pollute", "polluting"], correctAnswer: 0, explanation: "Pollution = Kirlilik (İsim hali).", type: "vocabulary" },
    { question: "I like to go ___ in the forest.", options: ["walking", "hiking", "running", "Hepsi"], correctAnswer: 3, explanation: "Ormanda yürüyüş yapmak (hiking/walking).", type: "vocabulary" },
    { question: "'Protect' ne demek?", options: ["Zarar vermek", "Korumak", "İzlemek", "Bulmak"], correctAnswer: 1, explanation: "Protect = Korumak.", type: "vocabulary" },
    { question: "He is interested in ___ energy.", options: ["renewable", "new", "fast", "A ve B"], correctAnswer: 0, explanation: "Renewable energy = Yenilenebilir enerji.", type: "vocabulary" },
    { question: "The ___ is getting warmer.", options: ["planet", "world", "earth", "Hepsi"], correctAnswer: 3, explanation: "Gezegen/Dünya ısınıyor.", type: "vocabulary" },
    { question: "Is it ___ today?", options: ["cloudy", "cloud", "clouds", "clouding"], correctAnswer: 0, explanation: "Cloudy = Bulutlu (Sıfat).", type: "vocabulary" },
    { question: "We must stop ___ the oceans.", options: ["polluting", "pollute", "polluted", "pollutes"], correctAnswer: 0, explanation: "Stop + V-ing: 'Okyanusları kirletmeyi durdurmalıyız'.", type: "grammar" },
    { question: "'Nature' ne demek?", options: ["Dünya", "Doğa", "Hayat", "Hava"], correctAnswer: 1, explanation: "Nature = Doğa.", type: "vocabulary" },
    { question: "It was a very ___ storm.", options: ["powerful", "strong", "scary", "Hepsi"], correctAnswer: 3, explanation: "Güçlü/Korkutucu bir fırtına.", type: "vocabulary" },
    { question: "We can save the earth ___ recycling.", options: ["by", "with", "on", "in"], correctAnswer: 0, explanation: "By recycling = Geri dönüşüm yaparak (yöntem belirtme).", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Environment Problems & Effects)
const u139q3: EnglishQuestion[] = [
    { question: "Global ___ is a major problem.", options: ["warming", "heating", "warm", "hot"], correctAnswer: 0, explanation: "Global warming = Küresel ısınma.", type: "vocabulary" },
    { question: "Many animals are losing their natural ___.", options: ["habitat", "home", "place", "area"], correctAnswer: 0, explanation: "Natural habitat = Doğal yaşam alanı.", type: "vocabulary" },
    { question: "If we don't protect them, they will become ___.", options: ["extinct", "dead", "gone", "lost"], correctAnswer: 0, explanation: "Extinct = Nesli tükenmiş.", type: "vocabulary" },
    { question: "Climate ___ affects everyone.", options: ["change", "shift", "turn", "move"], correctAnswer: 0, explanation: "Climate change = İklim değişikliği.", type: "vocabulary" },
    { question: "The ___ layer protects us from UV rays.", options: ["ozone", "air", "gas", "sky"], correctAnswer: 0, explanation: "Ozone layer = Ozon tabakası.", type: "vocabulary" },
    { question: "Carbon ___ is a greenhouse gas.", options: ["dioxide", "oxygen", "monoxide", "A ve C"], correctAnswer: 0, explanation: "Carbon dioxide (CO2).", type: "vocabulary" },
    { question: "Reducing our ___ footprint is important.", options: ["carbon", "earth", "nature", "eco"], correctAnswer: 0, explanation: "Carbon footprint = Karbon ayak izi.", type: "vocabulary" },
    { question: "The ___ are melting due to heat.", options: ["glaciers", "ice caps", "mountains", "A ve B"], correctAnswer: 3, explanation: "Glaciers / Ice caps = Buzullar.", type: "vocabulary" },
    { question: "We should avoid using ___ plastic.", options: ["single-use", "one-time", "simple", "easy"], correctAnswer: 0, explanation: "Single-use plastic = Tek kullanımlık plastik.", type: "vocabulary" },
    { question: "___ energy comes from the sun.", options: ["Solar", "Wind", "Nuclear", "Hydro"], correctAnswer: 0, explanation: "Solar energy = Güneş enerjisi.", type: "vocabulary" },
    { question: "Air ___ causes breathing problems.", options: ["pollution", "gas", "dust", "smoke"], correctAnswer: 0, explanation: "Hava kirliliği.", type: "vocabulary" },
    { question: "Deforestation leads to soil ___.", options: ["erosion", "damage", "loss", "A ve C"], correctAnswer: 0, explanation: "Erosion = Erozyon.", type: "vocabulary" },
    { question: "Is this product ___?", options: ["eco-friendly", "environmentally friendly", "green", "Hepsi"], correctAnswer: 3, explanation: "Doğa dostu ürünler.", type: "vocabulary" },
    { question: "We need to ___ our consumption.", options: ["reduce", "lower", "cut down on", "Hepsi"], correctAnswer: 3, explanation: "Tüketimi azaltmak.", type: "vocabulary" },
    { question: "Endangered ___ need our help.", options: ["species", "animals", "types", "groups"], correctAnswer: 0, explanation: "Endangered species = Nesli tehlike altındaki türler.", type: "vocabulary" },
    { question: "Water ___ is common in dry areas.", options: ["scarcity", "shortage", "lack", "Hepsi"], correctAnswer: 3, explanation: "Su kıtlığı/azlığı.", type: "vocabulary" },
    { question: "Organic farming doesn't use ___.", options: ["pesticides", "chemicals", "fertilizers", "A ve B"], correctAnswer: 3, explanation: "Pesticides/Chemicals = Tarım ilaçları/Kimyasallar.", type: "vocabulary" },
    { question: "The ___ of wild animals is illegal.", options: ["hunting", "killing", "catching", "A ve B"], correctAnswer: 0, explanation: "Hunting = Avlanma.", type: "vocabulary" },
    { question: "We should use more ___ public transport.", options: ["sustainable", "green", "clean", "A ve B"], correctAnswer: 3, explanation: "Sustainable = Sürdürülebilir.", type: "vocabulary" },
    { question: "The future ___ on our actions today.", options: ["depends", "is", "makes", "does"], correctAnswer: 0, explanation: "Depend on = ...'ya bağlı olmak.", type: "grammar" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Real-world scenarios & Idioms)
const u139q4: EnglishQuestion[] = [
    { question: "A: Did you see the news about the flood? B: Yes, it was ___.", options: ["devastating", "terrible", "awful", "Hepsi"], correctAnswer: 3, explanation: "Devastating = Yıkıcı / Çok üzücü.", type: "vocabulary" },
    { question: "A: How can I help the environment? B: Start by ___ less.", options: ["consuming", "wasting", "using", "A ve B"], correctAnswer: 3, explanation: "Daha az tüketerek veya israf ederek.", type: "grammar" },
    { question: "It's raining cats and ___.", options: ["dogs", "birds", "cows", "fish"], correctAnswer: 0, explanation: "Raining cats and dogs = Bardaktan boşalırcasına yağmak (deyim).", type: "vocabulary" },
    { question: "A: Why are you planting trees? B: To ___ the Earth.", options: ["save", "help", "green", "A ve B"], correctAnswer: 3, explanation: "Dünyayı kurtarmak/yardım etmek için.", type: "vocabulary" },
    { question: "He is as brave as a ___.", options: ["lion", "tiger", "mouse", "cat"], correctAnswer: 0, explanation: "As brave as a lion = Aslan gibi cesur (benzetme).", type: "vocabulary" },
    { question: "A: Is it going to snow? B: I ___. I love snow.", options: ["hope so", "think so", "guess so", "A ve B"], correctAnswer: 3, explanation: "Hope so = Umarım öyledir.", type: "grammar" },
    { question: "That's just the tip of the ___.", options: ["iceberg", "mountain", "hill", "rock"], correctAnswer: 0, explanation: "Tip of the iceberg = Buzdağının görünen kısmı (deyim).", type: "vocabulary" },
    { question: "A: What happened to the forest? B: It was destroyed by a ___.", options: ["wildfire", "storm", "flood", "A ve B"], correctAnswer: 0, explanation: "Wildfire = Orman yangını.", type: "vocabulary" },
    { question: "She has the world at her ___.", options: ["feet", "hands", "head", "eyes"], correctAnswer: 0, explanation: "The world at one's feet = Dünyalar onun (her şeye sahip/başarılı) (deyim).", type: "vocabulary" },
    { question: "A: Do you prefer the city or the ___? B: The ___, definitely.", options: ["countryside", "nature", "forest", "A ve B"], correctAnswer: 3, explanation: "Countryside = Kırsal alan.", type: "vocabulary" },
    { question: "We need to go back to ___.", options: ["nature", "basics", "the start", "A ve B"], correctAnswer: 3, explanation: "Go back to nature = Doğaya dönmek.", type: "vocabulary" },
    { question: "It was a once in a blue ___ event.", options: ["moon", "sun", "star", "day"], correctAnswer: 0, explanation: "Once in a blue moon = Kırk yılda bir / Çok nadir (deyim).", type: "vocabulary" },
    { question: "A: Is the water clean? B: It's crystal ___.", options: ["clear", "clean", "blue", "pure"], correctAnswer: 0, explanation: "Crystal clear = Tertemiz / Cam gibi (deyim).", type: "vocabulary" },
    { question: "He is a real ___ thumb.", options: ["green", "blue", "red", "eco"], correctAnswer: 0, explanation: "Green thumb = Bahçe işlerinde becerikli (deyim).", type: "vocabulary" },
    { question: "A: Look at that rainbow! B: It's ___.", options: ["breathtaking", "amazing", "beautiful", "Hepsi"], correctAnswer: 3, explanation: "Breathtaking = Nefes kesici.", type: "vocabulary" },
    { question: "Don't beat around the ___.", options: ["bush", "tree", "plant", "flower"], correctAnswer: 0, explanation: "Beat around the bush = Lafı dolandırmak (deyim - doğa bağlantılı).", type: "vocabulary" },
    { question: "A: Is it windy? B: It's just a light ___.", options: ["breeze", "wind", "storm", "air"], correctAnswer: 0, explanation: "Breeze = Hafif esinti / Meltem.", type: "vocabulary" },
    { question: "Make hay while the sun ___.", options: ["shines", "is out", "rises", "sets"], correctAnswer: 0, explanation: "Make hay while the sun shines = Fırsat varken değerlendir (deyim).", type: "vocabulary" },
    { question: "A: Are you going hiking? B: Yes, rain or ___.", options: ["shine", "sun", "snow", "storm"], correctAnswer: 0, explanation: "Rain or shine = Ne olursa olsun / İster yağmur yağsın ister güneş açsın (deyim).", type: "vocabulary" },
    { question: "Nature always finds a ___.", options: ["way", "path", "life", "place"], correctAnswer: 0, explanation: "Doğa her zaman bir yolunu bulur.", type: "vocabulary" }
];

// Unit 140: Entertainment & Media - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Movies, Music & Basic terms)
const u140q1: EnglishQuestion[] = [
    { question: "I like watching ___ movies because they are funny.", options: ["horror", "comedy", "action", "documentary"], correctAnswer: 1, explanation: "Comedy = Komedi. Eğlenceli/komik oldukları için izlenir.", type: "vocabulary" },
    { question: "'Actor' ne demek?", options: ["Yönetmen", "Oyuncu", "Seyirci", "Senarist"], correctAnswer: 1, explanation: "Actor = Oyuncu (Erkek/Genel).", type: "vocabulary" },
    { question: "Do you play any musical ___?", options: ["tools", "instruments", "machines", "things"], correctAnswer: 1, explanation: "Musical instruments = Müzik aletleri/enstrümanları.", type: "vocabulary" },
    { question: "'Cinema' ne demek?", options: ["Tiyatro", "Sinema", "Kütüphane", "Müze"], correctAnswer: 1, explanation: "Cinema = Sinema.", type: "vocabulary" },
    { question: "I listen ___ music every morning.", options: ["to", "at", "on", "with"], correctAnswer: 0, explanation: "Listen to music = Müzik dinlemek.", type: "grammar" },
    { question: "'Pop' is a type of ___.", options: ["movie", "music", "book", "game"], correctAnswer: 1, explanation: "Pop bir müzik türüdür.", type: "vocabulary" },
    { question: "Have you ___ that new movie yet?", options: ["see", "seen", "saw", "seeing"], correctAnswer: 1, explanation: "Present Perfect (Have + V3) yapısı: Seen.", type: "grammar" },
    { question: "'Radio' ne demek?", options: ["Televizyon", "Radyo", "Bilgisayar", "Telefon"], correctAnswer: 1, explanation: "Radio = Radyo.", type: "vocabulary" },
    { question: "She is a famous ___.", options: ["singer", "song", "singing", "sang"], correctAnswer: 0, explanation: "Singer = Şarkıcı (Kişi).", type: "vocabulary" },
    { question: "___ you like horror movies?", options: ["Do", "Are", "Is", "Does"], correctAnswer: 0, explanation: "Do you like...? sorusu geniş zamanda sorulur.", type: "grammar" },
    { question: "'Audience' ne demek?", options: ["Oyuncu", "Seyirci/Dinleyici", "Sahne", "Işık"], correctAnswer: 1, explanation: "Audience = İzleyici/Dinleyici kitlesi.", type: "vocabulary" },
    { question: "I love reading ___.", options: ["novels", "papers", "news", "A ve B"], correctAnswer: 3, explanation: "Roman (novels) veya gazete okumak.", type: "vocabulary" },
    { question: "The movie was very ___.", options: ["excite", "excited", "exciting", "excites"], correctAnswer: 2, explanation: "Cansız varlıkları (movie) nitelerken -ing takısı (exciting) kullanılır.", type: "grammar" },
    { question: "'Concert' ne demek?", options: ["Maç", "Konser", "Sergi", "Parti"], correctAnswer: 1, explanation: "Concert = Konser.", type: "vocabulary" },
    { question: "Who is your favorite ___?", options: ["artist", "painting", "draw", "A ve C"], correctAnswer: 0, explanation: "Artist = Sanatçı.", type: "vocabulary" },
    { question: "I ___ to go to the theater.", options: ["want", "like", "love", "Hepsi"], correctAnswer: 3, explanation: "Tiyatroya gitmeyi istemek/sevmek.", type: "grammar" },
    { question: "'Drums' ne demek?", options: ["Gitar", "Bateri/Davul", "Piyano", "Keman"], correctAnswer: 1, explanation: "Drums = Bateri/Davul.", type: "vocabulary" },
    { question: "Do you watch the ___?", options: ["news", "new", "newly", "newest"], correctAnswer: 0, explanation: "Watch the news = Haberleri izlemek.", type: "vocabulary" },
    { question: "The ___ is too loud.", options: ["sound", "video", "light", "A ve B"], correctAnswer: 3, explanation: "Ses (sound) çok yüksek olabilir.", type: "vocabulary" },
    { question: "'Famous' ne demek?", options: ["Zengin", "Ünlü", "Başarılı", "Yetenekli"], correctAnswer: 1, explanation: "Famous = Ünlü.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (TV, Preferences & Verbs)
const u140q2: EnglishQuestion[] = [
    { question: "I ___ watching TV to reading books.", options: ["prefer", "would rather", "like", "want"], correctAnswer: 0, explanation: "Prefer [X] TO [Y] kalıbı tercih belirtirken kullanılır.", type: "grammar" },
    { question: "I'd rather ___ a film tonight.", options: ["watch", "watching", "to watch", "watched"], correctAnswer: 0, explanation: "Would rather + V1 (yalın fiil) kullanılır.", type: "grammar" },
    { question: "'Channel' ne demek?", options: ["Program", "Kanal", "Dizi", "Haber"], correctAnswer: 1, explanation: "Channel = (TV) Kanalı.", type: "vocabulary" },
    { question: "This is my favorite TV ___.", options: ["series", "show", "program", "Hepsi"], correctAnswer: 3, explanation: "TV dizisi (series) veya şovu.", type: "vocabulary" },
    { question: "What's ___ on TV tonight?", options: ["on", "at", "in", "with"], correctAnswer: 0, explanation: "What's ON TV? = Televizyonda ne var?", type: "grammar" },
    { question: "I enjoy ___ to classical music.", options: ["listen", "listening", "to listen", "listened"], correctAnswer: 1, explanation: "Enjoy + V-ing yapısı kullanılır.", type: "grammar" },
    { question: "'Review' ne demek?", options: ["Özet", "Eleştiri/İnceleme", "Fragman", "Başlık"], correctAnswer: 1, explanation: "Review = Eleştiri yazısı veya inceleme.", type: "vocabulary" },
    { question: "He is a great ___.", options: ["guitarist", "guitar", "guitaring", "A ve C"], correctAnswer: 0, explanation: "Guitarist = Gitarist (Kişi).", type: "vocabulary" },
    { question: "The movie is ___ on a true story.", options: ["based", "made", "written", "told"], correctAnswer: 0, explanation: "Based on a true story = Gerçek bir hikayeye dayanıyor.", type: "vocabulary" },
    { question: "Do you have any ___ for a good book?", options: ["advices", "recommendations", "suggestions", "B ve C"], correctAnswer: 3, explanation: "Recommendation / Suggestion = Tavsiye/Öneri.", type: "vocabulary" },
    { question: "The ___ was very beautiful.", options: ["scenery", "scene", "view", "A ve B"], correctAnswer: 1, explanation: "Scene = Sahne (film/tiyatro için).", type: "vocabulary" },
    { question: "I don't like ___ movies. They are boring.", options: ["action", "thriller", "dull", "Hepsi"], correctAnswer: 2, explanation: "Dull = Sıkıcı/Ruhsuz.", type: "vocabulary" },
    { question: "She ___ playing the piano since she was five.", options: ["has been", "is", "was", "be"], correctAnswer: 0, explanation: "Present Perfect Continuous: Eylemin geçmişte başlayıp sürdüğünü anlatır.", type: "grammar" },
    { question: "'Subtitles' ne demek?", options: ["Dublaj", "Altyazı", "Seslendirme", "Çeviri"], correctAnswer: 1, explanation: "Subtitles = Altyazı.", type: "vocabulary" },
    { question: "Did you record the ___?", options: ["episode", "show", "movie", "Hepsi"], correctAnswer: 3, explanation: "Episode = (Dizi) Bölüm.", type: "vocabulary" },
    { question: "I like movies with a lot of ___.", options: ["action", "drama", "humor", "Hepsi"], correctAnswer: 3, explanation: "Aksiyon, drama veya mizah (humor).", type: "vocabulary" },
    { question: "The performance was ___.", options: ["outstanding", "bad", "average", "Hepsi"], correctAnswer: 0, explanation: "Outstanding = Muhteşem / Olağanüstü.", type: "vocabulary" },
    { question: "Who ___ the lead role?", options: ["plays", "does", "makes", "is"], correctAnswer: 0, explanation: "Play a role = Bir rolde oynamak.", type: "grammar" },
    { question: "'Plot' ne demek?", options: ["Karakter", "Konu/Olay örgüsü", "Mekan", "Zaman"], correctAnswer: 1, explanation: "Plot = Hikaye kurgusu / Olay örgüsü.", type: "vocabulary" },
    { question: "I ___ seeing that play next week.", options: ["plan", "hope", "look forward to", "Hepsi"], correctAnswer: 3, explanation: "Gelecek planları ve arzular.", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Critics, Experiences & Media Jargon)
const u140q3: EnglishQuestion[] = [
    { question: "The film received positive ___ from the critics.", options: ["reviews", "notes", "views", "talks"], correctAnswer: 0, explanation: "Positive reviews = Olumlu eleştiriler.", type: "vocabulary" },
    { question: "I was ___ by the ending of the book.", options: ["surprised", "surprise", "surprising", "surprises"], correctAnswer: 0, explanation: "I was surprised (Duyguları belirtirken -ed takısı).", type: "grammar" },
    { question: "Is the movie ___ with Turkish subtitles?", options: ["available", "open", "ready", "there"], correctAnswer: 0, explanation: "Available = Mevcut.", type: "vocabulary" },
    { question: "The concert was ___ out in minutes.", options: ["sold", "bought", "given", "taken"], correctAnswer: 0, explanation: "Sold out = Tüm biletleri satılmış (tükenmiş).", type: "vocabulary" },
    { question: "The book is a ___.", options: ["best-seller", "good-sell", "top-book", "A ve C"], correctAnswer: 0, explanation: "Best-seller = Çok satan kitap.", type: "vocabulary" },
    { question: "I can't stand ___ movies.", options: ["violence", "violent", "noisy", "A ve B"], correctAnswer: 1, explanation: "Violent movies = Şiddet içerikli filmler.", type: "vocabulary" },
    { question: "The ___ effects were amazing.", options: ["special", "good", "main", "top"], correctAnswer: 0, explanation: "Special effects = Özel efektler.", type: "vocabulary" },
    { question: "I've been ___ this show on Netflix.", options: ["binge-watching", "watching", "seeing", "A ve B"], correctAnswer: 0, explanation: "Binge-watching = Bir diziyi arka arkaya (durmadan) izlemek.", type: "vocabulary" },
    { question: "The play was a ___ success.", options: ["huge", "big", "great", "Hepsi"], correctAnswer: 3, explanation: "Büyük bir başarı.", type: "vocabulary" },
    { question: "The actor gave a ___ performance.", options: ["brilliant", "bad", "dull", "slow"], correctAnswer: 0, explanation: "Brilliant = Harika/Parlak.", type: "vocabulary" },
    { question: "Is it ___ the wait?", options: ["worth", "good", "value", "ready"], correctAnswer: 0, explanation: "Worth the wait = Beklemeye değer.", type: "vocabulary" },
    { question: "The story is quite ___.", options: ["predictable", "surprise", "new", "easy"], correctAnswer: 0, explanation: "Predictable = Tahmin edilebilir (genelde olumsuz eleştiri).", type: "vocabulary" },
    { question: "I found the documentary very ___.", options: ["informative", "learning", "know", "good"], correctAnswer: 0, explanation: "Informative = Bilgi verici.", type: "vocabulary" },
    { question: "She has an ___ for talent.", options: ["eye", "ear", "head", "arm"], correctAnswer: 0, explanation: "Have an eye for = ...'dan iyi anlamak / gözü olmak.", type: "vocabulary" },
    { question: "The movie was so ___ I cried.", options: ["moving", "sad", "touching", "Hepsi"], correctAnswer: 3, explanation: "Moving/Touching = Duygulandıran.", type: "vocabulary" },
    { question: "Who is the ___ of this film?", options: ["director", "conductor", "leader", "boss"], correctAnswer: 0, explanation: "Director = Yönetmen.", type: "vocabulary" },
    { question: "The soundtrack is ___ beautiful.", options: ["incredibly", "very", "so", "Hepsi"], correctAnswer: 3, explanation: "Incredibly = İnanılmaz derecede.", type: "vocabulary" },
    { question: "I ___ highly recommend this book.", options: ["would", "do", "am", "will"], correctAnswer: 0, explanation: "I would highly recommend = Şiddetle tavsiye ederim.", type: "grammar" },
    { question: "The movie has a star-studded ___.", options: ["cast", "group", "team", "crew"], correctAnswer: 0, explanation: "Cast = Oyuncu kadrosu. Star-studded = Yıldızlarla dolu.", type: "vocabulary" },
    { question: "It was a ___ experience.", options: ["memorable", "forget", "easy", "short"], correctAnswer: 0, explanation: "Memorable = Unutulmaz.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Cultural Nuances & Idioms)
const u140q4: EnglishQuestion[] = [
    { question: "A: What did you think of the play? B: It really ___ my mind.", options: ["blew", "broke", "hit", "made"], correctAnswer: 0, explanation: "Blow one's mind = Aklını başından almak / Çok şaşırtmak (deyim).", type: "vocabulary" },
    { question: "A: Want to go to the cinema? B: I'm not really ___ the mood.", options: ["in", "at", "on", "into"], correctAnswer: 0, explanation: "Be in the mood = Modunda/Havasında olmak.", type: "grammar" },
    { question: "He's a bit of a ___ potato.", options: ["couch", "sofa", "bed", "chair"], correctAnswer: 0, explanation: "Couch potato = Sürekli TV izleyip hareketsiz kalan kişi (deyim).", type: "vocabulary" },
    { question: "A: Did you hear the news? B: Yes, it's ___ all over social media.", options: ["trending", "going", "doing", "making"], correctAnswer: 0, explanation: "Trending = Trend olan / Çok konuşulan.", type: "vocabulary" },
    { question: "Let's get the ___ rolling.", options: ["ball", "wheel", "show", "car"], correctAnswer: 0, explanation: "Get the ball rolling = Bir işi/eğlenceyi başlatmak (deyim).", type: "vocabulary" },
    { question: "A: How was the concert? B: It was out of this ___!", options: ["world", "place", "city", "life"], correctAnswer: 0, explanation: "Out of this world = Bu dünyadan değil / Muazzam (deyim).", type: "vocabulary" },
    { question: "The show must ___ on.", options: ["go", "be", "do", "make"], correctAnswer: 0, explanation: "The show must go on = Şov devam etmeli (deyim).", type: "vocabulary" },
    { question: "A: I'm so bored. B: Why don't you ___ up a hobby?", options: ["take", "make", "do", "get"], correctAnswer: 0, explanation: "Take up a hobby = Yeni bir hobiye başlamak.", type: "vocabulary" },
    { question: "She is the ___ of the party.", options: ["life", "heart", "soul", "A ve C"], correctAnswer: 3, explanation: "Life and soul of the party = Partinin neşesi/canı (deyim).", type: "vocabulary" },
    { question: "Don't spoil the ___!", options: ["ending", "story", "fun", "A ve B"], correctAnswer: 3, explanation: "Spoil = Bozmak / Tadını kaçırmak (spoiler vermek).", type: "vocabulary" },
    { question: "A: Is she a good singer? B: She has a voice of an ___.", options: ["angel", "bird", "star", "artist"], correctAnswer: 0, explanation: "Voice of an angel = Melek gibi sesi var (benzetme).", type: "vocabulary" },
    { question: "It's time to face the ___.", options: ["music", "truth", "end", "world"], correctAnswer: 0, explanation: "Face the music = Sonuçlarla yüzleşmek / Hatasını kabul etmek (deyim).", type: "vocabulary" },
    { question: "A: What kind of music do you like? B: A bit of ___.", options: ["everything", "all", "every", "some"], correctAnswer: 0, explanation: "A bit of everything = Her şeyden biraz.", type: "grammar" },
    { question: "He is a ___ star.", options: ["rising", "going", "doing", "making"], correctAnswer: 0, explanation: "Rising star = Yükselen yıldız.", type: "vocabulary" },
    { question: "A: Is the book better? B: In my opinion, yes. The book is always ___.", options: ["superior", "better", "best", "A ve B"], correctAnswer: 3, explanation: "Superior = Üstün/Daha iyi.", type: "vocabulary" },
    { question: "Break a ___!", options: ["leg", "arm", "hand", "head"], correctAnswer: 0, explanation: "Break a leg = İyi şanslar (özellikle sahne sanatlarında) (deyim).", type: "vocabulary" },
    { question: "A: Did you see the trailer? B: Yes, it looks ___.", options: ["promising", "good", "great", "Hepsi"], correctAnswer: 3, explanation: "Promising = Gelecek vadeden / Umut verici.", type: "vocabulary" },
    { question: "That song is very ___.", options: ["catchy", "singy", "good", "fast"], correctAnswer: 0, explanation: "Catchy = Akılda kalıcı / Dile dolanan.", type: "vocabulary" },
    { question: "A: I'm a big fan of jazz. B: ___ am I.", options: ["So", "Too", "Also", "Neither"], correctAnswer: 0, explanation: "So am I = Ben de öyleyim (Olumlu katılım).", type: "grammar" },
    { question: "Enjoy the ___!", options: ["show", "performance", "night", "Hepsi"], correctAnswer: 3, explanation: "İyi seyirler!", type: "vocabulary" }
];

// Unit 141: History & Culture - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic History & 'Used to')
const u141q1: EnglishQuestion[] = [
    { question: "I ___ to live in a small village when I was a child.", options: ["use", "used", "using", "uses"], correctAnswer: 1, explanation: "Geçmişteki alışkanlıklar için 'used to' kalıbı kullanılır.", type: "grammar" },
    { question: "'Century' ne demek?", options: ["Yıl", "Yüzyıl", "Ay", "Hafta"], correctAnswer: 1, explanation: "Century = Yüzyıl (100 yıl).", type: "vocabulary" },
    { question: "History is the study of the ___.", options: ["future", "past", "present", "now"], correctAnswer: 1, explanation: "Tarih, geçmişin (past) incelenmesidir.", type: "vocabulary" },
    { question: "'Ancient' ne demek?", options: ["Yeni", "Eski/Antik", "Modern", "Hızlı"], correctAnswer: 1, explanation: "Ancient = Çok eski, antik.", type: "vocabulary" },
    { question: "Did you ___ to play football?", options: ["use", "used", "using", "uses"], correctAnswer: 0, explanation: "Soru cümlesinde 'did' olduğu için 'use to' yalın halde kullanılır.", type: "grammar" },
    { question: "'Museum' ne demek?", options: ["Okul", "Müze", "Hastane", "Kütüphane"], correctAnswer: 1, explanation: "Museum = Müze.", type: "vocabulary" },
    { question: "She ___ to have long hair.", options: ["used", "use", "uses", "is"], correctAnswer: 0, explanation: "She used to have... (Eskiden uzun saçları vardı).", type: "grammar" },
    { question: "'Tradition' ne demek?", options: ["Gelenek", "Gelecek", "Gerçek", "Görev"], correctAnswer: 0, explanation: "Tradition = Gelenek.", type: "vocabulary" },
    { question: "The pyramids are in ___.", options: ["Italy", "Egypt", "Greece", "Turkey"], correctAnswer: 1, explanation: "Piramitler Mısır'dadır (Egypt).", type: "vocabulary" },
    { question: "They ___ not use to have computers.", options: ["did", "do", "does", "were"], correctAnswer: 0, explanation: "Olumsuz 'used to' yapısı 'did not use to' şeklindedir.", type: "grammar" },
    { question: "'King' ne demek?", options: ["Kraliçe", "Kral", "Prens", "Halk"], correctAnswer: 1, explanation: "King = Kral.", type: "vocabulary" },
    { question: "We learned about the ___ in school.", options: ["war", "peace", "history", "Hepsi"], correctAnswer: 3, explanation: "Okulda savaş, barış veya tarih öğrenilebilir.", type: "vocabulary" },
    { question: "I ___ to be very shy.", options: ["used", "use", "am", "was"], correctAnswer: 0, explanation: "I used to be... (Eskiden utangaçtım).", type: "grammar" },
    { question: "'Culture' ne demek?", options: ["Kültür", "Sanat", "Kitap", "Şehir"], correctAnswer: 0, explanation: "Culture = Kültür.", type: "vocabulary" },
    { question: "Tarihi bir bina: ___ building.", options: ["historical", "history", "historian", "old"], correctAnswer: 0, explanation: "Historical building = Tarihi bina.", type: "vocabulary" },
    { question: "___ you use to like spinach?", options: ["Did", "Do", "Are", "Was"], correctAnswer: 0, explanation: "Soru yapısı: Did + özne + use to.", type: "grammar" },
    { question: "'Empire' ne demek?", options: ["Krallık", "İmparatorluk", "Cumhuriyet", "Devlet"], correctAnswer: 1, explanation: "Empire = İmparatorluk.", type: "vocabulary" },
    { question: "He is a famous ___.", options: ["historian", "history", "historical", "historically"], correctAnswer: 0, explanation: "Historian = Tarihçi (Kişi).", type: "vocabulary" },
    { question: "Everything has a ___.", options: ["history", "past", "future", "A ve B"], correctAnswer: 3, explanation: "Her şeyin bir geçmişi (past/history) vardır.", type: "vocabulary" },
    { question: "'Statue' ne demek?", options: ["Resim", "Heykel", "Kale", "Köprü"], correctAnswer: 1, explanation: "Statue = Heykel.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Historical Sites & Cultural Habits)
const u141q2: EnglishQuestion[] = [
    { question: "A ___ is a large building with high walls for protection.", options: ["castle", "house", "hotel", "tent"], correctAnswer: 0, explanation: "Castle = Kale.", type: "vocabulary" },
    { question: "Did people ___ to travel by horse?", options: ["used", "use", "using", "uses"], correctAnswer: 1, explanation: "Did... use to...?", type: "grammar" },
    { question: "The city has many beautiful ___.", options: ["ruins", "broken", "old", "A ve C"], correctAnswer: 0, explanation: "Ruins = Kalıntılar / Harabeler.", type: "vocabulary" },
    { question: "I used to ___ a lot of books about history.", options: ["read", "reading", "reads", "readed"], correctAnswer: 0, explanation: "Used to + V1.", type: "grammar" },
    { question: "It's a local ___ to eat this during festivals.", options: ["custom", "habit", "way", "rule"], correctAnswer: 0, explanation: "Custom = Gelenek / Örf.", type: "vocabulary" },
    { question: "They ___ have smartphones in the 19th century.", options: ["didn't use to", "used to", "not use to", "don't"], correctAnswer: 0, explanation: "19. yüzyılda akıllı telefonları olmazdı.", type: "grammar" },
    { question: "'Heritage' ne demek?", options: ["Miras", "Para", "Eşya", "Gelecek"], correctAnswer: 0, explanation: "Heritage = Miras (Kültürel/Tarihi).", type: "vocabulary" },
    { question: "We visited an ___ site yesterday.", options: ["archaeological", "history", "olden", "A ve C"], correctAnswer: 0, explanation: "Archaeological site = Arkeolojik alan.", type: "vocabulary" },
    { question: "I ___ to be able to speak French.", options: ["used", "use", "was", "am"], correctAnswer: 0, explanation: "Used to be able to... (Eskiden Fransızca konuşabiliyordum).", type: "grammar" },
    { question: "The ___ of the city was very interesting.", options: ["evolution", "growth", "history", "Hepsi"], correctAnswer: 3, explanation: "Şehrin gelişimi veya tarihi.", type: "vocabulary" },
    { question: "People ___ to write letters more often.", options: ["used", "use", "are", "do"], correctAnswer: 0, explanation: "Eskiden daha sık mektup yazılırdı.", type: "grammar" },
    { question: "This cake is a ___ dessert.", options: ["traditional", "tradition", "traditions", "traditionally"], correctAnswer: 0, explanation: "Traditional = Geleneksel.", type: "vocabulary" },
    { question: "What did you ___ to do on weekends?", options: ["use", "used", "using", "uses"], correctAnswer: 0, explanation: "Did... use to...?", type: "grammar" },
    { question: "They live in an ___ house.", options: ["ancient", "old-fashioned", "modern", "A ve B"], correctAnswer: 3, explanation: "Old-fashioned = Eski moda / Eski usul.", type: "vocabulary" },
    { question: "I didn't ___ to like olives.", options: ["use", "used", "using", "uses"], correctAnswer: 0, explanation: "Eskiden zeytin sevmezdim.", type: "grammar" },
    { question: "Is it a ___ to shake hands?", options: ["norm", "custom", "tradition", "Hepsi"], correctAnswer: 3, explanation: "El sıkışmak bir norm/gelenek olabilir.", type: "vocabulary" },
    { question: "We learned about the ___ of the world.", options: ["religions", "cultures", "languages", "Hepsi"], correctAnswer: 3, explanation: "Dünyanın dinleri, kültürleri veya dilleri.", type: "vocabulary" },
    { question: "He ___ to work as a miner.", options: ["used", "use", "was", "is"], correctAnswer: 0, explanation: "Eskiden madenci olarak çalışırdı.", type: "grammar" },
    { question: "'Artifact' ne demek?", options: ["Tarihi eser", "Sanat eseri", "Kitap", "Eski eşya"], correctAnswer: 0, explanation: "Artifact = Tarihi buluntu/eser.", type: "vocabulary" },
    { question: "How ___ life different in the past?", options: ["was", "is", "were", "be"], correctAnswer: 0, explanation: "Past Simple 'be' (Life için was).", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Discoveries, Inventions & Complex Past)
const u141q3: EnglishQuestion[] = [
    { question: "Christopher Columbus ___ America in 1492.", options: ["discovered", "invented", "found", "A ve C"], correctAnswer: 3, explanation: "Discover = Keşfetmek. Amerika zaten vardı, o yüzden keşfedildi.", type: "vocabulary" },
    { question: "The telephone was ___ by Alexander Graham Bell.", options: ["invented", "discovered", "made", "builded"], correctAnswer: 0, explanation: "Invent = İcat etmek. Telefon bir icattır.", type: "vocabulary" },
    { question: "How did people ___ to communicate without phones?", options: ["use", "used", "using", "be"], correctAnswer: 0, explanation: "Did... use to...?", type: "grammar" },
    { question: "The ___ of the wheel changed history.", options: ["invention", "discovery", "making", "find"], correctAnswer: 0, explanation: "Tekerleğin icadı tarihi değiştirdi.", type: "vocabulary" },
    { question: "Many civilizations ___ in this region.", options: ["arose", "came", "lived", "Hepsi"], correctAnswer: 3, explanation: "Bu bölgede birçok medeniyet doğdu/yaşadı.", type: "vocabulary" },
    { question: "She ___ to study archaeology.", options: ["used", "wanted", "plan", "A ve B"], correctAnswer: 3, explanation: "O arkeoloji çalışmak isterdi (alışkanlık veya istek).", type: "grammar" },
    { question: "The ___ of the castle are open to tourists.", options: ["grounds", "ruins", "walls", "Hepsi"], correctAnswer: 3, explanation: "Kalenin arazisi, kalıntıları veya duvarları.", type: "vocabulary" },
    { question: "I ___ play the violin, but I don't anymore.", options: ["used to", "use to", "am", "was"], correctAnswer: 0, explanation: "Eskiden çalardım ama artık çalmıyorum.", type: "grammar" },
    { question: "The ___ Revolution started in Britain.", options: ["Industrial", "Industry", "Machine", "Work"], correctAnswer: 0, explanation: "Industrial Revolution = Sanayi Devrimi.", type: "vocabulary" },
    { question: "There ___ to be a theater here.", options: ["used", "use", "was", "is"], correctAnswer: 0, explanation: "Eskiden burada bir tiyatro vardı (There used to be...).", type: "grammar" },
    { question: "'Civilization' ne demek?", options: ["Uygarlık/Medeniyet", "Şehir", "Toplum", "Halk"], correctAnswer: 0, explanation: "Civilization = Uygarlık.", type: "vocabulary" },
    { question: "We must preserve our cultural ___.", options: ["heritage", "legacy", "past", "A ve B"], correctAnswer: 3, explanation: "Preserve = Korumak/Muhafaza etmek.", type: "vocabulary" },
    { question: "Who ___ the steam engine?", options: ["invented", "made", "discovered", "A ve B"], correctAnswer: 3, explanation: "Buharlı makineyi kim icat etti?", type: "vocabulary" },
    { question: "I ___ to be afraid of the dark.", options: ["used", "use", "am", "was"], correctAnswer: 0, explanation: "Eskiden karanlıktan korkardım.", type: "grammar" },
    { question: "The ___ of the war is still remembered.", options: ["impact", "effect", "result", "Hepsi"], correctAnswer: 3, explanation: "Savaşın etkisi veya sonucu.", type: "vocabulary" },
    { question: "They ___ to go to church every Sunday.", options: ["used", "use", "did", "were"], correctAnswer: 0, explanation: "Pazarları kiliseye giderlerdi.", type: "grammar" },
    { question: "This manuscript was written by hand ___ ago.", options: ["centuries", "years", "long", "A ve B"], correctAnswer: 3, explanation: "Yüzyıllar veya yıllar önce.", type: "vocabulary" },
    { question: "I didn't ___ to travel much.", options: ["use", "used", "using", "uses"], correctAnswer: 0, explanation: "Eskiden çok seyahat etmezdim.", type: "grammar" },
    { question: "What is your country's national ___?", options: ["anthem", "song", "flag", "A ve C"], correctAnswer: 3, explanation: "National anthem = Milli marş.", type: "vocabulary" },
    { question: "He is an expert in ___ history.", options: ["military", "ancient", "modern", "Hepsi"], correctAnswer: 3, explanation: "Askeri, antik veya modern tarih.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Cultural Dialogues & Idioms)
const u141q4: EnglishQuestion[] = [
    { question: "A: Did you know that cats were ___ in ancient Egypt? B: Yes, they were very special.", options: ["venerated", "liked", "hated", "kept"], correctAnswer: 0, explanation: "Venerated = Kutsal sayılmak / Büyük saygı görmek.", type: "vocabulary" },
    { question: "A: I ___ have shorter hair. B: Me too! I changed it last year.", options: ["used to", "use to", "am", "had"], correctAnswer: 0, explanation: "Eskiden saçlarım daha kısaydı.", type: "grammar" },
    { question: "That's old ___ now.", options: ["news", "history", "hat", "A ve B"], correctAnswer: 1, explanation: "That's history = O iş bitti / Eskide kaldı (deyim).", type: "vocabulary" },
    { question: "A: Why are you interested in history? B: Because it ___.", options: ["repeats itself", "is long", "is old", "A ve B"], correctAnswer: 0, explanation: "History repeats itself = Tarih tekerrürden ibarettir (deyim).", type: "vocabulary" },
    { question: "It's a small ___.", options: ["world", "place", "city", "town"], correctAnswer: 0, explanation: "It's a small world = Dünya küçük (kültürel bir ifade).", type: "vocabulary" },
    { question: "A: What was his name again? B: It's escaped my ___.", options: ["memory", "mind", "head", "history"], correctAnswer: 1, explanation: "Escape one's mind = Aklından çıkmak / Unutmak (deyim).", type: "vocabulary" },
    { question: "Don't live in the ___.", options: ["past", "history", "older", "yesterday"], correctAnswer: 0, explanation: "Live in the past = Geçmişte yaşamak.", type: "vocabulary" },
    { question: "A: Is this tradition still alive? B: Yes, we ___ it every year.", options: ["observe", "do", "follow", "Hepsi"], correctAnswer: 3, explanation: "Observe a tradition = Bir geleneği sürdürmek/kutlamak.", type: "vocabulary" },
    { question: "He is a ___ from the past.", options: ["blast", "wind", "call", "sound"], correctAnswer: 0, explanation: "A blast from the past = Geçmişten gelen bir ses/hatıra (deyim).", type: "vocabulary" },
    { question: "A: How did they build this? B: It remains a ___.", options: ["mystery", "secret", "question", "A ve B"], correctAnswer: 0, explanation: "Mystery = Gizem.", type: "vocabulary" },
    { question: "You can't judge a book by its ___.", options: ["cover", "name", "history", "past"], correctAnswer: 0, explanation: "Dış görünüşe aldanma (kültürel atasözü).", type: "vocabulary" },
    { question: "A: Was it different in your time? B: Oh, ___.", options: ["definitely", "absolutely", "for sure", "Hepsi"], correctAnswer: 3, explanation: "Kesinlikle farklıydı.", type: "vocabulary" },
    { question: "It's like a needle in a ___.", options: ["haystack", "forest", "desert", "house"], correctAnswer: 0, explanation: "Needle in a haystack = Samanlıkta iğne aramak (deyim).", type: "vocabulary" },
    { question: "A: Shall we visit the museum? B: Why not? I ___ to love going there.", options: ["used", "use", "was", "did"], correctAnswer: 0, explanation: "Eskiden oraya gitmeyi çok severdim.", type: "grammar" },
    { question: "Rome wasn't built in a ___.", options: ["day", "year", "century", "month"], correctAnswer: 0, explanation: "Büyük işler zaman alır (deyim).", type: "vocabulary" },
    { question: "A: Is the library open? B: No, it's ___ for renovations.", options: ["closed", "fixed", "doing", "A ve B"], correctAnswer: 0, explanation: "Restorasyon/Yenileme nedeniyle kapalı.", type: "vocabulary" },
    { question: "The ___ of the castle was strategic.", options: ["location", "place", "site", "A ve C"], correctAnswer: 3, explanation: "Kalenin konumu stratejikti.", type: "vocabulary" },
    { question: "A: Did people use to have kings? B: Yes, for many ___.", options: ["centuries", "years", "times", "ages"], correctAnswer: 0, explanation: "Yüzyıllar boyunca.", type: "vocabulary" },
    { question: "When in Rome, do as the Romans ___.", options: ["do", "are", "say", "live"], correctAnswer: 0, explanation: "Gittiğin yerin adetlerine uymak (atasözü).", type: "vocabulary" },
    { question: "History is made ___.", options: ["today", "now", "by people", "Hepsi"], correctAnswer: 3, explanation: "Tarihi insanlar/bugün yapar.", type: "vocabulary" }
];

// Unit 142: Crime & Justice - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Crime & Police)
const u142q1: EnglishQuestion[] = [
    { question: "The ___ caught the thief.", options: ["police", "doctor", "teacher", "waiter"], correctAnswer: 0, explanation: "Hırsızı yakalayan polistir (police).", type: "vocabulary" },
    { question: "'Steal' ne demek?", options: ["Vermek", "Çalmak", "Bulmak", "Satmak"], correctAnswer: 1, explanation: "Steal = Çalmak (gizlice).", type: "vocabulary" },
    { question: "You ___ not steal from others.", options: ["must", "can", "should", "are"], correctAnswer: 0, explanation: "Kesin yasak belirtirken 'must not' kullanılır.", type: "grammar" },
    { question: "'Prison' ne demek?", options: ["Hapishane", "Karakol", "Mahkeme", "Okul"], correctAnswer: 0, explanation: "Prison = Hapishane.", type: "vocabulary" },
    { question: "He is a ___. He stole my bag.", options: ["thief", "police", "hero", "friend"], correctAnswer: 0, explanation: "Thief = Hırsız.", type: "vocabulary" },
    { question: "'Law' ne demek?", options: ["Kural", "Yasa/Kanun", "Ceza", "Hakim"], correctAnswer: 1, explanation: "Law = Yasa/Kanun.", type: "vocabulary" },
    { question: "The police ___ to help people.", options: ["try", "tries", "trying", "tried"], correctAnswer: 0, explanation: "Police kelimesi İngilizce'de her zaman çoğul (plural) kabul edilir, o yüzden fiile -s takısı gelmez.", type: "grammar" },
    { question: "'Safe' ne demek?", options: ["Tehlikeli", "Güvenli", "Gizli", "Açık"], correctAnswer: 1, explanation: "Safe = Güvenli.", type: "vocabulary" },
    { question: "Don't ___ the rules.", options: ["break", "make", "do", "keep"], correctAnswer: 0, explanation: "Break the rules = Kuralları çiğnemek.", type: "vocabulary" },
    { question: "___ you ever seen a crime?", options: ["Have", "Did", "Do", "Are"], correctAnswer: 0, explanation: "Deneyim sorarken 'Have you ever...?' yapısı kullanılır.", type: "grammar" },
    { question: "'Handcuffs' ne demek?", options: ["Karakol", "Kelepçe", "Siren", "Jop"], correctAnswer: 1, explanation: "Handcuffs = Kelepçe.", type: "vocabulary" },
    { question: "It is ___ to park here.", options: ["illegal", "legal", "good", "right"], correctAnswer: 0, explanation: "Illegal = Yasak/Yasadışı.", type: "vocabulary" },
    { question: "The police officer asked for my ___.", options: ["ID", "passport", "name", "Hepsi"], correctAnswer: 3, explanation: "Kimlik (ID), pasaport veya isim sorulabilir.", type: "vocabulary" },
    { question: "'Witness' ne demek?", options: ["Suçlu", "Tanık/Görgü şahidi", "Hakim", "Avukat"], correctAnswer: 1, explanation: "Witness = Tanık.", type: "vocabulary" },
    { question: "You ___ drive carefully.", options: ["must", "mustn't", "can", "are"], correctAnswer: 0, explanation: "Zorunluluk: Dikkatli sürmelisin.", type: "grammar" },
    { question: "A: What happened? B: Someone ___ my car.", options: ["broke into", "entered", "took", "A ve C"], correctAnswer: 3, explanation: "Break into = Zorla girmek.", type: "vocabulary" },
    { question: "'Victim' ne demek?", options: ["Suçlu", "Mağdur/Kurban", "Polis", "Haber"], correctAnswer: 1, explanation: "Victim = Mağdur/Kurban.", type: "vocabulary" },
    { question: "Follow the ___.", options: ["laws", "rules", "signs", "Hepsi"], correctAnswer: 3, explanation: "Kanunları, kuralları veya tabelaları takip et.", type: "vocabulary" },
    { question: "The alarm ___ at 3 AM.", options: ["went off", "made", "stopped", "goes"], correctAnswer: 0, explanation: "Go off = (Alarm/Bomba) çalmak/patlamak.", type: "grammar" },
    { question: "'Crime' ne demek?", options: ["Ceza", "Suç", "Adalet", "Mahkeme"], correctAnswer: 1, explanation: "Crime = Suç.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Rules, Fines & Traffic)
const u142q2: EnglishQuestion[] = [
    { question: "You ___ smoke here. It's forbidden.", options: ["mustn't", "don't have to", "can't", "A ve C"], correctAnswer: 3, explanation: "Mustn't ve Can't yasak belirtmek için kullanılır.", type: "grammar" },
    { question: "I got a speeding ___ yesterday.", options: ["fine", "ticket", "bill", "A ve B"], correctAnswer: 3, explanation: "Fine = Para cezası. Speeding fine/ticket = Hız cezası.", type: "vocabulary" },
    { question: "You ___ wear a seatbelt while driving.", options: ["have to", "must", "should", "Hepsi"], correctAnswer: 3, explanation: "Zorunluluk ve gereklilik.", type: "grammar" },
    { question: "'Forbidden' ne demek?", options: ["Serbest", "Yasak", "Zorunlu", "Gerekli"], correctAnswer: 1, explanation: "Forbidden = Yasak.", type: "vocabulary" },
    { question: "Don't ___ your car here. It's a no-parking zone.", options: ["leave", "park", "stop", "put"], correctAnswer: 1, explanation: "Park = Park etmek.", type: "vocabulary" },
    { question: "I ___ to pay a big fine.", options: ["had", "must", "should", "was"], correctAnswer: 0, explanation: "Past zorunluluk: 'Had to' (Ödemek zorunda kaldım).", type: "grammar" },
    { question: "'Caution' ne demek?", options: ["Dikkat/Uyarı", "Tehlike", "Yasak", "Dur"], correctAnswer: 0, explanation: "Caution = Uyarı/Dikkat.", type: "vocabulary" },
    { question: "The speed ___ is 50 km/h.", options: ["limit", "number", "level", "top"], correctAnswer: 0, explanation: "Speed limit = Hız sınırı.", type: "vocabulary" },
    { question: "You ___ go if the light is red.", options: ["mustn't", "shouldn't", "don't", "won't"], correctAnswer: 0, explanation: "Mustn't = Yapmamalısın (Yasak).", type: "grammar" },
    { question: "He was ___ for driving too fast.", options: ["stopped", "arrested", "fined", "Hepsi"], correctAnswer: 3, explanation: "Durdurulmak, tutuklanmak veya ceza kesilmek.", type: "vocabulary" },
    { question: "Is it ___ to use a phone while driving?", options: ["against the law", "illegal", "not allowed", "Hepsi"], correctAnswer: 3, explanation: "Hepsi 'yasak/yasadışı' anlamına gelir.", type: "vocabulary" },
    { question: "You ___ show your license to the officer.", options: ["must", "have to", "are", "A ve B"], correctAnswer: 3, explanation: "Zorunluluk.", type: "grammar" },
    { question: "'Arrest' ne demek?", options: ["Serbest bırakmak", "Tutuklamak", "Durdurmak", "Aramak"], correctAnswer: 1, explanation: "Arrest = Tutuklamak.", type: "vocabulary" },
    { question: "There is a ___ for littering.", options: ["fine", "punishment", "penalty", "Hepsi"], correctAnswer: 3, explanation: "Littering = Çöp atmak. Bunun bir cezası (fine/penalty) vardır.", type: "vocabulary" },
    { question: "You ___ park on the sidewalk.", options: ["cannot", "must not", "are not allowed to", "Hepsi"], correctAnswer: 3, explanation: "Sidewalk (kaldırım) üzerine park yasağı.", type: "grammar" },
    { question: "Was anyone ___ in the accident?", options: ["injured", "hurt", "damaged", "A ve B"], correctAnswer: 3, explanation: "Injured/Hurt = Yaralı/Yaralanmış.", type: "vocabulary" },
    { question: "'Siren' ne demek?", options: ["Siren", "Lamba", "Tekerlek", "Ayna"], correctAnswer: 0, explanation: "Siren = Siren.", type: "vocabulary" },
    { question: "You ___ pay me back now. Tomorrow is fine.", options: ["don't have to", "mustn't", "haven't", "can't"], correctAnswer: 0, explanation: "Don't have to = Zorunlu değilsin.", type: "grammar" },
    { question: "The police are ___ the case.", options: ["investigating", "looking", "doing", "finding"], correctAnswer: 0, explanation: "Investigate = Soruşturmak / İncelemek.", type: "vocabulary" },
    { question: "Always ___ by the rules.", options: ["abide", "follow", "keep", "A ve B"], correctAnswer: 3, explanation: "Abide by / Follow = Kurallara uymak.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Court, Lawyers & Types of Punishment)
const u142q3: EnglishQuestion[] = [
    { question: "The ___ decided that he was guilty.", options: ["judge", "lawyer", "police", "witness"], correctAnswer: 0, explanation: "Judge = Hakim. Kararı o verir.", type: "vocabulary" },
    { question: "He was ___ to five years in prison.", options: ["sentenced", "given", "put", "made"], correctAnswer: 0, explanation: "Sentenced = (Hüküm/Ceza) giymek.", type: "vocabulary" },
    { question: "'Lawyer' ne demek?", options: ["Hakim", "Avukat", "Savcı", "Polis"], correctAnswer: 1, explanation: "Lawyer = Avukat.", type: "vocabulary" },
    { question: "She was found ___ of the crime.", options: ["guilty", "innocent", "bad", "A ve B"], correctAnswer: 3, explanation: "Guilty = Suçlu. Innocent = Masum.", type: "vocabulary" },
    { question: "The ___ will represent him in court.", options: ["lawyer", "attorney", "solicitor", "Hepsi"], correctAnswer: 3, explanation: "Lawyer/Attorney/Solicitor = Avukat.", type: "vocabulary" },
    { question: "Is there any ___ against him?", options: ["evidence", "proof", "talk", "A ve B"], correctAnswer: 3, explanation: "Evidence / Proof = Kanıt / Delil.", type: "vocabulary" },
    { question: "'Court' ne demek?", options: ["Saha", "Mahkeme", "Karakol", "Büro"], correctAnswer: 1, explanation: "Court = Mahkeme (veya spor sahası).", type: "vocabulary" },
    { question: "He ___ the crime during the trial.", options: ["confessed", "admitted", "said", "A ve B"], correctAnswer: 3, explanation: "Confess/Admit = İtiraf etmek.", type: "vocabulary" },
    { question: "The ___ reached a verdict.", options: ["jury", "judge", "police", "lawyers"], correctAnswer: 0, explanation: "Jury = Jüri. Verdict = Karar.", type: "vocabulary" },
    { question: "He is ___ until proven guilty.", options: ["innocent", "free", "good", "ready"], correctAnswer: 0, explanation: "Masumiyet karinesi: Suçu kanıtlanana dek masumdur (innocent).", type: "grammar" },
    { question: "'Theft' ne demek?", options: ["Hırsızlık (olay)", "Hırsız (kişi)", "Soygun", "Cinayet"], correctAnswer: 0, explanation: "Theft = Hırsızlık (Suçun adı).", type: "vocabulary" },
    { question: "They are going to ___ the witness.", options: ["question", "interview", "see", "A ve B"], correctAnswer: 3, explanation: "Tanığı sorgulamak.", type: "vocabulary" },
    { question: "What is the ___ for this crime?", options: ["punishment", "penalty", "fine", "Hepsi"], correctAnswer: 3, explanation: "Punishment = Ceza.", type: "vocabulary" },
    { question: "'Justice' ne demek?", options: ["Adalet", "Ceza", "Yasa", "Hak"], correctAnswer: 0, explanation: "Justice = Adalet.", type: "vocabulary" },
    { question: "The robbery took ___ at 2 PM.", options: ["place", "part", "time", "away"], correctAnswer: 0, explanation: "Take place = Meydana gelmek / Olmak.", type: "grammar" },
    { question: "He was ___ for his crimes.", options: ["forgiven", "punished", "caught", "B ve C"], correctAnswer: 3, explanation: "Cezalandırıldı veya yakalandı.", type: "vocabulary" },
    { question: "'Suspect' ne demek?", options: ["Suçlu", "Şüpheli", "Kurban", "Tanık"], correctAnswer: 1, explanation: "Suspect = Şüpheli.", type: "vocabulary" },
    { question: "The case was ___ by the judge.", options: ["dismissed", "closed", "dropped", "Hepsi"], correctAnswer: 3, explanation: "Dismissed = Reddedilmiş/Düşmüş.", type: "vocabulary" },
    { question: "He was released ___ bail.", options: ["on", "with", "at", "by"], correctAnswer: 0, explanation: "On bail = Kefaletle.", type: "grammar" },
    { question: "Crime doesn't ___.", options: ["pay", "do", "make", "work"], correctAnswer: 0, explanation: "Crime doesn't pay = Suç cezasız kalmaz / Suç karlı değildir (atasözü).", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Real-world scenarios & Idioms)
const u142q4: EnglishQuestion[] = [
    { question: "A: Did you report the ___? B: Yes, the police are here.", options: ["theft", "burglary", "incident", "Hepsi"], correctAnswer: 3, explanation: "Incident = Olay.", type: "vocabulary" },
    { question: "A: What happened to the shop? B: It was ___ last night.", options: ["robbed", "stolen", "broken", "taken"], correctAnswer: 0, explanation: "Rob = Soymak (bir yeri/kişiyi).", type: "vocabulary" },
    { question: "He was caught red-___.", options: ["handed", "faced", "eyed", "man"], correctAnswer: 0, explanation: "Caught red-handed = Suçüstü yakalanmak (deyim).", type: "vocabulary" },
    { question: "A: Is it safe here? B: Yes, but keep an ___ out.", options: ["eye", "ear", "hand", "arm"], correctAnswer: 0, explanation: "Keep an eye out = Gözünü dört açmak / Dikkatli olmak (deyim).", type: "vocabulary" },
    { question: "He's behind ___ now.", options: ["bars", "walls", "doors", "windows"], correctAnswer: 0, explanation: "Behind bars = Parmaklıklar arkasında / Hapiste (deyim).", type: "vocabulary" },
    { question: "A: Why was he arrested? B: He ___ the law.", options: ["broke", "shook", "made", "fixed"], correctAnswer: 0, explanation: "Break the law = Yasayı çiğnemek.", type: "vocabulary" },
    { question: "Justice is ___.", options: ["blind", "deaf", "strong", "fast"], correctAnswer: 0, explanation: "Justice is blind = Adalet kördür (timsal).", type: "vocabulary" },
    { question: "A: Did he get away with it? B: No, he's in ___.", options: ["trouble", "jail", "prison", "Hepsi"], correctAnswer: 3, explanation: "Get away with = Yanına kar kalmak.", type: "vocabulary" },
    { question: "He is as honest as the day is ___.", options: ["long", "short", "bright", "good"], correctAnswer: 0, explanation: "As honest as the day is long = Son derece dürüst (deyim).", type: "vocabulary" },
    { question: "A: What was the sentence? B: Life ___.", options: ["imprisonment", "prison", "time", "long"], correctAnswer: 0, explanation: "Life imprisonment = Müebbet hapis.", type: "vocabulary" },
    { question: "Don't take the ___ into your own hands.", options: ["law", "justice", "rules", "power"], correctAnswer: 0, explanation: "Take the law into one's own hands = Kendi adaletini sağlamaya çalışmak (ihkak-ı hak/deyim).", type: "vocabulary" },
    { question: "A: Was he innocent? B: Yes, he was ___ wrongly.", options: ["accused", "called", "told", "made"], correctAnswer: 0, explanation: "Accused = Suçlanmış.", type: "vocabulary" },
    { question: "He made a ___ for it.", options: ["run", "dash", "break", "A ve B"], correctAnswer: 3, explanation: "Make a run/dash for it = Kaçmaya çalışmak.", type: "vocabulary" },
    { question: "A: What's the fine? B: It's quite ___.", options: ["hefty", "heavy", "big", "Hepsi"], correctAnswer: 3, explanation: "Hefty fine = Yüklü para cezası.", type: "vocabulary" },
    { question: "Play by the ___.", options: ["book", "rules", "law", "A ve B"], correctAnswer: 3, explanation: "Play by the book/rules = Kurallarına göre oynamak.", type: "vocabulary" },
    { question: "A: Did they find the weapon? B: No, it's still ___.", options: ["missing", "gone", "lost", "A ve B"], correctAnswer: 3, explanation: "Missing = Kayıp.", type: "vocabulary" },
    { question: "I smell a ___.", options: ["rat", "mouse", "crime", "police"], correctAnswer: 0, explanation: "I smell a rat = Bir bit yeniği/bit olduğunu hissetmek (şüphelenmek) (deyim).", type: "vocabulary" },
    { question: "A: Is the case over? B: Yes, the jury gave their ___.", options: ["verdict", "decision", "note", "A ve B"], correctAnswer: 3, explanation: "Verdict = Karar.", type: "vocabulary" },
    { question: "Keep your nose ___.", options: ["clean", "good", "clear", "A ve C"], correctAnswer: 3, explanation: "Keep your nose clean = Beladan uzak durmak (deyim).", type: "vocabulary" },
    { question: "Crime and ___.", options: ["punishment", "justice", "law", "police"], correctAnswer: 0, explanation: "Suç ve Ceza (Dostoyevski atıflı kalıp).", type: "vocabulary" }
];

// Unit 143: Science & Wonders - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Science & Relative Clauses intro)
const u143q1: EnglishQuestion[] = [
    { question: "A person ___ studies science is a scientist.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "İnsanları nitelemek için 'who' kullanılır.", type: "grammar" },
    { question: "'Space' ne demek?", options: ["Dünya", "Uzay", "Hava", "Deniz"], correctAnswer: 1, explanation: "Space = Uzay.", type: "vocabulary" },
    { question: "This is the lab ___ we do experiments.", options: ["who", "which", "where", "that"], correctAnswer: 2, explanation: "Yer (place) belirtirken 'where' kullanılır.", type: "grammar" },
    { question: "'Experiment' ne demek?", options: ["Deneyim", "Deney", "Sınav", "Ders"], correctAnswer: 1, explanation: "Experiment = Deney.", type: "vocabulary" },
    { question: "A car ___ is fast costs a lot.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesneleri nitelemek için 'which' (veya that) kullanılır.", type: "grammar" },
    { question: "'Planet' ne demek?", options: ["Yıldız", "Gezegen", "Göktaşı", "Güneş"], correctAnswer: 1, explanation: "Planet = Gezegen.", type: "vocabulary" },
    { question: "The man ___ lives next door is a doctor.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "İnsan nitelemesi: 'who'.", type: "grammar" },
    { question: "'Discovery' ne demek?", options: ["İcat", "Keşif", "Bilgi", "Haber"], correctAnswer: 1, explanation: "Discovery = Keşif.", type: "vocabulary" },
    { question: "The book ___ I bought is exciting.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesne nitelemesi: 'which'.", type: "grammar" },
    { question: "'Scientist' ne demek?", options: ["Öğretmen", "Bilim insanı", "Doktor", "Mühendis"], correctAnswer: 1, explanation: "Scientist = Bilim insanı.", type: "vocabulary" },
    { question: "A hospital is a place ___ people go when they are sick.", options: ["who", "which", "where", "that"], correctAnswer: 2, explanation: "Yer nitelemesi: 'where'.", type: "grammar" },
    { question: "'Star' ne demek?", options: ["Gezegen", "Yıldız", "Ay", "Güneş"], correctAnswer: 1, explanation: "Star = Yıldız.", type: "vocabulary" },
    { question: "The animals ___ live in the forest are wild.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Hayvanlar/Nesneler için 'which' kullanılır.", type: "grammar" },
    { question: "'Laboratory' ne demek?", options: ["Kütüphane", "Laboratuvar", "Sınıf", "Ofis"], correctAnswer: 1, explanation: "Laboratory = Laboratuvar.", type: "vocabulary" },
    { question: "Is that the girl ___ won the prize?", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi: 'who'.", type: "grammar" },
    { question: "'Billion' ne demek?", options: ["Milyon", "Milyar", "Trilyon", "Bin"], correctAnswer: 1, explanation: "Billion = Milyar.", type: "vocabulary" },
    { question: "The phone ___ is on the table is mine.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne nitelemesi: 'which'.", type: "grammar" },
    { question: "Science helps us ___ the world.", options: ["understand", "see", "know", "Hepsi"], correctAnswer: 3, explanation: "Bilim dünyayı anlamamıza yardımcı olur.", type: "vocabulary" },
    { question: "A library is a place ___ you can borrow books.", options: ["which", "where", "who", "that"], correctAnswer: 1, explanation: "Yer nitelemesi: 'where'.", type: "grammar" },
    { question: "'Universe' ne demek?", options: ["Dünya", "Gezegen", "Evren", "Uzay"], correctAnswer: 2, explanation: "Universe = Evren.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Planets, Inventions & Definitions)
const u143q2: EnglishQuestion[] = [
    { question: "Mars is known as the ___ planet.", options: ["blue", "red", "green", "hot"], correctAnswer: 1, explanation: "Mars 'Kızıl Gezegen' (Red Planet) olarak bilinir.", type: "vocabulary" },
    { question: "A telescope is a tool ___ we use to see stars.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Alet/Nesne nitelemesi: 'which'.", type: "grammar" },
    { question: "The first man ___ walked on the moon was Neil Armstrong.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi: 'who'.", type: "grammar" },
    { question: "'Gravity' ne demek?", options: ["Hız", "Yerçekimi", "Boşluk", "Işık"], correctAnswer: 1, explanation: "Gravity = Yerçekimi.", type: "vocabulary" },
    { question: "Silicon Valley is the place ___ many tech companies are.", options: ["which", "where", "who", "that"], correctAnswer: 1, explanation: "Yer nitelemesi: 'where'.", type: "grammar" },
    { question: "He is the inventor ___ created this machine.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Inventor = Mucit (Kişi).", type: "grammar" },
    { question: "'Research' ne demek?", options: ["Arama", "Araştırma", "Bulma", "İnceleme"], correctAnswer: 1, explanation: "Research = Araştırma.", type: "vocabulary" },
    { question: "The internet is a network ___ connects the world.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne/Kavram nitelemesi: 'which'.", type: "grammar" },
    { question: "Is there a reason ___ you are late?", options: ["why", "who", "which", "where"], correctAnswer: 0, explanation: "Sebep belirtirken 'why' kullanılır.", type: "grammar" },
    { question: "'Rocket' ne demek?", options: ["Uçak", "Roket", "Gemi", "Tren"], correctAnswer: 1, explanation: "Rocket = Roket.", type: "vocabulary" },
    { question: "Astronauts are people ___ travel to space.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi: 'who'.", type: "grammar" },
    { question: "Liquid ___ is water that you can drink.", options: ["ice", "steam", "water", "fluid"], correctAnswer: 2, explanation: "Liquid = Sıvı.", type: "vocabulary" },
    { question: "That is the house ___ my parents were born.", options: ["which", "where", "who", "that"], correctAnswer: 1, explanation: "Yer nitelemesi: 'where'.", type: "grammar" },
    { question: "'Energy' can be ___.", options: ["solar", "wind", "electric", "Hepsi"], correctAnswer: 3, explanation: "Enerji; güneş, rüzgar veya elektrik kaynaklı olabilir.", type: "vocabulary" },
    { question: "The movie ___ we saw was about aliens.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'Microscope' ne demek?", options: ["Teleskop", "Mikroskop", "Kamera", "Lens"], correctAnswer: 1, explanation: "Microscope = Mikroskop.", type: "vocabulary" },
    { question: "Thomas Edison was the man ___ invented the lightbulb.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "The earth ___ around the sun.", options: ["goes", "moves", "rotates", "Hepsi"], correctAnswer: 3, explanation: "Dünya güneşin etrafında döner.", type: "vocabulary" },
    { question: "A compass is a tool ___ shows direction.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'Evidence' supports a ___.", options: ["theory", "test", "book", "talk"], correctAnswer: 0, explanation: "Evidence (Kanıt) bir teoriyi destekler.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Theories, Wonders & Complex Clauses)
const u143q3: EnglishQuestion[] = [
    { question: "The man ___ daughter is a scientist is my friend.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik (Whose) belirtirken kullanılır. (Kızı bilim insanı olan adam).", type: "grammar" },
    { question: "Quantum physics is a subject ___ is very difficult.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne/Konu nitelemesi.", type: "grammar" },
    { question: "'Evolution' ne demek?", options: ["Devrim", "Evrim", "Değişim", "Gelişim"], correctAnswer: 1, explanation: "Evolution = Evrim.", type: "vocabulary" },
    { question: "The city ___ I grew up is very small.", options: ["which", "where", "in which", "B ve C"], correctAnswer: 3, explanation: "Yer nitelemesinde 'where' veya 'in which' kullanılabilir.", type: "grammar" },
    { question: "Black holes are places ___ gravity is very strong.", options: ["which", "where", "who", "that"], correctAnswer: 1, explanation: "Yer nitelemesi.", type: "grammar" },
    { question: "'Biodiversity' means ___.", options: ["variety of life", "nature", "animals", "plants"], correctAnswer: 0, explanation: "Biodiversity = Biyoçeşitlilik (Yaşam çeşitliliği).", type: "vocabulary" },
    { question: "The woman ___ you met yesterday is a professor.", options: ["who", "whom", "which", "A ve B"], correctAnswer: 3, explanation: "Nesne konumundaki kişiler için 'who' veya 'whom' kullanılabilir.", type: "grammar" },
    { question: "'Atmosphere' protects the earth from ___.", options: ["rain", "radiation", "sun", "wind"], correctAnswer: 1, explanation: "Atmosfer radyasyondan korur.", type: "vocabulary" },
    { question: "That is the student ___ grade was the highest.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi (Notu en yüksek olan öğrenci).", type: "grammar" },
    { question: "Robots are machines ___ can do human tasks.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'Artificial Intelligence' (AI) ne demek?", options: ["Doğal Zeka", "Yapay Zeka", "Akıllı Robot", "Bilgisayar"], correctAnswer: 1, explanation: "AI = Yapay Zeka.", type: "vocabulary" },
    { question: "I don't know the person ___ sent this email.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "The sun, ___ is a star, is very hot.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Virgülle ayrılan ek bilgi cümlelerinde nesneler için sadece 'which' kullanılır (that kullanılmaz).", type: "grammar" },
    { question: "'Vaccine' ne demek?", options: ["İlaç", "Aşı", "Mikrop", "Hücre"], correctAnswer: 1, explanation: "Vaccine = Aşı.", type: "vocabulary" },
    { question: "That was the summer ___ we went to NASA.", options: ["when", "where", "which", "who"], correctAnswer: 0, explanation: "Zaman nitelemesi için 'when' kullanılır.", type: "grammar" },
    { question: "The Seven Wonders of the ___ world.", options: ["ancient", "old", "new", "A ve B"], correctAnswer: 0, explanation: "Dünyanın Yedi Harikası için 'Ancient World' (Antik Dünya) kullanılır.", type: "vocabulary" },
    { question: "He is the author ___ book won an award.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "Is this the software ___ you recommended?", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'DNA' stands for deoxyribonucleic ___.", options: ["atom", "acid", "animal", "air"], correctAnswer: 1, explanation: "DNA = Deoksiribonükleik asit.", type: "vocabulary" },
    { question: "The scientist ___ Nobel Prize was for Chemistry died recently.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik (Ödülü kimya alanında olan...).", type: "grammar" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Scientific Dialogues & Idioms)
const u143q4: EnglishQuestion[] = [
    { question: "A: What is the ___ of your experiment? B: It shows that light travels fast.", options: ["purpose", "meaning", "result", "A ve C"], correctAnswer: 3, explanation: "Purpose/Result = Amaç/Sonuç.", type: "vocabulary" },
    { question: "It's not rocket ___.", options: ["science", "math", "test", "study"], correctAnswer: 0, explanation: "It's not rocket science = Atom parçalamıyoruz ya! / O kadar da zor değil (deyim).", type: "vocabulary" },
    { question: "A: Did you hear about the new discovery? B: Yes, it is ___.", options: ["groundbreaking", "amazing", "great", "Hepsi"], correctAnswer: 3, explanation: "Groundbreaking = Çığır açan.", type: "vocabulary" },
    { question: "Once in a blue ___.", options: ["sun", "moon", "star", "planet"], correctAnswer: 1, explanation: "Once in a blue moon = Kırk yılda bir (bilimsel kökenli deyim).", type: "vocabulary" },
    { question: "Everything is under ___.", options: ["control", "test", "light", "sun"], correctAnswer: 0, explanation: "Under control = Kontrol altında.", type: "vocabulary" },
    { question: "A: Who is the person ___ discovered penicillin? B: Alexander Fleming.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "Blind someone with ___.", options: ["science", "light", "test", "math"], correctAnswer: 0, explanation: "Blind with science = Karmaşık terimlerle birinin kafasını karıştırmak (deyim).", type: "vocabulary" },
    { question: "A: Is the theory ___? B: Yes, scientists proved it.", options: ["valid", "true", "correct", "Hepsi"], correctAnswer: 3, explanation: "Valid = Geçerli.", type: "vocabulary" },
    { question: "Reach for the ___.", options: ["stars", "moon", "sun", "sky"], correctAnswer: 0, explanation: "Reach for the stars = İmkansızı hedeflemek / Büyük hayaller kurmak (deyim).", type: "vocabulary" },
    { question: "A: Where is the telescope ___ you bought? B: In my room.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "The sky is the ___.", options: ["limit", "end", "beginning", "top"], correctAnswer: 0, explanation: "The sky is the limit = Sınır gökyüzüdür / Hiçbir engel yok (deyim).", type: "vocabulary" },
    { question: "A: What is your favorite ___ of science? B: Biology.", options: ["part", "branch", "area", "B ve C"], correctAnswer: 3, explanation: "Branch of science = Bilim dalı.", type: "vocabulary" },
    { question: "Down to ___.", options: ["earth", "ground", "world", "base"], correctAnswer: 0, explanation: "Down to earth = Gerçekçi / Mütevazı (deyim).", type: "vocabulary" },
    { question: "A: Have you seen the man ___ invented this? B: No, not yet.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "It's a small ___.", options: ["world", "planet", "place", "city"], correctAnswer: 0, explanation: "It's a small world = Dünya küçük (evrensel bir ifade).", type: "vocabulary" },
    { question: "A: What's the ___ to the moon? B: About 384,000 km.", options: ["way", "distance", "length", "path"], correctAnswer: 1, explanation: "Distance = Mesafe.", type: "vocabulary" },
    { question: "Light at the end of the ___.", options: ["tunnel", "road", "path", "lab"], correctAnswer: 0, explanation: "Light at the end of the tunnel = Tünelin sonundaki ışık / Umut (deyim).", type: "vocabulary" },
    { question: "A: Is the earth ___? B: No, it's round.", options: ["flat", "square", "fast", "big"], correctAnswer: 0, explanation: "Flat = Düz.", type: "vocabulary" },
    { question: "Back to the ___ board.", options: ["drawing", "math", "test", "writing"], correctAnswer: 0, explanation: "Back to the drawing board = Sil baştan başlamak (deyim).", type: "vocabulary" },
    { question: "The ___ of science is endless.", options: ["wonder", "magic", "beauty", "Hepsi"], correctAnswer: 3, explanation: "Bilimin harikası/büyüsü/güzelliği sonsuzdur.", type: "vocabulary" }
];

// Unit 144: Technology & Future - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Tech & 'Will' predictions)
const u144q1: EnglishQuestion[] = [
    { question: "I think people ___ live on Mars in the future.", options: ["will", "are going to", "do", "did"], correctAnswer: 0, explanation: "Gelecek tahminleri (tahmin/düşünce) için 'will' kullanılır.", type: "grammar" },
    { question: "'Smartphone' ne demek?", options: ["Akıllı Telefon", "Bilgisayar", "Tablet", "Radyo"], correctAnswer: 0, explanation: "Smartphone = Akıllı telefon.", type: "vocabulary" },
    { question: "Will you ___ me an email?", options: ["send", "sending", "sends", "sent"], correctAnswer: 0, explanation: "Will + V1 (yalın fiil).", type: "grammar" },
    { question: "'Internet' connects people ___.", options: ["offline", "online", "together", "B ve C"], correctAnswer: 3, explanation: "İnternet insanları çevrimiçi (online) ve bir arada (together) tutar.", type: "vocabulary" },
    { question: "I ___ be a famous scientist one day.", options: ["will", "am", "was", "go"], correctAnswer: 0, explanation: "Gelecek ideali/tahmini: 'will'.", type: "grammar" },
    { question: "'Application' (App) ne demek?", options: ["Oyun", "Uygulama", "Program", "Hepsi"], correctAnswer: 3, explanation: "App genellikle mobil uygulama/program anlamına gelir.", type: "vocabulary" },
    { question: "___ it rain tomorrow?", options: ["Will", "Do", "Is", "Are"], correctAnswer: 0, explanation: "Hava durumu tahmini sorusu: 'Will it rain...?'", type: "grammar" },
    { question: "'Laptop' ne demek?", options: ["Masaüstü Bilgisayar", "Dizüstü Bilgisayar", "Ekran", "Klavye"], correctAnswer: 1, explanation: "Laptop = Dizüstü bilgisayar.", type: "vocabulary" },
    { question: "In 2050, cars ___ fly.", options: ["will", "doing", "are", "have"], correctAnswer: 0, explanation: "Gelecek tahmini.", type: "grammar" },
    { question: "'Screen' ne demek?", options: ["Klavye", "Fare", "Ekran", "Kasa"], correctAnswer: 2, explanation: "Screen = Ekran.", type: "vocabulary" },
    { question: "I don't think it ___ be easy.", options: ["will", "is", "was", "be"], correctAnswer: 0, explanation: "I don't think + will (olumsuz tahmin).", type: "grammar" },
    { question: "'Wireless' ne demek?", options: ["Kablolu", "Kablosuz", "Hızlı", "Yavaş"], correctAnswer: 1, explanation: "Wireless = Kablosuz.", type: "vocabulary" },
    { question: "___ you help me with this app?", options: ["Will", "Do", "Are", "Did"], correctAnswer: 0, explanation: "Rica/Gelecek yardımı: 'Will you help...?'", type: "grammar" },
    { question: "'Password' ne demek?", options: ["Kullanıcı adı", "Şifre/Parola", "E-posta", "Giriş"], correctAnswer: 1, explanation: "Password = Şifre.", type: "vocabulary" },
    { question: "They ___ definitely travel to space.", options: ["will", "are", "do", "going"], correctAnswer: 0, explanation: "Kesinlik belirten tahmin: 'will definitely'.", type: "grammar" },
    { question: "'Battery' ne demek?", options: ["Ekran", "Pil/Batarya", "Şarj aleti", "Kablo"], correctAnswer: 1, explanation: "Battery = Pil/Batarya.", type: "vocabulary" },
    { question: "The world ___ change a lot.", options: ["will", "is", "does", "be"], correctAnswer: 0, explanation: "Gelecek değişimi tahmini.", type: "grammar" },
    { question: "'Click' on the button.", options: ["Tıkla", "Bas", "Dokun", "Hepsi"], correctAnswer: 3, explanation: "Click = Tıklamak/Basmak.", type: "vocabulary" },
    { question: "I hope you ___ win.", options: ["will", "are", "do", "going"], correctAnswer: 0, explanation: "Umut belirtirken 'will' kullanılır.", type: "grammar" },
    { question: "'Download' ne demek?", options: ["Yüklemek", "İndirmek", "Silmek", "Kopyalamak"], correctAnswer: 1, explanation: "Download = İndirmek.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Gadgets, Social Media & 'Be going to')
const u144q2: EnglishQuestion[] = [
    { question: "I ___ buy a new tablet next week. I've saved enough money.", options: ["am going to", "will", "go to", "am"], correctAnswer: 0, explanation: "Planlanmış/Niyet edilmiş gelecek için 'be going to' kullanılır.", type: "grammar" },
    { question: "'Social Media' keeps us ___.", options: ["connected", "alone", "sad", "angry"], correctAnswer: 0, explanation: "Connected = Bağlantıda.", type: "vocabulary" },
    { question: "Are you ___ watch the tech show tonight?", options: ["going to", "will", "go", "doing"], correctAnswer: 0, explanation: "Are you going to...? (İzleyecek misin? - Plan/Niyet).", type: "grammar" },
    { question: "'Notification' ne demek?", options: ["Mesaj", "Bildirim", "Arama", "Hata"], correctAnswer: 1, explanation: "Notification = Bildirim.", type: "vocabulary" },
    { question: "Look at those clouds! It ___ rain.", options: ["is going to", "will", "is", "rains"], correctAnswer: 0, explanation: "Gözle görülür bir kanıta dayanarak yapılan tahmin: 'is going to'.", type: "grammar" },
    { question: "I need to ___ my phone. The battery is low.", options: ["charge", "change", "fix", "clean"], correctAnswer: 0, explanation: "Charge = Şarj etmek.", type: "vocabulary" },
    { question: "What are you ___ do after the course?", options: ["going to", "will", "doing", "go"], correctAnswer: 0, explanation: "Gelecek planı sorusu.", type: "grammar" },
    { question: "'Update' ne demek?", options: ["Yükleme", "Güncelleme", "Silme", "İndirme"], correctAnswer: 1, explanation: "Update = Güncelleme.", type: "vocabulary" },
    { question: "She is ___ start her own YouTube channel.", options: ["going to", "will", "is", "be"], correctAnswer: 0, explanation: "Niyet/Plan.", type: "grammar" },
    { question: "Don't forget to ___ your work.", options: ["save", "keep", "hold", "A ve B"], correctAnswer: 3, explanation: "Save = Kaydetmek.", type: "vocabulary" },
    { question: "Is he ___ call you back?", options: ["going to", "will", "go", "being"], correctAnswer: 0, explanation: "Be going to soru yapısı.", type: "grammar" },
    { question: "'Follow' someone on Instagram.", options: ["Takip et", "İzle", "Bak", "Durdur"], correctAnswer: 0, explanation: "Follow = Takip etmek.", type: "vocabulary" },
    { question: "We ___ visit the robot exhibition tomorrow.", options: ["are going to", "will", "are", "be"], correctAnswer: 0, explanation: "Planlanmış bir etkinlik.", type: "grammar" },
    { question: "'Device' ne demek?", options: ["Cihaz", "Alet", "Ekipman", "Hepsi"], correctAnswer: 3, explanation: "Device = Cihaz/Aygıt.", type: "vocabulary" },
    { question: "I'm ___ stay at home and play video games.", options: ["going to", "will", "am", "go"], correctAnswer: 0, explanation: "Kişisel plan.", type: "grammar" },
    { question: "'Post' a comment.", options: ["Yaz", "Gönder/Paylaş", "Oku", "Sil"], correctAnswer: 1, explanation: "Post = Paylaşmak/Göndermek.", type: "vocabulary" },
    { question: "They ___ sell their old computers.", options: ["are going to", "will", "going", "sold"], correctAnswer: 0, explanation: "Plan/Niyet.", type: "grammar" },
    { question: "'Keyboard' ne demek?", options: ["Fare", "Klavye", "Ekran", "Kablo"], correctAnswer: 1, explanation: "Keyboard = Klavye.", type: "vocabulary" },
    { question: "Are they ___ travel by electric car?", options: ["going to", "will", "doing", "go"], correctAnswer: 0, explanation: "Niyet sorusu.", type: "grammar" },
    { question: "The gadget is very ___.", options: ["useful", "fast", "smart", "Hepsi"], correctAnswer: 3, explanation: "Gadget (küçük cihaz) kullanışlı, hızlı veya akıllı olabilir.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Future Scenarios & First Conditional)
const u144q3: EnglishQuestion[] = [
    { question: "If I have enough money, I ___ buy a VR headset.", options: ["will", "am", "would", "do"], correctAnswer: 0, explanation: "First Conditional: If + Present Simple, Will + V1.", type: "grammar" },
    { question: "Artificial ___ (AI) is changing everything.", options: ["Intelligence", "Information", "Idea", "Interest"], correctAnswer: 0, explanation: "Artificial Intelligence = Yapay Zeka.", type: "vocabulary" },
    { question: "If she ___ the app, she will see the results.", options: ["opens", "open", "will open", "opening"], correctAnswer: 0, explanation: "If cümlesinde present simple (If she opens...) kullanılır.", type: "grammar" },
    { question: "'Innovation' ne demek?", options: ["Yenilik/İnovasyon", "İcat", "Araştırma", "Değişim"], correctAnswer: 0, explanation: "Innovation = Yenilik.", type: "vocabulary" },
    { question: "We ___ late if we don't leave now.", options: ["will be", "are", "going to be", "be"], correctAnswer: 0, explanation: "First Conditional: Gerçekleşme ihtimali olan sonuç.", type: "grammar" },
    { question: "Cloud ___ allows you to store data online.", options: ["computing", "storage", "saving", "A ve B"], correctAnswer: 3, explanation: "Bulut bilişim/depolama.", type: "vocabulary" },
    { question: "If they ___ hard, they will succeed.", options: ["work", "works", "will work", "working"], correctAnswer: 0, explanation: "İf + Present.", type: "grammar" },
    { question: "'Security' is very important online.", options: ["Güvenlik", "Hız", "Gizlilik", "Veri"], correctAnswer: 0, explanation: "Security = Güvenlik.", type: "vocabulary" },
    { question: "Will you go to the party if I ___?", options: ["go", "will go", "am going", "goes"], correctAnswer: 0, explanation: "First Conditional soru kalıbı.", type: "grammar" },
    { question: "The ___ of the future is digital.", options: ["future", "economy", "money", "A ve B"], correctAnswer: 3, explanation: "Geleceğin ekonomisi dijitaldir.", type: "vocabulary" },
    { question: "If it ___ tomorrow, we'll stay inside.", options: ["rains", "rain", "will rain", "raining"], correctAnswer: 0, explanation: "If + It + rains (Present Simple).", type: "grammar" },
    { question: "'Data' ne demek?", options: ["Bilgi", "Veri", "Sayı", "Dosya"], correctAnswer: 1, explanation: "Data = Veri.", type: "vocabulary" },
    { question: "I'll help you if I ___ time.", options: ["have", "will have", "am having", "has"], correctAnswer: 0, explanation: "If + I + have.", type: "grammar" },
    { question: "Virtual ___ (VR) is becoming more popular.", options: ["Reality", "Real", "Room", "Run"], correctAnswer: 0, explanation: "Virtual Reality = Sanal Gerçeklik.", type: "vocabulary" },
    { question: "If you ___ the button, the machine will start.", options: ["press", "will press", "pressing", "pressed"], correctAnswer: 0, explanation: "If + You + press.", type: "grammar" },
    { question: "'Efficient' ne demek?", options: ["Hızlı", "Verimli/Etkili", "Güçlü", "Yeni"], correctAnswer: 1, explanation: "Efficient = Verimli.", type: "vocabulary" },
    { question: "She'll be happy if she ___ the job.", options: ["gets", "get", "will get", "getting"], correctAnswer: 0, explanation: "If + She + gets.", type: "grammar" },
    { question: "Cyber ___ is a serious problem.", options: ["crime", "security", "attack", "Hepsi"], correctAnswer: 3, explanation: "Siber suç, güvenlik veya saldırı.", type: "vocabulary" },
    { question: "If we don't protect our data, we ___ lose it.", options: ["will", "are", "do", "must"], correctAnswer: 0, explanation: "First Conditional sonuç cümlesi.", type: "grammar" },
    { question: "Digital ___ is growing rapidly.", options: ["marketing", "world", "age", "Hepsi"], correctAnswer: 3, explanation: "Dijital pazarlama/dünya/çağ.", type: "vocabulary" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Tech Dialogues & Idioms)
const u144q4: EnglishQuestion[] = [
    { question: "A: My phone is frozen. B: Have you tried ___ it?", options: ["restarting", "to restart", "restart", "restarted"], correctAnswer: 0, explanation: "Try + V-ing = Bir çözüm olarak denemek.", type: "grammar" },
    { question: "It's not a bug, it's a ___.", options: ["feature", "glitch", "problem", "gift"], correctAnswer: 0, explanation: "Bir yazılım esprisi/kalıbı: O bir hata değil, özellik! (feature).", type: "vocabulary" },
    { question: "A: Will AI replace humans? B: It's ___ to say.", options: ["hard", "difficult", "impossible", "Hepsi"], correctAnswer: 3, explanation: "Söylemesi zor/imkansız.", type: "vocabulary" },
    { question: "Get your wires ___.", options: ["crossed", "cut", "fixed", "made"], correctAnswer: 0, explanation: "Get wires crossed = Birini yanlış anlamak / İletişim kopukluğu yaşamak (deyim).", type: "vocabulary" },
    { question: "A: What do you do? B: I'm a software ___.", options: ["developer", "maker", "builder", "worker"], correctAnswer: 0, explanation: "Software developer = Yazılım geliştirici.", type: "vocabulary" },
    { question: "Blow a ___.", options: ["fuse", "wire", "light", "bulb"], correctAnswer: 0, explanation: "Blow a fuse = Çok öfkelenmek / Tepesi atmak (teknoloji kökenli deyim).", type: "vocabulary" },
    { question: "A: Is the app free? B: Yes, it's ___ source.", options: ["open", "free", "public", "new"], correctAnswer: 0, explanation: "Open source = Açık kaynak.", type: "vocabulary" },
    { question: "Hit the ___.", options: ["panic button", "red button", "switch", "key"], correctAnswer: 0, explanation: "Hit the panic button = Paniklemek (deyim).", type: "vocabulary" },
    { question: "A: Do you store files on your computer? B: No, I use the ___.", options: ["cloud", "sky", "air", "web"], correctAnswer: 0, explanation: "Cloud = Bulut (depolama).", type: "vocabulary" },
    { question: "Pull the ___.", options: ["plug", "wire", "cable", "cord"], correctAnswer: 0, explanation: "Pull the plug = Fişini çekmek / Bir işi durdurmak (deyim).", type: "vocabulary" },
    { question: "A: Is the internet fast? B: It's ___ high-speed.", options: ["ultra", "super", "very", "Hepsi"], correctAnswer: 3, explanation: "Çok hızlı/Ultra hızlı.", type: "vocabulary" },
    { question: "On the same ___.", options: ["wavelength", "line", "page", "A ve C"], correctAnswer: 3, explanation: "On the same wavelength / page = Aynı fikirde/dalga boyunda olmak (deyim).", type: "vocabulary" },
    { question: "A: Can I use your Wi-Fi? B: Sure, let me give you the ___.", options: ["password", "code", "key", "number"], correctAnswer: 0, explanation: "Wifi şifresi.", type: "vocabulary" },
    { question: "Light years ___.", options: ["ahead", "before", "after", "away"], correctAnswer: 0, explanation: "Light years ahead = Çok ileride / Çağının ötesinde (deyim).", type: "vocabulary" },
    { question: "A: What's new? B: I just got a new ___.", options: ["gadget", "device", "thing", "A ve B"], correctAnswer: 3, explanation: "Gadget/Device = Cihaz.", type: "vocabulary" },
    { question: "Silver ___.", options: ["bullet", "spoon", "ring", "line"], correctAnswer: 0, explanation: "Silver bullet = Tek seferde çözüm getiren mucizevi ilaç/çözüm (deyim).", type: "vocabulary" },
    { question: "A: If you don't update the software, it ___ work correctly.", options: ["won't", "don't", "isn't", "not"], correctAnswer: 0, explanation: "First Conditional olumsuz sonuç.", type: "grammar" },
    { question: "State of the ___.", options: ["art", "world", "tech", "time"], correctAnswer: 0, explanation: "State of the art = Son teknoloji (deyim).", type: "vocabulary" },
    { question: "A: Are you going to the tech conference? B: If I ___ time, I will.", options: ["have", "will have", "am having", "had"], correctAnswer: 0, explanation: "If + Present.", type: "grammar" },
    { question: "The future is ___.", options: ["now", "bright", "here", "Hepsi"], correctAnswer: 3, explanation: "Gelecek şimdi/parlak/burada.", type: "vocabulary" }
];

// Unit 145: Social Issues & Society - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Society & 'Just' for recent actions)
const u145q1: EnglishQuestion[] = [
    { question: "I have ___ finished my project about society.", options: ["just", "yet", "already", "ever"], correctAnswer: 0, explanation: "Eylemin 'henüz/az önce' bittiğini belirtmek için 'just' kullanılır.", type: "grammar" },
    { question: "'Society' ne demek?", options: ["Şehir", "Toplum", "Arkadaşlık", "Okul"], correctAnswer: 1, explanation: "Society = Toplum.", type: "vocabulary" },
    { question: "Have you ___ eaten dinner?", options: ["just", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Soru cümlelerinde 'just' (az önce) veya 'already' (çoktan) kullanılabilir.", type: "grammar" },
    { question: "'Volunteer' ne demek?", options: ["Çalışan", "Gönüllü", "Zengin", "Lider"], correctAnswer: 1, explanation: "Volunteer = Gönüllü.", type: "vocabulary" },
    { question: "She has ___ arrived at the community center.", options: ["just", "yet", "been", "go"], correctAnswer: 0, explanation: "Az önce vardı (just arrived).", type: "grammar" },
    { question: "'Help' ne demek?", options: ["Vermek", "Yardım etmek", "İstemek", "Sormak"], correctAnswer: 1, explanation: "Help = Yardım etmek.", type: "vocabulary" },
    { question: "They have ___ seen the news.", options: ["just", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Haberleri az önce veya çoktan gördüler.", type: "grammar" },
    { question: "'Crowd' ne demek?", options: ["Azlık", "Kalabalık", "Yüzme", "Koşma"], correctAnswer: 1, explanation: "Crowd = Kalabalık.", type: "vocabulary" },
    { question: "___ you just called me?", options: ["Have", "Has", "Do", "Did"], correctAnswer: 0, explanation: "Present Perfect soru: Have + You + Just + V3.", type: "grammar" },
    { question: "'Poor' ne demek?", options: ["Zengin", "Fakir/Yoksul", "Mutlu", "Üzgün"], correctAnswer: 1, explanation: "Poor = Fakir.", type: "vocabulary" },
    { question: "We have ___ started the meeting.", options: ["just", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Toplantıya az önce veya çoktan başladık.", type: "grammar" },
    { question: "'Rich' ne demek?", options: ["Fakir", "Zengin", "Güçlü", "Zayıf"], correctAnswer: 1, explanation: "Rich = Zengin.", type: "vocabulary" },
    { question: "He has ___ bought a gift for the charity.", options: ["just", "yet", "been", "already"], correctAnswer: 0, explanation: "Az önce hediye aldı.", type: "grammar" },
    { question: "'Neighborhood' ne demek?", options: ["Şehir", "Mahalle/Komşuluk", "Ülke", "Köy"], correctAnswer: 1, explanation: "Neighborhood = Mahalle.", type: "vocabulary" },
    { question: "Have they ___ finished their lunch?", options: ["just", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Öğle yemeklerini az önce veya çoktan bitirdiler mi?", type: "grammar" },
    { question: "'Kind' ne demek?", options: ["Zalim", "Nazik/Kibar", "Kızgın", "Yorgun"], correctAnswer: 1, explanation: "Kind = Nazik.", type: "vocabulary" },
    { question: "I've ___ heard the story.", options: ["just", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Hikayeyi az önce veya çoktan duydum.", type: "grammar" },
    { question: "'Problem' ne demek?", options: ["Çözüm", "Sorun/Problem", "Cevap", "Soru"], correctAnswer: 1, explanation: "Problem = Sorun.", type: "vocabulary" },
    { question: "Has she ___ left the office?", options: ["just", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Ofisten az önce veya çoktan çıktı mı?", type: "grammar" },
    { question: "'Unity' ne demek?", options: ["Ayrılık", "Birlik/Beraberlik", "Savaş", "Barış"], correctAnswer: 1, explanation: "Unity = Birlik.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Volunteering, Charity & 'Already/Yet')
const u145q2: EnglishQuestion[] = [
    { question: "I haven't finished my homework ___.", options: ["already", "just", "yet", "ever"], correctAnswer: 2, explanation: "Olumsuz cümlelerin sonunda 'henüz' anlamında 'yet' kullanılır.", type: "grammar" },
    { question: "'Charity' ne demek?", options: ["Şirket", "Hayır kurumu/Vakıf", "Okul", "Hastane"], correctAnswer: 1, explanation: "Charity = Hayır kurumu.", type: "vocabulary" },
    { question: "Have you seen that movie ___?", options: ["already", "just", "yet", "A ve C"], correctAnswer: 3, explanation: "Soru cümlelerinde 'yet' (henüz) veya 'already' (çoktan) kullanılabilir.", type: "grammar" },
    { question: "We should ___ money to the poor.", options: ["donate", "take", "keep", "save"], correctAnswer: 0, explanation: "Donate = Bağış yapmak.", type: "vocabulary" },
    { question: "He has ___ seen the Great Wall of China.", options: ["already", "yet", "just", "A ve C"], correctAnswer: 3, explanation: "Çoktan veya az önce gördü.", type: "grammar" },
    { question: "'Support' ne demek?", options: ["Zarar vermek", "Desteklemek", "İzlemek", "Durdurmak"], correctAnswer: 1, explanation: "Support = Desteklemek.", type: "vocabulary" },
    { question: "Has the bus arrived ___?", options: ["already", "just", "yet", "A ve C"], correctAnswer: 3, explanation: "Otobüs henüz (yet) veya çoktan (already) geldi mi?", type: "grammar" },
    { question: "'Disabled' ne demek?", options: ["Engelli", "Güçlü", "Hasta", "Yaşlı"], correctAnswer: 0, explanation: "Disabled = Engelli.", type: "vocabulary" },
    { question: "They have ___ cleaned the park.", options: ["already", "yet", "just", "A ve C"], correctAnswer: 3, explanation: "Parkı çoktan veya az önce temizlediler.", type: "grammar" },
    { question: "I want to be a ___ for the Red Cross.", options: ["volunteer", "worker", "boss", "leader"], correctAnswer: 0, explanation: "Kızılay (Red Cross) için gönüllü (volunteer) olmak.", type: "vocabulary" },
    { question: "She hasn't called me ___.", options: ["already", "just", "yet", "ever"], correctAnswer: 2, explanation: "Beni henüz (yet) aramadı.", type: "grammar" },
    { question: "' Homeless' ne demek?", options: ["Evsiz", "Kimsesiz", "Yalnız", "Mutsuz"], correctAnswer: 0, explanation: "Homeless = Evsiz.", type: "vocabulary" },
    { question: "We've ___ planned the charity event.", options: ["already", "yet", "just", "A ve C"], correctAnswer: 3, explanation: "Etkinliği çoktan veya az önce planladık.", type: "grammar" },
    { question: "'Equality' ne demek?", options: ["Adalet", "Eşitlik", "Özgürlük", "Barış"], correctAnswer: 1, explanation: "Equality = Eşitlik.", type: "vocabulary" },
    { question: "Have they started the campaign ___?", options: ["already", "just", "yet", "A ve C"], correctAnswer: 3, explanation: "Kampanyaya çoktan veya henüz başladılar mı?", type: "grammar" },
    { question: "'Campaign' ne demek?", options: ["Savaş", "Kampanya", "Yarışma", "Toplantı"], correctAnswer: 1, explanation: "Campaign = Kampanya.", type: "vocabulary" },
    { question: "I haven't donated any clothes ___.", options: ["already", "just", "yet", "be"], correctAnswer: 2, explanation: "Henüz kıyafet bağışlamadım.", type: "grammar" },
    { question: "'Elderly' ne demek?", options: ["Genç", "Yaşlı", "Çocuk", "Bebek"], correctAnswer: 1, explanation: "Elderly = Yaşlı (kibar bir ifade).", type: "vocabulary" },
    { question: "She has ___ collected $100.", options: ["already", "yet", "just", "A ve C"], correctAnswer: 3, explanation: "Çoktan veya az önce topladı.", type: "grammar" },
    { question: "People should ___ each other.", options: ["respect", "hate", "fight", "ignore"], correctAnswer: 0, explanation: "Respect = Saygı duymak.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Social Problems & Present Perfect nuances)
const u145q3: EnglishQuestion[] = [
    { question: "___ is a big problem in many countries.", options: ["Poverty", "Money", "Work", "Jobs"], correctAnswer: 0, explanation: "Poverty = Fakirlik/Yoksulluk.", type: "vocabulary" },
    { question: "I've ___ finished the book you lent me.", options: ["already", "yet", "just", "A ve C"], correctAnswer: 3, explanation: "Çoktan veya az önce bitirdim.", type: "grammar" },
    { question: "The government hasn't solved the crisis ___.", options: ["already", "yet", "just", "ever"], correctAnswer: 1, explanation: "Hükümet krizi henüz (yet) çözmedi.", type: "grammar" },
    { question: "'Unemployment' ne demek?", options: ["İşsizlik", "Eğitimsizlik", "Fakirlik", "Yalnızlık"], correctAnswer: 0, explanation: "Unemployment = İşsizlik.", type: "vocabulary" },
    { question: "Have you ___ been to a protest?", options: ["ever", "never", "just", "yet"], correctAnswer: 0, explanation: "Ever = Hiç (deneyim sorusu).", type: "grammar" },
    { question: "We must fight against ___.", options: ["racism", "pollution", "crime", "Hepsi"], correctAnswer: 3, explanation: "Irkçılık, kirlilik veya suçla savaşmalıyız.", type: "vocabulary" },
    { question: "She has ___ joined a social club.", options: ["recently", "just", "already", "Hepsi"], correctAnswer: 3, explanation: "Son zamanlarda / az önce / çoktan katıldı.", type: "grammar" },
    { question: "'Justice' describes a fair ___.", options: ["society", "system", "world", "Hepsi"], correctAnswer: 3, explanation: "Adalet adil bir toplumu / sistemi / dünyayı niteler.", type: "vocabulary" },
    { question: "I haven't seen the results of the survey ___.", options: ["at all", "yet", "already", "just"], correctAnswer: 1, explanation: "Anket sonuçlarını henüz (yet) görmedim.", type: "grammar" },
    { question: "'Education' is the key to ___.", options: ["success", "money", "power", "failure"], correctAnswer: 0, explanation: "Eğitim başarının anahtarıdır.", type: "vocabulary" },
    { question: "Has he ___ found a solution?", options: ["ever", "yet", "already", "A ve C"], correctAnswer: 3, explanation: "Hiç, henüz veya çoktan çözüm buldu mu?", type: "grammar" },
    { question: "They have ___ raised a lot of awareness.", options: ["already", "just", "lately", "A ve B"], correctAnswer: 3, explanation: "Çoktan veya az önce farkındalık yarattılar/topladılar.", type: "grammar" },
    { question: "'Awareness' ne demek?", options: ["Bilgi", "Farkındalık", "Dikkat", "İlgi"], correctAnswer: 1, explanation: "Awareness = Farkındalık.", type: "vocabulary" },
    { question: "I've ___ started my own blog.", options: ["recently", "just", "already", "Hepsi"], correctAnswer: 3, explanation: "Son zamanlarda/az önce/çoktan başladım.", type: "grammar" },
    { question: "We haven't reached our goal ___.", options: ["already", "yet", "just", "ever"], correctAnswer: 1, explanation: "Hedefimize henüz (yet) ulaşmadık.", type: "grammar" },
    { question: "'Protest' ne demek?", options: ["Kutlama", "Protesto/İtiraz", "Toplantı", "Duyuru"], correctAnswer: 1, explanation: "Protest = Protesto.", type: "vocabulary" },
    { question: "She has ___ moved to a new neighborhood.", options: ["just", "already", "recently", "Hepsi"], correctAnswer: 3, explanation: "Az önce / çoktan / son zamanlarda taşındı.", type: "grammar" },
    { question: "Is there enough ___ for everyone?", options: ["shelter", "food", "water", "Hepsi"], correctAnswer: 3, explanation: "Shelter = Barınak.", type: "vocabulary" },
    { question: "I've ___ talked to the mayor.", options: ["just", "already", "recently", "A ve B"], correctAnswer: 3, explanation: "Belediye başkanıyla az önce veya çoktan konuştum.", type: "grammar" },
    { question: "'Environment' includes the ___.", options: ["nature", "animals", "people", "Hepsi"], correctAnswer: 3, explanation: "Çevre her şeyi kapsar.", type: "vocabulary" }
];

// Quiz 4: MASTER - Sosyal Diyaloglar ve Karma (Awareness & Idioms)
const u145q4: EnglishQuestion[] = [
    { question: "A: Have you donated to the fund? B: No, not ___.", options: ["already", "just", "yet", "lately"], correctAnswer: 2, explanation: "Hayır, henüz değil (Not yet).", type: "grammar" },
    { question: "A: Did you see the news? B: Yes, I've ___ heard it.", options: ["just", "already", "recently", "Hepsi"], correctAnswer: 3, explanation: "Az önce / çoktan / son zamanlarda duydum.", type: "grammar" },
    { question: "Change starts ___ you.", options: ["with", "for", "at", "by"], correctAnswer: 0, explanation: "Değişim seninle başlar (ile: with).", type: "vocabulary" },
    { question: "A: Let's help the homeless. B: I've ___ given some food.", options: ["just", "already", "yet", "A ve B"], correctAnswer: 3, explanation: "Az önce veya çoktan yemek verdim.", type: "grammar" },
    { question: "Stand up for your ___.", options: ["rights", "money", "friends", "ideas"], correctAnswer: 0, explanation: "Stand up for rights = Haklarını savunmak (deyimsel kullanım).", type: "vocabulary" },
    { question: "A: Is the meeting over? B: It has ___ ended.", options: ["just", "already", "yet", "A ve B"], correctAnswer: 3, explanation: "Az önce veya çoktan bitti.", type: "grammar" },
    { question: "Give someone a helping ___.", options: ["hand", "arm", "head", "leg"], correctAnswer: 0, explanation: "Give a helping hand = Yardım eli uzatmak (deyim).", type: "vocabulary" },
    { question: "A: Why are you volunteering? B: I want to make a ___.", options: ["difference", "change", "new", "life"], correctAnswer: 0, explanation: "Make a difference = Fark yaratmak (deyim).", type: "vocabulary" },
    { question: "Action speaks louder than ___.", options: ["words", "talk", "says", "noise"], correctAnswer: 0, explanation: "Eylem sözden daha etkilidir (atasözü).", type: "vocabulary" },
    { question: "A: Have they found the criminal? B: No, not ___.", options: ["already", "just", "yet", "ever"], correctAnswer: 2, explanation: "Henüz değil (Not yet).", type: "grammar" },
    { question: "Man is a social ___.", options: ["animal", "being", "creature", "Hepsi"], correctAnswer: 3, explanation: "İnsan sosyal bir varlıktır (Aristoteles atıflı kalıp).", type: "vocabulary" },
    { question: "A: I'm so tired. B: You've ___ worked 10 hours today!", options: ["already", "just", "yet", "ever"], correctAnswer: 0, explanation: "Zaten/Çoktan çalışmışsın bile (already).", type: "grammar" },
    { question: "It's a small ___.", options: ["world", "place", "city", "town"], correctAnswer: 0, explanation: "Dünya küçük (toplumsal bağlamda da kullanılır).", type: "vocabulary" },
    { question: "A: Let's clean the beach. B: That's a great ___.", options: ["cause", "idea", "thing", "A ve B"], correctAnswer: 3, explanation: "Great cause = Harika bir dava / amaç.", type: "vocabulary" },
    { question: "Honesty is the best ___.", options: ["policy", "way", "rule", "thing"], correctAnswer: 0, explanation: "Dürüstlük en iyi politikadır (atasözü).", type: "vocabulary" },
    { question: "A: Have you met your new neighbors? B: Yes, I've ___ seen them.", options: ["just", "already", "recently", "Hepsi"], correctAnswer: 3, explanation: "Az önce / çoktan / son zamanlarda gördüm.", type: "grammar" },
    { question: "Unity is ___.", options: ["strength", "power", "force", "one"], correctAnswer: 0, explanation: "Unity is strength = Birlikten kuvvet doğar (atasözü).", type: "vocabulary" },
    { question: "A: Do you follow the news? B: ___ always.", options: ["Almost", "Not", "Never", "A ve B"], correctAnswer: 0, explanation: "Hemen hemen her zaman.", type: "vocabulary" },
    { question: "The world is in your ___.", options: ["hands", "head", "heart", "eyes"], correctAnswer: 0, explanation: "Dünya senin ellerinde (deyim).", type: "vocabulary" },
    { question: "We have ___ to do.", options: ["much", "a lot", "so much", "Hepsi"], correctAnswer: 3, explanation: "Yapacak çok işimiz var (lately/just olmaksızın genel ifade).", type: "vocabulary" }
];

// Unit 146: Dreams & Aspirations - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Goals & 'Would' intro)
const u146q1: EnglishQuestion[] = [
    { question: "If I was rich, I ___ travel the world.", options: ["will", "would", "do", "am"], correctAnswer: 1, explanation: "Hayali durumlarda (Second Conditional) 'would' kullanılır.", type: "grammar" },
    { question: "'Dream' ne demek?", options: ["Gerçek", "Hayal/Rüya", "Hedef", "Yol"], correctAnswer: 1, explanation: "Dream = Hayal veya Rüya.", type: "vocabulary" },
    { question: "Would you ___ to be a pilot?", options: ["like", "likes", "liking", "liked"], correctAnswer: 0, explanation: "Would you like to...? (İster miydin?) kalıbı.", type: "grammar" },
    { question: "'Goal' ne demek?", options: ["Maç", "Hedef/Gaye", "Plan", "Düşünce"], correctAnswer: 1, explanation: "Goal = Hedef.", type: "vocabulary" },
    { question: "I ___ go to space if I could.", options: ["will", "would", "am", "do"], correctAnswer: 1, explanation: "Varsayımsal bir eylem: 'would go'.", type: "grammar" },
    { question: "'Wish' ne demek?", options: ["İstemek", "Dilemek/Keşke demek", "Beklemek", "Ummak"], correctAnswer: 1, explanation: "Wish = Dilek / Keşke.", type: "vocabulary" },
    { question: "___ you live in another country if you had the chance?", options: ["Would", "Will", "Do", "Are"], correctAnswer: 0, explanation: "Second Conditional soru yapısı.", type: "grammar" },
    { question: "'Ambition' ne demek?", options: ["Hırs/İdeal", "Korku", "Zayıflık", "Hız"], correctAnswer: 0, explanation: "Ambition = Hırs / Büyük amaç.", type: "vocabulary" },
    { question: "If he ___ more time, he would help us.", options: ["has", "had", "have", "will have"], correctAnswer: 1, explanation: "If + Past Simple (Second Conditional).", type: "grammar" },
    { question: "'Future' ne demek?", options: ["Şimdi", "Geçmiş", "Gelecek", "Sonra"], correctAnswer: 2, explanation: "Future = Gelecek.", type: "vocabulary" },
    { question: "What ___ you do with a million dollars?", options: ["will", "would", "do", "are"], correctAnswer: 1, explanation: "Hayali durum sorusu.", type: "grammar" },
    { question: "'Successful' ne demek?", options: ["Zengin", "Başarılı", "Mutlu", "Güçlü"], correctAnswer: 1, explanation: "Successful = Başarılı.", type: "vocabulary" },
    { question: "If I ___ you, I would study harder.", options: ["was", "were", "am", "be"], correctAnswer: 1, explanation: "Öğüt verirken 'If I were you' kalıbı kullanılır.", type: "grammar" },
    { question: "'Inspire' ne demek?", options: ["Korkutmak", "İlham vermek", "Anlatmak", "Göstermek"], correctAnswer: 1, explanation: "Inspire = İlham vermek.", type: "vocabulary" },
    { question: "I ___ buy a big house if I won the lottery.", options: ["would", "will", "am", "do"], correctAnswer: 0, explanation: "Second Conditional sonuç cümlesi.", type: "grammar" },
    { question: "'Brave' ne demek?", options: ["Korkak", "Cesur", "Akıllı", "Zengin"], correctAnswer: 1, explanation: "Brave = Cesur.", type: "vocabulary" },
    { question: "They ___ be happy if they moved to Italy.", options: ["would", "will", "are", "be"], correctAnswer: 0, explanation: "Varsayımsal sonuç.", type: "grammar" },
    { question: "'Reality' ne demek?", options: ["Hayal", "Gerçeklik", "Yalan", "Oyun"], correctAnswer: 1, explanation: "Reality = Gerçeklik.", type: "vocabulary" },
    { question: "If we ___ wings, we would fly.", options: ["have", "had", "will have", "having"], correctAnswer: 1, explanation: "İf + Past (İmkansız/Hayali durum).", type: "grammar" },
    { question: "'Achieve' ne demek?", options: ["Başarmak/Elde etmek", "Kaybetmek", "Durdurmak", "Kaçırmak"], correctAnswer: 0, explanation: "Achieve = Başarmak.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Career Goals & Second Conditional)
const u146q2: EnglishQuestion[] = [
    { question: "If I ___ a famous actor, I'd live in Hollywood.", options: ["am", "was", "were", "B ve C"], correctAnswer: 3, explanation: "Second Conditional'da 'was' veya 'were' (daha resmi/doğru) kullanılabilir.", type: "grammar" },
    { question: "'Achievement' ne demek?", options: ["Başarı/Kazanım", "Hedef", "Yol", "Ders"], correctAnswer: 0, explanation: "Achievement = Başarı.", type: "vocabulary" },
    { question: "She ___ travel more if she didn't work so much.", options: ["will", "would", "can", "is"], correctAnswer: 1, explanation: "Varsayımsal sonuç.", type: "grammar" },
    { question: "My big ___ is to travel to Japan.", options: ["dream", "goal", "wish", "Hepsi"], correctAnswer: 3, explanation: "Hayal, hedef veya dilek.", type: "vocabulary" },
    { question: "If they ___ the lottery, they would buy a boat.", options: ["win", "won", "will win", "winning"], correctAnswer: 1, explanation: "If + Past Simple.", type: "grammar" },
    { question: "'Determine' ne demek?", options: ["Pes etmek", "Karar vermek/Belirlemek", "Korkmak", "Görmek"], correctAnswer: 1, explanation: "Determine = Kararlaştırmak / Azmetmek.", type: "vocabulary" },
    { question: "I ___ start my own business if I had a good idea.", options: ["would", "will", "am", "do"], correctAnswer: 0, explanation: "Second Conditional.", type: "grammar" },
    { question: "'Courage' ne demek?", options: ["Korku", "Cesaret", "Zayıflık", "Hız"], correctAnswer: 1, explanation: "Courage = Cesaret.", type: "vocabulary" },
    { question: "If you ___ any animal, which one would you be?", options: ["could be", "can be", "are", "be"], correctAnswer: 0, explanation: "If + Could (Yeteneğe dayalı hayal).", type: "grammar" },
    { question: "He is very ___. He wants to reach the top.", options: ["ambitious", "lazy", "tired", "sad"], correctAnswer: 0, explanation: "Ambitious = Hırslı.", type: "vocabulary" },
    { question: "I ___ better if I practiced every day.", options: ["will be", "would be", "am", "was"], correctAnswer: 1, explanation: "Second Conditional sonuç.", type: "grammar" },
    { question: "'Opportunity' ne demek?", options: ["Sorun", "Fırsat", "Zaman", "Yer"], correctAnswer: 1, explanation: "Opportunity = Fırsat.", type: "vocabulary" },
    { question: "If we ___ in a palace, we would have many servants.", options: ["live", "lived", "will live", "living"], correctAnswer: 1, explanation: "If + Past.", type: "grammar" },
    { question: "She ___ to be a doctor one day.", options: ["hopes", "wants", "dreams", "Hepsi"], correctAnswer: 3, explanation: "Ummak, istemek veya hayal etmek.", type: "vocabulary" },
    { question: "What ___ you do if you were invisible for a day?", options: ["will", "would", "do", "are"], correctAnswer: 1, explanation: "Hayali durum sorusu.", type: "grammar" },
    { question: "'Passion' ne demek?", options: ["Tutku", "Öfke", "Korku", "Sabır"], correctAnswer: 0, explanation: "Passion = Tutku.", type: "vocabulary" },
    { question: "I ___ go to the moon if I had a rocket.", options: ["would", "will", "am", "do"], correctAnswer: 0, explanation: "Second Conditional.", type: "grammar" },
    { question: "You need ___ to reach your goals.", options: ["discipline", "luck", "money", "A ve B"], correctAnswer: 3, explanation: "Disiplin veya şans.", type: "vocabulary" },
    { question: "If I ___ more money, I'd buy a new computer.", options: ["have", "had", "will have", "having"], correctAnswer: 1, explanation: "If + Past.", type: "grammar" },
    { question: "'Visualize' your success.", options: ["Gör", "Hayal et/Gözünde canlandır", "Yaz", "Anlat"], correctAnswer: 1, explanation: "Visualize = Gözünde canlandırmak.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Hypothetical Situations & 'I wish')
const u146q3: EnglishQuestion[] = [
    { question: "I wish I ___ a bigger house.", options: ["have", "had", "will have", "am having"], correctAnswer: 1, explanation: "Şu anki durum için 'keşke' derken Past Simple kullanılır.", type: "grammar" },
    { question: "If I ___ the answer, I would tell you.", options: ["know", "knew", "will know", "known"], correctAnswer: 1, explanation: "If + Past Simple (Second Conditional).", type: "grammar" },
    { question: "'Persistence' is the key to success.", options: ["Israr/Kararlılık", "Zeka", "Güç", "Şans"], correctAnswer: 0, explanation: "Persistence = Kararlılık / Devamlılık.", type: "vocabulary" },
    { question: "I wish I ___ speak Japanese.", options: ["can", "could", "will", "am"], correctAnswer: 1, explanation: "Yetenekle ilgili keşke: Could.", type: "grammar" },
    { question: "If she ___ us, she would be very surprised.", options: ["sees", "saw", "will see", "seeing"], correctAnswer: 1, explanation: "Second Conditional.", type: "grammar" },
    { question: "'Potential' means possible ___.", options: ["success", "growth", "ability", "Hepsi"], correctAnswer: 3, explanation: "Potential = Potansiyel (gelecekteki imkan).", type: "vocabulary" },
    { question: "I wish you ___ here.", options: ["are", "were", "be", "been"], correctAnswer: 1, explanation: "Keşke burada olsaydın (I wish you were...).", type: "grammar" },
    { question: "If I ___ the lottery, I'd donate half of it.", options: ["won", "win", "will win", "winning"], correctAnswer: 0, explanation: "Second Conditional.", type: "grammar" },
    { question: "'Overcome' your fears.", options: ["Kork", "Yenmek/Üstesinden gelmek", "Kaçmak", "Gizlemek"], correctAnswer: 1, explanation: "Overcome = Üstesinden gelmek.", type: "vocabulary" },
    { question: "I wish it ___ raining.", options: ["stop", "stopped", "will stop", "stops"], correctAnswer: 1, explanation: "I wish + Past Simple.", type: "grammar" },
    { question: "If he ___ more exercise, he'd be healthier.", options: ["does", "did", "will do", "doing"], correctAnswer: 1, explanation: "If + Past.", type: "grammar" },
    { question: "Reach your full ___.", options: ["potential", "dream", "goal", "A ve C"], correctAnswer: 3, explanation: "Potansiyeline veya hedefine ulaşmak.", type: "vocabulary" },
    { question: "I wish I ___ more time to sleep.", options: ["have", "had", "am having", "will have"], correctAnswer: 1, explanation: "I wish + Past.", type: "grammar" },
    { question: "If we ___ rich, we wouldn't have any worries.", options: ["are", "were", "will be", "be"], correctAnswer: 1, explanation: "Second Conditional.", type: "grammar" },
    { question: "'Mission' ne demek?", options: ["Görev/Misyon", "Oyun", "Ders", "Haber"], correctAnswer: 0, explanation: "Mission = Görev.", type: "vocabulary" },
    { question: "I wish I ___ taller.", options: ["am", "was", "were", "B ve C"], correctAnswer: 3, explanation: "Keşke daha uzun olsaydım.", type: "grammar" },
    { question: "If I ___ fly, I'd go to Paris right now.", options: ["can", "could", "will", "am"], correctAnswer: 1, explanation: "If + could (yetenek/varsayım).", type: "grammar" },
    { question: "Stay ___ and reach your goals.", options: ["focused", "busy", "tired", "sad"], correctAnswer: 0, explanation: "Focused = Odaklanmış.", type: "vocabulary" },
    { question: "I wish I ___ how to play the guitar.", options: ["know", "knew", "knowing", "known"], correctAnswer: 1, explanation: "I wish + Past Simple.", type: "grammar" },
    { question: "If you ___ the chance, would you go to space?", options: ["have", "had", "will have", "having"], correctAnswer: 1, explanation: "If + Past.", type: "grammar" }
];
// Quiz 4: MASTER - Motive Edici Diyaloglar ve Karma (Inspiration & Idioms)
const u146q4: EnglishQuestion[] = [
    { question: "A: What would you do if you were president? B: I ___ change education.", options: ["would", "will", "am", "do"], correctAnswer: 0, explanation: "Varsayımsal bir cevap.", type: "grammar" },
    { question: "Shoot for the ___.", options: ["stars", "moon", "sun", "sky"], correctAnswer: 1, explanation: "Shoot for the moon = Büyük hedef koy (deyim).", type: "vocabulary" },
    { question: "A: I wish I could play the piano. B: Why don't you ___ up lessons?", options: ["take", "make", "do", "get"], correctAnswer: 0, explanation: "Take up lessons = Ders almaya başlamak.", type: "vocabulary" },
    { question: "Sky is the ___.", options: ["limit", "end", "beginning", "top"], correctAnswer: 0, explanation: "Sky is the limit = Hiçbir sınır yok (deyim).", type: "vocabulary" },
    { question: "A: Would you go if I went with you? B: Yes, I ___.", options: ["would", "will", "am", "do"], correctAnswer: 0, explanation: "Second Conditional kısa cevap.", type: "grammar" },
    { question: "Never say ___.", options: ["never", "no", "yes", "always"], correctAnswer: 0, explanation: "Never say never = Asla asla deme (deyim).", type: "vocabulary" },
    { question: "A: I wish it was Sunday. B: Me too, I'm ___.", options: ["tired", "bored", "lazy", "Hepsi"], correctAnswer: 0, explanation: "Duygu durumu.", type: "vocabulary" },
    { question: "Keep your eyes on the ___.", options: ["prize", "goal", "dream", "Hepsi"], correctAnswer: 3, explanation: "Keep your eyes on the prize = Hedefe/ödüle odaklan (deyim).", type: "vocabulary" },
    { question: "A: What's your biggest ambition? B: To become a ___.", options: ["success", "famous", "CEO", "A ve C"], correctAnswer: 2, explanation: "CEO bir meslek/mevki hedefidir.", type: "vocabulary" },
    { question: "Dream ___.", options: ["big", "great", "large", "huge"], correctAnswer: 0, explanation: "Dream big = Büyük hayal kur (kalıp).", type: "vocabulary" },
    { question: "A: If I had wings... B: You ___ fly to me.", options: ["would", "will", "could", "A ve C"], correctAnswer: 3, explanation: "Would/Could varsayımsal sonuç bildirir.", type: "grammar" },
    { question: "A piece of ___.", options: ["cake", "bread", "sweet", "candy"], correctAnswer: 0, explanation: "A piece of cake = Çocuk oyuncağı / Çok kolay (deyim).", type: "vocabulary" },
    { question: "A: Do you have a plan? B: I'm ___ on it.", options: ["working", "doing", "making", "going"], correctAnswer: 0, explanation: "Work on it = Üzerinde çalışmak.", type: "vocabulary" },
    { question: "Make it ___.", options: ["happen", "do", "be", "go"], correctAnswer: 0, explanation: "Make it happen = Gerçekleşmesini sağla.", type: "vocabulary" },
    { question: "A: I wish I had more friends. B: Give it ___.", options: ["time", "chance", "money", "A ve B"], correctAnswer: 3, explanation: "Zaman/şans tanı.", type: "vocabulary" },
    { question: "The future belongs to those who ___ in their dreams.", options: ["believe", "have", "make", "see"], correctAnswer: 0, explanation: "Hayallerine inananlara (Eleanor Roosevelt sözü).", type: "vocabulary" },
    { question: "A: If you were me, what would you do? B: I ___ follow my heart.", options: ["would", "will", "am", "do"], correctAnswer: 0, explanation: "Öğüt verme.", type: "grammar" },
    { question: "Reach for the ___.", options: ["stars", "sky", "moon", "Hepsi"], correctAnswer: 3, explanation: "Reach for the stars = İmkansızı hedeflemek (deyim).", type: "vocabulary" },
    { question: "A: I'm not good at this. B: Don't give ___!", options: ["up", "on", "in", "off"], correctAnswer: 0, explanation: "Give up = Pes etmek.", type: "vocabulary" },
    { question: "Follow your ___.", options: ["dreams", "heart", "passion", "Hepsi"], correctAnswer: 3, explanation: "Hayallerinin/kalbinin/tutkunun peşinden git.", type: "vocabulary" }
];

// Unit 147: Global Issues - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Environment & Present Passive)
const u147q1: EnglishQuestion[] = [
    { question: "English ___ spoken all over the world.", options: ["is", "are", "was", "be"], correctAnswer: 0, explanation: "Genel gerçeklerde Present Passive: is + V3.", type: "grammar" },
    { question: "'Pollution' ne demek?", options: ["Hava", "Kirlilik", "Doğa", "Deniz"], correctAnswer: 1, explanation: "Pollution = Kirlilik.", type: "vocabulary" },
    { question: "These cars ___ made in Japan.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Çoğul nesne için Present Passive: are + V3.", type: "grammar" },
    { question: "'Global Warming' ne demek?", options: ["Dünya turu", "Küresel Isınma", "Sıcak hava", "Buzullar"], correctAnswer: 1, explanation: "Global Warming = Küresel Isınma.", type: "vocabulary" },
    { question: "The office ___ cleaned every day.", options: ["is", "are", "was", "be"], correctAnswer: 0, explanation: "Tekil nesne için Present Passive.", type: "grammar" },
    { question: "'Protect' ne demek?", options: ["Zarar vermek", "Korumak", "İzlemek", "Durdurmak"], correctAnswer: 1, explanation: "Protect = Korumak.", type: "vocabulary" },
    { question: "Millions of trees ___ cut down every year.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Çoğul nesne için Present Passive.", type: "grammar" },
    { question: "'Environment' ne demek?", options: ["Mahalle", "Çevre", "Okul", "Ev"], correctAnswer: 1, explanation: "Environment = Çevre.", type: "vocabulary" },
    { question: "Recycling ___ encouraged in this city.", options: ["is", "are", "was", "be"], correctAnswer: 0, explanation: "Uncountable (Sayılamayan) isimlerle 'is' kullanılır.", type: "grammar" },
    { question: "'Plastic' waste is a huge problem.", options: ["Plastik", "Metal", "Cam", "Kağıt"], correctAnswer: 0, explanation: "Plastic = Plastik.", type: "vocabulary" },
    { question: "Paper ___ produced from wood.", options: ["is", "are", "was", "be"], correctAnswer: 0, explanation: "Present Passive.", type: "grammar" },
    { question: "'Nature' provides us with oxygen.", options: ["Doğa", "İnsan", "Fabrika", "Şehir"], correctAnswer: 0, explanation: "Nature = Doğa.", type: "vocabulary" },
    { question: "Electricity ___ used in every home.", options: ["is", "are", "was", "be"], correctAnswer: 0, explanation: "Present Passive.", type: "grammar" },
    { question: "'Harmful' ne demek?", options: ["Faydalı", "Zararlı", "Güçlü", "Zayıf"], correctAnswer: 1, explanation: "Harmful = Zararlı.", type: "vocabulary" },
    { question: "Wine ___ made from grapes.", options: ["is", "are", "was", "be"], correctAnswer: 0, explanation: "Present Passive.", type: "grammar" },
    { question: "'Save' the planet.", options: ["Yok et", "Kurtar/Koru", "İzle", "Gez"], correctAnswer: 1, explanation: "Save = Kurtarmak/Kaydetmek/Tasarruf etmek.", type: "vocabulary" },
    { question: "Books ___ sold in libraries.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Çoğul nesne için Present Passive.", type: "grammar" },
    { question: "'Garbage' ne demek?", options: ["Eşya", "Çöp", "Yemek", "Eski"], correctAnswer: 1, explanation: "Garbage = Çöp.", type: "vocabulary" },
    { question: "Bicycles ___ widely used in Amsterdam.", options: ["is", "are", "be", "was"], correctAnswer: 1, explanation: "Çoğul nesne.", type: "grammar" },
    { question: "'Renewable' energy sources.", options: ["Yenilenebilir", "Eski", "Zararlı", "Pahalı"], correctAnswer: 0, explanation: "Renewable = Yenilenebilir.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Recycling & Past Passive)
const u147q2: EnglishQuestion[] = [
    { question: "The Mona Lisa ___ painted by Leonardo da Vinci.", options: ["is", "are", "was", "were"], correctAnswer: 2, explanation: "Geçmişte yapılmış bir eylem için Past Passive: was + V3.", type: "grammar" },
    { question: "'Recycle' ne demek?", options: ["Yenilemek", "Geri dönüştürmek", "Atmak", "Satmak"], correctAnswer: 1, explanation: "Recycle = Geri dönüştürmek.", type: "vocabulary" },
    { question: "These buildings ___ built in 1950.", options: ["is", "are", "was", "were"], correctAnswer: 3, explanation: "Çoğul nesne için Past Passive: were + V3.", type: "grammar" },
    { question: "Solar ___ is clean.", options: ["energy", "heat", "light", "power"], correctAnswer: 0, explanation: "Solar energy = Güneş enerjisi.", type: "vocabulary" },
    { question: "The telephone ___ invented by Bell.", options: ["is", "was", "are", "were"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Waste' ne demek?", options: ["Kazanım", "Atık/İsraf", "Ürün", "Malzeme"], correctAnswer: 1, explanation: "Waste = Atık.", type: "vocabulary" },
    { question: "The first flight ___ made by the Wright brothers.", options: ["is", "was", "were", "be"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Climate' change is a global threat.", options: ["Hava", "İklim", "Deniz", "Dünya"], correctAnswer: 1, explanation: "Climate = İklim.", type: "vocabulary" },
    { question: "Penicillin ___ discovered in 1928.", options: ["is", "was", "are", "were"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Endangered' species need protection.", options: ["Tehlikeli", "Nesli tükenmekte olan", "Güçlü", "Eski"], correctAnswer: 1, explanation: "Endangered = Nesli tükenmekte olan.", type: "vocabulary" },
    { question: "A lot of money ___ spent on the project.", options: ["is", "are", "was", "were"], correctAnswer: 2, explanation: "Money (Sayılamaz) ile 'was' kullanılır.", type: "grammar" },
    { question: "'Oxygen' is produced by ___.", options: ["animals", "trees", "cars", "planes"], correctAnswer: 1, explanation: "Oksijen ağaçlar tarafından üretilir.", type: "vocabulary" },
    { question: "The windows ___ broken last night.", options: ["was", "were", "is", "are"], correctAnswer: 1, explanation: "Past Passive plural.", type: "grammar" },
    { question: "'Source' of energy.", options: ["Kazanım", "Kaynak", "Giriş", "Yol"], correctAnswer: 1, explanation: "Source = Kaynak.", type: "vocabulary" },
    { question: "America ___ discovered in 1492.", options: ["is", "was", "were", "are"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Deforestation' means cutting down ___.", options: ["trees", "flowers", "grass", "buildings"], correctAnswer: 0, explanation: "Deforestation = Ormansızlaşma.", type: "vocabulary" },
    { question: "The mail ___ delivered an hour ago.", options: ["is", "was", "were", "be"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Eco-friendly' ne demek?", options: ["Doğa dostu", "Zararlı", "Ekonomik", "Hızlı"], correctAnswer: 0, explanation: "Eco-friendly = Doğa dostu.", type: "vocabulary" },
    { question: "The pyramid ___ built by thousands of people.", options: ["is", "was", "were", "are"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Volunteer' for the beach cleanup.", options: ["Gönüllü ol", "Çalış", "Öde", "Gez"], correctAnswer: 0, explanation: "Volunteer = Gönüllü olmak.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Climate Change & Complex Passive)
const u147q3: EnglishQuestion[] = [
    { question: "Carbon dioxide ___ by factories.", options: ["is released", "are released", "released", "is release"], correctAnswer: 0, explanation: "Present Passive: is + released.", type: "grammar" },
    { question: "The ___ layer protects us from UV rays.", options: ["ozone", "oxygen", "outer", "oil"], correctAnswer: 0, explanation: "Ozone layer = Ozon tabakası.", type: "vocabulary" },
    { question: "Polar bears ___ affected by melting ice.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Present Passive (Şu anki süreci belirtiyor).", type: "grammar" },
    { question: "'Sustainability' ne demek?", options: ["Süreklilik/Sürdürülebilirlik", "Değişim", "Hız", "Gelişim"], correctAnswer: 0, explanation: "Sustainability = Sürdürülebilirlik.", type: "vocabulary" },
    { question: "A lot of energy ___ wasted every year.", options: ["is", "are", "was", "were"], correctAnswer: 0, explanation: "Present Passive (Energy is uncountable).", type: "grammar" },
    { question: "The ___ of the forest was tragic.", options: ["destruction", "making", "building", "growth"], correctAnswer: 0, explanation: "Destruction = Yıkım/Yok oluş.", type: "vocabulary" },
    { question: "Chemicals ___ poured into the river.", options: ["was", "were", "is", "are"], correctAnswer: 3, explanation: "Present Passive plural.", type: "grammar" },
    { question: "'Extinction' ne demek?", options: ["Artış", "Nesil tükenmesi/Yok oluş", "Gelişim", "Yayılma"], correctAnswer: 1, explanation: "Extinction = Nesil tükenmesi.", type: "vocabulary" },
    { question: "The rules ___ changed recently.", options: ["are", "is", "were", "have been"], correctAnswer: 3, explanation: "Present Perfect Passive: have been + V3 (A2 için ileri seviye ama Present Perfect ünitesinden sonra uygun).", type: "grammar" },
    { question: "Wind ___ are used to generate power.", options: ["turbines", "mills", "fans", "wheels"], correctAnswer: 0, explanation: "Wind turbines = Rüzgar türbinleri.", type: "vocabulary" },
    { question: "Animals ___ kept in cages.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Present Passive plural.", type: "grammar" },
    { question: "'Coal' and 'Gas' are ___ fuels.", options: ["clean", "fossil", "new", "A ve B"], correctAnswer: 1, explanation: "Fossil fuels = Fosil yakıtlar.", type: "vocabulary" },
    { question: "The letter ___ written by the president.", options: ["is", "was", "were", "are"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "A ___ of water occurs in deserts.", options: ["scarcity", "lot", "ton", "bit"], correctAnswer: 0, explanation: "Scarcity = Kıtlık/Yokluk.", type: "vocabulary" },
    { question: "Millions of phones ___ used every day.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Present Passive.", type: "grammar" },
    { question: "'Disaster' ne demek?", options: ["Mucize", "Felaket", "Şans", "Haber"], correctAnswer: 1, explanation: "Disaster = Felaket.", type: "vocabulary" },
    { question: "The trees ___ planted by students last week.", options: ["is", "was", "were", "are"], correctAnswer: 2, explanation: "Past Passive plural.", type: "grammar" },
    { question: "The problem ___ solved yesterday.", options: ["is", "was", "were", "be"], correctAnswer: 1, explanation: "Past Passive.", type: "vocabulary" },
    { question: "'Biodiversity' is threatened by ___.", options: ["pollution", "nature", "stars", "moon"], correctAnswer: 0, explanation: "Biyoçeşitlilik kirlilik tarafından tehdit ediliyor.", type: "vocabulary" },
    { question: "English ___ by everyone in this room.", options: ["is spoken", "are spoken", "spoke", "speaks"], correctAnswer: 0, explanation: "Present Passive.", type: "grammar" }
];
const u147q4: EnglishQuestion[] = [
    { question: "A: Why are you so sad? B: The forest ___ destroyed by fire.", options: ["is", "was", "are", "were"], correctAnswer: 1, explanation: "Orman yangında yok oldu/edildi.", type: "grammar" },
    { question: "The tip of the ___.", options: ["iceberg", "mountain", "hill", "sea"], correctAnswer: 0, explanation: "The tip of the iceberg = Buzdağının görünen kısmı (deyim).", type: "vocabulary" },
    { question: "A: Is the water clean? B: No, it ___ polluted.", options: ["is", "was", "are", "were"], correctAnswer: 0, explanation: "Su kirli (kirlenmiş durumda).", type: "grammar" },
    { question: "Green ___ effect.", options: ["house", "nature", "world", "light"], correctAnswer: 0, explanation: "Greenhouse effect = Sera etkisi.", type: "vocabulary" },
    { question: "A: Who wrote this article? B: It ___ written by a scientist.", options: ["is", "was", "are", "were"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "Mother ___.", options: ["Nature", "Earth", "World", "A ve B"], correctAnswer: 3, explanation: "Doğa Ana (Mother Nature/Earth).", type: "vocabulary" },
    { question: "A: Where is the garbage? B: It ___ taken away this morning.", options: ["is", "was", "were", "be"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "Down to ___.", options: ["earth", "ground", "soil", "base"], correctAnswer: 0, explanation: "Down to earth = Gerçekçi/Mütevazı (deyim).", type: "vocabulary" },
    { question: "A: How is paper made? B: It ___ made from wood.", options: ["is", "was", "are", "were"], correctAnswer: 0, explanation: "Present Passive (Süreç).", type: "grammar" },
    { question: "A drop in the ___.", options: ["ocean", "sea", "lake", "pool"], correctAnswer: 0, explanation: "A drop in the ocean = Okyanusta bir damla / Çok küçük bir miktar (deyim).", type: "vocabulary" },
    { question: "A: Were the animals saved? B: Yes, they ___.", options: ["were", "was", "are", "did"], correctAnswer: 0, explanation: "Passive soruya kısa cevap.", type: "grammar" },
    { question: "Beat around the ___.", options: ["bush", "tree", "plant", "flower"], correctAnswer: 0, explanation: "Beat around the bush = Lafı dolandırmak (doğa kökenli deyim).", type: "vocabulary" },
    { question: "A: Is the ozone layer recovering? B: Some say it ___.", options: ["is", "was", "does", "be"], correctAnswer: 0, explanation: "İyileşiyor (Present Progressive Passive kıvamında).", type: "grammar" },
    { question: "Kill two birds with one ___.", options: ["stone", "rock", "hit", "gun"], correctAnswer: 0, explanation: "Kill two birds with one stone = Bir taşla iki kuş vurmak (deyim).", type: "vocabulary" },
    { question: "A: When was the treaty signed? B: It ___ signed last week.", options: ["is", "was", "were", "be"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "The grass is always ___ on the other side.", options: ["greener", "better", "faster", "longer"], correctAnswer: 0, explanation: "Komşunun tavuğu komşuya kaz görünür (İngilizce versiyonu).", type: "vocabulary" },
    { question: "A: Are these bottles recyclable? B: Yes, they ___.", options: ["are", "were", "is", "be"], correctAnswer: 0, explanation: "Present Simple kısa cevap.", type: "grammar" },
    { question: "Barking up the wrong ___.", options: ["tree", "dog", "house", "road"], correctAnswer: 0, explanation: "Barking up the wrong tree = Yanlış iz sürmek / Yanlış kişiyi suçlamak (deyim).", type: "vocabulary" },
    { question: "A: Was the project completed? B: No, it ___ canceled.", options: ["is", "was", "were", "are"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "Protect the earth, it's our only ___.", options: ["home", "place", "planet", "Hepsi"], correctAnswer: 3, explanation: "Dünyayı koru, tek evimiz.", type: "vocabulary" }
];

// Unit 148: Relationships & Family - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Family, Friends & Reflexive Pronouns)
const u148q1: EnglishQuestion[] = [
    { question: "I cut ___ while I was cooking.", options: ["me", "myself", "mine", "my"], correctAnswer: 1, explanation: "Özne ve nesne aynı kişi olduğunda Reflexive Pronoun (kendimi: myself) kullanılır.", type: "grammar" },
    { question: "'Relative' ne demek?", options: ["Arkadaş", "Akraba", "Komşu", "Eş"], correctAnswer: 1, explanation: "Relative = Akraba.", type: "vocabulary" },
    { question: "Did you enjoy ___ at the party?", options: ["you", "your", "yourself", "yours"], correctAnswer: 2, explanation: "Enjoy yourself = İyi vakit geçirmek/eğlenmek (kalıp).", type: "grammar" },
    { question: "'Neighbor' ne demek?", options: ["Akraba", "Komşu", "Misafir", "Yabancı"], correctAnswer: 1, explanation: "Neighbor = Komşu.", type: "vocabulary" },
    { question: "She made this cake ___.", options: ["her", "herself", "hers", "she"], correctAnswer: 1, explanation: "Kendi başına/kendisi yaptı: herself.", type: "grammar" },
    { question: "'Close friend' ne demek?", options: ["Eski arkadaş", "Yakın arkadaş", "Yeni arkadaş", "Kötü arkadaş"], correctAnswer: 1, explanation: "Close friend = Yakın arkadaş.", type: "vocabulary" },
    { question: "We painted the house ___.", options: ["our", "us", "ourselves", "ours"], correctAnswer: 2, explanation: "Biz kendimiz yaptık: ourselves.", type: "grammar" },
    { question: "'Sibling' ne demek?", options: ["Ebeveyn", "Kardeş", "Kuzen", "Yeğen"], correctAnswer: 1, explanation: "Sibling = Kardeş (erkek veya kız ayırt etmeksizin).", type: "vocabulary" },
    { question: "He saw ___ in the mirror.", options: ["him", "his", "himself", "he"], correctAnswer: 2, explanation: "Kendini gördü: himself.", type: "grammar" },
    { question: "'Wedding' ne demek?", options: ["Doğum günü", "Düğün", "Nişan", "Parti"], correctAnswer: 1, explanation: "Wedding = Düğün.", type: "vocabulary" },
    { question: "They can take care of ___.", options: ["them", "their", "themselves", "theirs"], correctAnswer: 2, explanation: "Onlar kendilerine bakabilirler: themselves.", type: "grammar" },
    { question: "'Argument' ne demek?", options: ["Tartışma", "Konuşma", "Şaka", "Haber"], correctAnswer: 0, explanation: "Argument = Tartışma.", type: "vocabulary" },
    { question: "Be careful! Don't hurt ___.", options: ["you", "your", "yourself", "yours"], correctAnswer: 2, explanation: "Kendini incitme.", type: "grammar" },
    { question: "'Honest' ne demek?", options: ["Yalancı", "Dürüst", "Kibar", "Tembel"], correctAnswer: 1, explanation: "Honest = Dürüst.", type: "vocabulary" },
    { question: "The cat licked ___.", options: ["it", "its", "itself", "it's"], correctAnswer: 2, explanation: "Hayvanlar için reflexive pronoun: itself.", type: "grammar" },
    { question: "'Trust' ne demek?", options: ["Güvenmek", "Sevmek", "Kızmak", "Bakmak"], correctAnswer: 0, explanation: "Trust = Güvenmek.", type: "vocabulary" },
    { question: "I sometimes talk to ___.", options: ["me", "myself", "mine", "my"], correctAnswer: 1, explanation: "Bazen kendi kendime konuşurum.", type: "grammar" },
    { question: "'Relationship' ne demek?", options: ["Arkadaşlık", "İlişki", "Bağlantı", "Hepsi"], correctAnswer: 3, explanation: "Relationship = İlişki.", type: "vocabulary" },
    { question: "Help ___ to some tea.", options: ["you", "your", "yourself", "yours"], correctAnswer: 2, explanation: "Help yourself to... = Buyur al/çekinme (kalıp).", type: "grammar" },
    { question: "'Loyal' ne demek?", options: ["Sadık", "Kızgın", "Zengin", "Hızlı"], correctAnswer: 0, explanation: "Loyal = Sadık.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Social Events & Relative Clauses)
const u148q2: EnglishQuestion[] = [
    { question: "The woman ___ lives next door is very kind.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "İnsanları nitelemek için 'who' kullanılır.", type: "grammar" },
    { question: "'Conflict' ne demek?", options: ["Barış", "Çatışma/Anlaşmazlık", "Huzur", "Oyun"], correctAnswer: 1, explanation: "Conflict = Çatışma.", type: "vocabulary" },
    { question: "That is the house ___ I grew up.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Yer nitelemesi için 'where' kullanılır.", type: "grammar" },
    { question: "'Support' your friends.", options: ["Zarar ver", "Destekle", "İzle", "Durdur"], correctAnswer: 1, explanation: "Support = Desteklemek.", type: "vocabulary" },
    { question: "Is this the book ___ you were looking for?", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesne nitelemesi için 'which' (veya that) kullanılır.", type: "grammar" },
    { question: "'Generous' ne demek?", options: ["Cimri", "Cömert", "Korkak", "Akıllı"], correctAnswer: 1, explanation: "Generous = Cömert.", type: "vocabulary" },
    { question: "The man ___ son is my friend is a doctor.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi: 'whose son' (oğlu olan adam).", type: "grammar" },
    { question: "'Reliable' ne demek?", options: ["Hızlı", "Güvenilir", "Yavaş", "Zayıf"], correctAnswer: 1, explanation: "Reliable = Güvenilir.", type: "vocabulary" },
    { question: "This is the restaurant ___ they serve great Italian food.", options: ["who", "which", "where", "that"], correctAnswer: 2, explanation: "Yer nitelemesi.", type: "grammar" },
    { question: "'Betray' ne demek?", options: ["İhanet etmek", "Yardım etmek", "Sevmek", "Korumak"], correctAnswer: 0, explanation: "Betray = İhanet etmek.", type: "vocabulary" },
    { question: "The students ___ pass the exam will be happy.", options: ["who", "which", "where", "that"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "'Advice' ne demek?", options: ["Haber", "Tavsiye/Öğüt", "Soru", "Cevap"], correctAnswer: 1, explanation: "Advice = Tavsiye.", type: "vocabulary" },
    { question: "The dog ___ is barking is mine.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Hayvanlar için 'which'.", type: "grammar" },
    { question: "'Forgive' someone.", options: ["Kızmak", "Affetmek", "Unutmak", "Dövmek"], correctAnswer: 1, explanation: "Forgive = Affetmek.", type: "vocabulary" },
    { question: "I know a girl ___ name is Leyla.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik: 'whose name' (adı Leyla olan).", type: "grammar" },
    { question: "'Divorce' ne demek?", options: ["Evlilik", "Boşanma", "Ayrılık", "Düğün"], correctAnswer: 1, explanation: "Divorce = Boşanma.", type: "vocabulary" },
    { question: "The city ___ I visited last summer was beautiful.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Nesne konumundaki yer için 'which/that' kullanılır.", type: "grammar" },
    { question: "'Respect' is mutual.", options: ["Saygı", "Sevgi", "Korku", "İlgi"], correctAnswer: 0, explanation: "Respect = Saygı.", type: "vocabulary" },
    { question: "The person ___ you called is not here.", options: ["who", "whom", "which", "A ve B"], correctAnswer: 3, explanation: "Nesne konumundaki kişi için 'who/whom' kullanılabilir.", type: "grammar" },
    { question: "A good friend is ___.", options: ["selfish", "loyal", "lazy", "angry"], correctAnswer: 1, explanation: "İyi bir arkadaş sadıktır (loyal).", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Relationship Problems & Technical Clauses)
const u148q3: EnglishQuestion[] = [
    { question: "To whom ___ I speaking?", options: ["am", "is", "are", "be"], correctAnswer: 0, explanation: "'To whom' resmi bir yapıdır. (Kiminle konuşuyorum?).", type: "grammar" },
    { question: "'Struggle' ne demek?", options: ["Başarı", "Mücadele/Zorluk", "Eğlence", "Yolculuk"], correctAnswer: 1, explanation: "Struggle = Mücadele.", type: "vocabulary" },
    { question: "The colleague with ___ I work is very smart.", options: ["who", "whom", "which", "that"], correctAnswer: 1, explanation: "Edat (preposition) 'with' varsa nesne konumundaki kişi için 'whom' kullanılır.", type: "grammar" },
    { question: "'Misunderstanding' ne demek?", options: ["Yanlış anlama", "Kötü davranış", "Yalan", "Şaka"], correctAnswer: 0, explanation: "Misunderstanding = Yanlış anlama.", type: "vocabulary" },
    { question: "The reason ___ I am here is to help you.", options: ["why", "who", "which", "where"], correctAnswer: 0, explanation: "Sebep nitelemesi: 'reason why'.", type: "grammar" },
    { question: "'Commitment' is necessary in marriage.", options: ["Bağlılık/Taahhüt", "Para", "Kavga", "Sevgi"], correctAnswer: 0, explanation: "Commitment = Bağlılık.", type: "vocabulary" },
    { question: "Everything ___ she said was true.", options: ["who", "which", "that", "B ve C"], correctAnswer: 3, explanation: "Everything/Something gibi ifadelerden sonra 'that/which' kullanılır.", type: "grammar" },
    { question: "'Appreciate' your parents.", options: ["Üz", "Takdir et/Kıymetini bil", "İzle", "Gez"], correctAnswer: 1, explanation: "Appreciate = Takdir etmek.", type: "vocabulary" },
    { question: "The car, ___ was very old, broke down.", options: ["who", "which", "where", "that"], correctAnswer: 1, explanation: "Ek bilgi (Non-defining) cümlerinde sadece 'which' kullanılır (that kullanılmaz).", type: "grammar" },
    { question: "'Empathy' means understanding others' ___.", options: ["feelings", "cars", "names", "clothes"], correctAnswer: 0, explanation: "Empathy (Empati) duyguları anlamaktır.", type: "vocabulary" },
    { question: "I met a man ___ brother I know.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Acquaintance' ne demek?", options: ["Düşman", "Tanıdık", "Kardeş", "Eş"], correctAnswer: 1, explanation: "Acquaintance = Tanıdık (yakın olmayan arkadaş).", type: "vocabulary" },
    { question: "Do you know the year ___ they got married?", options: ["where", "when", "which", "who"], correctAnswer: 1, explanation: "Zaman nitelemesi: 'when'.", type: "grammar" },
    { question: "'Jealousy' can ruin a friendship.", options: ["Kıskançlık", "Sevgi", "Yardım", "Parab"], correctAnswer: 0, explanation: "Jealousy = Kıskançlık.", type: "vocabulary" },
    { question: "The person to ___ you are talking is my boss.", options: ["who", "whom", "which", "that"], correctAnswer: 1, explanation: "Preposition + Whom.", type: "grammar" },
    { question: "'Solitude' is different from loneliness.", options: ["Yalnızlık (kendi isteğiyle)", "Huzur", "Savaş", "Kalabalık"], correctAnswer: 0, explanation: "Solitude = Kendi başına kalma/Yalnızlık.", type: "vocabulary" },
    { question: "This is the best movie ___ I have ever seen.", options: ["which", "that", "who", "where"], correctAnswer: 1, explanation: "Superlative yapılardan (the best, etc.) sonra 'that' tercihen kullanılır.", type: "grammar" },
    { question: "'Conflict resolution' means ___.", options: ["making peace", "starting fire", "fighting", "running"], correctAnswer: 0, explanation: "Conflict resolution = Çatışma çözümü/Barışma.", type: "vocabulary" },
    { question: "He is the only one ___ can help us.", options: ["who", "that", "which", "A ve B"], correctAnswer: 3, explanation: "The only/Person için who/that.", type: "grammar" },
    { question: "Marriage is a big ___.", options: ["step", "responsibility", "joy", "Hepsi"], correctAnswer: 3, explanation: "Evlilik büyük bir adım, sorumluluk veya neşedir.", type: "vocabulary" }
];

// Quiz 4: MASTER - Sosyal Diyaloglar ve Karma (Relationship Idioms & Advice)
const u148q4: EnglishQuestion[] = [
    { question: "A: Who is that girl? B: The one ___ I told you about.", options: ["who", "whom", "which", "that"], correctAnswer: 3, explanation: "Ona bahsettiğim kişi (defining).", type: "grammar" },
    { question: "Break the ___.", options: ["ice", "water", "glass", "heart"], correctAnswer: 0, explanation: "Break the ice = Buzları eritmek / Tanışmayı başlatmak (deyim).", type: "vocabulary" },
    { question: "A: Are you okay? B: No, I just had an ___ with my brother.", options: ["argument", "talk", "idea", "answer"], correctAnswer: 0, explanation: "Tartışma (argument).", type: "vocabulary" },
    { question: "Bird's of a feather flock ___.", options: ["together", "away", "alone", "up"], correctAnswer: 0, explanation: "Tencere yuvarlanmış kapağını bulmuş (İngilizce atasözü).", type: "vocabulary" },
    { question: "A: Why are you helping her? B: Because she is my ___.", options: ["flesh and blood", "friend", "bestie", "Hepsi"], correctAnswer: 3, explanation: "Flesh and blood = Et tırnak / Öz akraba (deyim).", type: "vocabulary" },
    { question: "Tie the ___.", options: ["knot", "string", "rope", "line"], correctAnswer: 0, explanation: "Tie the knot = Dünya evine girmek / Evlenmek (deyim).", type: "vocabulary" },
    { question: "A: What should I do? B: If I ___ you, I'd apologize.", options: ["am", "was", "were", "be"], correctAnswer: 2, explanation: "Tavsiye kalıbı.", type: "grammar" },
    { question: "Blood is thicker than ___.", options: ["water", "oil", "milk", "wine"], correctAnswer: 0, explanation: "Kan sudan koyudur / Akraba bağları güçlüdür (atasözü).", type: "vocabulary" },
    { question: "A: Is she reliable? B: Yes, you can ___ her.", options: ["trust", "believe", "count on", "Hepsi"], correctAnswer: 3, explanation: "Güvenmek / Sırtını dayamak.", type: "vocabulary" },
    { question: "Fair-weather ___.", options: ["friend", "day", "time", "wind"], correctAnswer: 0, explanation: "Fair-weather friend = İyi gün dostu (deyim).", type: "vocabulary" },
    { question: "A: Do you know the man ___ car was stolen? B: Yes, he is my neighbor.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "Through thick and ___.", options: ["thin", "fat", "fast", "slow"], correctAnswer: 0, explanation: "Through thick and thin = İyi günde kötü günde (deyim).", type: "vocabulary" },
    { question: "A: How is your relationship? B: We are like two peas in a ___.", options: ["pod", "bag", "box", "can"], correctAnswer: 0, explanation: "Two peas in a pod = Bir elmanın iki yarısı gibi / Çok benzer (deyim).", type: "vocabulary" },
    { question: "Keep in ___.", options: ["touch", "sight", "mind", "A ve C"], correctAnswer: 3, explanation: "Keep in touch = İletişimde kalmak. Keep in mind = Akılda tutmak.", type: "vocabulary" },
    { question: "A: Why are you angry? B: He ___ me in the back.", options: ["stabbed", "hit", "pushed", "hurt"], correctAnswer: 0, explanation: "Stab in the back = Sırtından bıçaklamak (deyim).", type: "vocabulary" },
    { question: "Work your fingers to the ___.", options: ["bone", "hand", "skin", "nail"], correctAnswer: 0, explanation: "Canını dişine takmak (aile/gelecek için çok çalışmak).", type: "vocabulary" },
    { question: "A: Who made the decision? B: We did it ___.", options: ["us", "ourselves", "our", "ours"], correctAnswer: 1, explanation: "Biz kendimiz yaptık.", type: "grammar" },
    { question: "Love is ___.", options: ["blind", "deaf", "dumb", "crazy"], correctAnswer: 0, explanation: "Aşkın gözü kördür (Love is blind).", type: "vocabulary" },
    { question: "A: I wish my parents ___ here. B: Me too.", options: ["are", "was", "were", "been"], correctAnswer: 2, explanation: "I wish + Past.", type: "grammar" },
    { question: "Treat others as you want to be ___.", options: ["treated", "loved", "liked", "seen"], correctAnswer: 0, explanation: "Başkalarına sana davranılmasını istediğin gibi davran.", type: "vocabulary" }
];

// Unit 149: Science Fiction & Fantasy - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Space, Aliens & Simple Deduction)
const u149q1: EnglishQuestion[] = [
    { question: "Look! There is a light in the sky. It ___ be a UFO.", options: ["must", "can't", "is", "was"], correctAnswer: 0, explanation: "Güçlü bir çıkarım/tahmin yaparken 'must be' (olmalı) kullanılır.", type: "grammar" },
    { question: "'Alien' ne demek?", options: ["Arkadaş", "Uzaylı", "Hayalet", "Canavar"], correctAnswer: 1, explanation: "Alien = Uzaylı.", type: "vocabulary" },
    { question: "He has a green face. He ___ be human.", options: ["can't", "must", "might", "is"], correctAnswer: 0, explanation: "İmkansızlık belirten çıkarımlarda 'can't be' (...olamaz) kullanılır.", type: "grammar" },
    { question: "'Spacecraft' ne demek?", options: ["Uçak", "Uzay aracı", "Gemi", "Araba"], correctAnswer: 1, explanation: "Spacecraft = Uzay aracı.", type: "vocabulary" },
    { question: "The door is locked from the inside. Someone ___ be there.", options: ["must", "can't", "might", "be"], correctAnswer: 0, explanation: "Mantıklı çıkarım: 'must be'.", type: "grammar" },
    { question: "'Robot' ne demek?", options: ["Makine", "Robot", "Oyuncak", "Bilgisayar"], correctAnswer: 1, explanation: "Robot = Robot.", type: "vocabulary" },
    { question: "It's 3 AM. It ___ be sunny outside.", options: ["can't", "must", "might", "is"], correctAnswer: 0, explanation: "Mantıksal imkansızlık: 'can't be'.", type: "grammar" },
    { question: "'Magic' ne demek?", options: ["Bilim", "Büyü/Sihir", "Oyun", "Şaka"], correctAnswer: 1, explanation: "Magic = Büyü.", type: "vocabulary" },
    { question: "She is wearing a crown. She ___ be a queen.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Güçlü çıkarım.", type: "grammar" },
    { question: "'Superpower' ne demek?", options: ["Büyük güç", "Süper güç", "Hız", "Uçmak"], correctAnswer: 1, explanation: "Superpower = Süper güç.", type: "vocabulary" },
    { question: "I'm not sure, but it ___ be a ghost.", options: ["might", "must", "can't", "is"], correctAnswer: 0, explanation: "Zayıf ihtimal/tahmin için 'might be' (olabilir) kullanılır.", type: "grammar" },
    { question: "'Planet' ne demek?", options: ["Yıldız", "Gezegen", "Ay", "Güneş"], correctAnswer: 1, explanation: "Planet = Gezegen.", type: "vocabulary" },
    { question: "He is lifting a car! He ___ be very strong.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Görünen kanıta dayalı güçlü çıkarım.", type: "grammar" },
    { question: "'Dragon' ne demek?", options: ["Aslan", "Ejderha", "Yılan", "Kuş"], correctAnswer: 1, explanation: "Dragon = Ejderha.", type: "vocabulary" },
    { question: "That story ___ be true. It's too crazy!", options: ["can't", "must", "might", "is"], correctAnswer: 0, explanation: "İnanması güç durumlar için 'can't be'.", type: "grammar" },
    { question: "'Wizard' ne demek?", options: ["Cadı", "Büyücü", "Kral", "Savaşçı"], correctAnswer: 1, explanation: "Wizard = Büyücü (erkek).", type: "vocabulary" },
    { question: "They have laser guns. They ___ be from the future.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Güçlü çıkarım.", type: "grammar" },
    { question: "'Galaxy' ne demek?", options: ["Güneş sistemi", "Gökada/Galaksi", "Evren", "Dünya"], correctAnswer: 1, explanation: "Galaxy = Galaksi.", type: "vocabulary" },
    { question: "It ___ be an alien. It looks like a cow.", options: ["can't", "must", "might", "is"], correctAnswer: 0, explanation: "Mantıksal reddediş.", type: "grammar" },
    { question: "'Fiction' ne demek?", options: ["Gerçek", "Kurgu", "Haber", "Ders"], correctAnswer: 1, explanation: "Fiction = Kurgu (hayal ürünü).", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Time Travel & Possibility)
const u149q2: EnglishQuestion[] = [
    { question: "If I had a time machine, I ___ visit the dinosaurs.", options: ["will", "would", "am", "do"], correctAnswer: 1, explanation: "Second Conditional (Hayali durum): would.", type: "grammar" },
    { question: "'Time travel' ne demek?", options: ["Uzay yolculuğu", "Zaman yolculuğu", "Hızlı gitmek", "Beklemek"], correctAnswer: 1, explanation: "Time travel = Zaman yolculuğu.", type: "vocabulary" },
    { question: "This machine ___ be broken. It's making a strange noise.", options: ["might", "must", "can't", "Hepsi"], correctAnswer: 1, explanation: "Kanıta dayalı güçlü tahmin.", type: "grammar" },
    { question: "'Parallel universe' ne demek?", options: ["Büyük dünya", "Paralel evren", "Uzay boşluğu", "Yıldız kümesi"], correctAnswer: 1, explanation: "Parallel universe = Paralel evren.", type: "vocabulary" },
    { question: "Don't touch that! It ___ be dangerous.", options: ["might", "must", "can't", "is"], correctAnswer: 0, explanation: "İhtimal (might).", type: "grammar" },
    { question: "'Teleport' ne demek?", options: ["Uçmak", "Işınlanmak", "Koşmak", "Gezmek"], correctAnswer: 1, explanation: "Teleport = Işınlanmak.", type: "vocabulary" },
    { question: "The sky is purple! We ___ be on another planet.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Güçlü çıkarım.", type: "grammar" },
    { question: "'Cyborg' is part human, part ___.", options: ["animal", "machine", "alien", "ghost"], correctAnswer: 1, explanation: "Cyborg = Yarı insan yarı makine.", type: "vocabulary" },
    { question: "He ___ be the chosen one. He has the mark.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Alamet (mark) varsa 'must be' çıkarımı yapılır.", type: "grammar" },
    { question: "'Portal' ne demek?", options: ["Kapı/Geçit", "Pencere", "Duvar", "Yol"], correctAnswer: 0, explanation: "Portal = Geçit.", type: "vocabulary" },
    { question: "Is that a spaceship? No, it ___ be a plane.", options: ["might", "must", "can't", "is"], correctAnswer: 0, explanation: "İhtimal.", type: "grammar" },
    { question: "'Gravity' is zero in ___.", options: ["water", "space", "air", "land"], correctAnswer: 1, explanation: "Uzayda yerçekimi sıfırdır.", type: "vocabulary" },
    { question: "She ___ be a witch. She has a black cat.", options: ["must", "might", "can't", "is"], correctAnswer: 1, explanation: "Zayıf çıkarım/şüphe.", type: "grammar" },
    { question: "'Invade' ne demek?", options: ["Korumak", "İstila etmek", "Sevmek", "Gezmek"], correctAnswer: 1, explanation: "Invade = İstila etmek.", type: "vocabulary" },
    { question: "The future ___ be very different.", options: ["will", "would", "is", "was"], correctAnswer: 0, explanation: "Gelecek tahmini (will).", type: "grammar" },
    { question: "'Spacesuit' ne demek?", options: ["Uçuş kıyafeti", "Uzay giysisi", "Maske", "Kask"], correctAnswer: 1, explanation: "Spacesuit = Uzay giysisi.", type: "vocabulary" },
    { question: "They ___ be friendly. They are waving at us.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Olumlu kanıt var: must be.", type: "grammar" },
    { question: "'Laser' ne demek?", options: ["Işık", "Lazer", "Ateş", "Bomba"], correctAnswer: 1, explanation: "Laser = Lazer.", type: "vocabulary" },
    { question: "This soup tastes like metal. It ___ be poisoned!", options: ["might", "must", "can't", "is"], correctAnswer: 0, explanation: "İhtimal.", type: "grammar" },
    { question: "'Myth' ne demek?", options: ["Gerçek", "Efsane/Mit", "Hikaye", "Masal"], correctAnswer: 1, explanation: "Myth = Efsane.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Dystopia & Past Deduction)
const u149q3: EnglishQuestion[] = [
    { question: "The dinosaurs died 65 million years ago. It ___ been a giant asteroid.", options: ["must have", "can't have", "might have", "is"], correctAnswer: 0, explanation: "Geçmişe dair güçlü çıkarım: 'must have + V3' (olmuş olmalı).", type: "grammar" },
    { question: "'Dystopia' ne demek?", options: ["Mükemmel dünya", "Kötü dünya/Distopya", "Yeni dünya", "Uzay"], correctAnswer: 1, explanation: "Dystopia = Baskıcı, kötü gelecek tasarımı.", type: "vocabulary" },
    { question: "He didn't see the alien. He ___ been asleep.", options: ["must have", "can't have", "might have", "was"], correctAnswer: 0, explanation: "Geçmişe dair çıkarım.", type: "grammar" },
    { question: "'Utopia' ne demek?", options: ["Kötü yer", "Hayali mükemmel yer/Ütopya", "Gerçek yer", "Eski yer"], correctAnswer: 1, explanation: "Utopia = İdeal toplum/dünya.", type: "vocabulary" },
    { question: "They ___ have seen us. We were hiding perfectly.", options: ["must", "can't", "might", "can"], correctAnswer: 1, explanation: "Geçmişe dair imkansızlık: 'can't have + V3' (görmüş olamazlar).", type: "grammar" },
    { question: "'Apocalypse' ne demek?", options: ["Doğum", "Kıyamet/Büyük felaket", "Düğün", "Fırtına"], correctAnswer: 1, explanation: "Apocalypse = Kıyamet.", type: "vocabulary" },
    { question: "I lost my ring. I ___ have dropped it in the portal.", options: ["might", "must", "can't", "should"], correctAnswer: 0, explanation: "Geçmişe dair ihtimal (might have + V3).", type: "grammar" },
    { question: "'Clone' ne demek?", options: ["Kopya/Klon", "Kardeş", "Düşman", "Robot"], correctAnswer: 0, explanation: "Clone = Klon.", type: "vocabulary" },
    { question: "The city was destroyed. There ___ have been a war.", options: ["must", "can't", "might", "was"], correctAnswer: 0, explanation: "Güçlü çıkarım.", type: "grammar" },
    { question: "'Artificial' ne demek?", options: ["Doğal", "Yapay", "Yeni", "Gerçek"], correctAnswer: 1, explanation: "Artificial = Yapay.", type: "vocabulary" },
    { question: "The aliens ___ have traveled for years to reach earth.", options: ["must", "can't", "might", "are"], correctAnswer: 0, explanation: "Mesafeye dayalı güçlü çıkarım.", type: "grammar" },
    { question: "'Immortal' ne demek?", options: ["Ölümlü", "Ölümsüz", "Güçlü", "Zayıf"], correctAnswer: 1, explanation: "Immortal = Ölümsüz.", type: "vocabulary" },
    { question: "I ___ have seen a dragon, but I'm not sure.", options: ["might", "must", "can't", "do"], correctAnswer: 0, explanation: "Belirsiz geçmiş ihtimali.", type: "grammar" },
    { question: "'Survival' ne demek?", options: ["Ölüm", "Hayatta kalma", "Koşma", "Savaş"], correctAnswer: 1, explanation: "Survival = Hayatta kalma.", type: "vocabulary" },
    { question: "He ___ have built this alone. It's too big!", options: ["can't", "must", "might", "didn't"], correctAnswer: 0, explanation: "Mantıksal reddediş.", type: "grammar" },
    { question: "'Resistance' ne demek?", options: ["Kabul", "Direniş", "Korku", "Yalnızlık"], correctAnswer: 1, explanation: "Resistance = Direniş.", type: "vocabulary" },
    { question: "We ___ have taken the wrong turn in the space-time continuum.", options: ["must", "can't", "might", "are"], correctAnswer: 0, explanation: "Mantıklı hata çıkarımı.", type: "grammar" },
    { question: "'Advanced' technology.", options: ["Geri kalmış", "Gelişmiş", "Yeni", "Eski"], correctAnswer: 1, explanation: "Advanced = Gelişmiş/İleri.", type: "vocabulary" },
    { question: "The monster ___ have escaped. The cage is empty.", options: ["must", "can't", "might", "is"], correctAnswer: 0, explanation: "Güçlü kanıt.", type: "grammar" },
    { question: "'Evolution' takes millions of years.", options: ["Evrim", "Devrim", "Değişim", "Hız"], correctAnswer: 0, explanation: "Evolution = Evrim.", type: "vocabulary" }
];

// Quiz 4: MASTER - Kurgusal Diyaloglar ve Karma (Theories & Idioms)
const u149q4: EnglishQuestion[] = [
    { question: "A: Did you see the lights? B: Yes, it ___ be aliens.", options: ["could", "must", "can't", "A ve B"], correctAnswer: 3, explanation: "İhtimal veya kesinlik çıkarımı uygun olabilir.", type: "grammar" },
    { question: "Out of this ___.", options: ["world", "planet", "galaxy", "universe"], correctAnswer: 0, explanation: "Out of this world = Olağanüstü / Dünyada eşi benzeri yok (deyim).", type: "vocabulary" },
    { question: "A: Is he dead? B: No, he is ___.", options: ["immortal", "alive", "human", "A ve B"], correctAnswer: 3, explanation: "Ölümsüz veya hayatta.", type: "vocabulary" },
    { question: "Man on the ___.", options: ["moon", "sun", "star", "planet"], correctAnswer: 0, explanation: "Man on the moon = Ay'daki adam (kurgusal/mitolojik bir ifade).", type: "vocabulary" },
    { question: "A: Can we time travel? B: It ___ be possible one day.", options: ["might", "must", "is", "was"], correctAnswer: 0, explanation: "Gelecek ihtimali.", type: "grammar" },
    { question: "The dark ___.", options: ["side", "light", "part", "way"], correctAnswer: 0, explanation: "The dark side = Karanlık taraf (Star Wars atfı).", type: "vocabulary" },
    { question: "A: Why is the sky green? B: It ___ be because of the gas.", options: ["must", "might", "can't", "A ve B"], correctAnswer: 3, explanation: "Teori/Çıkarım.", type: "grammar" },
    { question: "Under a ___.", options: ["spell", "magic", "dream", "star"], correctAnswer: 0, explanation: "Under a spell = Büyülenmiş olmak (deyim).", type: "vocabulary" },
    { question: "A: Is the robot dangerous? B: It ___ be, we don't know yet.", options: ["might", "must", "can't", "is"], correctAnswer: 0, explanation: "Belirsizlik.", type: "grammar" },
    { question: "The ___ of the rings.", options: ["lord", "king", "queen", "master"], correctAnswer: 0, explanation: "Yüzüklerin Efendisi.", type: "vocabulary" },
    { question: "A: Did they survive? B: They ___ have, let's look for them.", options: ["might", "must", "can't", "do"], correctAnswer: 0, explanation: "Geçmiş ihtimali.", type: "grammar" },
    { question: "A ___ in time saves nine.", options: ["stitch", "move", "step", "jump"], correctAnswer: 0, explanation: "Zamanında yapılan küçük işler ilerideki büyük dertleri önler (atasözü).", type: "vocabulary" },
    { question: "A: Is this real or ___? B: It's all in your head.", options: ["fiction", "fantasy", "dream", "Hepsi"], correctAnswer: 3, explanation: "Gerçek mi yoksa kurgu/fantezi/rüya mı?", type: "vocabulary" },
    { question: "May the ___ be with you.", options: ["force", "power", "magic", "strength"], correctAnswer: 0, explanation: "Güç seninle olsun.", type: "vocabulary" },
    { question: "A: He ___ have won. He had no sword. B: But he had magic!", options: ["can't", "must", "might", "didn't"], correctAnswer: 0, explanation: "İmkansızlık çıkarımı.", type: "grammar" },
    { question: "Back to the ___.", options: ["future", "past", "now", "present"], correctAnswer: 0, explanation: "Geleceğe Dönüş.", type: "vocabulary" },
    { question: "A: What is the ___ of our world? B: Peace.", options: ["future", "destiny", "end", "A ve B"], correctAnswer: 3, explanation: "Gelecek veya Kader.", type: "vocabulary" },
    { question: "Written in the ___.", options: ["stars", "sky", "book", "stone"], correctAnswer: 0, explanation: "Written in the stars = Alna yazılmış / Kaderde var (deyim).", type: "vocabulary" },
    { question: "A: If we ___ aliens, would you be scared? B: Yes!", options: ["met", "meet", "will meet", "meeting"], correctAnswer: 0, explanation: "Second Conditional.", type: "grammar" },
    { question: "Long long ago, in a ___ far away...", options: ["galaxy", "country", "place", "world"], correctAnswer: 0, explanation: "Çok uzak bir galakside... (Masal/Film girişi).", type: "vocabulary" }
];

// Unit 150: Reviews & Recommendations - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Opinions & Recommendations)
const u150q1: EnglishQuestion[] = [
    { question: "I think this movie is ___ interesting.", options: ["too", "very", "enough", "many"], correctAnswer: 1, explanation: "Derecelendirme zarfı: 'very interesting' (çok ilginç).", type: "grammar" },
    { question: "'Recommend' ne demek?", options: ["Eleştirmek", "Tavsiye etmek", "İzlemek", "Bitirmek"], correctAnswer: 1, explanation: "Recommend = Tavsiye etmek.", type: "vocabulary" },
    { question: "The book was ___ boring that I fell asleep.", options: ["so", "such", "too", "very"], correctAnswer: 0, explanation: "So + adjective + that kalıbı.", type: "grammar" },
    { question: "'Boring' ne demek?", options: ["Sıkıcı", "Eğlenceli", "Hızlı", "Kaba"], correctAnswer: 0, explanation: "Boring = Sıkıcı.", type: "vocabulary" },
    { question: "You ___ visit this museum. It's great!", options: ["should", "couldn't", "might not", "won't"], correctAnswer: 0, explanation: "Tavsiye verirken 'should' kullanılır.", type: "grammar" },
    { question: "'Awesome' ne demek?", options: ["Kötü", "Harika", "Normal", "Eski"], correctAnswer: 1, explanation: "Awesome = Harika/Müthiş.", type: "vocabulary" },
    { question: "It's ___ expensive for me to buy.", options: ["too", "very", "enough", "many"], correctAnswer: 0, explanation: "'Too' olumsuz anlamda 'fazla/aşırı' demektir.", type: "grammar" },
    { question: "'Main character' ne demek?", options: ["Kötü adam", "Ana karakter", "Yan rol", "Yazar"], correctAnswer: 1, explanation: "Main character = Ana karakter.", type: "vocabulary" },
    { question: "I highly ___ this restaurant.", options: ["suggest", "recommend", "say", "A ve B"], correctAnswer: 3, explanation: "Tavsiye etmek için suggest veya recommend kullanılabilir.", type: "grammar" },
    { question: "'Disappointed' ne demek?", options: ["Mutlu", "Hayal kırıklığına uğramış", "Heyecanlı", "Kızgın"], correctAnswer: 1, explanation: "Disappointed = Hayal kırıklığına uğramış.", type: "vocabulary" },
    { question: "The food was ___ delicious.", options: ["absolutely", "quite", "fairly", "Hepsi"], correctAnswer: 3, explanation: "Derecelendirme zarfları.", type: "grammar" },
    { question: "'Plot' ne demek?", options: ["Karakter", "Konu/Olay örgüsü", "Mekan", "Zaman"], correctAnswer: 1, explanation: "Plot = Hikayenin konusu/planı.", type: "vocabulary" },
    { question: "Is it worth ___?", options: ["visit", "visiting", "to visit", "visited"], correctAnswer: 1, explanation: "Be worth + V-ing kalıbı (Görülmeye/yapılmaya değer).", type: "grammar" },
    { question: "'Must-see' ne demek?", options: ["Görülmeli", "Görülmese de olur", "Görülmesi imkansız", "Eski"], correctAnswer: 0, explanation: "Must-see = Mutlaka görülmeli.", type: "vocabulary" },
    { question: "I don't like horror movies. They are ___ scary.", options: ["too", "enough", "quite", "bit"], correctAnswer: 0, explanation: "Aşırı derecede (too) korkutucu.", type: "grammar" },
    { question: "'Review' ne demek?", options: ["Eleştiri/İnceleme", "Haber", "Hikaye", "Resim"], correctAnswer: 0, explanation: "Review = İnceleme/Eleştiri yazısı.", type: "vocabulary" },
    { question: "This is a ___ book.", options: ["good really", "really good", "well really", "really well"], correctAnswer: 1, explanation: "Derecelendirme zarfı sıfattan önce gelir.", type: "grammar" },
    { question: "'Excellent' service.", options: ["Kötü", "Mükemmel", "Yavaş", "Ucuz"], correctAnswer: 1, explanation: "Excellent = Kusursuz/Mükemmel.", type: "vocabulary" },
    { question: "Why don't you ___ it a try?", options: ["give", "do", "make", "take"], correctAnswer: 0, explanation: "Give it a try = Bir şans ver/Dene (kalıp).", type: "grammar" },
    { question: "'Rating' ne demek?", options: ["Fiyat", "Puanlama/Derece", "İsim", "Tür"], correctAnswer: 1, explanation: "Rating = Derecelendirme/Puan.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Reviews & Order of Adjectives)
const u150q2: EnglishQuestion[] = [
    { question: "I bought a ___ car.", options: ["blue new Italian", "new blue Italian", "Italian new blue", "new Italian blue"], correctAnswer: 1, explanation: "Sıfat dizilimi: Age (new) + Color (blue) + Origin (Italian).", type: "grammar" },
    { question: "'Cast' ne demek?", options: ["Senaryo", "Oyuncu kadrosu", "Yönetmen", "Işıkçı"], correctAnswer: 1, explanation: "Cast = Oyuncu kadrosu.", type: "vocabulary" },
    { question: "It was ___ a great party that everyone stayed late.", options: ["so", "such", "too", "very"], correctAnswer: 1, explanation: "Such + a/an + adjective + noun kalıbı.", type: "grammar" },
    { question: "'Atmosphere' of the place.", options: ["Havası/Atmosferi", "Yemeği", "Fiyatı", "Yeri"], correctAnswer: 0, explanation: "Atmosphere = Mekanın havası.", type: "vocabulary" },
    { question: "He is a ___ man.", options: ["tall young handsome", "handsome tall young", "young handsome tall", "tall handsome young"], correctAnswer: 1, explanation: "Opinion (handsome) + Size (tall) + Age (young).", type: "grammar" },
    { question: "'Service' was a bit slow.", options: ["Yemek", "Servis/Hizmet", "Masa", "Hesap"], correctAnswer: 1, explanation: "Service = Hizmet.", type: "vocabulary" },
    { question: "The movie ___ I saw yesterday was amazing.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'Soundtrack' ne demek?", options: ["Film müziği", "Ses kaydı", "Konuşma", "Gürültü"], correctAnswer: 0, explanation: "Soundtrack = Film müziği.", type: "vocabulary" },
    { question: "She has ___ eyes.", options: ["beautiful big green", "big beautiful green", "green big beautiful", "beautiful green big"], correctAnswer: 0, explanation: "Opinion (beautiful) + Size (big) + Color (green).", type: "grammar" },
    { question: "'Highly recommended' ne demek?", options: ["Kesinlikle tavsiye edilir", "Hiç tavsiye edilmez", "Normal", "Eski"], correctAnswer: 0, explanation: "Highly recommended = Şiddetle tavsiye edilir.", type: "vocabulary" },
    { question: "This is the restaurant ___ I told you about.", options: ["who", "which", "where", "that"], correctAnswer: 3, explanation: "Eşyalar/Mekanlar için that (veya which) kullanılabilir.", type: "grammar" },
    { question: "'Average' quality.", options: ["Yüksek", "Düşük", "Ortalama", "Kusursuz"], correctAnswer: 2, explanation: "Average = Ortalama.", type: "vocabulary" },
    { question: "The pizza is ___ for two people.", options: ["big enough", "enough big", "too big", "A ve C"], correctAnswer: 3, explanation: "Big enough (yeterince büyük) veya too big (çok büyük).", type: "grammar" },
    { question: "'Ending' was unexpected.", options: ["Başlangıç", "Son/Final", "Giriş", "Başrol"], correctAnswer: 1, explanation: "Ending = Son.", type: "vocabulary" },
    { question: "I suggests ___ to the cinema.", options: ["go", "going", "to go", "goes"], correctAnswer: 1, explanation: "Suggest + V-ing kalıbı.", type: "grammar" },
    { question: "'Impressive' performance.", options: ["Etkileyici", "Kötü", "Sıradan", "Komik"], correctAnswer: 0, explanation: "Impressive = Etkileyici.", type: "vocabulary" },
    { question: "They gave me a ___ box.", options: ["small square wooden", "square small wooden", "wooden small square", "small wooden square"], correctAnswer: 0, explanation: "Size (small) + Shape (square) + Material (wooden).", type: "grammar" },
    { question: "'Special effects' were CGI.", options: ["Özel efektler", "Sesler", "Müzikler", "Işıklar"], correctAnswer: 0, explanation: "Special effects = Özel efektler.", type: "vocabulary" },
    { question: "Don't miss it! It's a ___ experience.", options: ["once-in-a-lifetime", "boring", "bad", "slow"], correctAnswer: 0, explanation: "Hayatta bir kez gelebilecek (eşsiz) bir deneyim.", type: "vocabulary" },
    { question: "I'd rather ___ at home.", options: ["stay", "staying", "to stay", "stayed"], correctAnswer: 0, explanation: "Would rather + Bare Infinitive (yalın fiil).", type: "grammar" }
];

// Quiz 3: HARD - Analiz (Detailed Critiques & Connectors)
const u150q3: EnglishQuestion[] = [
    { question: "The acting was great; ___ , the plot was weak.", options: ["however", "so", "because", "although"], correctAnswer: 0, explanation: "Zıtlık bağlacı: however (ancak).", type: "grammar" },
    { question: "'Overrated' ne demek?", options: ["Hak ettiğinden fazla değer verilen", "Hakkı yenen", "Çok ucuz", "Çok yeni"], correctAnswer: 0, explanation: "Overrated = Gözde büyütülmüş / abartılmış.", type: "vocabulary" },
    { question: "___ the food was cold, we enjoyed the night.", options: ["However", "Although", "But", "So"], correctAnswer: 1, explanation: "Zıtlık bağlacı: Although (rağmen).", type: "grammar" },
    { question: "A 'masterpiece' is a ___ work.", options: ["bad", "great", "simple", "worst"], correctAnswer: 1, explanation: "Masterpiece = Şaheser.", type: "vocabulary" },
    { question: "The director ___ film won an Oscar is here.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi: filmi kazanan yönetmen.", type: "grammar" },
    { question: "'Underrated' ne demek?", options: ["Abartılmış", "Değeri bilinmemiş", "Pahalı", "Ünlü"], correctAnswer: 1, explanation: "Underrated = Değeri yeterince bilinmemiş.", type: "vocabulary" },
    { question: "I recommend that you ___ early.", options: ["leave", "leaving", "to leave", "leaves"], correctAnswer: 0, explanation: "Recommend that + subject + (should) verb.", type: "grammar" },
    { question: "'Cinematography' refers to ___.", options: ["music", "camera work", "acting", "food"], correctAnswer: 1, explanation: "Cinematography = Görüntü yönetimi.", type: "vocabulary" },
    { question: "It's the most ___ book I've ever read.", options: ["boring", "bored", "bore", "bores"], correctAnswer: 0, explanation: "Cansız nesneler için -ing sıfatı kullanılır.", type: "grammar" },
    { question: "'Pricey' ne demek?", options: ["Ucuz", "Pahalı", "Güzel", "Eski"], correctAnswer: 1, explanation: "Pricey = Tuzlu/Pahalı.", type: "vocabulary" },
    { question: "The more I read it, ___ I liked it.", options: ["the more", "more", "most", "the most"], correctAnswer: 0, explanation: "The more... the more... kalıbı.", type: "grammar" },
    { question: "'Twist' in the story.", options: ["Son", "Beklenmedik dönüş/sürpriz", "Başrol", "Hata"], correctAnswer: 1, explanation: "Twist = Sürpriz gelişme/ters köşe.", type: "vocabulary" },
    { question: "I was ___ with the results.", options: ["disappointing", "disappointed", "disappoint", "disappoints"], correctAnswer: 1, explanation: "Kişinin hissi için -ed sıfatı kullanılır.", type: "grammar" },
    { question: "'Authentic' food.", options: ["Yapay", "Gerçek/Özgün/Otantik", "Pahalı", "Hızlı"], correctAnswer: 1, explanation: "Authentic = Otantik/Aslına uygun.", type: "vocabulary" },
    { question: "Barely ___ to finish the project.", options: ["manage", "managed", "managing", "to manage"], correctAnswer: 1, explanation: "Barely managed = Zar zor başardı.", type: "grammar" },
    { question: "'Flawless' means ___.", options: ["broken", "without any mistakes", "cheap", "loud"], correctAnswer: 1, explanation: "Flawless = Kusursuz.", type: "vocabulary" },
    { question: "Despite ___ tired, he went to the party.", options: ["be", "being", "been", "was"], correctAnswer: 1, explanation: "Despite + V-ing/Noun.", type: "grammar" },
    { question: "'Weak' points of the movie.", options: ["Güçlü", "Zayıf", "Komik", "Uzun"], correctAnswer: 1, explanation: "Weak points = Zayıf noktalar.", type: "vocabulary" },
    { question: "I'd suggest ___ a reservation.", options: ["make", "making", "to make", "made"], correctAnswer: 1, explanation: "Suggest + V-ing.", type: "grammar" },
    { question: "The product is ___ better than the old one.", options: ["much", "more", "very", "so"], correctAnswer: 0, explanation: "Comparative yapıları pekiştirmek için 'much' kullanılır.", type: "grammar" }
];

// Quiz 4: MASTER - Diyalog ve Karma (Expert Recommendations & Idioms)
const u150q4: EnglishQuestion[] = [
    { question: "A: What's your take on the film? B: It was a waste ___ time.", options: ["of", "for", "to", "at"], correctAnswer: 0, explanation: "Waste of time = Zaman kaybı.", type: "grammar" },
    { question: "Thumb ___.", options: ["up", "down", "A ve B", "left"], correctAnswer: 2, explanation: "Thumbs up (beğeni), Thumbs down (beğenmeme).", type: "vocabulary" },
    { question: "A: Do you have any suggestions? B: You'd ___ go to the Italian place.", options: ["better", "should", "rather", "ought"], correctAnswer: 0, explanation: "You'd better = Yapmasan iyi olur / Yapmalısın (tavsiye).", type: "grammar" },
    { question: "Steal the ___.", options: ["show", "movie", "book", "money"], correctAnswer: 0, explanation: "Steal the show = Rol çalmak / İlgi odağı olmak (deyim).", type: "vocabulary" },
    { question: "A: How was the service? B: It left a lot to be ___.", options: ["desired", "wanted", "seen", "done"], correctAnswer: 0, explanation: "Leave a lot to be desired = Beklentinin çok altında kalmak (deyim).", type: "vocabulary" },
    { question: "Read between the ___.", options: ["lines", "books", "words", "pages"], correctAnswer: 0, explanation: "Read between the lines = Satır aralarını okumak (deyim).", type: "vocabulary" },
    { question: "A: Should I buy it? B: It's totally ___ it.", options: ["worth", "value", "price", "good"], correctAnswer: 0, explanation: "It's worth it = Buna değer.", type: "grammar" },
    { question: "A piece of ___.", options: ["cake", "bread", "art", "work"], correctAnswer: 0, explanation: "A piece of cake = Çocuk oyuncağı (deyim).", type: "vocabulary" },
    { question: "A: Was it exciting? B: I was on the edge of my ___.", options: ["seat", "chair", "table", "bed"], correctAnswer: 0, explanation: "On the edge of my seat = Heyecandan yerinde duramamak (deyim).", type: "vocabulary" },
    { question: "Break a ___.", options: ["leg", "hand", "arm", "finger"], correctAnswer: 0, explanation: "Break a leg = İyi şanslar (deyim).", type: "vocabulary" },
    { question: "A: Which one is better? B: It's like apples and ___.", options: ["oranges", "bananas", "pears", "grapes"], correctAnswer: 0, explanation: "Like apples and oranges = Elma ile armut gibi / Karşılaştırılamaz (deyim).", type: "vocabulary" },
    { question: "The icing on the ___.", options: ["cake", "bread", "cookie", "pie"], correctAnswer: 0, explanation: "The icing on the cake = Pastanın üzerindeki krema / Güzel bir şeyin üzerine gelen ekstra güzellik (deyim).", type: "vocabulary" },
    { question: "A: Is the plot complex? B: Yes, it's ___ blowing.", options: ["mind", "head", "eye", "ear"], correctAnswer: 0, explanation: "Mind-blowing = Akıllara zarar / Müthiş etkileyici.", type: "vocabulary" },
    { question: "Judge a book by its ___.", options: ["cover", "title", "page", "price"], correctAnswer: 0, explanation: "Judge a book by its cover = Dış görünüşüne göre yargılamak (deyim).", type: "vocabulary" },
    { question: "A: Do you recommend it? B: I would give it a ___ berth.", options: ["wide", "long", "big", "fast"], correctAnswer: 0, explanation: "Give something a wide berth = Bir şeyden uzak durmak (deyim).", type: "vocabulary" },
    { question: "The ___ of the crop.", options: ["cream", "top", "best", "pick"], correctAnswer: 0, explanation: "The cream of the crop = En iyinin en iyisi (deyim).", type: "vocabulary" },
    { question: "A: Is it a new restaurant? B: Yes, it's a breath of fresh ___.", options: ["air", "wind", "light", "water"], correctAnswer: 0, explanation: "A breath of fresh air = Yeni ve farklı bir şey / Temiz bir soluk (deyim).", type: "vocabulary" },
    { question: "Take it with a grain of ___.", options: ["salt", "sugar", "pepper", "sand"], correctAnswer: 0, explanation: "Take it with a grain of salt = İhtiyatla karşılamak / Tamamına inanmamak (deyim).", type: "vocabulary" },
    { question: "A: Is the movie good? B: It's alright, but it doesn't ring a ___.", options: ["bell", "alarm", "phone", "clock"], correctAnswer: 0, explanation: "Doesn't ring a bell = Tanıdık gelmiyor (burada filmin etkileyici olmadığını ima ediyor olabilir).", type: "vocabulary" },
    { question: "The bottom ___ is that it's too expensive.", options: ["line", "word", "page", "note"], correctAnswer: 0, explanation: "The bottom line = Sonuç olarak / İşin özü (deyim).", type: "vocabulary" }
];

// Unit 151: Cultural Differences - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Traditions & Permission)
const u151q1: EnglishQuestion[] = [
    { question: "You ___ take photos in the museum. It's allowed.", options: ["can", "mustn't", "have to", "shouldn't"], correctAnswer: 0, explanation: "İzin bildirirken 'can' kullanılır.", type: "grammar" },
    { question: "'Tradition' ne demek?", options: ["Gelenek", "Gelecek", "Gerçek", "Gezi"], correctAnswer: 0, explanation: "Tradition = Gelenek.", type: "vocabulary" },
    { question: "___ I come in?", options: ["Must", "May", "Have to", "Should"], correctAnswer: 1, explanation: "Nazikçe izin isterken 'May I...?' kalıbı kullanılır.", type: "grammar" },
    { question: "'Holiday' ne demek?", options: ["Tatil/Bayram", "İş", "Okul", "Ödev"], correctAnswer: 0, explanation: "Holiday = Tatil veya Dini/Milli Bayram.", type: "vocabulary" },
    { question: "You ___ wear a seatbelt in a car.", options: ["must", "can't", "may not", "shouldn't"], correctAnswer: 0, explanation: "Kural/Zorunluluk (kanuni): must.", type: "grammar" },
    { question: "'Respect' older people.", options: ["Sev", "Saygı duy", "İzle", "Gez"], correctAnswer: 1, explanation: "Respect = Saygı duymak.", type: "vocabulary" },
    { question: "Children ___ play on the street. It's dangerous.", options: ["can", "shouldn't", "have to", "may"], correctAnswer: 1, explanation: "Tavsiye/Uyarı: shouldn't (yapmamalılar).", type: "grammar" },
    { question: "'Custom' ne demek?", options: ["Müşteri", "Gelenek/Görenek/Adet", "Kostüm", "Yol"], correctAnswer: 1, explanation: "Custom = Adet/Gelenek.", type: "vocabulary" },
    { question: "You ___ use your phone during the exam.", options: ["can", "mustn't", "have to", "may"], correctAnswer: 1, explanation: "Kesin yasak: mustn't.", type: "grammar" },
    { question: "'Celebrate' a birthday.", options: ["Bitirmek", "Kutlamak", "İzlemek", "Durdurmak"], correctAnswer: 1, explanation: "Celebrate = Kutlamak.", type: "vocabulary" },
    { question: "Students ___ wear a uniform in this school.", options: ["have to", "can't", "may", "don't"], correctAnswer: 0, explanation: "Dış kaynaklı zorunluluk: have to.", type: "grammar" },
    { question: "'Diversity' ne demek?", options: ["Benzerlik", "Çeşitlilik", "Ayrılık", "Hız"], correctAnswer: 1, explanation: "Diversity = Çeşitlilik.", type: "vocabulary" },
    { question: "___ I use your pen, please?", options: ["Must", "Could", "Should", "Have to"], correctAnswer: 1, explanation: "İzin isterken 'Could' nazik bir seçenektir.", type: "grammar" },
    { question: "'Guest' ne demek?", options: ["Ev sahibi", "Misafir", "Yabancı", "Komşu"], correctAnswer: 1, explanation: "Guest = Misafir.", type: "vocabulary" },
    { question: "You ___ smoke here. Look at the sign.", options: ["can", "mustn't", "have to", "should"], correctAnswer: 1, explanation: "Yasak: mustn't.", type: "grammar" },
    { question: "'Festival' ne demek?", options: ["Savaş", "Festival/Şenlik", "Müze", "Okul"], correctAnswer: 1, explanation: "Festival = Şenlik.", type: "vocabulary" },
    { question: "I ___ go now. It's getting late.", options: ["must", "can't", "may not", "shouldn't"], correctAnswer: 0, explanation: "Kişisel zorunluluk (gitmem lazım).", type: "grammar" },
    { question: "'Handshake' is a common greeting.", options: ["Sarılma", "El sıkışma", "Öpüşme", "El sallama"], correctAnswer: 1, explanation: "Handshake = Tokalaşma.", type: "vocabulary" },
    { question: "Do I ___ to pay now?", options: ["must", "have", "can", "should"], correctAnswer: 1, explanation: "Do ... have to ...? (Soru yapısı).", type: "grammar" },
    { question: "'Etiquette' ne demek?", options: ["Etiket", "Görgü kuralları", "Hediye", "Yemek"], correctAnswer: 1, explanation: "Etiquette = Görgü kuralları.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Social Rules & Necessity)
const u151q2: EnglishQuestion[] = [
    { question: "In the UK, you ___ drive on the left.", options: ["must", "can't", "shouldn't", "may not"], correctAnswer: 0, explanation: "Yasal zorunluluk: must.", type: "grammar" },
    { question: "'Behavior' ne demek?", options: ["Davranış", "Görünüş", "Fikir", "Hız"], correctAnswer: 0, explanation: "Behavior = Davranış.", type: "vocabulary" },
    { question: "It's a holiday, so I ___ work today.", options: ["don't have to", "mustn't", "can't", "shouldn't"], correctAnswer: 0, explanation: "Zorunluluk olmaması: don't have to (yapmama gerek yok).", type: "grammar" },
    { question: "'Belief' ne demek?", options: ["Bilgi", "İnanç", "Gerçek", "Yalan"], correctAnswer: 1, explanation: "Belief = İnanç.", type: "vocabulary" },
    { question: "You ___ be late for the meeting. The boss is very strict.", options: ["can", "shouldn't", "don't have to", "may"], correctAnswer: 1, explanation: "Güçlü tavsiye/uyarı: shouldn't.", type: "grammar" },
    { question: "'Value' ne demek?", options: ["Fiyat", "Değer", "Hız", "Güç"], correctAnswer: 1, explanation: "Value = Değer (kültürel veya maddi).", type: "vocabulary" },
    { question: "Does she ___ to wear a scarf?", options: ["must", "has", "have", "can"], correctAnswer: 2, explanation: "Does ile 'have' kullanılır (has değil).", type: "grammar" },
    { question: "'Body language' is important.", options: ["Spor", "Vücut dili", "Dans", "Sağlık"], correctAnswer: 1, explanation: "Body language = Vücut dili.", type: "vocabulary" },
    { question: "You ___ bring a gift to the party, but it's nice if you do.", options: ["don't have to", "mustn't", "can't", "shouldn't"], correctAnswer: 0, explanation: "Gerekli değil anlamında 'don't have to'.", type: "grammar" },
    { question: "'Offend' someone.", options: ["Mutlu etmek", "Kırmak/Darılmak/Gücendirmek", "Sevmek", "İzlemek"], correctAnswer: 1, explanation: "Offend = Gücendirmek.", type: "vocabulary" },
    { question: "I ___ speak French well when I was young.", options: ["can", "could", "must", "should"], correctAnswer: 1, explanation: "Geçmiş yetenek: could.", type: "grammar" },
    { question: "'Religion' ne demek?", options: ["Okul", "Din", "Ülke", "Aile"], correctAnswer: 1, explanation: "Religion = Din.", type: "vocabulary" },
    { question: "You ___ touch the paintings. It's forbidden.", options: ["can", "mustn't", "don't have to", "may"], correctAnswer: 1, explanation: "Kesin yasak: mustn't.", type: "grammar" },
    { question: "'Polite' ne demek?", options: ["Kaba", "Kibar", "Hızlı", "Yavaş"], correctAnswer: 1, explanation: "Polite = Kibar.", type: "vocabulary" },
    { question: "We ___ take a taxi. The bus is already here.", options: ["mustn't", "don't have to", "can't", "shouldn't"], correctAnswer: 1, explanation: "Gerek yok (don't have to).", type: "grammar" },
    { question: "'Rude' behavior.", options: ["Kibar", "Kaba", "Komik", "Hızlı"], correctAnswer: 1, explanation: "Rude = Kaba.", type: "vocabulary" },
    { question: "He ___ study hard to pass the exam.", options: ["has to", "mustn't", "can", "may"], correctAnswer: 0, explanation: "Zorunluluk: has to.", type: "grammar" },
    { question: "'Eye contact' ne demek?", options: ["Göz teması", "Gözlük", "Bakış", "Görmek"], correctAnswer: 0, explanation: "Eye contact = Göz teması.", type: "vocabulary" },
    { question: "Can you ___ me with this baggage?", options: ["help", "helps", "helping", "helped"], correctAnswer: 0, explanation: "Can + Bare V1.", type: "grammar" },
    { question: "'Global' world.", options: ["Küresel", "Yerel", "Eski", "Yeni"], correctAnswer: 0, explanation: "Global = Küresel.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Business Culture & Ethics)
const u151q3: EnglishQuestion[] = [
    { question: "In some cultures, you ___ take off your shoes before entering.", options: ["must", "can't", "might", "may not"], correctAnswer: 0, explanation: "Güçlü kültürel zorunluluk/kural.", type: "grammar" },
    { question: "'Punctuality' means being ___.", options: ["on time", "late", "rich", "smart"], correctAnswer: 0, explanation: "Punctuality = Dakiklik.", type: "vocabulary" },
    { question: "A: Do I have to wear a suit? B: No, you ___.", options: ["mustn't", "don't have to", "can't", "shouldn't"], correctAnswer: 1, explanation: "Zorunluluk yok cevabı.", type: "grammar" },
    { question: "'Misinterpretation' of a gesture.", options: ["Yanlış anlama/yorum", "Doğru bilgi", "Hareket", "Şaka"], correctAnswer: 0, explanation: "Misinterpretation = Yanlış yorumlama.", type: "vocabulary" },
    { question: "You ___ point your finger at people; it's rude.", options: ["shouldn't", "don't have to", "can", "must"], correctAnswer: 0, explanation: "Sosyal tavsiye/uyarı.", type: "grammar" },
    { question: "'Sensitivity' ne demek?", options: ["Duyarlılık/Hassasiyet", "Korku", "Hız", "Güç"], correctAnswer: 0, explanation: "Sensitivity = Hassasiyet.", type: "vocabulary" },
    { question: "Visitors ___ obtain a visa before traveling.", options: ["must", "may", "can", "should"], correctAnswer: 0, explanation: "Resmi zorunluluk.", type: "grammar" },
    { question: "'Bribe' ne demek?", options: ["Hediye", "Rüşvet", "Ödeme", "Borç"], correctAnswer: 1, explanation: "Bribe = Rüşvet.", type: "vocabulary" },
    { question: "He ___ have been more careful with his words.", options: ["should", "must", "can", "may"], correctAnswer: 0, explanation: "Geçmişe dair pişmanlık/tavsiye: should have + V3.", type: "grammar" },
    { question: "'Stereotype' ne demek?", options: ["Gerçek", "Kalıp yargı", "Haber", "Resim"], correctAnswer: 1, explanation: "Stereotype = Basmakalıp düşünce.", type: "vocabulary" },
    { question: "You ___ better not miss the train.", options: ["had", "would", "should", "must"], correctAnswer: 0, explanation: "Had better (not) kalıbı.", type: "grammar" },
    { question: "'Hospitality' is a Turkish trait.", options: ["Misafirperverlik", "Kibarlık", "Tatil", "Düğün"], correctAnswer: 0, explanation: "Hospitality = Misafirperverlik.", type: "vocabulary" },
    { question: "___ you mind if I opened the window?", options: ["Would", "Do", "Should", "Can"], correctAnswer: 0, explanation: "Would you mind if + Past Simple? (İzin isteme).", type: "grammar" },
    { question: "'Social norms' ne demek?", options: ["Sosyal kurallar/normlar", "Yasalar", "Haberler", "Sorular"], correctAnswer: 0, explanation: "Social norms = Sosyal normlar.", type: "vocabulary" },
    { question: "You ___ not use calculators in this exam.", options: ["may", "must", "have to", "should"], correctAnswer: 0, explanation: "Resmi yasak/izin (may not).", type: "grammar" },
    { question: "'Gesture' ne demek?", options: ["Şaka", "Jest/Hareket", "Söz", "Bakış"], correctAnswer: 1, explanation: "Gesture = El-kol hareketi/Jest.", type: "vocabulary" },
    { question: "I ___ to call my parents every Sunday.", options: ["must", "should", "ought", "can"], correctAnswer: 2, explanation: "Ought to = Should (Yapmalıyım).", type: "grammar" },
    { question: "'Tolerance' for different cultures.", options: ["Hoşgörü", "Korku", "Nefret", "İlgi"], correctAnswer: 0, explanation: "Tolerance = Hoşgörü.", type: "vocabulary" },
    { question: "We ___ have brought an umbrella; it's raining!", options: ["should", "must", "could", "may"], correctAnswer: 0, explanation: "Geçmişe dair 'keşke' (should have + V3).", type: "grammar" },
    { question: "'Conflict' of interest.", options: ["Anlaşmazlık/Çıkar çatışması", "Barış", "Yemek", "Düğün"], correctAnswer: 0, explanation: "Conflict = Çatışma.", type: "vocabulary" }
];

// Quiz 4: MASTER - Kültür Diyalogları ve Karma (Cultural Shock & Expressions)
const u151q4: EnglishQuestion[] = [
    { question: "A: Is it okay to tips here? B: You ___ to, but it's appreciated.", options: ["don't have", "must", "can't", "shouldn't"], correctAnswer: 0, explanation: "Bahşiş vermek zorunda değilsin (don't have to).", type: "grammar" },
    { question: "When in Rome, do as the ___ do.", options: ["Romans", "people", "king", "others"], correctAnswer: 0, explanation: "Gittiğin yerin adetlerine uymalısın (atasözü).", type: "vocabulary" },
    { question: "A: May I sit here? B: Yes, ___.", options: ["go ahead", "you must", "no problem", "A ve C"], correctAnswer: 3, explanation: "Buyurun / Tabii.", type: "grammar" },
    { question: "It's all Greek to ___.", options: ["me", "you", "him", "them"], correctAnswer: 0, explanation: "Hiçbir şey anlamıyorum / Bana her şey Fransız (deyim).", type: "vocabulary" },
    { question: "A: What's the robe code? B: You ___ wear a tie.", options: ["have to", "must", "can", "A ve B"], correctAnswer: 3, explanation: "Zorunluluk.", type: "grammar" },
    { question: "The ___ of the ice.", options: ["melting", "breaking", "cracking", "freezing"], correctAnswer: 1, explanation: "The breaking of the ice = Buzları eritmek (ilişki başlatmak).", type: "vocabulary" },
    { question: "A: Can we visit the church? B: Only if you ___ your hair.", options: ["cover", "hide", "paint", "wash"], correctAnswer: 0, explanation: "Kapatmak (başörtüsü vb.).", type: "vocabulary" },
    { question: "Cross that bridge when you ___ to it.", options: ["come", "go", "get", "get at"], correctAnswer: 0, explanation: "Zamanı gelince düşünürüz (deyim).", type: "vocabulary" },
    { question: "A: Must we leave now? B: Yes, ___.", options: ["we must", "we have to", "we do", "A ve B"], correctAnswer: 3, explanation: "Zorunluluk onayı.", type: "grammar" },
    { question: "Cultural ___.", options: ["shock", "hit", "jump", "ride"], correctAnswer: 0, explanation: "Cultural shock = Kültür şoku.", type: "vocabulary" },
    { question: "A: Should I bring flowers? B: No, that ___ be strange.", options: ["might", "must", "can't", "is"], correctAnswer: 0, explanation: "İhtimal çıkarımı.", type: "grammar" },
    { question: "Speak of the ___.", options: ["devil", "angel", "ghost", "name"], correctAnswer: 0, explanation: "İti an çomağı hazırla / İyi insan lafın üzerine gelir (deyim).", type: "vocabulary" },
    { question: "A: Are we allowed to shout? B: No, you ___ keep quiet.", options: ["must", "have to", "can", "A ve B"], correctAnswer: 3, explanation: "Zorunluluk.", type: "grammar" },
    { question: "Bury the ___.", options: ["hatchet", "knife", "sword", "gun"], correctAnswer: 0, explanation: "Bury the hatchet = Barışmak / Savaş baltalarını gömmek (deyim).", type: "vocabulary" },
    { question: "A: I'm not sure about the custom. B: Better safe than ___.", options: ["sorry", "sad", "bad", "late"], correctAnswer: 0, explanation: "Tedbirli olmak pişman olmaktan iyidir (atasözü).", type: "vocabulary" },
    { question: "A storm in a ___.", options: ["teacup", "coffee cup", "glass", "bottle"], correctAnswer: 0, explanation: "A storm in a teacup = Bir kaşık suda fırtına koparmak (deyim).", type: "vocabulary" },
    { question: "A: Can I pay with cash? B: No, you ___ use a card.", options: ["must", "can't", "may", "don't"], correctAnswer: 0, explanation: "Zorunluluk.", type: "grammar" },
    { question: "Mind your P's and ___.", options: ["Q's", "B's", "S's", "R's"], correctAnswer: 0, explanation: "Mind your P's and Q's = Görgü kurallarına dikkat et (deyim).", type: "vocabulary" },
    { question: "A: Why are you so quiet? B: I don't want to ___ anyone.", options: ["offend", "help", "see", "meet"], correctAnswer: 0, explanation: "Kimseyi kırmak/gücendirmek istemiyorum.", type: "vocabulary" },
    { question: "The world is your ___.", options: ["oyster", "place", "home", "star"], correctAnswer: 0, explanation: "The world is your oyster = Dünya senin elinde / Tüm imkanlar senin (deyim).", type: "vocabulary" }
];

// Unit 152: The News & Media - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Types of News & Saying/Telling)
const u152q1: EnglishQuestion[] = [
    { question: "He ___ me that he was tired.", options: ["said", "told", "says", "tells"], correctAnswer: 1, explanation: "Birine bir şey söylemek (bir kişi nesnesi varken) için 'tell/told' kullanılır.", type: "grammar" },
    { question: "'Headline' ne demek?", options: ["Manşet/Başlık", "Alt yazı", "Resim", "Yazar"], correctAnswer: 0, explanation: "Headline = Haber başlığı/Manşet.", type: "vocabulary" },
    { question: "She ___ that she liked the movie.", options: ["said", "told", "says", "tells"], correctAnswer: 0, explanation: "Nesne (kişi) yoksa 'say/said' kullanılır.", type: "grammar" },
    { question: "'Weather forecast' ne demek?", options: ["Haber bülteni", "Hava durumu tahmini", "Spor haberi", "Reklam"], correctAnswer: 1, explanation: "Weather forecast = Hava durumu.", type: "vocabulary" },
    { question: "They ___ us to wait here.", options: ["said", "told", "saying", "tell"], correctAnswer: 1, explanation: "Told someone to do something.", type: "grammar" },
    { question: "'Interview' ne demek?", options: ["Yarışma", "Röportaj/Mülakat", "Oyun", "Haber"], correctAnswer: 1, explanation: "Interview = Röportaj.", type: "vocabulary" },
    { question: "Did you watch the ___ news?", options: ["evening", "last", "late", "Hepsi"], correctAnswer: 3, explanation: "Akşam/son/geç haberleri.", type: "vocabulary" },
    { question: "'Channel' ne demek?", options: ["Kanal", "Radyo", "Dizi", "Film"], correctAnswer: 0, explanation: "Channel = (TV) Kanalı.", type: "vocabulary" },
    { question: "The reporter ___ the truth.", options: ["told", "said", "say", "telling"], correctAnswer: 0, explanation: "Tell the truth = Doğruyu söylemek (kalıp).", type: "grammar" },
    { question: "'Breaking news' ne demek?", options: ["Eski haber", "Son dakika haberi", "Yalan haber", "Spor haberi"], correctAnswer: 1, explanation: "Breaking news = Son dakika haberi.", type: "vocabulary" },
    { question: "I ___ a lie.", options: ["said", "told", "speak", "talk"], correctAnswer: 1, explanation: "Tell a lie = Yalan söylemek (kalıp).", type: "grammar" },
    { question: "'Journalist' ne demek?", options: ["Öğretmen", "Gazeteci", "Doktor", "Polis"], correctAnswer: 1, explanation: "Journalist = Gazeteci.", type: "vocabulary" },
    { question: "She ___ 'Hello' to me.", options: ["said", "told", "spoke", "talked"], correctAnswer: 0, explanation: "Said + 'text' (Bir ifadeyi söylemek).", type: "grammar" },
    { question: "'Editor' ne demek?", options: ["Okuyucu", "Editör", "Yazar", "Satıcı"], correctAnswer: 1, explanation: "Editor = Editör.", type: "vocabulary" },
    { question: "Can you ___ me the time?", options: ["say", "tell", "speak", "talk"], correctAnswer: 1, explanation: "Tell me (Bana söyle).", type: "grammar" },
    { question: "'Live' broadcast.", options: ["Eski", "Canlı yayın", "Yeni", "Hızlı"], correctAnswer: 1, explanation: "Live = Canlı.", type: "vocabulary" },
    { question: "He ___ that he would come.", options: ["said", "told", "tells", "saying"], correctAnswer: 0, explanation: "Reported speech girişi.", type: "grammar" },
    { question: "'Anchor' ne demek?", options: ["Yazar", "Haber sunucusu", "Kameraman", "Gemi"], correctAnswer: 1, explanation: "News anchor = Haber sunucusu.", type: "vocabulary" },
    { question: "Don't ___ anybody my secret.", options: ["say", "tell", "speak", "talk"], correctAnswer: 1, explanation: "Tell someone a secret.", type: "grammar" },
    { question: "'Advertisement' ne demek?", options: ["Haber", "Reklam", "Dizi", "Film"], correctAnswer: 1, explanation: "Advertisement (Ad) = Reklam.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Reported Speech & Media passive)
const u152q2: EnglishQuestion[] = [
    { question: "Mary said, 'I am happy.' -> Mary said she ___ happy.", options: ["is", "was", "be", "been"], correctAnswer: 1, explanation: "Dolaylı anlatımda am/is -> was olur.", type: "grammar" },
    { question: "'Social media' is everywhere.", options: ["Geleneksel medya", "Sosyal medya", "Haber", "Gazete"], correctAnswer: 1, explanation: "Social media = Sosyal medya.", type: "vocabulary" },
    { question: "Tom said, 'I can swim.' -> Tom said he ___ swim.", options: ["can", "could", "will", "would"], correctAnswer: 1, explanation: "Dolaylı anlatımda can -> could olur.", type: "grammar" },
    { question: "'Source' of the information.", options: ["Fiyatı", "Bilginin kaynağı", "Yolu", "Hızı"], correctAnswer: 1, explanation: "Source = Kaynak.", type: "vocabulary" },
    { question: "The news ___ reported every hour.", options: ["is", "are", "was", "were"], correctAnswer: 0, explanation: "News tekil (uncountable) kabul edilir: is.", type: "grammar" },
    { question: "'Article' ne demek?", options: ["Resim", "Makale/Yazı", "Kitap", "Hikaye"], correctAnswer: 1, explanation: "Article = Gazete/Dergi yazısı.", type: "vocabulary" },
    { question: "The witness said that he ___ the accident.", options: ["see", "saw", "had seen", "seen"], correctAnswer: 1, explanation: "Basit dolaylı anlatım (backshift).", type: "grammar" },
    { question: "'Censorship' ne demek?", options: ["Özgürlük", "Sansür", "Haber", "Yayın"], correctAnswer: 1, explanation: "Censorship = Sansür.", type: "vocabulary" },
    { question: "She told me ___ wait for her.", options: ["not to", "to not", "don't", "didn't"], correctAnswer: 0, explanation: "Olumsuz emir/istek dolaylı anlatımı: not + to + V1.", type: "grammar" },
    { question: "'Fake news' is a problem.", options: ["Doğru haber", "Sahte/Yalan haber", "Eski haber", "Hızlı haber"], correctAnswer: 1, explanation: "Fake news = Asılsız haber.", type: "vocabulary" },
    { question: "It is ___ that the world is round.", options: ["said", "told", "saying", "tell"], correctAnswer: 0, explanation: "It is said that... (Söylenir ki...).", type: "grammar" },
    { question: "'Subscriber' ne demek?", options: ["Yazar", "Abone", "Okuyucu", "İzleyici"], correctAnswer: 1, explanation: "Subscriber = Abone.", type: "vocabulary" },
    { question: "He asked me where I ___.", options: ["live", "lived", "living", "lives"], correctAnswer: 1, explanation: "Dolaylı soru (zaman kayması).", type: "grammar" },
    { question: "'Paparazzi' follow celebrities.", options: ["Gazeteciler", "Magazin muhabirleri", "Polisler", "Hayranlar"], correctAnswer: 1, explanation: "Paparazzi = Magazin fotoğrafçıları.", type: "vocabulary" },
    { question: "They said that they ___ finish it today.", options: ["will", "would", "shall", "won't"], correctAnswer: 1, explanation: "Will -> would (dolaylı anlatım).", type: "grammar" },
    { question: "'Global issues' are on the news.", options: ["Yerel sorunlar", "Küresel sorunlar", "Spor", "Hava durumu"], correctAnswer: 1, explanation: "Global issues = Küresel meseleler.", type: "vocabulary" },
    { question: "The president ___ that he would resign.", options: ["announced", "told", "said", "A ve C"], correctAnswer: 3, explanation: "Announce (duyurmak) veya Say (söylemek).", type: "grammar" },
    { question: "'Audience' ne demek?", options: ["Yazar", "İzleyici/Dinleyici kitlesi", "Oyuncu", "Müdür"], correctAnswer: 1, explanation: "Audience = Kitle/İzleyici.", type: "vocabulary" },
    { question: "She asked me ___ I was okay.", options: ["that", "if", "weather", "which"], correctAnswer: 1, explanation: "Evet/Hayır sorularının dolaylı hali: if (olup olmadığını).", type: "grammar" },
    { question: "'Viral' video.", options: ["Kötü", "Hızla yayılan/Viral", "Eski", "Uzun"], correctAnswer: 1, explanation: "Viral = Hızla yayılan.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Journalism Ethics & Complex Reporting)
const u152q3: EnglishQuestion[] = [
    { question: "The prime minister ___ the claims.", options: ["denied", "said", "told", "claimed"], correctAnswer: 0, explanation: "Deny = İnkâr etmek (olay bağlamında).", type: "grammar" },
    { question: "'Objectivity' in news is key.", options: ["Tarafsızlık/Nesnellik", "Öznellik", "Hız", "Güç"], correctAnswer: 0, explanation: "Objectivity = Nesnellik.", type: "vocabulary" },
    { question: "They ___ to have found a cure.", options: ["claim", "say", "tell", "announced"], correctAnswer: 0, explanation: "Claim = İddia etmek.", type: "grammar" },
    { question: "'Misleading' information.", options: ["Doğru", "Yanıltıcı", "Eski", "Haber"], correctAnswer: 1, explanation: "Misleading = Yanıltıcı.", type: "vocabulary" },
    { question: "He ___ me why I was late.", options: ["asked", "said", "told", "claimed"], correctAnswer: 0, explanation: "Soru sormak: ask.", type: "grammar" },
    { question: "'Freedom of the press' ne demek?", options: ["Basın özgürlüğü", "Haber hızı", "Gazete fiyatı", "Yazı tipi"], correctAnswer: 0, explanation: "Freedom of the press = Basın özgürlüğü.", type: "vocabulary" },
    { question: "The reporter ___ that the situation was critical.", options: ["reported", "told", "admitted", "A ve C"], correctAnswer: 3, explanation: "Reported (bildirdi) veya Admitted (itiraf etti).", type: "grammar" },
    { question: "'Propaganda' ne demek?", options: ["Reklam", "Propaganda/Siyasi telkin", "Eğlence", "Oyun"], correctAnswer: 1, explanation: "Propaganda = Propaganda.", type: "vocabulary" },
    { question: "She ___ taking the money.", options: ["admitted", "said", "told", "announced"], correctAnswer: 0, explanation: "Admit + V-ing (itiraf etmek).", type: "grammar" },
    { question: "'Confidential' source.", options: ["Gizli", "Açık", "Yeni", "Eski"], correctAnswer: 0, explanation: "Confidential = Gizli/Mahrem.", type: "vocabulary" },
    { question: "My teacher ___ me to study more.", options: ["suggested", "advised", "told", "Hepsi"], correctAnswer: 3, explanation: "Tavsiye/öğüt verme fiilleri.", type: "grammar" },
    { question: "'Clickbait' ne demek?", options: ["Reklam", "Tık tuzağı/Sahte başlık", "Yeni haber", "Eski haber"], correctAnswer: 1, explanation: "Clickbait = İlgi çekip tıklatmayı amaçlayan aldatıcı içerik.", type: "vocabulary" },
    { question: "He ___ that he had made a mistake.", options: ["admitted", "told", "said", "A ve C"], correctAnswer: 3, explanation: "İtiraf etti / söyledi.", type: "grammar" },
    { question: "'Broadcast' ne demek?", options: ["Yazmak", "Yayınlamak", "Okumak", "Görmek"], correctAnswer: 1, explanation: "Broadcast = Yayınlamak (TV/Radyo).", type: "vocabulary" },
    { question: "She ___ me not to worry.", options: ["said", "told", "suggested", "wondered"], correctAnswer: 1, explanation: "Told someone not to do something.", type: "grammar" },
    { question: "'Reliability' of the news site.", options: ["Hızı", "Güvenilirliği", "Rengi", "Fiyatı"], correctAnswer: 1, explanation: "Reliability = Güvenilirlik.", type: "vocabulary" },
    { question: "They ___ if we could help them.", options: ["said", "asked", "told", "pointed"], correctAnswer: 1, explanation: "Ask if... (olup olmadığını sordular).", type: "grammar" },
    { question: "'Exclusive' report.", options: ["Özel/Ayrıcalıklı", "Sıradan", "Kötü", "Eski"], correctAnswer: 0, explanation: "Exclusive = Bir yere özel (başka bir yerde olmayan).", type: "vocabulary" },
    { question: "He ___ that the meeting had been canceled.", options: ["informed me", "said", "announced", "Hepsi"], correctAnswer: 3, explanation: "Bilgilendirdi/dedi/duyurdu.", type: "grammar" },
    { question: "'Breaking the news' to someone.", options: ["Haberi kırmak", "Kötü bir haberi vermek", "Kaçmak", "Gezmek"], correctAnswer: 1, explanation: "Break the news = (Zor olan) bir haberi ilk kez iletmek.", type: "vocabulary" }
];

// Quiz 4: MASTER - Habercilik Diyalogları ve Karma (News Idioms & Roleplay)
const u152q4: EnglishQuestion[] = [
    { question: "A: Did you hear about the fire? B: Yes, it was ___ on the news.", options: ["all", "none", "only", "bit"], correctAnswer: 0, explanation: "It was all over the news (her yerde haberdi).", type: "grammar" },
    { question: "Hot off the ___.", options: ["press", "oven", "fire", "desk"], correctAnswer: 0, explanation: "Hot off the press = Taze çıkmış/Dumanı üstünde haber (deyim).", type: "vocabulary" },
    { question: "A: What did she say? B: She promised ___ help us.", options: ["to", "that", "it", "so"], correctAnswer: 0, explanation: "Promise to do something.", type: "grammar" },
    { question: "No news is ___ news.", options: ["good", "bad", "new", "old"], correctAnswer: 0, explanation: "Haber çıkmaması iyi haberdir (atasözü).", type: "vocabulary" },
    { question: "A: Was the information correct? B: No, it was ___.", options: ["accurate", "false", "true", "right"], correctAnswer: 1, explanation: "Yanlış (false).", type: "vocabulary" },
    { question: "Spread like ___.", options: ["wildfire", "wind", "water", "light"], correctAnswer: 0, explanation: "Spread like wildfire = Orman yangını gibi (hızla) yayılmak (deyim).", type: "vocabulary" },
    { question: "A: Did they reach an agreement? B: The news ___ says yes.", options: ["report", "paper", "story", "Hepsi"], correctAnswer: 3, explanation: "Haber raporu/kağıdı/hikayesi.", type: "vocabulary" },
    { question: "Yesterday's news.", options: ["Eski haber", "Yeni haber", "Önemli", "Hızlı"], correctAnswer: 0, explanation: "Yesterday's news = Artık geçerliliği olmayan/Eski haber (deyim).", type: "vocabulary" },
    { question: "A: Why are you surprised? B: I read it in ___ and white.", options: ["black", "blue", "red", "green"], correctAnswer: 0, explanation: "In black and white = Yazılı bir şekilde / Gün gibi ortada (deyim).", type: "vocabulary" },
    { question: "Blow the ___.", options: ["whistle", "horn", "trumpet", "wind"], correctAnswer: 0, explanation: "Blow the whistle = İspiyonlamak / Gizli bir usulsüzlüğü açığa çıkarmak (deyim).", type: "vocabulary" },
    { question: "A: Is it true? B: Take it with a pinch of ___.", options: ["salt", "sugar", "pepper", "sand"], correctAnswer: 0, explanation: "Tereddütle yaklaş/Tam olarak inanma (deyim).", type: "vocabulary" },
    { question: "Get the scoop.", options: ["Kepçe al", "Özel haberi kapmak", "Haber yazmak", "Okumak"], correctAnswer: 1, explanation: "Get the scoop = Atlatma/Özel haberi ilk elde eden olmak (deyim).", type: "vocabulary" },
    { question: "A: What did the editor say? B: He ___ me to change the title.", options: ["told", "said", "claimed", "denied"], correctAnswer: 0, explanation: "Told someone to do something.", type: "grammar" },
    { question: "Keep someone in the ___.", options: ["loop", "circle", "box", "line"], correctAnswer: 0, explanation: "Keep in the loop = Haberdar etmek / Gelişmeleri bildirmek (deyim).", type: "vocabulary" },
    { question: "A: Is the source reliable? B: Yes, she is an ___ witness.", options: ["eye", "ear", "hand", "foot"], correctAnswer: 0, explanation: "Eyewitness = Görgü tanığı.", type: "vocabulary" },
    { question: "In the spotlight.", options: ["Karanlıkta", "İlgi odağında/Göz önünde", "Uzayda", "Denizde"], correctAnswer: 1, explanation: "In the spotlight = Spot ışıkları altında / Gündemde (deyim).", type: "vocabulary" },
    { question: "A: Did he admit guilt? B: Yes, he confessed ___ everything.", options: ["to", "for", "with", "at"], correctAnswer: 0, explanation: "Confess to something = Bir şeyi itiraf etmek.", type: "grammar" },
    { question: "Barking up the wrong ___.", options: ["tree", "dog", "house", "road"], correctAnswer: 0, explanation: "Yanlış yere bakmak / Yanlış kişiyi suçlamak (deyim).", type: "vocabulary" },
    { question: "A: Will they publish the story? B: They are still ___ the facts.", options: ["checking", "doing", "making", "going"], correctAnswer: 0, explanation: "Check facts = Gerçekleri doğrulamak.", type: "vocabulary" },
    { question: "The pen is mightier than the ___.", options: ["sword", "gun", "knife", "arm"], correctAnswer: 0, explanation: "Kalem kılıçtan keskindir (atasözü).", type: "vocabulary" }
];

// Unit 153: Modern Technology - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Gadgets & Who/Which)
const u153q1: EnglishQuestion[] = [
    { question: "A laptop is a computer ___ you can carry.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Cansız nesneler için 'which' (veya that) kullanılır.", type: "grammar" },
    { question: "'Smartphone' ne demek?", options: ["Akıllı telefon", "Eski telefon", "Bilgisayar", "Tablet"], correctAnswer: 0, explanation: "Smartphone = Akıllı telefon.", type: "vocabulary" },
    { question: "She is the girl ___ works at the IT department.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "İnsanlar için 'who' (veya that) kullanılır.", type: "grammar" },
    { question: "'App' (Application) ne demek?", options: ["Oyun", "Uygulama", "Hata", "Dosya"], correctAnswer: 1, explanation: "App = Uygulama.", type: "vocabulary" },
    { question: "I lost the phone ___ I bought last week.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesneleri nitelerken 'which'.", type: "grammar" },
    { question: "'Charger' ne demek?", options: ["Kulaklık", "Şarj cihazı", "Ekran", "Kablo"], correctAnswer: 1, explanation: "Charger = Şarj aleti.", type: "vocabulary" },
    { question: "A scientist is a person ___ studies science.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "Kişileri nitelerken 'who'.", type: "grammar" },
    { question: "'Wireless' ne demek?", options: ["Kablolu", "Kablosuz", "Hızlı", "Yavaş"], correctAnswer: 1, explanation: "Wireless = Kablosuz.", type: "vocabulary" },
    { question: "This is the app ___ helps me learn English.", options: ["who", "that", "where", "whose"], correctAnswer: 1, explanation: "That hem insanlar hem nesneler için kullanılabilir.", type: "grammar" },
    { question: "'Screen' ne demek?", options: ["Klavye", "Ekran", "Hoparlör", "Fare"], correctAnswer: 1, explanation: "Screen = Ekran.", type: "vocabulary" },
    { question: "Do you know the man ___ fixed your tablet?", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "'Browse' the internet.", options: ["İnternette gezinmek", "İnterneti kapatmak", "İnternet satın almak", "Hızlandırmak"], correctAnswer: 0, explanation: "Browse = (İnternette) Gezinmek/Göz atmak.", type: "vocabulary" },
    { question: "I like movies ___ are about robots.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'Download' ne demek?", options: ["Yüklemek", "İndirmek", "Silmek", "Kopyalamak"], correctAnswer: 1, explanation: "Download = İndirmek.", type: "vocabulary" },
    { question: "A baker is someone ___ makes bread.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "'Password' ne demek?", options: ["İsim", "Şifre/Parola", "Adres", "Numara"], correctAnswer: 1, explanation: "Password = Şifre.", type: "vocabulary" },
    { question: "I need a computer ___ has more memory.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Nesne nitelemesi.", type: "grammar" },
    { question: "'Headphones' ne demek?", options: ["Gözlük", "Kulaklık", "Saat", "Yüzük"], correctAnswer: 1, explanation: "Headphones = Kulaklık.", type: "vocabulary" },
    { question: "The teacher ___ taught me math is very smart.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "'Keyboard' ne demek?", options: ["Ekran", "Klavye", "Fare", "Kasa"], correctAnswer: 1, explanation: "Keyboard = Klavye.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Internet & Places with Where)
const u153q2: EnglishQuestion[] = [
    { question: "A library is a place ___ you can study.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Mekanları nitelerken 'where' kullanılır.", type: "grammar" },
    { question: "'Social networking' ne demek?", options: ["Sosyal ağ kurma", "Oyun oynama", "Ders çalışma", "Yemek yapma"], correctAnswer: 0, explanation: "Social networking = Sosyal ağ kullanımı.", type: "vocabulary" },
    { question: "I visited the office ___ my father works.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Mekan nitelemesi.", type: "grammar" },
    { question: "'Connectivity' ne demek?", options: ["Hız", "Bağlanabilirlik", "Güç", "Renk"], correctAnswer: 1, explanation: "Connectivity = Bağlantı durumu/olanağı.", type: "vocabulary" },
    { question: "That is the house ___ I grew up.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Mekan nitelemesi.", type: "grammar" },
    { question: "'Digital' ne demek?", options: ["Eski", "Dijital", "Basılı", "Yavaş"], correctAnswer: 1, explanation: "Digital = Sayısal/Dijital.", type: "vocabulary" },
    { question: "The shop ___ sells phones is closed.", options: ["who", "which", "where", "whose"], correctAnswer: 1, explanation: "Shop bir nesne olarak nitelendiği için 'which' (Eğer eylem içerde yapılıyor olsaydı 'where' olurdu).", type: "grammar" },
    { question: "'Upload' a photo.", options: ["Fotoğraf indirmek", "Fotoğraf yüklemek", "Fotoğraf çekmek", "Fotoğraf silmek"], correctAnswer: 1, explanation: "Upload = (İnternete) Yüklemek.", type: "vocabulary" },
    { question: "This is the city ___ I met her.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Mekan nitelemesi.", type: "grammar" },
    { question: "'Portable' device.", options: ["Ağır", "Taşınabilir", "Sabit", "Pahalı"], correctAnswer: 1, explanation: "Portable = Taşınabilir.", type: "vocabulary" },
    { question: "I don't know the reason ___ he left.", options: ["why", "which", "where", "whose"], correctAnswer: 0, explanation: "Neden belirtirken 'why' kullanılır.", type: "grammar" },
    { question: "'Privacy settings' ne demek?", options: ["Ekran ayarları", "Gizlilik ayarları", "Ses ayarları", "Dil ayarları"], correctAnswer: 1, explanation: "Privacy settings = Gizlilik ayarları.", type: "vocabulary" },
    { question: "The restaurant ___ we ate was great.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Mekan nitelemesi.", type: "grammar" },
    { question: "'Search engine' ne demek?", options: ["Sürücü", "Arama motoru", "Oyun motoru", "Ekran kartı"], correctAnswer: 1, explanation: "Search engine = Arama motoru (Google vb.).", type: "vocabulary" },
    { question: "He is the person ___ I was talking about.", options: ["who", "which", "where", "whose"], correctAnswer: 0, explanation: "Kişi nitelemesi.", type: "grammar" },
    { question: "'Upgrade' your software.", options: ["Yazılımı silmek", "Yazılımı güncellemek/yükseltmek", "Yazılımı bozmak", "Yazılımı satmak"], correctAnswer: 1, explanation: "Upgrade = Sürüm yükseltmek.", type: "vocabulary" },
    { question: "A hospital is a place ___ sick people go.", options: ["who", "which", "where", "whose"], correctAnswer: 2, explanation: "Mekan nitelemesi.", type: "grammar" },
    { question: "'Subscription' ne demek?", options: ["Üyelik/Abonelik", "Haber", "Resim", "Şifre"], correctAnswer: 0, explanation: "Subscription = Abonelik.", type: "vocabulary" },
    { question: "The day ___ we met was sunny.", options: ["when", "which", "where", "whose"], correctAnswer: 0, explanation: "Zamanları nitelerken 'when' kullanılır.", type: "grammar" },
    { question: "'Touchscreen' ne demek?", options: ["Tuşlu ekran", "Dokunmatik ekran", "Renkli ekran", "Kırık ekran"], correctAnswer: 1, explanation: "Touchscreen = Dokunmatik ekran.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (AI & Complex Relationship Clauses)
const u153q3: EnglishQuestion[] = [
    { question: "That is the man ___ car was stolen.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik belirtirken 'whose' (onun arabası) kullanılır.", type: "grammar" },
    { question: "'Artificial Intelligence' (AI) ne demek?", options: ["Gerçek zeka", "Yapay zeka", "Hızlı zeka", "Sanal gerçeklik"], correctAnswer: 1, explanation: "AI = Yapay Zeka.", type: "vocabulary" },
    { question: "I met a woman ___ son is a famous programmer.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi (kadının oğlu).", type: "grammar" },
    { question: "'Cybersecurity' ne demek?", options: ["İnternet hızı", "Siber güvenlik", "Bilgisayar tamiri", "Yazılım"], correctAnswer: 1, explanation: "Cybersecurity = Siber güvenlik.", type: "vocabulary" },
    { question: "The book ___ cover is red belongs to me.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik (kitabın kapağı).", type: "grammar" },
    { question: "'Data breach' ne demek?", options: ["Veri girişi", "Veri ihlali/sızıntısı", "Veri kaybı", "Veri hızı"], correctAnswer: 1, explanation: "Data breach = Veri güvenliğinin aşılması.", type: "vocabulary" },
    { question: "He is the artist ___ work I admire.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Virtual Reality' (VR) ne demek?", options: ["Yapay zeka", "Sanal gerçeklik", "Arttırılmış gerçeklik", "Sanal oyun"], correctAnswer: 1, explanation: "VR = Sanal Gerçeklik.", type: "vocabulary" },
    { question: "This is the dog ___ owner is my neighbor.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Algorithm' ne demek?", options: ["Hesap", "Algoritma/İşleyiş yolu", "Resim", "Ses"], correctAnswer: 1, explanation: "Algorithm = Algoritma.", type: "vocabulary" },
    { question: "The building ___ windows are broken is empty.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Automation' ne demek?", options: ["El ile çalışma", "Otomasyon", "Hız", "Güç"], correctAnswer: 1, explanation: "Automation = İşlerin otomatikleşmesi.", type: "vocabulary" },
    { question: "Do you know the girl ___ sister won the prize?", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'User-friendly' interface.", options: ["Zor", "Kullanıcı dostu", "Pahalı", "Eski"], correctAnswer: 1, explanation: "User-friendly = Kullanımı kolay.", type: "vocabulary" },
    { question: "The car ___ engine failed is being repaired.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Cloud computing' ne demek?", options: ["Hava durumu", "Bulut bilişim", "Yağmur", "Gökkuşağı"], correctAnswer: 1, explanation: "Cloud computing = İnternet tabanlı bilişim hizmetleri.", type: "vocabulary" },
    { question: "I have a friend ___ father is a pilot.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Gadget' ne demek?", options: ["Alet/Cihaz/Küçük teknolojik ürün", "Oyun", "Haber", "Kişi"], correctAnswer: 0, explanation: "Gadget = Küçük, kullanışlı cihaz.", type: "vocabulary" },
    { question: "The phone ___ camera is broken is useless.", options: ["who", "which", "where", "whose"], correctAnswer: 3, explanation: "Sahiplik nitelemesi.", type: "grammar" },
    { question: "'Outdated' technology.", options: ["Yeni", "Eski/Modası geçmiş/Güncelliğini yitirmiş", "Hızlı", "Pahalı"], correctAnswer: 1, explanation: "Outdated = Güncelliğini yitirmiş.", type: "vocabulary" }
];

// Quiz 4: MASTER - Teknoloji Diyalogları ve Karma (Troubleshooting & Tech Idioms)
const u153q4: EnglishQuestion[] = [
    { question: "A: My phone is frozen. B: Have you tried ___ it?", options: ["restarting", "to restart", "restart", "restarted"], correctAnswer: 0, explanation: "Try + V-ing (Bir yöntem denemek).", type: "grammar" },
    { question: "It's not rocket ___.", options: ["science", "art", "math", "history"], correctAnswer: 0, explanation: "It's not rocket science = Atla deve değil / Çok zor değil (deyim).", type: "vocabulary" },
    { question: "A: The internet is slow. B: Let me check the ___.", options: ["router", "screen", "keyboard", "mouse"], correctAnswer: 0, explanation: "Router = Yönlendirici/Modem.", type: "vocabulary" },
    { question: "Get your wires ___.", options: ["crossed", "cut", "lost", "long"], correctAnswer: 0, explanation: "Get your wires crossed = Yanlış anlamak / Kaçırmak (deyim).", type: "vocabulary" },
    { question: "A: Is the battery low? B: Yes, it's about to ___.", options: ["die", "live", "sleep", "eat"], correctAnswer: 0, explanation: "Battery is about to die = Şarj bitmek üzere (deyimsel kullanım).", type: "vocabulary" },
    { question: "At the touch of a ___.", options: ["button", "finger", "hand", "key"], correctAnswer: 0, explanation: "At the touch of a button = Bir tuşla / Çok kolayca (deyim).", type: "vocabulary" },
    { question: "A: How do I save this? B: Just ___ on the disk icon.", options: ["click", "push", "touch", "tell"], correctAnswer: 0, explanation: "Click on = Tıklamak.", type: "vocabulary" },
    { question: "Light years ___.", options: ["ahead", "behind", "near", "far"], correctAnswer: 0, explanation: "Light years ahead = Çok ileride (deyim).", type: "vocabulary" },
    { question: "A: The screen is black. B: Is it ___ in?", options: ["plugged", "connected", "on", "in"], correctAnswer: 0, explanation: "Plugged in = Fişe takılı.", type: "vocabulary" },
    { question: "Push someone's ___.", options: ["buttons", "keys", "phones", "screens"], correctAnswer: 0, explanation: "Push someone's buttons = Birini damarına basmak / Sinirlendirmek (deyim).", type: "vocabulary" },
    { question: "A: I can't hear you. B: Check your ___ volume.", options: ["speaker", "monitor", "cable", "case"], correctAnswer: 0, explanation: "Speaker = Hoparlör.", type: "vocabulary" },
    { question: "On the same ___.", options: ["wavelength", "line", "page", "phone"], correctAnswer: 0, explanation: "On the same wavelength = Aynı kafada/frekansta olmak (deyim).", type: "vocabulary" },
    { question: "A: The app keeps crashing. B: You should ___ it.", options: ["reinstall", "delete", "break", "buy"], correctAnswer: 0, explanation: "Reinstall = Yeniden kurmak.", type: "vocabulary" },
    { question: "Pull the ___.", options: ["plug", "wire", "line", "key"], correctAnswer: 0, explanation: "Pull the plug = Fişi çekmek / Bir işi durdurmak (deyim).", type: "vocabulary" },
    { question: "A: Is it a smart device? B: Yes, it's ___ the art.", options: ["state of", "top of", "best of", "new of"], correctAnswer: 0, explanation: "State of the art = Son teknoloji (kalıp).", type: "vocabulary" },
    { question: "Cog in the ___.", options: ["machine", "engine", "car", "computer"], correctAnswer: 0, explanation: "Cog in the machine = Büyük bir sistemin küçük bir parçası (deyim).", type: "vocabulary" },
    { question: "A: I've lost my data. B: Didn't you ___ it up?", options: ["back", "take", "make", "do"], correctAnswer: 0, explanation: "Back up = Yedeklemek.", type: "vocabulary" },
    { question: "Well-oiled ___.", options: ["machine", "car", "engine", "clock"], correctAnswer: 0, explanation: "Well-oiled machine = Tıkır tıkır işleyen sistem (deyim).", type: "vocabulary" },
    { question: "A: Is it wireless? B: No, it connects ___ USB.", options: ["via", "with", "by", "to"], correctAnswer: 0, explanation: "Via = Yoluyla/Aracılığıyla.", type: "grammar" },
    { question: "Silver ___.", options: ["bullet", "sword", "gun", "key"], correctAnswer: 0, explanation: "Silver bullet = Sihirli değnek / Her sorunu çözen basit çözüm (deyim).", type: "vocabulary" }
];

// Unit 154: Crime & Punishment - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Basic Crimes & Present Passive)
const u154q1: EnglishQuestion[] = [
    { question: "The thief ___ by the police yesterday.", options: ["arrest", "arrested", "was arrested", "is arrested"], correctAnswer: 2, explanation: "Past Passive: was/were + V3.", type: "grammar" },
    { question: "'Theft' ne demek?", options: ["Hırsızlık", "Cinayet", "Kavga", "Yalan"], correctAnswer: 0, explanation: "Theft = Hırsızlık.", type: "vocabulary" },
    { question: "This bank ___ every day.", options: ["watch", "is watched", "watches", "watched"], correctAnswer: 1, explanation: "Present Passive (genel durum).", type: "grammar" },
    { question: "'Police officer' ne demek?", options: ["Asker", "Polis memuru", "Doktor", "Öğretmen"], correctAnswer: 1, explanation: "Police officer = Polis.", type: "vocabulary" },
    { question: "The window ___ by the burglar.", options: ["broken", "is broken", "was broken", "breaks"], correctAnswer: 2, explanation: "Past Passive (geçmişteki bir olay).", type: "grammar" },
    { question: "'Robbery' ne demek?", options: ["Kavga", "Soygun", "Hediye", "Oyun"], correctAnswer: 1, explanation: "Robbery = Soygun.", type: "vocabulary" },
    { question: "Handcuffs ___ used to stop criminals.", options: ["is", "are", "have", "do"], correctAnswer: 1, explanation: "Handcuffs (kelepçe) çoğul kabul edilir.", type: "grammar" },
    { question: "'Criminal' ne demek?", options: ["Polis", "Suçlu", "Hakim", "Avukat"], correctAnswer: 1, explanation: "Criminal = Suçlu.", type: "vocabulary" },
    { question: "English ___ spoken here.", options: ["is", "are", "does", "can"], correctAnswer: 0, explanation: "Present Passive.", type: "grammar" },
    { question: "'Witness' ne demek?", options: ["Hakim", "Tanık/Görgü tanığı", "Suçlu", "Kurban"], correctAnswer: 1, explanation: "Witness = Tanık.", type: "vocabulary" },
    { question: "Many cars ___ stolen every year.", options: ["is", "are", "was", "were"], correctAnswer: 1, explanation: "Çoğul nesne + Present Passive.", type: "grammar" },
    { question: "'Shoplifting' ne demek?", options: ["Mağaza hırsızlığı", "Bina boyama", "Alışveriş yapmak", "Gezmek"], correctAnswer: 0, explanation: "Shoplifting = Mağazadan bir şey çalmama suçu.", type: "vocabulary" },
    { question: "The cake ___ eaten by the child.", options: ["is", "was", "A ve B", "did"], correctAnswer: 2, explanation: "Past veya Present passive anlamlıdır.", type: "grammar" },
    { question: "'Burglary' ne demek?", options: ["Soygun (ev/bina)", "Yalan", "Sokak kavgası", "Hız"], correctAnswer: 0, explanation: "Burglary = Bir binaya hırsızlık amacıyla girmek.", type: "vocabulary" },
    { question: "The letter ___ sent last week.", options: ["is", "was", "were", "be"], correctAnswer: 1, explanation: "Past Passive (tekil).", type: "grammar" },
    { question: "'Security camera' ne demek?", options: ["Kamera", "Güvenlik kamerası", "Fotoğraf makinesi", "Ekran"], correctAnswer: 1, explanation: "Security camera = Güvenlik kamerası.", type: "vocabulary" },
    { question: "The project ___ finished on time.", options: ["was", "were", "is", "A ve C"], correctAnswer: 3, explanation: "Passive yapı.", type: "grammar" },
    { question: "'Investigate' ne demek?", options: ["Kaçmak", "Araştırmak/Soruşturmak", "Bulmak", "Kaybetmek"], correctAnswer: 1, explanation: "Investigate = Soruşturmak.", type: "vocabulary" },
    { question: "Meals ___ served at 8 PM.", options: ["is", "are", "do", "have"], correctAnswer: 1, explanation: "Present Passive (Çoğul).", type: "grammar" },
    { question: "'Victim' ne demek?", options: ["Suçlu", "Kurban/Mağdur", "Avukat", "Asker"], correctAnswer: 1, explanation: "Victim = Mağdur.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Court & Past Passive)
const u154q2: EnglishQuestion[] = [
    { question: "The suspect ___ to the police station yesterday.", options: ["took", "was taken", "is taken", "taken"], correctAnswer: 1, explanation: "Past Passive: was/were + V3.", type: "grammar" },
    { question: "'Judge' ne demek?", options: ["Avukat", "Hakim", "Polis", "Gardiyan"], correctAnswer: 1, explanation: "Judge = Hakim.", type: "vocabulary" },
    { question: "The money ___ found in the garden.", options: ["is", "was", "were", "did"], correctAnswer: 1, explanation: "Past Passive (Uncountable).", type: "grammar" },
    { question: "'Lawyer' ne demek?", options: ["Doktor", "Avukat", "Savcı", "Kayıp"], correctAnswer: 1, explanation: "Lawyer = Avukat.", type: "vocabulary" },
    { question: "He ___ seen leaving the building.", options: ["was", "were", "is", "be"], correctAnswer: 0, explanation: "Past Passive.", type: "grammar" },
    { question: "'Evidence' ne demek?", options: ["Suç", "Delil/Kanıt", "Haber", "Hikaye"], correctAnswer: 1, explanation: "Evidence = Kanıt.", type: "vocabulary" },
    { question: "Those photos ___ taken in 1990.", options: ["is", "are", "was", "were"], correctAnswer: 3, explanation: "Past Passive (Most/Çoğul).", type: "grammar" },
    { question: "'Trial' ne demek?", options: ["Oyun", "Duruşma/Yargılama", "Sınav", "Gezi"], correctAnswer: 1, explanation: "Trial = Duruşma.", type: "vocabulary" },
    { question: "The identity of the killer ___ known.", options: ["is not", "are not", "was not", "A ve C"], correctAnswer: 3, explanation: "Identity tekil olduğu için is/was.", type: "grammar" },
    { question: "'Guilty' ne demek?", options: ["Masum", "Suçlu/Kusurlu", "Hızlı", "Koca"], correctAnswer: 1, explanation: "Guilty = Suçlu.", type: "vocabulary" },
    { question: "The safe ___ opened with a key.", options: ["was", "is", "A ve B", "did"], correctAnswer: 2, explanation: "Passive yapı.", type: "grammar" },
    { question: "'Innocent' ne demek?", options: ["Suçlu", "Masum", "Kötü", "Komik"], correctAnswer: 1, explanation: "Innocent = Masum.", type: "vocabulary" },
    { question: "Fingerprints ___ found on the door.", options: ["is", "are", "was", "were"], correctAnswer: 3, explanation: "Past Passive (Çoğul).", type: "grammar" },
    { question: "'Court' ne demek?", options: ["Okul", "Mahkeme", "Park", "Cadde"], correctAnswer: 1, explanation: "Court = Mahkeme.", type: "vocabulary" },
    { question: "I ___ invited to the party.", options: ["was", "am", "is", "A ve B"], correctAnswer: 3, explanation: "I am/was invited.", type: "grammar" },
    { question: "'Verdict' ne demek?", options: ["Dava", "Hüküm/Karar", "Suç", "Polis"], correctAnswer: 1, explanation: "Verdict = Jürinin verdiği karar.", type: "vocabulary" },
    { question: "The laws ___ changed last month.", options: ["was", "were", "is", "are"], correctAnswer: 1, explanation: "Past Passive (Çoğul).", type: "grammar" },
    { question: "'Acquit' ne demek?", options: ["Suçlamak", "Beraat etmek/Aklanmak", "Hapse atmak", "Öldürmek"], correctAnswer: 1, explanation: "Acquit = Suçsuz bulup serbest bırakmak.", type: "vocabulary" },
    { question: "The house ___ built by my grandfather.", options: ["is", "was", "were", "did"], correctAnswer: 1, explanation: "Past Passive.", type: "grammar" },
    { question: "'Jury' ne demek?", options: ["Hakim", "Jüri", "Avukat", "Seyirci"], correctAnswer: 1, explanation: "Jury = Seçilmiş vatandaşlardan oluşan kurul.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Punishments & Future Passive)
const u154q3: EnglishQuestion[] = [
    { question: "The results ___ announced tomorrow.", options: ["will", "will be", "be", "is"], correctAnswer: 1, explanation: "Future Passive: will be + V3.", type: "grammar" },
{ question: "The results ___ announced tomorrow.", options: ["will", "will be", "be", "is"], correctAnswer: 1, explanation: "Future Passive: will be + V3.", type: "grammar" },
    { question: "'Sentence' ne demek (Hukukta)?", options: ["Cümle", "Hapis cezası/Hüküm", "Kelime", "Yargıç"], correctAnswer: 1, explanation: "Sentence = Hüküm/Ceza (Sadece cümle değil).", type: "vocabulary" },
    { question: "The criminal ___ sent to prison.", options: ["will be", "is", "was", "Hepsi"], correctAnswer: 3, explanation: "Gelecek/Şu an/Geçmiş edilgen uyumlu.", type: "grammar" },
    { question: "'Fine' ne demek (Hukukta)?", options: ["İyi", "Para cezası", "Küçük", "Büyük"], correctAnswer: 1, explanation: "Fine = Para cezası.", type: "vocabulary" },
    { question: "Your car ___ repaired by Monday.", options: ["will be", "is", "was", "will"], correctAnswer: 0, explanation: "Future Passive.", type: "grammar" },
    { question: "'Death penalty' ne demek?", options: ["Para cezası", "Ölüm cezası/İdam", "Hapis", "Sürgün"], correctAnswer: 1, explanation: "Death penalty = İdam.", type: "vocabulary" },
    { question: "These books ___ returned to the library.", options: ["must be", "will be", "are", "Hepsi"], correctAnswer: 3, explanation: "Modal/Future/Present Passive.", type: "vocabulary" },
    { question: "'Rehabilitation' ne demek?", options: ["Ceza", "Rehabilitasyon/Topluma kazandırma", "Suç", "Kaçış"], correctAnswer: 1, explanation: "Rehabilitation = Islah.", type: "vocabulary" },
    { question: "The decision ___ made next week.", options: ["will be", "is", "was", "will"], correctAnswer: 0, explanation: "Future Passive.", type: "grammar" },
    { question: "'Community service' ne demek?", options: ["Sosyal yardım", "Kamu hizmeti cezası", "Askerlik", "İş"], correctAnswer: 1, explanation: "Community service = Topluma hizmet cezası.", type: "vocabulary" },
    { question: "The letters ___ delivered soon.", options: ["will be", "will", "is", "are"], correctAnswer: 0, explanation: "Future Passive.", type: "grammar" },
    { question: "'Bail' ne demek?", options: ["Borç", "Kefalet", "Ceza", "Hediye"], correctAnswer: 1, explanation: "Bail = Kefalet.", type: "vocabulary" },
    { question: "Wine ___ made from grapes.", options: ["is", "are", "was", "will"], correctAnswer: 0, explanation: "Present Passive (Gerçek).", type: "grammar" },
    { question: "'Manslaughter' ne demek?", options: ["Cinayet", "Kasıtsız adam öldürme", "Hırsızlık", "Kızgınlık"], correctAnswer: 1, explanation: "Manslaughter = İstemeden öldürme.", type: "vocabulary" }
];

// Quiz 4: MASTER - Dedektif Diyalogları ve Karma (Police Idioms & Scenarios)
const u154q4: EnglishQuestion[] = [
    { question: "A: Who did it? B: The suspect is being ___ by the police.", options: ["questioned", "questioning", "question", "questions"], correctAnswer: 0, explanation: "Continuous Passive: is being + V3 (Şu an sorgulanıyor).", type: "grammar" },
    { question: "Caught red-___.", options: ["handed", "footed", "eyed", "headed"], correctAnswer: 0, explanation: "Caught red-handed = Suçüstü yakalanmak (deyim).", type: "vocabulary" },
    { question: "A: Is he guilty? B: No, he has been ___.", options: ["cleared", "clearing", "clear", "clears"], correctAnswer: 0, explanation: "Cleared (of charges) = Aklanmış.", type: "grammar" },
    { question: "Do time.", options: ["Zaman yapmak", "Hapis yatmak", "Geç kalmak", "Çalışmak"], correctAnswer: 1, explanation: "Do time = Hapis yatmak (deyim).", type: "vocabulary" },
    { question: "A: What was the punishment? B: He was ___ to five years.", options: ["sentenced", "told", "said", "called"], correctAnswer: 0, explanation: "Sentence to = ...'ya mahkum edilmek.", type: "grammar" },
    { question: "Behind ___.", options: ["bars", "doors", "windows", "walls"], correctAnswer: 0, explanation: "Behind bars = Parmaklıklar ardında / Hapiste (deyim).", type: "vocabulary" },
    { question: "A: Did they catch him? B: He is still on the ___.", options: ["run", "walk", "jump", "ride"], correctAnswer: 0, explanation: "On the run = Firari / Kaçak (deyim).", type: "vocabulary" },
    { question: "Under ___.", options: ["arrest", "police", "jail", "fine"], correctAnswer: 0, explanation: "Under arrest = Tutuklu.", type: "vocabulary" },
    { question: "A: Is the case closed? B: No, new evidence ___ discovered.", options: ["was", "be", "is", "been"], correctAnswer: 0, explanation: "Past Passive.", type: "grammar" },
     { question: "Let someone off the ___.", options: ["hook", "box", "line", "chair"], correctAnswer: 0, explanation: "Let off the hook = Yakayı kurtarmak / Cezadan kurtulmak (deyim).", type: "vocabulary" },
    { question: "A: Why are you here? B: I've been ___ as a witness.", options: ["called", "calling", "call", "calls"], correctAnswer: 0, explanation: "Present Perfect Passive.", type: "grammar" },
    { question: "Blow your ___.", options: ["cover", "name", "house", "face"], correctAnswer: 0, explanation: "Blow your cover = Kimliğini açığa çıkarmak / Deşifre olmak (deyim).", type: "vocabulary" },
    { question: "A: What's the verdict? B: He was found ___.", options: ["guilty", "guilt", "innocent", "A ve C"], correctAnswer: 3, explanation: "Suçlu veya suçsuz bulundu.", type: "grammar" },
    { question: "An eye for an ___.", options: ["eye", "ear", "arm", "leg"], correctAnswer: 0, explanation: "An eye for an eye = Kısasa kısas (deyim).", type: "vocabulary" },
    { question: "A: Where is the criminal? B: He's being ___ to jail.", options: ["taken", "taking", "take", "takes"], correctAnswer: 0, explanation: "Continuous Passive.", type: "grammar" },
    { question: "The long arm of the ___.", options: ["law", "police", "judge", "state"], correctAnswer: 0, explanation: "The long arm of the law = Kanunun uzun kolu (herkesi yakalayan otorite).", type: "vocabulary" },
    { question: "A: How did he escape? B: The guard was ___.", options: ["bribed", "bribing", "bribe", "bribes"], correctAnswer: 0, explanation: "Bribed = Rüşvet verilmiş (Passive).", type: "grammar" },
    { question: "Break the ___.", options: ["law", "rule", "A ve B", "jail"], correctAnswer: 2, explanation: "Break the law/rule = Yasayı/kuralı çiğnemek.", type: "vocabulary" },
    { question: "A: Is the investigation over? B: No, it's still ___ handled.", options: ["being", "be", "been", "is"], correctAnswer: 0, explanation: "Present Continuous Passive.", type: "grammar" },
    { question: "Smell a ___.", options: ["rat", "dog", "cat", "fish"], correctAnswer: 0, explanation: "Smell a rat = Bir bit yeniği/kötülük hissetmek (deyim).", type: "vocabulary" }
];

// Unit 158: Business & Work - FULL 80 QUESTIONS (4 Quizzes x 20)

// Quiz 1: EASY - Isınma (Office Life & Present Perfect Continuous Intro)
const u158q1: EnglishQuestion[] = [
    { question: "I ___ working here for three years.", options: ["have been", "has been", "am", "was"], correctAnswer: 0, explanation: "Present Perfect Continuous: have/has + been + V-ing.", type: "grammar" },
    { question: "'Colleague' ne demek?", options: ["Patron", "İş arkadaşı", "Müşteri", "Rakip"], correctAnswer: 1, explanation: "Colleague = İş arkadaşı.", type: "vocabulary" },
    { question: "She ___ has been studying for two hours.", options: ["is", "has", "was", "does"], correctAnswer: 1, explanation: "She has been V-ing.", type: "grammar" },
    { question: "'Deadline' ne demek?", options: ["Başlangıç tarihi", "Son teslim tarihi", "Öğle arası", "Tatil"], correctAnswer: 1, explanation: "Deadline = Bir işin bitmesi gereken son tarih.", type: "vocabulary" },
    { question: "How long ___ you been waiting?", options: ["do", "did", "have", "are"], correctAnswer: 2, explanation: "Present Perfect Continuous soru kalıbı.", type: "grammar" },
    { question: "'Meeting' ne demek?", options: ["Tatil", "Toplantı", "Yemek", "Eğlence"], correctAnswer: 1, explanation: "Meeting = Toplantı.", type: "vocabulary" },
    { question: "They have ___ playing tennis since morning.", options: ["be", "been", "being", "was"], correctAnswer: 1, explanation: "Present Perfect Continuous yapısı.", type: "grammar" },
    { question: "'Salary' ne demek?", options: ["Borç", "Maaş", "Hediye", "Fatura"], correctAnswer: 1, explanation: "Salary = Maaş.", type: "vocabulary" },
    { question: "It ___ been raining for a long time.", options: ["is", "has", "was", "does"], correctAnswer: 1, explanation: "It has been V-ing.", type: "grammar" },
    { question: "'Customer' ne demek?", options: ["Satıcı", "Müşteri", "Müdür", "Memur"], correctAnswer: 1, explanation: "Customer = Müşteri.", type: "vocabulary" },
    { question: "We have been ___ this project for weeks.", options: ["do", "doing", "to do", "done"], correctAnswer: 1, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Full-time' job.", options: ["Yarım gün", "Tam zamanlı", "Gönüllü", "Geçici"], correctAnswer: 1, explanation: "Full-time = Tam zamanlı iş.", type: "vocabulary" },
    { question: "Has he ___ working out lately?", options: ["be", "been", "was", "is"], correctAnswer: 1, explanation: "Soru kalıbı.", type: "grammar" },
    { question: "'Office supplies' ne demek?", options: ["Ofis mobilyaları", "Ofis malzemeleri (kalem, kağıt vb.)", "Ofis çalışanları", "Ofis kuralları"], correctAnswer: 1, explanation: "Office supplies = Sarf malzemeleri.", type: "vocabulary" },
    { question: "I have been ___ to music all day.", options: ["listen", "listening", "to listen", "listened"], correctAnswer: 1, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Part-time' job.", options: ["Tam zamanlı", "Yarı zamanlı/Part-time", "Ücretsiz", "Zor"], correctAnswer: 1, explanation: "Part-time = Yarı zamanlı.", type: "vocabulary" },
    { question: "What have you ___ doing lately?", options: ["be", "been", "doing", "was"], correctAnswer: 1, explanation: "Present Perfect Continuous soru.", type: "grammar" },
    { question: "'Employer' ne demek?", options: ["İşçi", "İşveren/Patron", "Müşteri", "Ziyaretçi"], correctAnswer: 1, explanation: "Employer = İşe alan kişi/kurum.", type: "vocabulary" },
    { question: "We ___ been living here since 2010.", options: ["have", "has", "are", "were"], correctAnswer: 0, explanation: "We have been V-ing.", type: "grammar" },
    { question: "'Employee' ne demek?", options: ["Patron", "Çalışan/İşçi", "Müdür", "Şef"], correctAnswer: 1, explanation: "Employee = Çalışan.", type: "vocabulary" }
];

// Quiz 2: MEDIUM - Uygulama (Job Search & Processes)
const u158q2: EnglishQuestion[] = [
    { question: "I have been looking for a job ___ three months.", options: ["for", "since", "at", "on"], correctAnswer: 0, explanation: "Süreç belirtirken 'for' kullanılır.", type: "grammar" },
    { question: "'Interview' ne demek?", options: ["Sınav", "Mülakat/Görüşme", "Toplantı", "Ders"], correctAnswer: 1, explanation: "Interview = İş görüşmesi.", type: "vocabulary" },
    { question: "They have been working together ___ 2015.", options: ["for", "since", "at", "on"], correctAnswer: 1, explanation: "Başlangıç noktası belirtirken 'since' kullanılır.", type: "grammar" },
    { question: "'Application' ne demek (İş için)?", options: ["Uygulama", "Başvuru", "İptal", "Kabul"], correctAnswer: 1, explanation: "Application = İş başvurusu.", type: "vocabulary" },
    { question: "He has been ___ English since he was five.", options: ["learn", "learning", "learned", "to learn"], correctAnswer: 1, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Qualification' ne demek?", options: ["Eksiklik", "Vasıf/Nitelik/Diploma", "Hata", "İsim"], correctAnswer: 1, explanation: "Qualification = Bir iş için gerekli nitelikler.", type: "vocabulary" },
    { question: "How long ___ she been talking on the phone?", options: ["has", "have", "is", "was"], correctAnswer: 0, explanation: "She has been V-ing.", type: "grammar" },
    { question: "'Skill' ne demek?", options: ["Güç", "Beceri/Yetenek", "Zeka", "Başarı"], correctAnswer: 1, explanation: "Skill = Beceri.", type: "vocabulary" },
    { question: "I ___ been feeling well lately.", options: ["haven't", "hasn't", "am not", "wasn't"], correctAnswer: 0, explanation: "Negative Present Perfect Continuous.", type: "grammar" },
    { question: "'CV / Resume' ne demek?", options: ["Mektup", "Özgeçmiş", "Sertifika", "Cüzdan"], correctAnswer: 1, explanation: "CV/Resume = Özgeçmiş.", type: "vocabulary" },
    { question: "What ___ you been doing since we last met?", options: ["have", "has", "do", "did"], correctAnswer: 0, explanation: "Present Perfect Continuous soru.", type: "grammar" },
    { question: "'Promotion' ne demek?", options: ["İstifa", "Terfi", "Maaş indirimi", "Emeklilik"], correctAnswer: 1, explanation: "Promotion = İş yerinde yükselme.", type: "vocabulary" },
    { question: "We have ___ been waiting for the manager.", options: ["already", "just", "A ve B", "been"], correctAnswer: 3, explanation: "Been (Yapı gereği).", type: "grammar" },
    { question: "'Experience' ne demek?", options: ["Deney", "Deneyim/Tecrübe", "Eğitim", "Hobi"], correctAnswer: 1, explanation: "Experience = Tecrübe.", type: "vocabulary" },
    { question: "It has reached 10 PM. I ___ been working all day.", options: ["have", "am", "was", "will"], correctAnswer: 0, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Apply for' a job.", options: ["İşten ayrılmak", "İşe başvurmak", "İşe başlamak", "İş kurmak"], correctAnswer: 1, explanation: "Apply for = Başvurmak.", type: "vocabulary" },
    { question: "Has it ___ snowing since yesterday?", options: ["been", "be", "is", "was"], correctAnswer: 0, explanation: "Has it been V-ing...?", type: "grammar" },
    { question: "'Requirement' ne demek?", options: ["İhtiyaç", "Gereksinim/Şart", "Hediye", "Sonuç"], correctAnswer: 1, explanation: "Requirement = Gerekli olan şart.", type: "vocabulary" },
    { question: "I ___ playing football for hours, I'm tired.", options: ["have been", "was", "am", "has been"], correctAnswer: 0, explanation: "Yorgunluğun sebebini açıklayan süreç.", type: "grammar" },
    { question: "'Occupation' ne demek?", options: ["Tatil", "Meslek", "Hobi", "Eğitim"], correctAnswer: 1, explanation: "Occupation = Meslek/Uğraş.", type: "vocabulary" }
];

// Quiz 3: HARD - Analiz (Business Strategy & Complex Tense Usage)
const u158q3: EnglishQuestion[] = [
    { question: "The company ___ growing since it started in 2000.", options: ["has been", "have been", "is", "was"], correctAnswer: 0, explanation: "Company tekil (it) kabul edilir.", type: "grammar" },
    { question: "'Resign' ne demek?", options: ["İşe girmek", "İstifa etmek", "Maaş almak", "Terfi etmek"], correctAnswer: 1, explanation: "Resign = Kendi isteğiyle ayrılmak.", type: "vocabulary" },
    { question: "Why are your hands dirty? I ___ in the garden.", options: ["have worked", "have been working", "was working", "work"], correctAnswer: 1, explanation: "Gözle görülür sonucu olan süreç vurgusu (Present Perfect Continuous).", type: "grammar" },
    { question: "'Management' ne demek?", options: ["Üretim", "Yönetim", "Pazarlama", "Satış"], correctAnswer: 1, explanation: "Management = Yönetim.", type: "vocabulary" },
    { question: "I'm hot. I ___ running.", options: ["have been", "am", "was", "have"], correctAnswer: 0, explanation: "Süreç etkisi devam ediyor.", type: "grammar" },
    { question: "'Redundant' ne demek (İşten çıkarma)?", options: ["Terfi etmiş", "İşten çıkarılmış (ihtiyaç fazlası)", "Çalışkan", "Yorgun"], correctAnswer: 1, explanation: "Redundant = Kadro fazlalığı nedeniyle işten çıkarılma.", type: "vocabulary" },
    { question: "She has been ___ on that report all afternoon.", options: ["concentrate", "concentrating", "concentrated", "to concentrate"], correctAnswer: 1, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Outsourcing' ne demek?", options: ["İşe alım", "Dış kaynak kullanımı", "Fazla mesai", "İstifa"], correctAnswer: 1, explanation: "Outsourcing = Bir işin dışarıya yaptırılması.", type: "vocabulary" },
    { question: "How long has he been ___ in this industry?", options: ["be", "being", "been", "was"], correctAnswer: 2, explanation: "Been (Present Perfect Continuous).", type: "grammar" },
    { question: "'Headquarters' ne demek?", options: ["Ofis", "Genel Merkez", "Depo", "Dükkan"], correctAnswer: 1, explanation: "Headquarters = Ana merkez.", type: "vocabulary" },
    { question: "I haven't ___ sleeping well recently.", options: ["be", "been", "was", "is"], correctAnswer: 1, explanation: "Negative perfect continuous.", type: "grammar" },
    { question: "'Commission' ne demek (Maaş dışında)?", options: ["Vergi", "Komisyon/Prim", "Ceza", "Hediye"], correctAnswer: 1, explanation: "Commission = Satış başı alınan pay.", type: "vocabulary" },
    { question: "We have ___ planning this trip for months.", options: ["been", "be", "being", "already"], correctAnswer: 0, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Wholesale' ne demek?", options: ["Perakende", "Toptan satış", "İndirim", "Pahalı"], correctAnswer: 1, explanation: "Wholesale = Toptan.", type: "vocabulary" },
    { question: "Who has been ___ my chair?", options: ["use", "using", "used", "to use"], correctAnswer: 1, explanation: "Present Perfect Continuous (Eylem izi kalmış).", type: "grammar" },
    { question: "'Profit' and loss.", options: ["Gelir", "Kar", "Maliyet", "Bütçe"], correctAnswer: 1, explanation: "Profit = Kar.", type: "vocabulary" },
    { question: "I ___ been looking for you everywhere!", options: ["have", "am", "was", "had"], correctAnswer: 0, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Overtime' work.", options: ["Normal mesai", "Fazla mesai", "Gece mesaisi", "Yarım mesai"], correctAnswer: 1, explanation: "Overtime = Ek mesai.", type: "vocabulary" },
    { question: "Have they ___ practicing lately?", options: ["been", "be", "is", "was"], correctAnswer: 0, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "'Budget' ne demek?", options: ["Para", "Bütçe", "Hesap", "Bakiye"], correctAnswer: 1, explanation: "Budget = Bütçe.", type: "vocabulary" }
];
// Quiz 4: MASTER - İş Senaryoları ve Karma (Interview Skills & Business Idioms)
const u158q4: EnglishQuestion[] = [
    { question: "A: Why are you so tired? B: I ___ working since 7 AM.", options: ["have been", "am", "was", "have"], correctAnswer: 0, explanation: "Süreç vurgusu.", type: "grammar" },
    { question: "Get the ball ___.", options: ["rolling", "moving", "hitting", "catching"], correctAnswer: 0, explanation: "Get the ball rolling = Bir işi başlatmak (deyim).", type: "vocabulary" },
    { question: "A: How is the business? B: It's in the ___.", options: ["black", "red", "green", "blue"], correctAnswer: 0, explanation: "In the black = Karda olmak (deyim).", type: "vocabulary" },
    { question: "A: Are we losing money? B: Yes, we are in the ___.", options: ["red", "black", "blue", "white"], correctAnswer: 0, explanation: "In the red = Zararda olmak (deyim).", type: "vocabulary" },
    { question: "A: What is your strong point? B: I'm a good ___ player.", options: ["team", "group", "work", "office"], correctAnswer: 0, explanation: "Team player = Takım oyuncusu.", type: "vocabulary" },
    { question: "Pull your ___ up.", options: ["socks", "shoes", "pants", "shirt"], correctAnswer: 0, explanation: "Pull your socks up = Paçaları sıvamak / Daha çok çabalamak (deyim).", type: "vocabulary" },
    { question: "A: How long have you been here? B: I ___ been here for a week.", options: ["have", "am", "was", "had"], correctAnswer: 0, explanation: "Present Perfect Continuous.", type: "grammar" },
    { question: "Burn the midnight ___.", options: ["oil", "candle", "lamp", "fuel"], correctAnswer: 0, explanation: "Burn the midnight oil = Gece geç saatlere kadar çalışmak (deyim).", type: "vocabulary" },
    { question: "A: I want to leave. B: Don't throw in the ___ yet.", options: ["towel", "bag", "hat", "key"], correctAnswer: 0, explanation: "Throw in the towel = Pes etmek/Havluyu atmak (deyim).", type: "vocabulary" },
    { question: "A: Is he the boss? B: Yes, he is the big ___.", options: ["cheese", "bread", "cake", "meat"], correctAnswer: 0, explanation: "Big cheese = Büyük baş / Önemli kişi (deyim).", type: "vocabulary" },
    { question: "A: I have been studying all day. B: You should take a break.", options: ["been", "be", "being", "was"], correctAnswer: 0, explanation: "Been (Yapı).", type: "grammar" },
    { question: "Back to the drawing ___.", options: ["board", "paper", "wall", "room"], correctAnswer: 0, explanation: "Back to the drawing board = Her şeye en baştan başlamak (deyim).", type: "vocabulary" },
    { question: "A: How do we solve this? B: Let's put our ___ together.", options: ["heads", "hands", "minds", "voices"], correctAnswer: 0, explanation: "Put our heads together = Kafa kafaya verip düşünmek (deyim).", type: "vocabulary" },
    { question: "Cut ___.", options: ["corners", "lines", "papers", "way"], correctAnswer: 0, explanation: "Cut corners = İşi ucuza getirmek / Baştan savma yapmak (deyim).", type: "vocabulary" },
    { question: "A: He was fired. B: Yes, he got the ___.", options: ["sack", "bag", "box", "hat"], correctAnswer: 0, explanation: "Get the sack = Kovulmak (deyim).", type: "vocabulary" },
    { question: "A: I'm very busy. B: I have a lot on my ___.", options: ["plate", "hand", "desk", "head"], correctAnswer: 0, explanation: "A lot on my plate = Çok işim var / Yüküm çok (deyim).", type: "vocabulary" },
    { question: "Think outside the ___.", options: ["box", "house", "room", "office"], correctAnswer: 0, explanation: "Think outside the box = Alışılmışın dışında düşünmek (deyim).", type: "vocabulary" },
    { question: "A: What's the goal? B: To get the lion's ___ of the market.", options: ["share", "part", "half", "side"], correctAnswer: 0, explanation: "Lion's share = Aslan payı (deyim).", type: "vocabulary" },
    { question: "A: How long has she ___ practicing? B: For hours.", options: ["been", "be", "being", "was"], correctAnswer: 0, explanation: "Present Perfect Continuous soru.", type: "grammar" },
    { question: "Call it a ___.", options: ["day", "night", "week", "job"], correctAnswer: 0, explanation: "Call it a day = Bugünlük bu kadar yeter (deyim).", type: "vocabulary" }
];

// Helper to handle multiple quizzes per unit
export function getEnglishA2QuestionsForUnit(unitId: number, quizIndex: number = 1): EnglishQuestion[] {
    const unitMap: { [key: number]: (index: number) => EnglishQuestion[] } = {
        131: (idx) => {
            if (idx === 1) return u131q1;
            if (idx === 2) return u131q2;
            if (idx === 3) return u131q3;
            if (idx === 4) return u131q4;
            return u131q1;
        },
        132: (idx) => {
            if (idx === 1) return u132q1;
            if (idx === 2) return u132q2;
            if (idx === 3) return u132q3;
            if (idx === 4) return u132q4;
            return u132q1;
        },
        133: (idx) => {
            if (idx === 1) return u133q1;
            if (idx === 2) return u133q2;
            if (idx === 3) return u133q3;
            if (idx === 4) return u133q4;
            return u133q1;
        },
        134: (idx) => {
            if (idx === 1) return u134q1;
            if (idx === 2) return u134q2;
            if (idx === 3) return u134q3;
            if (idx === 4) return u134q4;
            return u134q1;
        },
        135: (idx) => {
            if (idx === 1) return u135q1;
            if (idx === 2) return u135q2;
            if (idx === 3) return u135q3;
            if (idx === 4) return u135q4;
            return u135q1;
        },
        136: (idx) => {
            if (idx === 1) return u136q1;
            if (idx === 2) return u136q2;
            if (idx === 3) return u136q3;
            if (idx === 4) return u136q4;
            return u136q1;
        },
        137: (idx) => {
            if (idx === 1) return u137q1;
            if (idx === 2) return u137q2;
            if (idx === 3) return u137q3;
            if (idx === 4) return u137q4;
            return u137q1;
        },
        138: (idx) => {
            if (idx === 1) return u138q1;
            if (idx === 2) return u138q2;
            if (idx === 3) return u138q3;
            if (idx === 4) return u138q4;
            return u138q1;
        },
        139: (idx) => {
            if (idx === 1) return u139q1;
            if (idx === 2) return u139q2;
            if (idx === 3) return u139q3;
            if (idx === 4) return u139q4;
            return u139q1;
        },
        140: (idx) => {
            if (idx === 1) return u140q1;
            if (idx === 2) return u140q2;
            if (idx === 3) return u140q3;
            if (idx === 4) return u140q4;
            return u140q1;
        },
        141: (idx) => {
            if (idx === 1) return u141q1;
            if (idx === 2) return u141q2;
            if (idx === 3) return u141q3;
            if (idx === 4) return u141q4;
            return u141q1;
        },
        142: (idx) => {
            if (idx === 1) return u142q1;
            if (idx === 2) return u142q2;
            if (idx === 3) return u142q3;
            if (idx === 4) return u142q4;
            return u142q1;
        },
        143: (idx) => {
            if (idx === 1) return u143q1;
            if (idx === 2) return u143q2;
            if (idx === 3) return u143q3;
            if (idx === 4) return u143q4;
            return u143q1;
        },
        144: (idx) => {
            if (idx === 1) return u144q1;
            if (idx === 2) return u144q2;
            if (idx === 3) return u144q3;
            if (idx === 4) return u144q4;
            return u144q1;
        },
        145: (idx) => {
            if (idx === 1) return u145q1;
            if (idx === 2) return u145q2;
            if (idx === 3) return u145q3;
            if (idx === 4) return u145q4;
            return u145q1;
        },
        146: (idx) => {
            if (idx === 1) return u146q1;
            if (idx === 2) return u146q2;
            if (idx === 3) return u146q3;
            if (idx === 4) return u146q4;
            return u146q1;
        },
        147: (idx) => {
            if (idx === 1) return u147q1;
            if (idx === 2) return u147q2;
            if (idx === 3) return u147q3;
            if (idx === 4) return u147q4;
            return u147q1;
        },
        148: (idx) => {
            if (idx === 1) return u148q1;
            if (idx === 2) return u148q2;
            if (idx === 3) return u148q3;
            if (idx === 4) return u148q4;
            return u148q1;
        },
        149: (idx) => {
            if (idx === 1) return u149q1;
            if (idx === 2) return u149q2;
            if (idx === 3) return u149q3;
            if (idx === 4) return u149q4;
            return u149q1;
        },
        150: (idx) => {
            if (idx === 1) return u150q1;
            if (idx === 2) return u150q2;
            if (idx === 3) return u150q3;
            if (idx === 4) return u150q4;
            return u150q1;
        },
        151: (idx) => {
            if (idx === 1) return u151q1;
            if (idx === 2) return u151q2;
            if (idx === 3) return u151q3;
            if (idx === 4) return u151q4;
            return u151q1;
        },
        152: (idx) => {
            if (idx === 1) return u152q1;
            if (idx === 2) return u152q2;
            if (idx === 3) return u152q3;
            if (idx === 4) return u152q4;
            return u152q1;
        },
        153: (idx) => {
            if (idx === 1) return u153q1;
            if (idx === 2) return u153q2;
            if (idx === 3) return u153q3;
            if (idx === 4) return u153q4;
            return u153q1;
        },
        154: (idx) => {
            if (idx === 1) return u154q1;
            if (idx === 2) return u154q2;
            if (idx === 3) return u154q3;
            if (idx === 4) return u154q4;
            return u154q1;
        },
        158: (idx) => {
            if (idx === 1) return u158q1;
            if (idx === 2) return u158q2;
            if (idx === 3) return u158q3;
            if (idx === 4) return u158q4;
            return u158q1;
        }
    };

    const getter = unitMap[unitId];
    if (getter) return getter(quizIndex);

    return u131q1; // Total fallback
}
