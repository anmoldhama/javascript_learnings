 # YOUTUBE HIGH LEVEL DESIGN

 1. 📌 Functional Requirements
Upload videos

Watch videos (with streaming support)

Like/dislike/comment

Subscribe to channels

Search videos

View history, watch later, playlists

Recommendations (basic for HLD)

2. 📌 Non-Functional Requirements
Scalability: millions of users and videos

Availability: >99.9%

Video storage: petabytes

CDN for fast video delivery

Low latency for video streaming

Strong consistency for likes/comments

Eventual consistency for views/recommendations


3. 👥 Actors / Users
Viewer

Uploader (creator)

Admin

4. ⚙️ System Components Overview
A. Frontend
Web, Mobile clients

B. Backend Services
API Gateway

Auth Service

Video Upload Service

Video Processing Service

Metadata Service

User Service

Feed/Recommendation Service

Comment Service

Analytics/Views Service

Notification Service

Search Service

5. 🧱 High-Level Architecture (Text Version)

[ Client ] 
   |
[ API Gateway ]
   |
----------------------------------------------------------
| Auth Service       | Video Upload Service              |
| User Service       | Video Processing (Async + Queue)  |
| Metadata Service   | Feed/Recommendation Service       |
| Comment Service    | Search Service                    |
| Notification Svc   | Analytics/Views Service           |
----------------------------------------------------------
          |                      |
        [ DBs ]              [ Object Storage ]
       (SQL, NoSQL)           (e.g., S3, GCS)
                               |
                            [ CDN ]


6. 💾 Databases & Storage

| Service         | DB Type           | Tech                  |
| --------------- | ----------------- | --------------------- |
| User/Auth       | SQL               | PostgreSQL            |
| Metadata        | NoSQL             | MongoDB               |
| Comments        | NoSQL             | Cassandra or DynamoDB |
| Videos          | Object Storage    | AWS S3, GCS           |
| Views Analytics | Time-series       | InfluxDB, Redshift    |
| Recommendations | Vector DB / NoSQL | Elasticsearch, Redis  |
| Search Index    | Full-text         | Elasticsearch         |


7. 📹 Video Upload & Processing Flow
Client uploads video

Video Upload Service receives video

Uploads to temporary storage (e.g., S3)

Sends job to message queue (Kafka/SQS)

Video Processor service:

Extracts thumbnails

Converts video to multiple bitrates (480p, 720p, 1080p)

Saves all outputs to S3

Updates Metadata DB with video info

Returns video URL via CDN

8. 🔁 Video Streaming
Videos delivered via CDN (Cloudflare, Akamai, AWS CloudFront)

Client fetches chunks via HLS or MPEG-DASH

CDN caches most-accessed content

9. 📈 View Count & Analytics (Eventual Consistency)
View events pushed to Kafka

Batched and processed into:

Time-series DB

Feed ranking engine

Trending videos

10. 🔍 Search
Video metadata and tags indexed in Elasticsearch

Tokenized by relevance, freshness, popularity

Supports fuzzy search, autocomplete

11. 💬 Comments & Likes
Stored in NoSQL (DynamoDB or Cassandra)

Likes stored as per-user per-video interaction (can be deduplicated with Redis)

Comment pagination support

12. 👥 Subscriptions & Feed
Subscriptions stored as graph (user → channels)

Daily/weekly Feed precomputed

Redis or Elasticsearch-based sorting

13. 📢 Notifications
Email/Push handled via Pub/Sub model

Subscriber events trigger fan-out to queue → Notification service

14. 🔐 Security & Auth
OAuth2/JWT-based login

Access controls per video (public/unlisted/private)

Rate limiting, CSRF protection

15. 🧪 Monitoring & DevOps
Prometheus + Grafana (metrics)

Loki or ELK (logs)

Sentry (errors)

Auto-scaling groups, health checks

Canary deployments via CI/CD

