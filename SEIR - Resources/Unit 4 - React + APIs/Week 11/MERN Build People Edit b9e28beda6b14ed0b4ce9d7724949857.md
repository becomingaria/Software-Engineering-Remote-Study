# MERN Build: People Edit

[MERN Create Show & Delete](MERN%20Create%20Show%20&%20Delete%20ee19c20cead749eba4f7afb915d722f6.md)

## **Updating a Person**

To complete our CRUD operations for our MERN app we will build a new Edit View, borrowing some code from our Show page functionality.

The new `Edit.jsx` page will need the following react hooks and services

- a useParams hook for identifying the correct person
- state for an edit form
- handleChange and handleSubmit functions
- a form in the JSX pre-populated with Person Data
- `getPerson` utility functions

### Update `Main` component to include an ‘edit’ page route

```jsx
import Edit from "../../pages/Show/"

...

return (
    <main>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people/:id" element={<Show />} />
				<Route path="/people/:id/edit" element={<Edit />} />
      </Routes>
    </main>
  )
```

### Create the component pages and populate Edit Page component

An edit page will borrow many of the features we have previously built in our react app:

- person state for populating on page content
- a getPerson utility function that will return API data
- conditional rendering API content
- react and react router hooks
- JSX form system for editing people data

```jsx
import './Edit.css'

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPerson } from '../../utilities/people-service'

const Edit = () => {
    const [person, setPerson] = useState(null)
    const { id } = useParams()
    
    const navigate = useNavigate()

    const handleRequest = async () => {
        try {
            const personData = await getPerson(id)
            setPerson(personData)
						// ... we will also update a local form state next
        } catch (err) {
            console.log(err)
						
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    const loaded = () => (
        <div className="person">
            <h1>Edit Page</h1>
            <p>...form goes here</p>
        </div>
    )

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return person ? loaded() : loading()

}

export default Edit
```

### Adding form state, initialized with null data

```jsx
const [editForm, setEditForm] = useState({name: "", image: "", title: ""})
```

### Update mounting `handleRequest` and define an `onChange` event handler

```jsx
    const handleRequest = async () => {
        try {
            const personData = await getPerson(id)
            setPerson(personData)

						const {name, image, title} = personData
						setEditForm({name, image, title})

        } catch (err) {
            console.log(err)
						navigate(`/people/${id}`)
        }
    }

const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
}
```

### The controlled edit form

The Edit page requires two states objects: 

- `person` state for populating existing content (buttons, headings, etc)
- `editForm` state for controlling and pre-populating the edit form content

```jsx
<section>
	<h2>Edit {person.name} </h2>
	  <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
     <input type="submit" value="Update Person" />
  </form>
</section>
```

### Define an onSubmit event handler

Before we want to integrate our API / services we should verify the form data aligns with the schema of our Person model. 

```jsx
const handleSubmit = (e) => {
        e.preventDefault()
        console.log(editForm)
}
```

### Add your `updatePerson` utility function

```jsx
// src/utilties/people-services.js

...

export async function updatePerson(id,data){
    try {
        const updatedPerson = await peopleAPI.update(id,data)
        return updatedPerson
    }catch(err){
        return err
    }
}
```

### Add your `update` API function

```jsx

// src/utilities/person-api.js

... 

export async function update(id,formData){
    try {
				const url = `${BASE_URL}/${id}`
        
				const res = await fetch(url, { 
            method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
        })

        if (res.ok) {
            return res.json()
        }else {
					throw new Error('Invalid PUT Request')
				}

    } catch (err) {
				return err
    }
}

```

- Import your update utility function into your Edit page

```jsx
import { getPerson, updatePerson } from '../../utilities/people-service'

...
```

### Refactor your handleSubmit function

```jsx
const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const updateResp = await updatePerson(id,editForm)
        // console.log(updatePerson)
        navigate(`/people/${id}`)
        
    } catch (err) {
        console.log(err)
        navigate(`/people/${id}/edit`)
    }
}
```

### Edit.jsx  Solution

```jsx
import './Edit.css'

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPerson, deletePerson } from '../../utilities/people-service'

const Edit = () => {
    const [person, setPerson] = useState(null)
    const [editForm, setEditForm] = useState(person)

    const { id } = useParams()

    const navigate = useNavigate()

    const handleRequest = async () => {
        try {
            const personData = await getPerson(id)
            setPerson(personData)
            
            const { name, image, title } = personData
            setEditForm({ name, image, title })

        } catch (err) {
            console.log(err)
            navigate(`/people/${id}`)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(editForm)
    }

    const loaded = () => (
        <div className="person">
            <h1>Edit Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Person" />
            </form>
        </div>
    )

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner
    }

    return person ? loaded() : loading()

}

export default Edit
```

## Next Step: [Deploy FE React App to Netlify](Deploy%20Frontend%20bf2918e398864d80b259cb214f643075.md)