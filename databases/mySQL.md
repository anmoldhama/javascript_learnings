📘 1–10: Basic SQL & MySQL Fundamentals
1. What is MySQL and how is it different from SQL?
ans : it is a software to manage the relational databases and SQL is a structured query language.

2. What are the different data types supported by MySQL?
ans : CHAR, VARCHAR, TEXT, INT, BIGINT, DECIMAL, FLOAT, DATE, DATETIME, BOOLEAN, ENUM, JSON, etc.

3. How do you create a database in MySQL?
ans : create database name db_name;

4. How do you create a table in MySQL?
ans : create table name table_name;

5. What is the difference between CHAR and VARCHAR?
ans : CHAR is used for fixed-length strings — it always stores exactly the defined length by padding with spaces if needed.

VARCHAR is used for variable-length strings — it stores only the actual content and is more space-efficient for data with varying lengths.

6. How do you insert data into a MySQL table?
ans : 

7. How do you update records in a table?
ans :  update table table_name
       set column_name = ""
       where id = "1";

8. How do you delete records from a table?
ans : delete from table_name
      where id = "1";

9. What is the use of the SELECT statement?
ans : to get the data from the table

10. How do you fetch only unique records from a table?
ans : using group by

📚 11–20: Constraints and Keys
11. What is a primary key in MySQL?
ans : primary key is a unique identifier of a row in the table

12. What is the difference between primary key and unique key?
ans :
| Feature           | **Primary Key**                                    | **Unique Key**                                 |
| ----------------- | -------------------------------------------------- | ---------------------------------------------- |
| **Uniqueness**    | Must be **unique**                                 | Must be **unique**                             |
| **Nulls Allowed** | **Not allowed** to be null                         | **Allows** one or more `NULL` values           |
| **Default Index** | Automatically creates a **clustered index**        | Creates a **non-clustered index**              |
| **Per Table**     | Only **one** primary key per table                 | You can have **multiple unique keys**          |
| **Purpose**       | Identifies **each row uniquely** (main identifier) | Enforces **additional uniqueness constraints** |


13. What is a foreign key in MySQL?
ans : foreign key is a constraint in mysql which is refer to the primary key in another table

14. How does a foreign key enforce referential integrity?
ans : you can delete both the rows in both tables if you want to remove the data.

15. What is a NOT NULL constraint?
ans : It prevents the null data to be inserted in any column

16. What is a CHECK constraint and how is it used in MySQL?
ans : 
A CHECK constraint in MySQL ensures that values in a column meet a specific condition. If the condition is not satisfied, the insert or update is rejected.

17. What is the difference between DEFAULT and AUTO_INCREMENT?
ans : 
| Feature            | `DEFAULT`                             | `AUTO_INCREMENT`                                |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| Purpose            | Sets a **default value** for a column | Automatically generates **incremented numbers** |
| Use Case           | Optional fields with default values   | Usually used for primary keys or IDs            |
| Applies To         | Any data type                         | Integer types only                              |
| Can Be Overridden? | Yes, by explicitly specifying a value | Yes, but usually left empty                     |


18. Can a table have multiple foreign keys?
ans : yes a table have multiple foreign keys

19. Can a table have more than one primary key?
ans :  No

20. What is a composite primary key?
ans : 
A composite primary key is a primary key made up of two or more columns that together uniquely identify a row in the table. This is useful when no single column is unique by itself.

   21–30: Joins & Subqueries
21. What are the different types of joins in MySQL?
ans : Inner join, left join, right join, full outer join, cross join, self join.

22. Explain the difference between INNER JOIN and LEFT JOIN.
ans : Inner join gives only the matched data in both the tables

23. What is a CROSS JOIN?
ans : Cross join 

24. What is a SELF JOIN? Give an example.
ans : self join gives the data by seperating the columns in a single table.

25. How do you perform a JOIN across multiple tables?
ans : table a join table b and table c join table d and table e join table f on a.id = b.id and c.id = d.id and e.id = f.id

26. What is the performance impact of JOINs on large tables?
ans : we can search the data in more than one tables so it will take time and when we increase the joins so the query will take time

27. What are correlated subqueries?
ans : subqueries are the inner queries when we find any row inside a main query so we can use the sub query

28. How are subqueries different from JOINs?
ans : JOINs combine data from multiple tables into a single result set.
 Subqueries return a single value or result set used by the outer query.
