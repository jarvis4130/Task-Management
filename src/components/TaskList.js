// TaskList.js
import React, { useState } from "react";

const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortedTasks, setSortedTasks] = useState([...tasks]);

  const sortByPriority = (priority) => {
    const filteredTasks = priority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === priority);

    setPriorityFilter(priority);
    setSortedTasks(filteredTasks);
  };

  return (
    <div>
      <h3>Task List</h3>

      <div className="m-1 p-2 d-flex gap-3">
        <button onClick={() => sortByPriority("high")} className="btn btn-danger mb-3">
          Sort by High Priority
        </button>
        <button onClick={() => sortByPriority("medium")} className="btn btn-warning mb-3">
          Sort by Medium Priority
        </button>
        <button onClick={() => sortByPriority("low")} className="btn btn-success mb-3">
          Sort by Low Priority
        </button>
        <button onClick={() => sortByPriority("all")} className="btn btn-info mb-3">
          Show All
        </button>
      </div>
      {sortedTasks.map((task) => (
        <div key={task.id} className="mb-3 p-2 border rounded">
          <div className="d-flex align-items-center mb-2 gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="mr-2"
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <strong>{task.name}</strong> - {task.description} (Priority:{" "}
              {task.priority})
            </span>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={() => onEdit(task)}
              className="btn btn-primary btn-sm m-2 px-5"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="btn btn-danger btn-sm m-2 px-5"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
