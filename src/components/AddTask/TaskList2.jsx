import React, { useContext } from 'react';
//import {nanoid} from "nanoid";
import Task2 from './Task2';
import { TasksContext } from './TasksContext';
import "./TaskList2.css"

const TasksList2 = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <div className="TasklisterCtn">
      {tasks.map((task,index) => (
        <Task2
          name={task.name}
          assign={task.assign}
          date={task.date}
          key={index}
        />
      ))}
    </div>
  );
};

export default TasksList2;
