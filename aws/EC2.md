Top 50 AWS EC2 Interview Questions
Basic & Conceptual
1. What is Amazon EC2 and what are its main features?
ans : Amazon EC2 is a IAAS type of services provided by the amazon to create a seperate virtual machine with selected resources.

2. What are the different types of EC2 instances available?
ans : EC2 instance types refer to categories based on performance and workload, such as:

General purpose: t2, t3, t4g, m5

Compute optimized: c5, c6g

Memory optimized: r5, x1

Storage optimized: i3, d2

Accelerated computing: p4, inf1
You mentioned OS types, not instance types.

3. What is an AMI (Amazon Machine Image)?
ans :  An AMI is a pre-configured template that contains the OS, application server, and applications used to launch an EC2 instance.

4. How do you launch an EC2 instance?
ans: Go to EC2 Dashboard → Launch Instance

Choose AMI (OS)

Choose Instance Type

Configure Instance (IAM, subnet, etc.)

Add storage

Add tags

Configure security group

Select/create Key Pair

Launch


5. What are key pairs in EC2 and why are they important?
ans : Key pairs consist of a public key (stored in AWS) and a private key (downloaded by the user) used for secure SSH access to Linux instances.

6. What is the difference between instance store and EBS-backed storage?
ans : 
Instance store: Temporary storage tied to the life of the instance

EBS-backed: Persistent storage that exists independently of the instance

7. What are the common EC2 instance states?
ans : pending, stop, terminated,"running", "shutting-down"

8. What is an Elastic IP address?
ans : An Elastic IP is a static public IPv4 address that you can allocate and associate with your EC2 instance, unlike a dynamic public IP.

9. How do you connect to an EC2 instance?
ans : Using ssh key saved as .pem
      using console
      using winscp

10. What is the difference between stopping and terminating an EC2 instance?
ans : after stopping an intance the data is not removed but the public ip address is changed its like a pause
      after terminating an instance the data is deleted also.

Security & Networking
11. What are Security Groups in EC2 and how do they differ from Network ACLs?
ans : Security Groups are the set of permissions that are given to the user to authenticate and authorize accordingly.
   Security Groups: Instance-level, stateful
   Network ACLs: Subnet-level, stateless

12. How can you restrict access to an EC2 instance?
ans : disable the permission from the security group or assign a different security group to the user in which the ec2 is disabled.

13. What is the role of IAM in EC2 management?
ans : IAM used for access management it manages the authentication and authorization.

14. Can you explain the concept of VPC and how EC2 instances work inside it?
ans: VPC stands for VPC stands for Virtual Private Cloud using which we creates the subnets to connect multiple ec2 machines to a single subnet.
   It's a logically isolated network for AWS resources, including subnets, route tables, gateways, etc.

15. How do you configure an EC2 instance to be publicly accessible?
ans : Assign a public IP address
      Configure a security group to allow inbound traffic (e.g., port 22 for SSH, port 80/443 for HTTP/HTTPS)

16. What is the difference between a public and private IP address in EC2?
ans :Public IP: Routable on the internet, assigned by AWS
Private IP: Used within the VPC; not internet-accessible unless via NAT or Elastic IP

17. How does Elastic Load Balancer (ELB) work with EC2?
ans : ELB distributes incoming traffic across multiple EC2 instances to ensure high availability and fault tolerance.

18. How can you secure your EC2 instances against unauthorized access?
ans : use the correct security group
      dont share the .pem key
      Use IAM roles, enable MFA, disable root login


19. What is the use of placement groups in EC2?
ans : Placement groups control how instances are placed on hardware. Types include Cluster, Spread, and Partition, to improve performance or fault tolerance.

20. What is a NAT Gateway and why is it used with EC2?
ans : A NAT Gateway allows instances in a private subnet to access the internet (e.g., for updates) while preventing inbound connections from the internet.