JOINs are often faster than correlated subqueries.
Subqueries are easier to isolate logic but may be less performant.

29. What happens if a JOIN condition is omitted?
ans : If a JOIN condition is omitted, it results in a CROSS JOIN, returning the Cartesian product of both tables — which can lead to millions of rows and performance issues.

30. Can subqueries be used in the SELECT clause?
ans : yes 

⚙️ 31–40: Indexing & Performance
31. What is an index in MySQL?
ans : index is a seperate storage that provide the faster query result by directly referencing the row in main database.

32. How does indexing improve query performance?
ans : By storing the value with the address of the row from the main table inside an another space 
     and we query to the same column so it will directly referencing the address in the main table.

33. What are the types of indexes in MySQL?
ans : Primary Index (automatically created on primary key)
   Unique Index
   Composite (Multi-column) Index
   Full-Text Index
   Spatial Index (used for GIS data)
   Foreign Key Index (automatically created)

34. What is a composite index?
ans : This index is created on group of columns.

35. How do you create an index on multiple columns?
ans : CREATE INDEX idx_name ON table_name (col1, col2);

36. What are some scenarios where indexes should not be used?
ans : where you have the high right operations because when you update the data it should be update in the indexes and your right operation will be expensive.

37. How do you check if a query is using an index?
ans : EXPLAIN SELECT * FROM users WHERE email = 'a@example.com';

38. How can you view all indexes on a table?
ans : SHOW INDEX FROM table_name;

39. What is the difference between clustered and non-clustered indexes?
ans : 
| Feature           | Clustered Index (InnoDB default)          | Non-clustered Index                      |
| ----------------- | ----------------------------------------- | ---------------------------------------- |
| **Data Storage**  | Actual table rows **stored in index**     | Index contains **pointers** to data rows |
| **Table Support** | MySQL's InnoDB supports 1 clustered index | Multiple non-clustered indexes allowed   |
| **Speed**         | Faster for **range scans**                | Slower than clustered for large scans    |
| **Primary Key**   | Automatically becomes clustered index     | Other indexes are non-clustered          |


40. What is a full-text index?
ans : 
A full-text index allows efficient text searching within large text columns using natural language or boolean modes.

🔒 41–50: Transactions & Isolation Levels
41. What is a transaction in MySQL?
ans : transaction are the group of operations which are executed completely or none of them.

42. What are the properties of a transaction (ACID)?
ans : acid stands for Atomicity, Consistency, Isolation, Durability.

43. How do you start, commit, and rollback a transaction in MySQL?
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

44. What are the different isolation levels in MySQL?
ans :
READ UNCOMMITTED – Allows dirty reads (see uncommitted data).

READ COMMITTED – Only committed data can be read.

REPEATABLE READ (default) – Ensures repeated reads return the same result.

SERIALIZABLE – Highest level; locks rows to prevent others from modifying or inserting.

45. What is dirty read, non-repeatable read, and phantom read?
ans : Dirty Read: Occurs when a transaction reads data that has been modified by another transaction but not yet committed. If the other transaction rolls back, the read data becomes invalid.
     Non-Repeatable Read: Happens when a transaction reads the same row twice and gets different values because another transaction has modified and committed the data in between.
     Phantom Read: Occurs when a transaction reads a set of rows that satisfy a condition, and another transaction inserts or deletes rows that also satisfy the condition. On re-execution, the first transaction sees more or fewer rows (phantoms).

46. What is the default isolation level in MySQL?
ans : REPEATABLE READ
      It prevents dirty reads and non-repeatable reads, but not phantom reads.

47. How do you change the isolation level in a session?
ans : SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

48. What are savepoints in transactions?
ans : Savepoints are markers or checkpoints within a transaction.
They allow partial rollbacks to a specific point without rolling back the entire transaction.

49. Can you roll back to a savepoint?
ans : Yes, you can roll back to a savepoint using:
      ROLLBACK TO SAVEPOINT sp1;

50. What happens if a transaction is not committed?
ans : All changes made during the transaction are not persisted.
      When the session ends or the transaction is rolled back, all uncommitted changes are discarded.

🔁 51–60: Stored Procedures, Functions & Triggers
51. What is a stored procedure?
ans : A stored procedure is a set of SQL statements that are saved in the database and can be executed repeatedly. It is used to encapsulate logic that can be reused.

