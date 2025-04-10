import React, { useState } from 'react';

const ModernTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input.trim()]);
    setInput('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-20 overflow-y-auto flex items justify-center bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2]">
      <div className="bg-white/60 rounded-2xl shadow-md w-full max-w-7xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center drop-shadow">
          Modern Todo List
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') addTodo();
            }}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm transition duration-200"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-3 bg-white/90 rounded-xl shadow-sm"
            >
              <span className="text-gray-800">{todo}</span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 hover:text-red-700 transition font-medium"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModernTodoList;
