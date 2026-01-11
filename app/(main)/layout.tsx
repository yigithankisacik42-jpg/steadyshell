import { Sidebar } from "@/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sol Sidebar - Masaüstünde görünür */}
      <Sidebar className="hidden lg:flex" />

      {/* Ana İçerik Alanı */}
      <main className="flex-1 lg:pl-[256px]">
        {children}
      </main>
    </div>
  );
}