# Intermediate JS Topics

### Primitive vs. Reference Types (Objects)

The following diagram shows that JS objects, including object sub-types such as Arrays, are stored in a separate part of memory known at the "heap".

![](https://i.imgur.com/1NUgHM3.png)

Accordingly, instead of an actual value being held in the variable's "slot" in memory, a reference/pointer is held instead.

In JS, objects are considered equal to each other only if they are the very same object in memory.  For example, in the above diagram, the `clone` and `person` variables reference the same object, thus:

```
clone === person  //-> true

```

However, different objects are not considered equal, even if they contain identical properties:

```
const car1 = {make: 'Toyota'};
const car2 = {make: 'Toyota'};
car1 === car2  //-> false

```

### Scope - `var` vs. `let`/`const`

`var` has *function scope* (also known as *local scope*), for example:

```
// A single top-level "Global" (outside of functions) scope exists
var result = 100;

function add(n1, n2) {
  var result = n1 + n2;
  return result;
}

function subtract(n1, n2) {
  var result = n1 - n2;
  return result;
}

console.log( add(10, 5) )  //=> 15
console.log( subtract(10, 5) )  //=> 5
console.log( result )  //=> 100 (global variable)

```

Note that each `result` variable is an independent variable.

Now, let's take a look at `let`/`const` which have more limited *block scope*.  In computer programming, it's considered a better practice to limit a variables scope (access) which reduces the chance of accidentally changing a variable's value.

In JS, we define a *block* using curly braces, thus the above code example would behave identically if `let` or `const` were used instead of `var` because the functions' curly braces define a block.

In the following code example:

```
// var version - will work because var has function scope
function getMsg(emotion) {
  if (emotion === 'happy') {
    var msg = 'Happy message';
  } else if (emotion === 'sad') {
    var msg = 'Sad message';
  }
  return msg;
}

```

The above example will work because the `msg` variable is accessible anywhere within the function (it has function scope thanks to the use of `var`).

However, let's see what happens if we use `let` instead...

```
// let version - will not work because let has block scope
function getMsg(emotion) {
  if (emotion === 'happy') {
    let msg = 'Happy message';     // this msg is only accessible within its enclosing curly braces
  } else if (emotion === 'sad') {
    let msg = 'Sad message';       // this msg is only accessible within its enclosing curly braces
  }
  return msg;
}

```

Testing out the above will cause an error because the two `msg` variables are scoped to their code block and are not accessible outside of those blocks causing the `return msg;` to raise an error.

In order to be able to use `let` would require that the `msg` variable be declared "higher up" in the function, for example:

```
// let version - will now work because msg now lives in the function's scope
function getMsg(emotion) {
  let msg;                     // msg is now scoped to the function's block
  if (emotion === 'happy') {
    msg = 'Happy message';     // update to the msg variable
  } else if (emotion === 'sad') {
    msg = 'Sad message';       // update to the msg variable
  }
  return msg;
}

```

### Type Conversion

JavaScript is very relaxed when it comes to data types. Contrary to non-dynamic languages, a variable can change its type.

```
let m = 15;  // I'm a number
m = 'hey';   // Now I'm a string!

```

### Beware of Implicit Conversion

JavaScript is friendly and tries to help us whenever it can. However, we all know that sometimes it's better to be left alone.

**Try adding a string to a number.  What did JS do?**

**Now try comparing a number and a string containing the same digits using the equality (`==`) comparison operator**

```
13 == "13"  // returns true!

```

This is why, unless there's a reason not to do so, we use the *strict equality operator* (`===`) as it will not perform type conversion.

### Explicit Type Conversion

We can easily convert a number to a string using the `toString()` and `toFixed()` methods:

```
let n = 123.456;
let s1 = n.toString();  // "123.456"
let s2 = n.toFixed(2);  // "123.46"

```

There are a couple of handy methods used to convert strings to numbers: `parseInt()` and `parseFloat()`

```
let s = "1234.567";
let n1 = parseInt(s);  // 1234
let n2 = parseFloat(s);  // 1234.456

```

Remember however, that the data type for both flavors, integer and float (short for floating-point), is *number*.