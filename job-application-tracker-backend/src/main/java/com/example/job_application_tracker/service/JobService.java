package com.example.job_application_tracker.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobService {
    private List<String> jobs = new ArrayList<>();

    public List<String> jobs() {
        return jobs;
    }

    public void addJob(String job) {
        jobs.add(job);
    }
}
