🔰 Basic Concepts
Q1) What is a Database?
Answer:
A database is a structured collection of data that is stored and accessed electronically. It is designed to efficiently store, retrieve, and manage data. Databases can contain information like customer records, product inventories, employee details, etc.

Q2) What is a DBMS? How is it different from a database?
Answer:
A Database Management System (DBMS) is software that interacts with users, applications, and the database itself to capture and analyze data. It provides functionalities like data insertion, deletion, update, retrieval, and security.

Difference:

A database is a container or storage where data resides.

A DBMS is the system/software used to manage the database.

Q3) What are the different types of DBMS?
Answer:
There are four main types of DBMS:

Hierarchical DBMS – Organizes data in a tree-like structure (e.g., IBM IMS).

Network DBMS – Data is represented as records connected through links.

Relational DBMS (RDBMS) – Data is stored in tables (e.g., MySQL, PostgreSQL, Oracle).

Object-Oriented DBMS – Data is stored as objects (e.g., db4o).

Popular examples:

Relational: MySQL, PostgreSQL, SQL Server.

NoSQL (non-relational): MongoDB, Cassandra, Redis.

Q4) What is a Relational Database?
Answer:
A relational database stores data in tables (also called relations) consisting of rows (tuples) and columns (attributes). It follows a strict schema and uses SQL to manage and query the data. It adheres to ACID properties to ensure reliability and consistency.

Q5) What is a Schema in DBMS?
Answer:
A schema defines the logical structure of the database, including tables, fields, relationships, views, indexes, and constraints. It acts like a blueprint of how data is organized and how the relations between them are associated.

Q6) What is an Instance in DBMS?
Answer:
An instance of a database refers to the data stored in the database at a particular moment in time. While the schema defines the structure, an instance is the actual data present in the tables at that time.

Q7) What is a Database Model? Name different types.
Answer:
A database model determines the logical structure of a database and fundamentally defines how data is stored, organized, and manipulated.

Types of database models:

Hierarchical model

Network model

Relational model

Object-oriented model

Document model (NoSQL)

Q8) What are the advantages of DBMS?
Answer:

Data integrity and consistency

Data security through user access control

Backup and recovery support

Data abstraction and independence

Efficient data access through indexing and optimization

Concurrency control for multiple users

Reduces data redundancy

Q9) What is a Table in DBMS?
Answer:
A table is a collection of data organized in rows and columns. Each row represents a record (tuple), and each column represents a field or attribute of that record. Tables are the fundamental structure in relational databases.

Q10) What are Tuples and Attributes?
Answer:

A tuple is a single row in a table, representing a single record.

An attribute is a column in a table, representing a property of the record.

For example, in a "Students" table:

Tuple: {1, 'Anmol', 'Computer Science'}

Attributes: ID, Name, Department

Q11) What is a Primary Key?
Answer:
A primary key is a field (or combination of fields) that uniquely identifies each record in a table. It cannot contain NULL values and must be unique for all rows.

Example: StudentID in a Students table.

Q12) What is a Foreign Key?
Answer:
A foreign key is a field (or group of fields) in one table that uniquely identifies a row in another table. It is used to establish a relationship between two tables.

Example: DepartmentID in Students table that references ID in Departments table.

Q13) What is a Candidate Key?
Answer:
A candidate key is a column, or set of columns, that can qualify as a unique key in a table. There can be multiple candidate keys, but only one is chosen as the primary key.
that can be used as a primary key.

Q14) What is a Super Key?
Answer:
A super key is a set of one or more columns that can uniquely identify a record in a table. Candidate keys are subsets of super keys (minimal super keys).
also have the extra columns that is not needed but still this is a super key

Q15) What is a Composite Key?
Answer:
A composite key is a primary key that consists of two or more attributes to uniquely identify a row in a table.
that can make a unique key with two or more columns combination.

Example: A table CourseRegistrations with a composite key of (StudentID, CourseID).

Q16) What is a Unique Key?
Answer:
A unique key ensures that all values in a column (or group of columns) are different. Unlike a primary key, it can contain NULL values (depending on the DBMS).

Q17) What is the Difference Between Primary Key and Unique Key?
Feature	Primary Key	Unique Key
Uniqueness	Must be unique	Must be unique
NULL Allowed	No	Yes (one or more NULLs)
Count per Table	Only one	Can be multiple

Q18) What is a Database Constraint?
Answer:
A constraint is a rule enforced on data in the database to maintain accuracy and integrity. It prevents invalid data from being entered into tables.

Q19) What are the Types of Constraints in DBMS?
Answer:

NOT NULL – Prevents null values in a column.

UNIQUE – Ensures all values are unique.

PRIMARY KEY – Uniquely identifies each row.

FOREIGN KEY – Ensures referential integrity.

CHECK – Validates values based on a condition.

DEFAULT – Provides a default value for a column.

