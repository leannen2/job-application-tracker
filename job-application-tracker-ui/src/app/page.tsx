"use client";
import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddJobModal } from "@/components/ui/AddJobModal";

import { getJobs } from "@/app/api/jobs";

import { Job } from "@/lib/definitions";

import Jobs from "@/app/api/jobs-list-example.json";

export default function Home() {
  const [jobs, setJobs] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobs(data);
      })
      .catch(() => {
        setJobs(Jobs);
      });
  }, [loading]);

  return (
    <main>
      <Table>
        <TableCaption>A list of your job applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Submitted At</TableHead>
            <TableHead>OA Deadline</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job: Job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.id}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.submittedAt}</TableCell>
              <TableCell>{job.oaDeadline}</TableCell>
              <TableCell>
                <a href={job.link} target="_blank">
                  {job.link}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddJobModal setLoading={setLoading} />
    </main>
  );
}
