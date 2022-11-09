import React, { useContext } from 'react';
//import {nanoid} from "nanoid";
import Task from './Task';
import { TasksContext } from './TasksContext';

const TasksList = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <div>
      {tasks.map((task,key) => (
        <Task
          name={task.name}
          assign={task.assign}
          date={task.date}
          description={task.description}
          key={key}
        />
      ))}
    </div>
  );
};

export default TasksList;
