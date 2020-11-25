import React, { useState } from "react";

const Task = ({ id, name, updateTaskName, updateTaskCompleted }) => {
  const handleTaskChange = (e) => {
    // setName(e.target.value);
    updateTaskName(id, e.target.value);
  };

  const handleTaskCompleted = () => {
    updateTaskCompleted(id);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleTaskChange}></input>
      <button onClick={handleTaskCompleted}>Complete</button>
    </div>
  );
};

export default Task;
