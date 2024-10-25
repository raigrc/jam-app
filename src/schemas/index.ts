import { z } from "zod";

// const SkillSchema = z.object({
//   id: z.string().optional(),
//   name: z.string(),
// });

export const LeadSchema = z.object({
  company_name: z.string(),
  account_name: z.string(),
  platform: z.string(),
  role: z.string(),
  advert_role: z.string(),
  skills: z.array(z.string()),
  work_type: z.string(),
  salary: z.string().optional(),
  URL: z.string().url(),
  remarks: z.string().optional(),
});
