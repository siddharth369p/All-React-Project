import ErrMessg from "./components/ErrMessg"
import FoodItem from "./components/FoodItem"

function App() {
  
   let fooditem=["Apple","bnana","orange","dragonfruits"];
  
  return (
    <><h1>All Fruits using Map method which convert one array into another </h1>

    <ErrMessg items={fooditem}/>
    <FoodItem items={fooditem}/>
     
    </>
  )
}

export default App
