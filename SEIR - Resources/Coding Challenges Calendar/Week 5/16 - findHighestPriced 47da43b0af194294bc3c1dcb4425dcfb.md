# 16 - findHighestPriced

```jsx
/*-----------------------------------------------------------------
Challenge: 16-findHighestPriced
Difficulty:  Intermediate  
Prompt:
- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array that has the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.
- DO NOT mutate the array, i.e., do not sort it
Examples:
findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 
findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:
```

## Solution

```jsx
function findHighestPriced(arr) {
  let highestPrice = 0;
  let resultObj;
  arr.forEach(function(item) {
    if (item.price > highestPrice) {
      highestPrice = item.price;
      resultObj = item;
    }
  });
  return resultObj;
}

/*--- using the reduce Array method ---*/
// function findHighestPriced(arr) {
//   return arr.reduce((highest, item) => item.price > highest.price ? item : highest);
// }

/*--- using the sort Array method on a Copy to avoid mutating the source array ---*/

// function findHighestPriced(arr) {
//   const copy = [...arr];
//   copy.sort((a, b) => b.price - a.price);
//   return copy[0];
// }
```