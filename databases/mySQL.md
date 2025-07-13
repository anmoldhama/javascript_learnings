📘 1–10: Basic SQL & MySQL Fundamentals
What is MySQL and how is it different from SQL?
ans : it is a software to manage the relational databases and SQL is a structured query language.

What are the different data types supported by MySQL?
ans : CHAR, VARCHAR, TEXT, INT, BIGINT, DECIMAL, FLOAT, DATE, DATETIME, BOOLEAN, ENUM, JSON, etc.


How do you create a database in MySQL?
ans : create database name db_name;

How do you create a table in MySQL?
ans : create table name table_name;

What is the difference between CHAR and VARCHAR?
ans : CHAR is used for fixed-length strings — it always stores exactly the defined length by padding with spaces if needed.

VARCHAR is used for variable-length strings — it stores only the actual content and is more space-efficient for data with varying lengths.

How do you insert data into a MySQL table?
ans : 

How do you update records in a table?
ans :  update table_name
       set column_name = ""
       where id = "1";

How do you delete records from a table?
ans : delete from table_name
      where id = "1";

What is the use of the SELECT statement?
ans : to get the data from the table

How do you fetch only unique records from a table?
ans : using group by

📚 11–20: Constraints and Keys
What is a primary key in MySQL?
ans : primary key is a unique identifier of a row in the table

What is the difference between primary key and unique key?
ans :
| Feature           | **Primary Key**                                    | **Unique Key**                                 |
| ----------------- | -------------------------------------------------- | ---------------------------------------------- |
| **Uniqueness**    | Must be **unique**                                 | Must be **unique**                             |
| **Nulls Allowed** | **Not allowed** to be null                         | **Allows** one or more `NULL` values           |
| **Default Index** | Automatically creates a **clustered index**        | Creates a **non-clustered index**              |
| **Per Table**     | Only **one** primary key per table                 | You can have **multiple unique keys**          |
| **Purpose**       | Identifies **each row uniquely** (main identifier) | Enforces **additional uniqueness constraints** |


What is a foreign key in MySQL?
ans : foreign key is a constraint in mysql which is refer to the primary key in another table

How does a foreign key enforce referential integrity?
ans : you can delete both the rows in both tables if you want to remove the data.

What is a NOT NULL constraint?
ans : It prevents the null data to be inserted in any column

What is a CHECK constraint and how is it used in MySQL?
ans : 
A CHECK constraint in MySQL ensures that values in a column meet a specific condition. If the condition is not satisfied, the insert or update is rejected.

What is the difference between DEFAULT and AUTO_INCREMENT?
ans : 
| Feature            | `DEFAULT`                             | `AUTO_INCREMENT`                                |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| Purpose            | Sets a **default value** for a column | Automatically generates **incremented numbers** |
| Use Case           | Optional fields with default values   | Usually used for primary keys or IDs            |
| Applies To         | Any data type                         | Integer types only                              |
| Can Be Overridden? | Yes, by explicitly specifying a value | Yes, but usually left empty                     |


Can a table have multiple foreign keys?
ans : yes a table have multiple foreign keys

Can a table have more than one primary key?
ans :  No

What is a composite primary key?
ans : 
A composite primary key is a primary key made up of two or more columns that together uniquely identify a row in the table. This is useful when no single column is unique by itself.

🔍 21–30: Joins & Subqueries
What are the different types of joins in MySQL?
ans : Inner join, left join, right join, full outer join, cross join, self join.

Explain the difference between INNER JOIN and LEFT JOIN.
ans : Inner join gives only the matched data in both the tables

What is a CROSS JOIN?
ans : Cross join 

What is a SELF JOIN? Give an example.
ans : self join gives the data by seperating the columns in a single table.

How do you perform a JOIN across multiple tables?
ans : table a join table b and table c join table d and table e join table f on a.id = b.id and c.id = d.id and e.id = f.id

What is the performance impact of JOINs on large tables?
ans : we can search the data in more than one tables so it will take time and when we increase the joins so the query will take time

What are correlated subqueries?
ans : subqueries are the inner queries when we find any row inside a main query so we can use the sub query

How are subqueries different from JOINs?
ans : JOINs combine data from multiple tables into a single result set.

Subqueries return a single value or result set used by the outer query.

JOINs are often faster than correlated subqueries.

Subqueries are easier to isolate logic but may be less performant.

