import React, { Component } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
    };
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  completeTask = (index) => {
    const taskToMove = this.state.tasks[index];
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
      completedTasks: [...prevState.completedTasks, taskToMove],
    }));
  };

  moveBackToTodo = (index) => {
    const taskToMove = this.state.completedTasks[index];
    this.setState((prevState) => ({
      completedTasks: prevState.completedTasks.filter((_, i) => i !== index),
      tasks: [...prevState.tasks, taskToMove],
    }));
  };

  deleteTask = (index) => {
    this.setState((prevState) => ({
      completedTasks: prevState.completedTasks.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>To-Do List</h1>
        <TaskInput addTask={this.addTask} />
        <div className="columns">
          <div className="column">
            <h2>შესასრულებელი დავალებები</h2>
            <TaskList
              tasks={this.state.tasks}
              onTaskAction={this.completeTask}
              actionLabel="დასრულება"
            />
          </div>
          <div className="column">
            <h2>შესრულებული დავალებები</h2>
            <TaskList
              tasks={this.state.completedTasks}
              onTaskAction={this.moveBackToTodo}
              actionLabel="გადატანა შესასრულებელში"
              onDelete={this.deleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
