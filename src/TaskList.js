import React, { useState, useEffect } from "react";

import Task from "./Task";

import "./TaskList.css";

const TaskList = ({ type }) => {
  const initialTasks = JSON.parse(window.localStorage.getItem("tasks"));

  const initialCount = JSON.parse(window.localStorage.getItem("count"));

  const [count, setCount] = useState(initialCount || 1);

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
    if (type === "todo") {
      const newTasks = tasks.map((task) => {
        if (!task.completed) {
          return { ...task, active: false };
        }
        return task;
      });
      setTasks(newTasks);
    } else if (type === "completed") {
      const newTasks = tasks.map((task) => {
        if (task.completed) {
          return { ...task, active: false };
        }
        return task;
      });
      setTasks(newTasks);
    }
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
    <div className="TaskList">
      {type === "todo" && (
        <button onClick={addTask} className="TaskList-Add">
          Add Task
        </button>
      )}
      {tasks.map(
        (task) =>
          (task.completed ? !(type === "todo") : type === "todo") &&
          task.active && (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              updateTaskName={updateTaskName}
              updateTaskCompleted={updateTaskCompleted}
              updateTaskActive={updateTaskActive}
              completed={task.completed}
            />
          )
      )}
      <button onClick={clearTasks} className="TaskList-Clear">
        {type === "todo" ? "Clear Todos" : "Clear Completed"}
      </button>
    </div>
  );
};

export default TaskList;
