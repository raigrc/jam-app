import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTable = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
    </div>
  );
};

export default SkeletonTable;
