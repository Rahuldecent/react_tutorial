import React, { useState } from "react";

function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleInputChange() {
    console.log("some chnages occurs");
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(name,"name")
  }
  return (
    <div>
      <form>
        <h1>
          {name.firstName} {name.lastName}
        </h1>
        <label htmlFor="">First Name:</label>
        <br />
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        <label htmlFor="">last Name:</label>
        <br />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <br />   
        <button onClick={(e) => handleFormSubmit(e)}>Click here </button>
      </form>
    </div>
  );
}

export default Form;
