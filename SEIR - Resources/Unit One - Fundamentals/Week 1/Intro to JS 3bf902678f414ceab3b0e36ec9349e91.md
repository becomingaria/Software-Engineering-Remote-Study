# Intro to JS

![](https://i.imgur.com/DEsPVNw.png)

# Intro to JavaScript & Data Types

## Learning Objectives

Students will be able to:

- Define Variables Using Proper Naming Conventions
- Identify JavaScript's Data Types

## Setup

There won't be much code written during this introductory walk-through on JavaScript.

However, I'll be using Chrome's Developer Tools to experiment and demonstrate some code - feel free to join me or simply watch and take notes, etc....

To open the DevTools in Chrome, press:

- `option + command + J` (macOS)
- `shift + CTRL + J` (Windows/Linux)

Within the **console** tab we can enter JS code and have it immediately evaluated.

### Turning a Browser Tab Into a Notepad

If you'd like to turn your browser into a convenient notepad, open a tab and copy/paste this snippet into the address bar:

```html
data:text/html, <html contenteditable style="font-family: 'Lucida Console', Monaco">
```

Bookmark it for future use!

## 1. What are Computer Programs?

Before we dive into any particular programming language, we should first consider what programming languages are used for - developing applications.

We develop computer applications/programs to solve problems and/or provide services (entertainment included) to our users.

Generally, applications primarily manipulate and display data.

When we program, we're concerned about the application's:

- Data
- Code (Program Statements)
- Input/Output

![](https://i.imgur.com/Vgn4gbS.png)

## 2. Intro to JavaScript

As the popularity of web-based applications has grown over time, so has the demand for JavaScript developers because JavaScript is the only language included in web browsers.

> **Atwood's Law:**
"Any application that can be written in JavaScript will eventually be written in JavaScript."
*Jeff Atwood, co-founder of Stack Overflow*
> 

### JavaScript's Role

The primary responsibility of JavaScript is to allow developers to implement behavior in web applications via client-side script that runs in the browser.

![](https://i.imgur.com/FwvjQVO.jpg)

> The popularity of a technology known as Node.js has made JavaScript popular outside the browser as well.  We'll learn about Node.js in the next unit!
> 

### A Few Facts About JavaScript:

- Created in 10 days in 1995 by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich).
- Not to be confused with Java (a [compiled language](https://en.wikipedia.org/wiki/Compiled_language)) - although Mr. Eich was tasked with making JavaScript's syntax similar to that of Java's.
- JavaScript is an implementation of [ECMAScript](https://tc39.es/ecma262/), a standard maintained by the [European Computer Manufacturers Association](https://www.ecma-international.org/)).
- JavaScript continues to be updated with new features. The largest update/advancement, version ES2015/ES6, ushered in the era of "Modern JavaScript". [This website](http://kangax.github.io/compat-table/es6/) tracks the status of browser implementations of the latest features.

## 3. Variables

### Purpose

The purpose of a **variable** in computer programming is to hold or reference data. Think of variables as a way to name a "slot" in computer memory used to hold data. Variables are ubiquitous in programming regardless of programming language!

### `var`, `let` or `const`?

Variables in JS are created by declaring them using the `var`, `let` or `const` keywords.

> "Keywords" are predefined/reserved words that have special meaning to a programming language.
> 

`var` was the only option available until the release of ES2015.

So why was `let` and `const` added to the language 20+ years after its creation?

### Scope

The difference between `var` and `let`/`const` is what we call *scope*. Scope pertains to the accessibility of variables & functions at a given point in the code.

We're going to cover scope in an upcoming lesson, but feel free to refer to the Further Study section later for a preview.

### `let` vs. `const`

The difference between `let` and `const` is that a variable declared using `const` cannot be **reassigned** to after its initialization.

For example, `let` and `var` variables can be updated after they are declared:

```
let score = 25;
score = 100;  // no problem

```

However, a `const` variable cannot be updated:

```
const score = 25;
score = 100;  // Uncaught TypeError: Assignment to constant variable

```

Although it's not possible to reassign to a `const` variable, if the variable references an object (or any sub-type of object, e.g., an array), the object itself can be mutated (changed):

```jsx
const person = {name: 'Fred'};
// No problem updating the person object
person.age = 25;  // no error
// Can't reassign to person variable!
person = {name: 'Barney'}  // Uncaught TypeError: Assignment to constant variable

```

### Identifiers & Defining Variables

*Identifiers* are used to give variables a name:

```jsx
// the identifier is "points" and names the variable "points"
let points;
```

> Note:  Identifiers are also used to name other parts of our programs such as functions and classes.
> 

We can also assign a value to a variable at the time we declare it by using the `=` (assignment) operator:

```jsx
let winner = false;
```

and change it's value later...

```jsx
// Update an existing variable named winner
winner = true;
```

Multiple variables separated by commas can be defined in a single statement (this is typically avoided as it can be harder to read):

```jsx
let name = 'Wilma', age, town = 'Bedrock';

// above is equivalent to
let name = 'Wilma';
let age;
let town = 'Bedrock';
```

### Identifier Naming Rules

In JavaScript, when naming variables, the convention is to name the identifiers using lowerCamelCase, e.g.,  `numActivePlayers`.

Identifiers in JS:

- Are case-sensitive!
- Cannot begin with a number
- Can contain letters, digits, underscores, and dollar signs

<aside>
💡 ❓ Is `player-2` a valid variable identifier?

</aside>

**No, because a hyphen is not a letter, a digit, an underscore or a dollar sign.**

**In the case of `player-2`, the JS engine would think we are trying to subtract `2` from a variable named `player`.**

## 4. Explore JavaScript's Data Types

### Dynamic vs. Static Typed Languages

Dynamically-typed languages such as JavaScript, Python and Ruby allow variables to be assigned different types of data during runtime (as the program executes).

For example, in JavaScript we can do this:

```jsx
// Declare variable named data and initialize with a number
let data = 123;

// Reassigning a different type of data is allowed
data = 'Hello';
```

However, statically-typed languages such as Java and C++ require a variable's type to be declared in advance and any data assigned to the variable must be of that type:

```jsx
// Declare variable as an integer and initialize
int data = 123;

// Assigning anything other than an integer raises an error
data = "Hello";  // NOT ALLOWED
```

There is a newer language called [TypeScript](https://www.typescriptlang.org/) gaining popularity - this language is a superset of JS - adding strong typing and other advanced features.  Many developers agree that strong typing makes code less error prone.

### Exploring JavaScript's Data Types

JavaScript has eight main data types:

- Seven primitive data types which represent a **single** value:
    - [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
    - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
    - [Number & BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number-type)
    - [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type)
    - [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)
    - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
- ...and an [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects) type which is a collection of properties, where each property itself can hold any data type, including another object.

In addition to "plain objects", there are several [built-in object sub-types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) such as:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) (yes, functions are objects in JavaScript!)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

> KEY POINT: If a variable does not hold one of the seven primitive values, it is an object!
> 

Let's take a brief look at each of the above data types...

### string

A **string** represents textual data with zero or more characters wrapped by single or double quotation marks such as `"John"` or `'Jane'`. A pair of quotes with nothing between them is still a **string** - an *empty string*.

```jsx
> 'Hello World'
< "Hello World"
> typeof "I'm a string"
< "string"
```

Note that the `typeof` operator itself always returns a string describing the data type.

> ES2015 Note: In addition to using single and double quotes to delimit a string, ES2015 adds a third way by using the backtick character to create what's called a template literal.  We'll learn more about template literals soon.
> 

### number

A **number** represents a numeric value.

Unlike many other programming languages, there is no distinction between integer (`15`, `3`, etc.) and floating-point/decimal types (`17.24`, `3.1416`, etc.).

Internally, JS represents all numbers as floating-point values.

```jsx
> 15
< 15
> typeof 15
< "number"
> typeof 12.34
< "number"
> typeof '12.34'  // what will this return as the type?
```

### bigint

Added with ES2015, a bigint value can hold a massive integer value but it is not commonly needed or used - primarily because it is incompatible with the `number` type and none of the `Math` object's methods work with it.

```
> 15n
< 15n
> typeof 15n
< "bigint"
```

### boolean

Whereas strings and numbers can have a virtually unlimited number of different values, the **boolean** data type only has two possible values: `true` and `false`.

### 💪 You Do: Data Type Examples (1 min)

**Strings**, **numbers** and **booleans** are the most common data types used to represent real-world data in applications.

For example, in a Social Gaming app, we would represent a Gamer's Handle using a **string**.

Before we review the other data types, take a couple of minutes to identify a couple of pieces of information for each of the three common data types that might be used in that social gaming app:

| Application | Data Type | Example Data/Information |
| --- | --- | --- |
| Social Game App | String | gameHandle, ? |
| Social Game App | Number | ?,? |
| Social Game App | Boolean | ?,? |
- Examples...
    - String: Excellent for names and descriptions, e.g., `roomName`
    - Number: Excellent for numerical info, e.g., `pointsScored`, the player's age, etc.
    - Boolean: Great for info that's true/false, yes/no, on/off, etc. For example: `isOnline`, `winner`, etc.
        
        Excellent!  Now let's continue by looking at the other data types...
        

### `null`

The *null* data type has only one value: `null`.

We often assign the value `null` to a variable to represent the fact that it has no "real" value 😊

```jsx
> typeof null
< "object"  // Fail! Remember, JS was written in 10 days by one dude!
> let winner = null;
> winner === null
< true
```

### `undefined`

```jsx
> typeof undefined
< "undefined"
```

Unlike `null` which we use to *intentionally* represent no value, `undefined` is commonly used by JavaScript itself to represent no value:

- A variable that is defined but not assigned to has the value `undefined`, for example:
    
    ```jsx
    // cohort will be undefined
    let cohort;
    ```
    
- A function that doesn't return a value will return `undefined` instead.
    
    ```jsx
    function noReturn() {
      console.log('This function will return undefined');
    }
    // result will be undefined
    let result = noReturn();
    ```
    

We will commonly see `undefined` output in the console. For example, the `console.log()` below returns `undefined` because the `log` method was not designed to return anything:

```jsx
> console.log('hello')
  "hello"
< undefined
```

### `symbol`

The *symbol* data type was added with ES2015 and is primarily used to create uniquely named and less visible properties on objects.

Their use is rare in general JavaScript programming.

### `object`

The seven data types that we've looked at thus far are classified as ***primitive*/*value*** data types because they hold only a **single value**.

Most programming languages also have **complex/reference** data types designed to hold more complex data structures.

JavaScript only has one **reference** type - the **object**.

Objects are collections of zero or more `key: value` pairs known as **properties**.

We will learn more about objects in a later lesson.

For now, let's just verify what `typeof` returns:

```
> typeof {course: 'SEI', cohort: 99}
< "object"
> typeof []
< "object"
```

Although *functions* are also considered objects (*callable objects* to be exact), the `typeof` operator returns a more helpful data type:

```
> typeof function(){}
< "function"

```

Yay, we've covered all eight data types!

## 5. ❓ Review Questions

- Do all variables have a data type?
    
    **Yes.  Even `undefined` is a data type.**
    
- Is `let _save = '';` a valid variable declaration?
    
    **Yes.  Variable identifiers can contain underscores.**
    
- If a variable is not a string, number, boolean, null, undefined or a symbol, it must be an __________.
    
    Answer: **`object`**
    

## References

📕 [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Hungry For More

[Intermediate JS Topics](Intro%20to%20JS/Intermediate%20JS%20Topics%2039c10c7d27904b2f903b1e20b0b20e42.md)