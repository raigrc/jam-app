import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const LinkButton = ({ href, name }: { href: string; name: string }) => {
  return (
    <div className="flex justify-end items-center pb-2">
      <Button>
        <Link href={href}>{name}</Link>
      </Button>
    </div>
  );
};

export default LinkButton;
