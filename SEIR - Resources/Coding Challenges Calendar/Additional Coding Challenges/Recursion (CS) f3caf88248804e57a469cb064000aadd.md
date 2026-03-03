# Recursion (CS)

## What is recursion?

Recursion is a method of solving a [](https://en.wikipedia.org/wiki/Computational_problem)problem where the solution depends on solutions to smaller versions of itself (makes sense, right?). Recursion solves such recursive problems by using functions that call themselves from within their own code, only needing a termination condition (base condition) so that successive repetitions are processed up to the critical step where the condition is met. This approach can be applied to many types of problems, procedures, and algorithms.

## Code Example

In this example, we’re going to use [factorial](https://www.cuemath.com/numbers/factorial/) - whatever the user inputs, the function will return the multiplication of each number from that number until it reaches 1.

**Example:**

```jsx
// if we wanted the factorial of 3, 
// we'll want our function to return 3 * 2 * 1 which equals 6
console.log(factorial(3)) // output: 6

// same if we entered 5 
// 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(5)) // output: 120

// the factorial of 0 is 1
console.log(factorial(0)) // output: 1

// any negative numbers will return undefined 
console.log(factorial(-5)) // undefined
```

Time to start coding! Let’s find the factorial of a number using…

![Untitled](Recursion%20(CS)/Untitled.png)

Our function will take in any whole number, anything less than 0 will return undefined (or `None` in Python)

```jsx
function factorial(num):
		// negative numbers will not work in our function
		if (num < 0){ return undefined };
```

The next case is if the number is equal to 0, then the factorial should return 1.

```jsx
function factorial(num){
		// negative numbers will not work in our function
		if num < 0 { return undefined };
		
		// the factorial of 0 is 1
		if (num === 0){ return 1 };
	}	
```

Now that we’ve taken care of our edge cases, we can start implementing our recursive code. As we learned above, we’ll need to add a base condition. In this case, the function should return result `num` once it has been decremented to 1.

```jsx
function factorial(num){
		// negative numbers will not work in our function
		if (num < 0) { return undefined };
		
		// the factorial of 0 is 1
		if (num === 0){ return 1 };

		// return when num is equal to 1
		if (num === 1){ return num };
	}	
		
```

Great! The function has a base condition. So how could we finalize our code here? Let’s break it down and go through the steps:

- The function should return our number once the input number is equal to 1
- The function should multiply each number until that base condition is hit
- Lastly, the function should continue to decrement the number by 1 through each iteration

With this logic, all we need to do is add our recursive code:

```jsx
function factorial(num){
		// negative numbers will not work in our function
		if ( num < 0 ) { return undefined }
		
		// the factorial of 0 is 1
		if (num === 0) { return 1 } 

		// return when num is equal to 1
		if (num === 1) { return num }
		else{
			// if num is greater than 1, run the factorial 
			// function again (recursion!) decrementing num by 1
			return num * factorial(num - 1); 
		}
	}	
		
		
```

## Explanation

If we look at the last line in our function, it’s multiplying each factorial iteration. This might seem a little confusing at first, so we’ll map it out:

![Untitled](Recursion%20(CS)/Untitled%201.png)

The amount of times this function is being called depends on the original input (in the above example, it’s being called 5 times since the input is `factorial(5)`) until it reaches the base point (`num === 1`). In Big O Notation, this factorial function would be linear (`O(n)`). For other recursive functions, the time complexity would depend on how many times the recursive function is being called plus the time complexity of additional operations. There’s a really good breakdown of that in this [stackoverflow question](https://stackoverflow.com/questions/13467674/determining-complexity-for-recursive-functions-big-o-notation).

## Comparison: Recursion vs Iteration

![Untitled](Recursion%20(CS)/Untitled%202.png)

## When to use recursion?

Most problems can be solved using recursion or iteration. Main reasons to use recursion over iteration is:

- it’s more intuitive in many cases when it mimics our approach of the problem -  it’s easier to break down a problem into repetitive pieces versus a loop (making the code more maintainable)
- some data structures can be too complicated (such as trees, graphs or stacks) which are easier to explore using recursion

## 📕Further Reading

- [**Recursion vs Iteration**](https://favtutor.com/blogs/recursion-vs-iteration)
- [**Difference between Recursion and Iteration**](https://www.geeksforgeeks.org/difference-between-recursion-and-iteration)
- [**Dynamic Programming**](https://www.geeksforgeeks.org/dynamic-programming/)