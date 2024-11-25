import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined //eslint-disable-line no-var
}

export const database = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = database;
}