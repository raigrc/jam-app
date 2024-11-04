import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page") || 1);
  try {
    const [application, total] = await Promise.all([
      prisma.leads.findMany({
        where: {
          isApplied: true,
        },
        skip: (page - 1) * 10,
        take: 10,
        orderBy: { updatedAt: "desc" },
        include: {
          JobApplication: true,
        },
      }),
      prisma.leads.count({}),
    ]);

    return NextResponse.json({
      application,
      pagination: { page, totalPages: Math.ceil(total / 10) },
    });
  } catch (error) {
    console.error("Error getting job applications from api", error);
  }
};
