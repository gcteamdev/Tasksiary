import React from 'react';
import './Task-Card.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Task2 = ({ name, assign, date }) => {
  return (
    <div className="card task-card task-card2 ">
      <div className="card-header">
        <div className="card-header1">
          <h6 className="task-type">Overview</h6>
          <MoreHorizIcon />
        </div>
        <div className="card-header1 d-block ">
          <h6 className="task-name2"> {name}</h6>
          <h6 className="card-date">{date}</h6>
        </div>
        
      </div>
      <div className="card-body task2-description">
        
        

      </div>
      <div className="card-footer">
         <h6 className="assignTo">
          <div> {assign} </div>
          <div className="assignPlus"> + </div>
        </h6>
          <div className="footer-icon"> Low</div>
      </div>
      
    </div>
  );
};

export default Task2;
