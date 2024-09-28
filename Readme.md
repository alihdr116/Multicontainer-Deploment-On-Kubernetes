# Single CRUD Node.js MySQL Application

This is a CRUD (Create, Read, Update, Delete) web application built with Node.js, React.js, and MySQL, using Docker for containerization.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to set up and run the application on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/alihdr116/single-crud-nodejs-mysql.git

### 2. Navigate to the Project Directory
```bash
cd single-crud-nodejs-mysql

### 3 . Build and Run the Docker Containers
Run the following command to build the Docker containers and start the application:

```bash
docker-compose up --build

### 4. Access the Application
Access the Application
Once the containers are up and running, you can access the application in your browser at:

http://localhost:3000

### 6. Troubleshooting
If the application doesn't work the first time, try stopping the containers and running them again:

```bash
docker-compose down
docker-compose up



Alternatively, if you're facing MySQL issues, you can try removing the MySQL data and restarting everything:

```bash
sudo rm -rf ./mysqldata
docker-compose down
docker-compose up --build

### 7. Stopping the Containers
To stop the running containers, use:

```bash
docker-compose down