🔹 Architecture & System Design
Q.1) What is the difference between monolithic and microservices architecture?
ans : monolithic architecture has all the code in a single codebase and a single server
      all the batabases are also connected to this only service
      If this will crash then the complete applicaton is crashed
       It's simple to develop, test, and deploy, but difficult to scale and maintain as it grows.


      Microservice architecture has multiple code bases
      each one could be written in different technology
      Flexible for used by the multiple teams
       it introduces complexity in inter-service communication, monitoring, and deployment.

Q.2) Explain the CAP theorem with real-world examples?
ans : CAP stands for Consistency, Availability, and Partition Tolerance.

Consistency: All nodes see the same data at the same time.

Availability: Every request receives a response, without guarantee that it contains the most recent data.

Partition Tolerance: The system continues to operate despite network partitions.

You can only choose two in any distributed system:

CP: MongoDB (ensures data consistency, but may sacrifice availability during network issues).

AP: Couchbase (available and partition-tolerant but may serve stale data).

CA: Traditional SQL databases (not distributed — assumes no partition).


Q.3) How would you design a scalable URL shortener like Bit.ly?
ans : 1) create a backend server that accepts the full url
      2) Apply the logic to shorten it
      3) save the shorten url with the full url
      4) Give the shorten url to the user
      5) If user request to the shorter url then it will redirect to the full url
      Add caching for faster lookups, and rate-limiting to prevent abuse.

      Scale using horizontal scaling and load balancers.


Q.4) What are eventual consistency and strong consistency?
ans : Strong Consistency means every read gets the latest write. Example: SQL databases or systems using distributed consensus like etcd or Spanner.

Eventual Consistency means all nodes will eventually converge to the same value, but reads might be stale in the meantime. Example: DynamoDB, Cassandra, or MongoDB with certain settings.

 Example: Eventual Consistency in MongoDB
🔧 Setup:
You have a MongoDB replica set with:

1 primary node

2 secondary nodes

🧍 Actors:
User A writes to the primary node.

User B reads from a secondary node.

🧾 Step-by-Step Scenario:
1. ✅ User A updates a document:

// Connect to primary
db.users.updateOne(
  { _id: 1 },
  { $set: { status: "active" } }
);
This write goes directly to the primary node and is immediately saved there.

2. ❗ Secondary nodes not updated yet:
MongoDB replicates this change to secondaries asynchronously.
So, for a few milliseconds or seconds, secondaries may still have the old value, say:

json
Copy
Edit
{ _id: 1, status: "inactive" }
3. 🧍‍♂️ User B reads from a secondary:
js
Copy
Edit
// Connect with read preference to secondary
db.getMongo().setReadPref('secondary');

db.users.findOne({ _id: 1 });
✅ What might happen?
User B might still get:

json
Copy
Edit
{ _id: 1, status: "inactive" }
even though User A already changed it to "active".

🕐 After Some Time...
Replication completes, and secondaries are updated:

json
Copy
Edit
{ _id: 1, status: "active" }
Now, any read (even from secondaries) will return the correct and latest data.

⏱ Eventual Consistency Visual
pgsql
Copy
Edit
Time ---->
         ┌────────────┐        ┌────────────┐
         │ Primary    │        │ Secondary  │
         └────────────┘        └────────────┘
             │                     │
    WRITE ───▶ status = active     │
             │                     │
             │     ─────Replicates after delay──▶
             │                     │ status = active


Use Cases Where This is Fine
Profile picture update: If it shows the old picture for 1 second, it’s okay.

Product review count: Might be slightly outdated, not critical.

User presence: “Online” status might lag a bit, acceptable in most apps.

❗ If You Want Strong Consistency Instead:
Always read from primary:


db.getMongo().setReadPref('primary');
MongoDB’s readConcern: "majority" ensures the data is replicated to a majority before a read returns.


Q.5) When would you use message queues in your backend architecture?
ans : message queues are used to set the communication between multiple microservices asynchronously.


Q.6) How does a load balancer work, and why is it needed?
ans : A load balancer distributes incoming traffic across multiple servers to ensure no single server is overwhelmed. It improves availability, fault tolerance, and performance. Algorithms include round-robin, least connections, IP hash, etc.


Q.7) What is horizontal vs vertical scaling?
ans : horizonal scaling means to add multiple machines.
      Vertical scaling means to add more resources on a single machine.


Q.8) What is the role of a reverse proxy?
ans : A reverse proxy like NGINX or HAProxy sits between clients and servers. It forwards client requests to backend services, handles load balancing, SSL termination, caching, and can act as a security layer.


Q.9) How do you implement rate limiting in an API?
ans : Rate limiting controls the number of requests a user can make in a time window. In Express.js, express-rate-limit or Redis with sliding window algorithm is commonly used to store request counts by IP or API key.

Q.10) What are idempotent operations and why are they important in APIs?
ans : 🔁 Idempotent Operations (in APIs)
📘 Definition:
An operation is idempotent if repeating it any number of times produces the same result on the server and does not cause unintended side effects.

✅ Idempotent HTTP Methods:
Method	Idempotent?	Example	Behavior
GET	✅ Yes	/users/123	Just retrieves data. Multiple calls = same result.
PUT	✅ Yes	/users/123 with { age: 25 }	Replaces the whole resource. Repeating it = no extra effect.
DELETE	✅ Yes	/users/123	Deletes the resource. Repeated deletes = still deleted.
HEAD	✅ Yes	/users/123	Like GET, but only headers. No state change.

🚫 Non-Idempotent Method:
Method	Idempotent?	Example	Behavior
POST	❌ No	/users with { name: "Anmol" }	Each request creates a new resource (e.g., new user). Repeating = multiple users.

🔁 Why Idempotency Matters (especially in distributed systems)
In real-world systems:

Network failures happen.

A retry mechanism may re-send a request automatically.

❗ If the request is not idempotent, retries can duplicate data or actions (e.g., duplicate orders/payments).

✅ With idempotent operations like PUT, retries won't cause problems.

🔄 PUT vs PATCH vs POST
🟨 1. PUT – Full Update
Replaces the entire resource.

If a field is missing, it is cleared or removed.

✅ Idempotent.

PUT /users/123
Body: { "name": "Anmol", "age": 25 }
Repeat this 5 times → Result is always the same.

🟩 2. PATCH – Partial Update
Updates only the specified fields.

Leaves the rest unchanged.

✅ Usually idempotent (depends on implementation).


PATCH /users/123
Body: { "age": 25 }
Only changes the age. Name, email etc., remain unchanged.

🟥 3. POST – Create
Creates a new resource.

❌ Not idempotent — every call usually creates a new entry.

POST /users
Body: { "name": "Anmol", "age": 25 }
Call it twice → Creates two different users.

🧪 Scenario: Update the age of a user
✅ Best Options:
Use Case	Preferred Method	Why?
Update only age	PATCH /users/123 with { age: 25 }	Only touches age field. Efficient.
Update full user info	PUT /users/123 with { name: "Anmol", age: 25 }	Replaces entire user. Useful for syncing.
Create a new user	POST /users	Creates new record.

✅ Summary
Method	Use for	Idempotent	Example
GET	Read data	✅ Yes	/users/1
POST	Create new	❌ No	/users
PUT	Replace resource	✅ Yes	/users/1
PATCH	Update part	✅ Yes (usually)	/users/1



🔹 Databases (SQL & NoSQL)
Q.11) Compare relational and non-relational databases.
ans : relational database
      1) support acid properties
      2) store data in relational fixed schema format 
      3) store data in tables have rows
      4) use the concept of primary and foreign key for referencing.
      5) strong consistent
      6) used where the consistency is the priority like banking websites,financial applications
      Relational DBs use Structured Query Language (SQL)

      Non-relational databases
      1) support base properties
      2) eventualy consistent due to replica sets delay
      3) could be show stale data
      4) Highly scalable and available but not strongly consistent
      5) store data in bson format(key value pair).
      6) Not have fixed schema
      7) Have collections(tables) and documents(rows)
      Non-relational DBs can use various models: Document, Key-Value, Column-Family, Graph.
      In NoSQL, documents are more like "rows", not the other way around.

