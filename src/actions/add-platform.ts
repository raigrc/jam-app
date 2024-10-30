import { prisma } from "@/lib/prisma";

export const addPlatform = async (value: string) => {
  if (value == "") return { error: "There's no value!" };

  try {
    
  } catch (error) {
    console.error("Unexpected error adding platform", error);
  }
};
