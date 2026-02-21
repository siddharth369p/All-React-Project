import { useState, useRef } from "react";

function AppTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value=("");
    todoDateElement.current.value=("");


    console.log(`${todoDateElement} and name is ${todoNameElement}`)

    onNewItem(todoName, todoDate);
  };

  return (
    <div class="row kg-row">
      <div class="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here "
    
          ref={todoNameElement}
        ></input>
      </div>
      <div class="col-4">
        <input type="date"  ref={todoDateElement} />
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-outline-success kg-button"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AppTodo;
