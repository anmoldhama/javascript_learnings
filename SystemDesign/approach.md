🔍 50 Common Cross-Questions in High-Level Design Interviews
About Requirements & Scope
Q$N) What assumptions are you making about the requirements?
ans :
In HLD, it's critical to clarify assumptions early to avoid over- or under-engineering. Typical assumptions include:

Expected traffic and data volume (e.g., 1000 requests/day now, possibly 10x in a year).

Types of users (e.g., sellers vs. admins vs. system integrators).

Latency expectations (e.g., <1s for alerts, <5s for reports).

Data consistency needs (e.g., eventual consistency is acceptable for reports, but not for order placement).

Feature scope: real-time alerts, reporting, authentication, integrations with external courier APIs.


Q$N) How would your design change if the traffic doubles overnight?
ans :
If traffic doubles (say from 1K → 2K/day or 100K → 200K/day), the design should already support horizontal scaling. Design-level changes may include:

API Gateway and stateless services can autoscale.

Kafka topics might need more partitions for higher throughput.

WebSocket server (alert engine) might be sharded or scaled with sticky sessions.

MongoDB may need increased read replicas or sharded collections.

Use of caching layers (e.g., Redis) for hot data like courier metadata, order lookups.

Q$N) How do you prioritize functional vs non-functional requirements?
ans :
I use the MoSCoW method (Must have, Should have, Could have, Won’t have) to evaluate functional requirements first.

Functional (e.g., place orders, get tracking) must deliver business value.

Non-functional (e.g., scalability, reliability, latency) ensure quality of service.

I prioritize:

Core functionality first, then

Security & reliability, followed by

Performance & scalability, then

Developer experience (DX).

Q$N) What is your approach to handle changing requirements mid-project?
ans :
I follow these principles:

Loosely coupled architecture: Changing one service doesn’t break others.

Feature flags: Enable partial rollouts.

OpenAPI contracts: So consumers aren’t impacted by backend changes.

Versioning: For APIs and Kafka topics to handle backward compatibility.

Agile delivery: Iterative development allows early feedback.

About Data Modeling & Storage
Q$N) Why did you choose SQL/NoSQL for this use case?
ans : We choose NoSQL because of the flexible schema or the orders
      and It will gives the flexibility to change the schema at the mid level of the project.

Q$N) How do you handle schema migrations with minimal downtime?
ans :
For MongoDB, which is schema-less:

We use schema versioning at the document level (e.g., schemaVersion: 1).

Update logic is baked into service code to migrate on-read or on-write.

Background jobs run batched migrations for old data.

For SQL:

Use online schema migration tools (e.g., Liquibase, Flyway, pt-online-schema-change).

Add new columns first → backfill → then remove old ones in later deploys.

Zero-downtime via blue-green deployments or shadow writes.

📌 Never block reads/writes during migration.

Q$N) What if the data volume grows 100x? How does your storage scale?
ans : 
At 100x volume:

MongoDB:

Enable sharding by a high-cardinality key (e.g., seller_id).

Monitor document size limits (16MB) and index growth.

Add read replicas to scale reads.

Use TTL indexes for cleanup of temporary/log data.

General:

Move large logs/analytics to a data lake or cold storage.

Archive old reports or use S3 + Glacier for low-cost retention.

📌 The data model and infra should support horizontal scaling from day one.

Q$N) How do you ensure data consistency across distributed databases?
ans :
In a distributed system, I use:

Kafka to publish events → consumer services update their own DBs.

Idempotent updates and event versioning to prevent duplication/conflict.

Outbox Pattern to reliably publish changes to Kafka from DB transactions.

Use saga patterns for long-running, distributed workflows like order → shipping → alert.

Periodic data reconciliation jobs to detect and fix inconsistencies.

Q$N) How do you back up your data, and how often?
ans :
For MongoDB:

Daily automated backups using mongodump or cloud-native backups (Mongo Atlas).

Store backups in S3 (versioned, encrypted).

Run periodic restore drills to ensure backup integrity.

For Kafka, use topic retention policies + snapshot of consumer offsets.

For critical data (orders, users):

Point-in-time backups or WAL-based replication.

📌 Backup strategy includes recovery time (RTO) and recovery point (RPO) objectives.

