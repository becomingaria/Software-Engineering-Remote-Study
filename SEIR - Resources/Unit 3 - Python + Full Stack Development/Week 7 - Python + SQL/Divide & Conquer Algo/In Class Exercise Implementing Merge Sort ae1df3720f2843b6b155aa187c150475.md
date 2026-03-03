# In Class Exercise: Implementing Merge Sort

## Overview

There are two exercises to help you practice what you learned in the Divide-and-Conquer Sorting Algorithms lesson.  
This exercise will focus on the `merge sort` algorithm in JS.

General Merge Sort steps:

1. Determine base case to escape recursion
2. Find the middle index of your current array argument ( not the value, just the index)
3. Sort all of the values to the left of the middle
4. Sort all of the values from the middle to the end of the array
5. return the merged (sorted) left and right sorted arrays.  


> 

## Tip

In a `mergeSort.js` file in your morning_exercise directory, copy the code below and begin pseudocoding the implementation. 

So really, you're just implementing the merge sort algorithm!

```jsx

function mergeSort(arr) {
  // YOUR CODE HERE

}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  const result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
```

## Example PseudoCode

```jsx
function mergeSort(arr) {
    // mergeSort works recursively by splitting an array to into smaller and smaller chunks
		// so what is the base case?

    // Hint: an empty or single element array is already sorted so return the arr if it an array of length 1 or 0 

    // If array is greater than 1, let's grab the middle index to determine where we will separate the 'left' side of our array from the right side 

    // to break our array in two let's do something wild - let's mutate our incoming array param - arr 
    // We need to remove the left half of the array and store it in a variable - what method can delete a range of values?
    
		// The left can then be passed to our recursive mergeSort call 
    // The right side of the array - the remaining elements in arr - is passed to our recursive mergeSort
		 
    // Then we can use our helper function to glue everything back together
	  
  }
```

## Example Solution

```jsx
function mergeSort(arr) {
    // we are going to use recursion, let's set up a base case

    // notice that an empty or single element array is already sorted
    // so return it if it is one
    if (arr.length <= 1) return arr;
    // let's grab the middle index
    let middle = Math.floor(arr.length / 2);

    // let's do something wild
    // arr.splice delete elements from an array (in place), and return what was deleted
    // so left can be what we return by deleting the first half of the elements
    let left = arr.splice(0, middle)
    // and we can pass it right back to our mergeSort method
    let sortedLeft = mergeSort(left);
    // and we can toss what's left of arr to determine the right side
    let sortedRight = mergeSort(arr);

    // then we can use our helper function to glue everything back together
    return merge(sortedLeft, sortedRight)
  }
  
// HELPER FUNCTION: merge two sorted arrays
//   merge([3, 6, 12], [7, 8, 13])
// result will be [3] arr1 will be [6, 12] and arr2 will be [7, 8, 13]
// result will be [3, 6] arr1 will be [12] and arr2 will be [7, 8, 13]
// result will be [3, 6, 7] arr1 will be [12] and arr2 will be [8, 13]
function merge(arr1, arr2) {
    var result = []; 
    while (arr1.length && arr2.length) {
        if(arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1, arr2);
}

// let's sort [12,6,3,7,13,8]
// first, middle is 3
// left is [12, 6, 3]
// sortedLeft is ms([12, 6, 3]);
// sortedRight is ms([7, 13, 8])
// and ms[12, 6, 3, 7, 13, 8] is merge(ms([12, 6, 3]), ms([7, 13, 8]))
    // well, what's ms([12, 6, 3])?
        // middle is 1
        // left is [12]
        // sortedLeft is ms([12])
        // sortedRight is ms([6, 3])
        // so ms([12, 6, 3]) is merge(ms([12]), ms([6, 3]))
            // so now what's ms([12])?
                // it's [12]
            // what's ms([6, 3])?
                // middle is 1
                // left is [6]
                // sortedLeft is ms([6]) which is just [6]
                // and sortedRight is ms([3]), which is just [3]
                // so ms([6, 3]) is merge([6], [3]), which is [3, 6]
        // so ms([12, 6, 3]) is merge([12], [3, 6]) => [3, 6, 12]
    // now let's find out what ms([7, 13, 8]) is
        // middle is 1
        // left is [7]
        // sortedLeft is ms([7])
        // sortedRight is ms([13, 8])
        // so ms([7, 13, 8]) is merge(ms([7]), ms([13, 8]))
            // so what's ms([7])?
                // it's [7]
            // what's ms([13, 8])?
                // middle is 1
                // left is [13]
                // sortedLeft is ms([13]), which is just [13]
                // and sortedRight is ms([8]), which is just [8]
                // so ms([13, 8]) is merge([13], [8]), which is [8, 13]
            // so ms([7, 13, 8]) is merge([7], [8, 13]) => [7, 8, 13]
        // finally, we can answer merge(ms([12, 6, 3]), ms([7, 13, 8]))
        // it is merge([3, 6, 12], [7, 8, 13]) => [3, 6, 7, 8, 12, 13]
  

```