import React, { useState } from 'react';
import AddTodo from './components/addTodo';
import Counter from './components/counter';
import TodoList from './components/todoList';
import getUID from './utils/getUID';
import './styles/app.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    let id = getUID();
    setItems([...items, { name, id }])
  }

  const handleComplete = (id) => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.complete = true;
      }
      return item;
    })
    setItems(updatedItems);
  }

  const handleDelete = (id) => {
    let updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div className="container">
      <h1 className="text-center m-2">Genius Plaza Todo App Test (React)</h1>
      <AddTodo addItem={addItem} />
      <Counter items={items} />
      <TodoList items={items} handleComplete={handleComplete} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
