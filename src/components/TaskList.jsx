import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";
import Button from "./Button";

const TaskList = () => {
  const { tasks, removeTask, toggleTaskStatus } = useContext(TasksContext);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks
    .map((task, originalIndex) => ({ ...task, originalIndex }))
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    });

  const completedCount = tasks.filter((task) => task.completed).length;
  const incompleteCount = tasks.length - completedCount;

  return (
    <div className="task-container">
      {/* Кнопки фильтрации */}
      <div className="btn-group mb-3">
        <Button
          label="All"
          className={`btn ${
            filter === "all" ? "btn-dark" : "btn-outline-dark"
          } rounded-pill`}
          onClick={() => setFilter("all")}
        />
        <Button
          label="Completed"
          className={`btn ${
            filter === "completed" ? "btn-secondary" : "btn-outline-secondary"
          } rounded-pill`}
          onClick={() => setFilter("completed")}
        />
        <Button
          label="Incomplete"
          className={`btn ${
            filter === "incomplete" ? "btn-secondary" : "btn-outline-secondary"
          } rounded-pill`}
          onClick={() => setFilter("incomplete")}
        />
      </div>

      {/* Счётчики */}
      <div className="task-counter">
        <span>Completed: {completedCount}</span>
        <span>|</span>
        <span>Incomplete: {incompleteCount}</span>
      </div>

      {/* Список задач */}
      {filteredTasks.length === 0 ? (
        <p className="text-muted">No tasks found.</p>
      ) : (
        <ul className="list-group">
          {filteredTasks.map((task) => (
            <li
              key={task.originalIndex}
              className="task-item list-group-item d-flex align-items-center"
            >
              <input
                type="checkbox"
                className="task-checkbox me-3"
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.originalIndex)}
              />

              <span
                className={`task-text ${
                  task.completed ? "text-decoration-line-through" : ""
                }`}
                onChange={() => toggleTaskStatus(task.originalIndex)}
                style={{ cursor: "pointer", flex: 1 }}
              >
                {task.text}
              </span>

              <Button
                label="delete"
                className="btn btn-dark btn-sm"
                onClick={() => removeTask(task.originalIndex)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
