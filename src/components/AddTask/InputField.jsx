import React,{useRef} from "react";
import "./style.css";


const InputField= ({ todo, setTodo, todoName, setTodoName, todoAssigned, taskType, setType, dueDate, setDueDate, setAssigned, handleAdd  }) => {
   const inputRef = useRef(null);

  return (
    <form
      className="form"
       onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }} 
    >
      <div>
      <input
        type="text"
        placeholder="Task type, e.g: Overview/ Research..."
        value={taskType}
        onChange={(e) => setType(e.target.value)}
        className="input-box1"
        required
        maxLength={18}
      />
      </div>
      <br></br>
     <div>
     <input
        type="text"
        placeholder="Task name..."
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        className="input-box2"
        required
        maxLength={30}
      />
     </div>
     <br></br>
      <input
        type="text"
        placeholder="Enter a task description..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input-box3"
        required 
        maxLength={150}
      />
      <div>
      <br></br>
      <input
        placeholder="Enter due date!"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="input-box4"
        type="datetime-local"
        required
      />
      </div>
      <br></br>
      <div>
      <input
        type="text"
        placeholder="Assigned to.."
        value={todoAssigned}
        onChange={(e) => setAssigned(e.target.value)}
        className="input-box5"
        required
        maxLength={30}
      />
      </div>
      <button type="submit" className="input_submit">
        +
      </button>
    </form>
  );
};

export default InputField;