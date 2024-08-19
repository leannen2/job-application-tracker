package com.example.job_application_tracker.controller;

import com.example.job_application_tracker.dto.AddJobRequest;
import com.example.job_application_tracker.repository.Jobs;
import com.example.job_application_tracker.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class JobController {

    private final JobService jobService;

    @GetMapping("/jobs")
    public Flux<Jobs> jobs() {
        return jobService.jobs();
    }

    @PostMapping("/add-job")
    public Mono<Void> addJob(@RequestBody AddJobRequest job) {
//        jobService.addJob(job);
        return Mono.empty();
    }
}
