# 39 - addChecker

```jsx
/*-----------------------------------------------------------------
Challenge: 39-addChecker
Difficulty:  Intermediate
Prompt:
- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers.  The integers in the array are sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the array of integers (first argument) that when added together, equals the integer passed in as the second argument.
- If there are no two integers in the array that sum up to equal the second argument, addChecker should return false.
Hint:
- An efficient solution can leverage the the fact that the integers in the array are sorted.
Examples:
addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
-----------------------------------------------------------------*/
// Your solution for 39-addChecker here:
```

## Solution

```jsx
/* inefficent solution - does not leverage sorted array */
function addChecker(nums, total) {
  let result = false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === total) return true; 
    }
  }
  return result;
}

/* efficent solution - leveraging the sorted array */
// function addChecker(nums, total) {
//   let result = false;
//   let start = 0
//   let end = nums.length - 1; 
//   while (start < end) {
//     let sum = nums[start] + nums[end];
//     if (sum === total) return true;
//     sum < total ? start++ : end--;
//   }
//   return result;
// }
```