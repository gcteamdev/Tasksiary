import React from 'react';
import './DailyTasks.css';
import { useState } from 'react';
import { DragDropContext} from 'react-beautiful-dnd';
import { nanoid } from 'nanoid';
import InputField from '../AddTask/InputField';
import TodoList from '../AddTask/TodoList';


function DailyTasks() {
  const id = nanoid();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [CompletedTodos, setCompletedTodos] = useState([]);



  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

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
    let complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };
  return (
    <div className="dailyTask-P">

  <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
    
    </div>
  );
}

export default DailyTasks;
