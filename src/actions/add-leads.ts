"use server";
import { LeadSchema } from "@/schemas";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const leads = async (data: z.infer<typeof LeadSchema>) => {
  const leadData = LeadSchema.safeParse(data);
  console.log(leadData);

<<<<<<< Updated upstream
  return { success: "Successfully" };
=======
  if (!leadData.success) return { error: "Invalid Fields!" };

  const {
    company_name,
    account_name,
    platform,
    role,
    advert_role,
    skills,
    work_type,
    salary,
    URL,
  } = leadData.data;

  const skillsArray = skills.split(",").map((skill) => skill.trim());

  try {
    await prisma.leads.create({
      data: {
        company_name,
        account_name,
        platform,
        role,
        advert_role,
        skills: skillsArray,
        work_type,
        salary,
        URL,
      },
    });
    return { success: "Successfully created lead!" };
  } catch (error) {
    console.error("Something went wrong", error);
    return { error: "Database operation failed!" };
  }
>>>>>>> Stashed changes
};
