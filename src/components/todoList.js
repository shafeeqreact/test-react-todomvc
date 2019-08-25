import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ items, handleComplete, handleDelete }) => {
    return (
        <div className='border p-2' style={items.length ? { display: "block" } : { display: "none" }}>
            <ul className="list-group">
                {items.map(item =>
                    <TodoItem key={item.id} item={item} handleComplete={handleComplete} handleDelete={handleDelete} />
                )}
            </ul>
        </div>
    );
}

export default TodoList;