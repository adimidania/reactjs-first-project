import React from 'react'
import Todo from "./Todo.js"

/*
    1. The unique key allows React to re-render only the items from the array that changed,
    instead of re-rendering everything!
    2. Basically Todos contains all the todo(s) that we created!
*/

function Todos({todos, toggle }) {
    return (
        <div className="todolist">
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} toggle={toggle} />
            })}
        </div>
    )
}

export default Todos
