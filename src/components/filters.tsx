import React from "react";
import { Input } from "./ui/input";

const Filters = ({
  onFilterChange,
}: {
  onFilterChange: (value: string) => void;
}) => {
  const handleChange = (value: string) => {
    onFilterChange(value);
  };
  return (
    <div className="">
      <Input
        placeholder="Company Name..."
        className="w-auto"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Filters;