Q.12) What is normalization and denormalization?
ans : normalization is a technique in which the data is seperated into multiple tables for modularization
      data visibility and maintainance of relations but it will delay the data fetching.
      Normalization avoids data redundancy and maintains integrity using 1NF, 2NF, 3NF, BCNF, etc.

      Denormalization is a technique in which the data is collected into a single entity for low latency
      reduce the delay in the data fetching.
      Denormalization is done to improve read performance, especially in read-heavy systems.

Q.13) What are database indexes and how do they work?
ans : Data indexes are used for the query optimization
      If we create index on the frequently accessed data then the query result is very fast

      Indexes are stored as a B-Tree datastructure in a seperate space with a key and address of the memory
      of the complete row 
      If the user tries to query the the data then index is help to find the exact record very fast due to the location.
      
      Indexes reduce read time but increase write time.
      Some databases (e.g., MongoDB) also support compound indexes, TTL indexes, text indexes, etc.


Q.14) How do transactions work in relational databases?
ans : transactions follows all the acid properties
      1) They will execute completely else nothing.
      2) At the end of a transaction the data is consitent in every tables.
      3) Every transaction execute in a isolation.
      4)  Every data is durable after the transaction completes.
      5) Transaction uses BEGIN, COMMIT, ROLLBACK as part of transaction lifecycle.


Q.15) What is database sharding and how do you implement it?
ans : Database sharding creates the multiple database instances each called shard which has the different data
      distributed on the basis of shard ids. this will help to scale database horizontally.

      for implementation we create a shard key(on the basis of region)
      
      If the request is coming from mumbai region the data is saved in mumbai region shard
      Shard key selection is crucial – should avoid hotspots.
      Sharding is horizontal partitioning, whereas partitioning in RDBMS can also be vertical.


Q.16) Explain ACID vs BASE properties?
ans : ACID stands for Atomicity Consistency Isolation Durability
     These are very helpful for the Transactions
      1) Atomicity means any transaction is completely executed else rollbacked
      2) After the transaction completed every node should read the same data not stale data.
      3) Isolation means every transaction is isolated with each other.
      4) Durability means after the transaction completes the data is same in all the shards.


      Base stands for Basically Available, Soft state, Eventually consistent
      These are used in NoSQL dbs
      1) Basically Available – System guarantees availability.
      2) Soft state – State may change over time without input.
      3) Eventually consistent means the data within the write replica set is only consistent not in all the replica sets.


Q.17) How would you model a many-to-many relationship in a database?
ans : Use a junction table (also called a join table).
      Example: students_courses (student_id, course_id) table connects students and courses.


Q.18) What are the pros and cons of using NoSQL over SQL?
ans :  pros :
        1) High Scalability and availability out of the box due to default 1 primary and 2 secondary replica sets.
        2) Schema less architecture
        3) Low latency
        4) Used for real-time systems
        Add that NoSQL is better for unstructured/semi-structured data (e.g., logs, JSON)

        cons :
        1) Eventually consistent
        2) May reads the stale data
        lack of JOINs, weaker consistency, and less mature tooling.


Q.19) How do you handle schema migrations in production?
ans : Use version-controlled migration tools like:

SQL: Flyway, Liquibase, Alembic

MongoDB: Mongock, custom scripts

Ensure:

Backward compatibility

Zero-downtime deployments

Rollback plan if migration fails


Q.20) What is optimistic vs pessimistic locking?
ans : Type	                       Explanation
Optimistic Locking	                 Assumes no conflict. Data is read, version is stored, and update is only     
                                     committed if no one else has modified it (e.g., version field). Good for low contention systems.
Pessimistic Locking	                  Locks the resource when read, preventing others from modifying until 
                                     released. Suitable for high-conflict environments.


🔐 1. Pessimistic Locking
🧠 Concept:
Assumes that conflicts will happen, so it prevents other transactions from accessing the data until the current one finishes.

⚙️ How it works:
When a transaction reads a row, it locks it immediately.

Other transactions must wait (or fail) until the lock is released.

Prevents dirty reads, non-repeatable reads, and phantom reads.

🔄 Types:
Shared lock (read lock): Allows reading by multiple transactions but no write.

Exclusive lock (write lock): Only one transaction can access and modify.

✅ Example (SQL):
sql
Copy
Edit
BEGIN;

SELECT * FROM accounts WHERE id = 1 FOR UPDATE;

-- Do some updates
UPDATE accounts SET balance = balance - 100 WHERE id = 1;

COMMIT;
The FOR UPDATE locks the row. Other transactions must wait.

✅ Use Cases:
Banking systems

Inventory management

High-risk environments where data integrity is critical

✅ Pros:
Prevents conflicts completely.

Ensures consistency.

❌ Cons:
Low concurrency.

Can lead to deadlocks.

Reduces performance under high load.




2. Optimistic Locking
🧠 Concept:
Assumes that conflicts are rare, so it allows transactions to proceed and checks for conflicts only at the time of update.

⚙️ How it works:
A version number (or timestamp) is read along with data.

When updating, it checks if the version is still the same.

If the version changed (someone else updated), the update is rejected or retried.

✅ Example (Pseudo-code):
ts
Copy
Edit
// Read Phase
const product = db.products.findOne({ _id: 1 });

// Update Phase - uses version field
db.products.updateOne(
  { _id: 1, version: product.version },
  {
    $set: { price: 120 },
    $inc: { version: 1 }
  }
);
If another process updated the product and incremented version, this update will fail.

✅ Use Cases:
Web applications

High-concurrency systems

Low-conflict environments (e.g., user profiles, shopping carts)

✅ Pros:
High concurrency and performance.

No deadlocks.

❌ Cons:
Requires custom retry logic.

May lead to update failures under high conflict.




🔹 Caching & Performance
Q.21) How does caching improve backend performance?
ans : caching will reduce the query on the main database.
      Caching improves backend performance by reducing the number of direct requests to the primary database, lowering response time, decreasing load on the database server, and improving scalability and throughput.

Q.22) What are cache eviction policies?
ans : Cache eviction policies determine how cache entries are removed when the cache is full. Common policies include:

LRU (Least Recently Used) – removes least recently accessed items.

LFU (Least Frequently Used) – removes least frequently accessed items.

FIFO (First In First Out) – removes the oldest entries.


Q.23) What’s the difference between write-through and write-behind cache?
ans : Write-through cache: Data is written to both the cache and the database at the same time.

Write-behind cache (write-back): Data is written to the cache immediately, but written to the database after a delay asynchronously.


Q.24) When should you avoid using a cache?
ans : Avoid using cache when data changes very frequently, is highly dynamic, or must be strongly consistent in real time, such as financial transactions or live bidding systems.


Q.25) What are CDN and edge caching?
ans : A CDN (Content Delivery Network) is a geographically distributed network of servers that deliver content like images, videos, and scripts to users from the nearest server, reducing latency.
Edge caching refers to storing content closer to the end user at the edge servers of the CDN to improve load times and reduce backend traffic.


Q.26) What are the tradeoffs of caching at the application layer vs DB layer?
ans : Application-layer caching (e.g., Redis, in-memory): Offers more control, better performance for specific endpoints, but increases complexity and cost.
Database-layer caching: Easier to manage but less flexible. Tradeoffs include cost, complexity, data consistency, and latency handling.


Q.27) How do you invalidate a cache?
ans : Cache can be invalidated by:

Explicit removal when data changes (write/delete).

TTL (Time-to-Live) expiry.

Event-based invalidation using pub/sub or DB triggers.


Q.28) How can you identify a memory leak in a backend application?
ans :Identify memory leaks by monitoring memory usage over time using tools like:

Node.js: --inspect, Chrome DevTools

Heap snapshots, Garbage Collection logs

Valgrind, VisualVM for JVM

Prometheus + Grafana for high-level trends


Q.29) What tools do you use for performance profiling? what is profiling
ans :  For profiling:

Node.js built-in profiler

Chrome DevTools (via --inspect)

Clinic.js, Flamegraph, 0x

CPU/Memory profiling tools depending on language


Q.30) What’s the difference between latency and throughput?
ans : latency is the time taken by the server to give the response back.
      throughput is a work done by the server per unit time


🔹 APIs & Communication
Q.31) REST vs SOAP vs GraphQL vs gRPC — when to use which?
ans :  REST stands for repersentations states transfers which is using the http methods like
       get,post,path,delete to communicate to the server
       Each URL represents a resource, and actions are done via HTTP verbs.
       Features:

