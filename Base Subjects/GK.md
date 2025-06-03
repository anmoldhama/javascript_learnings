150 General Knowledge & Technical Interview Questions with Answers
Programming & Data Structures
Q) What is the difference between an array and a linked list?
Answer: Arrays are contiguous memory blocks with constant-time access by index; linked lists are nodes connected by pointers, allowing efficient insertions/deletions but linear access time.

Q) What is a hash table?
Answer: A data structure that stores key-value pairs and provides average O(1) time complexity for insertion, deletion, and lookup using a hash function.

Q) Explain recursion with an example.
Answer: A function calls itself to solve smaller instances of the same problem; e.g., factorial calculation where factorial(n) = n * factorial(n-1).

Q) What is Big O notation?
Answer: It describes the upper bound of the time complexity or space complexity of an algorithm as the input size grows.

Q) What is the difference between stack and queue?
Answer: Stack follows LIFO (last-in, first-out); queue follows FIFO (first-in, first-out).

Q) What is a binary search tree?
Answer: A tree where each node has at most two children, and left child < parent < right child.

Q) What is dynamic programming?
Answer: An optimization technique solving complex problems by breaking them into overlapping subproblems and storing solutions.

Q) Explain the difference between pass by value and pass by reference.
Answer: Pass by value copies the actual data; pass by reference passes the address allowing modification of the original data.

Q) What is a deadlock?
Answer: A situation in concurrent programming where two or more processes are waiting indefinitely for each other to release resources.

Q) What is memoization?
Answer: Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Object-Oriented Programming (OOP)
Q) What are the four pillars of OOP?
Answer: Encapsulation, Abstraction, Inheritance, Polymorphism.

Q) What is polymorphism?
Answer: The ability of a function or method to process objects differently based on their data type or class.

Q) What is encapsulation?
Answer: Wrapping data and methods into a single unit or class and restricting access to some of the object’s components.

Q) What is inheritance?
Answer: Mechanism where one class acquires properties and behaviors of another.

Q) What is an abstract class?
Answer: A class that cannot be instantiated and is designed to be subclassed, often containing abstract methods.

Q) What is the difference between an interface and an abstract class?
Answer: Interfaces declare methods without implementation; abstract classes can have method implementations and state.

Q) What is method overloading?
Answer: Defining multiple methods with the same name but different parameters.

Q) What is method overriding?
Answer: A subclass provides a specific implementation of a method already defined in its superclass.

Q) What is the difference between composition and inheritance?
Answer: Composition uses objects of other classes to achieve functionality; inheritance extends a class to reuse code.

Q) What is the SOLID principle?
Answer: Five design principles to create maintainable and scalable software: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion.

Databases
Q) What is normalization?
Answer: Process of organizing data to reduce redundancy and improve integrity.

Q) What is the difference between SQL and NoSQL databases?
Answer: SQL databases are relational and use structured query language; NoSQL are non-relational, schema-less, and can be document, key-value, or graph-based.

Q) What is ACID in databases?
Answer: Properties that guarantee reliable transactions: Atomicity, Consistency, Isolation, Durability.

Q) What is indexing?
Answer: A data structure that improves the speed of data retrieval operations at the cost of additional writes/storage.

Q) What is a primary key?
Answer: A unique identifier for a database record.

Q) What is a foreign key?
Answer: A field in one table that uniquely identifies a row of another table.

Q) What is a join?
Answer: Operation to combine rows from two or more tables based on related columns.

Q) Explain different types of joins.
Answer: INNER JOIN (matches rows), LEFT JOIN (all left table rows), RIGHT JOIN (all right table rows), FULL JOIN (all rows from both tables).

Q) What is denormalization?
Answer: Adding redundant data to improve read performance, at the cost of write performance and storage.

Q) What is sharding?
Answer: Splitting a database into smaller, faster, more easily managed parts called shards.

Operating Systems
Q) What is a process?
Answer: An instance of a running program.

Q) What is a thread?
Answer: The smallest unit of CPU execution within a process.

Q) What is virtual memory?
Answer: Memory management technique that uses disk space as an extension of RAM.

Q) What is paging?
Answer: Memory management scheme that eliminates fragmentation by dividing memory into fixed-size pages.

Q) What is a context switch?
Answer: The process of storing and restoring the state of a CPU so that execution can be resumed from the same point later.

Q) What is deadlock in OS?
Answer: Situation where processes are waiting indefinitely for resources held by each other.

Q) What is a semaphore?
Answer: A synchronization tool used to control access to a shared resource.

Q) What is a race condition?
Answer: A flaw where the system’s behavior depends on the sequence or timing of uncontrollable events.

Q) What is a kernel?
Answer: The core part of the OS managing system resources and communication between hardware and software.

Q) What is a system call?
Answer: Interface for programs to request services from the operating system.

