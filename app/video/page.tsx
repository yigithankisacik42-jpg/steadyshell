"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { getVideoForUnit } from "@/lib/videos";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen, MessageSquare, Headphones } from "lucide-react";
import { useLessonProgress } from "@/hooks/use-lesson-progress";

function VideoContent() {
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const video = getVideoForUnit(unitId);
    const { markLessonCompleted } = useLessonProgress(unitId);

    useEffect(() => {
        if (video) {
            markLessonCompleted("VIDEO");
        }
    }, [video]);

    // Debugging only - remove before production
    const isDebug = true;

    if (!video) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
                <div className="text-center p-8 bg-slate-800/50 rounded-3xl border border-white/10 shadow-2xl">
                    <h1 className="text-3xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Video Henüz Eklenmedi</h1>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">Bu ünite için video henüz hazırlanmadı veya sistemde bir eşleşme sorunu var.</p>
                    
                    {isDebug && (
                        <div className="mb-8 p-4 bg-black/40 rounded-xl text-left font-mono text-xs text-emerald-400 border border-emerald-500/20">
                            <p className="mb-1 font-bold">🔍 HATA AYIKLAMA BİLGİSİ:</p>
                            <p>Target Unit ID: {unitId}</p>
                            <p>Unit ID Type: {typeof unitId}</p>
                            <p>URL Param: {searchParams.get("unitId")}</p>
                        </div>
                    )}

                    <Link href="/learn">
                        <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-xl px-8 h-12 font-bold transition-all hover:scale-105">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Derslere Dön
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Header */}
            <div className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/learn">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Geri
                        </Button>
                    </Link>
                    <div className="text-center">
                        <span className="text-xs text-emerald-400 font-medium">{video.level}</span>
                        <h1 className="text-lg font-bold">Ünite {video.unitId}: {video.title}</h1>
                    </div>
                    <div className="w-20"></div>
                </div>
            </div>

            {/* Video Player */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border-4 border-white/5 relative group">
                    <iframe
                        key={video.youtubeId}
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&autoplay=0&hl=tr&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>

                {/* Video Info */}
                <div className="mt-6 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h2 className="text-xl font-bold mb-2">📹 {video.title}</h2>
                    <p className="text-slate-400 text-sm">
                        Bu video NotebookLM ile oluşturulmuş, {video.level} seviyesi Ünite {video.unitId} ders anlatımıdır.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Link href={`/lecture?unitId=${unitId}`}>
                        <Button variant="outline" className="w-full gap-2">
                            <BookOpen className="w-4 h-4" />
                            Konu Anlatımı
                        </Button>
                    </Link>
                    <Link href={`/grammar?unitId=${unitId}`}>
                        <Button variant="outline" className="w-full gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Gramer
                        </Button>
                    </Link>
                    <Link href={`/speaking?unitId=${unitId}`}>
                        <Button variant="outline" className="w-full gap-2">
                            <Headphones className="w-4 h-4" />
                            Konuşma
                        </Button>
                    </Link>
                    <Link href={`/lesson?unitId=${unitId}&lessonId=1`}>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                            Teste Başla
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function VideoPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
            </div>
        }>
            <VideoContent />
        </Suspense>
    );
}
