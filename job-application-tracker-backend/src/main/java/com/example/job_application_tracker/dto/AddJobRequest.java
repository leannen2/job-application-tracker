package com.example.job_application_tracker.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddJobRequest {
    private int id;
    private String company;
    private String role;
    private LocalDateTime submittedAt;
    private LocalDateTime oaDeadline;
    private String link;
    private String stage;
}
