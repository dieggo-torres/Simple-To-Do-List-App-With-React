import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [tasks, setTasks] = useState([]);

  function addItem(inputText) {
    setTasks((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {tasks.map((task, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={task}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
