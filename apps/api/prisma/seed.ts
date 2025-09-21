import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  await prisma.booking.deleteMany();
  await prisma.slot.deleteMany();
  await prisma.mentor.deleteMany();
  await prisma.user.deleteMany();

  const users = await prisma.user.createMany({
    data: [
      {
        id: randomUUID(),
        email: "alice.mentor@example.com",
        passwordHash: "hash1",
        username: "alice",
        role: "MENTOR",
      },
      {
        id: randomUUID(),
        email: "bob.mentor@example.com",
        passwordHash: "hash2",
        username: "bob",
        role: "MENTOR",
      },
      {
        id: randomUUID(),
        email: "carol.mentor@example.com",
        passwordHash: "hash3",
        username: "carol",
        role: "MENTOR",
      },
      {
        id: randomUUID(),
        email: "david.mentee@example.com",
        passwordHash: "hash4",
        username: "david",
        role: "MENTEE",
      },
    ],
  });

  const alice = await prisma.user.findUnique({ where: { username: "alice" } });
  const bob = await prisma.user.findUnique({ where: { username: "bob" } });
  const carol = await prisma.user.findUnique({ where: { username: "carol" } });
  const david = await prisma.user.findUnique({ where: { username: "david" } });

  const mentors = await prisma.mentor.createMany({
    data: [
      {
        id: randomUUID(),
        userId: alice!.id,
        bio: "Especialista em React e Frontend",
        rating: 4.8,
      },
      {
        id: randomUUID(),
        userId: bob!.id,
        bio: "Engenheiro Fullstack com foco em Node.js",
        rating: 4.2,
      },
      {
        id: randomUUID(),
        userId: carol!.id,
        bio: "Especialista em arquitetura de software",
        rating: 4.9,
      },
    ],
  });

  const mentorAlice = await prisma.mentor.findFirst({ where: { userId: alice!.id } });
  const mentorBob = await prisma.mentor.findFirst({ where: { userId: bob!.id } });
  const mentorCarol = await prisma.mentor.findFirst({ where: { userId: carol!.id } });

  const slots = await prisma.slot.createMany({
    data: [
      {
        id: randomUUID(),
        mentorId: mentorAlice!.id,
        startAt: new Date("2025-09-20T10:00:00Z"),
        endAt: new Date("2025-09-20T11:00:00Z"),
      },
      {
        id: randomUUID(),
        mentorId: mentorBob!.id,
        startAt: new Date("2025-09-21T14:00:00Z"),
        endAt: new Date("2025-09-21T15:00:00Z"),
      },
      {
        id: randomUUID(),
        mentorId: mentorCarol!.id,
        startAt: new Date("2025-09-22T16:00:00Z"),
        endAt: new Date("2025-09-22T17:00:00Z"),
      },
    ],
  });

  const slotAlice = await prisma.slot.findFirst({ where: { mentorId: mentorAlice!.id } });

  if (slotAlice && david) {
    await prisma.booking.create({
      data: {
        id: randomUUID(),
        slotId: slotAlice.id,
        userId: david.id,
        status: "CONFIRMED",
        createdAt: new Date(),
        paidAt: new Date(),
      },
    });
  }

  console.log("✅ Seed concluída!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
