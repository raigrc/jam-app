import React from "react";
import { CardTitle } from "./ui/card";

const Header = ({ title }: { title: string }) => {
  return <CardTitle className="text-2xl">{title}</CardTitle>;
};

export default Header;
