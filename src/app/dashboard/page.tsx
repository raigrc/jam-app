"use client";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [count, setCount] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch("/api/count-job-app");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      console.log(data);
      setCount(data.count);
    } catch (error) {
      console.error("Unexpected error fetching data on client", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>{count}</div>;
};

export default DashboardPage;
