import React from 'react';
import noTodos from "../assets/Home/virtuoso_pose.png";
import "./Task-Card.css"

function MessageAddTask() {
  return (<div className="messageDiv">
    <img className="noTodo" src={noTodos} alt="no-Tasks" />
    <h6 className="noTodo-Text">!!!Woohoo, To do's are zero!
    <br></br>
    <span className="text-muted"> You have no Tasks in Backlog</span></h6>
  </div>
    
  )
}

export default MessageAddTask