import { handlers } from "@/auth"
import { getClientIP } from "@/lib/rate-limit"
import { NextRequest } from "next/server"

export const GET = handlers.GET

// POST handler'ı sarmalayarak client IP'yi credentials'a enjekte et
export async function POST(request: NextRequest) {
    const clientIp = getClientIP(request);

    // URL'yi klonla ve clientIp'yi inject et
    // NextAuth credentials flow'unda body form-data olarak gönderilir
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/x-www-form-urlencoded")) {
        // NextAuth signin request — body'yi oku ve clientIp ekle
        const body = await request.text();
        const params = new URLSearchParams(body);
        params.set("clientIp", clientIp);

        // Yeni request oluştur
        const newRequest = new NextRequest(request.url, {
            method: request.method,
            headers: request.headers,
            body: params.toString(),
        });

        return handlers.POST(newRequest);
    }

    // Diğer POST request'leri (örn. signout) olduğu gibi geçir
    return handlers.POST(request);
}
