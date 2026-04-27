import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const session = await auth();
        // Allow public access to leaderboard or require auth?
        // Let's require auth generally but maybe it's fine public.
        // For now, no strict check needed to VIEW leaderboard, but let's keep it safe.

        // Fetch top 50 users by XP
        const users = await db.user.findMany({
            take: 50,
            where: {
                totalXp: {
                    gt: 0 // Sadece aktif/puanı olan kullanıcıları göster
                }
            },
            orderBy: {
                totalXp: 'desc',
            },
            select: {
                id: true,
                name: true,
                avatar: true,
                totalXp: true,
                // If we had weeklyXp, we would use that.
            }
        });

        // Determine current user's ID
        const currentUserId = session?.user?.id;

        let leaderboardData = users.map((u, index) => ({
            rank: index + 1,
            name: u.name || "Gezgin",
            avatar: u.avatar || "👤",
            xp: u.totalXp,
            isCurrentUser: u.id === currentUserId
        }));

        // If user is logged in but not in Top 50, fetch their specific rank
        if (currentUserId && !leaderboardData.some(u => u.isCurrentUser)) {
            const currentUser = await db.user.findUnique({
                where: { id: currentUserId },
                select: { totalXp: true, name: true, avatar: true }
            });

            if (currentUser && currentUser.totalXp > 0) {
                const rank = await db.user.count({
                    where: {
                        totalXp: {
                            gt: currentUser.totalXp
                        }
                    }
                });

                leaderboardData.push({
                    rank: rank + 1,
                    name: currentUser.name || "Gezgin",
                    avatar: currentUser.avatar || "👤",
                    xp: currentUser.totalXp,
                    isCurrentUser: true
                });
            }
        }

        return NextResponse.json(leaderboardData);

    } catch (error) {
        console.error("Leaderboard error:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}
