"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Shield, Clock } from "lucide-react";
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

    // Validation
    if (!email.trim()) {
      setError("Email adresinizi girin");
      return;
    }
    if (!password) {
      setError("Şifrenizi girin");
      return;
    }

    const cleanEmail = email.trim().toLowerCase();

    // 🔒 Rate limiting kontrolü
    const attemptCheck = checkLoginAttempts(cleanEmail);
    if (!attemptCheck.allowed) {
      setIsLocked(true);
      setLockoutTime(attemptCheck.remainingTime);
      setError(`Çok fazla başarısız deneme! ${attemptCheck.remainingTime} dakika bekleyin.`);
      return;
    }

    setIsLoading(true);

    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem("steadyshell_users") || "[]");
      const user = users.find((u: { email: string }) => u.email === cleanEmail);

      if (!user) {
        recordFailedAttempt(cleanEmail);
        setError("Email veya şifre hatalı");
        setIsLoading(false);
        return;
      }

      // 🔒 Şifre hash doğrulaması
      const isValidPassword = await verifyPassword(password, user.password);

      if (!isValidPassword) {
        recordFailedAttempt(cleanEmail);
        setError("Email veya şifre hatalı");
        setIsLoading(false);
        return;
      }

      // Başarılı giriş - deneme sayacını sıfırla
      clearLoginAttempts(cleanEmail);

      // Set current user session (şifre hariç)
      const sessionUser = { ...user, password: undefined };
      localStorage.setItem("steadyshell_current_user", JSON.stringify(sessionUser));

      // Redirect to learn page
      router.push("/learn");
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
    }
  };

  // Quick login for demo (no password check)
  const handleDemoLogin = () => {
    const demoUser = {
      id: 1,
      name: "Demo Kullanıcı",
      email: "demo@linguaflow.com",
      avatar: "D",
      createdAt: new Date().toISOString(),
      streak: 0,
      totalXp: 0,
      hearts: 5,
      completedLessons: [],
    };
    localStorage.setItem("steadyshell_current_user", JSON.stringify(demoUser));
    router.push("/learn");
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4">
      {/* Geri Dön Butonu */}
      <div className="absolute top-8 left-8">
        <Link href="/">
          <Button variant="ghost" className="font-bold text-slate-500 hover:text-indigo-600">
            <ArrowLeft className="mr-2 w-5 h-5" />Ana Sayfa
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md shadow-2xl shadow-indigo-200/50 border border-slate-100 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-center">
          <CardTitle className="text-3xl font-extrabold text-white tracking-wide">HOŞ GELDİN! 👋</CardTitle>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-5 p-8 bg-white">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-600 text-sm font-medium">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Email Adresi</Label>
              <Input
                type="email"
                placeholder="ornek@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-slate-600 font-bold uppercase text-xs">Şifre</Label>
                <button
                  type="button"
                  onClick={() => alert("Şifre sıfırlama özelliği yakında eklenecek!")}
                  className="text-xs text-indigo-500 hover:text-indigo-700 font-medium"
                >
                  Şifremi Unuttum
                </button>
              </div>
              <Input
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-lg py-6 rounded-2xl border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1 transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Giriş Yapılıyor...
                </span>
              ) : (
                "GİRİŞ YAP"
              )}
            </Button>

            {/* Demo Giriş */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-medium">veya</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleDemoLogin}
              className="w-full border-2 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold py-5 rounded-2xl"
            >
              🎮 Demo Hesabı ile Devam Et
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-medium">sosyal hesap</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => signIn("google", { callbackUrl: "/learn" })}
              className="w-full border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-5 rounded-2xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google ile Giriş Yap
            </Button>
          </CardContent>
        </form>
        <CardFooter className="justify-center bg-slate-50 p-6 border-t border-slate-100">
          <Link href="/register" className="text-slate-500 font-bold hover:text-indigo-600 transition uppercase text-sm">
            Hesabın yok mu? <span className="underline">Kayıt Ol</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return <LoginForm />;
}