⚖️ Trade-offs & Considerations

| Decision                        | Reason                              |
| ------------------------------- | ----------------------------------- |
| Object Storage for videos       | Cheap and scalable                  |
| CDN                             | Reduce latency for video delivery   |
| Async Processing                | Prevent upload timeouts             |
| Eventual consistency for views  | Acceptable for performance          |
| Elasticsearch for search        | Fast, full-text search capabilities |
| Cassandra/DynamoDB for comments | High write throughput, scalable     |


🧠 HLD Interview Pro Tips
Start from user flows, derive services

Cover scale, storage, failure, and async workflows

Prioritize caching (Redis) for hot data

Handle rate-limits, retries, and fault tolerance

Draw modular, loosely coupled architecture



 # how processor converts this to bitrates ?
 To convert videos into multiple bitrates (480p, 720p, 1080p) in a YouTube-like system, you use FFmpeg, a powerful multimedia processing tool. This is exactly what YouTube and similar platforms do in their Video Processor Service.

 🔧 What Is Bitrate Conversion?
Bitrate conversion means encoding a video into different resolutions and quality levels to support adaptive streaming (like HLS or DASH), so users with slower networks get 480p, and faster ones get 1080p automatically.


  # what is HLS and DASH explain in details ?

  In modern video streaming (like YouTube, Netflix, Twitch), HLS and DASH are the two most popular adaptive streaming protocols. They break videos into chunks and serve the best quality based on the viewer’s network speed.

  🔄 Why HLS/DASH?
Traditional streaming (like MP4) downloads the entire file or streams linearly.
But what if the network fluctuates? The video buffers or stops.

To solve this:
✅ HLS (HTTP Live Streaming) — by Apple
✅ DASH (Dynamic Adaptive Streaming over HTTP) — by MPEG

These:

Split video into small chunks (2-10 seconds)

Encode video in multiple resolutions (480p, 720p, 1080p, etc.)

Adaptively switch based on network speed

Work over regular HTTP/CDN infrastructure

🧩 Basic Architecture

Original Video
   ↓
Transcoded into:
 - 1080p
 - 720p
 - 480p
   ↓
Split into segments:
 - 1080p: seg1.ts, seg2.ts...
 - 720p: seg1.ts, seg2.ts...
   ↓
Playlist/manifest:
 - HLS: `.m3u8`
 - DASH: `.mpd`
   ↓
Player picks best quality based on network bandwidth.

HLS (HTTP Live Streaming)
🔹 Developed by Apple

🔹 Uses .m3u8 (playlist in M3U format)

🔹 Segments: .ts (MPEG-TS)

🔹 Widely supported on iOS, Safari, Apple TV

🔹 Supported on Android, most browsers too

🔹 Default in tools like FFmpeg, AWS MediaConvert

🎯 Sample HLS Structure

master.m3u8
├── 1080p.m3u8
│   ├── seg1.ts
│   ├── seg2.ts
├── 720p.m3u8
│   ├── seg1.ts
│   ├── seg2.ts
├── 480p.m3u8
│   ├── seg1.ts
│   ├── seg2.ts


 MPEG-DASH (Dynamic Adaptive Streaming over HTTP)
🔹 Developed by MPEG Group (open standard)

🔹 Uses .mpd (XML-based manifest)

🔹 Segments: .mp4 or fragmented .m4s

🔹 Supported by Chrome, Firefox, Smart TVs, Android

🔹 Not supported on Safari iOS (Apple pushes HLS)

🎯 Sample DASH Structure

manifest.mpd
├── 1080p/
│   ├── init.mp4
│   ├── segment1.m4s
├── 720p/
│   ├── init.mp4
│   ├── segment1.m4s


📊 HLS vs DASH Comparison

