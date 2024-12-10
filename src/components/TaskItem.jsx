import React, { PureComponent } from "react";

class TaskItem extends PureComponent {
  render() {
    const { task, index, onTaskAction, actionLabel, onDelete } = this.props;
    console.log(`TaskItem rendered: ${task}`);

    return (
      <li>
        {task}{" "}
        <button onClick={() => onTaskAction(index)}>{actionLabel}</button>
        {onDelete && (
          <button onClick={() => onDelete(index)} style={{ marginLeft: "10px" }}>
            წაშლა
          </button>
        )}
      </li>
    );
  }
}

export default TaskItem;
