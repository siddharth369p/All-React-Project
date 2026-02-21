import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

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

  return (
    <div className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}

      <Todoitems todoitems={todoItems} onDeleteClick={handleDeleteitem} />
    </div>
  );
}

export default App;
