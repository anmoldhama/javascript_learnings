🔰 Basic Level (1–30): Fundamentals and CRUD
Q1) What is MongoDB?
Mongodb is a NoSQL database have flexible schema, and stores data in BSON format, have collections and documents.
Follows the BASE properties.

Q2) How is MongoDB different from relational databases?
ans : Have the flexible schema not have the constraints like primary key and foreighn key
     Follow BASE in place of ACID

Q3) What is a document in MongoDB?
ans :  document is BSON format record,that may contain nested documents/arrays.

Q4) What is a collection in MongoDB?
ans : collection is a set of records like a table.

Q5) What is BSON in MongoDB?
ans : BSON is a Binary JSON format which allows to fast retrieval and insertion of data.

Q6) How do you create a database in MongoDB?
ans : use database_name in Mongo shell,Mongo creates DB when data is inserted.
      

Q7) How do you insert a document into a collection?
ans : db.collection_name.InsertOne({name: "anmol"});

Q8) How do you retrieve all documents from a collection?
ans : db.collection_name.find();

Q9) What is the difference between insertOne() and insertMany()?
ans : insertOne() insert the single record
      insertMany() insert the multiple records.
     

Q10) How do you update a document in MongoDB?
ans : use db.collection_name.updateOne(where :{name : "anmol"},{$set:{age: 25}});

Q11) What is the difference between updateOne() and updateMany()?
ans : updateOne() is used to update only single record
      updateMany() is used to update multiple records

Q12) How do you delete a document from a collection?
ans : use db.collection_name.deleteMany({age: 25});

Q13) What is the use of _id in MongoDB?
ans : it is a unique key for every record it is by default indexed and created.

Q14) How do you query for documents that match a specific condition?
ans : db.collection_name.find({age: 25});

Q15) How do you use comparison operators like $gt, $lt, $eq, etc.?
ans : db.collection_name.find({
       age : { $gt : 20}
});

Q16) What is a projection in MongoDB queries?
ans : projection gives you only the required values from the query not the complete data.

Q17) How do you limit and sort results in a query?
ans : use sort().limit();

Q18) What does the findOne() method do?
ans : it is used to find single matched record.

Q19) How do you count documents in a collection?
ans : Use .countDocuments() or .estimatedDocumentCount()

Q20) What is the difference between find() and aggregate()?
ans : find is used to find all the records with the matching filter
      aggregate is used for staging the records 
      like lookups, groups, projections etc

Q21) What is an index in MongoDB?
ans : index is technique using which we can retreive the data faster
      indexes are stored as a value and address of the original record
      and when we query the value the index direct point out to that record in main db.

Q22) How do you create an index?
ans : use db.collection_name.createIndex({fieldName: order});

Q23) What is a compound index?
ans : compound index is a indexing with using more than one fields.

Q24) What is a unique index?
ans : unique index is a index which is unque for a record like _id.

Q25) What is the explain() method used for?
ans : explain() method gives you the details of the query.

Q26) What is a capped collection?
ans : Capped collection = fixed-size collection that overwrites old documents when full. Use capped: true while creating.

Q27) What are embedded documents?
ans : embedded documents means that the documents are denormalized into nested objects and arrays.
     This will gives us the faster retreival.

Q28) What are referenced documents?
ans : Reference documents means that the data normalized into multiple collections using the references
      This will gives us the guarantee of no redundency.

Q29) How do you drop a collection or database?
ans : Drop collection: db.collection.drop(). Drop DB: db.dropDatabase()

Q30) What is the purpose of the ObjectId type?
ans : ObjectId is a 12-byte unique identifier generated by MongoDB (_id field by default).

⚙️ Intermediate Level (31–70): Querying, Indexing, Aggregation, and Architecture
Q31) What are the different data types supported in MongoDB?
ans : ObjectId, double, string, int32,int64, date,null,etc

Q32) How does MongoDB handle schema design?
ans : Schema design is handled dynamically but can be enforced via schema validation or Mongoose schemas in Node.js

Q33) When would you use embedding vs. referencing in schema design?
ans : Use embedding for tightly coupled data, referencing for large or shared datasets.

