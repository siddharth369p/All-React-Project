import TodoItem from "./TodoItem";

const Todoitems = ({ todoitems ,onDeleteClick}) => {
  return (
    <>
      {todoitems.map((item,index) => (
        <TodoItem  key={index}
        todoDate={item.todoDate} 
        todoName={item.todoName} onDeleteClick={onDeleteClick}/>
      )
      )}
     
     
    </>
    
  );
};

export default Todoitems;
