import { RiDeleteBin7Fill } from "react-icons/ri";
import { TodoItemsContext } from "../mystore/todo-items-store";
import { useContext } from "react";

function Row1() {
  const { initialTasks,deleteItem } = useContext(TodoItemsContext);

  const text = (event) => {
    console.log(event.target.style.whiteSpace);
    event.target.style.whiteSpace =
      event.target.style.whiteSpace == "nowrap" ? "normal" : "nowrap";
  };

  return (
    <>
      {initialTasks.map((task, index) => (
        <div className="container" key={index}>
          <div className="row">
            <div className="col">
              <p id="taskName" onClick={(event) => text(event)}>
                {task.name}
              </p>
            </div>
            <div className="col">
              <p>{task.date}</p>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-danger my-button red-button"
                onClick={() => deleteItem(index)}
              >
                <RiDeleteBin7Fill />
              </button>
            </div>
          </div>
          <hr />
          <br />
        </div>
      ))}
    </>
  );
}

export default Row1;