52. What is the difference between a stored procedure and a function?
ans : 
| Feature                | Stored Procedure              | Function                            |
| ---------------------- | ----------------------------- | ----------------------------------- |
| Return value           | May or may not return a value | Must return a single value          |
| Used in SQL statements | No                            | Yes (e.g., in SELECT)               |
| DML operations         | Allowed                       | Limited (should avoid side-effects) |
| Called with            | CALL command                  | Used directly in expressions        |
// need more understanding with example

53. How do you pass parameters to a stored procedure?
ans : 

CREATE PROCEDURE getUser(IN userId INT)
BEGIN
    SELECT * FROM users WHERE id = userId;
END;

54. Can a stored procedure return a value?
ans :
Yes, a stored procedure can return values using OUT or INOUT parameters, but it cannot return values like a function.

55. What are triggers in MySQL?
ans :
A trigger is a set of SQL statements that are automatically executed in response to certain events on a table, such as INSERT, UPDATE, or DELETE

56. What are BEFORE and AFTER triggers?
ans :
BEFORE Trigger: Executes before the actual operation on the table (e.g., before inserting a row).
AFTER Trigger: Executes after the actual operation is performed.

57. How can you prevent recursion in triggers?
ans :
Avoid making changes in the trigger that re-fire the same trigger.
Use flags or session variables to track trigger depth
Disable max_sp_recursion_depth for recursive stored procedures (but for triggers, design logic to avoid circular updates).

58. What is an event in MySQL?
ans :
A MySQL Event is a scheduled task (like a cron job) that runs SQL statements at specific intervals or once at a defined time.

59. How do you schedule a recurring task in MySQL?
ans :
Use the EVENT scheduler:

CREATE EVENT cleanup_event
ON SCHEDULE EVERY 1 DAY
DO
  DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;

60. What are the use cases for stored procedures?
ans :
Reusable business logic in the database.

Data validation before inserts/updates.

Complex operations involving multiple SQL statements.

Reducing network traffic by batching logic on the DB side.

Enforcing access control with logic encapsulation.

📈 61–70: Performance Tuning & Optimization
61. How do you optimize a slow query?
ans : implement indexing on the relevant fields
      use joins only if required
      use limit
      use sharding, replication and partitioning
      use filter correctly

62. What is the EXPLAIN keyword and how is it used?
ans : explain is used to get the information about the table like indexes,...etc

63. What is a query execution plan?
ans : 

64. What are the common causes of slow queries in MySQL?
ans : use of joins, subqueries
      not implemented indexes

65. How do you identify slow queries?
ans : Explain

66. What is the slow query log in MySQL?
ans : 

67. How do you profile a query?
ans : 

68. What is denormalization and when should it be used?
ans : denormalization is a technique in which the data is embedding into a single table.
     to optimize the performance

69. How do you optimize GROUP BY queries?
ans : 

70. How do you handle performance issues in large tables?
ans : using indexes
      denormalize the data

🧩 71–80: Real-World Scenarios & Practices
71. How do you design a schema for an e-commerce application?
ans : 
     table products :- id (PK), name, description, category_id (FK), price, stock_qty, seller_id (FK), created_at.
     table categories:- id (PK), name.
     table orders :- id (PK), customer_id (FK), total_amount, status (enum), order_date, shipping_address
     table order_items :- id (PK), order_id (FK), product_id (FK), quantity, price
     table customers :- id, name, email, password, created_at
     table sellers :- id, name, email, password, rating, created_at
     table transactions : id (PK), order_id (FK), payment_type (UPI/CARD/COD), payment_status, transaction_time

72. How do you prevent duplicate records in a signup system?
ans : By enforcing a unique constraint on fields like email or username at the database level, and also performing a check at the application level before inserting.

73. How do you store hierarchical data like categories and subcategories?
ans : using id, name, description, parent_exist(true,false), parent_id

74. How would you handle soft deletes in a MySQL database?
ans : by using the disabled : true flag

75. How do you audit data changes?
ans : By implementing audit tables and triggers that log every insert, update, or delete to a separate audit log with metadata like changed_by, changed_at, and action.

76. How do you ensure consistency when updating related tables?
ans : by using the transactions(set of operations)

77. How would you manage user roles and permissions in MySQL?
ans : by using the seperate table of roles and permissions and use the roles_id inside the user table as foreign key

