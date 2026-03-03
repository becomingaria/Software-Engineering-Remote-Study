# 34 - isWinningTicket

```jsx
/*-----------------------------------------------------------------
Challenge: 34-isWinningTicket
Difficulty:  Intermediate
Prompt:
- Write a function called isWinningTicket that accepts a single array an as argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.
Hints:
- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.
Examples:
isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------*/
// Your solution for 34-isWinningTicket here:
```

## Solution

```jsx
/* Naive approach using for loops - :( */
function isWinningTicket(ticket){
  let winner = true;
  for (let i = 0; i < ticket.length; i++) {
    let charFromNumber = String.fromCharCode(ticket[i][1]);
    if (!ticket[i][0].includes(charFromNumber)) {
      winner = false;
      break;
    }
  }
  return winner;
}

/* Array.prototype.every is sweet */
// function isWinningTicket(ticket){
//   return ticket.every(function(arr) {
//     return arr[0].includes(String.fromCharCode(arr[1]));
//   });
// }

/* Arrow functions help make concise one-liners possible */
// function isWinningTicket(ticket){
//   return ticket.every(arr => arr[0].includes(String.fromCharCode(arr[1])));
// }
```