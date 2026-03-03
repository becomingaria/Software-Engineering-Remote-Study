# Queue Data Structure

```jsx

class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
        // Insert the new data into the proper place in the queue
        // the lowest priority number should be the head node
        // the priorities should remain in order
        // if two nodes have the same priority, put the new one first
    }
    peek(){
        // return the highest priority node in the queue
    }
    dequeue(){
        // remove and return the highest priority node in the queue
    }
}
```

## Example Solution

```jsx
class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
      // Insert the new data into the proper place in the queue
      // the lowest priority number should be the head node
      // the priorities should remain in order
      // if two nodes have the same priority, put the new one first

      let node = new Node(data, priority);
      // if there is no head, we get to make our node the new head
      if (!this.head) return this.head = node;
      // if our head's priority is greater than or equal to our new node's priority
      if (this.head.priority >= priority) {
        // our node gets to become the new this.head
        // so node.next should become this.head
        node.next = this.head;
        // and this.head becomes our node
        return this.head = node;
      }
      // otherwise, we have to traverse the list until we find the right place
      let walker = this.head;
      // traverse as long as there is a walker.next
      // and as long as our priority is larger than the the next node's priority
      while (walker.next && priority > walker.next.priority) {
        walker = walker.next;
      }
      // then we do our regular old insert
      node.next = walker.next;   
      walker.next = node;
    }
    peek(){
        // return the highest priority node in the queue

        return this.head;
    }
    dequeue(){
        // remove and return the highest priority node in the queue
        
        if (!this.head) return null;
        let dequeued = this.head;
        this.head = dequeued.next;
        return dequeued;
    }
}
```