Q34) What is the aggregation framework?
ans : aggregation framework is used to query multi stages data example match,lookup, group, projection,etc.

Q35) What is a pipeline stage in aggregation?
ans : A stage in a pipeline transforms data (e.g., $match, $group, $project).

Q36) What does the $match stage do in aggregation?
ans : it will filter the records according to the condition given.

Q37) How does $group work in aggregation?
ans : it group the records according to the given group column

Q38) What is the $project stage used for?
ans : project is used to gives only the given fields not a complete query result.

Q39) How do $lookup and joins work in MongoDB?
ans : lookup is used to join 2 collection to query from both the collections.

Q40) How can you filter array elements using aggregation?
ans : use $filter aggregation stage.

Q41) What is $unwind and when would you use it?
ans : unwind is used to convert the array result into object.

Q42) What is a text index and how do you use it?
ans : 
A text index is used in MongoDB to support full-text search on string content within documents. It tokenizes strings into terms and indexes them.
db.collection.createIndex({ description: "text" })


Q43) How do you perform full-text search in MongoDB?
ans : 
Use the $text operator:
db.collection.find({ $text: { $search: "keyword" } })


Q44) What is the difference between save() and insert()?
ans : insert() adds a new document.

save() will insert a document if _id doesn't exist, otherwise it replaces the document with the same _id.


Q45) What is the difference between update() and replaceOne()?
ans : update() updates part of the document (can use $set, $inc, etc.).
    replaceOne() replaces the entire document except _id.

    db.collection.update({ _id: 1 }, { $set: { name: "John" } });
    db.collection.replaceOne({ _id: 1 }, { name: "John", age: 30 });


Q46) What are transactions in MongoDB?
ans : transctions are the set of more than one queries which are executed completely or rolledback.

Q47) How do multi-document transactions work in MongoDB?
ans : MongoDB ensures ACID properties for multi-document transactions by locking involved documents.

Q48) How do you use the bulkWrite() operation?
ans : bulkWrite() is used to insert multiple records at one time this will optimize the performance.

Q49) How does MongoDB handle concurrency?
ans :MongoDB uses document-level locking via the WiredTiger engine.

Q50) How does MongoDB ensure data durability?
ans : Mongodb using the read concerns and write concerns for durability.

Q51) What is Write Concern in MongoDB?
ans : Write Concern is used for acknowledgement for the write operation of the replica sets like 0 for No acknowledgement, 1 for primary node, all for all replica sets. 

Q52) What is Read Concern in MongoDB?
ans : Read Concern is used for acknowledgement for the read operation of the replica sets, Read concern levels are: local, majority, available, linearizable, etc.

Q53) What is Read Preference in MongoDB?
ans : Read preference given to the replica set in which you want to read the data.

Q54) What is a Replica Set?
ans : Replica set is a different server on which the same data in copied as on the primary server
     It makes the mongodb more scalable and highly available.

Q55) How does failover work in a replica set?
ans : 
     An election happens and a new primary is chosen.

Q56) What are the roles of primary and secondary nodes?
ans : primary node is mainly used for write operations
      and secondary nodes are mainly used for read operations.

Q57) What is a shard in MongoDB?
ans : A shard is a partition of data in a sharded MongoDB cluster stored on a separate machine.

Q58) What is a sharded cluster?
ans : A sharded cluster consists of:

Shards (data-bearing nodes),

Query routers (mongos),

Config servers (metadata).

Q59) How does MongoDB distribute data across shards?
an : Based on shard key, MongoDB splits documents into chunks and distributes them.

Q60) What is a chunk in sharding?
ans : Chunk is a contiguous range of shard key values.

Q61) How do you enable sharding on a collection?
ans : sh.enableSharding("databaseName");
db.adminCommand({ shardCollection: "db.collection", key: { userId: 1 } });


Q62) What is a shard key? How do you choose one?
an :  Choose a shard key with high cardinality and even distribution to avoid bottlenecks.

Q63) What are the limitations of sharding?
ans : Cannot change shard key easily.

Complex operations like joins are harder.

Can cause data imbalance if not planned well.

