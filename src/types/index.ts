import React from "react";

export interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export interface Leads {
  id?: string;
  company_name: string;
  account_name: string;
  platform: string;
  role: string;
  advert_role: string;
  skills: string[];
  work_type: string;
  salary: string;
  URL: string;
  remarks: string;
  status: boolean | null;
  createdAt: string | Date;
}

export interface LeadsProps {
  leads: Leads[];
}
