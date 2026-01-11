'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, Clock, Target, Sparkles, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Step = 'welcome' | 'language' | 'level' | 'reason' | 'time' | 'source' | 'complete';

interface OnboardingData {
    language: string;
    level: string;
    reason: string;
    dailyMinutes: number;
    source: string;
}

const languages = [
    { code: 'es', name: 'İspanyolca', flag: '🇪🇸' },
    { code: 'en', name: 'İngilizce', flag: '🇬🇧' },
    { code: 'fr', name: 'Fransızca', flag: '🇫🇷' },
];

const levels = [
    { code: 'beginner', name: 'Sıfırdan Başlıyorum', icon: '🌱', description: 'Hiç bilmiyorum' },
    { code: 'basic', name: 'Biraz Biliyorum', icon: '🌿', description: 'Temel kelimeler' },
    { code: 'intermediate', name: 'Orta Seviye', icon: '🌳', description: 'Günlük konuşabiliyorum' },
    { code: 'advanced', name: 'İleri Seviye', icon: '🌲', description: 'Akıcı konuşuyorum' },
    { code: 'test', name: 'Seviye Testi Yap', icon: '📝', description: 'Seviyemi ölçmek istiyorum' },
];

const reasons = [
    { code: 'travel', name: 'Seyahat', icon: '✈️' },
    { code: 'career', name: 'Kariyer', icon: '💼' },
    { code: 'education', name: 'Eğitim', icon: '🎓' },
    { code: 'culture', name: 'Kültür & Hobi', icon: '🎭' },
    { code: 'friends', name: 'Arkadaşlar & Aile', icon: '👨‍👩‍👧‍👦' },
    { code: 'other', name: 'Diğer', icon: '💡' },
];

const timeOptions = [
    { minutes: 5, label: '5 dk/gün', description: 'Rahat tempo' },
    { minutes: 10, label: '10 dk/gün', description: 'Düzenli' },
    { minutes: 15, label: '15 dk/gün', description: 'Ciddi' },
    { minutes: 30, label: '30 dk/gün', description: 'Yoğun' },
];

const sources = [
    { code: 'google', name: 'Google Arama' },
    { code: 'social', name: 'Sosyal Medya' },
    { code: 'friend', name: 'Arkadaş Tavsiyesi' },
    { code: 'ad', name: 'Reklam' },
    { code: 'other', name: 'Diğer' },
];

