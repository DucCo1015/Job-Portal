import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list job applied jobs</TableCaption>
        <TableHeader>
          <TableHead>Date</TableHead>
          <TableHead>Job Rate</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((job, index) => (
            <TableRow key={index}>
              <TableCell>10/8/2024</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right">
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
