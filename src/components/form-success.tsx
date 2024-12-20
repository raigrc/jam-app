import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const FormSuccess = ({ message }: { message: string | undefined }) => {
  if (!message) return;
  return (
    <>
      <div className="flex items-center gap-1 rounded bg-accent p-2 font-medium text-accent-foreground">
        <FaRegCheckCircle />
        {message}
      </div>
    </>
  );
};

export default FormSuccess;
