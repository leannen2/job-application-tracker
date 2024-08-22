package com.example.job_application_tracker.controller;

import com.example.job_application_tracker.dto.AddJobRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

@SpringBootTest
public class JobControllerIntegrationTest {
    WebTestClient webTestClient;

    @BeforeEach
    void setUp(final ApplicationContext context) {
        webTestClient = WebTestClient.bindToApplicationContext(context).build();
    }

    @Test
    void jobs() {
        webTestClient
                .get()
                .uri("/jobs")
                .exchange()
                .expectStatus()
                .isOk();
//                .expectBody(Jobs.class);
//                .value( response -> {
//                    assertThat()...
//                })
    }

    @Test
    void addJob() {
        AddJobRequest requestBody = AddJobRequest
                .builder()
                .role("SWE")
                .company("MICROSOFT")
                .build();
        webTestClient
                .post()
                .uri("/add-job")
                .body(Mono.just(requestBody), AddJobRequest.class)
                .exchange()
                .expectStatus()
                .isOk();
    }
}
