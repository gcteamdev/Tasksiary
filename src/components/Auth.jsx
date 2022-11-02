import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from './Navigation/Sidebar';
import Homepage from './MainPages/Homepage';
import Inbox from './MainPages/Inbox';
import Dashboard from './MainPages/Dashboard';
import DailyTasks from './MainPages/DailyTasks';
import Team from './MainPages/Team';
import Marketing from './MainPages/Departments/Marketing';
import Sales from './MainPages/Departments/Sales';
import HR from './MainPages/Departments/HR';
import "./Navigation/Sidebar";

function Auth() {
  return (  
      
  <BrowserRouter>
   <Sidebar>
     <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dailyTasks" element={<DailyTasks/>} />
        <Route path="/inbox" element={<Inbox/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/marketing" element={<Marketing/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/hr" element={<HR/>} />
   
     </Routes>
   </Sidebar>
  </BrowserRouter>

    
  )
}

export default Auth