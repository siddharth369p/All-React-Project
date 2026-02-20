import Container from "./components/Container";
import ErrMessg from "./components/ErrMessg";
import FoodItem from "./components/FoodItem";
import "./App.css";
import FoodInput from "./components/FoodINput";
import { useState } from "react";

function App() {
    let [fooditem,setFooditem]=useState(["Apple", "Bnana", "Orange"])
 const [texToShow,setTextToshow]=useState();

  const onKeyDown= (event) => {
    console.log(event)
    if(event.key=="Enter"){
     let newFoodItem=event.target.value;
    }
    let newItems=[...fooditem,newFoodItem]
    setFooditem(newItems);

    console.log("food values enter is "+newFoodItem)
    
  
  };

  return (
    <Container>
      <h1>All Fruits using Map method which convert one array into another </h1>

      <ErrMessg items={fooditem} />
      <FoodInput handleKeyDown={onKeyDown} />
      <p>{texToShow}</p>
      <FoodItem items={fooditem} />
    </Container>
  );
}

export default App;
