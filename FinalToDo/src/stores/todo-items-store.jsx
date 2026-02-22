import { createContext } from "react";
export const TodoItemcontext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
}); 

    const TodoItemsContextProvider= () => {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const todoItemReducer = (currTodoItem, action) => {
    let newTodoItm = currTodoItem;

    if (action.type == "NEW_ITEM") {
      newTodoItm = [
        ...currTodoItem,
        {
          name: action.payload.todoName,
          dueDate: action.payload.todoDate,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
    }

    return newTodoItm;
  };

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItem(deleteItem);
  };
};

export  default TodoItemsContextProvider;