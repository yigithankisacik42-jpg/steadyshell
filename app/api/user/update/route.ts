import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { hashPassword, verifyPassword, validatePassword, isValidEmail, sanitizeInput } from "@/lib/security";

export async function PUT(req: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ message: "Oturum açmanız gerekiyor" }, { status: 401 });
        }

        const body = await req.json();
        const { name, email, currentPassword, newPassword } = body;

        const cleanName = sanitizeInput(name);
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanName || !cleanEmail) {
            return NextResponse.json({ message: "İsim ve Email zorunludur" }, { status: 400 });
        }

        if (!isValidEmail(cleanEmail)) {
            return NextResponse.json({ message: "Geçersiz email formatı" }, { status: 400 });
        }

        // Get current user from DB to check password and email uniqueness
        const user = await db.user.findUnique({
            where: { id: session.user.id }
        });

        if (!user) {
            return NextResponse.json({ message: "Kullanıcı bulunamadı" }, { status: 404 });
        }

        // Check if email is being changed and if it's already taken
        if (cleanEmail !== user.email) {
            const existingUser = await db.user.findUnique({
                where: { email: cleanEmail }
            });
            if (existingUser) {
                return NextResponse.json({ message: "Bu email kullanımda" }, { status: 409 });
            }
        }

        const updateData: any = {
            name: cleanName,
            email: cleanEmail,
            avatar: cleanName.charAt(0).toUpperCase(),
        };

        // Handle Password Change
        if (newPassword) {
            console.log("[Profile Update] Password change requested");

            if (!currentPassword) {
                return NextResponse.json({ message: "Şifre değiştirmek için mevcut şifrenizi girmelisiniz" }, { status: 400 });
            }

            // Verify current password
            if (!user.password) {
                return NextResponse.json({ message: "Mevcut bir şifreniz yok." }, { status: 400 });
            }

            const isCurrentValid = await verifyPassword(currentPassword, user.password);
            if (!isCurrentValid) {
                console.log("[Profile Update] Current password mismatch");
                return NextResponse.json({ message: "Mevcut şifre hatalı" }, { status: 403 });
            }

            // Validate new password
            const passwordCheck = validatePassword(newPassword);
            if (!passwordCheck.valid) {
                return NextResponse.json({ message: passwordCheck.message }, { status: 400 });
            }

            const newHash = await hashPassword(newPassword);
            updateData.password = newHash;
            console.log(`[Profile Update] New password hashed. Length: ${newHash.length}`);
        }

        // Update User
        const updatedUser = await db.user.update({
            where: { id: session.user.id },
            data: updateData
        });

        console.log("[Profile Update] User updated successfully");

        return NextResponse.json({
            message: "Profil güncellendi",
            user: {
                name: updatedUser.name,
                email: updatedUser.email,
                avatar: updatedUser.avatar
            }
        });

    } catch (error) {
        console.error("Profile update error:", error);
        return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
    }
}
