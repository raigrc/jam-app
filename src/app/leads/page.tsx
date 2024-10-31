"use client";

import CardWrapper from "@/components/card-wrapper";
import LeadsPagination from "@/components/leads/leads-pagination";
import LeadsTable from "@/components/leads/leads-table";
import { useLeadsStore } from "@/stores";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const LeadsPage = () => {
  const { leads, setLeads } = useLeadsStore();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [applied, setApplied] = useState(false);

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(`/api/leads?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed fetching data");
      }
      const data = await response.json();
      console.log(data);

      setLeads(data.leads);
      setCurrentPage(data.pagination.page);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error Fetching leads", error);
    }
  };

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    fetchData(page);
    setCurrentPage(page);
  }, [searchParams, applied]);

  return (
    <>
      <CardWrapper title="Leads" showButton>
        <LeadsTable
          leads={leads}
          changeIsApplied={() => setApplied(!applied)}
        />
        <LeadsPagination totalPage={totalPages} currentPage={currentPage} />
      </CardWrapper>
    </>
  );
};

export default LeadsPage;
