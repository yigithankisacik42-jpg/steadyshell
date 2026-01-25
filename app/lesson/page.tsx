"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Heart, Check, AlertCircle, Volume2, Trophy, ArrowRight, X, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { getQuestionsForUnit, Question } from "@/lib/questions";
import { getUnit } from "@/lib/curriculum";
import { compareAnswers, hasMissingAccents } from "@/lib/accent-utils";
import { useHearts, formatTime } from "@/lib/hearts-context";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useQuests } from "@/lib/quests-context";

// Wrapper component to handle Suspense
export default function LessonPage() {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-medium">Ders yükleniyor...</p>
        </div>
      </div>
    }>
      <LessonContent />
    </Suspense>
  );
}

function LessonContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const unitId = parseInt(searchParams.get("unitId") || "1");
  const quizIndex = parseInt(searchParams.get("quizIndex") || "1");

  // Global hearts context
  const { hearts, maxHearts, loseHeart, getTimeUntilNextHeart, isRecovering } = useHearts();

  // User progress
  const { addXp, completeLesson } = useUserProgress();

  // Quests tracking
  const { addXP: addQuestXP, addLesson: addQuestLesson } = useQuests();

  // Dinamik sorular
  const [questions, setQuestions] = useState<Question[]>([]);
  const [unitTitle, setUnitTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState<"none" | "correct" | "wrong" | "correct_with_accent_warning">("none");
  const [showExit, setShowExit] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [timeUntilHeart, setTimeUntilHeart] = useState<number | null>(null);
  const [wrongCount, setWrongCount] = useState(0); // Bu quiz'deki yanlış sayısı

  // Timer güncelleme
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilHeart(getTimeUntilNextHeart());
    }, 1000);
    return () => clearInterval(interval);
  }, [getTimeUntilNextHeart]);

  // Ders bittiğinde XP ve Seri güncelle
  useEffect(() => {
    if (isFinished && questions.length > 0) {
      const isGameOver = hearts === 0;
      if (!isGameOver) {
        // Calculate stats
        const wrongAnswers = 5 - hearts;
        // Note: index represents the last question index we saw. 
        // If we finished successfully, we answered all questions.
        // However, Render logic uses 'index' which might be confusing.
        // Let's rely on questions.length since we are successful.

        const totalQuestions = questions.length;
        const correctAnswers = totalQuestions - wrongAnswers; // Simplified approximation or we can track 'correctCount' state explicitly in future.

        // Re-using the render logic's approximation:
        // In render: correctAnswers = Math.max(0, index - wrongAnswers + (status === ... ? 1 : 0));
        // When finished via onNext from last question, index is questions.length - 1. status is 'correct'/'wrong'.
        // Wait, 'status' resets to 'none' in onNext?
        // No, onNext sets status to 'none'.
        // So 'status' is 'none' when isFinished becoming true via onNext.

        // Let's count correct answers more reliably:
        // We know total questions = questions.length
        // We know wrong answers = wrongCount (which I see is tracked in state!)
        // So correct = total - wrongCount (assuming we only proceeded after correct or finished with failure)
        // Actually onCheck increments wrongCount.

        const correct = Math.max(0, questions.length - wrongCount);
        const accuracy = Math.round((correct / questions.length) * 100);
        const xp = correct + (accuracy >= 80 ? 5 : 0);

        addXp(xp);
        addQuestXP(xp); // Görevler için XP ekle
        addQuestLesson(); // Görevler için ders sayısı ekle
        completeLesson();
      }
    }
  }, [isFinished]);

  // Ünite ve quiz değiştiğinde soruları yükle
  useEffect(() => {
    const loadedQuestions = getQuestionsForUnit(unitId, quizIndex);
    setQuestions(loadedQuestions);
    setIndex(0);
    setSelectedOption(null);
    setTextInput("");
    setStatus("none");
    setIsFinished(false);

    // Ünite başlığını al - unitId'ye göre doğru seviyeyi belirle
    let language = "es";
    let level = "A1";

    // İngilizce ünite aralıkları
    if (unitId >= 101 && unitId <= 130) {
      language = "en";
      level = "A1";
    } else if (unitId >= 131 && unitId <= 160) {
      language = "en";
      level = "A2";
    } else if (unitId >= 161 && unitId <= 190) {
      language = "en";
      level = "B1";
    } else if (unitId >= 191 && unitId <= 220) {
      language = "en";
      level = "B2";
    }
    // İspanyolca ünite aralıkları - curriculum.ts ile senkron
    else if (unitId >= 1 && unitId <= 20) {
      level = "A1";
    } else if (unitId >= 21 && unitId <= 60) {
      level = "A2";
    } else if (unitId >= 61 && unitId <= 90) {
      level = "B1";
    } else if (unitId >= 91 && unitId <= 110) {
      level = "B2";
    }

    const unit = getUnit(language, level, unitId);
    if (unit) {
      setUnitTitle(`${unit.title} - Quiz ${quizIndex}`);
    }
  }, [unitId, quizIndex]);


  const challenge = questions[index];
  const progress = questions.length > 0 ? ((index + 1) / questions.length) * 100 : 0;

  const playAudio = () => {
    if (challenge?.audioText) {
      setAudioPlaying(true);
      const utterance = new SpeechSynthesisUtterance(challenge.audioText);

      // Dil belirleme
      let targetLang = "es-ES";
      if (unitId >= 301 && unitId <= 360) {
        targetLang = "fr-FR"; // Fransızca A1 ve A2
      } else if (unitId >= 101 && unitId <= 220) {
        targetLang = "en-US";
      }

      utterance.lang = targetLang;

      // Kadın sesi tercih et
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(v =>
        v.lang.startsWith(targetLang.split('-')[0]) &&
        (v.name.toLowerCase().includes('female') ||
          v.name.toLowerCase().includes('woman') ||
          v.name.toLowerCase().includes('amelie') ||
          v.name.toLowerCase().includes('marie') ||
          v.name.toLowerCase().includes('céline') ||
          v.name.toLowerCase().includes('celine') ||
          v.name.toLowerCase().includes('léa') ||
          v.name.toLowerCase().includes('lea') ||
          v.name.toLowerCase().includes('julie') ||
          v.name.toLowerCase().includes('virginie') ||
          v.name.toLowerCase().includes('paulina') ||
          v.name.toLowerCase().includes('monica') ||
          v.name.toLowerCase().includes('helena') ||
          v.name.toLowerCase().includes('samantha') ||
          v.name.toLowerCase().includes('karen') ||
          v.name.toLowerCase().includes('victoria') ||
          v.name.toLowerCase().includes('zira') ||
          v.name.includes('Google') && v.name.toLowerCase().includes('female'))
      ) || voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.1;

      utterance.onend = () => setAudioPlaying(false);
      speechSynthesis.speak(utterance);
    }
  };

  const onCheck = () => {
    if (!challenge) return;

    let isCorrect = false;

    if (challenge.type === "SELECT" || challenge.type === "FILL_BLANK" || challenge.type === "LISTENING") {
      const selectedOpt = challenge.options?.find(o => o.id === selectedOption);
      isCorrect = selectedOpt?.correct || false;
    } else if (challenge.type === "TRANSLATE") {
      // Aksan duyarsız karşılaştırma - Türk klavyeler için
      isCorrect = compareAnswers(textInput, challenge.correctAnswer || "");

      // Eğer doğru ama aksan eksikse uyarı göster
      if (isCorrect && hasMissingAccents(textInput, challenge.correctAnswer || "")) {
        setStatus("correct_with_accent_warning");
        return;
      }
    }

    if (isCorrect) {
      setStatus("correct");
    } else {
      loseHeart(); // Global can kaybet
      setWrongCount(w => w + 1);
      setStatus("wrong");

      // Can 0'a düştüyse oyunu bitir
      if (hearts - 1 === 0) {
        setTimeout(() => {
          setIsFinished(true);
        }, 1500); // 1.5 saniye sonra bitiş ekranını göster
      }
    }
  };

  const onNext = () => {
    if (index < questions.length - 1) {
      setIndex(i => i + 1);
      setStatus("none");
      setSelectedOption(null);
      setTextInput("");
    } else {
      setIsFinished(true);
    }
  };

  const canCheck = () => {
    if (!challenge) return false;
    if (challenge.type === "TRANSLATE") {
      return textInput.trim().length > 0;
    }
    return selectedOption !== null;
  };

  const getCorrectAnswer = () => {
    if (!challenge) return "";
    if (challenge.type === "TRANSLATE") {
      return challenge.correctAnswer;
    }
    return challenge.options?.find(o => o.correct)?.text;
  };

  // Yükleniyor durumu
  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-medium">Ders yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Can yoksa bekleme ekranı
  if (hearts === 0 && !isFinished) {
    return (
      <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-center p-6">
        <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-rose-200 mb-6">
          <Heart className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-rose-600 mb-2">Can Bitti!</h1>
        <p className="text-slate-500 mb-6 text-center">Canların dolana kadar beklemen gerekiyor.</p>

        {/* Timer */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-rose-500" />
            <span className="text-slate-600 font-medium">Sonraki can:</span>
          </div>
          <p className="text-4xl font-extrabold text-rose-500 text-center">{formatTime(timeUntilHeart)}</p>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(maxHearts)].map((_, i) => (
              <Heart
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < hearts ? "text-rose-500 fill-rose-500" : "text-slate-200"
                )}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={() => router.push("/learn")}
          variant="outline"
          className="px-8 py-5 rounded-xl font-bold"
        >
          Geri Dön
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex flex-col h-full w-full">

      {/* ÇIKIŞ MODALI */}
      {showExit && (
        <div className="fixed inset-0 z-[100000] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <h2 className="text-2xl font-bold text-slate-800">Çıkmak istediğine emin misin?</h2>
            <p className="text-slate-500">İlerleme kaydedilmeyecek.</p>
            <Button onClick={() => router.push("/learn")} variant="destructive" className="w-full rounded-xl py-5 font-bold">Evet, Çık</Button>
            <Button onClick={() => setShowExit(false)} variant="outline" className="w-full rounded-xl py-5 font-bold">Vazgeç</Button>
          </div>
        </div>
      )}

      {/* BİTİŞ EKRANI */}
      {isFinished ? (() => {
        // Can bitti mi kontrol et
        const isGameOver = hearts === 0;

        // Doğru cevap sayısını hesapla
        const wrongAnswers = 5 - hearts;
        const correctAnswers = Math.max(0, index - wrongAnswers + (status === "correct" || status === "correct_with_accent_warning" ? 1 : 0));
        const totalAnswered = index + 1;
        const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
        // XP hesapla: Can bittiyse XP yok
        const earnedXP = isGameOver ? 0 : correctAnswers + (accuracy >= 80 ? 5 : 0);

        return (
          <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
            {isGameOver ? (
              <>
                {/* CAN BİTTİ EKRANI */}
                <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-rose-200">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">Can Bitti!</h1>
                <div className="text-center space-y-2">
                  <p className="text-slate-500 font-medium text-lg">{unitTitle}</p>
                  <p className="text-slate-400">Çok fazla hata yaptın. Tekrar dene!</p>
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-emerald-500">{correctAnswers}/{totalAnswered}</p>
                      <p className="text-sm text-slate-400">Doğru</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-rose-500">0</p>
                      <p className="text-sm text-slate-400">Can</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-slate-400">0</p>
                      <p className="text-sm text-slate-400">XP</p>
                    </div>
                  </div>
                </div>

                {/* Timer bilgisi */}
                {isRecovering && (
                  <div className="bg-white rounded-xl p-4 shadow border border-rose-100 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-5 h-5 text-rose-500" />
                      <span>Sonraki can: <strong className="text-rose-500">{formatTime(timeUntilHeart)}</strong></span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <Button
                    onClick={() => router.push("/learn")}
                    className="bg-gradient-to-r from-rose-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-lg shadow-xl w-full"
                  >
                    GERİ DÖN
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* BAŞARILI BİTİŞ EKRANI */}
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl shadow-amber-200">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Ders Bitti!</h1>
                <div className="text-center space-y-2">
                  <p className="text-slate-500 font-medium text-lg">{unitTitle}</p>
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-emerald-500">{correctAnswers}/{questions.length}</p>
                      <p className="text-sm text-slate-400">Doğru</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-amber-500">%{accuracy}</p>
                      <p className="text-sm text-slate-400">Başarı</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-indigo-500">+{earnedXP}</p>
                      <p className="text-sm text-slate-400">XP</p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => router.push("/learn")}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-6 rounded-2xl font-bold text-lg shadow-xl"
                >
                  DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </>
            )}
          </div>
        );
      })() : (
        <>
          {/* ÜST BAR */}
          <div className="w-full px-6 py-4 flex items-center justify-between gap-6 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
            <ArrowLeft onClick={() => {
              if (index > 0 && status === "none") {
                // Henüz cevap verilmediyse ve ilk soru değilse önceki soruya git
                setIndex(i => i - 1);
                setStatus("none");
                setSelectedOption(null);
                setTextInput("");
              } else {
                setShowExit(true);
              }
            }} className="cursor-pointer text-slate-400 hover:text-slate-600 w-6 h-6 transition-colors" />
            <div className="flex-1">
              <Progress value={progress} className="h-3 w-full" />
              <p className="text-xs text-slate-400 text-center mt-1">{unitTitle}</p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(hearts)].map((_, i) => (
                <Heart key={i} className="text-rose-500 w-5 h-5 fill-rose-500" />
              ))}
            </div>
          </div>

          {/* SORU ALANI */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">

            {/* Soru Tipi Badge */}
            <div className="mb-4">
              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-bold uppercase",
                challenge.type === "TRANSLATE" && "bg-violet-100 text-violet-600",
                challenge.type === "LISTENING" && "bg-sky-100 text-sky-600",
                challenge.type === "FILL_BLANK" && "bg-amber-100 text-amber-600",
                challenge.type === "SELECT" && "bg-indigo-100 text-indigo-600",
              )}>
                {challenge.type === "TRANSLATE" && "Çeviri"}
                {challenge.type === "LISTENING" && "Dinleme"}
                {challenge.type === "FILL_BLANK" && "Boşluk Doldurma"}
                {challenge.type === "SELECT" && "Seçim"}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-slate-800 mb-2 text-center">{challenge.question}</h1>

            {/* TRANSLATE: Çeviri sorusu */}
            {challenge.type === "TRANSLATE" && (
              <div className="w-full space-y-4 mt-6">
                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 text-center">
                  <p className="text-xl font-bold text-indigo-700">{challenge.hint}</p>
                </div>
                <Input
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Cevabını yaz..."
                  disabled={status !== "none"}
                  className={cn(
                    "h-14 text-lg font-medium rounded-xl border-2",
                    status === "correct" && "border-emerald-500 bg-emerald-50",
                    status === "wrong" && "border-rose-500 bg-rose-50"
                  )}
                />
              </div>
            )}

            {/* LISTENING: Ses butonu */}
            {challenge.type === "LISTENING" && (
              <button
                onClick={playAudio}
                className={cn(
                  "mt-4 mb-6 w-20 h-20 rounded-full flex items-center justify-center transition-all",
                  audioPlaying
                    ? "bg-sky-500 animate-pulse"
                    : "bg-sky-100 hover:bg-sky-200"
                )}
              >
                <Volume2 className={cn("w-10 h-10", audioPlaying ? "text-white" : "text-sky-600")} />
              </button>
            )}

            {/* FILL_BLANK: Boşluklu cümle */}
            {challenge.type === "FILL_BLANK" && challenge.sentence && (
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 mt-4 mb-6">
                <p className="text-xl font-medium text-slate-700 text-center">
                  {challenge.sentence.split("_").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && (
                        <span className={cn(
                          "mx-1 px-4 py-1 rounded-lg border-b-4 inline-block",
                          selectedOption && status === "none" && "bg-indigo-100 border-indigo-300 text-indigo-600",
                          status === "correct" && "bg-emerald-100 border-emerald-300 text-emerald-600",
                          status === "wrong" && "bg-rose-100 border-rose-300 text-rose-600",
                          !selectedOption && "bg-slate-200 border-slate-300"
                        )}>
                          {selectedOption
                            ? challenge.options?.find(o => o.id === selectedOption)?.text
                            : "___"}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* ŞIKLAR (SELECT, FILL_BLANK, LISTENING için) */}
            {(challenge.type === "SELECT" || challenge.type === "FILL_BLANK" || challenge.type === "LISTENING") && (
              <div className={cn(
                "grid gap-3 w-full mt-4",
                challenge.options && challenge.options.length <= 3 ? "grid-cols-3" : "grid-cols-2"
              )}>
                {challenge.options?.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  const showResult = status !== "none";

                  // Emoji sadece sonuç gösterildiğinde VE doğru cevapsa görünür
                  const showEmoji = showResult && opt.correct && opt.image;

                  let optionStyle = "bg-white border-2 border-slate-200 hover:border-indigo-300";
                  if (isSelected && !showResult) {
                    optionStyle = "bg-indigo-50 border-2 border-indigo-500";
                  }
                  if (showResult && opt.correct) {
                    optionStyle = "bg-emerald-50 border-2 border-emerald-500";
                  }
                  if (showResult && isSelected && !opt.correct) {
                    optionStyle = "bg-rose-50 border-2 border-rose-500 animate-shake";
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => !showResult && setSelectedOption(opt.id)}
                      className={cn(
                        "p-4 rounded-2xl cursor-pointer text-center transition-all",
                        optionStyle,
                        showResult && "cursor-default"
                      )}
                    >
                      {/* Emoji sadece doğru cevap sonrası görünür */}
                      {showEmoji && <div className="text-4xl mb-2 animate-bounce">{opt.image}</div>}
                      <div className={cn(
                        "font-bold",
                        showResult && opt.correct && "text-emerald-600",
                        showResult && isSelected && !opt.correct && "text-rose-600",
                        !showResult && "text-slate-700"
                      )}>{opt.text}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ALT BUTON ALANI */}
          <div className={cn(
            "p-6 border-t w-full",
            (status === "correct" || status === "correct_with_accent_warning") && "bg-emerald-50 border-emerald-200",
            status === "correct_with_accent_warning" && "bg-amber-50 border-amber-200",
            status === "wrong" && "bg-rose-50 border-rose-200",
            status === "none" && "bg-white/80 border-slate-200/50"
          )}>
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              {status !== "none" && (
                <div className="flex items-center gap-2">
                  {status === "correct" ? (
                    <>
                      <Check className="w-6 h-6 text-emerald-500" />
                      <span className="font-bold text-emerald-600">Harika!</span>
                    </>
                  ) : status === "correct_with_accent_warning" ? (
                    <>
                      <Check className="w-6 h-6 text-amber-500" />
                      <div>
                        <span className="font-bold text-amber-600">Doğru! </span>
                        <span className="text-amber-600 text-sm">Aksanlara dikkat et: {challenge?.correctAnswer}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-6 h-6 text-rose-500" />
                      <span className="font-bold text-rose-600">Doğru cevap: {getCorrectAnswer()}</span>
                    </>
                  )}
                </div>
              )}
              <div className={cn(status === "none" && "w-full")}>
                {status === "none" ?
                  <Button
                    onClick={onCheck}
                    disabled={!canCheck()}
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-6 rounded-2xl disabled:opacity-50 border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1"
                  >
                    KONTROL ET
                  </Button> :
                  <Button
                    onClick={onNext}
                    className={cn(
                      "font-bold py-6 px-8 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1",
                      (status === "correct" || status === "correct_with_accent_warning")
                        ? "bg-emerald-500 hover:bg-emerald-600 border-emerald-700 text-white"
                        : "bg-rose-500 hover:bg-rose-600 border-rose-700 text-white"
                    )}
                  >
                    DEVAM ET
                  </Button>
                }
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}