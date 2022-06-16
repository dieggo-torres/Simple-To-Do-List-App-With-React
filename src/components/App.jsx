import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    setTasks((prevValue) => {
      console.log(prevValue);
      return [...prevValue, task];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