Networking
Q) What is the OSI model?
Answer: A conceptual framework with 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.

Q) What is TCP vs UDP?
Answer: TCP is connection-oriented, reliable, and ordered; UDP is connectionless, faster, but unreliable.

Q) What is an IP address?
Answer: A unique address identifying a device on a network.

Q) What is DNS?
Answer: Domain Name System translates domain names into IP addresses.

Q) What is HTTP?
Answer: HyperText Transfer Protocol used for transmitting web pages.

Q) What is HTTPS?
Answer: Secure HTTP using SSL/TLS encryption.

Q) What is a firewall?
Answer: Network security device that monitors and filters incoming/outgoing traffic.

Q) What is a subnet mask?
Answer: Used to divide IP addresses into network and host portions.

Q) What is NAT?
Answer: Network Address Translation allows multiple devices to share a single IP address.

Q) What is a VPN?
Answer: Virtual Private Network creates a secure connection over the internet.

Cloud Computing
Q) What is cloud computing?
Answer: Delivery of computing services over the internet.

Q) What are the types of cloud services?
Answer: IaaS, PaaS, SaaS.

Q) What is IaaS?
Answer: Infrastructure as a Service provides virtualized computing resources over the internet.

Q) What is PaaS?
Answer: Platform as a Service offers hardware and software tools over the internet.

Q) What is SaaS?
Answer: Software as a Service provides software applications over the internet.

Q) What is scalability in cloud?
Answer: Ability to handle growing amounts of work by adding resources.

Q) What is elasticity?
Answer: Automatic scaling up/down of resources based on demand.

Q) What is multi-tenancy?
Answer: Multiple customers sharing the same computing resources securely.

Q) What is serverless computing?
Answer: Cloud execution model where the cloud provider manages server infrastructure.

Q) What are containers?
Answer: Lightweight, portable units for running applications consistently.

Security
Q) What is encryption?
Answer: Process of encoding data to prevent unauthorized access.

Q) What is the difference between symmetric and asymmetric encryption?
Answer: Symmetric uses the same key for encryption/decryption; asymmetric uses public/private key pairs.

Q) What is HTTPS?
Answer: Secure HTTP that encrypts data between client and server.

Q) What is a firewall?
Answer: A system that monitors and controls incoming/outgoing network traffic.

Q) What is SQL injection?
Answer: Attack that inserts malicious SQL code to manipulate databases.

Q) What is XSS (Cross-site scripting)?
Answer: Attack that injects malicious scripts into trusted websites.

Q) What is CSRF (Cross-site request forgery)?
Answer: Attack that tricks a user into submitting malicious requests.

Q) What is two-factor authentication?
Answer: Security process requiring two methods of identification.

Q) What is a VPN?
Answer: Creates a secure, encrypted connection over a less secure network.

Q) What is a security token?
Answer: Physical or digital key used for user authentication.

Software Development & Practices
Q) What is Agile methodology?
Answer: Iterative approach to software development emphasizing flexibility and customer feedback.

Q) What is Scrum?
Answer: Agile framework using sprints and roles like Scrum Master and Product Owner.

Q) What is CI/CD?
Answer: Continuous Integration and Continuous Deployment automate code integration and release.

Q) What is version control?
Answer: System to track changes in code over time, e.g., Git.

Q) What is a pull request?
Answer: A request to merge code changes into a repository branch.

Q) What is refactoring?
Answer: Improving code structure without changing its behavior.

Q) What is technical debt?
Answer: The implied cost of additional rework caused by choosing easy solutions now.

Q) What is a unit test?
Answer: Test that checks the smallest part of an application, like a function.

Q) What is integration testing?
Answer: Testing combined parts of an application to evaluate interaction.

Q) What is code review?
Answer: Process where peers check each other's code for errors or improvements.

Web Technologies
Q) What is REST?
Answer: Representational State Transfer, an architectural style for designing networked applications.

Q) What is an API?
Answer: Application Programming Interface, a set of rules for interacting with software.

Q) What is JSON?
Answer: JavaScript Object Notation, a lightweight data-interchange format.

Q) What is CORS?
Answer: Cross-Origin Resource Sharing, a security feature restricting web page requests.

Q) What is a cookie?
Answer: Data stored on client-side used to remember information.

Q) What is local storage?
Answer: Browser feature to store data locally with no expiration.

Q) What is the difference between GET and POST?
Answer: GET requests data; POST submits data to be processed.

Q) What is AJAX?
Answer: Asynchronous JavaScript and XML, technique to update parts of a web page without reloading.

Q) What is a CDN?
Answer: Content Delivery Network caches content closer to users for faster access.

Q) What is WebSocket?
Answer: Protocol providing full-duplex communication channels over a single TCP connection.

System Design & Architecture
Q) What is load balancing?
Answer: Distributing network or application traffic across multiple servers.

