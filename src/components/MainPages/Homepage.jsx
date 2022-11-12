import React from 'react';
import './HomePage.css';
import '@fontsource/barlow';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
//import AddTaskIcon from '@mui/icons-material/AddTask';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Homepage() {/* 
  const [tasks] = useContext(TasksContext); */
  return (
    <div className="page">
      <div className="header">
        <h1 className="welcome"> Welcome, Jose</h1>
        <h6> Header</h6>
      </div>
      {/* Below are the componenets of Homepage flexbox is undone, need more work! */}
      <div className="containers">
        <div className="container1">
          <div className="projects-snap">
            <div className="project-header d-md-block d-lg-flex">
              <h5 className="projects">Projects</h5>
              <h6 className="num">November 2022</h6>
            </div>

            <div className="status-outer mt-lg-2">
              <div className="status  d-md-block d-lg-flex col-lg-12  overflow-hidden">
                <div>
                  <div className="num">{/* {tasks.length} */}</div>
                  <h6 className="text-dark">In Progress </h6>
                </div>
                <div>
                  <div className="num">N/A</div>
                  <h6 className="text-dark">Completed</h6>
                </div>
                <div>
                  <div className="num">N/A</div>
                  <h6 className="text-dark">Upcoming</h6>
                </div>
                <div>
                  <div className="num">{/* {tasks.length} */}</div>
                  <h6 className="text-dark">Total</h6>
                </div>
              </div>
              <div className="toogleAndDash">
               {/*  <div>
                  <AddTaskIcon />
                </div> */}
                <div>
                  <GridViewOutlinedIcon />
                </div>
                 <div >
                  <MenuTwoToneIcon />
                </div> 
              </div>
            </div>
            <div className="project-TaskSnaps">
             {/*  {!tasks.length ? (
                <MessageAddTask />
              ) : (
                <div>
                  <h6 className="num">Todo</h6>
                  <TasksList2 />
                </div>
              )} */}
            </div>
          </div>
          <div className="dashboard-snap">
            <div className="project-header d-md-block d-lg-flex">
              <h5 className="projects">Dashboard</h5>
              <div className=" dashboard-header">
                <h6 className="num">November 7, 2022</h6>

                <button className="dBoard-AddTask">
                 
                  <span className="plusBtn">
                  
                    <AddCircleOutlineIcon />
                  </span>
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container2 ">
          <div className="calender-snap">
            <h3>Calender</h3>
          </div>
          <div className="inbox-snap">
            <h3>Team Members</h3>
            <h5>contact/ Team members</h5>
          </div>
          <div className="chat-snap">
            <h3>Chat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