78. How do you store and query JSON data in MySQL?
ans : SELECT JSON_EXTRACT(data, '$.field_name') FROM table;


79. How do you avoid race conditions in concurrent transactions?
ans :
Use proper transaction isolation levels (e.g., REPEATABLE READ or SERIALIZABLE).

Use row-level locks via SELECT ... FOR UPDATE.

Ensure atomic updates where needed (e.g., UPDATE SET value = value + 1).

80. How do you design a table to efficiently handle time-series data?
ans : 
Include a timestamp column (event_time).

Use partitioning by time (e.g., daily/monthly).

Use indexes on time columns.

Store data in append-only fashion.

Consider using compression and archival policies for older data.

🔄 81–90: Backup, Restore & Replication
81. How do you back up a MySQL database?
ans : 

82. What is mysqldump and how is it used?

83. How do you restore a backup in MySQL?

84. What is binary logging?

85. What is replication in MySQL?

86. What are the types of replication supported by MySQL?

87. What is GTID-based replication?

88. How do you set up master-slave replication?

89. What are common replication lag issues?

90. How do you monitor replication health?

🛠️ 91–100: Admin & Miscellaneous
91. How do you create and manage users in MySQL?

92. What are the privileges a MySQL user can have?

93. How do you reset a forgotten MySQL root password?

94. How do you change the default port of MySQL?

95. What is the InnoDB storage engine?

96. Compare InnoDB and MyISAM.

97. What is a temporary table and when should it be used?

98. What is the purpose of the INFORMATION_SCHEMA database?

99. How do you handle case-insensitive searches in MySQL?

100. What is the difference between DELETE, TRUNCATE, and DROP?


# Scenario based questions


🔍 1–10: Data Retrieval & Querying
101. You need to fetch the top 5 highest-paid employees in each department. How would you write this query?
WITH ranked_employees AS (
    SELECT 
        employee_id,
        name,
        salary,
        department,
        ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
    FROM employees
)
SELECT *
FROM ranked_employees
WHERE rn <= 5;

102. How would you find all customers who placed orders in the last 30 days but didn’t order anything in the last 7 days?
ans : SELECT DISTINCT c.*
FROM customers c
WHERE c.id IN (
    SELECT o.customer_id
    FROM orders o
    WHERE o.order_date >= CURDATE() - INTERVAL 30 DAY
)
AND c.id NOT IN (
    SELECT o.customer_id
    FROM orders o
    WHERE o.order_date >= CURDATE() - INTERVAL 7 DAY
);


103. A column stores date as VARCHAR. How would you convert it to a proper DATE type and fix malformed entries?
ans : 

104. Write a query to get duplicate email addresses from a user table.

105. A customer table has null values in the phone_number column. How would you count how many users have not provided a phone number?

106. Fetch the second highest salary from the employee table without using LIMIT.

107. You have a normalized schema. How would you write a query to display product name, category name, and supplier name from three related tables?

108. You want to group sales by week, starting on Monday. How would you do it?

109. What’s the most efficient way to search for users whose names start with "Jo" and end with "n"?

110. You need to calculate a running total of daily sales. How would you write this?

🔄 11–20: Data Manipulation
111. How would you update all inactive users who haven’t logged in for a year?

112. You need to increase the price of all products in the "Electronics" category by 15%. How?

113. How would you merge two tables with a similar schema but without duplicates?

114. How do you replace all instances of "Ltd." with "Limited" in a company name column?

115. You need to delete duplicate records from a table but keep the one with the lowest ID. How?

116. A product table contains a column stock_level. If stock_level < 0, set it to 0. Write a query.

117. How do you archive all orders older than 2 years to a different table and delete from the original?

118. You’re given a list of emails. How do you batch update user statuses for only those emails?

119. You need to insert records into a table only if they don’t already exist. How?

120. How would you swap values of two columns for all rows?

⚙️ 21–30: Indexing & Performance
121. A query on a 10M row table takes 30 seconds. How would you troubleshoot and improve performance?

122. How would you create an index that improves search performance on first and last name combinations?

123. You find that a query uses FULL TABLE SCAN. How do you change it to use an index?

124. You want to improve performance of a table used in reporting that doesn’t change often. What would you do?

125. You have multiple queries using ORDER BY created_at DESC LIMIT 10. How would you index to optimize them?

