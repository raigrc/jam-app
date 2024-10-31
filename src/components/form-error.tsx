import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const FormError = ({ message }: { message: string | undefined }) => {
  if (!message) return;
  return (
    <>
      <div className="flex items-center gap-1 rounded bg-red-600/30 p-2 font-medium text-red-600">
        <FaExclamationTriangle />
        {message}
      </div>
    </>
  );
};

export default FormError;
