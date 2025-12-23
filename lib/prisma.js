import { PrismaClient } from "@prisma/client";

// Singleton pour éviter de créer plusieurs instances de PrismaClient en développement
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
