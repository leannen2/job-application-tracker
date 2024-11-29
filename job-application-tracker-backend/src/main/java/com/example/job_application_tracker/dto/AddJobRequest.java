package com.example.job_application_tracker.dto;

import lombok.*;

import java.time.LocalDate;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddJobRequest {
    private int id;
    private String company;
    private String role;
    private LocalDate submittedAt;
    private LocalDate oaDeadline;
    private String link;
    private String stage;
}