Q20) What is an Entity-Relationship (ER) Model?
Answer:
An Entity-Relationship (ER) Model is a high-level data model used for database design. It visually represents:

Entities (real-world objects like Student, Teacher)

Attributes (properties like name, age)

Relationships (associations like "enrolls" between student and course)

It helps in designing a conceptual schema before creating actual tables in a relational database.



🔍 SQL Basics
Q) What is SQL?
ans: SQL stands for structured query language 
   It uses to interect with the database using different languages like :
     DDL (Data Definition Language): Defines database structure (e.g., CREATE, ALTER, DROP).

DML (Data Manipulation Language): Manipulates data in tables (e.g., INSERT, UPDATE, DELETE).

DCL (Data Control Language): Controls access to data (e.g., GRANT, REVOKE).

TCL (Transaction Control Language): Manages transactions (e.g., COMMIT, ROLLBACK, SAVEPOINT).

Q) What are DDL, DML, DCL, and TCL commands?
     1) DDL : data definition language used to define the data.
     2) DML : data manipulation language used to modify the data
     3) DCL : Data control language used to fetch the data in different structure.
     4) TCL : Transactional control language used for transactions.

Q) Write SQL to create a table.
ans : 
   CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  salary DECIMAL(10, 2)
);

Q) Write SQL to insert records.
ans : 
   INSERT INTO employees (id, name, salary) VALUES (1, 'John Doe', 50000.00);

Q) Write SQL to update records.
ans : UPDATE employees SET salary = 55000 WHERE id = 1;

Q) Write SQL to delete records.
ans : DELETE FROM employees WHERE id = 1;

Q) Write SQL to select records.
ans : SELECT * FROM employees;

Q) What is a JOIN? Types of JOINs?
ans : Join is used to fetch data from more than one tables
    inner join,full outer join, left join, right join

Q) What is the difference between INNER JOIN and OUTER JOIN?
ans : INNER JOIN returns only matching rows. OUTER JOIN returns matching rows plus unmatched rows from one or both tables.

Q) What is a self-join?
ans : A self-join is a regular join where a table is joined with itself.
 
Q) What is a subquery?
ans : A subquery is a query nested inside another query.

Q) What are aggregate functions in SQL?
ans : Functions like COUNT(), SUM(), AVG(), MIN(), MAX() that operate on sets of values.

Q) What is GROUP BY and HAVING?
ans : group by is used to group the distinct values of the given column and having is a filter that applied after the group by

Q) What is normalization?
an : normalization is a technique which is used to seperate the data into different tables using relationships.

Q) Explain the difference between WHERE and HAVING.
ans : where is used to filter the data according to the given conditions
     Having is also used to filter the data but it is applied after the group by.

Q) What is the difference between TRUNCATE and DELETE?
ans :TRUNCATE removes all rows quickly without logging individual deletions and can't be rolled back in some systems. DELETE is logged and can be rolled back.

Q) What is a view? How is it different from a table?
an : view is a seperate table which gives the structure of a table.

Q) What is an index?
ans : index is a technique which gives the result of the query faster
      It stores the column with the address of the rows in a seperate table which can accessed very faster.

Q) What is the difference between clustered and non-clustered index?
ans : Clustered index determines the physical order of data in a table.
      Non-clustered index is a separate structure with pointers to the data.
  

Q) What is a stored procedure?
A stored procedure is a saved SQL query or group of queries that can be executed repeatedly.


🔄 Normalization & ER Model
Q) What is normalization? Why is it important?
ans : normalization is a technique to store the data in multiple tables to maintain the consistency data integrity with using the references.

Q) What are normal forms? Explain 1NF.
ans : 
1NF: Atomic values (no repeating groups).

2NF: 1NF + No partial dependencies.

3NF: 2NF + No transitive dependencies.

BCNF: Stronger 3NF where every determinant is a candidate key.

Q) What is 4NF and 5NF?

Q) What is denormalization? When should you use it?
ans : denormalization is know as embedding the data into a single table this will makes the query result faster but this will cause the data duplicacy issue.

Q) What is a functional dependency?
ans : functional dependency is 

Q) What is multivalued dependency?

Q) What is a transitive dependency?

Q) Explain ER diagram components.
ans : 

Q) What is cardinality in ER diagrams?

Q) What is participation constraint?
ans : 

Q) What is aggregation in ER modeling?

Q) What is specialization and generalization?

🔑 Keys and Constraints
Q) What are candidate keys? How are they identified?
ans : candidate keys are one or set of unique keys that can be used as a primary key.

Q) What is the difference between candidate key and primary key?
ans : candidate key is a other than the primary key it is also unique and can be used as a primary key.

Q) What is a foreign key constraint?
ans : foreign key constraint means that a key is reference to the primary key in a different table.
      and cannot be deleted.

Q) What is referential integrity?
ans : referential integrity means it will refer to a primary key in a different table.

Q) What happens if you delete a row that is referenced by a foreign key?
ans : it will not deleted

