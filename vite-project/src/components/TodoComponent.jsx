import React from "react";

function TodoComponent({ todo, deleteTodo, index, toggleTodo }) {

  return (
    <div className="todo flex items-center justify-between p-2 border-b">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#6B7280" : "inherit",
        }}
      >
        {todo.text}
      </span>
      <div className="actions flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)} // Changed from onClick to onChange
        />
        <button
          onClick={() => deleteTodo(index)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoComponent;
