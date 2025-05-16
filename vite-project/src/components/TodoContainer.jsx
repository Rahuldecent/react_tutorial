import React from "react";
import TodoComponent from "./todoComponent";

function TodoContainer({ todos,deleteTodo,toggleTodo }) {
  return (
    <div className="container">
     {todos.map((todo,index) => {
        return (
            <TodoComponent todo= {todo}  index = {index}deleteTodo = {deleteTodo}/>
        )
     })}
    </div>
  );
}

export default TodoContainer;
