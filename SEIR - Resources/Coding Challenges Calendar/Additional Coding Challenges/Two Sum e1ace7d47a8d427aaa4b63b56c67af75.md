# Two Sum

**Prompt:** Given an array of integers `nums` and an integer `target`, return the *indices of the two numbers which add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* index twice.

You can return the answer in any order.

**Example Input:** 

```jsx
nums = [2,7,11,15] 
target = 9
```

**Example Output:**  

```jsx
[0,1]
// Because nums[0] + nums[1] == 9, we return [0, 1]
```

# **Function Description**

Function should be called `twoSum` and have the following parameter(s):

- *nums*: an array of integers
- *target*: an integer

# **Input Format**

Input will be an array of integers (nums) and a single integer (target). These numbers will be positive integers.

# **Output Format**

Return an array of integers with the index location of the solution. If no solution can be found return an error that states "No solution was found".