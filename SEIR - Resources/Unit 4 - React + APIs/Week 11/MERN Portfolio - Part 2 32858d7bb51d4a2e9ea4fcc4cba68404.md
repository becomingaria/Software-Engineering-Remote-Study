# MERN Portfolio - Part 2

The goal for this HW is to give you an opportunity to complete a build of your Full-Stack Portfolio website using Express and React. Follow the Lab to build and deploy your backend Express app then connect it to the React frontend.

Take advantage of the day to ask any questions.

# **Express and React Lab**

During this lab, we will be creating a full-stack portfolio page using Express and React to see how you can create a full-stack project using a simple API build with express and a frontend application with React.

**NOTE** This is **not your actual portfolio**, so don't worry about making it perfect. Use this as an exercise to practice the skills we've learned in the class so far.

```
> /fullstack-portfolio
  > /backend
  > /frontend

```

## **Express Backend Setup**

- In your fullstack-portfolio directory, create a new directory called backend `mkdir backend`. Your folder structure should look like the following

```
> /fullstack-portfolio
  > /backend
  > /frontend

```

- Open up your terminal inside the backend folder
- Create a new npm project with the command `npm init -y`
- Install the following
    - `npm install express cors mongoose`
    - `npm install --save-dev nodemon`

### **What we installed**

1. **express**: The backend web framework for generating a web server
2. **cors**: middleware to make sure we don't get cors errors when our react app makes a request to our express app
3. **nodemon**: development tool to auto-restart our server whenever
4. **mongoose**: ODM library for mongoDB
5. Update the package.json with the following scripts

```
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
},

```

### **Our Data**

Instead of using a database, we will use JSON files to store the data for our project for now.

Run the following command in the `backend` folder to create our files

- `touch server.js projects.json about.json`

### **projects.json**

In this file, you should use the below example but replace it with your projects from the previous units. (JSON files don't need to be exported, Node knows how to read them).

Essentially this file is an array of objects that represent your projects.

```
[
  {
    "name": "project1",
    "live": "<https://app.herokuapp.com/whatever>",
    "git": "<http://www.github.com/username/reponame>",
    "image": "<http://www.imgur.com/pictureofproject.png>"
  },
  {
    "name": "project2",
    "live": "<https://app.netlify.app/whatever>",
    "git": "<http://www.github.com/username/reponame>",
    "image": "<http://www.imgur.com/pictureofproject.png>"
  }
]

```

### **about.json**

This file will be one big option with information about you to use in your portfolio.

```
{
  "name": "Bob Smith",
  "email": "Bob@BobSmith.dev",
  "headshot": "<http://www.imgur.com/pictureofproject.png>",
  "bio": "Bob Smith graduated from YourCourse in 2017. Afterwords, he went to work for XYZ Technologies where he maintained a full-stack application using Meteor and Ember. He also recently started learning Prolog, cause why not waste time."
}

```

### **server.js**

Now we can make our server, here is the overview of what we will do.

- import our dependencies and JSON files
- create our app object
- add our cors middleware
- create a home route to test our app
- create a `/projects` route to retrieve our projects
- create an `/about` route to retrieve our about info
- setup our server listener

```
// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

```

- run your server `npm run dev`
- go to `localhost:4000`and make sure you see "hello world"
- go to `localhost:4000/projects` and make sure you see your projects as JSON
- go to `localhost:4000/about` and make sure you see your about info as JSON
- Our Backend is complete, now to deploy.

## **Express App Deployment**

### **Creating the git repo**

- make sure your terminal is inside the "backend" folder
- create a new git repo `git init`
- add all files to staging `git add .`
- commit the files `git commit -m "backend is done"`
- create a new EMPTY repo on [github.com](http://github.com/) and get the remote url
- connect the remote to your local repo `git remote add origin URL`, make sure to replace "URL" with the URL of your [github.com](http://github.com/) repo
- push up your changes `git push origin BRANCH`make sure to replace "BRANCH" with your current branch name which can be retrieved by running `git branch`

### **Deploying to Heroku**

- Go to your portfolio-backend repo in GitHub and make sure your visibility is set to public.
- Head over to Heroku and create a new project
- under the deploy section, connect your GitHub repo
- enable automatic deploys
- then under manual deploys hit the "deploy" button
- when it's done, click the "open app" button in the upper right of the dashboard
- go to `HEROKU_URL/projects`make sure you see "Hello World"
- go to `HEROKU_URL/about` make sure you see your about info as JSON

congrats, your simple backend API is complete and deployed! You may shut down any local backend servers you have running.

If you have any issues with Heroku refer to [Backend Deployment](../../Deployment%20Guides/Heroku%20with%20Node%20&%20Mongoose!%2087987fb2503b4da79f9408fb9a859675.md) doc.
