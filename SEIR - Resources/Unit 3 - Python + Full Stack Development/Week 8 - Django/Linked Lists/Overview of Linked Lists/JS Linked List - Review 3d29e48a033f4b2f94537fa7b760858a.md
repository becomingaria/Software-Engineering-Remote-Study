# JS Linked List  -  Review

Talking about theory is a lot of fun, but what better way is there for us to understand linked lists than by creating them ourselves?

If you were to implement a linked list, you would create instances of linked lists, much like you create instances of arrays and objects. Although we are used to using literals to create arrays (`[]`) and objects (`{}`), remember that we are able to instantiate them using "classes" as well!

```
let myArr = new Array();
let myObj = new Object();

```

When you do your exercises, your goal will be to create a `LinkedList` class, which you would then be able to invoke with the below syntax to create shiny new linked list objects.

```
let myLinkedList = new LinkedList();

```

### JS Class Syntax

The easiest way for us to create JS "classes" is to use the class declaration syntactic sugar (because classes don't actually exist in JS):

```
 class LinkedList {

 }

```

Now you have a class which can be used to create shiny new objects that are instances of our LinkedList class. However, if we were to create an instance of this class, it would just be an empty object. If we want our objects to hold properties, we will use the `constructor` method to assign properties to them!

The `constructor` is a method that you add to your class, in which you provide the properties for your objects to have. You should always use the `this` keyword to define the property, and then the value can be whatever you want it to be.

```
class LinkedList {
    constructor() {
        this.head = null;
    }
}

```

Well, what if you wanted your properties to have values that can be provided when instantiated? A typical example of this would be assigning a name to an instance of the Human class. Or for linked lists, our nodes would have data. For that, we will create parameters for the constructor!

```
class Node {
    constructor(data) {
        this.data = data;
    }
}

let myNode = new Node(4);

```

One thing to note here is that you can call your parameters whatever you want. If you wanted to define the parameter as dinosaur, that would be totally fine. You would then say `this.data = dinasaur`. But how are multiple parameters assigned from arguments? Positionally!

```
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let me = new Human('Shaw', 34);

```

Finally, let's talk about `instance methods`. Some famous instance methods you know might be the `array.push()` and `array.pop()` methods. These are functions that you invoke on specific instances of your class, and they can be defined like this:

```
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`hello my name is ${this.name} and I am ${this.age} years old!`)
    }
}

let me = new Human('Shaw', 34);
me.speak();

```

If you ever need to refer to properties of the object that we are using, you must preface the property name with `this`!