import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const leads = await prisma.leads.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Error fetching data", error);
    return NextResponse.json({ error: "Failed fetching data" });
  }
};
