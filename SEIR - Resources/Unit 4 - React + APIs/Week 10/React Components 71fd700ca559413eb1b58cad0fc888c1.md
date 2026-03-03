# React Components

### What Are Components?

Components are the building block of User Interfaces and are fundamental to today's front-end libraries/frameworks, including [React](https://reactjs.org/), [Angular](https://angular.io/) & [Vue](https://vuejs.org/).

Let's contrast the two different kinds of components in React:

- User-defined components that we as developers define
- Built-in components that are part of the React library

### 1. User-Defined Components

We code user-defined components and use them to compose the application's user interface.

In the "React To-Do" sandbox, there is a single user-defined component, `<App>`, that's defined and exported in the **App.js** module:

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ul>
        <li>Learn React</li>
        <li>Learn the MERN-Stack</li>
      </ul>
    </div>
  );
}

```

> 👀 User-defined components must be named using UpperCamelCasing.
> 

A component may be defined using a JS function or class.  Since the introduction of "React hooks" in version 16.8, the trend has been to code components exclusively using functions.

Our user-defined components typically render other user-defined components and/or React's built-in components...

### React Elements

**React Elements** are components built into React.

A React Element exists for each HTML element we're familiar with and thus, are easily recognizable in the JSX.

> 👀 React Elements will always be named using lowercase.
> 

## 👉 You Do - Identify the React Elements within the JSX of the "React To-Do" sandbox so far

- Don't peek!
    
    There are the following React Elements (components):
    
    - A single `<div>` component
    - A single `<h1>` component
    - A single `<ul>` containing two `<li>` components

When a React Element is rendered, its corresponding HTML element will be created in the page (DOM).

Using Chrome DevTools, open the output of the sandbox in its own tab and observe the HTML elements created by the `<App>` component's JSX:

![](https://i.imgur.com/bTGpR8b.png)

Yep, each React Element in the JSX results in its corresponding HTML element being rendered in the DOM!

> 👀 User-defined components themselves, e.g., <App> do not render an HTML element in the DOM - after all, a browser wouldn't know what the heck an <App> HTML element is.
> 

### HTML/Component Hierarchy

In a React app, the tree-like hierarchy of the HTML elements in the browser document is a result of a hierarchy of components being rendered.

At the top of that component hierarchy is, by convention, a user-defined component named `<App>`.

Let's see how the `<App>` component is rendered for the first time when the React app loads...

## 2.  How a React App is Loaded and Renders

Here's what happens when a user browses to a web app that uses React for its front-end UI:

![](https://i.imgur.com/7aVwb9k.png)

When React renders a Function Component, it simply runs that function and renders what the function returns.

Similarly, a Class Component's `render` method is invoked, and like a Function Component, React renders what the `render` method returns.

### High-Performance Rendering of Components

Rendering happens frequently in a React app (whenever state changes), but thanks to React's ingenious design, it's very fast and efficient because React does not render components directly into the browser's DOM and manipulating the DOM is relatively CPU intensive.

Instead, React:

1. Renders all React Element components into a [Virtual DOM](https://reactjs.org/docs/faq-internals.html#gatsby-focus-wrapper).
2. After all components have been rendered, React compares the current Virtual DOM to the previous Virtual DOM and computes what is called the "diff".
3. React uses the "diff" to make only the necessary changes to the actual DOM in the browser.

    
    ![](https://i.imgur.com/LC7wclE.jpg)
    

Time to add to our React Fundamentals chart...

| React Fundamental | Summary |
| --- | --- |
| ... | ... |
| Components | A user interface is defined by a hierarchy of components |
| User-Defined Component | - May be defined as a function or class but must be named using UpperCamelCasing

- May hold and manage application state

- May contain or utilize application logic such as fetching data, implementing the win/loss logic of a game, etc. |
| React Elements | - React's built-in components, such as `<div>`, that render their corresponding HTML element into the DOM

- Are always named using lowercase |
| [`root.render()`](https://reactjs.org/docs/react-dom.html#render) method | Renders the React app's top-level component for the first time when the app's JS is loaded in the browser |
| When a Component's State is Updated | - The component is re-rendered

- All children components are also rendered, and so on until there are no more components to render |

### ❓ Review Questions - Components (2 mins)

- (1) True or False:  User-defined components must be named in lowercase.
    
    **False**.  They are named using **UpperCamelCasing**.
    
- (2) True or False:  A Function Component is a component that is written as a JS function and returns its user interface as JSX.
    
    **True**
    
- (3) True or False:  When a component is rendered, all of its children are also rendered.
    
    **True**
    
- (4) After a React app is rendered for the first time by the `root.render()` method, components re-render when ________ is updated.
    
    **State**
    
- (5) True or False: A div tag placed inside of jsx(react component) is an html div element?
    
    **False**. A div tag, or really any traditional html tag(<p>, <li>, <span> .etc), placed inside of jsx is in fact a react component meant to represent its respective html element in react's virtual DOM.
    
    ```jsx
    function MyComponent() {
        return (
            <div>This div tag not an html div element, but a react component meant to represent an html div element in react's virtual DOM</div>
        );
    }
    
    ```
    

## 3.  Designing User Interfaces Using Components

To develop a React application, we compose the UI using a hierarchy of components.

For example, take the following wireframe/app:

![](https://i.imgur.com/hL1T2tH.png)

The above could be broken into the following components:

![](https://i.imgur.com/TqerRDf.png)

- ❓ Which top of the component-hierarchy component is missing from the above diagram?
    
    **`<App>`**
    
- ❓ What are the names of the two components being rendered by the "missing" `<App>` component?
    
    **`<Network>`** and **`<Predictions>`**
    

We must get used to thinking about our UI in terms of components. This "Component Thought" requires us to:

- Break the UI into several smaller components to make the code more manageable.
- Compose (combine) these components into other components.
- Compose page-level components that render according to which client-side route is active.

## 4.  Let's Define a Component

Let's refactor "React To-Do" so that the `<App>` component renders a `<ToDoList>` component instead of the `<ul>` and its contents...

### Define a `ToDoList.jsx` Module

Click on the **src** folder in the sandbox and use its GUI to create a new file named **ToDoList.jsx**.

Modules should be named the same as the component, i.e., using UpperCamelCasing.

> 👀 By using .jsx as the module's extension, we'll get better code completion and a cool React icon by the filename.
> 

### Note: Importing the React Library is No Longer Necessary

Prior to React version 17+, we used to have to import React at the top of every component module like this:

```jsx
import React from 'react';
```

However, this is no longer required and is being mentioned here because there's a lot of projects out there pre-version 17.

### Stub up and export the Function Component

Let's stub up `<ToDoList>` as follows:

```jsx
export default function ToDoList() {

}
```

Note that you may also see components exported using another line of code like this:

```jsx
function ToDoList() {

}

