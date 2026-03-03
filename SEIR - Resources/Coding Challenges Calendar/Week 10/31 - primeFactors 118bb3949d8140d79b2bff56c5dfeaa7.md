# 31 - primeFactors

```jsx
/*-----------------------------------------------------------------
Challenge: 31-primeFactors
Difficulty: Intermediate
Prompt:
Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
- Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.
Examples:
primeFactors(2) //=> [2]
primeFactors(3) //=> [3]
primeFactors(4) //=> [2, 2]
primeFactors(18) //=> [2, 3, 3]
primeFactors(29) //=> [29]
primeFactors(105) //=> [3, 5, 7]
primeFactors(200) //=> [2, 2, 2, 5, 5]
Hint: Code a nested isPrime(n) helper function that returns true if n is prime, otherwise it returns false
-----------------------------------------------------------------*/
// Your solution for 31-primeFactors here:
```

## Solution

```jsx
/*--- most straightforward/logical approach ---*/
function primeFactors(n) {
  let factors = [];
  if (n < 2 || !Number.isInteger(n)) return factors;
  
  // function to help find next prime to divide by...
  function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= n / 2; i++) {
      if (Number.isInteger(n / i)) return false;
    }
    return true;
  }
  
  let prime = 2;  // start with smallest prime
  while (!isPrime(n)) {
    if (Number.isInteger(n / prime)) {
      factors.push(prime);
      n = n / prime;
    } else {
      // find next prime
      prime++;
      while (!isPrime(prime)) prime++;
    }
  }
  factors.push(n);
  return factors;
}

/*-- a more efficient algorithm that relies on the fact
     that you don't have to check if the divisor is prime 
     as shown here:
     https://people.revoledu.com/kardi/tutorial/BasicMath/Prime/Algorithm-PrimeFactor.html ---*/
// function primeFactors(n) {
//   let factors = [];
//   if (n < 2 || !Number.isInteger(n)) return factors;
//   let divisor = 2;
//   while (n >= divisor * divisor) {
//     if (Number.isInteger(n / divisor)) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   factors.push(n);
//   return factors;
// }
```