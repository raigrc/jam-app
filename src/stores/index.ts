import { Leads } from "@/types";
import { create } from "zustand";

type LeadsStore = {
  leads: Leads[];
  setLeads: (data: Leads[]) => void;
  defaultLeadValues: Leads;
};

export const useLeadsStore = create<LeadsStore>((set) => ({
  leads: [],
  setLeads: (leads) => set({ leads }),
  defaultLeadValues: {
    company_name: "",
    account_name: "",
    platform: "",
    role: "",
    advert_role: "",
    skills: [],
    work_type: "",
    salary: "",
    URL: "",
    remarks: "",
    status: false,
    createdAt: new Date(),
  },
}));
