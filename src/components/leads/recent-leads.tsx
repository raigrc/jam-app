"use client";
import React, { useEffect, useState } from "react";
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
import RecentSkeleton from "../recent-skeleton";

const RecentApplication = () => {
  const { leads, fetchLeads } = useLeadsStore();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const recentLeads = async () => {
      setLoading(true);
      try {
        await fetchLeads();
      } catch (error) {
        console.error("Network error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    recentLeads();
  }, [fetchLeads]);

  return (
    <CardWrapper title="Recent Leads" className="w-1/4">
      <Table className="whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading && <RecentSkeleton />}
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