Stateless — no client context stored on server

Uses standard HTTP protocols

Commonly returns JSON (or XML)

When to use:

Public APIs, CRUD-based systems (e.g. blogs, task apps)

Simpler, resource-based systems

When you want browser compatibility and cacheability

Pros:

Easy to understand and implement

Wide browser support and tooling

Good for CRUD operations

Cons:

Can suffer from over-fetching or under-fetching (client gets too much or too little data)

No strong schema definition (unless OpenAPI/Swagger is added)

      # SOAP(Simple Object Access Protocol)

       A protocol (not an architecture) for exchanging structured XML messages over HTTP (or SMTP, TCP)

Uses WSDL (Web Services Description Language) to define operations and data

Features:

Strong typing and strict contracts

Built-in security (WS-Security), transactions, ACID compliance

When to use:

Enterprise applications needing high security and reliability (e.g., banking, government, telecom)

Systems where strict contracts and schemas are needed

Pros:

Highly extensible (headers, routing, security)

Built-in support for retries, faults, etc.

Cons:

Verbose XML format

Hard to integrate with modern web apps

Slower due to heavy payloads and XML parsing
  
       #GRAPHQL

       A query language and runtime for APIs

Clients specify exact data they need, avoiding over-fetching

Features:

One endpoint (/graphql)

Strongly typed schema (SDL)

Single request can gather nested data (unlike REST which may require multiple calls)

When to use:

Complex UIs needing dynamic data (e.g. dashboards, mobile apps)

When you want to reduce number of API calls

When frontend teams want flexibility without backend changes

Pros:

Fetch only what you need

Declarative: frontend controls shape of data

Strong tooling (GraphQL Playground, schema introspection)

Cons:

More complex to set up than REST

Caching is more difficult

Needs schema and resolvers

Potential for performance issues if not optimized (deep nesting)

       #gRPC (Google Remote Procedure Call)

       A high-performance, open-source RPC framework developed by Google

Uses Protocol Buffers (Protobuf) for fast, efficient binary serialization

Runs on HTTP/2

Features:

Strongly typed, contract-first development

Supports streaming (client/server/bidirectional)

Highly performant for internal microservice communication

When to use:

Microservices within internal networks

High-performance real-time systems (video/audio streaming, multiplayer games)

Mobile apps where payload size and latency matter

Pros:

Very fast (binary format, HTTP/2)

Streaming support out of the box

Strongly typed contracts (via .proto files)

Auto code-generation in many languages

Cons:

Not browser-friendly (needs a proxy for frontend)

Steeper learning curve than REST

Harder to debug than text-based APIs

Q.32) How would you design an API versioning strategy?
ans : versioning is setup on implementing the logic on the endpoints like  /api/v1/user_create


Q.33) What are status codes and how do you use them correctly?
ans : status codes are the response representation like 
      when we get 400 it means the server gives us bad request error
      401 means unauthorized
      200 means success
      201 means created
      500 means server not responding


Q.34) What is HATEOAS in RESTful APIs?
ans : HATEOAS is a REST principle where the server tells the client what it can do next by including links in the response, just like hyperlinks in a webpage.

GET /orders/123

{
  "orderId": 123,
  "status": "shipped",
  "total": 99.99,
  "_links": {
    "self": { "href": "/orders/123" },
    "track": { "href": "/orders/123/track" },
    "cancel": { "href": "/orders/123/cancel", "method": "POST" }
  }
}


| Benefit                  | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| ✅ **Loose coupling**     | Clients don't need to hardcode URLs or transitions     |
| ✅ **Discoverability**    | Clients can explore the API without full documentation |
| ✅ **Evolution-friendly** | Servers can change flows without breaking clients      |
| ✅ **Consistency**        | Encourages a consistent way to express transitions     |

Is HATEOAS Required in REST?
Not strictly — REST has six constraints, and HATEOAS is optional for many practical use cases.

But it fully aligns with the REST maturity level 3 (Richardson Maturity Model).


Q.35) How do you secure public APIs?
ans : 🔐 1. Use API Keys (Basic Authentication)
What: Assign each client a unique key.

How: Clients send the key with every request (?api_key=12345 or in headers).

Purpose: Identify and rate-limit clients.

Limitation: Keys can be leaked or misused if not secured on the client.

🛡️ 2. OAuth 2.0 / OpenID Connect (Strong Authentication)
What: A secure industry-standard protocol for token-based authentication.

How:

Client gets an access_token after user login.

API validates token on every request.

Best for: User-authenticated operations or third-party apps.

🧾 3. Rate Limiting & Throttling
What: Restrict how many requests a user or IP can make.

Why: Prevent abuse, DoS attacks, or resource exhaustion.

Tools: NGINX, API Gateway, Redis-based counters.

🧯 4. Input Validation & Sanitization
Why: Prevent injection attacks like SQL, XSS, NoSQL injection.

How: Never trust user input. Use strong validation libraries (Joi, express-validator, etc.).

🔏 5. HTTPS Everywhere
Why: Prevent man-in-the-middle (MITM) attacks.

How: Enforce HTTPS using HSTS (HTTP Strict Transport Security).

🔐 6. JWT (JSON Web Tokens)
What: Stateless tokens signed by the server.

How:

Client sends JWT in Authorization: Bearer <token> header.

Server validates token signature and expiry.

Tip: Use short-lived access tokens + refresh tokens securely.

🧠 7. CORS Configuration (Cross-Origin Resource Sharing)
What: Controls which domains can access your API.

How: Use Access-Control-Allow-Origin header wisely.

Best Practice: Whitelist trusted origins.

🕵️ 8. IP Whitelisting / Blacklisting
Use Case: Allow only specific known IPs to access sensitive APIs.

How: Enforce via firewall or reverse proxy.

🧰 9. Use API Gateway
What: Sits in front of your APIs to handle security, logging, throttling, etc.

Examples: AWS API Gateway, Kong, Apigee, NGINX.

🧮 10. Logging & Monitoring
What: Track all access attempts, failed logins, anomalies.

Why: Enables threat detection and forensics.

Tools: ELK Stack, Datadog, Prometheus, CloudWatch.

🔍 11. Security Headers
Add headers like:

Strict-Transport-Security

X-Content-Type-Options

X-Frame-Options

Content-Security-Policy

🧪 12. Penetration Testing & Vulnerability Scanning
Use tools like:

OWASP ZAP

Burp Suite

Snyk

Regular audits keep your APIs secure from evolving threats.

❌ 13. Avoid Sensitive Data Exposure
Don't expose internal IDs, passwords, tokens, stack traces.

Mask PII (Personally Identifiable Information) where possible.


Q.36) How do you design idempotent APIs for payment systems?
ans : Idemponency is a process in which the output is same every time when the input is not changed
      This is crucial in payment systems to avoid duplicate charges when:

A user retries a request due to a timeout

A mobile app resends a request automatically

A network or server fails midway

     How to Design Idempotent APIs:
1. Use Idempotency Keys
Clients generate a unique Idempotency-Key (usually a UUID) for each payment or transaction.

Server stores this key along with the request's result in a dedicated store (cache or DB).

If the same key is received again:

Return the original result.

Do not process the transaction again.

2. HTTP Methods
Method	Idempotent?	Use Case
GET	✅ Yes	Fetch payment history
PUT	✅ Yes	Update account details
DELETE	✅ Yes	Cancel a pending payment
POST	❌ No (by default)	Use idempotency keys for creating payments or refunds

3. Response Consistency
Always return same HTTP status, response body, and resource ID for repeated requests with the same idempotency key.

4. Store Structure Example
json
Copy
Edit
{
  "idempotencyKey": "abc-123-xyz",
  "userId": "user_1",
  "requestHash": "<hash-of-request-body>",
  "response": {
    "status": 201,
    "paymentId": "pay_789",
    "amount": 100
  },
  "timestamp": "2025-05-20T10:00:00Z"
}
⚠️ Key Considerations:
Idempotency keys should expire after a certain period (e.g., 24 hours).

Ensure request body and method match for repeated keys.

Return 409 Conflict if key reuse has conflicting data.

