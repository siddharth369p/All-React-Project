import { TodoItemsContext } from "../stores/todo-items-store";
import { useContext } from "react";

import TodoItem from "./TodoItem";

const Todoitems = ({onDeleteClick}) => {

  const todoItems=useContext(TodoItemsContext);


  return (
    <>
      {todoItems.map((item,index) => (
        <TodoItem  key={index}
        todoDate={item.todoDate} 
        todoName={item.todoName} onDeleteClick={onDeleteClick}/>
      )
      )}
     
     
    </>
    
  );
};

export default Todoitems;
