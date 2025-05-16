import React from "react";

function InputContainer({inputVal,writeTodo,addToDo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter Your Task"  value={inputVal}  onChange={writeTodo}/>
      <button onClick={addToDo}>+</button>
    </div>
  );
}

export default InputContainer;
