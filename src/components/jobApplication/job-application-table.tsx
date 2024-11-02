import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { LeadsJobProps } from "@/types";
import { updateJobStatus } from "@/actions/update-job-status";

const JobApplicationTable: React.FC<LeadsJobProps> = ({ leads, onStatusChange }) => {
  const handleChange = async (id: string | undefined, status: string) => {
    await updateJobStatus(id, status).then((data) => {
      if (data?.success) onStatusChange();
    });
  };
  return (
    <Table className="min-w-[2000px] table-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12">Status</TableHead>
          <TableHead className="w-1/12">Date Applied</TableHead>
          <TableHead className="w-1/12">Company Name</TableHead>
          <TableHead className="w-1/12">Platform</TableHead>
          <TableHead className="w-1/12">Role</TableHead>
          <TableHead className="w-1/12">Salary</TableHead>
          <TableHead>URL</TableHead>
          <TableHead className="w-1/12">Remarks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <Select
                  value={lead.JobApplication?.status}
                  onValueChange={(value) => handleChange(lead.JobApplication?.leadsId, value)}
                >
                  <SelectTrigger
                    className={
                      lead.JobApplication?.status == "Waiting for reply"
                        ? "bg-yellow-400"
                        : lead.JobApplication?.status == "For Interview"
                          ? "bg-green-400"
                          : "bg-red-400"
                    }
                  >
                    {lead.JobApplication?.status}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className={
                        lead.JobApplication?.status == "Waiting for reply" ? "hidden" : undefined
                      }
                      value="Waiting for reply"
                    >
                      Waiting for reply
                    </SelectItem>
                    <SelectItem
                      className={
                        lead.JobApplication?.status == "For Interview" ? "hidden" : undefined
                      }
                      value="For Interview"
                    >
                      For Interview
                    </SelectItem>
                    <SelectItem
                      className={
                        lead.JobApplication?.status == "Rejected" ? "hidden" : undefined
                      }
                      value="Rejected"
                    >
                      Rejected
                    </SelectItem>
                    <SelectItem
                      className={lead.JobApplication?.status == "Drop" ? "hidden" : undefined}
                      value="Drop"
                    >
                      Drop
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                {lead.JobApplication?.createdAt.toLocaleString().split("T")[0]}
              </TableCell>
              <TableCell>{lead.company_name}</TableCell>
              <TableCell>{lead.platform}</TableCell>
              <TableCell>{lead.role}</TableCell>
              <TableCell>{lead.salary}</TableCell>
              <TableCell className="">{lead.URL}</TableCell>
              <TableCell>{lead.remarks}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JobApplicationTable;
