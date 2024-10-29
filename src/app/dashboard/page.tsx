"use client";
import useFetch from "@/hooks/useFetch";
import React from "react";

const DashboardPage = () => {
  const { data } = useFetch({
    url: "/api/count-job-app",
    select: (data) => ({
      count: data.count,
    }),
  });

  return <div>{data?.count}</div>;
};

export default DashboardPage;
