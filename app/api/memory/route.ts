import { NextResponse } from 'next/server';
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        let memory = await db.userMemory.findUnique({
            where: { userId: session.user.id }
        });

        if (!memory) {
            memory = await db.userMemory.create({
                data: { userId: session.user.id }
            });
        }

        return NextResponse.json(memory);
    } catch (error) {
        console.error("GET Memory Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        
        const memory = await db.userMemory.upsert({
            where: { userId: session.user.id },
            update: {
                hobbies: body.hobbies !== undefined ? body.hobbies : undefined,
                weaknesses: body.weaknesses !== undefined ? body.weaknesses : undefined,
                profession: body.profession !== undefined ? body.profession : undefined,
                goals: body.goals !== undefined ? body.goals : undefined,
                notes: body.notes !== undefined ? body.notes : undefined,
            },
            create: {
                userId: session.user.id,
                hobbies: body.hobbies,
                weaknesses: body.weaknesses,
                profession: body.profession,
                goals: body.goals,
                notes: body.notes,
            }
        });

        return NextResponse.json(memory);
    } catch (error) {
        console.error("POST Memory Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
