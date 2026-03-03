# 22 - reverse_a_string

```python
#Challenge: 22-reverse_a_string
#Difficulty:  Intermediate
#Prompt:
#- Reverse a string manually. Don't use s[::-1] (even though that's awesome). Create a new variable storing an empty string and add the letters from the first string one by one. The for loop should iterate over the length of the string and you should access letters individually.

#Hint:
## Python offers several ways to reverse a String. This is a classic thing that lots of people want to do. It's probably easy to look up this answer on Stack Overflow.

# Your solution for 22-reverse_a_string here:
```

## Solution

```python
def reverse_a_string(s):
    new_string = ''

    for char in s:
        new_string = char + new_string

    return (new_string)
```