# Intro to Python - fizzbuzz

***Fizzbuzz** is a classic, “easy” whiteboard problem in interviews. cd* 

*Remarkably, many hiring managers report that a majority of their applicants cannot solve it.*

```
- Exercise duration: 45 min
- create a new file "fizzbuzz.py"
- Add the code to solve FizzBuzz, explained below.
- You may have solved this in JavaScript or on a whiteboard before!
- If you learn something, or something unexpected happens, share in the class thread
```

## Setup Instructions

Let's test this out by previewing a bit of Python by coding and running the infamous FizzBuzz function:

1. Move into your **~/code** folder:
    
    `cd ~/code`
    
2. Create a **fizzbuzz.py** script file:
    
    `touch fizzbuzz.py`
    
3. Open **fizzbuzz.py** in VS Code:
    
    `code fizzbuzz.py`
    
4. Code the `fizz_buzz()` function:
    
    ```python
    # Functions are defined using the def keyword
    def fizz_buzz(max_num):
      # Code blocks are defined using 
      # indentation after a :
      '''
      Loops through 1 up to max_num and prints message depending on evaluation of the integer
      '''
      # your code here ...
    
    fizz_buzz(31)
    ```
    

## Pseudocoding:

When y*ou write a function `fizzbuzz` in python, it will accept an argument `max_num`.*

*The function code block will include:*

 *A variable `count` assigned the integer: 1*

`*count` could be assigned from a `range` of 1 → `max_num` using an iterator (Hint: look at what ‘range’ class does in python)*

F*or each iteration:*

- `*printing` 1 of four things for each number.*
- *If the number is divisible by 3, `print` "fizz".*
- *If the number is divisible by 5, `print` "buzz".*
- *If the number is divisible by 3 and 5, `print` "fizzbuzz".*

*Otherwise, `print` the number* 

### Testing your code

*For the first 20 numbers, your console should look like this:*

```
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
17
fizz
19
buzz
```

In terminal, we can execute any python script like this:

`python3 <filename>.py`
Now we can run the Python script as shown above by typing the following in Terminal:

`python3 fizzbuzz.py`

<aside>
💡 As you can see, Python's `print()` function outputs to the Terminal.

Unlike with Node.js, providing the file extension (`.py`) is required.

</aside>

## Having trouble running your code?

### **Ensure `Python 3` is Installed**

In terminal type: `python3`

If you receive an error, run `brew install python`, quit and re-open terminal, and try `python3` again.

Similar to what you saw with **Node.js**, Python comes with an interactive REPL (Read-Evaluate-Print-Loop) that provides a way to run Python code by typing in.

For now, type `exit()` or press `control + d` to exit the REPL.

## Stuck? Need a hint?

```python
# Functions are defined using the def keyword
def fizz_buzz(max_num):
  # Code blocks are defined using 
  # indentation after a :
  '''
  Loops through 1 up to max_num and prints message depending on evaluation of the integer
  '''
  for num in range(1, max_num):
    if num % 3 == 0 and num % 5 == 0:
      # Using string format method
      print('{} is FizzBuzz'.format(num))
    elif num % 3 == 0:
      # Using newer f-string approach
      print(f'{num} is Fizz')
    elif num % 5 == 0:
      print(f'{num} is Buzz')
    else:
      print(num)

fizz_buzz(31)
```