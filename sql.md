Basic SQL (1–20)
Q.1) What is SQL and what are its main types of statements?
ans : SQL (Structured Query Language) is used to manage and manipulate relational databases. Its main types of statements are:

DDL (Data Definition Language): CREATE, ALTER, DROP

DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE

DCL (Data Control Language): GRANT, REVOKE

TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT

Q.2)Difference between WHERE and HAVING clauses?
ans : WHERE filters rows before grouping.

HAVING filters groups after aggregation (used with GROUP BY).

 Using WHERE
Suppose you want to only consider rows where category = 'mobile', and then calculate the total sales amount:

SELECT category, SUM(amount) AS total_sales
FROM sales
WHERE category = 'mobile'
GROUP BY category;
🟢 Explanation:

WHERE filters rows before the grouping.

Only rows with category = 'mobile' are included in the SUM().

✅ Result:

category	total_sales
mobile	550

✅ Using HAVING
Suppose you want to calculate the total sales per category and then only show those categories where total_sales > 400:

SELECT category, SUM(amount) AS total_sales
FROM sales
GROUP BY category
HAVING SUM(amount) > 400;
🟢 Explanation:

All rows are included first.

GROUP BY groups by category.

HAVING filters the grouped results by the aggregated SUM(amount).

Q.3)What are PRIMARY KEY and FOREIGN KEY?
ans : PRIMARY KEY uniquely identifies each row in a table. It cannot be NULL and must be unique.

FOREIGN KEY is a field in one table that refers to the PRIMARY KEY in another table, enforcing referential integrity.

Q.4)Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?
ans : INNER JOIN: Returns matching rows from both tables.

LEFT JOIN: Returns all rows from the left table and matched rows from the right.

RIGHT JOIN: Returns all rows from the right table and matched rows from the left.

FULL JOIN: Returns all rows when there is a match in either left or right table and placed null for no match.

Q.5)What is a NULL value in SQL and how is it handled in conditions?
ans : NULL represents missing or unknown data. Use IS NULL or IS NOT NULL to filter them — you cannot use = NULL.

Q.6)How do you fetch unique records from a table?
ans: you can use the distinct keyword.
SELECT DISTINCT column_name FROM table_name;

Q.7)What is the difference between DISTINCT and GROUP BY?
ans : DISTINCT removes duplicate rows from the result set.
     GROUP BY groups rows sharing the same value and is often used with aggregate functions.

Q.8)What does ORDER BY do? Can you sort by multiple columns?
ans : order by arrange the records in a ascending or descending orders yes you can sort by multiple columns.
ORDER BY column1 ASC, column2 DESC;

Q.9)What are aggregate functions? List a few?
ans : Aggregate functions perform calculations on multiple rows:

COUNT(), SUM(), AVG(), MAX(), MIN().

Q.10)How do you limit the number of rows returned by a query?
ans : you can use the keyword limit.
SELECT * FROM table_name LIMIT 10;


Q.11)What is the use of BETWEEN, IN, LIKE?
ans : between is used to give the range to the query.
      IN: Matches any value in a list.
      LIKE: Performs pattern matching with % and _.

Q.12)What does IS NULL and IS NOT NULL do?
ans : They check for the presence (IS NOT NULL) or absence (IS NULL) of a value.

Q.13)What is the difference between DELETE, TRUNCATE, and DROP?
ans : delete is used to remove the rows according to the condition.can be rolled back.
      truncate Deletes all rows without logging each row; cannot be rolled back.
      drop Deletes the entire table and its structure.

Q.14)Explain the difference between CHAR, VARCHAR, and TEXT?
ans : CHAR(n): Fixed-length string of n characters.

VARCHAR(n): Variable-length string up to n characters.

TEXT: Used for large text data (no length limit in many RDBMSs).

Q.15)What is a subquery? Give an example ?
ans : A subquery is a query nested inside another SQL query.
     SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);

Q.16)How do you update data in a SQL table?
ans : update table name
      set columnname = ""
      where columnname = ""

Q.17)How do you insert multiple rows in one SQL statement?
ans : INSERT INTO table_name (col1, col2) 
VALUES (val1, val2), (val3, val4), (val5, val6);

Q.18)What is a CASE statement in SQL?
ans : CASE is used to add conditional logic in queries.
      SELECT name,
  CASE 
    WHEN salary > 50000 THEN 'High'
    ELSE 'Low'
  END AS salary_level
FROM employees;

Q.19)What is a DEFAULT constraint?
ans : It sets a default value for a column when no value is specified during insert.

