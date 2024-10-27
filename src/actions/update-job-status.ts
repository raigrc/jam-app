"use server";
import { prisma } from "@/lib/prisma";

export const updateJobStatus = async (
  id: string | undefined,
  status: string,
) => {
  console.log("updating job status...");
  try {
    await prisma.jobApplication.update({
      where: {
        leadsId: id,
      },
      data: {
        status,
      },
    });

    console.log("Successfully updated job status!");

    return { success: true };
  } catch (error) {
    console.error("Unexpected error on updating job status: ", error);
  }
};
