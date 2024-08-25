package com.example.job_application_tracker.repository;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table("jobs")
public class Job {
    @Id
    @Column("id")
    private int id;

    @Column("company")
    private String company;

    @Column("role")
    private String role;

    @Column("submitted_at")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private LocalDate submittedAt;

    @Column("oa_deadline")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private LocalDate oaDeadline;

    @Column("link")
    private String link;

    @Column("stage")
    private String stage;
}
