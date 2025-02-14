# Job Application Tracker

## Project Description

Users can manage their job applications by tracking the statuses of each of their applications, storing application links, and noting deadlines. This application is built with a Java Spring Boot backend, MySQL database, and NextJS Typescript frontend.

# Installation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- npm
- Java JDK 21 or later
- Gradle

## Set Up MySQL Container

1. Navigate to dockerfile:  
   `cd job-application-tracker-backend/docker/database`
2. Build and start the docker image:  
   `docker compose up -d`

## Set Up Backend

1. Navigate to root of backend folder at `/job-application-tracker-backend`
2. Run `./gradlew clean build` to run backend tests
3. Run `./gradlew bootRun` to start the backend server.

## Set Up Frontend

1. Navigate to root of frontend folder at `/job-application-tracker-ui`
2. Install NPM packages  
   `npm install`
3. Run the Next.js application  
   `npm run dev`

## Accessing the Application

- Open your web browser and visit `http://localhost:3000` to view the frontend.
- The backend will serve APIs on `http://localhost:8080`.
