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
}) => {
  return (
    <Card>
      <CardHeader>
        <Header title={title} />
      </CardHeader>
      <CardContent className="overflow-x-auto w-full">{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardWrapper;
