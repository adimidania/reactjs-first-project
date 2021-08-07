import React from 'react';


const List = ({ items, removeItem, editItem, checkedItem }) => {

    return (
      <div className='todo-update-list'>
        {items.map((item) => {
          const { id, title, checked } = item;
          return (
            <article className='a-task-item' key={id}>
                <button
                  type='button'
                  className= {`${checked ? 'task-name-update task-name-update-checked' : 'task-name-update'}`}
                  onClick={() => checkedItem(id)}
                >
                  {title}
                </button>
              <div className='btns-todo'>
                <button
                  type='button'
                  className='edit-btn-todo'
                  onClick={() => editItem(id)}
                >
                  <i class="far fa-edit"></i>
                </button>
                <button
                  type='button'
                  className='delete-btn-todo'
                  onClick={() => removeItem(id)}
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    );
};

export default List;