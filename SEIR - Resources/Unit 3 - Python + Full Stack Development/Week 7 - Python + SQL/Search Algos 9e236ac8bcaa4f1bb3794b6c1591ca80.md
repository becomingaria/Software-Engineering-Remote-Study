# Search Algos

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand the Big O complexities of brute force and binary search approaches.
- Describe how binary search works.
- Write a binary search algorithm to find a value in an array.

## Prerequisites

- Big O Notation
- Recursion
- Intro to Sorting Algorithms

## Duration

1 hour in class

## Overview

In this lesson, you'll learn how the binary search algorithm works to find information efficiently and elegantly.

There is one component to this lesson:

1. [**Slide Deck**](https://docs.google.com/presentation/d/1OJH8QT0AyuyBEb_ywWr6xD_qamLEmz9iEs6O3rw3IxQ/edit?usp=sharing)

# Search Algorithms Exercises

## Overview

In this exercise, you'll practice two different implementations of the binary search algorithm:

- Iterative implementation
- Recursive implementation 🚀


### Implement a Binary Search Iteratively

```jsx
function binarySearch(arr, element) {
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}
```

## Example Solution

```jsx
function binarySearch(arr, element) {
    // search through the array non-recursively for the element
    // if the element is not found, return -1
    // if the element is found, return the index at which it was found

    // ceiling and floor are going to be indexes
    // ceiling and floor have to be initialized "outside" of the potential values
    // arrays don't have a -1 index. The lowest is 0
    let floor = -1
    // .length is always one greater than the last index.
    // So we can set the ceiling to arr.length;
    let ceiling = arr.length
    //   if the floor "meets" the ceiling, there was no match, and the while loop won't run anymore
    while (floor + 1 < ceiling) {
        // our guess can be the halfway point
        let guess = Math.floor((ceiling + floor) / 2)
        // we need to check actual values now, if it matches, boo yah!
        if (arr[guess] === element) return guess
        // if the guess value is bigger than element, that means the element should be less than the guess value
        if (arr[guess] > element) {
            // so set the ceiling to guess
            ceiling = guess
        } else {
            // otherwise, it's on the other side
            floor = guess
        }
    }
    // if the while loop exited without finding the element, that means that the element wasn't found
    return -1
}

// let's visualize a search for 4 in [0, 1, 2, 3, 4, 5, 6];
// round 1:
// floor is -1
// ceiling is 7
// guess is 3
// arr[3] is 3
// 3 is less than 4, so floor becomes 3
// round 2:
// floor is 3
// ceiling is 7
// guess is 5
// arr[5] is 5
// 5 is more than 4, so ceiling becomes 5
// round 3:
// floor is 3
// ceiling is 5
// guess is 4
// arr[4] is 4, which is what we are guessing, so return 4!
```

## 💪 Additional Resources

- Check out [this article](https://medium.com/@codingfreak/binary-search-practice-problems-4c856cd9f26c) that outlines common interview questions related to binary search.
- [More thoughts](http://blog.gainlo.co/index.php/2017/01/12/rotated-array-binary-search/) on how binary search appears in job interviews.
- Algorithmic folk dancers, this time with [search](https://www.youtube.com/watch?v=iP897Z5Nerk)!

## 🚀 Hungry For More:

### Implement a Binary Search Recursively

```jsx
function recursiveBinarySearch(arr, element) {
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}
```

## Example Solution

```jsx
function recursiveBinarySearch(
    arr,
    element,
    floor = -1,
    ceiling = arr.length,
    middle = Math.floor((ceiling + floor) / 2),
) {
    // if our arr[middle] is our element, middle is the index!
    if (arr[middle] === element) return middle
    // if the floor met the ceiling, game over!
    if (floor === ceiling) return -1
    // if our guess is less than the element, we have to update the floor and the middle point to look at
    if (arr[middle] < element) {
        floor = middle + 1
        // if our guess is bigger, we change the ceiling
    } else {
        ceiling = middle - 1
    }
    // update the middle
    middle = Math.floor((ceiling + floor) / 2)
    // then do some recursion
    return recursiveBinarySearch(arr, element, floor, ceiling, middle)
}

// let's visualize a search for 4 in [0, 1, 2, 3, 4, 5, 6];
// Round 1:
// floor is 0
// ceiling is 6
// middle is 3
// arr[3] is 3, which is less than 4, so
// floor is 4
// middle is 5
// Round 2:
// floor is 4
// ceiling is 6
// middle is 5
// arr[5] is 5, which is more than 4, so
// ceiling is 4
// middle is 4
// Round 3:
// arr[4] is 4, which is what we are looking for, so return 4!
```
