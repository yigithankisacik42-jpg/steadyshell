import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HeartsProvider } from "@/lib/hearts-context";
import { UserProgressProvider } from "@/contexts/user-progress-context";
import { QuestsProvider } from "@/lib/quests-context";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { OfflineIndicator } from "@/components/offline-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SteadyShell",
    template: "%s | SteadyShell",
  },
  description: "Ücretsiz dil öğrenme uygulaması",
  manifest: "/manifest.json",
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
        <LanguageProvider>
          <HeartsProvider>
            <UserProgressProvider>
              <QuestsProvider>
                <ServiceWorkerRegistration />
                <OfflineIndicator />
                {children}
              </QuestsProvider>
            </UserProgressProvider>
          </HeartsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}