Storage & Backup
21. What is EBS? What types of EBS volumes are there?
ans : Amazon EBS (Elastic Block Store) is a block-level storage service designed for use with Amazon EC2. It provides durable, high-performance storage volumes that can be attached to EC2 instances. EBS volumes behave like raw, unformatted block devices and can be formatted and mounted like any hard drive.

Types of EBS Volumes:
General Purpose SSD (gp3, gp2):

gp3 is the newer generation.

Balances price and performance for a wide variety of workloads (e.g., boot volumes, small to medium-sized DBs).

gp3 offers baseline performance of 3,000 IOPS, and you can provision up to 16,000 IOPS independently of volume size.

Provisioned IOPS SSD (io2, io1):

Designed for I/O-intensive applications like large relational or NoSQL databases.

Supports up to 64,000 IOPS per volume.

io2 offers higher durability and better SLA guarantees than io1.

Throughput Optimized HDD (st1):

Designed for large, sequential workloads like big data, data warehousing, or log processing.

Lower cost than SSDs, good for throughput rather than IOPS.

Cold HDD (sc1):

Lowest cost, ideal for infrequently accessed data.

Not suitable for latency-sensitive workloads.

Magnetic (standard): (Deprecated)

Older generation. Replaced mostly by SSD and HDD options above.

22. How can you attach an EBS volume to an EC2 instance?
ans : You can attach an EBS volume using the AWS Management Console, AWS CLI, or SDKs.

Steps via Console:
Create a new EBS volume from the EC2 Dashboard → Volumes → Create Volume.

Ensure the Availability Zone (AZ) of the volume matches that of the target EC2 instance.

Select the volume → Click on “Actions” → “Attach volume”.

Choose the EC2 instance from the list and define a device name (e.g., /dev/xvdf).

Login to the EC2 instance and run:
sudo file -s /dev/xvdf    # Check if it's formatted
sudo mkfs -t ext4 /dev/xvdf   # Format it (if not already)
sudo mkdir /mnt/data
sudo mount /dev/xvdf /mnt/data


23. What are the different ways to back up EC2 data?
ans : There are multiple backup strategies depending on data criticality and architecture:

EBS Snapshots:

Point-in-time backup of EBS volumes.

Stored in S3 (managed internally by AWS).

Can be used to restore volumes or create AMIs.

Amazon Machine Images (AMIs):

Back up the entire EC2 instance including boot volume and configuration.

Can be used to launch new instances.

Manual Backup via File Copy:

Use rsync, scp, or backup software to copy data to another instance or storage, like S3.

EC2 Image Builder or Backup Tools:

Use AWS Backup, EC2 Image Builder, or third-party solutions for automated backup policies.

Cross-region Backup:

Copy snapshots to another region for disaster recovery.

24. How do snapshots work in EC2?
ans : An EBS Snapshot is a point-in-time backup of an EBS volume stored in Amazon S3 (not directly accessible to users). They are incremental, which means:

The first snapshot is a full copy of the volume.

Subsequent snapshots only store changes made since the previous snapshot, saving space and cost.

You can:

Use a snapshot to create a new volume in the same or different region.

Share snapshots across AWS accounts (if made public or shared).

Schedule snapshots using Amazon Data Lifecycle Manager or AWS Backup.

25. What is the difference between EBS snapshots and AMIs?
ans : | Feature        | **EBS Snapshot**                          | **AMI (Amazon Machine Image)**                                   |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| **Definition** | Backup of **individual EBS volumes**      | Image of the **entire EC2 instance** (root + additional volumes) |
| **Use case**   | Restore a specific volume                 | Launch new EC2 instances with same config                        |
| **Components** | Volume-level only                         | Includes **EBS snapshot(s) + launch configuration**              |
| **Bootable?**  | No (needs to be attached to EC2 manually) | Yes, can boot a new instance directly                            |
| **Stored in**  | S3 (internally by AWS)                    | References EBS snapshots; metadata stored in AWS EC2 service     |
| **Creation**   | Manual or via schedule                    | Created from existing instance or snapshot                       |


