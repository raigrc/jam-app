import { create } from "zustand";

type LeadsInfo = {
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
  leadsInfo: LeadsInfo | null;
  setLeadsInfo: (data: LeadsInfo) => void;
};

export const useLeadsStore = create<LeadsStore>((set) => ({
  leadsInfo: null,
  setLeadsInfo: (data) => set({ leadsInfo: data }),
}));
