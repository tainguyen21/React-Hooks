import { useState } from "react";
import "./App.scss";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setToDoList] = useState([
    { id: 1, title: "Go to school" },
    { id: 2, title: "Go to bed" },
    { id: 3, title: "Eat" },
  ]);

  function handleToDoClick(todo) {
    const index = todos.findIndex((item) => item.id === todo.id);

    if (index < 0) return;

    const newToDo = [...todos];
    newToDo.splice(index, 1);

    setToDoList(newToDo);
  }

  function handleSubmit(formValue) {
    const newToDoList = [...todos];
    const newToDo = {
      id: Math.random(),
      ...formValue,
    };

    newToDoList.push(newToDo);
    setToDoList(newToDoList);
  }

  return (
    <div className="app">
      Welcome to React-hooks
      {/* <ColorBox /> */}
      <ToDoForm onSubmit={handleSubmit} />
      <ToDoList todos={todos} onToDoClick={handleToDoClick} />
    </div>
  );
}

export default App;