| Feature           | HLS                   | DASH                          |
| ----------------- | --------------------- | ----------------------------- |
| Developed By      | Apple                 | MPEG Group                    |
| Manifest Format   | `.m3u8`               | `.mpd`                        |
| Segment Format    | `.ts`                 | `.m4s`, `.mp4`                |
| Browser Support   | All, especially Apple | All except Safari on iOS      |
| Standard          | Proprietary (Apple)   | Open standard (ISO)           |
| Encryption        | AES-128, FairPlay     | Widevine, PlayReady, ClearKey |
| Latency (default) | 5-10 seconds          | Lower possible with tuning    |


🎥 Playback
Use video.js, hls.js, dash.js, or native <video> tag with MediaSource Extensions (MSE) support.

<video controls autoplay>
  <source src="master.m3u8" type="application/x-mpegURL" />
</video>


 # why elastic search explain elastic search in details ?

 Elasticsearch is a powerful distributed search and analytics engine, designed to:

Store large volumes of data

Search that data quickly

Analyze it in near real-time

Built on top of Apache Lucene, it's widely used for full-text search, log analytics, monitoring, business intelligence, and real-time search.

🏗️ Elasticsearch Internals
✅ Nodes: A single server

✅ Cluster: A group of nodes

✅ Shards: Elasticsearch splits indexes into smaller parts

✅ Replicas: Backup copies of shards


Elasticsearch is faster than traditional databases for search and analytics because it's built on top of Apache Lucene, a highly optimized search engine library. Here's why Elasticsearch is fast, explained in detail:

🚀 Why Is Elasticsearch So Fast?
1. Inverted Index (vs. traditional B-trees)
Traditional DBs scan rows or use B-trees for indexes → good for exact lookups, bad for full-text search.

Elasticsearch uses an Inverted Index — it maps words to documents.

Example:
For documents:

json
Copy
Edit
{ "title": "hello world" }
{ "title": "hello there" }
Inverted index:

txt
Copy
Edit
"hello"  → [doc1, doc2]
"world"  → [doc1]
"there"  → [doc2]
✅ Querying "hello" returns matching docs immediately — no scanning required.

2. Document-Oriented (No Joins)
Each document is self-contained (like a JSON object).

No joins → less computation → faster queries.

json
Copy
Edit
{
  "user": "anmol",
  "post": "Elastic is amazing!",
  "tags": ["search", "analytics"]
}
✅ This structure is highly optimized for reading.

3. Distributed by Design
Data is split into shards, and queries run in parallel on multiple nodes.

Like having many workers searching at once.

✅ High throughput even for massive datasets (TBs+).

4. Lucene’s Optimized Write Path
Lucene writes data to disk using immutable segments, merges them in the background.

Fast indexing, near real-time search (~1 second delay).

✅ No locks, fewer disk I/Os, better concurrency.

5. Efficient Caching
Elasticsearch caches:

Frequent query results

Filter results (bitmap-based)

Field data (e.g., for sorting/aggregations)

✅ Repeated queries become nearly instantaneous.

6. Memory Mapping & Zero-Copy Reads
Uses OS-level memory-mapped files.

No need to load entire files — OS caches them as needed.

✅ Super fast reads without loading the full dataset.

7. Bulk Operations & Pipelines
Batch indexing and processing via bulk APIs.

Ingest pipelines (transform/filter before storing).

✅ Reduces overhead and improves write performance.

8. Built-in Aggregation Engine
Instead of SQL GROUP BY, Elasticsearch uses a streaming aggregation model.

Aggregations are pre-optimized for metrics, histograms, terms, etc.

✅ Efficient for dashboards and analytics workloads.



# why dynamodb or cassandra for comments and likes ?

Using DynamoDB or Cassandra for comments and likes is a strategic choice in high-scale systems (like Instagram, YouTube, Twitter) due to their high throughput, low latency, and scalable nature. Let's explore why these databases are chosen and how they compare to traditional SQL options.

🧠 Core Requirements for Comments & Likes Systems