About APIs & Communication
Q$N) How do you version your APIs without breaking existing clients?
ans :
API versioning is crucial to evolve APIs while maintaining backward compatibility. Common strategies include:

URI Versioning: Include version number in the URL path, e.g., /api/v1/orders. This makes version explicit and easy to route.

Header Versioning: Use a custom header like Accept: application/vnd.myapp.v1+json. This keeps URLs clean but requires client support.

Query Parameter Versioning: Pass version as a query param, e.g., /orders?version=1. Less common due to caching complexity.

To avoid breaking clients:

Maintain multiple versions simultaneously until clients migrate.

Use semantic versioning to communicate changes (major for breaking, minor for backward-compatible).

Introduce deprecation policies with clear timelines and documentation.

Design APIs to be backward compatible, e.g., additive changes (new fields, endpoints).

Use feature flags for gradual rollout.

Inside services:

Separate routing and controllers for different versions.

Test all versions thoroughly to avoid regressions.

Q$N) How do you secure the communication between services?
ans :
To secure inter-service communication, follow these best practices:

Use TLS/SSL: Encrypt all data in transit using HTTPS or mutual TLS (mTLS) to prevent eavesdropping and tampering.

Authentication & Authorization: Use tokens (JWT, OAuth2, or API keys) to authenticate service requests and enforce fine-grained access control.

Network Policies & Segmentation: Deploy microservices in isolated network segments with firewalls and restrict traffic flows.

Service Mesh: Use tools like Istio or Linkerd to handle secure service-to-service communication transparently, including mTLS and policy enforcement.

Input Validation & Rate Limiting: Prevent injection attacks and abuse by validating all incoming data and throttling requests.

Audit Logging & Monitoring: Track all communications for anomalies or breaches.



Q$N) What do you do if a downstream service is slow or unresponsive?
ans :
To handle slow or unresponsive downstream services gracefully:

Timeouts: Set reasonable timeouts on service calls to avoid indefinite waits.

Retries with Backoff: Implement retry logic with exponential backoff and jitter to reduce load on the struggling service.

Circuit Breaker Pattern: Use circuit breakers to stop calling the failing service temporarily and fallback to alternative logic or cached data.

Bulkheads: Isolate resources so that failure or slowness in one service doesn’t cascade.

Fallbacks: Provide fallback responses or cached data to maintain partial functionality.

Monitoring & Alerts: Continuously monitor latency and error rates to trigger alerts for rapid response.

Q$N) How do you design your system to be resilient to network partitions?
ans :
Network partitions can cause communication failures between microservices. To design resilient systems:

Graceful degradation: Design services to handle partial unavailability, e.g., serve cached or partial data.

Eventual Consistency: Accept that data may be temporarily inconsistent and design for eventual reconciliation.

Timeouts and retries: Use timeouts and retries with backoff to handle transient failures.

Idempotency: Design APIs and message consumers to be idempotent to safely retry operations.

Circuit Breakers & Bulkheads: Isolate failures and prevent cascading outages.

Use messaging queues (Kafka, RabbitMQ): Decouple services asynchronously to reduce reliance on synchronous calls that fail during partitions.

Monitoring & Recovery: Detect partitions quickly and trigger automated recovery or manual intervention.



Q$N) How do you prevent duplicate or out-of-order messages?
ans :
In distributed systems, duplicates or out-of-order messages are common. Strategies include:

Idempotent Consumers: Design message processing to produce the same result regardless of repeated processing.

Unique Message IDs: Attach unique identifiers to messages and track processed IDs to avoid duplication.

Sequence Numbers: Use sequence numbers or timestamps to detect and reorder messages as needed.

Kafka Ordering Guarantees: Use Kafka partitions and consumer groups so messages within a partition are ordered and processed sequentially.

Exactly-once Processing: Use transactional message processing where possible (Kafka transactions, database transactions).

Deduplication Storage: Maintain a cache or database of recent message IDs to discard duplicates.

Use Message Brokers with Delivery Guarantees: Choose brokers that support at-least-once or exactly-once delivery semantics.

About Scalability & Performance
Q$N) How does your system handle traffic spikes or flash crowds?
ans :
To handle traffic spikes or flash crowds effectively:

Auto-scaling: Use auto-scaling groups or container orchestrators (like Kubernetes) to automatically add or remove instances based on traffic load.

