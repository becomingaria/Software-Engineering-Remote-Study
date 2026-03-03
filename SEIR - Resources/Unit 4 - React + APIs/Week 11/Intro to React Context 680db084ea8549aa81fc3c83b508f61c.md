# Intro to React Context

# Intro to **React Context**

## Prerequisites

- React
- Components
- State and props
- Hooks

## Learning Objectives

By the end of this, developers should be able to:

- Describe the use cases for Context in React.
- Explain what Providers and Consumers are and what they do
- Implement a shared context to avoid prop drilling

## What is Context?

Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree. An analogy you can use to compare props and context is: Props is like buying a product from a retailer whereas Context is like buying directly from the manufacturer. Going through a retailer can add several additional steps to the process with the retailer, distributors and transporters in between you and the product manufacturer.

### Data Flow in React

React has a unidirectional data flow. Data **can only** be shared by passing props from parent components to their children. Components that manage their own state can pass state data down to child components as props.

By now, you've seen that when we have two sibling components that needed to share some state, we must ["lift" the state](https://reactjs.org/docs/lifting-state-up.html) up to a common ancestor component.

There are times however when pieces of state need to be used across the entire app. Some use cases include, when:

- Many components need to know who the currently logged-in user is.
- All components need to know if the app is in "light" or "dark" mode.
- All components need to know in which language to display their content for internationalization.
- Many components need to know what items are in a user's shopping cart.

All of these use-cases point to _app-level state_. Context can be particularly beneficial in these cases. Consider the following application component tree:

![](Intro%20to%20React%20Context/context-tree.png)

Given the structure of the app, where does the state for the cart need to exist?

In most instances, the best way to handle sharing information between components is to pass the data via props from parent to child. This keeps the information localized to the parts of your tree that need it and reduces the number of renders making our app more efficient. But, as the tree grows, you'll likely find yourself passing props down through multiple levels. In some cases, the components that get data passed to them as props never even use the data, they simply pass it along to another child component. We refer to this as _prop drilling_. It can make our apps harder to maintain, test and reason about the data flow.

In the diagram above, how many components does the data simply _flow through_ without even being used?

## Why Context? Why not Redux?

