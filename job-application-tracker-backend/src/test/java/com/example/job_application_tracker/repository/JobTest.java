package com.example.job_application_tracker.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.json.JsonMapper;
import org.junit.jupiter.api.Test;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

public class JobTest {
    @Test
    void json() throws JsonProcessingException {
        final var body = """
                {
                    "company": "CoreLogic",
                    "role": "SWE",
                    "submittedAt": "2011-05-18",
                    "oaDeadline": "2011-05-18",
                    "link": "link",
                    "stage": "APP_SUBMITTED"
                }
                """;

        final var mapper = JsonMapper.builder().build();

        final var pojo = mapper.readValue(
                body,
                Job.class
        );
        assertThat(pojo.getCompany()).isEqualTo("CoreLogic");
        assertThat(pojo.getRole()).isEqualTo("SWE");
//        assertThat(pojo.getOaDeadline()).isEqualTo(Date.valueOf("2024-08-22"));
        assertThat(pojo.getSubmittedAt()).isEqualTo(LocalDate.of(2011, 5, 18));
    }
}
