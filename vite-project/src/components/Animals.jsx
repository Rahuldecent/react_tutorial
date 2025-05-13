import React from "react";

function Animals() {
  let animals = ["Cat", "Tiger", "Horse"];
  return (
    <ul>
      {animals.map((animal) => (
        <li>{animal}</li>
      ))}
    </ul>
  );
}

export default Animals;
