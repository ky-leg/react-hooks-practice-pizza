import React from "react";


function PizzaForm({editPizza, handleSubmit, handleChange}) {
 
  const {vegetarian, size, topping} = editPizza



  function onSubmit(e){
    e.preventDefault()
    handleSubmit()
    
  }

  

  // console.log(editPizza)
  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={e => handleChange(e.target.value, e.target.name)} 
            value= {topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size"
          onChange={e => handleChange(e.target.value, e.target.name)} 
          value={size}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col"
         
        >
          <div 
            
            className="form-check">
            <input
              onChange={e => handleChange(e.target.value, e.target.name)} 
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian? "checked":null}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={e => handleChange(e.target.value, e.target.name)} 
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={(vegetarian===false)? null:"checked"}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
