import React, { useState } from "react";

const TaskInput = React.memo(({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => setNewTask(event.target.value);

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  console.log("TaskInput rendered");

  return (
    <div className="task-input">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="შეიყვანეთ ახალი დავალება"
      />
      <button onClick={handleAdd}>დამატება</button>
    </div>
  );
});

export default TaskInput;
