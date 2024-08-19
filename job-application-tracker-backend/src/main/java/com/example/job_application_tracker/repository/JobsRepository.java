package com.example.job_application_tracker.repository;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobsRepository extends R2dbcRepository<Jobs, Integer> {
}
