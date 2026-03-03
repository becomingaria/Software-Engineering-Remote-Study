# React Authentication (w/ Context )

## Objectives

1. Review application architecture
2. Prepare authentication handlers for API user routes (login / register)
3. Add `localStorage` helper functions
4. Register / Login a User from FE
5. Stretch - Handle Route / Content Authorization 

## Create Authentication & Home Pages

### Home Landing Page

```jsx
// src/pages/Auth.jsx
import {Link} from 'react-router-dom'

function Home(props){
    return (<section>
        <h2>Welcome to People App</h2>
        <p>Sign in to connect with our People</p>

				{/* Additional branding & content can go here... */}

        <Link to="/auth">CONNECT</Link>
    </section>)
}

export default Home
```

### Auth Page Stub

This component will eventually include local state for a login / register form, but we will built out our routes / context layers before refactoring this component. 

```jsx
// src/pages/Auth.jsx
function Auth(props){
    return (<h1>Login / Register Container</h1>)
}

export default Auth
```

## Add new routes to Main.jsx

```jsx
// src/components/Main.jsx

import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import People from '../pages/People/People'
import Show from '../pages/Show'
import PersonEdit from '../pages/PersonEdit'

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/auth" element={<Auth/>} />
                <Route path="/people" element={<People/>}/>
                <Route path="/people/:id" element={<Show />}/>
                <Route path="/people/:id/edit" element={<PersonEdit />}/>
            </Routes>
        </main>
    )
}

export default Main
```

## Create User Context and useContext in App

Create a new directory `data` in your `src` directory. Then create an index.js module for exporting React context

```jsx
$ mkdir src/data 
$ touch src/data/index.js && src/data/userContext.js
```

### data/userContext.js

We will create a new instance of react context - as you may recall from the previous React Context lesson. When we invoke the createContext hook, react provides two objects a context `provider` and a `context` consumer. The consumer will be used by the `provider`  in `App.js` component to share values anywhere in our component tree. If we need a context value we can use react’s `useContext` hook to ‘consume’ that data. 

```jsx
import {createContext} from 'react'

const UserContext = createContext()

export {UserContext}
```

### data/index.js

We will store information about our current user (after logging in) and consume this context throughout the application. 

Information we want to store: 

- authentication status (for conditional rendering)
- user data (for UI / API calls)

Additional Information we could store:

- user preferences (ex: light / dark mode, color theme)
- extra user information (ex: shopping cart id, etc)

```
import {UserContext} from './userContext'

export {
    UserContext
}
```

## App.js

```jsx
import './App.css';
import { UserContext } from '../../data/';
import { useState, useEffect, useContext } from 'react'

import Header from '../Header/Header'
import Main from '../Main'

//console.log(UserContext)

function App() {

    const { Provider: UserInfo } = UserContext
    // we are using a combination of object destructuring and aliasing; 
    // this allows us to rename the React Context Provider to something more descriptive
    // example: UserInfo

    console.log(UserInfo)

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <div className='App'>
            <UserInfo value={{
                isAuthenticated,
                setAuth: setIsAuthenticated,
                user: currentUser,
                setUser:
                    setCurrentUser
								
            }}
            >

                <Header />
                <Main />
            </UserInfo>

        </div>
    );
}

export default App;
```

 We have supplied our app with two context values: 

- isAuthenticated (Boolean) - will be set after an auth request is successfully made
- currentUser (null or Object) - will be set after an auth request is successfully made

Our app context will be populated with data once we have connected our FE to the express backend; for now we are preparing the userContext to be consumed / updated anywhere within our component hierarchy. 

When we set these context values, we can choose to keep the in line with our context variables name or change them. 

## Setting up `localStorage` Utility Functions

