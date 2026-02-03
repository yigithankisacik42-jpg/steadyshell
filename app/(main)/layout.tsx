import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sol Sidebar - Masaüstünde görünür */}
      <Sidebar className="hidden lg:flex" />

      {/* Mobil Header - Sadece mobilde görünür */}
      <MobileHeader />

      {/* Ana İçerik Alanı */}
      <main className="flex-1 lg:pl-[256px] pt-14 pb-20 lg:pt-0 lg:pb-0">
        {children}
      </main>

      {/* Mobil Bottom Nav - Sadece mobilde görünür */}
      <MobileBottomNav />
    </div>
  );
}
