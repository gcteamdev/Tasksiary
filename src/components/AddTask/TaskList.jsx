import React, { useContext } from 'react';
//import {nanoid} from "nanoid";
import Task from './Task';
import { TasksContext } from './TasksContext';

const TasksList = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <div>
      {tasks.map((task) => (
        <Task
          name={task.name}
          assign={task.assign}
          date={task.date}
          key={task.id}
        />
      ))}
      ;
    </div>
  );
};

export default TasksList;
