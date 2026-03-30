'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle, Clock, Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Seviye Testi Soruları - Dil Uzmanı Tarafından Hazırlanmış
const placementQuestions = {
    es: [
        // A1 Temel - Biraz Daha Zor (1-5)
        {
            id: 1,
            level: 'A1',
            question: 'Yo _____ un café con leche y dos cruasanes, por favor.',
            questionTr: 'Ben sütlü bir kahve ve iki kruvasan _____, lütfen.',
            options: ['quiero', 'quieres', 'queremos', 'queréis'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 2,
            level: 'A1',
            question: '¿A qué hora _____ la clase de español los martes?',
            questionTr: 'Salı günleri İspanyolca dersi saat kaçta _____?',
            options: ['empiezas', 'empiezan', 'empieza', 'empezamos'],
            correct: 2,
            difficulty: 1
        },
        {
            id: 3,
            level: 'A1',
            question: 'Mis padres _____ en una casa muy grande cerca del río.',
            questionTr: 'Ailem nehrin yakınında çok büyük bir evde _____.',
            options: ['vivo', 'vive', 'vives', 'viven'],
            correct: 3,
            difficulty: 1
        },
        {
            id: 4,
            level: 'A1',
            question: 'Nosotros _____ muy cansados después del trabajo hoy.',
            questionTr: 'Bugün işten sonra çok yorgun _____.',
            options: ['somos', 'estamos', 'son', 'están'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 5,
            level: 'A1',
            question: '¿Tú y tu hermano _____ al fútbol los fines de semana?',
            questionTr: 'Sen ve kardeşin hafta sonları futbol _____?',
            options: ['jugáis', 'juegas', 'jugamos', 'juega'],
            correct: 0,
            difficulty: 1
        },
        // A2 Orta-Kolay (6-10)
        {
            id: 6,
            level: 'A2',
            question: 'Ayer nosotros _____ que trabajar hasta muy tarde en la oficina.',
            questionTr: 'Dün ofiste çok geç saatlere kadar çalışmak zorunda _____.',
            options: ['teníamos', 'tuvimos', 'tenemos', 'tendremos'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 7,
            level: 'A2',
            question: '¿Dónde _____ mis gafas? No las encuentro por ninguna parte.',
            questionTr: 'Gözlüklerimi nereye _____? Hiçbir yerde bulamıyorum.',
            options: ['has puesto', 'habías puesto', 'pusisteis', 'pondrás'],
            correct: 0,
            difficulty: 2
        },
        {
            id: 8,
            level: 'A2',
            question: 'Antes, mi ciudad _____ mucho más tranquila y segura que ahora.',
            questionTr: 'Eskiden şehrim şimdikinden çok daha sakin ve güvenli _____.',
            options: ['fui', 'era', 'estaba', 'fue'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 9,
            level: 'A2',
            question: 'Me duele muchísimo la garganta, así que _____ tomar un té muy caliente.',
            questionTr: 'Boğazım çok ağrıyor, bu yüzden çok sıcak bir çay içmeye _____.',
            options: ['iré a', 'voy a', 'fui a', 'iba a'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 10,
            level: 'A2',
            question: 'Este restaurante italiano es _____ caro _____ el de la esquina.',
            questionTr: 'Bu İtalyan restoranı köşedeki _____ pahalı.',
            options: ['tan / que', 'más / como', 'tan / como', 'menos / de'],
            correct: 2,
            difficulty: 2
        },
        // B1 Orta - Biraz Daha Zor (11-15)
        {
            id: 11,
            level: 'B1',
            question: 'No creo que Juan _____ a la reunión del comité de mañana.',
            questionTr: 'Juan\'ın yarınki komite toplantısına _____ sanmıyorum.',
            options: ['va', 'fuera', 'vaya', 'irá'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 12,
            level: 'B1',
            question: 'Me alegro muchísimo de que ustedes _____ conseguido ese trabajo.',
            questionTr: 'O işi _____ (olmanıza) çok sevindim.',
            options: ['hayan', 'habían', 'han', 'hubieran'],
            correct: 0,
            difficulty: 3
        },
        {
            id: 13,
            level: 'B1',
            question: 'Cuando _____ a Madrid el próximo mes, te llamaré sin falta.',
            questionTr: 'Gelecek ay Madrid\'e _____ seni mutlaka arayacağım.',
            options: ['llegaré', 'llego', 'llegue', 'llegaba'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 14,
            level: 'B1',
            question: 'Si _____ más tiempo libre, estudiaría otro idioma como el japonés.',
            questionTr: 'Daha fazla boş zamanım _____ Japonca gibi başka bir dil öğrenirdim.',
            options: ['tengo', 'tuviera', 'tenía', 'tendré'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 15,
            level: 'B1',
            question: 'El puente nuevo de la ciudad _____ construido por una empresa extranjera el año pasado.',
            questionTr: 'Şehrin yeni köprüsü geçen yıl yabancı bir şirket tarafından _____.',
            options: ['ha sido', 'fue', 'estaba', 'estuvo'],
            correct: 1,
            difficulty: 3
        },
        // B2 Zor (16-20)
        {
            id: 16,
            level: 'B2',
            question: 'Por muy difícil que _____, no voy a rendirme en este proyecto.',
            questionTr: 'Ne kadar zor _____ _____, bu projede pes etmeyeceğim.',
            options: ['parece', 'parecía', 'parezca', 'parecerá'],
            correct: 2,
            difficulty: 4
        },
        {
            id: 17,
            level: 'B2',
            question: 'Te prestaré el coche a condición de que me lo _____ mañana temprano.',
            questionTr: 'Arabayı yarın erkenden _____ (şartıyla) sana ödünç vereceğim.',
            options: ['devuelvas', 'devuelves', 'devolviste', 'devolverás'],
            correct: 0,
            difficulty: 4
        },
        {
            id: 18,
            level: 'B2',
            question: 'Si me hubieras avisado de la situación antes, yo no _____ tanta comida.',
            questionTr: 'Durumu bana daha önce haber verseydin, o kadar yemek _____.',
            options: ['había preparado', 'habría preparado', 'prepararía', 'preparé'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 19,
            level: 'B2',
            question: 'Es imprescindible que todos los documentos _____ firmados antes del viernes.',
            questionTr: 'Cuma gününden önce tüm belgelerin imzalanmış _____ zorunludur.',
            options: ['estén', 'están', 'sean', 'fueran'],
            correct: 0,
            difficulty: 4
        },
        {
            id: 20,
            level: 'B2',
            question: 'En aquella época, no había nadie que _____ cómo solucionar el fallo informático.',
            questionTr: 'O dönemde bilgisayar hatasını nasıl çözeceğini _____ kimse yoktu.',
            options: ['sabe', 'sabría', 'supiera', 'haya sabido'],
            correct: 2,
            difficulty: 4
        }
    ],
    en: [
        // A1 Temel - Biraz Daha Zor (1-5)
        {
            id: 1,
            level: 'A1',
            question: 'My sister and I _____ breakfast at 7 AM every day.',
            questionTr: 'Kız kardeşim ve ben her gün sabah 7\'de kahvaltı _____.',
            options: ['has', 'having', 'have', 'are having'],
            correct: 2,
            difficulty: 1
        },
        {
            id: 2,
            level: 'A1',
            question: 'Excuse me, _____ a pharmacy near here?',
            questionTr: 'Afedersiniz, buralarda bir eczane _____?',
            options: ['is there', 'are there', 'there is', 'there are'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 3,
            level: 'A1',
            question: 'She _____ like playing tennis, she prefers swimming.',
            questionTr: 'Tenis oynamayı _____ , yüzmeyi tercih eder.',
            options: ['don\'t', 'doesn\'t', 'isn\'t', 'aren\'t'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 4,
            level: 'A1',
            question: 'I _____ born in 1995 in a small town.',
            questionTr: '1995 yılında küçük bir kasabada _____.',
            options: ['am', 'were', 'have been', 'was'],
            correct: 3,
            difficulty: 1
        },
        {
            id: 5,
            level: 'A1',
            question: 'Can you give me _____ apple from the table, please?',
            questionTr: 'Masadan bana _____ elmayı verir misin lütfen?',
            options: ['a', 'an', 'some', 'any'],
            correct: 1,
            difficulty: 1
        },
        // A2 Orta-Kolay (6-10)
        {
            id: 6,
            level: 'A2',
            question: 'While I _____ a shower, the phone unexpectedly rang.',
            questionTr: 'Ben duş _____ , telefon aniden çaldı.',
            options: ['took', 'was taking', 'have taken', 'am taking'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 7,
            level: 'A2',
            question: 'This is absolutely the _____ movie I have ever seen!',
            questionTr: 'Bu kesinlikle izlediğim _____ film!',
            options: ['worse', 'bad', 'baddest', 'worst'],
            correct: 3,
            difficulty: 2
        },
        {
            id: 8,
            level: 'A2',
            question: 'I have known my best friend _____ more than 10 years.',
            questionTr: 'En iyi arkadaşımı 10 yıldan fazla bir süre_____ tanıyorum.',
            options: ['since', 'for', 'from', 'during'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 9,
            level: 'A2',
            question: 'You _____ wear a uniform at this school, it\'s a strict rule.',
            questionTr: 'Bu okulda üniforma _____ , bu katı bir kuraldır.',
            options: ['must', 'can', 'might', 'could'],
            correct: 0,
            difficulty: 2
        },
        {
            id: 10,
            level: 'A2',
            question: 'They _____ finished their comprehensive homework yet.',
            questionTr: 'Onlar kapsamlı ödevlerini henüz _____.',
            options: ['don\'t', 'didn\'t', 'haven\'t', 'won\'t'],
            correct: 2,
            difficulty: 2
        },
        // B1 Orta - Biraz Daha Zor (11-15)
        {
            id: 11,
            level: 'B1',
            question: 'If it rains heavily tomorrow, we _____ the outdoor picnic.',
            questionTr: 'Yarın şiddetli yağmur yağarsa, açık hava pikniğini _____.',
            options: ['would cancel', 'cancel', 'will cancel', 'cancelled'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 12,
            level: 'B1',
            question: 'I am really looking forward _____ you next week.',
            questionTr: 'Haftaya seni _____ dört gözle bekliyorum.',
            options: ['to see', 'to seeing', 'seeing', 'see'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 13,
            level: 'B1',
            question: 'The kitchen window _____ broken by the children playing baseball.',
            questionTr: 'Mutfak penceresi beysbol oynayan çocuklar tarafından _____.',
            options: ['was', 'has', 'did', 'is'],
            correct: 0,
            difficulty: 3
        },
        {
            id: 14,
            level: 'B1',
            question: 'He asked me what time the express train _____ arrived.',
            questionTr: 'Bana ekspres trenin ne zaman _____ sordu.',
            options: ['has', 'will', 'had', 'does'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 15,
            level: 'B1',
            question: 'You’d better _____ a jacket, it’s getting extremely cold outside.',
            questionTr: 'Dışarısı aşırı soğuyor, bir ceket _____ iyi edersin.',
            options: ['takes', 'to take', 'taking', 'take'],
            correct: 3,
            difficulty: 3
        },
        // B2 Zor (16-20)
        {
            id: 16,
            level: 'B2',
            question: 'By this time next year, I _____ my university degree.',
            questionTr: 'Gelecek yıl bu zamanlar üniversite diplomamı _____.',
            options: ['will have finished', 'am finishing', 'will finish', 'finish'],
            correct: 0,
            difficulty: 4
        },
        {
            id: 17,
            level: 'B2',
            question: 'Not only _____ the difficult exam, but she also got the highest score.',
            questionTr: 'Zor sınavı _____ kalmadı, aynı zamanda en yüksek puanı aldı.',
            options: ['she passed', 'did she pass', 'has she passed', 'she did pass'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 18,
            level: 'B2',
            question: 'I wish I _____ so much strong coffee last night; I couldn\'t sleep at all.',
            questionTr: 'Keşke dün gece o kadar sek kahve _____ ; hiç uyuyamadım.',
            options: ['didn\'t drink', 'wouldn\'t drink', 'haven\'t drunk', 'hadn\'t drunk'],
            correct: 3,
            difficulty: 4
        },
        {
            id: 19,
            level: 'B2',
            question: 'The multinational company, _____ CEO recently resigned, is facing problems.',
            questionTr: 'CEO\'su _____ çok uluslu şirket sorunlarla karşı karşıya.',
            options: ['which', 'who', 'whose', 'whom'],
            correct: 2,
            difficulty: 4
        },
        {
            id: 20,
            level: 'B2',
            question: 'It\'s high time you _____ taking your academic studies seriously.',
            questionTr: 'Akademik çalışmalarını ciddiye _____ vakti geldi de geçiyor.',
            options: ['start', 'will start', 'started', 'should start'],
            correct: 2,
            difficulty: 4
        }
    ],
    fr: [
        // A1 Temel - Biraz Daha Zor (1-5)
        {
            id: 1,
            level: 'A1',
            question: 'Est-ce que vous _____ l\'heure exacte, s\'il vous plaît ?',
            questionTr: 'Saatin tam olarak kaç olduğunu _____ lütfen?',
            options: ['avez', 'êtes', 'faites', 'allez'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 2,
            level: 'A1',
            question: 'Mon frère aîné _____ vingt-cinq ans et il est médecin.',
            questionTr: 'Büyük erkek kardeşim 25 _____ ve o bir doktor.',
            options: ['est', 'a', 'fait', 'prend'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 3,
            level: 'A1',
            question: 'Nous _____ au grand cinéma en centre-ville ce soir.',
            questionTr: 'Bu akşam şehir merkezindeki büyük sinemaya _____.',
            options: ['sommes', 'faisons', 'avons', 'allons'],
            correct: 3,
            difficulty: 1
        },
        {
            id: 4,
            level: 'A1',
            question: 'Je ne bois _____ de café le soir avant de dormir.',
            questionTr: 'Uyumadan önce akşamları _____ kahve içmem.',
            options: ['pas', 'jamais', 'plus', 'rien'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 5,
            level: 'A1',
            question: 'Les enfants prennent _____ petit-déjeuner très tôt le matin.',
            questionTr: 'Çocuklar sabah çok erkenden _____ kahvaltıyı yaparlar.',
            options: ['son', 'sa', 'leur', 'leurs'],
            correct: 2,
            difficulty: 1
        },
        // A2 Orta-Kolay (6-10)
        {
            id: 6,
            level: 'A2',
            question: 'Hier soir, nous _____ regardé un très bon film français à la télé.',
            questionTr: 'Dün akşam televizyonda çok güzel bir Fransız filmi _____.',
            options: ['sommes', 'avons', 'allons', 'avions'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 7,
            level: 'A2',
            question: 'Quand il était jeune étudiant, il _____ au football tous les samedis.',
            questionTr: 'Genç bir öğrenciyken her cumartesi futbol _____.',
            options: ['joue', 'a joué', 'jouait', 'jouera'],
            correct: 2,
            difficulty: 2
        },
        {
            id: 8,
            level: 'A2',
            question: 'Je te prêterai le livre _____ j\'ai acheté fièrement hier.',
            questionTr: 'Dün gururla satın _____ kitabı sana ödünç vereceğim.',
            options: ['qui', 'que', 'dont', 'où'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 9,
            level: 'A2',
            question: 'Elle s\'est réveillée en sursaut en _____ un bruit bizarre.',
            questionTr: 'Tuhaf bir ses _____ irkilerek uyandı.',
            options: ['entendant', 'entendu', 'entend', 'entendre'],
            correct: 0,
            difficulty: 2
        },
        {
            id: 10,
            level: 'A2',
            question: 'Tu dois absolument _____ tes devoirs complexes avant de sortir.',
            questionTr: 'Çıkmadan önce karmaşık ödevlerini kesinlikle _____.',
            options: ['finis', 'finir', 'fini', 'finissais'],
            correct: 1,
            difficulty: 2
        },
        // B1 Orta - Biraz Daha Zor (11-15)
        {
            id: 11,
            level: 'B1',
            question: 'Il faut absolument que tu _____ voir cette exposition, elle est géniale !',
            questionTr: 'Bu sergiyi mutlaka görmeye _____ (zorunlu), o harika!',
            options: ['vas', 'ailles', 'ira', 'allait'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 12,
            level: 'B1',
            question: 'Si j\'avais plus de temps libre, je _____ autour du monde.',
            questionTr: 'Daha fazla boş zamanım olsaydı, dünya çapında _____.',
            options: ['voyageais', 'voyagerai', 'voyagerais', 'voyage'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 13,
            level: 'B1',
            question: 'La longue lettre _____ envoyée hier matin par la poste centrale.',
            questionTr: 'Uzun mektup dün sabah merkez postane tarafından _____.',
            options: ['a été', 'est', 'avait', 'était'],
            correct: 0,
            difficulty: 3
        },
        {
            id: 14,
            level: 'B1',
            question: 'Je ne pense pas qu\'elle _____ vraiment la bonne réponse à ce problème.',
            questionTr: 'Bu sorunun doğru cevabını gerçekten _____ sanmıyorum.',
            options: ['sait', 'saura', 'savait', 'sache'],
            correct: 3,
            difficulty: 3
        },
        {
            id: 15,
            level: 'B1',
            question: 'Après _____ ses brillantes études, il a trouvé un travail en Suisse.',
            questionTr: 'Parlak eğitimini _____ sonra İsviçre\'de bir iş buldu.',
            options: ['finissant', 'fini', 'avoir fini', 'qu\'il finit'],
            correct: 2,
            difficulty: 3
        },
        // B2 Zor (16-20)
        {
            id: 16,
            level: 'B2',
            question: 'Bien qu\'il _____ beaucoup de talent précoce, il manque de confiance en lui.',
            questionTr: 'Çok erken yeteneği _____ rağmen, kendine güveni eksik.',
            options: ['a', 'avait', 'aurait', 'ait'],
            correct: 3,
            difficulty: 4
        },
        {
            id: 17,
            level: 'B2',
            question: 'J\'aurais vraiment préféré qu\'elle m\'_____ la vérité dès le début.',
            questionTr: 'Gerçeği bana en başından _____ gerçekten tercih ederdim.',
            options: ['a dit', 'ait dit', 'avait dit', 'aurait dit'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 18,
            level: 'B2',
            question: 'La grande entreprise pour _____ il travaille va ouvrir une succursale.',
            questionTr: 'Çalıştığı büyük şirket (kendisi _____) bir şube açacak.',
            options: ['qui', 'laquelle', 'lesquelles', 'laquel'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 19,
            level: 'B2',
            question: 'À supposer que nous _____ le train de 8h, que ferions-nous exactement ?',
            questionTr: 'Sabah 8 trenini _____ varsayarsak, tam olarak ne yapardık?',
            options: ['manquons', 'manquions', 'manquerons', 'manquerions'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 20,
            level: 'B2',
            question: 'Il s\'est mis à pleuvoir brusquement, _____ nous a obligés à annuler la sortie.',
            questionTr: 'Aniden yağmur yağmaya başladı, _____ (bu durum) bizi iptal etmeye zorladı.',
            options: ['ce qui', 'lequel', 'ce que', 'quoi'],
            correct: 0,
            difficulty: 4
        }
    ]
};

export default function PlacementTestPage() {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState<'es' | 'en' | 'fr' | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [testStarted, setTestStarted] = useState(false);

    const languages = [
        { code: 'es', name: 'İspanyolca', flag: '🇪🇸' },
        { code: 'en', name: 'İngilizce', flag: '🇬🇧' },
        { code: 'fr', name: 'Fransızca', flag: '🇫🇷' }
    ];

    const questions = selectedLanguage ? placementQuestions[selectedLanguage] : [];

    const handleAnswer = (optionIndex: number) => {
        const newAnswers = [...answers, optionIndex];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateLevel = () => {
        let score = 0;

        questions.forEach((q, i) => {
            if (answers[i] === q.correct) {
                score++;
            }
        });

        const totalQuestions = questions.length;

        // Seviye belirleme algoritması (doğru sayısına göre)
        // 0-4 doğru → A1, 5-8 doğru → A2, 9-13 doğru → B1, 14-16 doğru → B2, 17+ doğru → C1
        if (score <= 4) return { level: 'A1', levelName: 'Başlangıç', score, total: totalQuestions };
        if (score <= 8) return { level: 'A2', levelName: 'Temel', score, total: totalQuestions };
        if (score <= 13) return { level: 'B1', levelName: 'Orta', score, total: totalQuestions };
        if (score <= 16) return { level: 'B2', levelName: 'Orta-Üst', score, total: totalQuestions };
        return { level: 'C1', levelName: 'İleri', score, total: totalQuestions };
    };

    const startTest = (lang: 'es' | 'en' | 'fr') => {
        setSelectedLanguage(lang);
        setTestStarted(true);
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
    };

    const resetTest = () => {
        setSelectedLanguage(null);
        setTestStarted(false);
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
    };

    const goToDashboard = () => {
        if (selectedLanguage) {
            const result = calculateLevel();
            // Seviyeyi localStorage'a kaydet
            localStorage.setItem('steadyshell_detected_level', JSON.stringify({
                language: selectedLanguage,
                level: result.level,
                score: result.score,
                total: result.total,
                date: new Date().toISOString()
            }));
        }
        router.push('/learn');
    };

    // Dil Seçimi Ekranı
    if (!testStarted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
                <div className="max-w-2xl mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link href="/register">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold text-slate-800">Seviye Testi</h1>
                    </div>

                    {/* Maskot ve Açıklama */}
                    <div className="text-center mb-8">
                        <div className="w-32 h-32 mx-auto mb-4 relative">
                            <Image
                                src="/mascot_v2.png"
                                alt="SteadyShell Maskot"
                                width={128}
                                height={128}
                                className="drop-shadow-lg"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">
                            Merhaba! Ben Shelldon 🐢
                        </h2>
                        <p className="text-slate-600">
                            Senin için en uygun seviyeyi belirlememe yardımcı ol.
                            Aşağıdan bir dil seç ve teste başla!
                        </p>
                    </div>

                    {/* Test Bilgisi */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-3">
                                <Clock className="w-6 h-6 mx-auto text-violet-600 mb-2" />
                                <p className="text-sm font-medium text-slate-800">~10 Dakika</p>
                                <p className="text-xs text-slate-500">Süre</p>
                            </div>
                            <div className="p-3">
                                <Target className="w-6 h-6 mx-auto text-violet-600 mb-2" />
                                <p className="text-sm font-medium text-slate-800">15-20 Soru</p>
                                <p className="text-xs text-slate-500">Toplam</p>
                            </div>
                            <div className="p-3">
                                <Trophy className="w-6 h-6 mx-auto text-violet-600 mb-2" />
                                <p className="text-sm font-medium text-slate-800">A1-B2</p>
                                <p className="text-xs text-slate-500">Seviye Aralığı</p>
                            </div>
                        </div>
                    </div>

                    {/* Dil Seçimi */}
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-slate-700 mb-3">Hangi dilde test olmak istiyorsun?</p>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => startTest(lang.code as 'es' | 'en' | 'fr')}
                                className="w-full bg-white hover:bg-violet-50 border-2 border-slate-200 hover:border-violet-400 rounded-xl p-4 flex items-center gap-4 transition-all"
                            >
                                <span className="text-3xl">{lang.flag}</span>
                                <span className="font-semibold text-slate-800">{lang.name}</span>
                                <ArrowLeft className="w-5 h-5 ml-auto rotate-180 text-slate-400" />
                            </button>
                        ))}
                    </div>

                    {/* Atla butonu */}
                    <div className="mt-8 text-center">
                        <Link href="/register">
                            <Button variant="ghost" className="text-slate-500">
                                Testi atla ve seviyemi kendim seçeyim
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Sonuç Ekranı
    if (showResult) {
        const result = calculateLevel();

        const levelColors: Record<string, string> = {
            'A1': 'from-green-400 to-emerald-500',
            'A2': 'from-blue-400 to-cyan-500',
            'B1': 'from-violet-400 to-purple-500',
            'B2': 'from-orange-400 to-amber-500',
            'C1': 'from-red-400 to-rose-500'
        };

        return (
            <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center">
                    {/* Başarı Animasyonu */}
                    <div className="mb-6">
                        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${levelColors[result.level]} flex items-center justify-center shadow-lg`}>
                            <span className="text-5xl font-bold text-white">{result.level}</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-800 mb-2">
                        Tebrikler! 🎉
                    </h1>
                    <p className="text-lg text-slate-600 mb-6">
                        Senin seviyen: <span className="font-bold text-violet-600">{result.level} - {result.levelName}</span>
                    </p>

                    {/* Skor */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                            <span className="text-xl font-bold text-slate-800">
                                {result.score} / {result.total} Doğru
                            </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full bg-gradient-to-r ${levelColors[result.level]}`}
                                style={{ width: `${(result.score / result.total) * 100}%` }}
                            />
                        </div>

                        {/* Seviye Tablosu */}
                        <div className="mt-6 border-t border-slate-100 pt-4">
                            <p className="text-xs font-medium text-slate-500 mb-3">📊 Seviye Tablosu</p>
                            <div className="space-y-2 text-sm">
                                {[
                                    { level: 'A1', name: 'Başlangıç', range: '0-4 doğru' },
                                    { level: 'A2', name: 'Temel', range: '5-8 doğru' },
                                    { level: 'B1', name: 'Orta', range: '9-13 doğru' },
                                    { level: 'B2', name: 'Orta-Üst', range: '14-16 doğru' },
                                    { level: 'C1', name: 'İleri', range: '17-20 doğru' },
                                ].map((item) => (
                                    <div
                                        key={item.level}
                                        className={`flex items-center justify-between p-2 rounded-lg ${result.level === item.level
                                            ? 'bg-violet-100 border-2 border-violet-400 font-bold'
                                            : 'bg-slate-50'
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {result.level === item.level && <span>👉</span>}
                                            <span className={result.level === item.level ? 'text-violet-700' : 'text-slate-600'}>
                                                {item.level} - {item.name}
                                            </span>
                                        </span>
                                        <span className={result.level === item.level ? 'text-violet-700' : 'text-slate-500'}>
                                            {item.range}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Maskot Mesajı */}
                    <div className="bg-violet-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                        <Image
                            src="/mascot_v2.png"
                            alt="Shelldon"
                            width={48}
                            height={48}
                            className="flex-shrink-0"
                        />
                        <p className="text-sm text-violet-800 text-left">
                            Harika! {result.level} seviyesinden başlayarak emin adımlarla ilerleyeceksin.
                            Unutma, yavaş ama kararlı adımlar seni hedefe götürür! 🐢
                        </p>
                    </div>

                    {/* Butonlar */}
                    <div className="space-y-3">
                        <Button
                            onClick={goToDashboard}
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg"
                        >
                            Öğrenmeye Başla
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={resetTest}
                            className="w-full text-slate-500"
                        >
                            Tekrar Test Ol
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Test Ekranı
    const currentQ = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
            <div className="max-w-2xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={resetTest} className="text-slate-500 hover:text-slate-700">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-medium text-slate-600">
                        Soru {currentQuestion + 1} / {questions.length}
                    </span>
                    <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full">
                        {currentQ.level}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Soru */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <p className="text-xl font-bold text-slate-800 mb-2">
                        {currentQ.question}
                    </p>
                    <p className="text-sm text-slate-500">
                        {currentQ.questionTr}
                    </p>
                </div>

                {/* Seçenekler */}
                <div className="space-y-3">
                    {currentQ.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            className="w-full bg-white hover:bg-violet-50 border-2 border-slate-200 hover:border-violet-400 rounded-xl p-4 text-left font-medium text-slate-800 transition-all"
                        >
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 mr-3 text-sm">
                                {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