Load Balancing: Distribute incoming requests evenly across healthy instances to prevent overload.

Rate Limiting & Throttling: Protect backend systems by limiting requests per user/IP to prevent abuse or overload.

Queueing & Buffering: Use message queues (Kafka, RabbitMQ) to buffer spikes and smoothen request processing.

Caching: Use CDN and in-memory caches (Redis, Memcached) to reduce backend load.

Graceful degradation: Temporarily disable non-critical features or serve degraded responses under heavy load.

Backpressure mechanisms: Push back or reject new requests when the system is overloaded, signaling clients to retry later.

Q$N) What caching strategies do you use, and how do you invalidate caches?
ans :
Common caching strategies include:

Cache-aside (Lazy Loading): Load data into cache on-demand when it is first requested; update cache on writes or expire.

Write-through Cache: Write data to cache and database simultaneously to keep cache updated.

Write-back Cache: Write data to cache and asynchronously persist to the database later (more complex, risk of data loss).

Read-through Cache: Cache automatically loads data if missing on read requests.

Cache invalidation strategies:

Time-to-live (TTL): Set expiration time for cache entries to avoid stale data.

Explicit Invalidation: Invalidate or update cache entries when data changes in the backend.

Cache Busting: Use versioning or keys that change on data update.

Event-driven Invalidation: Use messaging or events (e.g., Kafka events) to trigger cache refreshes on data changes.

Q$N) How do you avoid bottlenecks in your architecture?
ans :
To avoid bottlenecks:

Identify bottlenecks early: Use profiling and monitoring tools to find slow components.

Distribute load: Use load balancers and partitioning (sharding) to spread traffic.

Horizontal scaling: Add more instances of services or databases.

Asynchronous processing: Offload heavy or slow tasks to queues or background workers.

Optimize database queries: Use indexing, caching, and read replicas to reduce DB load.

Use CDN for static content: Reduce load on origin servers.

Decouple services: Use message brokers or event-driven architecture to reduce tight coupling

Q$N) Can you explain the trade-offs between vertical and horizontal scaling?
ans :
Vertical Scaling (Scaling Up): Increasing resources (CPU, RAM, storage) on a single machine.

Pros: Simple to implement, no code changes required.

Cons: Limited by hardware capacity, single point of failure, can be expensive.

Horizontal Scaling (Scaling Out): Adding more machines or instances to distribute load.

Pros: Better fault tolerance, theoretically unlimited scalability, supports distributed systems.

Cons: More complex architecture, requires load balancing, data consistency can be challenging.

Choosing depends on workload type, budget, complexity tolerance, and scaling goals.

Q$N) How would you design for low latency in your system?
ans :
Use caching aggressively: Cache frequently accessed data close to users (CDN, in-memory cache).

Optimize network paths: Use geographically distributed data centers or edge computing.

Reduce payload size: Compress data and avoid sending unnecessary data.

Efficient protocols: Use faster protocols like HTTP/2 or gRPC.

Asynchronous operations: Use non-blocking IO and async processing to avoid waiting.

Database optimization: Use indexes, partitioning, and read replicas to speed up queries.

Load balancing: Distribute requests to avoid overloaded servers.

Avoid synchronous calls: Prefer eventual consistency and event-driven designs.

About Fault Tolerance & Reliability
Q$N) What happens if a component or database node crashes?

Q$N) How do you handle partial failures in distributed systems?

Q$N) How do you implement retries without causing cascading failures?

Q$N) What monitoring and alerting systems would you put in place?

Q$N) How do you handle data loss or corruption?

About Consistency & Concurrency
Q$N) How do you ensure consistency in concurrent updates?

Q$N) Would you choose eventual consistency or strong consistency here? Why?

Q$N) How do you handle race conditions in distributed systems?

Q$N) What locking or optimistic concurrency control mechanisms would you use?

Q$N) How do you handle idempotency in APIs or message processing?

About Security & Compliance
Q$N) How do you authenticate users and services?

Q$N) How do you manage authorization for different user roles?

Q$N) How do you store sensitive data securely?

Q$N) How do you protect against common web vulnerabilities?

Q$N) How do you audit or log access for compliance?

About Deployment & DevOps
Q$N) How do you deploy updates with zero downtime?