Q) What is caching?
Answer: Storing copies of data for faster access.

Q) What is a microservice?
Answer: Architectural style that structures an application as a collection of loosely coupled services.

Q) What is a monolithic architecture?
Answer: Single unified software application.

Q) What is CAP theorem?
Answer: A distributed system can only guarantee two of three: Consistency, Availability, Partition tolerance.

Q) What is horizontal scaling?
Answer: Adding more machines to handle load.

Q) What is vertical scaling?
Answer: Adding resources (CPU, RAM) to existing machine.

Q) What is a message queue?
Answer: A communication method for asynchronous processing between services.

Q) What is eventual consistency?
Answer: Guarantees that updates will propagate and all replicas converge eventually.

Q) What is a CDN?
Answer: Network of servers that deliver cached content quickly to users.

DevOps & Tools
Q) What is Docker?
Answer: Containerization platform for packaging applications.

Q) What is Kubernetes?
Answer: Orchestration system for automating container deployment.

Q) What is Infrastructure as Code (IaC)?
Answer: Managing infrastructure through code, e.g., Terraform.

Q) What is Jenkins?
Answer: Automation server used for CI/CD.

Q) What is Git?
Answer: Distributed version control system.

Q) What is a build pipeline?
Answer: Automated process to build, test, and deploy code.

Q) What is monitoring?
Answer: Observing system performance and health.

Q) What is logging?
Answer: Recording system events for troubleshooting.

Q) What is a rollback?
Answer: Reverting to a previous software version.

Q) What is blue-green deployment?
Answer: Technique that reduces downtime by running two production environments.

Q) What is a graph?
Answer: A data structure consisting of nodes (vertices) connected by edges.

Q) Difference between directed and undirected graphs?
Answer: Directed graphs have edges with direction; undirected graphs have edges without direction.

Q) What is a cycle in a graph?
Answer: A path where the start and end node are the same.

Q) What is breadth-first search (BFS)?
Answer: Graph traversal algorithm visiting nodes level by level.

Q) What is depth-first search (DFS)?
Answer: Graph traversal exploring as far as possible along each branch before backtracking.

Q) Explain bubble sort and its time complexity.
Answer: Repeatedly swaps adjacent elements if in wrong order; O(n²).

Q) What is quicksort?
Answer: Divide-and-conquer sorting algorithm; average O(n log n).

Q) What is merge sort?
Answer: Recursive divide and conquer algorithm that divides array and merges sorted halves; O(n log n).

Q) What is a priority queue?
Answer: Abstract data type where each element has a priority; elements are dequeued by priority.

Q) What is a trie?
Answer: Tree data structure used for storing dynamic sets of strings, usually for retrieval.

Object-Oriented & Design Patterns (continued)
Q) What is the Singleton pattern?
Answer: Ensures a class has only one instance and provides a global point of access.

Q) What is the Factory pattern?
Answer: Creates objects without specifying the exact class to instantiate.

Q) What is the Observer pattern?
Answer: Defines a one-to-many dependency so that when one object changes state, all its dependents are notified.

Q) What is Dependency Injection?
Answer: A technique where an object receives other objects it depends on rather than creating them.

Q) What is a design pattern?
Answer: A reusable solution to common software design problems.

Q) Explain the difference between composition and inheritance with examples.
Answer: Composition is "has-a" relationship (e.g., Car has Engine); inheritance is "is-a" relationship (e.g., Dog is Animal).

Q) What is the Adapter pattern?
Answer: Allows incompatible interfaces to work together by converting one interface into another.

Q) What is the Decorator pattern?
Answer: Adds responsibilities to objects dynamically without modifying their class.

Q) What is cohesion?
Answer: Degree to which elements inside a module belong together.

Q) What is coupling?
Answer: Degree of interdependence between modules.

Databases (continued)
Q) What is a transaction?
Answer: A sequence of database operations that are atomic, consistent, isolated, and durable.

Q) What is a NoSQL document store?
Answer: Database storing data as JSON-like documents, e.g., MongoDB.

Q) What is a materialized view?
Answer: A database object containing the results of a query stored for faster access.

Q) What is eventual consistency in NoSQL databases?
Answer: Data updates propagate asynchronously; replicas eventually become consistent.

Q) What is a data warehouse?
Answer: System used for reporting and data analysis, consolidating data from multiple sources.

Q) What is indexing in databases?
Answer: Data structure to improve speed of data retrieval.

Q) What is a foreign key constraint?
Answer: Ensures referential integrity between tables.

Q) What is denormalization and when to use it?
Answer: Introducing redundancy for faster reads; used when read performance is critical.

Q) What is the difference between OLTP and OLAP?
Answer: OLTP handles transactional workloads; OLAP handles analytical queries.

