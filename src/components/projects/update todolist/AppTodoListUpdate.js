import React, { useState, useEffect } from 'react';
import List from './List';
/** The Alert component that will show up each time we clear the list, edit or remove an item */
import Alert from './Alert';
import "./AppTodoListUpdate.css"
import NavbarProjects from "../NavbarProjects"

/** In order to get the existent list from the LocalStorage */
const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    /** If It's not empty */
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    }
    else {
        return [];
    }
};

function AppTodoListUpdate() {
    /* The  needed states */
    /* For the new task to add from the form */
    const [name, setName] = useState('');
    /* The list of tasks */
    const [list, setList] = useState(getLocalStorage());
    /* For the edits */
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    /* For the alert properties */
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    /** Sunmitting a new task */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, 'danger-list', 'Please give the task a name.');
        } else if (name && isEditing) {
            /** We edit the item */
            setList(
                list.map((item) => {
                if (item.id === editID) {
                    return { ...item, title: name };
                }
                return item;
                })
            );
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success-list', 'The task has been edited.');
        } else {
            showAlert(true, 'success-list', 'A new task has been added to the list.');
            /** Instead of using uuid, we can use the Date */
            const newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');
        }
    };
    /** SHOW ALERT */
    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };
    /** Empty the list */
    const clearList = () => {
        showAlert(true, 'danger-list', 'Empty list');
        setList([]);
    };

    const clearListCompleted = () => {
        showAlert(true, 'danger-list', 'The completed tasks have been removed from the list.');
        setList(list.filter((item) => item.checked !== true));
    };
    /** Remove an item*/
    const removeItem = (id) => {
        showAlert(true, 'danger-list', 'A task has been removed.');
        setList(list.filter((item) => item.id !== id));
    };
    /** Checking a todo */
    const checkedItem = (id) => {
        showAlert(true, 'success-list', 'A task has been accomplished.');
        setList(
            list.map((item) => {
            if (item.id === id) {
                if(item.checked)
                    return { ...item, checked: false };
                else 
                    return { ...item, checked: true };
            }
            return item;
            })
        );
    };
    /** Editing an Item */
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };
    /** Each time the list changes, we will update the local storage*/
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    /** RETURN */
    return (
        <section className='AppTodoListUpdate'>
            <NavbarProjects/>
            <div className='todolist-updated'>
                <form className='form-list' onSubmit={handleSubmit}>
                    <div className="alert">
                        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                    </div>

                <h3>My Tasks For Today</h3>
                <div className='form-buttons'>
                    <input
                        type='text'
                        className='task-todo'
                        placeholder='Enter a new task'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' className='submit-btn-todolist'>
                        {isEditing ? 'Edit' : 'Submit'}
                    </button>
                </div>
                </form>
                {list.length > 0 && (
                    <div className='todolist-update-container'>
                        <List items={list} removeItem={removeItem} editItem={editItem} checkedItem={checkedItem} />
                        <div  className='clear-btns'>
                            <button className='clear-btn-todolist' onClick={clearListCompleted}>
                                Clear Finished
                            </button>
                            <button className='clear-all-btn-todolist' onClick={clearList}>
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default AppTodoListUpdate;