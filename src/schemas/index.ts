import { z } from "zod";

export const LeadSchema = z.object({
  company_name: z.string(),
  account_name: z.string(),
  platform: z.string(),
  role: z.string(),
  advert_role: z.string(),
  skills: z.string(),
  work_type: z.string(),
  salary: z.string().optional(),
  URL: z.string().url(),
});