What happens if a JOIN condition is omitted?
ans : If a JOIN condition is omitted, it results in a CROSS JOIN, returning the Cartesian product of both tables — which can lead to millions of rows and performance issues.

Can subqueries be used in the SELECT clause?
ans : yes 

⚙️ 31–40: Indexing & Performance
What is an index in MySQL?
ans : index is a seperate storage that provide the faster query result by directly referencing the row in main database.

How does indexing improve query performance?
ans : By storing the value with the address of the row from the main table inside an another space 
     and we query to the same column so it will directly referencing the address in the main table.

What are the types of indexes in MySQL?
ans : Primary Index (automatically created on primary key)

Unique Index

Composite (Multi-column) Index

Full-Text Index

Spatial Index (used for GIS data)

Foreign Key Index (automatically created)

What is a composite index?
ans : This index is created on group of columns.

How do you create an index on multiple columns?
ans : CREATE INDEX idx_name ON table_name (col1, col2);

What are some scenarios where indexes should not be used?
ans : where you have the high right operations because when you update the data it should be update in the indexes and your right operation will be expensive.

How do you check if a query is using an index?
ans : EXPLAIN SELECT * FROM users WHERE email = 'a@example.com';

How can you view all indexes on a table?
ans : SHOW INDEX FROM table_name;

What is the difference between clustered and non-clustered indexes?
ans : 
| Feature           | Clustered Index (InnoDB default)          | Non-clustered Index                      |
| ----------------- | ----------------------------------------- | ---------------------------------------- |
| **Data Storage**  | Actual table rows **stored in index**     | Index contains **pointers** to data rows |
| **Table Support** | MySQL's InnoDB supports 1 clustered index | Multiple non-clustered indexes allowed   |
| **Speed**         | Faster for **range scans**                | Slower than clustered for large scans    |
| **Primary Key**   | Automatically becomes clustered index     | Other indexes are non-clustered          |


What is a full-text index?
ans : 
A full-text index allows efficient text searching within large text columns using natural language or boolean modes.

🔒 41–50: Transactions & Isolation Levels
What is a transaction in MySQL?
ans : transaction are the group of operations which are executed completely or none of them.

What are the properties of a transaction (ACID)?
ans : acid stands for Atomicity, Consistency, Isolation, Durability.

How do you start, commit, and rollback a transaction in MySQL?
ans :
START TRANSACTION;
-- or BEGIN;

-- Perform your queries
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit if everything is OK
COMMIT;

-- Or rollback if something goes wrong
ROLLBACK;

What are the different isolation levels in MySQL?
ans :
READ UNCOMMITTED – Allows dirty reads (see uncommitted data).

READ COMMITTED – Only committed data can be read.

REPEATABLE READ (default) – Ensures repeated reads return the same result.

SERIALIZABLE – Highest level; locks rows to prevent others from modifying or inserting.

What is dirty read, non-repeatable read, and phantom read?
ans : 

What is the default isolation level in MySQL?

How do you change the isolation level in a session?

What are savepoints in transactions?

Can you roll back to a savepoint?

What happens if a transaction is not committed?

🔁 51–60: Stored Procedures, Functions & Triggers
What is a stored procedure?

What is the difference between a stored procedure and a function?

How do you pass parameters to a stored procedure?

Can a stored procedure return a value?

What are triggers in MySQL?

What are BEFORE and AFTER triggers?

How can you prevent recursion in triggers?

What is an event in MySQL?

How do you schedule a recurring task in MySQL?

What are the use cases for stored procedures?

📈 61–70: Performance Tuning & Optimization
How do you optimize a slow query?

What is the EXPLAIN keyword and how is it used?

What is a query execution plan?

What are the common causes of slow queries in MySQL?

How do you identify slow queries?

What is the slow query log in MySQL?

How do you profile a query?

What is denormalization and when should it be used?

How do you optimize GROUP BY queries?

How do you handle performance issues in large tables?

🧩 71–80: Real-World Scenarios & Practices
How do you design a schema for an e-commerce application?

How do you prevent duplicate records in a signup system?

How do you store hierarchical data like categories and subcategories?

How would you handle soft deletes in a MySQL database?

How do you audit data changes?

How do you ensure consistency when updating related tables?

How would you manage user roles and permissions in MySQL?

How do you store and query JSON data in MySQL?

How do you avoid race conditions in concurrent transactions?

How do you design a table to efficiently handle time-series data?

🔄 81–90: Backup, Restore & Replication
How do you back up a MySQL database?