Q.20)What is the difference between UNION and UNION ALL?
ans : UNION: Combines result sets and removes duplicates.

UNION ALL: Combines result sets including duplicates.

🟡 Intermediate SQL (21–50)
Q.21)What are indexes? How do they improve performance?
ans : indexes are stored the references of the frequently accessed data inside a seperate space
     and whenever we query for that data the indexes are helped to directly goes to that address and fetch the data.

Q.22)How do composite indexes work?
ans : They works like to store more than one columns for indexing.

Q.23)What is a clustered vs non-clustered index?
ans : 

Q.24)What is normalization? Explain 1NF, 2NF, 3NF.
ans : normalizaton is technique of seperation of data in more than one table.

Q.25)What is denormalization and when would you use it?
ans : 

Q.26)What is the difference between EXISTS and IN?

Q.27)How does a LEFT JOIN behave with NULLs?

Q.28)How do GROUP BY and aggregate functions work together?

Q.29)What are window functions? List common ones.

Q.30)Explain ROW_NUMBER(), RANK(), and DENSE_RANK().

Q.31)What is a CTE (Common Table Expression)?

Q.32)How do recursive CTEs work?

Q.33)What is the purpose of WITH clause in SQL?

Q.34)What is a VIEW and how does it differ from a table?

Q.35)Can a view be updated? When and when not?

Q.36)How do you detect and remove duplicate rows?

Q.37)Explain MERGE statement.

Q.38)What is a stored procedure? How is it different from a function?

Q.39)How do you handle errors in stored procedures?

Q.40)What is a trigger? When should it be used or avoided?

Q.41)How do transactions work in SQL?

Q.42)What are ACID properties?

Q.43)What is a deadlock and how can you prevent it?

Q.44)Explain optimistic vs pessimistic locking.

Q.45)What are isolation levels? Name and explain each.

Q.46)What is the default isolation level in MySQL/PostgreSQL?

Q.47)What does ROLLBACK and COMMIT do?

Q.48)What is the difference between REPLACE INTO and INSERT ON DUPLICATE KEY?

Q.49)What are materialized views?

Q.50)What is a CHECK constraint?

🔴 Advanced SQL (51–100)
Joins & Set Operations:
51. What is a self join? When would you use it?
52. Can you join more than two tables in a single query?
53. How do NATURAL JOINs work?
54. What is a CROSS JOIN? When is it useful?
55. Difference between INNER JOIN and CROSS JOIN?

Query Optimization:
56. How does the SQL optimizer work?
57. What is an execution plan and how do you read it?
58. How do you reduce query latency?
59. When should you use indexing and when should you avoid it?
60. What is index selectivity?

Performance Tuning:
61. How do you detect slow queries?
62. What is query caching?
63. How do partitions improve performance?
64. Difference between vertical and horizontal partitioning?
65. How to write an efficient pagination query?

Window Functions:
66. What is NTILE() in SQL?
67. Explain LAG() and LEAD().
68. How do you calculate a moving average in SQL?
69. What does PARTITION BY do?
70. How to get the cumulative sum over rows?

Data Modeling & Design:
71. What is surrogate key vs natural key?
72. How do you design many-to-many relationships?
73. What is a junction table?
74. How to implement soft deletes in a schema?
75. What is schema evolution?

Procedures & Functions:
76. Difference between scalar and table-valued functions?
77. What is a temporary table? How is it different from a derived table?
78. What is the difference between DECLARE and SET?
79. How do you return multiple values from a stored procedure?
80. How to execute dynamic SQL?

Advanced Operations:
81. What is a pivot/unpivot query?
82. How to transpose rows into columns?
83. What is JSON data type in SQL and how do you query it?
84. How do you store hierarchical data in SQL?
85. What is the adjacency list model vs nested sets?

Database Internals:
86. What is the difference between logical and physical reads?
87. What is a transaction log?
88. How are B-trees used in indexing?
89. Explain page-level and row-level locking.
90. How is memory managed in SQL databases?

Security & Best Practices:
91. What is SQL injection and how do you prevent it?
92. How do roles and permissions work in SQL?
93. How can you audit SQL queries?
94. What is GRANT, REVOKE, and DENY?
95. How to securely manage sensitive data (e.g., passwords)?

Miscellaneous:
96. What is a surrogate key and when should you use it?
97. Difference between OLTP and OLAP systems?
98. What’s the difference between MySQL, PostgreSQL, and SQL Server?
99. How do you perform full-text search in SQL?
100. What are your strategies for database versioning and migration?





