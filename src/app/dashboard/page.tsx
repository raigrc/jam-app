"use client";
import CardWrapper from "@/components/card-wrapper";
import DataCount from "@/components/dashboard/data-count";
import React, { Suspense, useEffect, useState } from "react";

const DashboardPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
};

const DashboardContent = () => {
  const [prCount, setPrCount] = useState<number>(0);
  const [leadsCount, setLeadsCount] = useState<number>(0);
  const [applicationCount, setApplicationCout] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();

        setPrCount(data.count.pr);
        setLeadsCount(data.count.leads);
        setApplicationCout(data.count.applications);
      } catch (error) {
        console.log("Unexpected error fetching data on client", error);
        return error;
      }
    };
    fetchData();
  }, []);
  return (
    <CardWrapper title="Dashboard" showButton>
      <DataCount
        positiveResponse={prCount}
        leads={leadsCount}
        applications={applicationCount}
      />
    </CardWrapper>
  );
};

export default DashboardPage;
