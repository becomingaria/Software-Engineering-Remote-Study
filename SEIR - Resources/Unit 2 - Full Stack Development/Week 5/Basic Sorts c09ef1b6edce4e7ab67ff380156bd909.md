# Basic Sorts

## Overview

This lesson covers two foundational sorting algorithms: bubble sort and insertion sort.

There are two components to this lesson:

1. [Slide Deck](https://docs.google.com/presentation/d/1Ej8zTNnudCcOOdHh0_Y4pLcX8s8qLLh5Kpenhf7W2iE/edit?usp=sharing)
2. [In-class Exercises](https://www.notion.so/seir-22123/exercises/BubbleSort.js)

## Learning Objectives

By the end of this lesson, you will be able to:

- Describe the time and space complexities of bubble sort and insertion sort.
- Implement bubble sort and insertion sort.

## Prerequisites

- Big O Notation
- Introduction to Sorting

## Duration

Roughly 1 hour in class

## Bubble Sort

```jsx
function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one
    // round of swapping from the start of the list to the end

    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array
    return array
}
```

- Bubble Solution
    ```jsx
    function bubbleSort(array) {
        // let's define a variable that will keep track of whether or not a swap happened
        // initialize it to true so that we can enter our while loop
        let swapped = true
        while (swapped) {
            // set swapped to false so that we exit the loop
            // innocent untiil proven guilty!
            swapped = false
            // now it's time to go down the list to see if we have to swap
            // notice, we are looping until array.length - 1
            // this is because we are always comparing an element to the element after it
            for (let i = 0; i < array.length - 1; i++) {
                // if we need to swap
                if (array[i] > array[i + 1]) {
                    // GUILTY!
                    swapped = true
                    // since we are swapping elements, we need to hold a reference to one of them
                    let placeholder = array[i]
                    // overwrite the first element with the second
                    array[i] = array[i + 1]
                    // then overwrite the second slot with our reference
                    array[i + 1] = placeholder
                }
            }
        }
        // when we are done, return the sorted array;
        return array
    }

    module.exports = bubbleSort
    ```

## Insertion Sort

```jsx
function insertionSort(items) {
    // Loop through each element

    // store the current item value so it can be placed correctly
    // in the sorted portion of the array

    // Loop backward through the sorted portion of the array
    // and scoot everything over until you find the right place to
    // insert the value you're working with

    // Copy each item to the next slot over, as long as the value is smaller
    // than the item in the sorted array we're looking at (items[j] > value)

    // We can now insert the item in its sorted location

    // Remember to return the list!
    return items
}
```

- Insertion Solution
    ```jsx
    function insertionSort(array) {
        // start a loop to go through the entire array
        for (let i = 0; i < array.length; i++) {
            // we are going to "store" the value at each iteration, by taking it out of the array
            // remember, splice returns an array of deleted items => [i]
            let placeholder = array.splice(i, 1)[0]
            // now we have to find out where to put it
            let z = 0
            // it has to go after the last place where the value in the sub-array (up to i)
            // is less than the placeholder
            while (z < i && array[z] < placeholder) {
                z++
            }
            // now that we know where to put it, we can insert it
            array.splice(z, 0, placeholder)
        }
        return array
    }

    module.exports = insertionSort
    ```

## Additional Resources

- Visualize bubble sort and insertion sort using [this fun tool](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html).
- More visuals here: [bubble sort](https://www.youtube.com/watch?v=Cq7SMsQBEUw), [insertion sort](https://www.youtube.com/watch?v=8oJS1BMKE64).
- Some [sample interview questions](https://hoven-in.appspot.com/Home/Data-Structures/Data-Structure-Interview-Questions/interview-questions-on-bubble-sort-01.html) about bubble sort. (Note: The code in this article is not JavaScript.)
- Recap of how [insertion sort works](https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5).
- Last but certainly not least: Folk dancing for [bubble sort](https://www.youtube.com/watch?v=lyZQPjUT5B4) and [insertion sort](https://www.youtube.com/watch?v=ROalU379l3U).
