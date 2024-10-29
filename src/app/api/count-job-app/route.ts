import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const count = await prisma.jobApplication.count({
      where: {
        updatedAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Unexpected error on fetching data", error);
  }
};
