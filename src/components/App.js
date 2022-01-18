import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
const url = "http://localhost:3001/pizzas"
function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({ })
  
   useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(r => setPizzas(r))
  }, [])

  function onEdit(editPizza){
    const newList = pizzas.filter(pizza => {return pizza.id !== editPizza.id})
    const {id, size, topping, vegetarian} = editPizza
    console.log(topping, size, vegetarian)
    setEditPizza({id: id, topping: topping, size: size, vegetarian: vegetarian})
    setPizzas(newList)
  }

  function handleChange(value, change){
    if (change==="topping"){
      console.log("change topping to", value, "!")
      setEditPizza({...editPizza, topping: value})
    }
    if (change==="size"){
      console.log("change size to", value, "!")
      setEditPizza({...editPizza, size: value})
    }
    if (change==="vegetarian"){
      console.log("change veg to", value, "!")
      if (value==="Vegetarian"){
        setEditPizza({...editPizza, vegetarian: true})
      }
      if (value==="Not Vegetarian"){
        setEditPizza({...editPizza, vegetarian: false})
      }
    }
  }
 
  console.log("the editpizza", editPizza)

  function handleSubmit(){
    setPizzas([...pizzas, editPizza])
  }

 
 
  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} handleSubmit={handleSubmit} handleChange={handleChange} />
      <PizzaList onEdit={onEdit} pizzas={pizzas}/>
    </>
  );
}

export default App;
