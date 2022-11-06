import React, { useState, createContext } from 'react';
//import {nanoid} from "nanoid";
export const TasksContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([
    /*  {
        name:"Create task-manager",
        date: "09/05/2022",
        assign:"Hamza Dev"

      } */
  ]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
