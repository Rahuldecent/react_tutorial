import React from "react";

function Fruit({name,price}) {
  return (
    <div>
        {price > 100 ? <h3>{name}</h3>: ""}
    </div>
  );
}

export default Fruit;
