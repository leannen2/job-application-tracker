CREATE DATABASE IF NOT EXISTS jobs_db;

USE jobs_db;

CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    submitted_at DATE,
    oa_deadline DATE,
    link VARCHAR(255),
    stage ENUM('APP_NOT_SUBMITTED', 'APP_SUBMITTED', 'OA_RECEIVED', 'OA_COMPLETED', 'RECRUITER_CALL', '1ST_ROUND', '2ND_ROUND', 'NEXT_ROUND', 'FINAL_ROUND', 'OFFER', 'REJECTED') NOT NULL DEFAULT 'APP_NOT_SUBMITTED'
);

INSERT INTO jobs (company, role, submitted_at, oa_deadline, stage) VALUES ('Microsoft', 'SWE', '2024-11-20', '2024-12-25', 'OA_RECEIVED');
INSERT INTO jobs (company, role, link, submitted_at, stage) VALUES ('Microsoft', 'SWE', 'link.com', '2024-11-11', 'APP_SUBMITTED');
