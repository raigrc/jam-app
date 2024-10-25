"use client";
import CardWrapper from "@/components/card-wrapper";
import LeadsTable from "@/components/leads/leads-table";
import { useLeadsStore } from "@/stores";
import React, { useEffect } from "react";

const LeadsPage = () => {
  const { leads, setLeads } = useLeadsStore();

  useEffect(() => {
    const leadsData = async () => {
      const response = await fetch("/api/leads");
      if (!response.ok) {
        throw new Error("Failed fetching data");
      }
      const data = await response.json();
      console.log(data);

      setLeads(data.leads);
    };
    leadsData();
  }, [setLeads]);

  return (
    <div className="">
      <CardWrapper title="Leads">
        <LeadsTable leads={leads} />
      </CardWrapper>
    </div>
  );
};

export default LeadsPage;
