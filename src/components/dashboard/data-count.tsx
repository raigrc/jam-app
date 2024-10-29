import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardWrapper from "../card-wrapper";
import { DataCountProps } from "@/types";

const DataCount: React.FC<DataCountProps> = ({
  positiveResponse,
  leads,
  applications,
}) => {
  return (
    <div className="grid grid-cols-3 space-x-4">
      <Card>
        <CardHeader>
          <CardTitle>Positive Response Today</CardTitle>
        </CardHeader>
        <CardContent className="grid place-items-center text-6xl font-bold">
          {positiveResponse}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Leads</CardTitle>
        </CardHeader>
        <CardContent className="grid place-items-center text-6xl font-bold">
          {leads}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
        </CardHeader>
        <CardContent className="grid place-items-center text-6xl font-bold">
          {applications}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCount;
