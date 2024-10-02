import React, { useState } from "react";
import "./TodoTab.css"; // Import du fichier CSS

function TodoTab() {
  const [tasks, setTasks] = useState([
   
  ]);

  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className={task.completed ? "completed" : ""}>{task.text}</td>
              <td>{task.completed ? "Yes" : "No"}</td>
              <td>
                <button
                  className="complete-btn"
                  onClick={() => toggleCompleted(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button className="add-task-btn" onClick={() => addTask(text)}>
        Add Task
      </button>
    </div>
  );
}

export default TodoTab;
