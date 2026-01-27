"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, AlertCircle, Shield, Key, Mail, Gamepad2, ArrowRight } from "lucide-react";
import { verifyPassword, checkLoginAttempts, recordFailedAttempt, clearLoginAttempts } from "@/lib/security";
import { signIn } from "next-auth/react";

function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(0);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email adresinizi girin");
      return;
    }
    if (!password) {
      setError("Şifrenizi girin");
      return;
    }

    const cleanEmail = email.trim().toLowerCase();

    // 🔒 Rate limiting
    const attemptCheck = checkLoginAttempts(cleanEmail);
    if (!attemptCheck.allowed) {
      setIsLocked(true);
      setLockoutTime(attemptCheck.remainingTime);
      setError(`Çok fazla deneme! ${attemptCheck.remainingTime}dk bekleyin.`);
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: cleanEmail,
        password: password,
      });

      if (result?.error) {
        recordFailedAttempt(cleanEmail);
        setError("Email veya şifre hatalı");
        setIsLoading(false);
        return;
      }

      clearLoginAttempts(cleanEmail);
      router.push("/learn");
      // Force reload to update session state if needed, though router.push should be enough
      router.refresh();

    } catch (err) {
      setError("Bir hata oluştu.");
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    const demoUser = {
      id: 1, name: "Demo Kullanıcı", email: "demo@user.com", avatar: "D",
      createdAt: new Date().toISOString(), streak: 3, totalXp: 1250, hearts: 5, completedLessons: [],
    };
    localStorage.setItem("steadyshell_current_user", JSON.stringify(demoUser));
    router.push("/learn");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden selection:bg-indigo-500/30">

      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" />
        <div className="absolute bottom-[0%] right-[0%] w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[140px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute top-8 left-8 z-50">
        <Link href="/">
          <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10 font-bold gap-2">
            <ArrowLeft className="w-5 h-5" /> Ana Sayfa
          </Button>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 relative z-10 animate-fade-in-up">
        <div className="w-full max-w-md">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">Tekrar Hoş Geldin! 👋</h1>
            <p className="text-slate-400 font-medium">Macerana kaldığın yerden devam et.</p>
          </div>

          {/* --- GLASS CARD --- */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60"></div>

            <form onSubmit={handleLogin} className="space-y-5 relative z-10">

              {error && (
                <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-sm font-bold animate-shake">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider ml-1">Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  <Input
                    type="email"
                    placeholder="ornek@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-12 bg-slate-900/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 rounded-xl transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Şifre</Label>
                  <button
                    type="button"
                    onClick={() => alert("Şifre sıfırlama özelliği yakında eklenecektir. Lütfen support@steadyshell.com ile iletişime geçin.")}
                    className="text-indigo-400 hover:text-indigo-300 text-xs font-bold transition-colors"
                  >
                    Unuttum?
                  </button>
                </div>
                <div className="relative group">
                  <Key className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  <Input
                    type="password"
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pl-12 bg-slate-900/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 rounded-xl transition-all"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95 border-t border-white/10"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : "Giriş Yap"}
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest"><span className="bg-[#0f1118] bg-opacity-0 px-2 text-slate-500 backdrop-blur-3xl">veya</span></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => signIn("google", { callbackUrl: "/learn" })}
                  className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white h-12 rounded-xl"
                >
                  <span className="mr-2">G</span> Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDemoLogin}
                  className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-emerald-400 hover:text-emerald-300 h-12 rounded-xl font-bold"
                >
                  <Gamepad2 className="w-4 h-4 mr-2" /> Demo
                </Button>
              </div>

            </form>

          </div>

          <div className="text-center mt-6">
            <p className="text-slate-400 text-sm font-medium">
              Hesabın yok mu?{" "}
              <Link href="/register" className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors inline-flex items-center gap-1 group">
                Hemen Kayıt Ol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <LoginForm />;
}
