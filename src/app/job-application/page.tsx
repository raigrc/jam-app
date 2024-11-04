"use client";
import CardWrapper from "@/components/card-wrapper";
import Filters from "@/components/filters";
import JobApplicationTable from "@/components/jobApplication/job-application-table";
import LeadsPagination from "@/components/leads/leads-pagination";
import SkeletonTable from "@/components/table-skeleton";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const JobAppPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const [application, setApplication] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/job-application?page=${page}`);

      if (!response.ok) {
        throw new Error("Error Fetching Job Application data");
      }

      const data = await response.json();
      setApplication(data.application);
      setTotalPages(data.pagination.totalPages);
      setCurrentPage(data.pagination.page);
    } catch (error) {
      console.error("Unexpected error when fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchFilter = async (value: string) => {
    try {
      const response = await fetch(`/api/leads/filter?company_name=${value}`);

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      setApplication(data.filteredLeads);
    } catch (error) {
      console.error("Network error: ", error);
    }
  };

  const handleFilter = (value: string) => {
    fetchFilter(value);
  };
  return (
    <>
      <CardWrapper title="Job Application" showButton>
        <Filters onFilterChange={handleFilter} />
        <JobApplicationTable
          leads={application}
          onStatusChange={() => {
            fetchData(page);
          }}
        />
        {loading && <SkeletonTable />}
        <LeadsPagination totalPage={totalPages} currentPage={currentPage} />
      </CardWrapper>
    </>
  );
};

export default JobAppPage;