| Feature                | Need for Comments & Likes                                  |
| ---------------------- | ---------------------------------------------------------- |
| High write throughput  | Millions of likes/comments/sec (especially on viral posts) |
| Low read latency       | Fetch latest comments/likes instantly                      |
| Horizontal scalability | Must scale across regions & traffic bursts                 |
| High availability      | User interactions shouldn't fail, even under load          |
| Time-based sorting     | Users want newest comments/likes first                     |


🧰 Why Use DynamoDB or Cassandra?
✅ 1. High Write Throughput
DynamoDB and Cassandra are write-optimized NoSQL databases.

Can handle thousands of writes per second per node.

Scales horizontally by adding more nodes (Cassandra) or partitions (DynamoDB).

⚡ Great for “write-heavy” operations like likes and comments.

✅ 2. Low Latency Reads
Queries like:

“Fetch latest 20 comments for Post A”

“Check if User U liked Post P”

Both databases support fast primary-key or partition-key lookups in single-digit milliseconds.

⚡ Ensures real-time feedback on UI (e.g., like button lights up instantly).

✅ 3. Efficient Time-Ordered Data
Both support sorted clustering columns (Cassandra) or range keys (DynamoDB).

Makes it easy to store and query chronologically ordered data like:


Comments[PostID, Timestamp] → {UserID, Text}
Likes[PostID, UserID] → true
✅ 4. Highly Available
DynamoDB is globally distributed with automatic failover.

Cassandra is peer-to-peer and supports multi-datacenter replication.

Can serve data even if part of the system goes down.

⚡ Important for always-on features like likes and comments.

✅ 5. Flexible Schema (NoSQL)
No rigid schema means easy evolution:

Add new metadata to comments (edited, repliedTo, etc.)

Track like types (e.g., ❤️, 😂, etc.)

✅ 6. Optimized for Access Patterns
NoSQL models encourage designing schema around access patterns.

For example:


// DynamoDB PartitionKey: PostID, SortKey: Timestamp
{
  PK: "POST#1234",
  SK: "COMMENT#2024-01-01T10:00:00Z",
  comment: "Looks great!",
  user: "anmol"
}
⚡ Efficient for querying "latest 50 comments for post X".

❌ Why Not a Traditional SQL DB?
Limitation	Explanation
Write bottlenecks	SQL databases struggle under massive writes
Scaling is hard	Vertical scaling only (scaling up)
JOINs get expensive	Especially in sharded environments
Hard to partition	Comments/likes per post/user need manual sharding
High latency under load	Pages slow down during spikes

🆚 DynamoDB vs Cassandra (Quick Comparison)
Feature	DynamoDB	Cassandra
Type	Managed NoSQL by AWS	Open-source NoSQL
Scalability	Auto-scaling, serverless	Manual scaling, cluster setup
Query Language	NoSQL API or PartiQL	CQL (SQL-like query language)
Availability	Multi-AZ, Multi-Region	Multi-DC support
Maintenance	Fully managed by AWS	You manage the cluster

💡 Use Case Examples
Instagram Likes → DynamoDB with user+post composite keys.

Reddit Comments → Cassandra to handle deep nesting & massive write volume.

YouTube → Mix of Spanner + NoSQL depending on region/service.

✅ Summary

| If You Need                       | Use                                           |
| --------------------------------- | --------------------------------------------- |
| Effortless scaling, managed infra | **DynamoDB**                                  |
| Control, open-source, DC-aware    | **Cassandra**                                 |
| Real-time likes/comments          | Both are solid choices                        |
| Strict consistency                | DynamoDB with Dynamo Streams or global tables |
| High write throughput, fast reads | Cassandra with proper data modeling           |


# then why not use dynamodb in place of mongodb or mysql for every time ?

🔍 Why Not Use DynamoDB for Everything?

⚙️ 1. Access Pattern-Driven Design
DynamoDB schema is tightly coupled to access patterns.

