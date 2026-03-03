# Intro to Relational DB

![](https://i.imgur.com/3p19Uum.jpg)

# Intro to Relational Databases and SQL

## Learning Objectives

Students will be able to:

- Describe the use case of databases
- Describe the anatomy of a relational database
- Describe the use case of SQL
- Use the  Interactive Terminal
- Use SQL to create a database and a table
- Use SQL to perform CRUD data operations
- Use a SQL  REFERENCE clause to combine data from multiple tables

## 1. Intro to SQL/Relational Databases

### What is a Database?

The vast majority of applications manipulate and display data.

Early on, our programs held data in "memory" using data structures such as arrays and objects.  However, when the app was exited, any changes to the data were lost - databases avoid this...

Simply put, **a database provides permanent storage for data**.

### Different Types of Databases

[This site](https://db-engines.com/en/ranking) ranks databases according to their popularity.

As you can see, there are several different types of databases and several "brands" within each type.

Most database technologies can be broken down into two main categories:

- Relational databases
- NoSQL databases

Relational databases are by far the most popular type of database technology. Conceived by [E.F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd) while working for IBM back in 1970.

In SEI, we'll be using [PostgreSQL](https://www.postgresql.org/)  since it's arguably the best open-source relational database management system (RDBMS) available.

## 2. Anatomy of a Relational Database

### Schema

The structure of a particular database is defined by its **schema**.

Schemas define the database's:

- Tables, including the number and data type of each column
- Indexes for efficient access of data
- Constraints (rules, such as whether a field can be null or not)

### Tables

The primary container for data in a relational database is a **table**:

![](https://i.imgur.com/uL3fvU4.png)

As you can see, database tables look a lot like a spreadsheet since they consist of columns and rows. A single table in a relational database holds data for a particular *data resource*, for example, **customers**, **orders**, **reviews**, etc.

TABLE: **artists**

| id (PK) | name | nationality |
| --- | --- | --- |
| 1 | Prince | American |
| 2 | Sir Elton John | British |

TABLE: **songs**

| id (PK) | name | year_released | artist_id (FK) |
| --- | --- | --- | --- |
| 1 | Tiny Dancer | 1971 | 2 |
| 2 | Little Red Corvette | 1982 | 1 |
| 3 | Raspberry Beret | 1985 | 1 |
| 4 | Your Song | 1970 | 2 |

### Rows (Records)

A row in a table represents a single instance of the data entity.

For example a particular **artist** in the **artists** table.

### Columns (Fields)

The columns of a table have a:

- Name
- Data type (all data in a column must be of the same type)
- Optional constraints

The typical naming convention is usually snake_cased and singular.

PostgreSQL has [many data types](https://www.postgresql.org/docs/11/datatype.html) for columns, but common ones include:

- `integer`
- `decimal`
- `varchar` (variable-length strings)
- `text` (same as `varchar`)
- `date` (does not include time)
- `timestamp` (both date and time)
- `boolean`

Common constraints for a column include:

- `PRIMARY KEY`: column, or group of columns, uniquely identify a row
- `REFERENCES` (Foreign Key): value in column must match the primary key in another table
- `NOT NULL`: column must have a value, it cannot be empty (null)
- `UNIQUE`: data in this column must be unique among all rows in the table

### Primary Keys (PK) and Foreign Keys (FK)

The field (or fields) that uniquely identify each row in table are know known as that table's **primary key (PK)**.

Since only one type of data entity can be held in a single table, related data, for example, the **songs** for an **artist**, are stored in separate tables and "linked" via what is known as a **foreign key (FK)**.  Note that foreign key fields hold the value of its related parent's PK.

### ❓ Database Review Questions (1 min)

- (1) A __________ defines the structure of a particular database.
    
    schema
    
- (2) A table in a database consists of __________ and __________.
    
    **rows** and **columns**
    
- (3) A __________ key uniquely identifies a row within a table
    
    **primary** key
    
- (4) A __________ key references the primary key of a related table.
    
    **foreign** key
    

## 3. Structured Query Language (SQL)

### What is SQL?

**SQL (Structured Query Language)**, also pronounced "sequel", is a programming language used to CRUD data stored in a relational database.

SQL syntax is similar to the English language.

Although SQL is fairly standard, it can vary from depending on the particular RDBMS (Relational Database Management System). For example, the *SQLite* RDBMS implements fewer SQL commands than that of *PostgreSQL*.

### The `psql` Interactive Terminal

There are [several GUI tools available](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) for working with PostgreSQL, however, in SEI we won't need one because we'll be primarily accessing the database using code (Python/Django) and we'll be using Terminal today to learn a touch of SQL commands instead of using a GUI.

`psql` is a tool that runs in terminal and allows us to work with PostgreSQL databases by typing in commands. It was installed with PostgreSQL.

Open a terminal session and type: `psql`.

You'll see your PostgreSQL version and psql's prompt:

```bash
$ psql
psql (14.X)
Type "help" for help.

postgres=#

```

Here are some useful commands (note the use of a **backslash**):

```sql
help -- general help
\?   -- help with psql commands
\h   -- help with SQL commands
\l   -- Lists all databases
\c   -- Connect to a database
\d   -- List tables in database
\q   -- exits psql
q    -- exits a psql list or dialogue

```

## Creating a Database and a Table

Let's create a database named `music` and a `bands` table:

```sql
CREATE DATABASE music; -- Don't forget the semicolon!

\l -- What changed?

\c music -- Connect to the music database

\d -- Lists all tables

-- Define a table's schema
CREATE TABLE bands (
  id serial PRIMARY KEY,  -- serial is auto-incrementing integer
  name varchar NOT NULL,
  genre varchar
);

\d -- There should now be a bands table

```

The backslash commands, e.g. `\d`, are psql commands.

The `CREATE DATABASE` and `CREATE TABLE` are SQL commands.

## Basic Querying and Inserting Data

Now let's write some more SQL to query (`SELECT`) and create data (`INSERT INTO`):

```sql
SELECT * FROM bands; -- The * represents all fields

-- For text, use single quotes, not double
INSERT INTO bands (name) VALUES ('The Smiths');

INSERT INTO bands (name, genre) VALUES ('Rush', 'prog rock');

SELECT * FROM bands; -- Use the up arrow to access previous commands

```

> 👀 Comments in SQL begin with --
> 

Because the `id` column is defined as `serial`, the database automatically assigns the next available integer.

**Note:**  

When inserting or querying `varchar` or `text` data  you will need to use single quotes ( ’ your text ‘ ) because double quotes  (”some text”) are reserved for identifying column names in PSQL. 

If your text contains apostrophes (example: `’Jim’s Friend Ben’`)you can escape the character with a second quote:  `'Jim''s Friend Ben'`

## 4. Defining Data Associations (SQL)

## Creating a Table for a Related Data Entity

Let's say we have the following data relationship:  `Band --< Musician`

*A Band has many Musicians*, and *a Musician belongs to a Band*

Whenever you have a one:many relationship like above, the rows in the table for the many-side must include a column that references which row in the table on the one-side it *belongs to*.

This column is known as a **foreign key (FK)** and it must be of the same data type as the primary key in the related/parent table (typically an **integer**).

Now let's define the `musicians` table:

```sql
-- REFERENCES creates a FK constraint
CREATE TABLE musicians (
  id serial PRIMARY KEY,
  name varchar NOT NULL,
  quote text,
  band_id integer NOT NULL REFERENCES bands (id)
);

\d musicians -- details for table

```

The `REFERENCES` constraint is what makes a column a FK.

Now let's attempt to add a musician with a bogus foreign key:

```sql
INSERT INTO musicians (name, band_id) VALUES ('Geddy Lee', 999);
--- The above command will fail because there's no matching PK in the bands table

-- Let's try again, but first, let's verify the ids of the bands
SELECT * FROM bands;

-- Assuming 'Rush' has an id of 2
INSERT INTO musicians (name, band_id) VALUES ('Geddy Lee', 2);

SELECT * FROM musicians;  -- There's Geddy!

-- Now let's add Neil
-- Use two single quotes to embed an apostrophe
INSERT INTO musicians (name, quote, band_id)
VALUES (
'Neil Peart',
'If you''ve got a problem, take it out on a drum',
2);

```

> 👀 It's possible to insert multiple rows by providing comma separated value lists: ...VALUES ('Geddy Lee', 2), ('Neil Peart', 2);
> 

## Querying Data using a `JOIN` Clause

The `JOIN` clause is used with a `SELECT` to query for data from more than one table.

Let's query for all of the bands with their musicians:

```sql
-- table right of JOIN has the FKs
SELECT * FROM bands JOIN musicians ON bands.id = musicians.band_id;
```

Note that no records are returned for bands without any musicians. This is called an **INNER JOIN**, which is the default.

There are several types of [joins](http://www.postgresqltutorial.com/postgresql-joins/).

If we want to return all bands, regardless of whether or not there's any matches for musicians, we use whats called a `LEFT JOIN`:

```sql
-- Using aliases for the table names
SELECT *
FROM bands b
LEFT JOIN musicians m ON b.id = m.band_id;
```

### Querying Data using a `WHERE` Clause

The [WHERE clause](http://www.postgresqltutorial.com/postgresql-where/) allows selecting records that meet a condition or conditions:

```sql
SELECT *
FROM bands b
LEFT JOIN musicians m ON b.id = m.band_id
WHERE b.name = 'Rush' AND m.name LIKE 'G%';
```

The `LIKE` operator uses:

- `%` to match any number of characters (wildcard)
- `_` to match any single character

## 5. Modifying Data in a Table

### Updating Data

Time to give Geddy a quote by using the SQL `UPDATE` command:

```sql
UPDATE musicians
SET quote = 'I love to write, it''s my first love.'
WHERE name = 'Geddy Lee';
```

### Deleting Data

Be careful with this command because if you don't use a `WHERE` clause, you can accidentally delete all of the data from a table:

```sql
SELECT * FROM bands;

DELETE FROM bands WHERE name LIKE '%Smiths';

SELECT * FROM bands;

```

## 6. Intermediate SQL Operations

### Order of SQL Clauses

![](Intro%20to%20Relational%20DB/SQLClauses.png)

### Alter Table Command

```sql
ALTER TABLE musicians
ADD COLUMN age INTEGER;

ALTER TABLE musicians
ALTER COLUMN age SET NOT NULL;

ALTER TABLE musicians
ALTER COLUMN name SET DEFAULT 'unknown';

```

### Seeding Database

You may have some need when preparing your development environment to pre-populate your data tables and pre-format your associations. PSQL allows you to write and store instructions in `sql` files. To seed your database run the this command from your terminal: `psql -f <path/name>.sql`

- Example
    
    ```sql
    DROP DATABASE IF EXISTS music;
    
    CREATE DATABASE music;
    
    \c music
    
    CREATE TABLE bands (
        id serial PRIMARY KEY, -- serial is auto-incrementing integer
        name varchar NOT NULL,
        genre varchar
    );
    
    INSERT INTO
        bands (name, genre)
    VALUES
        ('Rush', 'prog-rock'), -- 1
        ('The Smiths', 'new wave'), -- 2
        ('M83', 'alternative/indie'), -- 3
        ('Sam Smith', 'dance/pop'), -- 4
        ('Majid Jordan', 'R&B'), -- 5
        ('Jason Derulo', 'R&B/hip-hop'), -- 6 
        ('JAY-Z', 'hip-hop/rap'), -- 7
        ('Dua Lipa', 'pop/dance'), -- 8
        ('Daft Punk', 'dance'), -- 9
        ('Kendrick Lamar', 'hip-hop/rap'); --10;
    
    CREATE TABLE musicians (
        id serial PRIMARY KEY,
        name varchar NOT NULL,
        quote text,
        age INTEGER,
        band_id integer NOT NULL REFERENCES bands (id)
    );
    
    INSERT INTO
        musicians (name, quote, band_id, age)
    VALUES
        ('Geddy Lee', 'I love to write, it''s my first love.', 1, 71),
        ('Neil Peart', 'If you''ve got a problem, take it out on a drum', 1, 67),
        ('Jeff Jones', NULL, 1, 69),
        ('Anthony Gonzalez', NULL, 3, 43),
        ('Shawn Corey Carter', 'Excellence is being able to perform at a high level over and over again.', 7, 53),
        ('Thomas Bangalter', NULL, 9, 48),
        ('Guy-Manuel de Homem-Christo', NULL, 9, 49),
        ('Kendrick Lamar', 'Look at me, I''m a loser, I''m a winner, I''m good, I''m bad. I''m a sinner, I''m a killer. What I''m doing, I''m saying that I''m human.', 10, 35),
        ('Jason Derulo', 'Hello Friday, I''ve been waiting for you.', 6, 33),
        ('Sam Smith', 'Talking about my deepest and darkest secrets to the world makes me feel better. It''s cathartic.', 4, 30);
    ```
    

### Query Options

It's great that we can select all records from a table but we frequently want to limit the results to a smaller set that meets some set of criteria. We saw the WHERE clause in the introduction to SQL lesson and saw how it can help us retrieve specific data. Here are a few more ways we can get more exclusive with our queries.

Remember that in SQL, our comparison operators are a little different. Equality is a single equals `=` and inequality is represented by a "greater-than-or-less-than" symbol `<>`.

```sql
- LIKE - SELECT * FROM bands WHERE name LIKE 'The%'; 
- % - SELECT * FROM musicians WHERE name ILIKE '%USH%';

- AND - SELECT * from musicians WHERE name = 'Getty' AND age > 25;
- OR - SELECT * from musicians WHERE name LIKE = 'Neal%' OR name = '%Lee';
- IN - SELECT * FROM musicians WHERE name IN ('Sam Smith', 'Thomas');
- NOT IN - SELECT * FROM musicians WHERE name NOT IN ('The Beatles', 'Nickleback');

- DISTINCT - SELECT DISTINCT name FROM musicians; 
- ORDER BY - SELECT * FROM musicians ORDER BY name DESC;

- COUNT - SELECT count(*) FROM bands; -- how many rows are in a table
- COUNT - SELECT count(age) FROM bands; -- how many rows have NON-NULL values

-- assuming you have an age column in musicians table 
- MAX - SELECT max(age) FROM musicians;
- MIN - SELECT min(age) FROM musicians;

- LIMIT - SELECT * FROM bands LIMIT 2;
- OFFSET - SELECT * FROM musicians OFFSET 1;
- LIMIT + OFFSET - SELECT * FROM musicians LIMIT 2 OFFSET 1;

```

### COUNT()

`COUNT()` is an *aggregate function*.

"In database management an aggregate function is a function where the values of multiple rows are grouped together to form a single value of more significant meaning or measurement such as a set, a bag or a list." [Read more on wikipedia.](https://en.wikipedia.org/wiki/Aggregate_function)

We use an aggregate function to get the total count of customers in a table.

```sql
SELECT COUNT(*)
FROM musicians;
```

What about getting the count of something more specific in musicians, such as the number of rows that have the name datapoint?

```
SELECT COUNT(age)
FROM musicians;
```

## GROUP BY

GROUP BY is used to pull together identical data points. For example, say we just want to see the different ages we have in our customer table, without having to look through the duplicates too.

```sql
SELECT age
FROM musicians
GROUP BY age;
```

What if we just want to know how many different ages we have? We can combine GROUP BY and COUNT():

```sql
SELECT age, COUNT(age)
FROM musicians
GROUP BY age;
```

### Aliases

Aliases are a piece of a SQL query that allows you to temporarily rename a table or column for the current query.

```sql
SELECT band_id, avg(age) AS avgAge
FROM musicians
GROUP BY band_id;
```

### Nested queries

What if I want to get names of customers with the highest salary.

Let's try it using WHERE

```sql
SELECT name, age
FROM musicians
WHERE age = MAX(age);
```

That will give us an error, because MAX is an aggregate function and can't be used in WHERE.

This will return the maximum rating, which we need to feed into WHERE.

```sql
SELECT name, age
FROM musicians
WHERE age = (
    SELECT MAX(age)
    FROM musicians
);
```

## 7. SQL - Summary

As much fun as it is to write SQL, most developers don't have many opportunities to do so because they typically software known as an *Object Relational Mapper (ORM)* to automatically write SQL and communicate with the database server.

Regardless, understanding enough SQL to put it on your resume is what's important!

For additional practice after the lab, check out this interactive site: [PG Exercises](https://pgexercises.com/)

## 8. ❓ Essential Questions (1 min)

- (1) A relational database contains a _________ for each data entity/resource that an application has.
    
    **table**
    
- (2) True or False: In a relational database, all of the data in a particular column in a table must be of the same data type.
    
    **True**
    
- (3) A single instance of a data entity, e.g., Band, is represented by a ______ in a table.
    
    **row**
    
- (4) _____ is the "programming" language used by relational databases.
    
    **Structured Query Language (SQL)**
    

## Practice Lab

- [SQL Library](https://github.com/SEIR-221-Resources/SQL-library-lab) (Basic CRUD + Joins)

## Further Study

If you'd like to go deeper into SQL, look into:

- [Functions & Operators](https://www.postgresql.org/docs/11/functions.html)
- [Aggregations](http://www.postgresqltutorial.com/postgresql-aggregate-functions/)

## Additional Practice

- [PG Exercises](https://pgexercises.com/)
- [PostreSQL Tutorial](http://www.postgresqltutorial.com/)

## References

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)