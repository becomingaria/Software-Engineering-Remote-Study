# Big O Notation

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_3.08.12_PM.png)

## Lesson Topics

# Algorithms

A series of steps taken to solve a problem or achieve a goal.

The chart to the right shows a flowchart for an algorithm that describes how to make a cake.

![](Big%20O%20Notation/Untitled.png)

## Big O - Definition

![](../../Unit%202%20-%20Full%20Stack%20Development/Week%204/Big%20O%20Notation/Untitled.png)

Source: [**danielmiessler.com/study/big-o-notation/**](http://danielmiessler.com/study/big-o-notation/)

> Big O time is the language and metric used to describe the efficiency of algorithms.
- Cracking the Coding Interview
> 

### Hungry for More 🧠

<aside>
🧠 This definition is intentionally broad, because the efficiency of an algorithm can be described in many different ways - how many CPU cycles it takes to run vs. the actual amount of time it takes vs. how many iterations it takes, etc. What Big O measures is intentionally extremely big picture and it intentionally doesn’t concern itself with the unit of measurement we are using to describe it and we will instead refer to this broad idea as runtime. As you learn more Big O you’ll see that it is very very hand-wavy towards detail. During this lesson we will describe the efficiency of algorithms using time, since that is a familiar unit of measurement for all of us.

</aside>

## Why Does Big O Matter?

Big O gives us way to talk about the efficiency of algorithms (broadly described as their ***runtime***) and allows us to judge what exactly makes an algorithm faster, slower, and more or less space efficient than a similar algorithm. This means we can make better programming decisions!

### How though?

Big O Measures ***time complexity (runtimes)*** and ***space complexity (how much memory is used)*** in a given algorithm / function. `Big O Notation` is generally written according to its performance in the ***worst case scenario.*** 

## Key Concept: Assessing Runtime Scenarios

## Best Case

![](Big%20O%20Notation/Untitled%201.png)

The best possible result we could expect from an algorithm at runtime. Expressed as **Ω (Omega)**. Not a useful concept. Many algorithms can get lucky and produce a result of **Ω**(N)

## Expected Case

The average result we could expect from an algorithm at runtime. Expressed as **Θ (Theta).** Useful for differentiating searching and sorting algorithms. The “real world” performance of an algorithm. Outliers should be expected and taken into account, but are not the norm. When you have 2 algorithms with the same worst case runtime complexity, they can be quickly compared to one another using their expected case.

## Worst Case

How we express the performance of algorithms in Big O Notation. Expressed as O. For some algorithms, worst case scenarios and expected case scenarios are the same.

## O(1) - Constant Complexity

The input to the algorithm does not matter - the algorithm will still take the same amount of time to run. O(1) algorithms are extremely efficient.

### Examples

- Access a given index in an array
- Adding or removing an element from a `queue` ( a type of data structure)
- Determine if a binary number is odd or even
- Adding or removing an element to a `stack` ( a type of data structure )

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_6.52.03_AM.png)

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_6.54.58_AM.png)

### Code Example

```jsx
tinyArray = Array(10).fill(0)
largeArray = Array(100000000).fill(0)

findFifthElementOfArray(tinyArray)
findFifthElementOfArray(largeArray)

function findFifthElementOfArray(arr) {
	return arr[4]
}
```

We have 2 arrays here - one with 10 items in it, and another with 100 million. Accessing the fourth index takes the same runtime for both of these pieces of data. In this example, `findFifthElementOfArray(tinyArray)` and `findFifthElementOfArray(largeArray)` will take the same amount of time.

## O(N) - Linear Complexity

As the size of the input grows the processing time required by the algorithm will grow at the same pace. N represents the size of the input.

O(N) is somewhat efficient. No matter how big the constant is or how slow the linear increase is, at some point the linear algorithm will have a longer runtime

## Examples

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_7.00.43_AM.png)

- Searching an array element by element
- Performing an action on every element in an array.
- Inserting an element alphabetically into an array
- Searching page by page for a name in a phone book.

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_7.01.48_AM.png)

### Code Example

```jsx
// Creates this array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
tinyArray = Array.from(Array(10).keys())
// Creates a very large array starting with: [0, 1, 2, 3 ...]
largeArray = Array.from(Array(100000000).keys())

findRandomNumberInArray(tinyArray)
findRandomNumberInArray(largeArray)

function findRandomNumberInArray(arr) {
  const randomNum = Math.floor(Math.random() * arr.length)
  for (let i = 0; i < arr.length; i++) {
    if (randomNum === arr[i]) return arr[i]
  }
}
```

This code is generating a random number based off the length of the array and then searching the array for that number.

In this example, `findRandomNumberInArray(tinyArray)` will complete in no more than 10 iterations.`findRandomNumberInArray(largeArray)` will complete in no more than 100,000,000 iterations. Remember that although a match is likely to be found before the end of an array is reached, Big O Notation is always written assuming the worst-case scenario.

## Concept: Dropping Constants

When iterating over the same set of data twice in a single algorithm it may be tempting to label the algorithm as O(2N), but this would be incorrect. Take these two code examples where we are finding the smallest and largest numbers in an array, which one of them is slower?

```jsx
let min = Number.POSITIVE_INFINITY
let max = Number.NEGATIVE_INFINITY
const arr = [10, 4, 2, 7, 9]

arr.forEach(num => {
  if (num < min) min = num
  if (num > max) max = num
})
```

```jsx
let min = Number.POSITIVE_INFINITY //O(1)
let max = Number.NEGATIVE_INFINITY //O(1)
const arr = [10, 4, 2, 7, 9]//O(1)

// 0(3) + O(2N)
//We only care about the worst case
//of the algorithm
//I.E., the most impactful task in
//the code

//Drop constants:
//Runtime: O(N)

arr.forEach(num => {
  if (num < min) min = num
}) //O(N)

arr.forEach(num => {
  if (num > max) max = num
}) //O(N)
```

To figure this out we’d have to take multiple variables into account - the second example does have two loops, but only one line of code in each loop, while the first has just a single loop but two lines in it. If we start counting instructions we’d really have to dive into compiler optimizations, and assembly level code.

Figuring this out for every algorithm we would write would ultimately be unproductive. Remember that the ultimate goal of Big O is to determine the major impacts on the runtime of an algorithm as the input scales.

In reality, O(N) algorithms aren’t the same as one another, but ***the algorithms scale in the same way as their inputs grow or shrink***. What we care about when figuring out Big O is the major impact on how an algorithm’s runtime scales. This applies to all the different kinds of algorithms, not just O(N) algorithms.

## O(log(N)) - Logarithmic Complexity

For each time the input grows the processing time required by the algorithm will increase by half what it previously increased by. N represents the size of the input.

O(log(N)) is very efficient. By their nature, these algorithms can solve complex problems very quickly.

### Examples

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_7.30.36_AM.png)

- Many kinds of tree data structures, such as a Binary Search Tree
- Looking up a number in a phone book by searching one half of it at a time.
- Your actions playing a guess-the-number game

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_7.32.13_AM.png)

### Code Example

```jsx
const n = 16777216

log(n)

function log(n) {
  let j = 0
  
  for(let i = n; i >.999; i /= 2) {
    console.log(
			`The result of iterion ${j} is ${i}`
		)
    j++
  }
}
```

In this algorithm with each iteration, we are reducing the results by half.

To avoid covering binary searches (a later lesson), this is not a practical code example, but purely demonstrates the concept of O(log(N)). In 24 iterations, the algorithm reduces the input from over 16 million to 1.

![](Big%20O%20Notation/Untitled%202.png)

## O(N^2) - Quadratic Complexity

For each time the input grows the processing time required by the algorithm will grow exponentially. N represents the size of the input. O(N^2) is inefficient and should be avoided if possible.

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_7.39.34_AM.png)

### Examples

- Many sorting algorithms have quadratic complexity (quicksort, bubble sort, insertion sort, etc.)
- Performing an action on every item in a 2D array
- Searching in a 2D array
- Nested loops.

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_7.40.37_AM.png)

### Code Example

```jsx
const fakeTwoDimensionArray = [1, 2, 3, 4, 5]

logArray(fakeTwoDimensionArray)

function logArray(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    for(let j = 0; j < arr.length; j++){
      console.log("i: ", arr[i], "j: ", arr[j])
    }
  }
}
```

This example demonstrates looping through a 2D array (using a normal array). There is an initial step for each input - and then a follow up step that runs from beginning to end of the array. The output of this is shown to the right.

![](Big%20O%20Notation/Untitled%203.png)

## Key Concept: BigO Notation drops non-dominant terms

When calculating Big O we dispose of all but the most impactful terms. This previously used example of an O(N^2) algorithm has an O(N) instruction appended to the end of it.

The reality here is that the O(N) instruction we have added to the end will have almost no impact on the runtime of this algorithm as the input grows. Keep the chart below in mind.

```jsx
const fakeTwoDimensionArray = [1, 2, 3, 4, 5];

logArray(fakeTwoDimensionArray)

function logArray(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    for(let j = 0; j < arr.length; j++){
      console.log("i: ", arr[i], "j: ", arr[j])
    }
  }
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
	//O(N^2) + O(N) -> simplifed: O(N^2)
}
```

![](Big%20O%20Notation/Untitled%204.png)

Even with only 100 items in the array, the nested for loops will have been executed 10,000 times. Adding 100 instructions performed on the same data is not meaningful as N increases. Again, Big O is a very handy way to detail things at scale.

# Hungry for More?

## O(N log(N)) - Log Linear Complexity

For each time the input grows the processing time required by the algorithm will grow linearly and logarithmically.

This Big O variant is a common runtime of many sorting algorithms.

### Examples

- Merge Sort
- Time Sort
- Heap Sort

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_1.16.32_PM.png)

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_1.18.13_PM.png)

### Code Example

```jsx
nLog(8)

function nLog(n) {
  let i = 1
  for(let j = 0; j < n; j++){
    for(let k = 0; k > 0.999; i /= 2){
      console.log(`The result of iteration ${i} is ${k}`)
      i++
    }
  }
}
```

To avoid covering sorting, this is not a practical code example, but purely demonstrates the concept of O(N log(N)).

This code block simulates performing a logarithmic function on every item in an array.

## O(2^N) - Power of 2 Complexity

For each time the input grows the processing time required by the algorithm will double.

### Examples

- A Fibonacci sequence
- Calling a function recursively twice within a recursive function.

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_1.26.39_PM.png)

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_1.28.03_PM.png)

## Code Example

```jsx
function fibonacci(n) {
	return n <= 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
```

This code creates a fibonacci sequence, and returns the value at the nth value of the sequence. The code that makes this a Power of 2 Complexity is line 4 of the fibonacci function - note the fibonacci is called twice.

# O(N!) - Factorial Complexity

Factorial Complexity occurs when every possible solution to a problem may have to be calculated for the correct output to be determined. An example of this would be a brute force solution to the traveling salesperson problem - where the shortest possible route between a series of locations has to be determined.

![](Big%20O%20Notation/Screen_Shot_2021-05-06_at_1.30.45_PM.png)

# Space Complexity

The vast majority of data structures (Arrays, lists, linked lists, Hash Tables, etc.) have a space complexity of O(N) - as the size of the data structure increases the space it takes up increases along with it. Many sorts have a space complexity of either O(1) or O(N).

While space and time complexity are measured with the same notation, an algorithm will frequently have different space and time complexities.

[Intermediate BigO Content](Big%20O%20Notation/Intermediate%20BigO%20Content%20ee5c7938b15b47c2b892e887ac820861.md)

# Level Up 🚀

Find the time complexity of the following functions:

```jsx
function sumAndProductOfArray(arr){
  let sum = 0
  let product = 1

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  arr.forEach(element => {
    product *= element
  })

  console.log(`Sum: ${sum}`)
  console.log(`Product: ${product}`)
}
```

- Open this toggle for the answer
    
    O(N). The function has a complexity of 2N, but remember that we drop constants, making it just O(N).
    

---

```jsx
function logPairs(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      console.log(`i: ${arr[i]}, j: ${arr[j]}`)
    }
  }
}
```

- Open this toggle for the answer
    
    O(N^2). The inner loop has O(N) iterations and is called N times. This makes the runtime O(N*N) or more simply O(N^2).
    

---

```jsx
//Looks similar to O(N^2) but we are working with 2 arrays.
function logPairs(arrA, arrB) {
  for(let i = 0; i < arrA.length; i++) {
    for(let j = 0; j < arrB.length; j++) {
      console.log(`i: ${arrA[i]}, j: ${arrB[j]}`)
    }
  }
}
```

- Open this toggle for the answer
    
    O(arrA*arrB) or abstracted as O(N*M). The inner loop has O(arrB) iterations and is called arrA times. This makes the runtime O(arrA*arrB) or abstracted as O(N*M)
    

---

```jsx
function logPairs(arrA, arrB) {
  for(let i = 0; i < arrA.length; i++) {
    for(let j = 0; j < arrB.length; j++) {
      for(let k = 0; k < 100000; k++) {
        console.log(`i: ${arrA[i]}, j: ${arrB[j]}`)
      }
    }
  }
}
```

- Open this toggle for the answer
    
    The inner loop has O(arrB) iterations and is called arrA times. The inner loop is called a constant number of times (100,000) making the unsimplified Big O Notation O(100,000arrA*arrB). Remember we drop constants, so the final notation is simplified to O(arrA*arrB)
    

## Bonus

Which of the following are equivalent to O(N)?

1. O(N + M), where M < N/2
2. O(2N)
3. O(N + log(N))
4. O(N + M)
- Open the toggle for the answer
    1. O(N + M), where M < N/2 - When M is less than half of N it is not significant enough to include, so it can be simplified to O(N) 
    2. O(2N) - We can drop the constant 2, leaving O(N)
    3. O(N + log N) - log N is a non-dominant term, so it can be dropped, leaving us with O(N)
    4. O(N + M) - Without knowing anything about N or M we are unable to simplify this further