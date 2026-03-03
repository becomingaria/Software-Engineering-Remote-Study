# Hash Tables

# CS Topics: Hash Tables

Sets are a simple, nifty little data structure. They're similar to arrays with one key difference: They only hold unique values.

There are two components to this lesson:

1. Hash Tables Review [Deck](https://docs.google.com/presentation/d/103H0mIcACy8dAsrynYXZz6SFYkwtUiytjc_FZ4Bu7Y8/edit?usp=sharing)
2. Implementing a Hash Table Exercise (See Below)

## Learning Objectives

By the end of this lesson, you'll be able to:

- Define a hash and how it’s used in programming.
- Distinguish between a hash and a hash table
- Discuss common challenges when implementing a hash table
- Implement a set and common methods used in sets.

## Prerequisites

- Big O Notation
- Linked Lists

## Duration

~1.5 hours total:

- 30 minutes inClass
- 1 hour in class Exercise

# Hash Table Exercise

Complete the exercise according to the specifications in the comments. In addition to implementing the structure, you'll also get to try out a few hash methods!

## Exercise Starter Code

```jsx
class HashTable {
    constructor() {
        // create a table property that stores an array of
        // create a size property that is initialized as 0
    }

    _hash(key) {
        // see hash instructor notes
    }

    set(key, value) {
        // create an index from the provided key
        // assign the table's index to the new value
        // the new value should be a sub list storing two values a key and a value
        // update the table's size
    }

    get(key) {
        // generate the index from the provided key
        // return the value stored at the calculated index
    }

    remove(key) {
        // generate the index from the provided key
        // determine if the index is defined and the sub-list stores any data
        // if a value is located reset the sub-list
        // decrement the size
        // return true
        // otherwise return false
    }
}
```

## Exercise Solution Code

```jsx
class HashTable {
    constructor() {
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key, value) {
        const index = this._hash(key)
        this.table[index] = [key, value]
        this.size++
    }

    get(key) {
        const target = this._hash(key)
        return this.table[target]
    }

    remove(key) {
        const index = this._hash(key)

        if (this.table[index] && this.table[index].length) {
            this.table[index] = []
            this.size--
            return true
        } else {
            return false
        }
    }
}
```

## Additional Resources

- Hash Table [Basics](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- Hash Table [Deep Dive](https://en.wikipedia.org/wiki/Hash_table)
- [Hash Function Examples](https://www.geeksforgeeks.org/what-are-hash-functions-and-how-to-choose-a-good-hash-function/)
- [Applications of Hash Tables](geeksforgeeks.org/applications-of-hashing/)
