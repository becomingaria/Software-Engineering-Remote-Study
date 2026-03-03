# Node Modules

[Intro to Node](../Intro%20to%20Node%201d38f43441494eee87d37e98cd01ef27.md)

Modules in Node allow us to **modularize** and **reuse** code in a Node app.

Modules can contain any number of JS functions and related data.

### Modules Built Into Node

Node itself comes with several *core modules*, such as the `http` and `fs` modules.

Let's use the core `fs` module to create a file:

```jsx
// main.js

const fs = require('fs');

fs.writeFile('./hello.txt', 'Hello!', function() {
  console.log('done creating file');
});

```

As we can see that the `fs` module "exports" an `object` that has methods such as `writeFile`.

### Our Own Node Modules

In a Node application, **every** JavaScript file is a module!

A Node app's modules (files) can be put in any folder within the project allowing us to create modules inside of aptly named folders, such as `models`, `routes`, `controllers`, `views`, etc.

A module is "loaded" into a Node app using Node's `require` function - just like we did to load the `fs` module. This `require` syntax is referred to as CJS(common javascript modules) and is the default in node.js. You may encounter alternative module loading syntaxes such as ESM(ECMAScript module syntax) when we begin working with react, but for right now, it's adequate just to understand that the use of `require` is typically associated with CJS module syntax.

Let's create a file/module named **days-of-week.js** by entering `touch days-of-week.js` in Terminal or by using VS Code's GUI.

Every Node module has a global `module` object - let's log it out and check out its properties:

```jsx
// days-of-week.js

console.log(module);

```

Now let's run our Node module by typing `node days-of-week` in Terminal.

We're getting an inside look at how Node implements its module system:

```jsx
Module {
  id: '.',
  path: '/Users/username/code/first-node',
  exports: {},
  filename: '/Users/username/code/first-node/days-of-week.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/username/code/first-node/node_modules',
    '/Users/username/code/node_modules',
    '/Users/username/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

```

Each module is uniquely identified by its fully qualified filename (including the folder path). This allows modules to be named the same, as long as they exist in different folders.

The property on `module` that we're really interested in though is `exports`...

### `module.exports`

The `exports` property on the `module` variable is used to "export" whatever functionality should be exposed by the module...

### Exporting a Single Piece of Functionality

Whatever is assigned to `module.exports` can be accessed by any number of other modules using the `require` function we saw earlier.

Let's verify this by assigning a string to `module.exports`:

```jsx
// days-of-week.js

module.exports = 'SEI Rocks!';

```

Now in **main.js**, we can now put the `require` function to work:

```jsx
// main.js

const daysOfWeek = require('./days-of-week');
console.log(daysOfWeek);  // -> SEI Rocks!

```

Then type `node main` in Terminal to test it out!

It is convention to name the variable the same as, or similar to, the name of the module being required.

When we require our app's own modules, we need to always provide a relative path, i.e., starting with either a `.` or `..`

### 👉 **You Do:** Update `module.exports` - (1 min)

1. Instead of exporting a string, change **`days-of-week.js`** to export the following array instead:
    
    ```
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    
    ```
    
2. Run `node main` again to check it out.

> Key Point:  require() returns whatever module.exports holds!
> 

If we updated:

```jsx
// main.js

const daysOfWeek = require('./days-of-week');
console.log(daysOfWeek);  // -> SEI Rocks!

```

to:

```jsx
const daysOfWeek = require('./days-of-week')[1];
console.log(daysOfWeek);

```

- ❓ What would be logged out?
    
    **`Mo`**
    

### Exporting Lot's of Functionality

`module.exports` is initialized to an empty object by default allowing us to easily create properties on it.

Creating properties on `module.exports` is a way to expose multiple pieces of functionality.

Let's try it out:

```jsx
// days-of-week.js

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.weekdays = weekdays;

module.exports.getWeekday = function(dayNo) {
  if (dayNo < 0 || dayNo > 6) dayNo = 0;
  return weekdays[dayNo];
};

```

Now let's test it in **main.js**:

```jsx
const daysOfWeek = require('./days-of-week');

const day = daysOfWeek.getWeekday(5);
console.log(day);

```

`Fr` should be logged out.

> Key Point:  Again, require() returns whatever module.exports is assigned or holds!
> 

Another common approach to exporting multiple pieces of functionality like above would be to assign a new object like this:

```jsx
// days-of-week.js

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports = {
  weekdays,
  getWeekday
};

function getWeekday(dayNo) {
  if (dayNo < 0 || dayNo > 6) dayNo = 0;
  return weekdays[dayNo];
}

```

### `exports` Shortcut Variable

- Node also provides a "shortcut" variable named `exports` that references that very same object that `module.exports` does.
- For example, could do this:
    
    ```jsx
    exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    ```
    
    instead of:
    
    ```jsx
    module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    ```
    
