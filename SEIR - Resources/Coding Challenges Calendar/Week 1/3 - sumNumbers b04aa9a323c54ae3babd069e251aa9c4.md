# 3 - sumNumbers

```jsx
/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic  
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:
```

## Solutions?

```jsx
/*--- okay solution ---*/
function sumNumbers(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/*--- better solution (use forEach unless you have to exit loop early) ---*/
// function sumNumbers(nums) {
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/*--- best solution (don't worry, this will make sense soon enough) ---*/
// function sumNumbers(nums) {
//   return nums.reduce((sum, num) => sum += num, 0);
// }
```