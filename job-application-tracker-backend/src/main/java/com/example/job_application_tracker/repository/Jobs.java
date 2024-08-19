package com.example.job_application_tracker.repository;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table("jobs")
public class Jobs {
    @Id
    @Column("id")
    private int id;

    @Column("company")
    private String company;

    @Column("role")
    private String role;

    @Column("submitted_at")
    private LocalDateTime submittedAt;

    @Column("oa_deadline")
    private LocalDateTime oaDeadline;

    @Column("link")
    private String link;

    @Column("stage")
    private String stage;
}
