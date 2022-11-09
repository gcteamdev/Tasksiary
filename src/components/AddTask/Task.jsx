import React from 'react';
import './Task-Card.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachmentIcon from '@mui/icons-material/Attachment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const Task = ({ name, assign, date,description }) => {
  return (
    <div className="card task-card ">
      <div className="card-header">
        <div className="card-header1">
          <h6 className="task-type">Overview</h6>
          <MoreHorizIcon />
        </div>
        <div className="card-header1">
          <h5 className="task-name"> {name}</h5>
          <h6 className="card-date">{date}</h6>
        </div>
      </div>
      <div className="card-body">
        <p className="task-description">{description}</p>
        <h6 className="assignTo">
          <div> {assign} </div>
          <div className="assignPlus"> + </div>
        </h6>

      </div>
      <div className="card-footer">
         <div className="footer-icon"> < AttachmentIcon/></div>
          <div className="footer-icon"><ChatBubbleOutlineIcon/></div>
      </div>
      
    </div>
  );
};

export default Task;
