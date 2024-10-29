"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex w-full items-center justify-center space-x-4 bg-primary/5 p-2">
      <Button
        className={pathName == "/dashboard" ? "font-bold" : ""}
        variant="ghost"
      >
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Button
        className={pathName == "/leads" ? "font-bold" : ""}
        variant="ghost"
      >
        <Link href="/leads">Leads</Link>
      </Button>
      <Button
        className={pathName == "/job-application" ? "font-bold" : ""}
        variant="ghost"
      >
        <Link href="/job-application">Applications</Link>
      </Button>
    </div>
  );
};

export default Navbar;