[Redux](https://redux.js.org/) isn't simple.

**Simplicity** - When using redux people tend to manage almost all of their state in redux and it causes 2 problems:

**Overhead** - Why should I create/update 3 files just to add one tiny feature?

One of the significant advantages of React's one-way data binding is that it's easy to understand - A component passes state to its children. Using [Redux](https://redux.js.org/) takes it away from us.

Redux also determines how you will build your application, something useContext does to a lesser extend. According to one of the key designers of React:

> ’None of these limitations are (of Redux) are required to build an app, with or without React. In fact these are pretty strong constraints, and you should think carefully before adopting them even in parts of your app.’

- _Dan Abramov_ _discussing Redux_

>

Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app.

## Understanding the Context Provider and Consumer Model

When using Context, you need at least one _Provider_ component with one or more _Consumers_.

_Providers_ are components that exist higher up on the tree, sending - or _providing_ - information to other components that are further down. This component must wrap the parts of the tree that it will be communicating with it.

_Consumers_ receive - or _consume_ - information from their Provider ancestor. Consumer components use the _function as a child_ pattern to 'extract' these values so we can use them in our own components.

You can have multiple providers in a single app, but consumers are unique to the provider. A single component can consume data from multiple providers through multiple consumers.

---

## Working With React Context

Context in React follows the same model implemented by Router. Both of these components are created by a built-in function, `React.createContext()`. This function returns an object with two properties, `Provider` and `Consumer`:

```jsx
// src/data/DataContext.js

import { createContext } from "react"
const DataContext = createContext()

// Consumer: {$$typeof: Symbol(react.context), _context: {…}, _calculateChangedBits: null, …}
// Provider: {$$typeof: Symbol(react.provider), _context: {…}}

export { DataContext }
```

The Provider passes the data in a prop called `value`.

```jsx
<DataContext.Provider value={someState}>
    {/* The rest of the app... */}
</DataContext.Provider>
```

The Consumer will then import the Context from the parent Component and access the data stored in value:

```jsx
import { DataContext } from "./data/DataContext"
const dataContext = useContext(DataContext)
```

### Provider Setup

React has 2 mechanisms for using Context:

- React Context API
- **useContext Hook**

Both require the same setup for the provider.

- Create and export the context
- Wrap some element in the Provider and pass data

`React.createContext()` will be created in the parent Component and then it will use `.Provider` to pass the data using the `value` prop. Since context is meant to provide and make accessible data at a more global level it must be exported from the parent and then imported by any children that need to access the data.

```jsx
export const DataContext = React.createContext()
// It returns an object with 2 values:
// { Provider, Consumer }
```

Then the decision is made as to which child Components would need access to the Provider. The data can be made accessible to all child Components. The data to be passed is stored in a prop called `value`.

```jsx
function App() {
    // DATA TO BE PASSED BY PROVIDER
    const [userInfo, setUserInfo] = useState({
        name: "Jen",
        favColor: "deeppink",
    })

    return (
        <div className='App'>
            <h2>React Context..using useContext</h2>
            <DataContext.Provider value={{ userInfo, setUserInfo }}>
                <ComponentA />
                <ComponentB />
            </DataContext.Provider>
        </div>
    )
}
```

### Using Consumers

Now that a Provider is set up we can get its value from the `DataContext` that we exported. To do this, we can use the [useContext](https://reactjs.org/docs/hooks-reference.html) Hook. As with all of the Hooks we've seen, we'll need to import `useContext` to use it in our component.

```jsx
import React, { useContext } from "react"
```

Additionally, we need to import the context that we want to use:

```jsx
// Import the context in the component that will 'consume' its data
import { DataContext } from "./DataContext"
```

The `useContext` Hook lets us get at the data in the Context provider even if our component is not a direct child of the provider (it must be a descendant of the provider, but it can be nested any number of levels below it). To consume the data, we create a local variable to store the data, and assign it the return value of the useContext Hook when passed the context:

```jsx
import React, { useContext } from "react"
import { DataContext } from "./DataContext"

function ComponentA() {
    const data = useContext(DataContext)
    return (
        <div>
            <h2>This is Component A</h2>
            <p>
                <span>{data.userInfo.name}'s favorite color is </span>
                <span style={{ color: data.userInfo.favColor }}>
                    {data.userInfo.favColor}
                </span>
                .
            </p>
        </div>
    )
}

export default ComponentA
```

How can we improve this with destructuring? How can we update the data?

### Solution

Use _destructuring_ to create two variables from the the object in Context.

```jsx
import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function ComponentA() {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>This is Component A</h2>
      <p>
        <span>{userInfo.name}'s favorite color is </span>
        <span style={{ color: userInfo.favColor }}>{userInfo.favColor}</span>.
      </p>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "green"
          })
        }
      >
        Change to Green
      </button>
    </div>
  );

```

We can use the Context API without using the the `useContext` hook, but it's not as elegant or intuitive:

```jsx
import React from "react"
import { DataContext } from "./DataContext"

function ComponentB() {
    return (
        <div>
            <DataContext.Consumer>
                {({ userInfo }) => {
                    console.log("this is name", userInfo.name)
                    return (
                        <div>
                            <h2>This is Component B</h2>
                            <p> username is: {userInfo.name} </p>
                            <p> fav color: {userInfo.favColor} </p>
                        </div>
                    )
                }}
            </DataContext.Consumer>
        </div>
    )
}

export default ComponentB
```

## State Management

State management is arguably the most difficult part of building even moderately complex React applications. Not surprisingly, there have been a lot of third party solutions built to address this problem. By far, the most common in use is [Redux](https://redux.js.org/). It works on the premise that all of the data for an app is centralized in one place called a _store_. This approach has many advantages but it can be difficult to implement and requires writing a lot of extra code to work with it, so it made the most sense for very large, complex applications.

For a long time, development teams had few other options though, and adding Redux later in a project when it had grown enough to warrant its use is extremely difficult because that often meant fundamentally changing the architecture of the app. This is part of the reason that so many apps were bootstrapped with Redux even if they never really needed it.

Since the introduction of Context and Hooks, developers have better built-in options for building lightweight, centralized state management into their apps. The combination of Context, `useContext` and the `useReducer` [Hook](https://alligator.io/react/usereducer/) make this possible without the need for third-party tools. If you think that you may pursue a career that includes working with React, learning both the Context/useContext/useReducer and Redux approach to state management will be very helpful.

### Summary

Some general notes about Context:

- Typically, Provider components go at the very top of the tree.
    - React Router's `BrowserRouter` component is a Provider that communicates with all of the `Link`, `Route`, and other components. The `BrowserRouter` sits at the top of the tree.
    - This is not always the case though. For instance, you might create a `Form` component that uses Context to communicate with all of its `Input` elements.
    - _Where you put Providers is dependent upon your specific use case_
- Consumers can only communicate with _one_ provider, but one component can have multiple consumers.

# Resources

- [React Hooks Overview](https://react.dev/reference/react)
- [useContext](https://react.dev/reference/react/useContext)
- [Redux](https://redux.js.org/)
