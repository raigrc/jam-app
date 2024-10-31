import React from "react";

export interface LeadsStore {
  leads: Leads[];
  setLeads: (data: Leads[]) => void;
  defaultLeadValues: Leads;
  addLeads: (data: Leads) => void;
  recentLeads: () => void;
}

export interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  showButton?: boolean;
}

export interface Leads {
  id?: string | undefined;
  company_name: string | undefined;
  account_name: string | undefined;
  platform: string | undefined;
  role: string | undefined;
  advert_role: string | undefined;
  skills: string[] | undefined;
  work_type: string | undefined;
  salary: string | undefined;
  URL: string | undefined;
  remarks: string | undefined;
  isApplied: boolean | undefined;
  status: string | undefined;
  createdAt: Date | undefined;
}

export interface JobAppProps {
  leadsId?: string;
  status: string;
  createdAt: Date;
}

export interface LeadsProps {
  leads: Leads[];
  changeIsApplied?: (isApplied: boolean | undefined) => void;
}

export interface LeadsJobProps extends LeadsProps {
  jobApp: JobAppProps[];
  onStatusChange: () => void;
}

export interface DataCountProps {
  positiveResponse: number | undefined;
  leads: number | undefined;
  applications: number | undefined;
}

export interface DialogWrapperProps {
  title: string;
  trigger: string;
  children: React.ReactNode;
}

export interface Platforms {
  id?: string;
  platform: string;
}

export interface LeadsFormProps {
  platforms: Platforms[];
  onUpdate: () => void;
}

export interface PlatformStore {
  platforms: Platforms[];
  setPlatforms: (data: Platforms[]) => void;
  addPlatforms: (data: Platforms) => void;
  fetchPlatforms: () => void;
}
