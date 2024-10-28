import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const [leads, jobApp] = [
      await prisma.leads.findMany({
        where: {
          isApplied: true,
        },
        orderBy: { updatedAt: "desc" },
        include: {
          JobApplication: true,
        },
      }),
      await prisma.jobApplication.findMany({}),
    ];

    return NextResponse.json({ leads, jobApp });
  } catch (error) {
    console.error("Error getting job applications from api", error);
  }
};
