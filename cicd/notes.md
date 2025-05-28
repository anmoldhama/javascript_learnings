
 #  Process Management

 keeps the process running unless stopped explicitely

 Key Features

 * Keeps apps running continuosly
 * Automatically restarts crashed apps.
 * Provides monitoring and logging.
 * Supports running multiple app instances for better performance.


 npm i -g pm2


to ssh inside the ec2 machine

go to the .pem destination

ssh -i filename.pem ubuntu@ipaddress

pm2 status  to check the staus of appliation
pm2 stop   to stop the pm2
pm2 start app.js


curl used for terminal same as postman  in linux


 # CICD

 continous integration
   It is a development practise where developrs frequently integrate their code changes to the version control, preferably several times a day. Each integration is automatically verified by
   1. Building the project and
   2. Running automated tests.
   This process is allows teams to detect the problems early, improve software quality, and reduce the time it takes to validate and release new software updates.

 continous deployement
    As the name suggests, deploying your code continously to various environments (dev/stage/prod);


  # SOME SPECIAL FILES IN GITHUB
   
   Some useful cases where this might be handy:

  * To run unit/integrated tests
  * To run lint/format checking
  * To build the application
  * Deploy it whenever someone pushes their code


# Deploy an app using CICD

 * Create an EC2 instance
 * create an ssh key on the github
 * cd ./ssh
 * .ssh cat id_rsa | pbcopy
 * copy and paste this private key into the github secret
 * .ssh cat id_rsa-pub | pbcopy
 * ls
 * vi authorized_key and paste the key inside this
 * create an deploy.yml for the project
 * expose the port using n


 # Deploying a monorepo (http, ws, prisma, postgres, next)
 - npx create-turbo@latest
 - use bms, pnpm
 - setup the project
 - 
 # env variables
 # dev vs prod environments, periodic releases
 # Testing in CI pipelines
 # Cert management
 # CD pipeline to refresh certs every month