Q) What is database sharding?
Answer: Partitioning data horizontally across multiple databases to improve scalability.

Operating Systems (continued)
Q) What is a race condition and how to prevent it?
Answer: When multiple threads access shared data concurrently leading to incorrect results; use synchronization.

Q) What is a thread pool?
Answer: Collection of pre-instantiated threads to perform tasks efficiently.

Q) What is paging vs segmentation?
Answer: Paging divides memory into fixed-size pages; segmentation divides memory into variable-size segments.

Q) What is virtual memory?
Answer: Memory management technique using disk as extension of RAM.

Q) What is an interrupt?
Answer: Signal to the processor indicating an event that needs immediate attention.

Q) What is a process state?
Answer: Current status of a process like running, waiting, or terminated.

Q) What is the difference between a process and a thread?
Answer: Processes are independent execution units; threads are smaller units within processes sharing resources.

Q) What is a zombie process?
Answer: Process that has completed execution but still has an entry in the process table.

Q) What is a mutex?
Answer: A mutual exclusion lock for synchronizing access to resources.

Q) What is context switching?
Answer: Saving and loading process states to switch CPU from one process to another.

Networking (continued)
Q) What is DHCP?
Answer: Dynamic Host Configuration Protocol assigns IP addresses dynamically.

Q) What is a MAC address?
Answer: Unique hardware address of a network interface.

Q) What is the difference between IPv4 and IPv6?
Answer: IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses.

Q) What is ping?
Answer: Network utility to test reachability of a host.

Q) What is traceroute?
Answer: Network diagnostic tool showing the path packets take to a destination.

Q) What is SSL/TLS?
Answer: Protocols for encrypting internet communication.

Q) What is ARP?
Answer: Address Resolution Protocol maps IP addresses to MAC addresses.

Q) What is a proxy server?
Answer: Server that acts as an intermediary between clients and other servers.

Q) What is the difference between a hub, switch, and router?
Answer: Hub broadcasts data to all ports; switch sends data to specific devices; router routes data between networks.

Q) What is port forwarding?
Answer: Redirecting communication requests from one address/port to another.

Cloud & DevOps (continued)
Q) What is load balancing?
Answer: Distributing traffic across multiple servers to improve availability and performance.

Q) What is autoscaling?
Answer: Automatically adjusting resources based on demand.

Q) What is Infrastructure as Code?
Answer: Managing and provisioning infrastructure through machine-readable scripts.

Q) What is blue-green deployment?
Answer: Deployment strategy that reduces downtime by running two identical environments.

Q) What is container orchestration?
Answer: Automated management of container lifecycle and scaling (e.g., Kubernetes).

Q) What is immutable infrastructure?
Answer: Infrastructure that is replaced rather than modified.

Q) What is a build artifact?
Answer: Output file from build process, e.g., a compiled binary.

Q) What is continuous monitoring?
Answer: Automated tracking of system health and performance.

Q) What is rollback in deployment?
Answer: Reverting to a previous version after a failed deployment.

Q) What is a microservice architecture?
Answer: Building applications as small, independent services communicating over APIs.

Security (continued)
Q) What is OAuth?
Answer: Open standard for access delegation commonly used for token-based authentication.

Q) What is JWT?
Answer: JSON Web Token, a compact token format used for securely transmitting information.

Q) What is the principle of least privilege?
Answer: Users/processes should have minimum access necessary.

Q) What is a brute force attack?
Answer: Trying all possible passwords or keys until the correct one is found.

Q) What is a man-in-the-middle attack?
Answer: Attacker secretly intercepts communication between two parties.

Q) What is penetration testing?
Answer: Simulated cyber attack to identify vulnerabilities.

Q) What is social engineering?
Answer: Manipulating people into revealing confidential information.

Q) What is a certificate authority?
Answer: Entity that issues digital certificates to verify identities.

Q) What is cross-site scripting (XSS)?
Answer: Injecting malicious scripts into trusted websites.

Q) What is encryption at rest?
Answer: Encrypting stored data to protect from unauthorized access.

Behavioral & Scenario Questions
Q) Describe a challenging project you worked on and how you handled it.
Answer: [User’s personal example showing problem-solving, teamwork, persistence.]

Q) How do you prioritize tasks when you have multiple deadlines?
Answer: Use task prioritization frameworks like Eisenhower matrix, communicate clearly, and manage time effectively.

Q) How do you handle conflict within a team?
Answer: Listen actively, seek common ground, and work collaboratively to resolve issues.

Q) Describe a time when you had to learn a new technology quickly.
Answer: [User’s personal story showing adaptability and learning strategies.]

Q) How do you stay updated with the latest tech trends?
Answer: Follow blogs, participate in communities, attend conferences, read documentation.

Q) Describe a time you made a mistake and how you fixed it.
Answer: Admit mistake, analyze root cause, fix issue, and implement preventive measures.