Q64) How do you reshard a collection?
ans : From MongoDB 5.0+, use reshardCollection command:
db.adminCommand({
  reshardCollection: "db.collection",
  key: { newShardKey: 1 }
});


Q65) How does MongoDB scale horizontally?
ans : use the sharding, replica sets.

Q66) What is journaling in MongoDB?
ans : Journaling records write operations before applying them to the database, ensuring crash recovery.

Q67) What is oplog and how is it used in replication?
ans: oplog maintains the queries history and sync the replica sets.

Q68) What is the WiredTiger storage engine?
ans : WiredTiger is the default storage engine in MongoDB since 3.2. It supports compression, document-level locking, and better concurrency.

Q69) What is the MMAPv1 storage engine?
ans : MMAPv1 was the original storage engine before WiredTiger. It uses memory-mapped files and collection-level locking.

Q70) What tools are available for MongoDB backup and restore?
ans : mongodump / mongorestore

mongoexport / mongoimport

Ops Manager / Cloud Manager

File-system snapshots

🚀 Advanced Level (71–100): Performance, Security, DevOps, Real-World Scenarios
Q71) How do you monitor MongoDB performance?
ans : By using the .explain() for the query details
      Using the Atlas for monitoring
      Using the Grafana and prometheus for monitoring tools
      Using to detect the slow queries.

Q72) What metrics should you watch for MongoDB health?
ans : Memory usage

Operation counters (opcounters)

Lock percentage

Connections

Page faults

Replication lag

Queued operations

Q73) How do you analyze slow queries?
ans : Use .explain("executionStats")

Use the system.profile collection

Monitor with Atlas performance advisor

Enable slow query logs

Q74) How do you use db.currentOp()?
ans : Returns information on currently running operations. Useful for identifying long-running or stuck queries.
db.currentOp({ "active": true });

Q75) How does MongoDB handle locking?
ans : MongoDb handles locking on the document level not collection level
      It also supports the optimistic locking by using the versioning by implemented it on custom.

Q76) What is a TTL index?
ans : TTL stands for Time To Live It used as a index to invalidate the field automatically.

Q77) What causes write and read bottlenecks in MongoDB?
ans : Lack of indexes

Large document size

High replication lag

Hotspot shard key

Too many concurrent writes

Unbalanced shards

Q78) What are the best practices for schema design in MongoDB?
ans : Model data around application access patterns

Embed for performance; reference for large datasets

Avoid deep nesting

Index properly

Use schema validation

Q79) How do you secure MongoDB in production?
ans : Use the .env to store the url
      use the RBAC on the cluster level using ATLAS
      use the read and write concerns
      Model data around application access patterns
       Embed for performance; reference for large datasets
       Avoid deep nesting
       Index properly
       Use schema validation


Q80) How do roles and users work in MongoDB?
ans : Users are assigned roles. Each role has permissions on resources (databases/collections). MongoDB has built-in roles and supports custom roles.

Q81) How do you enable authentication in MongoDB?
ans : Start MongoDB with --auth or set security.authorization: enabled in the config. Create users with createUser()

Q82) What is authorization in MongoDB?
ans : Authorization is handled via RBAC (Role-Based Access Control).

Q83) How can you encrypt data in MongoDB?
ans : YAt-rest encryption with WiredTiger encryption (available in Enterprise/Atlas)

Client-side encryption for field-level protection

Q84) What are field-level and at-rest encryption?
ans : At-rest: All data on disk is encrypted (WiredTiger + KMIP or built-in key management)

Field-level: Individual fields are encrypted on the client and decrypted only by clients with access

Q85) What is MongoDB Atlas?
ans : It is a cloud based GUI where you can manage all the clusters.

Q86) What’s the difference between self-hosted MongoDB and Atlas?
ans : Self-hosted: You manage everything (setup, scaling, backups, security)

Atlas: Fully-managed cloud MongoDB service by MongoDB Inc.

Q87) What is MongoDB Realm?
ans : Realm is a mobile database and backend-as-a-service platform by MongoDB for real-time data sync and serverless functions.

