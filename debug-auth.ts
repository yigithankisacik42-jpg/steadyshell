
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log("--- AUTH DEBUGGER STARTED ---");

    const email = "debug_test_user@example.com";
    const password = "TestPassword123!";

    console.log(`1. Testing credentials: ${email} / ${password}`);

    // 1. Cleanup old test user
    try {
        await prisma.user.deleteMany({ where: { email } });
        console.log("2. Cleaned up old test user");
    } catch (e) {
        console.log("2. Cleanup warning (might not exist):", e);
    }

    // 2. Hash Password
    console.log("3. Hashing password...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`   - Raw: ${password}`);
    console.log(`   - Hashed: ${hashedPassword}`);

    // 3. Save to DB
    console.log("4. Saving to database...");
    const user = await prisma.user.create({
        data: {
            name: "Debug User",
            email: email,
            password: hashedPassword,
            avatar: "D"
        }
    });
    console.log(`   - User created with ID: ${user.id}`);
    console.log(`   - Stored Hash: ${user.password}`);

    // 4. Verification Check
    console.log("5. Verifying password...");

    // Direct bcrypt check
    const isMatch = await bcrypt.compare(password, user.password || "");
    console.log(`   - bcrypt.compare('${password}', '${user.password?.substring(0, 10)}...') result: ${isMatch}`);

    if (isMatch) {
        console.log("✅ SUCCESS: Password hashing and verification is working correctly!");
    } else {
        console.error("❌ FAILURE: Password verification failed!");
        if (hashedPassword !== user.password) {
            console.error("   - CRITICAL: Stored hash does not match generated hash! Database corruption or truncation?");
        }
    }

    console.log("--- AUTH DEBUGGER FINISHED ---");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
