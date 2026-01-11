'use client';

import Link from "next/link";
import { WifiOff, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-6">
                {/* İkon */}
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <WifiOff className="w-12 h-12 text-white" />
                </div>

                {/* Başlık */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Çevrimdışısınız
                    </h1>
                    <p className="text-slate-600">
                        İnternet bağlantınız yok gibi görünüyor.
                        Daha önce ziyaret ettiğiniz sayfalar hâlâ erişilebilir olabilir.
                    </p>
                </div>

                {/* Bilgi Kutusu */}
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-left">
                    <h3 className="font-semibold text-violet-800 mb-2">💡 İpucu</h3>
                    <p className="text-sm text-violet-700">
                        SteadyShell, ziyaret ettiğiniz dersleri otomatik olarak kaydeder.
                        İnternet olmadan da önceki derslerinize erişebilirsiniz!
                    </p>
                </div>

                {/* Butonlar */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                        onClick={() => window.location.reload()}
                        className="bg-violet-600 hover:bg-violet-700"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Tekrar Dene
                    </Button>

                    <Link href="/">
                        <Button variant="outline" className="w-full sm:w-auto">
                            <Home className="w-4 h-4 mr-2" />
                            Ana Sayfa
                        </Button>
                    </Link>
                </div>

                {/* Alt Bilgi */}
                <p className="text-xs text-slate-500">
                    Bağlantınız geri geldiğinde sayfa otomatik olarak yenilenecektir.
                </p>
            </div>
        </div>
    );
}