Q) How do you handle pressure at work?
Answer: Stay calm, break tasks into manageable parts, and seek support if necessary.

Q) How do you ensure code quality?
Answer: Use code reviews, automated testing, linters, and follow best practices.

Q) Explain a situation where you improved a process or system.
Answer: [User’s example demonstrating initiative and impact.]

Q) How do you handle feedback?
Answer: Listen openly, reflect, and apply constructive feedback to improve.

System Design & Architecture (continued)
Q) What is CAP theorem?
Answer: A distributed system can only provide two of the following three guarantees: Consistency, Availability, Partition tolerance.

Q) What is horizontal scaling?
Answer: Adding more machines to handle increased load.

Q) What is vertical scaling?
Answer: Increasing the resources of a single machine.

Q) What is a CDN?
Answer: Content Delivery Network caches content closer to users for faster access.

Q) What is eventual consistency?
Answer: Updates propagate asynchronously; system becomes consistent over time.

Q) What is a message queue?
Answer: Middleware enabling asynchronous communication between systems.

Q) What is database replication?
Answer: Copying data across multiple servers for availability and redundancy.

Q) What is rate limiting?
Answer: Controlling number of requests to an API in a given time.

Q) What is a circuit breaker in microservices?
Answer: Design pattern to detect failures and prevent cascading issues.

Q) What is sharding and why is it used?
Answer: Partitioning data across databases for scalability.

Testing & QA
Q) What is unit testing?
Answer: Testing individual units or components of software.

Q) What is integration testing?
Answer: Testing combined parts of an application to ensure they work together.

Q) What is end-to-end testing?
Answer: Testing the full application workflow from start to finish.

Q) What is test-driven development (TDD)?
Answer: Writing tests before implementing functionality.

Q) What is mocking in testing?
Answer: Replacing parts of the system with simulated objects.

Q) What is code coverage?
Answer: Percentage of code exercised by tests.

Q) What is a regression test?
Answer: Testing to ensure new changes do not break existing functionality.

Q) What is a flaky test?
Answer: A test that sometimes passes and sometimes fails without code changes.

Q) What is continuous integration?
Answer: Practice of merging code changes frequently with automated testing.

Q) What is a bug lifecycle?
Answer: Stages a bug goes through from detection to resolution.

Programming & Algorithms (201–230)
Q) What is memoization?
Answer: Storing results of expensive function calls to avoid repeated computation.

Q) Explain tail recursion.
Answer: A recursive function where the recursive call is the last operation, allowing optimization.

Q) What is dynamic programming?
Answer: Technique solving problems by breaking them into overlapping subproblems and storing results.

Q) What is backtracking?
Answer: Algorithmic technique for finding solutions incrementally, abandoning solutions that fail constraints.

Q) What is hashing?
Answer: Mapping data to fixed-size values for fast lookup.

Q) What is a collision in hashing?
Answer: When two inputs map to the same hash value.

Q) How to handle collisions in a hash table?
Answer: Techniques like chaining (linked lists) or open addressing.

Q) What is amortized analysis?
Answer: Average time per operation over a sequence, smoothing out expensive operations.

Q) What is a heap data structure?
Answer: A specialized tree-based structure satisfying heap property (max or min heap).

Q) What is a bloom filter?
Answer: Probabilistic data structure to test membership with possible false positives but no false negatives.

Q) Explain Floyd’s cycle detection algorithm.
Answer: Uses two pointers moving at different speeds to detect cycles in a linked list.

Q) What is a balanced binary tree?
Answer: Tree where heights of two child subtrees of any node differ by no more than one.

Q) What is the time complexity of searching in a balanced BST?
Answer: O(log n).

Q) What is an adjacency matrix vs adjacency list?
Answer: Matrix is 2D array showing edges; list stores neighbors for each vertex.

Q) What is topological sorting?
Answer: Ordering of vertices in a directed acyclic graph (DAG) such that for every edge u → v, u comes before v.

Q) What is Dijkstra’s algorithm?
Answer: Algorithm to find shortest path from a source to all vertices in a weighted graph.

Q) What is a greedy algorithm?
Answer: Makes the locally optimal choice at each step.

Q) What is NP-complete?
Answer: Class of problems for which solutions can be verified quickly but no known efficient solution.

Q) What is a trie used for?
Answer: Fast retrieval of strings, often in autocomplete or spell-check.

Q) Explain KMP algorithm.
Answer: Efficient pattern matching algorithm avoiding re-examination of characters.

Q) What is a suffix tree?
Answer: Data structure for fast substring queries.

Q) What is the difference between DFS and BFS?
Answer: DFS explores deep before backtracking; BFS explores level-wise.

Q) What is Kadane’s algorithm?
Answer: Algorithm to find maximum subarray sum in O(n).

