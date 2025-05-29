What is Redis and how does it differ from traditional databases?
Redis is an in-memory key-value data store used for caching, real-time analytics, and messaging. Unlike traditional disk-based databases, Redis stores data primarily in RAM, providing ultra-fast read/write operations.

What data structures does Redis support?
Strings, Lists, Sets, Sorted Sets, Hashes, Bitmaps, HyperLogLogs, Streams, and Geospatial indexes.

Is Redis an in-memory database only? Explain.
Primarily yes, Redis stores data in memory for fast access, but it can persist data to disk asynchronously.

What are the advantages of using Redis?
High performance, rich data structures, simplicity, support for atomic operations, built-in replication, and persistence options.

How does Redis persist data?
Through RDB snapshots or AOF (Append Only File) logging.

What are RDB and AOF in Redis?
RDB creates point-in-time snapshots at intervals; AOF logs every write operation for durability.

What are the differences between RDB and AOF persistence mechanisms?
RDB is faster but less durable; AOF is slower but offers better durability by logging every change.

What is the default port of Redis?
6379.

How do you check if Redis is running?
By running redis-cli ping which returns PONG if the server is up.

How do you set and get a key-value pair in Redis?
SET key value and GET key.

🔹 11–20: Data Structures & Operations
How do Redis Sets differ from Lists?
Sets are unordered collections of unique elements; Lists are ordered sequences that can contain duplicates.

What are Redis Sorted Sets and how do they work?
Sorted Sets are like Sets but with an associated score for each member, sorted by score.

What is the use of TTL in Redis?
TTL (Time To Live) sets expiration time for keys to auto-delete them.

How do you delete a key from Redis?
DEL key.

What is the difference between DEL and UNLINK in Redis?
DEL deletes synchronously; UNLINK deletes asynchronously to avoid blocking.

How do you increment or decrement values in Redis?
INCR key, DECR key, or INCRBY key increment.

How can you use Redis Hashes and when would you choose them?
Hashes store field-value pairs under a single key, ideal for representing objects.

What is the difference between LPUSH and RPUSH?
LPUSH adds elements to the left (start); RPUSH adds to the right (end) of the list.

How do you remove elements from a List in Redis?
LPOP, RPOP to remove from ends; LREM to remove specific elements.

What command do you use to get all keys matching a pattern?
KEYS pattern (not recommended for production); use SCAN instead.

🔹 21–30: Advanced Features
What is Redis Pub/Sub and how does it work?
Publish/Subscribe messaging paradigm for real-time messaging between clients.

Explain Redis Streams and use cases.
A log data structure for messaging and event sourcing with consumer groups.

What are Redis HyperLogLogs used for?
Probabilistic data structure for approximate cardinality counting (e.g., unique visitors).

How does Redis GEO work and what are common commands?
Stores geospatial data for radius queries and geohashing (e.g., GEOADD, GEORADIUS).

What are Lua scripts in Redis? Why and when would you use them?
Lua scripting allows atomic multi-step operations on Redis, ensuring consistency.

Explain the Redis Bitmaps and their usage.
Bit-level operations for efficient storage of boolean flags and counters.

How can you implement rate limiting using Redis?
Using INCR and EXPIRE commands on a key to count requests in a time window.

What is the role of Redis in caching?
Store frequently accessed data in-memory to reduce latency and backend load.

How does Redis handle key expiration?
It tracks expiration times and deletes keys either lazily on access or actively in the background.

What is the difference between EXPIRE and PERSIST commands?
EXPIRE sets a TTL on a key; PERSIST removes the TTL making the key persistent.

🔹 31–40: Performance & Scaling
How do you monitor Redis performance?
Using Redis INFO command, slowlog, and external monitoring tools like RedisInsight.

What are Redis slow logs and how do you check them?
Logs of commands exceeding a latency threshold, viewed via SLOWLOG GET.

How does Redis clustering work?
Data is partitioned across multiple nodes via hash slots for scalability and fault tolerance.

What is the difference between Redis replication and Redis clustering?
Replication copies data to replicas for failover; clustering shards data across nodes.

How can Redis ensure high availability?
Through replication, Sentinel for monitoring and failover, and clustering.

What is Redis Sentinel and what role does it play?
Monitors Redis instances and automates failover.

How do you handle failover in Redis?
Sentinel detects master failure and promotes a replica to master automatically.

Can Redis scale horizontally?
Yes, via Redis Cluster or client-side sharding.

What are the limitations of Redis?
Data size limited by memory, single-threaded processing per core, persistence is asynchronous.

What is memory eviction in Redis and what policies are supported?
When memory is full, Redis evicts keys based on policies: noeviction, allkeys-lru, volatile-lru, etc.

🔹 41–50: Real-World Scenarios & Best Practices
How do you use Redis in a microservices architecture?
For caching, shared session store, rate limiting, or messaging via Pub/Sub.

How can Redis be used to implement a leaderboard?
Using Sorted Sets where scores are user points and rank is determined by score.

How can you use Redis to implement session management?
Store session data with an expiration time keyed by session ID.

What are some common pitfalls when using Redis?
Relying too much on memory, blocking commands, and improper eviction policy.

How do you secure a Redis server?
Use ACLs, disable commands like CONFIG, bind to localhost or VPN, enable TLS, and require authentication.

What happens if Redis runs out of memory?
Depending on eviction policy, it evicts keys or rejects writes.

Can Redis be used as a primary database? Why or why not?
Generally no, due to in-memory nature and durability limitations, but some use cases do.

How do you back up and restore Redis data?
Back up RDB/AOF files and restore by restarting Redis with those files.

When would you choose Redis over Memcached?
When you need richer data structures, persistence, replication, or Lua scripting.

How do you debug Redis commands or issues?
Use MONITOR command, slow logs, logs, and profiling tools.

