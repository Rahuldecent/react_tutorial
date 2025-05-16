import React from "react";
import TodoComponent from "./todoComponent";

function TodoContainer({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <TodoComponent
          key={index} 
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoContainer;
