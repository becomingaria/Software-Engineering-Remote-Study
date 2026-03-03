# React Authentication CYOA (w/ Props)

## Handling Authentication in React using props

### Setting up LocalStorage Utility Functions

Browser ‘localStorage’ is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed. [link](https://blog.logrocket.com/localstorage-javascript-complete-guide/).

You can store primitive values, and even JS objects as strings using JSON.stringify(). There are limitations to what it can store and how much, but it can be quite handy for storing temporary values, such as auth tokens, or user information.

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

## Configuring signup()

We will be putting some logic back into our App.js as we might need to pass around information about our currentUser. Yes, you could store some (non-sensitive) user information in localStorage, but we will be using props to further practice those concepts.

1. To setup our register routing, let’s create a `registerUser` function. This function will be called through props from a component `RegisterForm`.
2. We have two hooks a success response will update `setCurrentUser()` which stores information about the current user and setIsAuthenticated() that stores a boolean of the response's isLoggedIn.
3. A basic "POST" fetch that will contact our DB and return the appropriate data.

```jsx
function App() {
  const [currentUser, setCurrentUser] = useState({})

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
      setCurrentUser(parsedUser.currentUser)
      // adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(parsedUser.isLoggedIn)

      // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
      // this would also require reconfiguring our backend so we only send tokens with a signup

      return parsedUser
    } catch (err) {
      console.log(err)
      clearUserToken();
      setIsAuthenticated(false);
    }
  }

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
      const user = await response.json()
      //console.log(user)

      // sets local storage
      setUserToken(user.token)
      // put the returned user object in state
      setCurrentUser(user.currentUser)

      return user
    } catch (err) {
      clearUserToken()
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
      <Header user={currentUser}/>
      <Main signup={registerUser} login={loginUser} user={currentUser} />
    </div>
  )
}

export default App;

```

## The RegisterForm Component

This RegisterForm provides a blueprint for creating a `LoginForm` component. Though the API endpoint and token store functionality might differ somewhat, very little would need to change in your JSX. With enough care, it might be possible to use one component to display either Login or Register, based on the presence of a token in localStorage.

```jsx
import  {useNavigate} from 'react-router-dom'

const RegisterForm = ({signUp) => {
  const initialState = { username: "", password: ""}
  const [input, setInput] = useState(initialState)
	const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await props.signUp(input)

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

### Customizing Headers for Authenticated Routes

In terms of making the Fetch or Axios requests to protected routes in our People API, you'll now have to add the `Authorization` header to authenticate your requests, such as:

```jsx

// Example component refactor: 
// inside of an existing handler that accesses a protected route that uses 'requireToken' middleware imported in your component

const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api'

fetch(`${URL+'/yourEndpoint'}`, {
  method: 'POST',
  headers: {
    'Authorization': `bearer ${getUserToken()}`,
		'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

```

The getUserToken utility function is invoked to immediately pass the stored token, from localStorage, along with the request body, because we are calling setUserToken upon login.

One approach to handling the token is to use React's built in Context API to store the value when it is returned after the user logs in. [Storing the user and accessing via useContext Hook](https://www.youtube.com/watch?v=lhMKvyLRWo0) is easier than passing around the token via props and eliminates prop drilling entirely.

There are also third party state management tools that could be used to store the token. They range from very basic ([use-global-state](https://www.npmjs.com/package/use-global-state)) to complex ([Redux](https://redux.js.org/)).