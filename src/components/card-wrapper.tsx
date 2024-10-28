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

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  title,
  className,
  footer,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <Header title={title} />
      </CardHeader>
      <CardContent className="w-full overflow-x-auto space-y-4 py-2">{children}</CardContent>
      {/* <CardFooter>{footer}</CardFooter> */}
    </Card>
  );
};

export default CardWrapper;
