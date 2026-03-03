# Arrow Functions

![](https://i.imgur.com/gGKrqF5.png)

# ES2015 (ES6) - Arrow Functions Walk-Through

### Arrow functions have a more terse syntax than regular functions (`function` keyword):

```jsx
// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares = [1, 2, 3].map(x => x * x);

```

### A single parameter need not be wrapped in parens:

```jsx
x => { ... }  // one parameter
() => { ... }  // no parameters
(x, y) => { ... }  // two or more parameters

```

However, even though we can skip wrapping a single parameter with parens, many style guides recommend using them anyway:

```jsx
(x) => { ... }  // one parameter

```

### The statement block of an arrow function behaves just like that of a regular function:

```jsx
const getGrade = (score) => {
  if (score === 100) return 'A+';
  score = Math.floor(score / 10);
  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
};

```

### If there's only a single **expression** (not a statement), curly braces are optional:

```jsx
const logThis = () => { console.log(this) };
const logThis = () => console.log(this);

```

### Arrow functions will implicitly return the result of an **expression** without a block (braces):

```jsx
const add = (x, y) => { return x + y };

// Ideal single-statement arrow function
const add = (x, y) => x + y;

// Returns undefined (blocks are like reg functions)
const add = (x, y) => { x + y };

// Syntax error, must be an expression
const add = (x, y) => return x + y;

```

### To implicitly return a JS object, wrap it in parens to avoid the curly braces of the object being interpreted as a statement block:

```jsx
let todos = ['Buy milk', 'Mow lawn'];

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// Wrap the implicit returned object in parens
let todoObjects = todos.map((todo) => ({todo: todo, done: false}));

```

### All arrow functions are expressions. There's no such thing as an arrow function definition/declaration.

```jsx
// Nope, syntax error (no declarations for arrow functions)
add(x, y) => x + y;

// This is what you want - a function expression
const add = (x, y) => x + y;

```

### Arrow functions do not have an `arguments` "array-like" object:

```jsx
function checkArgs() { console.log(arguments); }
checkArgs(1, 'abc') // outputs [1, "abc"]

const checkArgs = () => console.log(arguments);
checkArgs(1, 'abc') // outputs Uncaught ReferenceError: arguments is not defined

```

### `this` Keyword Binding

`this` in an arrow function is always set to the same *context* value as its enclosing function (or the global object if not within a function).

```jsx
const userRoom = {
  users: [],
  loadUsers: function() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      // below will work
      .then((users) => {
        this.users = users;
      });
      // below will not work
      // .then(function(users) {
      //   this.users = users;
      // });
  }
};

```

> Due to security policy, test the above code in a tab browsed to https://jsonplaceholder.typicode.com/.
> 

Note that it's not possible to **explicitly set** `this` in an arrow-function using the `call`, `apply` or `bind` methods.

### Because of the binding rules of `this` in arrow functions, **do not** use arrow functions for:

- Methods in objects that need to access other properties within the object.
    
    For example, this works as expected:
    
    ```jsx
    const ticket = {
      airlines: 'Air SEI',
      flight: '0116',
      seat: 'C19',
      print: function() {
        console.log(`${this.airlines}: flight ${this.flight} / seat ${this.seat}`);
      }
    }
    
    ```
    
    But the following doesn't because `this` within the `print` method is bound to window or undefined (in strict mode):
    
    ```jsx
    const ticket = {
      airlines: 'Air SEI',
      flight: '0116',
      seat: 'C19',
      print: () => {
        console.log(`${this.airlines}: flight ${this.flight} / seat ${this.seat}`);
      }
    }
    
    ```
    

Constructor functions also are not a use case for arrow functions because they do not allow JS to set `this` to the shiny new object being created.