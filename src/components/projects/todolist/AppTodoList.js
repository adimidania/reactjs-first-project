import React, {useState, useRef, useEffect} from 'react'
import Todos from "./Todos"
import "./TodoList.css"
import uuidv4 from "uuid/dist/v4"
import NavbarProjects from '../NavbarProjects'
/*
    1. uuidv4 generates unique keys for us.
*/

function AppTodoList() {
    /* The app need an array of all the todos, so we will use states */
    const [todos, setTodos] = useState([]);
    /* In order to store the todos even when we refresh our web page, we need to do the following */
    /* Basically, we create a local storage in our browser, and we give it a key */
    const LOCAL_STORAGE_KEY = 'todoApp.todos'
    /* When we refresh the browser, we will get all the todos we had */
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodos(storedTodos)
    }, []);
    /* Each time we add a new todo, we need to add it to our local storage */
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);
    /* the function toggle will be passed down to the Todo component */
    function toggle(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.completed = !todo.completed
        setTodos(newTodos)
    }
    /* In order to get the task out of the input field */
    const todoName = useRef();
    function AddToDo(e) {
        const name = todoName.current.value
        if (name === '') return
        setTodos(previousTodo => {
            return [...previousTodo, {id: uuidv4(), name: name, completed:false}]})
        todoName.current.value = null
    }
    /* When we need to update the state, we should always create a copy of the state, update it, and then
    set it using SetState */
    function ClearTodos() {
        const newTodos = todos.filter(todo => todo.completed === false)
        setTodos(newTodos)
    }
    /*** Return ***/
    return (
        <div className="todoApp">
        <NavbarProjects />
        <div className="to-do-list-container">
            <div className="to-do-list">
                <div>{todos.filter(todo => todo.completed === false).length} left task to accomplish</div>
                <div className="inputs">
                    <input ref={todoName} type="text" />
                    <div className="buttons">
                        <button className="Add" onClick={AddToDo}>ADD</button>
                        <button className="clear" onClick={ClearTodos}>CLEAR ALL</button>
                    </div>
                </div>
                <Todos todos={todos} toggle={toggle} />
            </div>
        </div>
        </div>
    )
}

export default AppTodoList
