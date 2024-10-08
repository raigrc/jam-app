"use client";
import React from "react";
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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { LeadSchema } from "@/schemas";
import { useLeadsStore } from "@/stores";

const LeadsForm = () => {
  const { leadsInfo, setLeadsInfo } = useLeadsStore((state) => state);

  type validationSchema = z.infer<typeof LeadSchema>;

  const form = useForm<validationSchema>({
    resolver: zodResolver(LeadSchema),
    defaultValues: { ...leadsInfo },
  });

  const handleSubmit = (values: validationSchema) => {
    const skillArray = values.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company name"
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
          <FormField
            control={form.control}
            name="account_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Name:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Account name"
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
          {/* //! MAKE THIS A SELECT FIELD
          //? MAKE A PLATFORM MODEL IN PRISMA */}
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Platform"
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
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Role"
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
          <FormField
            control={form.control}
            name="advert_role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role from advert:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Role from advert"
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
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input
                    placeholder="React, Javascript, Next JS..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* //! MAKE THIS A SELECT FIELD */}
          <FormField
            control={form.control}
            name="work_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of work:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Time, Part Time"
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
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default LeadsForm;
