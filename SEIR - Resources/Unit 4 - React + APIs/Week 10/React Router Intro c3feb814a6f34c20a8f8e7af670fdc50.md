# React Router Intro

![Untitled](React%20Router%20Intro/Untitled.png)

## **Overview**

The purpose of this lesson is to build a multipage React App and learn:

- How to setup react-router in our react apps
- How to create Router, Routes, Route, and Link components
- How to use URL Params to pass data to our components

## Lesson **Setup**

In your `codealongs` folder do the following:

- run command `npx create-react-app react-router-intro`
- cd into the `react-router-intro` folder
- run `npm install react-router react-router-dom`
- run `npm start` to begin development server

## 1. **The Problem**

We are often used to making websites with several "pages" which would be split across several HTML pages delivered statically or rendered by templates on a server. When making a React app, the application is a single page with one HTML file. We can have components conditionally render to make the illusion of pages but it doesn't quite feel as intuitive as using a tags to link to different HTML files.

What the `React-Router` library does is allow us to define components that render based on the URL in the address bar. We link to them with Link components which feel similar to the a tags we are used to. It allows us to create a single-page application in a way that feels like a multi-page application.

## 2. **Setting Up Router**

The first component we'll explore is BrowserRouter, which is underneath the hood a `context provider` ([documentation](https://reactjs.org/docs/context.html#contextprovider)) allowing all the features of the router to be available to its children. We want all of our application’s components to have the router features so we'll wrap the App component in `index.js` and to make it more semantic we'll rename the component Router.

### `src/index.js`

```jsx
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <App />
    </Router>
);

```

### **Components vs Pages**

A common convention is to create two folders, components, and pages. Any component that is used as a piece of UI goes in the components folder, any component meant to act as a "page" of the website goes in pages.

- create a `components` and `pages` folder inside your `src` directory
- move your `App.js` and `App.css` into an App subdirectory in `components`
- in the pages directory create three sub-directories: `Main`, `StarshipsList`, and `Starship`
- create a `Main.jsx`, `StarshipsList.jsx`,  and `Starship.jsx` file in the in their corresponding`pages` directory
- create the component boilerplate in each component

### `src/pages/Main/Main.jsx`

```jsx
const Main = (props) => {
  return <h1>This is the Main Component</h1>;
};

export default Main;

```

### `src/pages/StarshipsList/StarshipsList.jsx`

```jsx
const StarshipsList = (props) => {
  return <h1>This is the Starships List Component</h1>;
};

export default StarshipsList;

```

### `src/pages/Starship/Starship.jsx`

```jsx
const Starship = (props) => {
  return <h1>This is the Ship Component</h1>;
};

export default Starship;

```

## 3. **Creating Our First Routes**

Now we will import the Route component into App, this will allow us to define which of our components should render depending on the URL, we'll also import our pages for our routes.

### `src/components/App/App.js`

```jsx
import './App.css';
//Import routes and components

import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main/Main";
import StarshipsList from "../../pages/StarshipsList/StarshipsList";
import Starship from "../../pages/Starship/Starship";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ships" element={<StarshipsList />} />
        <Route path="/ships/:id" element={<Starship />} />
      </Routes>
    </div>
  );
}

export default App;
```

Right now only the Main component is rendering cause we are on the main page, "/". To change the URL bar, we need some links so let's create a navbar.

## 4. Adding **Navigation**

In your components folder create a Nav.jsx

`components/Nav.jsx`

```jsx
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
						<Link to="/ships">
                <div>Starships Index</div>
            </Link>
        </nav>
    );
};

export default Nav;

```

import the `<Nav />`  component into `App.js`

```jsx
import './App.css';
//Import route and our components

import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import StarshipsList from "../../pages/StarshipsList/StarshipsList";
import Starship from "../../pages/Starship/Starship";
import Nav from '../Nav'

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav/>
      <main className="container">
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ships" element={<StarshipsList />} />
        <Route path="/ships/:id" element={<Starship />} />
        </Routes>
      </main>
   
    </div>
  );
}

export default App;
```

## 5. Populating your Main landing page

`/pages/Main/Main.jsx`

```jsx
const Main = (props) => {
  return (
				<section className="main-page">
						<h2>Featured Starship</h2>
						<figure className="featured-figure">
						  <img referrerPolicy="no-referrer" className="featured-image" src="https://static.wikia.nocookie.net/starwars/images/5/52/Millennium_Falcon_Fathead_TROS.png/revision/latest/scale-to-width-down/1000?cb=20221029015218" alt="Millenium Falcon" />
							<figcaption> Millennium Falcon - YT-1300 light freighter </figcaption>
				</figure>
				</section>)
};

export default Main;
```

Before we continue with populating your starship pages with API data, let’s add the following styles to App’s main stylesheet.

### Starter style - `src/App/App.css`

```css
*{
  box-sizing: border-box;
}

body, html{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
}

body {
  background-color: black;
  color: ghostwhite;
}

nav {
  display: flex;
  justify-content: space-between;
  background-color: gray;
  color: white;
  padding: 1em;
  font-size: 1.2em;
}

nav a {
  color: white;
  text-decoration: none;
}

.container{
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}

.container a{
  color: whitesmoke;
  text-decoration: none;
}

.container a:hover{
  color: rgb(209, 209, 209);
  text-decoration: underline;
}

.main-page{
  text-align: center;
}
.main-page figure {
  width: 80%;
  margin: auto;
}

.featured-image{
  width: 100%
}
```

