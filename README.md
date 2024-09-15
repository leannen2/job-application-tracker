# job-application-tracker (Work in progress)

## Project Description
Users can manage their job applications by tracking the statuses of each of their applications, storing application links, and noting deadlines. This application is built with a Java Spring Boot backend, MySQL database, and React Typescript frontend.

## How to run frontend dev container 
1. Cd to frontend root dir (where Dockerfile is)
2. ```docker build -t app-ui . ``` to build docker image
3. `docker run --name app-ui -p 3000:3000 -v .:/app -it b27c9fdb8b24 bash` to run container 

## How to run and connect to mysql container
1. Cd to docker/database
2. Run `docker compose up -d`
3. Check that database container is running in Docker Desktop
4. To connect, for **Windows** run `mysql -h localhost -P 3336 -u dev_user -p jobs_db` and for **MacOS** run `mysql -h localhost -P 3336 --protocol=TCP -u root -p jobs_db` (I'm connected from my local terminal to make sure I can connect to it outside the container)
5. It'll prompt for a password. Enter `dev_password`
6. You'll enter into the MySQL shell and can run MySQL queries like `SELECT * FROM jobs;` Enter `quit` to exit the MySQL shell.

## How to run backend tests
Note: Make sure sql server is running 
1. From root directory for backend, run `./gradlew clean build`

## Docker review
1. `docker exec -it <container_id_or_name> bash` : To open bash of running container
2. `docker start <container_id_or_name>` : Start container 

## References
1. Swagger UI: [Embracing Swagger in Node.js: A Practical Implementation Guide](https://medium.com/@selieshjksofficial/embracing-swagger-in-node-js-a-practical-implementation-guide-05f865c90b8d)
