import React from "react";

function Pizza({pizza, editPizza}) {

  const {size, topping, vegetarian} = pizza
  // console.log(pizza)
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      {vegetarian ? <td>YES</td> : <td>NO</td>}
      <td>
        <button onClick={() => editPizza(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
