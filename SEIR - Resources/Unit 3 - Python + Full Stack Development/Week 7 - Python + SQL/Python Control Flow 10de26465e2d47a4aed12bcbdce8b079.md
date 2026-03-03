# Python Control Flow

![](https://i.imgur.com/a0edx5Q.png)

# Control Flow in Python

## Learning Objectives

Students Will Be Able To:

- Describe what is truthy & falsy in Python
- Perform multi-path branching using a  statement
- Perform looping using  statements
- Use a  and a  statement to loop through a range of integers

## 1. Setup

- Create a new directory - you can name it "python_control_flow".
- `cd` into this directory and `touch cf.py`
- `code .`

## 2. Review of Control Flow

As you may recall, **control flow** refers to the order in which code executes in a program as determined by the use of constructs in the code.

In JavaScript, we saw how statements such as `if` and `switch` were used to perform **branching**.

We also used statements such as `for` and `while` to perform **looping**.

The good news is that most programming languages, including Python, share these same control flow constructs.

It's worth pointing out that programming concepts such as variables, data types, control flow, functions, etc. apply to programming languages in general thus making learning additional languages far easier than the first one!

## 3. Conditional Expressions in Python

Control flow typically comes down to different code paths executing according to the evaluation of **conditional expressions**.

In other words, if the **conditional expression** evaluates to *truthiness*, do this stuff, optionally, do something else.

Let's review some of the logic and fundamentals of conditional expressions.

### Boolean Values

Python has two logical boolean values: `True` and `False`.

Most logical operations result in one of these two values. They work exactly the same as in JS but are always written with a starting capital letter in Python.

### Truthy & Falsy in Python

Like JS, every expression in Python is considered to be either **truthy** or **falsy**.

Conditional expressions for `if` statements, etc., rely on an expression evaluating to `True`/**truthy** or `False`/**falsy** to determine which path the code will follow.

Just like in JavaScript, most things in Python are considered to be truthy.

Here's what is **falsy** in Python:

- `False`
- `None`
- Zero in any numeric type: `0`, `0.0` and `0j`
- Empty sequences or collections:
    - `''` (empty string)
    - `[]` (empty list)
    - `()` (empty tuple)
    - `{}` (empty dictionary)
    - `range(0)` (empty range)

> 👀 [] and {} in JavaScript are truthy, not falsy as in Python.
> 

### Comparison Operators

Python has all the same comparison operators as JavaScript:

- `<` - less than
- `>` - greater than
- `<=` - less than or equal
- `>=` - greater than or equal
- `==` - equal to
- `!=` - not equal to

Note that in Python, there's only one equality operator. The `==` in Python is the same as `===` in JavaScript.

### Examples

```
8 > 8
# => False — 8 is not greater than 8.

8 >= 8
# => True — This checks if 8 is greater than or equal to 8, and they are equal.

8 < 8
# => False — 8 is not less than 8.

7 == 7
# => True — 7 is equal to 7.

7 == "7"
# => False — One is a number and the other is a string.

7 != 7
# => False — This checks if they aren't equal. Because does 7 equal 7, it's `False`.

6 != 7
# => True — 6 is not equal to 7.

```

### Logical Operators

Luckily, the amazing logical operators we used in JavaScript work the same way in Python except Python uses English words instead of symbols:

- `or` is the same as `||`
- `and` is the same as `&&`

Again, they work just like they did in JS, which means they always return either the **first** or the **second** operand as follows:

### `or`

If the first operand is truthy, return it, otherwise return the second operand.

### `and`

If this first operand is falsy, we will return its value, if the first operand is truthy, we will then return the value of the second operand.

### Examples

```
True or False
# => True

False or True
# => True

'hello' or 0
# => 'hello'

0 or 'hello'
# => 'hello'

True and False
# => False

False and True
# => False

'hello' and 0
# => 0

0 and 'hello'
# => 0

'hello' and 'tacos'
# => 'tacos'

```

### `not`

"Flips" the truthiness/falsyness of its operand, and returns `True` or `False`

```
not True
# => False

not 123
# => False

not []
# => True

```

## 4. Branching

### Indentation!

Before we start looking at control flow, it's important to realize that **Python uses indentation to define blocks of code** - not curly braces.

It has always been recommended to use indentation in languages for readability purposes, however, in Python, proper indentation is mandatory!

### Branching with the `if` Statement

Just like in JavaScript, we can use an `if` statement to branch to one of several code paths depending upon the result of conditional expression(s).

Single path `if` statement:

```python
floor = "sticky"
walls = "clean"
if floor == "sticky":   # don't forget the colon
  print("Clean the floor! It's sticky!")
  # more lines of code in this code
  # block need to be indented as well
if walls == "sticky":
  print("Clean the walls! They're sticky!")

```

Yup, no parentheses are required around the conditional expression.

Dual path `if..else` statement:

```python
if condition:
  # do something
else:
  # do something else
  # do something else

```

Multi-path `if..elif..else` statement:

```python
if condition1:
  # do something
  # do something
elif condition2:
  # do something else
  # do something else
  # do something else
elif condition3 and condition4:
  # do another thing entirely
  # do another thing entirely
else:
  # else do this stuff

```

The `elif` is not a typo :)

As in JS, including an `else` is optional.

> 👀 There is no switch construct in Python
> 

### 👉 You Do - Branching Exercise (5 minutes)

Copy/paste the following code that accepts text input from the user, converts it to lowercase and prints it:

```python
color = input('Enter "green", "yellow", "red": ').lower()
print(f'The user entered {color}')

```

- ❓ What was the function we used in JavaScript to get input from the user?
    
    `input()`
    

Below that code, write an `if...elif...else` statement that prints out one of the following messages:

- If `green` is entered, print the message `Go!`
- If `yellow` is entered, print the message `Slow Down!`
- If `red` is entered, print the message `Stop!`
- If anything else is entered, print the message `Bogus!`

Test the code by running `python3 cf.py` in your terminal.

## 5. Looping

### The `for` Statement

Python's `for` statement is not designed like the one you first used in JavaScript:

```
// A JavaScript for loop
for (let i = 0; i < 10; i++) {
  // do stuff
}

```

Instead, the Python `for` loop always iterates over the items in a *sequence*, similar to JavaScript's `for...in` and `for...of` loops.

We'll learn about sequences soon, but here's a taste of how Python's `for` loop is used to loop through a **list** (Python's array):

```python
names = ["Tom", "Deborah", "Murray", "Axel"]

for name in names:
  print(name)
```

The above Python code is like the following ES2015 JS:

```python
const names = ["Tom", "Deborah", "Murray", "Axel"];

for (let name of names) {
  console.log(name);
}
```

### The `while` loop

Python also has a `while` loop construct that will continue to iterate **while a given condition is truthy** - just like in JavaScript.

Let's look at the syntax:

```
while condition:
  # do some stuff
  # continue to do stuff
```

`while` loops are the go to when the number of times you will need to iterate is unknown.

> 👀 Beware of infinite loops! When using while loops, it's important to ensure that the condition will become falsy as some point so that the loop exits.
> 

### The `break` and `continue` Statements

Just like in JavaScript...

The `break` statement is used to immediately exit `for` and `while` loops and continue executing any statements that may follow them.

The `continue` statement is used to immediately return to the top of the `for` or `while` loop.  In the case of a `while` loop, its conditional expression is once again evaluated to determine if the loop should continue.

### 👉 You Do - Looping Exercise - (5 minutes)

Wrap the "color" code from the branching exercise in a `while` loop such that it continues to prompt for a color and print the response until the word `quit` is entered.

> Hint: Same gotcha as when you did this exercise in JS 😁  If you get an error, read it - you got this!
> 

## 6. Python Ranges

### Purpose of Ranges

Python ***ranges*** are a *sequence type* like *lists* and *tuples*.

The **range** type represents an immutable sequence of integers and is commonly used for looping a specific number of times in `for` loops.

*Ranges* have a class (type) of `range`.

### Ranges - Basic Syntax

Ranges can be created by invoking the `range()` class:

```python
for num in range(5):
  print(num)
> 0
> 1
> 2
> 3
> 4

```

Notice that by default, the sequence starts at `0` and goes up to, but does not including the integer passed in.

Ranges can also generate sequences with a **start** and a **step**:

```python
for even in range(2, 10, 2):
  print(even)
> 2
> 4
> 6
> 8
```

When not passed in, the *start* value defaults to `0` and the *step* defaults to `1`.

Ranges can also be used to create *lists* and *tuples*:

```python
nums = list(range(10))
print(nums)
> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
odds = tuple(range(1, 10, 2))
print(odds)
> (1, 3, 5, 7, 9)
```

### Ranges - Negative Step

If the *step* is a negative integer, the *sequence* counts down:

```
for num in range(5, 0, -1):
  print(num)
> 5
> 4
> 3
> 2
> 1
```

## 7. Summary

As you have seen today so far, Python is not all that different than JavaScript.

Applying what we did in this lesson in the lab will provide you with some practice performing branching and looping in Python.

But first...

## 8.❓ Essential Questions (1 minute)

- (1) What are the two types of control flow discussed in this lesson.
    
    **Branching** and **Looping**
    
- (2) Name three things in Python that are considered to be `falsy`.
    
    **Any three of the following:**
    
    `False`, `None`,
    `0`, `0.0` and `0j` (zero)
    Empty sequences or collections:
    
    - `''` (empty string)
    - `[]` (empty list)
    - `()` (empty tuple)
    - `{}` (empty dictionary)
    - `range(0)` (empty range)

```
25 or 50

```

- (3) What is returned by the above expression?
    
    `25`
    

```
25 and 50

```

- (4) What is returned by the above expression?
    
    `50`
    

## References

[Official Docs for Control Flow in Python](https://docs.python.org/3/tutorial/controlflow.html#)