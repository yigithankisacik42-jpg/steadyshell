"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Trophy, GraduationCap, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { getGrammarForUnit, UnitGrammar } from "@/lib/grammar";

export default function GrammarPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <GrammarContent />
        </Suspense>
    );
}

function GrammarContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [content, setContent] = useState<UnitGrammar | null>(null);
    const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const data = getGrammarForUnit(unitId);
        setContent(data);
        setCurrentRuleIndex(0);
        setIsFinished(false);
    }, [unitId]);

    if (!content) return <div className="flex items-center justify-center h-screen">Yükleniyor...</div>;

    const currentRule = content.rules[currentRuleIndex];
    const progress = ((currentRuleIndex + 1) / content.rules.length) * 100;
    const isLastRule = currentRuleIndex === content.rules.length - 1;

    const handleNext = () => {
        if (isLastRule) {
            setIsFinished(true);
        } else {
            setCurrentRuleIndex(i => i + 1);
        }
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-cyan-50 via-white to-slate-50 flex flex-col h-full w-full overflow-y-auto text-foreground">



            {/* Bitiş Ekranı */}
            {isFinished ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6 min-h-screen">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-200/50 mb-6">
                        <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-cyan-600 mb-2">Gramer Tamamlandı!</h1>
                    <p className="text-slate-500 mb-2 text-center max-w-md">"{content.title}" konusunu başarıyla tamamladın.</p>
                    <p className="text-cyan-600 font-bold mb-4">{content.rules.length} kural incelendi</p>
                    <p className="text-slate-400 mb-8">+20 XP kazandın!</p>
                    <Button
                        onClick={() => router.push("/learn")}
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-xl hover:shadow-cyan-200"
                    >
                        DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div className="p-4 flex items-center gap-4 bg-white/90 backdrop-blur border-b border-cyan-100 sticky top-0 z-10">
                        <Button variant="ghost" size="icon" onClick={() => {
                            if (currentRuleIndex > 0) {
                                setCurrentRuleIndex(i => i - 1);
                            } else {
                                router.back();
                            }
                        }} className="text-slate-400 hover:text-slate-600">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                        <Progress value={progress} className="h-3 flex-1 rounded-full bg-slate-100" />
                        <span className="text-sm font-bold text-slate-500">{currentRuleIndex + 1}/{content.rules.length}</span>
                    </div>

                    {/* Ana İçerik */}
                    <div className="flex-1 flex flex-col items-center justify-start p-6 max-w-2xl mx-auto w-full pb-24 pt-8">
                        <div className="text-center mb-8">
                            <GraduationCap className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-slate-800">{content.title}</h2>
                            <p className="text-slate-500 mt-2 font-medium">{currentRule.title}</p>
                        </div>

                        {/* Gramer Kartı */}
                        <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-cyan-100/30 border-2 border-cyan-100 space-y-6">

                            {/* Açıklama */}
                            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-200">
                                <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                                    {currentRule.explanation}
                                </p>
                            </div>

                            {/* Tablo (Varsa) */}
                            {currentRule.table && (
                                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-50 text-slate-700 font-bold">
                                            <tr>
                                                {currentRule.table.headers.map((h, i) => (
                                                    <th key={i} className="p-4 border-b border-slate-200">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {currentRule.table.rows.map((row, i) => (
                                                <tr key={i} className="hover:bg-slate-50/50">
                                                    {row.map((cell, j) => (
                                                        <td key={j} className="p-4 text-slate-600 whitespace-nowrap md:whitespace-normal font-medium first:text-cyan-600">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Örnekler */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Örnekler</h3>
                                {currentRule.examples.map((ex, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <p className="font-bold text-cyan-700 text-lg flex-1">{ex.es || ex.fr}</p>
                                        <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />
                                        <p className="text-slate-500 italic flex-1">{ex.tr}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Alt Buton */}
                    <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur border-t border-slate-100 flex justify-center">
                        <Button
                            onClick={handleNext}
                            className="w-full max-w-md py-7 rounded-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg text-lg hover:shadow-cyan-200 hover:scale-[1.02] transition-all"
                        >
                            {isLastRule ? "TAMAMLA" : "ANLADIM"} <CheckCircle2 className="w-6 h-6 ml-2" />
                        </Button>
                    </div>

                </>
            )}
        </div>
    );
}
