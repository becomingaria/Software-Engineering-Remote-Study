# 33 - balancedBrackets

```jsx
/*-----------------------------------------------------------------
Challenge: 33-balancedBrackets
Difficulty:  Intermediate
Prompt:
- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
Examples:
balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------*/
// Your solution for 33-balancedBrackets here:
```

## Solution

```jsx
/*
  The solution for this challenge is best implemented using
  a data structure known as a 'stack'. Think of a stack working a lot
  like a stack of papers where you always place new papers on top
  and always remove the top paper.
*/

function balancedBrackets(str) {
  // can't be balanced if string odd in length
  if (str.length % 2) return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let b = str.charAt(i);
    if ( '([{'.includes(b) ) {
      // add opening brackets to the stack
      stack.push(b);
    } else {
      // not an opening bracket, so remove last opening and check if matched
      if (!'() {} []'.includes(stack.pop() + b)) return false;
    }
  }
  return stack.length === 0;
}

/*--- Using Array.every method to iterate unless false is returned
      Also using arrow function ---*/
// function balancedBrackets(str) {
//   let stack = [];
//   return str.split('').every(c => {
//     if ('([{'.includes(c)) {
//       return stack.push(c);
//     } else {
//       return '() {} []'.includes(stack.pop() + c)
//     }
//   }) && stack.length === 0;
// }

/*--- Holy ternary Batman! Almost a one-liner! ---*/
// function balancedBrackets(str) {
//   let a = [];
//   return str.split('').every(c => '([{'.includes(c) ? a.push(c) : '() {} []'.includes(a.pop() + c)) && a.length === 0;
// }
```