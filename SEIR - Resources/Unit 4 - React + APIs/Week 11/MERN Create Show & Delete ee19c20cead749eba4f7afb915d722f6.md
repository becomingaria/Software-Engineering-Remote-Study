# MERN Create Show & Delete

[MERN - React Setup + Index](MERN%20-%20React%20Setup%20+%20Index%208e3e0f46c17548eca2bedc1c742618a4.md)

## Overview

In this build, we will add functionality to our Show page component:

- Add a NewPerson component to create a Person
- Add a direct link to the Show page
- Initialize the component’s local state
- Access param using react-router hooks
- Trigger a fetch for a single person
- Render that person’s data
- Trigger a destroy request with a click handler
- Redirect the user to the home page

## **Creating People**

Let's now that we can see our seed data fetched from the database, Let’s add a form to our `People` component:

- We will need to include local state to hold the form data

```jsx
// state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
    });
```

- Add form inputs in our JSX, notice that we have included an onChange and onSubmit event handlers for this form, these function references will be added next.

```jsx
<section>
	<h2>Create a new person</h2>
	<form onSubmit={handleSubmit}>
		<input
		  type="text"
			value={newForm.name}
			name="name"
			placeholder="name"
			onChange={handleChange}
		/>
		<input
			type="text"
			value={newForm.image}
			name="image"
			placeholder="image URL"
			onChange={handleChange}
	   />
	  <input
			type="text"
			value={newForm.title}
			name="title"
			placeholder="title"
			onChange={handleChange}
		/>
		<input type="submit" value="Create Person" />
	</form>
</section>
```

- A `handleChange` function will update our component state to control the form

```jsx
   // handleChange function for form
    const handleChange = (e) => {
      setNewForm({ ...newForm, [e.target.name]: e.target.value });
    };

```

- Add a `createPeople` function to contact the API and send the current state to our backend. The content from our component’s local state will be pass as an argument to the API utility, which is then processed by the Express server. The data we send from the frontend should nowbe accessible in the create route’s request body (`req.body`).

### Add your `createPerson` utility function

```jsx
// src/utilties/people-services.js
...

export async function createPerson(data){
    try {
        const newPerson = await peopleAPI.create(data)
        return newPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}
```

### Add your `create` API function

```jsx

// src/utilities/person-api.js

... 
export async function create(data){
    try {
        const res = await fetch(BASE_URL, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        if (res.ok) {
            return res.json()
        }
    } catch (err) {
        console.log(err)
        throw new Error('Invalid Request')
    }
}

```

- A `handleSubmit` function will handle form submission and trigger a re-render of the form

```jsx
const handleSubmit = async (e) => {

		e.preventDefault()
    const newPerson = await createPeople()
		
		// reset the form
    setNewForm({ name: "", image: "", title: "" })
		handleRequest() // triggers a fetch to render the newly added person

}
```

After you have integrated your component state, form input, and event handlers your code should look like this:

## Add **Links to Show page**

We want to generate links to each person's show page so let's do the following in `People.js`

```jsx
// People.jsx

	const loaded = () => {
        return people.map(person => (
                <div key={person._id} className='person-card'>
									{/* update your JSX to include a Link component */}
                   <Link to={`/people/${person._id}`}>
                       <h1>{person.name}</h1>
                       <img src={person.image} alt={person.name} />
                       <h3>{person.title}</h3>
                   </Link>
               </div>
           )
       )
   }
```

Let’s add a bit more styling for our link cards:

```css
.people-list a{
    text-decoration: none;
    color: black;
  }

.person-card {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 10px;
}
```

## Building out t**he Show page**

Let's start building out the show page, like `People` page component we will render `Show` page with data accessed directly from the API.

### Question: How can we identify a specific person?

Similar to our `req.params` object in our Express API, we can access data from our routes ‘parameter’ variables.  Our `Link` in the `People` component will render an anchor tag with a unique `id` attached to the base URL. , react-router will parse the url and return the `id` string.

We can access this value with the `useParams` hook. The syntax below uses object de-structuring to accessed the `id` property from the object returned by our react-router hook.

```
const { id } = useParams()
```

### Add your `getPerson` utility function

```jsx
// src/utilties/people-services.js
...

export async function getPerson(id){
    try {
        const foundPerson = await peopleAPI.detail(id)
        return foundPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}
```

### Add your `detail` API function

```jsx

// src/utilities/person-api.js

... 
export async function detail(id){
    try {
				const url = `${BASE_URL}/${id}`
        const res = await fetch(url, { 
            method: 'GET',
        })
        if (res.ok) {
            return res.json()
        }
    } catch (err) {
        console.log(err)
        throw new Error('Invalid Request')
    }
}

```

