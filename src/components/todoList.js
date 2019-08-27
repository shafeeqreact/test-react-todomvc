import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ error, items, handleComplete, handleDelete }) => {
    return (
        <div className='border p-2' style={items.length ? { display: "block" } : { display: "none" }}>
            {error.code !== 200 ? <p className="text-danger text-center m-2">Something went wrong - {error.message}</p> : null}
            <ul className="list-group">
                {items.map(item =>
                    <TodoItem key={item.id} item={item} handleComplete={handleComplete} handleDelete={handleDelete} />
                )}
            </ul>
        </div>
    );
}

export default TodoList;