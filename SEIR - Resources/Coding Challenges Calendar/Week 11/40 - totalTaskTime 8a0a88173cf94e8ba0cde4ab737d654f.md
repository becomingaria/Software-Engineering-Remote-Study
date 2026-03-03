# 40 - totalTaskTime

```jsx
/*-----------------------------------------------------------------
Challenge: 40-totalTaskTime
Difficulty:  Difficult
Prompt:
- Write a function called totalTaskTime that accepts two arguments.
- The first argument is an array of integers referred to as a "queue".  Each integer in the queue represents a "task", more specifically, the amount of time to complete that task.
- The "next task" at the front of the queue is considered to be at index 0.
- The second argument is an integer representing the number of CPU "threads" available to process all of the tasks in the queue.
- The totalTaskTime function should return an integer representing the total time it is going to take to complete all of the tasks in the queue.
- You may mutate the "queue" array (first argument) if you wish.
Hint:
- Solve it with paper and pencil first.  Look for patterns and generalize.  Pseudocode!
Examples:
totalTaskTime( [], 1 ) // => 0
totalTaskTime( [4, 2, 5], 1 ) // => 11
totalTaskTime( [5, 8], 2 ) // => 8
totalTaskTime( [4, 2, 10], 2 ) // => 12
totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12
-----------------------------------------------------------------*/
// Your solution for 40- here:
```

## Solution

```jsx
function totalTaskTime(tasks, numThreads) {
  let time = 0, shortest, threads;
  while(tasks.length > numThreads) {
    // extract a task for each thread
    threads = tasks.splice(0, numThreads);
    // Find out the time for the task that will finish first.
    // Using the spread operator to provide Math.min with a list of values
    shortest = Math.min(...threads);
    // Add the time for that shortest task
    time += shortest;
    // Reduce each task in threads by the shortest task time and
    // remove all of those completed "short" tasks
    threads = threads.map(t => t - shortest).filter(t => t);
    // Put any remaining tasks back into threads and do it again (loop)...
    tasks = threads.concat(tasks);
  }
  // When num remaining tasks is less or equal to numThreads,
  // we just need to add the time from the longest remaining task.
  // The ternary protects against Math.max returning infinity on an empty array
  return time + (tasks.length ? Math.max(...tasks) : 0);
}

/* One-liner using different 'addition' approach */
// function totalTaskTime(tasks, numThreads) {
//   return tasks.length && Math.max(...tasks.reduce((b, t, i) => (b[b.indexOf(Math.min(...b))] += t) && b, tasks.splice(0, numThreads)));
// }
```