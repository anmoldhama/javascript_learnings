🔹 Section 1: Basics of Docker (Beginner)
Q.1) What is Docker and why is it used?
ans : Docker is a platform (not just a CLI tool) for developing, shipping, and running applications using containerization. It lets you package apps with all dependencies into containers that run reliably in any environment.

Q.2) How is Docker different from a virtual machine?
ans : Docker is a seperate environment and shared the same resource of the operating system
     But on other hand virtual machine is a different environment do not share the same resource infact we have the allocate the resource to the vms at the time of creation.

     Docker uses OS-level virtualization, sharing the host kernel.
      VMs use hardware-level virtualization, each with its own OS and kernel, making them heavier and slower to start than containers.

Q.3) What is a Docker container?
ans : docker is a containerization technique using which you can create an very compressed image of your local application and pushed it to the docker registry from where anybody can pull this image and run on their local 
system without installing any dependency exist inside the image.

A Docker container is a lightweight, standalone, executable package that includes everything needed to run an application — code, runtime, libraries, and environment variables

Q.4) What is a Docker image?
ans : docker image is a set of layers which are used to create a compressed application which can be pushed to docker registry later.
    It is a snapshot of the application.

Q.5) What is Docker Engine?
ans : docker enginer is a brain of docker using which you are able to create containers and images
     which is responsible for running the containers and allocate the memory to them as well.
     Docker Daemon (dockerd)
     Docker CLI
     REST API for communication

Q.6) What is the role of the Docker Daemon?
ans : Docker Daemon is a docker enginer which has all the responsibilites like running the containers, allocate memory to them, build and push the images.

Docker Daemon (dockerd) listens to Docker API requests and manages Docker objects (containers, images, networks, etc.) and communicates with other daemons.

Q.7) What is a Dockerfile?
ans : Dockerfile consists of all the set of instruction to create an image known as layers.

Q.8) How do you build a Docker image?
ans : You can create a Dockerfile with all the required commands
      use the commmand (docker build -t image-name) this can build the image
      you can use (docker run image-name) to run the image

Q.9) How do you run a container from an image?
ans : you can use docker run image-name to run a container.

Q.10) What are Docker volumes? Why use them?
ans : Docker volumes are storage mechanisms used to persist data generated or used by containers. They are managed by Docker and survive container restarts or removals

Q.11) What is the difference between CMD and ENTRYPOINT?
ans : CMD: Provides default arguments for the container (can be overridden).

ENTRYPOINT: Defines the main command that always runs.

Q.12) What is the difference between COPY and ADD in Dockerfile?
ans : COPY: Copies files/directories from host.
ADD: Does the same but also supports remote URLs and auto-extraction of tar files (less preferred due to implicit behavior).

Q.13) How do you expose ports in Docker?
ans : 
In Dockerfile: EXPOSE 3000.
At runtime: docker run -p 3000:3000 image

Q.14) How do you inspect a running Docker container?
ans : you can use docker inspact id

Q.15) What is the difference between docker run and docker start?
ans : docker run: Creates + starts a new container
    docker start: Starts an existing (stopped) container

Q.16) How do you stop, restart, or remove a container?
ans : use can use docker stop id  -  to stop the container
                  docker start id - to restart the container
                  docker rm id - to remove the container

Q.17) How do you list all running and stopped containers?
ans : use docker ps  // running containers
      use docker -a // all containers

Q.18) How do you check logs of a container?
ans : docker logs id

Q.19) How do you execute commands inside a running container?
ans : docker exec -it id bash

Q.20) What is the difference between docker attach and docker exec?
ans : docker exec: Runs a new command inside a running container.
      docker attach: Connects to the container’s main process (stdout/stderr).


🔹 Section 2: Intermediate Docker Concepts
Q.21) What are Docker networks?
ans : Docker networks allow containers to communicate with each other and with external systems. Docker creates an isolated network for containers to interact securely.

Q.22) What types of Docker networks exist?
ans : bridge (default for standalone containers)

host (shares host network stack)

none (isolated, no networking)

overlay (used in Docker Swarm for multi-host networking)

macvlan (assigns MAC addresses to containers)

