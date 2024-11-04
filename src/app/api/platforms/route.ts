import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const platforms = await prisma.platforms.findMany({
      orderBy: { platform: "asc" },
    });

    return NextResponse.json({ platforms });
  } catch (error) {
    console.error("Unexpected error fetching data", error);
  }
};