Q88) What are the advantages of using MongoDB for big data applications?
ans : Because it gives the flexibility in schema, It has the high availability and scalability as compare to RDBMS
      due to its replica sets out of the box, It is faster because it has the eventual consistency not strong consistent, it stores the data in BSON format low latency.

Q89) What’s the difference between MongoDB and Cassandra?
ans : MongoDB supports rich queries, secondary indexes, and dynamic schema.
      Cassandra is optimized for high write throughput and linear scaling but supports limited queries and strict schema.

Q90) When should you avoid using MongoDB?
ans : Where you need a very strong consistent data and follow the strict ACID compliant,
      Where you have the transactional work and maintain the schema properly
      like dont use MongoDB in Banking websites


Q91) How do you handle schema migrations in MongoDB?
ans : you can handle schema migrations using the orm like mongoose.

Q92) How do you implement optimistic concurrency control?
ans : optimistic concurrency control means to lock the document using the version locking system i.e
      first check the version of the record if not changed then only do the update else rollback

Q93) What is the maximum document size in MongoDB?
ans : 16mb

Q94) What is the maximum BSON document size?
ans : 16mb.

Q95) How does MongoDB handle large datasets (in TBs)?
ans : Sharding

Compression (WiredTiger)

Indexing

Replica sets for read scalability

Q96) How does MongoDB perform under high-write loads?
ans : Uses document-level locks

Bulk writes

Journaling

Write concern tuning

Sharding

Q07) How do you benchmark MongoDB performance?
ans : Use tools like mongostat, mongotop, benchRun()

Use JMeter, YCSB, or custom scripts.

Q98) What are some anti-patterns in MongoDB schema design?
ans : Over-embedding

No indexes

Unbounded arrays

Too much normalization (like SQL)

Using default _id as shard key

Q99) How would you integrate MongoDB with a message queue (like Kafka)?
ans : Use MongoDB Kafka Connector (Sink or Source)

Or stream events to Kafka using Change Streams

Q100) Describe a real-world architecture using MongoDB, microservices, Redis, and AWS.
ans : Microservices with Node.js or Go

MongoDB as primary DB (each service has its own collection or DB)

Redis for caching and pub-sub

Kafka for message queue

AWS services: EC2 for services, S3 for storage, Lambda for triggers, CloudWatch for monitoring




# Scenario based questions


 1–10: CRUD & Querying
Q1) You have a collection with millions of documents. A query using .find({ status: "active" }) is slow. How do you optimize it?
ans : creating index on this field and also create replica sets to transfer the traffic.

Q2) You need to fetch users who signed up within the last 24 hours. How would you query for this efficiently?
ans : write a query like db.collection_name.find({createAt: {$gt : epoch time of last 24 hours}});

Q3) You're getting duplicate user records after running an update. What might be the issue?
ans : Possible cause: Using upsert: true with incorrect query filter.

If the filter doesn't match any existing document and upsert is enabled, it creates a new one — possibly duplicating users.

Q4) You want to increment a field viewCount every time a document is read. How would you do this atomically?
ans : use the $inc.

Q5) A document must have a nested field like profile.name.first. How do you ensure it's always present during insert?
ans : use the orm and set required as true.

Q6) You're asked to query orders where items.quantity > 2. The items field is an array. How do you write the query?
ans : db.orders.find({
  items: { $elemMatch: { quantity: { $gt: 2 } } }
});


Q7) How would you update multiple nested fields in a document without overwriting the whole object?
ans : Use dot notation to target nested fields without replacing the whole object:
db.users.updateOne(
  { _id: someId },
  {
    $set: {
      "profile.name.first": "Anmol",
      "profile.name.last": "Dhama"
    }
  }
);


Q8) How would you delete all users inactive for more than a year in an efficient manner?
ans : const cutoff = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
db.users.deleteMany({ lastActiveAt: { $lt: cutoff } });


Q9) You're asked to return only selected fields like name and email from the query. How do you use projections?
ans : db.users.find({}, { name: 1, email: 1, _id: 0 });


Q10) You want to enforce uniqueness on the email field. What kind of index should you use?
ans : use the unique index.

⚙️ 11–20: Indexing & Performance
Q11) A query on { userId: ObjectId, createdAt: Date } is slow. What type of index will help?
ans : compound index.

