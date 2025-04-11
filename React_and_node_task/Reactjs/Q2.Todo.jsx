// Problem: Build a simple todo list with the ability to add and delete items.

import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            setTodos(prev => [...prev, input.trim()]);
            setInput('');
        }
    };

    const handleDelete = (index) => {
        setTodos(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>🌟 Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a task..."
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} 
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