🔐 Example (Node.js + Express):
js
Copy
Edit
// Pseudo-code for idempotent POST /payments
app.post('/payments', async (req, res) => {
  const key = req.headers['idempotency-key'];
  const existing = await IdempotencyStore.find(key);
  
  if (existing) return res.status(existing.status).json(existing.response);

  const payment = await PaymentService.charge(req.body);
  
  await IdempotencyStore.save(key, {
    status: 201,
    response: payment
  });

  res.status(201).json(payment);
});
✅ Summary:
Use idempotency keys with POST requests for payment creation.

GET, PUT, and DELETE are already idempotent by definition.

Prevents double charges and improves API reliability in distributed systems.


Q.) Learn all the different authentication techniques ?
ans : 1. Session-Based Authentication
✅ Use Case:
Traditional web applications with server-side rendering (SSR).

📦 Libraries:
express-session

connect-mongo (for storing sessions in MongoDB)

⚙️ How it works:
User logs in and credentials are validated.

Server creates a session and stores it (in memory, DB, or Redis).

A session ID is sent as a cookie.

On subsequent requests, server checks session ID.

🛡️ Pros:
Easy to implement.

Good for server-rendered apps.

⚠️ Cons:
Doesn’t scale well across distributed servers unless you use sticky sessions or shared storage (e.g., Redis).

🔑 2. JWT (JSON Web Token) Authentication
✅ Use Case:
Stateless REST APIs, mobile apps, SPAs.

📦 Libraries:
jsonwebtoken

express-jwt or custom middleware

⚙️ How it works:
User logs in, server validates credentials.

Server signs and returns a JWT to the client.

Client sends JWT in Authorization header on future requests.

Server verifies the JWT on each request.

🛡️ Pros:
Stateless, scalable.

Works across services/domains.

⚠️ Cons:
Token revocation is hard.

Sensitive to token theft unless precautions are taken (e.g., short expiry + refresh tokens).

🔁 3. OAuth 2.0 Authentication
✅ Use Case:
Login using Google, Facebook, GitHub, etc.

📦 Libraries:
passport.js

passport-google-oauth20, passport-facebook, etc.

⚙️ How it works:
Redirect user to provider (e.g., Google).

Provider authenticates and redirects back with a code.

Server exchanges the code for access tokens and retrieves user info.

🛡️ Pros:
No need to store passwords.

Great UX for users.

⚠️ Cons:
Slightly complex to set up.

Dependent on third-party services.

🧾 4. API Key Authentication
✅ Use Case:
Server-to-server communication, public APIs with limited access.

⚙️ How it works:
Each client gets a unique API key.

API key is sent in headers or query params.

Server validates the key.

🛡️ Pros:
Simple.

No session management.

⚠️ Cons:
Not suitable for user authentication.

Key theft is a risk if not secured.

🔁 5. Refresh Token Authentication (used with JWT)
✅ Use Case:
Secure JWT with longer sessions.

⚙️ How it works:
Client gets both access token and refresh token.

Access token has short expiry.

Refresh token can get a new access token when expired.

🛡️ Pros:
Better security.

Prevents long-lived access tokens.

⚠️ Cons:
Refresh token storage on client must be secure.

🔒 6. Biometric Authentication
✅ Use Case:
Mobile/Web apps that support Face ID, fingerprint.

⚙️ How it works:
Usually done client-side (via browser or mobile OS), then passes identity to backend.

🛡️ Pros:
Excellent UX.

Secure when implemented correctly.

⚠️ Cons:
Not fully handled by Node.js; relies on client-side and third-party integrations.

🧠 7. Passwordless Authentication (OTP / Magic Links)
✅ Use Case:
Improved UX without passwords.

⚙️ How it works:
User provides email/phone.

Server sends a magic link or OTP.

User uses link/code to login.

📦 Libraries:
speakeasy (for OTP)

Custom mailer/SMS services

🛡️ Pros:
No passwords to steal.

Great for user experience.

⚠️ Cons:
Email/SMS delivery reliability.

Short expiry is critical.

📜 8. SAML Authentication
✅ Use Case:
Enterprise apps using SSO with providers like Okta, Azure AD.

📦 Libraries:
passport-saml

⚙️ How it works:
App redirects to identity provider.

Identity provider authenticates and posts SAML response.

Server validates the SAML assertion.

🛡️ Pros:
Secure enterprise-grade SSO.

⚠️ Cons:
Complex setup.

SAML XML is verbose.

📲 9. Two-Factor Authentication (2FA)
✅ Use Case:
Added layer of security on login.

⚙️ How it works:
First step: password.

Second step: OTP via app/email/SMS.

📦 Libraries:
speakeasy (TOTP)

qrcode (for QR code generation)

🛡️ Pros:
Much harder to hijack accounts.

⚠️ Cons:
User convenience trade-off.

🧾 10. Custom Token-based Auth
✅ Use Case:
Fine-grained control over authentication.

⚙️ How it works:
You generate and store tokens (e.g., UUIDs).

Map them to users in DB.

Send token to client to use in headers.

🛡️ Pros:
Flexible.

Easy to implement initially.

⚠️ Cons:
You must handle expiration, revocation, etc.

🔧 Bonus Tools & Practices
Tool	Purpose
bcrypt, argon2	Password hashing
helmet	Secure headers
rate-limiter-flexible	Prevent brute-force
HTTPS	Always use SSL/TLS
CORS	Control cross-origin access
CSRF Tokens	Protect session-based apps

🔁 Choosing the Right Strategy
App Type	Best Strategy
Traditional Web	Sessions + CSRF
REST APIs	JWT or API Key
Mobile App	JWT + Refresh Token
SPA (React/Angular)	JWT with short expiry
Enterprise/SSO	OAuth 2.0 or SAML
Public APIs	API Key


Q.37) Explain the difference between synchronous and asynchronous communication ?
ans : Synchronous Communication:
Definition: In synchronous communication, the client waits for the server to respond before moving on.

Example: REST API over HTTP.

Mechanism: Request → Wait → Response.

✅ Characteristics:
Tightly coupled – both services must be available at the same time.

Immediate feedback – useful when real-time response is needed (e.g., login).

Error-prone under failure – if the downstream service is down, the request fails.

One-to-one communication – typically connects to one service per call.

🧠 Example in Node.js:

const response = await axios.get('http://auth-service/user/123');
📨 Asynchronous Communication:
Definition: In asynchronous communication, the client sends a message and continues, without waiting for an immediate response.

Example: Using message brokers like RabbitMQ, Kafka, or AWS SQS.

Mechanism: Producer → Message Queue → Consumer (eventual response or processing).

✅ Characteristics:
Loosely coupled – services can operate independently.

More resilient – messages can be retried, persisted, or delayed.

Supports parallel processing – can communicate with multiple services simultaneously.

Better for scalability – helps handle spikes in traffic.

🧠 Example in Node.js:

// Send message to Kafka queue
producer.send({ topic: 'payment-processed', message: { orderId: '123' } });
🆚 Comparison Table:
Feature	Synchronous	Asynchronous
Waiting for Response	Yes	No
Coupling	Tightly Coupled	Loosely Coupled
Resilience	Low (fails if one service is down)	High (messages can be retried)
Communication Pattern	Request → Response	Producer → Queue → Consumer
Use Case Examples	Auth, Payments, Validation	Order processing, Notifications, Logging
Message Brokers Used	❌ Not applicable	✅ Kafka, RabbitMQ, AWS SQS


Q.38) How do you handle pagination in an API?
ans :🔢 Offset-based Pagination
Uses offset and limit to fetch a slice of data.

Common in: SQL, MongoDB

🧠 Example (MongoDB):
js
Copy
Edit
db.collection.find().skip(20).limit(10); // Page 3, 10 items per page
✅ Pros:
Simple to implement

Good for fixed-size pages

❌ Cons:
Slower for large offsets (e.g., skip 10000)

Data inconsistency risk if data changes between requests

2. 🔑 Cursor-based Pagination (a.k.a. Keyset Pagination)
Uses a unique key (e.g., timestamp, ID) as a reference to get the next set of records.

Common in: Real-time feeds, infinite scroll APIs

🧠 Example:
http
Copy
Edit
GET /posts?after=post_id_50&limit=10
✅ Pros:
More performant on large datasets

