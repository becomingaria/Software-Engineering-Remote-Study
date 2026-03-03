# Sort Activity

Explore JavaScript's built-in `Array.prototype.sort()` method — it's more powerful (and quirky) than it looks!

## Getting Started

```bash
node starter.js
```

## Overview

By default, `.sort()` converts elements to strings and compares their UTF-16 code unit values. This means sorting numbers directly can produce unexpected results.

```js
;[10, 9, 2, 1, 100].sort()
// → [1, 10, 100, 2, 9]  ← not what you'd expect!
```

To sort numbers correctly, you need to pass a **comparator function**.

## Part 1 – Fix the Number Sort

Open `starter.js`. The array is not sorting correctly. Fix the `.sort()` call so it sorts numbers in **ascending** order.

## Part 2 – Descending Order

Sort the same array in **descending** order.

## Part 3 – Sort Strings Alphabetically

Given this array of names, sort them alphabetically (case-insensitive):

```js
const names = ["frank", "Alice", "bob", "Charlie", "eve"]
```

## Part 4 – Sort Objects by Property

Sort an array of student objects by their `grade` property, ascending:

```js
const students = [
    { name: "Alice", grade: 88 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 95 },
    { name: "Diana", grade: 60 },
]
```

## Part 5 – Hungry for More?

- Sort the student array by `name` alphabetically.
- Sort an array of dates (as strings `'YYYY-MM-DD'`) in chronological order.
- Research the difference between **stable** and **unstable** sorts. Is JavaScript's `.sort()` stable?
