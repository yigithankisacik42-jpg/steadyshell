const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  try {
    const users = await prisma.user.findMany();
    console.log('Total users in DB:', users.length);
    users.forEach(u => {
      console.log(`User: ${u.name} | Email: ${u.email} | XP: ${u.totalXp} | Streak: ${u.streak} | LastActive: ${u.lastActiveDate}`);
    });
  } catch (error) {
    console.error('Error querying users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

check();
