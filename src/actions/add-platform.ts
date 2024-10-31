"use server";
import { prisma } from "@/lib/prisma";

export const addPlatform = async (value: string) => {
  if (value == "") return { error: "There's no value!" };

  try {
    await prisma.platforms.create({
      data: {
        platform: value,
      },
    });
    return { success: `Successfully added ${value} as platform` };
  } catch (error) {
    console.error("Unexpected error adding platform", error);
  }
};
