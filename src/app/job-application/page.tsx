"use client";
import CardWrapper from "@/components/card-wrapper";
import JobApplicationTable from "@/components/jobApplication/job-application-table";
import LinkButton from "@/components/link-button";
import React, { useEffect, useState } from "react";

const JobAppPage = () => {
  const [applications, setApplications] = useState([]);
  const [leads, setLeads] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/job-application");

      if (!response.ok) {
        throw new Error("Error Fetching Job Application data");
      }

      const data = await response.json();
      console.log(data);
      setApplications(data.jobApp);
      setLeads(data.leads);
    } catch (error) {
      console.error("Unexpected error when fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-end items-center">
        <LinkButton href="/add-leads" name="Add Lead" />
      </div>

      <CardWrapper title="Job Application">
        <JobApplicationTable
          leads={leads}
          jobApp={applications}
          onStatusChange={fetchData}
        />
      </CardWrapper>
    </>
  );
};

export default JobAppPage;
