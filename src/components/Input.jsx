import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";
import Button from "./Button";

const Input = () => {
  const { addTask } = useContext(TasksContext);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim().length > 0 && inputValue.length <= 80) {
      addTask(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTask();
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="d-flex align-items-center gap-2 mb-3"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="form-control task-input"
        maxLength="80"
        placeholder="Enter a task..."
      />
      <Button
        onClick={handleAddTask}
        label="Add"
        className="add-task-btn btn-outline-dark"
      />
    </form>
  );
};

export default Input;
