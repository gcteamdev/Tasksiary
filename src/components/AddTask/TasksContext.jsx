import React, { useState, createContext } from 'react';
//import {nanoid} from "nanoid";
export const TasksContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([
  /*   --below json is for css purpose only-- */
   /*  {
        name:"Introduction Meeting",
        date: "09/05/2022",
        assign:"Hamza"

      } ,
      {
        name:"Advertisement Design",
        date: "09/05/2022",
        assign:"Ever"

      },
      {
        name:"Introduction Meeting",
        date: "09/05/2022",
        assign:"Hamza"

      } ,
      {
        name:"Advertisement Design",
        date: "09/05/2022",
        assign:"Ever"

      }, */
  ]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
