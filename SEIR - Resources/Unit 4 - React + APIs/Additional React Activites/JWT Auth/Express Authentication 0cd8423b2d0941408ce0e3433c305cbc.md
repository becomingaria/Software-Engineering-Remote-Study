# Express Authentication

## Add Authentication

In this part of the tutorial, we'll be tackling the steps needed to add authentication to our app. We'll be using [Passport](http://www.passportjs.org/) to simplify the authentication process. To use Passport, we need to install it in our app along with one (or more) of the over [500 strategies](http://www.passportjs.org/packages/) it offers for authentication. For this tutorial, we'll be employing a strategy which uses JSON Web Tokens ([JWT](https://jwt.io/introduction/)).

JWT is an open standard and an excellent choice for modern applications based on REST architectures. The fundamental premise of the REST architectural style is that the **server does not store any state** about the client session on the server side, hence the name Representational **State Transfer**. In REST, every HTTP request happens in complete isolation. It is up to the client to send (i.e., transfer) whatever state is needed to carry out the request. JWT provides a lightweight approach to transferring state from the client to the server in a secure fashion.

### Configure Passport

Each Passport strategy has to be configured for your specific app. Basically, Passport gives us a callback and we fill it in with any logic needed to get the user from our database that matches some bit of data that Passport extracts from a request. After configuring the strategy with the code to retrieve the user from the database, we register the strategy, and initialize Passport.

Once initialized, weʼll run the passport strategy as route middleware. When run as middleware, Passport receives the request, extracts and decrypts the user’s token, adds it to the request object and then passes the request with the user object in it on to the controller in route that called it (or the next route middleware).

1. Start by installing the npm packages with: `npm i passport passport-jwt jsonwebtoken`.
2. Create a new file in the `middleware` directory called `auth.js`.
3. Add a secret to a .env file; example: `JWT_SECRET=Thisisasecretformytests`
4. Add the following code to `auth.js`. 

### Overview:

This code configures Passport.js to for use within our app, it will be responsible for  : 

1. Decrypt the incoming request and access identifying information from the request headers token 
2. Find the matching user in the database and then add that user to the request object. 
3. We will also exports a middleware called `requireToken` that we can add to our routes. This middleware can restrict access to authenticated users. 
4. The `createUserToken` uses the `jsonwebtoken` package to create and encrypt the tokens according to the standard, which we'll call from our `/login` route.

```jsx
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// Require the needed npm packages
const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Require the specific `strategy` we'll use to authenticate
// Require the method that will handle extracting the token
// from each of the requests sent by clients
const { Strategy, ExtractJwt } = require('passport-jwt')

// User model import, accessed by JWT verify function
const User = require('../models/User')

///////////////////////////////
// CONFIGURATION
////////////////////////////////

// Create a secret to be used to encrypt/decrypt the token
// This can be any string value you want -- even gibberish.

const secret = process.env.JWT_SECRET || 'yolo unique secrets'

// Minimum required options for passport-jwt

const opts = {
		// How passport should find and extract the token from
	  // the request.  We'll be sending it as a `bearer` token
	  // when we make requests from our front end.
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		// Any secret string to use that is unique to your app
	  // We should store this in an environment variable so it
	  // isn't ever pushed to GitHub!
    secretOrKey: secret
}

///////////////////////////////
// AUTHENTICATION FUNCTIONALITY
////////////////////////////////

const verify = async (jwt_payload, done) => {
		// In the callback we run our custom code. With the data extracted from
	  // the token that we're passed as jwt_payload we'll have the user's id.
	  // Using Mongoose's `.findById()` method, we find the user in our database
    try {
				// To pass the user on to our route, we use the `done` method that
		    // that was passed as part of the callback.  The first parameter of
		    // done is an error, so we'll pass null for that argument and then
		    // pass the user doc from Mongoose
        const user = await User.findById(jwt_payload.id)
        return done(null, user)
    }catch(err){
				// If there was an error, we pass it to done so it is eventually handled
		    // by error handlers in Express
       return done(err)
    }

}

// We're configuring the strategy using the constructor from passport
// so we call new and pass in the options we set in the `opts` variable.
// Then we pass it a callback function that passport will use when we call
// this as middleware.  The callback will be passed the data that was
// extracted and decrypted by passport from the token that we get from
// the client request!  This data (jwt_payload) will include the user's id!

const strategy = new Strategy(opts,verify)

// Now that we've constructed the strategy, we 'register' it so that
// passport uses it when we call the `passport.authenticate()`
// method later in our routes
passport.use(strategy)

// Initialize the passport middleware based on the above configuration
passport.initialize()

// Create a variable that holds the authenticate method so we can
// export it for use in our routes
const requireToken = passport.authenticate('jwt', {session: false})

// Create a function that takes the request and a user document
// and uses them to create a token to send back to the user
const createUserToken = (req, user) => {
	  // Make sure that we have a user, if it's null that means we didn't
	  // find the email in the database.  If there is a user, make sure
	  // that the password is correct.  For security reason, we don't want
	  // to tell the client whether the email was not found or that the
	  // password was incorrect.  Instead we send the same message for both
	  // making it much harder for hackers.

		if(
			!user ||
			!req.body.password ||
			!bcrypt.compareSync(req.body.password, user.password)
			){
	        const error = new Error("The provided username or password is incorrect")
	        error.statusCode = 422
	        throw error
    }

		// If no error was thrown, we create the token from user's id and
	  // return the token
    return jwt.sign({id: user._id},secret,{expiresIn: 36000 })
}

module.exports = {
    requireToken,
    createUserToken
}

```

### Add the Auth Controller

Now that we have a way to create a token for users when they login, we can add the logic to our `/login` route. 

1. Open the `controllers/auth.js` file.
2. Use object de-structuring to require `createUserToken` from the auth file:
    
    ```jsx
    const { createUserToken } = require("../middleware/auth");
    ```
    
3. Update the `/login` route as follows:
    
    ```jsx
    // SIGN IN
    // POST /auth/login
    router.post("/login", async (req, res, next) => {
      try {
        const loggingUser = req.body.username;
        const foundUser = await User.findOne({ username: loggingUser });
        const token = await createUserToken(req, foundUser);
        res.status(200).json({
          user: foundUser,
          isLoggedIn: true,
          token,
        });
      } catch (err) {
        res.status(401).json({ error: err.message });
      }
    });
    
    ```
    

Go test registering in Postman!!! Use a POST request that has a body containing an JSON object with an username, now we should see an additional token property added to the response. That signed `token` should now see a response that looks like:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNGQ4NWE0ODE4ODVhM2Q4ZjE5NTNhNSIsImlhdCI6MTU4MjIwMjAyNSwiZXhwIjoxNTgyMjM4MDI1fQ.OgmgQQ_yRyAKZlqGSglrFRjpbEwB5CnKj3HxyhznTss"
}
```

You can also add a 'create token' process to your register route; this allows your new user to be authenticated without prompting them to `login` immediately.

### **Register Refactor:**

```jsx
router.post("/register", async (req, res, next) => {
  //   has the password before storing the user info in the database
  try {

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const pwStore = req.body.password;
    // we store this temporarily so the origin plain text password can be parsed by the createUserToken();

    req.body.password = passwordHash;
    // modify req.body (for storing hash in db)

    const newUser = await User.create(req.body);
    
		if (newUser) {
      req.body.password = pwStore;
      const authenticatedUserToken = createUserToken(req, newUser);
      res.status(201).json({
        user: newUser,
        isLoggedIn: true,
        token: authenticatedUserToken,
      });
    } else {
      res.status(400).json({error: "Something went wrong"})
    }
  } catch (err) {
    res.status(400).json({ error : err.message });
  }
});

