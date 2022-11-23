import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';
import AttachmentIcon from '@mui/icons-material/Attachment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const SingleTodo = ({ index, todo, todos, setTodos }) => {
  /* {props that are came here: todo list's, mapped task and its index } */
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  //const [editTodoName, setEditTodoName] = useState(todoName.todoName);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
    if (edit) alert('Please press enter to Save, once done editing task!');
  }, [edit]);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(
      /* if todo.id = selected todo id the keep what was already there ...todo and edit that Else let it be */
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`}
        >
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-block num">
                <div className="task-type">{todo.taskType}</div>
                <div className="card-header">
                   {todo.todoName}{' '}
                   {/* not todoName.todoName, becasue ~todo is from todos.map(~todo,index) */}
                </div>

              </div>
              <div className="d-block delete-dueDate">
              <div>
                <span
                   className="icon delete"
                  onClick={() => handleDelete(todo.id)}
                >
                <AiFillDelete />
                </span>
              </div>
             <div className="num date"> {todo.dueDate}</div>
              </div>
            </div>

            {/* Edit Task description */}

            {edit ? (
              <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="todos__single--text"
                ref={inputRef}
              />
            ) : todo.isDone ? (
              <s className="todos__single--text">{todo.todo}</s>
            ) : (
              <span className="todos__single--text">
                <div className="card-body">{todo.todo}</div>

                {/* Assign and icons */}
                <div className="num">{todo.todoAssigned}</div>

                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span
                        className="card-icon"
                        onClick={() => {
                          if (!edit && !todo.isDone) {
                            setEdit(!edit);
                          }
                        }}
                      >
                        <AiFillEdit />
                      </span>

                      <span
                        className="card-icon"
                        onClick={() => handleDone(todo.id)}
                      >
                        <MdDone />
                      </span>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    id="card-boottom-items"
                  >
                    <div>
                      <AttachmentIcon />
                    </div>
                    <div>
                      <ChatBubbleOutlineIcon />
                    </div>
                  </div>
                </div>
              </span>
            )}
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
