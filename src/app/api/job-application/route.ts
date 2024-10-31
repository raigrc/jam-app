import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const leads = await prisma.leads.findMany({
      where: {
        isApplied: true,
      },
      orderBy: { updatedAt: "desc" },
      include: {
        JobApplication: true,
      },
    });

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Error getting job applications from api", error);
  }
};
