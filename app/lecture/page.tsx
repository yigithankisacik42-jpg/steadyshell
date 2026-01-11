"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, GraduationCap, Lightbulb, ArrowRight, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { getLectureForUnit, UnitLecture, LectureSlide } from "@/lib/lectures";

export default function LecturePage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <LectureContent />
        </Suspense>
    );
}

function LectureContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [lectureContent, setLectureContent] = useState<UnitLecture | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);


    // Ünite değiştiğinde lecture'u yükle
    useEffect(() => {
        const lecture = getLectureForUnit(unitId);
        setLectureContent(lecture);
        setCurrentSlide(0);
    }, [unitId]);

    if (!lectureContent) {
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const slide = lectureContent.slides[currentSlide];
    const progress = ((currentSlide + 1) / lectureContent.slides.length) * 100;
    const isLastSlide = currentSlide === lectureContent.slides.length - 1;

    const handleNext = () => {
        if (isLastSlide) {
            router.push(`/lesson?unitId=${unitId}`);
        } else {
            setCurrentSlide(c => c + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(c => c - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-indigo-50 to-white flex flex-col h-full w-full">



            {/* Üst Bar */}
            <div className="w-full px-6 py-4 flex items-center justify-between gap-4 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
                <ArrowLeft onClick={() => {
                    if (currentSlide > 0) {
                        setCurrentSlide(c => c - 1);
                    } else {
                        router.back();
                    }
                }} className="cursor-pointer text-slate-400 hover:text-slate-600 w-6 h-6 transition-colors" />
                <div className="flex-1 text-center">
                    <Progress value={progress} className="h-3 w-full max-w-md mx-auto" />
                    <p className="text-xs text-slate-400 mt-1">{lectureContent.title}</p>
                </div>
                <GraduationCap className="text-indigo-500 w-6 h-6" />
            </div>

            {/* İçerik */}
            <div className="flex-1 flex flex-col p-6 max-w-2xl mx-auto w-full overflow-y-auto">

                {/* Slide Başlık */}
                <div className="mb-6 text-center">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{lectureContent.level} • {lectureContent.language}</span>
                    <h1 className="text-2xl font-extrabold text-slate-800 mt-1">{slide.title}</h1>
                </div>

                {/* Slide İçeriği */}
                <div className="flex-1">
                    {slide.type === "intro" && (
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">{slide.content}</p>
                            {slide.tip && (
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                                    <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />
                                    <p className="text-amber-700 font-medium">{slide.tip}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "vocabulary" && (
                        <div className="grid gap-3">
                            {slide.words?.map((word, i) => (
                                <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between hover:border-indigo-200 transition-colors">
                                    <div>
                                        <p className="text-xl font-bold text-indigo-600">{word.target}</p>
                                        <p className="text-sm text-slate-400">/{word.pronunciation}/</p>
                                    </div>
                                    <p className="text-lg font-medium text-slate-700">{word.native}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.type === "grammar" && (
                        <div className="space-y-4">
                            <div className="grid gap-3">
                                {slide.rules?.map((rule, i) => (
                                    <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-4">
                                        <p className="text-lg font-bold text-indigo-600">{rule.rule}</p>
                                        <p className="text-slate-600 mt-1">{rule.explanation}</p>
                                        {rule.examples && rule.examples.length > 0 && (
                                            <div className="mt-2 space-y-1">
                                                {rule.examples.map((ex, j) => (
                                                    <p key={j} className="text-sm text-slate-500 italic">• {ex}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {slide.note && (
                                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                                    <p className="text-indigo-700 font-medium">💡 {slide.note}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "example" && (
                        <div className="space-y-4">
                            {slide.dialogue?.map((line, i) => (
                                <div key={i} className={`p-4 rounded-2xl ${line.speaker === "A" ? "bg-indigo-50 ml-0 mr-12" : "bg-violet-50 ml-12 mr-0"}`}>
                                    <p className="font-bold text-slate-700">{line.text}</p>
                                    <p className="text-sm text-slate-500 mt-1">{line.translation}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.type === "culture" && (
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">🇪🇸</span>
                                    <div>
                                        <p className="text-lg text-amber-800 leading-relaxed">{slide.content}</p>
                                    </div>
                                </div>
                            </div>
                            {slide.tip && (
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                                    <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />
                                    <p className="text-amber-700 font-medium">{slide.tip}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "practice" && (
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">{slide.content}</p>
                            {slide.points && (
                                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                                    <ul className="space-y-3">
                                        {slide.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</span>
                                                <span className="text-green-800 font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {slide.tip && (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex gap-3">
                                    <Lightbulb className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <p className="text-green-700 font-medium">{slide.tip}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "summary" && (
                        <div className="space-y-6">
                            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                                <ul className="space-y-3">
                                    {slide.points?.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">{i + 1}</span>
                                            <span className="text-slate-700 font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {slide.cta && (
                                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl p-6 text-center text-white">
                                    <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-80" />
                                    <p className="text-lg font-bold">{slide.cta}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Alt Navigasyon */}
            <div className="p-6 border-t border-slate-200/50 bg-white/80 backdrop-blur-md">
                <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
                    <Button
                        variant="outline"
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        className="rounded-xl py-5 px-6 font-bold"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" /> Geri
                    </Button>

                    <div className="flex gap-2">
                        {lectureContent.slides.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "bg-indigo-600 w-6" : "bg-slate-300"}`}
                            />
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl py-5 px-6 font-bold border-b-4 border-indigo-800 active:border-b-0"
                    >
                        {isLastSlide ? (
                            <>Teste Geç <ArrowRight className="w-5 h-5 ml-1" /></>
                        ) : (
                            <>İleri <ChevronRight className="w-5 h-5 ml-1" /></>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
