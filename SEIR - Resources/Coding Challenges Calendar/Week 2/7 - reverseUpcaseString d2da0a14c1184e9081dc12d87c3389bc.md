# 7 - reverseUpcaseString

```jsx
/*-----------------------------------------------------------------
Challenge: 07-reverseUpcaseString
Difficulty: Basic
Prompt:
- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
Examples:
reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:
```

## Solution?

```jsx
// MOST ELEGANT SOLUTION...
// function reverseUpcaseString(str) {
//   // above version using an arrow function
//   return str.split('').reverse().map(c => c.toUpperCase()).join('');
// }

function reverseUpcaseString(str) {
  let results = '';
  for (let i = 0; i < str.length; i++) {
    // can use square brackets to access chars in a string
    // but using the charAt() method is preferred
    results = str.charAt(i).toUpperCase() + results;
  }
  return results;
}

// function reverseUpcaseString(str) {
//   // convert string to array, reverse, map and finally join it
//   return str.split('').reverse().map(function(char) {
//     return char.toUpperCase();
//   }).join('');
// }
```