The browser’s `localStorage` is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed. [(docs)](https://blog.logrocket.com/localstorage-javascript-complete-guide/).

You can store primitive values, and even JS objects as strings using `JSON.stringify()`. There are limitations to what it can store and how much, but it can be quite handy for storing temporary values, such as auth tokens, or user information. Since this information is stored client side and easily accessible via scripts, it is important that you not store any sensitive user information (CC numbers, social security, or private records) in a JWT. 

**How does localStorage work?**
To use localStorage in your web applications, we can access five custom methods to enhance the functionality of our application:

- `localStorage.setItem()`: Add key and value to localStorage
- `getItem()`: This is how you get items from localStorage
- `removeItem()`: Remove an item by key from localStorage
- `clear()`: Clear all localStorage
- `key()`: Passed a number to retrieve the key of a localStorage

In `src/utils/authToken.js`:

```jsx

const getUserToken = () => {
    return localStorage.getItem('token')
}

const setUserToken = (token) => {
    return localStorage.setItem('token', token)
}

const clearUserToken = () => {
  return localStorage.setItem('token', "")
}

export {getUserToken,setUserToken, clearUserToken}

```

## Adding a register form to Auth

We will be putting some logic into our Auth Form. Since we have added `React.Context` to our App, our Auth form should be able to consume. To start we will import our context hooks: 

1. `setAuth`
2. `setUser`

```jsx
import { useContext } from 'react'
import { UserContext }Ï from '../data/'
import { setUserToken, clearUserToken } from '../utils/authToken'

function Auth() {
	const {setAuth, setUser} = useContext(UserContext)

	// we will replace our placeholder jsx with a section container and a RegisterForm component

  return (<h1>Login / Register Container</h1>)
}

export default Auth;

```

After we have tested our context is available in the Auth form, we can add a `signUp` function that can be provided to a RegisterForm component through props. 

The `signUp` function will make the fetch call to our auth register route and handle localStorage and state changes. 

```jsx
const registerUser = async (data) => {
    try {

        const configs = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const newUser = await fetch(
            "http://localhost:4000/auth/register",
            configs
        )

        const parsedUser = await newUser.json()
        // console.log(parsedUser)

        // sets local storage
        setUserToken(parsedUser.token)
        // put the returned user object in state
        setUser(parsedUser.user)
        // adds a boolean cast of the responses isAuthenticated prop
        setAuth(parsedUser.isLoggedIn)

        // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
        // this would also require reconfiguring our backend so we only send tokens with a signup

        return parsedUser
    } catch (err) {
        console.log(err)
        clearUserToken();
        setAuth(false);
    }
}
```

## Build a RegisterForm component

This RegisterForm provides a blueprint for creating a `LoginForm` component. Though the API endpoint and token store functionality might differ somewhat, very little would need to change in your JSX. 

With enough care, it might be possible to use one component to display either `Login` or `Register` view, based on the presence of a token in localStorage.

```jsx
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const RegisterForm = ({signUp}) => {
  
	const initialState = { username: "", password: ""}
  const [input, setInput] = useState(initialState)
	const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signUp(input)

    if (createdUserToken) {
      navigate("/people")
    } else {
      navigate("/")
    }
		setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};
```

## Our Current Auth Form

```jsx
import { useContext } from 'react'
import { UserContext } from '../data/'

import { setUserToken, clearUserToken } from '../utils/authToken'

import RegisterForm from '../components/RegisterForm'

function Auth() {
    const { setAuth, setUser } = useContext(UserContext)
    // console.log("Testing Context", setAuth, setUser)
		const registerUser = async (data) => {
		    try {
		
		        const configs = {
		            method: "POST",
		            body: JSON.stringify(data),
		            headers: {
		                "Content-Type": "application/json",
		            },
		        }
		
		        console.log(data, BASE_URL)
		
		        const newUser = await fetch(
		            "http://localhost:4000/auth/register",
		            configs
		        )
		        console.log(newUser)
		
		        const parsedUser = await newUser.json()
		
		        if (parsedUser.token) {
		            // sets local storage
		            setUserToken(parsedUser.token)
		            // put the returned user object in state
		            setUser(parsedUser.user)
		            // adds a boolean cast of the responses isAuthenticated prop
		            setAuth(parsedUser.isLoggedIn)
		
		            // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
		            // this would also require reconfiguring our backend so we only send tokens with a signup
		
		            return parsedUser
		        } else {
		            throw `Server Error: ${parsedUser.err}`
		        }
		
		    } catch (err) {
		        console.log(err)
		        clearUserToken();
		        setAuth(false);
		        return null
		    }
		}

    return (
		<section className='container'>
        <RegisterForm signUp={registerUser} />
    </section>
		)
}

export default Auth;
```

We’ve added some basic error handling for testing our route. If `undefined` or `null` is returned by registerUser() the `RegisterForm` onSubmit will navigate back to the login, rather than redirect to the People index page. 

## Adding Login Functionality to Auth

You should take a moment to create a new `LoginForm` component it will take a `signUp` prop which will invoke this `loginUser` function called in Auth. 

```jsx
const loginUser = async (data) => {
    try {
        const configs = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(
            "http://localhost:4000/auth/login",
            configs
        )

        const currentUser = await response.json()
        //console.log(currentUser)

        if (currentUser.token) {
            // sets local storage
            setUserToken(currentUser.token)
            // put the returned user object in state
            setUser(currentUser.user)
            setAuth(currentUser.isLoggedIn)

            return currentUser
        } else {
            throw `Server Error: ${currentUser.statusText}`
        }
    } catch (err) {
        console.log(err)
        clearUserToken();
        setAuth(false);
    }
}

```

In the return of your `Auth` component - update your returned JSX.

```jsx
<LoginForm signIn={loginUser} />
```

## Our Current Auth Form (Register & Login)

```jsx
import { useContext } from 'react'
import { UserContext } from '../data/'

import { setUserToken, clearUserToken } from '../utils/authToken'

import RegisterForm from '../components/RegisterForm'

function Auth() {
    const { setAuth, setUser } = useContext(UserContext)
    // console.log(setAuth, setUser)

		const registerUser = async (data) => {
        try {

            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }

            console.log(data, BASE_URL)

            const newUser = await fetch(
                "http://localhost:4000/auth/register",
                configs
            )
            console.log(newUser)

            const parsedUser = await newUser.json()

            if (parsedUser.token) {
                // sets local storage
                setUserToken(parsedUser.token)
                // put the returned user object in state
                setUser(parsedUser.user)
                // adds a boolean cast of the responses isAuthenticated prop
                setAuth(parsedUser.isLoggedIn)

                // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
                // this would also require reconfiguring our backend so we only send tokens with a signup

                return parsedUser
            } else {
                throw `Server Error: ${parsedUser.err}`
            }

        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
            return null
        }
    }
    // we will replace our placeholder jsx with a section container and a RegisterForm component

    const loginUser = async (data) => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await fetch(
                "http://localhost:4000/auth/login",
                configs
            )
            const currentUser = await response.json()
            //console.log(user)

            if (currentUser.token) {
                // sets local storage
                setUserToken(currentUser.token)
                // put the returned user object in state
                setUser(currentUser.user)
                setAuth(currentUser.isLoggedIn)

                return currentUser
            } else {
                throw `Server Error: ${currentUser.statusText}`
            }
        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
        }
    }

    return (<section className='container'>
        <RegisterForm signUp={registerUser} />
        <LoginForm signIn={loginUser} />
    </section>)
}

export default Auth;
```

## Verify that Login / Register is storing your Auth token

After you are receiving the expected response data (token, login status, etc) from your, check your Apps’ state in your React Dev tools:

![Untitled](../../Week%2011/React%20Client%20Side%20Authorization/Untitled.png)

You can also check your application’s local storage in the browsers `Application` tab:

![Untitled](../../Week%2011/React%20Client%20Side%20Authorization/Untitled%201.png)

## Refactor your People Component to only show a create form if a userToken is available.

```jsx
// src/pages/People.jsx

// import your getUserToken helper function
import { getUserToken } from '../../utils/authToken'

const People = (props) => {
	const token = getUserToken()
	
  /// the rest of your component state and API logic 
		
	return (
	      <div>
	          <section>
	              {token ? (
										<>
										<h2>Create a new person</h2>
	                  <form onSubmit={handleSubmit}>
	                      { /* your token content */}
	                  </form>
										</>
	              ) : null}
	
	          </section>
	          {people && people.length ? loaded() : loading()}
	      </div >
	  )
}

export default People
```

### Customizing Headers for Authenticated Routes

In terms of making the Fetch or Axios requests to protected routes in our People API, you'll now have to add the `Authorization` header to authenticate your requests, such as:

```jsx
// inside of an existing handler that accesses a protected route that uses 'requireToken' middleware
const EXAMPLE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/example'

fetch(`${EXAMPLE_URL+'/yourEndpoint'}`, {
  method: 'POST',
  headers: {
    'Authorization': `bearer ${getUserToken()}`,
		'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
```

The getUserToken utility function is invoked to immediately pass the stored token, from localStorage, along with the request body, because we are calling setUserToken upon login or registration.

There are also third party state management tools that could be used to store the token. They range from very basic ([use-global-state](https://www.npmjs.com/package/use-global-state)) to complex ([Redux](https://redux.js.org/)).

## Update your People to Pass Auth token with POST request

```jsx
// src/pages/People.jsx

const handleSubmit = async (e) => {
    e.preventDefault()
    const currentState = { ...newForm }
    try {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":  `Bearer ${token}`
            },
            body: JSON.stringify(currentState)
        }

        const response = await fetch(BASE_URL, requestOptions)
        const createdPerson = await response.json()
        
				// console.log(createdPerson)
        setPeople([...people, createdPerson])
        setNewForm({
            name: "",
            image: "",
            title: "",
        })

    } catch (err) {
        console.log(err)
    }
}
```

You will also need to account for Authentication (is the user credential / token available) for your other protected routes 

- Show Page - `removePerson` makes a DELETE request to the API’s destroy route
- PersonEdit Page - `handleSubmit` makes a PUT request to the API’s update route

After you have verified that you can create / update / delete with a logged in user. Destroy your token using the console’s and test your requests again. 

## Preventing an unauthenticated user from accessing a page

You may have noticed that when you were logged out the create form was not visible. This prevents an unauthenticated user from creating a fetch. You can even apply this conditional rendering strategy on the Show pages’s delete button. 

```jsx
// in the component body
const isOwner = person?.owner?._id == user._id;

// inside the component's returned JSX
{isOwner ? (
          <div>
            <p>Delete Person</p>
            <button onClick={removePerson}> X </button>
          </div>
        ) : null 
}
```

But what about edit? Nothing currently prevents a user from visiting the page and seeing the content. Before we get to the logic for checking the logged in user against the document’s owner, we can `redirect` the user to a new page if they are not logged in. 

The simplest way to handle preventing a user from accessing a page is by using the `useNavigate` react router hook to conditionally redirect the user to the `auth` page if no token is available. 

```jsx
const token = getUserToken()

const PersonEdit = (props) => {
    const token = getUserToken()

    // react state

    const navigate = useNavigate()

    if (!token) {
        navigate('/auth')   
    }
		
		// the rest of the component logic and JSX

}

export default PersonEdit
```

If we detect that a user is not currently authenticated (no token exists in the browser) then we can quickly redirect them to the login / signup page. 

## Handling Route & Content Authorization

However, we may not want a user to access certain pages at all; If we don’t want a user to access a route if they are not that resources `owner` we have a few options: 

Using `Context` we can access information about the current user - if no user exists or the current user doesn’t match the resource’s owner we can programmatically redirect. 

To access information stored in the authentication token on the client side, you can import a library called `jwt-decode`. This library can be used on a per-component basis or through a helper function, see this example from PeopleEdit below. 

```jsx
// src/middleware/auth.js

import jwt_decode from "jwt-decode";

// other exports

function decodeToken (token){
	return jwt_decode(token)
}

export { decodeToken}
```

A more robust approach to conditional redirects involves using a custom `PrivateRoute` component which handles conditionally render children components.

```jsx
import { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../data";
import { getUserToken, decodeToken } from "../utils/authToken";

function PrivateRoute({children}){
    const navigate = useNavigate()
    const token = getUserToken()
    const {currentUser} = useContext(UserContext)

    function evalCurrentUser(){
        const user = decodeToken(token)
        console.log(user)
        if (currentUser?._id && currentUser._id !== user.id){
            return navigate('/auth')
        }
    }
    useEffect(()=>{
        evalCurrentUser()
    }, [])

    if(! token ) {
        return navigate('/auth')
    }

    return children

}

export default PrivateRoute
```

```jsx
// src/comoponents/Main.jsx

import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import People from '../pages/People/People'
import Show from '../pages/Show'
import PersonEdit from '../pages/PersonEdit'
import PrivateRoute from './PrivateRoute'

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/auth" element={<Auth/>} />
                <Route path="/people" element={<People/>}/>
                <Route path="/people/:id" element={<Show />}/>
                <Route path="/people/:id/edit"
											element={<PrivateRoute >
																		<PersonEdit />
															</PrivateRoute>}/>
            </Routes>
        </main>
    )
}

export default Main
```

## Creating a `private` resource redirect.

What if a user is logged in, but you’d like to prevent a user from seeing content that does not belong to them, ie they do not ‘own’ the resource. An example might be a profile edit page / account settings page. While they my have a token, if that token’s id does not match the current document’s owner, you can programmatically redirect them once that content is available from the API. 

```jsx
// in PeopleEdit.js

useEffect(() => {
    // decode the currentToken 
    const user = decodeToken(token);
    
    // redirect if the person is defined (first useEffect is complete)
    // compare the decoded token against the id of the current person's owner
    if (person && user.id !== person.owner?._id) {
      return navigate(`/people/${id}`);
    }

  }, [person, user]);
```

1. Alternatively, if you need this functional across multiple components you could build a helper function that abstracts the validation process and can be passed down through context.

```jsx
// App.js
function validateOwnership(ownerId, redirectURL){
       const token = getUserToken()
       if (token) {
        const user = decodeToken(token)
        if (user.id !== ownerId) {
            return navigate(redirectURL)
        }
    }       
}
```

This resource’s ownership property can be evaluated against the currently logged in user’s id. An example for this might be a resource edit page or account settings page.

```jsx
// consume the helper function 
const {user, validateOwnership) = useContext(UserContext)

// the rest of component code 
useEffect(() => {
    if(person){
        validateOwnership(person.owner._id, `/people/${id}`)
    }
}, [person]);
```