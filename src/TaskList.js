import React, { useState, useEffect } from "react";

import Task from "./Task";

const TaskList = () => {
  const initialTasks = JSON.parse(window.localStorage.getItem("tasks"));

  const [count, setCount] = useState(1);
  const [tasks, setTasks] = useState(
    initialTasks || [{ id: 0, name: "", completed: false, active: true }]
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    window.localStorage.setItem("count", count);
  }, [tasks, count]);

  const addTask = () => {
    const newTasks = tasks;
    newTasks.push({ id: count, name: "", completed: false, active: true });
    setTasks(newTasks);
    setCount(count + 1);
  };

  const clearTasks = () => {
    setTasks([{ id: 0, name: "", completed: false, active: true }]);
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

  const updateTaskActive = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, active: false };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <button onClick={addTask}>Add Task</button>
      {tasks.map(
        (task) =>
          !task.completed &&
          task.active && (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              updateTaskName={updateTaskName}
              updateTaskCompleted={updateTaskCompleted}
              updateTaskActive={updateTaskActive}
            />
          )
      )}
      <button onClick={clearTasks}>Clear All Tasks</button>
    </>
  );
};

export default TaskList;