126. How can you determine which queries are slowing down the system?

127. You notice frequent locking in a highly concurrent system. How would you resolve it?

128. A dashboard query slows down as data grows. How would you restructure the database or query?

129. A compound index exists on (a, b). Why might a query on only b not use it?

130. A table is frequently written to and queried. How do you balance read and write performance?

🔐 31–40: Transactions & Concurrency
131. A user adds items to cart, but the inventory is being updated by another transaction. How do you prevent race conditions?

132. How would you ensure that bank transfers (debit & credit) are processed atomically?

133. You need to ensure that a report runs on consistent data even if others are updating the database. What would you use?

134. How do you prevent dirty reads in a system where consistency is critical?

135. In a transaction, you insert data and then want to discard all changes if an error occurs. How?

136. Two users are updating the same row at the same time. How do you avoid lost updates?

137. How can you use SELECT ... FOR UPDATE and why would you use it?

138. A process sometimes fails mid-update. How do you ensure partial updates don’t corrupt data?

139. How would you implement optimistic locking in MySQL?

140. How do you simulate and test concurrent transaction scenarios?

📦 41–50: Schema Design & Real-World Use Cases
141. How would you design a schema to store comments with replies (nested structure)?

142. You need to store product variants (size, color). How do you model it relationally?

143. How do you track changes (audit log) to specific fields in a table?

144. A messaging app requires fast retrieval of the latest 100 messages in a conversation. How would you store it?

145. How do you design a many-to-many relationship between users and projects?

146. You want to track login history for millions of users. What table design would you use?

147. How do you ensure unique usernames are enforced across a system?

148. A client wants case-insensitive searches. How would you set up the schema?

149. You need to store JSON payloads but also query specific fields. What’s the best approach?

150. How do you version rows in a table to keep historical data while tracking the current state?



# Queries

Write a query to fetch the second highest salary from an employees table.

select * from employees order by salary desc offset 1 limit 1;

Write a query to find duplicate records in a table.
ans : 
  select * from employee group by name, department having count(*) > 1;

Write a query to fetch the nth highest salary from an employees table.
ans : 
  select * from employees order by salary desc offset nth - 1 limit 1;

Write a query to fetch employee names starting with "A".
ans : 
  select * from employee where name like 'A%';

Write a query to get the total salary per department.
ans : 
  select sum(salary) from employee group by department; 

Write a query to find employees who have not been assigned to any department (using JOIN).
ans :
  select * from employee e left join department d on e.id = d.id
  where d.id is null;  

Write a query to fetch common records from two tables (like INTERSECT).
ans :
  select 

Write a query to get the highest salary in each department.
ans : 
  select department, MAX(salary) from employee group by department;

Write a query to fetch employees who earn more than the average salary.
ans :
  select * from employees where salary > (select avg(salary) from employee);

Write a query to find the 3rd maximum salary without using TOP or LIMIT.
ans :
  select distinct salary from employee e1
   where 2 = (
      select count(distinct salary)
  from employee e2 where e2.salary > e1.salary);

Write a query to get the list of departments with more than 5 employees.
ans : 
  select department, count(*) as employee_count from empoyees group by departments 
  having count(*) > 5;

Write a query to fetch the latest 5 orders from an orders table.
ans : select * from orders order by creation_date desc limit 5;

Write a query to calculate the running total (cumulative sum) of employee salaries.
ans : 
  select name,salary,sum(salary) over (order by id) as running_sum from employees;

Write a query to swap values of two columns in a table without using a temp column.
ans :
  UPDATE employees
SET columnA = columnA + columnB,
    columnB = columnA - columnB,
    columnA = columnA - columnB;

Write a query to fetch the employee details with the highest salary in their department (use ROW_NUMBER() or RANK()).
ans : 

Write a query to fetch all employees whose joining date is in the last 30 days.
ans : 
  select * from employees where joinin_date >= current_date - interval 30 days;

Write a query to fetch employees who have the same salary.
ans : 
  select * from employees where salary in (select salary from employees group by salary having count(*) > 1);

Write a query to find the second youngest employee from a table.
ans : 
SELECT name 
FROM employee 
ORDER BY age ASC 
LIMIT 1 OFFSET 1;

Write a query to transpose rows into columns (pivot).
ans : 


Write a query to find the percentage of employees in each department compared to the total employees.