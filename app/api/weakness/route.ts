import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// POST — Save a new weakness or increment wrongCount if it exists
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
    const {
      language,
      level,
      category,
      topic,
      originalQuestion,
      correctAnswer,
      userAnswer,
    } = body;

    if (!language || !level || !category || !topic) {
      return NextResponse.json(
        { error: "Missing required fields: language, level, category, topic" },
        { status: 400 }
      );
    }

    const weakness = await db.userWeakness.upsert({
      where: {
        userId_language_topic_originalQuestion: {
          userId: user.id,
          language,
          topic,
          originalQuestion: originalQuestion || "",
        },
      },
      update: {
        wrongCount: { increment: 1 },
        correctStreak: 0,
        lastSeen: new Date(),
        resolved: false,
        correctAnswer: correctAnswer || undefined,
        userAnswer: userAnswer || undefined,
      },
      create: {
        userId: user.id,
        language,
        level,
        category,
        topic,
        originalQuestion: originalQuestion || "",
        correctAnswer: correctAnswer || null,
        userAnswer: userAnswer || null,
        wrongCount: 1,
        correctStreak: 0,
        resolved: false,
      },
    });

    return NextResponse.json(weakness);
  } catch (error) {
    console.error("[WEAKNESS_POST]", error);
    const msg = error instanceof Error ? error.message : "Internal Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// GET — Return active weaknesses grouped by category + progress stats
export async function GET(req: Request) {
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

    // Parse optional language filter from query params
    const { searchParams } = new URL(req.url);
    const language = searchParams.get("language");

    const whereClause = {
      userId: user.id,
      resolved: false,
      ...(language ? { language } : {}),
    };

    const weaknesses = await db.userWeakness.findMany({
      where: whereClause,
      orderBy: { wrongCount: "desc" as const },
    });

    // Count resolved weaknesses for progress display
    const resolvedCount = await db.userWeakness.count({
      where: {
        userId: user.id,
        resolved: true,
        ...(language ? { language } : {}),
      },
    });

    const totalCount = await db.userWeakness.count({
      where: {
        userId: user.id,
        ...(language ? { language } : {}),
      },
    });

    return NextResponse.json({
      weaknesses,
      resolvedCount,
      totalCount,
    });
  } catch (error) {
    console.error("[WEAKNESS_GET]", error);
    const msg = error instanceof Error ? error.message : "Internal Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