- Import your getPerson utiliity function into your Show page

```jsx
import { getPerson } from '../../utilities/people-service'

...
```

### Fetching a person boilerplate

```jsx
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPerson } from '../../utilities/people-service'

const Show = () => {
  const [person, setPerson] = useState(null)
  const { id } = useParams()

 const handleRequest = async () => {
		try {
				const personData = await getPerson(id)
				setPerson(personData)
		}catch(err){
				console.log(err)
		}
}

  console.log(`Current Person: ${JSON.stringify(person)}`)

  useEffect(() => {
    handleRequest()
  }, [])

  return <h1>Show component</h1>
}

export default Show
```

### Update the Show page’s JSX

```jsx
// After testing that person is defined you can use a ternary statement to
// conditionally render either a person's data or a loading message

const loaded = () => (
        <div className="person">
            <h1>Show Page</h1>
            <h2>{person.name}</h2>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name+" image"} />
		    </div>
)

const loading = () => {
        return <h1>Loading.........</h1>
				// alternatively you can use the spinner
}

return person ? loaded() : loading()

```

## **Deleting a Person**

Our next step is to add a button to delete a person!

The current state of our `Show` page:

```jsx
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPerson } from '../../utilities/people-service'

const Show = () => {
    const [person, setPerson] = useState(null)
    const { id } = useParams()

    const handleRequest = async () => {
        try {
            const personData = await getPerson(id)
            setPerson(personData)
        } catch (err) {
            console.log(err)
        }
    }

    // console.log(`Current Person: ${JSON.stringify(person)}`)

    useEffect(() => {
        handleRequest()
    }, [])

    const loaded = () => (
        <div className="person">
            <h1>Show Page</h1>
            <h2>{person.name}</h2>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name + " image"} />
        </div>
    )

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner
    }

    return person ? loaded() : loading()

}

export default Show
```

### Add your `deletePerson` utility function

```jsx
// src/utilties/people-services.js
...

export async function deletePerson(id){
    try {
        const deletedPerson = await peopleAPI.destroy(id)
        return deletedPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}
```

### Add your `destroy` API function

```jsx

// src/utilities/person-api.js

... 
export async function destroy(id){
    try {
				const url = `${BASE_URL}/${id}`
        const res = await fetch(url, { 
            method: 'DELETE',
        })
        if (res.ok) {
            return res.json()
        }
    } catch (err) {
        console.log(err)
        throw new Error('Invalid Request')
    }
}

```

- Import your deletePerson utility function into your Show page

```jsx
import { getPerson, deletePerson } from '../../utilities/people-service'

...
```

### Import useNavigate hook in `Show.js`

```jsx
import { useParams, useNavigate } from 'react-router-dom'
```

### Add `removePerson` function to Show component

```jsx

  const navigate = useNavigate()

	const handleDelete = async () => {
		
			try {
          
          const deletedResp = await deletePerson(id)

          // console.log(deletedResp)

          navigate('/')
          // navigate will change the browser's URL
          // which will cause react-router to "redirect" to home page;
          // the Main will then re-render the People component
          // upon mount People will fetch the updated index of people data

      } catch (err) {
          console.log(err)
          navigate(`/people/${id}`)
      }
  }

export default Show

```

### Add a delete button to your Show JSX

```jsx
const loaded = () => (
        <div className="person">
            <h1>Show Page</h1>
            <h2>{person.name}</h2>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name+" image"} />
            <div>
			          <button className="delete" onClick={handleDelete}>
									Remove Person
								</button>
            </div>
    </div>
    )

return <div>{person ? loaded() : loading()}</div>
}

```

To provide some extra styling on our detail page, let’s add the following CSS to our App.css

```css
.person {
    display: grid;
    grid-template-areas:
        "title"
        "title"
        "name"
        "image"
        "label"
}

.person>h1 {
    grid-area: title;
}

.person>img {
    grid-area: image;
    width: auto;
    height: 50vh;
}

.person h2:first-of-type {
    grid-area: name;
}

.person h2:last-of-type {
    grid-area: label;
}

.delete {
    border: 1px solid #ddd;
    background-color: transparent;
    padding: 8px 24px;
    border-radius: 4px;
    transition: transform .5s ease-in-out;
}
.delete:hover {
    border: 1px solid #ddd;
    background-color: black;
    color: white;
    transform: scale(1.1, 1.1);
}

```

## **Conclusion**

You should now be able to:

- See information about a single person or a loading message
- Remove that person from your Show page through a button click.

## Next Step: [People Edit and Delete](MERN%20Build%20People%20Edit%20b9e28beda6b14ed0b4ce9d7724949857.md)