Q$N) What strategies do you use for rollback or disaster recovery?

Q$N) How do you test your system before production deployment?

Q$N) How do you handle database migrations during deployment?

Q$N) How do you monitor production incidents and respond to them?

About Trade-offs & Alternatives
Q$N) Why did you choose X technology over Y?

Q$N) What are the bottlenecks or limitations of your design?

Q$N) How would your design differ if latency was more important than availability?

Q$N) What would you change if cost became a major constraint?

Q$N) How would your design change if the system was user-facing vs backend-only?

About Advanced Topics
Q$N) How would you handle data privacy regulations like GDPR in your design?

Q$N) How do you ensure scalability when adding new microservices?

Q$N) How do you deal with version skew between microservices?

Q$N) How do you design your system for multi-region deployment?

Q$N) What strategies do you use for database sharding and rebalancing?

Q$N) How do you debug or troubleshoot performance issues in a distributed system?





 # ------------------------------Rapidshyp---------------------------------------


 ✅ 1. General System Design & Architecture
Q$N) Why did you choose microservices over a monolith?

Q$N) How do your services communicate — sync (REST) vs async (Kafka)?

Q$N) How do you ensure backward compatibility when services evolve?

Q$N) How do you manage service discovery and routing?

Q$N) How are you handling schema evolution in Kafka messages?

Q$N) What happens if a service fails? How is resilience handled?

Q$N) How do you monitor the health of each service?

Q$N) Do you have circuit breakers or retries in place?

Q$N) How are environment-specific configs (like Kafka brokers) managed?

Q$N) How do you handle logs and traces across services?

✅ 2. API Service + Auth
Q$N) Why is authentication/authorization handled in API service and not Auth Service?

Q$N) How do you manage JWT tokens — expiry, refresh, revocation?

Q$N) How do you prevent token misuse or replay attacks?

Is RBAC (Role-based access control) implemented? How is it structured?

Q$N) How does API gateway validate tokens or delegate that responsibility?

✅ 3. OMS (Order Management Service)
Q$N) How does OMS handle order deduplication (idempotency)?

Q$N) How is order creation flow designed — sync or async?

Q$N) What happens if Kafka is down when OMS publishes?

Q$N) How are order status updates stored? Is it event-sourced or state-stored?

Q$N) How do you correlate webhook tracking data to the original order?

✅ 4. Shipping Service
Q$N) How is integration done with multiple couriers — adapters, plugins, or if-else?

Q$N) What if a courier partner API is down?

Q$N) How are timeouts and retries managed?

Q$N) What is the SLA for courier response? What happens on violation?

Q$N) Do you cache courier API metadata (like pincode serviceability)?

✅ 5. Reports Service
Is report generation real-time, scheduled, or on-demand?

Q$N) How do you avoid blocking sellers when generating large reports?

Q$N) How is report data fetched — directly from MongoDB or pre-aggregated?

Q$N) How do you ensure report correctness if the data is eventually consistent?

Q$N) What is the retention strategy for old reports?

✅ 6. Notification Service
Q$N) How do you handle failures in sending WhatsApp/SMS/Email?

Q$N) Are all messages sent reliably or is best-effort enough?

Q$N) How do you track delivery status (callbacks, receipts)?

Q$N) Are messages queued in Kafka? What if the consumer fails?

Q$N) What notification service would you scale first under load?

✅ 7. Alert Engine (WebSockets)
Q$N) How are you managing WebSocket connections at scale?

Q$N) What happens when the backend server crashes — are connections restored?

Q$N) Do you use sticky sessions or session replication?

Q$N) What message broker or in-memory store helps you with pub/sub for alerts?

Q$N) How do you send alerts to the right user/session?

✅ 8. Kafka (Async Communication)
Q$N) What is the schema strategy — JSON, Avro, or Protobuf?

Q$N) How do you handle replaying Kafka topics in case of failure?

Q$N) Are Kafka consumers idempotent? What if duplicate messages arrive?

Q$N) Do you use consumer groups? Why or why not?

Q$N) What happens if message processing fails? DLQ (Dead Letter Queue)?

✅ 9. MongoDB as a Database
Q$N) Why did you choose MongoDB over a relational DB?

Q$N) How is data modeled — embedded documents or referenced?

