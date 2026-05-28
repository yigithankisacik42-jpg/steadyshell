import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const user = await db.user.findUnique({
      where: { email: session.user.email },
      include: { memory: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    let backpack: string[] = [];
    let plainNotes = user.memory?.notes || "";

    if (user.memory?.notes) {
      try {
        const notesObj = JSON.parse(user.memory.notes);
        if (notesObj && typeof notesObj === "object") {
          backpack = notesObj.backpack || [];
          plainNotes = notesObj.plainNotes || "";
        }
      } catch (e) {
        // Plain text, keep plainNotes as the raw string
      }
    }

    return NextResponse.json({
      name: user.name || "",
      profession: user.memory?.profession || "",
      hobbies: user.memory?.hobbies || "",
      weaknesses: user.memory?.weaknesses || "",
      goals: user.memory?.goals || "",
      notes: plainNotes,
      backpack: backpack,
    });
  } catch (error) {
    console.error("[SHELLDON_MEMORY_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await req.json();
    const { name, profession, hobbies, weaknesses, goals, notes } = body;

    const user = await db.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    if (typeof name === "string") {
      await db.user.update({
        where: { email: session.user.email },
        data: { name },
      });
    }

    // Preserve existing backpack JSON array
    const existing = await db.userMemory.findUnique({
      where: { userId: user.id },
    });

    let backpack: string[] = [];
    if (existing?.notes) {
      try {
        const notesObj = JSON.parse(existing.notes);
        if (notesObj && Array.isArray(notesObj.backpack)) {
          backpack = notesObj.backpack;
        }
      } catch (e) {
        // Not JSON
      }
    }

    const notesJson = JSON.stringify({
      plainNotes: notes ?? "",
      backpack: backpack,
    });

    const updatedMemory = await db.userMemory.upsert({
      where: { userId: user.id },
      update: {
        profession: profession ?? null,
        hobbies: hobbies ?? null,
        weaknesses: weaknesses ?? null,
        goals: goals ?? null,
        notes: notesJson,
      },
      create: {
        userId: user.id,
        profession: profession ?? null,
        hobbies: hobbies ?? null,
        weaknesses: weaknesses ?? null,
        goals: goals ?? null,
        notes: notesJson,
      },
    });

    return NextResponse.json({
      name: name ?? user.name ?? "",
      profession: updatedMemory.profession || "",
      hobbies: updatedMemory.hobbies || "",
      weaknesses: updatedMemory.weaknesses || "",
      goals: updatedMemory.goals || "",
      notes: notes ?? "",
      backpack: backpack,
    });
  } catch (error) {
    console.error("[SHELLDON_MEMORY_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE() {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const user = await db.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    await db.userMemory.deleteMany({
      where: { userId: user.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[SHELLDON_MEMORY_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
