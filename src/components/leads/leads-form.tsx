"use client";
import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { LeadSchema } from "@/schemas";
import { useLeadsStore } from "@/stores";
import { leads } from "@/actions/add-leads";
import { Textarea } from "../ui/textarea";

const LeadsForm = () => {
  const { defaultLeadValues } = useLeadsStore((state) => state);
  const [isPending, startTransition] = useTransition();

  type validationSchema = z.infer<typeof LeadSchema>;

  const form = useForm<validationSchema>({
    resolver: zodResolver(LeadSchema),
    defaultValues: defaultLeadValues,
  });

  const handleSubmit = (values: validationSchema) => {
    startTransition(async () => {
      try {
        const leadData = await leads(values);

        if (leadData.success) {
          form.reset();
        }
      } catch (error) {
        console.error("Error submitting form!", error);
      }
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          className="space-y-4 py-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Company Name:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company name"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        console.log("Current value: ", e.target.value);
                      }}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between space-x-4">
              <FormField
                control={form.control}
                name="account_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Account Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Account name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* //! MAKE THIS A SELECT FIELD
          //? MAKE A PLATFORM MODEL IN PRISMA */}
              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Platform:</FormLabel>
                    <FormControl>
                      <Input placeholder="Platform" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between space-x-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Role:</FormLabel>
                    <FormControl>
                      <Input placeholder="Role" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="advert_role"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Role from advert:</FormLabel>
                    <FormControl>
                      <Input placeholder="Role from advert" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between space-x-4">
              <FormField
                control={form.control}
                name="work_type"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Type of work:</FormLabel>
                    <FormControl>
                      <Select onValueChange={(value) => field.onChange(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Type of work..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full Time">Full Time</SelectItem>
                          <SelectItem value="Part Time">Part Time</SelectItem>
                          <SelectItem value="Fresh Graduate">
                            Fresh Graduate
                          </SelectItem>
                          <SelectItem value="Temporary">Temporary</SelectItem>
                          <SelectItem value="Freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Salary Range:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="$1000"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          console.log("Current value: ", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="URL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        console.log("Current value: ", e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default LeadsForm;
