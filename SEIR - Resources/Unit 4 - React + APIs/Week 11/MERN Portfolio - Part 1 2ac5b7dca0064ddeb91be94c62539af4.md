# MERN Portfolio - Part 1

Today we are going to build a _portfolio_!

## Goal:

Follow the activity instructions to build your React Portfolio then customize it to your liking. Take advantage of the day to practice and enhance your React Frontend skills. In unit 3, we will learn more about Mongoose (database), Express, and Node, and eventually be able to build this portfolio into a full stack site.

### Recommended Features:

- A working React site, built by you, hosted somewhere on the internet. Netlify, Surge, or Vercel are great options for deploying your portfolio.
- A `git repository`, hosted on your personal GitHub, that includes a link to your hosted site and frequent commits dating back to the beginning of the project.
- A [README.md](http://readme.md/) file with explanations of:
    - Your design process / approach.
    - Technologies used.
- Your portfolio site will include links to Github, Linkedin, Contact Info
- Your portfolio site will have a `Project Section` that showcases projects and describes them.
- Your portfolio site will link to a your resume (pdf) available on site.
- Keep it clean and simple.

Feeling `Extra`

- Will have a 'contact me' form (Tutorial on [React Contact Form](https://mailtrap.io/blog/react-contact-form/) and [Nodemailer](https://mailtrap.io/blog/sending-emails-with-nodemailer/))

## React Frontend **Setup**

During this lab, we will be creating just the frontend:

- We will generate a react project within the frontend directory, these two commands should do the trick...
- Create your lab directory - `mkdir fullstack-portfolio`
    - `cd fullstack-portfolio && npx create-react-app frontend`
    - `cd frontend`
- The end result should be the following folder structure

```
> /frontend
		... your react files

```

### **Our Data**

Instead of using a database, we will use JSON files to store the data for our project for now. Within your react frontend, create the following files in the public directory.

`touch public/projects.json public/about.json`

### **projects.json**

In this file, you should use the below example but replace it with your projects from the previous units. (JSON files don't need to be exported, Node knows how to read them).

Essentially this file is an array of objects that represent your projects.

```json
[
    {
        "name": "project1",
        "live": "https://app.herokuapp.com/whatever",
        "git": "http://www.github.com/username/reponame",
        "image": "http://www.imgur.com/pictureofproject.png"
    },
    {
        "name": "project2",
        "live": "https://app.netlify.app/whatever",
        "git": "http://www.github.com/username/reponame",
        "image": "http://www.imgur.com/pictureofproject.png"
    }
]
```

### **about.json**

This file will be one big option with information about you to use in your portfolio.

```json
{
    "name": "Bob Smith",
    "email": "Bob@BobSmith.dev",
    "headshot": "http://www.imgur.com/pictureofproject.png",
    "bio": "Bob Smith graduated from YourCourse in 2017. Afterwords, he went to work for XYZ Technologies where he maintained a full-stack application using Meteor and Ember. He also recently started learning Prolog, cause why not waste time."
}
```

## **Building the Frontend**

- install react router `npm install react-router react-router-dom`

## **Setting up React Router**

open up `src/index.js`and make the following changes

```jsx
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Router>
        <App />
    </Router>,
)
```

## **Getting things scoped out**

- create a `src/components`folder and `src/pages`folder
- in components create `Header.js`and `Footer.js`

`src/components/Header.js`

```jsx
function Header(props) {
    return <h1>Header</h1>
}

export default Header
```

`src/components/Footer.js`

```jsx
function Footer(props) {
    return <h1>Footer</h1>
}

export default Footer
```

- In `src/pages`create `Home.js`, `About.js`and `Projects.js`

`src/pages/Home.js`

```jsx
function Home(props) {
    return <h1>Home</h1>
}

export default Home
```

`src/pages/About.js`

```jsx
function About(props) {
    return <h1>About</h1>
}

export default About
```

`src/pages/Projects.js`

```jsx
function Projects(props) {
    return <h1>Projects</h1>
}

export default Projects
```

## **`App.js`**

Here is the plan

- import all our components
- import the Route and Switch component from Router
- setup our routes
- create a variable called URL with our Heroku URL
- pass the URL as a prop to about and projects so they can make a call to our json API

`src/App.js`

```jsx
import "./App.css"

// IMPORT COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

// IMPORT PAGES
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
    // URL should have YOUR HEROKU URL for your backend (will build later), make sure you include the trailing slash
    const URL = "http://localhost:4000/"

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/projects' element={<Projects URL={URL} />} />
                <Route path='/about' element={<About URL={URL} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
```

## **The Navigation**

Right now we can't switch between our routes with Link components, so let's build our navigation so we can switch between pages. Our navigation should be in our header.

`src/components/Header.js`

```jsx
import { Link } from "react-router-dom"

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    }

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to='/'>
                    <div>HOME</div>
                </Link>
                <Link to='/about'>
                    <div>ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
```

You should be able to navigate between our pages but they are only one word at the moment. Let's populate our projects and about pages.

## **About Page**

We will do the following...

- create a state variable to hold the about data
- create a function to make the fetch call and update state
- call the function within a useEffect to avoid an infinite loop
- Use a ternary to render one thing if we have the data from the json and something else if we don't

`src/pages/About.js`

```jsx
import { useState, useEffect } from "react"

function About(props) {
    // create state to hold about data
    const [about, setAbout] = useState(null)

    // create function to make api call
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch("./about.json")

        // turn response into javascript object
        const data = await response.json()

        // set the about state to the data
        setAbout(data)
    }

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {
        getAboutData()
    }, [])

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )

    // if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>
}

export default About
```

## **Projects**

We will use the same pattern for our projects

- create a state variable to hold the project’s data
- create a function to make the fetch call and update the state
- call the function within a useEffect to avoid an infinite loop
- Use a ternary to render one thing if we have the data from the fetch and something else if we don't
- our loaded function will map over the array of projects and return the JSX for this project

`src/pages/Projects.js`

```jsx
import { useState, useEffect } from "react"

function Projects(props) {
    // create state to hold projects
    const [projects, setProjects] = useState(null)

    //create function to make api call
    const getProjectsData = async () => {
        //make api call and get response
        const response = await fetch("./projects.json")

        // turn response into javascript object
        const data = await response.json()

        // set the projects state to the data
        setProjects(data)
    }

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getProjectsData(), [])

    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ))
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects
```

## **Deploy Frontend**

Once everything seems working, do the following.

- Create a file called **`_redirects`** in your **public** folder then add the following

```jsx
/* /index.html 200
```

- There should already be a local repo based out of the frontend folder (create react app creates one by default). If not, make one called portfolio-frontend.
  • add all files to staging `git add .`
  • commit `git commit -m "frontend complete"`
  • push your changes to GitHub and get the URL `git push origin main`
  • Set up a project and deploy your portfolio to Netlify. If you need a reminder on how to set this up, use the [React Deployment to Netlify](https://www.notion.so/afe511e1ce5e4a709431cbb2be956895?pvs=21) resource

## **What Now?**

- Add some additional content to the home page
  • Spend some time styling your frontend using custom CSS in React
  • Add content to the footer

## Content Suggestions:

1. Have a strong intro. Short and succinct.
2. Describe Show the process to your projects with ample .
3. Personality and engagement is important.

### Refactoring and Refinement

Feedback will help so ask family, friends, and classmates what they think of your design choices.

### Example Portfolios

[https://www.devhowey.tech/](https://www.devhowey.tech/)
[https://jeffreygreen-portfolio.netlify.app/](https://jeffreygreen-portfolio.netlify.app/)
[http://designmarz.com/](http://designmarz.com/)

[https://charlenecodes.com/](https://charlenecodes.com/)

[https://andrewdc92.github.io/](https://andrewdc92.github.io/)

### Still Hungry **For More**

**Styling Challenges (choose 1)**
• Style using the Styled Components Library `npm install styled-components`
• Style using sass `npm install sass`(after install change the extension on your CSS files SCSS)
• Try using `bulma-react-components` a [library of components pre-made using Bulma](https://www.npmjs.com/package/react-bulma-components)

---