🟢 Basic SQL Query Questions
Write a query to select all columns from a table.

Write a query to fetch only distinct values from a column.

How do you rename a column in a query result?

Write a query to sort data by two columns.

How do you filter records using the WHERE clause?

What is the difference between = and LIKE in SQL?

How do you write a query with IN and NOT IN?

Write a query to count total rows in a table.

How do you write a CASE WHEN statement?

How do you select top N rows in SQL?

🟡 Intermediate SQL Query Questions
Write a query to find the second highest salary.

Write a query to find duplicate rows based on a column.

How do you remove duplicates using SQL?

Write a query to fetch rows where a column is NULL.

How do you update a record conditionally?

How do you delete rows in bulk based on a condition?

Write a query to fetch the number of orders placed per customer.

Write a query to count orders per day.

How do you write a nested SELECT?

Write a query to get the maximum value from a group.

🧩 Join-related Query Questions
Difference between INNER JOIN and LEFT JOIN.

Write a query to get customer details with their order count.

Write a query with multiple joins (3+ tables).

How do you handle missing values in joins?

What is a FULL OUTER JOIN? Give an example.

Write a query to fetch customers who haven’t placed any order.

What is a CROSS JOIN? Write an example.

What happens when you join on non-indexed columns?

How do you join two tables on multiple columns?

How to filter data after a join?

🧮 Aggregate Function Queries
Write a query using SUM, AVG, COUNT.

How do you find the highest average salary by department?

Write a query to group data by multiple columns.

How do you use HAVING with aggregates?

Difference between WHERE and HAVING.

Write a query to calculate total revenue per product category.

How do you get percentage contribution of each value to the total?

How to show zero values for groups with no data?

Write a query to get the running total of sales.

What is the difference between COUNT(*) and COUNT(column)?

🌀 Subqueries & CTEs
Write a query using a correlated subquery.

How do you use a subquery in SELECT?

What’s the difference between a subquery and a JOIN?

Write a query with a subquery in FROM.

How to use a subquery to filter rows in WHERE?

Write a CTE to calculate running averages.

How do you use a recursive CTE?

What’s the difference between WITH and subquery?

How can CTEs improve query readability?

Write a query using multiple CTEs.

🧠 Window Functions
Write a query using ROW_NUMBER().

How to get the latest record per group using RANK()?

Difference between RANK(), DENSE_RANK(), and ROW_NUMBER().

Use LEAD() and LAG() to compare rows.

Write a query to get a moving average over 3 days.

How do you partition data in a window function?

What’s the difference between PARTITION BY and GROUP BY?

Write a query to calculate cumulative sales per user.

How do you use NTILE() in windowing?

Can you use ORDER BY inside window functions?

🧱 Table Design & Normalization
What is 1NF, 2NF, 3NF? Give table examples.

How do you normalize a table with repeating groups?

Explain denormalization and when it’s useful.

What is a surrogate key and when to use it?

Write SQL to decompose a table violating 2NF.

Write SQL to create a normalized schema for users and orders.

What’s the problem with storing comma-separated values?

How do foreign keys help in normalization?

Explain Boyce-Codd Normal Form (BCNF) with example.

How does normalization affect performance?

🔐 Indexing, Locking & Transactions
How do indexes affect query performance?

Write a query that would benefit from a composite index.

What is the difference between clustered and non-clustered indexes?

How do you inspect which indexes a table has?

What are dirty reads, phantom reads, and non-repeatable reads?

How does SELECT ... FOR UPDATE work?

How do you prevent race conditions in transactions?

What are optimistic vs pessimistic locking?

Explain isolation levels with query examples.

Write a transaction using BEGIN, COMMIT, ROLLBACK.

🔍 Query Optimization
How do you check a query’s execution plan?

What are common causes of slow queries?

How does indexing a foreign key affect performance?

What is a covering index?

How can you reduce disk I/O in large joins?

Explain how to avoid N+1 query problems.

How does query caching work?

Why should you avoid SELECT * in production?

What is the impact of using functions in WHERE clauses?

Write an optimized version of a poorly written query.

🧾 Advanced SQL Topics
Write a pivot query using CASE WHEN.

How to dynamically generate SQL statements?

How do you handle hierarchical data in SQL?

Write a query to flatten JSON data stored in a column.

How to handle timezone-aware timestamps in queries?

Explain materialized views and use case.

Write SQL to audit changes on a table.

What is a temporary table and how to use it?

Explain sharding and partitioning in SQL databases.

What are common SQL anti-patterns to avoid?