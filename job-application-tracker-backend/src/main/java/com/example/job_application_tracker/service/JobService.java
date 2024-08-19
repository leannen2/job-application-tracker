package com.example.job_application_tracker.service;

import com.example.job_application_tracker.repository.Jobs;
import com.example.job_application_tracker.repository.JobsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobsRepository jobsRepository;

    public Flux<Jobs> jobs() {
        return jobsRepository.findAll().map(item -> {
            System.out.println(item);
            return item;
        });
    }

    public void addJob(String job) {
    }
}
