import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    {name:"Apple",price:100},
    {name:"Banana",price:50},
    {name:"Pinapple",price:120}
  ]
  return (
    <ul>
      {fruits.map((item, index) => (
       <li><Fruit key = {item.name} name= {item.name} price = {item.price}/></li> 
      ))}
    </ul>
  );
}

export default Fruits;
