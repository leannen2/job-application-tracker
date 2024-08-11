package com.example.job_application_tracker.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class AddJobRequest {
    private String jobName;
    private String company;
    private String date;
}
