# Python Containers Lab

![](https://i.imgur.com/DPzk4Ok.png)

# Python Containers - Lab

# **This lab is a DELIVERABLE**

## Setup and Instructions

- Fork and [clone this repository](https://github.com/SEIR-221-Resources/python_containers_lab)
- In the provided - [`answers.py`](http://answers.py) file put a commented heading for each exercise
For example:
    
    ```
    # Exercise 1
    
    # your solution here
    
    # Exercise 2
    
    # your solution here
    
    # etc.....
    
    ```
    
- Complete the exercises below...

## Exercises

### Exercise 1

- Create a list named `students` containing some student names (strings).
- Print out the second student's name.
- Print out the last student's name.

### Exercise 2

- Create a tuple named `foods` containing the same number of foods (strings) as there are names in the `students` list.
- Use a `for` loop to print out the string "[*food goes here*] is a good food".

### Exercise 3

- Using a `for` loop, print just the last two food strings from `foods`.
    
    > Hint:  Use the slice operator to select the last two foods
    > 

### Exercise 4

- Create a dictionary named `home_town` containing the keys of `city`, `state` and `population`.
- Print a string with this format: `"I was born in *city*, *state* - population of *population*"`

### Exercise 5

- Iterate over the *key: value* pairs in `home_town` and print a string for each item, for example:

```python
"city = Arcadia"
"state = California"
"population = 58000"
```

### Exercise 6

- Create an empty list named `cohort`.
- Using a `for` loop to iterate over the `students` list.
    
    > Hint: Use the enumerate function to provide both the index & student
    > 
- Within the `for` loop, add a dictionary to the `cohort` list that combines the student's name and the food in the `foods` list at the same index. Each dictionary will have this shape:
    
    ```
    {
      'student': 'Tina',
      'fav_food': 'Cheeseburger'
    }
    
    ```
    
- Iterate over the `cohort` list, printing out each item (it's not necessary to format the dictionaries).

### Exercise 7

- Using the list of `students` and a list comprehension, assign to a variable named `awesome_students` a new list containing strings similar to this:<br>`["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]`
- Iterate over the `awesome_students` list, printing out each string.

### Exercise 8

- Use a `for` loop to iterate over a list comprehension that filters the `foods` tuple to only include food strings that contains the letter `a`.
- Within the `for` loop, print each food string.

## Deliverable

**This lab is a deliverable.**

Please submit your deliverable according to the directions provided by your instructors. 

## Stuck? Need a hint?

A solution can be found [here](https://repl.it/@jim_clark/Python-Containers-and-Ranges-Lab).