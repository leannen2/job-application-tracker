package com.example.job_application_tracker.controller;

import com.example.job_application_tracker.repository.Job;
import com.example.job_application_tracker.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {

    private final JobService jobService;

    @GetMapping("/jobs")
    public Mono<List<Job>> jobs() {
        return jobService.jobs();
    }

    @PostMapping("/add-job")
    public Mono<Void> addJob(@RequestBody Job job) {
        return jobService.addJob(job);
    }
}
