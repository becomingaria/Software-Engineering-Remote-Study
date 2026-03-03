# 2 - addTwoNumbers

```jsx
/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic  
Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:
```

## Solution

```jsx
function addTwoNumbers(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return NaN;
  }
}
```