package com.example.job_application_tracker.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

public class JobTest {
    @Test
    void json() throws JsonProcessingException {
        final var body = """
                {
                    "company": "Company1",
                    "role": "SWE",
                    "submittedAt": "2011-09-27",
                    "oaDeadline": "2011-05-18",
                    "link": "link",
                    "stage": "APP_SUBMITTED"
                }
                """;

        final var mapper = JsonMapper.builder().build();
        mapper.registerModule(new JavaTimeModule());

        final var pojo = mapper.readValue(
                body,
                Job.class
        );
        assertThat(pojo.getCompany()).isEqualTo("Company1");
        assertThat(pojo.getRole()).isEqualTo("SWE");
        assertThat(pojo.getOaDeadline()).isEqualTo(LocalDate.of(2011, 5, 18));
        assertThat(pojo.getSubmittedAt()).isEqualTo(LocalDate.of(2011, 9, 27));
    }
}
