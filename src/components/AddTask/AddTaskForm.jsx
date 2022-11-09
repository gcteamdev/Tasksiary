import React, { useState, useContext } from 'react';
import { TasksContext } from './TasksContext';
import './AddTask.css';

const AddTaskForm = () => {
  const [name, setName] = useState('');
  const [date, setDue] = useState('');
  const [description, SetDescription] = useState('');
  const [assign, setAssign] = useState('');

  const [tasks, setTasks] = useContext(TasksContext);

  const updateTask = (e) => {
    setName(e.target.value);
  };
  const updateDescription = (e) => {
    SetDescription(e.target.value);
  }
  const updateAssigned = (e) => {
    setAssign(e.target.value);
  };

  const updateduedate = (e) => {
    setDue(e.target.value);
  };

  const addNewTasks = (e) => {
    e.preventDefault();
    setTasks((previousTasks) => [
      ...previousTasks,
      { name: name, date: date, assign: assign, description: description },
    ]);
    
    setName('');
    setAssign('');
    setDue('');
    SetDescription('');
    alert("Tasks successfully Added! Create new or close window")
  };

  return (
    <form
      className="form text-left p-2 col-md-12 rounded mt-5 "
      onSubmit={addNewTasks}
    >
      <level className="text-left new-task">Task name</level>
      <input
        className="rounded col-12"
        type="text"
        name="name"
        placeholder="Add a task"
        value={name}
        onChange={updateTask}
        required
        maxLength={30}
      />
      <br></br>
      <level className="text-left">Due date</level>
      <br></br>
      <input
        className="col-12 rounded"
        name="date"
        value={date}
        placeholder="Task due date"
        type="date"
        onChange={updateduedate}
        required
      />
      <br></br>
      <level className="text-left">Details</level>
      <textarea
       className="rounded col-12"
       type="text"
       name="description"
       placeholder="Add task notes..."
       value={description}
       onChange={updateDescription}
       required
       maxLength={150}
      />
      <br></br>
      <level> Task Assigned to</level> <br></br>
      <input
        className="rounded col-12 "
        type="text"
        name="assign"
        placeholder="Assigned to..."
        value={assign}
        onChange={updateAssigned}
        maxLength={22}
      />
      <br></br>
      <button type="submit" className="save mt-2">
        Save Task
      </button>
    </form>
  );
};

export default AddTaskForm;
