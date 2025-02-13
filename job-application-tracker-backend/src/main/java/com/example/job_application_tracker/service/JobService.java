package com.example.job_application_tracker.service;

import com.example.job_application_tracker.repository.Job;
import com.example.job_application_tracker.repository.JobsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobsRepository jobsRepository;

    public Mono<List<Job>> jobs() {
        return jobsRepository.findAll().collectList();
    }

    public Mono<Job> addJob(Job job) {
        return jobsRepository.save(job).flatMap( r -> Mono.just(r));
    }
}
