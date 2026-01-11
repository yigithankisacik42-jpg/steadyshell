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
        // A1 Kolay Sorular (1-5)
        {
            id: 1,
            level: 'A1',
            question: '¿Cómo te llamas?',
            questionTr: 'Adın ne?',
            options: ['Me llamo Juan', 'Tengo 20 años', 'Soy de España', 'Estoy bien'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 2,
            level: 'A1',
            question: '¿Cuántos años tienes?',
            questionTr: 'Kaç yaşındasın?',
            options: ['Soy estudiante', 'Tengo veinticinco años', 'Vivo en Madrid', 'Me gusta bailar'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 3,
            level: 'A1',
            question: 'El libro está _____ la mesa.',
            questionTr: 'Kitap masanın _____ .',
            options: ['sobre', 'con', 'para', 'sin'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 4,
            level: 'A1',
            question: '¿Qué hora es?',
            questionTr: 'Saat kaç?',
            options: ['Hace calor', 'Son las tres', 'Es grande', 'Está lejos'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 5,
            level: 'A1',
            question: 'Yo _____ español.',
            questionTr: 'Ben İspanyolca _____.',
            options: ['hablo', 'hablas', 'habla', 'hablamos'],
            correct: 0,
            difficulty: 1
        },
        // A2 Orta-Kolay Sorular (6-10)
        {
            id: 6,
            level: 'A2',
            question: 'Ayer _____ al cine con mis amigos.',
            questionTr: 'Dün arkadaşlarımla sinemaya _____.',
            options: ['voy', 'fui', 'iré', 'iba'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 7,
            level: 'A2',
            question: '¿_____ has estado en México?',
            questionTr: 'Meksika\'da hiç _____ mı?',
            options: ['Nunca', 'Siempre', 'Alguna vez', 'Todavía'],
            correct: 2,
            difficulty: 2
        },
        {
            id: 8,
            level: 'A2',
            question: 'Me gustaría _____ un café, por favor.',
            questionTr: 'Bir kahve _____ lütfen.',
            options: ['tomar', 'tomando', 'tomado', 'tome'],
            correct: 0,
            difficulty: 2
        },
        {
            id: 9,
            level: 'A2',
            question: 'Cuando era niño, _____ al parque todos los días.',
            questionTr: 'Çocukken her gün parka _____.',
            options: ['voy', 'fui', 'iba', 'iré'],
            correct: 2,
            difficulty: 2
        },
        {
            id: 10,
            level: 'A2',
            question: 'El coche es más _____ que la bicicleta.',
            questionTr: 'Araba bisikletten daha _____.',
            options: ['rápido', 'rápida', 'rápidos', 'rápidas'],
            correct: 0,
            difficulty: 2
        },
        // B1 Orta Sorular (11-15)
        {
            id: 11,
            level: 'B1',
            question: 'Si tuviera dinero, _____ un coche nuevo.',
            questionTr: 'Param olsaydı, yeni bir araba _____.',
            options: ['compro', 'compraré', 'compraría', 'compraba'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 12,
            level: 'B1',
            question: 'Es importante que _____ a tiempo.',
            questionTr: 'Zamanında _____ önemli.',
            options: ['llegas', 'llegues', 'llegarás', 'llegabas'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 13,
            level: 'B1',
            question: 'El libro _____ por García Márquez.',
            questionTr: 'Kitap García Márquez tarafından _____.',
            options: ['escribió', 'fue escrito', 'ha escrito', 'escribía'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 14,
            level: 'B1',
            question: 'Aunque _____ mucho, no aprobé el examen.',
            questionTr: 'Çok _____ rağmen, sınavı geçemedim.',
            options: ['estudio', 'estudié', 'estudiaba', 'estudiaré'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 15,
            level: 'B1',
            question: 'No creo que él _____ la verdad.',
            questionTr: 'Onun gerçeği _____ sanmıyorum.',
            options: ['dice', 'diga', 'dirá', 'decía'],
            correct: 1,
            difficulty: 3
        },
        // B2 Zor Sorular (16-20)
        {
            id: 16,
            level: 'B2',
            question: 'De haberlo sabido antes, _____ de otra manera.',
            questionTr: 'Daha önce bilseydim, başka türlü _____.',
            options: ['actúo', 'actuaré', 'habría actuado', 'actuaba'],
            correct: 2,
            difficulty: 4
        },
        {
            id: 17,
            level: 'B2',
            question: 'Sea como _____, debemos terminar el proyecto.',
            questionTr: 'Her nasıl _____, projeyi bitirmeliyiz.',
            options: ['sea', 'es', 'será', 'fue'],
            correct: 0,
            difficulty: 4
        },
        {
            id: 18,
            level: 'B2',
            question: 'Por mucho que _____, no conseguirás convencerme.',
            questionTr: 'Ne kadar _____, beni ikna edemezsin.',
            options: ['insistes', 'insistas', 'insistirás', 'insistías'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 19,
            level: 'B2',
            question: 'Ojalá _____ más tiempo para viajar.',
            questionTr: 'Keşke seyahat için daha fazla zamanım _____.',
            options: ['tengo', 'tenga', 'tuviera', 'tendré'],
            correct: 2,
            difficulty: 4
        },
        {
            id: 20,
            level: 'B2',
            question: 'A no ser que _____ pronto, perderemos el tren.',
            questionTr: 'Yakında _____ sürece, treni kaçırırız.',
            options: ['salimos', 'salgamos', 'saldremos', 'salíamos'],
            correct: 1,
            difficulty: 4
        }
    ],
    en: [
        // A1 Easy (1-5)
        {
            id: 1,
            level: 'A1',
            question: 'What _____ your name?',
            questionTr: 'Adın ne?',
            options: ['is', 'are', 'am', 'be'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 2,
            level: 'A1',
            question: 'She _____ from Turkey.',
            questionTr: 'O Türkiye\'den.',
            options: ['is', 'are', 'am', 'be'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 3,
            level: 'A1',
            question: 'I _____ breakfast at 8 o\'clock.',
            questionTr: 'Saat 8\'de kahvaltı yaparım.',
            options: ['have', 'has', 'having', 'had'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 4,
            level: 'A1',
            question: 'There _____ three books on the table.',
            questionTr: 'Masada üç kitap var.',
            options: ['is', 'are', 'be', 'been'],
            correct: 1,
            difficulty: 1
        },
        {
            id: 5,
            level: 'A1',
            question: 'He _____ to school every day.',
            questionTr: 'O her gün okula gider.',
            options: ['go', 'goes', 'going', 'gone'],
            correct: 1,
            difficulty: 1
        },
        // A2 (6-10)
        {
            id: 6,
            level: 'A2',
            question: 'I _____ to Paris last summer.',
            questionTr: 'Geçen yaz Paris\'e gittim.',
            options: ['go', 'went', 'have gone', 'was going'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 7,
            level: 'A2',
            question: 'She is _____ than her sister.',
            questionTr: 'O kız kardeşinden daha uzun.',
            options: ['tall', 'taller', 'tallest', 'more tall'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 8,
            level: 'A2',
            question: 'I _____ never been to Japan.',
            questionTr: 'Japonya\'ya hiç gitmedim.',
            options: ['have', 'has', 'had', 'am'],
            correct: 0,
            difficulty: 2
        },
        {
            id: 9,
            level: 'A2',
            question: 'What _____ you doing when I called?',
            questionTr: 'Aradığımda ne yapıyordun?',
            options: ['are', 'were', 'was', 'did'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 10,
            level: 'A2',
            question: 'You _____ smoke here. It\'s forbidden.',
            questionTr: 'Burada sigara içemezsin. Yasak.',
            options: ['can\'t', 'mustn\'t', 'don\'t have to', 'shouldn\'t'],
            correct: 1,
            difficulty: 2
        },
        // B1 (11-15)
        {
            id: 11,
            level: 'B1',
            question: 'If I _____ rich, I would travel the world.',
            questionTr: 'Zengin olsaydım, dünyayı gezerdim.',
            options: ['am', 'was', 'were', 'be'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 12,
            level: 'B1',
            question: 'The report _____ by the manager yesterday.',
            questionTr: 'Rapor dün müdür tarafından yazıldı.',
            options: ['wrote', 'was written', 'has written', 'is written'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 13,
            level: 'B1',
            question: 'She asked me where I _____.',
            questionTr: 'Bana nerede yaşadığımı sordu.',
            options: ['live', 'lived', 'had lived', 'was living'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 14,
            level: 'B1',
            question: 'I wish I _____ more free time.',
            questionTr: 'Keşke daha fazla boş zamanım olsa.',
            options: ['have', 'had', 'would have', 'having'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 15,
            level: 'B1',
            question: 'By the time she arrived, we _____ eating.',
            questionTr: 'O geldiğinde yemeği bitirmiştik.',
            options: ['finished', 'had finished', 'have finished', 'were finishing'],
            correct: 1,
            difficulty: 3
        },
        // B2 (16-20)
        {
            id: 16,
            level: 'B2',
            question: 'Had I known about the problem, I _____ differently.',
            questionTr: 'Problemi bilseydim, farklı davranırdım.',
            options: ['would act', 'would have acted', 'had acted', 'acted'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 17,
            level: 'B2',
            question: 'The project is _____ completion by next month.',
            questionTr: 'Proje gelecek aya kadar tamamlanacak.',
            options: ['due for', 'about to', 'bound to', 'likely to'],
            correct: 0,
            difficulty: 4
        },
        {
            id: 18,
            level: 'B2',
            question: 'Not until he arrived _____ the truth.',
            questionTr: 'O gelene kadar gerçeği öğrenmedik.',
            options: ['we learned', 'did we learn', 'we did learn', 'had we learned'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 19,
            level: 'B2',
            question: 'She speaks English as if she _____ a native speaker.',
            questionTr: 'Sanki anadili İngilizce gibi konuşuyor.',
            options: ['is', 'was', 'were', 'had been'],
            correct: 2,
            difficulty: 4
        },
        {
            id: 20,
            level: 'B2',
            question: 'The more you practice, _____ you become.',
            questionTr: 'Ne kadar çok pratik yaparsan, o kadar iyi olursun.',
            options: ['better', 'the better', 'the best', 'best'],
            correct: 1,
            difficulty: 4
        }
    ],
    fr: [
        // A1 (1-5)
        {
            id: 1,
            level: 'A1',
            question: 'Comment _____ -vous?',
            questionTr: 'Adınız ne?',
            options: ['appelez', 'appelles', 'appelle', 'appelons'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 2,
            level: 'A1',
            question: 'Je _____ français.',
            questionTr: 'Ben Fransızcayım.',
            options: ['suis', 'es', 'est', 'sommes'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 3,
            level: 'A1',
            question: 'Elle _____ à Paris.',
            questionTr: 'O Paris\'te yaşıyor.',
            options: ['habite', 'habites', 'habitent', 'habitons'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 4,
            level: 'A1',
            question: 'Tu as _____ frères?',
            questionTr: 'Kaç kardeşin var?',
            options: ['combien de', 'comment', 'pourquoi', 'quand'],
            correct: 0,
            difficulty: 1
        },
        {
            id: 5,
            level: 'A1',
            question: 'Le livre est _____ la table.',
            questionTr: 'Kitap masanın üstünde.',
            options: ['sur', 'sous', 'dans', 'avec'],
            correct: 0,
            difficulty: 1
        },
        // A2-B1-B2 (6-20)
        {
            id: 6,
            level: 'A2',
            question: 'Hier, je _____ au cinéma.',
            questionTr: 'Dün sinemaya gittim.',
            options: ['vais', 'suis allé', 'irai', 'allais'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 7,
            level: 'A2',
            question: 'Elle est plus _____ que son frère.',
            questionTr: 'O erkek kardeşinden daha uzun.',
            options: ['grand', 'grande', 'grands', 'grandes'],
            correct: 1,
            difficulty: 2
        },
        {
            id: 8,
            level: 'A2',
            question: 'Quand j\'étais enfant, je _____ au parc.',
            questionTr: 'Çocukken parka giderdim.',
            options: ['vais', 'suis allé', 'allais', 'irai'],
            correct: 2,
            difficulty: 2
        },
        {
            id: 9,
            level: 'B1',
            question: 'Il faut que tu _____ tes devoirs.',
            questionTr: 'Ödevlerini yapman lazım.',
            options: ['fais', 'fasses', 'feras', 'faisais'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 10,
            level: 'B1',
            question: 'Si j\'avais de l\'argent, je _____ une maison.',
            questionTr: 'Param olsaydı, bir ev alırdım.',
            options: ['achète', 'achèterai', 'achèterais', 'ai acheté'],
            correct: 2,
            difficulty: 3
        },
        {
            id: 11,
            level: 'B1',
            question: 'Le livre _____ par cet auteur.',
            questionTr: 'Kitap bu yazar tarafından yazıldı.',
            options: ['a écrit', 'a été écrit', 'écrit', 'écrivait'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 12,
            level: 'B1',
            question: 'Bien qu\'il _____ fatigué, il continue à travailler.',
            questionTr: 'Yorgun olmasına rağmen çalışmaya devam ediyor.',
            options: ['est', 'soit', 'était', 'serait'],
            correct: 1,
            difficulty: 3
        },
        {
            id: 13,
            level: 'B2',
            question: 'Si j\'avais su, je _____ autrement.',
            questionTr: 'Bilseydim, farklı davranırdım.',
            options: ['aurais agi', 'agirais', 'avais agi', 'agirai'],
            correct: 0,
            difficulty: 4
        },
        {
            id: 14,
            level: 'B2',
            question: 'Quoi qu\'il _____, je ne changerai pas d\'avis.',
            questionTr: 'Ne söylerse söylesin, fikrimi değiştirmeyeceğim.',
            options: ['dit', 'dise', 'dira', 'disait'],
            correct: 1,
            difficulty: 4
        },
        {
            id: 15,
            level: 'B2',
            question: 'À moins qu\'il ne _____ bientôt, nous partirons.',
            questionTr: 'Yakında gelmezse, biz gideceğiz.',
            options: ['vient', 'vienne', 'viendra', 'venait'],
            correct: 1,
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
        let a1Correct = 0;
        let a2Correct = 0;
        let b1Correct = 0;
        let b2Correct = 0;

        questions.forEach((q, i) => {
            if (answers[i] === q.correct) {
                score++;
                if (q.level === 'A1') a1Correct++;
                else if (q.level === 'A2') a2Correct++;
                else if (q.level === 'B1') b1Correct++;
                else if (q.level === 'B2') b2Correct++;
            }
        });

        const totalQuestions = questions.length;
        const percentage = (score / totalQuestions) * 100;

        // Seviye belirleme algoritması
        if (percentage < 25) return { level: 'A1', levelName: 'Başlangıç', score, total: totalQuestions };
        if (percentage < 45) return { level: 'A2', levelName: 'Temel', score, total: totalQuestions };
        if (percentage < 70) return { level: 'B1', levelName: 'Orta', score, total: totalQuestions };
        if (percentage < 85) return { level: 'B2', levelName: 'Orta-Üst', score, total: totalQuestions };
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
        router.push('/dashboard');
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
                            Merhaba! Ben Shelby 🐢
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
                    </div>

                    {/* Maskot Mesajı */}
                    <div className="bg-violet-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                        <Image
                            src="/mascot_v2.png"
                            alt="Shelby"
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
