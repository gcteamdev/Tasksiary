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

function DailyTasks() {
  const id = nanoid();
  const [tasks,setTasks] = useContext(TasksContext);
  const [popup, SetPopup] = useState(false);
  const handleAddTask = () => {
    SetPopup(!popup);
  };
  const handleClosePop = () => {
    SetPopup(false);
  };

  //function for dnd
  const dragEnd = (result) => {
    console.log(result);

    if (!result.destination) return;
    const items = Array.from(tasks);
    const [recorderData] = items.splice(result.source.index,1);
    items.splice(result.destination.index,0,recorderData);
    setTasks(items);

  };

  return (
    <div className="dailyTask-P">
      <DragDropContext  onDragEnd={dragEnd}>
        <Droppable
          droppableId={`droppable${id}`}
          direction="vertical"
          type="column"
        >
          {(provided) => (
            <div
              className="my-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
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
                <div className="taskCtn1">
                  <div className="cards-box">
                    <div className="innerHeading">
                      <h6> To Do Tasks</h6>
                      <div className="num">{tasks.length} </div>
                    </div>
                    <div className="cardsHolder">
                      <TasksList />
                    </div>
                  </div>
                  <h6 className="AddTaskSign" onClick={handleAddTask}>
                    + Add Task
                  </h6>
                </div>
                <div className="taskCtn2">
                  <div className="cards-box">
                    <div className="innerHeading">
                      <h6> In Progress</h6>
                      <div className="num">0 </div>
                    </div>
                    <div className="cardsHolder">{/* <TasksList /> */}</div>
                  </div>
                  <h6 className="AddTaskSign">+ Add Task</h6>
                </div>
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

              {/*  //so don't bleeed on bottom */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DailyTasks;
