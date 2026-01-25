import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
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
            // Lazy creation: If user doesn't exist in DB but has a session, create them
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

export async function POST(req: Request) {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const body = await req.json();
        const { totalXp, level, hearts, streak, lastActiveDate } = body;

        const updatedUser = await db.user.update({
            where: {
                email: session.user.email,
            },
            data: {
                totalXp,
                level,
                hearts,
                streak,
                lastActiveDate: lastActiveDate ? new Date(lastActiveDate) : undefined,
            },
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("[USER_PROGRESS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