Performance & Scaling
26. What is Auto Scaling in EC2? How does it work?
ans : Auto Scaling in EC2 is a feature that automatically adjusts the number of EC2 instances in response to demand changes.
How it works:
You define an Auto Scaling Group (ASG) with:

Minimum, Maximum, and Desired instance count.

Launch template or Launch configuration (defining AMI, instance type, etc.).

You set scaling policies:

Based on CloudWatch metrics like CPU utilization, network traffic, etc.

Scheduled scaling based on time (e.g., scale up during business hours).

Auto Scaling:

Adds instances when demand increases (scale out).

Removes instances when demand decreases (scale in).

Health checks are used to replace unhealthy instances automatically.

Benefit: Ensures high availability, cost efficiency, and resilience.

27. How do you monitor the performance of EC2 instances?
ans : You can monitor EC2 performance using Amazon CloudWatch, which collects and tracks metrics.
Key Metrics to Monitor:
CPUUtilization

DiskReadOps / DiskWriteOps

NetworkIn / NetworkOut

StatusCheckFailed_Instance and StatusCheckFailed_System

Memory and Disk space (requires CloudWatch Agent)

Tools for Monitoring:
CloudWatch Dashboards

CloudWatch Logs (for application/system logs)

EC2 Monitoring Tab in the AWS Console

Third-party tools (e.g., Datadog, New Relic, Prometheus)

Use CloudWatch Agent for custom metrics like memory, disk space, and app logs.


28. What are CloudWatch alarms and how are they useful for EC2?
ans : A CloudWatch Alarm watches a specific CloudWatch metric and triggers an action based on conditions.

Usage for EC2:
Monitor instance health (e.g., alert if CPU > 80% for 5 mins).

Trigger Auto Scaling policies.

Send notifications via SNS (email, SMS, Lambda, etc.).

Stop, reboot, or terminate EC2 instances automatically (based on thresholds).

If CPUUtilization > 80% for 5 minutes
→ Send SNS alert
→ Trigger Auto Scaling policy to add another instance


29. What is the difference between vertical and horizontal scaling in EC2?
ans : | Scaling Type   | **Vertical Scaling**             | **Horizontal Scaling**                           |
| -------------- | -------------------------------- | ------------------------------------------------ |
| **Definition** | Increase instance size           | Increase number of instances                     |
| **Example**    | t2.micro → t3.large              | Add more t2.micro instances                      |
| **Pros**       | Simple to implement              | Better for high availability and load balancing  |
| **Cons**       | Limited by hardware              | Requires load balancing and architecture changes |
| **Downtime**   | May require reboot or stop/start | No downtime if properly configured               |

30. How does Elastic Load Balancer help in scaling EC2 instances?
ans : An Elastic Load Balancer (ELB) automatically distributes incoming traffic across multiple EC2 instances, improving fault tolerance and availability.

How it helps scaling:
Works with Auto Scaling: As new EC2 instances are added/removed, ELB automatically registers/deregisters them.

Distributes traffic to healthy instances in multiple AZs.

Supports health checks to route traffic only to healthy instances.

Enables zero downtime deployments using blue/green deployment or weighted routing.

Types of ELB:
Application Load Balancer (ALB) – Layer 7 (HTTP/HTTPS)

Network Load Balancer (NLB) – Layer 4 (TCP/UDP)

Gateway Load Balancer (GWLB) – Used with firewalls and third-party appliances

ELB ensures scalability, redundancy, and better user experience.

Cost & Billing
31. What are the different pricing models for EC2 instances?
ans : Amazon EC2 provides the following pricing models:

On-Demand Instances

Pay by the hour or second (depending on instance type).

No long-term commitment.

Ideal for short-term or unpredictable workloads.

Reserved Instances (RI)

Commit to a 1-year or 3-year term.

