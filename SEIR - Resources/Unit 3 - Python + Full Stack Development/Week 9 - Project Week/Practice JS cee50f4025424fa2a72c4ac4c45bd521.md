# Practice JS

# Roadmap 🗺️

In this lesson we will be going over some advanced js to prepare for React. These tools will be used quite often in this unit so let's get a feel for them now.

# Learning Objectives ✅

- Refresh our JS knowledge
- Go over some advanced JS features
- Learn how to request data from an external api using Fetch

# Destructuring

***Destructuring assignment*** in JS is a really powerful ability that allows us to "unpack" an object or array. This feature is available for us to pull out only what we need when working with these data types.

## Object **{ }**

Let's take a look at an object with a collection of properties.

```jsx
const instructor = {
	name: "Eric",
	awake: true,
	props: {
		shirt: "black",
		computer: {
			type: "mac"
		}
	},
	sayHello(){
		console.log("Hello!");
	}
}

```

If we wanted to access a series of properties off the object we would have to do the following:

```jsx
const name = instructor.name;
const awake = instructor.awake;
const computer = instructor.props.computer;

```

Now if we wanted to shorten this syntax we can do the following:

```jsx
const {name, awake} = instructor;
const { computer } = instructor.props;

```

This syntax is doing the same thing as the manual assignment, but allows us to "unpack" the object all on the same line. This creates a series of variables with the same name as the object key.

<aside>
🚨 One thing that is important is you can only destructure keys that exist within the object. You **CAN NOT** provide a different name for the variable.

</aside>

This is really powerful when we are accessing nested fields and do not want to have to repeat ourselves.

```jsx
const instructor = {
	name: "Eric",
	awake: true,
	props: {
		shirt: "black",
		computer: {
			type: "mac"
		}
	},
	sayHello(){
		console.log("Hello!");
	},
	logProps(){
    const { shirt, computer } = this.props;
    const { type } = computer;
    console.log(shirt);
    console.log(type);
  }
}

```

Further more we can use a special syntax to destructure nested levels for objects.

```jsx
logProps(){
    const { shirt, computer: { type } } = this.props;
    console.log(shirt);
    console.log(type);
  }

```

### Resources 📚

