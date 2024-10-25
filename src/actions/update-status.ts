"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export const updateStatus = async (id: string | undefined) => {
  if (!id) {
    return { error: "ID is undefined" };
  }

  try {
    await prisma.leads.update({
      data: {
        status: "true",
      },
      where: {
        id,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating from actions", error);
    return { error: error };
  }
};
