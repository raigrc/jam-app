"use client";
import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { FaRegSquarePlus } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LeadSchema } from "@/schemas";
import { useLeadsStore } from "@/stores";
import { leads } from "@/actions/add-leads";
import { Textarea } from "../ui/textarea";
import CardWrapper from "../card-wrapper";
import Platforms from "../platforms/new-platform";
import { LeadsFormProps } from "@/types";

const LeadsForm: React.FC<LeadsFormProps> = ({ platforms, onUpdate }) => {
  const { defaultLeadValues, addLeads } = useLeadsStore((state) => state);
  const [isPending, startTransition] = useTransition();

  type validationSchema = z.infer<typeof LeadSchema>;

  const form = useForm<validationSchema>({
    resolver: zodResolver(LeadSchema),
    defaultValues: defaultLeadValues,
  });

  const handleSubmit = (values: validationSchema) => {
    console.log("Form submitted with values:", values);
    startTransition(async () => {
      try {
        // const skillsArray = values.skills.split(",").map((skill) => skill.trim());
        const leadData = await leads(values);

        if (leadData.success) {
          addLeads(values);
          onUpdate();
          form.reset();
        }
      } catch (error) {
        console.error("Error submitting form!", error);
      }
    });
  };

  return (
    <CardWrapper title="Add Leads" className="w-3/4">
      <Form {...form}>
        <form
          className="space-y-6 py-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
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
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

            {/*//! MAKE A PLATFORM MODEL IN PRISMA */}
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Platform:</FormLabel>
                  <FormControl>
                    <Select onValueChange={(value) => field.onChange(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Platform..." />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem
                            key={platform.id}
                            value={platform.platform}
                          >
                            {platform.platform}
                          </SelectItem>
                        ))}

                        <Platforms />
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-between space-x-4">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role:</FormLabel>
                  <FormControl>
                    <Select onValueChange={(value) => field.onChange(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Software Engineer">
                          Software Engineer
                        </SelectItem>
                        <SelectItem value="Full Stack Developer">
                          Full Stack Developer
                        </SelectItem>
                        <SelectItem value="Front End Developer">
                          Front End Developer
                        </SelectItem>
                        <SelectItem value="Web Developer">
                          Web Developer
                        </SelectItem>
                      </SelectContent>
                    </Select>
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
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="HTML, CSS, JS..."
                    {...field}
                    onChange={(e) => {
                      const skillsArray = e.target.value
                        .split(",")
                        .map((skill) => skill.trim());
                      field.onChange(skillsArray);
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
                  <Input placeholder="https://..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks:</FormLabel>
                <FormControl>
                  <Textarea {...field} className="resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="float-right" type="submit" disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LeadsForm;
