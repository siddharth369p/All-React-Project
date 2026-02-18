
import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import Todoitems from "./components/Todoitems";
import"./App.css";


function App() {
  
  const todoitems=[{
    todoName:"Reading Books",
    todoDate:"02/02/2026"
  },
{
    todoName:"FInish React Project",
    todoDate:"02/02/2026"
  },
{
    todoName:"Do meditation",
    todoDate:"02/02/2026"
  },]

  return (

   <div className="todo-container">
       <AppName/>
        <AppTodo/>
       <Todoitems todoitems={todoitems}/>
   </div>
  
  )
}

export default App
