import { LeadSchema } from "@/schemas";
import { z } from "zod";

export const leads = async (data: z.infer<typeof LeadSchema>) => {
  const leadData = LeadSchema.safeParse(data);
  console.log(leadData);

  return { success: "Successfully" };
};
