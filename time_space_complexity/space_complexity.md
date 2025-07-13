✅ General Understanding
Explain the time and space complexity of your favorite sorting algorithm. Why would you choose it in production?

What’s the difference between average-case and worst-case complexity? Give a real-world scenario where the worst-case matters.

Why is O(1) not always “better” than O(log n) in real-world systems? Provide a backend context example.

How would you evaluate the time complexity of a recursive function that includes multiple recursive calls and loops?

Can you achieve O(1) space with O(n) time in a function that processes user logs? How?

✅ Code-Level DSA Analysis
Analyze the time complexity of a depth-first traversal in a binary tree. What’s the space complexity with and without recursion?

You're storing a list of unique user IDs with frequent insert and search operations. Which data structure gives O(1) performance for both? Why?

Given a nested array of unknown depth, write a function to flatten it. Analyze its time and space complexity.

Implement a sliding window maximum for a stream of integers. What’s the optimal time complexity?

Compare the complexity of a HashMap-based solution vs a Trie for autocomplete suggestions.

✅ Database & Query Optimization
What is the time complexity of a SQL JOIN between two tables with N and M rows, with and without indexing?

How do composite indexes affect query performance and complexity in SQL databases?

You’re paginating search results — how does offset-based pagination impact performance at scale (e.g., OFFSET 10000)?

Compare the complexity of filtering in the database vs filtering in application memory. When does it matter?

How does indexing impact read/write complexity in write-heavy systems?

✅ Caching & Backend Optimization
What is the time complexity of an LRU cache implemented with a doubly linked list and hash map? Why is this optimal?

Explain the complexity trade-off when using a cache (like Redis) for aggregating data in a leaderboard system.

If you're caching API results with expiration, what is the complexity of eviction operations?

What’s the time complexity of checking for cache stampede conditions, and how would you prevent it efficiently?

How would you reduce memory (space) complexity of a real-time metrics collector that stores the last 24h data?

✅ Concurrency and Event Processing
What’s the time complexity of processing a Kafka queue with at-most-once vs exactly-once semantics?

You’re batching messages for processing — how does batch size affect total time complexity and throughput?

What’s the complexity of detecting duplicate events across distributed systems with probabilistic data structures (like Bloom Filters)?

Analyze the time complexity of backpressure handling in an event stream with rate-limiting logic.

How would you optimize memory usage in an event-driven system processing millions of events per second?

✅ Real-World Backend Case Studies
How does GraphQL query complexity differ from REST? How do you enforce performance limits?

How would you analyze and reduce the space complexity of a JSON API that returns deeply nested structures?

A service stores user activity logs and frequently queries the "most recent N actions" — optimize for both time and space.

How would you implement a real-time autocomplete for millions of users? Break down time/space trade-offs.

Given a service that compares two large files line-by-line — how can you reduce space usage from O(n) to O(1)?




📦 Data Structures & Algorithmic Thinking
Analyze time/space complexity of merging K sorted arrays. What's the optimal approach?

What’s the complexity of finding the median in a data stream? How would you implement it efficiently?

Given a string, find the first non-repeating character. What’s the best possible time complexity?

What's the complexity of finding the longest substring without repeating characters?

Compare the space complexity of depth-first search (DFS) vs breadth-first search (BFS) for a tree.

Implement a min stack. What’s the trade-off between constant-time access and memory overhead?

What’s the time complexity of inserting an element in a balanced BST vs a HashMap?

How would you store 1 million boolean flags efficiently? What’s the space complexity?

What’s the complexity of rotating a matrix in place vs creating a new one?

How does recursion depth impact space complexity? When should you convert to iteration?

🛠️ Backend & API Operations
A REST API endpoint returns 10,000 records. What’s the space complexity on the server and the client?

How would you handle sorting a list of 10 million users? What's the optimal sorting algorithm and complexity?

What’s the time complexity of filtering out duplicate records in a request payload?

How does batch size affect time complexity in a bulk insert API?

What’s the trade-off between storing raw logs and pre-aggregated logs (in terms of space and read time)?

How would you build an O(1) time complexity API rate limiter per IP?

What’s the complexity of validating a deeply nested JSON schema with 100+ fields?

How do you handle paginated results with deep filtering — time and memory trade-offs?

Your endpoint is returning large paginated data — how does cursor-based pagination reduce time/space overhead?

What’s the impact of returning large arrays in GraphQL queries vs REST?

💾 Caching, Memory, and Storage
How does an LFU (Least Frequently Used) cache compare in complexity to LRU?

What’s the space complexity of caching request payload hashes for deduplication?

What’s the complexity of computing cache keys for deeply nested object responses?

How does compression affect space complexity in an in-memory cache like Redis?

Explain the impact of Redis eviction policies (e.g., LRU, TTL) on space complexity.

What’s the memory footprint of storing timestamps for all user logins over a month?

When caching SQL query results, how do joins affect cache key computation complexity?

You want to cache personalized dashboards — how do you reduce cache explosion (space complexity)?

How do you limit the memory impact of a real-time event ingestion pipeline?

Design a deduplication strategy with low memory overhead for streaming events.