Q) What is a convex hull?
Answer: Smallest convex polygon enclosing all points in a set.

Q) Explain the difference between stable and unstable sorting algorithms.
Answer: Stable algorithms maintain relative order of equal elements; unstable do not.

Q) What is a segment tree?
Answer: Data structure for storing intervals or segments and answering range queries efficiently.

Q) What is a Fenwick tree (Binary Indexed Tree)?
Answer: Data structure for efficient prefix sums and updates.

Q) What is the sliding window technique?
Answer: Optimizing iterative algorithms by keeping a window on data and sliding it.

Q) What is a min-max algorithm?
Answer: Backtracking algorithm for decision-making in game theory.

Q) What is dynamic connectivity?
Answer: Tracking connected components in a graph undergoing changes.

Object-Oriented & Design Patterns (231–260)
Q) Explain polymorphism with example.
Answer: Objects of different classes can be treated as objects of a common superclass, e.g., method overriding.

Q) What is method overloading vs overriding?
Answer: Overloading: same method name, different parameters; overriding: subclass changes superclass method.

Q) What is an abstract class?
Answer: A class that cannot be instantiated but can have abstract methods to be implemented by subclasses.

Q) What is encapsulation?
Answer: Wrapping data and methods that operate on data within one unit/class.

Q) What is a class vs object?
Answer: Class is blueprint; object is instance of a class.

Q) What is multiple inheritance?
Answer: A class inherits from more than one superclass.

Q) What are interfaces and how are they different from abstract classes?
Answer: Interfaces declare methods without implementation; abstract classes can have implemented methods.

Q) What is Liskov Substitution Principle?
Answer: Subtypes must be substitutable for their base types.

Q) What is the Open/Closed Principle?
Answer: Software entities should be open for extension but closed for modification.

Q) What is the Single Responsibility Principle?
Answer: A class should have one and only one reason to change.

Q) Explain the Command design pattern.
Answer: Encapsulates a request as an object, allowing parameterization and queuing.

Q) What is the Proxy pattern?
Answer: Provides a surrogate or placeholder for another object.

Q) What is the Facade pattern?
Answer: Provides a simplified interface to a complex subsystem.

Q) Explain the Template Method pattern.
Answer: Defines the skeleton of an algorithm in a method, deferring steps to subclasses.

Q) What is cohesion and why is it important?
Answer: Cohesion is how closely related functions within a module are; higher cohesion is better.

Q) What is coupling and types of coupling?
Answer: Degree of interdependence; tight coupling is bad, loose coupling is preferred.

Q) What is the difference between composition and aggregation?
Answer: Composition implies ownership and lifecycle; aggregation implies a weaker association.

Q) What is a flyweight pattern?
Answer: Reduces memory use by sharing as much data as possible.

Q) Explain the difference between static and dynamic binding.
Answer: Static is compile-time; dynamic is runtime method call binding.

Q) What is duck typing?
Answer: Type system where object’s suitability is determined by presence of methods/properties rather than actual type.

Q) What is multiple dispatch?
Answer: Method to select which function to invoke based on the runtime types of multiple arguments.

Q) What are design principles to write maintainable code?
Answer: SOLID principles, DRY, KISS, YAGNI.

Q) What is dependency inversion principle?
Answer: Depend on abstractions, not on concretions.

Q) What is a decorator pattern used for?
Answer: Adds behavior dynamically to objects without affecting others.

Q) Explain MVC architecture.
Answer: Model-View-Controller separates application into three interconnected components.

Q) What is the Builder pattern?
Answer: Separates construction of a complex object from its representation.

Q) What is an event-driven architecture?
Answer: Systems where events trigger communication between decoupled components.

Q) What is the difference between synchronous and asynchronous communication?
Answer: Synchronous waits for response; asynchronous does not.

Q) Explain the concept of inversion of control.
Answer: Framework controls the flow rather than the custom code.

Q) What is a service locator pattern?
Answer: Provides a centralized registry for services.

Databases & SQL (261–290)
Q) What is normalization?
Answer: Process of organizing data to reduce redundancy.

Q) What is a deadlock in databases?
Answer: Situation where two or more transactions are waiting for each other to release locks.

Q) What is indexing and how does it improve performance?
Answer: Data structure to quickly locate records without scanning entire tables.

Q) Explain ACID properties.
Answer: Atomicity, Consistency, Isolation, Durability.

Q) What is the difference between clustered and non-clustered index?
Answer: Clustered index sorts physical data; non-clustered stores pointers.

Q) What is a composite key?
Answer: A key consisting of two or more attributes.

Q) What are views?
Answer: Virtual tables defined by a query.

Q) What is a stored procedure?
Answer: Precompiled SQL code stored in the database.

Q) What is a trigger?
Answer: SQL code automatically executed on specific database events.

