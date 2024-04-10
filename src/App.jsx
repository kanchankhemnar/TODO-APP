import Heading from "./components/heading";
import Input from "./components/input-row";
import Row1 from "./components/row1";
import DisplayMsg from "./components/emptyMsg";
import TodoItemsContextProvider from "./mystore/todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center>
          <Heading />

          <hr />
          <Input />
          <hr />
          <DisplayMsg></DisplayMsg>
          <Row1></Row1>
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
