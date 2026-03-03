# Intermediate BigO Content

# Concept: Adding and Multiplying Runtimes

## Multi-part Algorithms

An algorithm may deal with multiple sets of data or the same set of data multiple times. When this occurs we should add or multiply the runtimes of each set of data. So when do we add the runtimes together and when do we multiply them?

## Adding Runtimes

> If your algorithm is in the form “do this, then, when you’re all done, do that” then you add the runtimes.
— *Cracking the Coding Interview*
> 

In this example, the runtime is influenced by the size of arrA and the size of arrB, so the Big O notation is O(arrA + arrB). This may be abstracted to O(N + M).

<aside>
🧠 If we had another loop dealing with arrA the resulting runtime would be O(2arrA + arrB), but remember that we drop constants, so the final runtime is still O(arrA + arrB)

</aside>

```jsx
const letterArray = ["A", "B", "C", "D", "E"]
const numArray = [1, 2, 3, 4, 5];

logTwoArrays(letterArray, numArray)

function logTwoArrays(arrA, arrB) {
  for(let i = 0; i < arrA.length; i++){
    console.log(arrA[i])
  }
  for(let j = 0; j < arrB.length; j++){
    console.log(arrB[j])
  }
}
```

## Multiplying Runtimes

> If your algorithm is in the form “do this for each time you do that” then you multiply the runtimes.
— *Cracking the Coding Interview*
> 

In this example, we iterate through arrB for every item in arrA, so the runtimes are multiplied together making the Big O Notation O(arrA * arrB), which may be abstracted as O(N * M)

```jsx
const letterArray = ["A", "B", "C", "D", "E"]
const numArray = [1, 2, 3, 4, 5];

logTwoArrays(letterArray, numArray)

function logTwoArrays(arrA, arrB) {
  for(let i = 0; i < arrA.length; i++){
    console.log(arrA[i])
    for(let j = 0; j < arrB.length; j++){
      console.log(arrB[j])
    }
  }
}
```

## Curve Ball!

![](Intermediate%20BigO%20Content/Untitled.png)

```jsx
function logTwoArrays(arrA, arrB) {
  for(let i = 0; i < arrA.length; i++){
    console.log(arrA[i])
    for(let j = 0; j < arrA.length; j++){
      console.log(arrA[j])
    }
  }
  for(let j = 0; j < arrB.length; j++){
    console.log(arrB[j])
  }
}
```

We do not drop terms from different data sets when we are not aware of the data they contain, because we are unable to ascertain if they will be dominant.

In this example, we iterate through arrA for every item in arrA. The runtimes are multiplied together making the Big O Notation O(arrA * arrA) or more simply O(arrA^2) (abstracted as O(N^2), then we add the runtime of arrB making the final Big O notation of this function O(arrA^2 + arrB) which may be abstracted as O(N^2 + M).

This runs counter to how we calculate Big O when engaging with a single data input because we always know that the single for loop will be a non-dominate term compared to the nested for loop.

In the below example, the Big O notation is O(N^2) - we have dropped the non-dominant loop through arrA because we are dealing with the same data throughout.

```jsx
function logArray(arrA) {
  for(let i = 0; i < arrA.length; i++){
    console.log(arrA[i])
    for(let j = 0; j < arrA.length; j++){
      console.log(arrA[j])
    }
  }
  for(let k = 0; k < arrA.length; k++){
    console.log(arrA[k])
  }
}
```