Q12) You're using a compound index, but queries on only one field aren't benefiting. Why?
ans : Not benefit because the address inside the index db is stored with the combination of values not single

Q13) How do you monitor index usage in MongoDB?
ans: use .explain() or use clinic.js use monitoring tools 

Q14) Your collection has grown too large and queries are becoming slower. How do you identify which queries to optimize?
ans : use .explain() to find the slow query.

Q15) You're performing a sort operation on a large dataset. How can indexes help?

Q16) You suspect MongoDB is not using the index. How do you confirm this?

Q17) How do you create a TTL index to auto-delete logs older than 7 days?

Q18) You want to ensure all usernames are unique and case-insensitive. How would you do this?

Q19) You have frequent updates on a field that's indexed. Is it good practice? Why or why not?

Q20) What happens when you create too many indexes on a collection?

📦 21–30: Schema Design & Modeling
Q21) Would you embed or reference address information for users? Why?

Q22) Your app requires frequent reads of user + profile + settings. How would you model this?

Q23) You need to store a blog with comments. How would you handle growing comment count efficiently?

Q24) How would you model a many-to-many relationship between users and groups?

Q25) You need to track edit history of a document. How would you design the schema?

Q26) How would you design a schema to support internationalization (i18n) for product descriptions?

Q27) You’re designing a chat system. Would you embed messages in the chatroom or store them separately? Why?

Q28) You have to store hundreds of dynamic form responses. How do you model them flexibly without performance loss?

Q29) A document is growing close to 16MB. How would you refactor the schema?

Q30) What are the implications of embedding large arrays in a document?

🧠 31–40: Aggregation Framework
Q31) You want to group orders by user and calculate the total amount. How would you do this?

Q32) You need to paginate aggregated data. How do you implement skip/limit inside an aggregation pipeline?

Q33) How do you filter fields in an embedded array using $filter?

Q34) You want to find the most purchased product in the last month. How would aggregation help?

Q35) How do you unwind an array of tags and count their occurrences?

Q36) You want to join orders with products in an aggregation. How do you use $lookup?

Q37) How do you remove specific fields from documents in the final output of aggregation?

Q38) You want to perform a conditional projection based on a field’s value. How would you do this?

Q39) How do you group documents by day using the createdAt field?

Q40) How can you perform aggregations on large collections without affecting performance?

🛠️ 41–50: Replication, Sharding, and Admin
Q41) Your MongoDB replica set has a secondary that’s lagging. How do you debug this?

Q42) You deployed a replica set. How do you ensure reads are routed to secondaries for analytics?

Q43) You're seeing high latency on a shard key query. How do you fix shard key selection?

Q44) You forgot to define a shard key on a large collection. How do you add one now?

Q45) Your application must ensure writes are acknowledged by at least 2 nodes. How do you configure this?

Q46) You need to prevent an accidental deletion of a production database. What precautions can you take?

Q47) Your team needs read-only access to analytics. How do you manage user roles?

Q48) During high writes, the primary crashes. How does failover work in a replica set?

Q49) A shard becomes too large compared to others. What MongoDB feature can help?

Q50) Your backups are large and slow. What are the strategies for faster backups and restores?




# Basic CRUD Operations (SDE-2 Level)
How do you insert a single document and multiple documents in MongoDB?
ans : insertOne(document) and insertMany(documents);

Write a query to find all users whose age is greater than 25.
ans : .find({age: {$gt: 25}});

How do you update the email of a user by userId in MongoDB?
ans : .updateOne({userId : userId}, $set: {email : email})

Write a query to delete all documents where status = "inactive".
ans : .deleteMany({status: "inactive"});

How do you upsert a document in MongoDB? What does upsert mean?
ans : .updateOne({},{upsert: true});

What is the difference between find() and findOne()?
ans : .find() gives all the matched records
      .findOne gives only the first matched record

How do you implement pagination in MongoDB using skip and limit?
ans : .find({}).skip(2).limit(5);

How do you sort documents based on multiple fields?
ans : sort({id: -1,name: -1});

How do you find documents where a field exists or is missing?
ans : .find({ name: { $exists: true } });

