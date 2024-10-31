import React, {
  useState,
  useTransition,
} from "react";
import DialogWrapper from "../dialog-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addPlatform } from "@/actions/add-platform";
import FormSuccess from "../form-success";
import FormError from "../form-error";
import { usePlatformStore } from "@/stores/platform";

const Platforms = () => {
  const { addPlatforms } = usePlatformStore((state) => state);

  const [value, setValue] = useState<string>("");
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  
  const handleSubmit = () => {
    startTransition(async () => {
      await addPlatform(value).then((data) => {
        if (data?.success) {
          addPlatforms({ platform: value });
          setSuccess(data.success);
        } else {
          setError(data?.error);
        }
      });
    });
  };
  return (
    <DialogWrapper title="Add new platform" trigger="Platform">
      <Input
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
        disabled={isPending}
      />
      <Button onClick={handleSubmit}>Add Platform</Button>
      <FormSuccess message={success} />
      <FormError message={error} />
    </DialogWrapper>
  );
};

export default Platforms;
