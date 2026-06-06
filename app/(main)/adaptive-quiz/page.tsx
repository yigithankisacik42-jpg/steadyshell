"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Brain,
  Zap,
  Target,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowRight,
  Headphones,
  Languages,
  PenTool,
  Sparkles,
  Filter,
  ArrowLeft,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Weakness {
  id: string;
  topic: string;
  category: "grammar" | "vocabulary" | "listening" | "translation";
  wrongCount: number;
  correctStreak: number;
  resolved: boolean;
  questionText: string;
  correctAnswer: string;
  userAnswer: string;
  lastSeen: string; // ISO date
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const CATEGORY_META: Record<
  Weakness["category"],
  { emoji: string; label: string; icon: typeof PenTool; color: string }
> = {
  grammar: {
    emoji: "📝",
    label: "Dilbilgisi",
    icon: PenTool,
    color: "text-violet-500",
  },
  vocabulary: {
    emoji: "🔤",
    label: "Kelime",
    icon: BookOpen,
    color: "text-sky-500",
  },
  listening: {
    emoji: "👂",
    label: "Dinleme",
    icon: Headphones,
    color: "text-emerald-500",
  },
  translation: {
    emoji: "🔄",
    label: "Çeviri",
    icon: Languages,
    color: "text-amber-500",
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function intensityBg(wrongCount: number): string {
  if (wrongCount >= 5) return "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300";
  if (wrongCount >= 3) return "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300";
  return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";
}

/* ------------------------------------------------------------------ */
/*  Skeleton Loader                                                    */
/* ------------------------------------------------------------------ */

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 p-5 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
          <div className="h-3 w-3/4 bg-slate-100 dark:bg-slate-700/60 rounded" />
        </div>
      </div>
      <div className="mt-4 h-2 w-full bg-slate-100 dark:bg-slate-700/60 rounded" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */

export default function AdaptiveQuizDashboard() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();

  const [weaknesses, setWeaknesses] = useState<Weakness[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<
    "all" | Weakness["category"]
  >("all");
  const [resolvedOpen, setResolvedOpen] = useState(false);

  /* ---- Fetch weaknesses ---- */
  useEffect(() => {
    const fetchWeaknesses = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/weakness?language=${currentLanguage.code}`
        );
        if (res.ok) {
          const data = await res.json();
          setWeaknesses(data);
        } else {
          // If API doesn't exist yet, use demo data
          setWeaknesses(getDemoWeaknesses());
        }
      } catch {
        // fallback to demo data when API is not ready
        setWeaknesses(getDemoWeaknesses());
      } finally {
        setLoading(false);
      }
    };
    fetchWeaknesses();
  }, [currentLanguage.code]);

  /* ---- Derived data ---- */
  const activeWeaknesses = useMemo(
    () =>
      weaknesses
        .filter((w) => !w.resolved)
        .sort((a, b) => b.wrongCount - a.wrongCount),
    [weaknesses]
  );

  const resolvedWeaknesses = useMemo(
    () => weaknesses.filter((w) => w.resolved),
    [weaknesses]
  );

  const filteredActive = useMemo(
    () =>
      filterCategory === "all"
        ? activeWeaknesses
        : activeWeaknesses.filter((w) => w.category === filterCategory),
    [activeWeaknesses, filterCategory]
  );

  const successRate = useMemo(() => {
    if (weaknesses.length === 0) return 0;
    return Math.round((resolvedWeaknesses.length / weaknesses.length) * 100);
  }, [weaknesses, resolvedWeaknesses]);

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden pb-20">
      {/* ---- Background Decorations ---- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-8%] left-[-6%] w-[32rem] h-[32rem] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.04] rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-[10%] right-[-8%] w-[28rem] h-[28rem] bg-violet-500/[0.06] dark:bg-violet-500/[0.04] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[18rem] h-[18rem] bg-cyan-400/[0.04] dark:bg-cyan-400/[0.03] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ============================================================ */}
      {/*  HEADER                                                       */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-indigo-100 dark:border-slate-800 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/learn")}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Animated brain icon */}
            <div className="relative">
              <span className="text-2xl animate-bounce inline-block" style={{ animationDuration: "2s" }}>
                🧠
              </span>
              <Zap
                className="absolute -top-1 -right-1.5 w-3.5 h-3.5 text-amber-400 animate-ping"
                style={{ animationDuration: "3s" }}
              />
            </div>

            <div>
              <h1 className="text-lg lg:text-xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Shelldon&apos;un Akıllı Kampı
              </h1>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium -mt-0.5 hidden sm:block">
                Zayıf noktalarını güçlendir, hatalarından öğren!
              </p>
            </div>
          </div>

          {/* Mini stat badge */}
          <div className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 px-3 py-1.5 rounded-xl">
            <Target className="w-4 h-4 text-indigo-500" />
            <span className="font-bold text-indigo-700 dark:text-indigo-300 text-sm">
              {activeWeaknesses.length}
            </span>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/*  CONTENT                                                      */}
      {/* ============================================================ */}
      <main className="flex-1 w-full max-w-3xl mx-auto p-4 space-y-6 relative z-10">
        {/* ---- Subtitle (mobile) ---- */}
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium text-center sm:hidden">
          Zayıf noktalarını güçlendir, hatalarından öğren!
        </p>

        {/* ============================================================ */}
        {/*  STATS BAR                                                    */}
        {/* ============================================================ */}
        {!loading && (
          <div className="grid grid-cols-3 gap-3">
            {/* Active Weaknesses */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-2xl -translate-y-4 translate-x-4" />
              <div className="relative z-10">
                <span className="text-lg mb-1 block">🎯</span>
                <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  Aktif Zayıflık
                </p>
                <p className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">
                  {activeWeaknesses.length}
                </p>
              </div>
            </div>

            {/* Resolved */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-2xl -translate-y-4 translate-x-4" />
              <div className="relative z-10">
                <span className="text-lg mb-1 block">✅</span>
                <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  Çözülen
                </p>
                <p className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {resolvedWeaknesses.length}
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-2xl -translate-y-4 translate-x-4" />
              <div className="relative z-10">
                <span className="text-lg mb-1 block">📊</span>
                <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  Başarı Oranı
                </p>
                <p className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                  {successRate}%
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/*  CTA BUTTON - Kampı Başlat                                    */}
        {/* ============================================================ */}
        {!loading && (
          <div className="relative">
            {activeWeaknesses.length > 0 ? (
              <button
                onClick={() => router.push("/adaptive-quiz/quiz")}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-[2px] shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/15 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-0.5"
              >
                {/* Pulsing glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-2xl animate-pulse opacity-40" />

                <div className="relative bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[14px] px-6 py-4 flex items-center justify-center gap-3">
                  <Brain className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-black text-white tracking-wide">
                    Kampı Başlat
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            ) : (
              <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-6 py-4 text-center">
                <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                  Henüz zayıf noktanız yok! Ders çözerek başlayın.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/*  LOADING STATE                                                */}
        {/* ============================================================ */}
        {loading && (
          <div className="space-y-6">
            {/* Skeleton stats */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 animate-pulse"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 mb-2" />
                  <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                  <div className="h-6 w-12 bg-slate-100 dark:bg-slate-700/60 rounded" />
                </div>
              ))}
            </div>
            {/* Skeleton CTA */}
            <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
            {/* Skeleton cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/*  EMPTY STATE                                                  */}
        {/* ============================================================ */}
        {!loading && weaknesses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/20">
                <span className="text-5xl">🐢</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            </div>

            <h2 className="text-xl font-black text-slate-700 dark:text-slate-200 mb-2 text-center">
              Harika gidiyorsun! 🎉
            </h2>
            <p className="text-slate-400 dark:text-slate-500 font-medium text-center mb-6 max-w-xs leading-relaxed">
              Henüz hiç zayıf noktanız yok. Quiz çözerek başlayın ve
              Shelldon sizinle birlikte öğrensin!
            </p>
            <Button
              onClick={() => router.push("/learn")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl h-12 px-6 shadow-lg shadow-emerald-500/20"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Ders Çöz
            </Button>
          </div>
        )}

        {/* ============================================================ */}
        {/*  WEAKNESS CARDS SECTION                                       */}
        {/* ============================================================ */}
        {!loading && activeWeaknesses.length > 0 && (
          <section className="space-y-4">
            {/* Section header with filter */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-500" />
                Zayıf Noktaların
              </h2>

              {/* Category filter dropdown */}
              <div className="relative">
                <select
                  value={filterCategory}
                  onChange={(e) =>
                    setFilterCategory(
                      e.target.value as "all" | Weakness["category"]
                    )
                  }
                  className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 pr-8 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors cursor-pointer"
                >
                  <option value="all">Tümü</option>
                  <option value="grammar">📝 Dilbilgisi</option>
                  <option value="vocabulary">🔤 Kelime</option>
                  <option value="listening">👂 Dinleme</option>
                  <option value="translation">🔄 Çeviri</option>
                </select>
                <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredActive.map((w, idx) => (
                <div
                  key={w.id}
                  className="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{
                    animationDelay: `${idx * 80}ms`,
                    animation: "fadeInUp 0.5s ease-out both",
                  }}
                >
                  {/* Decorative corner glow */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 -translate-y-6 translate-x-6 group-hover:opacity-30 transition-opacity",
                      w.category === "grammar" && "bg-violet-400",
                      w.category === "vocabulary" && "bg-sky-400",
                      w.category === "listening" && "bg-emerald-400",
                      w.category === "translation" && "bg-amber-400"
                    )}
                  />

                  {/* Top row: category + badge */}
                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm",
                          w.category === "grammar" &&
                            "bg-violet-100 dark:bg-violet-900/30",
                          w.category === "vocabulary" &&
                            "bg-sky-100 dark:bg-sky-900/30",
                          w.category === "listening" &&
                            "bg-emerald-100 dark:bg-emerald-900/30",
                          w.category === "translation" &&
                            "bg-amber-100 dark:bg-amber-900/30"
                        )}
                      >
                        {CATEGORY_META[w.category].emoji}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-700 dark:text-slate-200 text-sm leading-tight">
                          {w.topic}
                        </h3>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">
                          {CATEGORY_META[w.category].label}
                        </p>
                      </div>
                    </div>

                    {/* Wrong count badge */}
                    <span
                      className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap",
                        intensityBg(w.wrongCount)
                      )}
                    >
                      {w.wrongCount}x yanlış
                    </span>
                  </div>

                  {/* Question text */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed line-clamp-2 italic">
                    &ldquo;{w.questionText}&rdquo;
                  </p>

                  {/* Answer comparison */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-4 h-4 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-500 text-[10px] font-bold shrink-0">
                        ✗
                      </span>
                      <span className="text-rose-500 dark:text-rose-400 font-medium line-through truncate">
                        {w.userAnswer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500 text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                        {w.correctAnswer}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar (streak toward resolved) */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-medium mb-1">
                      <span>Çözüm ilerlemesi</span>
                      <span>{w.correctStreak}/3</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          w.correctStreak === 0 && "bg-slate-300 dark:bg-slate-600",
                          w.correctStreak === 1 && "bg-amber-400",
                          w.correctStreak === 2 && "bg-emerald-400",
                          w.correctStreak >= 3 && "bg-emerald-500"
                        )}
                        style={{
                          width: `${Math.min((w.correctStreak / 3) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <p className="text-[10px] text-slate-300 dark:text-slate-600 font-medium text-right">
                    {formatDate(w.lastSeen)}
                  </p>
                </div>
              ))}
            </div>

            {/* Show message if filter yields nothing */}
            {filteredActive.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                  Bu kategoride aktif zayıf nokta bulunmuyor.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ============================================================ */}
        {/*  RESOLVED SECTION                                             */}
        {/* ============================================================ */}
        {!loading && resolvedWeaknesses.length > 0 && (
          <section className="space-y-3">
            {/* Collapsible header */}
            <button
              onClick={() => setResolvedOpen(!resolvedOpen)}
              className="w-full flex items-center justify-between bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl px-5 py-3.5 group hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                  Çözülen Zayıflıklar
                </span>
                <span className="text-xs bg-emerald-200 dark:bg-emerald-800/50 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  {resolvedWeaknesses.length}
                </span>
                <span className="text-sm" aria-hidden="true">
                  ✨
                </span>
              </div>
              {resolvedOpen ? (
                <ChevronUp className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              )}
            </button>

            {/* Resolved list */}
            {resolvedOpen && (
              <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                {resolvedWeaknesses.map((w) => (
                  <div
                    key={w.id}
                    className="flex items-center gap-3 bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 rounded-xl px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through truncate">
                        {w.topic}
                      </p>
                    </div>
                    <span className="text-xs text-slate-300 dark:text-slate-600 shrink-0">
                      {CATEGORY_META[w.category].emoji}
                    </span>
                    <span className="text-[10px]" aria-hidden="true">
                      🎉
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ---- Bottom tip ---- */}
        {!loading && weaknesses.length > 0 && (
          <div className="flex items-center gap-3 bg-indigo-50/80 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40 rounded-2xl px-5 py-4">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-800/30 rounded-lg flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 text-indigo-500" />
            </div>
            <p className="text-xs text-indigo-600/80 dark:text-indigo-400/80 font-medium leading-relaxed">
              Aynı soruyu <span className="font-bold">3 kez üst üste</span>{" "}
              doğru cevaplayarak zayıflıklarını çözmüş olursun. Kampı başlat
              ve güçlen! 💪
            </p>
          </div>
        )}
      </main>

      {/* ---- CSS Keyframes ---- */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo Data (used when API is not ready)                             */
/* ------------------------------------------------------------------ */

function getDemoWeaknesses(): Weakness[] {
  return [
    {
      id: "1",
      topic: "Past Simple Tense",
      category: "grammar",
      wrongCount: 7,
      correctStreak: 1,
      resolved: false,
      questionText: "Yesterday, I ___ (go) to the store to buy groceries.",
      correctAnswer: "went",
      userAnswer: "goed",
      lastSeen: "2026-06-05T14:30:00Z",
    },
    {
      id: "2",
      topic: "Phrasal Verbs",
      category: "vocabulary",
      wrongCount: 5,
      correctStreak: 0,
      resolved: false,
      questionText: "She decided to ___ the job offer because the salary was low.",
      correctAnswer: "turn down",
      userAnswer: "turn off",
      lastSeen: "2026-06-04T10:15:00Z",
    },
    {
      id: "3",
      topic: "Listening Comprehension",
      category: "listening",
      wrongCount: 3,
      correctStreak: 2,
      resolved: false,
      questionText: "What did the speaker say about the weather?",
      correctAnswer: "It will rain tomorrow",
      userAnswer: "It will be sunny",
      lastSeen: "2026-06-03T09:00:00Z",
    },
    {
      id: "4",
      topic: "Present Perfect vs Past Simple",
      category: "grammar",
      wrongCount: 4,
      correctStreak: 0,
      resolved: false,
      questionText: "I ___ (never / visit) Paris before last summer.",
      correctAnswer: "had never visited",
      userAnswer: "have never visited",
      lastSeen: "2026-06-05T16:45:00Z",
    },
    {
      id: "5",
      topic: "False Friends",
      category: "translation",
      wrongCount: 2,
      correctStreak: 1,
      resolved: false,
      questionText: "'Actual' kelimesinin Türkçe karşılığı nedir?",
      correctAnswer: "gerçek, asıl",
      userAnswer: "aktüel, güncel",
      lastSeen: "2026-06-02T11:30:00Z",
    },
    {
      id: "6",
      topic: "Articles (a/an/the)",
      category: "grammar",
      wrongCount: 6,
      correctStreak: 3,
      resolved: true,
      questionText: "She is ___ best student in ___ class.",
      correctAnswer: "the, the",
      userAnswer: "a, the",
      lastSeen: "2026-05-28T08:00:00Z",
    },
    {
      id: "7",
      topic: "Collocations",
      category: "vocabulary",
      wrongCount: 3,
      correctStreak: 3,
      resolved: true,
      questionText: "You should ___ attention to the teacher.",
      correctAnswer: "pay",
      userAnswer: "give",
      lastSeen: "2026-05-30T13:20:00Z",
    },
  ];
}