Q) What are the different types of constraints in SQL?
ans : unique
      null
      

Q) How does a unique constraint differ from a primary key?
ans : unique contraint id differ from a primary key because the a single primary key exist in a table but there will the multiple unique keys.

Q) What is a check constraint?
ans : 

Q) Can a table have multiple primary keys?
ans : No

Q) Can a table have multiple foreign keys?
ans : Yes

🔄 Transactions & Concurrency
Q) What is a transaction?
ans : transaction is set of operations that is following the ACID properites.

Q) What are the properties of transactions? Explain ACID.
ans : Transactions follow the ACID properties like 
      A - Atomicity : all the operations are completed else rolled back
      C - Consisteny  : All the tables has the consitent data with using references
      I - Isolation : The transactions are isolated with each other
      D - Durability : The data is durable after the transactions are executed.

Q) What is atomicity?
ans : all the operations are completed as rolled back all.

Q) What is consistency in transactions?
ans : The data with references are stored correctly and maintain the intigrity.

Q) What is isolation in transactions?
ans : the transactions are isolated with each other.

Q) What is durability in transactions?
ans : the data is durable after the transaction is completed.

Q) What is a commit and rollback?
ans : commit is permanent save of state
      rollback is a operation to maintain the previous state of the data by removing the latest changes.

Q) What is concurrency control?
ans : concurrency control 

Q) What is a deadlock? How can it be resolved?
ans : deadlock is a situation when the read write is blocked with each other

Q) What is locking in DBMS?
ans : locking is technique to maintain the data intigrity and consistency by locking the tables when a transaction is ongoing and not commited

Q) What are different types of locks?
ans : optimistic locks and pessimistic locks
     optimistics locks maintain the versions on the tables and does not lock the table till the transaction completes
      pessimistic locks maintain the locks on the table when the transaction is ongoing

Q) What is optimistic concurrency control?
ans : maintain the versions on the rows

Q) What is pessimistic concurrency control?
ans : maintain the locks on the complete table till the previous transaction completes.

Q) What is two-phase locking?

Q) What are isolation levels in SQL?
ans : Isolation levels are used to give the parallel processing into the same the table.
      this will deside that what data should be read by the different transactions.

Q) Explain dirty read, non-repeatable read, and phantom read.
ans : dirty read  : Transaction2 reads the older data till the transaction1 not commited.
   

Q) How does snapshot isolation work?

🔄 Indexing
Q) What is an index in DBMS?
ans :  

Q) What are the types of indexes?

Q) What is a B-tree index?

Q) What is a hash index?

Q) What is a bitmap index?

Q) What is a clustered index?

Q) What is a non-clustered index?

Q) How does an index improve query performance?

Q) What are the drawbacks of indexes?

Q) What is an index scan?

Q) What is a full table scan?

Q) What is a composite index?

Q) How to choose columns for indexing?

🛠️ Advanced Concepts
Q) What is partitioning in databases?

Q) What is sharding?

Q) What is replication?

Q) What is CAP theorem?

Q) What is BASE in NoSQL databases?

Q) What are NoSQL databases? Types?

Q) What is eventual consistency?

Q) What are ACID transactions in NoSQL?

Q) What is a materialized view?

Q) What is query optimization?

Q) What is cost-based optimization?

Q) What is explain plan?

Q) What are hints in SQL?

Q) What is a cursor in SQL?

Q) What are triggers? Types of triggers?

Q) How are backups performed in DBMS?

Q) What is a deadlock detection algorithm?

Q) How are indexes maintained on insert/update/delete?

Q) What is a database lock escalation?

Q) What is multiversion concurrency control (MVCC)?

Q) What is a data warehouse?

Q) What is OLTP vs OLAP?

Q) What is a star schema?

Q) What is a snowflake schema?

Q) What is a fact table and dimension table?

🔐 Security & Recovery
Q) What is database security?

Q) What are privileges in DBMS?

Q) What is authentication and authorization?

Q) What is SQL injection?

Q) How to prevent SQL injection?

Q) What are roles and permissions?

Q) What is data encryption in databases?

Q) What is backup and recovery?

Q) What are different backup types?

Q) What is point-in-time recovery?

Q) What is transaction log?

Q) What is crash recovery?

Q) What is database mirroring?

Q) What is RAID and how is it related to DB?

Q) What is data masking?

📈 Query Optimization & Performance
Q) What are execution plans?

Q) How does the database engine parse a query?

Q) What are query hints?

Q) What is indexing strategy for read-heavy databases?

Q) What is indexing strategy for write-heavy databases?

Q) What is query caching?

Q) What is a database profiler?

Q) How to optimize slow queries?

Q) What are the effects of joins on performance?

Q) How to optimize joins?

Q) What are the differences between nested loop join, hash join, and merge join?

Q) What is denormalization for performance?

Q) What is query rewriting?

Q) How does partition pruning work?

Q) How do you handle database scalability?

