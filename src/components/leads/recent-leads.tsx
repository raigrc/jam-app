"use client";
import React, { useEffect } from "react";
import CardWrapper from "../card-wrapper";
import { useLeadsStore } from "@/stores";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import { Button } from "../ui/button";

const RecentApplication = () => {
  const { leads, recentLeads } = useLeadsStore();
  useEffect(() => {
    recentLeads();
  }, []);

  return (
    <CardWrapper title="Recent Leads" className="w-1/4">
      <Table className="whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead, index) => (
            <TableRow key={lead.id || index}>
              <TableCell>
                {lead.company_name}
                <div className="text-xs text-gray-400">{lead.role}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="link" className="float-right text-primary">
        <Link href="/leads">see all</Link>
      </Button>
    </CardWrapper>
  );
};

export default RecentApplication;