You must know your queries upfront (e.g., always query comments by PostID).

Changing access patterns later is hard and might need new tables or duplication.

✅ Great for: Known, predictable queries.
❌ Bad for: Ad-hoc or flexible queries.

💰 2. Cost Model
DynamoDB charges per request unit (RCU/WCU) and data storage.

Complex queries = more read/write units = higher cost.

Hot partitions or bad key design can spike costs.

✅ Good for: Uniform access patterns.
❌ Bad for: Large scan/filter operations or unpredictable load.

🔄 3. Limited Querying & Joins
No support for joins, aggregations, or complex filtering.

You can’t do:


SELECT posts.*, users.name FROM posts JOIN users ON posts.user_id = users.id;
You need to denormalize data manually.

✅ Great for denormalized structures (event logs, analytics).
❌ Bad for relational data, multi-entity queries.

📚 4. Learning Curve & Complexity
You need to think in terms of:

Partition Keys, Sort Keys

GSIs (Global Secondary Indexes)

LSI (Local Secondary Indexes)

Hot keys, throughput provisioning

Compared to:

sql
Copy
Edit
SELECT * FROM users WHERE email = 'a@b.com';
DynamoDB needs careful modeling.

🔄 5. Eventual Consistency (Default)
DynamoDB defaults to eventual consistency for reads.

You can use strongly consistent reads, but at double cost.

In contrast, MySQL/MongoDB offer stronger consistency guarantees.

🚫 6. Not Ideal for Complex Transactions
Limited transaction support (TransactWriteItems, TransactGetItems), and harder to work with.

MySQL/PostgreSQL support complex ACID transactions out of the box.

✅ Good for atomic operations like Like a Post.
❌ Bad for multiple-table transactions like “Create Order → Update Inventory → Send Invoice”.

🔄 Comparison Table

| Feature                 | DynamoDB                     | MongoDB                | MySQL/Postgres                          |
| ----------------------- | ---------------------------- | ---------------------- | --------------------------------------- |
| **Scalability**         | Horizontally scalable        | Scales with sharding   | Scales vertically, or via read replicas |
| **Schema Flexibility**  | Schema-less (NoSQL)          | Schema-less (NoSQL)    | Schema-based                            |
| **Query Power**         | Limited, access pattern only | Flexible querying      | Powerful SQL + joins                    |
| **Transaction Support** | Limited                      | Basic transactions     | Full ACID                               |
| **Cost Model**          | RCU/WCU pricing              | Storage + compute      | Storage + compute                       |
| **Management**          | Fully managed (AWS)          | Managed or self-hosted | Managed (RDS) or self-hosted            |
| **Use Case Fit**        | Real-time, massive scale     | Flexible document data | Strong consistency + joins              |


#  Access Pattern-Driven Design  explain this in details?
🧠 Design your database schema based on how your application will access the data.
Not the other way around.

🆚 Traditional (SQL) vs Access-Pattern Design (NoSQL)

| SQL (Relational DB)                                                    | NoSQL (e.g., DynamoDB)                        |
| ---------------------------------------------------------------------- | --------------------------------------------- |
| Design starts with **data structure** (tables, columns, relationships) | Design starts with **how you query** the data |
| You normalize data and use **joins**                                   | You denormalize and **duplicate** data        |
| Schema can support **multiple query types**                            | Schema supports **specific access patterns**  |


🧱 Example Use Case: A Blog Platform
Suppose you’re building a blog platform. Here are your access patterns (i.e., query types):

Access Patterns
Get all posts by a user.

Get latest comments on a post.

Get a specific post by postId.

Get trending posts (by views).

✅ In SQL (Postgres, MySQL)
You'd do something like:


-- Posts table
CREATE TABLE posts (
  post_id UUID PRIMARY KEY,
  user_id UUID,
  title TEXT,
  created_at TIMESTAMP,
  views INT
);

