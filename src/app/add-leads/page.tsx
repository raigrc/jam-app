"use client";
import LeadsForm from "@/components/leads/leads-form";
import RecentApplication from "@/components/leads/recent-leads";
import Navbar from "@/components/navbar";
import { usePlatformStore } from "@/stores/platform";
import React, { useEffect } from "react";

const AddLeadsPage = () => {
  const { fetchPlatforms, platforms } = usePlatformStore((state) => state);

  useEffect(() => {
    fetchPlatforms();
  }, [fetchPlatforms]);

  return (
    <>
      <div className="flex w-full items-start justify-between space-x-4">
        <LeadsForm platforms={platforms} onUpdate={fetchPlatforms} />
        <RecentApplication />
      </div>
    </>
  );
};

export default AddLeadsPage;
