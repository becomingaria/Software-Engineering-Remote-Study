# Sprint 6: Edit/Update a Todo

### Implementing Edit

To update a `todo` in our database we will need to initiate a pre-filled form that contains that specific data.  Once the user has updated the text in the form, they can click a button to initiate a save. The actual save button will trigger the database call to update.

In `containers/TodosContainer.js`:

```
const [todos, setTodos] = useState([])

  /* createTodo = ...  */

  /* deleteTodo = ...  */

  const updateTodo = todo => {
    const isUpdatedTodo = t => {
        return t._id === todo._id;
    };

    TodoModel.update(todo)
        .then((res) => {
          let todos = todos.slice();
          todos.find(isUpdatedTodo).body = todo.body;
          setTodos(todos);
        });
  };

    return (
      <div className="todosComponent">
        <CreateTodoForm
          createTodo={ createTodo }
        />
        <Todos
          todos={ state.todos }
          updateTodo={ updateTodo }
          deleteTodo={ deleteTodo }
          />
      </div>
    );

```

In the `components/Todos.js`, add `updateTodo` to `<Todo>` props:

```
//....
 let todos = props.todos.map((todo) => {
      return (
        <Todo
          key={todo._id}
          todo={todo}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
          />
      );
    });
//...

```

<!-- Todo changes -->
In `components/Todo.js` We need to add some state and add the method  `toggleBodyForm`:

```
  const [formStyle, setFormStyle] = useState({{
        display: 'none',
      }})

  const toggleBodyForm = () => {
    formStyle.display === 'block'
    ? setFormStyle({ display: 'none'} )
    : setFormStyle({ display: 'block'} );
  };

```

This will hide the `todo` body and reveal the `todoForm` components.

Lets update our `Todo` render to have the `TodoForm` included. We'll also add an Edit link. When the user clicks on the edit link, the form will appear prepopulated with the text of the todo for easy altering. Neat!

```
    return (
      <li data-todos-index={props.todo._id}>
        <div>
          <span className="todo-item">
            {props.todo.body}</span>
          <span
            className='edit'
            onClick={toggleBodyForm}>
            Edit
          </span>
          <span
            className='remove'
            onClick={deleteClickedTodo}>
            Remove
          </span>
        </div>
        <TodoForm
          todo={props.todo}
          style={state.formStyle}
          autoFocus={true}
          buttonName="Update Todo!"
          updateTodo={props.updateTodo}
          toggleBodyForm={toggleBodyForm} />
      </li>
    );
  };

```

You will then have to both write the `TodoForm` component and then import it into `components/Todo.js`:

```
//TodoForm.js
import React, { useState } from 'react';

const TodoFormForm = (props) => {
  const [todo, setTodo] = useState(props.todo)

  const onChange = (e) => {
      setTodo({...todo, body: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.updateTodo(todo);
    setTodo({...todo})
    props.toggleBodyForm();
  };

    return (
      <div>
        <form onSubmit={onSubmit} id="taskForm">
          <input
            onChange={onChange}
            type="text" id="newItemDescription"
            placeholder="What do you need to do?"
            value={todo}
          />
          <button type="submit" id="updateTask" className="btn">{props.buttonName}</button>
        </form>
      </div>
    );

};

export default TodoForm;

```

```
//Todo.js
import React, { Component } from 'react';
import TodoForm from './TodoForm';

//...

```

In `models/Todo.js` add our method:

```
  static update = (todo) => {
    let request = axios.put(`${endPoint}/${todo._id}`, todo);
    return request;
  };

```

Think back to what we did for the other CRUD actions--we define some axios behavior in `/models/Todo.js`. Then we define a method in `TodosContainer` that will handle update behavior.

Then we make our way down from `TodosContainer` to `Todos` to `Todo`, with `state` trickling down as `props`.

## Conclusion

We've learned how to do full CRUD for a basic todo app here. We've seen in particular how props can be trickled down through parent and child components to make a very modular app. We've also been introduced to the magic of axios for network calls from our frontend.