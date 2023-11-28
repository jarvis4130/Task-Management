// EditTaskForm.js
import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ task, onEdit, onClose }) => {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  useEffect(() => {
    setEditedTaskName(task.name);
    setEditedTaskDescription(task.description);
    setEditedPriority(task.priority);
  }, [task]);

  const handleEditTask = () => {
    const editedTask = {
      ...task,
      name: editedTaskName,
      description: editedTaskDescription,
      priority: editedPriority,
    };

    onEdit(editedTask);
    onClose();
  };

  return (
    <div className="mb-3 p-3 border rounded">
      <h3>Edit Task</h3>
      <div className="form-group">
        <label>Edited Task Name:</label>
        <input
          type="text"
          value={editedTaskName}
          onChange={(e) => setEditedTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Edited Task Description:</label>
        <textarea
          value={editedTaskDescription}
          onChange={(e) => setEditedTaskDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Edited Priority:</label>
        <select
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value)}
          className="form-control"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button onClick={handleEditTask} className="btn btn-primary m-2">
        Save Changes
      </button>
      <button onClick={onClose} className="btn btn-secondary m-2">
        Cancel
      </button>
    </div>
  );
};

export default EditTaskForm;
