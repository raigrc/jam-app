"use client";

import CardWrapper from "@/components/card-wrapper";
import Filters from "@/components/filters";
import LeadsPagination from "@/components/leads/leads-pagination";
import LeadsTable from "@/components/leads/leads-table";
import SkeletonTable from "@/components/table-skeleton";
import { useLeadsStore } from "@/stores";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const LeadsPage = () => {
  const { leads, setLeads } = useLeadsStore();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [applied, setApplied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/leads?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed fetching data");
      }
      const data = await response.json();

      setLeads(data.leads);
      setCurrentPage(data.pagination.page);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error Fetching leads", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilter = async (company_name: string) => {
    try {
      const response = await fetch(
        `/api/leads/filter?company_name=${company_name}`,
      );
      if (!response.ok) {
        throw new Error("Error fetching filters");
      }

      const data = await response.json();
      setLeads(data.filteredLeads);
    } catch (error) {
      console.error("Network error: ", error);
    }
  };

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    fetchData(page);
    setCurrentPage(page);
  }, [searchParams, applied]);

  const handleFilter = (newValue: any) => {
    fetchFilter(newValue);
  };

  return (
    <>
      <CardWrapper title="Leads" showButton>
        <Filters onFilterChange={handleFilter} />
        <LeadsTable
          leads={leads}
          changeIsApplied={() => setApplied(!applied)}
        />

        {loading && <SkeletonTable />}
        <LeadsPagination totalPage={totalPages} currentPage={currentPage} />
      </CardWrapper>
    </>
  );
};

export default LeadsPage;
