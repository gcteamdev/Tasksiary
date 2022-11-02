import React from 'react';
import "./StylePages.css";


function Homepage() {
  return (
    <div className="page">
      <div className="header">
      <h1> Welcome! to Homepage</h1>
      <h6> Header</h6>
      </div>
      
      <div className="containers">
        <div className="container1">
          <div className="projects-snap">
           <h3>Projects</h3> 
          </div>
          <div className="dashboard-snap">
          <h3>Dashboard</h3>  
          </div>
        </div>
        <div classNameName="container2">
          <div className="team-snap">
          <h3>Team Members</h3> 
          </div>
          <div className="myTasks-snap">
          <h3>My Tasks</h3> 
          </div>
        </div>
        <div classNameName="container3">
          <div className="calender-snap">
          <h3>Calender</h3> 
          </div>
          <div className="inbox-snap">
          <h3>Inbox</h3> 
          </div>
          <div className="chat-snap">
          <h3>Chat</h3> 
          </div>
        </div>
       

      </div>
    </div>
    
  )
}

export default Homepage