- **IMPORTANT:** It is not possible to ***assign*** functionality to the `exports` shortcut variable because it will stop referencing `module.exports`.

### Module Miscellaneous

- Since modules are about code reuse, they can be required an unlimited number of times throughout the application.
- The code in the module **only runs the first time the module is required**.
- Any variables declared within a module are local to the module - they do not pollute the global scope.
- The global scope in a Node application is represented by an object named `global`, **unlike the browser's ________ object**.

### ❓ Review Questions - Modules

- (1) What are modules used for in Node?
    
    **Node modules are used to modularize, organize code into separate files,** making the functionality they export reusable by any other module.
    
- (2) What object in a Node module can we use to attach or assign functionality to?
    
    **`module.exports`**
    
- (3) How many times can we `require` a module in our program?
    
    **As many times as you need to…**🎉
    

Assuming the following code:

```jsx
// add.js module
exports = function (x, y) { return x + y };
```

and

```jsx
// use the add.js module
const add = require('./add');
let sum = add(5, 10);
```

- (4) Why won't the following code work as intended?
    
    **Assigning a single piece of functionality to the `exports` shortcut/convenience variable doesn't work.  We can only add properties to it.**
    

## 6. Practice Exercises  - (15 mins)

### 💪 Node Modules Practice - Single Piece of Functionality

Create a module named `random.js`:

1. That has a function **assigned** to the `module.exports` object.
2. The function should define two parameters, `min` & `max`.
3. The function should return a random number, as an integer, between `min` & `max`, inclusive. This code snippet should look a bit familiar:
    
    ```jsx
    Math.floor(Math.random() * (max - min + 1) + min);
    
    ```
    
4. Test the module in `main.js` like this:
    
    ```jsx
    const random = require('./random');
    for (let i = 0; i < 10; i++) {
      console.log( random(100, 200) );
    }
    
    ```
    

### 💪 Node Modules Practice - Multiple Functionality

Create a module named `circle.js`:

1. That exports two functions, both of which have a `radius` parameter defined.
2. The functions should be named `area` & `circumference`.
3. The functions should...
    - `area`: Computes the area of a circle (radius squared X Pi), with the radius provided as an argument.
    - `circumference`: Computes the circumference of a circle (radius X 2 X Pi), with the radius provided as an argument
4. Hint: In JS we use `Math.PI` for Pi.
5. Test the module in `main.js` like this:
    
    ```jsx
    const circle = require('./circle');
    console.log( circle.area(50) );  // 7853.98...
    console.log( circle.circumference(75) );  // 471.23...
    
    ```
    

## Conclusion

In the next lesson, you will use one of the most popular Node modules, `Express`, that turns Node into a capable web server!

## 🚀 Hungry For More

### `npm` - Node Package Manager

Node uses a package management system to distribute open-source packages called [npm](https://www.npmjs.com/) (**N**ode **P**ackage **M**anager).

Usually a package distributes a Node module, however, sometimes the package distributes a CLI instead of a module we would use in our program.

Node programs use a `package.json` file that tracks the installed modules that the app depends upon.

Tracking an application's dependencies in `package.json` removes the necessity to push the app's node modules to the projects GitHub repo - this saves **MASSIVE** file storage and bandwidth.

If you start a Node app from scratch, the first thing you should do is create the `package.json` file by entering the following command:

```
npm init

```

It's okay to accept all of the default settings.  To accept the defaults without being prompted, you can run the command as follows:

```
npm init -y

```

Now, let's use `npm` to download and install a package:

```
npm install request

```

There is now a `node_modules` folder that contains a folder for the `request` module and its many dependencies.

There's also a new `package-lock.json` file that npm uses to track dependencies and unlike `package.json`, should not be edited.

Note: it's highly recommended that `node_modules` be added to your `.gitignore` file.

We can now require the `request` module in **main.js** and make HTTP requests:

```jsx
// Don't specify path when module is in node_modules
const request = require('request');
request(
  'http://jsonplaceholder.typicode.com/users',
  function(err, res, body) {
    console.log(body);
  }
);
```

> Note the first parameter in the callback is err.<br>This "error-first" callback signature is prevalent throughout Node.
> 

Type `node main` to try it out.

Examining the `packages.json` file reveals that it's structured something like this:

```jsx

{
  "name": "first-node",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "User <email@user.com>",
  "license": "MIT",
  "dependencies": {
    "request": "^2.88.0"
  }
}
```

The `package.json` is used to install a project's dependencies.

Installing dependencies is necessary after cloning a repo or when using starter code for a lesson.

To demonstrate this, first delete the `node_modules` file, then...

Now we can install our app's dependencies like this:

```
npm install

```

Witness the return of `node_modules`!

### Blocking vs. Non-Blocking Code

Learn more about [Blocking/Non-Blocking, Async/Sync](http://stackoverflow.com/questions/10570246/what-is-non-blocking-or-asynchronous-i-o-in-node-js) code.