import React, { useContext} from 'react';
import Task from '../AddTask/Task';
import { TasksContext } from "../AddTask/TasksContext"
import { nanoid } from 'nanoid';
import { Draggable } from 'react-beautiful-dnd';
import { Col } from 'react-bootstrap'; 

function Inprogress() {
  const [inprogressTodos, setPrgressTodos]= useContext(TasksContext);
 // const id = nanoid();

  return (
   
  <div>
     {inprogressTodos?.map((task, id) => (
         <Draggable key={task.id} draggableId={`draggable-Inprog${id}`} index={id}>
         {(provided) => (
             <Col
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
             > 
        
              <Task
                name={task.name}
                assign={task.assign}
                date={task.date}
                description={task.description}
                id={id}
                tasks={inprogressTodos}
                setTasks={setPrgressTodos}
              />

             </Col>
          
          )}
       
        
           </Draggable> 
        ))}
   
    </div>
 
  )
}

export default Inprogress;
