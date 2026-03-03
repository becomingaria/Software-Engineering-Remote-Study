# Overview of Linked Lists

---

## Learning Objectives

- Define linked lists
- Explain the time complexity of linked list operations
- Compare and contrast linked lists to Arrays
- Visualize a linked list
- Traverse a singly linked list
- Swap nodes within a singly linked list
- Remove nodes from a singly linked list

---

## Defining a Linked List

![](https://imgur.com/L9KOlSx.jpeg)

Linked lists are a foundational, "array-like" data structure which appears in other complex data structures

- Linked lists are a collection/’sequence’ of **node instances (objects) stored in memory**
    - nodes are also seen in other data structures, but for linked lists, they contain:
    - a `data` property, that stores the node's value
    - a `next` property, also known as the "pointer", which points to the next item in the linked list
- A linked lists is a collection of objects stored in non-sequential memory locations. Rather than a “physical” placement in memory.
- A linked list’s sequence originates with a reference to a `head` node.
- Each `node` stores a value (data) and a reference to the `next` object in the sequence.
- If a linked list’s node does not point to another node - it is the final node, or `tail` in the linked list.
- The `tail` the last node in a linked list will have a `next` property set to `null`, so it is sometimes referred to as the "null next node", or the "tail"

---

## Linked List Operation Time Complexity

| Operation | Worst Case Time Complexity |
| --- | --- |
| Indexing (Access) | O(N) |
| Insert/delete at beginning | O(1) |
| Insert/delete at end | O(1) when last element is known |
| Insert/delete in middle | search time + O(1) |

---

## Comparing Linked Lists to Arrays

It seems that linked lists are very similar to arrays, but have natural drawbacks

- 💡 **❓ What is the time complexity of indexing for an array?**
    
    O(1) - Array random access of an index position
    
- 💡 **❓ Is it possible for us to look backwards through a linked list where each node only has a *data* and *next* property?**

But for us to understand the advantages of linked lists, we'll have to do a bit of a review of arrays.

### *For this lesson, we'll be discussing dynamic arrays, instead of static arrays.*

Dynamic array stores all elements *consecutively* in memory, and keeps a count of the current number of elements. Both JS arrays and Python lists use ‘dynamic’ memory allocation for storing array.

- Arrays are allocated space when defined
- if the space reserved for the dynamic array is exceeded, it is reallocated and (possibly) copied
- Illustration of array memory storage :
    
    ![](Overview%20of%20Linked%20Lists/Untitled.png)
    
- If we want to insert something into an array, we have to make space by "scooting over" every element, starting at the index we want to insert at

💡 **❓ What must we do if we want to delete an element in the middle of the array?**
💡 **❓ What are some of the advantages of linked lists over arrays?**

---

## Syntax Review

[JS Linked List  -  Review](Overview%20of%20Linked%20Lists/JS%20Linked%20List%20-%20Review%203d29e48a033f4b2f94537fa7b760858a.md)

[Py Linked List  -  Review ](Overview%20of%20Linked%20Lists/Py%20Linked%20List%20-%20Review%20326e98b3849d4344894b67244e69cd36.md)

---

## Visualizing a Linked List

- When we create a linked list, we initialize it with a `head` property, which will refer to the first node
    - When you initialize a linked list, head will not point to anything yet, so it will point to `null`
- The easiest place to add more nodes to the linked list is at the end of the list
    - **❓ How do we know if you have reached the end of a linked list?**

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/linked-lists/english/3-Head-Node-Null.png)

We will be referring to this graphic for the below sections

---

## Traversing a Linked List with “the Walker”

As with a brute-force array search, you may be aware that accessing a node in a linked list has linear time complexity

- This is because we have to traverse (or walk through) the list until we get to the node we are looking for
- Since we are “walking through” the linked list, checking against the data property one node at a time, we often call our iterator `walker`

In order to traverse a linked list, we will need to start at `head`, and use the `next` pointers to iterate through the list

```jsx
// JS - inside a method
let walker = this.head;

while (walker.next) {
    walker = walker.next;
}

```

```python
# Python - inside a method

walker = self.head;

# while the current node has a node reference stored in the .next property
while walker.next != None :
    walker = walker.next;

```

**❓ How could we edit the `condition` such that walker will become the final `null` value?**

---

# Linked Lists - Pt 2

## Swapping Nodes in a Linked List

One of the operations that might be performed in a linked list is the swapping of nodes

Using the below image, what if we wanted to swap the node with a `data` of 7 with the node with a `data` of 12

![](https://i.imgur.com/8Erm8Gz.png)

The end goal would be:

![](https://i.imgur.com/R1dapjO.png)

Let's visualize the swap where we first move out the node with a data of 12 and it's next pointer

![](https://imgur.com/f6Bn89D.png)

- At this point, we haven't done any attachments yet, but here are some of the things that must be done
    - the node with `data` of 7 should point to what the node with `data` of 12 was previously pointing at
    - The node with a `data` of 12 should now point to our node with `data` of 7
    - the node with a `data` of 4 should now point to our node with `data` of 12

Let's try connecting our arrows

![](https://imgur.com/5gnH2fr.png)

If we were to convert this to code, it will look something like this

```jsx

// assume that walker is the node with data of 4
// therefore, walker.next would be the node with data of 7
// and walker.next.next is the node with data of 12

// first, we should "move" out the node with data of 12
// we are just saving the node to a variable

let temp = walker.next.next;
// point node with data of 7 to what node with data of 12 was looking at

walker.next.next = temp.next;
// point the node with data of 12 to node with data of 7

temp.next = walker.next;
// connect walker to node with data of 12

walker.next = temp;
```

**❓ Is it possible to swap 7 and 12 without having a reference to what precedes 7?**

**❓ How would this code change if we wanted to swap the head node with what comes after it?**

**❓ Isn't putting the node with `data` of 12 back to the linked list a lot like inserting?**

---

## Removing Nodes from a Linked List

Let's go back to our example with 4, 7, and 12

![](https://i.imgur.com/8Erm8Gz.png)

If we wanted to remove our node with `data` of 7, how hard would it be?

- Can't we just tell our node with `data` of 4 to look at the node with `data` of 12?

Heck yes we can! Let's see it in action with some code

```jsx
// we will have our walker again, and it will be the node with data of 4

// so let's just remove 7 by doing
walker.next = walker.next.next
```

**❓ Assume walker is now the node with `data` of 7, would the code change if we wanted to remove the node with `data` of 12?**

---

## Essential Questions

1. When we want to add a node to a linked list, do we have to scoot over the subsequent nodes (like we do for arrays)?
2. Can we do index access like we can with arrays with linked lists?

## Resources:

Linked List Review - [https://www.procoding.org/linked-list/](https://www.procoding.org/linked-list/)