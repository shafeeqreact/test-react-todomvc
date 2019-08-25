import React, { useState } from 'react';

const AddTodo = ({ addItem }) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        item && addItem(item.trim());
        setItem('');
    };

    return (
        <form className="input-group my-4">
            <input value={item} onChange={(e) => setItem(e.target.value)} autoFocus type="text" className="form-control" placeholder="New" />
            <input onClick={handleSubmit} className="btn btn-primary" type="submit" value='+' />
        </form>
    );
}

export default AddTodo;