What is mysqldump and how is it used?

How do you restore a backup in MySQL?

What is binary logging?

What is replication in MySQL?

What are the types of replication supported by MySQL?

What is GTID-based replication?

How do you set up master-slave replication?

What are common replication lag issues?

How do you monitor replication health?

🛠️ 91–100: Admin & Miscellaneous
How do you create and manage users in MySQL?

What are the privileges a MySQL user can have?

How do you reset a forgotten MySQL root password?

How do you change the default port of MySQL?

What is the InnoDB storage engine?

Compare InnoDB and MyISAM.

What is a temporary table and when should it be used?

What is the purpose of the INFORMATION_SCHEMA database?

How do you handle case-insensitive searches in MySQL?

What is the difference between DELETE, TRUNCATE, and DROP?



# Scenario based questions


🔍 1–10: Data Retrieval & Querying
You need to fetch the top 5 highest-paid employees in each department. How would you write this query?

select * from employees group by department,salary order by DESC limit 5

How would you find all customers who placed orders in the last 30 days but didn’t order anything in the last 7 days?

A column stores date as VARCHAR. How would you convert it to a proper DATE type and fix malformed entries?

Write a query to get duplicate email addresses from a user table.

A customer table has null values in the phone_number column. How would you count how many users have not provided a phone number?

Fetch the second highest salary from the employee table without using LIMIT.

You have a normalized schema. How would you write a query to display product name, category name, and supplier name from three related tables?

You want to group sales by week, starting on Monday. How would you do it?

What’s the most efficient way to search for users whose names start with "Jo" and end with "n"?

You need to calculate a running total of daily sales. How would you write this?

🔄 11–20: Data Manipulation
How would you update all inactive users who haven’t logged in for a year?

You need to increase the price of all products in the "Electronics" category by 15%. How?

How would you merge two tables with a similar schema but without duplicates?

How do you replace all instances of "Ltd." with "Limited" in a company name column?

You need to delete duplicate records from a table but keep the one with the lowest ID. How?

A product table contains a column stock_level. If stock_level < 0, set it to 0. Write a query.

How do you archive all orders older than 2 years to a different table and delete from the original?

You’re given a list of emails. How do you batch update user statuses for only those emails?

You need to insert records into a table only if they don’t already exist. How?

How would you swap values of two columns for all rows?

⚙️ 21–30: Indexing & Performance
A query on a 10M row table takes 30 seconds. How would you troubleshoot and improve performance?

How would you create an index that improves search performance on first and last name combinations?

You find that a query uses FULL TABLE SCAN. How do you change it to use an index?

You want to improve performance of a table used in reporting that doesn’t change often. What would you do?

You have multiple queries using ORDER BY created_at DESC LIMIT 10. How would you index to optimize them?

How can you determine which queries are slowing down the system?

You notice frequent locking in a highly concurrent system. How would you resolve it?

A dashboard query slows down as data grows. How would you restructure the database or query?

A compound index exists on (a, b). Why might a query on only b not use it?

A table is frequently written to and queried. How do you balance read and write performance?

🔐 31–40: Transactions & Concurrency
A user adds items to cart, but the inventory is being updated by another transaction. How do you prevent race conditions?

How would you ensure that bank transfers (debit & credit) are processed atomically?

You need to ensure that a report runs on consistent data even if others are updating the database. What would you use?

How do you prevent dirty reads in a system where consistency is critical?

In a transaction, you insert data and then want to discard all changes if an error occurs. How?

Two users are updating the same row at the same time. How do you avoid lost updates?

How can you use SELECT ... FOR UPDATE and why would you use it?

A process sometimes fails mid-update. How do you ensure partial updates don’t corrupt data?

How would you implement optimistic locking in MySQL?

How do you simulate and test concurrent transaction scenarios?

📦 41–50: Schema Design & Real-World Use Cases
How would you design a schema to store comments with replies (nested structure)?

You need to store product variants (size, color). How do you model it relationally?

How do you track changes (audit log) to specific fields in a table?

A messaging app requires fast retrieval of the latest 100 messages in a conversation. How would you store it?

How do you design a many-to-many relationship between users and projects?

You want to track login history for millions of users. What table design would you use?

How do you ensure unique usernames are enforced across a system?

A client wants case-insensitive searches. How would you set up the schema?

You need to store JSON payloads but also query specific fields. What’s the best approach?

How do you version rows in a table to keep historical data while tracking the current state?