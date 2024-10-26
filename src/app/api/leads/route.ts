import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;

  try {
    const [leads, total] = await Promise.all([
      prisma.leads.findMany({
        skip: (page - 1) * 10,
        take: 10,
        orderBy: { createdAt: "desc" },
      }),
      prisma.leads.count(),
    ]);

    return NextResponse.json({
      leads,
      pagination: { page, total, totalPages: Math.ceil(total / 10) },
    });
  } catch (error) {
    console.error("Error fetching data", error);
    return NextResponse.json({ error: "Failed fetching data" });
  }
};
