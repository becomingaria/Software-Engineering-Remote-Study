# MERN Infrastructure Setup

[MERN Infrastructure Intro ](MERN%20Infrastructure%20Intro%20e0ade8bb0fa2471a8280fc7a1f18d52a.md)

# MERN **Build: Express API**

In this build, we will:

- Build a full Express server application
- Define a router for the API
- Use Mongo/Mongoose with 1 model
- Define a controller actions for CRUD operations

## MongoDB Atlas Setup

To get started on this lesson, log into MongoDB Atlas and create a new project called react-build. 

Since we will be connecting connecting to mongo from our localhost, as well as a Heroku deployment, let’s setup the IP address to allow access from anywhere: `0.0.0.0/0`

## **Setup for Express Build**

- Create a folder called express-react `mkdir express-react` to contain both frontend and backend applications
- Inside this folder create another folder called backend `cd express-react && mkdir backend`
- Generate a React app called frontend `npx create-react-app frontend`

Your folder structure should look like this...

```
/express-react
 -> /backend
 -> /frontend
```

- cd into backend folder `cd backend`

## **Setting up the Express app**

- create an entry point file `touch server.js .env`
- create a new node project `npm init -y`
- install dependencies `npm install dotenv mongoose express cors morgan`
- install dev dependencies `npm install --save-dev nodemon`
- add a `.gitignore` - `touch .gitignore`
- setup `npm` scripts

```
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
	},
```

- put the following .gitignore

```
/node_modules
.env
```

put the following in a .env (make sure to use YOUR MongoDB URI)

```
MONGODB_URI=mongodb+src://...
PORT=4000 #note - our port will change in production
```

## **Starting `server.js`**

Let's build out the minimum to get `server.js` up and running

```jsx
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

```

- run the server `npm run dev` and make sure you see "Hello World" when you go to `localhost:4000`

## **Adding a Database Connection**

Let's create and update our `/config/db.connection.js` to include a database connection

```jsx
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const {MONGODB_URI} = process.env

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI)

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

```

- Make sure you see the Mongoose Connection message when the server restarts

```jsx
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// start the mongoose db connection
require('./config/db.connection.js')

...

```

## **Adding our routes and resource controller**

Now that we have verified the server is connected and receiving requests, let’s stub out our basic index and create routes.

First, create your routes and controllers folder

```
mkdir controllers routes
```

This file will receive requests to our ‘restful’ routes, passing each request to a corresponding people route.

1. People router - `routes/people-router.js`
2. People controller - `controller/people-controller.js`
This module will return a series of javascript methods that will directly access our database. *We will import our People model here*.
3. Our routes will be checked by our application, and each request will correspond to its resources controller callback.

```
touch routes/people-router.js controllers/people-controller.js
```

## Configuring the People router

Each request made to our backend must be sent to the correct `end-point` in our API. Using  RESTful routing conventions we should create `stub` routes for the following endpoints:

| Path | Method | Action | Mongoose |  |
| --- | --- | --- | --- | --- |
| /people/ | GET | index | db.People.find() |  |
| /people/ | POST | create | db.People.create(req.body) |  |
| /people/:id | GET | show | db.findById(req.params.id) |  |
| /people/:id | PUT | update | db.findById(req.parms.id, req.body, options) |  |
| /people/:id | DELETE | destroy | db.findById(req.parms.id) |  |

### **Where are the *rest* of the routes?**

We only need five routes per model for our basic API, our `new` and `edit` GET routes routes for from unit two will be handled on the front end. If we were building a multi-page application with express and a templating language like EJS, we had to make pages that a user could visit to create and update a resource (`new.ejs` / `edit.ejs`). Our MERN application delegates all HTML content to our React frontend. Our Express backend is only concerned with serving data that will be consumed by the frontend application.

### Setting up and stubbing our first people routes

```jsx
// ./routes/people-router.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "people index route"})
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "people create route"})
});

module.exports = router

```

### Importing and testing our people routes

We have configured our basic routes, but have not yet added them to our application. If we would like to our Express app to pass each request to its corresponding resource route. In unit 2 we practiced directing requests directly to our `router` which invoked a `controller` function that served several purposes:

1. parsed the request
2. executed mongoose code to interface with our database
3. returned a response to the client

Following Express best-practices and better implementing `seperation of concerns` we are going to break up our routing functionality from our router/controller/database functionality. After we have tested all of our API endpoints, we can move on to implementing our Model and controller functionality.

First import our people router into our `server.js`.

```jsx
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// ... the rest of our other dependencies

// import people router
const peopleRouter = require('./routes/people-router')

```

Next add the routing `middleware` in a below the current dependencies and before our first route.

```jsx
///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

// all requests for endpoints that begin with '/people'
app.use('/people', peopleRouter)

```

While we are adding dependencies we can add two libraries to our application:

1. **`morgan`** (docs) - Morgan will process each request and print well-formatted logs to our console with each request during development.
2. **`cors`** (docs) - this library will allow our React Application to access our resources from all origins (including our react development server or the deployed frontend app).

Install your dependencies, then import them into your entry-point file (server.js)

```bash
npm i morgan cors
```

```jsx
// server.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// ... the rest of our other dependencies

const cors = require("cors")
const morgan = require("morgan")
```

```jsx
// server.js

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/people'
app.use('/people', peopleRouter)
```

### Testing each route:

- Using postman or CURL to make a GET request to /people endpoint:
    - - curl -X GET [http://localhost:4000/people](http://localhost:4000/people)
    - This request should respond with `{message: "people index route"}`
- Using postman or CURL to make a POST request to /people endpoint:
    - - curl -X POST [http://localhost:4000/people](http://localhost:4000/people)
    - This request should respond `{message: "people create route"}`

### Stubbing out the rest of our people routes:

We have verified that our express router middleware is working and successfully routing to our index and create routes. Now let’s add the rest of our API endpoints, before we move on to our controller and model implementation.

```jsx
// routes/people-router

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", (req, res) => {
	res.status(200).json({message: "people index route"})
});

// PEOPLE CREATE ROUTE
router.post("/", (req, res) =>  {
	console.log(req.body)
	res.status(200).json({message: "people create route"})
});

// PEOPLE SHOW ROUTE
router.get("/:id", (req, res) => {
	res.status(200).json({message: "people show route: " + req.params.id })
});

// PEOPLE DELETE ROUTE
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "people delete route: " + req.params.id })
});

// PEOPLE UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "people update route: " + req.params.id })
});

module.exports = router

```

## **Adding the People Model**

Let's create our People model next, touch this file `./models/People.js` and import your Mongoose dependency. We will use `mongoose` to define our People schema and the model instance (People). This file will be accessed by our people controller, so make sure you don’t forget your *export statement*. Each route in our controller will will use this model to retrieve and write our people documents.

```jsx
///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
},{timestamps: true});

const People = mongoose.model("People", PeopleSchema);

module.exports = People
```

### Create a Model index module in your model’s folder

```jsx
// index.js
module.exports = {
    People: require('./People')
	 // module.exports returns an object containing references to each of our imported models
}
```

## Populate the people controller to include the People model

### Importing the Model

```jsx
// /controllers/people-controller.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {People} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

```

## Refactoring the new, index, and the show routes

```jsx

///////////////////////////////
// CONTROLLERS
////////////////////////////////

// PEOPLE INDEX ACTION
async function index(req,res,next) {
	try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await People.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE SHOW ACTION
async function detail(req,res,next) {
    try {
        // send one person
        res.json(await People.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// ... the remaining people controller actions will go below 

// PEOPLE DESTROY ACTION 

// PEOPLE UPDATE ACTION

// EXPORT Controller Action
module.exports = {
	index,
	create,
	getOne: detail 
}
```

### Updating the Index & Detail routes

We have verified that our express router middleware is working previous and successfully routing to our index and create routes. Now let’s import the controller to read and write to our `peoples` collection in our MongoDB.

```jsx
// routes/people-router

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const peopleCtrl = require 

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", peopleCtrl.index);

// PEOPLE CREATE ROUTE
router.post("/", peopleCtrl.create);

// PEOPLE SHOW ROUTE
router.get("/:id", peopleCtrl.getOne);

// PEOPLE DELETE ROUTE
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "people delete route: " + req.params.id })
});

// PEOPLE UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "people update route: " + req.params.id })
});

module.exports = router

```

### Testing each route:

- Using postman or CURL to make a GET request to /people endpoint:
  - curl -X GET [http://localhost:4000/people](http://localhost:4000/people)
    - This request should respond with `[]` since we have not yet added any people
- Using postman or CURL to make a POST request to /people endpoint:
    
    ```
    CURL -X POST http://localhost:4000/people
    -H 'Content-Type: application/json'
    -d '{"name":"test1","image":"https://picsum.photos/200/300", "title":"test-title"}'
    ```
    
    This request should respond with:
    
    ```json
    {
    		"_id":"62c5b9bb15892d43fef92587",
    	  "name":"test1",
    		"image":"https://picsum.photos/200/300",
    		"title":"test-title",
    		"createdAt":"2022-07-06T16:35:07.337Z",
    		"updatedAt":"2022-07-06T16:35:07.337Z",
    		"__v":0
    }
    ```
    
- Now that we’ve created a new person, use postman or CURL to make a GET request to the newly created peroson /people endpoint:
    - `curl -X GET http://localhost:4000/people/62c5b9bb15892d43fef9258`
    - This request should respond with
        
        ```json
        {
        		"_id":"62c5b9bb15892d43fef92587",
        	  "name":"test1",
        		"image":"https://picsum.photos/200/300",
        		"title":"test-title",
        		"createdAt":"2022-07-06T16:35:07.337Z",
        		"updatedAt":"2022-07-06T16:35:07.337Z",
        		"__v":0
        }
        ```
        

### Adding update and delete controller methods

Let's add an update and delete API route to our people controller

```jsx

///////////////////////////////
// CONTROLLERS
////////////////////////////////

// PEOPLE INDEX ACTION
async function index(req,res,next) {
	try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await People.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE SHOW ACTION
async function detail(req,res,next) {
    try {
        // send one person
        res.json(await People.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// PEOPLE DESTROY ACTION
async function destroy(req,res,next) {
  try {
    // delete people by ID
    res.json(await People.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE UPDATE ACTION
async function update(req,res,next) {
  try {
    // update people by ID, provide the form data, and return the updated document.
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// EXPORT controller actions
module.exports = {
	index,
	create,
	getOne: detail,
	delete: destroy,
	update
}

```

### Update Remaining RESTful routes

```jsx
// routes/people-router.js

... 

// PEOPLE DELETE ROUTE
router.delete("/:id", peopleCtrl.delete);

// PEOPLE UPDATE ROUTE
router.put("/:id", peopleCtrl.update);
```

## Project Review

In this walkthrough we built the following features:

- A full Express server application with JSON body-parser middleware
- Defined an Express router for the people API routes
- Stubbed out all routes and tested using CURL / Postman statements
- Defined a People mongoose model
- Define a controller actions for CRUD operations linked the router to each action

After developing and testing all of our API endpoints locally, next we will deploy our backend application to Heroku. 

## Step 2 - [Deploying your backend](Backend%20Deployment%2020e96f32c27046689fbca2fb754ddede.md)