# Big O Assessment Activity

# Big-O Notation Exercises

Collect your answers in your notes and be prepared to share your responses. 

Instructions: 

- Assess each function and determine each algorithm’s (worst case) time complexity.
- In your answers, provide some explanation why it qualifies as one type or another.

### #1

```jsx
function wordOccurrence(word, phrase){
  let result = 0
  const array  = phrase.split(' ')
  for(let i = 0; i < array.length; i++){
    if(word.toLowerCase() === array[i].toLowerCase()){
      result++;
    }
  }
  return result
}

```

### #2

```jsx
function bubble_sort(list){
  for(let i = 0; i < list.length - 1; i++){
    for(let j  = 0; j < list.length - 2; j++){
      if(list[j+1] < list[j]){
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}

```

### #3

```jsx
function factorial(n){
  if(n === 0){
    return 1;
  }else{
    return n * factorial(n-1);
  }
}

```

### #4

```jsx
function bobIsFirst(people){
  return people[0] == 'bob'
}

```

### #5

```jsx
function isPalindrome(input){
  const stack = [];
  let output = "";
  for(let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while(stack.length){
    output += stack.pop();
  }
  return output == input
}

```

### #6

```jsx
function sumOfDivisors(n){
  let result = 0;
  let i = 1;
  while(i < n){
    if( n % i == 0){
      result += i;
    }
    i++;
  }
  return result
}

```

### #7

```jsx
function printAllNumbersThenSumPairs(numArray){
  numArray.forEach((num)=>{
    console.log(num);
  });
  numArray.forEach((num, index)=>{
    if(index < numArray.length - 1){
      console.log(num + numArray[index+1])
    }
  });
}

```

### #8

```jsx
function isPrime(num){
  if(num == 1 ){
    return false
  }
  for(let i = 2; i < num - 1; i++){
    if(num % i == 0){
      return false
    }
  }
  return true
}

```