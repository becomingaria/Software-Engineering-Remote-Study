# JS Array Methods

![](https://i.imgur.com/DEsPVNw.png)

# Intro to JavaScript Arrays

## Learning Objectives

Students Will Be Able To:

- Describe the Use Case for Arrays
- Create Arrays Using Literal Notation and the Array Class
- Accessing/Updating Elements in an Array
- Add an Element to the Front or End of an Array
- Remove an Element from the Front or End of an Array
- Add/Remove Elements To/From Anywhere in the Array
- Iterate Over All of the Elements in an Array
- Copy All or Some of an Array
- Create a Single String from an Array

## Setup

Create a new Node.js-based Repl in [replit.com](https://replit.com/) and name it **JS Arrays**

## 1. The Use Case (What & Why) of Arrays

### What are Arrays?

- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are an extremely popular data structure used to store an ordered "list" of data.
- Arrays can contain zero or more items called - **elements** (not to be confused with HTML elements).
- Each element in an array can hold any data type including objects, functions, even other arrays.
- Although we often may refer to Arrays as a **data type**, they are actually a subtype of the JS Object, i.e., Arrays are Objects in JS.
- It is a best practice to name array variables plurally, e.g.,<br> `let colors = ['red', 'green', 'blue'];`

### Why use Arrays?

- Arrays are the data structure of choice for holding ordered lists of data.
- Without data structures like arrays (and data types like objects), we wouldn't have a way to store "collections" of data, which we commonly need to do.

## 2. Creating Arrays

There are two ways to create an array...

```jsx
// using Array Literal Notation (recommended best practice)
const nums1 = [2, 4, 18];

// using the Array class (less common approach)
const nums2 = new Array(2, 4, 18);

```

The best practice is to use *Array Literal Notation* because it's more concise and the class approach behaves differently if you pass only one argument.

### 👉 You Do: Creating Arrays (1 min)

- Assign an array containing three of your favorite movies (strings) to a variable named `movies`.

## 3. Accessing/Updating the Elements in an Array

We access and update elements in an array using **square bracket notation**, passing in the "index" (position) of the element you want to access:

```jsx
let movies = ['Caddyshack', 'Interstellar', 'Moonraker'];
// Access the value of the first element ('Caddyshack')
// and assign to a variable named firstMovie
let firstMovie = movies[0];
// Let's update the 3rd movie (index of 2)
movies[2] = 'Contact';

```

Note that indexes are integers where `0` is used to access the first element.

> Why is 0 instead of 1 the index for the first element you ask?  This "zero-based" indexing for sequences like arrays and strings is common in programming languages due to the fact that they prefer to work with "offsets" in memory. Thus, we access the first item using an offset of zero.
> 

To access the last element in an array we need to know how many elements the array has and subtract `1` - this is where the [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property comes in handy:

```jsx
// lastMovie's value will be the string 'Contact'
let lastMovie = movies[movies.length - 1];
```

Unfortunately, JavaScript does not have negative indexing (index from the end of the array) that some languages like Python have - this is due to the fact that Arrays are objects in JS.  For example, the following expression would return `undefined`:

```jsx
movies[-1]  //-> undefined
```

## 4. Adding Elements to an Array

We can add elements to the **end** of an array using the [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method:

```jsx
// Let's add a movie to the end of the array
movies.push('Jaws');
```

We can also add elements to the **front** of an array with [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift):

```jsx
// Let's add a couple of more movies, but
// to the front of the array this time
movies.unshift('Star Wars', 'Jurassic Park');
```

Note that both `push()` and `unshift()` methods can accept multiple values and return the new length of the array.

## 5. Removing Elements from an Array

We can remove a **single** element from the **end** of an array using the [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method:

```jsx
// Remove Jaws (last element)...
let movie = movies.pop();
```

We can also remove from the **front** of an array using the [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method:

```jsx
// movie will now hold 'Star Wars'
movie = movies.shift();
```

The `pop()` and `shift()` methods only remove one element at a time, return that element and don't take any arguments.

### Remembering `unshift` & `shift`

It's fairly easy to remember what `push` & `pop` do because of their names ("push" in, "pop" out).

However, `unshift` & `shift` are not as clear.

Maybe this will help you remember:

```jsx
The "longer" named methods do the same thing (add to an array)
unshift -> [...] <- push

The "shorter" named ones remove
shift <- [...] -> pop
```

### Add/Remove Elements To/From Anywhere in the Array

The `splice()` method is capable of **adding and/or removing** any number of elements to/from an array with a single line of code!

If we check [the splice docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) we'll find the syntax to be:

```jsx
array.splice(start, deleteCount, newItem1, newItem2...)
```

Note that all but the first parameter is optional.

> The Array.prototype.splice() notation in the docs denotes that splice is a "prototype" method that's callable on an instance of the class (an array object in this case).  Don't worry, more on this topic in future lessons.
> 

Here's my current `movies` array at this point:

```jsx
movies //-> ['Jurassic Park', 'Caddyshack', 'Interstellar', 'Contact']
```

### Using `splice()` to Remove Element(s)

```jsx
// Remove 'Caddyshack' & 'Interstellar'
let removedMovies = movies.splice(1, 2);
// movies -> ['Jurassic Park', 'Contact']
// removedMovies -> ['Caddyshack', 'Interstellar']
```

### Using `splice()` to Insert Element(s)

```jsx
// Insert 'Spaceballs' & 'Alien' after 'Jurassic Park'
removedMovies = movies.splice(1, 0, 'Spaceballs', 'Alien');
// movies -> ['Jurassic Park', 'Spaceballs', 'Alien', 'Contact']
// removedMovies -> [] (empty array)
```

### Using `splice()` to Replace Element(s)

```jsx
// Replace 'Jurassic Park' & 'Spaceballs' with 'Best In Show'
removedMovies = movies.splice(0, 2, 'Best In Show');
// movies -> ['Best In Show', 'Alien', 'Contact']
// removedMovies -> ['Jurassic Park', 'Spaceballs']
```

As you saw, the `splice` method always returns an array containing the removed elements (an empty array if no elements were removed).

### 👉 You Do: Use `splice()` (1 min)

Here's my current `movies` array:

```jsx
movies //-> ['Best In Show', 'Alien', 'Contact']
```

- Use `splice()` to **replace** 'Contact' with 'The Matrix' & 'Gladiator'

Afterwards, this will be the `movies` array:

```jsx
movies //-> ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']
```

## 6. Iterating Over All of the Elements in an Array

### Using the `forEach` Iterator Method

Although a `for` loop can be used to iterate over an array, if we want to iterate over **all** of the elements in an array, the [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) iterator method is a better approach because it more clearly communicates the developer's intention:

Let's try it out:

```jsx
movies.forEach(function(movie) {
  console.log(movie);
});
```

...will result in the following output:

```jsx
Best In Show
Alien
The Matrix
Gladiator
```

As you can see, the `forEach` method calls the function provided as an argument **once for each element** in the array.

If you need to know the index of the current iteration, the `forEach` method also happens to pass in the index as a second argument, for example:

```jsx
movies.forEach(function(movie, idx) {
  console.log(idx + ' - ' + movie);
});

```

...will result in the following output:

```
0 - Best In Show
1 - Alien
2 - The Matrix
3 - Gladiator
```

It's a **best practice** to name the first parameter that accepts each element as the singular version of the name of the array, or simply the first letter of the array variable (`movie` or `m` for the example above).

### Using a `for...of` Loop

ES2015 provides the `for...of` loop for iterating over the elements of arrays and other iterables such as strings:

```jsx
for (let movie of movies) {
  if (movie === 'The Matrix') break;
  console.log(movie);
}
```

...will result in the following output because once `movie` is assigned 'The Matrix', the `if` statement will result in exiting the `for` loop thanks to the `break` statement:

```
Best In Show
Alien
```

Whereas the `forEach` method always iterates over every element, the `for...of` loop can be exited using the [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement.

Note that there is also a `for...in` loop with similar syntax.  We will learn more about this type of loop later, but for now be careful not to accidentally use `for...in` when you intend to use `for...of`.

## 7. 💪 Practice Exercise - Arrays (10 mins)

Let's practice creating, modifying and iterating over an array!

1. Create a new Node.js-based Repl in [replit.com](https://replit.com/) and name it **JS Array Practice**
2. Assign an empty array to a variable named `books`.
3. Add **'The Shining'** to the `books` array.
4. Add **'Moby Dick'** to the **front** of `books`.
5. `console.log` the second element of `books`.
6. Update the second element by assigning to it **'Dune'**.
7. Insert **'Great Expectations'** as a new second element (between 'Moby Dick' & 'Dune').
    
    > Hint: splice!
    > 
8. Iterate over the entire `books` array and `console.log` each book string.

I'll code a solution when we return.

## 10. Essential Questions

- In your own words, what's an array?
    
    ```
    An array is a data structure used store an ordered "list" of data
    
    ```
    
- What's the best approach for iterating through an entire array?
    
    ```
    Use the array's forEach iterator method
    
    ```
    
- What array method can remove, insert, and replace any number of elements?</summary>
    
    ```
    The splice method
    
    ```
    

```
const colors = ['red', 'green', 'blue'];
let color = colors[1];

```

- Assuming the above code, what will the value of the variable `color` be?
    
    ```
    'green'
    
    ```
    

## References

[MDN - JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 🚀 Hungry For More

### Making Copies of an Array

There are multiple ways to copy an array.

The approach you use depends upon whether you need to copy just some or the entire array.

Let's take a look...

### Copy All of an Array

ES2015 gave us a cool new way to copy an entire array using `...` ([Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)).

Example:

```jsx
movies //-> ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']
const moviesCopy = [...movies];
moviesCopy //-> ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']
```

All of the elements in the `movies` arrays have been "spread" within the new array.

### Some of an Array

We can use the [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method to create part (or all), of an array.

The `slice` method always returns a new array and does not mutate (change) the source array.

`slice` has a syntax of:<br>`array.slice(startIndex, [endIndex])`

Unlike `splice`, the 2nd argument in `slice` represents the ending index (but does not include that index).

Example:

```jsx
movies //-> ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']
const twoMovies = movies.slice(1, 3);
twoMovies //-> ['Alien', 'The Matrix']
```

### Copy All of an Array & Insert Additional Elements

Here's how you can copy and insert additional elements simultaneously using the spread syntax:

```jsx
twoMovies //-> ['Alien', 'The Matrix']
const fourMovies = [ 'Amadeus', ...twoMovies, 'The Sting' ];
fourMovies //-> ['Amadeus', 'Alien', 'The Matrix', 'The Sting'];
```

## Create a Single String from an Array of Strings

The array [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method combines all of the string elements in an array and returns a single string:

```jsx
fourMovies //-> ['Amadeus', 'Alien', 'The Matrix', 'The Sting'];
let movieString = fourMovies.join();
movieString //-> 'Amadeus,Alien,The Matrix,The Sting'

```

As you can see, by default, the movie strings were separated by a comma. However, we can pass `join` whatever string we want to use as the separator:

```jsx
movieString = fourMovies.join(' -- ');
movieString //-> 'Amadeus -- Alien -- The Matrix -- The Sting'

```

As you saw in this lesson, arrays are fun (and useful) 😀

Because arrays are such a useful data structure, developers should know what methods are available and what they do...

### Array Iterator Methods

Array iterator methods iterate over the elements in an array and are extremely useful.

They will be covered in more detail in later lessons. Look [here](https://gist.github.com/jim-clark/843ebb5288d90da6b0dfd9eecd134b7c) (UPDATE) for a preview.

### Other Useful Methods (Non-Iterating)

Other useful, non-iterating, methods to know about:

- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) / [lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
- [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)