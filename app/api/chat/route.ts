import { NextRequest, NextResponse } from 'next/server';
import { auth } from "@/auth";
import { checkChatRateLimit, getClientIP } from "@/lib/rate-limit";

// API anahtarı güvenli şekilde sunucu tarafında (sadece .env.local'dan)
const GROQ_API_KEY = process.env.GROQ_API_KEY;

export async function POST(request: NextRequest) {
    try {
        // 🔒 Auth kontrolü — sadece giriş yapmış kullanıcılar
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json(
                { error: "Oturum açmanız gerekiyor" },
                { status: 401 }
            );
        }

        // 🔒 Server-side rate limiting
        const clientIp = getClientIP(request);
        const rateLimitResult = checkChatRateLimit(clientIp);
        if (!rateLimitResult.success) {
            return NextResponse.json(
                { error: `Çok fazla istek. ${rateLimitResult.resetIn} saniye bekleyin.` },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(rateLimitResult.resetIn),
                        "X-RateLimit-Remaining": String(rateLimitResult.remaining),
                    }
                }
            );
        }

        const body = await request.json();
        const { messages, model = "llama-3.3-70b-versatile" } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Messages array is required" },
                { status: 400 }
            );
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model,
                messages,
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json(
                { error: errorData.error?.message || "API request failed" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
