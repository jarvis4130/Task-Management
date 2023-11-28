import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddTaskForm(false);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const openEditForm = (task) => {
    setSelectedTask(task);
    setShowEditTaskForm(true);
  };

  const editTask = (editedTask) => {
    setTasks(tasks.map(task => (task.id === editedTask.id ? editedTask : task)));
    setShowEditTaskForm(false);
    setSelectedTask(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Task Management App</h1>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={openEditForm}
      />

      {/* Add Task Form */}
      {showAddTaskForm && <AddTaskForm onAdd={addTask} />}

      {/* Edit Task Form */}
      {showEditTaskForm && (
        <EditTaskForm
          task={selectedTask}
          onEdit={editTask}
          onClose={() => {
            setShowEditTaskForm(false);
            setSelectedTask(null);
          }}
        />
      )}

      {!showAddTaskForm  && <button className="btn btn-primary mt-3" onClick={() => setShowAddTaskForm(true)}>Add Task</button>}

    </div>
  );
};

export default App;