-- Comments table
CREATE TABLE comments (
  comment_id UUID PRIMARY KEY,
  post_id UUID,
  user_id UUID,
  body TEXT,
  created_at TIMESTAMP
);
Then query with SQL:


SELECT * FROM posts WHERE user_id = 'abc';
SELECT * FROM comments WHERE post_id = 'xyz' ORDER BY created_at DESC;
You don't worry about how you’ll access it initially — just normalize it.

✅ In DynamoDB (Access Pattern-Driven)
You must know access patterns first because:

There are no joins.

You pay for each query.

Queries are fast only if you query by key.

So, you'd design based on query needs:

🎯 Access Pattern 1: Get all posts by a user


{
  "PK": "USER#123",
  "SK": "POST#456",
  "title": "My Blog",
  "createdAt": "2024-01-01"
}
🎯 Access Pattern 2: Get all comments for a post


{
  "PK": "POST#456",
  "SK": "COMMENT#999",
  "body": "Nice post!",
  "createdAt": "2024-01-02"
}
🎯 Access Pattern 3: Get trending posts
You might create a Global Secondary Index (GSI) like:


{
  "GSI_PK": "TRENDING",
  "GSI_SK": "VIEWS#10000#POST#456"
}
You can query this GSI by most views.

🧩 Key Concepts in Access Pattern Design (DynamoDB)
Concept	Meaning
Partition Key (PK)	Main key for data grouping
Sort Key (SK)	Used to order or filter within a partition
Global Secondary Index (GSI)	Alternate access pattern
Denormalization	Repeating data to serve multiple queries faster
Single Table Design	Often you store different types of data in the same table with composite keys

📦 Real-World Analogy
Think of DynamoDB like organizing a warehouse.

In SQL: Items are kept in separate sections by type (normalized).

In DynamoDB: Items are grouped by who needs them and how (optimized shelves).



 # 🔥 Why DynamoDB Is Faster (High Throughput & Low Latency)
1. Fully Managed, Distributed NoSQL Database
DynamoDB is designed from the ground up for horizontal scalability.

It automatically partitions data across multiple nodes based on your partition key.

No need to manage infrastructure, sharding, or replication yourself.

2. Key-Value & Document-Based Model
Designed for single-digit millisecond read/write latencies.

You access items directly using primary key (partition key + optional sort key) — making lookups extremely fast.

3. Memory-First Design
Frequently accessed data is cached in memory (DAX - DynamoDB Accelerator).

Reduces the number of disk I/O operations needed.

DAX brings down read latencies to microseconds.

4. Provisioned and On-Demand Modes
DynamoDB supports:

Provisioned throughput (predictable workloads).

On-Demand mode (automatically scales up or down based on traffic).

No performance bottlenecks during traffic spikes.

5. SSD-Based Storage
DynamoDB uses SSD (Solid State Drives) under the hood.

Much faster than traditional spinning disks.

Reduces latency on every read/write.

6. Write Optimizations (LSM Trees)
Internally uses Log-Structured Merge Trees (LSM trees).

Writes are batched and sequential, then merged in background — reducing write amplification and improving write throughput.

7. Global Distribution (Global Tables)
DynamoDB supports multi-region replication with Global Tables.

Ensures low latency for users across different geographies.

Built-in conflict resolution and eventual consistency.

8. Zero Downtime Scaling
DynamoDB can scale read/write capacity instantly without downtime.

There's no need to re-partition or reshard data manually.

9. Query and Index Optimization
Supports:

Primary key queries (fastest).

Global Secondary Indexes (GSI).

Local Secondary Indexes (LSI).

All indexes are optimized for lookup speed, unlike relational joins.

⚙️ Internal Architecture — At a Glance
Partitioning: Based on partition key and throughput settings.

Replication: Each partition is automatically replicated across 3 AZs.

Consistent performance because requests go directly to the correct partition node


#  Why graph is used to store the subscriptions and feeds relationships

