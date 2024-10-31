import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const platforms = await prisma.platforms.findMany({
      orderBy: { platform: "desc" },
    });

    return NextResponse.json({ platforms });
  } catch (error) {
    console.error("Unexpected error fetching data", error);
  }
};
