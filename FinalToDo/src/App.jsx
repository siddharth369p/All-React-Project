import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./stores/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoName, todoDate) => {
    console.log(`Newitem is added  ${todoName} and Date:${todoDate}`);

    setTodoItems((currValue) => [
      ...currValue,
      {
        todoName: todoName,
        todoDate: todoDate,
      },
    ]);
  };

  const handleDeleteitem = (todoItemName) => {
    const newTodoItem = todoItems.filter(
      (item) => item.todoName !== todoItemName,
    );

    setTodoItems(newTodoItem);
  };

  const defaultTodoItems=[{todoName:"Siddhart",todoDate:"todo date"}]


  return (
    <TodoItemsContext.Provider value={defaultTodoItems} >
    <div className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />;
       <WelcomeMessage todoItems={todoItems}/>

      <Todoitems todoitems={todoItems} onDeleteClick={handleDeleteitem} />
    </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
