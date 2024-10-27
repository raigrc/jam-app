"use server";
import { prisma } from "@/lib/prisma";
export const updateIsApplied = async (id: string | undefined) => {
  if (!id) {
    return { error: "ID is undefined" };
  }

  try {
    await prisma.leads.update({
      data: {
        isApplied: true,
      },
      where: {
        id,
      },
    });

    await prisma.jobApplication.create({
      data: {
        leads: {
          connect: { id },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating from actions", error);
    return { error: error };
  }
};
