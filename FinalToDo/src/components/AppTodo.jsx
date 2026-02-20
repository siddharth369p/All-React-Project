import { useState } from "react";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
const handleAddButton=()=>{
  onNewItem(todoName,todoDate);
  setTodoDate("");
  setTodoName("");
}


  return (
    <div class="row kg-row">
      <div class="col-6">
        <input type="text" placeholder="Enter Todo Here " onChange={handleNameChange} value={todoName}></input>
      </div>
      <div class="col-4">
        <input type="date" onChange={handleDateChange} value={todoDate} />
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
