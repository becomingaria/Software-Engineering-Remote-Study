# 32 - intersection

```jsx
/*-----------------------------------------------------------------
Challenge: 32-intersection
Difficulty: Intermediate
Prompt:
- Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned is not important.
- If there are no elements in the arrays in common,  the intersection function should return an empty array.
- The function should not mutate (change) either argument.
Examples:
intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------*/
// Your solution for 32-intersection here:
```

## Solution

```jsx
function intersection(a1, a2) {
  let result = [];
  // create copy of 2nd array for purpose of handling dups
  let _a2 = [...a2];
  a1.forEach(val => {
    let idx = _a2.indexOf(val);
    if (idx > -1) result.push(_a2.splice(idx, 1)[0]);
  });
  return result;
}
```