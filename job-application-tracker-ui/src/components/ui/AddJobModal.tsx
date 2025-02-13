"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { addJob } from "@/app/api/post-job";

export function AddJobModal({ setLoading }: any) {
  const [role, setRole] = useState<any>("");
  const [company, setCompany] = useState<any>("");
  const [submittedAt, setSubmittedAt] = React.useState<Date | undefined>(
    new Date()
  );
  const [oaDeadline, setOaDeadline] = useState<any>("");
  const [link, setLink] = useState<string | undefined>("");

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const resetFields = () => {
    setRole("");
    setCompany("");
    setSubmittedAt(undefined);
    setOaDeadline(undefined);
    setLink("");
  };

  const handleSaveJob = () => {
    let newJob = {
      company: company,
      role: role,
      submittedAt: submittedAt,
      oaDeadline: oaDeadline,
      link: link,
    };
    setLoading(true);
    addJob(newJob).then((data) => {
      setDialogOpen(false);
      console.log("job saved: ", data);
      setLoading(false);
      resetFields();
    });
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="transition-transform duration-300 ease-in-out hover:scale-110">
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Job Application</DialogTitle>
          <DialogDescription>
            Fill out information about your new job application.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input
              id="role"
              value={role}
              className="col-span-3"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input
              id="company"
              value={company}
              className="col-span-3"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="submitted-at" className="text-right">
              Submitted At
            </Label>
            <Popover>
              <PopoverTrigger asChild className="bg-gray">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[165px] pl-3 text-left font-normal",
                    !submittedAt && "text-muted-foreground"
                  )}
                >
                  <span
                    className={
                      submittedAt ? undefined : "text-muted-foreground"
                    }
                  >
                    {submittedAt
                      ? typeof submittedAt === "string"
                        ? submittedAt
                        : submittedAt.toLocaleDateString()
                      : "Pick a date"}
                  </span>

                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={submittedAt}
                  onSelect={setSubmittedAt}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="oa-deadline" className="text-right">
              OA Deadline
            </Label>
            <Popover>
              <PopoverTrigger asChild className="bg-gray">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[165px] pl-3 text-left font-normal",
                    !oaDeadline && "text-muted-foreground"
                  )}
                >
                  <span
                    className={oaDeadline ? undefined : "text-muted-foreground"}
                  >
                    {oaDeadline
                      ? typeof oaDeadline === "string"
                        ? oaDeadline
                        : oaDeadline.toLocaleDateString()
                      : "Pick a date"}
                  </span>

                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={oaDeadline}
                  onSelect={setOaDeadline}
                  disabled={(date) => date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Link
            </Label>
            <Input
              id="link"
              value={link}
              className="col-span-3"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={(e) => handleSaveJob()}>
            Save Job
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
