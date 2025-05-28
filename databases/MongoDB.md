🔰 Basic Level (1–30): Fundamentals and CRUD
What is MongoDB?

How is MongoDB different from relational databases?

What is a document in MongoDB?

What is a collection in MongoDB?

What is BSON in MongoDB?

How do you create a database in MongoDB?

How do you insert a document into a collection?

How do you retrieve all documents from a collection?

What is the difference between insertOne() and insertMany()?

How do you update a document in MongoDB?

What is the difference between updateOne() and updateMany()?

How do you delete a document from a collection?

What is the use of _id in MongoDB?

How do you query for documents that match a specific condition?

How do you use comparison operators like $gt, $lt, $eq, etc.?

What is a projection in MongoDB queries?

How do you limit and sort results in a query?

What does the findOne() method do?

How do you count documents in a collection?

What is the difference between find() and aggregate()?

What is an index in MongoDB?

How do you create an index?

What is a compound index?

What is a unique index?

What is the explain() method used for?

What is a capped collection?

What are embedded documents?

What are referenced documents?

How do you drop a collection or database?

What is the purpose of the ObjectId type?

⚙️ Intermediate Level (31–70): Querying, Indexing, Aggregation, and Architecture
What are the different data types supported in MongoDB?

How does MongoDB handle schema design?

When would you use embedding vs. referencing in schema design?

What is the aggregation framework?

What is a pipeline stage in aggregation?

What does the $match stage do in aggregation?

How does $group work in aggregation?

What is the $project stage used for?

How do $lookup and joins work in MongoDB?

How can you filter array elements using aggregation?

What is $unwind and when would you use it?

What is a text index and how do you use it?

How do you perform full-text search in MongoDB?

What is the difference between save() and insert()?

What is the difference between update() and replaceOne()?

What are transactions in MongoDB?

How do multi-document transactions work in MongoDB?

How do you use the bulkWrite() operation?

How does MongoDB handle concurrency?

How does MongoDB ensure data durability?

What is Write Concern in MongoDB?

What is Read Concern in MongoDB?

What is Read Preference in MongoDB?

What is a Replica Set?

How does failover work in a replica set?

What are the roles of primary and secondary nodes?

What is a shard in MongoDB?

What is a sharded cluster?

How does MongoDB distribute data across shards?

What is a chunk in sharding?

How do you enable sharding on a collection?

What is a shard key? How do you choose one?

What are the limitations of sharding?

How do you reshard a collection?

How does MongoDB scale horizontally?

What is journaling in MongoDB?

What is oplog and how is it used in replication?

What is the WiredTiger storage engine?

What is the MMAPv1 storage engine?

What tools are available for MongoDB backup and restore?

🚀 Advanced Level (71–100): Performance, Security, DevOps, Real-World Scenarios
How do you monitor MongoDB performance?

What metrics should you watch for MongoDB health?

How do you analyze slow queries?

How do you use db.currentOp()?

How does MongoDB handle locking?

What is a TTL index?

What causes write and read bottlenecks in MongoDB?

What are the best practices for schema design in MongoDB?

How do you secure MongoDB in production?

How do roles and users work in MongoDB?

How do you enable authentication in MongoDB?

What is authorization in MongoDB?

How can you encrypt data in MongoDB?

What are field-level and at-rest encryption?

What is MongoDB Atlas?

What’s the difference between self-hosted MongoDB and Atlas?

What is MongoDB Realm?

What are the advantages of using MongoDB for big data applications?

What’s the difference between MongoDB and Cassandra?

When should you avoid using MongoDB?

How do you handle schema migrations in MongoDB?

How do you implement optimistic concurrency control?

What is the maximum document size in MongoDB?

What is the maximum BSON document size?

How does MongoDB handle large datasets (in TBs)?

How does MongoDB perform under high-write loads?

How do you benchmark MongoDB performance?

What are some anti-patterns in MongoDB schema design?

How would you integrate MongoDB with a message queue (like Kafka)?

Describe a real-world architecture using MongoDB, microservices, Redis, and AWS.




# Scenario based questions


 1–10: CRUD & Querying
You have a collection with millions of documents. A query using .find({ status: "active" }) is slow. How do you optimize it?

You need to fetch users who signed up within the last 24 hours. How would you query for this efficiently?

You're getting duplicate user records after running an update. What might be the issue?

You want to increment a field viewCount every time a document is read. How would you do this atomically?

A document must have a nested field like profile.name.first. How do you ensure it's always present during insert?

You're asked to query orders where items.quantity > 2. The items field is an array. How do you write the query?

How would you update multiple nested fields in a document without overwriting the whole object?

How would you delete all users inactive for more than a year in an efficient manner?

You're asked to return only selected fields like name and email from the query. How do you use projections?

You want to enforce uniqueness on the email field. What kind of index should you use?

⚙️ 11–20: Indexing & Performance
A query on { userId: ObjectId, createdAt: Date } is slow. What type of index will help?

You're using a compound index, but queries on only one field aren't benefiting. Why?

How do you monitor index usage in MongoDB?

Your collection has grown too large and queries are becoming slower. How do you identify which queries to optimize?

You're performing a sort operation on a large dataset. How can indexes help?

You suspect MongoDB is not using the index. How do you confirm this?

How do you create a TTL index to auto-delete logs older than 7 days?

You want to ensure all usernames are unique and case-insensitive. How would you do this?

You have frequent updates on a field that's indexed. Is it good practice? Why or why not?

What happens when you create too many indexes on a collection?

📦 21–30: Schema Design & Modeling
Would you embed or reference address information for users? Why?

Your app requires frequent reads of user + profile + settings. How would you model this?

You need to store a blog with comments. How would you handle growing comment count efficiently?

How would you model a many-to-many relationship between users and groups?

You need to track edit history of a document. How would you design the schema?

How would you design a schema to support internationalization (i18n) for product descriptions?

You’re designing a chat system. Would you embed messages in the chatroom or store them separately? Why?

You have to store hundreds of dynamic form responses. How do you model them flexibly without performance loss?

A document is growing close to 16MB. How would you refactor the schema?

What are the implications of embedding large arrays in a document?

🧠 31–40: Aggregation Framework
You want to group orders by user and calculate the total amount. How would you do this?

You need to paginate aggregated data. How do you implement skip/limit inside an aggregation pipeline?

How do you filter fields in an embedded array using $filter?

You want to find the most purchased product in the last month. How would aggregation help?

How do you unwind an array of tags and count their occurrences?

You want to join orders with products in an aggregation. How do you use $lookup?

How do you remove specific fields from documents in the final output of aggregation?

You want to perform a conditional projection based on a field’s value. How would you do this?

How do you group documents by day using the createdAt field?

How can you perform aggregations on large collections without affecting performance?

🛠️ 41–50: Replication, Sharding, and Admin
Your MongoDB replica set has a secondary that’s lagging. How do you debug this?

You deployed a replica set. How do you ensure reads are routed to secondaries for analytics?

You're seeing high latency on a shard key query. How do you fix shard key selection?

You forgot to define a shard key on a large collection. How do you add one now?

Your application must ensure writes are acknowledged by at least 2 nodes. How do you configure this?

You need to prevent an accidental deletion of a production database. What precautions can you take?

Your team needs read-only access to analytics. How do you manage user roles?

During high writes, the primary crashes. How does failover work in a replica set?

A shard becomes too large compared to others. What MongoDB feature can help?

Your backups are large and slow. What are the strategies for faster backups and restores?

