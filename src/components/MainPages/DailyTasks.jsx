import React, { useEffect } from 'react';
import './DailyTasks.css';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
//import { nanoid } from 'nanoid';
import InputField from '../AddTask/InputField';
import TodoList from '../AddTask/TodoList';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import SearchIcon from '@mui/icons-material/Search';

  //get storage
  const getLocalTodos= ()=>{
    let list = localStorage.getItem('lists');
    console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
      //else we will keep todos useState as [];
    }
    }
   

function DailyTasks() {
  const [todo, setTodo] = useState('');
  const [todoName, setTodoName] = useState('');
  const [taskType, setType] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [todoAssigned, setAssigned] = useState('');
  /* const [todos, setTodos] = useState([]); */
  //will be manupulated to get local Storage
  const [todos, setTodos] = useState(getLocalTodos());
  //const [InProgressTodos, setProgressTodos] = useState([]);
  const [InProgressTodos, setProgressTodos] = useState([]);
  const [CompletedTodos, setCompletedTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          todoName,
          taskType,
          dueDate,
          todoAssigned,
          isDone: false,
        },
      ]);
      setTodo('');
      setTodoName('');
      setAssigned('');
      setDueDate('');
      setType('');
      alert("Task successfully added. You may close the window or add more!")
    }
  };
  //modal add to do task.
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
    let active = todos;
    let progress = InProgressTodos;
    let complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === 'TodosInProgress') {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === 'TodosInProgress') {
      progress.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setProgressTodos(progress);
    setCompletedTodos(complete);
    setTodos(active);
  };

  //add data to localStorage 
  useEffect(() =>{
    localStorage.setItem('lists', JSON.stringify(todos))
  }, [todos])


  return (
    <div className="dailyTask-P">
      <DragDropContext onDragEnd={onDragEnd}>
        <nav
          className="navbar navbar-expand-lg  bg-white d-sm-none d-lg-flex "
          id="header-nav"
        >
          <div className="collapse navbar-collapse">
            <form className="form-inline my-2 my-lg-0 d-flex" id="search-form">
              <button className="btn btn-outline my-2 my-sm-0" type="submit">
                <SearchIcon />
              </button>
              <input
                className="form-control mr-sm-2 bg-transparent"
                type="search"
                placeholder="Search a task"
              />
            </form>
          </div>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link num"  href="#">Sort</a>
            </li>
            <li className="nav-item">
              <a className="nav-link num" href="#">Dashboard</a>
            </li>
            <li className="nav-item ">
              <button className="nav-link nav-addTask" onClick={handleAddTask}>
                New Task
              </button>
            </li>
          </ul>
        </nav>

        {/* Popup for Add task */}
        {popup ? (
          <div className="popupCtn">
            <InputField
              todo={todo}
              setTodo={setTodo}
              todoName={todoName}
              setTodoName={setTodoName}
              dueDate={dueDate}
              setDueDate={setDueDate}
              taskType={taskType}
              setType={setType}
              todoAssigned={todoAssigned}
              setAssigned={setAssigned}
              handleAdd={handleAdd}
            />
            <button onClick={handleClosePop} className="close-pop">
              {' '}
              Close
            </button>
          </div>
        ) : (
          ''
        )}

        <div className="dailyTask-P-inner">
          <div className="dailyTask-Header">
            <div className="header-sideCtn">
              <TaskOutlinedIcon />
              <h3 className="Tasks-Heading "> Daily Tasks</h3>
            </div>

            {/* 
            <h6 className="AddTaskSign" onClick={handleAddTask}>
                    + Add Task
             </h6>

 */}

            <div className="header-sideCtn">
              <GroupAddIcon />
              <h6 className="Tasks-Heading"> Team Members (4)</h6>
            </div>
          </div>
          <div className="todoListsCtn">
            <TodoList
              todos={todos}
              setTodos={setTodos}
              InProgressTodos={InProgressTodos}
              setProgressTodos={setProgressTodos}
              CompletedTodos={CompletedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default DailyTasks;
