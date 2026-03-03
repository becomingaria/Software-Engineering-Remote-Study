# Linked Lists

## Learning Objectives

By the end of this lesson, you'll be able to:

- Define a linked list.
- Explain how a node stores data.
- Identify situations where you use a linked list instead of an array.
- Build a singly linked list.

## Prerequisites

- Big O Notation

## Duration

1.5 hours total:

- 1 hour in class

# Linked Lists

Linked lists are a foundational data structure that many other, more complex structures use as their basis.

There are three components to this lesson:

1. Content Review (optional HW)

    [Overview of Linked Lists ](Linked%20Lists/Overview%20of%20Linked%20Lists%2072eef2f66a76444a90c55fca4655552a.md)

2. In-Class Exercise Pt1: Implementing a Linked List & Traversal
3. In-Class Exercise Pt2: Implementing key methods for LL

## JS Linked List Starter Code

```jsx
class Node {
    constructor() {
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
    }
}

class LinkedList {
    constructor() {
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data) {
        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data) {
        // creates a new node with the given data and adds it to the front of the list
    }
    pop() {
        // removes the last node from the list and returns it
    }
    removeFromFront() {
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data) {
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X) {
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data) {
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort() {
        // sort the Linked List in ascending order of data values
    }
}
```

## Additional Resources

- The top 20 [linked list interview questions](https://www.geeksforgeeks.org/top-20-linked-list-interview-question/) (that's a LOT!).
- Visualize [building a linked list](https://visualgo.net/bn/list).
- Learn more about [doubly linked lists](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list) (we only cover a singly linked list in the exercise).
