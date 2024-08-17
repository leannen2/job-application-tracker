CREATE DATABASE IF NOT EXISTS jobs_db;

USE jobs_db;

CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    link VARCHAR(255),
    stage ENUM('APPLIED', 'OA', 'RECRUITER_CALL', '1ST_ROUND', '2ND_ROUND', 'NEXT_ROUND', 'FINAL_ROUND', 'OFFER', 'REJECTED') NOT NULL DEFAULT 'APPLIED'
    );

-- INSERT INTO jobs (company, role, stage) VALUES ('Microsoft', 'SWE', 'APPLIED');
-- INSERT INTO jobs (company, role, link, stage) VALUES ('Microsoft', 'SWE', 'link.com', 'APPLIED');
