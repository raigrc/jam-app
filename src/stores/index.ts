import { create } from "zustand";

type Leads = {
  company_name: string;
  account_name: string;
  platform: string;
  role: string;
  advert_role: string;
  skills: string[];
  work_type: string;
  salary: string;
  URL: string;
};

type LeadsStore = {
  leads: Leads[];
  setLeads: (data: Leads[]) => void;
};

export const useLeadsStore = create<LeadsStore>((set) => ({
  leads: [],
  setLeads: (leads) => set({ leads }),
}));
