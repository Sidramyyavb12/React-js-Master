import React, { useState } from "react";
import "./page.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <div className="app">
      <h1>📝 Todo List</h1>

      <div className="add-todo">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="filters">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active" : ""}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={todo.done ? "done" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
