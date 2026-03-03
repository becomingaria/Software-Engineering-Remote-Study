# Code and Chill Collaboration Lab

# **MEN Full Stack HW**

Over the few hours you will be working on building a full-stack MEN application. You will need to complete a Create / Read functionality for a single model.

## **Setup**

1. Create your GitHub repo.
2. Add collaborator.
3. Setup necessary branches and communicate roles between collaborators.

## MVP: Create and Read

Come up with a model / resource to “CRUD”, your model should have at least two properties. Don't get carried away!

1. Initialize a git repo. Make an initial commit.
2. Make an express-generator app. Commit.
3. Make it render a page for "new". Commit.
4. Make a "create" route. Commit.
5. Have the form on "new" page post to the "create" route. Commit.
6. Connect express to mongo by installing and setting up mongoose. Commit once it logs a successful connection message. Commit.
7. Create the schema and model for your thing that you are CRUDing. Commit.
8. In the "create" route, use mongoose to add a document to your database (`.create()`) based on what is in `req.body`.  Commit.
9. The "create" route redirect to the index page *after* the document has been created. Commit.
10. Make an "index" view which displays all the data created by the app so far. Commit.
11. Give your app the ability to render a "show" page. Commit.
12. Each item on the index page should link to the "show" page for that item. Commit.

## 🥉Bronze: **Destroy**

1. Make a delete button on the “show” page. Commit.
2. Make a "destroy" route. Commit. 
3. Have the delete button send a DELETE request to the server. (Hint: What middleware allows your delete button to make a delete request)?
4. Make the "destroy" route that removes the item from the database.

> **You should now have at least 16 commits.**
> 

## 🥈Silver: **Update**

### **Edit/Update:**

1. Make an "edit" route that renders an edit page with the data already in it for that item. Commit. 
2. Make a link to the "edit" route. Commit. 
3. Make an "update" route. Commit. 
4. Have the edit page form send a PUT request to the "update" route. Commit. 
5. Make the "update" route update the model in the database. Commit. 
6. Make the "update" route send a redirect to the index page after the model has been updated. Commit. 

> **You should now have at least 22 commits.**
> 

## Gold: 1:M Associations

Decide with your partner on a second model. Determine how you will create an association, will you embedded documents or and ObjectId reference? Will you create a reference through some other field? 

1. Design/build a second model + schema. Commit.
2. Create a “new” page for your second model or implement a form on the show page of your first resource. Commit. 
3. Build a “create” route for your second model (including routes + controller). Commit. 
4. Verify that the “one” model is storing a reference to your “many” resource, or the “many“ model is storing a reference to the “one” resource.  

**You should now have at least 26 commits.**

## 🚀 **Hungry for more**

### [**Bootstrap**](https://getbootstrap.com/)

Add bootstrap to your project and use some of the basic styling for layout.

At a basic level, most layout challenges can be solved with [the info on this page](https://getbootstrap.com/docs/4.3/layout/overview/) and [this page](https://getbootstrap.com/docs/4.3/layout/grid/).

Also in the docs, check out the Components section and some of the subsection. There's a nice collection of other styles you can use to easily get great professional default styling for things like [forms](https://getbootstrap.com/docs/4.3/components/forms/) or [buttons](https://getbootstrap.com/docs/4.3/components/buttons/)

## Possible Extended Stretch Features

- Connect your app to an API to seed your DB
- Provide the ability to ‘cascade’ - if the one document is deleted, make sure all associated data is deleted for the the the second collections.