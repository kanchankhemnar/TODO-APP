import { useContext, useRef } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { TodoItemsContext } from "../mystore/todo-items-store";

function Input() {  
  const {addNewItem}=useContext(TodoItemsContext);
  const textRef=useRef();
  const dateRef=useRef();

  const addItem = () => {
    let text=textRef.current.value;
    let date=dateRef.current.value;
    if (text != "" && date != "") {
      addNewItem(text, date);
      textRef.current.value="";
      dateRef.current.value="";
    }
  };
  return (
    <>
      <div className="container text-center ">
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Enter task"
              id="inp123"
              ref={textRef}
            />
          </div>

          <div className="col">
            <input
              type="date"
              id="date123"
             ref={dateRef}
            />
          </div>

          <div className="col">
            <button
              type="button"
              className="btn btn-success my-button"
              onClick={addItem}
            >
            <MdOutlineAddCircle/>
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Input;
