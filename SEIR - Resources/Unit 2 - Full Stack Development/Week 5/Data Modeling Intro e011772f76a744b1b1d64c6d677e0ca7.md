# Data Modeling Intro

### Data Entities

A **Data Entity** is to data modeling as a Data Resource is to a RESTful Routing/CRUD.

A data entity represents a type of data in an application.

Examples include:  **User**, **Account**, **Post**, **Comment**, etc.

### Date Relationships

**Relationships** exist between entities, for example:

- *A User has many Posts; and a Post belongs to a User*
- This relationship is called a **one-to-many**.

ERD (Embedded Data) 

![Untitled](Data%20Modeling%20Intro/Untitled.png)

ERD (Referenced Data)

![Untitled](Data%20Modeling%20Intro/Untitled%201.png)

*A User has and belongs to many Accounts; and an Account has and belongs to many Users:*

- This relationship is called a **many-to-many**.
- ERD (Many to Many - Referenced)
    
    ![Untitled](Data%20Modeling%20Intro/Untitled%202.png)
    

There is also a less common **one-to-one** relationship. For example, *A User has a Profile; and a Profile belongs to a User*

You will be asked to model the relationships as part the planning for your CRUD projects.  Here's a [link](https://www.lucidchart.com/pages/er-diagrams?a=0) that talks more about data relationships and how to create what's called an Entity Relationship Diagram (ERD).

### Database Implementation

### SQL Databases

In SQL Databases, by design, there would be a **table** for each *data entity*.

Related data is *joined* together using SQL queries.

### MongoDB

In MongoDB, unlike with SQL tables, there might not be a **collection** for every *data entity*.

Unlike in SQL, there's no requirement to break different *entity types* into separate **collections**.

The reason is that some *entities* are better off being **embedded** with its parent document instead, for example, *comments* that belong to a *post*. It would not make sense to have to query a separate **comments** collection to obtain the comments for a given post...

# Data Modeling in MongoDB

There are two ways to model related data in MongoDB:

1. Using **embedding**, where "subdocuments" are contained inside of its document. Covered in the lesson today.
2. Using **referencing**, where a document contains just the related document's `ObjectId`.

Both approaches can be used simultaneously in the same document.

### Embedded Documents

Here's what an embedding looks like:

A document in the `people` collection:

```
// assume a document from a people collection
{
  _id: ObjectId("5099803df3f4948bd2e983a4"),
  name: "Joe Smith",
  contacts: [
    {
      type: "mobile",
      contact: "(555) 555-5555"
    },
    {
      type: "email",
      contact: "joe@smith.com"
    }
  ]
}
```

In a relational database, those contacts would **have** to be in a separate table.

<aside>
💡 Embedded Documents - PRO - Embedding data is more *efficient* than referencing data because it takes extra queries to fetch related data.

</aside>

FYI, when we use Mongoose, even those subdocuments will automatically have their own `_id`.

### Referencing Documents (linking)

Here's how the above `person --< contact` model would be implemented via **referencing**:

```
// assume a document from a people collection
{
  _id: ObjectId("5099803df3f4948bd2e983a4"),
  name: "Joe Smith",
  contacts: [
    ObjectId("5099803df3f4948bd2f98391"),
    ObjectId("5099803df3f4948bd1f97203")
  ]
}

```

Two referenced documents in the `contacts` collection:

```
{
  _id: ObjectId("5099803df3f4948bd2f98391"),
  type: "mobile",
  contact: "(555) 555-5555"
}

```

and

```
{
  _id: ObjectId("5099803df3f4948bd1f97203"),
  type: "email",
  contact: "joe@smith.com"
}

```

As you can see, the related *contacts* are separate documents.

We would have to make separate queries to get to that data, although, Mongoose can do this automatically using the `populate` method.

### Which Document Should Hold the "Reference"?

When referencing data in MongoDB, you can hold the `ObjectId` in either document or both!

The decision depends upon the design and functionality of your application and it's not always clear-cut.

### If Embedding is More Efficient, Why Reference at All?

- If the amount of data can exceed the 16MB size limit for a document, an uncommon situation however - the entire body of work of Shakespeare can be stored in 5 megabytes! Please note that if you do not consider how large a set of embedded documents could get, you may run into issues in production where your documents grow to be too large. For example, let's consider reddit, once a post on reddit goes viral and you've stored all of your comments and comments on those comments inside of your original post document, that series of conversations could easily exceed 16MB and that issue would be fundamental in your system, which means it would be a nightmare to correct once a product has been deployed to production.
- When multiple parent documents need access the same child document and that child's data changes frequently. For example, a document modeling a *bank account* should be referenced because it could be "owned" by more than one individual - if the account data were embedded in two or more parent documents, can you imagine how difficult it would be keeping the transactional & balance data in sync?
- If it makes sense for your application. For example, if you wanted to view all *posts* on your landing page, regardless of the user that posted them, it would certainly take more effort to extract the *posts* from each user if they were embedded. However, it would be gravy to get the *posts* from their own collection.

For more details regarding data modeling in MongoDB, start with [this section of mongoDB's documentation](http://docs.mongodb.org/manual/core/data-modeling-introduction/)  or this [hour long YouTube video](https://www.youtube.com/watch?v=PIWVFUtBV1Q)