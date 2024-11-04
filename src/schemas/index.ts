import { z } from "zod";

export const LeadSchema = z.object({
  company_name: z.string().min(2, "Invalid Company Name"),
  account_name: z.string().min(2, "Invalid Name"),
  platform: z.string().min(2, "Invalid Platform"),
  role: z.string().min(2, "Invalid Role"),
  advert_role: z.string().min(2, "Invalid Role"),
  skills: z.array(z.string()),
  work_type: z.string().min(2, "Invalid Tpe of Work"),
  salary: z.string(),
  URL: z.string().url("Invalid URL"),
  remarks: z.string().optional(),
  isApplied: z.boolean(),
  createdAt: z.date(),
});