Storing subscriptions and feeds as a graph is a powerful and scalable approach — especially in systems like YouTube, Twitter, or Instagram — where users follow many others and expect personalized, fast, and real-time content.

Let’s break down why a graph model is ideal here.

🔄 Example: Subscriptions in a Graph
📌 Data:
User A subscribes to Channel X

User A follows User B

User B posted a new video

✅ Why Use a Graph?
1. Relationships Are the Core
Subscriptions and feeds are fundamentally connections between users and content:


(User)-[:FOLLOWS]->(User)
(User)-[:SUBSCRIBED_TO]->(Channel)
(Channel)-[:HAS]->(Video)
With graph DBs, these relationships are:

First-class citizens

Directly indexable

Traversed in constant time

2. Efficient Fan-out Queries (Who Should See This?)
When User B posts, you want to notify all followers:


MATCH (b:User {id: "B"})<-[:FOLLOWS]-(follower)
RETURN follower
Graph DBs make this extremely fast, regardless of how many followers User B has.

In SQL, this would involve multiple JOINs and indexed lookups, which get slower with scale.

3. Feed Generation (What Should I See?)
To show User A’s feed:


MATCH (a:User {id: "A"})-[:FOLLOWS|SUBSCRIBED_TO]->(source)
MATCH (source)-[:POSTED|HAS]->(content)
RETURN content ORDER BY content.timestamp DESC
Easily retrieves relevant content from all sources User A follows/subscribes to.

No complex JOIN logic.

4. Mutual Relationships (Social Graph Use Cases)


MATCH (a:User)-[:FOLLOWS]->(b:User)-[:FOLLOWS]->(c:User)
WHERE NOT (a)-[:FOLLOWS]->(c)
RETURN c AS SuggestedConnection
This gives:

People you may know

Suggested subscriptions

Graph traversal-based recommendations

📊 Scale Advantage

| Feature            | SQL/Document DB | Graph DB                  |
| ------------------ | --------------- | ------------------------- |
| Follower lookup    | Costly JOINs    | Constant-time traversal   |
| Feed fan-out       | Complex joins   | Quick via edges           |
| Friend suggestions | Recursive JOINs | Natural graph traversal   |
| Personalized feed  | Complex queries | Relationship queries fast |


 # how video streaming works ?

 🎥 How YouTube Streams Video in Chunks
YouTube (and most modern streaming platforms) use adaptive bitrate streaming protocols, mainly:

HLS (HTTP Live Streaming) – by Apple

MPEG-DASH (Dynamic Adaptive Streaming over HTTP) – open standard

These don’t rely on persistent connections like WebSocket or RTMP for playback. Instead, they use regular HTTP requests to deliver video segments/chunks.

✅ Step-by-Step: What Happens When You Click Play
Video is encoded into multiple bitrates & resolutions (e.g., 240p, 480p, 1080p).

The video is split into small segments (usually 2–6 seconds each).

An index manifest file is created:

HLS: master.m3u8 and index.m3u8

DASH: manifest.mpd

The browser or player:

Fetches the manifest.

Picks the best quality based on network & device.

Requests segments one-by-one via HTTP.

The player buffers 1–2 segments ahead and decodes them for playback.

🔁 Example: HTTP Chunk Request Flow


GET /video/720p/segment-01.ts
GET /video/720p/segment-02.ts
GET /video/720p/segment-03.ts
...
Each segment is a few seconds long (e.g., 5 seconds), fetched using stateless HTTP GET requests.

📡 What Happens if the Connection Drops?
No persistent connection to worry about — just HTTP.

If the connection drops mid-segment:

The segment request fails.

The player retries, or falls back to a lower bitrate.

The video pauses/stalls until it can fetch the next segment.

If bandwidth is limited:

The player may switch to a lower quality (adaptive bitrate).


# ---------------------------Completed the youtube architecture ------------------------


