# 23 - sum_of_minimums

```python
#Challenge: 23-sum_of_minimums
#Difficulty:  Intermediate
#Prompt:
#- Write a function called sum_of_minimums that accepts a single list as an argument.
#- Given a 2D list of size m * n, your task is to find the sum of the minimum value in each row.
#- You will always be given non-empty lists containing positive values.
#Example:
def sum_of_minimums(list):
    # your lovely code goes here!

my_list = [
    [1,2,3,4,5], # minimum value of row is 1
    [5,6,7,8,9], # minimum value of row is 5
    [20,21,34,56,100] # minimum value of row is 20
    ]

print(sum_of_minimums(my_list))
    # should return 26, because the sum of each row's minimums is 1 + 5 + 20 = 26.

# Your solution for 23-sum_of_minimums here:
```

## Solution

```python
def sum_of_minimums(list):
    # your lovely code goes here!
    min_array = []
    for i in range(0, len(list)):
        # an empty list for new array
        
        sub_arrays = list[i]
        min_numbers = min(sub_arrays)
        min_array.append(min_numbers)
        

    # min_num = min(list)
    return sum(min_array)
```