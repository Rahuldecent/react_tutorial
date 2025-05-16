import React from "react";

function TodoComponent({todo,deleteTodo,index}) {
  return (
    <div className="todo">
     <p>{todo}</p>
      <div className="actions">
        <input type="checkbox"  onClick={toggleTodo}/>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoComponent;
