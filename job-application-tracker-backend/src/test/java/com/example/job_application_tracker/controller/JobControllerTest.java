package com.example.job_application_tracker.controller;

import com.example.job_application_tracker.repository.Job;
import com.example.job_application_tracker.service.JobService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
public class JobControllerTest {
    private JobController subject;

    @Mock
    JobService jobService;

    @BeforeEach
    void setUp() {
        subject = new JobController(jobService);
    }

    @Test
    void jobs() {
        List<Job> jobs = List.of(
                Job.builder().build()
        );
        Mockito.when(jobService.jobs()).thenReturn(
                Mono.just(jobs)
        );

        StepVerifier
                .create(subject.jobs())
                .assertNext(response -> {
                    assertThat(response).isEqualTo(jobs);
                })
                .verifyComplete();
    }

    @Test
    void addJob() {
        Job job = Job.builder().build();
        Mockito.when(jobService.addJob(job)).thenReturn(
                Mono.just(job)
        );

        StepVerifier
                .create(subject.addJob(job))
                .assertNext(response -> {
                    assertThat(response).isEqualTo(job);
                })
                .verifyComplete();
    }

    @Test
    void delete() {
        Mockito.when(jobService.deleteJob(0)).thenReturn(
                Mono.empty()
        );

        StepVerifier
                .create(subject.deleteJob("0"))
                .verifyComplete();
    }
}
