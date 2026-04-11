import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// ===== GÜVENLIK SABİTLERİ =====
const MAX_XP_PER_REQUEST = 30;      // Bir istekte max kazanılabilecek XP
const MAX_STREAK = 3650;            // Makul maksimum seri (10 yıl)
const MAX_LEVEL = 200;              // Maksimum seviye

/**
 * Level hesapla — XP'ye göre sunucu tarafında hesaplanır
 */
function calculateLevel(totalXp: number): number {
    if (totalXp < 50) return 1;
    if (totalXp < 150) return 2;
    if (totalXp < 300) return 3;
    if (totalXp < 500) return 4;
    if (totalXp < 800) return 5;
    if (totalXp < 1200) return 6;
    if (totalXp < 1700) return 7;
    if (totalXp < 2500) return 8;
    if (totalXp < 3500) return 9;
    if (totalXp < 5000) return 10;
    // sonraki seviyeler her 1000 XP'de bir
    return Math.min(MAX_LEVEL, 10 + Math.floor((totalXp - 5000) / 1000));
}

/**
 * Streak hesapla — sunucu tarafında lastActiveDate'e göre
 */
function calculateStreak(currentStreak: number, lastActiveDate: Date | null): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!lastActiveDate) {
        return 1; // İlk aktif gün
    }

    const lastDate = new Date(lastActiveDate);
    lastDate.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - lastDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        // Bugün zaten aktifti, streak değişmez
        return currentStreak;
    } else if (diffDays === 1) {
        // Art arda gün, streak artar
        return Math.min(currentStreak + 1, MAX_STREAK);
    } else {
        // 1 günden fazla ara verilmiş, streak sıfırlanır
        return 1;
    }
}

// ===== GET: Kullanıcı verilerini getir =====
export async function GET() {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const user = await db.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!user) {
            // Lazy creation: Oturum var ama DB'de kullanıcı yok — oluştur
            const newUser = await db.user.create({
                data: {
                    email: session.user.email,
                    name: session.user.name || "Gezgin",
                    avatar: session.user.image,
                },
            });
            return NextResponse.json(newUser);
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("[USER_PROGRESS_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

// ===== POST: Kullanıcı ilerlemesini güncelle (GÜVENLİ) =====
export async function POST(req: Request) {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const body = await req.json();
        const { action } = body;

        // Önce mevcut kullanıcıyı DB'den al
        const user = await db.user.findUnique({
            where: { email: session.user.email },
        });

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        // ===== AKSİYON BAZLI GÜNCELLEME =====
        switch (action) {
            // --- XP Ekleme ---
            case "add_xp": {
                const amount = body.amount;

                // Tip kontrolü
                if (typeof amount !== "number" || !Number.isInteger(amount)) {
                    return NextResponse.json(
                        { error: "amount must be an integer" },
                        { status: 400 }
                    );
                }

                // Sınır kontrolü
                if (amount < 0 || amount > MAX_XP_PER_REQUEST) {
                    console.warn(`[Security] Suspicious XP request: ${amount} from ${session.user.email}`);
                    return NextResponse.json(
                        { error: `XP must be between 0 and ${MAX_XP_PER_REQUEST}` },
                        { status: 400 }
                    );
                }

                const newTotalXp = user.totalXp + amount;
                const newLevel = calculateLevel(newTotalXp);

                const updatedUser = await db.user.update({
                    where: { email: session.user.email },
                    data: {
                        totalXp: newTotalXp,
                        level: newLevel,
                    },
                });

                return NextResponse.json(updatedUser);
            }

            // --- Ders Tamamlama (streak güncelle) ---
            case "complete_lesson": {
                const newStreak = calculateStreak(user.streak, user.lastActiveDate);

                const updatedUser = await db.user.update({
                    where: { email: session.user.email },
                    data: {
                        streak: newStreak,
                        lastActiveDate: new Date(),
                    },
                });

                return NextResponse.json(updatedUser);
            }

            // --- Bilinmeyen aksiyon ---
            default: {
                return NextResponse.json(
                    { error: "Invalid action. Supported: add_xp, complete_lesson" },
                    { status: 400 }
                );
            }
        }
    } catch (error) {
        console.error("[USER_PROGRESS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
