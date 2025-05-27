
Q --> Internal Working of Indexes in MongoDB & Why They're Fast
📦 How Indexes Are Stored in MongoDB
MongoDB uses B-trees (more specifically B+ trees) to store indexes.

Index Structure:
Each index in MongoDB is a data structure that maps the values of a field (or set of fields) to the location (_id) of documents.

B+ Tree Characteristics:

Nodes contain sorted keys.

All values (pointers to documents) are stored in leaf nodes.

Internal nodes only store keys to guide searches — no data.

Multilevel Hierarchy:
Like a phonebook — you don’t scan everything, just follow paths (root → branches → leaves).

⚙️ Internal Mechanism – Step by Step
Collection Creation:
A default _id index is automatically created.

Custom Index Creation (e.g., on { name: 1 }):

MongoDB traverses all documents.

Extracts name field values.

Inserts them into a B+ tree along with pointers to documents.

Storage:

Index data is stored in MongoDB’s WiredTiger engine (or MMAPv1 in legacy).

Physically stored on disk in separate data files.

Supports compression to save space.

⚡ Why Indexes Make Retrieval Faster
Without Indexes:

MongoDB performs a collection scan — reads every document one by one.

With Indexes:

Binary search on B+ tree (logarithmic time complexity).

Directly jumps to leaf node with the desired value.

Avoids scanning irrelevant documents.

📊 Example
Suppose you run:

db.users.find({ age: 30 });
With no index on age: full scan of all documents.

With { age: 1 } index: binary search through B+ tree → jump to exact document(s).

🧠 Extra Benefits of Indexes
Compound Indexes: Efficient for queries on multiple fields.

Covered Queries: Return results only using index, no need to fetch documents.

Sorted Results: If index matches sort order, no extra sorting needed.

⚠️ Trade-offs
Indexes consume disk space.

Every insert/update/delete must update the indexes, which adds overhead.



Q --> Difference between Forward proxy vs Reverse proxy vs Database proxy ?
ans : 🌐 1. Forward Proxy (aka Proxy Server)
✅ Definition:
A forward proxy sits between a client (e.g., your browser) and the internet. It represents the client to the outside world.

🔧 How It Works:
The client sends a request to the proxy.

Proxy forwards the request to the destination server.

The server sends data back to the proxy.

Proxy sends it to the client.

🔒 Use Cases:
Access control (e.g., block YouTube at work)

Anonymity/Privacy (hide IP address)

Content filtering (e.g., parental controls)

Caching to improve response times

🏠 Location:
Sits on the client-side of the network.

📦 Example:
txt
Copy
Edit
Client --> Forward Proxy --> Web Server
🔁 2. Reverse Proxy
✅ Definition:
A reverse proxy sits in front of web servers and represents the server to external clients.

🔧 How It Works:
Client makes request to the reverse proxy.

Proxy decides which backend server should handle it.

It forwards the request and sends back the response to the client.

🎯 Use Cases:
Load balancing

SSL termination

Web acceleration (caching, compression)

Application firewall (security)

Microservices gateway

🏠 Location:
Sits on the server-side of the network.

📦 Example:
txt
Copy
Edit
Client --> Reverse Proxy --> App Server / API Server
Tools: Nginx, HAProxy, AWS ELB, Traefik, etc.

🛢️ 3. Database Proxy
✅ Definition:
A database proxy sits between an application and a database, managing and optimizing DB access.

🔧 How It Works:
App connects to the proxy instead of the DB directly.

The proxy routes SQL queries to the appropriate DB instance.

Can manage connections, cache queries, and handle failover.

🎯 Use Cases:
Connection pooling to handle many client connections

Failover handling in multi-replica DB setups

Query caching

Read/write splitting (write to primary, read from replicas)

Security & audit logging

🏠 Location:
Between the application and the database.

📦 Example:
txt
Copy
Edit
App --> DB Proxy --> Primary/Replica DBs
Tools: Amazon RDS Proxy, PgBouncer (PostgreSQL), ProxySQL (MySQL), etc.


| Feature        | Forward Proxy        | Reverse Proxy           | Database Proxy               |
| -------------- | -------------------- | ----------------------- | ---------------------------- |
| Represents     | Client               | Server                  | Database                     |
| Sits Between   | Client ↔ Internet    | Client ↔ Web Server     | App ↔ Database               |
| Primary Use    | Anonymity, filtering | Load balancing, caching | Connection pooling, failover |
| Seen By Server | Proxy IP             | Client IP (if allowed)  | Proxy or client IP           |
| Seen By Client | Configured manually  | Appears as the server   | Transparent to app           |


