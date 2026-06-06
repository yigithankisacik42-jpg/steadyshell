import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface QuizResult {
  weaknessId: string | null;
  wasCorrect: boolean;
}

// POST — Process adaptive quiz results and update weakness records
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await req.json();
    const { results } = body as { results: QuizResult[] };

    if (!results || !Array.isArray(results)) {
      return NextResponse.json(
        { error: "Missing required field: results (array)" },
        { status: 400 }
      );
    }

    let totalCorrect = 0;
    let totalWrong = 0;
    const resolvedTopics: string[] = [];

    for (const result of results) {
      if (result.wasCorrect) {
        totalCorrect++;
      } else {
        totalWrong++;
      }

      // Only update weakness records if weaknessId is provided
      if (!result.weaknessId) continue;

      // Verify the weakness belongs to this user
      const weakness = await db.userWeakness.findFirst({
        where: {
          id: result.weaknessId,
          userId: user.id,
        },
      });

      if (!weakness) continue;

      if (result.wasCorrect) {
        const newStreak = weakness.correctStreak + 1;
        const isResolved = newStreak >= 3;

        await db.userWeakness.update({
          where: { id: weakness.id },
          data: {
            correctStreak: newStreak,
            resolved: isResolved,
            lastSeen: new Date(),
          },
        });

        if (isResolved) {
          resolvedTopics.push(weakness.topic);
        }
      } else {
        await db.userWeakness.update({
          where: { id: weakness.id },
          data: {
            correctStreak: 0,
            wrongCount: { increment: 1 },
            lastSeen: new Date(),
          },
        });
      }
    }

    return NextResponse.json({
      resolvedTopics,
      totalCorrect,
      totalWrong,
    });
  } catch (error) {
    console.error("[ADAPTIVE_QUIZ_RESULT]", error);
    const msg = error instanceof Error ? error.message : "Internal Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
