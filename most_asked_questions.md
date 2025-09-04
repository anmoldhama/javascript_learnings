Q1. What is your last project?

My last project was Rapidshyp, a Seller Aggregator Platform. I was responsible for building and maintaining the Order Management System (OMS), which followed a microservices architecture.

In this system:

Sellers could create orders and shipments via a clean API or dashboard.

They had the ability to choose a courier partner based on price, SLA, and serviceability using an integrated courier recommendation engine.

Once confirmed, shipments were automatically booked, tracked, and pushed through the logistics pipeline until final delivery to the buyer.

I implemented several microservices such as:

Order Service for creating and updating orders

Shipment Service for handling shipment lifecycles

Courier Service to fetch pricing and availability

Notification Service for WhatsApp and email updates

We used RabbitMQ for inter-service communication, MongoDB for storing transactional data, and deployed services on AWS ECS.

The system also included:

Role-based authentication

Audit logs

Automated retries and circuit breakers to handle unreliable courier APIs.

This project gave me deep hands-on experience with microservices, async communication, service orchestration, and robust error handling at scale.


Q.2) What was the most technically challenging task you handled, and how did you solve it?
ans : The most challenging task was implementing a shipment reconciliation service that matched internal shipment records with third-party courier tracking data, even when data was delayed or inconsistent. This required building a fault-tolerant scheduler that periodically fetched tracking data from multiple courier APIs and matched it to internal records using fuzzy logic. I used a Redis-backed queue for retries, added logging via ElasticSearch for traceability, and introduced metrics to monitor stale shipments. This significantly reduced SLA misses and improved shipment tracking reliability.

Q.3) Have you ever worked in a high-pressure or deadline-critical situation? What did you do?

ans : Yes, during the onboarding of a high-volume e-commerce seller, we had to ensure the OMS scaled to handle spikes of 5x the usual order traffic. I conducted load testing, optimized MongoDB aggregation pipelines, scaled RabbitMQ workers horizontally, and worked closely with the DevOps team to autoscale instances. We successfully onboarded the seller without downtime.

Q.4) Have you ever worked on a project where requirements kept changing? How did you handle it?

ans : Yes, especially in the courier selection flow, where business kept experimenting with different pricing and SLA strategies. I refactored the code to use strategy design patterns and modular service layers. This made it easier to plug in new courier logic and reduced rework.

Q.5) What is one mistake you made in a past project and how did you fix or learn from it?

ans : In the initial version of the rate comparison logic, I tightly coupled courier selection with the shipment creation logic. This made it hard to switch couriers later in the workflow. I learned the importance of separation of concerns, refactored the system to make rate fetching and shipment booking independent services, and now I plan extensibility up front in similar modules.


Q.6) Describe a time when you disagreed with a tech decision. What did you do?

ans : We had to choose between using Kafka and RabbitMQ for inter-service communication. The team preferred RabbitMQ due to familiarity. I made a detailed comparison based on use cases, throughput, and delivery guarantees. We eventually went with RabbitMQ but adopted Kafka for log processing later. This helped me understand how to align architectural decisions with both team comfort and future scalability.

Q.7)  Have you ever had to choose between performance and maintainability?

ans : Yes, during the development of the Order Management System in the RapidShyp seller aggregator project, we faced a scenario where we needed to generate bulk picklists and invoices for thousands of shipments in real-time. Initially, we designed a maintainable and modular solution using multiple microservices communicating via REST. While clean and easy to manage, it introduced latency due to network overhead and data transformations.

To improve performance, especially under peak loads, I re-evaluated the architecture. I introduced a batching mechanism at the queue level (using RabbitMQ) to reduce the number of inter-service calls. Additionally, I selectively denormalized data in MongoDB for faster reads, even though it slightly increased write complexity.

The trade-off was reduced modularity in that specific part of the system, but the performance gains were critical for the business SLA. I documented the architectural decision clearly and wrapped the optimization in a well-isolated service so it wouldn’t affect overall maintainability.

This experience taught me how to find a practical balance—starting with a maintainable design, identifying bottlenecks through profiling, and applying focused optimizations without compromising the overall codebase quality.


Q.8) Tell me about a time when you proactively identified a bug or optimization.

ans : While analyzing high latency in the order tracking dashboard, I noticed repeated DB calls for the same tracking data. I added caching at the GraphQL resolver level using in-memory and Redis layers. This reduced latency by over 60%

Q.9)  Have you handled production issues? How did you approach debugging and resolution?

ans : Yes, I’ve handled multiple incidents. I use ElasticSearch logs, Prometheus metrics, and tracing via Jaeger. My approach is to narrow the issue by reproducing it in staging, identify affected services, fix or rollback quickly, and then document the root cause and prevention steps in our RCA tracker.

