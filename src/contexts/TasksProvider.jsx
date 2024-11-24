import { useState } from "react";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleTaskStatus = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeTask, toggleTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
};
