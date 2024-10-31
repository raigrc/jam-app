"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-center space-x-4 bg-background p-2">
      <Button
        className={`tracking-wide ${pathName == "/dashboard" ? "font-bold text-primary" : ""}`}
        variant="ghost"
      >
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Button
        className={`tracking-wide ${pathName == "/leads" ? "font-bold text-primary" : ""}`}
        variant="ghost"
      >
        <Link href="/leads">Leads</Link>
      </Button>
      <Button
        className={`tracking-wide ${pathName == "/job-application" ? "font-bold text-primary" : ""}`}
        variant="ghost"
      >
        <Link href="/job-application">Applications</Link>
      </Button>
    </div>
  );
};

export default Navbar;