Safer against data changes (e.g., new inserts)

❌ Cons:
More complex to implement

Doesn’t support jumping to arbitrary pages

3. 📚 Page-based Pagination
Uses page and pageSize parameters.

🧠 Example:
http
Copy
Edit
GET /users?page=3&pageSize=20
✅ Pros:
Easy to use for UI pagination

❌ Cons:
Internally relies on offset (so same limitations as above)

⚙️ Best Practices:
Return metadata like totalItems, totalPages, currentPage, hasNextPage.

Validate and sanitize user input for page, limit, cursor.

Set sensible default and max limits (e.g., max 100 items per page).

Support sorting consistently to ensure stable pagination.

✅ Summary:
Offset pagination: Simple but slow on large datasets.

Cursor pagination: Fast, consistent for real-time apps.

Page-based: User-friendly but relies on offset.


Q.39) How do you implement file uploads in a REST API?
ans : using node package multer with multipart/form-data
      and upload the files to cloudinary


Q.40) What are API gateways and why are they used?
ans : Api gateways are the server which act as a reverse proxy, load balancer
      Redirect the requests to the correct server
      use api gateway for load balancing
      use api gateway for cache
      use api gateway for authentication
      Rate Limiting & Throttling:


🔹 Security
Q.41)What is the principle of least privilege?
ans : The Principle of Least Privilege (PoLP) means giving a user, process, or system only the minimum access or permissions they need to perform their task — nothing more.

Why it matters:

Reduces attack surface

Prevents accidental misuse

Containment: If a system is compromised, the damage is limited

Example in Node.js:

A database user should have only SELECT rights if they're only fetching data — not INSERT, UPDATE, or DELETE.

Admin routes in Express.js should be protected with proper role-based access control (RBAC).


Q.42)How does JWT authentication work?
ans : client sign the user with credentials
      server validation the credentials and create a token  - stateless
      server sends the token to the client
      Client sends the token as a headers or cookies to the server for every request in future
      Server verify the request every times.


Q.43)What is OAuth 2.0 and how is it used in modern apps?
ans : OAuth 2.0 is used for the authentication using google,facebook etc clients
      Used passport.js for this in node js
      User redirect to the google page
      select the profile for sign up/ login
      google gives the token and the user details without password
      Details saved in db and use token for verification      

Q.44)How do you protect against SQL injection?
ans : SQL Injection = injecting malicious SQL via input fields

Countermeasures:

❌ Never use raw string queries with untrusted input

✅ Use parameterized queries (e.g., ? placeholders in MySQL)

js
Copy
Edit
connection.query("SELECT * FROM users WHERE id = ?", [userId]);
✅ Use ORMs like Sequelize, TypeORM (they do escaping internally)

✅ Sanitize inputs (e.g., use express-validator)

✅ Limit DB permissions (PoLP again)


Q.45)What is CORS and how do you handle it?
ans : CORS stands for cross origin Resource Sharing
      It will helps to allow the different domains to communicate with each others
      use express cors middleware
      you also whitelist the specific IPs.

Q.46)How do you store passwords securely in a backend system?
ans : ❌ Never store plain-text passwords

✅ Use hashing algorithms like bcrypt, argon2, or scrypt

✅ Add a salt to make hashes unique

✅ Use strong cost factor (bcrypt's 10–12 rounds)

✅ Compare hashes using bcrypt.compare()

Q.47)What are CSRF and XSS attacks?
ans :  CSRF (Cross Site Request Forgery):
Attacker tricks a logged-in user into submitting a malicious request on another site.

Mitigation:

Use SameSite cookies

Use CSRF tokens (e.g., csurf middleware)

Validate origin/referrer headers

💉 XSS (Cross Site Scripting):
Injecting malicious scripts into a web page (e.g., via comment boxes)

Mitigation:

Escape HTML output (res.send(escape(userInput)))

Use frameworks that auto-escape (e.g., React)

Validate and sanitize user input


Q.48)What is HTTPS and why is it important?
ans : HTTPS is secure as compare to HTTP 
      because it uses a TLS encription to validate every request
      prevents the data hijacking


Q.49)What are the OWASP Top 10 vulnerabilities?
ans : OWASP = Open Web Application Security Project

As of 2023, the OWASP Top 10 includes:

Broken Access Control

Cryptographic Failures

Injection (SQL, NoSQL, etc.)

Insecure Design

Security Misconfiguration

Vulnerable & Outdated Components

Identification & Authentication Failures

Software & Data Integrity Failures

Security Logging & Monitoring Failures

Server-Side Request Forgery (SSRF)


Q.50)How would you secure sensitive config or API keys?
ans : ✅ Use .env files + dotenv package

✅ Store secrets in:

AWS Secrets Manager

HashiCorp Vault

Environment variables in CI/CD

❌ Never commit .env to Git

✅ Use .gitignore to exclude secrets

✅ Use Role-Based Access on cloud secrets (PoLP again)

Q.)  req.params vs req.query ?
    req.params vs req.query in Express.js
✅ 1. req.params – Route Parameters
Used to capture values from the URL path itself.

➤ Example:
js
Copy
Edit
app.get('/user/:id', (req, res) => {
  console.log(req.params.id); // Accessing route parameter
  res.send(`User ID is ${req.params.id}`);
});
Request URL:

sql
Copy
Edit
GET /user/42
Output:

js
Copy
Edit
req.params = { id: '42' }
📌 Key Points:
Route parameters are defined in the path as :paramName.

Commonly used for identifying resources (e.g., user ID, product ID).

Always required (or should have default/optional handling).

✅ 2. req.query – Query String Parameters
Used to capture values from the query string of the URL.

➤ Example:

app.get('/search', (req, res) => {
  console.log(req.query.keyword); // Accessing query string
  res.send(`Search results for ${req.query.keyword}`);
});
Request URL:


GET /search?keyword=nodejs
Output:

req.query = { keyword: 'nodejs' }
📌 Key Points:
Query parameters are not part of the URL path.

Used for filtering, searching, sorting, and pagination.

Optional and can be multiple:

/products?page=2&limit=20&sort=price


🔹 Testing & Quality
Q.51)What types of tests should be written for a backend system?
ans : 1) Unit Tests: Test individual functions/methods in isolation (e.g., service or controller logic).
2) Integration Tests: Validate interactions between components or services (e.g., DB + service + external APIs).
3) End-to-End (E2E) Tests: Simulate real user flows (e.g., order creation to confirmation).
4) Contract Tests: Ensure that APIs follow an agreed-upon schema (e.g., Pact).
5) Load/Performance Tests: Check system behavior under stress (e.g., JMeter, Artillery).
6) Security Tests: Scan for vulnerabilities like SQL injection, auth bypass, etc.
7) Regression Tests: Ensure new changes haven’t broken existing functionality.
8) Smoke Tests: Basic sanity checks after deployments.

Q.52)How do unit tests differ from integration tests?
ans : 
| **Unit Tests**                                 | **Integration Tests**                                |
| ---------------------------------------------- | ---------------------------------------------------- |
| Test small, isolated pieces of logic           | Test how components work together                    |
| No external dependencies (DB, API)             | May involve DB, API, file system, etc.               |
| Fast and lightweight                           | Slower and more complex                              |
| Focus on business logic                        | Focus on interaction correctness                     |
| Example: test a function like `calculateTax()` | Example: test placing an order and checking DB write |


Q.53)What is mocking and stubbing in backend testing?
ans : Mocking: Creating fake objects that simulate real objects’ behavior (e.g., simulate DB call).
Stubbing: Predefining responses for method calls or functions to control test behavior.
Example:

// Mocking a database call
const dbMock = jest.fn().mockReturnValue({ id: 1, name: 'Test User' });

Use Case:
Avoid calling real DBs, APIs.
Control test environment and simulate edge cases (timeouts, failures).

Q.54)How do you write testable backend code?
ans : Use Dependency Injection: Pass dependencies (DB, services) into functions/classes.
Separate Concerns: Use layers like controller, service, repository.
Avoid Static Code: Makes mocking/testing difficult.
Return Predictable Outputs: Avoid global state, randomness, time-based logic.
Use Interfaces/Contracts: Easy to swap real implementations with mocks.
Example:
// Instead of calling DB inside function, inject it
function createUser(user, db) {
  return db.insert(user);
}

