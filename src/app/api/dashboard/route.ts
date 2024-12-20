import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const [pr, leads, applications] = await Promise.all([
      prisma.jobApplication.count({
        where: {
          updatedAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
          createdAt: {
            lt: prisma.jobApplication.fields.updatedAt,
          },
        },
      }),
      prisma.leads.count({}),
      prisma.jobApplication.count({}),
    ]);

    return NextResponse.json({ count: { pr, leads, applications } });
  } catch (error) {
    console.error("Unexpected error on fetching data", error);
    return NextResponse.json({ error: "Network error" });
  }
};
