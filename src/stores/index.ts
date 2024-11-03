import { LeadsStore } from "@/types";
import { create } from "zustand";

export const useLeadsStore = create<LeadsStore>((set) => ({
  leads: [],
  setLeads: (leads) => set({ leads }),
  addLeads: (leads) => set((prev) => ({ leads: [leads, ...prev.leads] })),
  fetchLeads: async () => {
    const response = await fetch("/api/leads");
    if (!response.ok) {
      throw new Error("Failed fetching data");
    }
    const data = await response.json();
    set({
      leads: data.leads,
    });
  },
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
    isApplied: false,
    createdAt: new Date(),
  },
}));
