import "./App.css";
import Inpunt from "./components/Input";
import TaskList from "./components/TaskList";
import { TasksProvider } from "../src/contexts/TasksProvider";

function App() {
  return (
    <TasksProvider>
      <div className="container mt-3">
        <div className="main-container">
          <h1 className="text-center mb-4 gray-700 text-uppercase fw-bold">
            Todo List
          </h1>
          <Inpunt />
          <TaskList />
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
