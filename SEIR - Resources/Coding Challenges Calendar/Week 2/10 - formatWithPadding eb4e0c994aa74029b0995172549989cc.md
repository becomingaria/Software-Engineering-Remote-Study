# 10 - formatWithPadding

```jsx
/*-----------------------------------------------------------------
Challenge: 10-formatWithPadding
Difficulty: Basic
Prompt:
- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.
Examples:
formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:
```

## Solution

```jsx
/*--- Using the padStart String method ---*/
// function formatWithPadding(int, char, length) {
//   return int.toFixed(0).padStart(length, char);
// }

/*--- Using for while loop ---*/
function formatWithPadding(int, char, length) {
  let result = int.toFixed(0);
  while (result.length < length) {
    result = char + result;
  }
  return result;
}
```