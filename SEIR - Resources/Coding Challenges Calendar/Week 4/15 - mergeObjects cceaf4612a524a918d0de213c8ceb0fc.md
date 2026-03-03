# 15 - mergeObjects

```jsx
/*-----------------------------------------------------------------
Challenge: 15-mergeObjects
Difficulty:  Intermediate
Prompt:
- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
Examples:
mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:
```

## Solution

```jsx
/*--- Using ES2015's rest parameter syntax ---*/
function mergeObjects(target, ...objects) {
  objects.forEach(function(obj) {
    // using ES2015's 'for in' loop
    for(let key in obj) {
      target[key] = obj[key];
    }
  });
  return target;
}

/*--- Using ES2015's Object.assign & spread operator ---*/
// function mergeObjects(target, ...objects) {
//   return Object.assign(target, ...objects);
// }
```