[How to Use Object Destructuring in JavaScript](https://dmitripavlutin.com/javascript-object-destructuring/)

## Array **[ ]**

For an array destructing is similar with one big difference. In arrays we can name the destructured values.

```jsx
const pets = ["Duke", "Sushi"];
const [ dog, cat ] = pets;

```

When it comes to array destructuring because arrays are an ordered collection we will always destructure in the same order.

```jsx
const pets = ["Duke", "Sushi"];

const [ dog, cat ] = pets;

// dog === pets[0]
// cat === pets[1]

```

- ❓ Why is array destructuring valuable?
    
    We can create developer tools that return an array that can renamed.
    

### Simple example

```jsx
function returnInstructors(){
  return ["Matt", "Doug"];
}

const [partnerOne, partnerTwo] = returnInstructors();

```

- Advanced Example
    
    ```jsx
    const state = {};
    
    const useState = defaultValue => {
      let stateIndex = 0;
      if(Object.keys(state).length === 0){
        state[stateIndex] = defaultValue;
      } else {
        stateIndex = Object.keys(state).length;
        state[stateIndex] = defaultValue;
      }
    
      const updateState = (value) => {
        state[stateIndex] = value;
      }
    
      return [state[stateIndex], updateState];
    }
    
    const [person, setPerson] = useState("Dalton");
    
    setPerson("Adonis");
    
    ```
    

### Resources 📚

[Destructuring assignment - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Function Parameters

Another great use case for destructuring is inside of function parameters. Originally if we wanted to access a direct property of an object provided to a function we would have to use dot notation.

```jsx
function logName(personObj){
  console.log(personObj.name);
}

logName({ name: "Eric" });

```

With parameter destructuring we can access the property directly.

```jsx
function logName({name}){
  console.log(name);
}

logName({ name: "Eric" });

```

### Resources 📚

[Destructuring objects as function parameters in ES6](https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6)

# ... Operator

The three-period operator has two names in JS. Spread and Rest. Its name is determined by how it is being used.

## Spread

The spread operator we have seen in previous lessons. The spread operators job is to combine the values of one object into another. This works for array as well similar to `.concat()`

### Array

If we wanted to combine arrrays we could use the concat method to do so.

```jsx
const arr = [ 1,2,3,];
const arrTwo = arr.concat([4,5,6]);

```

With the spread operator we can do this as well

```jsx
const arr = [1,2,3];
const arrTwo = [...arr, 4,5,6];
```

Using the spread operator is often easier to follow than the method counter part. That being said we can even mix and match as many as we wish.

```jsx
const arr = [ 1,2,3,]
const arrTwo = [...arr,4,5,6];
const arrThree = [0, ...arr, 7];
const superArr = [...arr, ...arrThree, ...arrTwo, "Whoa"];
```

### Object

For objects we can use a very similar syntax.

```jsx
const additionalProps = {
  shirt: "black"
}

const person = {
  name: "Eric",
  sayHello(){
    console.log("Hello");
  },
	...additionalProps
}

```

This will create the person object with the fields we defined, but then add in the additional fields defined in the other object.

<aside>
🚨 One important thing to point out is that if the objects share the same key the one that is defined last will override the previous. This is a really handy tool for resetting values.

</aside>

```jsx
const defaultState = {
	name: "",
	job: ""
}

// after user interaction our state changes
let currentState = {
	name: "Eric",
	job: "Instructor",
	isLoggedIn: true
}

// if we ever want to go back to default values
currentState = {
	...defaultState
}

// State will now match the default state. Leaving the value of isLogged in alone.
// This is because isLoggedIn is not in the defaultState object.

```

## Rest

The rest operator is when we use the three periods in a function's parameters. This is used as a way to accept an unlimited number of arguments.

```jsx
// all unassigned arguments will be passed into args
function restArgs(data, ...args){
  console.log(args);
}

restArgs("data", "cat", "bird", "thing", "other thing");
// from cat forward would be an array ["cat","bird","thing","other thing"]

```

We have seen this used in express for our middleware functionality. Let's take a look at a very rudamentary example of this in action.

```jsx
const app = {
  get(route, ...args){
    const req = {};
    const res = {};
    console.log("GET RUNNING");
    console.log(args);
    const next = args[1];
    args[0](req,res,next);
  }
}

function middleware(req,res,next){
  console.log("IN MIddleware!")
  next(req,res);
}

app.get("/", middleware, function(req,res,next){
  // logic for the view function
  console.log(req,res,"View Function");
});

```

### Resources 📚

[Spread syntax (...) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

# Array Methods

Next we will revist some array methods that we will be using often in react.

## .map

This method create a new array that is a modified version of the original array we called the method on.  The method takes in a callback function to invoke per element of the array. This callback function must return a value for the new array index.

```jsx
const caffeineItems = ["Yerba Mate","Coffee"];

const caffeineObjects = caffeineItems.map(function(item, index){
  return { name: item, caffeineLevel: index };
});

```

### Resources 📚

[Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## .filter

This method is similar to .map but will take in a conditonal to decide on what should be returned to the new array. The return from the conditional MUST be a true or false value.

```jsx
const nums = [1,2,3,1,1,2,3,1];

const removedOnes = nums.filter(function(value, index){
  if (value !== 1) return true;
});

// this filter will return all values that are not a one

```

### Resources 📚

[Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## .includes

This method is a simple one, but powerful when we want to check if someting exists inside an array. Once  it has determined if it exists or not we will get back a true or false value.

```
const nums = [1,2,3,1,1,2,3,1];
const hasFive = nums.includes(5); // this will return false

```

### Resources 📚

[Array.prototype.includes() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

# 🚀Fetch 🌐

For our final section we will be jumping into using external apis!

## What is an API?

API is short for application programming interface. This is an application that is meant to be interacted with by other applications and directly interacted with by the end user. There are many available apis filled with all sorts of data that we can request.

We can check out a list of apis and test them out from apilist!

[A collective list of APIs. Build.](https://apilist.fun/)

## Standard Fetch Call

Just like how we can type into our browser and create requests to a server we can use a built in feature in JS called fetch to send requests.

### Syntax

The base syntax of a fetch request is to invoke the fetch function and pass in the url you are wanting to send a request to.

```jsx
fetch("url")

```

> NOTE: The default request method of fetch is a GET request.
> 

Now a network request takes time. So if we try to log the return of a fetch request we will see the following:

```jsx
Promise {<pending>}

```

To resolve a promise we will have to use the .then method on the promise object.

This method takes in a callback function to execute once the promise has been resolved.

```jsx
fetch("url").then(function(response){
	console.log(response);
});
```

The response object should now look something like this:

```jsx
Response {type: "basic", url: "url", redirected: false, status: 404, ok: true, ...}

```

There are several more properties than what is showed here. For example the body of the request holds any data in the response. Let's make a request to an api that is created for testing purposes.

The api we will be hitting is a custom pokemon api that responses with json data.

```jsx
fetch("https://pokeapi.co/api/v2/pokemon")
  .then(function(response){
    console.log(response);
  });

```

Your response should now reflect new url.

```jsx
Response {type: "cors", url: "https://pokeapi.co/api/v2/pokemon", redirected: false, status: 200, ok: true, ...}

```

### BUT WHAT ABOUT THE DATA?!

Now we still do not see our data returned from the api. This is because it is inside of the response object under the body property.

We can access the body json data as so:

```jsx
fetch("https://pokeapi.co/api/v2/pokemon")
  .then(function(response){
    console.log(response.json());
  });

```

What is our response?

```jsx
Promise {<pending>}

```

![](https://media.giphy.com/media/Ysce790SgjJK0/giphy.gif)

Yup! It takes time for js to parse the json object in the request so this is also a promise. So for us to get the json data we will have to return the json and chain another `.then()` statement.

```jsx
fetch("https://pokeapi.co/api/v2/pokemon")
  .then(function(response){
    return response.json();
  })
Object
  .then(function(data){
    console.log(data);
  });

```

Now we can finally see our response of pokemon data! Now this response is going to be different depending on the api because each api is going to be different.

```jsx
{
    "count": 1281,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        ...
    ]
}
```

## Fetch with Configuration 🔧

Another feature to Fetch is that we can add in a configuration object. This configuration object allows us to add in additional details of the request. Let's play around with another api.

Cat Facts Api

[cat-facts](https://alexwohlbruck.github.io/cat-facts/?ref=apilist.fun)

The configuration object is passed in as a secondary argument. This object has a variety of configurations available as an example which method the request will use. In future lessons we will go over other configurations for fetch.

```jsx
fetch(
		"https://cat-fact.herokuapp.com/facts",
		{
			method: "GET"
		}
	).then(function(response){
		   return response.json();
		  })
	  .then(function(data){
	    console.log(data);
	  });

```

Enjoy your cat facts!

## Fetch with Api Keys 🔑

Often Apis will require a key to gain access to their data. This is to protect the data from malicous use and gives the api owner control to remove a key's permisson if it is being misused. Let's take a look at a few ways to use an api key.

### Query Api Key

A common way an api will request an api key is as a query parameter.

```jsx
"url/?apikey=value"

```

To test this out we will be using the giphy api!

[GIPHY Developers](https://developers.giphy.com/)

According to their docs we will need to pass two query parameters. A search paramater and the api key.

```jsx
"https://api.giphy.com/v1/gifs/search?q=value&api_key=value"

```

For this example we will search for cat gifs and we will provide an api key to you.

```jsx
fetch(
		"https://api.giphy.com/v1/gifs/search?q=cat&api_key=g7FJSuBOaK5Be2W7dM6NceeBQ29JmuoG",
		{
			method: "GET"
		}
	).then(function(response){
		   return response.json();
		  })
	  .then(function(data){
	    console.log(data);
	  });

```

Our response should have a collection of cat gifs! Yay!

```
{data: Array(50), pagination: {…}, meta: {…}}

```

![](https://media3.giphy.com/media/BzyTuYCmvSORqs1ABM/200.gif)

### Api key in Headers

Another way an api can request a key is in the headers of a request. For this we will check out the r6 api.

[R6 API](https://r6-api.herokuapp.com/)

To set the headers in a request we will use the fetch configuration object.

```
fetch("<https://r6-api.herokuapp.com/api/v1/operators>",{
  method: "GET",
	// here we can add a headers key
  headers: {
		// inside the headers we are adding a new property that will hold our key
    api_key: "8eae1285-2647-4dc6-88dd-acbffdd694ce"
  }
})
  .then(function(response){
        return response.json();
   })
  .then(function(data){
        console.log(data);
   });

```

And just like that we can access the data! Pretty cool!

### Resources 📚

[Fetch](https://javascript.info/fetch)

[Using Fetch - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)