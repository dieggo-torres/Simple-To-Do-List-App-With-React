import React, { useState } from "react";

function InputArea(props) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={task} />
      <button
        onClick={() => {
          props.onAdd(task);
          setTask("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
