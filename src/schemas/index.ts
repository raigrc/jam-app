import { z } from "zod";

export const LeadSchema = z.object({
  company_name: z.string(),
  account_name: z.string(),
  platform: z.string(),
  role: z.string(),
  advert_role: z.string(),
  skills: z.array(z.string()),
  work_type: z.string(),
  salary: z.string(),
  URL: z.string().url(),
  remarks: z.string(),
  isApplied: z.boolean(),
  createdAt: z.date(),
});