Q.55)How do you test asynchronous code?
ans : Use async/await or Promises in your test framework (e.g., Jest, Mocha).
Ensure test runners wait for the async operations to complete.
Example (Jest):

test('should return data', async () => {
  const data = await fetchData();
  expect(data).toEqual({ user: 'Anmol' });
});

Tips:
Use done() callback in Mocha for async testing.
Test both resolved and rejected promises.

Q.56)What are test coverage metrics?
ans : Test coverage measures how much of your code is executed by your tests. Common metrics include:
Line Coverage: % of lines executed.
Branch Coverage: % of decision branches (if/else) tested.
Function Coverage: % of functions/methods called.
Statement Coverage: % of individual code statements executed.
Tools: Istanbul (nyc), Jest coverage, Coverage.py, Jacoco.
Goal: Not 100%, but meaningful coverage where logic matters.

Q.57)What’s your approach to regression testing?
ans : Regression testing ensures that new code changes don’t break existing features. My approach:
Automate test suites (unit, integration, E2E).
Run tests before and after code changes.
Focus on impacted modules using test impact analysis.
Use CI/CD tools to trigger regression suites on PRs.
Add tests for reported bugs to prevent reoccurrence.
Tools: Jest, Mocha, Cypress, GitHub Actions, Jenkins.

Q.58)How do you test API performance under load?
ans : Set Baselines: Define acceptable response times and throughput.
Use Load Testing Tools: JMeter, Artillery, Locust, k6.
Simulate Load: Concurrent users hitting endpoints.
Monitor Metrics: Latency, error rate, CPU/memory, DB usage.
Analyze Bottlenecks: Optimize slow queries, scale infra.

Q.59)What is chaos engineering?
ans : Chaos engineering involves intentionally injecting failures into a system to test its resilience and recovery.
 It helps identify weaknesses before they impact users.
Examples:
Killing EC2 instances randomly.
Simulating network delays or dropped packets.
Blocking access to a dependency (e.g., DB down).
Tools: Chaos Monkey (Netflix), Gremlin, LitmusChaos.
Goal: Build fault-tolerant systems.

Q.60)How do you test for race conditions?
ans : Race conditions occur when multiple operations happen in parallel and affect shared state unpredictably.

Testing Approach:
Simulate Concurrent Requests: Use threads, parallel promises.
Stress Shared Resources: DB rows, in-memory state.
Add Logging/Assertions: Validate correct behavior under concurrency.
Use Locking or Transactions: Implement and test atomicity.
Run Tests Repeatedly: Race conditions often happen nondeterministically.
Tools: Artillery, JMeter, custom scripts with Promise.all() in Node.js.


🔹 DevOps & Monitoring
Q.61) How do you perform zero-downtime deployments?
ans :
    Zero-downtime deployments ensure that users face no interruption when a new version of your backend service is deployed.
Strategies:
Load Balancer + Rolling Deployments: Gradually deploy to subsets of instances behind a load balancer.
Blue-Green Deployment: Route traffic to a new environment once it's ready.
Canary Releases: Deploy to a small % of users, then expand.
Database Migrations: Make schema backward-compatible.
Sticky Sessions Off: So traffic can be rerouted safely.
Example:
In Kubernetes, use RollingUpdate deployment strategy.
Use AWS CodeDeploy with ECS to handle live traffic switching.


  # Explanation
  🔄 1. Load Balancer + Rolling Deployments
🔹 What It Is:
Gradually replace old application instances with new ones behind a load balancer. New versions are deployed one by one (or in small batches), without taking the entire system offline.

🔹 How It Works:
Your application runs behind a load balancer (e.g., AWS ELB, NGINX).

You have multiple instances (say 4) running v1.

During deployment:

Instance 1 is drained (no new traffic), v2 is deployed.

Health check passes → load balancer routes traffic.

Move to the next instance.

🔹 In Kubernetes:
yaml
Copy
Edit
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 1
    maxSurge: 1
This means:

Only 1 pod at a time is unavailable.

1 extra pod (new version) is temporarily created to ensure availability.


🟩 2. Blue-Green Deployment
🔹 What It Is:
Maintain two identical environments — Blue (current live) and Green (new version). Switch all traffic from Blue to Green when the new version is ready.
🔹 How It Works:
Blue is serving live traffic.
You deploy the new version (Green) in parallel.
Perform tests on Green (staging).
When confident, switch load balancer to Green.
If something breaks, switch back to Blue → instant rollback.

🔹 In AWS:
Use AWS Elastic Beanstalk or AWS ECS + CodeDeploy:
ECS creates a new task set.
When health checks pass, CodeDeploy swaps target group traffic from Blue to Green.


🐤 3. Canary Releases
🔹 What It Is:
Gradually expose new version to a small subset of users, then slowly increase until 100% if everything goes well.

🔹 How It Works:
Deploy new version to 5% of users.

Monitor metrics (errors, latency, logs).

After X mins/hours, increase to 25%, then 50%, then 100%.

🔹 Tools:
Kubernetes: Use service mesh (e.g., Istio) to do traffic splitting.

AWS CodeDeploy (with ECS):

Create a deployment config like CodeDeployDefault.ECSCanary10Percent5Minutes (10% traffic, wait 5 mins).


🧩 4. Database Migrations (Schema Compatibility)
🔹 Why It's Needed:
Even if your app rolls out fine, DB changes can break older or newer versions.

🔹 Safe Strategy:
Backward-compatible changes first:

Add nullable columns, not delete them.

Deploy app that uses new schema.

Migrate data safely.

Remove old fields later.

🔹 Example:
Step 1: Add new_column (nullable).

Step 2: New app version reads new_column.

Step 3: Populate values via background job.

Step 4: Remove old_column.


🧷 5. Sticky Sessions Off
🔹 What It Is:
Sticky sessions (aka session affinity) send a user’s requests to the same server always. This can cause problems during deployment if a server is replaced and the session is lost.

🔹 Best Practice:
Store session data in a shared cache (e.g., Redis).

Turn off sticky sessions in your load balancer.

🔹 Example:
In AWS Application Load Balancer:

Set Stickiness = Disabled under Target Group settings.

Store user sessions in Redis using express-session (Node.js).


Q.62) What is CI/CD and how is it set up for backend projects?

ans : CI (Continuous Integration): Automate building, testing, and merging code.
CD (Continuous Delivery/Deployment): Automate release of code to staging/production.

Setup for backend:
CI:
Code pushed to GitHub triggers pipeline.
Run unit, integration tests.
Linting and static analysis.

CD:
Build Docker image.
Deploy to staging (automatic) or production (manual approval).
Health checks and smoke tests.
Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI, ArgoCD.

🚀 What is CI/CD?
🛠 CI: Continuous Integration
Goal: Automate the process of merging, building, and testing code.

When it happens: Every time code is pushed (e.g., git push to GitHub).

What it does:

Pulls code

Installs dependencies

Runs:

Unit tests

Integration tests

Linting

Static code analysis (e.g., type checks)

Fails early if anything breaks (prevents broken code from merging)

📦 CD: Continuous Delivery / Deployment
Continuous Delivery: Code is automatically prepared for deployment (staging or production), but manual approval is needed to deploy.

Continuous Deployment: Code is automatically deployed all the way to production with no manual steps.

| Tool           | Purpose                    | Use Case                                 |
| -------------- | -------------------------- | ---------------------------------------- |
| GitHub Actions | CI/CD pipelines            | Native GitHub support                    |
| GitLab CI      | Integrated CI/CD in GitLab | For self-hosted or GitLab repos          |
| Jenkins        | Highly customizable CI/CD  | Great for enterprise & complex pipelines |
| CircleCI       | Fast, scalable CI/CD       | Parallel test execution, caching         |
| ArgoCD         | GitOps-based Kubernetes CD | Auto-deploy from Git repo to Kubernetes  |
| Docker         | Containerization tool      | Build and run containerized services     |
| Kubernetes     | Container orchestration    | Rollouts, scaling, health checks         |


Code Push (GitHub)
     |
     ▼
CI: Run Lint + Tests + Build Docker Image
     |
     ▼
CD: Deploy to Staging
     |
     ▼
