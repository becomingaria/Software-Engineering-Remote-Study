# JS Promises Review + Seeding DB

![](https://i.imgur.com/PMyzlb1.png)

# JavaScript Promises

## Learning Objectives

Students Will Be Able To:

- Review the Use Case for Promises
- Review Promise Chaining
- Use Async/Await
- Seed a Database

## 1. Setup

Toward the end of this lesson we will be using Mongoose and promises to "seed" the database of mongoose-movies. Seeding a database is the process of initializing the database with data.

Much like performing CRUD external to the application using the **`crud-helper.js`** module, seeding data is also external to the application and requires a module as well.

We'll use a **`seed.js`** module and use it experiment with promises until we actually write the code to seed the db...

1. Move into the mongoose-movies project:
    
    ```
    cd ~/<sei-dir>/lessons/mongoose-movies
    git fetch --all
    git checkout -b seeding-database
    git reset --hard origin/sync-15-seeding-starter
    ```
    
2. Create the **seed.js** module in the root folder of the project:
    
    ```
    touch seed.js
    ```
    
3. Open the project in VS Code:
    
    ```
    code .
    ```
    
4. Open an integrated terminal session:
    
    ```
    [control + backtick]
    ```
    

There's no need to start the server for now.

## 2. The Use Case of Promises

[**Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) provide another way to work with *asynchronous* operations.**

**❓ Take a minute to answer the following review questions:**

- (1) What functions/methods have we used that execute `asynchronously`?
    
    Client-Side:
    
    - `setTimeout` & `setInterval`
    
    Server-Side:
    
    - Mongoose Methods such as `findById`, `find`, `save`, etc.
- (2) What code "mechanism" have we used that enables code to be run after an asynchronous operation is complete?
    
    **callback functions passed to a .then() method**
    

In JavaScript, the functions/methods that implement asynchronous operations must be crafted to either:

- Accept a callback
- Return a promise
- Do both. Having the same asynchronous function/method accept a callback **and** return promise is rare, however, until recently the Mongoose library has several methods that do just this!

👉 Cool, so **we use a promise to run code after the completion of an asynchronous operation** as an alternative to callback functions.

[Promises Review](JS%20Promises%20Review%20+%20Seeding%20DB/Promises%20Review%2052a499d9e920466e95a07438341d0dd1.md)

## Chaining Promises

Callbacks are a common pattern in software development for handling sequential events involving async processes. We have used callbacks previously for DOM updates and asynchronous `setTimeouts` and `setIntervals`.  

Callback functions, until very recently, were a common means of handling DB interactions or other async processes. However, it can get *ugly*...

![](https://i.imgur.com/Zyq5zZU.png)

The advantage of promises is that they "flatten" the async flow and thus avoid the so-called "pyramid of doom".

By chaining one `.then` after another we can keep the code "flat" and avoid nested callback functions:Ω

```jsx
p.then(function(result) {
  console.log(result);
  return 42;
}).then(function(result) {
  console.log(result);
  return 'Done!'
}).then(function(result) {
  console.log(result);
});

```

👉 Note that although we are returning primitive values from the callback functions, the `.then()` method **always** returns a promise that resolves to the value we returned.

Let's see what happens if we return promises instead of primitives...

```jsx
function show(req, res, next) {
    let foundMovie

    Movie.findById(req.params.id)
        .populate('cast')
        .then(function (movie) {
            return foundMovie = movie
        }).then(function (movie) {
            return Performer.find({ _id: { $nin: movie.cast } })
        }).then(function (performers) {
            res.render('movies/show', { 
								movie: foundMovie, 
								title: "Movie Detail", 
								performers 
						})
        }).catch(function (err) {
            console.log(err)
            res.redirect('/')
        })
}
```

Note that when the `.then()` callback returns a promise, the next `.then()` is called when *that* promise resolves.

Nice, we've made our own promises, resolved them, and chained them!

More commonly though, we'll be using/consuming promises returned by libraries such as Mongoose...

## Async / Await Syntax

As you can see in the snippet above, code which feature numerous chained promises can become more difficult to read/follow. When there are a lot of asynchronous processes we can `async`and `await` to write cleaner code. 

Thes two keywords, `async` and `await` when combined together can allow us to work with promises without having to chain so many `.thens()`. This can help our code look cleaner while keeping the benefits of asynchronous code.

The code above using async await 

```jsx
async function show(req, res, next) {
		try {
        const foundMovie = await Movie.findById(req.params.id).populate('cast')
        const performers = await Performer.find({ _id: { $nin: foundMovie.cast } })
        res.render('movies/show', {
            movie: foundMovie, title: "Movie Detail", performers
        })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}
```

### Syntax Overview

`async` - used to tell JS / Node you will be running asynchronous code in the function

`await` - a JS keyword that will cause the JS to ‘wait’ for the promise to resolve before evaluating the rest of the code. 

Note: after the promise resolves, the value returned by the fulfilled promise can be stored in a variable. Code within the scope of the async function will be able to access that data after it is stored. 

```jsx
async function myAsyncFunc(){
		const myNonAwait = someDBFunctionCall()
		console.log(myNonAwait) // Promise {<pending> ... }
    // without await the console.log will evaluate the current value of myNonAwait
    // the data is not returned, we only have a record of the promises

    const myData = await someDBFunctionCall()
		console.log(myData) // {...}
		// with await the console.log will 'pause' the code until the promise is resolved
    // the data is then returned, and we have the requested data stored in myData. 
		// the myData variable, once resolved, is equivalent to the DB response. 

}  
```

## 🤝 We Do - Seeding a Database

**Seeding** a database is the process of populating a database with some initial data.

Use cases for seeding a database include:

- Creating an initial *admin* user
- To provide data for lookup tables/collections. For example, in an inventory app for a grocery store, you might seed a *departments* table/collection with values like `Deli`, `Dairy`, `Bakery`, `Meat & Seafood`, etc.

Note the the process of seeding a database is not part of the application that uses the database and is executed separately.

Delete or comment out the code we've written in **seed.js**.

At the top of **seed.js**, let's connect to the database, require the Models and load the `data` module:

```jsx
// seed.js (a utility to seed/initialize the database)

require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

```

- Create a `data.js` file and copy the content that's in this dropdown to the `data.js`
    
    ```
    exports.performers = [
      {name: 'Natalie Portman', born: '06-09-1981'},
      {name: 'Kevin Bacon', born: '07-08-1958'},
      {name: 'Tom Cruise', born: '07-03-1962'},
      {name: 'Brad Pitt', born: '12-18-1963'},
      {name: 'Emma Watson', born: '04-15-1990'},
      {name: 'Carrie Fisher', born: '10-21-1956'},
      {name: 'Mark Hamill', born: '09-25-1951'},
      {name: 'Harrison Ford', born: '07-13-1942'},
      {name: 'Jodie Foster', born: '11-19-1962'},
      {name: 'Matthew McConaughey', born: '11-04-1969'},
      {name: 'James Woods', born: '04-18-1947'},
      {name: 'Anne Hathaway', born: '11-12-1982'},
      {name: 'Bill Murray', born: '09-21-1950'},
      {name: 'Chevy Chase', born: '10-08-1943'},
      {name: 'Rami Malek', born: '05-12-1981'}
    ];
    
    exports.movies = [
      {title: 'Contact', releaseYear: 1997, mpaaRating: 'PG', nowShowing: false},
      {title: 'Star Wars - A New Hope', releaseYear: 1977, mpaaRating: 'PG', nowShowing: false,
        reviews: [{content: 'The one that started it all!', rating: 5}]
      },
      {title: 'Interstellar', releaseYear: 2014, mpaaRating: 'PG-13', nowShowing: false,
        reviews: [{content: 'A fantastic sci-fi mind blower!', rating: 5}]
      },
      {title: 'Caddyshack', releaseYear: 1980, mpaaRating: 'R', nowShowing: false,
        reviews: [{content: 'Low-budget senseless comedy', rating: 4}, {content: 'Should not be the classic it is.', rating: 2}]
      },
      {title: 'Bohemian Rhapsody', releaseYear: 2018, mpaaRating: 'PG-13', nowShowing: false}
    ];
    
    ```
    

To avoid duplicates when seeding a database, we first need to delete all data from the collections we'll be inserting data into.

The following code deletes all movie documents and correctly ends the program:

```jsx
// Just a query object as an arg, no callback!
Movie.deleteMany({})
  // The cb provided to the .then does not use the error-first signature
  // use .catch instead to deal with errors
  .then(function(results) {
    // results will be whatever the promise
    // returned by the deleteMany method resolves to
    console.log(results);
  })
  .then(function() {
    // process.exit() "cleanly" shuts down a Node program
    process.exit();
  });
```

Be sure to review the comments included with the code above to better understand how to use promises with Mongoose.

Running `node seed` will result in the `results` object being logged out.

### Deleting `movies` & `performers` in Sequence (Serially)

The following code will delete the performers after the movies are deleted and then exit the program:

```jsx
Movie.deleteMany({})
  .then(function(results) {
    console.log('Deleted movies: ', results);
    // Now let's delete the performers and return its "promise"
    return Performer.deleteMany({});
  })
  .then(function(results) {
    console.log('Deleted performers:', results);
  })
  .then(function() {
    // process.exit() "cleanly" shuts down a Node program
    process.exit();
  });
```

The above works fine, but it provides an opportunity to learn about a more performant approach...

### 🚀 Performing Asynchronous Operations in Parallel

There's nothing wrong with the code as written - it works.

However, the code first waits for the database to finish deleting the movies before it begins to delete the performers.

Because they are not dependent upon each other, it would be more efficient to perform both operations **simultaneously** and we can use the static [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method to make it happen!

`Promise.all()` accepts an array of promises and returns a **single** promise in their place:

```jsx
// Save the promises (or call right in the array if feeling frisky)
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
// Promise.all will return a single promise that resolves
// only after all of the array's promises resolve
Promise.all([p1, p2])
  .then(function(results) {
    console.log(results);
  })
  // Yes we can!
  .then(process.exit);
```

The above code now removes documents from the *movies* & *performers* collections in **parallel**!

## Let's Seed Some Data!

Finally, let's create some data - beginning with performers:

```jsx
...

Promise.all([p1, p2])
  .then(function(results) {
    console.log(results);
    return Performer.create(data.performers);
  })
  .then(function(performers) {
    console.log(performers);
  })
  .then(process.exit);

```

Try it out!

Now it's your turn...

### 👉 You Do - Seed the Movies (2 mins)

We've just seeded Performers together, now it's your turn...

- Add the code that will create the *movie* documents.
- `data.movies` contains an array of movie data.
- Verify that it worked by spinning up the server and browsing to `localhost:3000` - looking good!
- Solution
    
    ```
      ...
      .then(function(performers) {
        console.log(performers);
        // This line does the trick!
        return Movie.create(data.movies);
      })
      .then(process.exit);
    
    ```
    

Although assigning performers to a movies using the application is fun, let's take a look at how you might do it in **seed.js**.

### Associating `movies` & `performers` When Seeding

👀 **Important:** You should never refer to an actual `_id` when seeding!

For example, **don't** write code like:

```
// Don't do this in a seed
Movie.findById('5c609ac7641fdd63f6b8b71d')
  .then(...)

```

- ❓ Why not?
    
    **Because the `_id`s change each time the seed module is executed.**
    

Instead, we could query for documents based on properties other than their `_id`. Please keep in mind, querying by Id is never a bad idea, it is just at times you do not always have the Id available. If you have an ID of an object available to you at time of searching, please always search by that ID if that fits your use case, searching by Id is always going to be more efficient than searching by properties as the objectId is the primary indexed field in mongodb, this means mongodb would prefer you search by ObjectId if possible.

Let's say we want to assign the performer, **Mark Hamill**, to **Star Wars - A New Hope**...

We'll review as we type this:

```jsx
// insert the following before the .then(process.exit)
.then(function(movies) {
  return Promise.all([
    Performer.findOne({name: 'Mark Hamill'}),
    Movie.findOne({title: 'Star Wars - A New Hope'})
  ]);
})
.then(function(results) {
  // One day we'll destructure results like this:
  // const [mark, starWars] = results;
  const mark = results[0];
  const starWars = results[1];
  starWars.cast.push(mark._id);
  return starWars.save();
})
// Insert the above code before this next line
.then(process.exit);

```

Check it out in the app - Congrats!

👀 Do you need to sync your code?

**`git reset --hard origin/sync-16-finish-seeding`**

## References

- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)