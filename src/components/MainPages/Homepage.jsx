import React from 'react';
import './HomePage.css';
import TaskIcon from '@mui/icons-material/Task';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import addtask from "../assets/Home/addTask.png";
import { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';


function Homepage() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
}, []);
//calender
const [myEvents, setEvents] = React.useState([]);

React.useEffect(() => {
    getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
        setEvents(events);
    }, 'jsonp');
}, []);

const onEventClick = React.useCallback((event) => {
    toast({
        message: event.event.title
    });
}, []);

const view = React.useMemo(() => {
    return {
        schedule: { type: 'day' }
    };
}, []);

  return (
    <div className="homepage-Ctn">
       <div className="firstCtn">
        <h1 className='overview-header'> Overview</h1>
        <div className="status">
          <br></br>
          <div className="todo">
           <div className="iconCtn"> <TaskIcon /></div>  
            Todo Tasks
            <br/>
            ds
            
          </div>
          <br/>
          <div className="break1"> <hr/></div>

          <div className="inprogress todo">
          <div className="iconCtn">  <PublishedWithChangesIcon /> </div>
            In Progress
          </div>
          <div className="break"> <hr/></div>
         
          <div className="completed todo">
         
          <div className="iconCtn">   <DoneAllIcon /> </div>
            Completed
          </div>
        </div>
        <div className="pie">
           <h4>Current Stats </h4>
           <p> Todo's</p>
           <p> Remaining Time: 36hrs</p>
            </div>
      </div>
     <div className="second-Ctn">
      <div className="sec-header">
        <img src={addtask} alt="add-task"  className="addTask" type="button"/>
        <h3 className="date" >
       {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'long',
                 year: 'numeric',
              })}
       <br/> <AccessTimeIcon />
       {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
        </h3>
      </div>
       <div className="calender">
       

        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            eventDelete={true}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
   






        
       </div>
     </div>
    </div>
  ); 
}

export default Homepage;
