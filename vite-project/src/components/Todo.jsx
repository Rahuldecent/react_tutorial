import React, { useState } from "react";
import "./Todo.css";
import InputContainer from "./InputContainer";
import TodoContainer from "./TodoContainer";

function Todo() {
  const [inputVal, setinputVal] = useState("");
  const [todos, settodos] = useState([]);

  function writeTodo(e) {
    setinputVal(e.target.value);
  }

  function addToDo(e) {
    if (inputVal.trim() !== "") {
      settodos((prevTodos) => [
        ...prevTodos,
        { text: inputVal, completed: false },
      ]);
      setinputVal("");
    }
  }

  function deleteTodo(todoIndex) {
    settodos((prevTodos) =>
      prevTodos.filter((_, i) => i !== todoIndex)
    );
  }

  function toggleTodo(index) {
    settodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addToDo={addToDo}
      />
      <TodoContainer
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </main>
  );
}

export default Todo;
