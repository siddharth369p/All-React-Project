import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState ,useReducer} from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./stores/todo-items-store";

function App() {

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
    }} >
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
