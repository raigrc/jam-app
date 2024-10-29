"use client";
import CardWrapper from "@/components/card-wrapper";
import DataCount from "@/components/dashboard/data-count";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [prCount, setPrCount] = useState<number>(0);
  const [leadsCount, setLeadsCount] = useState<number>(0);
  const [applicationCount, setApplicationCout] = useState<number>(0);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/dashboard");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      console.log(data);
      setPrCount(data.count.pr);
      setLeadsCount(data.count.leads);
      setApplicationCout(data.count.applications);
    } catch (error) {
      console.error("Unexpected error fetching data on client", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CardWrapper title="Dashboard">
      <DataCount
        positiveResponse={prCount}
        leads={leadsCount}
        applications={applicationCount}
      />
    </CardWrapper>
  );
};

export default DashboardPage;
