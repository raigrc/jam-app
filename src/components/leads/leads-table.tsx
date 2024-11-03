import React, { useTransition } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LeadsProps } from "@/types";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa6";
import { updateIsApplied } from "@/actions/update-isApplied";

const LeadsTable: React.FC<LeadsProps> = ({ leads, changeIsApplied }) => {
  const [isPending, startTransition] = useTransition();

  const handleChange = (id: string | undefined) => {
    startTransition(async () => {
      try {
        await updateIsApplied(id).then((data) => {
          if (data.success) changeIsApplied?.(true ? true : false);
        });
      } catch (error) {
        console.error("Error updating status", error);
      }
    });
  };
  return (
    <Table className="table-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Applied?</TableHead>
          <TableHead className="w-1/12 text-center">Date</TableHead>
          <TableHead className="w-1/12">Company Name</TableHead>
          <TableHead className="w-1/12">Platform</TableHead>
          <TableHead className="w-1/12">Role</TableHead>
          <TableHead className="w-1/12">Role from client</TableHead>
          <TableHead className="w-2/12">Skills</TableHead>
          <TableHead className="w-1/12">Type of work</TableHead>
          <TableHead className="w-1/12">Salary</TableHead>
          <TableHead className="w-1/12">URL</TableHead>
          <TableHead className="w-1/12">Remarks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow
            key={lead.id}
            className={`${lead.isApplied ? "bg-green-500 text-muted hover:text-muted-foreground" : ""}`}
          >
            <TableCell className="grid place-items-center">
              {lead.isApplied ? (
                <FaCheck />
              ) : (
                <Button
                  variant="success"
                  size="icon"
                  onClick={() => handleChange(lead.id)}
                >
                  <FaCheck />
                </Button>
              )}
            </TableCell>
            <TableCell className="text-center">
              {lead.createdAt?.toLocaleString().split("T")[0]}
            </TableCell>
            <TableCell>{lead.company_name}</TableCell>
            <TableCell>{lead.platform}</TableCell>
            <TableCell>{lead.role}</TableCell>
            <TableCell>{lead.advert_role}</TableCell>
            <TableCell>
              {lead.skills?.map((skill, index) => (
                <Badge className="m-1" key={index}>
                  {skill}
                </Badge>
              ))}
            </TableCell>
            <TableCell>{lead.work_type}</TableCell>
            <TableCell>{lead.salary}</TableCell>
            <TableCell>
              <Link
                href={lead.URL as string}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Link here
              </Link>
            </TableCell>
            <TableCell>{lead.remarks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeadsTable;
