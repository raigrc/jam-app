import React, { FormEvent, useRef, useState } from "react";
import DialogWrapper from "../dialog-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addPlatform } from "@/actions/add-platform";
import FormMessage from "../form-message";

const Platforms = () => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = () => {
    addPlatform(value);
  };
  return (
    <DialogWrapper title="Add new platform" trigger="Platform">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleSubmit}>Add Platform</Button>
      <FormMessage message="Hello" />
    </DialogWrapper>
  );
};

export default Platforms;