Q) What is a foreign key?
Answer: Column that enforces referential integrity.

Q) Explain the difference between OLTP and OLAP.
Answer: OLTP: transactional processing; OLAP: analytical processing.

Q) What is a data warehouse?
Answer: Central repository of integrated data from multiple sources.

Q) What is sharding in databases?
Answer: Horizontal partitioning of data across multiple machines.

Q) What is a NoSQL database?
Answer: Non-relational databases optimized for specific data models.

Q) What is eventual consistency?
Answer: Data replication delay where system becomes consistent over time.

Q) What are transactions?
Answer: Units of work performed as a single logical operation.

Q) What is a cursor?
Answer: Database object to retrieve row-by-row processing.

Q) What is SQL injection?
Answer: Attack inserting malicious SQL statements.

Q) How do you prevent SQL injection?
Answer: Use parameterized queries, input validation, ORM frameworks.

Q) What is CAP theorem?
Answer: Consistency, Availability, Partition tolerance – only two can be guaranteed simultaneously.

Q) What is a materialized view?
Answer: A view where data is physically stored.

Q) What is a surrogate key?
Answer: Artificial key used as a primary key.

Q) What is a star schema?
Answer: Data warehouse schema with a central fact table connected to dimension tables.

Q) What is a snowflake schema?
Answer: Extension of star schema where dimension tables are normalized.

Q) What is replication lag?
Answer: Delay between changes made on primary and propagated to replica.

Q) What is data partitioning?
Answer: Splitting a database into pieces for performance.

Q) What is a deadlock detection algorithm?
Answer: Detects cycles in wait-for graphs.

Q) What is optimistic concurrency control?
Answer: Assumes low conflicts and checks for conflicts before commit.

Q) What is pessimistic concurrency control?
Answer: Locks data resources for transaction duration.

Q) What is database isolation level?
Answer: Defines how/when changes made by one transaction are visible to others.

Operating Systems & Networking (291–320)
Q) What is a process vs a thread?
Answer: Process is a program in execution; threads are lightweight units within processes.

Q) What is context switching?
Answer: CPU switching from one process/thread to another.

Q) What is a deadlock?
Answer: Situation where processes wait indefinitely for resources.

Q) What is paging?
Answer: Memory management scheme dividing memory into fixed-size pages.

Q) What is virtual memory?
Answer: Using disk space to simulate extra RAM.

Q) What is a semaphore?
Answer: Synchronization tool to control access to shared resources.

Q) What is a mutex?
Answer: Mutual exclusion object for thread synchronization.

Q) What is a race condition?
Answer: When output depends on timing of uncontrollable events.

Q) What is TCP vs UDP?
Answer: TCP is connection-oriented and reliable; UDP is connectionless and faster.

Q) What is a three-way handshake?
Answer: TCP connection setup process with SYN, SYN-ACK, ACK.

Q) What is NAT?
Answer: Network Address Translation maps private to public IPs.

Q) What is a firewall?
Answer: Security system controlling network traffic.

Q) What is a subnet?
Answer: Logical subdivision of an IP network.

Q) What is ARP?
Answer: Address Resolution Protocol maps IP to MAC address.

Q) What is DNS?
Answer: Domain Name System translates domain names to IP addresses.

Q) What is a socket?
Answer: Endpoint for communication between two machines.

Q) What is a VLAN?
Answer: Virtual LAN groups devices logically.

Q) What is HTTP vs HTTPS?
Answer: HTTPS is HTTP with encryption using SSL/TLS.

Q) What is latency vs bandwidth?
Answer: Latency is delay; bandwidth is data transfer rate.

Q) What is a proxy server?
Answer: Intermediate server forwarding client requests.

Q) What is port scanning?
Answer: Technique to find open ports on a networked device.

Q) What is the OSI model?
Answer: Seven-layer model describing network functions.

Q) What is packet switching?
Answer: Sending data in small packets over shared networks.

Q) What is DHCP?
Answer: Dynamic Host Configuration Protocol assigns IP addresses.

Q) What is SSL/TLS?
Answer: Protocols for secure communication over networks.

Q) What is a DDoS attack?
Answer: Distributed Denial of Service, overwhelming target with traffic.

Q) What is load balancing?
Answer: Distributing network or app traffic across multiple servers.

Q) What is QoS?
Answer: Quality of Service, managing bandwidth for different services.

Q) What is a VPN?
Answer: Virtual Private Network for secure remote connections.

Q) What is ICMP?
Answer: Internet Control Message Protocol used for error messages and diagnostics.

Cloud Computing & DevOps (321–350)
Q) What is IaaS, PaaS, SaaS?
Answer: Infrastructure, Platform, and Software as a Service.

Q) What is containerization?
Answer: Packaging apps and dependencies in lightweight containers.

Q) What is Docker?
Answer: Platform for containerizing applications.