Smoke Test + Health Check
     |
     ▼
(Manual Approval or Auto-Deploy)
     |
     ▼
Production Deploy





Q.63) What are some popular backend monitoring tools?

ans : Application Monitoring:
New Relic
Datadog
AppDynamics
Prometheus + Grafanz

Logs:
ELK Stack (Elasticsearch, Logstash, Kibana)
Fluentd + Loki + Grafana

Uptime & Error Monitoring:
Pingdom
Sentry
StatusCake

These tools help track metrics like response time, error rates, CPU/memory usage, and uptime.

🔍 Application Monitoring Tools
1. New Relic
Type: APM (Application Performance Monitoring)

Use For:

Monitoring backend services

Transaction tracing

Error analysis

Real-time metrics (CPU, memory, DB queries)

Features:

Dashboards for app performance

Distributed tracing (track a request across microservices)

Alerts for anomalies

Use Case: Diagnose slow API calls, database bottlenecks

2. Datadog
Type: Full-stack observability platform

Use For:

Monitoring applications, infrastructure, logs, and security

Features:

Dashboards, alerts, log management

Real-time user monitoring (RUM)

APM and network performance monitoring

Use Case: Monitor Kubernetes cluster, detect spike in latency or error rates

3. AppDynamics (by Cisco)
Type: Enterprise APM

Use For:

Application performance

Business transaction monitoring

Features:

Real-time monitoring of requests

Root-cause diagnostics

Code-level visibility

Use Case: Large enterprise apps with heavy traffic needing deep insights

4. Prometheus + Grafana
Type:

Prometheus: Metrics collection and querying

Grafana: Visualization

Use For:

Time-series monitoring for microservices

Custom metrics collection via exporters

Features:

Pull-based metric scraping

Alertmanager integration

Grafana dashboards for visualization

Use Case: Monitor custom metrics in a Kubernetes environment (e.g., request count, memory usage)

📄 Logging Tools
1. ELK Stack (Elasticsearch + Logstash + Kibana)
Type: Centralized logging and analytics

Components:

Logstash: Collects and transforms logs

Elasticsearch: Stores and indexes logs

Kibana: Visualizes logs and metrics

Use Case: Aggregate logs from all services and search by error or keyword

2. Fluentd + Loki + Grafana
Fluentd: Collects logs from applications

Loki: Log aggregation system by Grafana Labs (like Prometheus but for logs)

Grafana: Used to query and display Loki logs

Use Case: Lightweight alternative to ELK for cloud-native apps; logs stay in context with metrics

🕒 Uptime & Error Monitoring Tools
1. Pingdom
Type: Uptime and synthetic monitoring

Use For:

Monitoring HTTP endpoints from various global locations

Alerts when your site/API is down

Use Case: Get alerts when your homepage or login API fails to respond in <200ms

2. Sentry
Type: Real-time error tracking

Use For:

Capturing application exceptions and crashes

Provides stack traces, error frequency, and affected users

Languages: Works with JavaScript, Python, Java, Go, etc.

Use Case: Debug API crashes and get alerts with full context (user, request, line of failure)

3. StatusCake
Type: Website uptime & status monitoring

Use For:

URL monitoring, SSL expiry alerts

Performance testing from multiple regions

Use Case: Public status page for your backend services (like status.myapp.com)


| **Metric Type**       | **Examples**                                                                  |
| --------------------- | ----------------------------------------------------------------------------- |
| Application Metrics   | Response time, throughput, error rates                                        |
| System Metrics        | CPU, memory usage, disk I/O, network traffic                                  |
| Log Analysis          | Stack traces, exceptions, warning messages                                    |
| Uptime Monitoring     | Is the site/API up? How fast is the response?                                 |
| Error Tracking        | Which errors are happening most? Where in the code did they originate?        |
| Deployment Monitoring | Which deploy caused a performance spike or crash?                             |
| Custom Metrics        | Business KPIs like `orders per minute`, `signups`, etc. (Prometheus, Datadog) |




Q.64) How do you monitor database performance in production?
ans : 
    Key Metrics:
Slow queries
Query volume
Connection count
Cache hit ratio
Index usage

Tools:
pgAdmin or pg_stat_statements (PostgreSQL)
Performance Insights (AWS RDS)
Datadog APM
Prometheus exporters (e.g., postgres_exporter)




Q.65) What is log aggregation and why is it important?
ans :
   Log aggregation collects logs from multiple servers/services and centralizes them in a searchable platform.

Why it’s important:

Debug issues faster

Correlate logs across services

Alerting and analytics

Long-term audit/compliance

Tools:

ELK Stack

Fluentd + Loki

Splunk

Graylog

Example:
Centralizing Node.js app logs using winston + Fluentd → Elasticsearch → Kibana dashboard.


Q.66) What are Prometheus and Grafana used for?
ans : Prometheus: Time-series database + monitoring tool.

Pulls metrics from services (via exporters).

Stores metrics like CPU, memory, requests/sec.

Grafana: Visualization tool.

Creates dashboards from Prometheus (or other) data sources.

Q.67) How do you handle service crashes in production?
ans : Auto-Restart:

Use process managers like PM2 (Node.js) or Docker health checks.

Kubernetes restarts crashed pods.

Error Monitoring:

Integrate Sentry, New Relic, or Datadog to capture crashes.

Logs and Alerts:

Analyze aggregated logs.

Get alerts from tools like PagerDuty or Slack bots.

Postmortem:

Root cause analysis

Add tests to prevent reoccurrence

Q.68) What are health checks and how are they implemented?
ans : Health checks are endpoints or scripts used by infrastructure to determine if a service is alive and healthy.

Types:

Liveness Check – Is the app running?

Readiness Check – Is the app ready to serve traffic?

Example:

// Express.js example
app.get('/health', (req, res) => res.status(200).send('OK'));

Kubernetes example:

livenessProbe:
  httpGet:
    path: /health
    port: 8080



Q.69) What is the difference between blue-green and canary deployments?
ans :
   | **Blue-Green Deployment**                    | **Canary Deployment**                           |
| -------------------------------------------- | ----------------------------------------------- |
| Two environments (blue + green)              | Gradual rollout to small % of users             |
| All traffic switches to green once validated | Traffic slowly increased over time              |
| Easier rollback (just switch back to blue)   | Safer for detecting issues in production        |
| Requires double resources (for both envs)    | Resource efficient, but complex traffic routing |


Q.70) How do you track and manage backend service errors?
ans : Strategies:

Structured Logging:

Use winston, bunyan, or log4j to log with context (e.g., user ID, request ID).

Error Tracking Tools:

Sentry, Bugsnag, Rollbar for stack traces + alerts.

Metrics and Alerts:

Track 5xx response rate, DB errors via Prometheus/Grafana.

Correlation IDs:

Add trace IDs to logs for end-to-end debugging.

CI/CD Policies:

Block merges on high-severity unacknowledged bugs.


🔹 Scalability & Fault Tolerance
Q.71)How do you design a highly available backend system?
ans : 1) Create multiple instances of a server
         Use load balancer
         CDN and Edge Caching
         Health Checks & Monitoring
         Disaster Recovery & Backups
         Graceful Degradation
      2) Use multiple replica sets of a database
      3) Use PM2 for the fault tolerance
      4) Use the cache and messaging queues

Q.72)What is a service mesh and why is it useful?
ans : A service mesh is an infrastructure layer that manages service-to-service communication within a microservices architecture. It provides capabilities like traffic management, security, observability, and reliability without requiring changes to the application code.

🔧 How it Works:
A service mesh typically works by deploying sidecar proxies (like Envoy) alongside each microservice instance. These proxies intercept all inbound and outbound traffic, allowing the mesh to manage communications centrally.


Q.73)What happens when a microservice fails?
ans : When a microservice fails, it can impact the entire system if not properly handled. Here's what typically happens and how to mitigate it:

🔥 What Happens When a Microservice Fails?
Service Becomes Unreachable
Other services or clients trying to reach it will get timeouts, 500 errors, or connection failures.

Cascading Failures
If dependent services rely on it (e.g., Order Service calls Payment Service), the failure may propagate and cause other services to fail.

Increased Latency
Retrying failed calls or waiting for timeouts increases response times in other services.

