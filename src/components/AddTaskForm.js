// AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      alert('Task name is required.');
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority,
      completed: false,
    };

    onAdd(newTask);
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <div className="mb-3 p-3 border rounded">
      <h3>Add Task</h3>
      <div className="form-group">
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Task Description:</label>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-control"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button onClick={handleAddTask} className="btn btn-success m-2">
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
