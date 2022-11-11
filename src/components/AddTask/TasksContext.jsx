import React, { useState, createContext } from 'react';
//import {nanoid} from "nanoid";
export const TasksContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [inprogressTodos, setPrgressTodos] = useState([]);

  return (
    <TasksContext.Provider value={[tasks, setTasks, inprogressTodos,setPrgressTodos]}>
      {props.children}
    </TasksContext.Provider>
  );
};
