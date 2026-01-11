"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Check, Shield } from "lucide-react";
import { hashPassword, validatePassword, sanitizeInput, isValidEmail } from "@/lib/security";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<string[]>([]);

  // Şifre gücü göstergesi
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

    // Sanitize inputs
    const cleanName = sanitizeInput(name);
    const cleanEmail = email.trim().toLowerCase();

    // Validation
    if (!cleanName) {
      setError("Lütfen adınızı girin");
      return;
    }
    if (!isValidEmail(cleanEmail)) {
      setError("Geçerli bir email adresi girin");
      return;
    }

    // Güçlü şifre validasyonu
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      setError(passwordCheck.message);
      return;
    }

    setIsLoading(true);

    try {
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem("steadyshell_users") || "[]");
      const userExists = existingUsers.some((u: { email: string }) => u.email === cleanEmail);

      if (userExists) {
        setError("Bu email zaten kayıtlı");
        setIsLoading(false);
        return;
      }

      // 🔒 Şifreyi hashle
      const hashedPassword = await hashPassword(password);

      // Create new user with hashed password
      const newUser = {
        id: Date.now(),
        name: cleanName,
        email: cleanEmail,
        password: hashedPassword, // 🔒 Hash olarak saklanıyor
        avatar: cleanName.charAt(0).toUpperCase(),
        createdAt: new Date().toISOString(),
        streak: 0,
        totalXp: 0,
        hearts: 5,
        completedLessons: [],
      };

      // Save to users list
      existingUsers.push(newUser);
      localStorage.setItem("steadyshell_users", JSON.stringify(existingUsers));

      // Set current user session (şifre hariç)
      const sessionUser = { ...newUser, password: undefined };
      localStorage.setItem("steadyshell_current_user", JSON.stringify(sessionUser));

      // Redirect to onboarding page
      router.push("/onboarding");
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4">
      <div className="absolute top-8 left-8">
        <Link href="/">
          <Button variant="ghost" className="font-bold text-slate-500 hover:text-violet-600">
            <ArrowLeft className="mr-2 w-5 h-5" />Ana Sayfa
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md shadow-2xl shadow-violet-200/50 border border-slate-100 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-center">
          <CardTitle className="text-3xl font-extrabold text-white tracking-wide">BAŞLAYALIM! 🚀</CardTitle>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-5 p-8 bg-white">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-600 text-sm font-medium">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Ad Soyad</Label>
              <Input
                type="text"
                placeholder="Adın ne?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-slate-50 border-2 focus-visible:ring-violet-500 font-medium rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Email</Label>
              <Input
                type="email"
                placeholder="mail@ornek.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-slate-50 border-2 focus-visible:ring-violet-500 font-medium rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Şifre</Label>
              <Input
                type="password"
                placeholder="En az 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-slate-50 border-2 focus-visible:ring-violet-500 font-medium rounded-xl"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold text-lg py-6 rounded-2xl border-b-4 border-violet-800 active:border-b-0 active:translate-y-1 transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Hesap Oluşturuluyor...
                </span>
              ) : (
                "HESAP OLUŞTUR"
              )}
            </Button>
          </CardContent>
        </form>
        <CardFooter className="justify-center bg-slate-50 p-6 border-t border-slate-100">
          <Link href="/login" className="text-slate-500 font-bold hover:text-violet-600 transition uppercase text-sm">
            Zaten hesabın var mı? <span className="underline">Giriş Yap</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}