Up to 75% cheaper than On-Demand.

Good for steady, predictable workloads.

Spot Instances

Bid for unused EC2 capacity.

Up to 90% discount compared to On-Demand.

Instances can be terminated by AWS anytime.

Suitable for fault-tolerant or batch jobs.

Savings Plans

Flexible pricing model (like Reserved Instances but more adaptable).

Commit to a specific dollar amount per hour for 1 or 3 years.

Apply to any region, instance type, OS, or tenancy.

Dedicated Hosts

Physical servers dedicated to you.

Suitable for compliance or licensing requirements.

Capacity Reservations

Reserve capacity without long-term billing commitment.

Useful in cases of high-demand instance types.

32. How can you reduce the cost of running EC2 instances?
ans : Use Auto Scaling – Only run instances when needed.

Use Spot or Reserved Instances – Up to 90% savings.

Choose right instance type and size – Avoid over-provisioning.

Schedule stop/start for non-production environments.

Right-size instances using AWS Cost Explorer or Trusted Advisor.

Use Savings Plans if your usage is predictable.

Use Graviton (ARM-based) instances for better price-performance.

Monitor usage with CloudWatch and shut down idle instances.

Consolidate workloads to fewer instances if utilization is low.

33. What is a Reserved Instance and how does it differ from On-Demand?
ans : | Feature         | **Reserved Instance**                       | **On-Demand Instance**              |
| --------------- | ------------------------------------------- | ----------------------------------- |
| **Billing**     | Commit for 1 or 3 years                     | Pay per hour/second                 |
| **Discount**    | Up to 75% compared to On-Demand             | No discount                         |
| **Flexibility** | Less flexible (instance family/region tied) | Very flexible                       |
| **Best For**    | Predictable and steady workloads            | Short-term, unpredictable workloads |


34. What is Spot Instance and when should you use it?
ans : A Spot Instance lets you bid for unused EC2 capacity at significantly lower prices (up to 90% cheaper).

When to use Spot Instances:
Batch processing

Data analysis

Rendering workloads

CI/CD pipelines

Fault-tolerant workloads

Considerations:
AWS can reclaim the instance with 2 minutes' notice.

Use Spot Fleet or Spot Auto Scaling for more fault tolerance.

Spot Instances are ideal for cost-sensitive, non-critical workloads.

35. What is the difference between Savings Plans and Reserved Instances?
ans : | Feature           | **Savings Plans**                        | **Reserved Instances (RI)**              |
| ----------------- | ---------------------------------------- | ---------------------------------------- |
| **Commitment**    | \$/hour (monetary commitment)            | Instance type, region, platform          |
| **Flexibility**   | High – applies across instance families  | Less – tied to specific instance configs |
| **Scope**         | Any compute service (e.g., EC2, Fargate) | Only for EC2                             |
| **Billing Scope** | Account/organization-wide                | Account or region specific               |
| **Use Case**      | Greater flexibility, multiple services   | Long-term predictable EC2 usage          |


Advanced & Troubleshooting
36. How do you troubleshoot an EC2 instance that is not reachable?
37. What happens if an EC2 instance in an Auto Scaling group fails health checks?
38. How can you migrate an EC2 instance to a different region?
39. Can you explain the use of user data scripts when launching EC2 instances?
40. What is the difference between EC2 and Lightsail?
41. How do you enable monitoring on an EC2 instance?
42. How do you handle instance metadata in EC2?
43. What is the role of the Instance Metadata Service (IMDS)?
44. What are Elastic Network Interfaces (ENI) and why are they used?
45. How do you perform blue-green deployment using EC2?

Integration & Ecosystem
46. How do EC2 instances integrate with other AWS services?
47. What is the use of AWS Systems Manager with EC2?
48. How do you patch or update software on multiple EC2 instances?
49. What is EC2 Fleet?
50. How can you automate EC2 instance management using AWS Lambda?