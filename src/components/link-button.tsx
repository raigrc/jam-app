import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const LinkButton = () => {
  return (
    <div className="flex items-center justify-end pb-2">
      <Button>
        <Link href="/add-leads">Add Lead</Link>
      </Button>
    </div>
  );
};

export default LinkButton;
