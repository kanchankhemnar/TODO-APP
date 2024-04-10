import { createContext, useReducer } from "react";

export const TodoItemsContext=createContext({
  // initialTasks:[],
  // addNewItem: ()=>{},
  // deleteItem: ()=>{},

});


// reducer is a pure function->it doesn't affect any external thing, only takes action objects and delivers its function.It is solely responsible for only state management.Takes initial state , performs action and passes to useReducer() hook.
const todoItemsReducer = (initialTasks,action) => {
  let newTodoItems=initialTasks;
if(action.type==="NEW_ITEM"){
  newTodoItems = [...initialTasks, { name: action.payload.itemName, date: action.payload.itemDate }];
 
}else if (action.type==="DELETE_ITEM") {
  newTodoItems = initialTasks.filter((task, i) => i !== action.payload.index);

}
  return newTodoItems;
};


 const TodoItemsContextProvider=({children})=>{
  let [initialTasks, dispatchTodoItems] = useReducer(todoItemsReducer, [{name:"study" , date:"7-2-2004"}]);
  
  //defining action objects for reducer funtion
  const addNewItem=(itemName,itemDate)=>{
  //1.add items action object
  const newItemAction={
    type:"NEW_ITEM",    //action type with name "NEW_ITEM"
    payload:{           //gives the values to be changed
      itemName,
      itemDate
    }
  };
  dispatchTodoItems(newItemAction);
};

const deleteItem=(index)=>{
  //2.Delete item action object 
  const deleteItem={
    type:"DELETE_ITEM",
    payload:{
      index,
    }
  };
  dispatchTodoItems(deleteItem);

};

return (
  <TodoItemsContext.Provider
  value={{
    initialTasks,
    addNewItem,
    deleteItem
  }} >
    {children}
  </TodoItemsContext.Provider>
)
};
export default TodoItemsContextProvider;