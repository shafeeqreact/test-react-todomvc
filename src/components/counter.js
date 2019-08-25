import React, { useState, useEffect } from 'react';

const Counter = ({ items }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let count = items.filter(item => !item.complete).length;
        setCount(count);
    }, [items])

    return (
        <div className="text-center mb-4" >
            <strong>{count}</strong> {count === 1 ? "item" : "items"} left
        </div>
    );
}

export default Counter;