Q$N) How do you handle indexing and large aggregations?

Q$N) What happens if a MongoDB replica node goes down?

Q$N) Do you handle schema migrations in MongoDB?

✅ Bonus: Real-Time and Business-Specific Questions
Q$N) How do you ensure alerts are shown in <1s from event creation?

Q$N) What’s your strategy for maintaining event ordering in Kafka?

Q$N) How do you trace an event from API gateway → OMS → Shipping → Notification?

Q$N) How do you protect against spamming the alert engine with too many updates?

Q$N) What are the biggest scalability risks in your design?




📌 A. Architecture Trade-Offs for Low Traffic
❓ Why did you choose a microservice architecture if your traffic is only 1000 requests/day?

❓ Couldn’t a monolith have done the job with less operational overhead?

❓ Are you over-engineering with Kafka and WebSockets for this scale?

❓ What trade-offs are you making by going distributed at low scale?

📌 B. Tracking System (Webhooks → Real-Time Updates)
❓ What happens if the courier sends the webhook multiple times?

❓ How do you validate that the webhook payload is authentic and from a trusted source?

❓ How do you match the webhook event with the correct order?

❓ How quickly does the user see a change after the webhook is received?

❓ Do you store the full webhook payload for auditing?

📌 C. Real-Time via WebSocket / Alert Engine
❓ How do you manage WebSocket reconnections if a seller refreshes the tab?

❓ How are alerts routed to the right seller/user session?

❓ Why not use polling or Server-Sent Events (SSE) given the low frequency of events?

❓ Do you use Redis Pub/Sub or Kafka to broadcast to WebSocket clients?

❓ How do you manage memory if thousands of WebSocket connections stay idle?

📌 D. Kafka Justification & Usage
❓ What’s the reason for choosing Kafka instead of a simpler queue like RabbitMQ or Redis streams?

❓ What if Kafka is down? Is there any retry or fallback?

❓ Is Kafka overkill for 1000 req/day? How do you justify the ops cost?

❓ How do you ensure idempotency in Kafka consumers?

❓ What’s your partitioning strategy in Kafka for OMS events?

📌 E. MongoDB Usage
❓ Why MongoDB for a transactional system like OMS?

❓ Do you face any challenges with joins or aggregations?

❓ How do you ensure data consistency in MongoDB updates from multiple services?

❓ Would a relational DB have worked better here given low scale and relational data?

📌 F. Fault Tolerance / Reliability
❓ If the WebSocket server crashes, do users lose alerts?

❓ If webhook delivery from courier is delayed, how do you handle SLAs?

❓ What happens if a Kafka consumer crashes while processing an event?

❓ Is there a DLQ (Dead Letter Queue) for failed messages?

❓ How do you retry failed webhook → shipping → OMS flows?

📌 G. Optimization & Simplicity
❓ Can you simplify the system to reduce infrastructure costs?

❓ Would a hybrid approach (monolith + async events) work better?

❓ How often are tracking events really received — once a day, per order?

❓ Have you benchmarked the latency between webhook arrival and alert delivery?

📌 H. Monitoring, DevOps, and Observability
❓ How do you trace the journey of an event from webhook → OMS → Kafka → WebSocket?

❓ What tools do you use for monitoring Kafka, WebSockets, MongoDB, etc.?

❓ How do you alert if a tracking update fails silently?

❓ Do you log all events for debugging real-time updates?

📌 I. Security & Data Integrity
❓ How do you secure webhook endpoints from unauthorized access?

❓ Can someone spoof a tracking update?

❓ How do you protect against WebSocket hijacking or impersonation?

❓ How do you verify sender authenticity for notification messages?

📌 J. Business Logic & Workflow
❓ Can one order have multiple tracking updates in parallel? How do you handle that?

❓ Can an order be updated out of order?

❓ How is OMS state updated reliably when multiple updates come?

❓ How is alert content customized per seller?

❓ Can sellers disable alerts or customize notification channels?

📌 K. Scaling and Future Readiness
❓ If traffic grows to 1M/day, what breaks first?

❓ Can your architecture scale to multi-tenant or multi-country support?

❓ How do you isolate failures between services?

❓ How do you ensure service discovery, rate limiting, and throttling?

❓ Do you plan to implement a central event store or audit log for all updates?

