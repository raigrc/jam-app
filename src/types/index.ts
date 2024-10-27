import React from "react";

export interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  footer?: React.ReactNode;
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
  isApplied: boolean | null;
  status: string;
  createdAt: string | Date;
}

export interface JobAppProps {
  leadsId?: string;
  status: string;
  createdAt: Date;
}

export interface LeadsProps {
  leads: Leads[];
  onApplyChange?: (status: (boolean | null)[]) => void;
}

export interface LeadsJobProps extends LeadsProps {
  jobApp: JobAppProps[];
  onStatusChange: () => void;
}
