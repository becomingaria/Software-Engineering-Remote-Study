# JWT Auth

# **People App Authentication**

Throughout this tutorial, we'll build upon a pre-built People Express API.

**Backend**

[](https://github.com/SEIR-1031-Resources/people-app-auth-be)

**Frontend**

[](https://github.com/SEIR-1031-Resources/people-app-auth-fe)

**Goals:**

1. Create a user model
2. Build a system for authentication for the People API
3. Implement an ‘open readʼ model with the ability for all users to see (i.e., read) a person
4. Add 'ownership' to the People model and make sure that only the user who created the person can update or delete it. It wouldn't make sense if all users could edit the content or delete a person.

We'll start by adding a User model (in addition to our existing People / Posts models ) and connecting the two using Mongoose model relationships. Finally, we'll use Passport middleware to add authentication for our routes.

## Add a User Resource

We've got all of the boilerplate in place, so adding a user resource will go quickly. For authentication purposes, we'll be adding some non-RESTful routes related to our user resource. Initially, we'll just focus on creating User model before adding a `/register` route that will create a new user.

### Create the User Model

1. Create a new file in the `models` directory called `User.js`.
2. Create a basic user model. To keep things simple, our model is going to be super streamlined with just `email` and `password` fields.

```jsx
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

```

### Create Routes for the User Resource

1. Create a new file in the `controllers` directory called `auth.js`.
2. Install new dependency `bcrypt`: `npm i bcrypt`
3. Require express, the user model, and create a router and export it:

```jsx
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

// routes/controllers here

module.exports = router;

```

## Our Current Authentication Routes

1. Stub out the routes for our user resource. They will be:
- /register: a POST route that will create a new user in the database
- /login: a POST route that will create a new authorization token for the user

```jsx
// SIGN UP
// POST /auth/register
router.post("/register", async (req, res, next) => {});

// SIGN IN
// POST /auth/login
router.post("/login", async (req, res, next) => {});

```

1. Add a register route (CREATE) to the auth controller:

```jsx
router.post("/register", async (req, res, next) => {
  //   has the password before storing the user info in the database
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

		req.body.password = passwordHash;

		const newUser = await User.create(req.body);

		res.status(201).json({
      user: newUser,
      isLoggedIn: true,
    });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

```

1. Require the user controllers in `server.js`. To keep things organized, add the require statement right above the existing people controller variable.

```jsx
// Require the user resource routes and controllers
const authController = require("./controllers/auth");

```

1. Use the controller. Again, to make sure things are organized and to ensure the correct order of execution, place this right above or below the existing `app.use()` method for the `personController`.

```jsx
app.use("/auth", authController);
```

**Test in Postman by creating a new user.**

### Prevent Passwords from Being Sent to Clients

You may have noticed that when you created a new user, you got back a user document with the user's password. That's a huge security hole in our API right now. We can fix it using Mongoose [Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html) pretty easily though. Virtuals are used to transform data without persisting the transformation in MongoDB. We'll create a virtual that will automatically remove the password field any time we use a toJSON method (including `JSON.stringify()`, Mongoose's `.toJSON()` method or Express' `.json()` method). Even though the field is being deleted by the virtual, it remains safe and sound in our database.

1. Open the `models/user.js` file.
2. Update the schema as follows to add a virtual:

```jsx
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      // ret is the returned Mongoose document
      transform: (_doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

```

Create a new user in Postman. 🎉 No more password being sent! However, it seems we introduced another issue. Now, we have both an `_id` and an `id` field. Technically, this additional `id` field is just a virtual because we used a toJSON virtual. You can verify that itʼs not storing the value in MongoDB separately. If it bugs you, you can add `id: false` as a key/value pair in the options object that has the `timestamps` and `toJSON` properties.

## Add Users to People

Now we're going to create a one-to-many relationship between our users and people. In Mongoose, we can do this with *child referencing* or *parent referencing*, but the preferred approach for one-to-many relationships is through **parent referencing**. This means that weʼll add the parent document’s id to each of the child documents. This keeps our data flat and helps to prevent inconsistencies.

1. Open the `models/Person.js` file.
2. After the description property in the schema, add an owner field. Set its type to a Mongoose object id, reference the User model, and make it required:
    
    ```jsx
    {
      ...
      owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        }
    }
    
    ```
    
3. Copy the id from a user document you created when you when you tested your register controller.
4. Open up Postman and create a new Person with a POST method and pass the id of the user you copied from the user document as the value for the owner.
5. You should receive a 201 Created status and see the newly created document.

### Add Model Population to GET routes

So this is cool, but maybe we want to actually get some information about the user with our response. Mongoose makes this easy with [populate](https://mongoosejs.com/docs/populate.html).

1. Open the `/controllers/people.js` file and add `.populate('owner')` immediately after the find method in the show route:

```jsx
router.get("/:id", async (req, res, next) => {
  try {
    const foundPerson = await People.findById(req.params.id)
      .populate("owner")
      .exec();
    // your logging code
    res.status(200).json(foundPerson);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

```

1. You can also specify just fields that should be populated. Update the index route as follows to populate only the email:

```jsx
router.get("/", (req, res, next) => {
  const allPeople = await Person.find().populate('owner', 'username -_id').exec()
        console.log("found:",allPeople)
        res.status(200).json(allPeople)
    }catch(err){
        res.status(404).json({error: err.message})
    }
});

```

Test both routes in Postman. You'll see that the populated owner continues to honor the virtuals that we set up in the User model.

Awesome progress... we're ready to add in authentication.

## Passport & JWT Authentication

[Express Authentication](JWT%20Auth/Express%20Authentication%200cd8423b2d0941408ce0e3433c305cbc.md)

## React Authentication & Authorization

[React Authentication (w/ Context )](JWT%20Auth/React%20Authentication%20(w%20Context%20)%20840bcf51947a4c3eb5da3373dca9a46b.md)

[React Authentication CYOA (w/ Props)](JWT%20Auth/React%20Authentication%20CYOA%20(w%20Props)%206866b1992dc74ed7950a8bc44126141d.md)