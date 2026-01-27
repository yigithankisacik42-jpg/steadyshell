"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, AlertCircle, Check, Shield, User, Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
import { hashPassword, validatePassword, sanitizeInput, isValidEmail } from "@/lib/security";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<string[]>([]);

  const checkPasswordStrength = (pwd: string) => {
    const checks: string[] = [];
    if (pwd.length >= 8) checks.push("length");
    if (/[A-Z]/.test(pwd)) checks.push("uppercase");
    if (/[a-z]/.test(pwd)) checks.push("lowercase");
    if (/[0-9]/.test(pwd)) checks.push("number");
    setPasswordStrength(checks);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanName = sanitizeInput(name);
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setError("Lütfen adınızı girin");
      return;
    }
    if (!isValidEmail(cleanEmail)) {
      setError("Geçerli bir email adresi girin");
      return;
    }

    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      setError(passwordCheck.message);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Kayıt işlemi başarısız");
        setIsLoading(false);
        return;
      }

      // Auto login after registration
      const result = await signIn("credentials", {
        redirect: false,
        email: cleanEmail,
        password: password,
      });

      if (result?.error) {
        setError("Giriş yapılırken bir sorun oluştu, lütfen giriş yapın.");
        router.push("/login");
      } else {
        router.push("/onboarding");
      }

    } catch (err) {
      setError("Bir hata oluştu.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden selection:bg-indigo-500/30">

      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[0%] w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse mix-blend-screen" style={{ animationDelay: '3s' }} />
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
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">Aramıza Katıl! 🚀</h1>
            <p className="text-slate-400 font-medium">Yeni bir dil öğrenme yolculuğuna başla.</p>
          </div>

          {/* --- GLASS CARD --- */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">

            {/* Decorative border gradient on hover */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <form onSubmit={handleRegister} className="space-y-4">
              {error && (
                <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-sm font-bold animate-shake">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider ml-1">Ad Soyad</Label>
                <div className="relative group/input">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                  <Input
                    type="text"
                    placeholder="Adın ne?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 pl-12 bg-slate-900/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 rounded-xl transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider ml-1">Email</Label>
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
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
                <Label className="text-slate-300 text-xs font-bold uppercase tracking-wider ml-1">Şifre</Label>
                <div className="relative group/input">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                  <Input
                    type="password"
                    placeholder="En az 6 karakter"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      checkPasswordStrength(e.target.value);
                    }}
                    className="h-12 pl-12 bg-slate-900/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 rounded-xl transition-all"
                  />
                </div>
                {/* Password strength dots if needed, keeping simple for now */}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95 border-t border-white/10 mt-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : "Ücretsiz Hesap Oluştur"}
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest"><span className="bg-[#0f1118] bg-opacity-0 px-2 text-slate-500 backdrop-blur-3xl">veya</span></div>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => signIn("google", { callbackUrl: "/learn" })}
                className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white h-12 rounded-xl"
              >
                <span className="mr-2">G</span> Google ile Kayıt Ol
              </Button>
            </form>
          </div>

          <div className="text-center mt-6">
            <p className="text-slate-400 text-sm font-medium">
              Zaten hesabın var mı?{" "}
              <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors inline-flex items-center gap-1 group">
                Giriş Yap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}