## 6. **The StarshipsList Component**

In this component, we will be doing the following

- Creating an array of ships our app can display
- use a React `useEffect` hook to make an API call
- Looping over the populated ships array to generate a link for each one to the starship route returned by the API
- The id of the ship should be placed in the `:id` part of the link’s URL

### `StarshipsList.jsx`

```jsx
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const StarshipsList = (props) => {
    
		const [ships, setShips] = useState([])
		
		const fetchShips = async ()=>{
			try {

				const response = await fetch('https://swapi.dev/api/starships/')
				const shipData = await response.json()
				setShips(shipData.results)

			}catch(err){
				console.log(err)
			}
		}

		useEffect(()=>{
				fetchShips()
		},[])
    return (
        <div className="starships-list">
            {ships.map((ship) => {
							
                let { name, url } = ship;
								let path = url.split("/")
								const id = path[path.length-2)
                
								return (
                    <Link to={`/ships/${id}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default StarshipsList;

```

Given that this is just a page component, there’s nothing here that needs to be updated. We still use the link, which is the only portion of React Router used by this page.

## 7. **The Starship Component**

Once you have linked to the Ship detail page we will do:

- Store the URL parameter using React Router Dom’s `useParams` hook
- Create `ship` state variable managed by the `useState` react hook
- use the `useEffect` hook to make an API call
- update the ship data in state and render it
- provide loading and render function for rendering the data if it exists

Notice that I said before we’d use the updated version of our built-in useParams hook to grab the information. Below is the original version which would take in the props and then after that our updated version.

### `Starship.jsx`

```jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Starship = (props) => {

  const {id} = useParams()

  // console.log(params) => returns an object {}
	// grabbing the ship id from the URL Params {}
	// our Route path is: "/ships/:symbol"
  // the part of the string that starts with a : is treated as a variable
	// react router will store the actual url string (the starship id) in the params object

	// Using the other two variables to create our URL
  const url = `https://swapi.dev/api/starships/${id}`;

  //state to hold the coin data
  const [starship, setStarship] = useState(null);

  //function to fetch coin data
  const getStarship = async () => {
    try{
      const response = await fetch(url);
      const shipData = await response.json();
      console.log(shipData)
      setStarship(shipData);
    } catch(err) {
      console.log(err);
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
      getStarship();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    console.log(starship);
    return (
      <div>
				 {/* update JSX */}
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return (<h1>Loading...</h1>);
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return <section>{starship ? loaded() : loading()}</section>;
};

export default Starship;

```

## 8. Populate the Starship Stats

```jsx
<div>
   <h2>{starship.name} - {}</h2>
   <div>
	    <h3>Features</h3>
	    <ul>
	      <li>Starship Class: {starship.starship_class}</li>
	      <li>Capacity: {starship.cargo_capacity}</li>
	      <li>Crew (size): {starship.crew}</li>
	      <li>Passengers: {starship.passengers}</li>
	      <li>Manufacturer: {starship.manufacturer}</li>
	      <li>HD Rating: {starship.hyperdrive_rating} </li>
	      <li>Manufacturer: {starship.manufacturer}</li>
	      {/* Pilot info here */}
	    </ul>
   </div>
   <div>
	    <h3>Star Wars Stats</h3>
	    <ul>
		    <li>Appears in {starship.films?.length} film{starship.films?.length > 1 ? "s":""}</li>
	    </ul>
   </div>
 </div>
```

## 9. 💪 Practice Activity - 45 minutes

1. The StarshipPage should have a "Return to Starship List" link. 
2. Add a `<404/>` page, that is rendered by `React-Router` if no matching path is found, or a bad address added manually in the browser.
3. Refactor the `<StarshipsList/>` component render a "Loading..." message until the data has finished loading. 
4. Add some custom CSS styling to approximate a cool, sci-fi aesthetic.

## 9. Further Study

Want to learn more about what these new Routes components are doing?

- Whenever you are using a new tool or want to dive deeper into an existing tool, consulting the documentation should be your first step:
- React Router Documentation: [Overview Documentation](https://reactrouter.com/en/6.4.4/start/overview)

## 🚀 Hungry For More?

Choose one of the following challenges to implement in your SWAPI app

1. Enhance the `<Starship>` component to render a `<PilotList>` component that lists the names of the `pilots` for that starship 
    1. This will require making a series of fetch requests for each pilot in the ship's pilots list, if available. This is a great use case for `Promise.all()` so that you only update state once all of the resources are captured. 
    2. Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, you should not be fetching pilots, and your Starship page should show a No Pilots message 
2. Update the `Main.jsx` to display a ‘randomly selected’  featured starship on the Main page. 
    1. You may have noticed the starships count is 36, but the param id of each ship is not strictly sequential. *How will you handle a failed fetch when no details are found?* 
3. Update the `<StarshipsList/>` to provide ‘pagination’ requests, the current fetch will always request the first page of the api. Explore the SWAPI documentation and  display the next page with a button click. 
    1. There are 4 pages of ships
    2. To handle later fetches you may need to store which page the user is currently fetching. Hint:  It may require a second `useState` variable and a second `useEffect` dependent on your new state.