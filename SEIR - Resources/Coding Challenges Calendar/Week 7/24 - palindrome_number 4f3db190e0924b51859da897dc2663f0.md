# 24 - palindrome_number

```python
#Challenge: 24-palindrome_number
#Difficulty:  Basic
#Prompt:
#- Write a function called palindrome_number that, given an integer x, return true if x is a palindrome, and false otherwise.

# Your solution for 24-palindrome_number:
```

## Solution

```python
def is_palindrome(x):
        x_array = list(str(x))
        x_array_reverse = list(str(x))
        x_array_reverse.reverse()
        if x_array == x_array_reverse:
            return True
        return False
```