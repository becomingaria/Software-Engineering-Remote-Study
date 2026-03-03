# MERN - React Setup + Index

[MERN Infrastructure Setup](MERN%20Infrastructure%20Setup%20128271c309f7443a97f3cc1d274cf358.md)

In this build, we will:

- Build a react frontend to consume our People API
- Add React Router to the People frontend
- Create a Main container component
- Create a basic Header component
- Create an People component

## **Setup**

- open terminal in the frontend folder
- install react-router and `npm install react-router react-router-dom`

## Setup **React Router**

- Before we start building out the components for our application we will update index.js
- Import your BrowserRouter context provider and wrap your ‘App’ component

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
```

## **Stubbing Out Our Components**

- Create a components and pages folder: `mkdir src/components src/pages`
- In the components folder, create a `Header` and `Main` component files:
    - `touch src/components/Header/index.js src/components/Main/index.js`
- In the pages folder, create a `People` and `Show` view component files
    - `touch src/pages/People/index.js src/pages/Show/index.js`
- Write the component boilerplate and export the component in all the created files

```jsx
const Component = (props) => {
  return <h1>Component Name:Comp</h1>
}

export default Component
```

## **App.js**

Our desired component Architecture

```jsx
-> App
  -> Header
  -> Main 
    -> Routes
      -> Route |path: "/"|
        -> People |state: people, createPeople|
      -> Route |path="/people/:id|
        -> Show |state: person, updatePeople, deletePeople|
```

Let's add the following to App.js:

```jsx
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

```

Change the Header component to the following:

```jsx
const headerImage = "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c="

const Header = ({heroImage}) => {
    return (

        <header style={{height: "360px", overflow: 'hidden'}}>
            <img style={{width:"100%"}} src={heroImage || headerImage}/>
        </header>
    )
  }

export default Header
```

## **Setting up the router in `Main.js`**

- Let's create our routes:
    - People - an iterator element that links to the people detail page, will include a form for creating People resources
    - Show - a detail page which features links which trigger utility actions (delete / edit)

```jsx
import { Routes, Route } from "react-router-dom"
import People from "../../pages/People/"
import Show from "../../pages/Show/"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
```

## **Setting Up Hero Section + Navigation**

Let's update the `Header.js` to include a link back to the home /index route. The component, positioned outside of the react-router `Routes`  will be rendered by App across all pages and includes the following UI elements: 

1. Nav - provides links to a home page (often called a brand link)
2. Header wrapper - includes an image, which will be featured at the top section of all pages. 
Its current version includes a props reference or a fallback image. Another opportunity to customize the header would involve passing a `heading-title` prop to a header. 

```jsx
import {Link} from 'react-router-dom'

const headerImage = "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c="

const Nav = () => (
    <nav className="nav">
        <Link to="/" >
	        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        </Link>
        <div>People App</div>
    </nav>
)

const Header = ({ heroImage }) => {
    return (
        <header style={{ minHeight: "33vmin", overflow: 'hidden'}}>
            <Nav/>
            <img style={{ width: "100%" }} src={heroImage || headerImage} />
        </header>
    )
}

export default Header
```

### Adding basic styling to the nav element

```jsx
// components/Header/Header.css

.nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 20px;
}

.nav div {
  margin-left: 20px;
}

.nav img {width: 45px; height: auto;}

```

## **Displaying People in Index**

Without `react-router` we would need to manage state in the Main component so it could be shared between the People and Show components. However, we can separate our concerns by isolating different page components and enable each page to manage its own API requests and local state:

- `People.js` will display all resources and create a new person
- `Show.js` will display, edit, and delete a single person

Let's now start building, we will begin by adding people to the`People` component.

### 1. Initialize and render state

```jsx
import { useState } from 'react';

const People = (props) => {

		const [ people, setPeople ] = useState([]);

    return <h1>People Component</h1>
}

export default People
```

### 2. Retrieve data from People API

```jsx
import { useState, useEffect } from 'react'

const People = (props) =>{

		const [isLoading, setIsLoading] = useState(true)
    const [people, setPeople] = useState([])

		const BASE_URL = "http://localhost:4000/people";
		// this base url variable will be replaced with an environmental variables once we migrate the fetch to service modules 

    const getPeople = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allPeople = await response.json()
            setPeople(allPeople)
						setLoading(false)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{getPeople()}, [])

    console.log(`There are ${people.length} people available to render`)

    return (<h1>People component</h1>)
}

export default People

```

### 3. Conditionally render all People

Next we will add our conditional render the JSX for the mounting state (loading) and the completed state (after the useEffect re-renders). 

```jsx
import { useState } from 'react'

