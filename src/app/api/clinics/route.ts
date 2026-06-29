import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") ?? undefined;
  const type = searchParams.get("type") ?? undefined;
  const q = searchParams.get("q") ?? undefined;

  const where: Prisma.ClinicWhereInput = { isPublished: true };
  if (city) where.city = { equals: city, mode: "insensitive" };
  if (type) where.type = type as Prisma.ClinicWhereInput["type"];
  if (q) where.name = { contains: q, mode: "insensitive" };

  const clinics = await prisma.clinic.findMany({
    where,
    select: {
      id: true, slug: true, name: true, type: true, city: true,
      coverImage: true, rating: true, reviewCount: true, isVerified: true,
    },
    orderBy: { rating: "desc" },
    take: 60,
  });

  return NextResponse.json({ clinics });
}
