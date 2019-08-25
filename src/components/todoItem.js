import React, { useState } from 'react';

const TodoItem = ({ item, handleComplete, handleDelete }) => {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const getClasses = (item) => {
        let classes = "list-group-item d-flex align-items-center p-0 pl-2";
        classes = `${classes} ${item.complete ? 'completed' : ''}`;
        return classes;
    }

    return (
        <li onMouseEnter={() => setToggleSwitch(true)} onMouseLeave={() => setToggleSwitch(false)} className={getClasses(item)} key={item.id}>
            <span className="flex-grow-1">{item.name}</span>
            <button onClick={() => handleDelete(item.id)} className="destroy btn btn-danger mr-2" style={toggleSwitch ? { display: 'block' } : { display: 'none' }} >Remove</button>
            <button onClick={() => handleComplete(item.id)} className="btn btn-warning">X</button>
        </li>
    );
}

export default TodoItem;