Q.23) How do containers communicate with each other?
ans : Containers can communicate if they are on the same user-defined bridge network using container names as hostnames.

Q.24) What are bind mounts vs volumes?
ans : Volumes are managed by Docker and stored in Docker’s internal directory.
      Bind mounts link a host file/folder to the container

Q,25) How do you persist data in Docker?
ans : By using volumes or bind mounts. These ensure data remains even if the container is deleted.

Q.26) How do you pass environment variables to containers?
ans : use the -e and pass the vairables are the time of running the containers.

Q.27) How can you secure secrets in Docker containers?
ans : Use Docker secrets in Swarm mode or mount secrets from secure files using bind mounts or external tools like Vault.

Q.28) What is a Docker tag?
ans : A Docker tag is a label applied to an image to identify different versions (e.g., myapp:1.0, myapp:latest)

Q.29) What is a multi-stage build in Docker?
ans : A multi-stage build allows using multiple FROM statements in a Dockerfile to separate build and runtime stages, reducing image size.

Q.30) How do you optimize Docker image size?
ans : Use multi-stage builds
     Use smaller base images (e.g., alpine)
     Combine commands (e.g., RUN apt-get update && apt-get install)
    Clean up temporary files

Q.31) What is an image layer in Docker?
ans : image layer are just the instruction written inside the Dockerfile each instruction is a single layer.

Q.32) What is the role of .dockerignore?
ans : .dockerignore is used to ignore the files/directories which you are not wants to push on the registry.

Q.33) How do you clean up unused images and containers?
ans : docker system prune            # remove unused data  
      docker image prune             # remove unused images  
      docker container prune         # remove stopped containers  


Q.34) What is a dangling image in Docker?
ans : A dangling image is an image that is not tagged and not referenced by any container. Usually <none> as the tag.

Q.35) How do you set resource limits for containers (CPU, memory)?
ans : docker run --memory="256m" --cpus="1.0" image_name

Q.36) What is the difference between foreground and detached mode?
ans : Foreground mode runs the container and attaches the terminal (docker run)
      Detached mode runs in the background using -d flag (docker run -d)

Q.37) How do you update a running container with a new image?
ans : You need to stop and remove the old container, then run a new one with the updated image:
      docker pull image:tag  
      docker stop container_id  
      docker rm container_id  
      docker run image:tag  


Q.38) How do you remove a Docker image?
ans : docker rmi image_name  

Q.39) How do you back up and restore Docker volumes?
ans : 
Backup: docker run --rm -v volume_name:/volume -v $(pwd):/backup busybox tar cvf /backup/backup.tar /volume

Restore: docker run --rm -v volume_name:/volume -v $(pwd):/backup busybox tar xvf /backup/backup.tar -C /

Q.40) Can a container have multiple processes?
ans : Yes, but it is recommended to run a single process per container. For multiple processes, use process managers like supervisord or run a script that manages them.

🔹 Section 3: Docker Compose
Q.41) What is Docker Compose?
ans : Docker Compose is a tool used to define and run multi-container Docker applications. It uses a docker-compose.yml file to configure services, networks, and volumes, and allows you to bring up all containers with one command: docker-compose up.
     It also created an network between the containers.

Q.42) What is the purpose of docker-compose.yml?
ans :  It defines services, volumes, networks, environment variables, ports, dependencies, and build context for containers in a Compose application.

Q.43) How do you define services, volumes, and networks in Compose?
ans : 
services:
  web:
    image: nginx
    ports:
      - "80:80"

volumes:
  mydata:

networks:
  mynet:


Q.44) How do you scale services in Docker Compose?
ans : Use the --scale flag with Docker Compose to run multiple instances of a service:
docker-compose up --scale web=3


Q.45) How do you override Compose settings for different environments?
ans : use the different files for different environments.

Q.46) How do you link containers using Docker Compose?
ans : You can use the services: inside this all the application are executed for linking docker automatically established an network between these but still you can gives the volumes and mapped the ports.

Q.47) What is the difference between docker-compose up and docker-compose start?
ans : docker-componse up is used to create and run the single container
      docker-compose start is used to run the existing stopped container.

Q.48) How do you debug issues with Docker Compose?
ans : Use docker-compose logs to view logs of services

