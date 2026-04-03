import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HeartsProvider } from "@/lib/hearts-context";
import { UserProgressProvider } from "@/contexts/user-progress-context";
import { QuestsProvider } from "@/lib/quests-context";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { OfflineIndicator } from "@/components/offline-indicator";
import { AuthProvider } from "@/components/auth-provider";
import { ShelldonProvider } from "@/contexts/shelldon-context";
import { ShelldonBubble } from "@/components/shelldon-bubble";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SteadyShell | Dil Öğrenmenin En Akıllı Yolu",
    template: "%s | SteadyShell",
  },
  description: "Yapay zeka asistanı Shelldon ile İspanyolca, Fransızca ve İngilizceyi eğlenerek öğrenin. Ücretsiz ve etkili dil eğitimi.",
  keywords: ["dil öğrenme", "ispanyolca", "ingilizce", "fransızca", "yapay zeka", "tutor", "eğitim"],
  manifest: "/manifest.json",
  authors: [{ name: "SteadyShell Team" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://steadyshell.com",
    title: "SteadyShell - Akıllı Dil Öğrenme Platformu",
    description: "Shelldon ile tanışın, dil öğrenme yolculuğunuzda size eşlik etsin.",
    siteName: "SteadyShell",
  },
  twitter: {
    card: "summary_large_image",
    title: "SteadyShell - Akıllı Dil Öğrenme",
    description: "Yapay zeka ile dil öğrenme deneyimi.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SteadyShell",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <LanguageProvider>
            <HeartsProvider>
              <UserProgressProvider>
                <QuestsProvider>
                  <ShelldonProvider>
                    <ServiceWorkerRegistration />
                    <OfflineIndicator />
                    {children}
                    <ShelldonBubble />
                  </ShelldonProvider>
                </QuestsProvider>
              </UserProgressProvider>
            </HeartsProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}