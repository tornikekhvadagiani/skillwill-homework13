import React from "react";
import TaskItem from "./TaskItem";

const TaskList = React.memo(({ tasks, onTaskAction, actionLabel, onDelete }) => {
  console.log("TaskList rendered");

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onTaskAction={onTaskAction}
          actionLabel={actionLabel}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
});

export default TaskList;
