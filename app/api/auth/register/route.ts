import { NextResponse } from "next/server";
import { hashPassword, validatePassword, isValidEmail, sanitizeInput } from "@/lib/security";
import { db } from "@/lib/db";
import { checkRegisterRateLimit, getClientIP } from "@/lib/rate-limit";

export async function POST(req: Request) {
    try {
        // 🔒 Server-side rate limiting
        const clientIp = getClientIP(req);
        const rateLimitResult = checkRegisterRateLimit(clientIp);
        if (!rateLimitResult.success) {
            console.warn(`[Register] 🚫 Rate limit exceeded for IP: ${clientIp}`);
            return NextResponse.json(
                { message: `Çok fazla kayıt denemesi. ${Math.ceil(rateLimitResult.resetIn / 60)} dakika sonra tekrar deneyin.` },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(rateLimitResult.resetIn),
                        "X-RateLimit-Remaining": String(rateLimitResult.remaining),
                    }
                }
            );
        }

        const body = await req.json();
        const { name, email, password } = body;

        const cleanName = sanitizeInput(name);
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanName || !cleanEmail || !password) {
            return NextResponse.json(
                { message: "Eksik bilgi" },
                { status: 400 }
            );
        }

        if (!isValidEmail(cleanEmail)) {
            return NextResponse.json(
                { message: "Geçersiz email adresi" },
                { status: 400 }
            );
        }

        const passwordCheck = validatePassword(password);
        if (!passwordCheck.valid) {
            return NextResponse.json(
                { message: passwordCheck.message },
                { status: 400 }
            );
        }

        // Check if user exists
        const existingUser = await db.user.findUnique({
            where: { email: cleanEmail }
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "Bu email adresi zaten kullanımda" },
                { status: 409 }
            );
        }

        // Hash password and create user
        const hashedPassword = await hashPassword(password);

        const newUser = await db.user.create({
            data: {
                name: cleanName,
                email: cleanEmail,
                password: hashedPassword,
                avatar: cleanName.charAt(0).toUpperCase(),
                totalXp: 0,
                hearts: 5,
                streak: 0,
            }
        });

        console.log(`[Register] User created: ${newUser.email}, ID: ${newUser.id}`);

        return NextResponse.json(
            { message: "Hesap başarıyla oluşturuldu" },
            { status: 201 }
        );

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { message: "Sunucu hatası oluştu" },
            { status: 500 }
        );
    }
}
