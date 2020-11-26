import React, { useState } from "react";

const Task = ({ id, name, updateTaskName, updateTaskCompleted, updateTaskActive }) => {
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
    <div>
      <input type="text" value={name} onChange={handleTaskChange}></input>
      <button onClick={handleTaskCompleted}>Complete</button>
      <button onClick={handleTaskActive}>Delete</button>
    </div>
  );
};

export default Task;
