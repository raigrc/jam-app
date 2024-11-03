import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const filters = String(req.nextUrl.searchParams.get("company_name") || "");

  try {
    const filteredLeads = await prisma.leads.findMany({
      where: {
        company_name: {
          contains: filters,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
      include: {
        JobApplication: true,
      },
    });

    return NextResponse.json({ filteredLeads });
  } catch (error) {
    console.error("Network error:", error);
  }
};
