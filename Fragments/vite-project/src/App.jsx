
function App() {
  
  let fruit=["Apple","bnana","orange","dragonfruits"]
  return (
    <><h1>All Fruits using Map method which convert one array into another </h1>
      {
        fruit.map((item)=><li>{item}</li>)
      }
    
    </>
  )
}

export default App
