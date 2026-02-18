import TodoItem from "./TodoItem";

const Todoitems = ({ todoitems }) => {
  return (
    <>
      {todoitems.map((item,index) => (
        <TodoItem  key={index}
        todoDate={item.todoDate} 
        todoName={item.todoName}/>
      )
      )}
     
     
    </>
    
  );
};

export default Todoitems;
