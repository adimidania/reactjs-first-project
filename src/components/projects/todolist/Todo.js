import React from 'react'
/*
    1. A todo is simply a checkbox wrapped in a label 
    2. We passed a function called toggle, from AppTodoList to Todo component. This function will allow us 
    to change the state of this todo (from complete to incomplete, or the opposite), and update the state of
    our App (cuz we have an array that contains all the todos) 
*/
function Todo({todo, toggle}) {

    function HandleClick() {
        toggle(todo.id)
    }

    return (
        <label>
            <input type="checkbox" checked={todo.completed} onChange={HandleClick} className="check"/>   
            {todo.name}
        </label>
    )
}

export default Todo