Q. 10) How do you prioritize tasks when multiple critical issues come at once?
ans : I evaluate impact on revenue, SLA, and number of users affected. I communicate openly with stakeholders, break down tasks among the team, and focus first on stopping the bleeding (containment), then fixing root causes.

Q.11) How do you upskill yourself and stay current with new technologies?
ans : I follow a weekly schedule where I read tech blogs, explore GitHub trending repositories, and apply learnings via side projects. I follow industry leaders on Twitter, read newsletters like Node Weekly, and participate in backend-focused Discord communities.

Q.12) What is one new tool, language, or framework you learned recently and why?

ans : Recently, I started working with Fastify, a Node.js web framework, as an alternative to Express. I chose to explore Fastify primarily because of its performance benefits—it is designed to be lightweight and extremely fast, which is crucial for high-throughput services.

In the context of my work on the RapidShyp seller aggregator project, where performance and scalability are key, I wanted to evaluate frameworks that could help reduce response times, especially when dealing with high-frequency API calls for order and shipment processing.

I was impressed with Fastify’s built-in schema validation using JSON Schema, which makes request validation more consistent and performant. Its plugin architecture also allows for modular code that’s easy to maintain and extend.

Switching to Fastify in a couple of internal tools reduced our latency and improved throughput by around 15–20%. It was a valuable learning experience and reinforced the importance of evaluating new tools not just for novelty, but for actual impact on the system's performance and maintainability

Q.13) Do you follow any blogs, communities, or YouTube channels regularly? Which ones?
ans : yes i follow Hacker news, r/programming/r/technology on reddit, youtube channels like akshay saini, gaurav sen for systeme designs

Q.14) If you had 1 week of free time, what would you learn or build?
ans : 
If I had a free week, I’d like to work on a Generative AI project using OpenAI APIs. I’ve been closely following the rapid evolution in this space and would love to build something creative yet practical—perhaps a smart assistant for logistics or customer service that can handle seller and buyer queries intelligently using contextual understanding.

My goal would be to integrate this with real backend services—possibly fetching order/shipment data, summarizing it, and interacting with external APIs—to simulate real-world usage in the kind of microservices architecture I worked on at RapidShyp. It would be a great way to explore prompt engineering, API rate limits, caching strategies (with Redis maybe), and even role-based conversation flows.

This would also allow me to learn more about LangChain, vector embeddings, and RAG (Retrieval-Augmented Generation)—areas I’m very interested in from both a technical and product-building perspective

Q.15) What’s a tech concept or system design topic you’re currently exploring?
ans : 
Currently, I’m exploring how to build highly scalable and highly available systems, especially in the context of distributed backend architectures.

My focus is on understanding:

Horizontal scaling patterns using microservices

Database partitioning (sharding) and replication strategies

Stateless services with externalized session management (using Redis)

Health checks, failovers, and graceful degradation to ensure uptime

Load balancing and traffic routing using reverse proxies like NGINX or service meshes like Istio

And the trade-offs between consistency, availability, and partition tolerance (CAP theorem)

Q.16) How do you handle conflicts with team members or cross-functional teams (e.g. QA, DevOps)?
ans : I believe in listening first. I try to understand the other person's challenges, offer facts and data, and focus on solving the problem, not winning the argument. If needed, I involve leads or PMs to resolve blockers.

Q.17) Have you ever mentored a junior developer or onboarded someone new?
ans : Yes, I’ve onboarded new team members by preparing setup docs, running walkthroughs, and assigning them low-risk tickets with proper support. I also help with PR reviews and pair programming sessions.

Q.18) What tools do you use to document and communicate effectively (e.g. Notion, Jira, Confluence)?
ans : 
In my current project, we use Jira for sprint and task management—this helps us track epics, stories, and bugs efficiently. For documentation, we use Confluence to maintain technical specifications, onboarding guides, and architectural diagrams. This ensures that every team member has a single source of truth.

For communication, we mostly rely on Slack and prefer asynchronous updates through dedicated threads or standup channels. This minimizes meeting overhead and helps keep the team aligned without blocking anyone.

Q.19) Why are you looking to switch from your current/last company?
ans : 
While working on RapidShyp was a great learning experience, I’m now looking to tackle more complex distributed systems, high-volume architectures, and learn from more mature engineering teams. I also want to explore opportunities with deeper system design and decision-making exposure.

Q.20) What kind of company culture or team environment do you thrive in?
ans : I thrive in ownership-driven, collaborative, and transparent teams. I enjoy environments where knowledge sharing, continuous feedback, and learning from failures is encouraged. I prefer a healthy mix of autonomy and mentorship.