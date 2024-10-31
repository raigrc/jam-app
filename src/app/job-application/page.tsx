"use client";
import CardWrapper from "@/components/card-wrapper";
import JobApplicationTable from "@/components/jobApplication/job-application-table";
import React, { useEffect, useState } from "react";

const JobAppPage = () => {
  const [leads, setLeads] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/job-application");

      if (!response.ok) {
        throw new Error("Error Fetching Job Application data");
      }

      const data = await response.json();
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
      <CardWrapper title="Job Application" showButton>
        <JobApplicationTable
          leads={leads}
          onStatusChange={() => {
            fetchData();
            console.log("changed status!");
          }}
        />
      </CardWrapper>
    </>
  );
};

export default JobAppPage;
