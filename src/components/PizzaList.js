import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, onEdit}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map(pizza=> (
            <Pizza key={pizza.topping} pizza={pizza} editPizza={pizza => onEdit(pizza)}/>
          ))
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
