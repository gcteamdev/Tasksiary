import React from "react";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
import "./style.css";


const TodoList = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
  InProgressTodos,
  setProgressTodos
}) => {
  return (
    <div className="container todo-wrapper">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos box-1 ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
           <div className="task-box-header"> 
           <span className="todos__heading">To Do Tasks</span>
             <div className="num"> {todos.length}</div> 
           </div>
        <div className="card-holder">
              
          {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}

          </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosInProgress">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  box-2 ${
              snapshot.isDraggingOver ? "dragprogress" : ""
            }`} 
          >
           <div className="task-box-header"> 
          <span className="todos__heading">In Progress</span>
           <div className="num"> {InProgressTodos.length}</div> 
           </div>
            <div className="card-holder">
            {InProgressTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={InProgressTodos} 
                todo={todo}
                key={todo.id}
                setTodos={setProgressTodos}
              />
            ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
             className={`todos box-3 ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`} 
          >
           <div className="task-box-header">
           <span className="todos__heading">Completed</span>
            <div className="num"> {CompletedTodos.length}</div>
           </div>
            <div className="card-holder">
            {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;