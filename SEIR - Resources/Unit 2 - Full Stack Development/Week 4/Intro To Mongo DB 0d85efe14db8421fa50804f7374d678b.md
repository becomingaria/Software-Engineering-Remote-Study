# Intro To Mongo DB

![](https://i.imgur.com/vzWk7s4.png)

# Intro to MongoDB

## Learning Objectives

Students Will Be Able To:

- Describe the Use Case of Databases
- Describe the Format of a Document
- Save and Retrieve MongoDB Documents using the Mongo Shell
- Describe Embedding & Referencing

## What's a Database?

Remember when we added new To-Dos in Express and we would "lose" them when nodemon restarted the server?

If we were saving those To-Dos in a database, they would remain there until we deleted them.

Databases are a way to organize and save, or persist, data.

[https://www.statista.com/statistics/809750/worldwide-popularity-ranking-database-management-systems/](https://www.statista.com/statistics/809750/worldwide-popularity-ranking-database-management-systems/)

As you can see, **Relational Database Management Systems (RDMS)** are by far the most popular - they've been around since the 1960s. They are more commonly referred to as **SQL Databases** because they are designed and accessed using **Structured Query Language**.

However, you'll also see that **MongoDB** is by far the most popular **NoSQL** database system.

There are several varieties of NoSQL databases. MongoDB is of the **document-based** variety because it stores and retrieves *documents*.

## MongoDB vs. Relational SQL Databases

### Terminology

![](https://i.imgur.com/XdV3hSs.png)

As diagramed above, there is a one-to-one mapping of the key concepts of a database.

### Key Differences

### Use Cases

SQL databases and NoSQL databases can often be used interchangeably for very simple scenarios however they are very different approaches to storing data and accessing that data. Due to these fundamental differences there are scenarios where a NoSQL database would completely fall flat and vice versa for a relation SQL database. There is a reason we separate these two types of databases into two separate categories, we don't choose our databases by picking the option we prefer the most, we choose a database that fits our solution the best.

It is also noteworthy to point out that there is a significantly larger variety of NoSQL database structures. We will be using MongoDB which is a specific type of NoSQL database called a document database(See diagram above, our BSON storage is called a document). Another very popular document database is [DynamoDB](https://aws.amazon.com/dynamodb/) created by Amazon. You will also hear of databases like [Casandra](https://cassandra.apache.org/_/index.html)(an older NoSQL database designed around distributed data storage solutions) and [Neo4j](https://neo4j.com/)(a graph database created to manage graph data structures) which are also NoSQL databases but are not document databases and have different best fit use cases and were created to solve slightly different types of database challenges.

It is critical that you understand what you need out of your database solution and that you choose wisely when you make those choices, as choosing the wrong database can be a catastrophic mistake if discovered too late in a project. For the purposes of this course we'll be focusing on relational databases like postgres and mySQL and the mongoDB NoSQL databases.

However, in general:

- **Relational Databases** are preferred in mission-critical financial applications such as banking, stock trading, storing critical user or product records etc., due to their strength of handling [transactions](https://en.wikipedia.org/wiki/Database_transaction). They are not very good however on handling data that can't be strictly organized into tables of structured columns because they have a strict **schema** (structure) they must adhere to. Relational databases also suffer from read limitations, as only one query can be performed on a single table at a time. This can introduce [locking scenarios](https://www.sqlshack.com/locking-sql-server/) which are a bit different for each type of SQL database, the link shared is for sql server specifically. Database locking basically means only one user can be operating in a table at one time, if two processes attempt to perform a task on the same data, one will have to wait for the other to finish first, in high frequency situations this can create significant database slow down to database consumers. Note locking can be a key feature of transactional databases and might even be ideal for making consistent updates to your data to ensure two processes do not update the same data at the same time. Due to these limitations SQL databases typically have issues allowing many processes to operate within them at one time and do not scale as easily as most NoSQL alternatives. Relational databases also perform tasks that require data aggregation much better than NoSQL solutions.
- **NoSQL(MongoDB document database)** is preferred for storing vast amounts of unstructured data, such as in social-media type applications, think reddit with its many sub-reddits and comment trees. MongoDB is also a great choice when prototyping applications because it is **schema-less** and more adaptable to change. NoSQL databases like MongoDB also benefit from having significantly higher read capacity, which means you can have far more processes reading data from them than a SQL solutions of the same capacity. For this reason you often see larger products utilizing both SQL and NoSQL databases, however this topic is extremely rich and has many nuances that we will not come close to cover within the scope of this course, however, they are fascinating topics that one could build an entire career working with.

## More About MongoDB

![](https://i.imgur.com/UzJEHVn.jpg)

MongoDB puts the "M" in the MEAN/MERN Stack, technology stacks that emphasizes the use of JavaScript on both the front-end and back-end.

Instead of *SQL* (*Structured Query Language*), MongoDB uses JavaScript-like syntax for communicating with the database. Mongo also stores its records in collections of documents that are formatted in a JSON-like syntax called BSON.

You're going to see that working with **data** in MongoDB is like working with JavaScript objects, often referred to by the acronym POJO(plain old javascript object).

## MongoDB Documents

In MongoDB, we save and retrieve *documents* to and from a *collection*.

Lets take a look of what a MongoDB *document* might look like:

```json
{
    _id: ObjectId("5099803df3f4948bd2f98391"),
    name: { first: "Alan", last: "Turing" },
    birth: ISODate("1912-06-23T00:00:00Z"),
    death: ISODate("1954-06-07T00:00:00Z"),
    contribs: [ "Turing machine", "Turing test", "Turingery" ],
    views: 1250000
}

```

As you can see, this format looks very much like a JavaScript object.

### The Document `_id`

The `_id` is a special field that represents the document's *unique identifier*. If you're familiar with SQL databases, a document's `_id` is like a *primary key*.

MongoDB automatically creates the `_id` when documents are saved for the first time.

MongoDB uses a special `ObjectId` datatype for the value of `_id`.

`ObjectId`s are JS objects, but we'll be able to use their string representation most of the time when we work with them in Mongoose (next lesson).

The value that MongoDB creates for the `_id` is guaranteed to be *globally unique*.

## Creating a Database and Inserting Documents

### Before we Start

In this lesson, we are going to be working directly with MongoDB to create and read data using the MongoDB Shell in a Terminal window.

However, after this brief session working with the MongoDB Shell, you will likely never do it again since most developers use the [Mongoose](https://mongoosejs.com/) library to CRUD a MongoDB.  We're going to learn Mongoose next!

### The MongoDB Shell

We already installed the MongoDB Shell using `brew install mongosh` when we set up our Atlas hosted MongoDB.

Atlas also provided us with a command to connect to the shell that looks something like this:

```
mongosh "mongodb+srv://cluster0.4jkevsm.mongodb.net/myFirstDatabase" --apiVersion 1 --username your-username

```

After running that command and entering your database user's password you will be prompted within the MongoDB Shell, for example:

```
Atlas atlas-lge6ib-shard-0 [primary] myFirstDatabase>

```

List the shell's commands available: `> help`

Show the list of databases: `> show dbs`

> Note that myFirstDatabase will not be in the list until we create our first document.
> 

Show the name of the currently active database: `> db`

Show the collections of the current database `> show collections`

### Inserting Documents into a Collection

This is how we can create and insert a document into a collection named `people`:

```
// Be sure not to type the "..."s below
// they simply indicate multi-line input mode
> db.people.insertOne({
... name: 'Maria',
... favColor: 'Orange'
})

```

Using a collection for the first time creates it!

```
> show collections
people

```

### 👉 **YOU DO - Add Another Document - (1 min)**

- Add another "person" document to the `db.people` collection. But this time, add an additional field called `birthDate` and assign it a date value with something like this: `birthDate: new Date('3/21/1981')`

### Reading Documents in a Collection

We can list the documents in the collection using the `find()` method on the collection:

```jsx
> db.people.find({})
[
  {
    _id: ObjectId("633c9f214c88975587bfa14d"),
    name: 'Maria',
    color: 'Orange'
  },
  {
    _id: ObjectId("633c9f214c88975587bfa14e"),
    name: 'Jim',
    color: 'Purple',
    birthDate: ISODate("2001-06-13T07:00:00.000Z")
  }
]
```

The `{}` argument is called a **query object** and is used to specify the criteria of the query.  If we provide an empty query object, i.e., `find({})`, all documents in the collection are returned.

Here's how we can find "person" documents with the best color:

```jsx
db.people.find({color: 'Purple'})
[
  {
    _id: ObjectId("633c9f214c88975587bfa14e"),
    name: 'Jim',
    color: 'Purple',
    birthDate: ISODate("2001-06-13T07:00:00.000Z")
  }
]
```

### Exit the MongoDB Shell

Type `exit` or `quit` to exit the shell.

## References

[MongoDB homepage](https://www.mongodb.org/)

[MongoDB Atlas - MongoDB Cloud Hosting](https://www.mongodb.com/cloud/atlas)

[MongooseJS - ODM](http://mongoosejs.com/)