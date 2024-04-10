import { useContext } from "react";
import { TodoItemsContext } from "../mystore/todo-items-store";
const DisplayMsg=()=>{
  const TodoItemsFromContext=useContext(TodoItemsContext);
  const items=TodoItemsFromContext.initialTasks;
return <>
{items.length === 0 &&
  <h2 style={{color:"yellow",fontSize:"3rem"}}>Jaake padh na </h2>}
  </>
}
export default DisplayMsg;