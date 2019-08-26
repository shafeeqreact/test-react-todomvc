import React, { useState, useEffect } from 'react';
import AddTodo from './components/addTodo';
import Counter from './components/counter';
import TodoList from './components/todoList';
import { getAllItemsFromContainer, addItemToContainer, updateItemToContainer } from './containers/itemsContainer';
import getUID from './utils/getUID';
import './styles/app.css';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    let { status, data } = getAllItemsFromContainer();
    if (status.code === 200) {
      setItems(data);
    }
    setError(status);
  }, [])

  const addItem = (name) => {
    let id = getUID();
    let item = { name, id };

    let originalState = items;

    setItems([...items, item]);

    let { status } = addItemToContainer(item);
    if (status.code !== 200) {
      setItems(originalState);
    }
    setError(status);
  }

  const handleComplete = (id) => {
    let originalState = items;

    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.complete = true;
      }
      return item;
    })
    setItems(updatedItems);

    let { status } = updateItemToContainer(id);
    if (status.code !== 200) {
      setItems(originalState);
    }
    setError(status);
  }

  const handleDelete = (id) => {
    let originalState = items;

    let updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);

    let { status } = updateItemToContainer(id);
    if (status.code !== 200) {
      setItems(originalState);
    }
    setError(status);
  }

  return (
    <div className="container">
      <h1 className="text-center m-2">Genius Plaza Todo App Test (React)</h1>
      <AddTodo addItem={addItem} />
      <Counter items={items} />
      <TodoList error={error} items={items} handleComplete={handleComplete} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
