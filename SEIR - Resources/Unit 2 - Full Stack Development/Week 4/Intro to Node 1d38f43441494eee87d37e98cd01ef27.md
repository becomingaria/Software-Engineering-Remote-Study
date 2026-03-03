# Intro to Node

![](https://i.imgur.com/hA8ZNev.png)

# Intro to Node.js

## Learning Objectives

Students Will Be Able To:

- Explain the Use Case for Node.js
- Use Node.js to Execute JavaScript
- Create and Use Node Modules

## 1. Setup

We'll be writing a bit of code in VS Code in this lesson!

1. In Terminal, move into your code folder: `cd ~/code`
2. Make a new folder named first-node: `mkdir first-node`
3. Move into the new folder: `cd first-node`
4. Create a main.js file: `touch main.js`
5. Open the project/folder in VS Code: `code .`

## 2. What is Node.js?

![](https://i.imgur.com/nXTOu8F.jpg)

**Node.js is a runtime environment that runs on the v8 javascript runtime for executing JavaScript outside of the browser!**

Node's runtime environment for JS is different than that in the browser, primarily because:

- It doesn't have the browser's DOM or [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).
- Node has low-level networking and file system APIs that browser JS does not (for security reasons).

Node is very "lightweight", i.e., only low-level "core" modules for networking, filesystem access, etc. are built-in.

However, its functionality is extended via open source libraries called packages.  These packages are managed using the `npm` command installed with Node.

Node's package ecosystem is the largest open source ecosystem in the world.

Other Facts:

- Created in 2009 by Ryan Dahl with Joyent, Inc.
- Uses the same *V8 JavaScript Engine* used in the Chrome browser to compile JS programs into machine code.
- In addition to being used to build high-performance web applications, Node is also a great tool for building command-line tools.
- Node is an open source project governed by the [OpenJSFoundation/Node.js Foundation](https://foundation.nodejs.org/) with board representation from companies such as:

### Node's REPL

**REPL** is an acronym for Read-Evaluate-Print-Loop.

Programming languages such as Python and Ruby also have REPLs.

Let's first open an integrated Terminal in VS Code using `control + backtick`

To start [Node's interactive REPL](https://nodejs.org/api/repl.html) we type `node` in Terminal

In the REPL we can write JS and even load Node modules, which we're going to learn about in this lesson:

```
> 10 + 5
15
> function sayHello() {
... console.log('Hello');
... }
undefined
> sayHello()
Hello
undefined
> const http = require('http');
undefined
> http
[ a large JS object representing Node's 'http' module ]

```

Press `control-c` twice to exit REPL.

### Executing Node Programs

Executing a Node app is as easy as typing `node` in Terminal followed by the name of the module.  For example, if you have a module named **main.js**:

```
node main.js
```

Note that you don't need to include the ".js" file extension.

Yes, running a Node app is that easy!

### ❓ Review Questions - What is Node.js?

- (1) Is Node.js a programming language?
    
    **No.** It is a **runtime environment** for executing JavaScript outside of the browser.
    
- (2) Is `const el = document.getElementById('my-list');` a valid JavaScript statement in a Node app?
    
    **No** because there is no DOM in Node.
    

## 3. Why the Enthusiasm for Node.js?

First and foremost, **performance** - businesses can handle more traffic with less hardware!

Secondly, developer **synergy**. Developers can use JavaScript on both client & server, thus becoming a full-stack dev is more obtainable and companies can better utilize their developer resources across the front and back-ends.

The improvements in server performance and developer productivity result in **businesses saving money**.

Businesses saving money results in **wide adoption**:

![](https://i.imgur.com/5nvUBa3.jpg)

Most importantly, wide adoption of Node.js results in strong demand for Node developers!

## 4. Why is Node.js so Performant?

It's important to understand how time consuming Input/Output operations are:

![](https://i.imgur.com/iXshhYh.jpg)

Input/output is a term used to describe tasks a computer does that involves interfacing with external systems in the operating system or network. A basic example of an Input/Output workflow could be accessing data from a database, or making requests over a network, among many others. 

These processes typically take much more time than operations taking place inside of a runtime. 

Input/Output considerations are a massive concern for software engineers and not considering these in a reasonable manner can render your project unusable under certain situations and, at best, will introduce performance delays and capacity limits if not properly considered. One of the primary goals of Node.js was to assist engineers in alleviating some of these Input/Output challenges.

Node's **Asynchronous / Event-driven** design enables **non-blocking** Input/Output:

![](https://i.imgur.com/ARbweHg.jpg)

A typical Node server is capable of supporting *tens of thousands* of concurrent connections!

Because Node's high-performance, non-blocking I/O operations must be designed as **asynchronous methods**, a Node developer will use callback functions and/or promises extensively.

Cool, let's learn about Node Modules...

[Node Modules](Intro%20to%20Node/Node%20Modules%20c8d85aa98a9c43bdaf440f9a57efd60d.md)

## References

[NodeJS Homepage](https://nodejs.org/)

[Node Package Manager](https://www.npmjs.com/)