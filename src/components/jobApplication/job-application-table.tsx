import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
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
  SelectValue,
} from "@/components/ui/select";

import { LeadsJobProps } from "@/types";
import { updateJobStatus } from "@/actions/update-job-status";

const JobApplicationTable: React.FC<LeadsJobProps> = ({ leads, jobApp, onStatusChange }) => {
  const handleChange = async (id: string | undefined, status: string) => {
    console.log({ id, status });
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
        {leads.map((lead) => {
          const relatedJobs = jobApp.filter((job) => job.leadsId === lead.id);

          return relatedJobs.map((job) => (
            <TableRow key={lead.id}>
              <TableCell>
                <Select
                  value={job.status}
                  onValueChange={(value) => handleChange(job.leadsId, value)}
                >
                  <SelectTrigger
                    className={
                      job.status == "Waiting for reply"
                        ? "bg-yellow-400"
                        : job.status == "For Interview"
                          ? "bg-green-400"
                          : "bg-red-400"
                    }
                  >
                    {job.status}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className={
                        job.status == "Waiting for reply" ? "hidden" : undefined
                      }
                      value="Waiting for reply"
                    >
                      Waiting for reply
                    </SelectItem>
                    <SelectItem
                      className={
                        job.status == "For Interview" ? "hidden" : undefined
                      }
                      value="For Interview"
                    >
                      For Interview
                    </SelectItem>
                    <SelectItem
                      className={
                        job.status == "Rejected" ? "hidden" : undefined
                      }
                      value="Rejected"
                    >
                      Rejected
                    </SelectItem>
                    <SelectItem
                      className={job.status == "Drop" ? "hidden" : undefined}
                      value="Drop"
                    >
                      Drop
                    </SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                {job.createdAt.toLocaleString().split("T")[0]}
              </TableCell>
              <TableCell>{lead.company_name}</TableCell>
              <TableCell>{lead.platform}</TableCell>
              <TableCell>{lead.role}</TableCell>
              <TableCell>{lead.salary}</TableCell>
              <TableCell className="">{lead.URL}</TableCell>
              <TableCell>{lead.remarks}</TableCell>
            </TableRow>
          ));
        })}
      </TableBody>
    </Table>
  );
};

export default JobApplicationTable;