Use docker-compose ps to check status

Use docker-compose config to validate the YAML

Use docker exec to get inside a running container

Q.49) How do you use .env files with Compose?
ans : Docker Compose automatically loads a .env file from the same directory as the docker-compose.yml file and substitutes variables like ${VAR_NAME}.

Q.50) What is the difference between depends_on and links?
ans : depends_on controls startup order (but not health checks).
      links is deprecated; it used to allow containers to communicate and set aliases.

 # docker is not used for production because it is not auto heal and fault tolerant.

🔹 Section 4: Docker Swarm & Orchestration
Q.51) What is Docker Swarm?
ans : 
Docker Swarm is Docker's native container orchestration tool, allowing you to manage a cluster of Docker nodes as a single virtual system. It provides:

High availability

Service scaling

Load balancing

Fault tolerance

It's a simpler alternative to Kubernetes and ideal for small to medium-scale production environments.

Q.52) How do you initialize a Swarm?
ans :
Use the command on the manager node:
docker swarm init
This makes the current node a Swarm manager. It will output a command like:
docker swarm join --token <worker-token> <manager-IP>:2377
You run this on other machines to add them as workers to the Swarm cluster.

Q.53) What is the difference between Swarm and Kubernetes?
ans : 
| Feature              | Docker Swarm     | Kubernetes                        |
| -------------------- | ---------------- | --------------------------------- |
| Complexity           | Simple to set up | Steeper learning curve            |
| Auto-scaling         | Manual           | Native support                    |
| Load balancing       | Built-in         | Built-in + Ingress options        |
| Ecosystem            | Docker-native    | Vendor-neutral, broader ecosystem |
| Secrets management   | Supported        | Stronger and more flexible        |
| Production-readiness | Basic            | Enterprise-level                  |


Q.54) How do services work in Swarm?
ans : In Swarm, a service defines the desired state of a task (container). When you deploy a service:

The Swarm manager schedules tasks (containers) across worker nodes.

Services are automatically restarted on failure.

Load balancing is done internally via routing mesh.
docker service create --name web --replicas 3 -p 80:80 nginx

Q.55) What is the difference between a container and a service in Swarm?
ans :
| Term          | Explanation                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Container** | A single instance of an image running an app                                                                       |
| **Service**   | A **declarative definition** of how many containers (tasks) to run, on what nodes, and how to update or scale them |


Q.56) How do you scale services in Docker Swarm?
ans : docker service scale web=5
     This command increases the number of replicas to 5.

Q.57) What is a manager and worker node?
ans :
| Role        | Purpose                                                   |
| ----------- | --------------------------------------------------------- |
| **Manager** | Handles cluster management, scheduling, and orchestration |
| **Worker**  | Executes the containers (tasks) assigned by the manager   |


Q.58) How do you deploy a stack using Swarm?
ans :docker stack deploy -c docker-compose.yml mystack
  docker stack deploy -c docker-compose.yml mystack
  manage it using:
  docker stack ls
docker stack services mystack
docker stack ps mystack



Q.59) What are Swarm secrets?
ans : Swarm secrets are secure, encrypted values (like passwords, API keys) shared between services at runtime.
docker secret create db_pass secret.txt
Secrets are never baked into images or exposed in environment variables.

Q.60) How do you perform rolling updates in Swarm?
ans : Swarm automatically performs rolling updates by default.
docker service update \
  --image myapp:2.0 \
  --update-parallelism 2 \
  --update-delay 10s \
  myapp


This updates 2 tasks at a time with a 10s delay between each batch. If a failure occurs, the update stops and rolls back.

🔹 Section 5: Docker with Kubernetes (K8s context)
Q.61) How is Docker used in Kubernetes?

Q.62) What is a Docker runtime?

Q.63) What is the future of Docker with Kubernetes (post deprecation)?

Q.64) What are the alternatives to Docker in Kubernetes (e.g., containerd, CRI-O)?

Q.65) How do you troubleshoot Docker containers in a Kubernetes Pod?

🔹 Section 6: Docker Security
Q.66) How do you secure a Docker container?

Q.67) What is a Docker escape?

Q.68) How do you avoid privilege escalation in Docker?