📊 Querying & Database Access
Compare index scan vs full table scan complexity for SELECT queries.

How does a B-tree index reduce read complexity on a large table?

Estimate time complexity of searching for a record in a table with multiple composite indexes.

What’s the complexity of calculating running totals in a SQL query without window functions?

How does partitioning affect read/write complexity in time-series data?

How would you maintain space complexity when archiving old database rows to cold storage?

What is the time complexity of GROUP BY with and without indexing?

Estimate complexity of a cross join between 3 large tables. How can you reduce it?

How do you reduce the time complexity of repeated analytical queries over billions of rows?

How does database normalization impact query complexity for joins and writes?

🔄 Concurrency, Streams, and Distributed Systems
What’s the complexity of deduplicating events in a Kafka consumer at scale?

How would you implement a distributed counter with constant space complexity per node?

What’s the space and time complexity of real-time deduplication in Apache Flink or Spark?

Describe the complexity of checkpointing vs replaying in a distributed log system.

What is the memory overhead of tracking millions of unique sessions in a distributed system?

How would you manage backpressure in a high-throughput messaging system with minimal space usage?

What’s the complexity of guaranteeing exactly-once delivery in distributed processing?

How do bloom filters reduce space complexity in large-scale distributed lookups?

What’s the time complexity of syncing data across partitions in eventual consistency systems?

How would you reduce memory pressure in an application that subscribes to 100,000 websocket clients?



🔁 1–10: Arrays & Strings
Find the first duplicate element in an array. Can you do it in O(n) time and O(1) space?

Reverse a string in place. What’s the space complexity?

Find all pairs in an array that sum to a target. Can you do it better than O(n²)?

Rotate an array k times to the right. Can you do it in O(n) time and O(1) space?

Check if a string is a permutation of a palindrome. What's the best space complexity you can achieve?

Find the longest substring without repeating characters. Can you do it in O(n) time?

Given an array of 0s and 1s, find the longest subarray with equal number of 0s and 1s. Optimize space.

Find the majority element in an array. Can you do it in O(n) time and O(1) space?

Merge two sorted arrays without using extra space. Is it possible?

Find the first non-repeating character in a string. Optimize time and space.

🔄 11–20: Linked Lists
Detect a cycle in a linked list. Can you do it with constant space?

Reverse a linked list recursively. What’s the space complexity?

Find the intersection point of two linked lists. How can you avoid extra memory?

Remove the nth node from the end in one pass. Explain time/space trade-offs.

Check if a linked list is a palindrome. Can you do it with O(1) space?

Flatten a multi-level doubly linked list. What’s the best space you can manage?

Merge K sorted linked lists. What's the most optimal time complexity?

Find the middle of a linked list in one traversal. Why is space constant here?

Copy a linked list with random pointers. Can you do it in O(1) extra space?

Partition a linked list around a pivot. Can you do it in-place?

🌲 21–30: Trees & Binary Search Trees
In-order traversal of a binary tree. Can you do it without recursion or stack? (Morris Traversal)

Check if two trees are identical. Analyze time and space.

Find the height of a binary tree. Can you do it with minimal extra space?

Convert a BST to a sorted linked list. What’s the space complexity?

Check if a tree is balanced (AVL property). What’s your recursive space usage?

Serialize and deserialize a binary tree. Optimize time and space.

Find the lowest common ancestor (LCA) of two nodes in a binary tree. Explain your approach’s complexity.

Check if a tree is a valid BST. What’s the most efficient solution?

Print the right view of a binary tree. Analyze time and space used.

Build a binary tree from inorder and preorder arrays. Can you do it in O(n) time?

🔗 31–40: Graphs
Detect a cycle in an undirected graph. Compare DFS vs Union-Find approaches.

Find the shortest path in a graph using Dijkstra’s. What’s the time complexity with a priority queue?

Topological sort of a DAG. Explain space/time for both DFS and Kahn’s algorithm.

Clone a graph. What’s the space complexity using BFS vs DFS?

Count the number of connected components in a graph. What's the complexity?

Find a mother vertex in a graph. What’s the time complexity?

Implement BFS and DFS iteratively. Compare time and auxiliary space.

Detect cycle in a directed graph using DFS recursion stack. What’s the space cost of that stack?

Implement Kruskal’s algorithm. How does Union-Find affect complexity?

Find strongly connected components using Kosaraju’s algorithm. Explain complexity.

🔁 41–50: Dynamic Programming & Advanced Problems
0/1 Knapsack. Compare recursive, memoized, and tabular solutions.

Find the nth Fibonacci number using matrix exponentiation. Why is it O(log n)?

Longest Palindromic Subsequence — explain why naive is exponential and DP is O(n²).

Minimum number of coins for change. Compare greedy vs DP.

Subset sum problem — what's the space optimization trick for tabulation?

Edit distance between two strings. Can you optimize to O(min(m, n)) space?

Rod cutting problem. What’s the time/space complexity of bottom-up DP?

Word break problem — optimize with Trie + memoization.

Implement the matrix chain multiplication algorithm. Why is it O(n³)?

Find the number of unique BSTs with n nodes. Explain time complexity with DP and Catalan number.