How do you query for documents with values in an array?
ans : .find({ "roles": {$in: ["admin", "editor"]}});

🔹 Intermediate Queries (SDE-2/SDE-3 Transition)
How do you find the top 5 products by price within a category?
ans : .find({ category: "Electronics" }).sort({ price: -1 }).limit(5);

How can you update nested fields in a MongoDB document?
ans : .updateOne({userId: userId},$set: {address.city : "'delhi"});

Write a query to pull an element from an array field inside a document.
ans : db.users.updateOne(
  { _id: ObjectId("...") },
  { $pull: { roles: "guest" } }
);

How do you use $in and $nin operators? Give real-world examples.
ans : .find({"role": {$in : ["admin", "user"]}});
      .find({"role": {$nin : ["adimin", "user"]}});

How do you match documents where a value is not equal to a certain value ($ne) and is not null?
ans : db.users.find({ $and: [ { age: { $ne: 25 } }, { age: { $ne: null } } ] });

What’s the use of the $elemMatch operator?
ans : .find({ reviews: { $elemMatch: { rating: { $gte: 4 }, reviewer: "John" } }});

How do you find documents with embedded documents that meet certain criteria?
ans :  .find({ "address.city": "Delhi" });
       .find({ items: { $elemMatch: { productId: "123", quantity: { $gt: 2 } }}})

How do you push a new element into an array only if it doesn’t already exist?
ans : .updateOne({ _id: ObjectId("...") },{ $addToSet: { roles: "admin" } })

What are atomic operations in MongoDB? Are MongoDB updates atomic?
ans : MongoDB atomicity is at the document level.

All operations that modify a single document (like $set, $inc, $push) are atomic.

How do you rename a field in all documents of a collection?
ans : .updateMany({}, { $rename: { "oldFieldName": "newFieldName" } });

🔹 Aggregation Framework (SDE-3 Level)
How do you get the count of users grouped by country using aggregation?
ans : db.collection.aggregate([
      "$group": {
            "_id" :"country",
            count : {$sum: 1}
      }
]);

Write a MongoDB aggregation pipeline to find average order value per customer.
ans : db.collection.aggregate([
      $group: {
      _id: "$customer_id",
      avgOrderValue: { $avg: "$order_value" }
    }
]);

How do you perform a lookup (join) between two collections?
ans : db.collection.aggregate([
      "$lookup": {
            "from": "second table",
            "localField": "second_id",
            "foreignField": "first_id",
            "as" : "data"
      }
]);

How do you filter documents before and after grouping in aggregation?
ans : db.collection.aggregate([
  { $match: { status: "active" } }, // Before grouping
  {
    $group: {
      _id: "$category",
      total: { $sum: "$amount" }
    }
  },
  { $match: { total: { $gt: 1000 } } } // After grouping
]);


What is the difference between $match and $redact in aggregations?
ans: match is used to filter the records
     $redact provides fine-grained access control by conditionally including or excluding parts of documents, especially nested documents.

How do you use $project to include/exclude fields or create computed fields?
ans : db.collection.aggregate([
      "$project": {
         name : 1,
         age : 1
      }
])

How do you unwind an array field to flatten it in aggregation?
ans : db.collection.aggregate([
      "$unwind": {
          path : "array_value",
          preventnull : true
      }
])

How do you paginate aggregation results using $facet or $skip + $limit?
ans : db.collection.aggregate([
      "$skip": 1,
      "$limit":5
])

Write an aggregation to find total revenue generated per product.
ans : db.collection.aggregate([
  {
    $group: {
      _id: "$product_id",
      total_revenue: { $sum: "$product_price" }
    }
  }
]);


How do you apply conditional logic (if-else) inside a $project stage?
ans : 
db.collection.aggregate([
  {
    $project: {
      priceCategory: {
        $cond: {
          if: { $gte: ["$price", 100] },
          then: "Expensive",
          else: "Cheap"
        }
      }
    }
  }
]);


* $facet : Run multiple pipelines in parallel on the same input data and return all their results together.
* $redact : Allows you to conditionally include/exclude nested fields (like documents inside arrays or sub-docs) at any depth.


