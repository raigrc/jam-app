import { LeadSchema } from "@/schemas";
import { z } from "zod";

export const leads = async (data: z.infer<typeof LeadSchema>) => {
  const leadData = LeadSchema.safeParse(data);
  console.log("From actions: ", leadData);

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

  try {
  } catch (error) {
    console.error("Something went wrong", error);
    return { error: "Database operation failed!" };
  }
};
