import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegThumbsUp, FaRegLightbulb, FaRegFileAlt } from "react-icons/fa";
import { DataCountProps } from "@/types";
import { IconContext } from "react-icons";

const DataCount: React.FC<DataCountProps> = ({
  positiveResponse,
  leads,
  applications,
}) => {
  return (
    <IconContext.Provider value={{ style: { margin: 0 }, size: "1.2em" }}>
      <div className="grid grid-cols-3 space-x-4">
        <Card className="bg-emerald-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>PR Today</CardTitle>
            <FaRegThumbsUp />
          </CardHeader>
          <CardContent className="grid place-items-center text-6xl font-bold">
            {positiveResponse}
          </CardContent>
        </Card>
        <Card className="bg-amber-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Leads</CardTitle>
            <FaRegLightbulb />
          </CardHeader>
          <CardContent className="grid place-items-center text-6xl font-bold">
            {leads}
          </CardContent>
        </Card>
        <Card className="bg-sky-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Job Applications</CardTitle>
            <FaRegFileAlt />
          </CardHeader>
          <CardContent className="grid place-items-center text-6xl font-bold">
            {applications}
          </CardContent>
        </Card>
      </div>
    </IconContext.Provider>
  );
};

export default DataCount;
