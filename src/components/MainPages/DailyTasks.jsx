import React from 'react';
import AddTaskForm from "../AddTask/AddTaskForm";
import TasksList from '../AddTask/TaskList';
import './DailyTasks.css'

function DailyTasks() {
  return (
    <div calssName="page dailyTask-P">
      <h1>DailyTasks</h1>
          <AddTaskForm/>
          <TasksList/>
    </div>
  )
}

export default DailyTasks