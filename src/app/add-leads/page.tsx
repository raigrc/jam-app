"use client";
import LeadsForm from "@/components/leads/leads-form";
import RecentApplication from "@/components/leads/recent-leads";
import React from "react";

const AddLeadsPage = () => {
  return (
    <div className="flex w-full items-start justify-between space-x-4">
      <LeadsForm />
      <RecentApplication />
    </div>
  );
};

export default AddLeadsPage;
