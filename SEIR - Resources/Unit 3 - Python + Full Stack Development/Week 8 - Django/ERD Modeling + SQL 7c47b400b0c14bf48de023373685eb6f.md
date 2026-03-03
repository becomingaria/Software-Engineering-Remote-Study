# ERD Modeling + SQL

![](https://i.imgur.com/l4t0NOc.png)

# Relational Data Design & Modeling

## Learning Objectives

Students will be able to:

- Identify the data  for an application
- Identify  for a data entity
- Identify the  between data entities
- Understand the roles of  and
- Create an Entity Relationship Diagram (ERD)  for an application

## 1. Intro to Data Modeling

An important part of the planning process for an application is determining the data persistence needs of that application.

This planning results in a **data model**.

The **data model** is conceptual and is used as a blueprint for implementing the data persistence needs within a given database technology (SQL, NoSQL, etc.).

The data model is typically visualized with an **Entity Relationship Diagram** (ERD).

## 2. Data Entities

### What is a Data Entity?

A **Data Entity**, or just **entity**, is used to conceptually model (represent) a real-world object within an application.

Examples:  **User**, **Post**, **Comment**, **Order**, **Product**, etc.

Each entity type will have one or more **attributes**...

### The Attributes for a Data Entity

**Attributes** represent an entity's data. For example, a **Book** entity would probably have a **title** attribute.

Each attribute has a data type. For example, *string*, *numeric*, *datetime*

```
Book
	title (String)
```

### 👉 You Do - Identify Attributes (1 minute)

**Identify what other attributes might a Book entity have?**

### Examples - Book

```
Book
	title (String)
	isbn (Number)
	num_pages (Number)
	is_hardcover (Boolean)
	forward (String)
	etc...
```

(author, publisher, etc. would themselves more commonly be entities, not attributes)

### Mapping Between an Entity and a Relational Database

Remember, the conceptual **data model** is used as a **blueprint** for how the actual database will be structured.

Each **entity** in a data model identifies a **table** in a relational database. For example, a **Book** entity will result in a **books** table in the database.

- ❓In Mongoose (NoSQL), what did entities map to?
    
    **Schemas**, which may or may not have been compiled into models (embedding just used a schema, not a model)
    

Each **attribute** in an entity identifies a **column** in the table.  For example, the **title** attribute will result in a column with the same name.

Each **row** in the table would represent an **instance** of the **entity**.

## Designing an Entity Relationship Diagram (ERD)

To learn about data modeling, we'll design an ERD for an application...

### The Sample Application

Let's design an ERD for a Concert Ticket Tracking application.

The application should track:

- The tickets for a concert
- The seat and price of the ticket
- The customer that bought a ticket
- The date of the concert
- The performer(s) of the concert
- The venue of the concert

### The Process

Reviewing an application's **user stories** is a good first step to creating the conceptual data model.

To design a basic ERD, we must identify three different components:

1. The **data entities**
2. The **attributes** (the data properties of an entity)
3. The **relationships** between the entities

Since this application is supposed to track **tickets**, let's start with a preliminary **Ticket** entity...

### The `Ticket` Entity

Here's our first attempt at modeling the **Ticket** entity by including all the attributes you might see printed on a ticket:

![](https://i.imgur.com/jcpU8dF.png)

As currently designed above, this is how the data might look like in the **tickets** table:

![](https://i.imgur.com/TSDHx6I.png)

However, several of the attributes in our first attempt are actually better defined as **entities** instead.

### Distinguishing Between Attributes and Entities

If you answer "yes" to either of the following questions, the attribute is likely a candidate to be an entity instead:

- Would the attribute likely have attributes of its own?
- Could the attribute be in common with other entities? For example, a **Customer** for a Ticket is also likely to be common to other entities like Order, MarketingCampaign, Review, etc.

### 👉 You Do - Identifying Other Data Entities/Attributes (5 mins)

1. Identify which of the attributes we currently have for Ticket:
2. ...should actually be **entities** instead.

![](https://i.imgur.com/jcpU8dF.png)

1. Identify some common attributes for the entities you just identified in step 1.

## Solution: No Peeking

**Data Entities Galore!**

![](https://i.imgur.com/4iq2IOu.png)

<img src="" width="80%">

<hr>
</details>

### Database Vocabulary - *Database Normalization*

[Database Normalization](https://en.wikipedia.org/wiki/Database_normalization) is the process of designing a relational database to be more efficient by reducing redundancies.

A **relational** database is able to perform searching & updating of data much more efficiently when it is "normalized".

Okay, with the entities and their attributes set for our Concert Ticket Tracking app, let's talk about the third component of the ERD - **relationships** between the entities...

### Relationships Between Entities

Data entities often have a **relationship** with one or more other entities.

**Relationships** determine how the entities are related in terms of their **cardinality**.

There are three main types of cardinality:

- **one-to-one** (1:1)
- **one-to-many** (1:M)
- **many-to-many** (M:M)

### Example: One-To-One Relationship

A **one-to-one** relationship exists when one row in a table relates to a single row in another table.

Although **1:1** relationships are not as common as **1:M** and **M:M** relationships, they do exist in some data models.

For example:

A **business** has one **mailing address** and vice-versa:

<img src="[https://i.imgur.com/VWkbqxi.png](https://i.imgur.com/VWkbqxi.png)">

Let's discuss the connecting lines...

### ERD Cardinality Lines

In an ERD, lines drawn between entities describe the cardinality between those entities as follows:

<img src="[https://i.imgur.com/sEnNZyZ.png](https://i.imgur.com/sEnNZyZ.png)">

Note that these are the three main types of cardinality. There are more specific versions of these, such as *zero or many*:

<img src="[https://i.imgur.com/JtPQEOO.png](https://i.imgur.com/JtPQEOO.png)">

## 4. Determining the Cardinality Between Entities

Okay, let's model the relationships between the entities of our Concert Ticket Tracking application...

> 👀 To save screen space, the entities are not going to show attributes for the primary and foreign keys.  However, be aware that as a default, primary keys are named id and foreign keys as <parent_entity_name>_id.
> 

![](https://i.imgur.com/4iq2IOu.png)

We can usually determine whether the relationship between two entities is one-to-many or many-to-many by thinking about the relationship in **both directions**.

For example, let's identify the relationship between the `Concert` and `Ticket` entities:

- Can/does a single concert have/belong to more than one ticket? (Answer: **Yes**)
- Can/does a single ticket have/belong to more than one concert? (Answer: **No**)

Therefore the relationship would be `Concert --< Ticket` (one-to-many)

![](https://i.imgur.com/jlKmola.png)

> A Concert has many Tickets" and<br>"A Ticket belongs to a Concert".
> 

### ❓ Which of the two tables would have to contain the Foreign Key (FK)?

The **tickets** table - the "belongs to"/child entity will always have the FK.

Let's continue to identify the type of relationship between the following entities...

### `Customer` and `Ticket`

- ❓ What's the relationship?
    
    `Customer --< Ticket` (one-to-many)
    
    ![](https://i.imgur.com/6Uc4wHF.png)
    

### Seems like there should also be a relationship between the **Customer** and **Concert** entities...

Thanks to the way relational databases are designed, you can access other tables that are not directly joined by joining with others that are.

For example, you most certainly could access all of the *concerts* attended by a *customer* by joining through *tickets*:

`Customer --< Ticket >-- Concert`

Although not shown on the ERD with a connecting line, you could say that:

**"A Customer has many Concerts through Tickets"**, 

as well as

**"A Concert has many Customers through Tickets"**.

### 👉 You Do - Identify the Remaining Relationship (2 mins)

Identify the remaining relationships:

- **Concert** and **Venue**
- **Concert** and **Performer**

## Final ERD Example

`Venue --< Concert`
`Concert >--< Performer`

![](https://i.imgur.com/qz8V0NX.png)

## 5. Summary

Modeling data is an important step during the planning for a project because ***data is the single source of truth*** of any application!

In addition to what we covered in this lesson, there are several other notations/ways to diagram an application's data model.  Check out [this post](https://www.lucidchart.com/pages/er-diagrams) from [*lucidchart.com](http://lucidchart.com/)'s* website for more info.

## 6. ❓ Essential Questions (1 min)

- (1) True or False:  Each Data Entity has its own table in a Relational Database?
    
    **True**
    
- (2) What would be the relationship between Orders & Products in an eCommerce application?
    
    **`Order >--< Product`**
    
- (3) In this relationship: `Customer ---< Order` which entity (table) would have the Foreign Key?
    
    The **Order** entity (**orders** table)
    

## 7. Further Study

- [What is an Entity Relationship Diagram - Lucidchart](https://www.lucidchart.com/pages/er-diagrams)
- [The Relational Model](https://en.wikipedia.org/wiki/Relational_model)
- [Father of the Relational Model - E. F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd)