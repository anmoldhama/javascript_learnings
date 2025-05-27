Q) Basic / Fundamental AWS Lambda Questions
Q) What is AWS Lambda?
ans : Lambda is a serverless architecture which takes care of all the necessary requirements of a script to execute
      you can trigger using multiple options like alexa, api gateway, cloudwatch
      The cloud will takes care of the resources scaling up and down
      But this will have some latency as compares to server architecutre like EC2
      You can upload a zip, write from scratch, use docker image

      AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers.

It automatically scales with demand and supports event-driven architecture (e.g., via API Gateway, CloudWatch, S3, DynamoDB, Alexa, etc.).

You pay only for the compute time your code uses.

Compared to EC2, Lambda can have cold starts (initial latency), but it’s highly cost-efficient for lightweight or intermittent workloads.

Q) How does AWS Lambda pricing work?
ans : works on the basis of per request.
      You are billed based on:

Number of requests (First 1M/month free)

Duration (time your code runs, rounded to the nearest millisecond)

Memory allocated

Optionally, there’s provisioned concurrency pricing for consistent latency needs.

Q) What are the main benefits of using AWS Lambda?
ans : Auto scale/down, cloud takes care of resources, cost-efficient…

✅ Good answer — you might also mention:

Micro-billing (you only pay for what you use)

No server maintenance

Integration with many AWS services

Built-in fault tolerance



Q) Which programming languages are supported by AWS Lambda?
ans : Nodejs, java,Go, Python etc

Q) What is the default timeout for a Lambda function? Can you change it?
ans : The default timeout for an AWS Lambda function is 3 seconds.

Yes, you can change it — the maximum allowed timeout is 15 minutes (900 seconds).

You can configure this during:

Function creation via the AWS Console

Using the AWS CLI:

aws lambda update-function-configuration --function-name myFunction --timeout 120

In serverless.yml or similar if using frameworks.

Q) What is the maximum execution timeout limit for a Lambda function?
ans : The maximum timeout limit is 15 minutes (900 seconds).

Use longer timeouts only when absolutely necessary — for short tasks, it's better to keep timeouts small to avoid cold start delays and costs.

Q) What is a cold start in AWS Lambda?
ans : A cold start happens when AWS initializes a new container to run your Lambda function.

It includes:

Booting the runtime

Downloading your code

Initializing dependencies

This only happens when:

The function is invoked for the first time

After periods of inactivity

When the Lambda scales horizontally

Cold starts cause extra latency (100ms to 1+ sec).

Tip to reduce cold starts:

Use provisioned concurrency

Minimize initialization logic in the global scope

Q) What is the maximum memory you can allocate to a Lambda function?
ans : The memory for a Lambda function can be set from 128 MB to 10,240 MB (10 GB) in 1 MB increments.

More memory means:

More CPU and network throughput

Faster execution (in many cases)

Q) How do you deploy a Lambda function?
ans : You can deploy a Lambda function in multiple ways:

AWS Console:

Create a new Lambda

Write or paste code inline or upload a ZIP

AWS CLI:

aws lambda create-function --function-name myFunc \
  --runtime nodejs20.x \
  --role <execution-role-arn> \
  --handler index.handler \
  --zip-file fileb://function.zip
Infrastructure as Code (IaC):

Using tools like:

Serverless Framework

AWS SAM (Serverless Application Model)

Terraform

CloudFormation

CI/CD Pipeline:

Integrate with GitHub Actions, CodePipeline, etc.

Q) What are AWS Lambda execution roles?
ans : An execution role is an IAM role that a Lambda function assumes at runtime.

It defines what AWS services/resources your Lambda can access.

Example: If your Lambda reads from S3 and writes to DynamoDB, you must:

Attach a role with s3:GetObject and dynamodb:PutItem permissions.

Creating an execution role:

Go to IAM > Roles

Create a new role with AWS Lambda as the trusted entity

Attach required permissions

Assign this role to the Lambda

{
  "Effect": "Allow",
  "Action": ["s3:GetObject", "dynamodb:PutItem"],
  "Resource": "*"
}

Q) 🟡 Intermediate AWS Lambda Questions
Q) What are Lambda triggers? Name some AWS services that can trigger a Lambda function.

Q) How does AWS Lambda handle scaling with high-concurrency workloads?

Q) What’s the difference between synchronous and asynchronous invocation in Lambda?

Q) How can you pass parameters to a Lambda function?

Q) How do you handle error handling and retries in AWS Lambda?

Q) What are environment variables in AWS Lambda? How do you use them?

Q) Can a Lambda function call another Lambda function?

Q) What is the use of Layers in Lambda functions?

Q) How do you monitor a Lambda function?

Q) How can you secure sensitive data (like API keys) in a Lambda function?

Q) 🔴 Advanced AWS Lambda Questions
Q) What are Provisioned Concurrency and how does it solve the cold start problem?

Q) How does Lambda integrate with VPC, and what are the implications?

Q) How do you manage deployment and versioning in AWS Lambda?

Q) What are some best practices for optimizing Lambda performance?

Q) How does the AWS Lambda execution environment work behind the scenes?

Q) How do you implement CI/CD for Lambda functions?

Q) What are some common use cases for Lambda in microservices architecture?

Q) What is the difference between an AWS Lambda Container image and ZIP deployment?

Q) What are Lambda destinations and how do they differ from DLQ (Dead Letter Queue)?

Q) How would you debug and trace Lambda function issues in production?