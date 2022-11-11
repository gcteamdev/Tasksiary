import React, { useState, createContext } from 'react';
//import {nanoid} from "nanoid";
export const TasksContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([
  /*   --below json is for css purpose only-- */
 
       
  ]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
