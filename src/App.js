import logo from "./logo.svg";
import "./App.css";
import Task from "./Task";
import React, { useState, useEffect } from "react";

function App() {
  const initialTasks = JSON.parse(window.localStorage.getItem("tasks"));

  const [count, setCount] = useState(1);
  const [tasks, setTasks] = useState(
    initialTasks || [{ id: 0, name: "", completed: false }]
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    window.localStorage.setItem("count", count);
  }, [tasks, count]);

  const addTask = () => {
    const newTasks = tasks;
    newTasks.push({ id: count, name: "", completed: false });
    setTasks(newTasks);
    setCount(count + 1);
  };

  const clearTasks = () => {
    setTasks([{ id: 0, name: "" }]);
    setCount(1);
  };

  const updateTaskName = (id, newName) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const updateTaskCompleted = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      {tasks.map(
        (task) =>
          !task.completed && (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              updateTaskName={updateTaskName}
              updateTaskCompleted={updateTaskCompleted}
            />
          )
      )}
      <button onClick={clearTasks}>Clear All Tasks</button>
    </div>
  );
}

export default App;
