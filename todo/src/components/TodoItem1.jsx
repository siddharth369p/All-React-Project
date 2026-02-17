function TodoItem1(){
  let todoName=" Finish React";
  let todoDate=" 16/02/2026";

  return(
   <div class="container">
  <div class="row kg-row">
    <div class="col-6">
     {todoName}
    </div>
    <div class="col-4">
     {todoDate}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-outline-danger kg-button">Delete</button>
    </div>
  </div>
  </div>
  );
}
export default TodoItem1;