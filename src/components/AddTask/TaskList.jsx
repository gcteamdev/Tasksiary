import React, { useContext} from 'react';
import Task from './Task';
import { TasksContext } from './TasksContext';
import { nanoid } from 'nanoid';
import { Draggable } from 'react-beautiful-dnd';
import { Col } from 'react-bootstrap'; 

function TasksList() {
  const [tasks, setTasks]= useContext(TasksContext);
  const id = nanoid();

  return (
   
  <div>
     {tasks.map((task, id) => (
         <Draggable key={task.id} draggableId={`draggable${id}`} index={id}>
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
                tasks={tasks}
                setTasks={setTasks}
              />

             </Col>
          
          )}
       
        
           </Draggable> 
        ))}
   
    </div>
 
  )
}

export default TasksList;
