import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "./header";
import { CardWrapperProps } from "@/types";
import LinkButton from "./link-button";

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <Header title={title} />
        <LinkButton />
      </CardHeader>
      <CardContent className="w-full space-y-4 overflow-x-auto">
        {children}
      </CardContent>
      {/* <CardFooter>{footer}</CardFooter> */}
    </Card>
  );
};

export default CardWrapper;
