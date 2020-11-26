import React from "react";

import "./Task.css";

const Task = ({
  id,
  name,
  updateTaskName,
  updateTaskCompleted,
  updateTaskActive,
  completed,
}) => {
  const handleTaskChange = (e) => {
    // setName(e.target.value);
    updateTaskName(id, e.target.value);
  };

  const handleTaskCompleted = () => {
    updateTaskCompleted(id);
  };

  const handleTaskActive = () => {
    updateTaskActive(id);
  };

  return (
    <div className="Task">
      <input
        type="text"
        value={name}
        onChange={handleTaskChange}
        disabled={completed}
      ></input>
      <button onClick={handleTaskCompleted}>Complete</button>
      <button onClick={handleTaskActive}>Delete</button>
    </div>
  );
};

export default Task;