```

We're so close to done now! All that's left is to set up our people route to use the token!

## Add Authorization

Along with authenticating the user, we now have to handle user authorization. What's the difference? When the user logs into the system successfully, we *authenticate* them based on the credentials they send (such as a proper combination of email and password). Authorization means determining whether the user is actually authorized to perform some action in the system.

With the token, we can determine which user is making a request. With that information, we can determine if the specific user making the request is *authorized* to carry out a specific action, such as create documents or delete or update a specific document.

To add this functionality, we have to change up the update and delete methods that we're using because we want to test that the user is allowed to update/delete the record before we carry out that operation. So, we'll use the `findById` method, check the that user is authorized for that document, then we'll separately do the delete or update.

1. Add a handleValidateId function in `middleware/auth.js` as follows:

```jsx
const handleValidateOwnership = (req, document) => {
  const ownerId = document.owner._id || document.owner;
  
	// Check if the current user is also the owner of the document
  
	if (!req.user._id.equals(ownerId)) {
    throw Error("Unauthorized Access");
  } else {
    return document;
  }
};

```

1. Open the `controllers/people.js`.
2. Add `handleValidateOwnership` and `requireToken`to the de-structured require statement  from auth.

```jsx
const { handleValidateOwnership, requireToken } = require("../middleware/auth");
```

Lets break down what happens with our `requireToken` middleware:

1. A request is made to a protected route
2. Express identifies the correct path
3. `passport.authenticate()` is executed (from our import of `requireToken`)
4. The request object is intercepted and its headers are parsed and the header 'Authorization' is parsed according to the ExtractJWT “bearer” strategy.
5. The contents are inspected by the `passport-jwt` tools and a 'next()' is called, allow the request to continue.
6. If the token is missing, expired, or invalid in some way an error will be thrown, preventing the process from completing.
7. Update the POST, PUT and DELETE routes as follows:

```jsx
// CREATE
// POST api/people
router.post("/", requireToken, async (req, res, next) => {
  try {
		// passport will verify the the token passed with the request's Authorization headers and set the current user for the request. 
		const owner = req.user._id
		req.body.owner = owner
    const newPerson = await People.create(req.body);
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

// UPDATE
// PUT api/people/5a7db6c74d55bc51bdf39793
router.put("/:id", requireToken, async (req, res) => {
    try {
      handleValidateOwnership(req, await People.findById(req.params.id))
      const updatedPerson = await People.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      res.status(200).json(updatedPerson)
    } catch (error) {
      //send error
      res.status(400).json({error: error.message})
    }
})

// DESTROY
// DELETE api/people/5a7db6c74d55bc51bdf39793
router.delete("/:id", requireToken, async (req, res, next) => {
  try {
    handleValidateOwnership(req, await People.findById(req.params.id));
    const deletedPerson = await People.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

```

Phew... that was a lot! All that's left now is to add the sign out feature. Because JWT rely on an expiration feature, rather than tracking current log ins. There is no server-side session to destroy, so a token stored locally would have to be destroyed / replaced with a null value. Learn more about your options [here](https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6).

## Express endpoint example for nullifying token / changing state

```jsx
router.get( "/logout", requireToken, async (req, res, next) => {
  try {
    const currentUser = req.user.username
		delete req.user
    res.status(200).json({
      message: `${currentUser} currently logged out`,
      isLoggedIn: false,
      token: "",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

```