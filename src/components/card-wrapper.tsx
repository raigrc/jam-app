import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "./header";
import { CardWrapperProps } from "@/types";
import LinkButton from "./link-button";
import Filters from "./filters";

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  title,
  className,
  showButton,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <Header title={title} />
          {showButton && <LinkButton />}
        </div>
      </CardHeader>
      <CardContent className="w-full space-y-4 overflow-x-auto">
        {children}
      </CardContent>
    </Card>
  );
};

export default CardWrapper;
