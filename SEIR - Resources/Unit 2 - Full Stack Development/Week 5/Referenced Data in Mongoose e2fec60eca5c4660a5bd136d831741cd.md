# Referenced Data in Mongoose

![](https://i.imgur.com/cD5R8OG.png)

# Mongoose - Referencing Related Data

## Learning Objectives

Students Will Be Able To:

- CRUD Data External to the Application
- Explain the Difference Between 1:M & M:M Relationships
- Use Referencing tRo Implement 1:M & M:M Data Relationships
- "Populate" Referenced Documents

## 1. Setup

1. Move into our existing `mongoose-movies` project:
    
    ```
    cd ~/seir/lessons/mongoose-movies
    
    ```
    
2. Sync your code with the starter code for this lesson (mandatory):
    
    ```
    git reset --hard origin/sync-11-referencing-starter
    ```
    
3. Open the project's folder in VS Code:
    
    ```
    code .
    
    ```
    
4. Open an integrated terminal session:
    
    ```
    control + backtick
    
    ```
    
5. Start the Express server:
    
    ```
    nodemon
    
    ```
    
6. Browse to `localhost:3000`

## 2. Review the Starter Code

The starter code has a few updates from the *Mongoose - Embedding Related Data* lesson's final code:

- As you will learn in this lesson, a many-to-many relationship between two data resources such as *movies* and *performers*, requires that those resources already exist. Therefore, the functionality to create *performers* has been implemented to save time. However, rest assured that there is nothing in this code that has not been previously taught - let's checkout the model, router, controller & view.
    
    > 👀 Practice implementing the code for Performers was an optional exercise previously assigned.
    > 
- Be sure to check out the date "fix" required in the `create` action.
- Also, check out how the performers `newPerformer` controller function to see how we can sort documents.
- The cast-related code that treated `cast` as an array of strings has been removed from templates.

### 👉 You Do - Create a Few Performers - (1 min)

Feel free to use these from Star Wars:

```
Mark Hamill  9/25/1951
Carrie Fisher  10/21/1956
Harrison Ford  7/13/1942
Hayden Christensen 4/19/1981
Ewan McGregor 3/31/1971
Natalie Portman 6/9/1981
James Earl Jones 1/17/1931
```

## 3. Create a CRUD Helper Module

Currently, the `cast` property on the `Movie` model holds an array of strings representing the names of the performers.

During this lesson, we will be refactoring the array to contain/reference the performer documents' `ObjectId` instead.

An error will occur if the schema specifies a type of `ObjectId` and Mongoose receives a string instead, so let's clear out any strings that might be in the movie documents.

### CRUD Data Externally to the Application

At times you might need to CRUD data "outside" of the application.

Well, that time is now because we need to "reset" all of the movie documents' `cast` property to an empty array.

To do this, we're going to create a **crud-helper.js** module and load it within a Node REPL...

### Create **crud-helper.js**

Although **crud-helper.js** will not run as part of the app, it needs to be able to connect to the database and access the models.

Creating it in the project's root folder works well:

```
touch crud-helper.js
```

Copy/paste the following code with comments:

```jsx
// crud-helper.js
/*---
Used to perform CRUD external to the application

To use (don't type the $'s):
  1. Open a Node REPL in Terminal:
        $ node

  2. Load this crud-helper.js module
        $ .load crud-helper.js

  3. When done CRUDing, exit the REPL with:
        $ .exit (or ctrl-D, or ctrl-C twice)

Note that if any changes are made to the models or
this module, exit
---*/

// If the db connection string is in a .env file,
// we need to process it just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');
const mongoose = require('mongoose')
/*--- Require the app's Mongoose models ---*/
const Movie = require('./models/movie');
const Performer = require('./models/performer');

/*--- Define Variables to Hold Documents ---*/
let movie, movies;
let performer, performers;

/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
// Movie.find({}).then(console.log);

console.log('Time to CRUD!');
```

Cool, let's follow the instructions included in **crud-helper.js** to load it.

Now we can run the Mongoose code that will update the `cast` property of all movie documents to an empty array:

```jsx
Movie.updateMany(
    {},  // Query object determines which docs to update
    { cast: [] },// Update object has properties to update
)
.then(function (result) { console.log(result) })
.finally(function () { mongoose.connection.close()});
```

Nice, now we will be able to refactor the movieSchema later without causing any errors.

## 4. Compute the *Average Rating* of the Reviews

The demo of the completed mongoose-movies app computed and displayed an *average rating* for reviews in the movie's detail page:

![](https://i.imgur.com/CoFuOOW.png)

All it takes is adding some EJS to **views/movies/show.ejs** :

```html
<tbody>
  <!-- Yep, we can define variables! -->
  <% let total = 0 %>
  <% movie.reviews.forEach(function(r) { %>
    <!-- Accumulate the total rating -->
    <% total += r.rating %>
    <tr>
      <td><%= r.createdAt.toLocaleDateString() %></td>
      <td><%= r.content %></td>
      <td><%= r.rating %></td>
    </tr>
  <% }); %>
  <!-- Add a row to display the avg AFTER the forEach iteration  -->
  <tr>
    <td colspan="2"></td>
    <td><strong><%= (total / movie.reviews.length).toFixed(1) %></strong></td>
  </tr>
</tbody>

```

Although we just used the amazing power of EJS, typically it's the controller's responsibility to gather/compute data and pass it to views to be rendered.

### 👀 Do you need to sync your code?

**`git reset --hard origin/sync-12-avg-rating`**

## 5. The `mongoose-movies` Data Model

We are going to implement the following data relationship:

**`Movie >--< Performer`** (Many-To-Many)
***A Movie has many Performers; A Performer has many Movies***

However, unlike we saw with *Reviews* (One-To-Many), multiple Movies can reference the same Performer creating a Many-To-Many relationship.  Here's a simplified example:

![](https://i.imgur.com/hzoRC2y.png)

### Entity-Relationship-Diagram (ERD)

As part of the planning for your future projects, you'll need to plan the data model and document it with an Entity-Relationship-Diagram (ERD).

Here's an ERD that documents the final data model for mongoose-movies:

![](https://i.imgur.com/CVTFHMJ.png)

## 6. Referencing *Performers* in the *Movie* Model

We're going to need to update the `cast` property in the `Movie` model (**models/movie.js**) to hold the `ObjectId`s of performer documents:

```jsx
reviews: [reviewSchema],
// Refactor from [String]
cast: [{
  type: Schema.Types.ObjectId,
  ref: 'Performer'
}]

```

The property type of `ObjectId` (or an array of `ObjectId`s) **is always** used to implement **referencing**.

The `ref: 'Performer'` informs the unicorn of Mongoose methods, [populate()](https://mongoosejs.com/docs/populate.html), which model's documents to use to replace the `ObjectId`s with.

### Contrasting One-to-Many (1:M) and Many-to-Many (M:M) Relationships

The key difference between a `1:M` and a `M:M` relationship:

- In a `1:M` relationship, each of the **many** (child) documents belongs to only **one** (parent) document. Each time we want add a new relationship - **the child document must be created**.
- In a `M:M` relationship, **existing** documents are referenced and the same document can be referenced over and over. New documents are created only if it's the first of its kind.

### Many:Many CRUD

So, before a many-to-many relationship can be created between two documents (often called an **association**), those two documents must first exist.

This requires that the app first provide the functionality to create the two resources independent of each other.

Then, creating the association is a matter of adding the `ObjectId` to an array on the other side of the relationship.

The array property can be on either side (even both, but that's not usually recommended).  Usually, the app's functionality reveals which side makes more sense.  For example, the viewing of a movie with its performers is slightly easier to code by putting the `cast` array on the `Movie` Model vs. a `movies` array on the `Performer` Model.

### ❓ Review Questions

- (1) What property type is used in schemas to reference other documents?
    
    ```
    ObjectId
    
    ```
    
- (2) True or False:  Assuming the `Movie >---< Performer` relationship, when associating a "performer" document with a "movie" document, both documents must already exist in the database.
    
    **True**
    

## 8. Associating Movies and Performers

Now that we've refactored the `cast` property in `movieSchema`, we're ready to implement the M:M relationship between *movies* and *performers*.

But first, a quick refactor...

### 👉 You Do - Redirect to Movie `show` Functionality (1 min)

Currently, when a new movie is created the user is being redirected to the movies' `index` functionality...

### *AAU, after adding a movie, I want to see its details page*

1. Implement the above user story.

> 👀 Hint: What controller function is doing the creating?
> 
- Solution (try not to peek)
    
    ```
    // controllers/movies.js
    
    function create(req, res) {
      ...
      movie.save(function(err) {
        if (err) return res.redirect('/movies/new');
        console.log(movie);
        // show functionality is a GET /movies/:id
        res.redirect(`/movies/${movie._id}`);
      });
    }
    
    ```
    
    Be sure to use a template literal (backticks)
    

Refactoring the redirect is done! Now for some fun!

### *AAU, when viewing a movie's detail page, I want to see a list of the cast's performers' name and birth date*

Thinking about what it's going to take to implement the above user story, answer the following questions...

- ❓ Do movie documents have a `cast` array?
    
    **Yes**
    
- ❓ Currently, will the movie document being passed to`show.ejs` contain the performers' names and birth dates in the `cast` array?
    
    **No** it will contain only the `ObjectId` of the related performers' documents.
    
- ❓ What's the name of the Mongoose method used replace the ObjectIds with the performers' documents?
    
    `populate()`, the unicorn of Mongoose
    

### Using `populate()` to Replace `ObjectId`s with the Actual Performer Docs

Let's refactor the `moviesCtrl.show` action so that it will pass the movie with the *performer* documents in its `cast` array instead of `ObjectId`s:

```jsx
// controllers/movies.js

function show(req, res) {
  Movie.findById(req.params.id)
    .populate('cast')
    .exec()
		.then(function(movie) {
      res.render('movies/show', {
        title: 'Movie Detail',
        movie
      })
    });
}

```

We can populate documents by chaining the `populate` method after any query - even nested `ObjectId`s can be populated.

When we "build" queries by chaining like above, we need to call the `exec(cb)` method to actually run the query.

- ❓ How does the `populate()` method know which model's documents to use to replace the ObjectIds with?
    
    The `ref` property in the schema, for example:
    
    ```
    cast: [{
      type: Schema.Types.ObjectId,
      ref: 'Performer'
    }]
    
    ```
    

### Update `movies/show.ejs` to Render the Cast

There are comments to help us find the proper place to refactor **show.ejs**.

It's a great opportunity to use the `map()` method and then join transformed array's strings.

We'll review the code while we type:

```html
<!-- movies/show.ejs -->

  <div><%= movie.nowShowing ? 'Yes' : 'Nope' %></div>
  <!-- start cast list -->
  <div>Cast:</div>
  <div> 
        
        <ul>
            <% movie.cast.forEach(p =>
              <li>${p.name} <small>${p.born.toLocaleDateString()}</small></li>
            ) %>
        </ul>
</section>

```

Cool, but we're not going to be able to see it in action until we implement the next user story...

### 👀 Do you need to sync your code?

**`git reset --hard origin/sync-13-cast-refactor`**

### *AAU, when viewing a movie's detail page, I want to be able to add a new performer to the list*

Thinking about the steps necessary to implement the above user story:

- We will use a `<form>` to send an HTTP request used to to associate a performer and movie on the server.
- The `<form>` will include a `<select>` dropdown to include the selected performer's `_id` in the payload of the request.
- The movies controller's `show` function will provide the list of performers used to render the `<option>` tags for the dropdown, however, we only want to include the performers in the dropdown that are not already in the cast!

Let's do this - here's our wireframe:

![](https://i.imgur.com/Zg0pCYa.png)

### Passing the *Performers* for the `<select>` Dropdown

Currently, the `moviesCtrl.show` function is just passing the `movie`, but now it also needs to query for the *performers* that are not already associated with the `movie` and pass them to **show.ejs** as well.

First, we're going to need to access the `Performer` model, so require it at the top of **controllers/movies.js**:

```jsx
const Movie = require('../models/movie');
// require the Performer model
const Performer = require('../models/performer');
```

Now we're ready to refactor the `show` action, we'll review as we refactor the code:

```jsx
function show(req, res) {
    Movie.findById(req.params.id)
        .populate('cast')
        .exec()
        .then(function (movie) {
            // Mongoose query builder approach...
            // Performer.find({}).where('_id').nin(movie.cast)
            // Native MongoDB approach...
            Performer.find(
                // Query object that only finds performers
                // whose _ids are not in the movie.cast array
                { _id: { $nin: movie.cast } } )
						.then(function (err, performers) {
                console.log(performers);
                res.render('movies/show', {
                    title: 'Movie Detail',
                    movie,
                    performers
             });
         })
    });
}
```

The log will show we are retrieving the *performers* - a good baby step at this point.

### Render the `<form>` in **movies/show.ejs**

Again, there are comments to help us as we refactor **show.ejs** to render

```html
<!-- movies/show.ejs -->

<!-- add to cast form below this comment -->
<form id="add-per-to-cast" action="???" method="POST">
  <select name="performerId">
    <!-- Emit an option for each performer -->
    <%- performers.map(p =>
      `<option value="${p._id}">${p.name}</option>`
    ).join('') %>
  </select>
  <button type="submit">Add to Cast</button>
</form>

```

Now let's add this tidbit of CSS in **public/stylesheets/style.css** to tidy up the cast list:

```css
ul {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
}

li {
  font-weight: bold;
}

```

### Identify the Proper Route to Perform the Association

Let's check out the [Routing Guide](https://gist.github.com/jim-clark/17908763db7bd3c403e6) to find the endpoint (keep looking...).

The route is RESTful for adding an association between a movie and a performer but it's up to use to think of a good name for that action.

Note that there are two proper routes, however, the one that matches our scenario, where the id of the performer is being sent in the payload of the request, is this:

```
POST /movies/:movieId/performers

```

Remember, you can call the route parameter, `:movieId`, whatever you wish, e.g., `:id`

### 👉 You Do - Update the `<form>`'s `<action>` Attribute (1 min)

- Now that the proper route has been identified, update the `action="???"` in the Add to Cast `<form>`.
- Solution (try not to peek)
    
    ```
    <form id="add-per-to-cast" action="/movies/<%= movie._id %>/performers" method="POST">
    
    ```
    

### Add the Route for the *Add to Cast* `<form>` Post

In **routes/performers.js**:

```jsx
// POST /movies/:id/performers
router.post('/movies/:id/performers', performersCtrl.addToCast);

```

`addToCast` - not a bad name!

Last step coming up!

### Code the *addToCast* Controller Action

We could perform the association in either controller - we'll go with the **controllers/movies.js** because the relationship involves an a direct interaction with to one Movie. 

```jsx
// controllers/movies.js

module.exports = {
	...
  addToCast
};

function addToCast(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    // The cast array simply holds the performer's ObjectId
    movie.cast.push(req.body.performerId);
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`);
    });
  });
}

```

### We Did It!

That was fun!

### 👀 Do you need to sync your code?

**`git reset --hard origin/sync-14-finish-referencing`**

## 10. ❓ Essential Questions

```
const bookSchema = new Schema({
  authors: [{type: Schema.Types.ObjectId, ref: 'Author'}],
  ...

```

- (1) True or False:  Assuming the above `bookSchema`, the `authors`property would properly implement a `Book >--< Author` relationship.
    
    **In a 1:M relationship, the "child" document belongs to only one parent and we have to create that dedicated child document.**
    
- (2) Describe the difference between 1:M & M:M relationships.
    
    **However, in a M:M relationship, we are associating existing documents and they can have/belong to any number of documents.**
    
- (3) What's the name of the Mongoose method used to replace an `ObjectId` with the document it references?
    
    ```
    populate()
    
    ```
    

## References

- [MongooseJS Docs - Populate](https://mongoosejs.com/docs/populate.html)
- [MongooseJS Docs - Queries](https://mongoosejs.com/docs/queries.html)