Q.69) What is the --cap-drop and --cap-add option?

Q.70) How do you scan Docker images for vulnerabilities?

Q.71) What is Docker Content Trust (DCT)?

Q.72) What are best practices to write secure Dockerfiles?

Q.73) How do you manage access to Docker Daemon?

Q.74) How do you protect secrets inside Docker containers?

Q.75) How do you verify the image origin?

🔹 Section 7: CI/CD & Docker Integration
Q.76) How is Docker used in CI/CD pipelines?

Q.77) How do you build Docker images in Jenkins/GitLab CI?

Q.78) What are some best practices for Docker in CI/CD?

Q.79) How do you deploy Docker containers in production?

Q.80) How do you rollback container deployments?

🔹 Section 8: Docker Registry & Image Management
Q.81) What is Docker Hub?

Q.82) What is a private Docker registry?

Q.83) How do you push and pull images?

Q.84) How do you tag and version Docker images?

Q.85) What is the difference between public and private images?

Q.86) How do you authenticate with Docker Hub or custom registries?

Q.87) What is Harbor? How does it compare to Docker Hub?

Q.88) How do you scan images before pushing them to registry?

Q.89) How do you host a secure private registry?

Q.90) What are immutable tags and why are they useful?

🔹 Section 9: Real-world Scenarios / Troubleshooting
Q.91) A container keeps restarting — how would you debug it?

Q.92) An image is too large — how would you reduce its size?

Q.93) You cannot connect two containers — how would you resolve it?

Q.94) The app works locally but fails in a container — what's your approach?

Q.95) Logs are not appearing — how do you fix that?

Q.96) You need zero-downtime deployments — how would you achieve that with Docker?

Q.97) A container uses 100% CPU — how would you limit it?

Q.98) You need to debug a production container — what's your approach?

Q.99) The volume data is not persistent — how would you fix it?

Q.100) How do you migrate a legacy app to Docker?





# Scenario based questions


🔹 Beginner-Level Docker Scenarios (1–15)
Basic Containerization
Q.1) Package a simple Node.js app into a Docker container and run it locally.
ans : FROM node:18
      WORKDIR /app
      COPY package*.json ./
      RUN  npm install
      COPY . .
      EXPOSE 3000
      CMD  ["npm" ,"start"]

Expose App Port
Q.2) Your app runs on port 3000 inside the container. Expose it to port 8080 on the host machine.
ans : docker run -p 8080:3000 image_name

Use Dockerfile Efficiently
Q.3) Convert a shell script-based deployment into a Dockerfile that builds an image.
ans : 
A Dockerfile is a text file that contains instructions to build a Docker image. To convert a shell script deployment into a Dockerfile, you need to translate the shell commands into Dockerfile instructions.


Multi-Container Setup
Q.4) Use Docker Compose to run a web app and a MongoDB instance together.
ans : use docker-componse.yml
      services:
           app:


      networks:

      volumes:

      depends_on


      version: "3.8"

services:
  app:
    build: .
    ports:
      - "8080:3000"
    depends_on:
      - mongo
    volumes:
      - .:/usr/src/app
    networks:
      - app-network

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:


Volume Mount
Q,5) You need the uploaded files to persist after the container restarts. Use Docker volumes.
ans : use the volumes which are managed by the docker and stored it inside their internal directory.
   When running the container:
     docker run -v my_volume:/app/uploads image_name


Fix Broken Container
Q.6) A container crashes immediately after docker run. How will you debug and fix it?
ans : Check container logs:
docker logs <container_id or name>
Run the container interactively to inspect errors:
      docker run -it --entrypoint /bin/bash image_name
      Verify if there are port conflicts or resource issues.
Check if another container with the same name is running:
      docker ps -a
If yes, remove or rename the existing container:
      docker rm <container_name>

      

Log Monitoring
Q.7) Your container logs are not showing up. How do you retrieve them and redirect to a file?
ans : docker logs <container_id_or_name> > container_logs.txt
      This command redirects the container logs to the file container_logs.txt in your current directory.

If logs are very long, you can use:

docker logs --tail 100 <container_id_or_name> > recent_logs.txt
To continuously stream and redirect logs, you can use:

docker logs -f <container_id_or_name> > live_logs.txt



Run a One-off Command
Use Docker to run a curl test against a container without keeping it running.

Environment Configuration
Pass secret credentials as environment variables securely without hardcoding.

Rebuild After Code Change
Your app doesn't reflect changes after editing code. What might be wrong and how to fix it?

Use .dockerignore Properly
Your Docker build is too large. Optimize it using .dockerignore.

Label an Image
Add metadata to your image to indicate version, author, and build info.

Restart Policy
Set up a container with a policy that restarts on failure but not on a normal stop.

Check Image Layers
Analyze your image to check how many layers are there and which ones are cacheable.

Clean Docker System
After weeks of usage, Docker is consuming 20GB+ disk space. Clean it safely.

🔸 Intermediate-Level Docker Scenarios (16–35)
Multi-Stage Builds
Your image is over 1GB. Use a multi-stage build to reduce the size.

Networking Containers
Connect a frontend and backend container using a custom bridge network.

Update a Running Container
Your container is running an old version of the app. Upgrade it with zero downtime.

Mount a Host Directory
Mount a local config/ folder into the container at runtime.

Reverse Proxy Setup
Set up NGINX as a reverse proxy to multiple Docker containers.

Limit Resource Usage
Constrain your container to 256MB RAM and 0.5 CPU cores.

Build Cache Optimization
Docker builds are slow due to no caching. Optimize layer ordering in the Dockerfile.

Use Docker Secrets
Inject secrets into containers without hardcoding them or exposing them via ENV.

Run Interactive Shell
Enter a running container and debug it using bash.

Run Containers in Detached Mode
Start multiple services in detached mode and manage them independently.

Debug Image Build Failures
Your docker build fails during the 3rd instruction. Debug and fix it.

Handle Port Conflicts
You get “port already in use” error on docker run. Resolve it safely.

Different Env per Stage
Use docker-compose.override.yml for dev vs production setup.

Push to Private Registry
Tag, authenticate, and push a local image to a private registry like Harbor or AWS ECR.

Use Healthcheck
Add a healthcheck to your container to verify app is ready before traffic is sent.

Run a Crontab in Docker
Set up a cron job inside a container that executes every 5 minutes.

Handle File Permission Issues
Containerized app cannot write to a mounted host folder. Fix file permissions.

Auto-Restart After Crash
Ensure that your container restarts automatically on crash or reboot.

Use Alpine to Reduce Size
Switch from Ubuntu to Alpine as base image and fix any broken dependencies.

Create Immutable Image Tags
Set up your CI/CD to use versioned immutable tags instead of latest.

🔺 Advanced/Production-Level Docker Scenarios (36–50)
Blue-Green Deployment
Implement a blue-green deployment strategy using Docker and NGINX.

Sidecar Container Pattern
Use a sidecar container to monitor logs or metrics from the main container.

Secure Docker Daemon
Set up TLS for Docker client-server communication.

Use Docker Content Trust
Ensure images are signed and verified before running them.

Scan Image Vulnerabilities
Integrate an image vulnerability scanner (e.g., Trivy, Clair) in your CI pipeline.

Run Docker in Docker (DinD)
Set up a container that runs Docker commands (used in CI pipelines).

Run Stateful Services with Docker Compose
Add data persistence and volume management for PostgreSQL and Redis.

Automated Backups Using Docker Volume
Use a backup container to regularly dump and archive database data.

Load Testing with Docker
Spin up multiple containers running a load testing tool like Apache Bench or JMeter.

Graceful Shutdown Handling
Make sure your app handles SIGTERM properly before the container is stopped.

Implement Rate Limiting
Use a reverse proxy container like Traefik or NGINX to apply rate limiting.

Run a Cluster with Swarm
Deploy a 3-node Swarm cluster with replication and scaling.

Monitor Docker Metrics
Use containers to run Prometheus + Grafana to monitor other Docker services.

Debug Memory Leaks in Container
Use tools like htop, valgrind, or strace inside containers to investigate memory issues.

Migrate to Kubernetes Runtime (containerd)
Replace Docker as runtime for Kubernetes nodes with containerd and validate container compatibility.