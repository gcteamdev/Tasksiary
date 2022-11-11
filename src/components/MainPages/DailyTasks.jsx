import React from 'react';
import AddTaskForm from '../AddTask/AddTaskForm';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TasksList from '../AddTask/TaskList';
import './DailyTasks.css';
import { useContext, useState } from 'react';
import { TasksContext } from '../AddTask/TasksContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { nanoid } from 'nanoid';
import Inprogress from './Inprogress';


function DailyTasks() {
  const id = nanoid();
  const [tasks, setTasks, inprogressTodos, setPrgressTodos] =
    useContext(TasksContext);
  const [popup, SetPopup] = useState(false);
  const handleAddTask = () => {
    SetPopup(!popup);
  };
  const handleClosePop = () => {
    SetPopup(false);
  };

  //function for dnd
  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = tasks;
    let complete = inprogressTodos;
    // Source Logic
    if (source.droppableId === `droppableTODO${id}`) {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === `droppableTODO${id}`) {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setPrgressTodos(complete);
    setTasks(active);
  };

  return (
    <div className="dailyTask-P">
      <DragDropContext onDragEnd={onDragEnd}>
        {popup ? (
          <div className="popupCtn">
            <AddTaskForm />
            <button onClick={handleClosePop} className="close-pop">
              {' '}
              close
            </button>
          </div>
        ) : (
          ''
        )}
        <div className="dailyTask-Header">
          <div className="header-sideCtn">
            <TaskOutlinedIcon />
            <h3 className="Tasks-Heading"> Daily Tasks</h3>
          </div>
          <div className="header-sideCtn">
            <GroupAddIcon />
            <h6 className="Tasks-Heading"> Team Members (4)</h6>
          </div>
        </div>
        <div className="taskContainer">
          <Droppable
            droppableId={`droppableTODO${id}`}
           /*  direction="horizontal"
            type="row" */
          >
            {(provided) => (
              <div
                className="my-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className="taskCtn1">
                  <div className="cards-box">
                    <div className="innerHeading">
                      <h6> To Do Tasks</h6>
                      <div className="num">{tasks.length}</div>
                    </div>
                    <div className="cardsHolder">
                      <TasksList />
                    </div>
                  </div>
                  <h6 className="AddTaskSign" onClick={handleAddTask}>
                    + Add Task
                  </h6>
                </div>

                {/*  //so don't bleeed on bottom */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable
            droppableId={`droppableINPROGRESS${id}`}
      /*       direction="horizontal"
            type="row" */
          >
            {(provided) => (
              <div
                className="my-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className="taskCtn2">
                  <div className="cards-box">
                    <div className="innerHeading">
                      <h6> In Progress</h6>
                      <div className="num">0 </div>
                    </div>
                    <div className="cardsHolder">
                   < Inprogress/>
                    </div> 
                  </div>
                  <h6 className="AddTaskSign">+ Add Task</h6>
                </div>

                {/*  //so don't bleeed on bottom */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <div className="taskCtn3">
            <div className="cards-box">
              <div className="innerHeading">
                <h6> Completed</h6>
                <div className="num">0 </div>
              </div>
            </div>
            <h6 className="AddTaskSign">+ Add Task</h6>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default DailyTasks;