const mascotMessages: Record<Step, string> = {
    welcome: "Merhaba! Ben Shelby 🐢 Seninle tanıştığıma çok sevindim! Birlikte harika bir dil öğrenme yolculuğuna çıkacağız.",
    language: "Hangi dili öğrenmek istiyorsun? Birlikte yavaş ama emin adımlarla ilerleyeceğiz!",
    level: "Bu dil hakkında ne kadar bilgin var? Merak etme, her seviye için buradayım!",
    reason: "Neden bu dili öğrenmek istiyorsun? Motivasyonunu bilmek sana daha iyi yardımcı olmamı sağlar.",
    time: "Günde ne kadar zaman ayırabilirsin? Az ama düzenli çalışmak en iyisi!",
    source: "Son bir soru! Bizi nereden duydun?",
    complete: "Harika! Artık hazırız! Unutma: Yavaş ve kararlı adımlar seni hedefe götürür. 🐢💜"
};

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<Step>('welcome');
    const [data, setData] = useState<OnboardingData>({
        language: '',
        level: '',
        reason: '',
        dailyMinutes: 10,
        source: ''
    });

    const steps: Step[] = ['welcome', 'language', 'level', 'reason', 'time', 'source', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    const progress = ((currentIndex) / (steps.length - 1)) * 100;

    const goNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < steps.length) {
            setCurrentStep(steps[nextIndex]);
        }
    };

    const goBack = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            setCurrentStep(steps[prevIndex]);
        }
    };

    const selectLanguage = (code: string) => {
        setData({ ...data, language: code });
        goNext();
    };

    const selectLevel = (code: string) => {
        setData({ ...data, level: code });
        if (code === 'test') {
            // Seviye testine yönlendir
            localStorage.setItem('steadyshell_onboarding_data', JSON.stringify(data));
            router.push('/placement-test');
            return;
        }
        goNext();
    };

    const selectReason = (code: string) => {
        setData({ ...data, reason: code });
        goNext();
    };

    const selectTime = (minutes: number) => {
        setData({ ...data, dailyMinutes: minutes });
        goNext();
    };

    const selectSource = (code: string) => {
        setData({ ...data, source: code });
        goNext();
    };

    const completeOnboarding = () => {
        // Seviye eşleştirmesi: Kullanıcı seçimi -> CEFR seviyesi
        const levelMapping: Record<string, string> = {
            'beginner': 'A1',    // Sıfırdan -> A1
            'basic': 'A2',       // Biraz biliyorum -> A2
            'intermediate': 'B1', // Orta seviye -> B1
            'advanced': 'B2',    // İleri seviye -> B2
        };

        const mappedLevel = levelMapping[data.level] || 'A1';

        // Onboarding verilerini kaydet
        localStorage.setItem('steadyshell_onboarding_data', JSON.stringify({
            ...data,
            mappedLevel: mappedLevel
        }));
        localStorage.setItem('steadyshell_onboarding_complete', 'true');

        // LanguageContext için progress kaydet
        const existingProgress = JSON.parse(localStorage.getItem('steadyshell_progress') || '{}');
        const updatedProgress = {
            ...existingProgress,
            [data.language]: {
                totalXp: 0,
                currentLevel: mappedLevel,
                completedLessons: [],
                streak: 0,
                lastActivity: new Date().toISOString(),
            }
        };
        localStorage.setItem('steadyshell_progress', JSON.stringify(updatedProgress));

        // Seçilen dili kaydet
        localStorage.setItem('steadyshell_selected_language', data.language);
        localStorage.setItem('steadyshell_selected_level', mappedLevel);

        // Dashboard'a yönlendir
        router.push('/learn');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-purple-50 flex flex-col">
            {/* Progress Bar */}
            {currentStep !== 'welcome' && currentStep !== 'complete' && (
                <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-violet-100">
                    <div className="max-w-md mx-auto px-4 py-3">
                        <div className="flex items-center gap-3">
                            <button onClick={goBack} className="p-2 hover:bg-violet-100 rounded-full transition">
                                <ArrowLeft className="w-5 h-5 text-violet-600" />
                            </button>
                            <div className="flex-1 bg-violet-100 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-sm font-medium text-violet-600">
                                {currentIndex}/{steps.length - 2}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
                <div className="max-w-md w-full">

                    {/* Mascot */}
                    <div className="text-center mb-6">
                        <div className="w-28 h-28 mx-auto mb-4 relative animate-bounce-slow">
                            <Image
                                src="/mascot.png"
                                alt="Shelby"
                                width={112}
                                height={112}
                                className="drop-shadow-xl"
                            />
                        </div>

                        {/* Speech Bubble */}
                        <div className="bg-white rounded-2xl shadow-lg p-5 border-2 border-violet-100 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-violet-100 rotate-45" />
                            <p className="text-slate-700 font-medium leading-relaxed">
                                {mascotMessages[currentStep]}
                            </p>
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-3 mt-8">

                        {/* Welcome Step */}
                        {currentStep === 'welcome' && (
                            <Button
                                onClick={goNext}
                                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-6 text-lg rounded-2xl shadow-lg shadow-violet-200"
                            >
                                Hadi Başlayalım! <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        )}

                        {/* Language Selection */}
                        {currentStep === 'language' && (
                            <div className="space-y-3">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => selectLanguage(lang.code)}
                                        className={`w-full bg-white hover:bg-violet-50 border-2 rounded-xl p-4 flex items-center gap-4 transition-all ${data.language === lang.code
                                            ? 'border-violet-500 bg-violet-50'
                                            : 'border-slate-200 hover:border-violet-300'
                                            }`}
                                    >
                                        <span className="text-4xl">{lang.flag}</span>
                                        <span className="font-bold text-slate-800 text-lg">{lang.name}</span>
                                        <ArrowRight className="w-5 h-5 ml-auto text-slate-400" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Level Selection */}
                        {currentStep === 'level' && (
                            <div className="space-y-3">
                                {levels.map((level) => (
                                    <button
                                        key={level.code}
                                        onClick={() => selectLevel(level.code)}
                                        className={`w-full bg-white hover:bg-violet-50 border-2 rounded-xl p-4 flex items-center gap-4 transition-all ${data.level === level.code
                                            ? 'border-violet-500 bg-violet-50'
                                            : level.code === 'test'
                                                ? 'border-purple-300 bg-purple-50 hover:bg-purple-100'
                                                : 'border-slate-200 hover:border-violet-300'
                                            }`}
                                    >
                                        <span className="text-3xl">{level.icon}</span>
                                        <div className="text-left flex-1">
                                            <span className="font-bold text-slate-800">{level.name}</span>
                                            <p className="text-sm text-slate-500">{level.description}</p>
                                        </div>
                                        {level.code === 'test' && (
                                            <Sparkles className="w-5 h-5 text-purple-500" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Reason Selection */}
                        {currentStep === 'reason' && (
                            <div className="grid grid-cols-2 gap-3">
                                {reasons.map((reason) => (
                                    <button
                                        key={reason.code}
                                        onClick={() => selectReason(reason.code)}
                                        className={`bg-white hover:bg-violet-50 border-2 rounded-xl p-4 flex flex-col items-center gap-2 transition-all ${data.reason === reason.code
                                            ? 'border-violet-500 bg-violet-50'
                                            : 'border-slate-200 hover:border-violet-300'
                                            }`}
                                    >
                                        <span className="text-3xl">{reason.icon}</span>
                                        <span className="font-bold text-slate-800 text-sm">{reason.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Time Selection */}
                        {currentStep === 'time' && (
                            <div className="space-y-3">
                                {timeOptions.map((option) => (
                                    <button
                                        key={option.minutes}
                                        onClick={() => selectTime(option.minutes)}
                                        className={`w-full bg-white hover:bg-violet-50 border-2 rounded-xl p-4 flex items-center gap-4 transition-all ${data.dailyMinutes === option.minutes
                                            ? 'border-violet-500 bg-violet-50'
                                            : 'border-slate-200 hover:border-violet-300'
                                            }`}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-violet-600" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <span className="font-bold text-slate-800">{option.label}</span>
                                            <p className="text-sm text-slate-500">{option.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Source Selection */}
                        {currentStep === 'source' && (
                            <div className="space-y-3">
                                {sources.map((source) => (
                                    <button
                                        key={source.code}
                                        onClick={() => selectSource(source.code)}
                                        className={`w-full bg-white hover:bg-violet-50 border-2 rounded-xl p-4 text-left transition-all ${data.source === source.code
                                            ? 'border-violet-500 bg-violet-50'
                                            : 'border-slate-200 hover:border-violet-300'
                                            }`}
                                    >
                                        <span className="font-bold text-slate-800">{source.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Complete Step */}
                        {currentStep === 'complete' && (
                            <div className="space-y-4">
                                {/* Summary */}
                                <div className="bg-white rounded-2xl shadow-lg p-5 border border-violet-100">
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        Öğrenme Planın Hazır!
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Dil:</span>
                                            <span className="font-medium">{languages.find(l => l.code === data.language)?.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Seviye:</span>
                                            <span className="font-medium">{levels.find(l => l.code === data.level)?.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Günlük Hedef:</span>
                                            <span className="font-medium">{data.dailyMinutes} dakika</span>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={completeOnboarding}
                                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-6 text-lg rounded-2xl shadow-lg shadow-violet-200"
                                >
                                    Öğrenmeye Başla! 🚀
                                </Button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Animated background elements */}
            <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