Q) What is Kubernetes?
Answer: Orchestrator for managing containers at scale.

Q) What is CI/CD?
Answer: Continuous Integration and Continuous Deployment.

Q) What is Infrastructure as Code?
Answer: Managing infrastructure through code (e.g., Terraform).

Q) What is a microservice?
Answer: Small, independently deployable services.

Q) What is serverless computing?
Answer: Running code without managing servers.

Q) What is horizontal vs vertical scaling in cloud?
Answer: Adding instances vs increasing power of existing instance.

Q) What is an API Gateway?
Answer: Manages API requests, routing, and security.

Q) What is autoscaling?
Answer: Automatically adjusting number of instances based on load.

Q) What is a load balancer?
Answer: Distributes incoming network traffic.

Q) What is fault tolerance?
Answer: System’s ability to continue operating after failure.

Q) What is eventual consistency in distributed systems?
Answer: State where updates propagate asynchronously.

Q) What is a CDN?
Answer: Network to deliver content from closest servers.

Q) What is blue-green deployment?
Answer: Deployment strategy switching between two identical environments.

Q) What is canary deployment?
Answer: Gradually rolling out new versions to a subset.

Q) What is the difference between public, private, hybrid clouds?
Answer: Public is open to general public; private is exclusive; hybrid combines both.

Q) What is a cloud region vs availability zone?
Answer: Regions are geographic areas; zones are isolated locations within.

Q) What is a service mesh?
Answer: Infrastructure layer to control service-to-service communication.

Q) What is Infrastructure Monitoring?
Answer: Observing system health and metrics.

Q) What is log aggregation?
Answer: Collecting logs from multiple sources centrally.

Q) What is container orchestration?
Answer: Automated deployment, scaling, and management of containers.

Q) What is a rollback in deployment?
Answer: Reverting to a previous stable version.

Q) What is immutable infrastructure?
Answer: Infrastructure components are replaced rather than updated.

Q) What is chaos engineering?
Answer: Testing system resilience by introducing failures.

Q) What is a stateful vs stateless service?
Answer: Stateful retains session info; stateless does not.

Q) What is the role of DNS in cloud?
Answer: Resolves domain names to IP addresses.

Q) What is cloud-native application?
Answer: Designed specifically for cloud environments.

Q) What is latency and throughput in cloud networks?
Answer: Latency is delay; throughput is rate of successful data transfer.

Security (351–380)
Q) What is encryption?
Answer: Encoding data so only authorized parties can read it.

Q) What is symmetric vs asymmetric encryption?
Answer: Symmetric uses one key; asymmetric uses public/private key pairs.

Q) What is a firewall?
Answer: System that monitors and controls incoming/outgoing traffic.

Q) What is a VPN?
Answer: Secure private network over public networks.

Q) What is multi-factor authentication?
Answer: Using two or more verification methods.

Q) What is XSS?
Answer: Cross-site scripting attack injecting malicious scripts.

Q) What is CSRF?
Answer: Cross-site request forgery tricks users into unwanted actions.

Q) What is SQL injection?
Answer: Inserting malicious SQL statements into queries.

Q) What is a man-in-the-middle attack?
Answer: Attacker intercepts communication between two parties.

Q) What is hashing?
Answer: Converting data into fixed-size hash code.

Q) What is salting?
Answer: Adding random data to input before hashing to prevent attacks.

Q) What is SSL/TLS?
Answer: Protocols to secure communications over networks.

Q) What is a digital certificate?
Answer: Electronic document proving ownership of public key.

Q) What is OAuth?
Answer: Open standard for access delegation.

Q) What is JWT?
Answer: JSON Web Token for secure information exchange.

Q) What is a security token?
Answer: Token that proves identity or permissions.

Q) What is privilege escalation?
Answer: Gaining elevated access rights illicitly.

Q) What is a zero-day exploit?
Answer: Attack on undisclosed vulnerability.

Q) What is a security audit?
Answer: Review of security policies and systems.

Q) What is penetration testing?
Answer: Simulated cyberattack to find vulnerabilities.

Q) What is a sandbox?
Answer: Isolated environment for testing untrusted code.

Q) What is data masking?
Answer: Obscuring sensitive data.

Q) What is role-based access control (RBAC)?
Answer: Permissions based on user roles.

Q) What is principle of least privilege?
Answer: Users have minimum access needed.

Q) What is a vulnerability scanner?
Answer: Tool to detect security flaws.

Q) What is social engineering?
Answer: Manipulating people to gain confidential info.

Q) What is two-factor authentication (2FA)?
Answer: Authentication with two verification factors.

Q) What is brute force attack?
Answer: Trying many passwords to gain access.

Q) What is a botnet?
Answer: Network of infected machines controlled remotely.

Q) What is DDoS?
Answer: Distributed Denial of Service attack.