Partial Outages
Some features of the system (like payments or notifications) may stop working while others continue.

Bad User Experience
Users might see errors or delays in functionality if the failure isn't gracefully handled.

| Strategy                               | Description                                                                                           |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Retries with Backoff**               | Retry failed requests with increasing delays to avoid overload.                                       |
| **Circuit Breaker**                    | Temporarily stop sending requests to a failing service (like a fuse) to prevent overloading it.       |
| **Timeouts**                           | Set time limits on requests to avoid waiting indefinitely.                                            |
| **Fallbacks**                          | Provide an alternative response (e.g., cached data or "service unavailable" message).                 |
| **Service Discovery + Load Balancing** | If one instance fails, route to healthy instances.                                                    |
| **Health Checks**                      | Automatically detect failed services and remove them from traffic via orchestrator (like Kubernetes). |
| **Logging + Monitoring**               | Use tools like Prometheus, Grafana, or Sentry to detect and alert on failures quickly.                |
| **Message Queues**                     | Decouple services using queues like RabbitMQ or Kafka, so failures don’t block the system.            |



Q.74)How do you implement retries and backoff mechanisms?
ans : async function retryWithBackoff(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(res => setTimeout(res, delay * 2 ** i)); // exponential backoff
    }
  }
}


Q.75)What is circuit breaking?
ans : Circuit breaking is a fault tolerance pattern used to prevent a system from repeatedly trying a failing operation, which could overload services and cause cascading failures.

🔌 How it Works:
Closed: Requests are allowed as normal.

Open: After a threshold of failures is reached, all further calls fail fast without trying the operation.

Half-Open: After some time, one trial request is allowed. If it succeeds, the circuit closes; otherwise, it stays open.

🧠 Why Use It?
Prevent system overload

Allow downstream services to recover

Improve responsiveness and resiliency

const CircuitBreaker = require('opossum');

async function riskyRequest() {
  // call a service that may fail
}

const breaker = new CircuitBreaker(riskyRequest, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
});

breaker.fallback(() => 'Fallback response');
breaker.fire().then(console.log).catch(console.error);



Q.76)How would you handle a thundering herd problem?
ans : 


Q.77)What is a dead letter queue?
ans : dead letter queues are the queue which are not consumed by any consumer and they are only filling the storage of the server.


Q.78)What is quorum in distributed systems?
ans : 


Q.79)How do you handle split-brain in a cluster?


Q.80)Explain the role of consensus algorithms like Raft or Paxos.



🔹 Miscellaneous / Best Practices
Q.81)What’s the 12-factor app methodology?


Q.82)What is the difference between synchronous vs event-driven architecture?


Q.83)How do you manage environment-specific configs?


Q.84)What are service discovery tools?


Q.85)What is containerization and how does Docker help backend dev?


Q.86)What are the benefits of using a message broker like Kafka or RabbitMQ?


Q.87)What is eventual consistency in distributed systems?


Q.88)How do you prevent cascading failures in microservices?


Q.89)What’s the difference between hard delete and soft delete?


Q.90)What are idempotent retries?



🔹 Real-World Design Scenarios
Q.91) How would you design a real-time chat system?


Q.92) How would you design a background job queue?


Q.93) How would you design a video streaming platform?


Q.94) How would you design a notification system (email, SMS, push)?


Q.95) How would you design a file storage backend?


Q.96) How would you implement multi-tenancy in a backend system?


Q.97) How do you handle timezone conversions in global applications?


Q.98) How do you ensure GDPR compliance in your backend?


Q.99) How do you handle billing and metering in a SaaS backend?


Q.100) How would you migrate millions of rows between DBs with zero downtime?




     🔸 Advanced Architecture & Design Patterns
What are sidecar patterns and where are they useful?


How do you implement CQRS (Command Query Responsibility Segregation)?


What is Event Sourcing and when should you use it?


Explain Saga Pattern and its usage in distributed transactions.


What are the trade-offs of microservices vs modular monoliths?


How would you design a write-intensive service for scalability?


What is backpressure and how can a backend system handle it?


How does the outbox pattern solve consistency issues?


What are the different types of API rate limiting strategies?


How would you isolate noisy neighbors in a multitenant system?



🔸 Concurrency & Asynchronous Design
What are race conditions and how can you prevent them?


How do you design a backend system to support long-running operations?


What is the difference between concurrency and parallelism?


How do thread pools help backend performance?


What is the actor model and how is it applied?


What are fan-out and fan-in patterns in distributed systems?


How do you debounce or throttle user actions server-side?


How do you detect and prevent deadlocks?


What are semaphores and mutexes?


How do you handle retry storms in asynchronous workflows?



🔸 Data Consistency & Integrity
What is a two-phase commit and its drawbacks?


How do you implement distributed locking?


How do you ensure data consistency across microservices?


What is read repair in distributed databases?


What’s a bloom filter and when would you use it?


Explain snapshot isolation.


What is write-ahead logging (WAL)?


What are conflict-free replicated data types (CRDTs)?


How do eventual consistency models affect UI/UX?


How do you handle stale reads?



🔸 Networking & Transport
What’s the difference between TCP and UDP in backend systems?


When would you use WebSockets vs Server-Sent Events?


What is gRPC and how does it compare to REST?


What are sticky sessions?


How does TLS termination affect performance?


What is MTLS (Mutual TLS) and where is it useful?


How do you trace a request across services?


What are timeouts and how do you tune them?


What is head-of-line blocking?


How do load balancers maintain session affinity?



🔸 Infrastructure & Deployment
What are infrastructure as code tools, and why are they important?


How do you manage secrets in CI/CD pipelines?


What are rolling restarts vs rolling updates?


How do you rollback safely in CI/CD?


What is container orchestration?


What is a sidecar proxy and how is it used in service meshes?


How do you build immutable infrastructure?


What are blue/green environments?


How do you manage database versioning during deployments?


What are configuration drift and how to detect it?



🔸 Monitoring, Logging, Observability
What are the key differences between logs, metrics, and traces?


What is structured logging?


How do you trace slow DB queries in a live environment?


What is cardinality in metrics and why is it a problem?


What are RED and USE metrics?


What’s the difference between white-box and black-box monitoring?


How do you build alerts with low false positives?


What are SLOs, SLAs, and SLIs?


How do you visualize service health in a microservice architecture?


What are service dependency maps?



🔸 Security at Scale
What is Zero Trust architecture?


How would you detect and block bot traffic at the backend?


What are API abuse prevention strategies?


How do you secure backend services in Kubernetes?


How would you implement role-based access control (RBAC)?


What is mutual authentication and when do you need it?


How do you perform input validation to prevent attacks?


How do you scan your backend containers for vulnerabilities?


What are the risks of deserialization in backend systems?


How do you design secure audit logging?



🔸 Scaling Patterns & Tradeoffs
How do you choose between vertical and horizontal partitioning?


What are anti-patterns in horizontal scaling?


How do you use consistent hashing for load balancing or caching?


How do you detect hotspots in a distributed system?


What is elastic scaling and how do you implement it?


When would you scale read replicas vs sharding?


What are warm pools and how do they improve scale time?


What are the trade-offs of batch vs stream processing?


What are the benefits of push vs pull model in backend architecture?


What’s the difference between polling, long-polling, and streaming?



🔸 Design Thinking & Real Use Cases
How would you design a backend system for live sports updates?


How would you architect a travel booking engine with price consistency?


How would you build a backend for collaborative editing (like Google Docs)?


How do you design a secure backend for healthcare apps (HIPAA compliance)?


How would you build an analytics engine for millions of users?


How would you implement usage-based billing in a SaaS backend?


How would you scale a leaderboard backend for a game?


How would you detect and block fraudulent transactions?


How would you architect a customer support ticketing backend?


How would you handle internationalization in backend services?



🔸 Team Practices, Principles, and Standards
How do you review backend pull requests for quality and performance?


What are backend coding standards that improve maintainability?


How do you ensure backward compatibility in evolving APIs?


What is technical debt and how do you manage it in backend code?


How do you document a complex backend system for new developers?


How do you measure and improve backend developer productivity?


What practices ensure graceful degradation in backend systems?


What is the role of observability in DevSecOps?


How do you prevent outages from spreading across microservices?


How do you run postmortems after backend system failures?