function People(props) {

	// The return contains the rest of your component logic

 const loaded = () => {
    return people?.map((person) => {
      return (
        <div key={person._id}>
          <h1>{person.name}</h1>
          <img className="profile-image" src={person.image} />
          <h3>{person.title}</h3>
        </div>
      );
    });
  };

  const loading = () => (
    <div className="people-list">
      <h1>
        Loading...
        <span>
          <img
            className="spinner"
            src="https://freesvg.org/img/1544764567.png"
          />{" "}
        </span>
      </h1>
    </div>
  );

  return (
    <section className="people-list">{isLoading ?  loading() : loaded()}</section>
  );
}

export default People

```

### 4. Adding a basic CSS spinner animation

```css
.people-list{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 60px;
}

.spinner {
  width: 24px;
  animation: loading infinite 3s linear;
}

.profile-image{
	width: 100%;
}

@keyframes loading{
  from{
    transform: rotateZ(0deg);
  }
  to{
    transform: rotateZ(360deg);
  }
}

```

## App Refactor: Service Modules

### Add Service & API Modules for the Client

In a MERN-Stack app there's bound to be application/business logic, AJAX/API requests, etc.

Although it would be possible to code this logic directly within components, there are downsides of doing so:

- Poor code organization. As you know, it's better to modularize related code into separate modules, e.g., the `config/db.connection.js` module. Organizing code into modules makes it easier to build an application because you'll more or less know where new code will go. It's also easier to refactor and debug when code is organized into focused modules.
- Smaller, more readable components. Reading a line of code like `const people = await getPeople();` in a component is far better than having read through all of the code included in the `getPeople()` "service" function.
- Not DRY and violates the "separation of concerns" principle. For example, if we wanted to fetch the same data from more than one component, we'd be repeating ourselves. Service and API modules can often be used in multiple projects.

### Utilities, Services, APIs, oh my...

Some common ways to organize code into modules are:

- **Utility modules**: Modules that hold general purpose functions, for example, a `formatTime(seconds)` function. These modules are reusable in multiple projects.
- **Service modules**: Service modules are where we can organize application specific logic such as functions for signing-up or logging in a user. Service modules often use and depend upon API modules...
- **API modules**: API modules are for abstracting logic that make network requests such as AJAX calls to the backend or third-party APIs. This abstraction makes it easier to refactor code to use different techniques, libraries, etc. For example, we are going to be using `fetch` for our AJAX communications, however, refactoring to use a library such as Axios would be made easy thanks to the use of API modules.

### Create a **utilities** Folder

Let's create a **src/utilities** folder used to hold any utility, service or API modules that we need in the future:

```bash
mkdir src/utilities

```

### Create a people**-service.js** Module

We will use a **`src/utilities/users-service.js`** module to organize functions used to sign-up, log in, log out, etc.

```bash
touch src/utilities/people-service.js

```

Any component can import the functions exported from **users-service.js** as needed.

### Create a `people-api.js` Module

The `people**-service.js**` module will definitely need to make AJAX requests to the Express server. As discussed earlier, network related code is better abstracted into its own modules.

Let's create an API module that will handle user-related communications with the server:

```bash
touch src/utilities/people-api.js
```

## Create the `peopleAPI` module for handling HTTP requests with `fetch`

```jsx
// people-api.js

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/`

export async function index() {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    try {
        const res = await fetch(BASE_URL, { method: 'GET' })
          // Check if request was successful
        if (res.ok) {
            // res.json() - the returned JSON serialzier data from our people API 
            return res.json()
        }else {
					throw new Error('Invalid Request')
				}
	
    } catch (err) {
				console.log(err) 
				return err       
    }
}
```

To reuse our `REACT_APP_BASE_URL` environmental file, we need to create a `.env.locals` and add the following key/value pair:

```jsx
REACT_APP_BASE_URL=http://localhost:4000/people
```

## Add the `getPeople` method to the service module

```jsx
import * as peopleAPI from './people-api'
// because the api will export an exports object all modules can be imported with an * (wildcard)
// the as import keywork will provide a variable reference to the different sub-modules we will export from people-api.js 

export async function getPeople(){
    try {
        // Delegate the network request code to the people-api.js API module
			  // which will ultimately return a JSON document
        const data = await peopleAPI.index()
        return data
    
		}catch(err){
        return err
    }
}
```

## Refactor `People.jsx` component to use the service module

```jsx
import { useState, useEffect } from 'react'

import { getPeople } from '../../utilities/users-service';

const People = (props) =>{

    const [people, setPeople] = useState([])
		// const [error, setError] = useState(null)
		
		async function handleRequest(){
      try {
        const peopleData = await getPeople()
        setPeople(peopleData)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      handleRequest()
    }, [])

    ... the rest of the component
}

export default People

```

## **Conclusion**

You should now be able to:

- Link to your homepage from the navigation bar
- See a loading message while the app requests People data
- See all the people requested from your Express API after the page loads
- Refactored our API interactions into service/API modules

## Step 3 - [Add Create / Show / Delete](MERN%20Create%20Show%20&%20Delete%20ee19c20cead749eba4f7afb915d722f6.md)