export default ToDoList;

```

Cool.  So ultimately, a Function Component must `return` its UI as JSX.

As planned, let's move the `<ul>` and its contents from **App.js** to our new component and `return` it:

```jsx
export default function ToDoList() {
  // Application logic, etc. goes here
  return (
    <ul>
      <li>Learn React</li>
      <li>Learn the MERN-Stack</li>
    </ul>
  );
}

```

> 👀 Saving the file (command/ctrl + s) in the sandbox will auto-format the code because "Prettier" is configured by default.
> 

### Update `<App>` to Render the `<ToDoList>` Component

Now let's import and render the `<ToDoList>` component in **App.js**:

```jsx
// Default imports can be named anything
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ToDoList />
    </div>
  );
}
```

> 👀 If a component is empty (does not have any content), it must be self closed using /> or less commonly as `<ToDoList></ToDoList>`.
> 

The app should now be rendering the same as before the `<ToDoList>` refactor:

![](https://i.imgur.com/6oktFlu.png)

Navigate to the next page where you will complete and submit the following exercise...

## 💪 Practice Exercise: Define and Render Another Component (15 mins)

Your turn to create and render another component:

- Refactor "React To-Do" so that the `<ToDoList>` component renders two `<ToDoListItem>` components instead of the two `<li>` components.
- Define the `<ToDoListItem>` component in its own JS module using the proper naming convention.
- Simply have the `<ToDoListItem>` component render `<li>To Do Item</li>`. In the next lesson you will learn how to render data passed to the component.
- Submit the link to your sandbox in the Assignment Submission's input box.

This is what you will see when finished:

![](https://i.imgur.com/2WIctBO.png)

## 5. Install and Open React Developer Tools

You may have noticed that CodeSandbox has a **React DevTools** tab used to troubleshoot components.

We definitely want to be able to do the same in Chrome!

Browse to the [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) and install it.

Now when DevTools are open, you'll find a **Components** option available on the far right (you may have to click the `>>` to see it):

![](https://i.imgur.com/4bt00fX.png)

Clicking it reveals an amazing tool for browsing the component hierarchy and inspecting the details of a component's state and props (yet to be discussed).

![](https://i.imgur.com/m0OtmYn.png)

## References

[The Completed Fundamentals of React Chart](https://gist.github.com/jim-clark/cbc87fdf01c22f412737ca121ef70761)

[React Docs](https://facebook.github.io/react/)